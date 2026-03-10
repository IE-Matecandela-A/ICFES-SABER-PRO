
if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}



// Self-contained connection checker - works independently of everything else
(function () {
    var badge = document.getElementById('floating-status-badge');
    if (!badge) return;

    // Determine server URL
    var serverUrl = '';
    if (window.location.protocol.startsWith('http')) {
        serverUrl = window.location.origin;
    } else {
        try { serverUrl = localStorage.getItem('saber11_custom_server') || 'http://localhost:8000'; }
        catch (e) { serverUrl = 'http://localhost:8000'; }
    }

    function checkServer() {
        fetch(serverUrl + '/api/list_pdfs', { method: 'GET' })
            .then(function (res) {
                if (res.ok) {
                    badge.style.background = '#22c55e';
                    badge.style.borderColor = 'rgba(0,0,0,0.15)';
                    badge.style.boxShadow = '0 0 8px rgba(34,197,94,0.6)';
                    badge.title = '✅ Conectado a ' + serverUrl;
                } else {
                    showError('Error ' + res.status);
                }
            })
            .catch(function () {
                showError('Sin conexión');
            });
    }

    function showError(msg) {
        badge.style.background = '#ef4444';
        badge.style.borderColor = 'rgba(0,0,0,0.15)';
        badge.style.boxShadow = '0 0 8px rgba(239,68,68,0.5)';
        badge.title = '❌ ' + msg + ' — Clic para configurar IP (' + serverUrl + ')';
    }

    // Click to configure IP
    badge.onclick = function () {
        if (typeof LocalServerModule !== 'undefined' && LocalServerModule.setCustomIp) {
            LocalServerModule.setCustomIp();
        } else {
            var ip = prompt('Ingrese IP del servidor (ej: 192.168.1.5):', serverUrl.replace('http://', '').replace(':8000', ''));
            if (ip !== null && ip.trim() !== '') {
                var url = ip.trim();
                if (!url.includes(':')) url += ':8000';
                if (!url.startsWith('http')) url = 'http://' + url;
                try { localStorage.setItem('saber11_custom_server', url); } catch (e) { }
                window.location.reload();
            }
        }
    };

    // Run immediately and every 5 seconds
    checkServer();
    setInterval(checkServer, 5000);
})();



// ============ NOTIFICATION SYSTEM ============
const NotificationModule = {
    show(message, type = 'info', duration = 4000) {
        const container = document.getElementById('notification-container');
        if (!container) return;

        const notification = document.createElement('div');

        // Color mapping
        let bgColor = 'var(--color-surface)';
        let iconColor = 'var(--color-primary)';
        let icon = 'ℹ️';

        switch (type) {
            case 'success':
                bgColor = 'rgba(16, 185, 129, 0.1)';
                iconColor = 'var(--color-success)';
                icon = '✅';
                break;
            case 'error':
                bgColor = 'rgba(239, 68, 68, 0.1)';
                iconColor = 'var(--color-danger)';
                icon = '❌';
                break;
            case 'warning':
                bgColor = 'rgba(234, 179, 8, 0.1)';
                iconColor = 'var(--color-warning)';
                icon = '⚠️';
                break;
            case 'info':
                bgColor = 'rgba(59, 130, 246, 0.1)';
                iconColor = 'var(--color-info)';
                icon = 'ℹ️';
                break;
        }

        notification.style.cssText = `
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    -webkit-backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                    border-left: 4px solid ${iconColor};
                    padding: 16px 20px;
                    border-radius: 8px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    transform: translateX(120%);
                    opacity: 0;
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease;
                    max-width: 400px;
                    color: var(--color-text);
                    font-size: 0.95rem;
                `;

        notification.innerHTML = `
                    <div style="font-size: 1.2rem;">${icon}</div>
                    <div style="flex: 1; word-wrap: break-word; line-height: 1.4;">${message}</div>
                    <button style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: var(--color-text-muted); padding: 0; opacity: 0.7; transition: opacity 0.2s;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.7'">×</button>
                `;

        const closeBtn = notification.querySelector('button');
        closeBtn.onclick = () => this.close(notification);

        container.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.style.transform = 'translateX(0)';
            notification.style.opacity = '1';
        });

        // Auto close
        if (duration > 0) {
            setTimeout(() => {
                this.close(notification);
            }, duration);
        }
    },

    close(notification) {
        notification.style.transform = 'translateX(120%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300); // Matches transition duration
    }
};

// Override default alert
window.alert = function (message) {
    NotificationModule.show(message, 'info');
};

// ============ ROUTER ============
var Router = {
    go(view) {
        if (view === 'teacher' || view === 'admin') {
            const userRole = AuthModule.currentUser ? AuthModule.currentUser.role : 'estudiante';
            if (userRole !== 'docente') {
                const pwd = prompt('Ingrese la contraseña de acceso (Administrador):');
                if (pwd !== '5050') {
                    alert('Contraseña incorrecta. Acceso denegado.');
                    return;
                }
            }
        }

        document.querySelectorAll('.view-section').forEach(v => {
            v.classList.add('hidden');
            v.classList.remove('active');
            v.style.display = ''; // Clear inline display override
        });
        const viewEl = document.getElementById(`view-${view}`);
        if (viewEl) {
            viewEl.classList.remove('hidden');
            if (view === 'config') ConfigModule.init();
            if (view === 'teacher' && typeof TeacherModule !== 'undefined') TeacherModule.init();
            if (view === 'admin' && typeof AdminPanelModule !== 'undefined') AdminPanelModule.init();
            if (view === 'global-results' && typeof GlobalResultsModule !== 'undefined') GlobalResultsModule.init();

            // Safe check for VirtualTeacherModule since it's defined with `const` later in the file
            if (window.VirtualTeacherModule) {
                window.VirtualTeacherModule.onViewChange(view);
            }
        }

        // Show gamification bar only on home screen
        const authBar = document.getElementById('user-auth-container');
        if (authBar) authBar.style.display = (view === 'home') ? '' : 'none';

        // Handle scrolling exclusively for home
        if (view === 'home') {
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.height = '100vh';
            document.body.style.overflow = 'hidden';
            document.body.style.height = '100vh';
            if (viewEl) {
                viewEl.style.height = '100vh';
                viewEl.style.overflowY = 'auto';
            }
        } else {
            document.documentElement.style.overflow = 'auto';
            document.documentElement.style.height = 'auto';
            document.body.style.overflow = 'auto'; // Re-enable vertical scroll
            document.body.style.overflowX = 'hidden'; // Keep X hidden globally
            document.body.style.height = 'auto';
            if (viewEl) {
                viewEl.style.height = 'auto';
                viewEl.style.overflowY = 'visible';
            }
        }
    }
};

// ============ CONFIG MODULE ============
const ConfigModule = {
    config: {
        areas: [],
        numQuestions: 10,
        timeMinutes: 30,
        practice: false
    },

    areaConfig: {
        matematicas: { icon: '📐', name: 'Matemáticas', color: '129,140,248', gradient: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(129,140,248,0.05))' },
        lectura: { icon: '📖', name: 'Lectura Crítica', color: '244,114,182', gradient: 'linear-gradient(135deg, rgba(244,114,182,0.15), rgba(244,114,182,0.05))' },
        ciencias: { icon: '🔬', name: 'Ciencias Naturales', color: '52,211,153', gradient: 'linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))' },
        sociales: { icon: '🌎', name: 'Sociales', color: '251,146,60', gradient: 'linear-gradient(135deg, rgba(251,146,60,0.15), rgba(251,146,60,0.05))' },
        ingles: { icon: '🇬🇧', name: 'Inglés', color: '56,189,248', gradient: 'linear-gradient(135deg, rgba(56,189,248,0.15), rgba(56,189,248,0.05))' },
        'simulacro pdf': { icon: '📄', name: 'Simulacro PDF', color: '239,68,68', gradient: 'linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))' }
    },

    init() {
        this.renderAreas();
        this.renderPDFExams();
        this.updateSummary();
        this.updateMode();

        // Load saved name
        const savedName = localStorage.getItem('saber11_student_name');
        if (savedName) {
            const input = document.getElementById('student-name');
            if (input) input.value = savedName;
        }
    },

    async renderPDFExams() {
        const list = document.getElementById('pdf-exam-list');

        // Show loading state initially if desired or just let it load
        list.innerHTML = `<div style="text-align: center; color: var(--color-text-muted); font-size: 0.85rem; padding: 10px;">Buscando en servidor...</div>`;

        let serverHtml = '';
        if (typeof LocalServerModule !== 'undefined') {
            try {
                const serverFiles = await LocalServerModule.getPDFs();
                if (serverFiles && serverFiles.length > 0) {
                    serverHtml = serverFiles.map(f => `
                                <div class="glass glass-hover" 
                                     style="padding: 12px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 8px; margin-bottom: 8px; background: rgba(99, 102, 241, 0.05);"
                                     onclick="PDFExamModule.startServerExam('${f.url}', '${f.name.replace('.pdf', '')}', ${f.metadata ? `'${encodeURIComponent(JSON.stringify(f.metadata))}'` : 'null'})">
                                    <div style="display: flex; align-items: center; gap: 12px;">
                                        <div style="font-size: 1.5rem;">☁️</div>
                                        <div>
                                            <div style="font-weight: 600; color: var(--color-text); line-height: 1.2;">${f.name.replace('.pdf', '')}</div>
                                            <div style="font-size: 0.75rem; color: var(--color-primary-light); margin-top: 2px;">
                                                Servidor Local • ${f.metadata && f.metadata.questionsCount ? f.metadata.questionsCount + ' preguntas • ' : ''}${f.size}
                                            </div>
                                        </div>
                                    </div>
                                    <div style="font-size: 1.2rem; color: var(--color-primary);">▶</div>
                                </div>
                            `).join('');
                }
            } catch (e) {
                console.error('Error loading server PDFs', e);
            }
        }

        const localExams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
        let localHtml = '';

        if (localExams.length > 0) {
            localHtml = localExams.map(exam => `
                        <div class="glass glass-hover" 
                             style="padding: 12px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; border: 1px solid var(--color-border); border-radius: 8px; margin-bottom: 8px;"
                             onclick="PDFExamModule.startExam('${exam.id}')">
                            <div style="display: flex; align-items: center; gap: 12px;">
                                <div style="font-size: 1.5rem;">📄</div>
                                <div>
                                    <div style="font-weight: 600; color: var(--color-text); line-height: 1.2;">${exam.title}</div>
                                    <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 2px;">
                                        ${exam.questionsCount} preguntas • Local
                                    </div>
                                </div>
                            </div>
                            <div style="font-size: 1.2rem; opacity: 0.5;">▶</div>
                        </div>
                    `).join('');
        }

        if (!serverHtml && !localHtml) {
            list.innerHTML = `
                    <div style="text-align: center; color: var(--color-text-muted); font-size: 0.9rem; padding: 20px;">
                        No hay simulacros PDF disponibles.<br><span style="font-size:0.75rem;">(El profesor debe subirlos al servidor)</span>
                    </div>`;
            return;
        }

        list.innerHTML = serverHtml + localHtml;
    },

    renderAreas() {
        const grid = document.getElementById('area-grid');
        grid.innerHTML = '';

        Object.keys(this.areaConfig).forEach(areaKey => {
            const area = this.areaConfig[areaKey];
            const selected = this.config.areas.includes(areaKey);

            const btn = document.createElement('div');
            btn.className = `area-btn ${selected ? 'selected' : ''}`;
            btn.style.background = selected ? area.gradient : 'var(--color-surface)';
            btn.style.borderColor = selected ? `rgba(${area.color}, 0.5)` : 'var(--color-border)';
            btn.style.boxShadow = selected ? `0 4px 20px rgba(${area.color}, 0.15)` : 'none';

            btn.innerHTML = `
                        <span style="font-size: 1.8rem;">${area.icon}</span>
                        <span style="font-size: 0.78rem; font-weight: 600; color: ${selected ? 'var(--color-text)' : 'var(--color-text-muted)'};">${area.name}</span>
                        <div class="area-indicator" style="background: ${selected ? `rgb(${area.color})` : 'var(--color-border)'}"></div>
                    `;

            btn.onclick = () => this.toggleArea(areaKey);
            grid.appendChild(btn);
        });
    },

    toggleArea(area) {
        if (this.config.areas.includes(area)) {
            this.config.areas = this.config.areas.filter(a => a !== area);
        } else {
            this.config.areas.push(area);
        }
        this.renderAreas();
        this.updateSummary();
        if (this.config.mode === 'study') this.updateStudyCount();
    },

    selectMode(modeId) {
        this.config.mode = modeId;
        this.updateMode();
        this.updateSummary();
    },

    updateMode() {
        const examBtn = document.getElementById('mode-exam');
        const practiceBtn = document.getElementById('mode-practice');
        const challengeBtn = document.getElementById('mode-challenge');
        const desc = document.getElementById('mode-description');
        const timeSelector = document.getElementById('time-selector');

        const studyBtn = document.getElementById('mode-study');

        // Reset all
        [examBtn, practiceBtn, challengeBtn, studyBtn].forEach(btn => {
            if (btn) {
                btn.classList.remove('selected');
                btn.style.borderColor = 'var(--color-border)';
                btn.style.background = 'var(--color-surface)';
            }
        });

        if (this.config.mode === 'practice') {
            if (practiceBtn) {
                practiceBtn.classList.add('selected');
                practiceBtn.style.borderColor = 'rgba(16,185,129,0.5)';
                practiceBtn.style.background = 'rgba(16,185,129,0.08)';
            }
            if (desc) desc.textContent = 'Sin cronómetro, retroalimentación inmediata';
            if (timeSelector) timeSelector.style.display = 'none';

        } else if (this.config.mode === 'challenge') {
            if (challengeBtn) {
                challengeBtn.classList.add('selected');
                challengeBtn.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                challengeBtn.style.background = 'rgba(239, 68, 68, 0.08)';
            }
            if (desc) desc.textContent = 'Alta presión: ¡90 segundos por pregunta!';
            if (timeSelector) timeSelector.style.display = 'none';
            const numSelector = document.getElementById('num-questions-selector');
            if (numSelector) numSelector.style.display = 'block';
            const rangeSelector = document.getElementById('study-range-selector');
            if (rangeSelector) rangeSelector.style.display = 'none';

        } else if (this.config.mode === 'study') {
            if (studyBtn) {
                studyBtn.classList.add('selected');
                studyBtn.style.borderColor = 'rgba(245, 158, 11, 0.5)';
                studyBtn.style.background = 'rgba(245, 158, 11, 0.08)';
            }
            if (desc) desc.textContent = 'Estudio secuencial guiado por el docente.';
            if (timeSelector) timeSelector.style.display = 'none';
            const numSelector = document.getElementById('num-questions-selector');
            if (numSelector) numSelector.style.display = 'none';
            const rangeSelector = document.getElementById('study-range-selector');
            if (rangeSelector) { rangeSelector.style.display = 'block'; rangeSelector.classList.remove('hidden'); }
            this.updateStudyCount();

        } else {
            // exam
            this.config.mode = 'exam';
            if (examBtn) {
                examBtn.classList.add('selected');
                examBtn.style.borderColor = 'rgba(124,58,237,0.5)';
                examBtn.style.background = 'rgba(124,58,237,0.08)';
            }
            if (desc) desc.textContent = 'Con cronómetro, resultados al final';
            if (timeSelector) timeSelector.style.display = 'block';
            const numSelector = document.getElementById('num-questions-selector');
            if (numSelector) numSelector.style.display = 'block';
            const rangeSelector = document.getElementById('study-range-selector');
            if (rangeSelector) rangeSelector.style.display = 'none';
        }
    },

    updateSummary() {
        this.config.numQuestions = parseInt(document.getElementById('num-questions').value);
        this.config.timeMinutes = parseInt(document.getElementById('time-minutes').value);
        this.config.rangeStart = parseInt(document.getElementById('study-start').value) || 1;
        this.config.rangeEnd = parseInt(document.getElementById('study-end').value) || 10;

        const areasCount = document.getElementById('areas-count');
        if (areasCount) areasCount.textContent = `${this.config.areas.length} de 5 seleccionadas`;

        const startBtn = document.getElementById('start-btn');
        const warning = document.getElementById('warning-areas');

        if (this.config.areas.length === 0) {
            startBtn.disabled = true;
            startBtn.style.background = 'var(--color-surface-3)';
            startBtn.style.boxShadow = 'none';
            if (warning) warning.classList.remove('hidden');
        } else {
            startBtn.disabled = false;
            if (this.config.mode === 'practice') {
                startBtn.style.background = 'linear-gradient(135deg, #10b981, #34d399)';
                startBtn.style.boxShadow = '0 8px 32px rgba(16,185,129,0.35)';
                startBtn.innerHTML = '▶️ Iniciar Práctica';
            } else if (this.config.mode === 'challenge') {
                startBtn.style.background = 'linear-gradient(135deg, #ef4444, #f97316)';
                startBtn.style.boxShadow = '0 8px 32px rgba(239,68,68,0.35)';
                startBtn.innerHTML = '🔥 Iniciar Challenge';
            } else if (this.config.mode === 'study') {
                startBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
                startBtn.style.boxShadow = '0 8px 32px rgba(245,158,11,0.35)';
                startBtn.innerHTML = '🏫 Iniciar En Clase';
            } else {
                startBtn.style.background = 'linear-gradient(135deg, #7c3aed, #4f46e5, #2563eb)';
                startBtn.style.boxShadow = '0 8px 32px rgba(124,58,237,0.35)';
                startBtn.innerHTML = '▶️ Iniciar Simulacro';
            }
            if (warning) warning.classList.add('hidden');
        }

        // Update question count if in study mode
        if (this.config.mode === 'study') this.updateStudyCount();
    },

    updateStudyCount() {
        // Count available questions for the selected area(s) from the loaded DB
        let countEl = document.getElementById('study-count-info');
        if (!countEl) return;

        let localQuestions = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        let deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');
        let nativeQuestions = typeof window.NATIVE_EXAM_DATA !== 'undefined' && Array.isArray(window.NATIVE_EXAM_DATA)
            ? window.NATIVE_EXAM_DATA.filter(q => !deletedNative.includes(q.id)) : [];
        let allQ = [...localQuestions, ...nativeQuestions];

        if (this.config.areas.length === 0) {
            countEl.textContent = 'Selecciona un área para ver el total disponible';
            countEl.style.color = 'var(--color-text-muted)';
            return;
        }

        let filtered = allQ.filter(q => {
            const qArea = q.area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return this.config.areas.some(sel => {
                const ns = sel.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return qArea.includes(ns) || ns.includes(qArea);
            });
        });

        const total = filtered.length;
        const start = this.config.rangeStart || 1;
        const end = Math.min(this.config.rangeEnd || 10, total);
        const count = Math.max(0, end - start + 1);

        // Auto-fix the end input if it exceeds total
        const endInput = document.getElementById('study-end');
        if (endInput && parseInt(endInput.max) !== total) {
            endInput.max = total;
        }

        if (total === 0) {
            countEl.innerHTML = '⚠️ No hay preguntas cargadas para esa área aún';
            countEl.style.color = '#f59e0b';
        } else {
            countEl.innerHTML = `📚 <strong>${total}</strong> preguntas disponibles · Rango seleccionado: <strong>${count}</strong> pregunta${count !== 1 ? 's' : ''}`;
            countEl.style.color = 'var(--color-text-muted)';
        }
    },

    startExam() {
        if (this.config.areas.length === 0) return;

        if (this.config.mode === 'study' && this.config.areas.length !== 1) {
            NotificationModule.show('Para el Modo Estudio debes seleccionar EXACTAMENTE 1 área.', 'warning');
            return;
        }

        // Mostrar indicador de carga
        const startBtn = document.getElementById('start-btn');
        const originalText = startBtn.innerHTML;
        startBtn.innerHTML = '⏳ Cargando banco de preguntas...';
        startBtn.disabled = true;

        // Intentar cargar todas las preguntas de SABER_DB
        if (typeof SABER_DB !== 'undefined' && SABER_DB.examenes) {
            window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];

            let scriptsToLoad = SABER_DB.examenes.map(exam => {
                return new Promise((resolve) => {
                    const script = document.createElement('script');
                    script.src = exam.archivo_js;
                    script.onload = () => resolve(true);
                    script.onerror = () => {
                        console.warn('No se pudo cargar: ' + exam.archivo_js);
                        resolve(false);
                    };
                    document.body.appendChild(script);
                });
            });

            Promise.all(scriptsToLoad).then(() => {
                startBtn.innerHTML = originalText;
                startBtn.disabled = false;
                ExamEngine.init(this.config);
                Router.go('exam');
            });
        } else {
            // Fallback si no hay SABER_DB
            startBtn.innerHTML = originalText;
            startBtn.disabled = false;
            ExamEngine.init(this.config);
            Router.go('exam');
        }
    }
};

// ============ EVENT LISTENERS ============
document.getElementById('num-questions').addEventListener('change', () => ConfigModule.updateSummary());
document.getElementById('time-minutes').addEventListener('change', () => ConfigModule.updateSummary());

// ============ INIT ============
window.addEventListener('DOMContentLoaded', () => {
    Router.go('home');
});


// ============ MARKDOWN RENDERER ============
const renderMarkdown = (text) => {
    if (!text) return '';

    // 1. Tables
    let lines = text.split('\n');
    let inTable = false;
    let tableHTML = '';
    let result = [];

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        if (line.startsWith('|')) {
            if (!inTable) {
                if (line.includes('---')) continue; // Skip if first line is separator (unlikely but possible)
                inTable = true;
                tableHTML = '<div style="overflow-x: auto; margin-bottom: 16px; border: 1px solid var(--color-border); border-radius: 8px;"><table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">';
                // Header row
                let headers = line.split('|').filter(c => c.trim() !== '').map(c => c.trim());
                tableHTML += '<thead style="background: rgba(255,255,255,0.05); border-bottom: 2px solid var(--color-border);"><tr>' + headers.map(h => `<th style="padding: 10px 14px; text-align: left; font-weight: 600;">${h}</th>`).join('') + '</tr></thead><tbody>';
            } else if (line.includes('---')) {
                continue;
            } else {
                let cells = line.split('|').filter(c => c.trim() !== '').map(c => c.trim());
                if (cells.length > 0) {
                    tableHTML += '<tr style="border-bottom: 1px solid var(--color-border);">' + cells.map(c => `<td style="padding: 10px 14px;">${c}</td>`).join('') + '</tr>';
                }
            }
        } else {
            if (inTable) {
                inTable = false;
                tableHTML += '</tbody></table></div>';
                result.push(tableHTML);
                tableHTML = '';
            }
            result.push(line);
        }
    }
    if (inTable) {
        tableHTML += '</tbody></table></div>';
        result.push(tableHTML);
    }

    text = result.join('\n');

    // 2. Formatting
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 4px;">$1</code>')
        .replace(/\n/g, '<br>');
};

