(function () {
  console.log("mathModule2.js: Iniciando carga completa...");
  const React = window.React;
  const { useState, useEffect, useMemo, useCallback } = React;

  // Standard Icon component using Material Icons
  const Icon = ({ name, className = "", style = {} }) =>
  React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
  }, name);


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
      visual: /*#__PURE__*/
      React.createElement("div", { className: "relative h-48 w-full max-w-sm mx-auto mb-8 mt-6 flex justify-center items-end pb-4" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-48 h-48 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/

      React.createElement("rect", { x: "20", y: "50", width: "60", height: "50", fill: "#c7d2fe", stroke: "#6366f1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "75", fontSize: "8", fill: "#4f46e5", textAnchor: "middle", fontWeight: "bold" }, "\xC1rea 1"), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "108", fontSize: "6", fill: "#64748b", textAnchor: "middle" }, "Base = 6m"), /*#__PURE__*/
      React.createElement("text", { x: "8", y: "75", fontSize: "6", fill: "#64748b", textAnchor: "middle", transform: "rotate(-90 8,75)" }, "Altura = 5m"), /*#__PURE__*/


      React.createElement("polygon", { points: "20,50 50,10 80,50", fill: "#ddd6fe", stroke: "#8b5cf6", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "40", fontSize: "8", fill: "#7c3aed", textAnchor: "middle", fontWeight: "bold" }, "\xC1rea 2"), /*#__PURE__*/


      React.createElement("line", { x1: "50", y1: "10", x2: "50", y2: "50", stroke: "#8b5cf6", strokeWidth: "1", strokeDasharray: "2 2" }), /*#__PURE__*/
      React.createElement("text", { x: "55", y: "32", fontSize: "5", fill: "#64748b" }, "h = 4m")
      )
      ),

      options: [
      "(6 + 5) + (6 + 4) / 2",
      "(6 × 5) + (6 × 4) / 2",
      "(6 × 5) × (6 × 4)",
      "6 × 5 × 4"],

      correct: 1,
      feedback: "¡Exacto! Formulaste el plan correcto dividiendo el problema: El área del rectángulo es Base × Altura (6×5) y se le suma el área del triángulo (Base × Altura) / 2, es decir (6×4)/2."
    },
    {
      type: "Álgebra",
      question: "Un plan de telefonía cobra una tarifa fija de $15.000 más $200 por cada minuto hablado. ¿Cuál es la ecuación que representa el costo total (C) por (m) minutos hablados?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-indigo-50 rounded-xl shadow-sm border border-indigo-100 flex items-center justify-center gap-4" }, /*#__PURE__*/
      React.createElement(Calculator, { className: "w-10 h-10 text-indigo-500" }), /*#__PURE__*/
      React.createElement("div", { className: "text-left" }, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-700" }, "Tarifa Base: ", /*#__PURE__*/React.createElement("span", { className: "text-indigo-600" }, "$15.000")), /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-700" }, "Por minuto (m): ", /*#__PURE__*/React.createElement("span", { className: "text-violet-600" }, "+$200"))
      )
      ),

      options: [
      "C = 15.000 × m + 200",
      "C = 15.000 + 200",
      "C = 15.200 × m",
      "C = 15.000 + 200m"],

      correct: 3,
      feedback: "¡Excelente traducción al lenguaje algebraico! Los $15.000 son una constante (no llevan variable), mientras que los $200 se multiplican por la cantidad variable de minutos (m)."
    },
    {
      type: "Probabilidad",
      question: "En una bolsa hay 3 canicas rojas y 2 azules. Si sacas una al azar, ¿cuál es la probabilidad de que sea roja?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-8 mt-6" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-full h-32 overflow-visible", viewBox: "0 0 100 50" }, /*#__PURE__*/

      React.createElement("path", { d: "M 20 10 C 20 50, 80 50, 80 10 Z", fill: "none", stroke: "#94a3b8", strokeWidth: "2", strokeDasharray: "4 4" }), /*#__PURE__*/

      React.createElement("circle", { cx: "35", cy: "35", r: "6", fill: "#ef4444" }), /*#__PURE__*/
      React.createElement("circle", { cx: "50", cy: "40", r: "6", fill: "#ef4444" }), /*#__PURE__*/
      React.createElement("circle", { cx: "65", cy: "30", r: "6", fill: "#ef4444" }), /*#__PURE__*/

      React.createElement("circle", { cx: "45", cy: "25", r: "6", fill: "#3b82f6" }), /*#__PURE__*/
      React.createElement("circle", { cx: "60", cy: "20", r: "6", fill: "#3b82f6" })
      )
      ),

      options: [
      "3/2",
      "2/5",
      "3/5",
      "1/3"],

      correct: 2,
      feedback: "¡Muy bien ejecutado! La fórmula de probabilidad es (Casos Favorables / Casos Totales). Hay 3 canicas rojas (favorables) y un total de 5 canicas en la bolsa. Por ende, 3/5."
    },
    {
      type: "Proporcionalidad",
      question: "Una receta para 4 personas requiere 200g de harina. ¿Qué operación debes ejecutar para saber cuánta harina se necesita para 10 personas?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center px-4" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "flex gap-1 justify-center mb-2" }, /*#__PURE__*/React.createElement(CheckCircle, { className: "w-4 h-4 text-violet-500 fill-violet-500" }), /*#__PURE__*/React.createElement(CheckCircle, { className: "w-4 h-4 text-violet-500 fill-violet-500" }), /*#__PURE__*/React.createElement(CheckCircle, { className: "w-4 h-4 text-violet-500 fill-violet-500" }), /*#__PURE__*/React.createElement(CheckCircle, { className: "w-4 h-4 text-violet-500 fill-violet-500" })), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-slate-700" }, "4 Personas"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-500" }, "200g Harina")
      ), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-6 h-6 text-slate-300" }), /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-violet-500 font-bold text-lg mb-1" }, "10 Personas"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-indigo-600" }, "\xBFX gramos?")
      )
      )
      ),

      options: [
      "(200 ÷ 10) × 4",
      "(200 ÷ 4) × 10",
      "200 + 6",
      "200 × 4 × 10"],

      correct: 1,
      feedback: "¡Perfecto! Aplicaste la regla de tres o reducción a la unidad: Divides 200 entre 4 para saber cuánto come una persona (50g), y lo multiplicas por 10."
    }];


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

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-indigo-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#0B1120] p-8 md:p-12 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" }, /*#__PURE__*/
      React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-indigo-300 rounded-2xl" })
      ), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(Brain, { className: "w-5 h-5 text-indigo-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-indigo-300 font-semibold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia 2")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" }, "Formulaci\xF3n y ", /*#__PURE__*/
      React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400" }, "Ejecuci\xF3n")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" }, "Eval\xFAa la capacidad para dise\xF1ar estrategias, crear modelos matem\xE1ticos y ejecutar c\xE1lculos precisos paso a paso para resolver problemas."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] transform rotate-3" }, /*#__PURE__*/
      React.createElement(Calculator, { className: "w-10 h-10 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: Brain, label: 'Introducción' },
      { id: 'teoria', icon: Shapes, label: 'Modelos y Estrategias' },
      { id: 'practica', icon: CheckCircle, label: 'Taller Práctico' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-indigo-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'}` }, /*#__PURE__*/


      React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? 'text-indigo-500' : ''}` }),
      tab.label
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("main", { className: "px-6 md:px-10 pb-12" },

      activeTab === 'introduccion' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" }, /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" }, /*#__PURE__*/

      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "De los datos a la acci\xF3n"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "En el m\xF3dulo anterior aprendiste a extraer informaci\xF3n. Ahora, el resto es mayor: debes usar esos datos para ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-indigo-700" }, "dise\xF1ar un plan"), " y calcular una soluci\xF3n. Esto es lo que eval\xFAa verdaderamente tus matem\xE1ticas."
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-violet-500 rounded-l-2xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "Habilidades clave de este m\xF3dulo:"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-4" },
      [
      "Traducir problemas del mundo real a lenguaje matemático.",
      "Seleccionar la fórmula o algoritmo adecuado.",
      "Ejecutar operaciones matemáticas sin equivocaciones lógicas."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-1 bg-indigo-100 p-1 rounded-full shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", null, text)
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-indigo-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/
      React.createElement("div", {
        className: "relative w-40 h-40 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' },
        onMouseEnter: (e) => e.currentTarget.style.transform = 'rotateX(50deg) rotateZ(-20deg) scale(1.1)',
        onMouseLeave: (e) => e.currentTarget.style.transform = 'rotateX(60deg) rotateZ(-45deg) scale(1)' }, /*#__PURE__*/

      React.createElement("div", { className: "absolute inset-0 bg-indigo-900 shadow-[0_40px_60px_rgba(79,70,229,0.3)]", style: { transform: 'translateZ(-1px)' } }), /*#__PURE__*/
      React.createElement("div", { className: "absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-600 to-violet-500 origin-bottom flex items-center justify-center border-t border-white/20", style: { transform: 'rotateX(-90deg)' } }, /*#__PURE__*/
      React.createElement(Sigma, { className: "w-8 h-8 text-white/50" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-violet-700 to-purple-600 origin-right flex items-center justify-center border-l border-white/20", style: { transform: 'rotateY(-90deg)' } }, /*#__PURE__*/
      React.createElement(Percent, { className: "w-8 h-8 text-white/50" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute inset-0 bg-white/30 backdrop-blur-sm border border-white flex items-center justify-center", style: { transform: 'translateZ(80px)' } }, /*#__PURE__*/
      React.createElement(Calculator, { className: "w-12 h-12 text-indigo-700 drop-shadow-md" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-10 -left-10 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce", style: { transform: 'translateZ(120px)', animationDuration: '2.5s' } }, "X"), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-10 -right-10 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce", style: { transform: 'translateZ(90px)', animationDuration: '3s', animationDelay: '0.5s' } }, "Y")
      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" }, "\"Un problema bien formulado ya est\xE1 resuelto a la mitad.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-6 bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(49,46,129,0.2)] active:scale-95 flex items-center gap-2" },
      "Estudiar Modelos ", /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-4 h-4" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" }, /*#__PURE__*/


      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
      [
      { icon: Brain, title: '1. Modelar', desc: 'Traducir el problema cotidiano a un formato matemático (ecuación, figura, gráfico).', color: 'text-violet-600', bg: 'bg-violet-100', border: 'border-violet-100' },
      { icon: Shapes, title: '2. Diseñar Plan', desc: 'Seleccionar las fórmulas o pasos correctos. ¿Qué operaciones necesito hacer primero?', color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-100' },
      { icon: Calculator, title: '3. Ejecutar', desc: 'Realizar los cálculos sin errores aritméticos, mostrando el despeje paso a paso.', color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-100' }].
      map((item, i) => /*#__PURE__*/
      React.createElement("div", { key: i, className: "bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300" }, /*#__PURE__*/
      React.createElement("div", { className: `w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm border ${item.border}` }, /*#__PURE__*/
      React.createElement(item.icon, { className: "w-7 h-7" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-extrabold mb-3 text-slate-800" }, item.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 text-sm leading-relaxed" }, item.desc)
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center mb-10" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Manual de Estrategias y Ejecuci\xF3n"), /*#__PURE__*/
      React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto mt-4 rounded-full" }), /*#__PURE__*/
      React.createElement("p", { className: "mt-4 text-slate-500 max-w-2xl mx-auto text-base" }, "Estos son los 4 modelos que m\xE1s se eval\xFAan. Observa detalladamente c\xF3mo se resuelve cada uno ", /*#__PURE__*/
      React.createElement("strong", { className: "text-indigo-600" }, "paso a paso"), "."
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-12" }, /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-indigo-100 rounded-lg" }, /*#__PURE__*/React.createElement(Sigma, { className: "w-5 h-5 text-indigo-600" })), "1. Traducci\xF3n Algebraica"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "space-y-3 bg-white p-5 rounded-xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3 border-b border-slate-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"El doble de un n\xFAmero\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md" }, "2x")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3 border-b border-slate-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"Disminuido en cinco\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-md" }, "- 5")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"Es igual a su mitad\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-md" }, "= x/2")
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-indigo-100 shadow-[0_4px_20px_rgba(79,70,229,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " Lee el texto parte por parte. Transforma cada frase en un s\xEDmbolo matem\xE1tico antes de intentar resolver. Identifica siempre cu\xE1l es tu valor desconocido (la variable ", /*#__PURE__*/React.createElement("strong", null, "X"), ")."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"Un plan de internet cobra $30.000 fijos al mes m\xE1s $2.000 por cada Giga extra. Si la factura lleg\xF3 por $44.000, \xBFcu\xE1ntas Gigas extra se consumieron?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600 mb-3" }, "Convertimos el texto a una ecuaci\xF3n identificando la variable desconocida ", /*#__PURE__*/React.createElement("strong", null, "(g = gigas)"), "."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 rounded-lg border border-violet-200 text-center shadow-sm" }, /*#__PURE__*/
      React.createElement("span", { className: "text-xs text-slate-500 block mb-1" }, "Total = Fijo + (Costo \xD7 gigas)"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-violet-800" }, "44.000 = 30.000 + 2.000g")
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600 mb-3" }, "Objetivo: Dejar la variable ", /*#__PURE__*/React.createElement("strong", null, "'g'"), " sola de un lado de la igualdad (Despejar)."), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Pasar los $30.000 fijos a restar.")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Pasar los $2.000 que multiplican a dividir."))
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "44.000 = ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "30.000"), " + 2.000g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "El 30.000 pasa a restar al otro lado"), /*#__PURE__*/


      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "44.000 ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "- 30.000"), " = ", /*#__PURE__*/React.createElement("strong", { className: "text-blue-500" }, "2.000"), "g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/


      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "14.000 = ", /*#__PURE__*/React.createElement("strong", { className: "text-blue-500" }, "2.000"), "g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "El 2.000 pasa a dividir"), /*#__PURE__*/


      React.createElement("div", { className: "bg-indigo-600 px-2 py-2 rounded text-center shadow-sm" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-white" }, "g = 14.000 / 2.000 = 7")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-violet-100 rounded-lg" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-5 h-5 text-violet-600" })), "2. Modelado Geom\xE9trico (Figuras Compuestas)"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-40 h-40 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("path", { d: "M 10 90 L 90 90 L 90 50 L 50 50 L 50 10 L 10 10 Z", fill: "#e0e7ff", stroke: "#6366f1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "50", y1: "50", x2: "10", y2: "50", stroke: "#8b5cf6", strokeWidth: "2", strokeDasharray: "4 4", className: "animate-pulse" }), /*#__PURE__*/
      React.createElement("text", { x: "30", y: "35", fontSize: "8", fill: "#4f46e5", fontWeight: "bold" }, "A1"), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "75", fontSize: "8", fill: "#4f46e5", fontWeight: "bold" }, "A2")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-xs text-slate-500 font-bold mt-4 tracking-widest uppercase" }, "Dividir para conquistar")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-violet-100 shadow-[0_4px_20px_rgba(139,92,246,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-violet-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " Rara vez te pedir\xE1n el \xE1rea de un cuadrado simple. El modelo consiste en ", /*#__PURE__*/React.createElement("strong", null, "trazar l\xEDneas imaginarias"), " para dividir la figura en cuadrados o tri\xE1ngulos conocidos, y sumar sus \xE1reas."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800 flex flex-col md:flex-row gap-6 items-center" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic flex-1" }, "\"Se desea sembrar pasto en un terreno rectangular de 10m x 8m, pero hay una piscina cuadrada de 3m de lado en su interior. \xBFCu\xE1l es el \xE1rea exacta a sembrar de pasto?\""), /*#__PURE__*/
      React.createElement("div", { className: "shrink-0 bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-36 h-28 overflow-visible", viewBox: "0 0 120 100" }, /*#__PURE__*/
      React.createElement("rect", { x: "10", y: "10", width: "100", height: "80", fill: "#dcfce7", stroke: "#22c55e", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "60", y: "102", fontSize: "8", fill: "#166534", textAnchor: "middle", fontWeight: "bold" }, "10m"), /*#__PURE__*/
      React.createElement("text", { x: "0", y: "50", fontSize: "8", fill: "#166534", textAnchor: "middle", transform: "rotate(-90 0,50)", fontWeight: "bold" }, "8m"), /*#__PURE__*/
      React.createElement("rect", { x: "60", y: "25", width: "30", height: "30", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "75", y: "42", fontSize: "6", fill: "#0369a1", textAnchor: "middle", fontWeight: "bold" }, "3m"), /*#__PURE__*/
      React.createElement("text", { x: "56", y: "40", fontSize: "6", fill: "#0369a1", textAnchor: "middle", transform: "rotate(-90 56,40)", fontWeight: "bold" }, "3m"), /*#__PURE__*/
      React.createElement("text", { x: "35", y: "52", fontSize: "8", fill: "#15803d", textAnchor: "middle", fontWeight: "bold" }, "PASTO")
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "No hay f\xF3rmula para un rect\xE1ngulo con un hueco. Hay que modelarlo como una resta de dos figuras conocidas."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 text-center rounded-lg border border-violet-200" }, /*#__PURE__*/
      React.createElement("span", { className: "text-xs font-bold text-violet-800" }, "\xC1rea Verde = \xC1.Rect\xE1ngulo - \xC1.Piscina")
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Calcular \xE1rea del rect\xE1ngulo (Base \xD7 Altura).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Calcular \xE1rea del cuadrado (Lado \xD7 Lado).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Restar el valor peque\xF1o del grande."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-indigo-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase" }, "Rect\xE1ngulo"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-1 text-[11px]" }, /*#__PURE__*/React.createElement("span", { className: "font-mono" }, "10\xD78"), /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400" }), /*#__PURE__*/React.createElement("span", { className: "font-mono font-bold" }, "80"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-indigo-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase" }, "Piscina"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-1 text-[11px]" }, /*#__PURE__*/React.createElement("span", { className: "font-mono" }, "3\xD73"), /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400" }), /*#__PURE__*/React.createElement("span", { className: "font-mono font-bold" }, "9"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "Restamos ambas \xE1reas:"), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-600 px-2 py-2 rounded text-center shadow-sm flex items-center justify-center gap-2 mt-1" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm text-white" }, "80 - 9 ="), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-amber-300" }, "71 m\xB2")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-amber-100 rounded-lg" }, /*#__PURE__*/React.createElement(Scale, { className: "w-5 h-5 text-amber-600" })), "3. Proporcionalidad y Regla de Tres"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "grid grid-cols-2 gap-4 text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-50 rounded-lg border border-amber-100" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Si 3 kilos cuestan"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-600" }, "$15.000")
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "text-slate-300" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-50 rounded-lg border border-amber-100" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Entonces 1 kilo"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-600" }, "$5.000")
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-100 rounded-lg border border-amber-200" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Por lo tanto 5 kilos"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-700" }, "$25.000")
      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-amber-100 shadow-[0_4px_20px_rgba(245,158,11,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " \xA1Reducci\xF3n a la unidad! Antes de hacer multiplicaciones cruzadas complejas, preg\xFAntate: \"\xBFCu\xE1nto vale 1 sola unidad?\". Al encontrar el valor unitario, multiplicarlo por lo que te pidan es facil\xEDsimo."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"Una f\xE1brica empaca 120 cajas en 3 horas. Si mantienen el mismo ritmo constante, \xBFcu\xE1ntas cajas empacar\xE1n en un turno completo de 8 horas?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Es un problema de proporci\xF3n directa: A m\xE1s horas trabajadas, mayor ser\xE1 el n\xFAmero de cajas empacadas.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Usaremos la ", /*#__PURE__*/React.createElement("strong", { className: "text-amber-700" }, "Reducci\xF3n a la unidad"), "."), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Dividir para saber cu\xE1ntas cajas hacen en ", /*#__PURE__*/React.createElement("strong", null, "1 sola hora"), ".")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Multiplicar ese resultado por 8 horas."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 font-bold uppercase tracking-wider mb-1" }, "Paso 1: Valor Unitario"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-indigo-100 flex items-center justify-center gap-2" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-600" }, "120 \xF7 3"), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-400" }), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs font-bold text-indigo-700" }, "40 cajas/hora")
      ), /*#__PURE__*/

      React.createElement("div", { className: "flex justify-center py-1" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/

      React.createElement("div", { className: "text-[10px] text-center text-slate-500 font-bold uppercase tracking-wider mb-1" }, "Paso 2: Multiplicar por 8"), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-600 p-2 rounded text-center shadow-sm flex items-center justify-center gap-2" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-indigo-100" }, "40 \xD7 8"), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-300" }), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-white" }, "320 cajas")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-rose-100 rounded-lg" }, /*#__PURE__*/React.createElement(Dices, { className: "w-5 h-5 text-rose-600" })), "4. Probabilidad Cl\xE1sica"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex justify-center items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "px-6 py-2 bg-rose-50 border-b-2 border-slate-800 rounded-t-lg font-bold text-rose-600" }, "Casos a mi favor"

      ), /*#__PURE__*/
      React.createElement("div", { className: "px-6 py-2 bg-slate-50 rounded-b-lg font-bold text-slate-600 border-x-2 border-b-2 border-slate-100" }, "Total de opciones"

      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " No te dejes confundir por porcentajes al inicio. Toda probabilidad empieza como una simple fracci\xF3n. Cuenta lo que te sirve, ponlo arriba. Cuenta absolutamente todo lo posible, ponlo abajo."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"En una ruleta de feria hay 2 casillas rojas, 3 azules y 1 verde. Si se gira una sola vez, \xBFcu\xE1l es la probabilidad de NO caer en una casilla azul?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Debemos identificar matem\xE1ticamente los dos valores de la fracci\xF3n de probabilidad."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 rounded-lg border border-violet-200 text-center font-bold text-xs text-violet-800 shadow-sm" }, "Prob = (Casos Favorables) / (Total)"

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Sumar todas las casillas para hallar el Total (Denominador).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Sumar solo las casillas rojas y verde para hallar los Favorables (Numerador).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Simplificar"), " la fracci\xF3n resultante."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col mt-auto gap-2" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center bg-white px-2 py-1.5 rounded border border-indigo-100 text-[10px]" }, /*#__PURE__*/
      React.createElement("span", { className: "text-slate-500 font-bold uppercase" }, "Abajo (Total):"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-slate-700" }, "2+3+1 = ", /*#__PURE__*/React.createElement("strong", null, "6"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center bg-white px-2 py-1.5 rounded border border-indigo-100 text-[10px]" }, /*#__PURE__*/
      React.createElement("span", { className: "text-slate-500 font-bold uppercase" }, "Arriba (A Favor):"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-slate-700" }, "2(rojas)+1(verde) = ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-600" }, "3"))
      ), /*#__PURE__*/

      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/

      React.createElement("div", { className: "flex items-center justify-center gap-3 bg-indigo-600 p-2 rounded shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center font-mono font-bold text-xs text-rose-200" }, /*#__PURE__*/
      React.createElement("span", { className: "border-b border-indigo-400 px-1" }, "3"), /*#__PURE__*/
      React.createElement("span", { className: "px-1 text-indigo-200" }, "6")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-300" }), /*#__PURE__*/
      React.createElement("span", { className: "text-[7px] text-indigo-200 uppercase tracking-widest mt-0.5" }, "Simplificar (\xF73)")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center font-mono font-bold text-sm text-white" }, /*#__PURE__*/
      React.createElement("span", { className: "border-b border-indigo-400 px-1" }, "1"), /*#__PURE__*/
      React.createElement("span", { className: "px-1" }, "2")
      )
      )
      )
      )
      )
      )
      )

      )
      )
      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }), /*#__PURE__*/

      React.createElement("div", { className: "mb-8 flex justify-between items-end" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Desaf\xEDo de: ", /*#__PURE__*/
      React.createElement("span", { className: "text-indigo-500" }, questions[currentQuestion].type)
      ), /*#__PURE__*/
      React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
      ), /*#__PURE__*/

      React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" }, /*#__PURE__*/
      React.createElement("div", {
        className: "bg-gradient-to-r from-indigo-400 to-violet-500 h-full transition-all duration-500 ease-out",
        style: { width: `${(currentQuestion + 1) / questions.length * 100}%` } }
      )
      ), /*#__PURE__*/

      React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" },
      questions[currentQuestion].question
      ),

      questions[currentQuestion].visual && /*#__PURE__*/
      React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner" },
      questions[currentQuestion].visual
      ), /*#__PURE__*/


      React.createElement("div", { className: "space-y-4 mb-10" },
      questions[currentQuestion].options.map((option, index) => /*#__PURE__*/
      React.createElement("button", {
        key: index,
        onClick: () => handleAnswer(index),
        disabled: hasAnswered,
        className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
        hasAnswered ?
        index === questions[currentQuestion].correct ?
        'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]' :
        index === selectedAnswer ?
        'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80' :
        'bg-white border-slate-100 text-slate-400 opacity-50' :
        'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(79,70,229,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/


      React.createElement("div", { className: "flex items-center gap-4" }, /*#__PURE__*/
      React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
        hasAnswered ?
        index === questions[currentQuestion].correct ?
        'border-emerald-500 bg-emerald-500 text-white' :
        index === selectedAnswer ?
        'border-rose-400 bg-rose-400 text-white' :
        'border-slate-200' :
        'border-slate-200'}` },

      hasAnswered && index === questions[currentQuestion].correct && /*#__PURE__*/React.createElement(CheckCircle, { className: "w-5 h-5" })
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-medium text-[15px]" }, option)
      )
      )
      )
      ),

      hasAnswered && /*#__PURE__*/
      React.createElement("div", { className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
        selectedAnswer === questions[currentQuestion].correct ?
        'bg-emerald-50 border border-emerald-100 text-emerald-800' :
        'bg-rose-50 border border-rose-100 text-rose-800'}` }, /*#__PURE__*/

      React.createElement("p", { className: "font-semibold text-sm md:text-base" }, questions[currentQuestion].feedback)
      ), /*#__PURE__*/


      React.createElement("div", { className: "flex justify-end" }, /*#__PURE__*/
      React.createElement("button", {
        onClick: nextQuestion,
        disabled: !hasAnswered,
        className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
        hasAnswered ?
        'bg-indigo-900 hover:bg-indigo-800 text-white shadow-[0_10px_20px_rgba(49,46,129,0.2)] hover:-translate-y-1' :
        'bg-slate-100 text-slate-400 cursor-not-allowed'}` },


      currentQuestion === questions.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Desafío', /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500" }), /*#__PURE__*/

      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-indigo-100 to-violet-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Award, { className: "w-14 h-14 text-indigo-500" })
      ), /*#__PURE__*/

      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" },
      resultData.desc
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400 mb-2" },
      score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Respuestas Correctas")
      ), /*#__PURE__*/

      React.createElement("button", {
        onClick: resetQuiz,
        className: "bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(49,46,129,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto" }, /*#__PURE__*/

      React.createElement(RefreshCw, { className: "w-5 h-5" }), "Intentar de nuevo"

      )
      )

      )


      )
      )
      ));

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