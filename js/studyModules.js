/**
 * StudyModules Module
 * Maneja la lógica de la sección "Módulos de Estudio"
 */
const StudyModules = {
    currentSubject: null,
    
    hexToRgb(hex) {
        const bigint = parseInt(hex.replace('#', ''), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return `${r}, ${g}, ${b}`;
    },
    
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
                },
                {
                    id: 'mat_mod_8',
                    title: 'Módulo 8: Estadística y Probabilidad II',
                    description: 'Simulador Avanzado de Estadística y Probabilidad (20 preguntas).',
                    icon: 'analytics',
                    content: ''
                }
            ] },
        'lectura_critica': { name: 'Lectura Crítica', color: '#f43f5e', icon: 'auto_stories', bgGradient: 'linear-gradient(145deg, #4c0519 0%, #881337 100%)', description: 'Desarrolla tu capacidad de leer, comprender y analizar textos de forma crítica.', modules: [
                { id: 'cr_mod_1', title: 'Módulo 1: Vocabulario e Información Explícita', description: 'Afirmación 1: Entiende palabras en contexto y ubica información puntual en cualquier tipo de texto.', icon: 'search', content: '' },
                { id: 'cr_mod_2', title: 'Módulo 2: Estructura y Relaciones Textuales', description: 'Afirmación 1: Reconoce tipos de texto, su organización interna y relaciones causa-efecto.', icon: 'account_tree', content: '' },
                { id: 'cr_mod_3', title: 'Módulo 3: Inferencia e Idea Principal', description: 'Afirmación 2: Lee entre líneas, deduce información implícita e identifica el mensaje central.', icon: 'lightbulb', content: '' },
                { id: 'cr_mod_4', title: 'Módulo 4: Propósito y Tono del Autor', description: 'Afirmación 2: Reconoce intenciones comunicativas, tono y relaciona fragmentos del texto.', icon: 'record_voice_over', content: '' },
                { id: 'cr_mod_5', title: 'Módulo 5: Argumentos y Falacias', description: 'Afirmación 3: Analiza argumentos, evalúa su solidez y detecta razonamientos engañosos.', icon: 'gavel', content: '' },
                { id: 'cr_mod_6', title: 'Módulo 6: Sesgos y Lectura Crítica', description: 'Afirmación 3: Identifica prejuicios, estrategias retóricas y toma posición con evidencia.', icon: 'fact_check', content: '' }
            ] },
        'sociales': { name: 'Sociales', color: '#fbbf24', icon: 'public', bgGradient: 'linear-gradient(145deg, #451a03 0%, #78350f 100%)', description: 'Comprende la historia, geografía, economía y constitución de Colombia.', modules: [
                { id: 'cs_mod_1', title: 'Módulo 1: Historia de Colombia', description: 'Desde la Independencia hasta el siglo XXI: procesos clave.', icon: 'history_edu', content: '' },
                { id: 'cs_mod_2', title: 'Módulo 2: Geografía y Medio Ambiente', description: 'Regiones naturales, problemáticas ambientales y ordenamiento territorial.', icon: 'landscape', content: '' },
                { id: 'cs_mod_3', title: 'Módulo 3: Constitución y Ciudadanía', description: 'Derechos fundamentales, mecanismos de participación y estructura del Estado.', icon: 'account_balance', content: '' },
                { id: 'cs_mod_4', title: 'Módulo 4: Economía y Sociedad', description: 'Modelos económicos, globalización, desigualdad y políticas públicas.', icon: 'show_chart', content: '' },
                { id: 'cs_mod_5', title: 'Módulo 5: Análisis de Perspectivas y Sesgos', description: 'Identifica prejuicios, discursos e intereses de actores en conflicto.', icon: 'psychology', content: '' }
            ] },
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
        'ingles': { name: 'Inglés', color: '#0ea5e9', icon: 'translate', bgGradient: 'linear-gradient(145deg, #0c1929 0%, #0c4a6e 100%)', description: 'Domina el vocabulario, avisos públicos, conversaciones, gramática y comprensión lectora en inglés.', modules: [
                { id: 'en_mod_1', title: 'Módulo 1: Vocabulary & Definitions', description: 'Asociación de palabras y descripciones cotidianas (Parte 1 ICFES).', icon: 'search', content: '' },
                { id: 'en_mod_2', title: 'Módulo 2: Signboards & Pragmatics', description: 'Identificación del lugar e intención de avisos en contexto (Parte 2 ICFES).', icon: 'info', content: '' },
                { id: 'en_mod_3', title: 'Módulo 3: Short Conversations', description: 'Completado de diálogos cotidianos y pragmáticos (Parte 3 ICFES).', icon: 'forum', content: '' },
                { id: 'en_mod_4', title: 'Módulo 4: Grammar in Context', description: 'Uso de conectores, tiempos verbales y preposiciones (Parte 4 y 7 ICFES).', icon: 'spellcheck', content: '' },
                { id: 'en_mod_5', title: 'Módulo 5: Reading Comprehension', description: 'Comprensión literal, inferencial y de intenciones del autor (Parte 5 y 6 ICFES).', icon: 'chrome_reader_mode', content: '' },
                { id: 'en_mod_6', title: 'Módulo 6: Exam Simulation & Strategies', description: 'Simulacro contrarreloj, técnicas de descarte y manejo de distractores.', icon: 'psychology', content: '' }
            ] }
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
                left: 42px;
                top: 0;
                bottom: 0;
                width: 3px;
                background: linear-gradient(to bottom, 
                    rgba(var(--path-color-rgb), 0.05), 
                    var(--path-color) 15%, 
                    var(--path-color) 85%, 
                    rgba(var(--path-color-rgb), 0.05)
                );
                box-shadow: 0 0 8px rgba(var(--path-color-rgb), 0.3);
                opacity: 0.6;
                z-index: 0;
            }
            .learning-path-item {
                display: flex;
                align-items: flex-start;
                position: relative;
                margin-bottom: 32px;
                z-index: 1;
                gap: 28px;
            }
            .learning-path-node-connector {
                width: 44px;
                height: 44px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                z-index: 2;
            }
            .learning-path-node-pulse {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: var(--path-color);
                opacity: 0.08;
                transform: scale(1.1);
                transition: transform 0.4s ease, opacity 0.4s ease;
                box-shadow: 0 0 15px var(--path-color);
            }
            .learning-path-item:hover .learning-path-node-pulse {
                transform: scale(1.5);
                opacity: 0.25;
            }
            .learning-path-node-number {
                width: 34px;
                height: 34px;
                border-radius: 50%;
                background: #0b0f19;
                border: 2.5px solid var(--path-color);
                color: white;
                font-size: 14px;
                font-weight: 800;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3;
                box-shadow: 0 0 15px rgba(var(--path-color-rgb), 0.25);
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .learning-path-item:hover .learning-path-node-number {
                background: var(--path-color);
                color: #0f172a;
                transform: scale(1.15);
                box-shadow: 0 0 20px var(--path-color);
            }
            .module-card-premium {
                flex-grow: 1;
                background: rgba(15, 23, 42, 0.35);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.03);
                border-left: 4px solid rgba(var(--path-color-rgb), 0.2);
                border-radius: 24px;
                padding: 24px 32px;
                cursor: pointer;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                gap: 28px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);
            }
            .module-card-premium:hover {
                transform: translateY(-5px);
                border-color: rgba(var(--path-color-rgb), 0.25);
                border-left-color: var(--path-color);
                background: rgba(15, 23, 42, 0.55);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45), 0 0 30px rgba(var(--path-color-rgb), 0.18);
            }
            .module-icon-box {
                width: 60px;
                height: 60px;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                box-shadow: 0 8px 24px rgba(0,0,0,0.35);
                flex-shrink: 0;
            }
            .learning-path-item:hover .module-icon-box {
                transform: rotate(-6deg) scale(1.1);
                box-shadow: 0 10px 25px rgba(var(--path-color-rgb), 0.3);
            }
            .module-title-dynamic {
                transition: color 0.3s ease;
            }
            .module-card-premium:hover .module-title-dynamic {
                color: var(--path-color);
            }
            .module-tag-premium {
                font-size: 10px;
                font-weight: 800;
                padding: 4px 12px;
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.03);
                color: #94a3b8;
                border: 1px solid rgba(255, 255, 255, 0.05);
                display: inline-block;
                transition: all 0.3s ease;
                letter-spacing: 0.03em;
            }
            .learning-path-item:hover .module-tag-premium {
                color: var(--path-color);
                border-color: rgba(var(--path-color-rgb), 0.2);
                background: rgba(var(--path-color-rgb), 0.05);
            }
            
            @media (max-width: 640px) {
                .learning-path-line {
                    left: 26px;
                }
                .learning-path-item {
                    gap: 12px;
                }
                .learning-path-node-connector {
                    width: 30px;
                    height: 30px;
                }
                .learning-path-node-number {
                    width: 24px;
                    height: 24px;
                    font-size: 10px;
                }
                .module-card-premium {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 16px;
                    padding: 20px;
                }
                .module-icon-box {
                    width: 48px;
                    height: 48px;
                }
                .module-card-premium > .w-10 {
                    align-self: flex-end;
                    margin-top: -12px;
                }
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

        const rgbColor = this.hexToRgb(data.color);

        // Configurar variables CSS para el tema
        document.documentElement.style.setProperty('--path-color', data.color);
        document.documentElement.style.setProperty('--path-color-rgb', rgbColor);
        
        titleHeader.textContent = `Academia: ${data.name}`;
        titleHeader.style.color = data.color;

        const bannerImg = {
            'matematicas': 'img/math_banner.png',
            'lectura_critica': 'img/reading_banner.png',
            'sociales': 'img/socials_banner.png',
            'naturales': 'img/science_banner.png',
            'ingles': 'img/english_banner.png'
        }[subjectId] || 'img/student_hero.png';

        heroContainer.innerHTML = `
            <div class="relative rounded-[32px] py-14 px-8 mt-6 overflow-hidden border border-white/5 shadow-2xl">
                <!-- Background image with gradient mask -->
                <div class="absolute inset-0 z-0">
                    <img src="${bannerImg}" class="w-full h-full object-cover opacity-25" alt="${data.name} Banner">
                    <div class="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/40 via-[#0b0f19]/80 to-[#0b0f19]"></div>
                </div>
                
                <div class="relative z-10 flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 backdrop-blur-md border" 
                          style="background: rgba(${rgbColor}, 0.2); border-color: rgba(${rgbColor}, 0.3); color: ${data.color}; box-shadow: 0 15px 35px rgba(${rgbColor}, 0.25);">
                        <span class="material-icons-round" style="font-size: 42px;">${data.icon || 'book'}</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-black tracking-tight text-white mb-4" style="text-shadow: 0 2px 20px rgba(0,0,0,0.6)">${data.name}</h1>
                    <p class="max-w-xl text-base text-slate-300 leading-relaxed font-light">
                        ${data.description || 'Domina cada competencia con nuestra ruta de aprendizaje estructurada.'}
                    </p>
                </div>
            </div>
        `;

        modulesList.className = "learning-path-container max-w-4xl mx-auto px-4 mt-12 pb-24";
        modulesList.innerHTML = `
            <div class="learning-path-line" style="--path-color: ${data.color}"></div>
            ${data.modules.map((mod, index) => {
                const isLastModule = index === data.modules.length - 1;
                const estTime = isLastModule ? '90 Min' : '45 Min';
                const xpReward = isLastModule ? '300 XP' : '120 XP';
                const typeBadge = isLastModule ? '🔥 SIMULACRO' : '📖 CLASE';
                return `
                <div class="learning-path-item group" style="--path-color: ${data.color}; --path-color-rgb: ${rgbColor};">
                    <!-- Timeline Connector Node -->
                    <div class="learning-path-node-connector">
                        <div class="learning-path-node-pulse"></div>
                        <div class="learning-path-node-number">${index + 1}</div>
                    </div>
                    
                    <!-- Module card -->
                    <div onclick="StudyModules.openModule(\'${subjectId}\', \'${mod.id}\')" 
                         class="module-card-premium">
                        
                        <div class="module-icon-box" style="background: linear-gradient(135deg, ${data.color}15, ${data.color}35); color: ${data.color}; border: 1px solid ${data.color}25;">
                            <span class="material-icons-round text-3xl">${mod.icon || 'star'}</span>
                        </div>
                        
                        <div class="flex-grow">
                            <div class="flex flex-wrap items-center gap-3 mb-2">
                                <h4 class="text-xl font-bold text-white module-title-dynamic leading-tight">${mod.title}</h4>
                            </div>
                            <p class="text-slate-400 text-xs mb-4 leading-relaxed max-w-2xl">${mod.description}</p>
                            <div class="flex flex-wrap gap-2">
                                <span class="module-tag-premium" style="--tag-color: ${data.color}">${typeBadge}</span>
                                <span class="module-tag-premium" style="--tag-color: ${data.color}">⏱️ ${estTime}</span>
                                <span class="module-tag-premium" style="--tag-color: ${data.color}">💎 +${xpReward}</span>
                                <span class="module-tag-premium" style="--tag-color: ${data.color}">🧠 ESTRATEGIA</span>
                            </div>
                        </div>
                        
                        <div class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all shrink-0">
                            <span class="material-icons-round text-white text-sm">arrow_forward</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('')}
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

        if (['mat_mod_1', 'mat_mod_2', 'mat_mod_3', 'mat_mod_4', 'mat_mod_5', 'mat_mod_6', 'mat_mod_7', 'mat_mod_8', 
             'cn_mod_1', 'cn_mod_2', 'cn_mod_3', 'cn_mod_4', 'cn_mod_5', 'cn_mod_6',
             'cr_mod_1', 'cr_mod_2', 'cr_mod_3', 'cr_mod_4', 'cr_mod_5', 'cr_mod_6',
             'cs_mod_1', 'cs_mod_2', 'cs_mod_3', 'cs_mod_4', 'cs_mod_5',
             'en_mod_1', 'en_mod_2', 'en_mod_3', 'en_mod_4', 'en_mod_5', 'en_mod_6'].includes(moduleId)) {
            const renderFnName = {
                'mat_mod_1': 'renderMathModule1',
                'mat_mod_2': 'renderMathModule2',
                'mat_mod_3': 'renderMathModule3',
                'mat_mod_4': 'renderMathModule4',
                'mat_mod_5': 'renderMathModule5',
                'mat_mod_6': 'renderMathModule6',
                'mat_mod_7': 'renderMathModule7',
                'mat_mod_8': 'renderMathModule8',
                'cn_mod_1': 'renderCNModule1',
                'cn_mod_2': 'renderCNModule2',
                'cn_mod_3': 'renderCNModule3',
                'cn_mod_4': 'renderCNModule4',
                'cn_mod_5': 'renderCNModule5',
                'cn_mod_6': 'renderCNModule6',
                'cr_mod_1': 'renderLCModule1',
                'cr_mod_2': 'renderLCModule2',
                'cr_mod_3': 'renderLCModule3',
                'cr_mod_4': 'renderLCModule4',
                'cr_mod_5': 'renderLCModule5',
                'cr_mod_6': 'renderLCModule6',
                'cs_mod_1': 'renderCSModule1',
                'cs_mod_2': 'renderCSModule2',
                'cs_mod_3': 'renderCSModule3',
                'cs_mod_4': 'renderCSModule4',
                'cs_mod_5': 'renderCSModule5',
                'en_mod_1': 'renderENModule1',
                'en_mod_2': 'renderENModule2',
                'en_mod_3': 'renderENModule3',
                'en_mod_4': 'renderENModule4',
                'en_mod_5': 'renderENModule5',
                'en_mod_6': 'renderENModule6'
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
            // Execute any <script> tags inside the content (innerHTML doesn't run them)
            container.querySelectorAll('script').forEach(function(s) {
                var ns = document.createElement('script');
                ns.textContent = s.textContent;
                s.parentNode.replaceChild(ns, s);
            });
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