// ============ EXAM ENGINE ============
const ExamEngine = {
    currentIndex: 0,
    questions: [],
    answers: {},
    timeRecords: {}, // { questionId: seconds_spent }
    questionStartTime: null,
    startTime: null,
    timerInterval: null,
    examMode: 'exam',
    infractions: 0,
    securityActive: false,
    expireTime: null,

    startFastTrack() {
        if (!AuthModule.currentUser) {
            NotificationModule.show('Debes ingresar con tu cuenta para acceder al Reto Rápido.', 'warning');
            AuthUI.toggleModal();
            return;
        }

        NotificationModule.show('Generando Reto Rápido...', 'info');

        if (typeof window.SABER_DB !== 'undefined' && window.SABER_DB.examenes) {
            window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
            let scriptsToLoad = window.SABER_DB.examenes.map(exam => {
                return new Promise((resolve) => {
                    if (document.querySelector(`script[src="${exam.archivo_js}"]`)) return resolve(true);

                    const script = document.createElement('script');
                    script.src = exam.archivo_js;
                    script.onload = () => resolve(true);
                    script.onerror = () => resolve(false);
                    document.body.appendChild(script);
                });
            });

            Promise.all(scriptsToLoad).then(() => {
                this._initFastTrack();
            });
        } else {
            this._initFastTrack();
        }
    },

    _initFastTrack() {
        let deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');
        let nativeQuestions = typeof window.NATIVE_EXAM_DATA !== 'undefined' && Array.isArray(window.NATIVE_EXAM_DATA)
            ? window.NATIVE_EXAM_DATA.filter(q => !deletedNative.includes(q.id)) : [];

        if (nativeQuestions.length < 15) {
            NotificationModule.show('No hay suficientes preguntas en la base de datos.', 'error');
            return;
        }

        let shuffled = this.shuffle(nativeQuestions);
        this.questions = shuffled.slice(0, 15);
        this.currentIndex = 0;
        this.answers = {};
        this.timeRecords = {};
        this.examMode = 'fast-track';
        this.startTime = Date.now();
        this.questionStartTime = Date.now();
        this.infractions = 0;
        this.securityActive = true;
        this.expireTime = Date.now() + 15 * 60000;

        if (this.timerInterval) clearInterval(this.timerInterval);
        this.initSecurity();

        document.getElementById('total-q-num').textContent = this.questions.length;
        document.getElementById('practice-badge').style.display = 'none';
        document.getElementById('timer-display').style.display = 'flex';
        document.getElementById('timer-text').style.color = 'var(--color-primary)';
        document.getElementById('progress-bar').style.background = 'linear-gradient(90deg, #f59e0b, #ef4444)';

        Router.go('exam');
        this.renderNav();
        this.renderQuestion();
        this.startTimer(15, true);

        this.saveProgress();

        this.keyboardHandler = this.handleKeyDown.bind(this);
        window.addEventListener('keydown', this.keyboardHandler);
    },

    trackTimeOnCurrentQuestion() {
        if (!this.questions[this.currentIndex]) return;
        const qId = this.questions[this.currentIndex].id;
        const now = Date.now();
        if (this.questionStartTime) {
            const diffSeconds = Math.floor((now - this.questionStartTime) / 1000);
            this.timeRecords[qId] = (this.timeRecords[qId] || 0) + diffSeconds;
        }
        this.questionStartTime = now;
    },

    saveProgress() {
        this.trackTimeOnCurrentQuestion();
        // Save current state to localStorage
        const state = {
            currentIndex: this.currentIndex,
            questions: this.questions,
            answers: this.answers,
            timeRecords: this.timeRecords,
            examMode: this.examMode,
            expireTime: this.expireTime,
            infractions: this.infractions
        };
        localStorage.setItem('saber11_active_exam', JSON.stringify(state));

        // Save to cloud if logged in
        if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
            AuthModule.saveCloudProgress(state);
        }
    },

    clearProgress() {
        localStorage.removeItem('saber11_active_exam');
    },

    resume(state) {
        this.questions = state.questions;
        this.currentIndex = state.currentIndex || 0;
        this.answers = state.answers || {};
        this.timeRecords = state.timeRecords || {};
        this.questionStartTime = Date.now();
        this.examMode = state.examMode || 'exam';
        this.infractions = state.infractions || 0;
        this.expireTime = state.expireTime;
        this.securityActive = this.examMode !== 'practice';

        if (this.securityActive) {
            this.initSecurity();
        } else {
            this.disableSecurity();
        }

        // UI setup
        document.getElementById('total-q-num').textContent = this.questions.length;
        document.getElementById('practice-badge').style.display = this.examMode === 'practice' ? 'inline-flex' : 'none';
        document.getElementById('timer-display').style.display = this.examMode === 'practice' ? 'none' : 'flex';

        if (this.examMode === 'practice') {
            document.getElementById('progress-bar').style.background = 'linear-gradient(90deg, #10b981, #34d399)';
        } else if (this.examMode === 'challenge') {
            document.getElementById('progress-bar').style.background = 'linear-gradient(90deg, #ef4444, #f97316)';
        }

        this.renderNav();
        this.renderQuestion();

        if (this.examMode === 'exam' && this.expireTime) {
            const remainingSeconds = Math.floor((this.expireTime - Date.now()) / 1000);
            if (remainingSeconds > 0) {
                this.startTimer(remainingSeconds / 60, true);
            } else {
                // Time already expired!
                this.finishExam();
            }
        } else if (this.examMode === 'challenge') {
            this.startChallengeTimer();
        }

        // Keyboard shortcuts
        this.keyboardHandler = this.handleKeyDown.bind(this);
        window.addEventListener('keydown', this.keyboardHandler);

        Router.go('exam');
    },

    init(config) {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }

        // Reset security
        this.infractions = 0;
        this.examInvalidated = false;
        this.securityActive = config.mode !== 'practice'; // Active in exam and challenge modes

        if (this.securityActive) {
            this.initSecurity();
        } else {
            this.disableSecurity();
        }

        // Load questions from localStorage or Native DB (Combined)
        let localQuestions = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        let deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');

        let nativeQuestions = typeof window.NATIVE_EXAM_DATA !== 'undefined' && Array.isArray(window.NATIVE_EXAM_DATA)
            ? window.NATIVE_EXAM_DATA
                .filter(q => !deletedNative.includes(q.id))
                .map(q => ({
                    ...q,
                    enunciado: q.enunciado || q.texto || '',
                    tema: q.tema || q.competencia || q.componente || '',
                    tipo: q.tipo || 'standard'
                })) : [];

        let allQuestions = [...localQuestions, ...nativeQuestions];

        if (allQuestions.length === 0) {
            NotificationModule.show('No hay preguntas cargadas en la aplicación. Por favor, selecciona un simulacro PDF o carga el banco de preguntas.', 'error');
            Router.go('home');
            return;
        }

        // Filter by selected areas and shuffle
        let filtered = allQuestions.filter(q => {
            const qArea = q.area.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return config.areas.some(selectedArea => {
                const normalizedSelected = selectedArea.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                return qArea.includes(normalizedSelected) || normalizedSelected.includes(qArea);
            });
        });

        // Debug log
        if (filtered.length === 0) {
            console.warn('⚠️ No se encontraron preguntas para las áreas:', config.areas);
            console.warn('📊 Áreas disponibles en preguntas:', [...new Set(allQuestions.map(q => q.area))]);
            NotificationModule.show(`No se encontraron preguntas para las áreas seleccionadas.<br><br>Asegúrate de que las preguntas tengan los nombres de área correctos.`, 'error', 6000);
            Router.go('config');
            return;
        }

        if (config.mode === 'study') {
            const startIdx = Math.max(0, (config.rangeStart || 1) - 1);
            const endIdx = config.rangeEnd || 10;
            this.questions = filtered.slice(startIdx, endIdx);
        } else {
            // Read question tracking history
            let history = JSON.parse(localStorage.getItem('icfes_question_history') || '{}');

            // Attach view counts to each question
            filtered = filtered.map(q => ({
                ...q,
                views: history[q.id] || 0
            }));

            // 1. Shuffle first so questions with equal views are randomized
            filtered = this.shuffle(filtered);

            // 2. Sort prioritizing least views
            filtered.sort((a, b) => a.views - b.views);

            // Take requested number
            this.questions = filtered.slice(0, config.numQuestions);
        }

        this.currentIndex = 0;
        this.answers = {};
        this.timeRecords = {};
        this.examMode = config.mode || 'exam';
        this.startTime = Date.now();
        this.questionStartTime = Date.now();

        // Update UI
        document.getElementById('total-q-num').textContent = this.questions.length;
        document.getElementById('practice-badge').style.display = this.examMode === 'practice' ? 'inline-flex' : 'none';
        document.getElementById('timer-display').style.display = this.examMode === 'practice' ? 'none' : 'flex';

        if (this.examMode === 'practice') {
            document.getElementById('progress-bar').style.background = 'linear-gradient(90deg, #10b981, #34d399)';
        } else if (this.examMode === 'challenge') {
            document.getElementById('progress-bar').style.background = 'linear-gradient(90deg, #ef4444, #f97316)';
        }

        this.renderNav();
        this.renderQuestion();

        if (this.examMode === 'exam') {
            this.expireTime = Date.now() + config.timeMinutes * 60000;
            this.startTimer(config.timeMinutes);
        } else if (this.examMode === 'challenge') {
            // No global expire time, handled per question
            this.expireTime = null;
            this.startChallengeTimer();
        } else {
            this.expireTime = null;
        }

        this.saveProgress();

        // Keyboard shortcuts
        this.keyboardHandler = this.handleKeyDown.bind(this);
        window.addEventListener('keydown', this.keyboardHandler);

        // === CHIGUIRO PERIODIC REMINDERS ===
        if (this.chiguiroInterval) clearInterval(this.chiguiroInterval);
        if (this.securityActive && typeof VirtualTeacherModule !== 'undefined') {
            const examReminders = [
                { msg: '💪 ¡Vas bien! Recuerda: no salgas de la pestaña ni uses atajos. ¡Tú puedes con esto!', mood: 'happy' },
                { msg: '📖 Recuerda leer bien cada pregunta. La honestidad es tu mejor herramienta. 🦦', mood: 'neutral' },
                { msg: '⏰ Sigue con calma, tómate tu tiempo. Un examen muy rápido no será registrado. ¡Enfócate!', mood: 'neutral' },
                { msg: '🔒 Recuerda: si sales de la pestaña, tu examen no contará. ¡Quédate aquí y da lo mejor! 💪', mood: 'serious' },
                { msg: '🌟 ¡Ánimo! Cada pregunta es una oportunidad de aprender. ¡Sigue adelante! 🚀', mood: 'happy' }
            ];
            let reminderIdx = 0;
            this.chiguiroInterval = setInterval(() => {
                if (Router.currentView !== 'exam') return;
                const r = examReminders[reminderIdx % examReminders.length];
                VirtualTeacherModule.speak(r.msg, r.mood);
                reminderIdx++;
            }, 5 * 60 * 1000); // Every 5 minutes
        }
    },

    initSecurity() {
        // === VISIBILITY / BLUR DETECTION ===
        this.visibilityHandler = () => {
            if (document.hidden && Router.currentView === 'exam') {
                this.infractions++;
                this.showSecurityAlert();
            }
        };
        document.addEventListener('visibilitychange', this.visibilityHandler);
        window.addEventListener('blur', this.visibilityHandler);

        // === LEVEL 3: Block keyboard shortcuts ===
        this.keyBlockHandler = (e) => {
            if (Router.currentView !== 'exam') return;
            // Block Ctrl+C, Ctrl+V, Ctrl+Tab, Ctrl+Shift+I, F12
            if (e.ctrlKey && ['c', 'v', 'u', 'i', 'j'].includes(e.key.toLowerCase())) {
                e.preventDefault();
                NotificationModule.show('⚠️ Atajos de teclado bloqueados durante el examen.', 'warning', 2000);
            }
            if (e.key === 'F12') {
                e.preventDefault();
                NotificationModule.show('⚠️ Herramientas de desarrollador bloqueadas.', 'warning', 2000);
            }
            if (e.ctrlKey && e.shiftKey) {
                e.preventDefault();
            }
        };
        document.addEventListener('keydown', this.keyBlockHandler, true);

        // === LEVEL 3: Block right-click ===
        this.contextMenuHandler = (e) => {
            if (Router.currentView === 'exam') {
                e.preventDefault();
                NotificationModule.show('⚠️ Menú contextual bloqueado durante el examen.', 'warning', 2000);
            }
        };
        document.addEventListener('contextmenu', this.contextMenuHandler);
    },

    disableSecurity() {
        if (this.visibilityHandler) {
            document.removeEventListener('visibilitychange', this.visibilityHandler);
            window.removeEventListener('blur', this.visibilityHandler);
        }
        if (this.keyBlockHandler) {
            document.removeEventListener('keydown', this.keyBlockHandler, true);
        }
        if (this.contextMenuHandler) {
            document.removeEventListener('contextmenu', this.contextMenuHandler);
        }
        if (this.chiguiroInterval) {
            clearInterval(this.chiguiroInterval);
            this.chiguiroInterval = null;
        }
    },

    showSecurityAlert() {
        const modal = document.getElementById('security-alert-modal');
        const countEl = document.getElementById('infraction-count');
        if (countEl) countEl.textContent = this.infractions;

        if (this.infractions >= 2) {
            // === 2nd infraction: silently invalidate, Chiguiro warns, student continues ===
            this.examInvalidated = true;
            if (modal) modal.classList.add('hidden'); // Don't show modal, Chiguiro handles it

            // Chiguiro delivers the bad news
            if (typeof VirtualTeacherModule !== 'undefined') {
                VirtualTeacherModule.speak(
                    '🚫 ¡Ey! Has salido de la pestaña más de una vez. Tu examen NO será registrado, no sumará XP ni aparecerá en el ranking. Puedes seguir practicando, pero este resultado no contará. ¡La próxima vez quédate enfocado! 💪',
                    'serious'
                );
            } else {
                NotificationModule.show('🚫 Examen no válido: has salido de la pestaña. Puedes seguir practicando pero no se registrará.', 'error', 8000);
            }
            return;
        }

        // 1st infraction: show warning modal
        if (modal) modal.classList.remove('hidden');
    },

    closeSecurityAlert() {
        document.getElementById('security-alert-modal').classList.add('hidden');
    },

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    renderNav() {
        const grid = document.getElementById('nav-grid');
        grid.innerHTML = '';

        this.questions.forEach((q, idx) => {
            const cell = document.createElement('div');
            cell.className = 'nav-cell';
            cell.textContent = idx + 1;

            if (idx === this.currentIndex) {
                cell.classList.add('active');
            } else if (this.answers[q.id]) {
                cell.classList.add('answered');
            }

            cell.onclick = () => {
                this.trackTimeOnCurrentQuestion();
                this.currentIndex = idx;
                this.renderQuestion();
                this.renderNav();
                this.updateProgress();
                this.saveProgress();
            };

            grid.appendChild(cell);
        });

        this.updateAnsweredCount();
    },

    renderQuestion() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        document.getElementById('current-q-num').textContent = this.currentIndex + 1;

        // Badges
        const badgesContainer = document.getElementById('question-badges');
        badgesContainer.innerHTML = `
                    <span class="badge badge-primary">${q.area}</span>
                    <span class="badge badge-primary">${q.competencia || 'General'}</span>
                `;

        // Question text with Markdown rendering
        document.getElementById('question-text').innerHTML = renderMarkdown(q.enunciado);

        // Image support
        const imageContainer = document.getElementById('question-image-container');
        if (q.imagen) {
            imageContainer.innerHTML = `<img src="${q.imagen}" alt="Imagen de la pregunta" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 16px; display: block; margin-left: auto; margin-right: auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">`;
            imageContainer.classList.remove('hidden');
        } else {
            imageContainer.innerHTML = '';
            imageContainer.classList.add('hidden');
        }

        // Chart
        const chartContainer = document.getElementById('chart-container');
        if (q.grafica && q.grafica.datos) {
            chartContainer.innerHTML = `
                    <div style="padding: 16px; background: var(--color-surface-2); border-radius: 12px; margin-bottom: 16px;">
                        <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📊 Gráfica</h4>
                        <div style="height: 400px; position: relative;">
                            <canvas id="question-chart"></canvas>
                        </div>
                    </div>
                `;
            setTimeout(() => this.renderChart(q.grafica), 50);
        } else {
            chartContainer.innerHTML = '';
        }

        // Options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        q.opciones.forEach(opt => {
            const optDiv = document.createElement('div');
            optDiv.className = 'option-item';

            const isSelected = this.answers[q.id] === opt.id;
            if (isSelected) {
                optDiv.classList.add('selected');
            }

            // Practice mode: show correct/incorrect
            if (this.examMode === 'practice' && this.answers[q.id]) {
                if (opt.id === q.respuestaCorrecta) {
                    optDiv.classList.add('correct');
                } else if (opt.id === this.answers[q.id]) {
                    optDiv.classList.add('incorrect');
                }
            }

            optDiv.innerHTML = `
                        <div class="option-circle">${opt.id}</div>
                        <div class="option-text">${opt.texto}</div>
                    `;

            optDiv.onclick = () => this.selectOption(opt.id);
            optionsContainer.appendChild(optDiv);
        });

        // Practice feedback
        if (this.examMode === 'practice' && this.answers[q.id]) {
            this.showPracticeFeedback(q);
        } else {
            document.getElementById('practice-feedback').classList.add('hidden');
        }

        // Navigation buttons
        document.getElementById('btn-prev').disabled = this.currentIndex === 0;
        document.getElementById('btn-next').style.display = this.currentIndex < this.questions.length - 1 ? 'inline-flex' : 'none';
        document.getElementById('btn-finish').style.display = this.currentIndex === this.questions.length - 1 ? 'inline-flex' : 'none';

        this.updateProgress();

        // Trigger MathJax for rendering math formulas (LaTeX)
        if (window.MathJax) {
            // Small delay ensures DOM is fully updated before MathJax scans it
            setTimeout(() => {
                if (MathJax.typesetPromise) {
                    MathJax.typesetPromise().catch((err) => console.log('MathJax error: ', err.message));
                }
            }, 100);
        }
    },

    renderChart(grafica, containerId = 'chart-container', canvasId = 'question-chart') {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Custom renderings for map and texto_discontinuo
        if (grafica.tipo === 'map' || grafica.tipo === 'texto_discontinuo') {
            const icon = grafica.tipo === 'map' ? '🗺️' : '📄';

            // Feature: Premium Native Signs
            if (grafica.tipo === 'texto_discontinuo') {
                const signText = grafica.datos.texto || grafica.datos.descripcion;
                container.innerHTML = `
                    <div style="margin: 24px auto; padding: 32px 32px; background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #334155; border-radius: 12px; max-width: 450px; text-align: center; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255,255,255,0.1); position: relative;">
                        <!-- Top Hanger Accent -->
                        <div style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); width: 100px; height: 10px; background: #64748b; border-radius: 5px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);"></div>
                        
                        <div style="font-size: 3rem; margin-bottom: 20px; text-shadow: 0 0 20px rgba(56, 189, 248, 0.4);">${grafica.icono || '🪧'}</div>
                        
                        <div style="font-size: 1.4rem; color: #f8fafc; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; line-height: 1.4; text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
                            ${signText}
                        </div>
                        
                        ${grafica.datos.texto ? `<div style="margin-top: 20px; font-size: 0.85rem; color: #94a3b8; font-style: italic; border-top: 1px solid #334155; padding-top: 12px;">${grafica.datos.descripcion}</div>` : ''}
                    </div>
                `;
                return;
            }

            // Map Generic Box
            container.innerHTML = `
                <div style="padding: 20px; background: var(--color-surface-2); border-radius: 12px; margin-bottom: 16px; border: 1px dashed var(--color-border); text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 12px;">${icon}</div>
                    <h4 style="font-size: 1.1rem; margin-bottom: 8px; color: var(--color-text); font-weight: 600;">${grafica.titulo || 'Mapa'}</h4>
                    <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.5; padding: 0 20px;">
                        ${grafica.datos && grafica.datos.descripcion ? grafica.datos.descripcion : 'Representación visual no disponible.'}
                    </p>
                </div>
            `;
            return;
        }

        // Feature: Flow/Block Diagram
        const labels = grafica.datos && grafica.datos.labels ? grafica.datos.labels : [];
        const isDiagram = grafica.tipo === 'diagrama' ||
            (grafica.tipo === 'geometry' && labels.some(l => typeof l === 'string' && l.length > 15));

        if (isDiagram) {
            // It's likely a conceptual diagram/flowchart based on long text labels
            let html = `
            <div style="padding: 16px; background: var(--color-surface-2); border-radius: 12px; margin-bottom: 16px;">
                <h4 style="font-size: 0.85rem; margin-bottom: 16px; color: var(--color-text-muted); text-align: center;">${grafica.titulo || 'Esquema Conceptual'}</h4>
                <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
            `;

            labels.forEach((lvl, i) => {
                html += `
                    <div style="background: rgba(99, 102, 241, 0.1); border: 2px solid #6366f1; border-radius: 8px; padding: 12px 20px; text-align: center; font-weight: 500; font-size: 0.9rem; max-width: 80%;">
                        ${lvl}
                    </div>
                `;
                if (i < labels.length - 1) {
                    html += `<div style="color: #6366f1; font-size: 1.2rem;">↓</div>`;
                }
            });

            html += `</div></div>`;
            container.innerHTML = html;
            return;
        }

        // For geometry type, use custom Canvas drawing instead of Chart.js
        if (grafica.tipo === 'geometry') {
            this.renderGeometry(grafica, container, canvasId);
            return;
        }

        const ctx = document.getElementById(canvasId);
        if (!ctx) return;

        let type = 'bar';
        const defaultColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];
        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: { color: '#64748b', font: { weight: '600' } },
                    display: grafica.tipo === 'pie' || (grafica.datos && grafica.datos.datasets && grafica.datos.datasets.some(ds => ds.label))
                },
                title: {
                    display: !!grafica.titulo,
                    text: grafica.titulo || '',
                    color: '#64748b',
                    font: { size: 16, weight: 'bold' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#64748b', font: { weight: '600' } },
                    grid: { color: 'rgba(100, 116, 139, 0.2)' }
                },
                y: {
                    ticks: { color: '#64748b', font: { weight: '600' } },
                    grid: { color: 'rgba(100, 116, 139, 0.2)' }
                }
            }
        };

        if (grafica.tipo === 'pie') {
            type = 'pie';
            delete options.scales;
            if (grafica.datos && grafica.datos.datasets) {
                grafica.datos.datasets.forEach(ds => {
                    if (!ds.backgroundColor) {
                        ds.backgroundColor = defaultColors.slice(0, (ds.data || []).length);
                        ds.borderColor = '#1e1b4b';
                        ds.borderWidth = 2;
                    }
                });
            }
        } else if (grafica.tipo === 'line') {
            type = 'line';
            if (grafica.datos && grafica.datos.datasets) {
                grafica.datos.datasets.forEach((ds, idx) => {
                    if (!ds.borderColor) ds.borderColor = defaultColors[idx % defaultColors.length];
                    if (!ds.backgroundColor) ds.backgroundColor = defaultColors[idx % defaultColors.length] + '33';
                    ds.tension = 0.3;
                    ds.pointRadius = 5;
                    ds.pointHoverRadius = 7;
                });
            }
        } else {
            // bar
            if (grafica.datos && grafica.datos.datasets) {
                grafica.datos.datasets.forEach((ds, idx) => {
                    if (!ds.backgroundColor) {
                        ds.backgroundColor = defaultColors[idx % defaultColors.length];
                        ds.borderColor = ds.backgroundColor;
                        ds.borderWidth = 0;
                        ds.borderRadius = 6;
                    }
                });
            }
        }

        if (!this.chartsMap) this.chartsMap = {};
        if (this.chartsMap[canvasId]) {
            this.chartsMap[canvasId].destroy();
        }

        this.chartsMap[canvasId] = new Chart(ctx, {
            type: type,
            data: grafica.datos,
            options: options
        });
    },

    renderGeometry(grafica, container, canvasId = 'geometry-canvas') {
        // Replace chart container with a custom Canvas for geometry
        container.innerHTML = `
            <div style="padding: 16px; background: var(--color-surface-2); border-radius: 12px; margin-bottom: 16px;">
                <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📐 ${grafica.titulo || 'Figura Geométrica'}</h4>
                <div style="display: flex; justify-content: center; align-items: center;">
                    <canvas id="${canvasId}" width="500" height="350" style="max-width: 100%;"></canvas>
                </div>
            </div>
        `;

        setTimeout(() => {
            const canvas = document.getElementById(canvasId);
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.width;
            const H = canvas.height;
            const labels = grafica.datos && grafica.datos.labels ? grafica.datos.labels : [];
            const data = grafica.datos && grafica.datos.datasets && grafica.datos.datasets[0] ? grafica.datos.datasets[0].data : [];

            // Clear
            ctx.clearRect(0, 0, W, H);

            // Detect shape by labels/titulo
            const titulo = (grafica.titulo || '').toLowerCase();
            const labelsLower = labels.map(l => l.toLowerCase());

            if (titulo.includes('tri') || labelsLower.some(l => l.includes('hipotenusa'))) {
                // Triangle - use scatter points if available, else generic
                this.drawTriangle(ctx, W, H, labels, data);
            } else if (titulo.includes('cilindro')) {
                this.drawCylinder(ctx, W, H, labels, data);
            } else if (titulo.includes('trapecio')) {
                this.drawTrapezoid(ctx, W, H, labels, data);
            } else if (titulo.includes('cuadrado') || titulo.includes('inscrito')) {
                this.drawSquareInCircle(ctx, W, H, labels, data);
            } else if (titulo.includes('compuesta') || titulo.includes('rect')) {
                this.drawRectangleSemicircle(ctx, W, H, labels, data);
            } else if (titulo.includes('rculo') || titulo.includes('circulo')) {
                this.drawCircle(ctx, W, H, labels, data);
            } else {
                // Generic: show dimensions as labeled bars
                this.drawGenericGeometry(ctx, W, H, labels, data, grafica.titulo);
            }
        }, 50);
    },

    drawRectangleSemicircle(ctx, W, H, labels, data) {
        const base = data[0] || 4, altura = data[1] || 6, radio = (data[2] || data[0] / 2);
        const scale = Math.min((W - 120) / (base * 1.5), (H - 100) / (altura + radio + 1));
        const cx = W / 2, startY = H - 40;

        const rw = base * scale, rh = altura * scale, sr = (base / 2) * scale;
        const rx = cx - rw / 2, ry = startY - rh;

        // Rectangle
        ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2.5;
        ctx.fillRect(rx, ry, rw, rh);
        ctx.strokeRect(rx, ry, rw, rh);

        // Semicircle on top
        ctx.beginPath();
        ctx.arc(cx, ry, sr, Math.PI, 0, false);
        ctx.fillStyle = 'rgba(16, 185, 129, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#10b981';
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`Base = ${base}m`, cx, startY + 20);
        ctx.save();
        ctx.translate(rx - 20, ry + rh / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(`Altura = ${altura}m`, 0, 0);
        ctx.restore();
        ctx.fillText(`r = ${radio}m`, cx, ry - sr - 10);

        // Dimension arrows
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1;
        // Base arrow
        ctx.beginPath(); ctx.moveTo(rx, startY + 8); ctx.lineTo(rx + rw, startY + 8); ctx.stroke();
        // Height arrow
        ctx.beginPath(); ctx.moveTo(rx - 8, ry); ctx.lineTo(rx - 8, startY); ctx.stroke();
    },

    drawTriangle(ctx, W, H, labels, data) {
        const scale = Math.min(W - 80, H - 80) / 6;
        const ox = 60, oy = H - 50;

        // Use data as coordinates if {x,y}, else use as sides
        let points;
        if (data[0] && typeof data[0] === 'object') {
            points = data.map(p => [ox + p.x * scale, oy - p.y * scale]);
        } else {
            points = [[ox, oy], [ox + (data[0] || 3) * scale, oy], [ox, oy - (data[1] || 4) * scale]];
        }

        ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        points.forEach(p => ctx.lineTo(p[0], p[1]));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Vertices labels
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.textAlign = 'center';
        points.forEach((p, i) => {
            const label = labels[i] || String.fromCharCode(65 + i);
            const val = typeof data[i] === 'object' ? `(${data[i].x},${data[i].y})` : data[i];
            ctx.fillText(`${label}: ${val}`, p[0], p[1] + (i === 0 || i === 1 ? 20 : -10));
        });

        // Right angle indicator
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1;
        ctx.strokeRect(points[0][0], points[0][1] - 15, 15, 15);
    },

    drawCircle(ctx, W, H, labels, data) {
        const radius = data[0] || 3;
        const scale = Math.min(W - 80, H - 80) / (radius * 2.5);
        const cx = W / 2, cy = H / 2;
        const r = radius * scale;

        ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Radius line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r, cy);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`r = ${radius}`, cx + r / 2, cy - 10);
        ctx.fillText('O', cx - 12, cy + 5);

        // Center dot
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
    },

    drawCylinder(ctx, W, H, labels, data) {
        const radius = data[0] || 2, height = data[1] || 5;
        const scale = Math.min((W - 80) / (radius * 3), (H - 80) / (height * 1.5));
        const cx = W / 2;
        const rw = radius * scale, rh = rw * 0.35;
        const ch = height * scale;
        const top = H / 2 - ch / 2, bot = top + ch;

        // Body
        ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
        ctx.fillRect(cx - rw, top, rw * 2, ch);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(cx - rw, top); ctx.lineTo(cx - rw, bot); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + rw, top); ctx.lineTo(cx + rw, bot); ctx.stroke();

        // Top ellipse
        ctx.beginPath();
        ctx.ellipse(cx, top, rw, rh, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99, 102, 241, 0.2)';
        ctx.fill();
        ctx.strokeStyle = '#6366f1';
        ctx.stroke();

        // Bottom ellipse
        ctx.beginPath();
        ctx.ellipse(cx, bot, rw, rh, 0, 0, Math.PI);
        ctx.strokeStyle = '#6366f1';
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`r = ${radius}`, cx, top - rh - 8);
        ctx.save();
        ctx.translate(cx + rw + 25, top + ch / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(`h = ${height}`, 0, 0);
        ctx.restore();
    },

    drawTrapezoid(ctx, W, H, labels, data) {
        const baseMayor = data[0] || 6, baseMenor = data[1] || 4, altura = data[2] || 4;
        const scale = Math.min((W - 80) / baseMayor, (H - 80) / altura) * 0.7;
        const cx = W / 2, bot = H - 50;
        const bM = baseMayor * scale, bm = baseMenor * scale, h = altura * scale;

        ctx.fillStyle = 'rgba(99, 102, 241, 0.15)';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - bM / 2, bot);
        ctx.lineTo(cx + bM / 2, bot);
        ctx.lineTo(cx + bm / 2, bot - h);
        ctx.lineTo(cx - bm / 2, bot - h);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Labels
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 13px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${labels[0] || 'Base Mayor'} = ${baseMayor}`, cx, bot + 20);
        ctx.fillText(`${labels[1] || 'Base Menor'} = ${baseMenor}`, cx, bot - h - 10);
        ctx.save();
        ctx.translate(cx - bM / 2 - 25, bot - h / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText(`${labels[2] || 'Altura'} = ${altura}`, 0, 0);
        ctx.restore();
    },

    drawSquareInCircle(ctx, W, H, labels, data) {
        const radius = data[0] || 2;
        const scale = Math.min(W - 80, H - 80) / (radius * 3);
        const cx = W / 2, cy = H / 2;
        const r = radius * scale;
        const side = r * Math.sqrt(2);

        // Circle
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.stroke();

        // Square
        ctx.fillStyle = 'rgba(16, 185, 129, 0.12)';
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 2.5;
        ctx.fillRect(cx - side / 2, cy - side / 2, side, side);
        ctx.strokeRect(cx - side / 2, cy - side / 2, side, side);

        // Radius line
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + r, cy);
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([5, 3]);
        ctx.stroke();
        ctx.setLineDash([]);

        ctx.fillStyle = '#111111';
        ctx.font = 'bold 14px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`r = ${radius}`, cx + r / 2, cy - 10);
    },

    drawGenericGeometry(ctx, W, H, labels, data, titulo) {
        // Fallback: show as nice dimension cards
        const count = Math.min(labels.length, data.length);
        const gap = 15;
        const cardW = Math.max(80, Math.min(140, (W - 40 - (count - 1) * gap) / count));
        const totalW = count * cardW + (count - 1) * gap;
        let startX = (W - totalW) / 2;
        const startY = Math.max(60, H / 2 - 50);
        const colors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

        const wrapTextCentrado = (context, text, x, y, maxWidth, lineHeight) => {
            const words = String(text).split(' ');
            let line = '';
            for (let n = 0; n < words.length; n++) {
                const testLine = line + words[n] + ' ';
                if (context.measureText(testLine).width > maxWidth && n > 0) {
                    context.fillText(line.trim(), x, y);
                    line = words[n] + ' ';
                    y += lineHeight;
                } else {
                    line = testLine;
                }
            }
            context.fillText(line.trim(), x, y);
        };

        // Title
        ctx.fillStyle = '#111111';
        ctx.font = 'bold 16px Inter, sans-serif';
        ctx.textAlign = 'center';
        wrapTextCentrado(ctx, titulo || 'Dimensiones', W / 2, 30, W - 40, 20);

        for (let i = 0; i < count; i++) {
            const x = startX + i * (cardW + gap);
            const color = colors[i % colors.length];
            const textL = String(labels[i]);

            ctx.font = '12px Inter, sans-serif';
            const words = textL.split(' ');
            let lineCount = 1; let line = '';
            for (let n = 0; n < words.length; n++) {
                if (ctx.measureText(line + words[n] + ' ').width > cardW - 10 && n > 0) {
                    lineCount++; line = words[n] + ' ';
                } else line += words[n] + ' ';
            }

            const cardH = 50 + (lineCount * 14);

            // Card bg
            ctx.fillStyle = color + '22';
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.beginPath();
            if (ctx.roundRect) ctx.roundRect(x, startY, cardW, cardH, 10);
            else ctx.rect(x, startY, cardW, cardH);
            ctx.fill();
            ctx.stroke();

            // Value
            ctx.fillStyle = color;
            ctx.font = 'bold 22px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(data[i], x + cardW / 2, startY + 35);

            // Label wrapped
            ctx.fillStyle = '#444444';
            ctx.font = '12px Inter, sans-serif';
            wrapTextCentrado(ctx, textL, x + cardW / 2, startY + 55, cardW - 10, 14);
        }
    },

    updateOptionsSelection(q) {
        const optionsContainer = document.getElementById('options-container');
        Array.from(optionsContainer.children).forEach(optDiv => {
            const circle = optDiv.querySelector('.option-circle');
            if (!circle) return;
            const optId = circle.textContent.trim();

            optDiv.className = 'option-item'; // Reset to default

            const isSelected = this.answers[q.id] === optId;
            if (isSelected) {
                optDiv.classList.add('selected');
            }

            // Practice mode: show correct/incorrect
            if (this.examMode === 'practice' && this.answers[q.id]) {
                if (optId === q.respuestaCorrecta) {
                    optDiv.classList.add('correct');
                } else if (optId === this.answers[q.id]) {
                    optDiv.classList.add('incorrect');
                }
            }
        });

        // Practice feedback
        if (this.examMode === 'practice' && this.answers[q.id]) {
            this.showPracticeFeedback(q);
        } else {
            document.getElementById('practice-feedback').classList.add('hidden');
        }
    },

    selectOption(optionId) {
        const q = this.questions[this.currentIndex];
        this.answers[q.id] = optionId;
        this.updateOptionsSelection(q);
        this.renderNav();
        this.saveProgress();
    },

    showPracticeFeedback(q) {
        const feedback = document.getElementById('practice-feedback');
        const isCorrect = this.answers[q.id] === q.respuestaCorrecta;

        feedback.style.background = isCorrect ? 'rgba(16,185,129,0.08)' : 'rgba(239,68,68,0.08)';
        feedback.style.border = `1px solid ${isCorrect ? 'rgba(16,185,129,0.3)' : 'rgba(239,68,68,0.3)'}`;

        let html = isCorrect
            ? '<span style="color: #34d399; font-weight: 600;">✓ ¡Correcto!</span>'
            : `<span style="color: #ef4444; font-weight: 600;">✗ Incorrecto — Respuesta correcta: ${q.respuestaCorrecta}</span>`;

        if (q.justificacion) {
            html += `<div style="margin-top: 8px; color: var(--color-text-muted); line-height: 1.5;">💡 ${q.justificacion}</div>`;
        }

        feedback.innerHTML = html;
        feedback.classList.remove('hidden');
    },

    prev() {
        if (this.currentIndex > 0) {
            this.trackTimeOnCurrentQuestion();
            this.currentIndex--;
            this.renderQuestion();
            this.renderNav();
            this.saveProgress();
            if (this.examMode === 'challenge') this.startChallengeTimer();
        }
    },

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.trackTimeOnCurrentQuestion();
            this.currentIndex++;
            this.renderQuestion();
            this.renderNav();
            this.saveProgress();
            if (this.examMode === 'challenge') this.startChallengeTimer();
        }
    },

    updateProgress() {
        const progress = ((this.currentIndex + 1) / this.questions.length) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
    },

    updateAnsweredCount() {
        const answered = Object.keys(this.answers).length;
        const total = this.questions.length;
        document.getElementById('answered-count').textContent = `${answered}/${total}`;
        document.getElementById('answered-bar').style.width = ((answered / total) * 100) + '%';
    },

    startChallengeTimer() {
        if (this.timerInterval) clearInterval(this.timerInterval);

        let secondsLeft = 90; // 90 seconds per question
        const timerDisplay = document.getElementById('timer-text');
        timerDisplay.style.color = '#ef4444';

        const tick = () => {
            const mins = Math.floor(secondsLeft / 60);
            const secs = secondsLeft % 60;
            timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

            if (secondsLeft <= 0) {
                // Out of time: Mark incorrectly, beep, move next
                const currentId = this.questions[this.currentIndex].id;
                if (!this.answers[currentId]) {
                    this.answers[currentId] = 'TIME_OUT';
                }
                NotificationModule.show('¡Tiempo agotado para esta pregunta!', 'warning', 2000);

                if (this.currentIndex < this.questions.length - 1) {
                    this.next();
                } else {
                    this.finishExam();
                }
            } else {
                secondsLeft--;
            }
        };

        tick(); // Initial call
        this.timerInterval = setInterval(tick, 1000);
    },

    startTimer(minutes, fromResume = false) {
        let totalSeconds = fromResume ? Math.floor(minutes * 60) : (minutes * 60);

        this.timerInterval = setInterval(() => {
            totalSeconds--;

            const hours = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;

            document.getElementById('timer-text').textContent =
                `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

            if (totalSeconds <= 0) {
                clearInterval(this.timerInterval);
                NotificationModule.show('¡Tiempo agotado!', 'warning');
                this.finishExam();
            }
        }, 1000);
    },

    handleKeyDown(e) {
        const modal = document.getElementById('confirm-modal');
        if (!modal.classList.contains('hidden')) return;

        const q = this.questions[this.currentIndex];
        if (!q) return;

        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                if (this.currentIndex > 0) this.prev();
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (this.currentIndex < this.questions.length - 1) this.next();
                break;
            case 'a': case 'A':
                e.preventDefault();
                const optA = q.opciones.find(o => o.id === 'A');
                if (optA) this.selectOption('A');
                break;
            case 'b': case 'B':
                e.preventDefault();
                const optB = q.opciones.find(o => o.id === 'B');
                if (optB) this.selectOption('B');
                break;
            case 'c': case 'C':
                e.preventDefault();
                const optC = q.opciones.find(o => o.id === 'C');
                if (optC) this.selectOption('C');
                break;
            case 'd': case 'D':
                e.preventDefault();
                const optD = q.opciones.find(o => o.id === 'D');
                if (optD) this.selectOption('D');
                break;
            case 'Enter':
                if (this.currentIndex === this.questions.length - 1) {
                    e.preventDefault();
                    this.showConfirmModal();
                }
                break;
        }
    },

    showConfirmModal() {
        const answered = Object.keys(this.answers).length;
        const total = this.questions.length;
        const unanswered = total - answered;

        document.getElementById('modal-answered').textContent = answered;
        document.getElementById('modal-total').textContent = total;

        if (unanswered > 0) {
            document.getElementById('modal-unanswered').textContent = unanswered;
            document.getElementById('modal-warning').classList.remove('hidden');
        } else {
            document.getElementById('modal-warning').classList.add('hidden');
        }

        document.getElementById('confirm-modal').classList.remove('hidden');
    },

    hideConfirmModal() {
        document.getElementById('confirm-modal').classList.add('hidden');
    },

    finishExam() {
        this.hideConfirmModal();

        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }

        window.removeEventListener('keydown', this.keyboardHandler);
        this.clearProgress();

        // Increment question exposure history
        let history = JSON.parse(localStorage.getItem('icfes_question_history') || '{}');
        let updatedCount = 0;

        this.questions.forEach((q, index) => {
            // Count a view even if unattended, but only if they reached it or finished the exam
            // The fact that it was 'pulled' into the exam means it was seen/available to be seen
            if (q.id) {
                history[q.id] = (history[q.id] || 0) + 1;
                updatedCount++;
            }
        });

        if (updatedCount > 0) {
            localStorage.setItem('icfes_question_history', JSON.stringify(history));
            if (typeof AuthModule !== 'undefined') {
                AuthModule.saveCloudHistory(history);
            }
        }

        // Calculate results
        ResultsEngine.calculate(this.questions, this.answers, this.startTime);
        Router.go('results');
    }
};

// Update ConfigModule.startExam
ConfigModule.startExam = function () {
    if (!AuthModule.currentUser) {
        NotificationModule.show('Debes ingresar con tu cuenta para realizar este simulacro.', 'warning');
        AuthUI.toggleModal();
        return;
    }
    if (this.config.areas.length === 0) return;
    ExamEngine.init(this.config);
    Router.go('exam');
};


