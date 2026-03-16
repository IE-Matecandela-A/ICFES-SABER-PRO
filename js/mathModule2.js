(function() {
    console.log("mathModule2.js: Iniciando carga...");
    const React = window.React;
    const { useState, useEffect, useMemo, useCallback } = React;

    // Standard Icon component using Material Icons
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { 
        className: `material-icons-round ${className}`, 
        style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } 
      }, name)
    );

    // Component wrappers for the icons used in the module
    const Calculator = (props) => React.createElement(Icon, { name: "calculate", ...props });
    const Shapes = (props) => React.createElement(Icon, { name: "category", ...props });
    const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
    const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
    const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
    const ArrowDown = (props) => React.createElement(Icon, { name: "arrow_downward", ...props });
    const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
    const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
    const Sigma = (props) => React.createElement(Icon, { name: "functions", ...props });
    const Percent = (props) => React.createElement(Icon, { name: "percent", ...props });
    const Dices = (props) => React.createElement(Icon, { name: "casino", ...props });
    const Scale = (props) => React.createElement(Icon, { name: "balance", ...props });
    const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });

    function ModuloFormulacion() {
  const [activeTab, setActiveTab] = useState('introduccion');
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Banco de Preguntas - Formulación y Ejecución
  const questions = [
    {
      type: "Geometría",
      question: "Para pintar la fachada de esta casa, se necesita calcular su área total. Si el techo es un triángulo y la base un rectángulo, ¿cuál es el modelo correcto para hallar el área?",
      visual: (
        <div className="relative h-48 w-full max-w-sm mx-auto mb-8 mt-6 flex justify-center items-end pb-4">
          <svg className="w-48 h-48 overflow-visible" viewBox="0 0 100 100">
            {/* Base (Rectángulo) */}
            <rect x="20" y="50" width="60" height="50" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="50" y="75" fontSize="8" fill="#4f46e5" textAnchor="middle" fontWeight="bold">Área 1</text>
            <text x="50" y="108" fontSize="6" fill="#64748b" textAnchor="middle">Base = 6m</text>
            <text x="8" y="75" fontSize="6" fill="#64748b" textAnchor="middle" transform="rotate(-90 8,75)">Altura = 5m</text>
            
            {/* Techo (Triángulo) */}
            <polygon points="20,50 50,10 80,50" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2" />
            <text x="50" y="40" fontSize="8" fill="#7c3aed" textAnchor="middle" fontWeight="bold">Área 2</text>
            
            {/* Altura del techo (Línea punteada) */}
            <line x1="50" y1="10" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />
            <text x="55" y="32" fontSize="5" fill="#64748b">h = 4m</text>
          </svg>
        </div>
      ),
      options: [
        "(6 + 5) + (6 + 4) / 2",
        "(6 × 5) + (6 × 4) / 2",
        "(6 × 5) × (6 × 4)",
        "6 × 5 × 4"
      ],
      correct: 1,
      feedback: "¡Exacto! Formulaste el plan correcto dividiendo el problema: El área del rectángulo es Base × Altura (6×5) y se le suma el área del triángulo (Base × Altura) / 2, es decir (6×4)/2."
    },
    {
      type: "Álgebra",
      question: "Un plan de telefonía cobra una tarifa fija de $15.000 más $200 por cada minuto hablado. ¿Cuál es la ecuación que representa el costo total (C) por (m) minutos hablados?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center gap-4">
           <Calculator className="w-10 h-10 text-indigo-500" />
           <div className="text-left">
             <p className="text-sm font-bold text-slate-700">Tarifa Base: <span className="text-indigo-600">$15.000</span></p>
             <p className="text-sm font-bold text-slate-700">Por minuto (m): <span className="text-violet-600">+$200</span></p>
           </div>
        </div>
      ),
      options: [
        "C = 15.000 × m + 200",
        "C = 15.000 + 200",
        "C = 15.200 × m",
        "C = 15.000 + 200m"
      ],
      correct: 3,
      feedback: "¡Excelente traducción al lenguaje algebraico! Los $15.000 son una constante (no llevan variable), mientras que los $200 se multiplican por la cantidad variable de minutos (m)."
    },
    {
      type: "Probabilidad",
      question: "En una bolsa hay 3 canicas rojas y 2 azules. Si sacas una al azar, ¿cuál es la probabilidad de que sea roja?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-8 mt-6">
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 50">
            {/* Bolsa */}
            <path d="M 20 10 C 20 50, 80 50, 80 10 Z" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
            {/* Canicas Rojas */}
            <circle cx="35" cy="35" r="6" fill="#ef4444" />
            <circle cx="50" cy="40" r="6" fill="#ef4444" />
            <circle cx="65" cy="30" r="6" fill="#ef4444" />
            {/* Canicas Azules */}
            <circle cx="45" cy="25" r="6" fill="#3b82f6" />
            <circle cx="60" cy="20" r="6" fill="#3b82f6" />
          </svg>
        </div>
      ),
      options: [
        "3/2",
        "2/5",
        "3/5",
        "1/3"
      ],
      correct: 2,
      feedback: "¡Muy bien ejecutado! La fórmula de probabilidad es (Casos Favorables / Casos Totales). Hay 3 canicas rojas (favorables) y un total de 5 canicas en la bolsa. Por ende, 3/5."
    },
    {
      type: "Proporcionalidad",
      question: "Una receta para 4 personas requiere 200g de harina. ¿Qué operación debes ejecutar para saber cuánta harina se necesita para 10 personas?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center px-4">
             <div className="text-center">
               <div className="flex gap-1 justify-center mb-2"><CheckCircle className="w-4 h-4 text-violet-500 fill-violet-500"/><CheckCircle className="w-4 h-4 text-violet-500 fill-violet-500"/><CheckCircle className="w-4 h-4 text-violet-500 fill-violet-500"/><CheckCircle className="w-4 h-4 text-violet-500 fill-violet-500"/></div>
               <span className="font-bold text-slate-700">4 Personas</span>
               <p className="text-sm text-slate-500">200g Harina</p>
             </div>
             <ArrowRight className="w-6 h-6 text-slate-300" />
             <div className="text-center">
               <div className="text-violet-500 font-bold text-lg mb-1">10 Personas</div>
               <p className="text-sm font-bold text-indigo-600">¿X gramos?</p>
             </div>
          </div>
        </div>
      ),
      options: [
        "(200 ÷ 10) × 4",
        "(200 ÷ 4) × 10",
        "200 + 6",
        "200 × 4 × 10"
      ],
      correct: 1,
      feedback: "¡Perfecto! Aplicaste la regla de tres o reducción a la unidad: Divides 200 entre 4 para saber cuánto come una persona (50g), y lo multiplicas por 10."
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
    const percentage = score / questions.length;
    if (percentage === 1) return { title: "¡Estratega Maestro!", desc: "Tienes una habilidad excepcional para modelar situaciones matemáticas y ejecutar los cálculos sin errores." };
    if (percentage >= 0.5) return { title: "¡Buen Análisis!", desc: "Lograste formular varios problemas con éxito. Repasa los pasos de modelado geométrico y algebraico para alcanzar la perfección." };
    return { title: "¡Sigue Entrenando!", desc: "Formular problemas requiere práctica. Vuelve a la sección de Teoría y repasa cómo traducir el lenguaje cotidiano a matemáticas." };
  };

  const resultData = getResultMessage();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-indigo-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] overflow-hidden border border-white">
        
        {/* Header - Tema Índigo/Violeta */}
        <header className="relative bg-[#0B1120] p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none">
             <div style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }} className="w-40 h-40 border-2 border-indigo-300 rounded-2xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                <Brain className="w-5 h-5 text-indigo-400" />
                <span className="text-indigo-300 font-semibold tracking-widest text-xs uppercase">Módulo de Competencia 2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                Formulación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Ejecución</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Evalúa la capacidad para diseñar estrategias, crear modelos matemáticos y ejecutar cálculos precisos paso a paso para resolver problemas.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] transform rotate-3">
               <Calculator className="w-10 h-10 text-white" />
            </div>
          </div>
        </header>

        {/* Navegación */}
        <nav className="px-6 md:px-10 pt-8 pb-4">
          <div className="flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar">
            {[
              { id: 'introduccion', icon: Brain, label: 'Introducción' },
              { id: 'teoria', icon: Shapes, label: 'Modelos y Estrategias' },
              { id: 'practica', icon: CheckCircle, label: 'Taller Práctico' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white text-indigo-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-indigo-500' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="p-6 md:px-10 md:pb-10 md:pt-4">
          
          {/* SECCIÓN: INTRODUCCIÓN */}
          {activeTab === 'introduccion' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">De los datos a la acción</h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    En el módulo anterior aprendiste a extraer información. Ahora, el reto es mayor: debes usar esos datos para <strong className="font-semibold text-indigo-700">diseñar un plan</strong> y calcular una solución. Esto es lo que evalúa verdaderamente tus matemáticas.
                  </p>
                  
                  <div className="bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-violet-500 rounded-l-2xl"></div>
                    <h3 className="font-bold text-slate-800 mb-4 text-lg">Habilidades clave de este módulo:</h3>
                    <ul className="space-y-4">
                      {[
                        "Traducir problemas del mundo real a lenguaje matemático.",
                        "Seleccionar la fórmula o algoritmo adecuado.",
                        "Ejecutar operaciones matemáticas sin equivocaciones lógicas."
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
                            <ArrowRight className="w-3 h-3 text-indigo-600 group-hover:text-white" />
                          </div>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Arte Isométrico Matemático */}
                <div className="bg-gradient-to-b from-slate-50 to-indigo-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden">
                  <div className="relative w-full h-72 flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <div 
                      className="relative w-40 h-40 transition-transform duration-1000 ease-out cursor-default"
                      style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }}
                    >
                      <div className="absolute inset-0 bg-indigo-900 shadow-[0_40px_60px_rgba(79,70,229,0.3)]" style={{ transform: 'translateZ(-1px)' }}></div>
                      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-600 to-violet-500 origin-bottom flex items-center justify-center border-t border-white/20" style={{ transform: 'rotateX(-90deg)' }}>
                         <Sigma className="w-8 h-8 text-white/50" />
                      </div>
                      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-violet-700 to-purple-600 origin-right flex items-center justify-center border-l border-white/20" style={{ transform: 'rotateY(-90deg)' }}>
                         <Percent className="w-8 h-8 text-white/50" />
                      </div>
                      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm border border-white flex items-center justify-center" style={{ transform: 'translateZ(80px)' }}>
                        <Calculator className="w-12 h-12 text-indigo-700 drop-shadow-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN: TEORÍA */}
          {activeTab === 'teoria' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10 text-center py-20">
              <Shapes className="w-20 h-20 text-indigo-200 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-800">Modelos y Estrategias</h2>
              <p className="text-slate-500 max-w-md mx-auto">Esta sección contiene la teoría detallada sobre cómo formular modelos matemáticos para resolver problemas complejos.</p>
            </div>
          )}

          {/* SECCIÓN: PRÁCTICA */}
          {activeTab === 'practica' && (
            <div className="animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto">
              {!showResults ? (
                <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                  <div className="mb-8 flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Desafío de: <span className="text-indigo-500">{questions[currentQuestion].type}</span>
                      </p>
                      <h4 className="text-3xl font-extrabold text-slate-800">Pregunta {currentQuestion + 1}</h4>
                    </div>
                    <span className="text-slate-400 font-medium">de {questions.length}</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-indigo-400 to-violet-500 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  <h3 className="text-xl font-medium text-slate-700 mb-6 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>

                  {questions[currentQuestion].visual && (
                    <div className="w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner">
                      {questions[currentQuestion].visual}
                    </div>
                  )}

                  <div className="space-y-4 mb-10">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                          hasAnswered
                            ? index === questions[currentQuestion].correct
                              ? 'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]'
                              : index === selectedAnswer
                                ? 'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80'
                                : 'bg-white border-slate-100 text-slate-400 opacity-50'
                            : 'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(79,70,229,0.05)] text-slate-600 hover:-translate-y-1'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            hasAnswered
                              ? index === questions[currentQuestion].correct
                                ? 'border-emerald-500 bg-emerald-500 text-white'
                                : index === selectedAnswer
                                  ? 'border-rose-400 bg-rose-400 text-white'
                                  : 'border-slate-200'
                              : 'border-slate-200'
                          }`}>
                            {hasAnswered && index === questions[currentQuestion].correct && <CheckCircle className="w-5 h-5" />}
                          </div>
                          <span className="font-medium text-[15px]">{option}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {hasAnswered && (
                    <div className={`p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
                      selectedAnswer === questions[currentQuestion].correct 
                        ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' 
                        : 'bg-rose-50 border border-rose-100 text-rose-800'
                    }`}>
                      <p className="font-semibold text-sm md:text-base">{questions[currentQuestion].feedback}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      disabled={!hasAnswered}
                      className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                        hasAnswered
                          ? 'bg-indigo-900 hover:bg-indigo-800 text-white shadow-[0_10px_20px_rgba(49,46,129,0.2)] hover:-translate-y-1'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {currentQuestion === questions.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Desafío'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500"></div>
                  
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-indigo-100 to-violet-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white">
                    <Award className="w-14 h-14 text-indigo-500" />
                  </div>
                  
                  <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">{resultData.title}</h2>
                  <p className="text-slate-500 mb-10 text-lg font-light max-w-md mx-auto">
                    {resultData.desc}
                  </p>
                  
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400 mb-2">
                      {score} <span className="text-3xl text-slate-300 font-bold">/ {questions.length}</span>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Respuestas Correctas</p>
                  </div>

                  <button
                    onClick={resetQuiz}
                    className="bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(49,46,129,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Intentar de nuevo
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

    window.renderMathModule2 = (containerId) => {
        const container = document.getElementById(containerId);
        if (container && window.ReactDOM) {
            try {
                if (!window._reactRoots) window._reactRoots = {};
                if (!window._reactRoots[containerId]) {
                    window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
                }
                window._reactRoots[containerId].render(React.createElement(ModuloFormulacion));
                console.log("mathModule2.js: Renderizado exitoso.");
            } catch (e) {
                console.error("mathModule2.js Error:", e);
                container.innerHTML = `<div class="p-10 text-center" style="color: #f87171"><h2 class="text-xl font-bold">Error en renderizado: ${e.message}</h2></div>`;
            }
        } else {
            console.warn("mathModule2.js: No se encontró ReactDOM o el contenedor.");
        }
    };
})();
