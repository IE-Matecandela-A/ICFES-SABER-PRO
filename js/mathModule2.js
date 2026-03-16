(function() {
    const { React, ReactDOM, LucideReact } = window;
    const { useState, useEffect, useMemo } = React;
    const { 
        Brain, ArrowRight, ArrowDown, RefreshCw, Award, Search, Scale, 
        ShieldCheck, XCircle, CheckCircle, AlertTriangle, Lightbulb, 
        MessageSquare, TrendingUp, EyeOff, BookOpen, Calculator,
        Shapes, Sigma, Percent, Dices
    } = LucideReact || {};

    function ModuloFormulacion() {
  const [activeTab, setActiveTab] = useState('introduccion');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const questions = [
    {
      type: "Geometría",
      question: "Para pintar la fachada de esta casa, se necesita calcular su área total. Si el techo es un triángulo y la base un rectángulo, ¿cuál es el modelo correcto para hallar el área?",
      visual: (
        <div className="relative h-48 w-full max-w-sm mx-auto mb-8 mt-6 flex justify-center items-end pb-4">
          <svg className="w-48 h-48 overflow-visible" viewBox="0 0 100 100">
            <rect x="20" y="50" width="60" height="50" fill="#c7d2fe" stroke="#6366f1" strokeWidth="2" />
            <text x="50" y="75" fontSize="8" fill="#4f46e5" textAnchor="middle" fontWeight="bold">Área 1</text>
            <text x="50" y="108" fontSize="6" fill="#64748b" textAnchor="middle">Base = 6m</text>
            <text x="8" y="75" fontSize="6" fill="#64748b" textAnchor="middle" transform="rotate(-90 8,75)">Altura = 5m</text>
            <polygon points="20,50 50,10 80,50" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2" />
            <text x="50" y="40" fontSize="8" fill="#7c3aed" textAnchor="middle" fontWeight="bold">Área 2</text>
            <line x1="50" y1="10" x2="50" y2="50" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="2 2" />
            <text x="55" y="32" fontSize="5" fill="#64748b">h = 4m</text>
          </svg>
        </div>
      ),
      options: ["(6 + 5) + (6 + 4) / 2", "(6 × 5) + (6 × 4) / 2", "(6 × 5) × (6 × 4)", "6 × 5 × 4"],
      correct: 1,
      feedback: "¡Exacto! Formulaste el plan correcto dividiendo el problema: El área del rectángulo es Base × Altura (6×5) y se le suma el área del triángulo (Base × Altura) / 2."
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
      options: ["C = 15.000 × m + 200", "C = 15.000 + 200", "C = 15.200 × m", "C = 15.000 + 200m"],
      correct: 3,
      feedback: "¡Excelente traducción! Los $15.000 son una constante, mientras que los $200 se multiplican por la cantidad variable de minutos (m)."
    },
    {
      type: "Probabilidad",
      question: "En una bolsa hay 3 canicas rojas y 2 azules. Si sacas una al azar, ¿cuál es la probabilidad de que sea roja?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-8 mt-6">
          <svg className="w-full h-32 overflow-visible" viewBox="0 0 100 50">
            <path d="M 20 10 C 20 50, 80 50, 80 10 Z" fill="none" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="35" cy="35" r="6" fill="#ef4444" /><circle cx="50" cy="40" r="6" fill="#ef4444" /><circle cx="65" cy="30" r="6" fill="#ef4444" />
            <circle cx="45" cy="25" r="6" fill="#3b82f6" /><circle cx="60" cy="20" r="6" fill="#3b82f6" />
          </svg>
        </div>
      ),
      options: ["3/2", "2/5", "3/5", "1/3"],
      correct: 2,
      feedback: "¡Muy bien! (Casos Favorables / Casos Totales). Hay 3 rojas y 5 en total: 3/5."
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
               <p className="text-sm text-slate-500">200g</p>
             </div>
              <ArrowRight className="w-6 h-6 text-slate-300" />
             <div className="text-center">
               <div className="text-violet-500 font-bold text-lg mb-1">10 Personas</div>
               <p className="text-sm font-bold text-indigo-600">¿X gramos?</p>
             </div>
          </div>
        </div>
      ),
      options: ["(200 ÷ 10) × 4", "(200 ÷ 4) × 10", "200 + 6", "200 × 4 × 10"],
      correct: 1,
      feedback: "¡Perfecto! Divides 200 entre 4 para saber cuánto come una persona (50g), y lo multiplicas por 10."
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
    if (percentage === 1) return { title: "¡Estratega Maestro!", desc: "Habilidad excepcional para modelar situaciones matemáticas." };
    if (percentage >= 0.5) return { title: "¡Buen Análisis!", desc: "Lograste formular varios problemas con éxito." };
    return { title: "¡Sigue Entrenando!", desc: "Formular problemas requiere práctica." };
  };

  const resultData = getResultMessage();

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200">
        <header className="bg-[#0B1120] p-8 md:p-12 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Formulación y Ejecución</h1>
          <p className="text-slate-300 text-lg">Diseña estrategias y modelos para resolver problemas.</p>
        </header>

        <nav className="p-4 bg-slate-50 border-b">
          <div className="flex gap-2">
            {['introduccion', 'teoria', 'practica'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg font-bold capitalize ${activeTab === tab ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-200'}`}>
                {tab}
              </button>
            ))}
          </div>
        </nav>

        <main className="p-8">
          {activeTab === 'introduccion' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">De los datos a la acción</h2>
              <p className="text-slate-600 text-lg">Aprende a diseñar planes y ejecutar cálculos precisos.</p>
              <button onClick={() => setActiveTab('teoria')} className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold">Ver Teoría</button>
            </div>
          )}

          {activeTab === 'teoria' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-violet-50 rounded-2xl border border-violet-100"><h3 className="font-bold text-xl mb-2 text-violet-700">1. Modelar</h3><p className="text-slate-600 text-sm">Traducir problemas a formato matemático.</p></div>
                <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100"><h3 className="font-bold text-xl mb-2 text-amber-700">2. Diseñar</h3><p className="text-slate-600 text-sm">Seleccionar fórmulas y pasos correctos.</p></div>
                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100"><h3 className="font-bold text-xl mb-2 text-indigo-700">3. Ejecutar</h3><p className="text-slate-600 text-sm">Realizar cálculos sin errores.</p></div>
              </div>
            </div>
          )}

          {activeTab === 'practica' && (
            <div className="max-w-2xl mx-auto">
              {!showResults ? (
                <div className="space-y-8">
                  <div className="flex justify-between items-center"><h3 className="text-2xl font-bold">Pregunta {currentQuestion + 1}</h3><span className="text-slate-400">{currentQuestion + 1}/{questions.length}</span></div>
                  <p className="text-xl text-slate-700">{questions[currentQuestion].question}</p>
                  {questions[currentQuestion].visual}
                  <div className="space-y-3">
                    {questions[currentQuestion].options.map((opt, i) => (
                      <button key={i} onClick={() => handleAnswer(i)} disabled={hasAnswered} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${hasAnswered ? i === questions[currentQuestion].correct ? 'bg-emerald-50 border-emerald-500 text-emerald-800' : i === selectedAnswer ? 'bg-rose-50 border-rose-500 text-rose-800' : 'bg-white border-slate-100' : 'bg-white border-slate-200 hover:border-indigo-400'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  {hasAnswered && <div className="p-4 rounded-xl bg-slate-50 border font-bold text-slate-700">{questions[currentQuestion].feedback}</div>}
                  <button onClick={nextQuestion} disabled={!hasAnswered} className="w-full bg-indigo-600 text-white p-4 rounded-xl font-bold disabled:opacity-50">Siguiente</button>
                </div>
              ) : (
                <div className="text-center space-y-6 py-12">
                  <h2 className="text-4xl font-bold">{resultData.title}</h2>
                  <p className="text-xl text-slate-600">{resultData.desc}</p>
                  <div className="text-6xl font-black text-indigo-600">{score} / {questions.length}</div>
                  <button onClick={resetQuiz} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold">Reintentar</button>
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
        if (container) {
            const root = ReactDOM.createRoot(container);
            root.render(React.createElement(ModuloFormulacion));
        }
    };
})();