// ============ RESULTS ENGINE ============
const ResultsEngine = {
    currentResult: null,
    showingReview: false,

    calculate(questions, answers, startTime, studentName) {
        let correct = 0;
        const byArea = {};
        const byCompetencia = {};
        const details = [];

        questions.forEach(q => {
            // Safety check for area
            if (!q.area) {
                console.warn('Pregunta sin área definida:', q);
                q.area = 'Desconocida';
            }
            const area = q.area.toLowerCase();
            const competencia = q.competencia || 'General';

            if (!byArea[area]) {
                byArea[area] = { correct: 0, total: 0 };
            }
            if (!byCompetencia[competencia]) {
                byCompetencia[competencia] = { correct: 0, total: 0 };
            }

            byArea[area].total++;
            byCompetencia[competencia].total++;

            const userAns = answers[q.id] ? String(answers[q.id]).trim().toUpperCase() : null;
            const correctAns = q.respuestaCorrecta ? String(q.respuestaCorrecta).trim().toUpperCase() : null;
            const isCorrect = userAns && correctAns && userAns === correctAns;

            if (isCorrect) {
                correct++;
                byArea[area].correct++;
                byCompetencia[competencia].correct++;
            }

            details.push({
                id: q.id,
                correct: q.respuestaCorrecta,
                answered: answers[q.id],
                isCorrect
            });
        });

        const percentage = Math.round((correct / questions.length) * 100);
        const icfesScore = Math.round((correct / questions.length) * 500);
        let timeSpent = Math.floor((Date.now() - startTime) / 1000);

        // Quality Time Constraint: Max 5 minutes (300 seconds) per question
        const maxValidTime = questions.length * 300;
        if (timeSpent > maxValidTime) {
            timeSpent = maxValidTime;
        }

        const student = studentName || localStorage.getItem('saber11_student_name') || 'Anónimo';

        this.currentResult = {
            id: Date.now().toString(),
            studentName: student,
            date: new Date().toISOString(),
            totalQuestions: questions.length,
            totalCorrect: correct,
            percentage,
            icfesScore,
            timeSpent,
            byArea,
            byCompetencia,
            details,
            questions // Optional: might be too heavy to save everything always?
        };

        // Anti-Spam Check: Don't award XP if under 10 minutes (600 seconds)
        const isSpam = (timeSpent < 600);
        const isInvalidated = (typeof ExamEngine !== 'undefined' && ExamEngine.examInvalidated === true);

        if (isInvalidated) {
            // Exam was invalidated by security infractions — Chiguiro already warned them
            this.currentResult.isSpam = true;
            this.currentResult.invalidated = true;
            this.currentResult.infractions = ExamEngine.infractions || 0;
            // WE DO NOT SAVE INVALIDATED EXAMS TO DB OR HISTORY
        } else if (isSpam) {
            this.currentResult.isSpam = true;
            // Chiguiro warns about the time
            if (typeof VirtualTeacherModule !== 'undefined') {
                VirtualTeacherModule.speak(
                    '⏰ ¡Ey! Completaste el simulacro muy rápido. Este resultado NO será registrado, ni sumará XP ni aparecerá en ranking. La próxima vez tómate tu tiempo y lee bien cada pregunta. 📖',
                    'serious'
                );
            } else {
                NotificationModule.show('Simulacro completado demasiado rápido. No se registrará.', 'warning', 6000);
            }
            // WE DO NOT SAVE SPAM EXAMS TO DB OR HISTORY
        } else {
            // Save to history ONLY if valid
            try {
                const history = JSON.parse(localStorage.getItem('saber_results_history') || '[]');
                // Keep the object light for history list
                const historyItem = {
                    id: this.currentResult.id,
                    studentName: this.currentResult.studentName,
                    date: this.currentResult.date,
                    score: percentage,
                    icfesScore: icfesScore,
                    correct: correct,
                    total: questions.length,
                    byArea: this.currentResult.byArea,
                    type: typeof PDFExamModule !== 'undefined' && PDFExamModule.currentExam ? 'PDF' : 'Standard',
                    title: this.examMode === 'study' ? `Estudio Guiado: ${questions[0]?.area || 'General'}` : (typeof PDFExamModule !== 'undefined' && PDFExamModule.currentExam ? PDFExamModule.currentExam.title : 'Simulacro Estándar'),
                    timeSpent: timeSpent,
                    infractions: ExamEngine.infractions || 0,
                    suspicious: (timeSpent > 0 && questions.length > 0 && (timeSpent / questions.length) < 30) // less than 30s avg
                };
                history.push(historyItem);
                localStorage.setItem('saber_results_history', JSON.stringify(history));

                // ---- NEW: Firebase Save (Fire and forget) ----
                fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(historyItem)
                }).then(v => console.log('Guardado en Firebase existosamente')).catch(e => console.log('Error Firebase:', e));
                // ----------------------------------------------

                // ---- GAMIFICATION EXP REWARD ----
                // Rules: 10 XP per correct answer + 30 XP daily session bonus (once per day)
                if (typeof GamificationModule !== 'undefined') {
                    let xpToAdd = correct * 10; // 10 XP per correct answer

                    // Daily session bonus: 30 XP, only once per calendar day
                    const today = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'
                    const lastBonusDay = localStorage.getItem('saber11_daily_bonus_date');
                    if (lastBonusDay !== today) {
                        xpToAdd += 30; // Daily session bonus
                        localStorage.setItem('saber11_daily_bonus_date', today);
                    }

                    if (xpToAdd > 0) GamificationModule.addXP(xpToAdd);
                }

            } catch (e) {
                console.error('Error saving history:', e);
            }
        }

        console.log('Resultados calculados:', this.currentResult);
        this.render();
    },

    render() {
        try {
            console.log('ResultsEngine.render iniciado');
            const r = this.currentResult;
            if (!r) {
                console.error('No hay resultados para renderizar');
                NotificationModule.show('No se encontraron resultados para mostrar.', 'error');
                return;
            }

            // Remove debug overlay if exists
            const debugOverlay = document.getElementById('debug-overlay');
            if (debugOverlay) debugOverlay.remove();

            // Force visibility of Results View
            const resultsView = document.getElementById('view-results');
            if (resultsView) {
                resultsView.classList.remove('hidden');
                resultsView.classList.add('active'); // Ensure any active class is set
                resultsView.style.display = 'block';
                // Hide others just in case
                document.querySelectorAll('.view-section').forEach(el => {
                    if (el.id !== 'view-results') el.classList.add('hidden');
                });
            }

            // Remove PDF floating controls if they persist
            const zoomControls = document.querySelector('div[style*="position: absolute; bottom: 30px"]');
            if (zoomControls) zoomControls.remove();

            const closeButton = document.querySelector('button[onclick="location.reload()"]');
            if (closeButton) closeButton.remove();


            // Icon and date
            const iconEl = document.getElementById('results-icon');
            if (iconEl) {
                const icon = r.percentage >= 80 ? '🏆' : r.percentage >= 60 ? '📊' : '📝';
                const scoreColor = this.getScoreColor(r.percentage);
                iconEl.innerHTML = icon;
                iconEl.style.background = `linear-gradient(135deg, ${scoreColor}33, ${scoreColor}11)`;
                iconEl.style.border = `1px solid ${scoreColor}44`;
            }

            const dateEl = document.getElementById('results-date');
            if (dateEl) {
                dateEl.textContent = new Date(r.date).toLocaleDateString('es-CO', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                });
            }

            // Scores
            const finalPctEl = document.getElementById('final-percentage');
            if (finalPctEl) {
                finalPctEl.innerHTML = `${r.icfesScore} <span style="font-size: 0.5em; color: var(--color-text-muted);">/ 500</span> <div style="font-size: 0.35em; color: var(--color-text-muted); margin-top: 8px;">Equivalente al ${r.percentage}% global</div>`;
                finalPctEl.style.color = this.getScoreColor(r.percentage);
            }

            if (document.getElementById('correct-count')) document.getElementById('correct-count').textContent = r.totalCorrect;
            if (document.getElementById('incorrect-count')) document.getElementById('incorrect-count').textContent = r.totalQuestions - r.totalCorrect;
            if (document.getElementById('total-questions-result')) document.getElementById('total-questions-result').textContent = r.totalQuestions;

            if (r.percentage >= 80 && document.getElementById('excellence-badge')) {
                document.getElementById('excellence-badge').classList.remove('hidden');
                this.showConfetti();
            }

            // Charts
            this.renderRadarChart(r.byArea);
            this.renderBarChart(r.byCompetencia);

            // Area breakdown
            this.renderAreaBreakdown(r.byArea);

            // Recommendations
            this.renderRecommendations(r);

            // Security Report (Kiosk Mode)
            const securityContainer = document.getElementById('security-report');
            if (securityContainer) {
                if (window.ExamEngine && window.ExamEngine.infractions > 0) {
                    securityContainer.classList.remove('hidden');
                    document.getElementById('result-infractions').textContent = window.ExamEngine.infractions;
                    if (window.ExamEngine.infractions >= 3) {
                        document.getElementById('result-annulment').classList.remove('hidden');
                        document.getElementById('result-status-text').textContent = 'EVALUACIÓN ANULADA';
                        document.getElementById('result-status-text').style.color = 'var(--color-danger)';
                    } else {
                        document.getElementById('result-annulment').classList.add('hidden');
                        document.getElementById('result-status-text').textContent = 'Evaluación Válida (con advertencias)';
                        document.getElementById('result-status-text').style.color = 'var(--color-warning)';
                    }
                } else {
                    securityContainer.classList.remove('hidden');
                    document.getElementById('result-infractions').textContent = '0';
                    document.getElementById('result-status-text').textContent = 'Evaluación Válida';
                    document.getElementById('result-status-text').style.color = 'var(--color-success)';
                    document.getElementById('result-annulment').classList.add('hidden');
                }
            }

            // Profe Chiguiro result feedback
            if (typeof VirtualTeacherModule !== 'undefined') {
                let resultMessage = "";
                let resultMood = "neutral";
                if (r.percentage >= 80) {
                    resultMessage = "¡Impresionante! 80% o más... Eres un verdadero Chigüiro de élite. ¡Sigue así!";
                    resultMood = "happy";
                } else if (r.percentage >= 60) {
                    resultMessage = "60%... No está mal, pero ese Chigüiro interior sabe que puedes dar más. ¡A repasar las áreas débiles!";
                    resultMood = "neutral";
                } else {
                    resultMessage = "Menos del 60%... Andas flojo, camarada. Toca ponerse serio con el estudio. ¡A las Flashcards ya!";
                    resultMood = "serious";
                }

                resultMessage += " <br><br>💡 <b>Consejo:</b> Desliza hacia abajo y revisa con cuidado las justificaciones de las respuestas en las que hayas fallado. ¡Ahí inicia el verdadero aprendizaje!";

                setTimeout(() => {
                    VirtualTeacherModule.speak(resultMessage, resultMood);
                }, 1500);
            }
        } catch (e) {
            console.error('Error crítico en ResultsEngine.render:', e);
            NotificationModule.show('Error mostrando resultados: ' + e.message, 'error');
        }
    },

    renderRadarChart(byArea) {
        const ctx = document.getElementById('radar-chart');
        if (!ctx) return;

        const areaNames = {
            matematicas: 'Matemáticas',
            lectura: 'Lectura',
            ciencias: 'Ciencias',
            sociales: 'Sociales',
            ingles: 'Inglés'
        };

        const labels = [];
        const data = [];

        Object.keys(byArea).forEach(area => {
            labels.push(areaNames[area] || area);
            const pct = Math.round((byArea[area].correct / byArea[area].total) * 100);
            data.push(pct);
        });

        const existing = Chart.getChart(ctx);
        if (existing) existing.destroy();

        new Chart(ctx, {
            type: 'radar',
            data: {
                labels,
                datasets: [{
                    label: 'Puntaje',
                    data,
                    backgroundColor: 'rgba(99, 102, 241, 0.4)',
                    borderColor: '#6366f1',
                    borderWidth: 2,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: '#6366f1'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#64748b', backdropColor: 'transparent', font: { weight: '600' } },
                        grid: { color: 'rgba(100, 116, 139, 0.2)' },
                        angleLines: { color: 'rgba(100, 116, 139, 0.2)' },
                        pointLabels: { color: '#64748b', font: { size: 12, weight: '700' } }
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            }
        });
    },

    renderBarChart(byCompetencia) {
        const ctx = document.getElementById('bar-chart');
        if (!ctx) return;

        const labels = [];
        const data = [];
        const colors = [];

        Object.keys(byCompetencia).forEach(comp => {
            labels.push(comp);
            const pct = Math.round((byCompetencia[comp].correct / byCompetencia[comp].total) * 100);
            data.push(pct);
            colors.push(this.getScoreColor(pct));
        });

        const existing = Chart.getChart(ctx);
        if (existing) existing.destroy();

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels,
                datasets: [{
                    label: 'Porcentaje de aciertos',
                    data,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 0,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: '#64748b', font: { weight: '600' } },
                        grid: { color: 'rgba(100, 116, 139, 0.2)' }
                    },
                    x: {
                        ticks: { color: '#64748b', font: { weight: '600' } },
                        grid: { display: false }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(15, 23, 42, 0.9)',
                        titleFont: { size: 13, weight: 'bold' },
                        padding: 12,
                        cornerRadius: 8
                    }
                }
            }
        });
    },

    renderAreaBreakdown(byArea) {
        const container = document.getElementById('area-breakdown');
        container.innerHTML = '';

        const areaConfig = ConfigModule.areaConfig;

        Object.keys(byArea).forEach(areaKey => {
            const data = byArea[areaKey];
            const pct = Math.round((data.correct / data.total) * 100);
            const area = areaConfig[areaKey];
            const color = area ? `rgb(${area.color})` : '#7c3aed';

            const row = document.createElement('div');
            row.style.cssText = 'display: flex; align-items: center; gap: 16px; padding: 12px 16px; border-radius: 10px; background: var(--color-surface);';

            row.innerHTML = `
                    <div style="width: 10px; height: 10px; border-radius: 50%; background: ${color};"></div>
                    <span style="flex: 1; font-weight: 500; font-size: 0.9rem;">${area ? area.name : areaKey}</span>
                    <span style="color: var(--color-text-muted); font-size: 0.8rem;">${data.correct}/${data.total}</span>
                    <div style="width: 120px; height: 6px; border-radius: 3px; background: var(--color-surface-3);">
                        <div style="height: 100%; border-radius: 3px; background: ${this.getScoreColor(pct)}; width: ${pct}%; transition: width 0.5s ease;"></div>
                    </div>
                    <span style="font-weight: 700; font-size: 0.85rem; color: ${this.getScoreColor(pct)}; min-width: 40px; text-align: right;">${pct}%</span>
                `;

            container.appendChild(row);
        });
    },

    renderRecommendations(r) {
        const container = document.getElementById('recommendations');
        container.innerHTML = '';

        // Find weakest area
        let weakestArea = null;
        let weakestPct = 100;

        Object.keys(r.byArea).forEach(area => {
            const pct = (r.byArea[area].correct / r.byArea[area].total) * 100;
            if (pct < weakestPct) {
                weakestPct = pct;
                weakestArea = area;
            }
        });

        const areaName = ConfigModule.areaConfig[weakestArea]?.name || weakestArea || 'General';
        const strArea = areaName.toLowerCase();

        // Target Video Definitions
        let videoId = '';
        let videoTitle = '';
        let videoDesc = '';

        if (weakestPct >= 80) {
            // Excellent Score, no critical weaknesses
            const div = document.createElement('div');
            div.style.cssText = `padding: 24px; border-radius: 16px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05)); border: 1px solid rgba(16, 185, 129, 0.3); text-align: center;`;
            div.innerHTML = `
                <div style="font-size: 3rem; margin-bottom: 12px;">🏆</div>
                <h3 style="color: var(--color-success); font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">¡Desempeño Sobresaliente!</h3>
                <p style="color: var(--color-text-muted); font-size: 0.95rem;">Tu puntaje es excelente en todas las áreas evaluadas. Mantén este ritmo de estudio para asegurar tu éxito en el ICFES real.</p>
            `;
            container.appendChild(div);
            return;
        }

        // Match subject to YouTube masterclasses
        if (strArea.includes('matem') || strArea.includes('razonamiento')) {
            videoId = 'uy8nHMx_YXI'; // Auxi Mate
            videoTitle = 'Estrategias de Respuesta';
            videoDesc = 'Enseñar de manera explícita las mecánicas de respuesta estandarizada: el llenado correcto y opaco de los óvalos, y estrategias probabilísticas.';
        } else if (strArea.includes('lectura') || strArea.includes('critic')) {
            videoId = 'jjO21znJdiE'; // Tutoriales ICFES
            videoTitle = 'Regla de los 3 Minutos';
            videoDesc = 'Proveer y cimentar una regla heurística fundamental de gestión del tiempo: la asignación de un promedio estricto y cronometrado de 3 minutos por pregunta.';
        } else if (strArea.includes('naturales') || strArea.includes('biolog') || strArea.includes('quimic') || strArea.includes('fisic')) {
            videoId = 'zRkDuFCP2o0'; // Filadd Colombia
            videoTitle = 'Gestión Asimétrica';
            videoDesc = 'Capacitar al estudiante en metodologías de gestión asimétrica del tiempo, calibrando el esfuerzo temporal en función de las fortalezas cognitivas individuales.';
        } else if (strArea.includes('sociales') || strArea.includes('ciudadana')) {
            videoId = '8bxvg_QL1f0'; // Orientacion Vocacional
            videoTitle = 'Simulacro Paso a Paso';
            videoDesc = 'Estructurar un plan de estudio enfocado con precisión quirúrgica exclusivamente en las temáticas delineadas en los lineamientos oficiales del ICFES.';
        } else if (strArea.includes('ingle') || strArea.includes('english')) {
            videoId = 'Slkwywk5I3g'; // Garcia Lomas
            videoTitle = 'Gestión Emocional';
            videoDesc = 'Desarrollar la inteligencia emocional y la tenacidad personal necesarias para superar los bloqueos cognitivos y los tiempos de extrema dificultad.';
        } else {
            videoId = 'gyORvifTK7E'; // 3P
            videoTitle = 'Método de las 3P (Tiempo)';
            videoDesc = 'Instruir integralmente en el "Método de las 3P" (Preparación, Proyección y Presentación) para el control fisiológico y psicológico de los nervios.';
        }

        // Build rich card
        const card = document.createElement('div');
        card.style.cssText = `
            border-radius: 16px; 
            background: var(--color-surface-2); 
            border: 1px solid var(--color-border); 
            overflow: hidden;
            display: flex;
            flex-direction: column;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        `;

        card.innerHTML = `
            <div style="background: linear-gradient(to right, rgba(239, 68, 68, 0.1), transparent); padding: 16px 20px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between;">
                <div>
                    <span style="font-size: 0.8rem; font-weight: 700; color: var(--color-danger); text-transform: uppercase; letter-spacing: 0.5px;">Prioridad de Refuerzo</span>
                    <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--color-text); margin-top: 4px;">${areaName} (${Math.round(weakestPct)}%)</h3>
                </div>
                <div style="width: 40px; height: 40px; border-radius: 50%; background: rgba(239, 68, 68, 0.15); display: flex; align-items: center; justify-content: center; color: var(--color-danger); font-size: 1.2rem;">
                    🎯
                </div>
            </div>
            
            <div style="padding: 20px;">
                <p style="color: var(--color-text-muted); font-size: 0.9rem; margin-bottom: 16px; line-height: 1.5;">${videoDesc}</p>
                
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; padding: 12px; background: rgba(239, 68, 68, 0.1); color: var(--color-danger); font-weight: 600; text-decoration: none; border-radius: 8px; transition: background 0.2s;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                    Ver en YouTube
                </a>
            </div>
        `;

        container.appendChild(card);
    },

    showConfetti() {
        const container = document.getElementById('confetti-container');
        container.innerHTML = '';
        container.style.cssText = 'position: fixed; inset: 0; pointer-events: none; z-index: 100; overflow: hidden;';

        const colors = ['#7c3aed', '#a78bfa', '#f59e0b', '#34d399', '#f472b6', '#38bdf8', '#fbbf24'];

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'confetti-particle';
            particle.style.cssText = `
                    left: ${Math.random() * 100}%;
                    top: -20px;
                    width: ${4 + Math.random() * 8}px;
                    height: ${4 + Math.random() * 8}px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                    animation: confetti-fall ${2 + Math.random() * 2}s ${Math.random() * 2}s ease-in forwards;
                    opacity: 0;
                `;
            container.appendChild(particle);
        }

        setTimeout(() => {
            container.innerHTML = '';
        }, 5000);
    },

    toggleReview() {
        this.showingReview = !this.showingReview;
        const reviewEl = document.getElementById('question-review');
        const toggleIcon = document.getElementById('review-toggle-icon');
        const toggleText = document.getElementById('review-toggle-text');

        if (this.showingReview) {
            reviewEl.classList.remove('hidden');
            toggleIcon.textContent = '▲';
            toggleText.textContent = 'Ocultar revisión detallada';
            this.renderQuestionReview();
        } else {
            reviewEl.classList.add('hidden');
            toggleIcon.textContent = '▼';
            toggleText.textContent = 'Ver revisión detallada';
        }
    },

    renderQuestionReview() {
        const container = document.getElementById('question-review');
        container.innerHTML = '';

        this.currentResult.details.forEach((detail, idx) => {
            const q = this.currentResult.questions[idx];
            if (!q) return;

            const div = document.createElement('div');
            div.className = 'animate-fade-in';
            div.style.animationDelay = `${idx * 0.05}s`;

            const isCorrect = detail.isCorrect;
            const borderColor = isCorrect ? '#10b981' : '#ef4444';

            const timeSpent = (this.currentResult.timeRecords && this.currentResult.timeRecords[q.id])
                ? this.currentResult.timeRecords[q.id]
                : 0;

            const timeBadge = timeSpent > 120
                ? `<span style="color: #ef4444; font-weight: bold; background: rgba(239,68,68,0.1); padding: 2px 6px; border-radius: 4px;">⏱️ ${timeSpent}s (Lento)</span>`
                : `<span style="color: var(--color-text-muted);">⏱️ ${timeSpent}s</span>`;

            let justificacionHtml = '';
            if (q.justificacion) {
                if (!isCorrect) {
                    justificacionHtml = `
                    <div style="margin-top: 12px; border-top: 1px solid var(--color-border); padding-top: 12px;">
                        <button onclick="this.nextElementSibling.classList.toggle('hidden')" style="background: var(--color-surface-2); border: 1px solid var(--color-border); padding: 6px 12px; border-radius: 6px; color: var(--color-primary); cursor: pointer; font-size: 0.8rem; display: flex; align-items: center; gap: 6px; transition: all 0.2s;">
                            💡 Ver Explicación
                        </button>
                        <div class="hidden" style="margin-top: 12px; padding: 12px; background: rgba(99, 102, 241, 0.05); border-radius: 8px; font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; border-left: 3px solid var(--color-primary);">
                            <strong style="color: var(--color-text);">Explicación:</strong> ${q.justificacion}
                        </div>
                    </div>`;
                } else {
                    justificacionHtml = `<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5;">
                      <strong style="color: var(--color-text);">💡 Explicación:</strong> ${q.justificacion}
                  </div>`;
                }
            }

            let imageHtml = '';
            if (q.imagen) {
                imageHtml = `<div style="margin-bottom: 12px; text-align: center;"><img src="${q.imagen}" alt="Imagen de soporte" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>`;
            }

            let chartHtml = '';
            if (q.grafica && q.grafica.datos) {
                chartHtml = `<div id="review-chart-container-${idx}" style="margin-bottom: 12px; width: 100%;">
                    <div style="padding: 16px; background: var(--color-surface-2); border-radius: 12px;">
                        <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📊 Gráfica</h4>
                        <div style="height: 300px; position: relative;">
                            <canvas id="review-chart-${idx}"></canvas>
                        </div>
                    </div>
                </div>`;
            }

            let opcionesHtml = '';
            if (q.opciones) {
                opcionesHtml = q.opciones.map(opt => {
                    const styleStr = opt.id === detail.correct
                        ? 'background: rgba(16,185,129,0.15); color: #34d399; font-weight: 500;'
                        : (opt.id === detail.answered
                            ? 'background: rgba(239,68,68,0.15); color: #ef4444; text-decoration: line-through;'
                            : 'color: var(--color-text-muted);');
                    return '<div style="margin-bottom: 6px; padding: 4px; border-radius: 4px; ' + styleStr + '">' +
                        '<strong style="margin-right: 8px;">' + opt.id + ')</strong> ' + opt.texto +
                        '</div>';
                }).join('');
            }

            const tuRespuestaStyle = !detail.answered ? 'color: #ef4444;' : '';

            div.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 8px;">
                        <span>Pregunta ${idx + 1} - ${isCorrect ? '<span style="color: #34d399;">✓ Correcta</span>' : '<span style="color: #ef4444;">✗ Incorrecta</span>'}</span>
                        ${timeBadge}
                    </div>
                    <div class="glass" style="padding: 20px; border-left: 3px solid ${borderColor};">
                        <div style="font-size: 0.95rem; margin-bottom: 16px; line-height: 1.5;" class="question-text-rendered">${typeof renderMarkdown === 'function' ? renderMarkdown(q.enunciado) : q.enunciado}</div>
                        ${imageHtml}
                        ${chartHtml}
                        
                        <div style="font-size: 0.85rem; margin-bottom: 16px; padding: 12px; background: rgba(0,0,0,0.2); border-radius: 8px;">
                            <div style="margin-bottom: 8px; font-weight: 600; color: var(--color-text-muted); border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px;">Opciones:</div>
                            ${opcionesHtml}
                        </div>

                        <div style="font-size: 0.8rem; color: var(--color-text-muted); display:flex; gap:16px;">
                            <span>Tu respuesta: <strong style="${tuRespuestaStyle}">${detail.answered || 'Sin responder'}</strong></span>
                            <span>Respuesta correcta: <strong style="color: #34d399;">${detail.correct}</strong></span>
                        </div>
                        ${justificacionHtml}
                    </div>
                `;

            if (q.grafica && q.grafica.datos && window.ExamEngine) {
                setTimeout(() => {
                    window.ExamEngine.renderChart(q.grafica, `review-chart-container-${idx}`, `review-chart-${idx}`);
                }, 50);
            }

            container.appendChild(div);
        });
    },

    getScoreColor(percentage) {
        if (percentage >= 80) return '#10b981';
        if (percentage >= 60) return '#f59e0b';
        return '#ef4444';
    },

    newExam() {
        Router.go('config');
    }
};

// ============ TEACHER MODULE ============
// ============ THEME ENGINE ============
const ThemeModule = {
    init() {
        const savedTheme = localStorage.getItem('saber11_theme') || 'dark';
        this.setTheme(savedTheme);
    },

    toggle() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('saber11_theme', theme);

        // Update button icon if exists
        const btn = document.getElementById('theme-toggle-btn');
        if (btn) {
            btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
            btn.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
            // Update button style for contrast
            btn.style.background = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)';
            btn.style.color = theme === 'dark' ? '#f59e0b' : '#6366f1';
        }
    }
};

// --- INDEXED DB HELPER ---
const SimpleIDB = {
    dbName: 'Saber11PDFs',
    storeName: 'files',

    async open() {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onerror = () => reject(request.error);
            request.onsuccess = () => resolve(request.result);
            request.onupgradeneeded = (event) => {
                event.target.result.createObjectStore(this.storeName);
            };
        });
    },

    async save(key, blob) {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const request = store.put(blob, key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    async get(key) {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readonly');
            const store = tx.objectStore(this.storeName);
            const request = store.get(key);
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });
    },

    async delete(key) {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const request = store.delete(key);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    },

    async clear() {
        const db = await this.open();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(this.storeName, 'readwrite');
            const store = tx.objectStore(this.storeName);
            const request = store.clear();
            request.onsuccess = () => resolve();
            request.onerror = () => reject(request.error);
        });
    }
};

// --- PDF EXAM MODULE ---
const PDFExamModule = {
    currentPDFBlob: null,
    currentExam: null,
    userAnswers: {},
    currentScale: 1.0, // Initialize scale

    saveProgress() {
        if (!this.currentExam) return;
        const state = {
            isServer: !!this.currentExam.url,
            url: this.currentExam.url,
            examId: this.currentExam.id,
            title: this.currentExam.title,
            questionsCount: this.currentExam.questionsCount,
            answersKey: this.currentExam.answers,
            metadata: this.currentExam.metadata,
            userAnswers: this.userAnswers,
            startTime: this.startTime,
            studentName: this.currentExam.studentName,
            currentScale: this.currentScale
        };
        localStorage.setItem('saber11_active_pdf_exam', JSON.stringify(state));
    },

    clearProgress() {
        localStorage.removeItem('saber11_active_pdf_exam');
    },

    async resume(state) {
        // Show Loading
        const loadingMsg = document.createElement('div');
        loadingMsg.innerHTML = `<div style="position:fixed; inset:0; background:rgba(0,0,0,0.8); color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:3000; font-size:1.5rem;"><div>⏳</div><div>Recuperando simulacro PDF...</div></div>`;
        document.body.appendChild(loadingMsg);

        try {
            if (state.isServer && state.url) {
                const res = await fetch(state.url);
                if (!res.ok) throw new Error('Error descargando archivo guardado');
                this.currentPDFBlob = await res.blob();
            } else if (state.examId) {
                const data = await SimpleIDB.get(state.examId);
                if (!data) throw new Error('El PDF local ya no existe en la base de datos');
                this.currentPDFBlob = data instanceof Blob ? data : data.pdfBlob;
            } else {
                throw new Error('Estado de simulacro inválido');
            }

            this.currentExam = {
                id: state.examId,
                url: state.url,
                title: state.title,
                questionsCount: state.questionsCount,
                answers: state.answersKey || [],
                metadata: state.metadata || [],
                studentName: state.studentName
            };
            this.userAnswers = state.userAnswers || {};
            this.startTime = state.startTime;
            this.currentScale = state.currentScale || 1.0;

            loadingMsg.remove();
            Router.go('pdf-exam');
            this.renderExamUI();

            // Restore visual bubbles
            setTimeout(() => {
                Object.keys(this.userAnswers).forEach(qIndex => {
                    this.selectAnswer(qIndex, this.userAnswers[qIndex]);
                });
            }, 500);

        } catch (e) {
            loadingMsg.remove();
            console.error(e);
            NotificationModule.show('Error al reanudar: ' + e.message, 'error');
            this.clearProgress();
            Router.go('home');
        }
    },

    openSetupModal(forceTeacher = false) {
        // If student (and not forced), show exam list instead of setup
        if ((!window.TeacherModule || window.location.hash !== '#teacher') && !forceTeacher) {
            this.renderStudentList();
            return;
        }

        if (!document.getElementById('pdf-setup-modal')) {
            this.injectModal();
        }
        const modal = document.getElementById('pdf-setup-modal');
        modal.classList.remove('hidden');
        modal.style.display = 'flex';
    },

    async renderStudentList() {
        // Fetch server PDFs
        const serverFiles = await LocalServerModule.getPDFs();

        // Fetch local PDFs (if any, though usually for teacher)
        // Students might not have local ones unless they essentially are the same app instance
        // For now, let's show Server Content primarily.

        const listHTML = `
                <div id="pdf-student-modal" class="modal" style="position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 2000; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
                    <div class="glass" style="width: 600px; max-height: 90vh; display: flex; flex-direction: column; padding: 0; border: 1px solid var(--color-border);">
                         <div style="padding: 20px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 1.25rem; font-weight: 700;">📚 Simulacros Disponibles</h2>
                            <button onclick="document.getElementById('pdf-student-modal').remove(); Router.go('home');" style="background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--color-text-muted);">✕</button>
                        </div>
                        <div style="padding: 24px; overflow-y: auto;">
                            ${serverFiles.length === 0 ?
                `<div style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                            <div style="font-size: 3rem; margin-bottom: 12px;">📭</div>
                            <div style="margin-bottom: 16px;">No hay simulacros disponibles en el servidor.<br>Pide a tu docente que suba uno.</div>
                            <button class="btn btn-sm btn-ghost" onclick="PDFExamModule.teacherQuickUpload()" style="font-size: 0.8rem; opacity: 0.7; margin-top: 16px;">👨‍🏫 Soy Docente: Subir PDF</button>
                        </div>` :
                `<div style="display: grid; gap: 12px;">
                                    ${serverFiles.map(f => `
                                        <div class="glass glass-hover" style="padding: 16px; display: flex; align-items: center; gap: 16px; cursor: pointer;" onclick="PDFExamModule.startServerExam('${f.url}', '${f.name}')">
                                            <div style="font-size: 2rem; color: var(--color-primary);">📄</div>
                                            <div style="flex: 1;">
                                                <div style="font-weight: 700; font-size: 1.1rem;">${f.name.replace(/_/g, ' ').replace('.pdf', '')}</div>
                                                <div style="font-size: 0.8rem; color: var(--color-text-muted);">PDF en Servidor • ${f.size}</div>
                                            </div>
                                            <button class="btn btn-primary btn-sm">Iniciar 🚀</button>
                                        </div>
                                    `).join('')}
                                    <div style="margin-top: 16px; text-align: center;">
                                        <button class="btn btn-sm btn-ghost" onclick="PDFExamModule.teacherQuickUpload()" style="font-size: 0.8rem; opacity: 0.6;">👨‍🏫 Subir otro PDF</button>
                                    </div>
                                </div>`
            }
                        </div>
                    </div>
                </div>
                `;

        const existing = document.getElementById('pdf-student-modal');
        if (existing) existing.remove();

        document.body.insertAdjacentHTML('beforeend', listHTML);
    },

    async teacherQuickUpload() {
        // Now acting as "Nuevo Simulacro" shortcut
        this.openSetupModal(true);
    },

    async startServerExam(url, title) {
        if (!confirm('¿Iniciar este simulacro?')) return;

        // Close list
        const modal = document.getElementById('pdf-student-modal');
        if (modal) modal.remove();

        // Show Loading
        // Fetch PDF as Blob
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Error descargando PDF');
            const blob = await response.blob();

            // Setup dummy exam object
            this.currentExam = {
                id: 'server_' + Date.now(),
                title: title.replace('.pdf', ''),
                questionsCount: 50, // Default or ask user?
                answers: [], // No key for now, self-assessment? Or generic 1-50
                metadata: [],
                date: new Date().toISOString()
            };

            this.currentPDFBlob = blob;
            this.userAnswers = {};
            this.startTime = Date.now(); // Track time

            // Render Exam UI
            this.renderExamUI();

        } catch (e) {
            NotificationModule.show('Error cargando simulacro: ' + e.message, 'error');
            Router.go('home');
        }
    },

    closeSetupModal() {
        const modal = document.getElementById('pdf-setup-modal');
        modal.classList.add('hidden');
        modal.style.display = 'none';
    },

    injectModal() {
        const modalHTML = `
                <div id="pdf-setup-modal" class="modal hidden" style="position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 2000; display: none; align-items: center; justify-content: center; backdrop-filter: blur(5px);">
                    <div class="glass" style="width: 500px; max-height: 90vh; display: flex; flex-direction: column; padding: 0; border: 1px solid var(--color-border); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                        <div style="padding: 20px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center;">
                            <h2 style="font-size: 1.25rem; font-weight: 700;">Nuevo Simulacro PDF</h2>
                            <button onclick="PDFExamModule.closeSetupModal()" style="background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--color-text-muted);">✕</button>
                        </div>
                        
                        <div style="padding: 24px; overflow-y: auto;">
                            <!-- Step 1: Upload -->
                            <div style="margin-bottom: 24px;">
                                <label style="display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 8px;">1. Cargar Archivo PDF</label>
                                <div style="border: 2px dashed var(--color-border); padding: 24px; text-align: center; border-radius: 12px; cursor: pointer; transition: all 0.2s;" 
                                     onclick="document.getElementById('pdf-input-file').click()"
                                     ondragover="event.preventDefault(); this.style.borderColor = 'var(--color-primary)';"
                                     ondragleave="this.style.borderColor = 'var(--color-border)';"
                                     ondrop="event.preventDefault(); PDFExamModule.handleDrop(event)">
                                    <div style="font-size: 2rem; margin-bottom: 8px;">📄</div>
                                    <p style="margin: 0; color: var(--color-text-muted); font-size: 0.9rem;">Click para subir o arrastra aquí</p>
                                    <input type="file" id="pdf-input-file" accept="application/pdf" style="display: none;" onchange="PDFExamModule.handleFileSelect(event)">
                                    <p id="pdf-filename" style="margin-top: 8px; font-weight: 600; color: var(--color-primary);"></p>
                                </div>
                            </div>

                            <!-- Step 2: Info -->
                            <div style="margin-bottom: 20px;">
                                <label style="display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 8px;">Título</label>
                                <input id="pdf-exam-title" type="text" placeholder="Ej: Simulacro Matemáticas 2024-1" style="width: 100%; padding: 10px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text);">
                            </div>

                            <!-- Step 3: Key Config -->
                            <div style="margin-bottom: 20px;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
                                    <label style="font-size: 0.9rem; font-weight: 600;">Hoja de Respuestas</label>
                                    
                                    <div style="display: flex; gap: 10px; align-items: center;">
                                         <button class="btn btn-sm btn-secondary" onclick="document.getElementById('answers-file-input').click()" title="Subir TXT con respuestas">
                                            📥 Cargar TXT
                                        </button>
                                        <input type="file" id="answers-file-input" accept=".txt,.csv,.key" style="display:none" onchange="PDFExamModule.handleAnswersFile(event)">
                                        
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <span style="font-size: 0.85rem; color: var(--color-text-muted); text-align: right;">Cant:</span>
                                            <input type="number" id="pdf-q-count" value="10" min="1" max="200" style="width: 60px; padding: 4px; background: var(--color-bg); border: 1px solid var(--color-border); border-radius: 8px; color: var(--color-text); text-align: center;" onchange="PDFExamModule.renderAnswerKeygrid()">
                                        </div>
                                    </div>
                                </div>
                                
                                <!-- Password Protection UI -->
                                <div id="key-lock-container" style="text-align: center; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; margin-bottom: 10px;">
                                    <p style="margin-bottom: 10px; font-size: 0.9rem;">🔒 Respuestas protegidas</p>
                                    <button class="btn btn-sm btn-primary" onclick="PDFExamModule.unlockAnswerKey()">Ver/Editar Respuestas</button>
                                </div>

                                <div id="answer-key-grid" style="display: none; grid-template-columns: repeat(5, 1fr); gap: 8px; max-height: 200px; overflow-y: auto; padding: 4px;">
                                    <!-- Generated by JS -->
                                </div>
                            </div>
                        </div>

                        <div style="padding: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end; gap: 12px;">
                            <button class="btn btn-secondary" onclick="PDFExamModule.closeSetupModal()">Cancelar</button>
                            <button class="btn btn-primary" onclick="PDFExamModule.saveExam()">Guardar Simulacro</button>
                        </div>
                    </div>
                </div>
                `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.renderAnswerKeygrid();
    },

    unlockAnswerKey() {
        const password = prompt('Ingrese la contraseña para ver las respuestas:');
        if (password === '9090') {
            document.getElementById('key-lock-container').style.display = 'none';
            document.getElementById('answer-key-grid').style.display = 'grid';
        } else {
            NotificationModule.show('Contraseña incorrecta.', 'error');
        }
    },

    async handleAnswersFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        let text = await file.text();

        // Try to detect if it's Base64 (obfuscated)
        // Simple heuristic: try to decode, if it yields readable text with digits/letters, use it.
        try {
            // Remove whitespace just in case
            const clean = text.replace(/\s/g, '');
            // Only try if it looks like base64 (no special chars like ; unless encoded)
            if (/^[A-Za-z0-9+/=]+$/.test(clean)) {
                const decoded = atob(clean);
                // Check if decoded looks like answers (contains numbers or A-D)
                if (decoded.match(/[a-dA-D]/)) {
                    text = decoded;
                    // console.log("Archivo ofuscado detectado y decodificado.");
                }
            }
        } catch (e) {
            // Not base64 or failed, proceed as plain text
        }

        // 1. Normalize: Replace semicolons AND COMMAS with newlines to handle various formats
        // 2. Split by newlines
        // 3. Filter empty
        const lines = text.replace(/[;,]/g, '\n').split(/\r?\n/).filter(line => line.trim() !== '');

        // Parse answers
        const answers = [];
        lines.forEach(line => {
            // Match pattern like "1. A", "1 A", or just "A" at start or end
            // We look for a standalone letter A-D 
            const match = line.match(/\b([a-dA-D])\b/);
            if (match) {
                answers.push(match[1].toUpperCase());
            }
        });

        if (answers.length > 0) {
            // Update count
            document.getElementById('pdf-q-count').value = answers.length;

            // Render grid
            this.renderAnswerKeygrid();

            // Fill grid
            setTimeout(() => {
                answers.forEach((ans, i) => {
                    const select = document.getElementById(`key-${i + 1}`);
                    if (select) select.value = ans;
                });
                NotificationModule.show(`Se cargaron ${answers.length} respuestas detectadas.`, 'success');
            }, 50);
        } else {
            NotificationModule.show('No se encontraron respuestas válidas (A, B, C, D). Asegúrate de que el archivo tenga letras de respuesta separadas por enters, comas o punto y coma.', 'error', 6000);
        }

        event.target.value = ''; // Reset
    },

    handleFileSelect(e) {
        const file = e.target.files[0];
        if (file) this.processFile(file);
    },

    handleDrop(e) {
        const file = e.dataTransfer.files[0];
        if (file && file.type === 'application/pdf') this.processFile(file);
    },

    processFile(file) {
        this.currentPDFBlob = file;
        document.getElementById('pdf-filename').textContent = file.name;
    },

    renderAnswerKeygrid() {
        const count = parseInt(document.getElementById('pdf-q-count').value) || 10;
        const grid = document.getElementById('answer-key-grid');
        grid.innerHTML = '';

        // Grid of answers
        for (let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            div.id = `q-config-${i}`;
            div.style.cssText = 'background: var(--color-surface-2); padding: 8px; border-radius: 6px; text-align: center; border: 1px solid transparent; transition: all 0.2s;';
            div.innerHTML = `
                        <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-bottom: 4px;">${i}</div>
                        <select id="key-${i}" style="width: 100%; background: transparent; border: none; color: var(--color-text); font-weight: 700; text-align: center;">
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        <input type="hidden" id="area-${i}" value="simulacro pdf">
                        <input type="hidden" id="comp-${i}" value="General">
                    `;
            grid.appendChild(div);
        }

        // Bulk Assignment UI
        const bulkContainer = document.createElement('div');
        bulkContainer.style.cssText = 'margin-top: 20px; padding: 16px; background: var(--color-surface-2); border-radius: 12px; border: 1px solid var(--color-border);';

        const areaOptions = Object.keys(ConfigModule.areaConfig || {}).map(k => `<option value="${k}">${ConfigModule.areaConfig[k].name}</option>`).join('');

        bulkContainer.innerHTML = `
                    <h4 style="font-size: 0.9rem; margin-bottom: 12px; color: var(--color-text);">⚡ Asignación Masiva</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px;">
                        <input type="number" id="bulk-start" placeholder="Desde (1)" min="1" max="${count}" class="input-field" style="padding: 8px;">
                        <input type="number" id="bulk-end" placeholder="Hasta (${count})" min="1" max="${count}" class="input-field" style="padding: 8px;">
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 12px;">
                        <select id="bulk-area" class="input-field" style="padding: 8px;">
                            ${areaOptions}
                        </select>
                        <input type="text" id="bulk-comp" placeholder="Competencia (ej: Razonamiento)" class="input-field" style="padding: 8px;">
                    </div>
                    <button class="btn btn-primary btn-sm" style="width: 100%;" onclick="PDFExamModule.applyBulkConfig()">Asignar a Rango</button>
                    <div id="bulk-status" style="margin-top: 8px; font-size: 0.8rem; color: var(--color-success); text-align: center; min-height: 1.2em;"></div>
                `;
        grid.after(bulkContainer);
    },

    applyBulkConfig() {
        const start = parseInt(document.getElementById('bulk-start').value) || 1;
        const end = parseInt(document.getElementById('bulk-end').value) || parseInt(document.getElementById('pdf-q-count').value);
        const area = document.getElementById('bulk-area').value;
        const comp = document.getElementById('bulk-comp').value.trim() || 'General';

        if (start > end) return NotificationModule.show('El inicio debe ser menor al fin', 'warning');

        const color = ConfigModule.areaConfig[area]?.color || 'var(--color-text)';

        for (let i = start; i <= end; i++) {
            const box = document.getElementById(`q-config-${i}`);
            if (box) {
                document.getElementById(`area-${i}`).value = area;
                document.getElementById(`comp-${i}`).value = comp;
                box.style.borderColor = `rgb(${color})`;
                box.style.background = `rgba(${color}, 0.1)`;
            }
        }

        const status = document.getElementById('bulk-status');
        status.textContent = `✅ Asignado: Preguntas ${start}-${end}`;
        setTimeout(() => status.textContent = '', 3000);
    },

    async saveExam() {
        if (!this.currentPDFBlob) return NotificationModule.show('Debes cargar un PDF', 'warning');
        const title = document.getElementById('pdf-exam-title').value.trim();
        if (!title) return NotificationModule.show('Debes poner un título', 'warning');

        const count = parseInt(document.getElementById('pdf-q-count').value);
        const answers = [];
        const metadata = [];

        for (let i = 1; i <= count; i++) {
            answers.push(document.getElementById(`key-${i}`).value);
            metadata.push({
                q: i,
                area: document.getElementById(`area-${i}`).value,
                competencia: document.getElementById(`comp-${i}`).value
            });
        }

        const id = Date.now().toString();
        const examMeta = { id, type: 'pdf', title, questionsCount: count, answers, metadata, date: new Date().toISOString() };

        const examData = {
            id: id,
            title: title,
            questionsCount: count,
            date: new Date().toISOString(),
            pdfBlob: this.currentPDFBlob,
            answers: answers
        };

        try {
            await SimpleIDB.save(id, examData);
            const exams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
            exams.push(examMeta);
            localStorage.setItem('icfes_pdf_exams', JSON.stringify(exams));

            NotificationModule.show('Simulacro PDF guardado correctamente', 'success');
            this.closeSetupModal();

            // Update Teacher view if active
            if (typeof TeacherModule !== 'undefined') {
                TeacherModule.setTab('pdf');
                TeacherModule.renderStats(); // Update counters
            }
        } catch (e) {
            console.error(e);
            NotificationModule.show('Error al guardar: ' + e.message, 'error');
        }
    },

    // --- EXAM RUNTIME ---
    // --- EXAM RUNTIME ---
    async startExam(id) {
        const exams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
        const exam = exams.find(e => e.id === id);
        if (!exam) return;

        // Validate Name for PDF too
        let studentName = localStorage.getItem('saber11_student_name');
        if (!studentName) {
            studentName = prompt('👤 Por favor ingresa tu nombre para iniciar el simulacro:');
            if (!studentName) return;
            localStorage.setItem('saber11_student_name', studentName);
        }

        try {
            const data = await SimpleIDB.get(id);
            if (!data) throw new Error('PDF data not found');

            if (data instanceof Blob) {
                this.currentPDFBlob = data;
            } else if (data.pdfBlob) {
                this.currentPDFBlob = data.pdfBlob;
            } else {
                throw new Error('Formato de PDF inválido en base de datos');
            }
            this.currentExam = { ...exam, studentName }; // Store name in currentExam
            this.userAnswers = {};
            this.startTime = Date.now();

            Router.go('pdf-exam');
            this.renderExamUI();
        } catch (e) {
            console.error(e);
            NotificationModule.show('Error al cargar PDF: ' + e.message, 'error');
        }
    },

    async startServerExam(url, name, encodedMetadata = null) {
        // Validate Name
        let studentName = localStorage.getItem('saber11_student_name');
        if (!studentName) {
            studentName = prompt('👤 Por favor ingresa tu nombre para iniciar el simulacro:');
            if (!studentName) return;
            localStorage.setItem('saber11_student_name', studentName);
        }

        let count = 50;
        let metadataObj = null;

        if (encodedMetadata) {
            try {
                metadataObj = JSON.parse(decodeURIComponent(encodedMetadata));
                count = metadataObj.questionsCount || 50;
            } catch (e) { console.error('Error parsing metadata', e) }
        } else {
            const countStr = prompt(`🔢 ¿Cuántas preguntas tiene el simulacro "${name}"?`, '50');
            if (!countStr) return;
            count = parseInt(countStr) || 50;
        }

        const loadingMsg = document.createElement('div');
        loadingMsg.innerHTML = `<div style="position:fixed; inset:0; background:rgba(0,0,0,0.8); color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:3000; font-size:1.5rem;"><div>⏳</div><div>Descargando PDF del servidor...</div></div>`;
        document.body.appendChild(loadingMsg);

        try {
            // Fix URL if needed (handle localhost/127.0.0.1 mismatch)
            let fetchUrl = url;
            if (url.startsWith('/')) {
                const baseUrl = window.location.protocol === 'file:' ? 'http://127.0.0.1:8000' : window.location.origin;
                fetchUrl = baseUrl + url;
            }

            const res = await fetch(fetchUrl);
            if (!res.ok) throw new Error('Error descargando archivo');
            const blob = await res.blob();

            this.currentPDFBlob = blob;
            this.currentExam = {
                url: fetchUrl, // Save URL for auto-save
                title: name,
                questionsCount: count,
                date: metadataObj ? metadataObj.date : new Date().toISOString(),
                answers: metadataObj ? (metadataObj.answers || []) : [],
                studentName: studentName,
                metadata: metadataObj ? (metadataObj.metadata || []) : []
            };
            this.userAnswers = {};
            this.startTime = Date.now();

            // Close modal if open
            const modal = document.getElementById('pdf-student-modal');
            if (modal) modal.remove();

            loadingMsg.remove();
            Router.go('pdf-exam');
            this.renderExamUI();

        } catch (e) {
            loadingMsg.remove();
            console.error(e);
            NotificationModule.show('Error al descargar el PDF: ' + e.message, 'error');
        }
    },

    closeExam() {
        const examView = document.getElementById('view-pdf-exam');
        if (examView) {
            examView.classList.add('hidden');
            examView.style.display = 'none';
        }

        // Return to context (Teacher or Student)
        if (window.lastMainView === 'teacher') {
            Router.go('teacher');
        } else {
            Router.go('config');
        }
    },

    renderExamUI() {
        // Hide ALL views first
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.add('hidden');
            el.style.display = 'none'; // Force hide
        });

        // Prepare Exam View
        let examView = document.getElementById('view-pdf-exam');
        if (!examView) {
            examView = document.createElement('div');
            examView.id = 'view-pdf-exam';
            examView.className = 'pdf-exam-layout';
            document.body.appendChild(examView);
        } else {
            examView.classList.remove('hidden');
            examView.style.display = '';
        }

        examView.innerHTML = `
                <div class="pdf-sidebar">
                    <div style="padding: 20px; border-bottom: 1px solid var(--color-border); text-align: center; background: var(--color-surface-2);">
                        <h3 style="margin-bottom: 4px; font-size: 1.1rem;">${this.currentExam.title}</h3>
                            <div style="font-size: 0.85rem; color: var(--color-text-muted);">Hoja de Respuestas</div>
                        </div>
                        
                        <div style="flex: 1; overflow-y: auto; padding: 20px;">
                            <div class="q-grid" style="display: grid; gap: 12px;">
                                ${Array.from({ length: this.currentExam.questionsCount }, (_, i) => i + 1).map(i => `
                                    <div style="display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--color-border); break-inside: avoid;">
                                        <span style="font-weight: 700; width: 30px; color: var(--color-text-muted);">${i}.</span>
                                        <div style="display: flex; gap: 10px;">
                                            ${['A', 'B', 'C', 'D'].map(opt => `
                                                <div onclick="PDFExamModule.selectAnswer(${i}, '${opt}')" 
                                                     id="bubble-${i}-${opt}"
                                                     style="width: 36px; height: 36px; border-radius: 50%; border: 2px solid var(--color-border); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.9rem; font-weight: 600; transition: all 0.2s; color: var(--color-text-muted);">
                                                    ${opt}
                                                </div>
                                            `).join('')}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div style="padding: 20px; border-top: 1px solid var(--color-border); background: var(--color-surface);">
                            <button class="btn btn-primary" onclick="PDFExamModule.finishExam()" style="width: 100%; padding: 14px; font-size: 1rem;">Finalizar Prueba</button>
                        </div>
                    </div>

                    <div id="pdf-viewer-container" class="pdf-viewer" style="overflow: auto; justify-content: flex-start; align-items: center;">
                         <div id="pdf-pages" style="display: flex; flex-direction: column; gap: 20px; align-items: center; width: max-content; min-width: 100%;">
                            <div style="color: white; margin-top: 50px;">Cargando documento...</div>
                         </div>

                         <!-- Floating Controls -->
                        <div style="position: absolute; bottom: 30px; left: 30px; background: #1e293b; padding: 10px 20px; border-radius: 99px; color: white; display: flex; align-items: center; gap: 16px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); z-index: 100;">
                             <button onclick="PDFExamModule.changeZoom(-0.2)" style="background:none; border:none; color:white; font-size: 1.2rem; cursor: pointer;">−</button>
                             <span id="zoom-level" style="font-weight: 600; font-family: 'Outfit'; min-width: 50px; text-align: center;">100%</span>
                             <button onclick="PDFExamModule.changeZoom(0.2)" style="background:none; border:none; color:white; font-size: 1.2rem; cursor: pointer;">+</button>
                        </div>
                         
                        <!-- Floating Close Button -->
                        <button onclick="PDFExamModule.closeExam()" style="position: absolute; top: 20px; left: 20px; z-index: 10; background: #1e293b; color: white; border: 1px solid rgba(255,255,255,0.1); padding: 10px 16px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-weight: 500; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);">
                            <span>←</span> Volver
                        </button>
                    </div>
                `;

        // Start rendering pages
        this.renderPages();
    },

    async renderPages() {
        const container = document.getElementById('pdf-pages');
        if (!container || !this.currentPDFBlob) return;

        try {
            const arrayBuffer = await this.currentPDFBlob.arrayBuffer();
            this.pdfDoc = await pdfjsLib.getDocument(arrayBuffer).promise;

            container.innerHTML = ''; // Clear loading

            for (let i = 1; i <= this.pdfDoc.numPages; i++) {
                const page = await this.pdfDoc.getPage(i);
                const viewport = page.getViewport({ scale: this.currentScale });

                const canvas = document.createElement('canvas');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                canvas.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";
                canvas.style.borderRadius = "4px";
                canvas.style.marginBottom = "20px";
                // canvas.style.maxWidth = "95%"; // REMOVED to allow zooming/scrolling

                container.appendChild(canvas);

                const renderContext = {
                    canvasContext: canvas.getContext('2d'),
                    viewport: viewport
                };

                await page.render(renderContext).promise;
            }
        } catch (e) {
            console.error(e);
            container.innerHTML = `<div style="color: #ef4444; margin-top: 50px;">Error al cargar PDF: ${e.message}</div>`;
        }
    },

    async changeZoom(delta) {
        this.currentScale = Math.max(0.5, Math.min(3.0, this.currentScale + delta));
        document.getElementById('zoom-level').textContent = Math.round(this.currentScale * 100) + '%';
        // Re-render
        this.renderPages();
    },



    selectAnswer(qIndex, answer) {
        this.userAnswers[qIndex] = answer;
        // Update UI
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const el = document.getElementById(`bubble-${qIndex}-${opt}`);
            if (opt === answer) {
                el.style.background = 'var(--color-primary)';
                el.style.color = 'white';
                el.style.borderColor = 'var(--color-primary)';
            } else {
                el.style.background = 'transparent';
                el.style.color = 'var(--color-text)';
                el.style.borderColor = 'var(--color-border)';
            }
        });
        this.saveProgress();
    },

    finishExam() {
        try {
            if (!confirm('¿Seguro quieres finalizar?')) return;

            console.log('Iniciando finalización de examen PDF...');

            // Hide the PDF view IMMEDIATELY to prevent visual blocking
            const examView = document.getElementById('view-pdf-exam');
            if (examView) {
                examView.classList.add('hidden');
                examView.style.display = 'none';
            }

            this.clearProgress();

            if (!this.currentExam || !this.currentExam.answers) {
                throw new Error('Datos del examen corruptos o incompletos.');
            }

            // Construct questions array for ResultsEngine
            let questions = [];
            if (this.currentExam.metadata && this.currentExam.metadata.length > 0) {
                // Use rich metadata if available
                questions = this.currentExam.metadata.map(m => ({
                    id: m.q,
                    respuestaCorrecta: this.currentExam.answers[m.q - 1],
                    area: m.area || 'Simulacro PDF',
                    competencia: m.competencia || 'General'
                }));
            } else {
                // Fallback for old exams
                questions = this.currentExam.answers.map((ans, i) => ({
                    id: i + 1,
                    respuestaCorrecta: ans,
                    area: 'Simulacro PDF',
                    competencia: 'General'
                }));
            }

            console.log('DEBUG PDF FINALIZAR:', {
                answersLength: this.currentExam.answers.length,
                metadataLength: this.currentExam.metadata ? this.currentExam.metadata.length : 0,
                questionsSample: questions.slice(0, 3),
                userAnswers: this.userAnswers,
                firstAnswerCorrect: questions[0].respuestaCorrecta,
                studentName: this.currentExam.studentName // Pass name to results
            });

            // Calculate results using the engine
            ResultsEngine.calculate(questions, this.userAnswers, this.startTime || (Date.now() - (this.currentExam.questionsCount * 60 * 1000))); // Fallback time if undefined

            // Switch view
            Router.go('results');

        } catch (e) {
            console.error('Error finalizando examen PDF:', e);
            NotificationModule.show('Error crítico al procesar resultados: ' + e.message, 'error');

            // Recover
            Router.go('home');
        }
    }
};

const TeacherModule = {
    currentPage: 1,
    perPage: 15,
    filtered: [],
    currentSearch: '',
    currentArea: '',
    currentTab: 'questions', // 'questions' or 'pdfs'

    init() {
        this.renderStats();
        this.renderTabs();
    },

    setTab(tab) {
        this.currentTab = tab;
        this.renderTabs();
    },

    renderTabs() {
        const container = document.getElementById('teacher-content-area');
        if (!container) return; // Guard clause if UI not ready

        // 1. Render Tab Navigation
        const tabsHTML = `
                    <div style="display: flex; gap: 16px; margin-bottom: 24px; border-bottom: 1px solid var(--color-border);">
                        <button onclick="TeacherModule.setTab('questions')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'questions' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'questions' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            🧩 Banco de Preguntas
                        </button>
                        <button onclick="TeacherModule.setTab('pdfs')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'pdfs' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'pdfs' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            📄 Simulacros PDF
                        </button>
                        <button onclick="TeacherModule.setTab('results')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'results' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'results' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            🏆 Resultados Estudiantes
                        </button>
                    </div>
                    <div id="teacher-tab-content"></div>
                `;

        // Only update tabs if changed to avoid full re-render flickering
        if (!document.getElementById('teacher-tab-nav')) {
            container.innerHTML = `<div id="teacher-tab-nav">${tabsHTML}</div>`;
        } else {
            document.getElementById('teacher-tab-nav').innerHTML = tabsHTML;
        }

        // 2. Render Content based on Tab
        if (this.currentTab === 'questions') {
            this.renderQuestionsPanel();
        } else if (this.currentTab === 'pdfs') {
            this.renderPDFPanel();
        } else {
            this.renderResultsPanel();
        }
    },

    renderQuestionsPanel() {
        const content = document.getElementById('teacher-tab-content');
        content.innerHTML = `
                    <!-- Filters & Search -->
                    <div class="glass" style="padding: 24px; display: flex; gap: 20px; flex-wrap: wrap; align-items: center; margin-bottom: 24px;">
                        <div style="flex: 1; min-width: 280px;">
                            <div style="position: relative;">
                                <span style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); opacity: 0.5;">🔍</span>
                                <input type="text" id="teacher-search" class="input"
                                    placeholder="Buscar preguntas por tema o contenido..." oninput="TeacherModule.filter()"
                                    style="padding-left: 44px; width: 100%;">
                            </div>
                        </div>
                        <div style="width: 240px;">
                            <select id="teacher-area-filter" class="select" onchange="TeacherModule.filter()">
                                <option value="">Todas las áreas</option>
                                <option value="matematicas">📐 Matemáticas</option>
                                <option value="lectura">📖 Lectura Crítica</option>
                                <option value="ciencias">🔬 Ciencias Naturales</option>
                                <option value="sociales">🌎 Sociales</option>
                                <option value="ingles">🇬🇧 Inglés</option>
                            </select>
                        </div>
                    </div>

                    <!-- Table Container -->
                    <div class="glass" style="overflow-x: auto; padding: 0; border: 1px solid var(--color-border); border-radius: 16px;">
                        <table style="width: 100%; border-collapse: collapse; min-width: 800px;">
                            <thead style="background: var(--color-surface-2); border-bottom: 1px solid var(--color-border);">
                                <tr>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">#</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Área</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Tema</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Tipo</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em; width: 40%;">Enunciado</th>
                                    <th style="padding: 16px; text-align: center; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Acciones</th>
                                </tr>
                            </thead>
                            <tbody id="teacher-table-body">
                                <!-- Filled by JS -->
                            </tbody>
                        </table>
                    </div>
                    <div id="teacher-pagination" style="margin-top: 24px; display: flex; justify-content: center; gap: 8px;"></div>
                `;
        this.filter();
    },

    async generateKey() {
        const input = prompt('Ingresa las respuestas para generar la llave.\n\nIMPORTANTE: Separa las respuestas con comas o punto y coma.\n\nEjemplo: 1. A; 2. B; 3. C');
        if (!input) return;

        // Simple obfuscation: Base64
        const obfuscated = btoa(input);

        // Download file
        const blob = new Blob([obfuscated], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'respuestas_seguras.key';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        NotificationModule.show('Llave generada y descargada. Entrega este archivo a los estudiantes.', 'success');
    },

    renderPDFPanel() {
        const content = document.getElementById('teacher-tab-content');
        const exams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');

        // Header always visible
        let html = `
                    <div style="display: flex; justify-content: flex-end; align-items: center; margin-bottom: 20px;">
                         <button class="btn btn-secondary btn-sm" onclick="TeacherModule.generateKey()">
                            🔐 Generar Llave
                        </button>
                    </div>
                `;

        if (exams.length === 0) {
            html += `
                        <div style="text-align: center; padding: 60px; color: var(--color-text-muted); background: var(--color-surface); border-radius: 16px; border: 1px dashed var(--color-border);">
                            <div style="font-size: 3rem; margin-bottom: 16px;">📄</div>
                            <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">No hay simulacros PDF</div>
                            <p style="margin-bottom: 24px;">Sube tu primer PDF usando el botón "Nuevo PDF" arriba.</p>
                            <button class="btn btn-primary" onclick="PDFExamModule.openSetupModal()">Subir PDF Ahora</button>
                        </div>
                    `;
        } else {
            html += `
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;">
                        ${exams.map(exam => `
                            <div class="glass glass-hover" style="padding: 20px; display: flex; flex-direction: column; gap: 12px; position: relative;">
                                <div style="display: flex; align-items: start; justify-content: space-between;">
                                    <div style="font-size: 2rem; background: rgba(239, 68, 68, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: var(--color-danger);">
                                        PDF
                                    </div>
                                    <div style="background: var(--color-surface-2); padding: 4px 8px; border-radius: 6px; font-size: 0.75rem; color: var(--color-text-muted);">
                                        ${new Date(exam.date).toLocaleDateString()}
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 4px; line-height: 1.3;">${exam.title}</h3>
                                    <div style="font-size: 0.85rem; color: var(--color-text-muted);">
                                        ${exam.questionsCount} preguntas
                                    </div>
                                </div>

                                <div style="margin-top: auto; display: flex; gap: 8px;">
                                    <button class="btn btn-primary btn-sm" style="flex: 1; justify-content: center;" onclick="TeacherModule.viewPDF('${exam.id}')">
                                        👁️ Ver
                                    </button>
                                    <!-- SERVER_UPLOAD_BTN -->
                                    <button class="btn btn-sm" style="background: var(--color-accent); color: white; border: none;" onclick="TeacherModule.uploadPDFToServer('${exam.id}')" title="Subir a Servidor para Estudiantes">
                                        ☁️ Subir
                                    </button>
                                    <button class="btn btn-ghost btn-sm" style="color: var(--color-danger); background: rgba(239,68,68,0.1);" onclick="TeacherModule.deletePDF('${exam.id}')">
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    `;
        }

        // Append Server PDFs Section
        html += `
                <div style="margin-top: 40px; border-top: 1px solid var(--color-border); padding-top: 24px;">
                    <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 16px; display:flex; align-items:center; gap:8px;">
                        ☁️ PDFs en el Servidor (Disponibles para Estudiantes)
                        <button class="btn btn-xs btn-ghost" onclick="TeacherModule.renderPDFPanel()">🔄</button>
                    </h3>
                    <div id="server-pdfs-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px;">
                        <div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--color-text-muted);">Cargando archivos del servidor...</div>
                    </div>
                </div>
                `;

        content.innerHTML = html;

        // Fetch server PDFs async
        LocalServerModule.getPDFs().then(files => {
            const listEl = document.getElementById('server-pdfs-list');
            if (!listEl) return;

            if (files.length === 0) {
                listEl.innerHTML = `<div style="grid-column: 1/-1; padding: 20px; text-align: center; color: var(--color-text-muted); background: var(--color-surface); border-radius: 8px;">No hay PDFs en el servidor aún.</div>`;
                return;
            }

            listEl.innerHTML = files.map(f => `
                        <div class="glass" style="padding: 16px; display: flex; align-items: center; gap: 12px;">
                            <div style="font-size: 1.5rem;">📄</div>
                            <div style="flex: 1; overflow: hidden;">
                                <div style="font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="${f.name}">${f.name}</div>
                                <div style="font-size: 0.75rem; color: var(--color-text-muted);">${f.size}</div>
                            </div>
                            <a href="${f.url}" target="_blank" class="btn btn-sm btn-ghost" title="Descargar">⬇️</a>
                        </div>
                    `).join('');
        });

        content.innerHTML = html;
    },

    renderResultsPanel() {
        const content = document.getElementById('teacher-tab-content');

        // Show loading state initially
        content.innerHTML = `
                    <div style="display: flex; justify-content: flex-end; align-items: center; gap: 10px; margin-bottom: 20px;">
                        <div id="results-sync-badge" style="display: flex; align-items: center; gap: 6px; padding: 6px 14px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; background: rgba(99,102,241,0.1); color: var(--color-primary); animation: pulse 1.5s infinite;">
                            ⏳ Sincronizando...
                        </div>
                        <button class="btn btn-sm" style="background: rgba(239,68,68,0.1); color: var(--color-danger); border: 1px solid rgba(239,68,68,0.3);" onclick="TeacherModule.resetResultsSecure()">
                            🗑️ Resetear Resultados
                        </button>
                        <button class="btn btn-primary btn-sm" onclick="TeacherModule.exportResultsSecure()">
                            📥 Exportar Reporte (CSV)
                        </button>
                    </div>
                    <div id="results-table-container" style="text-align: center; padding: 40px; color: var(--color-text-muted);">
                        <div style="font-size: 2rem; margin-bottom: 12px; animation: pulse 1.5s infinite;">🔄</div>
                        Cargando resultados del servidor...
                    </div>
                `;

        // Fetch from server and merge
        this._fetchAndRenderResults();
    },

    async _fetchAndRenderResults() {
        let serverResults = [];
        let isConnected = false;

        try {
            const url = LocalServerModule.serverUrl || (LocalServerModule.getServerBaseUrl() + '/api/results');
            const fetchUrl = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();
            const response = await fetch(fetchUrl, { signal: AbortSignal.timeout(4000), cache: 'no-store' });
            if (response.ok) {
                serverResults = await response.json();
                isConnected = true;
            }
        } catch (e) {
            console.log('No se pudo conectar al servidor para resultados:', e.message);
        }

        // Merge: server is source of truth, add any local-only results
        const localResults = JSON.parse(localStorage.getItem('saber_results_history') || '[]');
        const merged = [...serverResults];
        const serverIds = new Set(serverResults.map(r => r.id));
        localResults.forEach(local => {
            if (!serverIds.has(local.id)) merged.push(local);
        });

        // Sort newest first
        merged.sort((a, b) => new Date(b.date || b.timestamp) - new Date(a.date || a.timestamp));

        // Cache for export
        this._cachedMergedResults = merged;

        // Update sync badge
        const badge = document.getElementById('results-sync-badge');
        if (badge) {
            if (isConnected) {
                badge.style.background = 'rgba(16,185,129,0.12)';
                badge.style.color = 'var(--color-success)';
                badge.style.animation = 'none';
                badge.innerHTML = `🟢 Sincronizado (${merged.length} resultados)`;
            } else {
                badge.style.background = 'rgba(239,68,68,0.1)';
                badge.style.color = 'var(--color-danger)';
                badge.style.animation = 'none';
                badge.innerHTML = `🔴 Sin conexión — Solo datos locales (${merged.length})`;
            }
        }

        // Render table
        const container = document.getElementById('results-table-container');
        if (!container) return;

        if (merged.length === 0) {
            container.innerHTML = `
                        <div style="text-align: center; padding: 60px; color: var(--color-text-muted); background: var(--color-surface); border-radius: 16px; border: 1px dashed var(--color-border);">
                            <div style="font-size: 3rem; margin-bottom: 16px;">📊</div>
                            <div style="font-size: 1.1rem; font-weight: 600; margin-bottom: 8px;">No hay resultados registrados</div>
                            <p>Los resultados de los estudiantes aparecerán aquí automáticamente cuando finalicen un simulacro.</p>
                        </div>
                    `;
            return;
        }

        container.innerHTML = `
                    <div class="glass" style="overflow-x: auto; padding: 0; border: 1px solid var(--color-border); border-radius: 16px;">
                        <table style="width: 100%; border-collapse: collapse; min-width: 600px;">
                            <thead style="background: var(--color-surface-2); border-bottom: 1px solid var(--color-border);">
                                <tr>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Fecha</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Estudiante</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Prueba</th>
                                    <th style="padding: 16px; text-align: left; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Puntaje</th>
                                    <th style="padding: 16px; text-align: center; font-size: 0.75rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${merged.map(item => {
            const date = new Date(item.date || item.timestamp).toLocaleString('es-CO');
            const scoreColor = item.score >= 80 ? 'var(--color-success)' : (item.score >= 60 ? 'var(--color-accent)' : 'var(--color-danger)');
            return `
                                    <tr style="border-bottom: 1px solid var(--color-border);" class="result-row">
                                        <td style="padding: 16px; font-size: 0.85rem; color: var(--color-text-muted);">${date}</td>
                                        <td style="padding: 16px; font-weight: 600;">${item.studentName || 'Anónimo'}</td>
                                        <td style="padding: 16px; font-size: 0.9rem;">
                                            <div style="font-weight: 500;">${item.title || 'Simulacro'}</div>
                                            <div style="font-size: 0.75rem; color: var(--color-text-muted);">${item.type || 'N/A'}</div>
                                        </td>
                                        <td style="padding: 16px;">
                                            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                                <div style="font-size: 1.25rem; font-weight: 800; color: ${scoreColor};">${item.icfesScore || Math.round((item.correct / item.total) * 500)}</div>
                                                <div style="font-size: 0.75rem; color: var(--color-text-muted);">/ 500 ICFES</div>
                                            </div>
                                            <div style="font-size: 0.75rem; color: var(--color-text-muted); margin-top: 4px;">
                                                (${item.score}% - ${item.correct}/${item.total} correctas)
                                            </div>
                                        </td>
                                        <td style="padding: 16px; text-align: center;">
                                            <button class="btn btn-sm" style="background: rgba(239,68,68,0.1); color: var(--color-danger); border: none;" 
                                                onclick="TeacherModule.deleteResult('${item.id}')" title="Eliminar Registro">🗑️</button>
                                        </td>
                                    </tr>
                                    `;
        }).join('')}
                            </tbody>
                        </table>
                    </div>
                `;
    },

    async deleteResult(id) {
        if (!confirm('¿Estás seguro de eliminar este registro de resultado?')) return;

        // 1. Delete from local storage
        const history = JSON.parse(localStorage.getItem('saber_results_history') || '[]');
        const newHistory = history.filter(h => h.id !== id);
        localStorage.setItem('saber_results_history', JSON.stringify(newHistory));

        // 2. Delete from server too
        try {
            const baseUrl = LocalServerModule.getServerBaseUrl();
            await fetch(baseUrl + '/api/results?id=' + encodeURIComponent(id), { method: 'DELETE' });
        } catch (e) {
            console.log('No se pudo eliminar del servidor:', e.message);
        }

        this.renderTabs(); // Refresh
    },

    exportResultsSecure() {
        const password = prompt('🔒 Ingresa la contraseña docente para descargar:');
        if (password === '9090') {
            this.exportResults();
        } else {
            NotificationModule.show('Contraseña incorrecta. Acceso denegado.', 'error');
        }
    },

    async resetResultsSecure() {
        const password = prompt('🔒 Ingresa la contraseña docente para RESETEAR todo:');
        if (password === '9090') {
            if (confirm('⚠️ PELIGRO: ¿Estás seguro de que quieres BORRAR TODOS LOS RESULTADOS?\n\nEsta acción eliminará el historial local y la base de datos en el servidor.\n\nNO SE PUEDE DESHACER.')) {

                // 1. Reset Server
                await LocalServerModule.resetRemote();

                // 2. Reset Local
                localStorage.setItem('saber_results_history', '[]');

                // 3. UI Feedback
                NotificationModule.show('Historial de resultados eliminado completamente.', 'success');
                this.renderResultsPanel();
            }
        } else {
            NotificationModule.show('Contraseña incorrecta. Acceso denegado.', 'error');
        }
    },

    exportResults() {
        // Use cached merged results if available, otherwise fallback to local
        const history = this._cachedMergedResults || JSON.parse(localStorage.getItem('saber_results_history') || '[]');
        if (history.length === 0) {
            NotificationModule.show('No hay resultados para exportar', 'warning');
            return;
        }

        // CSV Header
        let csv = 'Fecha,Estudiante,Prueba,Tipo,Puntaje ICFES (500),Puntaje (%),Correctas,Total Preguntas\n';

        history.forEach(row => {
            const date = new Date(row.date || row.timestamp).toLocaleString('es-CO').replace(',', '');
            const icfesCalculado = row.icfesScore || Math.round(((row.correct || 0) / (row.total || 1)) * 500);
            const line = [
                date,
                `"${(row.studentName || 'Anónimo').replace(/"/g, '""')}"`,
                `"${(row.title || 'Simulacro').replace(/"/g, '""')}"`,
                row.type || 'N/A',
                icfesCalculado,
                row.score,
                row.correct,
                row.total
            ].join(',');
            csv += line + '\n';
        });

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `reporte_resultados_saber11_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    },

    async viewPDF(id) {
        // Reuse the exam module but maybe in a "read-only" or just start it mode
        // Since user asked for "visor", starting the exam is effectively a viewer.
        if (confirm('¿Abrir este PDF para visualización? Te llevará a la vista de examen.')) {
            PDFExamModule.startExam(id);
        }
    },

    async uploadPDFToServer(id) {
        const exam = await SimpleIDB.get(id);
        let blob = null;
        let title = 'Simulacro';

        if (exam instanceof Blob) {
            // Legacy format: raw blob
            blob = exam;
            // Try to guess title from ID or just use generic
            title = 'Simulacro_' + id;
        } else if (exam && exam.pdfBlob) {
            // New format: object
            blob = exam.pdfBlob;
            title = exam.title || 'Simulacro';
        }

        if (!blob) {
            NotificationModule.show('Error: No se encontró el archivo PDF de este examen en la base de datos local.', 'error');
            return;
        }

        if (!confirm(`¿Subir "${title}" al servidor?\n\nLos estudiantes podrán verlo en su lista de simulacros.`)) return;

        // Create file object from blob
        const filename = (title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'simulacro') + '.pdf';
        const file = new File([blob], filename, { type: 'application/pdf' });

        // Get exam metadata
        const exams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
        const examMeta = exams.find(e => e.id === id) || { questionsCount: 50 }; // Fallback

        await LocalServerModule.uploadPDF(file, examMeta);
        // Refresh list
        this.renderPDFPanel();
    },

    async deletePDF(id) {
        if (!confirm('¿Estás seguro de eliminar este PDF? Esta acción es irreversible.')) return;

        try {
            // 1. Delete from IndexedDB
            await SimpleIDB.delete(id);

            // 2. Delete from LocalStorage
            const exams = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
            const newExams = exams.filter(e => e.id !== id);
            localStorage.setItem('icfes_pdf_exams', JSON.stringify(newExams));

            // 3. Refresh UI
            this.renderTabs();
            NotificationModule.show('PDF eliminado correctamente.', 'success');
        } catch (e) {
            console.error(e);
            NotificationModule.show('Error al eliminar PDF: ' + e.message, 'error');
        }
    },

    getAllQuestions() {
        const local = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        const deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');

        const native = (window.NATIVE_EXAM_DATA || [])
            .filter(q => !deletedNative.includes(q.id))
            .map(q => ({
                ...q,
                // Mapear campos nativos al formato esperado por la tabla del profesor
                enunciado: q.enunciado || q.texto || '',
                tema: q.tema || q.competencia || q.componente || '',
                tipo: q.tipo || 'standard'
            }));
        return [...local, ...native];
    },

    renderStats() {
        const questions = this.getAllQuestions();
        const pdfs = JSON.parse(localStorage.getItem('icfes_pdf_exams') || '[]');
        const stats = {};
        questions.forEach(q => {
            stats[q.area] = (stats[q.area] || 0) + 1;
        });

        const areaEmojis = {
            matematicas: '📐',
            lectura: '📖',
            ciencias: '🔬',
            sociales: '🌎',
            ingles: '🇬🇧'
        };

        const container = document.getElementById('teacher-stats');

        container.innerHTML = `
                    <div class="glass glass-hover" style="padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 2rem; background: rgba(99, 102, 241, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">📚</div>
                        <div>
                            <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-primary); line-height: 1.2;">${questions.length}</div>
                            <div style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 500;">Preguntas</div>
                        </div>
                    </div>
                    <div class="glass glass-hover" style="padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                        <div style="font-size: 2rem; background: rgba(239, 68, 68, 0.1); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">📄</div>
                        <div>
                            <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-danger); line-height: 1.2;">${pdfs.length}</div>
                            <div style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 500;">PDFs</div>
                        </div>
                    </div>
                    ${Object.entries(stats).map(([area, count]) => `
                        <div class="glass glass-hover" style="padding: 24px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 8px;">
                            <div style="font-size: 2rem; background: var(--color-surface); width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-border);">
                                ${areaEmojis[area.toLowerCase()] || '📝'}
                            </div>
                            <div>
                                <div style="font-size: 1.8rem; font-weight: 800; color: var(--color-text); line-height: 1.2;">${count}</div>
                                <div style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 500; text-transform: capitalize;">${area}</div>
                            </div>
                        </div>
                    `).join('')}
                `;
    },

    filter() {
        const searchInput = document.getElementById('teacher-search');
        const filterSelect = document.getElementById('teacher-area-filter');

        // Safety check if elements exist (might not if in PDF tab)
        if (!searchInput || !filterSelect) return;

        const search = searchInput.value.toLowerCase();
        const filterAreaValue = filterSelect.value;
        const questions = this.getAllQuestions();

        this.filtered = questions.filter(q => {
            const qEnunciado = (q.enunciado || '').toLowerCase();
            const qTema = (q.tema || '').toLowerCase();
            const searchTerm = search.trim();

            const matchSearch = !searchTerm || qEnunciado.includes(searchTerm) || qTema.includes(searchTerm);

            const qArea = (q.area || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const filterArea = (filterAreaValue || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

            const matchArea = !filterArea || qArea.includes(filterArea) || filterArea.includes(qArea);

            return matchSearch && matchArea;
        });

        this.currentPage = 1;
        this.renderTable();
    },

    renderTable() {
        const tbody = document.getElementById('teacher-table-body');
        if (!tbody) return;

        const start = (this.currentPage - 1) * this.perPage;
        const paginated = this.filtered.slice(start, start + this.perPage);
        tbody.innerHTML = '';

        if (paginated.length === 0) {
            tbody.innerHTML = `
                    <tr>
                        <td colspan="6" style="padding: 40px; text-align: center; color: var(--color-text-muted);">
                            <div style="font-size: 3rem; margin-bottom: 12px;">📭</div>
                            <div style="font-size: 0.9rem;">No se encontraron preguntas</div>
                        </td>
                    </tr>
                `;
            return;
        }

        paginated.forEach((q, idx) => {
            const row = document.createElement('tr');
            row.style.borderBottom = '1px solid var(--color-border)';
            row.innerHTML = `
                    <td style="padding: 16px; color: var(--color-text-muted); font-size: 0.8rem;">${start + idx + 1}</td>
                    <td style="padding: 16px;">
                        <div style="display: flex; align-items: center; gap: 8px;">
                            <span class="badge badge-primary">${q.area}</span>
                        </div>
                    </td>
                    <td style="padding: 16px; color: var(--color-text-muted); font-size: 0.8rem;">${q.tema || '-'}</td>
                    <td style="padding: 16px;"><span class="badge" style="background: rgba(255,255,255,0.05);">${q.tipo || 'standard'}</span></td>
                    <td style="padding: 16px; max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 0.9rem;">${q.enunciado}</td>
                    <td style="padding: 16px; text-align: center;">
                        <button class="btn btn-ghost btn-sm" onclick='TeacherModule.preview("${q.id}")' title="Ver">👁️</button>
                        <button class="btn btn-sm" style="background: rgba(239,68,68,0.1); color: var(--color-danger); border: none; margin-left: 4px;" onclick='TeacherModule.deleteQuestion("${q.id}")' title="Eliminar">🗑️</button>
                    </td>
                `;
            tbody.appendChild(row);
        });

        this.renderPagination();
    },

    renderPagination() {
        const container = document.getElementById('teacher-pagination');
        if (!container) return;

        const totalPages = Math.ceil(this.filtered.length / this.perPage);

        if (totalPages <= 1) {
            container.innerHTML = '';
            return;
        }

        let html = '<div style="display: flex; justify-content: center; gap: 8px;">';
        for (let i = 1; i <= totalPages; i++) {
            html += `
                    <button class="btn btn-sm ${i === this.currentPage ? 'btn-primary' : 'btn-ghost'}" 
                        onclick="TeacherModule.goToPage(${i})">${i}</button>
                `;
        }
        html += '</div>';
        container.innerHTML = html;
    },

    goToPage(page) {
        this.currentPage = page;
        this.renderTable();
    },

    preview(qId) {
        const questions = this.getAllQuestions();
        const q = questions.find(x => x.id === qId);
        if (!q) return;

        const previewContent = document.getElementById('preview-content');

        // Generate chart HTML if exists
        let chartHTML = '';
        if (q.grafica && q.grafica.datos) {
            if (q.grafica.tipo === 'geometry') {
                // Geometry: use custom canvas
                chartHTML = `
                    <div id="preview-geometry-container" style="margin-bottom: 20px; padding: 16px; background: var(--color-surface-2); border-radius: 12px;">
                        <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📐 ${q.grafica.titulo || 'Figura Geométrica'}</h4>
                        <div style="display: flex; justify-content: center; align-items: center;">
                            <canvas id="geometry-canvas" width="500" height="350" style="max-width: 100%;"></canvas>
                        </div>
                    </div>
                `;
            } else {
                chartHTML = `
                    <div style="margin-bottom: 20px; padding: 16px; background: var(--color-surface-2); border-radius: 12px;">
                        <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📊 Gráfica</h4>
                        <div style="height: 400px; position: relative;">
                            <canvas id="preview-chart"></canvas>
                        </div>
                    </div>
                `;
            }
        }

        // Generate Image HTML if exists
        let imageHTML = '';
        if (q.imagen) {
            imageHTML = `<div style="margin-bottom: 20px; text-align: center;"><img src="${q.imagen}" style="max-width: 100%; max-height: 400px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>`;
        }

        // Use renderMarkdown if available, otherwise fallback
        const content = typeof renderMarkdown === 'function' ? renderMarkdown(q.enunciado) : q.enunciado.replace(/\n/g, '<br>');

        previewContent.innerHTML = `
                <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
                    <span class="badge badge-primary">${q.area}</span>
                    <span class="badge badge-primary">${q.competencia || 'General'}</span>
                    ${q.tipo ? `<span class="badge" style="background: rgba(245,158,11,0.15); color: var(--color-accent);">${q.tipo}</span>` : ''}
                </div>
                <div style="font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">${content}</div>
                ${imageHTML}
                ${chartHTML}
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    ${q.opciones.map(opt => `
                        <div class="option-item ${opt.id === q.respuestaCorrecta ? 'correct' : ''}" style="cursor: default;">
                            <div class="option-circle">${opt.id}</div>
                            <div class="option-text">${opt.texto}</div>
                            ${opt.id === q.respuestaCorrecta ? '<span style="margin-left: auto; color: var(--color-success);">✓ Correcta</span>' : ''}
                        </div>
                    `).join('')}
                </div>
                ${q.justificacion ? `
                    <div style="margin-top: 20px; padding: 14px; background: rgba(16,185,129,0.08); border-left: 3px solid var(--color-success); border-radius: 8px;">
                        <div style="font-size: 0.75rem; color: var(--color-success); font-weight: 600; margin-bottom: 6px;">💡 JUSTIFICACIÓN</div>
                        <div style="font-size: 0.9rem; line-height: 1.6;">${q.justificacion}</div>
                    </div>
                ` : ''}
            `;

        document.getElementById('preview-modal').classList.remove('hidden');

        // Render chart or geometry
        if (q.grafica && q.grafica.datos) {
            if (q.grafica.tipo === 'geometry') {
                // Use ExamEngine's geometry drawing functions
                setTimeout(() => {
                    const container = document.getElementById('preview-geometry-container');
                    if (container) {
                        ExamEngine.renderGeometry(q.grafica, container);
                    }
                }, 100);
            } else {
                setTimeout(() => {
                    const ctx = document.getElementById('preview-chart');
                    if (ctx) {
                        let type = 'bar';
                        const defaultColors = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];
                        const options = {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { labels: { color: '#64748b', font: { weight: '600' } }, display: true },
                                title: { display: !!q.grafica.titulo, text: q.grafica.titulo || '', color: '#64748b', font: { size: 16, weight: 'bold' } }
                            },
                            scales: {
                                x: { ticks: { color: '#64748b', font: { weight: '600' } }, grid: { color: 'rgba(100, 116, 139, 0.2)' } },
                                y: { ticks: { color: '#64748b', font: { weight: '600' } }, grid: { color: 'rgba(100, 116, 139, 0.2)' } }
                            }
                        };

                        if (q.grafica.tipo === 'pie') {
                            type = 'pie';
                            delete options.scales;
                            if (q.grafica.datos && q.grafica.datos.datasets) {
                                q.grafica.datos.datasets.forEach(ds => {
                                    if (!ds.backgroundColor) {
                                        ds.backgroundColor = defaultColors.slice(0, (ds.data || []).length);
                                        ds.borderColor = '#1e1b4b';
                                        ds.borderWidth = 2;
                                    }
                                });
                            }
                        } else if (q.grafica.tipo === 'line') {
                            type = 'line';
                            if (q.grafica.datos && q.grafica.datos.datasets) {
                                q.grafica.datos.datasets.forEach((ds, idx) => {
                                    if (!ds.borderColor) ds.borderColor = defaultColors[idx % defaultColors.length];
                                    if (!ds.backgroundColor) ds.backgroundColor = defaultColors[idx % defaultColors.length] + '33';
                                    ds.tension = 0.3;
                                });
                            }
                        } else {
                            // bar
                            if (q.grafica.datos && q.grafica.datos.datasets) {
                                q.grafica.datos.datasets.forEach((ds, idx) => {
                                    if (!ds.backgroundColor) {
                                        ds.backgroundColor = defaultColors[idx % defaultColors.length];
                                        ds.borderColor = ds.backgroundColor;
                                        ds.borderWidth = 0;
                                        ds.borderRadius = 6;
                                    }
                                });
                            }
                        }

                        if (window.previewChartInstance) {
                            window.previewChartInstance.destroy();
                        }

                        window.previewChartInstance = new Chart(ctx, {
                            type: type,
                            data: q.grafica.datos,
                            options: options
                        });
                    }
                }, 100);
            }
        }
    },

    closePreview() {
        document.getElementById('preview-modal').classList.add('hidden');
    },

    deleteQuestion(id) {
        if (!confirm('¿Estás seguro de eliminar esta pregunta?')) return;

        // Comprobar si es local
        const questions = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        const isLocal = questions.some(q => q.id === id);

        if (isLocal) {
            const newQuestions = questions.filter(q => q.id !== id);
            localStorage.setItem('icfes_questions', JSON.stringify(newQuestions));
        } else {
            // Es nativa (window.NATIVE_EXAM_DATA), usar soft-delete
            const deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');
            if (!deletedNative.includes(id)) {
                deletedNative.push(id);
                localStorage.setItem('deleted_native_questions', JSON.stringify(deletedNative));
            }
        }

        this.init(); // Reload
        NotificationModule.show('Pregunta eliminada correctamente.', 'success');
    },

    exportJSON() {
        const questions = localStorage.getItem('icfes_questions');
        if (!questions || questions === '[]') {
            NotificationModule.show('No hay preguntas para exportar', 'warning');
            return;
        }
        const blob = new Blob([questions], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'saber11_preguntas.json';
        a.click();
        URL.revokeObjectURL(url);
    },

    async handleFileImport(event) {
        const input = event.target;
        const file = input.files[0];
        if (!file) return;

        try {
            // 1. Caso ZIP
            if (file.name.endsWith('.zip') || file.type === 'application/zip' || file.type === 'application/x-zip-compressed') {
                const zip = await JSZip.loadAsync(file);

                // Buscar archivo JSON
                const jsonFile = Object.values(zip.files).find(f => f.name.endsWith('.json'));
                if (!jsonFile) throw new Error('El archivo ZIP no contiene ningún .json');

                const jsonText = await jsonFile.async('text');
                const questions = JSON.parse(jsonText);
                if (!Array.isArray(questions)) throw new Error('Formato inválido: el JSON debe ser un array');

                // Procesar imágenes
                let processedCount = 0;
                for (let q of questions) {
                    if (q.imagen && !q.imagen.startsWith('http') && !q.imagen.startsWith('data:')) {
                        // Asumimos ruta relativa dentro del zip (ej: "images/img_123.png")
                        const imgFile = zip.file(q.imagen);
                        if (imgFile) {
                            const base64 = await imgFile.async('base64');
                            // Detectar extensión para el mime type
                            const ext = q.imagen.split('.').pop().toLowerCase();
                            const mime = ext === 'png' ? 'image/png' : (ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png');
                            q.imagen = `data:${mime};base64,${base64}`;
                            processedCount++;
                        }
                    }
                }

                this.saveQuestions(questions);
                NotificationModule.show('✅ Importadas ${questions.length} preguntas desde ZIP (${processedCount} imágenes procesadas).', 'success');

            } else {
                // 2. Caso JSON Normal
                const reader = new FileReader();
                reader.onload = (e) => {
                    try {
                        const json = JSON.parse(e.target.result);
                        if (!Array.isArray(json)) throw new Error('Formato inválido: debe ser un array de preguntas');
                        this.saveQuestions(json);
                        NotificationModule.show('✅ Importadas ${json.length} preguntas correctamente.', 'success');
                    } catch (err) {
                        NotificationModule.show('Error al importar JSON: ' + err.message, 'error');
                    } finally {
                        input.value = '';
                    }
                };
                reader.readAsText(file);
                return; // Salir para no ejecutar el finally del bloque async aquí
            }
        } catch (err) {
            console.error(err);
            NotificationModule.show('Error al importar: ' + err.message, 'error');
        } finally {
            input.value = '';
        }
    },

    saveQuestions(newQuestions) {
        const existing = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        const combined = [...existing, ...newQuestions];
        // Remove duplicates by ID
        const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());

        localStorage.setItem('icfes_questions', JSON.stringify(unique));
        this.init();
    },

    importJSON() {
        document.getElementById('import-file').click();
    },

    loadOfficialICFES() {
        alert('Función disponible próximamente con API oficial');
    },

    async clearData() {
        if (!confirm('⚠️ PELIGRO: ¿Estás seguro de que quieres BORRAR TODO?\n\nEsta acción eliminará:\n1. Todas las preguntas del banco.\n2. Todos los simulacros PDF cargados.\n\nEsta acción no se puede deshacer.')) {
            return;
        }

        try {
            localStorage.removeItem('icfes_questions');
            localStorage.removeItem('icfes_pdf_exams');
            await SimpleIDB.clear();

            NotificationModule.show('Todos los datos (preguntas y PDFs) han sido eliminados correctamente.', 'success');
            this.init();
        } catch (e) {
            console.error(e);
            NotificationModule.show('Error al borrar: ' + e.message, 'error');
        }
    }
};

