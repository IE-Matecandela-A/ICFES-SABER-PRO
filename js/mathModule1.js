// Debug log to confirm Babel script execution
console.log("Babel: mathModule1.js CARGADO correctamente");

const { useState, useEffect } = window.React;
console.log("Babel: React hooks extraídos, useState:", typeof useState);

function MathModule1() {
  const [activeTab, setActiveTab] = useState('introduccion');
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Material Icon Component Wrapper
  const Icon = ({ name, className = "" }) => (
    <span className={`material-icons-round ${className}`} style={{ fontSize: 'inherit', verticalAlign: 'middle' }}>{name}</span>
  );

  const questions = [
    {
      type: "extraer",
      question: "Observa el gráfico de barras sobre préstamos. ¿Cuántos libros del género 'Historia' se prestaron el mes pasado?",
      visual: (
        <div className="relative h-40 w-full max-w-sm mx-auto border-b-2 border-l-2 border-slate-300 mb-8 mt-6 ml-6">
          <div className="absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1">
            <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
          </div>
          <div className="absolute w-full border-t border-dashed border-slate-200 bottom-1/4 left-0 -z-10"></div>
          <div className="absolute w-full border-t border-dashed border-slate-200 bottom-2/4 left-0 -z-10"></div>
          <div className="absolute w-full border-t border-dashed border-slate-200 bottom-3/4 left-0 -z-10"></div>
          <div className="flex items-end justify-around h-full w-full px-2">
            <div className="flex flex-col items-center w-1/4 h-full justify-end group">
              <div className="w-10 bg-emerald-400 rounded-t-md shadow-sm" style={{ height: '37.5%' }}></div>
              <span className="text-[10px] font-semibold text-slate-600 absolute -bottom-6 text-center">Ficción</span>
            </div>
            <div className="flex flex-col items-center w-1/4 h-full justify-end group">
              <div className="w-10 bg-blue-500 rounded-t-md shadow-sm" style={{ height: '75%' }}></div>
              <span className="text-[10px] font-semibold text-slate-600 absolute -bottom-6 text-center">Historia</span>
            </div>
            <div className="flex flex-col items-center w-1/4 h-full justify-end group">
              <div className="w-10 bg-teal-400 rounded-t-md shadow-sm" style={{ height: '50%' }}></div>
              <span className="text-[10px] font-semibold text-slate-600 absolute -bottom-6 text-center">Clásica</span>
            </div>
          </div>
        </div>
      ),
      options: ["150 libros", "200 libros", "300 libros", "400 libros"],
      correct: 2,
      feedback: "¡Excelente! Ubicamos 'Historia' y cruzamos con el Eje Y (vertical) para obtener 300."
    },
    {
      type: "interpretar",
      question: "Analiza el gráfico de líneas. ¿En qué horario se registró la temperatura máxima?",
      visual: (
         <div className="relative h-40 w-full max-w-sm mx-auto border-b-2 border-l-2 border-slate-300 mb-8 mt-6 ml-6">
            <div className="absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1">
              <span>30°</span><span>20°</span><span>10°</span><span>0°</span>
            </div>
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
              <polyline points="0,80 100,50 200,10 300,40" fill="none" stroke="#ef4444" strokeWidth="4" />
              <circle cx="0" cy="80" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <circle cx="100" cy="50" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <circle cx="200" cy="10" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
              <circle cx="300" cy="40" r="5" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <div className="flex justify-between w-full absolute -bottom-6 text-[10px] font-semibold text-slate-600 px-1">
              <span>08:00</span><span>10:00</span><span>12:00</span><span>14:00</span>
            </div>
         </div>
      ),
      options: ["08:00", "10:00", "12:00", "14:00"],
      correct: 2,
      feedback: "¡Muy bien! El pico más alto corresponde a las 12:00 en el Eje X."
    },
    {
      type: "transformar",
      question: "Observa el gráfico circular. Si el ingreso total es de $2,000, ¿qué cantidad representa el sector 'Ahorro'?",
      visual: (
        <div className="flex justify-center items-center gap-6 mb-6 mt-4 p-4 bg-white/50 rounded-xl">
           <div className="w-24 h-24 rounded-full shadow-md border-4 border-white shrink-0" style={{ background: 'conic-gradient(#10b981 0% 50%, #3b82f6 50% 75%, #8b5cf6 75% 90%, #f59e0b 90% 100%)' }}></div>
           <ul className="text-[10px] space-y-1 font-medium text-slate-600">
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-emerald-500"></div>Vivienda (50%)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-blue-500"></div>Alimentos (25%)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-purple-500"></div>Transporte (15%)</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-sm bg-amber-500"></div>Ahorro (10%)</li>
           </ul>
        </div>
      ),
      options: ["$10", "$100", "$200", "$500"],
      correct: 2,
      feedback: "¡Correcto! El 10% de $2,000 es $200."
    },
    {
      type: "comprender",
      question: "Basado en la tabla, ¿cuál sustancia NO cambió de estado al ser calentada a 100°C?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="p-2 font-bold">Sustancia</th>
                <th className="p-2 font-bold text-center">A 20°C</th>
                <th className="p-2 font-bold text-center">A 100°C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100"><td className="p-2 font-medium">Alfa-1</td><td className="p-2 text-center">Sólido</td><td className="p-2 text-center">Líquido</td></tr>
              <tr className="border-b border-slate-100"><td className="p-2 font-medium">Beta-2</td><td className="p-2 text-center">Líquido</td><td className="p-2 text-center">Gas</td></tr>
              <tr><td className="p-2 font-medium font-bold text-indigo-600">Gamma-3</td><td className="p-2 text-center">Sólido</td><td className="p-2 text-center">Sólido</td></tr>
            </tbody>
          </table>
        </div>
      ),
      options: ["Sustancia Alfa-1", "Sustancia Beta-2", "Sustancia Gamma-3", "Todas cambiaron"],
      correct: 2,
      feedback: "¡Perfecto! Gamma-3 permaneció sólida en ambos casos."
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

  const getResultMessage = () => {
    const percentage = score / questions.length;
    if (percentage === 1) return { title: "¡Excelente!", desc: "Dominas perfectamente el análisis de datos." };
    if (percentage >= 0.5) return { title: "¡Bien!", desc: "Vas por buen camino." };
    return { title: "Sigue intentando", desc: "La práctica hace al maestro." };
  };

  const resultData = getResultMessage();

  return (
    <div className="w-full text-slate-800 animate-in fade-in duration-700">
      <div className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50">
        
        {/* Header */}
        <header className="relative bg-slate-900 p-8">
          <div className="relative z-10">
            <h1 className="text-3xl font-black text-white">
              Interpretación y <span className="text-emerald-400">Representación</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1">Competencia Matemática de Transformación de Datos.</p>
          </div>
        </header>

        {/* Tabs */}
        <nav className="p-4 bg-slate-100/50 flex gap-2 overflow-x-auto">
          {['introduccion', 'teoria', 'practica'].map((id) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-6 py-2 rounded-xl font-bold text-xs transition-all ${
                activeTab === id ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-500 hover:bg-white/50'
              }`}
            >
              {id.toUpperCase()}
            </button>
          ))}
        </nav>

        {/* Content */}
        <main className="p-6 min-h-[400px]">
          {activeTab === 'introduccion' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
              <h2 className="text-2xl font-bold">Bienvenido</h2>
              <p className="text-slate-600 leading-relaxed">Este módulo se enfoca en tu capacidad para extraer y convertir información de diferentes formatos como tablas, gráficas de barras, líneas y círculos.</p>
              <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex items-center gap-4">
                 <Icon name="tips_and_updates" className="text-4xl text-emerald-500" />
                 <p className="text-emerald-800 font-medium">Aprenderás a interpretar tendencias y comparar magnitudes rápidamente.</p>
              </div>
            </div>
          )}

          {activeTab === 'teoria' && (
            <div className="space-y-8 animate-in slide-in-from-bottom-2 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                   <h3 className="font-bold flex items-center gap-2 mb-2"><Icon name="show_chart" className="text-blue-500" /> Líneas</h3>
                   <p className="text-xs text-slate-500 italic">Ideales para ver cómo cambia algo en el tiempo.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                   <h3 className="font-bold flex items-center gap-2 mb-2"><Icon name="pie_chart" className="text-purple-500" /> Círculos</h3>
                   <p className="text-xs text-slate-500 italic">Comparan partes respecto a un todo (100%).</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practica' && (
            <div className="max-w-xl mx-auto py-4">
              {!showResults ? (
                <div className="space-y-6">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                    <p className="text-sm font-bold text-slate-800 mb-4">{questions[currentQuestion].question}</p>
                    {questions[currentQuestion].visual && (
                       <div className="p-4 bg-white rounded-xl shadow-inner mb-4 overflow-hidden">
                          {questions[currentQuestion].visual}
                       </div>
                    )}
                    <div className="grid gap-2">
                       {questions[currentQuestion].options.map((opt, i) => (
                         <button
                           key={i}
                           onClick={() => handleAnswer(i)}
                           disabled={hasAnswered}
                           className={`p-3 rounded-lg border-2 text-left text-sm font-bold transition-all ${
                             hasAnswered
                               ? i === questions[currentQuestion].correct ? 'bg-emerald-500 border-emerald-500 text-white' : i === selectedAnswer ? 'bg-rose-100 border-rose-300' : 'opacity-40'
                               : 'bg-white border-slate-100 hover:border-emerald-300'
                           }`}
                         >
                           {opt}
                         </button>
                       ))}
                    </div>
                  </div>
                  {hasAnswered && (
                    <div className="p-4 bg-slate-900 rounded-xl text-white">
                       <p className="text-xs">{questions[currentQuestion].feedback}</p>
                       <button onClick={nextQuestion} className="w-full mt-4 bg-emerald-500 py-2 rounded-lg font-bold">SIGUIENTE</button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center p-10 bg-emerald-50 rounded-3xl">
                   <h2 className="text-3xl font-black mb-2">{resultData.title}</h2>
                   <p className="text-6xl font-black text-emerald-600 mb-6">{score} / {questions.length}</p>
                   <button onClick={() => { setShowResults(false); setCurrentQuestion(0); setScore(0); setHasAnswered(false); }} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">REINTENTAR</button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Global Assignment
window.renderMathModule1 = (containerId) => {
  console.log("React Render Engine: Ejecutando en", containerId);
  console.log("React Render Engine: ReactDOM disponible?", typeof window.ReactDOM);
  const container = document.getElementById(containerId);
  if (container && window.ReactDOM) {
    try {
      const root = window.ReactDOM.createRoot(container);
      root.render(<MathModule1 />);
      console.log("React Render Engine: Renderizado exitoso.");
    } catch (e) {
      console.error("React Render Engine Error:", e);
    }
  } else {
    console.warn("React Render Engine: No se encontró ReactDOM o el contenedor.");
  }
};

console.log("mathModule1.js: Listo para ser usado. renderMathModule1 disponible:", typeof window.renderMathModule1);
