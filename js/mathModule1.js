// mathModule1.js - Módulo 1 de Matemáticas: Interpretación y Representación
console.log("Babel: mathModule1.js CARGADO correctamente");

const { useState, useEffect } = window.React;
console.log("Babel: React hooks extraídos, useState:", typeof useState);

// Icon component wrapper for Material Icons
const Icon = ({ name, className = "", style = {} }) => (
  React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
);

function MathModule1() {
  const [activeTab, setActiveTab] = useState('introduccion');
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Contenido del Quiz (6 Preguntas)
  const questions = [
    {
      type: "extraer",
      question: "Observa el gráfico de barras sobre préstamos. ¿Cuántos libros del género 'Historia' se prestaron el mes pasado?",
      visual: (
        React.createElement("div", { className: "relative h-40 w-full max-w-sm mx-auto border-b-2 border-l-2 border-slate-300 mb-8 mt-6 ml-6" },
          React.createElement("div", { className: "absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1" },
            React.createElement("span", null, "400"), React.createElement("span", null, "300"), React.createElement("span", null, "200"), React.createElement("span", null, "100"), React.createElement("span", null, "0")
          ),
          React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-1/4 left-0 -z-10" }),
          React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-2/4 left-0 -z-10" }),
          React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-3/4 left-0 -z-10" }),
          React.createElement("div", { className: "flex items-end justify-around h-full w-full px-2" },
            React.createElement("div", { className: "flex flex-col items-center w-1/3 h-full justify-end group" },
              React.createElement("div", { className: "w-10 bg-emerald-400 rounded-t-md shadow-sm", style: { height: '37.5%' } }),
              React.createElement("span", { className: "text-[11px] font-semibold text-slate-600 absolute -bottom-6 text-center" }, "C. Ficción")
            ),
            React.createElement("div", { className: "flex flex-col items-center w-1/3 h-full justify-end group" },
              React.createElement("div", { className: "w-10 bg-blue-500 rounded-t-md shadow-sm", style: { height: '75%' } }),
              React.createElement("span", { className: "text-[11px] font-semibold text-slate-600 absolute -bottom-6 text-center" }, "Historia")
            ),
            React.createElement("div", { className: "flex flex-col items-center w-1/3 h-full justify-end group" },
              React.createElement("div", { className: "w-10 bg-teal-400 rounded-t-md shadow-sm", style: { height: '50%' } }),
              React.createElement("span", { className: "text-[11px] font-semibold text-slate-600 absolute -bottom-6 text-center" }, "Clásica")
            )
          )
        )
      ),
      options: ["150 libros", "200 libros", "300 libros", "400 libros"],
      correct: 2,
      feedback: "¡Excelente! Extraer información relevante implica ubicar la categoría 'Historia' en el Eje X (horizontal) y cruzarla con su altura en el Eje Y (vertical) para obtener 300."
    },
    {
      type: "interpretar",
      question: "Analiza el gráfico de líneas. ¿En qué horario se registró la temperatura máxima?",
      visual: (
        React.createElement("div", { className: "relative h-40 w-full max-w-sm mx-auto border-b-2 border-l-2 border-slate-300 mb-8 mt-6 ml-6" },
          React.createElement("div", { className: "absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1" },
            React.createElement("span", null, "30°"), React.createElement("span", null, "20°"), React.createElement("span", null, "10°"), React.createElement("span", null, "0°")
          ),
          React.createElement("svg", { className: "w-full h-full overflow-visible", viewBox: "0 0 300 100", preserveAspectRatio: "none" },
            React.createElement("polyline", { points: "0,80 100,50 200,10 300,40", fill: "none", stroke: "#ef4444", strokeWidth: "4" }),
            React.createElement("circle", { cx: "0", cy: "80", r: "5", fill: "#ef4444", stroke: "#ffffff", strokeWidth: "2" }),
            React.createElement("circle", { cx: "100", cy: "50", r: "5", fill: "#ef4444", stroke: "#ffffff", strokeWidth: "2" }),
            React.createElement("circle", { cx: "200", cy: "10", r: "5", fill: "#ef4444", stroke: "#ffffff", strokeWidth: "2" }),
            React.createElement("circle", { cx: "300", cy: "40", r: "5", fill: "#ef4444", stroke: "#ffffff", strokeWidth: "2" })
          ),
          React.createElement("div", { className: "flex justify-between w-full absolute -bottom-6 text-[11px] font-semibold text-slate-600 px-1" },
            React.createElement("span", { className: "-ml-3" }, "08:00"), React.createElement("span", null, "10:00"), React.createElement("span", null, "12:00"), React.createElement("span", { className: "-mr-3" }, "14:00")
          )
        )
      ),
      options: ["08:00", "10:00", "12:00", "14:00"],
      correct: 2,
      feedback: "¡Muy bien! Interpretar gráficas de líneas implica encontrar el 'pico' más alto de la línea y ver a qué punto en la base (Eje X) corresponde. El pico está en las 12:00."
    },
    {
      type: "transformar",
      question: "Observa el gráfico circular. Si el ingreso total es de $2,000, ¿qué cantidad de dinero representa el sector 'Ahorro'?",
      visual: (
        React.createElement("div", { className: "flex justify-center items-center gap-6 mb-6 mt-4 p-4 bg-white/50 rounded-xl" },
          React.createElement("div", { className: "w-32 h-32 rounded-full shadow-md border-4 border-white shrink-0", style: { background: 'conic-gradient(#10b981 0% 50%, #3b82f6 50% 75%, #8b5cf6 75% 90%, #f59e0b 90% 100%)' } }),
          React.createElement("ul", { className: "text-xs space-y-2 font-medium text-slate-600" },
            React.createElement("li", { className: "flex items-center gap-2" }, React.createElement("div", { className: "w-3 h-3 rounded-sm bg-emerald-500" }), "Vivienda (50%)"),
            React.createElement("li", { className: "flex items-center gap-2" }, React.createElement("div", { className: "w-3 h-3 rounded-sm bg-blue-500" }), "Alimentos (25%)"),
            React.createElement("li", { className: "flex items-center gap-2" }, React.createElement("div", { className: "w-3 h-3 rounded-sm bg-purple-500" }), "Transporte (15%)"),
            React.createElement("li", { className: "flex items-center gap-2" }, React.createElement("div", { className: "w-3 h-3 rounded-sm bg-amber-500" }), "Ahorro (10%)")
          )
        )
      ),
      options: ["$10", "$100", "$200", "$500"],
      correct: 2,
      feedback: "¡Correcto! Transformar implica aplicar la proporción al total. Según la leyenda, el ahorro es el 10% del gráfico. El 10% de $2,000 es $200."
    },
    {
      type: "comprender",
      question: "Basado en la siguiente tabla de reacciones químicas, ¿cuál sustancia NO cambió de estado al ser calentada a 100°C?",
      visual: (
        React.createElement("div", { className: "w-full max-w-md mx-auto mb-6 mt-4 bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm" },
          React.createElement("table", { className: "w-full text-sm text-left" },
            React.createElement("thead", { className: "bg-slate-100 text-slate-700" },
              React.createElement("tr", null,
                React.createElement("th", { className: "p-3 font-bold" }, "Sustancia"),
                React.createElement("th", { className: "p-3 font-bold text-center" }, "A 20°C"),
                React.createElement("th", { className: "p-3 font-bold text-center" }, "A 100°C")
              )
            ),
            React.createElement("tbody", null,
              React.createElement("tr", { className: "border-b border-slate-100" },
                React.createElement("td", { className: "p-3 font-medium" }, "Alfa-1"),
                React.createElement("td", { className: "p-3 text-center" }, "Sólido"),
                React.createElement("td", { className: "p-3 text-center" }, "Líquido")
              ),
              React.createElement("tr", { className: "border-b border-slate-100" },
                React.createElement("td", { className: "p-3 font-medium" }, "Beta-2"),
                React.createElement("td", { className: "p-3 text-center" }, "Líquido"),
                React.createElement("td", { className: "p-3 text-center" }, "Gas")
              ),
              React.createElement("tr", null,
                React.createElement("td", { className: "p-3 font-medium" }, "Gamma-3"),
                React.createElement("td", { className: "p-3 text-center" }, "Sólido"),
                React.createElement("td", { className: "p-3 text-center" }, "Sólido")
              )
            )
          )
        )
      ),
      options: ["Sustancia Alfa-1", "Sustancia Beta-2", "Sustancia Gamma-3", "Todas cambiaron de estado"],
      correct: 2,
      feedback: "¡Perfecto! Al comprender la tabla y comparar la columna inicial (20°C) con la final (100°C), vemos que Gamma-3 permaneció sólida en ambos casos."
    },
    {
      type: "interpretar",
      question: "Este diagrama de dispersión muestra las 'Horas jugadas de videojuegos por semana' (Eje X) vs el 'Puntaje en el examen final' (Eje Y). ¿Qué interpretación es correcta?",
      visual: (
        React.createElement("div", { className: "relative h-40 w-full max-w-sm mx-auto mb-8 mt-6" },
          React.createElement("svg", { className: "w-full h-full overflow-visible", viewBox: "0 0 100 100" },
            React.createElement("polyline", { points: "10,10 10,90 90,90", fill: "none", stroke: "#94a3b8", strokeWidth: "2" }),
            React.createElement("text", { x: "50", y: "105", fontSize: "5", fill: "#64748b", textAnchor: "middle", fontWeight: "bold" }, "Horas de Videojuegos →"),
            React.createElement("text", { x: "-4", y: "50", fontSize: "5", fill: "#64748b", transform: "rotate(-90 -4,50)", textAnchor: "middle", fontWeight: "bold" }, "← Puntaje Examen"),
            [ [20, 20], [25, 30], [30, 25], [35, 40], [40, 35], [45, 50], [50, 45], [55, 60], [60, 55], [65, 70], [70, 65], [75, 80], [80, 75], [85, 90] ].map((point, i) => 
              React.createElement("circle", { key: i, cx: point[0], cy: point[1], r: "2", fill: "#8b5cf6" })
            )
          )
        )
      ),
      options: [
        "A mayor cantidad de horas de juego, mayor es el puntaje obtenido.",
        "Existe una correlación negativa: más horas de juego se asocian a un menor puntaje.",
        "Las horas de juego no afectan en absoluto el puntaje del examen.",
        "Todos los estudiantes aprobaron el examen sin importar cuánto jugaron."
      ],
      correct: 1,
      feedback: "¡Exacto! La 'nube' de puntos desciende de izquierda a derecha. Esto significa que a medida que avanza el Eje X (más juegos), disminuye el Eje Y (menos puntaje), creando una correlación negativa."
    },
    {
      type: "extraer",
      question: "Observa el pictograma de estudiantes inscritos en cursos extracurriculares. ¿Cuántos estudiantes están inscritos en 'Robótica'?",
      visual: (
        React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200" },
          React.createElement("div", { className: "text-center mb-4 pb-2 border-b border-slate-100" },
            React.createElement("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1" }, "Convención"),
            React.createElement("div", { className: "inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-md" },
              React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } }),
              React.createElement("span", { className: "text-xs font-bold text-slate-700" }, "= 10 Estudiantes")
            )
          ),
          React.createElement("div", { className: "space-y-3" },
            React.createElement("div", { className: "flex items-center gap-3" },
              React.createElement("span", { className: "w-16 text-xs font-bold text-slate-600" }, "Ajedrez"),
              React.createElement("div", { className: "flex gap-1" },
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } }),
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } })
              )
            ),
            React.createElement("div", { className: "flex items-center gap-3" },
              React.createElement("span", { className: "w-16 text-xs font-bold text-slate-600" }, "Robótica"),
              React.createElement("div", { className: "flex gap-1" },
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } }),
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } }),
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } }),
                React.createElement(Icon, { name: "star", className: "w-4 h-4 text-amber-500", style: { fill: '#f59e0b' } })
              )
            )
          )
        )
      ),
      options: ["4 estudiantes", "10 estudiantes", "40 estudiantes", "400 estudiantes"],
      correct: 2,
      feedback: "¡Muy bien! Extraer en pictogramas exige leer la convención primero. Si cada estrella vale 10, y Robótica tiene 4 estrellas, la operación es 4 x 10 = 40 estudiantes."
    }
  ];

  const handleAnswer = (index) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setHasAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
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
    if (percentage === 1) return { title: "¡Desempeño Perfecto!", desc: "Dominas por completo la lectura, extracción y transformación de datos. Estás más que listo para este tipo de preguntas en el examen." };
    if (percentage >= 0.6) return { title: "¡Buen Trabajo!", desc: "Tienes una base muy sólida. Revisa las preguntas en las que fallaste para asegurar un puntaje perfecto la próxima vez." };
    return { title: "¡Sigue Practicando!", desc: "La lectura de gráficas requiere entrenamiento. Te sugerimos volver a la sección de 'Teoría y Gráficas' y repasar los conceptos." };
  };

  const resultData = getResultMessage();

  // Render functions for sections
  const renderIntroduccion = () => (
    React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" },
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
        // Left column
        React.createElement("div", { className: "space-y-6" },
          React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Bienvenido al módulo"),
          React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" },
            "En nuestro día a día, estamos bombardeados de información: textos, gráficas, noticias y datos. No basta solo con leer; es fundamental desarrollar la habilidad de ",
            React.createElement("strong", { className: "font-semibold text-emerald-700" }, "procesar"),
            " esa información."
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
            React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl" }),
            React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "¿Qué lograrás en este módulo?"),
            React.createElement("ul", { className: "space-y-4" },
              [
                "Aprender a separar los datos importantes del 'ruido'.",
                "Convertir textos en gráficas y viceversa.",
                "Interpretar qué significan realmente los datos presentados."
              ].map((text, i) => 
                React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" },
                  React.createElement("div", { className: "mt-1 bg-emerald-100 p-1 rounded-full shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300" },
                    React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-emerald-600 group-hover:text-white" })
                  ),
                  React.createElement("span", null, text)
                )
              )
            )
          )
        ),
        // Right column - 3D visualization
        React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" },
          React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } },
            React.createElement("div", { 
              className: "relative w-56 h-56 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out cursor-default",
              style: { transform: 'rotateX(55deg) rotateZ(-35deg)', transformStyle: 'preserve-3d' }
            },
              React.createElement("div", { style: { transform: 'translateZ(0px)' }, className: "absolute inset-4 border border-slate-300/40 rounded-2xl grid grid-cols-3 grid-rows-3 overflow-hidden" },
                React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-slate-300/40" }),
                React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-slate-300/40" }),
                React.createElement("div", { className: "border-r border-slate-300/40" }), React.createElement("div", { className: "border-r border-slate-300/40" }), React.createElement("div")
              ),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-6 left-6 w-12 h-20 bg-gradient-to-t from-emerald-500 to-teal-300 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-6 left-24 w-12 h-32 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-24 left-6 w-12 h-24 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(70px)', animationDuration: '3s' }, className: "absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-tr from-amber-300 to-orange-500 rounded-full shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.2),_0_20px_30px_rgba(245,158,11,0.4)] flex items-center justify-center animate-bounce" },
                React.createElement(Icon, { name: "gps_fixed", className: "w-6 h-6 text-white opacity-80" })
              )
            )
          ),
          React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" },
            "\"La información es poder, pero solo si sabes cómo interpretarla.\""
          ),
          React.createElement("button", { 
            onClick: () => setActiveTab('teoria'),
            className: "mt-6 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95 flex items-center gap-2"
          },
            "Comenzar Teoría ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
          )
        )
      )
    )
  );

  const renderTeoria = () => (
    React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" },
      // Three concept cards
      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
        [
          { icon: "menu_book", title: '1. Comprender', desc: 'Leer un texto o ver una gráfica y entender su mensaje central. Implicar inferir significados.', color: 'text-purple-600', bg: 'bg-purple-100' },
          { icon: "gps_fixed", title: '2. Extraer', desc: 'Localizar información específica dentro de un gran volumen de datos. Encontrar el dato exacto.', color: 'text-orange-600', bg: 'bg-orange-100' },
          { icon: "sync", title: '3. Transformar', desc: 'Cambiar el formato de la información sin perder su significado. Ej: de tabla a gráfica.', color: 'text-blue-600', bg: 'bg-blue-100' }
        ].map((item, i) => 
          React.createElement("div", { key: i, className: "bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300" },
            React.createElement("div", { className: `w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm border border-${item.color.replace('text-', '')}/10` },
              React.createElement(Icon, { name: item.icon, className: "w-7 h-7" })
            ),
            React.createElement("h3", { className: "text-xl font-extrabold mb-3 text-slate-800" }, item.title),
            React.createElement("p", { className: "text-slate-500 text-sm leading-relaxed" }, item.desc)
          )
        )
      ),
      // Theory content
      React.createElement("div", { className: "bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40" },
        React.createElement("div", { className: "text-center mb-10" },
          React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Manual Práctico: Tipos de Gráficas"),
          React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full" }),
          React.createElement("p", { className: "mt-4 text-slate-500 max-w-2xl mx-auto text-base" },
            "Analizaremos los formatos visuales más utilizados en las pruebas y te daremos las claves exactas para leerlos sin cometer errores."
          )
        ),
        React.createElement("div", { className: "space-y-8" },
          // Gráficos de Barras
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-emerald-100 rounded-lg" }, React.createElement(Icon, { name: "bar_chart", className: "w-5 h-5 text-emerald-600" })),
              "1. Gráficos de Barras (Comparaciones)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "pt-4 pb-8 px-4 bg-white rounded-xl shadow-sm border border-slate-100" },
                React.createElement("div", { className: "relative h-48 border-b-2 border-l-2 border-slate-300 flex items-end justify-around ml-8" },
                  React.createElement("div", { className: "absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1" },
                    React.createElement("span", null, "100"), React.createElement("span", null, "75"), React.createElement("span", null, "50"), React.createElement("span", null, "25"), React.createElement("span", null, "0")
                  ),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-1/4 left-0 -z-10" }),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-2/4 left-0 -z-10" }),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-3/4 left-0 -z-10" }),
                  [
                    { label: 'Matemáticas', short: 'Mate', val: '85', from: 'from-emerald-400', to: 'to-emerald-500' },
                    { label: 'Lectura Crít.', short: 'Lectura', val: '70', from: 'from-blue-400', to: 'to-blue-500' },
                    { label: 'C. Naturales', short: 'Ciencias', val: '60', from: 'from-teal-400', to: 'to-teal-500' },
                    { label: 'Sociales', short: 'Sociales', val: '45', from: 'from-indigo-400', to: 'to-indigo-500' }
                  ].map((item, i) => 
                    React.createElement("div", { key: i, className: "flex flex-col items-center w-1/4 h-full justify-end relative z-10 group" },
                      React.createElement("span", { className: "text-xs font-bold text-slate-700 absolute transition-all duration-300 mb-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2", style: { bottom: `${item.val}%` } }, item.val + '%'),
                      React.createElement("div", { className: `w-8 md:w-12 bg-gradient-to-t ${item.from} ${item.to} rounded-t-md transition-all duration-1000 shadow-sm`, style: { height: `${item.val}%` } }),
                      React.createElement("span", { className: "text-xs font-semibold text-slate-500 absolute -bottom-7 text-center whitespace-nowrap" }, item.short)
                    )
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " El Eje X muestra categorías independientes, mientras el Eje Y indica cantidad. Son ideales para ",
                  React.createElement("strong", { className: "text-emerald-600" }, "comparar magnitudes"),
                  " rápidamente."
                )
              )
            )
          ),
          // Gráfico de Líneas
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-blue-100 rounded-lg" }, React.createElement(Icon, { name: "show_chart", className: "w-5 h-5 text-blue-600" })),
              "2. Gráfico de Líneas (Tendencias)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center" },
                React.createElement("svg", { className: "w-full h-40 overflow-visible drop-shadow-sm", viewBox: "0 0 1000 400" },
                  React.createElement("defs", null,
                    React.createElement("linearGradient", { id: "area-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                      React.createElement("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.4" }),
                      React.createElement("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0.0" })
                    )
                  ),
                  React.createElement("g", { stroke: "#e2e8f0", strokeWidth: "2", strokeDasharray: "6 6" },
                    React.createElement("line", { x1: "0", y1: "100", x2: "1000", y2: "100" }),
                    React.createElement("line", { x1: "0", y1: "200", x2: "1000", y2: "200" })
                  ),
                  React.createElement("g", { stroke: "#cbd5e1", strokeWidth: "3" },
                    React.createElement("line", { x1: "0", y1: "350", x2: "1000", y2: "350" }),
                    React.createElement("line", { x1: "0", y1: "0", x2: "0", y2: "350" })
                  ),
                  React.createElement("path", { d: "M 0 300 L 250 200 L 500 250 L 750 100 L 1000 150 L 1000 350 L 0 350 Z", fill: "url(#area-gradient)" }),
                  React.createElement("polyline", { points: "0,300 250,200 500,250 750,100 1000,150", fill: "none", stroke: "#3b82f6", strokeWidth: "6", strokeLinecap: "round", strokeLinejoin: "round" }),
                  React.createElement("g", { fill: "#ffffff", stroke: "#2563eb", strokeWidth: "4" },
                    React.createElement("circle", { cx: "0", cy: "300", r: "8" }), React.createElement("circle", { cx: "250", cy: "200", r: "8" }),
                    React.createElement("circle", { cx: "500", cy: "250", r: "8" }), React.createElement("circle", { cx: "750", cy: "100", r: "8" }),
                    React.createElement("circle", { cx: "1000", cy: "150", r: "8" })
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-blue-100 shadow-[0_4px_20px_rgba(59,130,246,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Muestran cambios de una variable ",
                  React.createElement("strong", { className: "text-blue-600" }, "continua"),
                  ". Observa las pendientes: una línea subiendo indica incremento; bajando indica descenso."
                )
              )
            )
          ),
          // Gráficos Circulares
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-purple-100 rounded-lg" }, React.createElement(Icon, { name: "pie_chart", className: "w-5 h-5 text-purple-600" })),
              "3. Gráficos Circulares (Proporciones)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-center gap-8 items-center" },
                React.createElement("div", { className: "w-40 h-40 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] shrink-0 border-[6px] border-white", style: { background: 'conic-gradient(#10b981 0% 50%, #3b82f6 50% 75%, #8b5cf6 75% 90%, #f59e0b 90% 100%)' } }),
                React.createElement("ul", { className: "text-sm space-y-4 font-medium text-slate-600" },
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-emerald-500 shadow-sm" }), "Vivienda (50%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-blue-500 shadow-sm" }), "Alimentos (25%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-purple-500 shadow-sm" }), "Transporte (15%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-amber-500 shadow-sm" }), "Ahorro (10%)")
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-purple-100 shadow-[0_4px_20px_rgba(139,92,246,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " El círculo completo ",
                  React.createElement("strong", { className: "text-purple-600" }, "siempre representa el 100%"),
                  ". Sirve para ver qué porción es mayor o menor de forma relativa comparada con el total."
                )
              )
            )
          ),
          // Tablas de Doble Entrada
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-amber-100 rounded-lg" }, React.createElement(Icon, { name: "table_chart", className: "w-5 h-5 text-amber-600" })),
              "4. Tablas de Doble Entrada"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm" },
                React.createElement("table", { className: "w-full text-sm text-left" },
                  React.createElement("thead", { className: "bg-slate-50 text-slate-700 border-b border-slate-200" },
                    React.createElement("tr", null,
                      React.createElement("th", { className: "p-4 font-bold" }, "Sustancia"),
                      React.createElement("th", { className: "p-4 font-bold text-center" }, "20°C (Inicial)"),
                      React.createElement("th", { className: "p-4 font-bold text-center" }, "100°C (Final)")
                    )
                  ),
                  React.createElement("tbody", null,
                    React.createElement("tr", { className: "border-b border-slate-100" },
                      React.createElement("td", { className: "p-4 font-semibold text-slate-800 bg-slate-50/50" }, "Elemento A"),
                      React.createElement("td", { className: "p-4 text-center" }, "Sólido"),
                      React.createElement("td", { className: "p-4 text-center text-blue-600 font-bold" }, "Líquido")
                    ),
                    React.createElement("tr", null,
                      React.createElement("td", { className: "p-4 font-semibold text-slate-800 bg-slate-50/50" }, "Elemento B"),
                      React.createElement("td", { className: "p-4 text-center" }, "Líquido"),
                      React.createElement("td", { className: "p-4 text-center text-orange-500 font-bold" }, "Gas")
                    )
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-amber-100 shadow-[0_4px_20px_rgba(245,158,11,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Cruza filas con columnas. La cabecera indica 'qué' se está midiendo, y la fila indica 'a quién'. Un error común es leer solo un dato sin relacionarlo con su cruce."
                )
              )
            )
          ),
          // Diagramas de Dispersión
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-rose-100 rounded-lg" }, React.createElement(Icon, { name: "scatter_plot", className: "w-5 h-5 text-rose-600" })),
              "5. Diagramas de Dispersión"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center" },
                React.createElement("svg", { className: "w-full h-40 overflow-visible drop-shadow-sm", viewBox: "0 0 100 100" },
                  React.createElement("polyline", { points: "10,10 10,90 90,90", fill: "none", stroke: "#cbd5e1", strokeWidth: "2" }),
                  React.createElement("text", { x: "50", y: "99", fontSize: "6", fill: "#64748b", textAnchor: "middle", fontWeight: "bold" }, "Horas de Estudio"),
                  React.createElement("text", { x: "2", y: "50", fontSize: "6", fill: "#64748b", transform: "rotate(-90 2,50)", textAnchor: "middle", fontWeight: "bold" }, "Puntaje"),
                  React.createElement("line", { x1: "15", y1: "85", x2: "85", y2: "15", stroke: "#ffe4e6", strokeWidth: "4", strokeLinecap: "round" }),
                  React.createElement("line", { x1: "15", y1: "85", x2: "85", y2: "15", stroke: "#fda4af", strokeWidth: "1.5", strokeDasharray: "3 3" }),
                  [ [15, 80], [20, 85], [25, 70], [30, 75], [35, 60], [40, 65], [45, 50], [50, 55], [55, 40], [60, 45], [65, 30], [70, 35], [75, 20], [80, 25], [85, 10] ].map((point, i) =>
                    React.createElement("circle", { key: i, cx: point[0], cy: point[1], r: "2.5", fill: "#e11d48", className: "hover:r-4 transition-all duration-200 cursor-pointer" })
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Muestran relaciones entre dos variables. Imagina una 'nube' de puntos. Si sube de izquierda a derecha, es una ",
                  React.createElement("strong", { className: "text-rose-600" }, "correlación positiva"),
                  "."
                )
              )
            )
          ),
          // Pictogramas
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-teal-100 rounded-lg" }, React.createElement(Icon, { name: "grid_view", className: "w-5 h-5 text-teal-600" })),
              "6. Pictogramas (Iconos)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm" },
                React.createElement("div", { className: "mb-4 text-center pb-3 border-b border-slate-100" },
                  React.createElement("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, "Convención Clave"),
                  React.createElement("div", { className: "flex items-center justify-center gap-2 mt-2 bg-slate-50 py-2 rounded-lg border border-slate-200/60 w-max mx-auto px-4" },
                    React.createElement(Icon, { name: "groups", className: "w-5 h-5 text-teal-500" }), 
                    React.createElement("span", { className: "text-sm font-bold text-slate-700" }, "= 1,000 Personas")
                  )
                ),
                React.createElement("div", { className: "space-y-4 mt-6" },
                  React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement("span", { className: "w-16 text-sm font-bold text-slate-600 text-right" }, "Norte"),
                    React.createElement("div", { className: "flex gap-1.5 text-teal-500" },
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" }),
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" }),
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" })
                    ),
                    React.createElement("span", { className: "text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md ml-auto" }, "3,000")
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-teal-100 shadow-[0_4px_20px_rgba(20,184,166,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-teal-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Utilizan imágenes para representar cantidades. La ",
                  React.createElement("strong", { className: "text-teal-600" }, "regla de oro"),
                  " es buscar siempre la leyenda (ej. '1 icono = 1000') antes de empezar a contar."
                )
              )
            )
          )
        )
      )
    )
  );

  const renderPractica = () => (
    React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? 
        React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" },
          React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }),
          React.createElement("div", { className: "mb-8 flex justify-between items-end" },
            React.createElement("div", null,
              React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" },
                "Habilidad: ", React.createElement("span", { className: "text-emerald-500" }, questions[currentQuestion].type)
              ),
              React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
            ),
            React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
          ),
          React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" },
            React.createElement("div", { className: "bg-gradient-to-r from-emerald-400 to-teal-500 h-full transition-all duration-500 ease-out", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
          ),
          React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" }, questions[currentQuestion].question),
          questions[currentQuestion].visual && 
            React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner" }, questions[currentQuestion].visual),
          React.createElement("div", { className: "space-y-4 mb-10" },
            questions[currentQuestion].options.map((option, index) => 
              React.createElement("button", {
                key: index,
                onClick: () => handleAnswer(index),
                disabled: hasAnswered,
                className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                  hasAnswered
                    ? index === questions[currentQuestion].correct
                      ? 'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]'
                      : index === selectedAnswer
                        ? 'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80'
                        : 'bg-white border-slate-100 text-slate-400 opacity-50'
                    : 'bg-white border-slate-100 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 hover:-translate-y-1'
                }`
              },
                React.createElement("div", { className: "flex items-center gap-4" },
                  React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    hasAnswered
                      ? index === questions[currentQuestion].correct
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : index === selectedAnswer
                          ? 'border-rose-400 bg-rose-400 text-white'
                          : 'border-slate-200'
                      : 'border-slate-200'
                  }` },
                    hasAnswered && index === questions[currentQuestion].correct && React.createElement(Icon, { name: "check_circle", className: "w-5 h-5" })
                  ),
                  React.createElement("span", { className: "font-medium text-[15px]" }, option)
                )
              )
            )
          ),
          hasAnswered && 
            React.createElement("div", { className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
              selectedAnswer === questions[currentQuestion].correct 
                ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' 
                : 'bg-amber-50 border border-amber-100 text-amber-800'
            }` },
              React.createElement("p", { className: "font-semibold text-sm md:text-base" }, questions[currentQuestion].feedback)
            ),
          React.createElement("div", { className: "flex justify-end" },
            React.createElement("button", {
              onClick: nextQuestion,
              disabled: !hasAnswered,
              className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                hasAnswered
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`
            },
              currentQuestion === questions.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Pregunta',
              React.createElement(Icon, { name: "arrow_forward", className: "w-5 h-5" })
            )
          )
        ) :
        React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" },
          React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500" }),
          React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" },
            React.createElement(Icon, { name: "emoji_events", className: "w-14 h-14 text-emerald-500" })
          ),
          React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title),
          React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" }, resultData.desc),
          React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" },
            React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 mb-2" },
              score, React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, " / ", questions.length)
            ),
            React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Respuestas Correctas")
          ),
          React.createElement("button", {
            onClick: resetQuiz,
            className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
          },
            React.createElement(Icon, { name: "refresh", className: "w-5 h-5" }),
            "Intentar de nuevo"
          )
        )
    )
  );

  // Main render
  return (
    React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" },
      React.createElement("div", { className: "max-w-5xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-white" },
        // Header
        React.createElement("header", { className: "relative bg-slate-900 p-8 md:p-12 overflow-hidden" },
          React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" }),
          React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" }),
          React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" },
            React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-white rounded-2xl" })
          ),
          React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" },
            React.createElement("div", { className: "max-w-2xl" },
              React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" },
                React.createElement(Icon, { name: "psychology", className: "w-5 h-5 text-emerald-400" }),
                React.createElement("span", { className: "text-emerald-300 font-semibold tracking-widest text-xs uppercase" }, "Módulo de Competencia")
              ),
              React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" },
                "Interpretación y ", React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300" }, "Representación")
              ),
              React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" },
                "Evalúa la capacidad para comprender y transformar la información, así como la capacidad para extraer información relevante."
              )
            ),
            React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transform rotate-3" },
              React.createElement(Icon, { name: "insights", className: "w-10 h-10 text-white" })
            )
          )
        ),
        // Navigation tabs
        React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" },
          React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
            [
              { id: 'introduccion', icon: 'gps_fixed', label: 'Introducción' },
              { id: 'teoria', icon: 'menu_book', label: 'Teoría y Gráficas' },
              { id: 'practica', icon: 'check_circle', label: 'Práctica Interactiva' }
            ].map((tab) => 
              React.createElement("button", {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white text-emerald-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'
                }`
              },
                React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-emerald-500' : ''}` }),
                tab.label
              )
            )
          )
        ),
        // Main content
        React.createElement("main", { className: "p-6 md:px-10 md:pb-10 md:pt-4" },
          activeTab === 'introduccion' && renderIntroduccion(),
          activeTab === 'teoria' && renderTeoria(),
          activeTab === 'practica' && renderPractica()
        )
      )
    )
  );
}

// Global Assignment - Render function
window.renderMathModule1 = (containerId) => {
  console.log("React Render Engine: Ejecutando en", containerId);
  console.log("React Render Engine: ReactDOM disponible?", typeof window.ReactDOM);
  const container = document.getElementById(containerId);
  if (container && window.ReactDOM) {
    try {
      const root = window.ReactDOM.createRoot(container);
      root.render(React.createElement(MathModule1));
      console.log("React Render Engine: Renderizado exitoso.");
    } catch (e) {
      console.error("React Render Engine Error:", e);
    }
  } else {
    console.warn("React Render Engine: No se encontró ReactDOM o el contenedor.");
  }
};

console.log("mathModule1.js: Listo para ser usado. renderMathModule1 disponible:", typeof window.renderMathModule1);