// ============ LOCAL SERVER MODULE (AUTO-SYNC V2) ============
const LocalServerModule = {
    serverUrl: null, // Dynamic
    connected: false,
    syncInterval: null,
    queueKey: 'saber_unsynced_queue',

    getServerBaseUrl() {
        // 1. If running on HTTP/HTTPS (e.g. opened from server), USE THAT.
        // This ensures that "SI UN USUARIO ABRE EL SERVER", it works automatically.
        if (window.location.protocol.startsWith('http')) {
            return window.location.origin;
        }

        // 2. Only check for custom override if we are in FILE mode (offline/USB)
        const custom = localStorage.getItem('saber11_custom_server');
        if (custom) return custom;

        // 3. Fallback for file:// mode default
        return 'http://localhost:8000';
    },

    setCustomIp() {
        const current = localStorage.getItem('saber11_custom_server') || '';
        const newIp = prompt("Ingrese IP del Servidor (ej: 192.168.1.5):", current.replace('http://', '').replace(':8000', ''));

        if (newIp === null) return; // Cancelled

        if (newIp.trim() === '') {
            localStorage.removeItem('saber11_custom_server');
            NotificationModule.show('Configuración manual borrada. Se usará detección automática.', 'info');
        } else {
            let url = newIp.trim();

            // Smart Fix: Add port 8000 if missing
            if (!url.includes(':')) {
                url = url + ':8000';
            }

            if (!url.startsWith('http')) url = 'http://' + url;
            // Remove trailing slash
            if (url.endsWith('/')) url = url.slice(0, -1);

            localStorage.setItem('saber11_custom_server', url);
            NotificationModule.show(`Intentando conectar a: ${url}<br>(La página se recargará)`, 'info');
        }

        // Reload to apply
        window.location.reload();
    },

    async init() {
        try {
            this.serverUrl = this.getServerBaseUrl() + '/api/results';
            await this.checkConnection();
            if (this.syncInterval) clearInterval(this.syncInterval);
            this.syncInterval = setInterval(() => { this.checkConnection(); }, 10000);
        } catch (e) { console.error('LocalServerModule.init error:', e); }
    },

    showHostRedirect() { },

    async checkConnection() {
        try {
            var base = this.getServerBaseUrl();
            var res = await fetch(base + '/api/list_pdfs?t=' + Date.now(), { cache: 'no-store' });
            this.connected = res.ok;
            if (this.connected) this.processQueue();
        } catch (e) {
            this.connected = false;
        }
    },

    async pushResult(result) {
        // 1. Add to Queue immediately
        const queue = this.getQueue();
        result._tempId = Date.now() + Math.random();
        queue.push(result);
        this.saveQueue(queue);
        console.log('📥 Resultado encolado. Total en cola:', queue.length);

        // 2. ALWAYS try to sync immediately
        await this.processQueue();
    },

    async processQueue() {
        const queue = this.getQueue();
        if (queue.length === 0) return;

        // ALWAYS recalculate URL fresh
        const baseUrl = this.getServerBaseUrl();
        const url = baseUrl + '/api/results';
        console.log('🔄 Sincronizando', queue.length, 'resultados a:', url);

        const remaining = [];
        let syncedCount = 0;

        for (const item of queue) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                });

                if (response.ok) {
                    syncedCount++;
                    this.connected = true;
                } else {
                    console.warn('⚠️ Servidor respondió', response.status, 'para resultado');
                    remaining.push(item);
                }
            } catch (e) {
                console.warn('⚠️ Error enviando resultado:', e.message);
                remaining.push(item);
            }
        }

        if (syncedCount > 0) {
            console.log('✅ Sincronizados ' + syncedCount + ' resultados exitosamente.');
        }

        this.saveQueue(remaining);
    },

    getQueue() {
        try {
            return JSON.parse(localStorage.getItem(this.queueKey) || '[]');
        } catch { return []; }
    },

    saveQueue(queue) {
        localStorage.setItem(this.queueKey, JSON.stringify(queue));
    },

    updateUI(isConnected, statusText) {
        // 1. Persistent Floating Status Badge
        const floatStatus = document.getElementById('floating-status-badge');
        if (floatStatus) {
            floatStatus.style.display = 'block';
            if (isConnected) {
                floatStatus.style.background = "#dcfce7";
                floatStatus.style.color = "#166534";
                floatStatus.innerHTML = "🟢 Conectado al Server";
                floatStatus.title = "Click para reconfigurar IP";
            } else {
                floatStatus.style.background = "#fee2e2";
                floatStatus.style.color = "#991b1b";
                floatStatus.innerHTML = "🔴 " + (statusText || "Desconectado");
                floatStatus.title = "Click para cambiar la IP";
            }
            floatStatus.onclick = () => this.setCustomIp();
        }

        // 2. Teacher UI
        const statusEl = document.getElementById('server-status');
        if (statusEl) {
            if (isConnected) {
                statusEl.innerHTML = '<span style="color: var(--color-success); cursor: pointer;" onclick="LocalServerModule.checkConnection()">🟢 En Línea (Auto-Sync)</span>';
            } else {
                statusEl.innerHTML = '<span style="color: var(--color-danger); cursor: pointer;">🔴 ' + (statusText || 'Offline') + '</span>';
            }
        }

        // 3. Student Indicator (small dot)
        const ind = document.getElementById('student-sync-indicator');
        if (ind) {
            ind.style.background = isConnected ? 'var(--color-success)' : 'var(--color-text-muted)';
            ind.title = isConnected ? 'Sincronizado' : 'Sin conexión';
        }
    },

    // Polling for teacher (Read-only)
    startPolling(callback) {
        if (this.pollingInterval) clearInterval(this.pollingInterval);
        this.fetchResults(callback);
        this.pollingInterval = setInterval(() => {
            this.fetchResults(callback);
        }, 5000);
    },

    stopPolling() {
        if (this.pollingInterval) clearInterval(this.pollingInterval);
    },

    async fetchResults(callback) {
        try {
            const url = this.serverUrl || (this.getServerBaseUrl() + '/api/results');
            const response = await fetch(url + (url.includes('?') ? '&' : '?') + 't=' + Date.now(), { cache: 'no-store' });
            if (response.ok) {
                const data = await response.json();
                if (Array.isArray(data)) callback(data);
            }
        } catch (e) { console.error('Error fetching', e); }
    },

    async resetRemote() {
        try {
            const response = await fetch(window.location.origin + '/api/reset', { method: 'POST' });
            if (response.ok) {
                console.log('✅ Base de datos remota reseteada');
                NotificationModule.show('La base de datos del servidor ha sido borrada correctamente.', 'success');
                return true;
            } else {
                throw new Error('Server error');
            }
        } catch (e) {
            console.error('Error resetting remote', e);
            NotificationModule.show('Error al resetear servidor: ' + e.message, 'error');
            return false;
        }
    },

    async uploadPDF(file, metadata = null) {
        if (!this.connected) {
            NotificationModule.show('No estás conectado al servidor local.', 'error');
            return false;
        }

        const formData = new FormData();
        formData.append('file', file);
        if (metadata) {
            formData.append('metadata', JSON.stringify(metadata));
        }

        try {
            const baseUrl = window.location.protocol === 'file:' ? 'http://127.0.0.1:8000' : window.location.origin;
            const response = await fetch(baseUrl + '/api/upload_pdf', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const result = await response.json();
                NotificationModule.show(`PDF "${result.filename}" subido correctamente al servidor.`, 'success');
                return true;
            } else {
                throw new Error('Server returned ' + response.status);
            }
        } catch (e) {
            console.error('Upload failed', e);
            NotificationModule.show('Falló la subida: ' + e.message, 'error');
            return false;
        }
    },

    async getPDFs() {
        if (!this.connected) return [];
        try {
            // Use 127.0.0.1 instead of localhost to avoid IPv6 issues
            const baseUrl = window.location.protocol === 'file:' ? 'http://127.0.0.1:8000' : window.location.origin;
            const response = await fetch(baseUrl + '/api/list_pdfs?t=' + Date.now(), { cache: 'no-store' });
            if (response.ok) {
                return await response.json();
            }
        } catch (e) {
            console.error('Error fetching PDFs', e);
        }
        return [];
    },

    // updateSummary is a no-op if updateUI is the real display function
    updateSummary() {
        this.updateUI(this.connected, this.connected ? '🟢 Conectado' : '🔴 Sin conexión');
    }
};

