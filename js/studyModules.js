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
                    content: '<div class="p-10 text-center"><span class="material-icons-round text-5xl text-white/20 mb-4">construction</span><h2 class="text-2xl font-bold text-white">Contenido en Construcción</h2><p class="text-white/60">Estamos preparando el mejor material para ti.</p></div>'
                },
                {
                    id: 'mat_mod_2',
                    title: 'Módulo 2: Formulación y ejecución',
                    description: 'Plantea y ejecuta estrategias para resolver problemas.',
                    content: '<div class="p-10 text-center"><span class="material-icons-round text-5xl text-white/20 mb-4">construction</span><h2 class="text-2xl font-bold text-white">Contenido en Construcción</h2><p class="text-white/60">Estamos preparando el mejor material para ti.</p></div>'
                },
                {
                    id: 'mat_mod_3',
                    title: 'Módulo 3: Argumentación',
                    description: 'Valida o refuta conclusiones basadas en evidencias matemáticas.',
                    content: '<div class="p-10 text-center"><span class="material-icons-round text-5xl text-white/20 mb-4">construction</span><h2 class="text-2xl font-bold text-white">Contenido en Construcción</h2><p class="text-white/60">Estamos preparando el mejor material para ti.</p></div>'
                }
            ]
        },
        'lectura_critica': { name: 'Lectura Crítica', color: '#f43f5e', modules: [] },
        'sociales': { name: 'Sociales', color: '#fbbf24', modules: [] },
        'naturales': { name: 'C. Naturales', color: '#10b981', modules: [] },
        'ingles': { name: 'Inglés', color: '#0ea5e9', modules: [] }
    },

    init() {
        console.log("StudyModules initialized");
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

        titleHeader.textContent = `Módulos: ${data.name}`;
        titleHeader.style.color = data.color;

        heroContainer.innerHTML = `
            <div class="config-hero-icon" style="background: ${data.color}20; color: ${data.color};">
                <span class="material-icons-round">${data.icon || 'book'}</span>
            </div>
            <h1 class="config-title">${data.name}</h1>
            <p class="config-subtitle">${data.description || 'Domina los temas clave evaluados por el ICFES.'}</p>
        `;

        modulesList.innerHTML = data.modules.map((mod, index) => `
            <div onclick="StudyModules.openModule('${subjectId}', '${mod.id}')" 
                 class="relative p-6 rounded-2xl bg-white/5 border border-white/10 cursor-pointer group hover:bg-white/10 transition-all">
                <div class="flex items-center gap-6">
                    <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg"
                         style="background: ${data.color};">
                        ${index + 1}
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">${mod.title}</h4>
                        <p class="text-white/60 text-sm line-clamp-1">${mod.description}</p>
                    </div>
                    <span class="material-icons-round text-white/30 group-hover:text-white transition-colors">chevron_right</span>
                </div>
            </div>
        `).join('');
    },

    openModule(subjectId, moduleId) {
        const subject = this.subjectsData[subjectId];
        const module = subject.modules.find(m => m.id === moduleId);
        if (!module) return;

        const containerId = 'module-content-root';
        const container = document.getElementById(containerId);
        const headerTitle = document.getElementById('module-content-header-title');

        headerTitle.textContent = module.title;
        headerTitle.style.color = subject.color;
        
        container.innerHTML = '';

        if (moduleId === 'mat_mod_1') {
            console.log("StudyModules: Iniciando Módulo React...");
            console.log("StudyModules: window.renderMathModule1 disponible?", typeof window.renderMathModule1);
            console.log("StudyModules: window.ReactDOM disponible?", typeof window.ReactDOM);
            
            const tryRender = () => {
                if (window.renderMathModule1) {
                    console.log("StudyModules: Ejecutando renderMathModule1...");
                    window.renderMathModule1(containerId);
                } else {
                    console.warn("StudyModules: Esperando a Babel/React... Intentos: ", (this.attempts || 0) + 1);
                    this.attempts = (this.attempts || 0) + 1;
                    if (this.attempts > 10) {
                        container.innerHTML = `<div class="p-10 text-center text-white"><h2 class="text-xl font-bold text-red-400">Error: No se pudo cargar el módulo</h2><p class="text-white/60">Por favor actualiza la página e intenta de nuevo</p></div>`;
                        return;
                    }
                    container.innerHTML = `<div class="p-10 text-center text-white"><span class="material-icons-round text-5xl rotate-anim mb-4">sync</span><h2 class="text-xl font-bold">Cargando Módulo Inteligente...</h2></div>`;
                    setTimeout(tryRender, 500);
                }
            };
            tryRender();
        } else {
            container.innerHTML = `<div class="bg-white/5 rounded-[32px] border border-white/10 p-10">${module.content}</div>`;
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
