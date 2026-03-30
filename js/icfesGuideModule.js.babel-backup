(function() {
    const { useState, useEffect } = React;

    // Adaptador de Iconos Estándar (Estándar Profe Chiguiro)
    const Icon = ({ name, className = "", style = {} }) => (
        React.createElement("span", { 
            className: `material-icons-round ${className}`, 
            style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } 
        }, name)
    );

    // Componente adapted from INFORMACION ICFES.txt
    function IcfesGuideComponent() {
        const [selectedTopic, setSelectedTopic] = useState(null);

        const icfesInfo = [
            {
                id: 1,
                title: "¿Qué es la prueba Saber 11?",
                category: "General",
                icon: "book",
                highlights: ["Evaluación Estatal", "Educación Media", "Requisito de Grado"],
                description: "Es una evaluación estandarizada que aplica el ICFES a los estudiantes que están por finalizar el grado undécimo. Su objetivo principal es comprobar el grado de desarrollo de las competencias de los estudiantes que están a punto de terminar la educación media.",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 2,
                title: "Tiempo y Sesiones",
                category: "Logística",
                icon: "schedule",
                highlights: ["2 Sesiones", "9 horas en total", "1 jornada completa"],
                description: "La prueba se divide en dos sesiones, ambas aplicadas el mismo día (generalmente un domingo). Cada sesión tiene una duración máxima de 4 horas y 30 minutos. Tendrás un receso al mediodía para almorzar y descansar antes de continuar con la segunda parte.",
                image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 3,
                title: "Estructura y Materias",
                category: "Contenido",
                icon: "psychology",
                highlights: ["5 Áreas Principales", "Lectura Crítica", "Matemáticas"],
                description: "El examen evalúa 5 áreas fundamentales: Matemáticas, Lectura Crítica, Ciencias Sociales y Ciudadanas, Ciencias Naturales e Inglés. Además, incluye un cuestionario socioeconómico que no tiene calificación, pero es de respuesta obligatoria.",
                image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 4,
                title: "Tipos de Preguntas",
                category: "Formato",
                icon: "fact_check",
                highlights: ["Selección Múltiple", "Única Respuesta", "278 Preguntas en total"],
                description: "Todas las preguntas de la prueba son de selección múltiple con única respuesta. Tendrás un enunciado (que puede incluir textos, gráficas o tablas) y cuatro opciones de respuesta (A, B, C, D), de las cuales solo una es la correcta. ¡Lee con mucha atención!",
                image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 5,
                title: "Sistema de Puntajes",
                category: "Calificación",
                icon: "track_changes",
                highlights: ["Puntaje Global: 0 a 500", "Por prueba: 0 a 100", "Niveles de desempeño"],
                description: "Recibirás un Puntaje Global que va de 0 a 500 puntos. Además, tendrás un puntaje específico por cada área evaluada (de 0 a 100) y un nivel de desempeño que indica qué tan bien dominas las competencias de cada materia (por ejemplo, en Inglés te clasificarán desde A- hasta B1+).",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 6,
                title: "Importancia para tu Futuro",
                category: "Beneficios",
                icon: "school",
                highlights: ["Ingreso a la Universidad", "Becas", "Medición personal"],
                description: "Tu resultado es fundamental para el ingreso a la mayoría de las universidades en Colombia. Además, un puntaje sobresaliente puede abrirte las puertas a becas estatales y reconocimientos de instituciones de educación superior privadas.",
                image: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 7,
                title: "¿Qué debes llevar?",
                category: "Reglas",
                icon: "edit",
                highlights: ["Lápiz Mirado #2", "Borrador y Tajalápiz", "Documento de Identidad"],
                description: "Es obligatorio presentar tu Documento de Identidad original. Debes llevar lápiz con mina negra número 2, borrador de nata y tajalápiz. Está estrictamente prohibido el uso de celulares, calculadoras o cualquier dispositivo electrónico.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800"
            },
            {
                id: 8,
                title: "Consejos clave",
                category: "Recomendaciones",
                icon: "tips_and_updates",
                highlights: ["Duerme bien", "Desayuno ligero", "Llega temprano"],
                description: "Descansa al menos 8 horas la noche anterior. Desayuna algo ligero pero nutritivo. Llega al sitio con al menos 30 minutos de anticipación. Si te sientes estresado, respira profundo.",
                image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
            }
        ];

        React.useEffect(() => {
            if (selectedTopic) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'unset';
            }
            return () => {
                document.body.style.overflow = 'unset';
            };
        }, [selectedTopic]);

        return (
            <div className="min-h-screen bg-[color:var(--color-bg)] text-[color:var(--color-text)] pb-20">
                {/* Header Section */}
                <header className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-text-muted) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                        <div className="bg-amber-500 text-indigo-900 p-4 rounded-3xl mb-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all">
                            <span className="material-icons-round" style={{ fontSize: '48px' }}>school</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-4">
                            Guía Interactiva <span className="text-amber-500">Saber 11°</span>
                        </h1>
                        <p className="text-lg md:text-xl text-[color:var(--color-text-muted)] max-w-2xl mx-auto font-medium leading-relaxed">
                            Domina el examen de Estado con información oficial, estructura clara y consejos estratégicos.
                        </p>
                    </div>
                </header>

                {/* Grid Section */}
                <main className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {icfesInfo.map((item) => (
                            <div 
                                key={item.id}
                                className="group relative bg-[color:var(--color-surface-2)]/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[color:var(--color-border)] hover:-translate-y-2"
                                onClick={() => setSelectedTopic(item)}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={item.image} className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-bg)] to-transparent opacity-80"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <span className="inline-block px-3 py-1 bg-amber-500 text-indigo-950 text-[10px] font-black rounded-full mb-2 uppercase tracking-wider">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-extrabold text-white leading-tight">{item.title}</h3>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-sm opacity-60 line-clamp-2 mb-4 leading-relaxed">{item.description}</p>
                                    <div className="flex items-center text-amber-500 text-sm font-black uppercase tracking-wider">
                                        <span className="material-icons-round mr-2" style={{ fontSize: '18px' }}>{item.icon}</span>
                                        <span>Explorar</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </main>

                {/* Modal View */}
                {selectedTopic && (
                    <div 
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-8 animate-fade-in"
                        onClick={() => setSelectedTopic(null)}
                    >
                        <div 
                            className="relative w-full max-w-4xl bg-[color:var(--color-surface)] rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                            onClick={e => e.stopPropagation()} 
                        >
                            <button 
                                className="absolute top-6 right-6 z-20 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all hover:rotate-90"
                                onClick={() => setSelectedTopic(null)}
                            >
                                <span className="material-icons-round">close</span>
                            </button>

                            <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                                <img src={selectedTopic.image} className="absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-indigo-900/40 mix-blend-multiply"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-indigo-950 p-6 rounded-full shadow-2xl hidden md:flex items-center justify-center">
                                    <span className="material-icons-round" style={{ fontSize: '40px' }}>{selectedTopic.icon}</span>
                                </div>
                            </div>

                            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto">
                                <span className="inline-block px-4 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-black tracking-widest uppercase mb-4 border border-indigo-500/20">
                                    {selectedTopic.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">{selectedTopic.title}</h2>
                                
                                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8">
                                    <h4 className="text-xs font-black text-amber-500 uppercase tracking-[2px] mb-4">Claves del Éxito</h4>
                                    <ul className="grid grid-cols-1 gap-3">
                                        {selectedTopic.highlights.map((h, i) => (
                                            <li key={i} className="flex items-center text-sm font-medium text-indigo-100">
                                                <span className="material-icons-round text-amber-500 mr-3" style={{ fontSize: '18px' }}>check_circle</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <h4 className="text-xs font-black text-amber-500 uppercase tracking-[2px] mb-4">Análisis Detallado</h4>
                                <p className="text-lg opacity-70 leading-relaxed font-medium">{selectedTopic.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Registro global con gestión de raíces (Estándar Profe Chiguiro)
    window.renderIcfesGuide = (containerId) => {
        console.log(`Renderizando Guía ICFES en: ${containerId}`);
        const container = document.getElementById(containerId);
        if (!container) return;
        
        if (window._reactRoots && window._reactRoots[containerId]) {
            const root = window._reactRoots[containerId];
            root.render(<IcfesGuideComponent />);
        } else {
            const root = ReactDOM.createRoot(container);
            if (!window._reactRoots) window._reactRoots = {};
            window._reactRoots[containerId] = root;
            root.render(<IcfesGuideComponent />);
        }
    };
})();