// Initialize Module
LocalServerModule.init();

// ============ TEACHER MODULE UPDATES ============
TeacherModule.renderTabs = function () {
    const container = document.getElementById('teacher-content-area');
    if (!container) return; // Guard clause if UI not ready

    // 1. Render Tab Navigation
    const tabsHTML = `
                    <div style="display: flex; gap: 16px; margin-bottom: 24px; border-bottom: 1px solid var(--color-border); flex-wrap: wrap; align-items: center;">
                        <button onclick="TeacherModule.setTab('questions')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'questions' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'questions' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            🧩 Banco de Preguntas
                        </button>
                        <button onclick="TeacherModule.setTab('pdfs')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'pdfs' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'pdfs' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            📄 Simulacros PDF
                        </button>
                        <button onclick="TeacherModule.setTab('results')" 
                                style="padding: 12px 24px; background: none; border: none; font-weight: 600; cursor: pointer; border-bottom: 2px solid ${this.currentTab === 'results' ? 'var(--color-primary)' : 'transparent'}; color: ${this.currentTab === 'results' ? 'var(--color-primary)' : 'var(--color-text-muted)'};">
                            🏆 Resultados Estudiantes
                        </button>
                        
                        <div style="margin-left: auto; display: flex; align-items: center; gap: 12px;">
                            <div id="server-status" style="font-size: 0.8rem; font-weight: 600;">
                                <span style="color: var(--color-text-muted);">Comprobando...</span>
                            </div>
                            <button onclick="LocalServerModule.init()" class="btn btn-sm btn-ghost" title="Reconectar">
                                🔄
                            </button>
                        </div>
                    </div>
                    <div id="teacher-tab-content"></div>
                `;

    // Only update tabs if changed to avoid full re-render flickering
    if (!document.getElementById('teacher-tab-nav')) {
        container.innerHTML = `<div id="teacher-tab-nav">${tabsHTML}</div>
        <div id="student-details-modal-container"></div>`;
    } else {
        document.getElementById('teacher-tab-nav').innerHTML = tabsHTML;
    }

    // 2. Render Content based on Tab
    if (this.currentTab === 'questions') {
        this.renderQuestionsPanel();
    } else if (this.currentTab === 'pdfs') {
        this.renderPDFPanel();
    } else {
        this.renderResultsPanel();
        // Always start sync (it will silently fail if offline)
        this.startLiveSync();
    }
};

TeacherModule.startLiveSync = function () {
    // Stop any existing polling first
    LocalServerModule.stopPolling();

    // Use faster 3-second polling
    if (this._liveSyncInterval) clearInterval(this._liveSyncInterval);

    const doSync = async () => {
        try {
            const url = LocalServerModule.serverUrl || (LocalServerModule.getServerBaseUrl() + '/api/results');
            const fetchUrl = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();
            const response = await fetch(fetchUrl, { signal: AbortSignal.timeout(3000), cache: 'no-store' });
            if (!response.ok) return;
            const remoteResults = await response.json();
            if (!Array.isArray(remoteResults)) return;

            // Merge into local storage
            const history = JSON.parse(localStorage.getItem('saber_results_history') || '[]');
            let updated = false;
            const localIds = new Set(history.map(h => h.id));

            remoteResults.forEach(remote => {
                if (!localIds.has(remote.id)) {
                    history.unshift(remote);
                    updated = true;
                }
            });

            if (updated) {
                localStorage.setItem('saber_results_history', JSON.stringify(history));
                // Re-fetch and render the combined table
                if (this.currentTab === 'results') {
                    this._fetchAndRenderResults();

                    // Flash the sync badge to indicate new data
                    const badge = document.getElementById('results-sync-badge');
                    if (badge) {
                        badge.style.animation = 'pulse 0.5s ease-in-out 3';
                        badge.innerHTML = '🟢 ¡Nuevos resultados!';
                        setTimeout(() => {
                            if (badge) {
                                badge.style.animation = 'none';
                                badge.innerHTML = `🟢 Sincronizado`;
                            }
                        }, 2000);
                    }
                }
            }
        } catch (e) { /* silently fail */ }
    };

    // Run immediately then every 3 seconds
    doSync();
    this._liveSyncInterval = setInterval(() => doSync(), 3000);
};

// ============ RESULTS ENGINE UPDATE ============
// Hook into calculate to ALWAYS push results to server
const originalCalculate = ResultsEngine.calculate;
ResultsEngine.calculate = function (questions, answers, startTime, studentName) {
    // Call original — this sets this.currentResult and saves to localStorage
    originalCalculate.call(this, questions, answers, startTime, studentName);

    // Push result to local server
    if (this.currentResult) {
        const historyItem = {
            id: this.currentResult.id,
            studentName: this.currentResult.studentName,
            date: this.currentResult.date,
            score: this.currentResult.percentage,
            icfesScore: this.currentResult.icfesScore,
            correct: this.currentResult.totalCorrect,
            total: this.currentResult.totalQuestions,
            type: typeof PDFExamModule !== 'undefined' && PDFExamModule.currentExam ? 'PDF' : 'Standard',
            title: typeof PDFExamModule !== 'undefined' && PDFExamModule.currentExam ? PDFExamModule.currentExam.title : 'Simulacro Estándar'
        };

        // Push via queue (primary method)
        LocalServerModule.pushResult(historyItem);

        // ALSO do a direct POST as safety net
        try {
            const directUrl = LocalServerModule.getServerBaseUrl() + '/api/results';
            fetch(directUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(historyItem)
            }).then(r => {
                if (r.ok) console.log('✅ Resultado enviado directamente al servidor');
                else console.warn('⚠️ Envío directo falló:', r.status);
            }).catch(e => console.warn('⚠️ Envío directo falló:', e.message));
        } catch (e) { /* silent */ }

        // --- Check badges after exam ---
        if (typeof GamificationModule !== 'undefined' && AuthModule.currentUser) {
            try {
                const history = JSON.parse(localStorage.getItem('saber_results_history') || '[]');
                const myName = (AuthModule.currentUser.name || '').trim().toLowerCase();
                const myExams = history.filter(h => (h.studentName || '').trim().toLowerCase() === myName);
                const totalQ = myExams.reduce((s, h) => s + (h.total || 0), 0);
                const maxICFES = myExams.reduce((m, h) => Math.max(m, h.icfesScore || 0), 0);
                const isPerfect = this.currentResult.totalCorrect === this.currentResult.totalQuestions;
                GamificationModule.checkBadges({
                    totalSimulacros: myExams.length,
                    maxScore: maxICFES,
                    perfectExam: isPerfect,
                    totalQuestions: totalQ
                });
            } catch (e) { console.warn('Badge check error:', e); }
        }
    }
};


// Expose to window for inline events
window.TeacherModule = TeacherModule;
window.LocalServerModule = LocalServerModule;




// ============ DASHBOARD MODULE ============
const DashboardModule = {
    chartInstance: null,

    init() {
        this.renderHistory();
        this.renderChart();
        this.renderWeakAreas();
    },

    renderWeakAreas() {
        const container = document.getElementById('dashboard-weak-areas');
        if (!container) return;

        const history = this.getHistory();

        const areaIcons = {
            'Matem\u00e1ticas': '📐',
            'Lectura Cr\u00edtica': '📝',
            'Sociales y Ciudadanas': '🌎',
            'Ciencias Naturales': '🔬',
            'Ingl\u00e9s': '🇬🇧'
        };

        // Aggregate byArea from all exams
        const areaTotals = {};
        history.forEach(item => {
            if (!item.byArea) return;
            Object.entries(item.byArea).forEach(([area, data]) => {
                if (!areaTotals[area]) areaTotals[area] = { correct: 0, total: 0 };
                areaTotals[area].correct += (data.correct || 0);
                areaTotals[area].total += (data.total || 0);
            });
        });

        const areas = Object.entries(areaTotals)
            .filter(([, d]) => d.total > 0)
            .map(([name, d]) => ({
                name: name.replace(/_/g, ' '),
                pct: Math.round((d.correct / d.total) * 100),
                correct: d.correct,
                total: d.total
            }))
            .sort((a, b) => a.pct - b.pct); // Worst first

        if (areas.length === 0) {
            // Show attractive empty state with preview bars
            const previewAreas = [
                { name: 'Matem\u00e1ticas', icon: '📐' },
                { name: 'Lectura Cr\u00edtica', icon: '📝' },
                { name: 'Ciencias Naturales', icon: '🔬' },
                { name: 'Sociales y Ciudadanas', icon: '🌎' },
                { name: 'Ingl\u00e9s', icon: '🇬🇧' }
            ];
            container.innerHTML = `
                <div style="text-align:center; padding:12px 0 16px; border-radius:12px;">
                    <div style="font-size:2rem; margin-bottom:6px;">📊</div>
                    <p style="color:var(--color-text-muted); font-size:0.85rem; margin:0 0 16px;">Completa un simulacro para ver tu rendimiento por área</p>
                </div>
                ${previewAreas.map(a => `
                    <div style="padding:10px 14px; border-radius:10px; background:rgba(0,0,0,0.03); border:1px solid rgba(0,0,0,0.06); opacity:0.5;">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                            <span style="font-weight:700; font-size:0.9rem; color:var(--color-text);">${a.icon} ${a.name}</span>
                            <span style="font-size:0.75rem; font-weight:700; color:var(--color-text-muted); background:rgba(0,0,0,0.05); padding:2px 8px; border-radius:12px;">— Sin datos</span>
                        </div>
                        <div style="width:100%; height:6px; background:rgba(0,0,0,0.06); border-radius:4px;"></div>
                    </div>
                `).join('')}
            `;
            return;
        }

        container.innerHTML = areas.map(a => {
            const color = a.pct >= 70 ? '#10b981' : a.pct >= 50 ? '#f59e0b' : '#ef4444';
            const icon = Object.entries(areaIcons).find(([k]) => a.name.includes(k.split(' ')[0]))?.[1] || '📊';
            const label = a.pct < 50 ? '⚠️ Necesita refuerzo' : a.pct < 70 ? '🟡 En progreso' : '✅ Buen nivel';
            return `
                <div style="padding: 10px 14px; border-radius: 10px; background: ${color}08; border: 1px solid ${color}25;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                        <span style="font-weight:700; font-size:0.9rem; color:var(--color-text);">${icon} ${a.name}</span>
                        <span style="font-size:0.75rem; font-weight:700; color:${color}; background:${color}15; padding:2px 8px; border-radius:12px;">${a.pct}% • ${label}</span>
                    </div>
                    <div style="width:100%; height:6px; background:rgba(0,0,0,0.06); border-radius:4px; overflow:hidden;">
                        <div style="width:${a.pct}%; height:100%; background:${color}; border-radius:4px; transition:width 0.6s ease;"></div>
                    </div>
                    <div style="font-size:0.72rem; color:var(--color-text-muted); margin-top:4px;">${a.correct} correctas de ${a.total} preguntas en total</div>
                </div>
            `;
        }).join('');
    },


    getHistory() {
        try {
            const data = localStorage.getItem('saber_results_history');
            return data ? JSON.parse(data) : [];
        } catch {
            return [];
        }
    },

    clearHistory() {
        localStorage.removeItem('saber_results_history');
        if (this.chartInstance) {
            this.chartInstance.destroy();
            this.chartInstance = null;
        }
        this.renderHistory();
        this.renderChart();
        NotificationModule.show('Historial borrado correctamente.', 'info');
    },

    renderHistory() {
        const history = this.getHistory();
        const tbody = document.getElementById('history-table-body');
        if (!tbody) return;

        tbody.innerHTML = '';

        if (history.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" style="text-align:center; padding: 24px; color: var(--color-text-muted);">Sin datos disponibles</td></tr>';
            return;
        }

        // Sort by date desc and take max 10 for table
        const sorted = [...history].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 10);

        sorted.forEach(item => {
            const dateObj = new Date(item.date);
            const dateStr = dateObj.toLocaleDateString() + ' ' + dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid var(--color-border)';

            // Set colors dynamically based on score
            let scoreColor = '#ef4444'; // red
            if (item.icfesScore >= 350) scoreColor = '#10b981'; // green
            else if (item.icfesScore >= 250) scoreColor = '#fbbf24'; // yellow

            tr.innerHTML = `
                <td style="padding: 12px 8px; font-size: 0.9rem;">${dateStr}</td>
                <td style="padding: 12px 8px; font-weight: 500;">${item.title}</td>
                <td style="padding: 12px 8px;">${item.correct} / ${item.total}</td>
                <td style="padding: 12px 8px;">
                    <span style="background: ${scoreColor}15; color: ${scoreColor}; padding: 4px 8px; border-radius: 6px; font-weight: bold;">
                        ${item.icfesScore}
                    </span>
                </td>
            `;
            tbody.appendChild(tr);
        });
    },

    renderChart() {
        const history = this.getHistory();
        const canvas = document.getElementById('progress-chart');
        const msg = document.getElementById('no-history-msg');

        if (!canvas) return;

        if (history.length === 0) {
            canvas.style.display = 'none';
            if (msg) msg.classList.remove('hidden');
            return;
        }

        canvas.style.display = 'block';
        if (msg) msg.classList.add('hidden');

        // Prepare data (Chronological)
        const sorted = [...history].sort((a, b) => new Date(a.date) - new Date(b.date));

        const labels = sorted.map((item, idx) => `Intento ${idx + 1}`);
        const dataScores = sorted.map(item => item.icfesScore);

        if (this.chartInstance) {
            this.chartInstance.destroy();
        }

        const ctx = canvas.getContext('2d');

        // Ensure global Chart is available
        if (typeof Chart === 'undefined') {
            console.error('Chart.js no está cargado');
            return;
        }

        this.chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Puntaje ICFES',
                    data: dataScores,
                    borderColor: '#6366f1',
                    backgroundColor: 'rgba(99, 102, 241, 0.1)',
                    borderWidth: 3,
                    pointBackgroundColor: '#6366f1',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#888' }
                    },
                    tooltip: {
                        callbacks: {
                            afterLabel: function (context) {
                                const item = sorted[context.dataIndex];
                                return `Simulacro: ${item.title}`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 500,
                        grid: { color: 'rgba(255, 255, 255, 0.05)' },
                        ticks: { color: '#888' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#888' }
                    }
                }
            }
        });
    }
};

// Map view and hook Router initialization
if (typeof Router !== 'undefined') {
    if (!Router.views) Router.views = {};
    document.addEventListener('DOMContentLoaded', () => {
        Router.views.dashboard = document.getElementById('view-dashboard');
        if (typeof updateUserUI === 'function') updateUserUI();
    });

    // Intercept navigation to dashboard to render it fresh
    const originalDashboardGo = Router.go;
    Router.go = function (view) {
        // Enforce Login Wall (safely - AuthModule may not be ready on first call)
        if (view !== 'home' && view !== 'teacher') {
            const isLoggedIn = typeof AuthModule !== 'undefined' && AuthModule.currentUser;
            if (!isLoggedIn) {
                NotificationModule.show('Debes ingresar con tu cuenta para acceder a esta herramienta.', 'warning');
                if (typeof AuthUI !== 'undefined') AuthUI.toggleModal();
                return;
            }
        }

        originalDashboardGo.call(this, view);
        if (view === 'dashboard') {
            DashboardModule.init();
        } else if (view === 'admin') {
            if (typeof AdminPanelModule !== 'undefined') {
                AdminPanelModule.init();
            }
        }
    };
}

