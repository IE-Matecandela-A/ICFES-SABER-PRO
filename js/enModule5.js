(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule5() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [activeProof, setActiveProof] = useState(null); // 'q1', 'q2', 'q3' etc.
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingText = {
        title: "The Great Migration Waves",
        paragraphs: [
          {
            id: "p1",
            text: "Human migration is a fundamental driver of historical change. During the late 19th and early 20th centuries, millions of people left their home countries in Europe to cross the Atlantic Ocean, heading towards the American continent. Most of these migrants were looking for jobs, cheaper agricultural land, and better living conditions to support their families back home.",
            proofs: {
              q1: "millions of people left their home countries in Europe to cross the Atlantic Ocean",
              q2: "Most of these migrants were looking for jobs, cheaper agricultural land, and better living conditions"
            }
          },
          {
            id: "p2",
            text: "However, crossing the ocean was not easy. Immigrants faced extremely difficult conditions during the long journey on crowded steamships. Upon arrival at ports like Ellis Island in New York, they had to undergo strict medical and legal examinations. Those who failed these checkups were sent back to Europe immediately, separating families and causing immense emotional distress.",
            proofs: {
              q3: "they had to undergo strict medical and legal examinations. Those who failed these checkups were sent back to Europe immediately"
            }
          }
        ]
      };

      const questions = [
        {
          question: "According to the first paragraph, what was the destination of the European migrants?",
          options: ["Countries inside Europe", "The American continent", "Ports in Asia"],
          correct: 1,
          feedback: "¡Correcto! El texto afirma textualmente que 'left their home countries in Europe... heading towards the American continent' (se dirigieron al continente americano)."
        },
        {
          question: "What was the main reason millions of Europeans decided to migrate?",
          options: ["To explore new ocean routes", "To seek better jobs and living conditions", "To escape a major war in the USA"],
          correct: 1,
          feedback: "¡Perfecto! El texto menciona: 'Most of these migrants were looking for jobs, cheaper agricultural land, and better living conditions' (buscando mejores empleos y condiciones de vida)."
        },
        {
          question: "What happened to immigrants who did not pass the medical examinations?",
          options: ["They were given free medicines", "They were immediately returned to Europe", "They had to work on the steamships"],
          correct: 1,
          feedback: "¡Genial! El párrafo 2 indica: 'Those who failed these checkups were sent back to Europe immediately' (los que no pasaban los chequeos eran devueltos de inmediato a Europa)."
        },
        {
          question: "We can infer from paragraph 2 that the journey to America was:",
          options: ["Quick and comfortable", "Risky and demanding", "A cheap vacation trip"],
          correct: 1,
          feedback: "¡Excelente! Dado que los inmigrantes enfrentaban 'condiciones extremadamente difíciles' y 'chequeos estrictos' que podían separar a las familias, el viaje era peligroso y exigente."
        },
        {
          question: "What is the author's main tone in describing the immigrants' arrival at ports?",
          options: ["Humorous and entertaining", "Indifferent and cold", "Objective but empathetic to their hardships"],
          correct: 2,
          feedback: "¡Correcto! El autor describe los hechos históricos de forma objetiva, pero utiliza términos con carga emocional como 'inmenso dolor emocional' y 'condiciones difíciles', mostrando empatía hacia sus dificultades."
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

      const renderIntroduccion = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Parte 5 y 6: Comprensión Lectora"),
              React.createElement("p", { className: "text-slate-650 dark:text-slate-355 leading-relaxed text-lg font-light" },
                "La comprensión lectora evalúa tu capacidad para extraer información explícita o literal (Parte 5) y deducir ideas implícitas, el tono del autor o intenciones de opinión (Parte 6). Usar técnicas de lectura como ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "skimming"),
                " (lectura rápida para captar la idea general) y ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "scanning"),
                " (buscar hechos específicos) es clave para responder con eficiencia.",
                React.createElement("strong", { className: "font-semibold text-sky-650 block mt-2" }, "¡Demuestra siempre tus respuestas usando la evidencia del texto!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Estrategias de Lectura Crítica:"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-650 dark:text-slate-355 text-sm" },
                  [
                    "Buscar Fechas o Nombres Propios: Asocia palabras clave de la pregunta con mayúsculas y cifras exactas en el texto.",
                    "Literal vs. Inferencial: Las respuestas literales usan sinónimos directos del texto. Las inferenciales requieren leer entre líneas.",
                    "Analizar Adjetivos: El tono o postura del autor se deduce de adjetivos calificativos específicos ('awful', 'painful', 'magnificent')."
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
                    React.createElement("span", { className: "p-2 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-lg" }, React.createElement(Icon, { name: "chrome_reader_mode" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "COMPRENSIÓN LECTORA"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Saber 11 - Parte 5 & 6")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-350 italic leading-relaxed" },
                    "\"Nunca asumas detalles que no estén escritos en el texto. Respalda siempre cada opción con una frase del pasaje.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-sky-655 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Iniciar Lector Dividido ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // Split Reader Component
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "auto_stories", className: "text-sky-500" }),
              "1. Lector de Pantalla Dividida Interactivo: Encuentra la Evidencia"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, 
              "Haz clic en las preguntas de la columna derecha. La oración exacta dentro del pasaje de lectura que contiene la evidencia (Proof) se iluminará en color dorado a la izquierda."
            ),
            
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch" },
              // Left: Reading passage (with migration map)
              React.createElement("div", { className: "lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm space-y-6" },
                React.createElement("div", { className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-850 pb-4 mb-4" },
                  React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white" }, readingText.title),
                  React.createElement("span", { className: "text-[10px] font-black text-sky-655 bg-sky-50 px-2.5 py-1 rounded-full uppercase tracking-wider" }, "Texto de Lectura")
                ),
                
                // Embedded migration image
                React.createElement("div", { className: "border border-slate-100 dark:border-slate-850 rounded-2xl overflow-hidden h-[150px] bg-slate-50 dark:bg-slate-950/20" },
                  React.createElement("img", {
                    src: "img/mapa_migracion.png",
                    alt: "Ilustración del mapa de corrientes de migración",
                    className: "w-full h-full object-cover select-none"
                  })
                ),
                
                // Reading paragraphs
                React.createElement("div", { className: "space-y-4 text-xs font-light text-slate-650 dark:text-slate-350 leading-relaxed font-mono" },
                  readingText.paragraphs.map((p, pIdx) => {
                    const text = p.text;
                    let proofText = activeProof ? p.proofs[activeProof] : null;
                    
                    if (proofText) {
                      const parts = text.split(proofText);
                      return React.createElement("p", { key: pIdx },
                        parts[0],
                        React.createElement("span", { className: "bg-amber-400/20 border-b-2 border-amber-500 font-bold px-1 py-0.5 rounded-sm animate-pulse text-slate-800 dark:text-white font-mono" }, proofText),
                        parts[1]
                      );
                    }
                    
                    return React.createElement("p", { key: pIdx }, text);
                  })
                )
              ),
              
              // Right: Prompts selector
              React.createElement("div", { className: "lg:col-span-5 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-inner flex flex-col justify-between" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("span", { className: "text-xs font-black text-slate-400 block mb-1 uppercase tracking-widest" }, "Preguntas de Evidencia:"),
                  [
                    { id: 'q1', text: "Where did European migrants go during the waves?", title: "1. Destino" },
                    { id: 'q2', text: "Why did they leave their home countries?", title: "2. Motivos Económicos" },
                    { id: 'q3', text: "What happened to those who failed examinations?", title: "3. Rechazo Legal/Médico" }
                  ].map((btn) => (
                    React.createElement("button", {
                      key: btn.id,
                      onClick: () => setActiveProof(activeProof === btn.id ? null : btn.id),
                      className: `w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                        activeProof === btn.id
                          ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-450 font-bold'
                          : 'border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-900 text-slate-655 dark:text-slate-400 hover:border-sky-300'
                      }`
                    },
                      React.createElement("div", { className: "text-[10px] font-black uppercase tracking-wider mb-1" }, btn.title),
                      React.createElement("div", { className: "text-xs font-medium font-mono" }, btn.text)
                    )
                  ))
                ),
                React.createElement("div", { className: "bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-[10px] text-slate-500 dark:text-slate-450 leading-relaxed font-medium mt-6" },
                  React.createElement("span", { className: "font-black text-amber-500 block uppercase mb-1" }, "💡 Método del Resaltador:"),
                  "Buscar palabras clave de las preguntas dentro del texto te ayuda a verificar la información real y elimina trampas que se basan en interpretaciones subjetivas o distractores."
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
                scorePercent >= 80 ? "¡Experto en Lectura!" : scorePercent >= 50 ? "¡Buen Trabajo!" : "Revisa detalles del texto"
              ),
              React.createElement("p", { className: "text-slate-550 dark:text-slate-400 text-lg mb-8" }, 
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Comprensión Crítica"),
                React.createElement("p", { className: "text-slate-650 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "Para las preguntas inferenciales, evita opciones que introduzcan nuevas ideas que no estén respaldadas en el pasaje de lectura. Busca opciones que parafraseen o resuman el argumento del autor."
                )
              ),
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, "COMPRENSIÓN COMPLETA DE TEXTOS"),
                  React.createElement("span", { className: "text-sm text-slate-400 font-bold" }, `${currentQuestion + 1} de ${questions.length}`)
                ),
                React.createElement("div", { className: "w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden" },
                  React.createElement("div", { className: "bg-gradient-to-r from-sky-400 to-blue-500 h-full transition-all duration-300", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
                ),
                React.createElement("h3", { className: "text-base font-extrabold text-slate-800 dark:text-white mb-6 leading-relaxed font-mono" }, q.question),
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
                        "ABC"[index]
                      ),
                      React.createElement("span", null, option)
                    );
                  })
                ),
                hasAnswered && React.createElement("div", { className: "animate-in fade-in duration-300" },
                  React.createElement("div", { className: `p-5 rounded-2xl border mb-6 text-xs leading-relaxed font-medium ${
                    selectedAnswer === q.correct 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-400' 
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
        { id: 'teoria', label: 'Teoría y Lector Dividido', icon: 'menu_book' },
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

    window.renderENModule5 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule5));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
