(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule4() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [clozeAnswers, setClozeAnswers] = useState({ 0: "", 1: "", 2: "", 3: "", 4: "" });
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const clozeData = {
        paragraphStart: "Last year, my family and I ",
        blanks: [
          {
            index: 0,
            options: ["go", "went", "goes", "going"],
            correct: "went",
            explanation: "'Last year' indica una acción completada en el pasado, lo que requiere la forma irregular del pasado simple 'went'."
          },
          {
            index: 1,
            options: ["stayed", "has stayed", "stay", "staying"],
            correct: "stayed",
            explanation: "Consistencia de tiempos en el pasado. La acción principal de hospedarse en el hotel debe ir en pasado simple 'stayed'."
          },
          {
            index: 2,
            options: ["next", "between", "near", "under"],
            correct: "near",
            explanation: "'Near' (cerca de) se ajusta al contexto geográfico de un hotel de playa. 'Next' requeriría la preposición 'next to'."
          },
          {
            index: 3,
            options: ["but", "so", "because", "although"],
            correct: "but",
            explanation: "Conector de contraste: era un lugar hermoso, PERO (but) hacía mucho viento (contraste de aspectos positivos y negativos)."
          },
          {
            index: 4,
            options: ["more", "much", "many", "most"],
            correct: "more",
            explanation: "Estructura comparativa. Usamos 'more than' (más que) para comparar el disfrute actual con el del viaje anterior."
          }
        ],
        textSegments: [
          " to San Andrés. We ",
          " in a cozy hotel located ",
          " the beach. It was a beautiful place, ",
          " it was very windy. Overall, we enjoyed this vacation ",
          " than our last trip."
        ]
      };

      const questions = [
        {
          question: "Choose the correct option to fill in the blank:\n\n\"We decided to order pizza ______ we didn't have anything to cook at home.\"",
          options: ["although", "because", "so", "but"],
          correct: 1,
          feedback: "¡Correcto! 'Because' (porque) introduce la razón o causa (no había comida en casa) para realizar la acción (pedir pizza)."
        },
        {
          question: "Choose the correct option to fill in the blank:\n\n\"The teacher, ______ teaches chemistry, was born in London.\"",
          options: ["which", "who", "whose", "whom"],
          correct: 1,
          feedback: "¡Perfecto! 'Who' (quien/el cual) es el pronombre relativo adecuado para referirse a personas cuando actúan como sujeto de la oración."
        },
        {
          question: "Choose the correct option to fill in the blank:\n\n\"If it ______ tomorrow, we will cancel our picnic in the park.\"",
          options: ["rains", "rained", "will rain", "rain"],
          correct: 0,
          feedback: "¡Genial! Esta es una oración del Primer Condicional. La cláusula de condición después del 'If' va en presente simple ('rains'), y la cláusula de resultado usa 'will' + verbo."
        },
        {
          question: "Choose the correct option to fill in the blank:\n\n\"Have you ______ been to San Andrés? It is a wonderful island!\"",
          options: ["yet", "never", "ever", "already"],
          correct: 2,
          feedback: "¡Excelente! En preguntas de Presente Perfecto, 'ever' se usa con el significado de 'alguna vez en la vida' (para preguntar sobre experiencias pasadas)."
        },
        {
          question: "Choose the correct option to fill in the blank:\n\n\"She has lived in Cartagena ______ 2018.\"",
          options: ["for", "since", "during", "ago"],
          correct: 1,
          feedback: "¡Correcto! Usamos 'since' (desde) para indicar el punto de partida específico en el tiempo de una acción que continúa en el presente."
        }
      ];

      const handleClozeChange = (blankIdx, val) => {
        setClozeAnswers(prev => ({ ...prev, [blankIdx]: val }));
      };

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

      const resetCloze = () => {
        setClozeAnswers({ 0: "", 1: "", 2: "", 3: "", 4: "" });
      };

      const renderIntroduccion = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Parte 4 y 7: Textos con Espacios y Gramática"),
              React.createElement("p", { className: "text-slate-655 dark:text-slate-350 leading-relaxed text-lg font-light" },
                "Las partes 4 y 7 evalúan tu competencia léxico-gramatical en contexto. Consiste en leer un pasaje al que le faltan palabras y elegir la opción que encaje. La Parte 4 se centra en ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "elementos gramaticales"),
                " (prepositions, pronouns, auxiliaries), y la Parte 7 se enfoca en ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "vocabulario y verbos en contexto"),
                " (nivel B1).",
                React.createElement("strong", { className: "font-semibold text-sky-600 block mt-2" }, "¡La sintaxis contextual es la clave para dominar esta parte de la prueba!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Temas Gramaticales Clave:"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-650 dark:text-slate-355 text-sm" },
                  [
                    "Pronombres Relativos (who para personas, which para objetos, whose para posesión).",
                    "Condicionales (estructuras verbales del condicional tipo 0, 1 y 2).",
                    "Preposiciones de Lugar y Tiempo (in, on, at, since, for, during).",
                    "Conectores de Transición (although, however, because, so, but)."
                  ].map((text, i) => 
                    React.createElement("li", { key: i, className: "flex items-start gap-3" },
                      React.createElement("div", { className: "mt-1 bg-sky-100 dark:bg-sky-950/30 p-1 rounded-full shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-colors duration-300" },
                        React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-sky-600 dark:text-sky-400" })
                      ),
                      React.createElement("span", null, text)
                    )
                  )
                )
              )
            ),
            React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[360px]" },
              React.createElement("div", { className: "relative w-full h-64 flex items-center justify-center" },
                React.createElement("svg", { className: "w-56 h-56 text-sky-500/10 dark:text-sky-500/5 absolute animate-pulse", viewBox: "0 0 100 100", fill: "currentColor" },
                  React.createElement("circle", { cx: "50", cy: "50", r: "45" })
                ),
                React.createElement("div", { className: "relative z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-xs transition-transform hover:scale-105 duration-300" },
                  React.createElement("div", { className: "flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50 pb-3 mb-3" },
                    React.createElement("span", { className: "p-2 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-lg" }, React.createElement(Icon, { name: "spellcheck" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "GRAMÁTICA EN CONTEXTO"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Saber 11 - Parte 4 & 7")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-350 italic leading-relaxed" },
                    "\"Siempre lee la oración completa. Las referencias de tiempo y los sustantivos al lado del espacio te revelan qué pronombre o forma verbal se necesita.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-sky-655 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Iniciar Cloze Test ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // Interactive Cloze Component
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "edit", className: "text-sky-500" }),
              "1. Texto Completable Interactivo (Cloze Test)"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, 
              "Completa los espacios vacíos del párrafo. Las opciones seleccionadas se iluminarán en verde si son correctas y mostrarán las reglas gramaticales debajo."
            ),
            
            React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6" },
              // Paragraph with inline dropdowns
              React.createElement("div", { className: "leading-loose text-sm font-medium text-slate-700 dark:text-slate-350" },
                clozeData.paragraphStart,
                clozeData.blanks.map((b, idx) => {
                  const isSelected = clozeAnswers[b.index] !== "";
                  const isCorrect = clozeAnswers[b.index] === b.correct;
                  let colorClass = "border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950";
                  
                  if (isSelected) {
                    colorClass = isCorrect 
                      ? "border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-450 font-bold" 
                      : "border-rose-500 bg-rose-500/10 text-rose-700 dark:text-rose-455 font-bold animate-shake-custom";
                  }
                  
                  return React.createElement("span", { key: b.index, className: "inline-block mx-1" },
                    React.createElement("select", {
                      value: clozeAnswers[b.index],
                      onChange: (e) => handleClozeChange(b.index, e.target.value),
                      className: `px-2 py-1 border-2 rounded-xl text-xs focus:outline-none transition-all ${colorClass}`
                    },
                      React.createElement("option", { value: "" }, "-- select --"),
                      b.options.map((opt, oIdx) => 
                        React.createElement("option", { key: oIdx, value: opt }, opt)
                      )
                    ),
                    clozeData.textSegments[idx]
                  );
                })
              ),
              
              // Explanations list
              React.createElement("div", { className: "border-t border-slate-100 dark:border-slate-850 pt-4 space-y-3" },
                clozeData.blanks.map((b) => {
                  const ans = clozeAnswers[b.index];
                  if (!ans) return null;
                  const isCorrect = ans === b.correct;
                  return React.createElement("div", { key: b.index, className: `p-3 rounded-xl border text-[11px] leading-relaxed flex items-start gap-3 ${
                    isCorrect 
                      ? 'bg-emerald-500/5 border-emerald-500/15 text-emerald-800 dark:text-emerald-400' 
                      : 'bg-rose-500/5 border-rose-500/15 text-rose-800 dark:text-rose-455'
                  }` },
                    React.createElement("span", { className: "font-black" }, `Espacio [${b.index + 1}]:`),
                    React.createElement("div", null,
                      isCorrect 
                        ? React.createElement("span", null, "✓ ", b.explanation)
                        : React.createElement("span", null, `✗ '${ans}' es incorrecto para este espacio. Intenta con otra forma gramatical o conector.`)
                    )
                  );
                })
              ),

              // Reset button
              React.createElement("div", { className: "flex justify-end" },
                React.createElement("button", { onClick: resetCloze, className: "text-slate-400 hover:text-sky-500 text-xs font-bold flex items-center gap-1.5 transition-colors" },
                  React.createElement(Icon, { name: "refresh" }), "Restablecer Párrafo"
                )
              )
            )
          ),

          // Theory details
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "tips_and_updates", className: "text-sky-500" }),
              "2. Reglas Gramaticales Clave para Completar Textos"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-sky-700 dark:text-sky-400 text-sm uppercase mb-2" }, "Cláusulas Relativas (Pronombres)"),
                React.createElement("p", { className: "text-slate-550 dark:text-slate-400" },
                  "Utiliza 'Who' únicamente para personas. Usa 'Which' para referirte a objetos físicos, animales o ideas completas. Usa 'Whose' para indicar pertenencia o posesión (ej: 'the man whose son is a doctor')."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-sky-700 dark:text-sky-400 text-sm uppercase mb-2" }, "Disparadores de Preposiciones"),
                React.createElement("p", { className: "text-slate-550 dark:text-slate-400" },
                  "Los indicadores de tiempo son muy específicos: 'since' (desde) introduce un punto de partida exacto ('since 2018'), 'for' (durante/por) indica una duración de tiempo ('for 3 years'), y 'during' va seguido de un sustantivo ('during the trip')."
                )
              )
            )
          ),
          
          React.createElement("div", { className: "flex justify-center" },
            React.createElement("button", { 
              onClick: () => setActiveTab('practica'),
              className: "bg-sky-600 hover:bg-sky-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-sky-500/20 active:scale-95 transition-all flex items-center gap-2"
            },
              "Ir al Quiz de Práctica ", React.createElement(Icon, { name: "quiz" })
            )
          )
        )
      );

      const renderPractica = () => {
        if (showResults) {
          const scorePercent = Math.round((score / questions.length) * 100);
          return (
            React.createElement("div", { className: "animate-in zoom-in-95 duration-500 text-center max-w-md mx-auto py-10" },
              React.createElement("div", { className: "w-20 h-20 bg-sky-100 dark:bg-sky-950/40 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-md" }, "🏆"),
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 dark:text-white mb-2" }, 
                scorePercent >= 80 ? "¡Especialista en Gramática!" : scorePercent >= 50 ? "¡Buen Trabajo!" : "Repasa las Reglas Gramaticales"
              ),
              React.createElement("p", { className: "text-slate-500 dark:text-slate-400 text-lg mb-8" }, 
                `Respondiste correctamente ${score} de ${questions.length} preguntas (${scorePercent}%)`
              ),
              React.createElement("button", { 
                onClick: resetQuiz,
                className: "bg-sky-600 hover:bg-sky-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-95"
              }, "Reintentar Quiz")
            )
          );
        }

        const q = questions[currentQuestion];
        return (
          React.createElement("div", { className: "animate-in fade-in duration-500" },
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-start" },
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-sky-500" }),
                React.createElement("h3", { className: "text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1" }, "CONSEJO DEL EXAMEN"),
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Gramática en Contexto"),
                React.createElement("p", { className: "text-slate-650 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "La estructura del primer condicional es muy común. Recuerda: If + Presente Simple (condición) + Will + Verbo (resultado). Si ves una condición con 'If' y un resultado con 'will', elige la opción en presente simple."
                )
              ),
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, "PRÁCTICA LÉXICO-GRAMATICAL"),
                  React.createElement("span", { className: "text-sm text-slate-400 font-bold" }, `${currentQuestion + 1} de ${questions.length}`)
                ),
                React.createElement("div", { className: "w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden" },
                  React.createElement("div", { className: "bg-gradient-to-r from-sky-400 to-blue-500 h-full transition-all duration-300", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
                ),
                React.createElement("h3", { className: "text-base font-extrabold text-slate-800 dark:text-white mb-6 leading-relaxed whitespace-pre-line font-mono" }, q.question),
                React.createElement("div", { className: "space-y-3 mb-8" },
                  q.options.map((option, index) => {
                    let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 hover:bg-sky-50/50 dark:hover:bg-sky-950/10 text-slate-700 dark:text-slate-300";
                    let badgeStyle = "border-slate-300 text-slate-400 dark:border-slate-600";

                    if (hasAnswered) {
                      if (index === q.correct) {
                        btnStyle = "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400";
                        badgeStyle = "bg-emerald-500 border-emerald-500 text-white";
                      } else if (index === selectedAnswer) {
                        btnStyle = "bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-800 dark:text-rose-455 animate-shake-custom";
                        badgeStyle = "bg-rose-500 border-rose-500 text-white";
                      } else {
                        btnStyle = "opacity-40 border-slate-200 dark:border-slate-700 text-slate-400";
                      }
                    }

                    return React.createElement("button", {
                      key: index,
                      onClick: () => handleAnswer(index),
                      disabled: hasAnswered,
                      className: `w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 font-semibold text-xs ${btnStyle}`
                    },
                      React.createElement("span", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-black transition-all ${badgeStyle}` },
                        "ABCD"[index]
                      ),
                      React.createElement("span", null, option)
                    );
                  })
                ),
                hasAnswered && React.createElement("div", { className: "animate-in fade-in duration-300" },
                  React.createElement("div", { className: `p-5 rounded-2xl border mb-6 text-xs leading-relaxed font-medium ${
                    selectedAnswer === q.correct 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-455' 
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-800 dark:text-rose-455'
                  }` },
                    React.createElement("span", { className: "font-black block mb-1 text-xs uppercase tracking-wider" }, 
                      selectedAnswer === q.correct ? "✓ Explicación" : "✗ Retroalimentación"
                    ),
                    q.feedback
                  ),
                  React.createElement("button", {
                    onClick: nextQuestion,
                    className: "bg-slate-900 dark:bg-sky-655 hover:bg-slate-800 dark:hover:bg-sky-555 text-white font-extrabold px-8 py-3.5 rounded-xl ml-auto block transition-all active:scale-95 shadow-md text-sm"
                  },
                    currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente Pregunta →"
                  )
                )
              )
            )
          )
        );
      };

      const tabs = [
        { id: 'introduccion', label: 'Introducción', icon: 'auto_stories' },
        { id: 'teoria', label: 'Teoría y Cloze', icon: 'menu_book' },
        { id: 'practica', label: 'Quiz de Práctica', icon: 'quiz' }
      ];

      return (
        React.createElement("div", { className: "max-w-6xl mx-auto py-8 px-4" },
          React.createElement("div", { className: "flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto custom-scrollbar gap-2 pb-1" },
            tabs.map(tab => 
              React.createElement("button", {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white dark:bg-slate-800 text-sky-655 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 scale-100' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 scale-95'
                }`
              },
                React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-sky-500' : ''}` }),
                tab.label
              )
            )
          ),
          React.createElement("main", { className: "bg-slate-50/30 dark:bg-slate-900/30 rounded-3xl p-2 md:p-6" },
            activeTab === 'introduccion' && renderIntroduccion(),
            activeTab === 'teoria' && renderTeoria(),
            activeTab === 'practica' && renderPractica()
          )
        )
      );
    }

    window.renderENModule4 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule4));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