// ============ ADMIN PANEL MODULE ============
const AdminPanelModule = {
    allStudents: [],
    currentGradeFilter: 'all',
    currentAreaFilter: 'all',

    init() {
        // Optional: you could fetch automatically
        // this.fetchAllStudents();
    },

    filterByArea(area) {
        this.currentAreaFilter = area;
        this.fetchAllStudents();
    },

    async fetchAllStudents() {
        const spinner = document.getElementById('teacher-loading-spinner');
        const container = document.getElementById('teacher-students-container');
        if (!spinner || !container) return;

        spinner.style.display = 'block';
        container.innerHTML = ''; // Clear previous

        try {
            // Fetch users
            const usersRes = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
            const usersData = await usersRes.json();

            // Fetch results
            const resultsRes = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json?t=' + Date.now());
            const resultsData = await resultsRes.json();
            const allResults = resultsData ? Object.values(resultsData).filter(r => r) : [];

            if (!usersData) {
                container.innerHTML = '<p style="text-align: center; color: var(--color-text-muted);">No hay estudiantes registrados o hubo un error.</p>';
                spinner.style.display = 'none';
                return;
            }

            // Convert Firebase object to array of students
            this.allStudents = Object.entries(usersData)
                .filter(([key, userObj]) => userObj) // prevent null objects
                .map(([firebaseKey, userObj]) => {
                    const profile = userObj.profile || {};
                    const safeProfileName = (profile.name || '').trim().toLowerCase();
                    const profileWords = safeProfileName.split(/\s+/).filter(w => w.length > 0);

                    const history = allResults.filter(r => {
                        const rawName = (r.studentName || '').trim().toLowerCase();
                        if (rawName === safeProfileName) return true;

                        // Fuzzy matching for omitted middle names or surnames
                        const rawWords = rawName.split(/\s+/).filter(w => w.length > 0);
                        if (rawWords.length >= 2 && profileWords.length >= 2) {
                            const isSubset1 = rawWords.every(w => profileWords.includes(w));
                            const isSubset2 = profileWords.every(w => rawWords.includes(w));
                            if (isSubset1 || isSubset2) return true;
                        }
                        return false;
                    });

                    // Extract last connection (from sessions and/or results history)
                    let lastConnection = 'Sin datos';
                    let latestTimestamp = 0;

                    // Check sessions data for the most recent timestamp
                    const sessionsData = userObj.sessions || {};
                    Object.values(sessionsData).forEach(sess => {
                        if (sess && sess.timestamp && sess.timestamp > latestTimestamp) {
                            latestTimestamp = sess.timestamp;
                        }
                    });

                    // Also check results history dates
                    if (history.length > 0) {
                        history.forEach(h => {
                            const d = new Date(h.date || h.timestamp);
                            if (!isNaN(d.getTime()) && d.getTime() > latestTimestamp) {
                                latestTimestamp = d.getTime();
                            }
                        });
                    }

                    if (latestTimestamp > 0) {
                        const lastD = new Date(latestTimestamp);
                        lastConnection = lastD.toLocaleDateString() + ' ' + lastD.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    }

                    // Calculate max score
                    let maxScore = 0;
                    let totalQuestions = 0;

                    history.forEach(h => {
                        if (AdminPanelModule.currentAreaFilter !== 'all') {
                            const areaStats = h.byArea ? h.byArea[AdminPanelModule.currentAreaFilter] : null;
                            if (areaStats && areaStats.total > 0) {
                                let calculatedIcfes = Math.round((areaStats.correct / areaStats.total) * 500);
                                if (calculatedIcfes > maxScore) maxScore = calculatedIcfes;
                                totalQuestions += areaStats.total;
                            } else if (h.title && h.title.toLowerCase().includes(AdminPanelModule.currentAreaFilter)) {
                                if (h.icfesScore && h.icfesScore > maxScore) {
                                    maxScore = Math.round(h.icfesScore);
                                } else if (h.correct !== undefined && h.total && Math.round((h.correct / h.total) * 500) > maxScore) {
                                    maxScore = Math.round((h.correct / h.total) * 500);
                                }
                                if (h.total) totalQuestions += h.total;
                            }
                        } else {
                            if (h.icfesScore && h.icfesScore > maxScore) {
                                maxScore = Math.round(h.icfesScore);
                            } else if (h.correct !== undefined && h.total && Math.round((h.correct / h.total) * 500) > maxScore) {
                                maxScore = Math.round((h.correct / h.total) * 500);
                            }

                            // Fallback check if h.score exists
                            if (maxScore === 0 && h.score) {
                                let score = parseFloat(h.score); // percentage
                                let calculatedIcfes = Math.round((score / 100) * 500);
                                if (calculatedIcfes > maxScore) maxScore = calculatedIcfes;
                            }

                            if (h.total) {
                                totalQuestions += h.total;
                            }
                        }
                    });

                    // Session Calculations
                    const sessions = userObj.sessions || {};
                    let totalSessionSeconds = 0;
                    let numLogins = Object.keys(sessions).length;

                    // Quality Time: Ya no sumamos el tiempo pasivo de la pestaña.
                    // Sumamos el tiempo de los simulacros validos (que no sean spam ni anulados)
                    history.forEach(h => {
                        if (!h.isSpam && !h.invalidated && h.timeSpent > 0 &&
                            (AdminPanelModule.currentAreaFilter === 'all' ||
                                (h.byArea && h.byArea[AdminPanelModule.currentAreaFilter]) ||
                                (h.title && h.title.toLowerCase().includes(AdminPanelModule.currentAreaFilter)))
                        ) {
                            let maxAllowed = (h.total || 20) * 300; // max 5 mins per question
                            if (maxAllowed > 16200) maxAllowed = 16200; // absolute max session: 4.5 hours

                            let cappedTime = h.timeSpent;
                            if (cappedTime > 86400) {
                                // Extreme timestamp corruption fallback: assume 2 mins per question
                                cappedTime = (h.total || 20) * 120;
                            } else if (cappedTime > maxAllowed) {
                                cappedTime = maxAllowed;
                            }

                            totalSessionSeconds += cappedTime;
                        }
                    });

                    // Format Time: e.g. "2h 15m"
                    let sessionTimeStr = "0m";
                    if (totalSessionSeconds > 0) {
                        const h = Math.floor(totalSessionSeconds / 3600);
                        const m = Math.floor((totalSessionSeconds % 3600) / 60);
                        if (h > 0) {
                            sessionTimeStr = `${h}h ${m}m`;
                        } else {
                            sessionTimeStr = `${m}m`;
                        }
                    }

                    // Algorithm to get first surname accurately enough for sorting
                    const nameParts = (profile.name || '').trim().split(' ');
                    let surnameForSort = '';
                    if (nameParts.length >= 3) {
                        surnameForSort = nameParts[nameParts.length - 2].toLowerCase(); // e.g. "Juan Carlos [Perez] Gomez"
                    } else if (nameParts.length === 2) {
                        surnameForSort = nameParts[1].toLowerCase();
                    } else {
                        surnameForSort = nameParts[0].toLowerCase();
                    }

                    // Gamification Level Calculation (inline, no module dependency)
                    const xp = userObj.gamification && userObj.gamification.xp ? parseInt(userObj.gamification.xp, 10) : 0;
                    const _lvl = Math.floor(xp / 200) + 1;
                    const _lvlTitle = (l) => {
                        if (l < 5) return 'Novato';
                        if (l < 10) return 'Estudiante Activo';
                        if (l < 20) return 'Aspirante';
                        if (l < 30) return 'Analista Crítico';
                        if (l < 40) return 'Promesa Saber';
                        if (l < 50) return 'Cerebro Destacado';
                        if (l < 70) return 'Intelectual';
                        if (l < 90) return 'Erudito';
                        if (l < 100) return 'Genio Académico';
                        return 'Maestro Nacional';
                    };
                    const currentLevelStr = `Lvl ${_lvl}: ${_lvlTitle(_lvl)}`;

                    // ===== NEW: Per-Area Breakdown (with fallbacks) =====
                    const areaBreakdown = {};
                    const _areaAliases = {
                        'matematicas': 'matematicas', 'matemáticas': 'matematicas', 'mat': 'matematicas',
                        'lectura': 'lectura', 'lectura_crítica': 'lectura', 'lectura critica': 'lectura', 'lectura crítica': 'lectura',
                        'ciencias': 'ciencias', 'ciencias_naturales': 'ciencias', 'ciencias naturales': 'ciencias',
                        'sociales': 'sociales', 'sociales_y_ciudadanas': 'sociales', 'sociales y ciudadanas': 'sociales',
                        'ingles': 'ingles', 'inglés': 'ingles', 'english': 'ingles'
                    };
                    const _normalizeArea = (a) => _areaAliases[(a || '').toLowerCase().trim()] || (a || '').toLowerCase().trim();

                    history.forEach(exam => {
                        if (exam.byArea && Object.keys(exam.byArea).length > 0) {
                            Object.entries(exam.byArea).forEach(([area, stats]) => {
                                const key = _normalizeArea(area);
                                if (!key) return;
                                if (!areaBreakdown[key]) areaBreakdown[key] = { worked: 0, correct: 0 };
                                areaBreakdown[key].worked += stats.total || 0;
                                areaBreakdown[key].correct += stats.correct || 0;
                            });
                        } else if (exam.title) {
                            // Fallback: extract area from title (e.g. "Estudio Guiado: Matemáticas")
                            const titleLower = exam.title.toLowerCase();
                            let detectedArea = null;
                            if (titleLower.includes('matem')) detectedArea = 'matematicas';
                            else if (titleLower.includes('lectura')) detectedArea = 'lectura';
                            else if (titleLower.includes('ciencia')) detectedArea = 'ciencias';
                            else if (titleLower.includes('social')) detectedArea = 'sociales';
                            else if (titleLower.includes('ingl')) detectedArea = 'ingles';
                            if (detectedArea && exam.total) {
                                if (!areaBreakdown[detectedArea]) areaBreakdown[detectedArea] = { worked: 0, correct: 0 };
                                areaBreakdown[detectedArea].worked += exam.total || 0;
                                areaBreakdown[detectedArea].correct += exam.correct || 0;
                            } else if (exam.total > 0) {
                                // Fallback for standard or older exams that have no specific area breakdown
                                if (!areaBreakdown['simulacro_general']) areaBreakdown['simulacro_general'] = { worked: 0, correct: 0 };
                                areaBreakdown['simulacro_general'].worked += exam.total || 0;
                                areaBreakdown['simulacro_general'].correct += exam.correct || 0;
                            }
                        }
                    });

                    // ===== NEW: Trend Indicator (compare last 2 scores) =====
                    const sortedHistory = [...history].sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
                    let trend = 'neutral'; // 'up', 'down', 'neutral'
                    if (sortedHistory.length >= 2) {
                        const lastScore = sortedHistory[sortedHistory.length - 1].icfesScore || (sortedHistory[sortedHistory.length - 1].correct / sortedHistory[sortedHistory.length - 1].total * 500);
                        const prevScore = sortedHistory[sortedHistory.length - 2].icfesScore || (sortedHistory[sortedHistory.length - 2].correct / sortedHistory[sortedHistory.length - 2].total * 500);
                        if (lastScore > prevScore + 10) trend = 'up';
                        else if (lastScore < prevScore - 10) trend = 'down';
                    }

                    // ===== NEW: Risk Badge (7+ days inactive) =====
                    let daysInactive = 999;
                    if (latestTimestamp > 0) {
                        daysInactive = Math.floor((Date.now() - latestTimestamp) / (1000 * 60 * 60 * 24));
                    }
                    const isAtRisk = daysInactive >= 7;

                    // ===== NEW: Last 5 scores for sparkline =====
                    const last5Scores = sortedHistory.slice(-5).map(h => {
                        if (h.icfesScore) return Math.round(h.icfesScore);
                        if (h.correct !== undefined && h.total) return Math.round((h.correct / h.total) * 500);
                        return 0;
                    });

                    // ===== NEW: Study hour pattern =====
                    let hourCounts = {};
                    Object.values(sessions).forEach(sess => {
                        if (sess && sess.timestamp) {
                            const hour = new Date(sess.timestamp).getHours();
                            hourCounts[hour] = (hourCounts[hour] || 0) + 1;
                        }
                    });
                    let peakHour = null;
                    let peakCount = 0;
                    Object.entries(hourCounts).forEach(([h, c]) => {
                        if (c > peakCount) { peakCount = c; peakHour = parseInt(h); }
                    });
                    let studyPatternStr = 'Sin datos';
                    if (peakHour !== null) {
                        const endHour = (peakHour + 2) % 24;
                        const fmt = (h) => h < 12 ? `${h || 12} AM` : `${h === 12 ? 12 : h - 12} PM`;
                        studyPatternStr = `${fmt(peakHour)} - ${fmt(endHour)}`;
                    }

                    return {
                        id: firebaseKey,
                        name: profile.name || 'Desconocido',
                        surnameForSort: surnameForSort,
                        email: profile.email || 'Sin correo',
                        school: profile.school || 'Sin colegio',
                        grade: profile.grade || 'N/A',
                        maxScore: maxScore,
                        totalQuestions: totalQuestions,
                        totalSimulacros: history.length,
                        lastConnection: lastConnection,
                        sessionTimeStr: sessionTimeStr,
                        numLogins: numLogins,
                        gamificationLevelStr: currentLevelStr,
                        xp: xp,
                        areaBreakdown: areaBreakdown,
                        trend: trend,
                        isAtRisk: isAtRisk,
                        daysInactive: daysInactive,
                        last5Scores: last5Scores,
                        studyPatternStr: studyPatternStr
                    };
                });

            spinner.style.display = 'none';
            this.renderStudents();

        } catch (error) {
            console.error('Teacher Fetch Error:', error);
            spinner.style.display = 'none';
            container.innerHTML = '<p style="text-align: center; color: #ef4444;">Error al cargar la base de datos de usuarios.</p>';
        }
    },

    filterByGrade(grade) {
        this.currentGradeFilter = grade;

        // Update tabs styling
        document.querySelectorAll('.teacher-tab-btn').forEach(btn => {
            btn.classList.remove('active');
            btn.style.background = 'transparent';
            btn.style.color = 'var(--color-text-muted)';
        });

        const activeBtn = document.getElementById(`teacher-tab-${grade.toLowerCase()}`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.style.background = 'var(--color-primary)';
            activeBtn.style.color = 'white';
        }

        this.renderStudents();
    },

    renderStudents() {
        const container = document.getElementById('teacher-students-container');
        if (!container) return;

        // Filter and Sort
        let filtered = this.allStudents;
        if (this.currentGradeFilter !== 'all') {
            filtered = this.allStudents.filter(s => s.grade === this.currentGradeFilter);
        }

        filtered.sort((a, b) => a.surnameForSort.localeCompare(b.surnameForSort));

        if (filtered.length === 0) {
            container.innerHTML = '<div style="text-align: center; padding: 40px; color: var(--color-text-muted);">No hay estudiantes en esta categoría.</div>';
            return;
        }

        container.innerHTML = filtered.map(student => {
            // Determine score color
            let scoreColor = '#ef4444'; // red
            if (student.maxScore >= 350) scoreColor = '#10b981'; // green
            else if (student.maxScore >= 250) scoreColor = '#fbbf24'; // yellow
            else if (student.maxScore === 0) scoreColor = '#888';

            // Trend icon
            const trendIcon = student.trend === 'up' ? '▲' : student.trend === 'down' ? '▼' : '●';
            const trendColor = student.trend === 'up' ? '#10b981' : student.trend === 'down' ? '#ef4444' : '#888';

            // Risk badge
            const riskBadge = student.isAtRisk
                ? `<span style="background: rgba(239,68,68,0.15); color: #ef4444; font-size: 0.7rem; font-weight: 700; padding: 2px 8px; border-radius: 6px; margin-left: 8px; display: inline-flex; align-items: center; gap: 3px;">⚠️ ${student.daysInactive}d sin entrar</span>`
                : '';

            // ===== Area Breakdown HTML (P0 – CRITICAL) =====
            const areaNames = {
                'matematicas': { label: 'Matemáticas', icon: '📐', color: '#818cf8' },
                'lectura': { label: 'Lectura Crítica', icon: '📖', color: '#f472b6' },
                'ciencias': { label: 'Ciencias Naturales', icon: '🔬', color: '#34d399' },
                'sociales': { label: 'Sociales y Ciudadanas', icon: '🌎', color: '#fb923c' },
                'ingles': { label: 'Inglés', icon: '🇬🇧', color: '#38bdf8' },
                'simulacro pdf': { label: 'Simulacro PDF', icon: '📄', color: '#a78bfa' },
                'simulacro_general': { label: 'Simulacros Globales', icon: '📚', color: '#9ca3af' }
            };

            let areaBreakdownHtml = '';
            const areaEntries = Object.entries(student.areaBreakdown || {});
            if (areaEntries.length > 0) {
                areaBreakdownHtml = areaEntries.map(([area, data]) => {
                    const meta = areaNames[area] || { label: area.replace(/_/g, ' '), icon: '📝', color: '#888' };
                    const perc = data.worked > 0 ? Math.round((data.correct / data.worked) * 100) : 0;
                    const percColor = perc >= 70 ? '#10b981' : perc >= 50 ? '#fbbf24' : '#ef4444';
                    return `
                        <div style="display: flex; align-items: center; gap: 10px; padding: 8px 12px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 10px;">
                            <span style="font-size: 1.2rem;">${meta.icon}</span>
                            <div style="flex: 1; min-width: 0;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                                    <span style="font-weight: 600; font-size: 0.85rem; color: var(--color-text);">${meta.label}</span>
                                    <span style="font-weight: 700; font-size: 0.8rem; color: ${percColor};">${data.correct}/${data.worked} (${perc}%)</span>
                                </div>
                                <div style="width: 100%; height: 5px; background: rgba(0,0,0,0.06); border-radius: 3px; overflow: hidden;">
                                    <div style="width: ${perc}%; height: 100%; background: ${meta.color}; border-radius: 3px; transition: width 0.5s;"></div>
                                </div>
                            </div>
                        </div>`;
                }).join('');
            } else {
                areaBreakdownHtml = '<div style="text-align: center; padding: 12px; color: var(--color-text-muted); font-size: 0.85rem; font-style: italic;">No ha trabajado ningún área todavía</div>';
            }

            // ===== Sparkline SVG (last 5 scores) =====
            let sparklineHtml = '';
            if (student.last5Scores && student.last5Scores.length >= 2) {
                const scores = student.last5Scores;
                const maxS = Math.max(...scores, 500);
                const minS = Math.min(...scores, 0);
                const range = maxS - minS || 1;
                const w = 120, h = 36, pad = 4;
                const points = scores.map((s, i) => {
                    const x = pad + (i / (scores.length - 1)) * (w - pad * 2);
                    const y = h - pad - ((s - minS) / range) * (h - pad * 2);
                    return `${x},${y}`;
                }).join(' ');
                const lastColor = scores[scores.length - 1] >= scores[scores.length - 2] ? '#10b981' : '#ef4444';
                sparklineHtml = `
                    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display: block;">
                        <polyline points="${points}" fill="none" stroke="${lastColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        ${scores.map((s, i) => {
                    const x = pad + (i / (scores.length - 1)) * (w - pad * 2);
                    const y = h - pad - ((s - minS) / range) * (h - pad * 2);
                    return `<circle cx="${x}" cy="${y}" r="3" fill="${lastColor}"/>`;
                }).join('')}
                    </svg>`;
            } else {
                sparklineHtml = '<span style="font-size: 0.8rem; color: var(--color-text-muted);">Sin datos</span>';
            }

            // ===== Auto-Recommendation =====
            let recommendation = '';
            const weakAreas = areaEntries
                .filter(([, d]) => d.worked > 0 && (d.correct / d.worked) < 0.5)
                .map(([area]) => (areaNames[area] || { label: area.replace(/_/g, ' ') }).label);
            let missingAreas = ['Matemáticas', 'Lectura Crítica', 'Ciencias Naturales', 'Sociales', 'Inglés']
                .filter(name => !areaEntries.some(([a]) => (areaNames[a] || {}).label === name));

            if (areaEntries.some(([a]) => a === 'simulacro_general' || a === 'simulacro pdf')) {
                // If they took a global exam, they theoretically touched all areas
                missingAreas = [];
            }

            if (missingAreas.length > 0) {
                recommendation += `<span style="color: #ef4444; font-weight: 600;">No ha trabajado:</span> ${missingAreas.join(', ')}. `;
            }
            if (weakAreas.length > 0) {
                recommendation += `<span style="color: #f59e0b; font-weight: 600;">Debe reforzar:</span> ${weakAreas.join(', ')}. `;
            }
            if (student.isAtRisk) {
                recommendation += `<span style="color: #ef4444; font-weight: 600;">⚠️ Inactivo hace ${student.daysInactive} días.</span> `;
            }
            if (!recommendation) {
                recommendation = '<span style="color: #10b981; font-weight: 600;">✅ Buen ritmo de estudio.</span>';
            }

            return `
                <div style="background: var(--color-surface); border: 1px solid ${student.isAtRisk ? 'rgba(239,68,68,0.4)' : 'var(--color-border)'}; border-radius: 16px; overflow: hidden; transition: all 0.2s; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                    
                    <!-- SUMMARY ROW -->
                    <div style="padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; flex-wrap: wrap; gap: 10px;" 
                         onclick="this.nextElementSibling.classList.toggle('hidden')">
                        
                        <!-- Col 1: Name and Grade -->
                        <div style="display: flex; align-items: center; gap: 16px; flex: 1; min-width: 200px;">
                            <div style="width: 42px; height: 42px; background: rgba(99,102,241,0.1); color: var(--color-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1.1rem;">
                                ${student.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <div style="font-weight: 700; color: var(--color-text); font-size: 1.05rem; display: flex; align-items: center; gap: 6px;">
                                    ${student.name}${riskBadge}
                                </div>
                                <div style="color: var(--color-text-muted); font-size: 0.85rem; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                                    <span class="material-icons-round" style="font-size: 14px;">school</span> Grado ${student.grade}
                                    <span style="color: var(--color-border);">|</span>
                                    <span class="material-icons-round" style="font-size: 14px; color: #f59e0b;">stars</span> 
                                    <span style="color: var(--color-primary); font-weight: 600;">${student.gamificationLevelStr}</span>
                                    <span style="font-size: 0.75rem; color: var(--color-text-muted);">(${student.xp} XP)</span>
                                </div>
                            </div>
                        </div>

                        <!-- Col 2: Max Score + Trend -->
                        <div style="text-align: right; margin-right: 24px;">
                            <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 2px;">Mejor ICFES</div>
                            <div style="display: flex; align-items: center; gap: 6px; justify-content: flex-end;">
                                <span style="font-weight: 800; font-size: 1.2rem; color: ${scoreColor}; background: ${scoreColor}15; padding: 2px 10px; border-radius: 8px; display: inline-block;">
                                    ${student.maxScore || 'N/A'}
                                </span>
                                <span style="font-size: 0.85rem; font-weight: 800; color: ${trendColor};" title="Tendencia vs examen anterior">${trendIcon}</span>
                            </div>
                        </div>

                        <!-- Col 3: Messaging, Last Date & Expand Icon -->
                        <div style="display: flex; align-items: center; gap: 16px; justify-content: flex-end;">
                            <button onclick="event.stopPropagation(); AdminPanelModule.openMessageModal('${student.id}', '${student.name.replace(/'/g, "\\'")}')" style="padding: 6px 12px; font-size: 0.8rem; border-radius: 8px; border: none; background: rgba(99,102,241,0.1); color: var(--color-primary); cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 4px;">
                                <span class="material-icons-round" style="font-size: 14px;">mail</span> Mensaje
                            </button>
                            <div style="text-align: right;">
                                <div style="font-size: 0.75rem; color: var(--color-text-muted);">Última Conexión</div>
                                <div style="font-size: 0.85rem; font-weight: 500; color: var(--color-text);">${student.lastConnection}</div>
                            </div>
                            <span class="material-icons-round" style="color: var(--color-text-muted);">expand_more</span>
                        </div>
                    </div>

                    <!-- EXPANDED STATS ROW (Hidden by default) -->
                    <div class="hidden" style="border-top: 1px solid var(--color-border); background: rgba(0,0,0,0.02); padding: 20px;">
                        
                        <!-- ===== P0: AREA BREAKDOWN (CRITICAL) ===== -->
                        <div style="margin-bottom: 20px;">
                            <h4 style="margin: 0 0 12px; font-size: 0.95rem; color: var(--color-text); display: flex; align-items: center; gap: 6px;">
                                <span class="material-icons-round" style="font-size: 18px; color: var(--color-primary);">analytics</span>
                                Áreas Trabajadas (para calificación)
                            </h4>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px;">
                                ${areaBreakdownHtml}
                            </div>
                        </div>

                        <!-- Stats Grid -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 16px;">
                            
                            <!-- Questions Worked -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">checklist</span> Preguntas Totales
                                </div>
                                <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-primary);">${student.totalQuestions}</div>
                            </div>

                            <!-- Finished Exams -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">flag</span> Simulacros
                                </div>
                                <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-accent);">${student.totalSimulacros}</div>
                            </div>

                            <!-- Session Time -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">schedule</span> Tiempo Total
                                </div>
                                <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-primary);">${student.sessionTimeStr}</div>
                            </div>

                            <!-- Logins -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">login</span> Logins
                                </div>
                                <div style="font-weight: 700; font-size: 1.1rem; color: var(--color-text);">${student.numLogins}</div>
                            </div>

                            <!-- Study Hours Pattern -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">wb_twilight</span> Horario Habitual
                                </div>
                                <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-text);">${student.studyPatternStr}</div>
                            </div>

                            <!-- Sparkline -->
                            <div style="background: var(--color-surface); padding: 12px; border-radius: 12px; border: 1px solid var(--color-border);">
                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px; display:flex; align-items:center; gap: 4px;">
                                    <span class="material-icons-round" style="font-size: 16px;">trending_up</span> Evolución (últ. 5)
                                </div>
                                ${sparklineHtml}
                            </div>
                        </div>

                        <!-- Contact Info -->
                        <div style="background: var(--color-surface); padding: 10px 14px; border-radius: 10px; border: 1px solid var(--color-border); font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 12px;">
                            📧 ${student.email}
                        </div>

                        <!-- Auto-Recommendation -->
                        <div style="background: rgba(99,102,241,0.05); border: 1px solid rgba(99,102,241,0.15); padding: 12px 16px; border-radius: 12px; font-size: 0.85rem; color: var(--color-text); display: flex; align-items: flex-start; gap: 8px;">
                            <span class="material-icons-round" style="font-size: 18px; color: var(--color-primary); flex-shrink: 0; margin-top: 1px;">auto_awesome</span>
                            <div>${recommendation}</div>
                        </div>

                        <!-- Action Buttons -->
                        <div style="margin-top: 16px; display: flex; gap: 12px; justify-content: flex-end;">
                            <button onclick="AdminPanelModule.showCategoricalHistory('${student.id}')" style="padding: 6px 12px; font-size: 0.85rem; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text); cursor: pointer;">
                                <span class="material-icons-round" style="font-size: 14px; vertical-align: middle;">visibility</span> Historial Completo
                            </button>
                        </div>

                    </div>

                </div>
            `;
        }).join('');
    },

    showCategoricalHistory(studentId) {
        NotificationModule.show('Cargando estadísticas detalladas...', 'info');

        let modalContainer = document.getElementById('student-details-modal-container');
        if (!modalContainer) {
            // Create the modal container dynamically if it doesn't exist in this view
            modalContainer = document.createElement('div');
            modalContainer.id = 'student-details-modal-container';
            document.body.appendChild(modalContainer);
        }

        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${studentId}/profile.json`)
            .then(res => res.json())
            .then(profile => {
                if (!profile) throw new Error("No profile data");
                const name = profile.name || 'Estudiante';

                // Fetch results from the global results endpoint
                return fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json?t=' + Date.now())
                    .then(res => res.json())
                    .then(resultsData => {
                        const allResults = resultsData ? Object.values(resultsData).filter(r => r) : [];
                        const safeProfileName = name.trim().toLowerCase();
                        const profileWords = safeProfileName.split(/\s+/).filter(w => w.length > 0);

                        const historyArr = allResults.filter(r => {
                            const rawName = (r.studentName || '').trim().toLowerCase();
                            if (rawName === safeProfileName) return true;

                            const rawWords = rawName.split(/\s+/).filter(w => w.length > 0);
                            if (rawWords.length >= 2 && profileWords.length >= 2) {
                                const isSubset1 = rawWords.every(w => profileWords.includes(w));
                                const isSubset2 = profileWords.every(w => rawWords.includes(w));
                                if (isSubset1 || isSubset2) return true;
                            }
                            return false;
                        });

                        // Detailed Stats Calculation
                        let totalQuestions = 0;
                        let totalCorrect = 0;
                        let totalTimeSpentSeconds = 0;
                        let examsWithTime = 0;

                        // Area breakdowns
                        const areaStats = {
                            'Matemáticas': { worked: 0, correct: 0 },
                            'Lectura_Crítica': { worked: 0, correct: 0 },
                            'Sociales_y_Ciudadanas': { worked: 0, correct: 0 },
                            'Ciencias_Naturales': { worked: 0, correct: 0 },
                            'Inglés': { worked: 0, correct: 0 }
                        };

                        historyArr.forEach(exam => {
                            if (exam.total) totalQuestions += exam.total;
                            if (exam.correct) totalCorrect += exam.correct;

                            if (exam.timeSpent) {
                                let maxAllowed = (exam.total || 20) * 300; // max 5 mins per question
                                if (maxAllowed > 16200) maxAllowed = 16200; // absolute max session: 4.5 hours

                                let cappedTime = exam.timeSpent;
                                if (cappedTime > 86400) {
                                    // Extreme timestamp corruption fallback: assume 2 mins per question
                                    cappedTime = (exam.total || 20) * 120;
                                } else if (cappedTime > maxAllowed) {
                                    cappedTime = maxAllowed;
                                }

                                totalTimeSpentSeconds += cappedTime;
                                examsWithTime++;
                            }

                            if (exam.byArea) {
                                Object.entries(exam.byArea).forEach(([area, stats]) => {
                                    if (areaStats[area]) {
                                        areaStats[area].worked += stats.total || 0;
                                        areaStats[area].correct += stats.correct || 0;
                                    }
                                });
                            }
                        });

                        // Calculate Averages
                        const globalAcc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

                        // Average time per question
                        let avgTimePerQuestionStr = "N/A";
                        if (totalTimeSpentSeconds > 0 && totalQuestions > 0) {
                            const avgSecs = Math.round(totalTimeSpentSeconds / totalQuestions);
                            if (avgSecs > 60) {
                                const m = Math.floor(avgSecs / 60);
                                const s = avgSecs % 60;
                                avgTimePerQuestionStr = `${m}m ${s}s`;
                            } else {
                                avgTimePerQuestionStr = `${avgSecs}s`;
                            }
                        }

                        // Render Area Breakdown HTML
                        let areaHtml = '';
                        Object.entries(areaStats).forEach(([area, data]) => {
                            if (data.worked > 0) {
                                const perc = Math.round((data.correct / data.worked) * 100);
                                // Format Area Name (replace underscores)
                                const areaName = area.replace(/_/g, ' ');
                                areaHtml += `
                                    <div style="margin-bottom: 12px;">
                                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                                            <span style="font-weight: 600; color: var(--color-text);">${areaName}</span>
                                            <span style="font-weight: 700; color: ${perc >= 60 ? 'var(--color-primary)' : 'var(--color-accent)'};">${data.correct}/${data.worked} (${perc}%)</span>
                                        </div>
                                        <div style="width: 100%; height: 6px; background: rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden;">
                                            <div style="width: ${perc}%; height: 100%; background: ${perc >= 60 ? 'var(--color-primary)' : 'var(--color-accent)'}; border-radius: 4px;"></div>
                                        </div>
                                    </div>
                                `;
                            }
                        });

                        if (areaHtml === '') areaHtml = '<p style="color: var(--color-text-muted); font-size: 0.9rem;">Sin datos por área aún.</p>';

                        const modalHtml = `
                            <div id="stats-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;">
                                <div style="background: var(--color-surface); width: 100%; max-width: 650px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column; max-height: 90vh;">
                                    
                                    <!-- Header -->
                                    <div style="padding: 20px 24px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; background: rgba(99,102,241,0.05);">
                                        <div>
                                            <h2 style="margin: 0; font-size: 1.2rem; color: var(--color-primary-dark);">Estadísticas Detalladas</h2>
                                            <p style="margin: 2px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">Estudiante: <strong>${name}</strong> (${historyArr.length} simulacros)</p>
                                        </div>
                                        <button onclick="document.getElementById('student-details-modal-container').innerHTML = ''" style="background: none; border: none; cursor: pointer; color: var(--color-text-muted); padding: 4px; border-radius: 50%;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='none'">
                                            <span class="material-icons-round">close</span>
                                        </button>
                                    </div>

                                    <!-- Body -->
                                    <div style="padding: 24px; overflow-y: auto; display: grid; gap: 24px;">
                                        
                                        <!-- Global Metrics -->
                                        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                                            <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); padding: 16px; border-radius: 12px; text-align: center;">
                                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px;">Precisión Global</div>
                                                <div style="font-size: 1.6rem; font-weight: 800; color: #10b981;">${globalAcc}%</div>
                                            </div>
                                            <div style="background: rgba(99,102,241,0.1); border: 1px solid rgba(99,102,241,0.2); padding: 16px; border-radius: 12px; text-align: center;">
                                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px;">Preg. Trabajadas</div>
                                                <div style="font-size: 1.6rem; font-weight: 800; color: var(--color-primary);">${totalQuestions}</div>
                                            </div>
                                            <div style="background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); padding: 16px; border-radius: 12px; text-align: center;">
                                                <div style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 4px;">T. Promedio / Preg</div>
                                                <div style="font-size: 1.4rem; font-weight: 800; color: #f59e0b; margin-top:2px;">${avgTimePerQuestionStr}</div>
                                            </div>
                                        </div>

                                        <!-- Areas Breakdown -->
                                        <div>
                                            <h3 style="font-size: 1.05rem; color: var(--color-text); margin: 0 0 12px 0; display: flex; align-items: center; gap: 6px;">
                                                <span class="material-icons-round" style="color: var(--color-primary); font-size: 18px;">analytics</span> 
                                                Rendimiento Categórico
                                            </h3>
                                            <div style="background: rgba(0,0,0,0.02); border: 1px solid var(--color-border); padding: 16px; border-radius: 12px;">
                                                ${areaHtml}
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                        `;

                        modalContainer.innerHTML = modalHtml;
                    });
            })
            .catch(err => {
                console.error('Error fetching full stats:', err);
                NotificationModule.show('Error al cargar datos detallados del estudiante.', 'error');
            });
    },

    openMessageModal(studentId, studentName) {
        let modalContainer = document.getElementById('student-details-modal-container');
        if (!modalContainer) {
            // Create dynamically if not in the current view
            modalContainer = document.createElement('div');
            modalContainer.id = 'student-details-modal-container';
            document.body.appendChild(modalContainer);
        }

        const modalHtml = `
            <div id="stats-modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.5); backdrop-filter: blur(4px); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px;">
                <div style="background: var(--color-surface); width: 100%; max-width: 500px; border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.2); overflow: hidden; display: flex; flex-direction: column;">
                    
                    <!-- Header -->
                    <div style="padding: 20px 24px; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; background: rgba(99,102,241,0.05);">
                        <div>
                            <h2 style="margin: 0; font-size: 1.2rem; color: var(--color-primary-dark); display:flex; align-items:center; gap:8px;">
                                <span class="material-icons-round">mark_email_unread</span> Nuevo Mensaje
                            </h2>
                            <p style="margin: 2px 0 0 0; font-size: 0.9rem; color: var(--color-text-muted);">Para: <strong>${studentName}</strong></p>
                        </div>
                        <button onclick="document.getElementById('student-details-modal-container').innerHTML = ''" style="background: none; border: none; cursor: pointer; color: var(--color-text-muted); padding: 4px; border-radius: 50%;" onmouseover="this.style.background='rgba(0,0,0,0.05)'" onmouseout="this.style.background='none'">
                            <span class="material-icons-round">close</span>
                        </button>
                    </div>

                    <!-- Body -->
                    <div style="padding: 24px; display: flex; flex-direction: column; gap: 16px;">
                        <div>
                            <label style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 8px; display: block;">Mensaje de Recomendación:</label>
                            <textarea id="admin-message-input" rows="5" placeholder="Escribe aquí tu consejo, recomendación de estudio, o retroalimentación..." style="width: 100%; padding: 12px; border-radius: 12px; border: 1px solid var(--color-border); background: rgba(0,0,0,0.02); color: var(--color-text); font-family: inherit; font-size: 0.95rem; resize: none;"></textarea>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div style="padding: 16px 24px; border-top: 1px solid var(--color-border); background: rgba(0,0,0,0.01); display: flex; justify-content: flex-end; gap: 12px;">
                        <button onclick="document.getElementById('student-details-modal-container').innerHTML = ''" style="padding: 10px 16px; border-radius: 10px; border: 1px solid var(--color-border); background: transparent; color: var(--color-text); cursor: pointer; font-weight: 600;">Cancelar</button>
                        <button onclick="AdminPanelModule.sendMessage('${studentId}')" style="padding: 10px 20px; border-radius: 10px; border: none; background: var(--color-primary); color: white; cursor: pointer; font-weight: 600; display:flex; align-items:center; gap:6px;">
                            <span class="material-icons-round" style="font-size: 18px;">send</span> Enviar
                        </button>
                    </div>
                    
                </div>
            </div>
        `;
        modalContainer.innerHTML = modalHtml;
        setTimeout(() => document.getElementById('admin-message-input').focus(), 100);
    },

    sendMessage(studentId) {
        const input = document.getElementById('admin-message-input');
        if (!input) return;
        const text = input.value.trim();

        if (!text) {
            NotificationModule.show('Escribe un mensaje antes de enviar.', 'error');
            return;
        }

        const messageObj = {
            from: AuthModule.currentUser ? AuthModule.currentUser.name || 'Profesor' : 'Profesor',
            senderId: AuthModule.currentUser ? AuthModule.currentUser.id : 'master',
            text: text,
            date: new Date().toISOString(),
            read: false
        };

        // Enviar a Firebase directamente a la ruta /users/{id}/messages
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${studentId}/messages.json`, {
            method: 'POST', // POST crea un id único automático en firebase
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(messageObj)
        })
            .then(res => {
                if (!res.ok) throw new Error('Error enviando mensaje');
                return res.json();
            })
            .then(() => {
                document.getElementById('student-details-modal-container').innerHTML = '';
                NotificationModule.show('Mensaje enviado correctamente al estudiante.', 'success');
            })
            .catch(err => {
                console.error('Send Msg Error:', err);
                NotificationModule.show('Hubo un error al enviar el mensaje.', 'error');
            });
    }
};

const ZoomModule = {
    scale: 1,
    step: 0.1,
    min: 0.5,
    max: 2,

    init() {
        const saved = localStorage.getItem('app_zoom');
        if (saved) {
            this.scale = parseFloat(saved);
        }
        this.apply();

        // Show controls after a moment
        setTimeout(() => {
            const controls = document.getElementById('zoom-controls');
            if (controls) {
                controls.style.opacity = '1';
                controls.style.pointerEvents = 'all';
            }
        }, 1000);
    },

    zoomIn() {
        if (this.scale < this.max) {
            this.scale = Math.round((this.scale + this.step) * 10) / 10;
            this.apply();
        }
    },

    zoomOut() {
        if (this.scale > this.min) {
            this.scale = Math.round((this.scale - this.step) * 10) / 10;
            this.apply();
        }
    },

    reset() {
        this.scale = 1;
        this.apply();
    },

    apply() {
        // Apply zoom to body
        document.body.style.zoom = this.scale;

        // Update display
        const display = document.getElementById('zoom-level-display');
        if (display) {
            display.textContent = Math.round(this.scale * 100) + '%';
        }

        // Save preference
        localStorage.setItem('app_zoom', this.scale);
    }
};

// Initialize Zoom
ZoomModule.init();

// Initialize Local Server Sync
if (typeof LocalServerModule !== 'undefined') {
    LocalServerModule.init();
}

// Force Home View
if (typeof Router !== 'undefined') {
    Router.go('home');
}

// Check for active exams to resume
setTimeout(() => {
    const savedStandard = localStorage.getItem('saber11_active_exam');
    const savedPDF = localStorage.getItem('saber11_active_pdf_exam');

    if (savedStandard) {
        if (confirm('Tienes un simulacro en progreso. ¿Deseas continuarlo?')) {
            ExamEngine.resume(JSON.parse(savedStandard));
        } else {
            localStorage.removeItem('saber11_active_exam');
        }
    } else if (savedPDF) {
        if (confirm('Tienes un simulacro PDF en progreso. ¿Deseas continuarlo?')) {
            PDFExamModule.resume(JSON.parse(savedPDF));
        } else {
            localStorage.removeItem('saber11_active_pdf_exam');
        }
    }
}, 500);

// ============ SESSION TRACKER ============
const SessionTracker = {
    sessionId: null,
    totalActiveSeconds: 0,
    lastXpMinute: 0,
    lastTickTime: null,
    intervalTimer: null,
    dbPath: null,
    isPaused: false,

    start(user) {
        if (!user || !user.id) return;
        this.stop(false); // Clean up any previous unclosed session

        let loaded = false;
        try {
            const saved = sessionStorage.getItem('saber11_session_data');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed && parsed.userId === user.id && parsed.sessionId) {
                    this.sessionId = parsed.sessionId;
                    this.totalActiveSeconds = parsed.totalActiveSeconds || 0;
                    this.lastXpMinute = parsed.lastXpMinute || 0;
                    loaded = true;
                }
            }
        } catch (e) { }

        if (!loaded) {
            this.sessionId = 'ses_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
            this.totalActiveSeconds = 0;
            this.lastXpMinute = 0;
        }

        this.lastTickTime = Date.now();
        this.isPaused = document.visibilityState === 'hidden';
        this.dbPath = `https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${user.id}/sessions/${this.sessionId}.json`;

        // Guardar sesión inicial
        this._syncWithCloud('activa');

        // Latido cada 60 segundos y eventos de cierre
        const syncHeartbeat = () => {
            if (AuthModule.currentUser && this.sessionId) {
                this._syncWithCloud(this.isPaused ? 'pausada' : 'activa');
            } else {
                this.stop();
            }
        };

        this.intervalTimer = setInterval(syncHeartbeat, 60000);

        // Binding methods for event listeners
        this._handleBeforeUnload = this._handleBeforeUnload.bind(this);
        this._handleVisibilityChange = this._handleVisibilityChange.bind(this);
        this._handleBlur = this._handleBlur.bind(this);
        this._handleFocus = this._handleFocus.bind(this);

        // Guardar inmediatamente si el usuario cierra la pestaña o la minimiza
        window.addEventListener('beforeunload', this._handleBeforeUnload);
        window.addEventListener('visibilitychange', this._handleVisibilityChange);
        window.addEventListener('blur', this._handleBlur);
        window.addEventListener('focus', this._handleFocus);

        this.renderClock();
    },

    _handleBeforeUnload() {
        if (this.sessionId) {
            this._updateActiveTime();
            this._syncWithCloud('abandonada');
        }
    },

    _handleVisibilityChange() {
        if (document.visibilityState === 'hidden') {
            this.pause();
        } else {
            this.resume();
        }
    },

    _handleBlur() {
        this.pause();
    },

    _handleFocus() {
        this.resume();
    },

    pause() {
        if (!this.sessionId || this.isPaused) return;
        this._updateActiveTime();
        this.isPaused = true;
        this._syncWithCloud('pausada');

        // Visual indicator update immediately
        this._updateUIClockElement();
    },

    resume() {
        if (!this.sessionId || !this.isPaused) return;
        this.isPaused = false;
        this.lastTickTime = Date.now(); // Reset tick time so pause duration is ignored
        this._syncWithCloud('activa');
    },

    _updateActiveTime() {
        if (!this.isPaused && this.lastTickTime) {
            const now = Date.now();
            const MathFloor = Math.floor;
            const elapsed = MathFloor((now - this.lastTickTime) / 1000);
            if (elapsed > 0) {
                this.totalActiveSeconds += elapsed;
                this.lastTickTime = now;

                // Guardar Session activa para que el Profesor sepa si está Online/Pausado,
                // Pero YA NO DAMOS XP POR MINUTO. El XP solo se da por hacer simulacros o flashcards.
                if (AuthModule.currentUser && this.sessionId) {
                    sessionStorage.setItem('saber11_session_data', JSON.stringify({
                        userId: AuthModule.currentUser.id,
                        sessionId: this.sessionId,
                        totalActiveSeconds: this.totalActiveSeconds,
                        lastXpMinute: this.lastXpMinute
                    }));
                }
            }
        }
    },

    stop(isExplicitLogout = true) {
        if (this.intervalTimer) {
            clearInterval(this.intervalTimer);
            this.intervalTimer = null;
        }

        if (this.dbPath) {
            this._updateActiveTime();
            this._syncWithCloud(isExplicitLogout ? 'cerrada' : 'abandonada');
            this.dbPath = null;
        }

        // Cleanup listeners
        if (this._handleBeforeUnload) {
            window.removeEventListener('beforeunload', this._handleBeforeUnload);
            window.removeEventListener('visibilitychange', this._handleVisibilityChange);
            window.removeEventListener('blur', this._handleBlur);
            window.removeEventListener('focus', this._handleFocus);
        }

        if (isExplicitLogout) {
            sessionStorage.removeItem('saber11_session_data');
        }

        this.sessionId = null;
        this.totalActiveSeconds = 0;
        this.lastXpMinute = 0;
        this.lastTickTime = null;
        this.isPaused = false;

        const clockEl = document.getElementById('session-clock-display');
        if (clockEl) clockEl.innerHTML = '';
    },

    _syncWithCloud(status) {
        if (!this.dbPath) return;

        this._updateActiveTime();

        const data = {
            sessionId: this.sessionId,
            timestamp: Date.now(),
            durationSeconds: this.totalActiveSeconds, // Only ACTIVE time
            status: status
        };

        // Fire and forget
        fetch(this.dbPath, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            keepalive: true
        }).catch(e => console.log('Session sync error:', e));
    },

    _updateUIClockElement() {
        const clockEl = document.getElementById('session-clock-display');
        if (!clockEl || !this.sessionId) return;

        // Calculate visual active seconds without saving to the real counter yet
        let displaySeconds = this.totalActiveSeconds;
        if (!this.isPaused && this.lastTickTime) {
            displaySeconds += Math.floor((Date.now() - this.lastTickTime) / 1000);
        }

        const hrs = Math.floor(displaySeconds / 3600);
        const mins = Math.floor((displaySeconds % 3600) / 60);
        const secs = displaySeconds % 60;

        let timeStr = '';
        if (hrs > 0) timeStr += hrs.toString().padStart(2, '0') + ':';
        timeStr += mins.toString().padStart(2, '0') + ':' + secs.toString().padStart(2, '0');

        // UI Indications for pause state
        if (this.isPaused) {
            clockEl.innerHTML = `<span class="material-icons-round" style="color: #ef4444; font-size: 14px; margin-right:4px;">pause_circle</span> <span style="opacity:0.6;">${timeStr}</span>`;
            clockEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            clockEl.style.background = 'rgba(239, 68, 68, 0.05)';
        } else {
            clockEl.innerHTML = `<span class="material-icons-round" style="color: #10b981; font-size: 14px; margin-right:4px;">play_circle</span> ${timeStr}`;
            clockEl.style.borderColor = 'rgba(16, 185, 129, 0.3)';
            clockEl.style.background = 'rgba(16, 185, 129, 0.05)';
        }
    },

    renderClock() {
        if (!this.sessionId) return;

        const loop = () => {
            if (this.sessionId && !this.isPaused) {
                this._updateUIClockElement();
            }
            if (this.sessionId) {
                requestAnimationFrame(loop);
            }
        };

        requestAnimationFrame(loop);
    }
};

