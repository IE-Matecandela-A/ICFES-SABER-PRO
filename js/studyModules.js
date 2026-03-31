/**
 * StudyModules Module
 * Maneja la lógica de la sección "Módulos de Estudio"
 */
const StudyModules = {
    currentSubject: null,
    
    subjectsData: {
        'matematicas': {
            name: 'Matemáticas',
            icon: 'functions',
            color: '#818cf8',
            bgGradient: 'linear-gradient(145deg, #1e1b4b 0%, #312e81 100%)',
            description: 'Explora los fundamentos del razonamiento cuantitativo.',
            modules: [
                {
                    id: 'mat_mod_1',
                    title: 'Módulo 1: Interpretación y representación',
                    description: 'Comprende y transforma información en diferentes formatos.',
                    icon: 'insights',
                    content: ''
                },
                {
                    id: 'mat_mod_2',
                    title: 'Módulo 2: Formulación y ejecución',
                    description: 'Plantea y ejecuta estrategias para resolver problemas.',
                    icon: 'architecture',
                    content: ''
                },
                {
                    id: 'mat_mod_3',
                    title: 'Módulo 3: Argumentación',
                    description: 'Valida o refuta conclusiones basadas en evidencias matemáticas.',
                    icon: 'fact_check',
                    content: ''
                },
                {
                    id: 'mat_mod_4',
                    title: 'Módulo 4: Razonamiento Cuantitativo',
                    description: 'Aplica matemáticas a situaciones financieras y de la vida real.',
                    icon: 'trending_up',
                    content: ''
                },
                {
                    id: 'mat_mod_5',
                    title: 'Módulo 5: Pensamiento Geométrico',
                    description: 'Domina el espacio, áreas, volúmenes y el Teorema de Pitágoras.',
                    icon: 'change_history',
                    content: ''
                },
                {
                    id: 'mat_mod_6',
                    title: 'Módulo 6: Estadística y Probabilidad',
                    description: 'Analiza datos, promedios y leyes de probabilidad.',
                    icon: 'query_stats',
                    content: ''
                },
                {
                    id: 'mat_mod_7',
                    title: 'Módulo 7: Álgebra y Funciones',
                    description: 'Domina ecuaciones, parábolas y modelamiento matemático.',
                    icon: 'functions',
                    content: ''
                }
            ]
        },
        'lectura_critica': { name: 'Lectura Crítica', color: '#f43f5e', icon: 'auto_stories', modules: [] },
        'sociales': { name: 'Sociales', color: '#fbbf24', icon: 'public', modules: [] },
        'naturales': { 
            name: 'C. Naturales', 
            color: '#10b981', 
            icon: 'biotech', 
            description: 'Domina los conceptos de la biología, química y física para la prueba.',
            modules: [
                { id: 'cn_mod_1', title: 'Módulo 1: Indagación Científica', description: 'Aprende a identificar variables y diseñar experimentos.', icon: 'science', content: '' },
                { id: 'cn_mod_2', title: 'Módulo 2: Biología y Genética', description: 'Comprende la célula, el ADN, y ecosistemas.', icon: 'eco', content: '' },
                { id: 'cn_mod_3', title: 'Módulo 3: Química y Materia', description: 'La tabla periódica, reacciones y enlaces químicos.', icon: 'water_drop', content: '' },
                { id: 'cn_mod_4', title: 'Módulo 4: Física y Mecánica', description: 'Leyes de Newton, energía y cinemática.', icon: 'speed', content: '' },
                { id: 'cn_mod_5', title: 'Módulo 5: Ecología y Sistemas', description: 'Dinámicas ambientales y CTS (Ciencia y Tecnología).', icon: 'public', content: '' },
                { id: 'cn_mod_6', title: 'Módulo 6: Ondas y Electromagnetismo', description: 'Luz, sonido, y circuitos eléctricos.', icon: 'settings_input_composite', content: '' }
            ] 
        },
        'ingles': { name: 'Inglés', color: '#0ea5e9', icon: 'translate', modules: [] }
    },

    init() {
        console.log("StudyModules initialized");
        // Inyectar estilos necesarios para el Learning Path
        this.injectStyles();
    },

    injectStyles() {
        if (document.getElementById('study-modules-styles')) return;
        const style = document.createElement('style');
        style.id = 'study-modules-styles';
        style.textContent = `
            .learning-path-container {
                position: relative;
                padding-left: 20px;
                padding-right: 20px;
            }
            .learning-path-line {
                position: absolute;
                left: 50%;
                top: 0;
                bottom: 0;
                width: 2px;
                background: linear-gradient(to bottom, transparent, var(--path-color, #4f46e5) 10%, var(--path-color, #4f46e5) 90%, transparent);
                opacity: 0.2;
                transform: translateX(-50%);
                z-index: 0;
            }
            .module-card-premium {
                background: rgba(30, 41, 59, 0.4);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 24px;
                padding: 24px;
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                position: relative;
                z-index: 1;
                display: flex;
                align-items: center;
                gap: 20px;
                overflow: hidden;
            }
            .module-card-premium::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, var(--path-color) 0%, transparent 100%);
                opacity: 0;
                transition: opacity 0.4s ease;
                z-index: -1;
            }
            .module-card-premium:hover {
                transform: translateY(-5px) scale(1.02);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(var(--path-color-rgb), 0.2);
            }
            .module-card-premium:hover::before {
                opacity: 0.05;
            }
            .module-icon-box {
                width: 64px;
                height: 64px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 28px;
                transition: all 0.4s ease;
                box-shadow: 0 8px 16px rgba(0,0,0,0.2);
            }
            .module-card-premium:hover .module-icon-box {
                transform: rotate(-5deg) scale(1.1);
            }
            .module-number-badge {
                position: absolute;
                top: -10px;
                left: -10px;
                width: 28px;
                height: 28px;
                background: var(--path-color);
                color: white;
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 900;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            }
            .module-tag {
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 700;
                padding: 4px 10px;
                border-radius: 20px;
                background: rgba(255,255,255,0.05);
                color: var(--path-color);
                border: 1px solid rgba(255,255,255,0.1);
                margin-top: 8px;
                display: inline-block;
            }
        `;
        document.head.appendChild(style);
    },

    openSubject(subjectId) {
        const data = this.subjectsData[subjectId];
        if (!data) return;

        this.currentSubject = subjectId;

        // Si no hay módulos definidos aún, mostrar mensaje de desarrollo
        if (!data.modules || data.modules.length === 0) {
            if (typeof showNotification !== 'undefined') {
                showNotification(`📚 El módulo de ${data.name} está en desarrollo.`, 'info');
            } else {
                alert(`El módulo de ${data.name} está en desarrollo.`);
            }
            return;
        }

        this.renderSubjectDetails(subjectId);
        window.Router.go('subject-details');
    },

    renderSubjectDetails(subjectId) {
        const data = this.subjectsData[subjectId];
        const heroContainer = document.getElementById('subject-details-hero');
        const modulesList = document.getElementById('subject-modules-list');
        const titleHeader = document.getElementById('subject-details-title');

        // Configurar variables CSS para el tema
        document.documentElement.style.setProperty('--path-color', data.color);
        // Helper para convertir hex a rgb si es necesario
        
        titleHeader.textContent = `Academia: ${data.name}`;
        titleHeader.style.color = data.color;

        heroContainer.innerHTML = `
            <div class="relative py-10 px-6 mt-4">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent opacity-10"></div>
                <div class="relative z-10 flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6" 
                         style="background: linear-gradient(135deg, ${data.color}40, ${data.color}10); border: 1px solid ${data.color}30; color: ${data.color}; box-shadow: 0 20px 40px -10px ${data.color}20;">
                        <span class="material-icons-round" style="font-size: 42px;">${data.icon || 'book'}</span>
                    </div>
                    <h1 class="text-4xl font-black tracking-tight text-white mb-3" style="text-shadow: 0 2px 10px rgba(0,0,0,0.5)">${data.name}</h1>
                    <p class="max-w-xl text-lg opacity-70 leading-relaxed" style="color: var(--color-text-muted)">
                        ${data.description || 'Domina cada competencia con nuestra ruta de aprendizaje estructurada.'}
                    </p>
                </div>
            </div>
        `;

        modulesList.className = "learning-path-container max-w-4xl mx-auto px-4 mt-12 pb-24 grid gap-8";
        modulesList.innerHTML = `
            <div class="learning-path-line" style="--path-color: ${data.color}"></div>
            ${data.modules.map((mod, index) => `
                <div onclick="StudyModules.openModule(\'${subjectId}\', \'${mod.id}\')" 
                     class="module-card-premium group"
                     style="--path-color: ${data.color}; --path-color-rgb: 99, 102, 241;">
                    
                    <div class="module-number-badge">${index + 1}</div>
                    
                    <div class="module-icon-box" style="background: linear-gradient(135deg, ${data.color}20, ${data.color}40); color: ${data.color}; border: 1px solid ${data.color}30;">
                        <span class="material-icons-round">${mod.icon || 'star'}</span>
                    </div>
                    
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-1">
                            <h4 class="text-xl font-extrabold text-white group-hover:text-[${data.color}] transition-colors">${mod.title}</h4>
                        </div>
                        <p class="text-sm opacity-60 leading-snug max-w-xl" style="color: var(--color-text-muted)">${mod.description}</p>
                        <div class="flex gap-2">
                            <span class="module-tag">📚 TEORÍA</span>
                            <span class="module-tag">🎯 PRÁCTICA</span>
                            <span class="module-tag">🧠 ESTRATEGIA</span>
                        </div>
                    </div>
                    
                    <div class="w-10 h-10 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 group-hover:bg-white/10 transition-all">
                        <span class="material-icons-round text-white">chevron_right</span>
                    </div>
                </div>
            `).join('')}
        `;
    },

    openModule(subjectId, moduleId) {
        const subject = this.subjectsData[subjectId];
        const module = subject.modules.find(m => m.id === moduleId);
        if (!module) return;

        // Registrar este módulo como el activo actual para evitar colisiones de re-renders tardíos
        this.activeModuleId = moduleId;
        let attempts = 0;

        const containerId = 'module-content-root';
        const container = document.getElementById(containerId);
        const headerTitle = document.getElementById('module-content-header-title');

        headerTitle.textContent = module.title;
        headerTitle.style.color = subject.color;
        
        // Limpiar raíz de React previa de forma segura
        if (window._reactRoots && window._reactRoots[containerId]) {
            console.log(`StudyModules: Desmontando módulo previo en ${containerId}...`);
            try {
                window._reactRoots[containerId].unmount();
                delete window._reactRoots[containerId];
            } catch (e) {
                console.warn("StudyModules: Error al desmontar raíz:", e);
            }
        }

        container.innerHTML = '';

        if (['mat_mod_1', 'mat_mod_2', 'mat_mod_3', 'mat_mod_4', 'mat_mod_5', 'mat_mod_6', 'mat_mod_7', 'cn_mod_1', 'cn_mod_2', 'cn_mod_3', 'cn_mod_4', 'cn_mod_5', 'cn_mod_6'].includes(moduleId)) {
            const renderFnName = {
                'mat_mod_1': 'renderMathModule1',
                'mat_mod_2': 'renderMathModule2',
                'mat_mod_3': 'renderMathModule3',
                'mat_mod_4': 'renderMathModule4',
                'mat_mod_5': 'renderMathModule5',
                'mat_mod_6': 'renderMathModule6',
                'mat_mod_7': 'renderMathModule7',
                'cn_mod_1': 'renderCNModule1',
                'cn_mod_2': 'renderCNModule2',
                'cn_mod_3': 'renderCNModule3',
                'cn_mod_4': 'renderCNModule4',
                'cn_mod_5': 'renderCNModule5',
                'cn_mod_6': 'renderCNModule6'
            }[moduleId];
            
            console.log(`StudyModules: Solicitando render para ${moduleId} (${renderFnName})...`);
            
            const tryRender = () => {
                // Cancelar si el usuario ya cambió a otro módulo mientras esperábamos
                if (this.activeModuleId !== moduleId) {
                    console.log(`StudyModules: Render cancelado para ${moduleId} (el usuario cambió de tema).`);
                    return;
                }

                if (window[renderFnName]) {
                    console.log(`StudyModules: Ejecutando ${renderFnName} para ${moduleId}...`);
                    window[renderFnName](containerId);
                } else {
                    console.warn(`StudyModules: Esperando módulo ${moduleId}... Intento ${attempts + 1}`);
                    attempts++;
                    if (attempts > 15) {
                        container.innerHTML = `
                            <div class="p-10 text-center">
                                <div style="font-size: 3rem; margin-bottom: 16px;">⚠️</div>
                                <h2 class="text-xl font-bold" style="color: #f87171">El módulo tardó demasiado en cargar</h2>
                                <p style="color: var(--color-text-muted); margin-top: 8px; font-size: 0.9rem;">Verifica tu conexión a internet o recarga la página (F5)</p>
                                <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 24px; background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; border: none; border-radius: 10px; font-weight: 700; cursor: pointer;">
                                    🔄 Recargar Página
                                </button>
                            </div>`;
                        return;
                    }
                    // Mostrar skeleton loader elegante mientras carga
                    if (attempts === 1) {
                        container.innerHTML = `
                            <div style="padding: 32px; animation: fadeIn 0.3s ease;">
                                <style>
                                    @keyframes shimmer {
                                        0% { background-position: -800px 0; }
                                        100% { background-position: 800px 0; }
                                    }
                                    .sk { 
                                        background: linear-gradient(90deg, var(--color-surface-2) 25%, var(--color-surface-3, rgba(255,255,255,0.07)) 50%, var(--color-surface-2) 75%);
                                        background-size: 800px 100%;
                                        animation: shimmer 1.5s infinite linear;
                                        border-radius: 12px;
                                    }
                                </style>
                                <!-- Header skeleton -->
                                <div class="sk" style="height: 56px; width: 65%; margin-bottom: 24px;"></div>
                                <div class="sk" style="height: 24px; width: 40%; margin-bottom: 40px;"></div>
                                <!-- Tabs skeleton -->
                                <div style="display: flex; gap: 12px; margin-bottom: 32px;">
                                    <div class="sk" style="height: 40px; width: 120px; border-radius: 20px;"></div>
                                    <div class="sk" style="height: 40px; width: 120px; border-radius: 20px; opacity: 0.6;"></div>
                                    <div class="sk" style="height: 40px; width: 120px; border-radius: 20px; opacity: 0.4;"></div>
                                </div>
                                <!-- Content card skeletons -->
                                <div style="display: grid; gap: 16px;">
                                    <div class="sk" style="height: 120px; border-radius: 20px;"></div>
                                    <div class="sk" style="height: 96px; border-radius: 20px; opacity: 0.7;"></div>
                                    <div class="sk" style="height: 80px; border-radius: 20px; opacity: 0.5;"></div>
                                </div>
                                <p style="text-align: center; color: var(--color-text-muted); font-size: 0.8rem; margin-top: 24px; opacity: 0.6;">Cargando módulo inteligente...</p>
                            </div>`;
                    }
                    setTimeout(tryRender, 600);
                }
            };
            tryRender();
        } else {
            container.innerHTML = `<div class="rounded-[32px] p-10" style="background: var(--color-surface-2); border: 1px solid var(--color-border);">${module.content}</div>`;
        }
        
        window.Router.go('module-content');
    },

    backToSubject() {
        if (this.currentSubject) {
            window.Router.go('subject-details');
        } else {
            window.Router.go('study-modules');
        }
    }
};

// Hacerlo global para Router
window.StudyModules = StudyModules;
