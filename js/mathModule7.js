(function() {
    const { useState, useEffect, useRef } = React;

    // Adaptador de Iconos Lucide a Material Icons
    const Icon = ({ name, className = "" }) => {
        const mapping = {
            'Activity': 'insights',
            'TrendingUp': 'trending_up',
            'GitMerge': 'call_split',
            'MinusSquare': 'remove_circle_outline',
            'CheckCircle': 'check_circle',
            'ArrowRight': 'arrow_forward',
            'Lightbulb': 'lightbulb',
            'Award': 'workspace_premium',
            'RefreshCw': 'refresh',
            'BookOpen': 'menu_book',
            'Calculator': 'calculate',
            'Target': 'track_changes',
            'Infinity': 'all_inclusive'
        };
        const iconName = mapping[name] || 'help_outline';
        return <span className={`material-icons-round ${className}`} style={{ fontSize: 'inherit' }}>{iconName}</span>;
    };

    function ModuloAlgebra() {
        const [activeTab, setActiveTab] = useState('introduccion');
        
        // Quiz State
        const [currentQuestion, setCurrentQuestion] = useState(0);
        const [score, setScore] = useState(0);
        const [showResults, setShowResults] = useState(false);
        const [selectedAnswer, setSelectedAnswer] = useState(null);
        const [hasAnswered, setHasAnswered] = useState(false);

        const themeConfig = {
            emerald: { bgLight: 'bg-emerald-50/50', text: 'text-emerald-600', badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700', grad: 'from-emerald-400 to-emerald-600' },
            teal: { bgLight: 'bg-teal-50/50', text: 'text-teal-600', badgeBg: 'bg-teal-100', badgeText: 'text-teal-700', grad: 'from-teal-400 to-teal-600' },
            lime: { bgLight: 'bg-lime-50/50', text: 'text-lime-600', badgeBg: 'bg-lime-100', badgeText: 'text-lime-700', grad: 'from-lime-400 to-lime-600' },
            green: { bgLight: 'bg-green-50/50', text: 'text-green-600', badgeBg: 'bg-green-100', badgeText: 'text-green-700', grad: 'from-green-400 to-green-600' },
        };

        const renderCasos = (casosArray, colorTheme) => {
            const theme = themeConfig[colorTheme];
            return (
                <div className="space-y-8 mt-8">
                    {casosArray.map((caso, index) => (
                        <div key={index} className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}`}></div>
                            <div className="p-6 md:px-8 md:pt-8 md:pb-6 border-b border-slate-100 bg-slate-50/30">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 ${theme.badgeBg} rounded-xl`}>
                                        <Icon name="Lightbulb" className={`w-5 h-5 ${theme.text}`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800">Caso Práctico {index + 1}: {caso.titulo}</h4>
                                </div>
                                <p className="text-slate-600 font-medium text-[15px] leading-relaxed italic border-l-4 border-slate-300 pl-4 ml-1 py-1">
                                    "{caso.situacion}"
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
                                <div className="p-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs`}>1</span>
                                        <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Analizar Lógica</h5>
                                    </div>
                                    <div className="text-sm text-slate-600 leading-relaxed">{caso.analisis}</div>
                                </div>
                                <div className="p-6 hover:bg-slate-50/50 transition-colors">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs`}>2</span>
                                        <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Despejar</h5>
                                    </div>
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner">
                                        {caso.calculo}
                                    </div>
                                </div>
                                <div className={`p-6 ${theme.bgLight} flex flex-col justify-center`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className={`flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm`}>3</span>
                                        <h5 className={`font-bold ${theme.text} text-sm uppercase tracking-wide`}>Solución</h5>
                                    </div>
                                    <div className={`mt-2 p-4 rounded-xl bg-gradient-to-br ${theme.grad} text-center shadow-md`}>
                                        <span className="text-[15px] font-bold text-white tracking-wide">{caso.resultado}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        };

        const ejemplosEstrategia1 = [
            {
                titulo: "La tarifa del Taxi",
                situacion: "Un taxi cobra $4.000 de banderazo y $1.000 por kilómetro. ¿Función que representa el costo?",
                analisis: "Es una función lineal y = mx + b. b es el fijo inicial, m es el variable.",
                calculo: <div className="text-xs font-mono font-bold text-emerald-600">y = 1.000x + 4.000</div>,
                resultado: "y = 1000x + 4000"
            },
            {
                titulo: "Encontrar la Recta",
                situacion: "Cruza Y en +5 y baja. ¿Ecuación?",
                analisis: "b=+5. Baja = pendiente negativa (-).",
                calculo: <div className="text-xs font-mono font-bold text-emerald-600">y = -2x + 5</div>,
                resultado: "Opción: y = -2x + 5"
            },
            {
                titulo: "Depreciación",
                situacion: "Auto de $50M pierde $5M/año. ¿Cuándo vale $30M?",
                analisis: "30 = 50 - 5x -> 5x = 20 -> x = 4.",
                calculo: <div className="text-xs font-mono">30 = 50 - 5x <br/> x = 4</div>,
                resultado: "Año 4"
            }
        ];

        const ejemplosEstrategia2 = [
            {
                titulo: "El Vuelo del Balón",
                situacion: "y = -x² + 4x. ¿Altura máxima?",
                analisis: "Vértice: x = -b / (2a). a = -1, b = 4.",
                calculo: <div className="text-xs font-mono">x = -4 / -2 = 2</div>,
                resultado: "x = 2"
            },
            {
                titulo: "Impacto al suelo",
                situacion: "y = -x² + 4x. ¿Cuándo toca suelo?",
                analisis: "Suelo es y = 0. x(-x + 4) = 0.",
                calculo: <div className="text-xs font-mono">x = 0 o x = 4</div>,
                resultado: "x = 4"
            },
            {
                titulo: "Identificar Parábolas",
                situacion: "Forma de 'U' que cruza Y en -3.",
                analisis: "U = x² positiva. Cruce en -3 = constante c.",
                calculo: <div className="text-xs font-mono font-bold text-teal-600">y = x² - 3</div>,
                resultado: "y = x² - 3"
            }
        ];

        const ejemplosEstrategia3 = [
            {
                titulo: "Cruce de planes",
                situacion: "Plan A: y=2x+10. Plan B: y=3x. ¿Cuándo igualan?",
                analisis: "Igualamos: 2x + 10 = 3x -> x = 10.",
                calculo: <div className="text-xs font-mono">2x + 10 = 3x <br/> x = 10</div>,
                resultado: "x = 10"
            },
            {
                titulo: "Traducción a 2x2",
                situacion: "2 panes y 1 jugo = 5.000. 3 panes y 1 jugo = 7.000.",
                analisis: "p = pan, j = jugo. Traducimos enunciados.",
                calculo: <div className="text-xs font-mono">2p + j = 5000 <br/> 3p + j = 7000</div>,
                resultado: "Sistema: 2p+j=5000; 3p+j=7000"
            }
        ];

        const ejemplosEstrategia4 = [
            {
                titulo: "Regla de Inversión",
                situacion: "-3x > 12. ¿Rango?",
                analisis: "Dividir por negativo INVIERTE el signo.",
                calculo: <div className="text-xs font-mono">x < 12 / -3 <br/> x < -4</div>,
                resultado: "x < -4"
            },
            {
                titulo: "Límites de Presupuesto",
                situacion: "Máximo $50.000. Regalo $20.000 + chocolates c a $3.000.",
                analisis: "20.000 + 3.000c ≤ 50.000.",
                calculo: <div className="text-xs font-mono">3.000c ≤ 30.000 <br/> c ≤ 10</div>,
                resultado: "Máximo 10 chocolates"
            }
        ];

        const questions = [
            {
                type: "Funciones Lineales",
                question: "Paga $20.000 fijos y $50 por mensaje (x). ¿Gráfica?",
                visual: (
                    <div className="flex justify-center gap-8 py-4">
                        <div className="text-center">
                            <svg className="w-24 h-24" viewBox="0 0 100 100">
                                <line x1="10" y1="90" x2="10" y2="10" stroke="#94a3b8" strokeWidth="2" />
                                <line x1="10" y1="90" x2="90" y2="90" stroke="#94a3b8" strokeWidth="2" />
                                <line x1="10" y1="40" x2="80" y2="10" stroke="#10b981" strokeWidth="3" />
                                <text x="2" y="45" fontSize="8" fill="#047857">20k</text>
                            </svg>
                            <p className="text-[10px] mt-1 font-bold">Opción A</p>
                        </div>
                        <div className="text-center">
                            <svg className="w-24 h-24" viewBox="0 0 100 100">
                                <line x1="10" y1="90" x2="10" y2="10" stroke="#94a3b8" strokeWidth="2" />
                                <line x1="10" y1="90" x2="90" y2="90" stroke="#94a3b8" strokeWidth="2" />
                                <line x1="10" y1="90" x2="80" y2="10" stroke="#ef4444" strokeWidth="3" />
                                <text x="2" y="95" fontSize="8" fill="#b91c1c">0</text>
                            </svg>
                            <p className="text-[10px] mt-1 font-bold">Opción B</p>
                        </div>
                    </div>
                ),
                options: ["Opción A", "Opción B", "Ninguna", "Ambas"],
                correct: 0,
                feedback: "El intercepto b=20.000 significa que no empieza en cero."
            },
            {
                type: "Vértice de Parábola",
                question: "Proyectil: y = -x² + 6x. ¿Cima?",
                visual: (
                    <div className="flex justify-center py-4">
                         <svg className="w-32 h-24" viewBox="0 0 100 80">
                            <line x1="10" y1="75" x2="90" y2="75" stroke="#94a3b8" strokeWidth="1" />
                            <path d="M 10 75 Q 50 10 90 75" fill="none" stroke="#14b8a6" strokeWidth="3" />
                            <line x1="50" y1="10" x2="50" y2="75" stroke="#14b8a6" strokeWidth="1" strokeDasharray="2 2" />
                            <text x="50" y="70" fontSize="10" fill="#0f766e" textAnchor="middle">x=?</text>
                         </svg>
                    </div>
                ),
                options: ["x = 6", "x = -6", "x = 3", "x = 0"],
                correct: 2,
                feedback: "x = -b / (2a) = -6 / -2 = 3."
            },
            {
                type: "Sistemas 2x2",
                question: "10 cabezas y 26 patas. ¿Vacas? (G=2p, V=4p)",
                visual: <div className="p-4 bg-slate-50 rounded-xl font-mono text-center text-xs">g + v = 10<br/>2g + 4v = 26</div>,
                options: ["10 vacas", "7 vacas", "3 vacas", "5 vacas"],
                correct: 2,
                feedback: "3 vacas (12 patas) + 7 gallinas (14 patas) = 26 patas."
            },
            {
                type: "Inversión de Signos",
                question: "-2x ≥ 10. ¿Solución?",
                visual: <div className="p-4 bg-emerald-50 rounded-xl font-mono text-center font-bold">-2x ≥ 10</div>,
                options: ["x ≥ -5", "x ≤ -5", "x ≥ 5", "x ≤ 5"],
                correct: 1,
                feedback: "Dividir por -2 invierte ≥ a ≤."
            },
            {
                type: "Identificación",
                question: "¿Parábola hacia abajo y cruza Y en +4?",
                visual: (
                    <div className="flex justify-center py-4">
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                             <line x1="50" y1="90" x2="50" y2="10" stroke="#94a3b8" />
                             <line x1="10" y1="70" x2="90" y2="70" stroke="#94a3b8" />
                             <path d="M 20 90 Q 50 10 80 90" fill="none" stroke="#0ea5e9" strokeWidth="3" />
                             <text x="55" y="30" fontSize="10" fill="#0284c7">+4</text>
                        </svg>
                    </div>
                ),
                options: ["y = x² + 4", "y = x² - 4", "y = -x² + 4", "y = -x² - 4"],
                correct: 2,
                feedback: "Negativo abre abajo, +4 es el corte vertical."
            },
            {
                type: "Rectas Paralelas",
                question: "y = 4x + 1 e y = 4x + 10. ¿Cruce?",
                visual: <div className="p-4 bg-slate-50 font-mono text-center text-xs">m1=4, m2=4</div>,
                options: ["x=4", "Eje Y", "Nunca", "Son la misma"],
                correct: 2,
                feedback: "Misma pendiente = paralelas = no hay solución."
            }
        ];

        const handleAnswer = (index) => {
            if (hasAnswered) return;
            setSelectedAnswer(index);
            setHasAnswered(true);
            if (index === questions[currentQuestion].correct) setScore(score + 1);
        };

        const nextQuestion = () => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setHasAnswered(false);
            } else {
                setShowResults(true);
            }
        };

        const resetQuiz = () => {
            setCurrentQuestion(0);
            setScore(0);
            setShowResults(false);
            setSelectedAnswer(null);
            setHasAnswered(false);
        };

        const getResultMessage = () => {
            const pct = score / questions.length;
            if (pct === 1) return { title: "¡Cerebro Analítico!", desc: "Dominas el lenguaje de las variables." };
            if (pct >= 0.6) return { title: "¡Buen Cálculo!", desc: "Entiendes las gráficas, cuidado con los signos." };
            return { title: "¡Sigue practicando!", desc: "Revisa las leyes de despeje." };
        };

        const resultData = getResultMessage();

        return (
            <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-2 md:p-6 lg:p-10">
                <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-100">
                    
                    {/* Header Premium */}
                    <header className="bg-slate-900 p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[100px] rounded-full"></div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-6">
                                <Icon name="Activity" className="text-emerald-400 text-sm" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-200">Módulo Final de Matemáticas</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black mb-4">Álgebra y <span className="text-emerald-400">Funciones</span></h1>
                            <p className="text-slate-400 max-w-xl text-sm md:text-base">Domina el comportamiento de las variables en gráficas lineales, parábolas y sistemas de ecuaciones.</p>
                        </div>
                    </header>

                    {/* Nav Tabs */}
                    <nav className="flex p-2 bg-slate-50 border-b border-slate-100 overflow-x-auto">
                        {[
                            { id: 'introduccion', label: 'Lógica', icon: 'Activity' },
                            { id: 'teoria', label: 'Formularios', icon: 'BookOpen' },
                            { id: 'practica', label: 'Simulador', icon: 'Target' }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap ${
                                    activeTab === tab.id ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-slate-200/50'
                                }`}
                            >
                                <Icon name={tab.icon} /> {tab.label}
                            </button>
                        ))}
                    </nav>

                    {/* Content Area */}
                    <main className="p-6 md:p-10">
                        {activeTab === 'introduccion' && (
                            <div className="animate-fadeIn">
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-black text-slate-800">El patrón de las letras</h2>
                                        <p className="text-slate-600 leading-relaxed">Álgebra no es sumar letras, es entender el <strong>patrón visual</strong> de la realidad. Una ecuación es simplemente el dibujo de un plan.</p>
                                        <div className="space-y-4">
                                            {[
                                                "Funciones Lineales (Líneas rectas).",
                                                "Cuadráticas (Trayectorias y parábolas).",
                                                "Sistemas 2x2 (Cruces de planes).",
                                                "Desigualdades (Rangos y límites)."
                                            ].map((txt, i) => (
                                                <div key={i} className="flex gap-3 items-center text-sm font-medium text-slate-700">
                                                    <Icon name="CheckCircle" className="text-emerald-500" /> {txt}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-emerald-50 rounded-3xl p-10 flex flex-col items-center">
                                        <Icon name="Infinity" className="text-7xl text-emerald-300 mb-6" />
                                        <p className="text-center italic text-slate-500 text-sm">"Las ecuaciones dibujan en tu mente lo que los números no pueden explicar."</p>
                                        <button onClick={() => setActiveTab('teoria')} className="mt-8 bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform flex items-center gap-2">
                                            Estudiar Teoría <Icon name="ArrowRight" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'teoria' && (
                            <div className="animate-fadeIn space-y-12">
                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon name="TrendingUp" className="text-2xl text-emerald-600" />
                                        <h3 className="text-2xl font-black">Funciones Lineales</h3>
                                    </div>
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
                                        <div className="bg-emerald-900 text-white font-mono text-xl p-4 rounded-xl text-center mb-6">y = mx + b</div>
                                        <div className="grid md:grid-cols-2 gap-8 text-sm">
                                            <div className="space-y-2">
                                                <p><strong>b (Intercepto):</strong> Punto de inicio en el eje Y.</p>
                                                <p><strong>m (Pendiente):</strong> Grado de inclinación (+ sube, - baja).</p>
                                            </div>
                                            <div className="flex justify-center border-l border-slate-100 pl-8">
                                                <svg className="w-40 h-32" viewBox="0 0 100 80">
                                                    <line x1="10" y1="70" x2="10" y2="10" stroke="#94a3b8" />
                                                    <line x1="10" y1="70" x2="90" y2="70" stroke="#94a3b8" />
                                                    <line x1="10" y1="50" x2="80" y2="15" stroke="#10b981" strokeWidth="2" />
                                                    <text x="0" y="55" fontSize="8" fill="#047857">b</text>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {renderCasos(ejemplosEstrategia1, 'emerald')}
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon name="Activity" className="text-2xl text-teal-600" />
                                        <h3 className="text-2xl font-black">Funciones Cuadráticas</h3>
                                    </div>
                                    <div className="bg-white border border-slate-200 rounded-2xl p-6 mb-6">
                                        <div className="bg-teal-900 text-white font-mono text-xl p-4 rounded-xl text-center mb-6">y = ax² + bx + c</div>
                                        <div className="grid md:grid-cols-2 gap-8 text-sm">
                                            <div className="space-y-3">
                                                <p><strong>Signo de 'a':</strong> (+) Sonrisa (U), (-) Montaña (Trayectoria).</p>
                                                <p><strong>Vértice:</strong> x = -b / (2a). Punto máximo o mínimo.</p>
                                            </div>
                                            <div className="flex justify-center border-l border-slate-100 pl-8">
                                                <svg className="w-40 h-32" viewBox="0 0 100 80">
                                                    <path d="M 20 70 Q 50 10 80 70" fill="none" stroke="#0f766e" strokeWidth="2" />
                                                    <circle cx="50" cy="40" r="3" fill="#0d9488" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    {renderCasos(ejemplosEstrategia2, 'teal')}
                                </section>

                                <section>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Icon name="GitMerge" className="text-2xl text-lime-600" />
                                        <h3 className="text-2xl font-black">Sistemas y Desigualdades</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-lime-50 rounded-2xl p-6 border border-lime-100">
                                            <h4 className="font-black mb-2 text-lime-800">Sistemas 2x2</h4>
                                            <p className="text-sm">Se busca el punto de cruce. Si son paralelas (m1=m2), no hay solución.</p>
                                        </div>
                                        <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
                                            <h4 className="font-black mb-2 text-green-800">Desigualdades</h4>
                                            <p className="text-sm">¡Regla de Oro! Si divides por negativo, el signo (< o >) gira al revés.</p>
                                        </div>
                                    </div>
                                    <div className="mt-8">
                                        {renderCasos(ejemplosEstrategia3, 'lime')}
                                        <div className="h-4"></div>
                                        {renderCasos(ejemplosEstrategia4, 'green')}
                                    </div>
                                </section>
                            </div>
                        )}

                        {activeTab === 'practica' && (
                            <div className="animate-fadeIn max-w-2xl mx-auto">
                                {!showResults ? (
                                    <div className="space-y-8">
                                        <div className="flex justify-between items-center text-sm font-bold text-slate-400">
                                            <span>Módulo 7: {questions[currentQuestion].type}</span>
                                            <span>{currentQuestion + 1} / {questions.length}</span>
                                        </div>
                                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-emerald-500 transition-all" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
                                        </div>
                                        <h3 className="text-xl font-bold">{questions[currentQuestion].question}</h3>
                                        <div className="bg-slate-50 rounded-3xl p-4 md:p-8 flex justify-center items-center">
                                            {questions[currentQuestion].visual}
                                        </div>
                                        <div className="grid gap-3">
                                            {questions[currentQuestion].options.map((opt, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleAnswer(i)}
                                                    className={`p-4 text-left rounded-xl border-2 transition-all font-medium ${
                                                        hasAnswered 
                                                            ? i === questions[currentQuestion].correct ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : i === selectedAnswer ? 'bg-rose-50 border-rose-400 text-rose-800' : 'bg-white border-slate-100 opacity-50'
                                                            : 'bg-white border-slate-100 hover:border-emerald-300 hover:shadow-md'
                                                    }`}
                                                >
                                                    {opt}
                                                </button>
                                            ))}
                                        </div>
                                        {hasAnswered && (
                                            <div className={`p-4 rounded-xl text-sm font-bold ${selectedAnswer === questions[currentQuestion].correct ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}`}>
                                                {questions[currentQuestion].feedback}
                                            </div>
                                        )}
                                        <div className="flex justify-end pt-4">
                                            <button 
                                                onClick={nextQuestion} 
                                                disabled={!hasAnswered} 
                                                className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${
                                                    hasAnswered ? 'bg-emerald-600 text-white shadow-lg lg:hover:-translate-y-1' : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                                }`}
                                            >
                                                {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'} <Icon name="ArrowRight" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-10 animate-scaleIn">
                                        <Icon name="Award" className="text-7xl text-emerald-500 mb-6" />
                                        <h2 className="text-4xl font-black mb-2">{resultData.title}</h2>
                                        <p className="text-slate-500 mb-10">{resultData.desc}</p>
                                        <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] inline-block mb-10">
                                            <span className="text-6xl font-black">{score}</span>
                                            <span className="text-2xl text-slate-500"> / {questions.length}</span>
                                        </div>
                                        <br/>
                                        <button onClick={resetQuiz} className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 mx-auto hover:bg-slate-800">
                                            <Icon name="RefreshCw" /> Reintentar Simulacro
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </main>
                </div>
            </div>
        );
    }

    // Registro global con gestión de raíces para React 18
    window.renderMathModule7 = (containerId) => {
        console.log(`Renderizando Módulo 7 en: ${containerId}`);
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // Limpiamos root previo si existe para evitar conflictos de React 18
        if (window._reactRoots && window._reactRoots[containerId]) {
            try {
                window._reactRoots[containerId].unmount();
                console.log("Root previo de Módulo 7 desmontado con éxito.");
            } catch (e) {
                console.warn("Error al desmontar root previo:", e);
            }
        }

        const root = ReactDOM.createRoot(container);
        root.render(<ModuloAlgebra />);
        window._reactRoots = window._reactRoots || {};
        window._reactRoots[containerId] = root;
    };
})();