// ============ GAMIFICATION MODULE ============
const GamificationModule = {
    currentXP: 0,
    currentLevelObj: null,
    nextLevelObj: null,
    streakDays: 0,
    lastStudyDate: null,
    earnedBadges: [], // Array of badge IDs already earned

    // --- BADGE DEFINITIONS ---
    allBadges: [
        { id: 'first_exam', icon: '🎓', name: 'Primer Paso', desc: 'Completa tu primer simulacro', color: '#6366f1' },
        { id: 'score_300', icon: '⭐', name: 'Por Encima del Promedio', desc: 'Supera 300 pts en puntaje ICFES', color: '#f59e0b' },
        { id: 'score_400', icon: '🏆', name: 'Excelencia', desc: 'Supera 400 pts en puntaje ICFES', color: '#10b981' },
        { id: 'perfect_exam', icon: '💎', name: 'Perfecto', desc: 'Completa un simulacro con 100% de aciertos', color: '#8b5cf6' },
        { id: 'streak_3', icon: '🔥', name: 'En Racha', desc: '3 días seguidos estudiando', color: '#ef4444' },
        { id: 'streak_7', icon: '🔥🔥', name: 'Imparable', desc: '7 días seguidos estudiando', color: '#dc2626' },
        { id: 'streak_30', icon: '⚡', name: 'Maestro de la Constancia', desc: '30 días seguidos estudiando', color: '#7c3aed' },
        { id: 'questions_100', icon: '📚', name: 'Lector Voraz', desc: 'Responde 100 preguntas en total', color: '#0891b2' },
        { id: 'questions_500', icon: '🧠', name: 'Cerebro Activo', desc: 'Responde 500 preguntas en total', color: '#0369a1' },
        { id: 'level_10', icon: '🚀', name: 'Despegando', desc: 'Alcanza el Nivel 10', color: '#16a34a' },
    ],

    _getTitleForLevel(level) {
        if (level < 5) return 'Novato';
        if (level < 10) return 'Estudiante Activo';
        if (level < 20) return 'Aspirante';
        if (level < 30) return 'Analista Crítico';
        if (level < 40) return 'Promesa Saber';
        if (level < 50) return 'Cerebro Destacado';
        if (level < 70) return 'Intelectual';
        if (level < 90) return 'Erudito';
        if (level < 100) return 'Genio Académico';
        return 'Maestro Nacional';
    },

    async init(user) {
        if (!user || !user.id) return;
        this.currentXP = 0;
        this.weeklyXP = 0;
        this.weekStart = null;
        this.streakDays = 0;
        this.lastStudyDate = null;
        this.earnedBadges = [];
        try {
            const res = await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${user.id}/gamification.json`);
            const data = await res.json();
            if (data) {
                if (data.xp) this.currentXP = parseInt(data.xp, 10) || 0;
                if (data.weeklyXP) this.weeklyXP = parseInt(data.weeklyXP, 10) || 0;
                if (data.weekStart) this.weekStart = parseInt(data.weekStart, 10) || null;
                if (data.streakDays) this.streakDays = parseInt(data.streakDays, 10) || 0;
                if (data.lastStudyDate) this.lastStudyDate = data.lastStudyDate;
                if (data.badges && Array.isArray(data.badges)) this.earnedBadges = data.badges;
            }
            // Check and update streak on login
            await this._checkAndUpdateStreak(user);
            this.calculateLevels();
            if (typeof updateUserUI === 'function') updateUserUI();
        } catch (e) { console.error('Error loading gamification data:', e); }
    },

    // --- STREAK LOGIC ---
    _todayStr() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    },

    async _checkAndUpdateStreak(user) {
        const today = this._todayStr();
        if (this.lastStudyDate === today) return; // Already counted today

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, '0')}-${String(yesterday.getDate()).padStart(2, '0')}`;

        if (this.lastStudyDate === yesterdayStr) {
            // Continued streak!
            this.streakDays += 1;
        } else if (this.lastStudyDate === null || this.lastStudyDate < yesterdayStr) {
            // Streak broken or first time
            this.streakDays = 1;
        }

        this.lastStudyDate = today;

        // Award XP for streak
        if (this.streakDays > 1) {
            const streakBonus = Math.min(this.streakDays * 5, 50); // max 50 XP/day bonus
            this.currentXP += streakBonus;
            setTimeout(() => NotificationModule.show(`🔥 Racha de ${this.streakDays} días! +${streakBonus} XP bonus`, 'success'), 1000);
        } else {
            setTimeout(() => NotificationModule.show('¡Bienvenido de vuelta! Racha iniciada 🔥', 'info'), 1000);
        }

        // Persist to Firebase
        if (user && user.id) {
            fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${user.id}/gamification.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    streakDays: this.streakDays,
                    lastStudyDate: this.lastStudyDate,
                    xp: this.currentXP
                })
            }).catch(e => console.error('Streak save error:', e));
        }
    },

    // --- BADGE LOGIC ---
    checkBadges(context = {}) {
        if (!AuthModule.currentUser) return;
        const newBadges = [];

        for (const badge of this.allBadges) {
            if (this.earnedBadges.includes(badge.id)) continue; // Already earned

            let earned = false;
            const level = this.currentLevelObj ? this.currentLevelObj.level : 1;

            if (badge.id === 'first_exam' && context.totalSimulacros >= 1) earned = true;
            if (badge.id === 'score_300' && context.maxScore >= 300) earned = true;
            if (badge.id === 'score_400' && context.maxScore >= 400) earned = true;
            if (badge.id === 'perfect_exam' && context.perfectExam === true) earned = true;
            if (badge.id === 'streak_3' && this.streakDays >= 3) earned = true;
            if (badge.id === 'streak_7' && this.streakDays >= 7) earned = true;
            if (badge.id === 'streak_30' && this.streakDays >= 30) earned = true;
            if (badge.id === 'questions_100' && context.totalQuestions >= 100) earned = true;
            if (badge.id === 'questions_500' && context.totalQuestions >= 500) earned = true;
            if (badge.id === 'level_10' && level >= 10) earned = true;

            if (earned) {
                this.earnedBadges.push(badge.id);
                newBadges.push(badge);
            }
        }

        if (newBadges.length > 0) {
            this._saveBadges();
            newBadges.forEach((b, i) => {
                setTimeout(() => {
                    NotificationModule.show(`${b.icon} ¡Nueva insignia desbloqueada! "${b.name}" — ${b.desc}`, 'success');
                }, i * 1500);
            });
            if (typeof updateUserUI === 'function') setTimeout(updateUserUI, 500);
        }
    },

    _saveBadges() {
        if (!AuthModule.currentUser) return;
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${AuthModule.currentUser.id}/gamification.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ badges: this.earnedBadges })
        }).catch(e => console.error('Badge save error:', e));
    },

    // Helper to render badges for the UI
    renderBadgesHTML() {
        if (!this.earnedBadges || this.earnedBadges.length === 0) return '';
        const badges = this.allBadges.filter(b => this.earnedBadges.includes(b.id));
        return badges.map(b => `<span title="${b.name}: ${b.desc}" style="display:inline-flex; align-items:center; justify-content:center; width:22px; height:22px; border-radius:50%; background:${b.color}20; border:1px solid ${b.color}50; cursor:default; font-size:0.75rem;">${b.icon}</span>`).join('');
    },

    calculateLevels() {
        this.currentLevelObj = this._calculateLevelFromXP(this.currentXP);
        this.nextLevelObj = {
            level: this.currentLevelObj.level + 1,
            title: this._getTitleForLevel(this.currentLevelObj.level + 1),
            xpReq: this.currentLevelObj.level * 200
        };
    },

    _calculateLevelFromXP(xp) {
        const xpAmount = parseInt(xp) || 0;
        const level = Math.floor(xpAmount / 200) + 1;

        return {
            level: level,
            title: this._getTitleForLevel(level),
            xpReq: (level - 1) * 200
        };
    },

    async addXP(points) {
        if (!AuthModule.currentUser) return;
        this.currentXP += points;

        // --- Weekly XP tracking (Monday-to-Monday window) ---
        const getWeekStart = () => {
            const now = new Date();
            const day = now.getDay(); // 0=Sun ... 1=Mon
            // Days since last Monday (Mon = day 1)
            const daysSinceMon = (day + 7 - 1) % 7;
            const monday = new Date(now);
            monday.setDate(now.getDate() - daysSinceMon);
            monday.setHours(0, 0, 0, 0);
            return monday.getTime();
        };
        const currentWeekStart = getWeekStart();

        // Reset weekly XP if we're in a new week window
        if (!this.weekStart || this.weekStart < currentWeekStart) {
            this.weeklyXP = 0;
            this.weekStart = currentWeekStart;
        }
        this.weeklyXP = (this.weeklyXP || 0) + points;

        // Check for level up
        const oldLevel = this.currentLevelObj ? this.currentLevelObj.level : 1;
        this.calculateLevels();
        const newLevel = this.currentLevelObj.level;

        try {
            await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${AuthModule.currentUser.id}/gamification.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    xp: this.currentXP,
                    weeklyXP: this.weeklyXP,
                    weekStart: this.weekStart,
                    lastUpdated: Date.now()
                })
            });
            if (typeof updateUserUI === 'function') updateUserUI();

            if (newLevel > oldLevel) {
                this.celebrateLevelUp(this.currentLevelObj);
                // Check level-based badges
                this.checkBadges({});
            } else if (points > 0) {
                NotificationModule.show(`+${points} XP obtenidos`, 'info');
            }
        } catch (e) { console.error('Error saving XP:', e); }
    },

    celebrateLevelUp(levelObj) {
        NotificationModule.show(`¡Felicidades! Has alcanzado el Nivel ${levelObj.level}: ${levelObj.title} 🎉`, 'success');

        // Simple confetti drop using generic DOM elements
        for (let i = 0; i < 30; i++) {
            const conf = document.createElement('div');
            conf.style.position = 'fixed';
            conf.style.width = '10px';
            conf.style.height = '10px';
            conf.style.backgroundColor = ['#ef4444', '#10b981', '#3b82f6', '#f59e0b', '#8b5cf6'][Math.floor(Math.random() * 5)];
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.top = '-10px';
            conf.style.zIndex = '999999';
            conf.style.borderRadius = '50%';
            conf.style.pointerEvents = 'none';
            conf.style.transition = 'top 3s ease-in, transform 3s ease-in';
            document.body.appendChild(conf);

            setTimeout(() => {
                conf.style.top = '100vh';
                conf.style.transform = `rotate(${Math.random() * 360}deg) translateX(${Math.random() * 100 - 50}px)`;
            }, 50);

            setTimeout(() => {
                if (conf.parentNode) conf.parentNode.removeChild(conf);
            }, 3000);
        }
    }
};

// ============ AUTH MODULE (Cloud Progress Sync) ============

const AuthModule = {
    currentUser: null,

    init() {
        const saved = localStorage.getItem('saber11_current_user');
        if (saved) {
            this.currentUser = JSON.parse(saved);

            // Resume session tracker on page load if logged in
            if (typeof SessionTracker !== 'undefined') {
                SessionTracker.start(this.currentUser);
            }
            if (typeof GamificationModule !== 'undefined') {
                GamificationModule.init(this.currentUser);
            }

            // Load messages and start polling for returning user
            this.loadMessages();
            if (this.messagePollInterval) clearInterval(this.messagePollInterval);
            this.messagePollInterval = setInterval(() => this.loadMessages(), 30000);
        } else {
            // New user or logged out - Show Auth Onboarding
            if (typeof VirtualTeacherModule !== 'undefined') {
                setTimeout(() => {
                    VirtualTeacherModule.initAuthOnboarding();
                }, 2000);
            }
        }

        // Always update UI to show Login or Profile
        if (typeof updateUserUI === 'function') {
            setTimeout(updateUserUI, 100);
        }
    },

    login(userObj) {
        this.currentUser = userObj;
        localStorage.setItem('saber11_current_user', JSON.stringify(this.currentUser));
        localStorage.setItem('saber11_student_name', this.currentUser.name);

        // Start session tracking
        SessionTracker.start(this.currentUser);
        GamificationModule.init(this.currentUser);

        // Update UI
        if (typeof updateUserUI === 'function') updateUserUI();

        // Load cloud progress and history
        this.loadCloudProgress();
        this.loadCloudHistory();
        this.loadMessages();

        // Start message polling
        if (this.messagePollInterval) clearInterval(this.messagePollInterval);
        this.messagePollInterval = setInterval(() => this.loadMessages(), 30000);

        // Profe Chiguiro Welcome
        if (typeof VirtualTeacherModule !== 'undefined') {
            const nameParts = this.currentUser.name ? this.currentUser.name.split(' ') : [];
            const firstName = nameParts.length > 0 ? nameParts[0] : 'Estudiante';

            VirtualTeacherModule.speak(`¡Hola de nuevo, ${firstName}! 👋 He preparado un pequeño tour para que no te pierdas nada de lo nuevo. ¿Me acompañas?`, 'happy', [
                { label: "Sí", callback: () => VirtualTeacherModule.startOnboarding() },
                { label: "Después", callback: () => VirtualTeacherModule.hide() }
            ]);
        }
    },

    async register(name, email, school, grade, sex, password, role = 'estudiante', area = '') {
        // Simple hash or encoding for ID
        const userId = btoa(email.toLowerCase().trim()).replace(/=/g, '');
        const newUser = { email, id: userId, name, school, grade, area, sex, password, role };

        try {
            // Check if user already exists
            const checkRes = await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${userId}/profile.json`);
            const existingProfile = await checkRes.json();

            if (existingProfile) {
                NotificationModule.show('Este correo ya está registrado.', 'error');
                return false;
            }

            // Save to Firebase User Database
            await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${userId}/profile.json`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newUser)
            });

            // Auto-login after registration
            this.login(newUser);
            return true;
        } catch (error) {
            console.error('Registration error:', error);
            NotificationModule.show('Error de conexión al registrar.', 'error');
            return false;
        }
    },

    logout() {
        SessionTracker.stop(true);
        this.currentUser = null;
        localStorage.removeItem('saber11_current_user');
        localStorage.removeItem('saber11_student_name');
        localStorage.removeItem('icfes_question_history');
        localStorage.removeItem('saber11_active_exam');
        localStorage.removeItem('saber11_active_pdf_exam');
        if (typeof ExamEngine !== 'undefined') ExamEngine.clearProgress();
        if (typeof updateUserUI === 'function') updateUserUI();
        location.reload();
    },

    saveCloudProgress(state) {
        if (!this.currentUser) return;

        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/en_progreso.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        }).catch(e => console.error('Cloud save error:', e));
    },

    loadCloudProgress() {
        if (!this.currentUser) return;
        NotificationModule.show('Buscando progreso en la nube...', 'info');
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/en_progreso.json`)
            .then(res => res.json())
            .then(state => {
                if (state && typeof ExamEngine !== 'undefined') {
                    if (confirm('Tienes un simulacro en progreso en la nube. ¿Deseas reanudarlo?')) {
                        ExamEngine.resume(state);
                        Router.go('exam');
                        NotificationModule.show('Progreso restaurado con éxito.', 'success');
                    }
                }
            })
            .catch(e => {
                console.error('Cloud load error:', e);
            });
    },

    saveCloudHistory(historyObj) {
        if (!this.currentUser) return;
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/history.json`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(historyObj)
        }).catch(e => console.error('Cloud history save error:', e));
    },

    loadCloudHistory() {
        if (!this.currentUser) return;
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/history.json`)
            .then(res => res.json())
            .then(history => {
                if (history) {
                    localStorage.setItem('icfes_question_history', JSON.stringify(history));
                    console.log('✅ Historial de preguntas sincronizado desde Firebase:', history);
                }
            })
            .catch(e => console.error('Cloud history load error:', e));
    },

    loadMessages() {
        if (!this.currentUser) return;

        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/messages.json`)
            .then(res => res.json())
            .then(messagesObj => {
                if (!messagesObj) {
                    this.currentUserMessages = [];
                    this.updateBellBadge(0);
                    return;
                }

                // Parse messages
                const msgEntries = Object.entries(messagesObj).map(([id, msg]) => ({ id, ...msg })).sort((a, b) => new Date(b.date) - new Date(a.date));
                this.currentUserMessages = msgEntries;
                const unreadCount = msgEntries.filter(m => !m.read).length;

                this.updateBellBadge(unreadCount);

                // Si el dropdown está abierto, refrescar su contenido silenciosamente
                const dropdown = document.getElementById('messages-dropdown');
                if (dropdown && window.getComputedStyle(dropdown).display !== 'none') {
                    this.renderMessagesDropdown();
                }
            })
            .catch(e => console.error('Error fetching messages:', e));
    },

    updateBellBadge(unreadCount) {
        const badgeContainer = document.getElementById('messages-badge-container');
        if (badgeContainer) {
            badgeContainer.innerHTML = unreadCount > 0 ? `
                <div style="position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 0.6rem; font-weight: 800; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1.5px solid white; box-shadow: 0 2px 4px rgba(239,68,68,0.3); z-index: 10;">
                    ${unreadCount}
                </div>
            ` : '';

            const btn = badgeContainer.parentElement;
            if (btn) {
                const iconSpan = btn.querySelector('.material-icons-round');
                if (iconSpan) {
                    iconSpan.textContent = unreadCount > 0 ? 'mark_email_unread' : 'mail';
                }
            }
        } else {
            // Fallback (solo ocurre una vez al inicio)
            const container = document.getElementById('student-messages-container');
            if (container) container.innerHTML = this.getBellIconWithCount(unreadCount);
        }
    },

    getBellIconWithCount(unreadCount) {
        return `
            <div id="messages-button-wrapper" style="position: relative; display: flex; align-items: center;">
                <button id="messages-toggle-btn" class="btn glass-hover" onclick="AuthModule.toggleMessagesDropdown(event)" title="Buzón de Mensajes" style="cursor: pointer; padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(99,102,241, 0.15); background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; color: var(--color-primary); box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s; gap: 4px; font-weight: 700; font-size: 0.75rem; height: 32px;">
                    <span class="material-icons-round" style="font-size: 1rem;">${unreadCount > 0 ? 'mark_email_unread' : 'mail'}</span>
                    <span>Buzón</span>
                </button>
                <div id="messages-badge-container">
                    ${unreadCount > 0 ? `
                        <div style="position: absolute; top: -4px; right: -4px; background: #ef4444; color: white; font-size: 0.6rem; font-weight: 800; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 1.5px solid white; box-shadow: 0 2px 4px rgba(239,68,68,0.3); z-index: 10;">
                            ${unreadCount}
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    },

    toggleMessagesDropdown(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        let overlay = document.getElementById('messages-dropdown-overlay');
        let dropdown = document.getElementById('messages-dropdown');

        // Dynamically inject into body to escape ANY overflow/z-index traps
        if (!dropdown || !overlay) {
            const container = document.createElement('div');
            container.innerHTML = `
                <!-- FIXED OVERLAY -->
                <div id="messages-dropdown-overlay" onclick="AuthModule.closeMessagesDropdown(event)" style="display: none; position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: 999998; cursor: default;"></div>
                
                <!-- CHAT PANEL -->
                <div id="messages-dropdown" style="display: none; position: fixed; right: 16px; width: 340px; height: 480px; background: var(--color-surface, #ffffff); border-radius: 16px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); border: 1px solid var(--color-border, #e5e7eb); z-index: 999999; flex-direction: column; cursor: default; overflow: hidden;" onclick="event.stopPropagation()">
                    <!-- Header -->
                    <div style="padding: 12px 16px; border-bottom: 1px solid var(--color-border, #e5e7eb); font-weight: 700; color: var(--color-text, #1e3a8a); background: rgba(99,102,241,0.05); display:flex; justify-content:space-between; align-items:center; font-size: 0.9rem; flex-shrink: 0;">
                        <span style="display:flex; align-items:center; gap:6px;"><span class="material-icons-round" style="font-size:1rem;">chat</span> Mensajes</span>
                        <button onclick="AuthModule.closeMessagesDropdown(event)" style="background:none; border:none; cursor:pointer; color:var(--color-text-muted); padding:2px; border-radius:50%; display:flex; align-items:center;" title="Cerrar"><span class="material-icons-round" style="font-size:1.1rem;">close</span></button>
                    </div>
                    <!-- Chat scroll area -->
                    <div id="messages-dropdown-list" style="flex:1; overflow-y:auto; padding: 12px; display:flex; flex-direction:column; gap:8px;">
                        <!-- Mensajes se inyectan aquí -->
                    </div>
                    <!-- Single input bar -->
                    <div style="padding: 10px 12px; border-top: 1px solid var(--color-border, #e5e7eb); background: var(--color-surface, #ffffff); display:flex; gap: 8px; align-items:center; flex-shrink: 0;" onclick="event.stopPropagation()">
                        <input type="text" id="chat-reply-input" placeholder="Escribe un mensaje..." style="flex:1; border-radius: 20px; border: 1px solid var(--color-border,#cbd5e1); padding: 8px 14px; font-size: 0.85rem; background: rgba(0,0,0,0.03); color: var(--color-text,#1e293b); outline: none;" onkeydown="if(event.key==='Enter') AuthModule.sendChatMessage()">
                        <button onclick="AuthModule.sendChatMessage()" style="width:34px; height:34px; border-radius:50%; border:none; background:var(--color-primary,#6366f1); color:#fff; cursor:pointer; display:flex; align-items:center; justify-content:center; flex-shrink:0;" title="Enviar"><span class="material-icons-round" style="font-size:1.1rem;">send</span></button>
                    </div>
                </div>
            `;
            document.body.appendChild(container);

            overlay = document.getElementById('messages-dropdown-overlay');
            dropdown = document.getElementById('messages-dropdown');
        }

        const isHidden = window.getComputedStyle(dropdown).display === 'none';

        if (isHidden) {
            // Position it dynamically right under the button regardless of scroll
            const btn = document.getElementById('messages-toggle-btn');
            if (btn) {
                const rect = btn.getBoundingClientRect();
                dropdown.style.top = (rect.bottom + 8) + 'px';
            } else {
                dropdown.style.top = '60px'; // fallback
            }

            dropdown.style.display = 'flex';
            overlay.style.display = 'block';
            this.renderMessagesDropdown();
        } else {
            this.closeMessagesDropdown();
        }
    },

    closeMessagesDropdown(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        const dropdown = document.getElementById('messages-dropdown');
        const overlay = document.getElementById('messages-dropdown-overlay');
        if (dropdown) dropdown.style.display = 'none';
        if (overlay) overlay.style.display = 'none';
    },

    renderMessagesDropdown() {
        const list = document.getElementById('messages-dropdown-list');
        if (!list) return;

        if (!this.currentUserMessages || this.currentUserMessages.length === 0) {
            list.innerHTML = `<div style="padding: 40px 12px; text-align: center; color: var(--color-text-muted); font-size: 0.85rem; display:flex; flex-direction:column; align-items:center; gap:8px;">
                <span class="material-icons-round" style="font-size:2.5rem; opacity:0.3;">chat_bubble_outline</span>
                <span>No tienes mensajes aún.</span>
            </div>`;
            return;
        }

        // Sort messages oldest → newest
        const sorted = [...this.currentUserMessages].sort((a, b) => new Date(a.date) - new Date(b.date));
        const myId = this.currentUser.id;

        list.innerHTML = sorted.map(msg => {
            const isMine = msg.senderId === myId;
            const dateStr = new Date(msg.date).toLocaleDateString('es', { day: '2-digit', month: '2-digit', year: '2-digit' }) + ' ' + new Date(msg.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const senderLabel = isMine ? 'Tú' : msg.from;
            return `
                <div style="display:flex; flex-direction:column; align-items:${isMine ? 'flex-end' : 'flex-start'}; margin-bottom:2px;" onclick="AuthModule.markMessageRead('${msg.id}')">
                    <div style="font-size:0.65rem; color:var(--color-text-muted); margin-bottom:2px; padding: 0 4px;">${senderLabel} · ${dateStr}</div>
                    <div style="max-width:80%; padding:8px 12px; border-radius:${isMine ? '14px 14px 4px 14px' : '14px 14px 14px 4px'}; background:${isMine ? 'linear-gradient(135deg,#6366f1,#8b5cf6)' : 'rgba(0,0,0,0.05)'}; color:${isMine ? '#fff' : 'var(--color-text)'}; font-size:0.875rem; line-height:1.4; word-break:break-word; box-shadow: 0 1px 2px rgba(0,0,0,0.1);">
                        ${msg.text}
                    </div>
                    ${!msg.read && !isMine ? `<div style="font-size:0.6rem; color:var(--color-primary); margin-top:2px; padding: 0 4px;">● No leído</div>` : ''}
                </div>
            `;
        }).join('');

        // Scroll to latest
        setTimeout(() => { list.scrollTop = list.scrollHeight; }, 50);
    },

    sendChatMessage() {
        const input = document.getElementById('chat-reply-input');
        if (!input || !input.value.trim()) return;

        const text = input.value.trim();

        // Determine recipient: find the first message sender that isn't me
        const myId = this.currentUser.id;
        const otherMsg = (this.currentUserMessages || []).find(m => m.senderId && m.senderId !== myId);
        const recipientId = otherMsg ? otherMsg.senderId : 'master';

        const sendBtn = input.nextElementSibling;
        input.disabled = true;
        if (sendBtn) { sendBtn.disabled = true; sendBtn.style.opacity = '0.5'; }

        const senderName = this.currentUser.name + (this.currentUser.email ? ' (' + this.currentUser.email + ')' : '');

        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${recipientId}/messages.json`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                text,
                from: senderName,
                senderId: myId,
                date: new Date().toISOString(),
                read: false
            })
        }).then(res => {
            if (!res.ok) throw new Error();
            // Also save a copy in own messages so the chat shows it immediately
            return fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${myId}/messages.json`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text,
                    from: senderName,
                    senderId: myId,
                    date: new Date().toISOString(),
                    read: true  // sent by me, already read
                })
            });
        }).then(() => {
            input.value = '';
            input.disabled = false;
            if (sendBtn) { sendBtn.disabled = false; sendBtn.style.opacity = '1'; }
            // Reload messages to show the sent bubble
            this.loadMessages();
        }).catch(e => {
            console.error('Error sending chat message:', e);
            input.disabled = false;
            if (sendBtn) { sendBtn.disabled = false; sendBtn.style.opacity = '1'; }
            if (typeof NotificationModule !== 'undefined') NotificationModule.show('Error al enviar.', 'error');
        });
    },

    markMessageRead(msgId) {
        const msg = this.currentUserMessages.find(m => m.id === msgId);
        if (!msg || msg.read) return;

        // Firebase Update
        fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${this.currentUser.id}/messages/${msgId}.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ read: true })
        }).then(() => {
            msg.read = true;
            this.renderMessagesDropdown();
            // Refresh bell icon using the new isolated badge updater
            const unreadCount = this.currentUserMessages.filter(m => !m.read).length;
            this.updateBellBadge(unreadCount);
        }).catch(e => console.error('Error marking read:', e));
    }
};

const AuthUI = {
    toggleModal() {
        if (AuthModule.currentUser) {
            if (confirm(`Estás ingresado como ${AuthModule.currentUser.email}. ¿Deseas cerrar sesión?`)) {
                AuthModule.logout();
            }
        } else {
            const modal = document.getElementById('login-modal');
            if (modal) {
                const isHidden = modal.classList.contains('hidden');
                modal.classList.toggle('hidden');
                if (isHidden) {
                    modal.style.display = 'flex';
                    if (typeof this.switchTab === 'function') {
                        this.switchTab('login');
                    }
                } else {
                    modal.style.display = 'none';
                }
            }
        }
    },
    async handleLogin() {
        let email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password') ? document.getElementById('login-password').value : '';

        // Master Login Detection
        if (email.trim() === '11168004242') {
            AuthModule.login({ email: 'master@saberpro.com', id: 'master', name: 'Master' });
            const modal = document.getElementById('login-modal');
            if (modal) modal.classList.add('hidden');
            NotificationModule.show('Modo Maestro Activado.', 'success');
            return;
        }

        if (!email || !email.includes('@')) {
            NotificationModule.show('Por favor ingresa un correo electrónico válido.', 'warning');
            return;
        }

        if (!password) {
            NotificationModule.show('Por favor ingresa tu contraseña.', 'warning');
            return;
        }

        NotificationModule.show('Validando credenciales...', 'info');
        const userId = btoa(email.toLowerCase().trim()).replace(/=/g, '');

        try {
            // Validate credentials against Firebase
            const res = await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${userId}/profile.json`);
            const matchedUser = await res.json();

            if (!matchedUser || matchedUser.password !== password) {
                NotificationModule.show('Correo o contraseña incorrectos. Si no tienes cuenta, Regístrate.', 'error');
                return;
            }

            AuthModule.login(matchedUser);
            const modal = document.getElementById('login-modal');
            if (modal) modal.classList.add('hidden');
            NotificationModule.show(`¡Ponte a prueba, ${matchedUser.name}!`, 'success');
        } catch (error) {
            console.error('Login error:', error);
            NotificationModule.show('Error al conectar con el servidor.', 'error');
        }
    },
    switchTab(tabName) {
        const loginView = document.getElementById('auth-view-login');
        const registerView = document.getElementById('auth-view-register');
        const loginBtn = document.getElementById('tab-btn-login');
        const registerBtn = document.getElementById('tab-btn-register');
        const loginInd = document.getElementById('tab-indicator-login');
        const regInd = document.getElementById('tab-indicator-register');

        if (!loginView || !registerView || !loginBtn || !registerBtn) return;

        if (tabName === 'login') {
            loginView.classList.remove('hidden');
            registerView.classList.add('hidden');
            loginBtn.style.color = 'var(--color-primary)';
            loginBtn.style.fontWeight = '700';
            registerBtn.style.color = 'var(--color-text-muted)';
            registerBtn.style.fontWeight = '600';
            if (loginInd) loginInd.style.opacity = '1';
            if (regInd) regInd.style.opacity = '0';
        } else {
            loginView.classList.add('hidden');
            registerView.classList.remove('hidden');
            registerBtn.style.color = 'var(--color-primary)';
            registerBtn.style.fontWeight = '700';
            loginBtn.style.color = 'var(--color-text-muted)';
            loginBtn.style.fontWeight = '600';
            if (regInd) regInd.style.opacity = '1';
            if (loginInd) loginInd.style.opacity = '0';
        }
    },
    async handleRegister() {
        const nameInput = document.getElementById('reg-name');
        const emailInput = document.getElementById('reg-email');
        const passwordInput = document.getElementById('reg-password');
        const schoolInput = document.getElementById('reg-school');
        const gradeInput = document.getElementById('reg-grade');
        const sexInput = document.getElementById('reg-sex');

        if (!nameInput || !emailInput || !passwordInput || !schoolInput || !gradeInput || !sexInput) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const school = schoolInput.value.trim();
        const grade = gradeInput ? gradeInput.value : '';
        const sex = sexInput.value;
        const roleSelect = document.getElementById('reg-role');
        const role = roleSelect ? roleSelect.value : 'estudiante';
        const teacherCodeInput = document.getElementById('reg-teacher-code');
        const teacherCode = teacherCodeInput ? teacherCodeInput.value.trim() : '';
        const areaSelect = document.getElementById('reg-area');
        const area = areaSelect ? areaSelect.value : '';

        if (!name || !email || !password || !school || !sex) {
            NotificationModule.show('Por favor completa todos los campos para registrarte.', 'warning');
            return;
        }

        if (role === 'estudiante' && !grade) {
            NotificationModule.show('Por favor selecciona tu grado.', 'warning');
            return;
        }

        if (role === 'docente') {
            if (!area) {
                NotificationModule.show('Por favor selecciona el área a tu cargo.', 'warning');
                return;
            }
            if (teacherCode !== '9090') {
                NotificationModule.show('Código de acceso docente incorrecto. Solicita verificación.', 'error');
                return;
            }
        }

        if (!email.includes('@')) {
            NotificationModule.show('Por favor ingresa un correo electrónico válido.', 'warning');
            return;
        }

        if (password.length < 6) {
            NotificationModule.show('La contraseña debe tener al menos 6 caracteres.', 'warning');
            return;
        }

        NotificationModule.show('Creando perfil en la nube...', 'info');

        const success = await AuthModule.register(name, email, school, grade, sex, password, role, area);

        if (success) {
            // Clear forms
            nameInput.value = '';
            emailInput.value = '';
            passwordInput.value = '';
            schoolInput.value = '';
            if (gradeInput) gradeInput.selectedIndex = 0;
            if (areaSelect) areaSelect.selectedIndex = 0;
            sexInput.selectedIndex = 0;
            if (roleSelect) roleSelect.selectedIndex = 0;
            if (teacherCodeInput) {
                teacherCodeInput.value = '';
                document.getElementById('teacher-code-container').style.display = 'none';
            }
            const gradeCont = document.getElementById('grade-container');
            if (gradeCont) gradeCont.style.display = 'block';
            const areaCont = document.getElementById('area-container');
            if (areaCont) areaCont.style.display = 'none';

            const modal = document.getElementById('login-modal');
            if (modal) modal.classList.add('hidden');
            NotificationModule.show('¡Registro exitoso! Bienvenido a Saber PRO.', 'success');
        }
    }
};

window.updateUserUI = function () {
    const container = document.getElementById('user-auth-container');
    if (!container) return;

    if (AuthModule.currentUser) {
        // Render Profile Header (Plan Platino)
        const nameParts = AuthModule.currentUser.name.split(' ');
        const firstName = nameParts.length > 0 ? nameParts[0] : 'Estudiante';
        const formattedName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

        let levelHtml = '';
        if (typeof GamificationModule !== 'undefined' && GamificationModule.currentLevelObj) {
            const level = GamificationModule.currentLevelObj;
            const nextLevel = GamificationModule.nextLevelObj;
            let progress = 100;
            if (nextLevel && level.xpReq !== undefined && nextLevel.xpReq !== undefined) {
                const range = nextLevel.xpReq - level.xpReq;
                const earned = GamificationModule.currentXP - level.xpReq;
                progress = Math.min(100, Math.max(0, (earned / range) * 100));
            }

            // Streak display
            const streak = GamificationModule.streakDays || 0;
            const streakHtml = streak > 0 ? `<div title="Racha de ${streak} día(s) seguidos" style="display:flex; align-items:center; gap:2px; font-size:0.6rem; font-weight:700; color:#ef4444; margin-bottom:2px;">🔥 ${streak}d</div>` : '';

            // Badges display
            const badgesHtml = GamificationModule.renderBadgesHTML();
            const badgesRow = badgesHtml ? `<div style="display:flex; flex-wrap:wrap; gap:2px; margin-top:2px;">${badgesHtml}</div>` : '';

            levelHtml = `
                <div id="gamification-status" style="background: rgba(var(--color-primary-rgb), 0.05); padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(124, 58, 237, 0.1); min-width: 120px; display: flex; flex-direction: column; justify-content: center;">
                    <div style="font-size: 0.6rem; font-weight: 700; color: var(--color-primary); display: flex; align-items: center; gap: 4px; line-height: 1; margin-bottom: 2px;">
                        <span class="material-icons-round" style="font-size: 10px; color: #f59e0b;">stars</span> 
                        Lvl ${level.level} ${streak > 0 ? `<span title="${streak} días de racha" style="color:#ef4444; font-size:0.65rem;">🔥${streak}</span>` : ''}
                    </div>
                    <div style="width: 100%; height: 3px; background: rgba(0,0,0,0.06); border-radius: 2px; overflow: hidden;">
                        <div style="width: ${progress}%; height: 100%; background: linear-gradient(90deg, var(--color-primary) 0%, #8b5cf6 100%);"></div>
                    </div>
                    ${badgesRow}
                </div>
            `;
        }

        const unreadCount = AuthModule.messages ? AuthModule.messages.filter(m => !m.read).length : 0;

        container.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px; width: 100%; height: 40px;">
                <!-- Gamification -->
                ${levelHtml}

                <!-- Clock -->
                <div id="session-clock-display" style="display: flex; align-items: center; gap: 4px; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.1); padding: 4px 8px; border-radius: 20px; font-family: monospace; font-size: 0.8rem; font-weight: 700; color: #10b981;">
                    <span class="material-icons-round" style="font-size: 14px;">play_circle</span>
                    <span id="session-time">00:00</span>
                </div>
                
                <!-- Profile -->
                <div id="user-profile-banner" style="display: flex; align-items: center; gap: 6px; background: rgba(255, 255, 255, 0.5); padding: 2px 8px 2px 2px; border-radius: 20px; border: 1px solid rgba(124, 58, 237, 0.1);">
                    <div style="width: 26px; height: 26px; border-radius: 50%; overflow: hidden; border: 1.5px solid white;">
                        <img src="img/student_hero.png" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="font-weight: 700; color: #1e3a8a; font-size: 0.75rem; white-space: nowrap;">Hola, ${formattedName}</div>
                </div>

                <!-- Messages -->
                <div id="student-messages-container" style="position: relative; display: flex; align-items: center;">
                    ${AuthModule.getBellIconWithCount(unreadCount)}
                </div>

                <!-- Logout -->
                <button onclick="AuthModule.logout()" class="btn glass-hover" title="Cerrar Sesión" style="width: 32px; height: 32px; border-radius: 50%; border: 1px solid rgba(239, 68, 68, 0.1); background: rgba(255, 255, 255, 0.5); display: flex; align-items: center; justify-content: center; color: #ef4444; padding: 0;">
                    <span class="material-icons-round" style="font-size: 1rem;">logout</span>
                </button>
            </div>
        `;

        // Load messages if student
        setTimeout(() => AuthModule.loadMessages(), 100);
    } else {
        // Render Login Button
        container.innerHTML = `
            <button class="btn glass-hover"
                style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 8px 16px; font-weight: 600; display: flex; align-items: center; gap: 6px; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); transition: all 0.3s; color: var(--color-text-muted);"
                onclick="AuthUI.toggleModal()">
                <span class="material-icons-round"
                    style="font-size: 1.2rem; color: var(--color-primary);">person_outline</span>
                <span>Ingresar</span>
            </button>
        `;
    }
};

// ============ GLOBAL RESULTS MODULE ============
const GlobalResultsModule = {
    init() {
        this.renderGlobalResults();
    },

    async renderGlobalResults() {
        const container = document.getElementById('global-results-content');
        if (!container) return;

        // Render Loading State
        container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--color-text-muted);"><div style="font-size: 2rem; margin-bottom: 12px; animation: pulse 1.5s infinite;">🔄</div>Cargando rankings globales...</div>`;

        // Fetch All Three Data Sets in Parallel
        const [scoreHtml, levelHtml, weeklyHtml] = await Promise.all([
            this._fetchScoreRankingHtml(),
            this._fetchLevelRankingHtml(),
            this._fetchWeeklyComplianceHtml()
        ]);

        // Render Three Sections Horizontally (side by side, top-aligned)
        container.innerHTML = `
            <div class="global-ranking-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; align-items: start;">
                
                <!-- Score Ranking Column -->
                <div>
                    <h2 style="font-size: 1.3rem; color: var(--color-primary-dark); margin-bottom: 16px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        🏆 Mejores Puntajes ICFES
                    </h2>
                    ${scoreHtml}
                </div>

                <!-- Level Ranking Column -->
                <div>
                    <h2 style="font-size: 1.3rem; color: #b45309; margin-bottom: 16px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        ⭐ Niveles Más Altos (XP)
                    </h2>
                    ${levelHtml}
                </div>

                <!-- Weekly Compliance Ranking Column -->
                <div>
                    <h2 style="font-size: 1.3rem; color: #10b981; margin-bottom: 16px; margin-top: 0; display: flex; align-items: center; gap: 8px;">
                        📅 Cumplimiento Semanal
                    </h2>
                    ${weeklyHtml}
                </div>

            </div>
        `;
    },

    async _fetchWeeklyComplianceHtml() {
        // Helper: get start of current Monday-to-Monday week window
        const getWeekStart = () => {
            const now = new Date();
            const day = now.getDay();
            const daysSinceMon = (day + 7 - 1) % 7;
            const monday = new Date(now);
            monday.setDate(now.getDate() - daysSinceMon);
            monday.setHours(0, 0, 0, 0);
            return monday.getTime();
        };
        const currentWeekStart = getWeekStart();
        const weekEndDate = new Date(currentWeekStart + 7 * 24 * 60 * 60 * 1000);
        const weekLabel = `Semana ${new Date(currentWeekStart).toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })} – ${weekEndDate.toLocaleDateString('es-CO', { day: '2-digit', month: 'short' })}`;

        let users = [];
        try {
            const response = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    users = Object.values(data).filter(u =>
                        u.profile && u.profile.role === 'estudiante' &&
                        u.gamification && (
                            // Show users with explicit weeklyXP from current week
                            (u.gamification.weeklyXP > 0 && (!u.gamification.weekStart || u.gamification.weekStart >= currentWeekStart))
                        )
                    ).map(u => {
                        // For users without weeklyXP yet, use xp % 700 as a proxy (first launch week)
                        if (!u.gamification.weeklyXP) {
                            u = JSON.parse(JSON.stringify(u));
                            u.gamification.weeklyXP = u.gamification.xp % 700 || u.gamification.xp;
                        }
                        return u;
                    });
                }
            }
        } catch (e) {
            console.error('Error fetching weekly compliance:', e);
        }

        if (users.length === 0) {
            return `<div style="text-align: center; padding: 40px; color: var(--color-text-muted); background: rgba(16,185,129,0.02); border-radius: 16px; border: 1px dashed rgba(16,185,129,0.3);"><div style="font-size: 2.5rem; margin-bottom: 12px;">📅</div><div style="font-size: 1rem; font-weight: 600; margin-bottom: 6px;">Sin datos esta semana</div><p style="font-size: 0.85rem;">${weekLabel}</p><p style="font-size: 0.8rem;">La meta semanal es de 700 XP. ¡Sé el primero en cumplirla!</p></div>`;
        }

        // Sort by weeklyXP descending
        users.sort((a, b) => (b.gamification.weeklyXP || 0) - (a.gamification.weeklyXP || 0));

        return `
            <div class="glass" style="overflow-x: auto; padding: 0; border: 1px solid rgba(16,185,129,0.2); border-radius: 16px;">
                <div style="padding: 10px 16px; font-size: 0.75rem; color: #10b981; font-weight: 600; border-bottom: 1px solid rgba(16,185,129,0.1); display: flex; align-items: center; justify-content: space-between;">
                    <span>📅 ${weekLabel}</span>
                    <span style="background: rgba(16,185,129,0.1); padding: 2px 8px; border-radius: 20px;">Meta: 700 XP</span>
                </div>
                <table style="width: 100%; border-collapse: collapse; min-width: 320px;">
                    <thead style="background: rgba(16,185,129,0.05); border-bottom: 1px solid rgba(16,185,129,0.15);">
                        <tr>
                            <th style="padding: 10px 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #059669; text-transform: uppercase;">#</th>
                            <th style="padding: 10px 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #059669; text-transform: uppercase;">Estudiante</th>
                            <th style="padding: 10px 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #059669; text-transform: uppercase;">Progreso</th>
                            <th style="padding: 10px 12px; text-align: right; font-size: 0.70rem; font-weight: 700; color: #059669; text-transform: uppercase;">XP Sem.</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.slice(0, 50).map((userObj, index) => {
            const wxp = userObj.gamification.weeklyXP || 0;
            const pct = Math.min(100, Math.round((wxp / 700) * 100));
            const met = wxp >= 700;
            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = `#${index + 1}`;
            return `
                <tr style="border-bottom: 1px solid rgba(16,185,129,0.08);" class="result-row">
                    <td style="padding: 10px 12px; font-weight: 800; font-size: 1rem; color: var(--color-text-muted);">${medal}</td>
                    <td style="padding: 10px 12px;">
                        <div style="font-weight: 700; font-size: 0.9rem; color: var(--color-text);">${userObj.profile?.name || 'Anónimo'}</div>
                        <div style="font-size: 0.72rem; color: var(--color-text-muted);">${userObj.profile?.grade || ''}</div>
                    </td>
                    <td style="padding: 10px 12px; min-width: 100px;">
                        <div style="display: flex; align-items: center; gap: 6px;">
                            <div style="flex: 1; height: 6px; background: rgba(16,185,129,0.15); border-radius: 3px; overflow: hidden;">
                                <div style="width: ${pct}%; height: 100%; background: ${met ? '#10b981' : 'linear-gradient(90deg,#34d399,#059669)'}; border-radius: 3px;"></div>
                            </div>
                            ${met ? '<span style="font-size:14px;">✅</span>' : `<span style="font-size: 0.7rem; color: #059669; font-weight:600;">${pct}%</span>`}
                        </div>
                    </td>
                    <td style="padding: 10px 12px; text-align: right;">
                        <div style="font-size: 0.95rem; font-weight: 800; color: ${met ? '#10b981' : 'var(--color-primary)'}; font-family: monospace;">${wxp}</div>
                    </td>
                </tr>
            `;
        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    async _fetchScoreRankingHtml() {
        let serverResults = [];

        try {
            const url = 'https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json';
            const fetchUrl = url + '?t=' + Date.now();
            const response = await fetch(fetchUrl, { signal: AbortSignal.timeout(6000), cache: 'no-store' });
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    serverResults = Object.values(data);
                }
            }
        } catch (e) {
            console.log('No se pudo conectar a Firebase para resultados globales:', e.message);
        }

        // Only use server results for global ranking (no localStorage to prevent fake entries)
        // Filter out results under 10 minutes (600 seconds)
        const filtered = serverResults.filter(r => r.timeSpent && r.timeSpent >= 600);

        filtered.sort((a, b) => {
            const scoreA = a.icfesScore || Math.round((a.correct / a.total) * 500) || 0;
            const scoreB = b.icfesScore || Math.round((b.correct / b.total) * 500) || 0;
            if (scoreB !== scoreA) {
                return scoreB - scoreA; // Descending by score
            }
            // If scores are equal, newest first
            return new Date(b.date || b.timestamp) - new Date(a.date || a.timestamp);
        });

        if (filtered.length === 0) {
            return `
                <div style="text-align: center; padding: 40px; color: var(--color-text-muted); background: var(--color-surface); border-radius: 16px; border: 1px dashed var(--color-border);">
                    <div style="font-size: 2.5rem; margin-bottom: 12px;">📊</div>
                    <div style="font-size: 1rem; font-weight: 600; margin-bottom: 4px;">Sin resultados</div>
                    <p style="font-size: 0.85rem;">Sé el primero en completar un simulacro.</p>
                </div>
            `;
        }

        return `
            <div class="glass" style="overflow-x: auto; padding: 0; border: 1px solid var(--color-border); border-radius: 16px;">
                <table style="width: 100%; border-collapse: collapse; min-width: 400px;">
                    <thead style="background: var(--color-surface-2); border-bottom: 1px solid var(--color-border);">
                        <tr>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Puesto</th>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Estudiante</th>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Prueba</th>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase;">Puntaje</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filtered.slice(0, 50).map((item, index) => { // Limit to top 50 to avoid massive lists
            const scoreColor = item.score >= 80 ? 'var(--color-success)' : (item.score >= 60 ? 'var(--color-accent)' : 'var(--color-danger)');

            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = `#${index + 1}`;

            const scoreValue = item.icfesScore || Math.round((item.correct / item.total) * 500);

            return `
                                <tr style="border-bottom: 1px solid var(--color-border);" class="result-row">
                                    <td style="padding: 12px; font-weight: 800; font-size: 1.1rem;">${medal}</td>
                                    <td style="padding: 12px; font-weight: 600; font-size: 0.95rem;">${item.studentName || 'Anónimo'}</td>
                                    <td style="padding: 12px; font-size: 0.8rem; color: var(--color-text-muted);">${item.title || 'Simulacro'}</td>
                                    <td style="padding: 12px;">
                                        <div style="font-size: 1rem; font-weight: 800; color: ${scoreColor};">${scoreValue} / 500</div>
                                    </td>
                                </tr>
                            `;
        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },

    async _fetchLevelRankingHtml() {
        let users = [];
        try {
            const response = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    // Extract users with gamification data
                    users = Object.values(data).filter(u => u.profile && u.profile.role === 'estudiante' && u.gamification && u.gamification.xp > 0);
                }
            }
        } catch (e) {
            console.error('Error fetching users for level ranking:', e);
        }

        if (users.length === 0) {
            return `<div style="text-align: center; padding: 40px; color: var(--color-text-muted); background: rgba(245,158,11,0.02); border-radius: 16px; border: 1px dashed rgba(245,158,11,0.3);"><div style="font-size: 2.5rem; margin-bottom: 12px;">⭐</div><div style="font-size: 1rem; font-weight: 600;">Sin experiencia aún.</div><p style="font-size: 0.85rem;">Resuelve preguntas para subir de nivel.</p></div>`;
        }

        // Sort by XP descending
        users.sort((a, b) => (b.gamification.xp || 0) - (a.gamification.xp || 0));

        // Wait to make sure GamificationModule is ready to calculate levels
        const G = window.GamificationModule;

        return `
            <div class="glass" style="overflow-x: auto; padding: 0; border: 1px solid #f59e0b33; border-radius: 16px;">
                <table style="width: 100%; border-collapse: collapse; min-width: 400px;">
                    <thead style="background: rgba(245,158,11,0.05); border-bottom: 1px solid rgba(245,158,11,0.2);">
                        <tr>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #b45309; text-transform: uppercase;">Puesto</th>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #b45309; text-transform: uppercase;">Estudiante</th>
                            <th style="padding: 12px; text-align: left; font-size: 0.70rem; font-weight: 700; color: #b45309; text-transform: uppercase;">Nivel</th>
                            <th style="padding: 12px; text-align: right; font-size: 0.70rem; font-weight: 700; color: #b45309; text-transform: uppercase;">XP</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${users.slice(0, 50).map((userObj, index) => {
            // Inline level calculation: 200 XP per level (no dependency on module availability)
            const xp = userObj.gamification?.xp || 0;
            const level = Math.floor(xp / 200) + 1;
            const _titles = (lvl) => {
                if (lvl < 5) return 'Novato';
                if (lvl < 10) return 'Estudiante Activo';
                if (lvl < 20) return 'Aspirante';
                if (lvl < 30) return 'Analista Crítico';
                if (lvl < 40) return 'Promesa Saber';
                if (lvl < 50) return 'Cerebro Destacado';
                if (lvl < 70) return 'Intelectual';
                if (lvl < 90) return 'Erudito';
                if (lvl < 100) return 'Genio Académico';
                return 'Maestro Nacional';
            };
            const levelObj = { level: level, title: _titles(level) };

            let medal = '';
            if (index === 0) medal = '🥇';
            else if (index === 1) medal = '🥈';
            else if (index === 2) medal = '🥉';
            else medal = `#${index + 1}`;

            return `
                                <tr style="border-bottom: 1px solid var(--color-border);" class="result-row">
                                    <td style="padding: 12px; font-weight: 800; font-size: 1.1rem; color: var(--color-text-muted);">${medal}</td>
                                    <td style="padding: 12px;">
                                        <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-text);">${userObj.profile?.name || 'Anónimo'}</div>
                                        <div style="font-size: 0.75rem; color: var(--color-text-muted);">${userObj.profile?.grade || 'N/A'}</div>
                                    </td>
                                    <td style="padding: 12px;">
                                        <div style="display:inline-flex; align-items:center; gap:4px; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2); padding: 2px 8px; border-radius: 20px;">
                                            <span class="material-icons-round" style="font-size: 12px; color: #f59e0b;">stars</span>
                                            <span style="font-weight: 700; color: #d97706; font-size: 0.80rem;">Lvl ${levelObj.level} | ${levelObj.title}</span>
                                        </div>
                                    </td>
                                    <td style="padding: 12px; text-align: right;">
                                        <div style="font-size: 1rem; font-weight: 800; color: var(--color-primary); font-family: monospace;">${xp.toLocaleString()}</div>
                                    </td>
                                </tr>
                            `;
        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }
};

/* EOF */

// ============ FLASHCARD MODULE ============
const FlashcardModule = {
    selectedArea: null,
    questions: [],
    currentIndex: 0,
    isFlipped: false,
    sessionRatings: [], // [{id, rating}]

    areaConfig: {
        'Matemáticas': { icon: '📐', color: '99,102,241' },
        'Lectura Crítica': { icon: '📝', color: '59,130,246' },
        'Sociales y Ciudadanas': { icon: '🌎', color: '245,158,11' },
        'Ciencias Naturales': { icon: '🔬', color: '16,185,129' },
        'Inglés': { icon: '🇬🇧', color: '236,72,153' }
    },

    init() {
        this.renderAreas();
        // Reset UI state
        document.getElementById('fc-area-selector').classList.remove('hidden');
        document.getElementById('fc-session').classList.add('hidden');
        document.getElementById('fc-summary').classList.add('hidden');
        this.loadRanking();
    },

    async loadRanking() {
        const tbody = document.getElementById('fc-ranking-body');
        if (!tbody) return;

        try {
            const dbUrl = `https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json`;
            const res = await fetch(dbUrl);
            const users = await res.json();

            let rankingList = [];
            if (users) {
                Object.values(users).forEach(u => {
                    if (u.flashcardRanking && u.flashcardRanking.points > 0) {
                        rankingList.push({
                            name: u.flashcardRanking.name || u.info?.name || 'Estudiante',
                            school: u.flashcardRanking.school || u.info?.school || 'Sin Colegio',
                            points: u.flashcardRanking.points
                        });
                    }
                });
            }

            // Sort descending and grab top 10
            rankingList.sort((a, b) => b.points - a.points);
            rankingList = rankingList.slice(0, 10);

            if (rankingList.length === 0) {
                tbody.innerHTML = `<tr><td colspan="3" style="padding:24px; text-align:center; color:var(--color-text-muted);">No hay reyes aún. ¡Sé el primero en repasar!</td></tr>`;
                return;
            }

            let html = '';
            rankingList.forEach((user, index) => {
                let badge = '';
                if (index === 0) badge = '👑';
                else if (index === 1) badge = '🥈';
                else if (index === 2) badge = '🥉';

                html += `
                    <tr style="border-bottom: 1px solid var(--color-surface-2);">
                        <td style="padding: 12px 8px; font-weight: 700;">
                            ${index + 1} ${badge}
                        </td>
                        <td style="padding: 12px 8px;">
                            <div style="font-weight: 600; color: var(--color-text);">${user.name}</div>
                            <div style="font-size: 0.75rem; color: var(--color-text-muted);">${user.school}</div>
                        </td>
                        <td style="padding: 12px 8px; font-weight: 700; color: #f59e0b;">
                            ${user.points}
                        </td>
                    </tr>
                `;
            });

            tbody.innerHTML = html;
        } catch (e) {
            console.error('Error loading Flashcard Ranking', e);
            tbody.innerHTML = `<tr><td colspan="3" style="padding:24px; text-align:center; color:var(--color-danger);">Error al cargar el ranking.</td></tr>`;
        }
    },

    renderAreas() {
        const grid = document.getElementById('fc-areas-grid');
        if (!grid) return;
        grid.innerHTML = '';

        Object.entries(this.areaConfig).forEach(([area, cfg]) => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.style.cssText = `display:flex; align-items:center; gap:8px; padding:12px 16px; border-radius:12px; border:2px solid transparent; background:rgba(${cfg.color},0.08); color:var(--color-text); font-weight:600; font-size:0.85rem; cursor:pointer; transition:all 0.2s;`;
            btn.innerHTML = `${cfg.icon} ${area}`;
            btn.onclick = () => {
                // Deselect all
                grid.querySelectorAll('button').forEach(b => {
                    b.style.borderColor = 'transparent';
                    b.style.background = `rgba(${this.areaConfig[b.textContent.trim().slice(2)]?.color || '0,0,0'},0.08)`;
                });
                // Select this one
                btn.style.borderColor = `rgb(${cfg.color})`;
                btn.style.background = `rgba(${cfg.color},0.18)`;
                this.selectedArea = area;
            };
            grid.appendChild(btn);
        });
    },

    _loadAllQuestions() {
        let localQuestions = JSON.parse(localStorage.getItem('icfes_questions') || '[]');
        let deletedNative = JSON.parse(localStorage.getItem('deleted_native_questions') || '[]');
        let nativeQuestions = typeof window.NATIVE_EXAM_DATA !== 'undefined' && Array.isArray(window.NATIVE_EXAM_DATA)
            ? window.NATIVE_EXAM_DATA
                .filter(q => !deletedNative.includes(q.id))
                .map(q => ({
                    ...q,
                    enunciado: q.enunciado || q.texto || '',
                    tipo: q.tipo || 'standard'
                })) : [];
        return [...localQuestions, ...nativeQuestions];
    },

    _loadSaberDB() {
        return new Promise(resolve => {
            if (typeof window.SABER_DB !== 'undefined' && window.SABER_DB.examenes) {
                window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
                const scripts = window.SABER_DB.examenes.map(exam => new Promise(res => {
                    // Check if already loaded
                    if (document.querySelector(`script[src="${exam.archivo_js}"]`)) return res(true);
                    const s = document.createElement('script');
                    s.src = exam.archivo_js;
                    s.onload = () => res(true);
                    s.onerror = () => res(false);
                    document.body.appendChild(s);
                }));
                Promise.all(scripts).then(() => resolve());
            } else {
                resolve();
            }
        });
    },

    async startSession() {
        if (!this.selectedArea) {
            NotificationModule.show('Selecciona un área para comenzar.', 'warning');
            return;
        }

        const count = parseInt(document.getElementById('fc-count').value) || 10;

        // Load questions
        NotificationModule.show('⏳ Cargando preguntas...', 'info', 2000);
        await this._loadSaberDB();

        const allQ = this._loadAllQuestions();

        // Filter by area
        const normalizeStr = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const areaKey = normalizeStr(this.selectedArea);
        let filtered = allQ.filter(q => {
            const qArea = normalizeStr(q.area || '');
            return qArea.includes(areaKey) || areaKey.includes(qArea);
        });

        // Only keep questions with justificacion (for meaningful flashcards)
        filtered = filtered.filter(q => q.justificacion && q.respuestaCorrecta);

        if (filtered.length === 0) {
            NotificationModule.show('No hay preguntas disponibles para esta área.', 'error');
            return;
        }

        // Spaced repetition: weight by difficulty history
        const ratings = JSON.parse(localStorage.getItem('fc_ratings') || '{}');
        const weighted = filtered.map(q => {
            const r = ratings[q.id];
            let weight = 2; // default
            if (r === 'hard') weight = 5;
            else if (r === 'medium') weight = 3;
            else if (r === 'easy') weight = 1;
            return { q, weight };
        });

        // Weighted random selection
        const selected = [];
        const pool = [...weighted];
        const totalNeeded = Math.min(count, pool.length);
        for (let i = 0; i < totalNeeded; i++) {
            const totalWeight = pool.reduce((s, w) => s + w.weight, 0);
            let rand = Math.random() * totalWeight;
            for (let j = 0; j < pool.length; j++) {
                rand -= pool[j].weight;
                if (rand <= 0) {
                    selected.push(pool[j].q);
                    pool.splice(j, 1);
                    break;
                }
            }
        }

        this.questions = selected;
        this.currentIndex = 0;
        this.isFlipped = false;
        this.sessionRatings = [];

        // Show session UI
        document.getElementById('fc-area-selector').classList.add('hidden');
        document.getElementById('fc-summary').classList.add('hidden');
        document.getElementById('fc-session').classList.remove('hidden');

        this.renderCard();
    },

    renderCard() {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        // Start timer for card validation
        this.cardStartTime = Date.now();

        // Reset flip
        this.isFlipped = false;
        const inner = document.getElementById('fc-card-inner');
        inner.style.transform = 'rotateY(0deg)';

        // Reset scroll position
        const front = document.getElementById('fc-front');
        const back = document.getElementById('fc-back');
        if (front) front.scrollTop = 0;
        if (back) back.scrollTop = 0;

        // Hide rating
        const ratingEl = document.getElementById('fc-rating');
        ratingEl.classList.add('hidden');
        ratingEl.style.display = 'none';

        // Area badge
        const cfg = Object.entries(this.areaConfig).find(([k]) => (q.area || '').includes(k.split(' ')[0]));
        const areaBadge = document.getElementById('fc-area-badge');
        areaBadge.textContent = `${cfg ? cfg[1].icon : '📊'} ${q.area || 'General'}`;

        // Question text (front)
        const fcQuestion = document.getElementById('fc-question');
        // Truncate very long enunciados
        let text = q.enunciado || '';
        if (text.length > 600) text = text.substring(0, 600) + '...';
        fcQuestion.innerHTML = renderMarkdown ? renderMarkdown(text) : text;

        // Image support
        const imageContainer = document.getElementById('fc-image-container');
        if (imageContainer) {
            if (q.imagen) {
                imageContainer.innerHTML = `<img src="${q.imagen}" alt="Imagen de la pregunta" style="max-width: 100%; height: auto; border-radius: 8px; margin-bottom: 16px; display: block; margin-left: auto; margin-right: auto; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">`;
                imageContainer.classList.remove('hidden');
            } else {
                imageContainer.innerHTML = '';
                imageContainer.classList.add('hidden');
            }
        }

        // Chart support
        const chartContainer = document.getElementById('fc-chart-container');
        if (chartContainer) {
            if (q.grafica && q.grafica.datos) {
                chartContainer.innerHTML = `
                    <div style="padding: 16px; background: var(--color-surface-2); border-radius: 12px; margin-bottom: 16px;">
                        <h4 style="font-size: 0.85rem; margin-bottom: 12px; color: var(--color-text-muted);">📊 Gráfica</h4>
                        <div style="height: 300px; position: relative;">
                            <canvas id="fc-question-chart"></canvas>
                        </div>
                    </div>
                `;
                // Re-use ExamEngine's chart renderer but point to our local canvas ID
                setTimeout(() => {
                    if (typeof ExamEngine !== 'undefined' && ExamEngine.renderChart) {
                        ExamEngine.renderChart(q.grafica, 'fc-chart-container', 'fc-question-chart');
                    }
                }, 50);
            } else {
                chartContainer.innerHTML = '';
            }
        }

        // Answer (back) - Only show the text concept, not the A/B/C/D option
        const correctOpt = (q.opciones || []).find(o => o.id === q.respuestaCorrecta);
        const answerEl = document.getElementById('fc-answer');
        if (correctOpt) {
            // Strip leading "a) ", "A. ", etc. if they happen to exist in the text itself
            let cleanText = correctOpt.texto.replace(/^[a-dA-D][\.\)]\s*/, '');
            answerEl.innerHTML = renderMarkdown ? renderMarkdown(cleanText) : cleanText;
        } else {
            answerEl.textContent = 'N/A';
        }

        // Justification
        const justEl = document.getElementById('fc-justification');
        justEl.innerHTML = renderMarkdown ? renderMarkdown(q.justificacion || '') : (q.justificacion || '');

        // Progress
        const total = this.questions.length;
        const current = this.currentIndex + 1;
        document.getElementById('fc-progress-text').textContent = `${current} / ${total}`;
        document.getElementById('fc-progress-bar').style.width = `${(current / total) * 100}%`;

        // Trigger MathJax if available
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            setTimeout(() => MathJax.typesetPromise(), 100);
        }
    },

    flipCard() {
        const inner = document.getElementById('fc-card-inner');
        const ratingEl = document.getElementById('fc-rating');

        if (this.isFlipped) {
            // Flip back to question
            this.isFlipped = false;
            inner.style.transform = 'rotateY(0deg)';
            ratingEl.classList.add('hidden');
            ratingEl.style.display = 'none';
            return;
        }

        // Flip to answer
        this.isFlipped = true;
        inner.style.transform = 'rotateY(180deg)';

        // Show rating buttons
        ratingEl.classList.remove('hidden');
        ratingEl.style.display = 'flex';

        // Trigger MathJax on back
        if (typeof MathJax !== 'undefined' && MathJax.typesetPromise) {
            setTimeout(() => MathJax.typesetPromise(), 300);
        }
    },

    rate(rating) {
        const q = this.questions[this.currentIndex];
        if (!q) return;

        // Validating minimum 3 seconds reading time
        const timeSpent = Date.now() - (this.cardStartTime || Date.now());
        const isValid = timeSpent >= 3000;

        // Save rating
        this.sessionRatings.push({ id: q.id, rating, valid: isValid });

        // Persist to localStorage for spaced repetition
        const ratings = JSON.parse(localStorage.getItem('fc_ratings') || '{}');
        ratings[q.id] = rating;
        localStorage.setItem('fc_ratings', JSON.stringify(ratings));

        // Next card or end
        this.currentIndex++;
        if (this.currentIndex >= this.questions.length) {
            this.showSummary();
        } else {
            this.renderCard();
        }
    },

    async showSummary() {
        document.getElementById('fc-session').classList.add('hidden');
        document.getElementById('fc-summary').classList.remove('hidden');

        const hard = this.sessionRatings.filter(r => r.rating === 'hard').length;
        const medium = this.sessionRatings.filter(r => r.rating === 'medium').length;
        const easy = this.sessionRatings.filter(r => r.rating === 'easy').length;
        const total = this.sessionRatings.length;

        // Count valid cards (viewed >= 3 seconds)
        const validCards = this.sessionRatings.filter(r => r.valid).length;

        document.getElementById('fc-summary-text').textContent =
            `Repasaste ${total} tarjetas de ${this.selectedArea} (Válidas para ranking: ${validCards})`;

        document.getElementById('fc-summary-stats').innerHTML = `
            <div style="background:rgba(239,68,68,0.08); border:1px solid rgba(239,68,68,0.15); border-radius:12px; padding:16px;">
                <div style="font-size:1.5rem; font-weight:800; color:#ef4444;">${hard}</div>
                <div style="font-size:0.75rem; color:var(--color-text-muted);">😣 Difíciles</div>
            </div>
            <div style="background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.15); border-radius:12px; padding:16px;">
                <div style="font-size:1.5rem; font-weight:800; color:#f59e0b;">${medium}</div>
                <div style="font-size:0.75rem; color:var(--color-text-muted);">😐 Regulares</div>
            </div>
            <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.15); border-radius:12px; padding:16px;">
                <div style="font-size:1.5rem; font-weight:800; color:#10b981;">${easy}</div>
                <div style="font-size:0.75rem; color:var(--color-text-muted);">😊 Fáciles</div>
            </div>
        `;

        // Award default global XP (keep global gamification working)
        if (typeof GamificationModule !== 'undefined' && total > 0) {
            const xp = total * 3;
            GamificationModule.addXP(xp);
            NotificationModule.show(`+${xp} XP Global de Repaso 🃏`, 'success', 3000);
        }

        // Upload to Flashcard Ranking Leaderboard
        if (typeof AuthModule !== 'undefined' && AuthModule.currentUser && validCards > 0) {
            const pointsEarned = validCards * 10; // 10 points per valid card for flashcard ranking
            try {
                // Get current user flashcard ranking points
                const uId = AuthModule.currentUser.id;
                const dbUrl = `https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${uId}/flashcardRanking.json`;
                const userRes = await fetch(dbUrl);
                const currentData = await userRes.json() || { points: 0 };

                const newPoints = (currentData.points || 0) + pointsEarned;

                await fetch(dbUrl, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        points: newPoints,
                        lastUpdated: Date.now(),
                        name: AuthModule.currentUser.name || 'Estudiante',
                        school: AuthModule.currentUser.school || 'Sin Colegio'
                    })
                });

                // Show notification for Flashcard Ranking specifically
                setTimeout(() => {
                    NotificationModule.show(`🔥 +${pointsEarned} Pts en Reyes del Flashcard`, 'success', 4000);
                }, 1500);

            } catch (e) {
                console.error('Error updating Flascard ranking points:', e);
            }
        }
    },

    endSession() {
        if (this.sessionRatings.length > 0) {
            this.showSummary();
        } else {
            this.resetToSelector();
        }
    },

    resetToSelector() {
        this.selectedArea = null;
        this.questions = [];
        this.currentIndex = 0;
        this.sessionRatings = [];
        document.getElementById('fc-area-selector').classList.remove('hidden');
        document.getElementById('fc-session').classList.add('hidden');
        document.getElementById('fc-summary').classList.add('hidden');
        this.renderAreas();
        this.loadRanking();
    }
};

window.FlashcardModule = FlashcardModule;

// Hook Router for flashcards view
if (typeof Router !== 'undefined') {
    if (!Router.views) Router.views = {};
    document.addEventListener('DOMContentLoaded', () => {
        Router.views.flashcards = document.getElementById('view-flashcards');
    });

    const _prevFCGo = Router.go;
    Router.go = function (view) {
        _prevFCGo.call(this, view);
        if (view === 'flashcards') {
            FlashcardModule.init();
        }
    };
}

// ============ VIRTUAL TEACHER MODULE: PROFE CHIGUIRO ============
const VirtualTeacherModule = {
    messages: {
        welcome: "¡Hola! Soy el Profe Chigüiro. Seré tu mentor para que revientes ese ICFES. ¿Necesitas que te guíe por la plataforma?",
        onboardingAccept: "¡Excelente decisión! Vamos a dar un rápido recorrido.",
        onboardingDecline: "Está bien, el Chigüiro no ruega. Estaré por aquí si me necesitas.",
        distraction: "¡Ey! ¿A dónde vas? El Chigüiro no se distrae, tú tampoco deberías. Enfócate.",
        honestHint: "Recuerda que en el examen real no habrá ayudas. La honestidad es tu mejor herramienta."
    },

    currentMood: 'neutral',
    hideTimeout: null,
    isTouring: false,
    tourStep: 0,

    init() {
        console.log("🦦 Profe Chiguiro Module Initialized (Duo Style)");
        this.setupListeners();
        this.initAuthOnboarding();

        // Safety exit for tour overlay
        const overlay = document.getElementById('tour-overlay');
        if (overlay) {
            overlay.onclick = () => this.endTour();
        }
    },

    setupListeners() {
        // Tab switching detection
        let hideTime;
        document.addEventListener('visibilitychange', () => {
            if (this.isTouring) return; // Don't interrupt during tour
            if (document.hidden) {
                hideTime = Date.now();
            } else {
                if (hideTime && Date.now() - hideTime > 15000) {
                    this.speak(this.messages.distraction, 'serious');
                }
            }
        });
    },

    onViewChange(view) {
        if (this.isTouring) return;

        // Contextual Greetings
        if (view === 'global-results') {
            this.speak("¡Mira dónde estás! 🏆 Este ranking mide constancia y dedicación. Sigue practicando para subir posiciones.", "happy");
        } else if (view === 'dashboard') {
            this.analyzeStudentStats();
        } else if (view === 'flashcards') {
            this.speak("¡Excelente elección! 🧠 Las flashcards son un método comprobado científicamente para memorizar conceptos a largo plazo.", "happy");
        } else if (view === 'home') {
            // Guard: check AuthModule is initialized before accessing it
            if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
                this.checkWeeklyProgress();
            }
        }
    },

    checkWeeklyProgress() {
        const historyStr = localStorage.getItem('saber_results_history');
        if (!historyStr) return;
        try {
            const history = JSON.parse(historyStr);
            if (history.length === 0) return;

            // Get last exam date
            const lastExamDate = new Date(Math.max(...history.map(h => new Date(h.date).getTime())));
            const diffDays = Math.floor((Date.now() - lastExamDate.getTime()) / (1000 * 3600 * 24));

            if (diffDays >= 3) {
                this.speak(`He notado que llevas ${diffDays} días sin hacer un simulacro. ⚠️ Recuerda que la constancia en esta plataforma afecta directamente tu nota académica. ¡No te quedes atrás!`, "serious");
            }
        } catch (e) { }
    },

    analyzeStudentStats() {
        // Find weakest area
        const historyStr = localStorage.getItem('saber_results_history');
        if (!historyStr) return;
        try {
            const history = JSON.parse(historyStr);
            if (history.length === 0) return;

            const areaStats = {};
            history.forEach(exam => {
                if (exam.byArea) {
                    Object.entries(exam.byArea).forEach(([area, stats]) => {
                        if (!areaStats[area]) areaStats[area] = { worked: 0, correct: 0 };
                        areaStats[area].worked += stats.total || 0;
                        areaStats[area].correct += stats.correct || 0;
                    });
                }
            });

            let weakestArea = null;
            let weakestAcc = 100;

            Object.entries(areaStats).forEach(([area, stats]) => {
                if (stats.worked >= 5) { // Minimum threshold to judge
                    const acc = Math.round((stats.correct / stats.worked) * 100);
                    if (acc < 50 && acc < weakestAcc) {
                        weakestArea = area;
                        weakestAcc = acc;
                    }
                }
            });

            if (weakestArea) {
                const areaName = weakestArea.replace(/_/g, ' ');
                this.speak(`📊 Veo en tus estadísticas que andamos un poco flojos en **${areaName}** (${weakestAcc}%). ¡Te recomiendo ir a estudiar con las Flashcards de esa materia ahora mismo!`, "neutral", [
                    { label: "Ir a Flashcards", callback: () => Router.go('flashcards') }
                ]);
            } else {
                this.speak("He analizado tu progreso y vas por buen camino. 📈 ¡Sigue manteniendo esos porcentajes altos!", "happy");
            }
        } catch (e) { }
    },

    speak(message, mood = 'neutral', actions = []) {
        const container = document.getElementById('chiguiro-container');
        const bubble = document.getElementById('chiguiro-bubble');
        const text = document.getElementById('chiguiro-text');
        const img = document.getElementById('chiguiro-img');
        const actionsEl = document.getElementById('chiguiro-actions');

        if (!container || !bubble || !text || !img) return;

        this.setMood(mood);
        text.innerHTML = message;
        actionsEl.innerHTML = '';

        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = 'btn';
            btn.style.cssText = "padding: 8px 16px; font-size: 0.85rem; font-weight: 700; border-radius: 10px; border: none; cursor: pointer; background: var(--color-primary); color: white; transition: all 0.2s; box-shadow: 0 4px 0 var(--color-primary-dark);";
            btn.textContent = action.label;
            btn.onclick = (e) => {
                e.stopPropagation();
                if (action.callback) action.callback();
            };
            // Add hover effect
            btn.onmouseenter = () => btn.style.transform = "translateY(-2px)";
            btn.onmouseleave = () => btn.style.transform = "translateY(0)";

            actionsEl.appendChild(btn);
        });

        container.classList.remove('hidden');
        bubble.classList.remove('hidden');
        bubble.classList.add('show');

        if (this.hideTimeout) clearTimeout(this.hideTimeout);
        if (actions.length === 0 && !this.isTouring) {
            // Dynamic reading time: 8 seconds minimum + ~60ms per character for long texts
            const dynamicTime = Math.max(8000, message.length * 60);
            this.hideTimeout = setTimeout(() => this.hide(), dynamicTime);
        }
    },

    setMood(mood) {
        const img = document.getElementById('chiguiro-img');
        if (!img) return;
        this.currentMood = mood;
        img.src = `img/chiguiro/${mood}.png`;

        // Ensure floating animation is present
        const wrapper = document.getElementById('chiguiro-avatar-wrapper');
        if (wrapper && !wrapper.classList.contains('chiguiro-float-anim')) {
            wrapper.classList.add('chiguiro-float-anim');
        }
    },

    hide() {
        this.isTouring = false;
        this.clearHighlight();
        const bubble = document.getElementById('chiguiro-bubble');
        const container = document.getElementById('chiguiro-container');
        if (bubble) {
            bubble.classList.remove('show');
            bubble.classList.add('hidden');
        }
        setTimeout(() => {
            if (container && bubble && bubble.classList.contains('hidden')) {
                container.classList.add('hidden');
            }
        }, 500);
    },

    // --- TOUR LOGIC ---
    startOnboarding() {
        this.isTouring = true;
        this.tourStep = 0;
        document.getElementById('tour-overlay').classList.add('active');
        this.nextTourStep();
    },

    nextTourStep() {
        const steps = [
            {
                view: 'home',
                selector: '.page-title',
                message: "¡Hola! Soy el **Profe Chigüiro**. 👋 Tu mentor personal para que revientes este ICFES. ¡Vamos a dar un recorrido por tu arsenal de estudio!",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: 'button[onclick*="config"]',
                message: "Aquí es donde empieza la acción. **Inicia un Simulacro** para medirte. Puedes personalizar el número de preguntas y el tiempo.",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: '.bento-card[onclick*="dashboard"]',
                message: "En **Mi Progreso** verás tus estadísticas detalladas. ¡Tu crecimiento es mi mayor orgullo! 📈",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: '.bento-card[onclick*="global-results"]',
                message: "Revisa el **Ranking Global**. ¡Compite con otros estudiantes y escala hasta el puesto #1! 🏆",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: '.bento-card[onclick*="tips"]',
                message: "Aquí tienes **Tips Mentales**. Estrategias y trucos para manejar los nervios y el tiempo el día del examen. 💡",
                mood: 'neutral'
            },
            {
                view: 'home',
                selector: '.bento-card[onclick*="flashcards"]',
                message: "Y las **Flashcards**, mi método favorito para memorizar conceptos clave de forma rápida y divertida. 🃏",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: '.features-strip',
                message: "¡Y no olvides esto! IA adaptativa, Cronómetro oficial y Analítica en tiempo real. Tecnología de punta para ti. ⚡",
                mood: 'happy'
            },
            {
                view: 'home',
                selector: 'button[onclick*="teacher"]',
                message: "Finalmente, el **Banco de Preguntas**. Miles de retos para practicar áreas específicas. ¡Úsalo mucho! 📚",
                mood: 'happy'
            }
        ];

        if (this.tourStep >= steps.length) {
            this.endTour();
            return;
        }

        const step = steps[this.tourStep];

        // Ensure we are in the correct view
        if (Router.currentView !== step.view) {
            Router.go(step.view);
        }

        // Wait for potential dynamic rendering
        setTimeout(() => {
            const elFound = this.highlightElement(step.selector);

            if (!elFound && this.tourStep < steps.length - 1) {
                console.warn(`Tour selector not found: ${step.selector}. Skipping...`);
                this.tourStep++;
                this.nextTourStep();
                return;
            }

            this.speak(step.message, step.mood, [
                {
                    label: "Siguiente", callback: () => {
                        this.tourStep++;
                        this.nextTourStep();
                    }
                },
                { label: "Omitir", callback: () => this.endTour() }
            ]);
        }, 600);
    },

    highlightElement(selector) {
        this.clearHighlight();
        const el = document.querySelector(selector);
        if (el) {
            el.classList.add('tour-highlight', 'tour-pulse');
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return true;
        }
        return false;
    },

    clearHighlight() {
        document.querySelectorAll('.tour-highlight').forEach(el => {
            el.classList.remove('tour-highlight', 'tour-pulse');
        });
    },

    // --- AUTH ONBOARDING ---
    initAuthOnboarding() {
        if (AuthModule.currentUser) return; // safety check

        // Check if shown before in this session to avoid annoyance
        if (sessionStorage.getItem('chiguiro_auth_intro_shown')) return;
        sessionStorage.setItem('chiguiro_auth_intro_shown', 'true');

        this.speak("¡Hola! Veo que eres nuevo por aquí. Soy el Profe Chigüiro y te ayudaré a reventar ese ICFES. 🦦🚀", 'happy', [
            { label: "Sí, ¡ayúdame!", callback: () => this.explainAuth() },
            { label: "Ahora no", callback: () => this.hide() }
        ]);
    },

    explainAuth() {
        this.speak("Para guardar tu progreso, ganar XP y aparecer en el ranking, necesitas una cuenta. ¿No tienes una? ¡Es gratis!", 'neutral', [
            { label: "Registrarme", callback: () => this.guideToRegister() },
            { label: "Ya tengo cuenta", callback: () => this.guideToLogin() }
        ]);
    },

    guideToLogin() {
        const loginBtn = document.querySelector('#user-auth-container button') || document.querySelector('button[onclick*="login"]');
        if (loginBtn) {
            this.highlightElement('#user-auth-container');
            this.speak("¡Genial! Haz clic aquí arriba para iniciar sesión y continuar con tus metas.", 'happy', [
                { label: "Entendido", callback: () => this.hide() }
            ]);
        } else {
            this.speak("Busca el botón de 'Iniciar Sesión' en la parte superior derecha. ¡Te espero adentro!", 'neutral');
        }
    },

    guideToRegister() {
        // Find a button that might open registration or just point to the top nav
        this.highlightElement('#user-auth-container');
        this.speak("Haz clic en el botón de la esquina superior para crear tu perfil de Chigüiro Pro. ¡Solo toma 10 segundos!", 'happy', [
            { label: "¡Lo haré!", callback: () => this.hide() }
        ]);
    },

    endTour() {
        this.isTouring = false;
        this.clearHighlight();
        const overlay = document.getElementById('tour-overlay');
        if (overlay) overlay.classList.remove('active');
        this.speak("¡Eso es todo por ahora! Estaré en la esquina si necesitas ayuda. ¡A darle con toda! 🏁", 'happy', [
            { label: "¡A estudiar!", callback: () => this.hide() }
        ]);
    }
};

window.VirtualTeacherModule = VirtualTeacherModule;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Modules
    if (typeof AuthModule !== 'undefined') AuthModule.init();
    if (typeof ThemeModule !== 'undefined') ThemeModule.init();

    // 2. Virtual Teacher
    if (typeof VirtualTeacherModule !== 'undefined') {
        VirtualTeacherModule.init();
    }

    // 3. Final UI Sync
    if (typeof updateUserUI === 'function') {
        updateUserUI();
    }
});
