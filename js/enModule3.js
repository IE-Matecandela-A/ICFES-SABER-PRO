(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule3() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [activeScenario, setActiveScenario] = useState(0);
      const [chatStep, setChatStep] = useState(0); // 0: initial, 1: answered
      const [chosenReply, setChosenReply] = useState(null);
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const scenarios = [
        {
          title: "Inviting a Friend (Invitación)",
          characterName: "Alex",
          avatar: "👦",
          prompt: "Hey! We are going to the cinema tonight. Would you like to come with us?",
          replies: [
            { text: "Yes, I'd love to! What time does it start?", isCorrect: true, feedback: "¡Excelente! Una invitación que comienza con 'Would you like to come...?' se acepta cortésmente con 'Yes, I'd love to!' (Sí, ¡me encantaría!) seguida de una pregunta sobre los detalles." },
            { text: "No, I don't like cinema rooms.", isCorrect: false, feedback: "Incorrecto. Aunque expresa una preferencia personal, es descortés y poco natural responder directamente 'I don't like cinema rooms' en un diálogo cotidiano." },
            { text: "I did it yesterday.", isCorrect: false, feedback: "Incorrecto. La pregunta está en futuro ('are going... tonight'), por lo que responder en pasado ('I did it yesterday') no tiene coherencia temporal." }
          ]
        },
        {
          title: "Asking for Directions (Indicaciones)",
          characterName: "Emma",
          avatar: "👧",
          prompt: "Excuse me, is there a drugstore near here?",
          replies: [
            { text: "Yes, there is one just around the corner.", isCorrect: true, feedback: "¡Perfecto! 'Is there... near here?' pregunta por una ubicación. Responder 'Yes, there is one...' (Sí, hay una...) es la estructura de respuesta estándar." },
            { text: "No, I don't buy medicines.", isCorrect: false, feedback: "Incorrecto. Detallar tus hábitos personales de compra es irrelevante para ayudar a alguien a encontrar un local físico." },
            { text: "I am not sick today.", isCorrect: false, feedback: "Incorrecto. Emma es la que pregunta; tu estado de salud personal no responde a su pregunta." }
          ]
        },
        {
          title: "Offering Help (Ofrecer ayuda)",
          characterName: "Mr. Davis",
          avatar: "👨‍💼",
          prompt: "Oh, these boxes are extremely heavy! I can't lift them.",
          replies: [
            { text: "Let me help you with those.", isCorrect: true, feedback: "¡Genial! Responder a una queja sobre el peso de algo con una oferta de ayuda como 'Let me help you' (Déjame ayudarte) es la respuesta conversacional empática correcta." },
            { text: "They are made of wood.", isCorrect: false, feedback: "Incorrecto. Mencionar el material de las cajas no ayuda a solucionar la dificultad física del hablante." },
            { text: "Yes, I know they are.", isCorrect: false, feedback: "Incorrecto. Estar de acuerdo en que son pesadas sin ofrecer ayuda suena descortés y gramaticalmente seco." }
          ]
        }
      ];

      const questions = [
        {
          question: "Complete the dialogue:\n\nSpeaker A: \"How was your weekend trip to Villa de Leyva?\"\nSpeaker B: \"________________\"",
          options: ["I will go next weekend.", "It was fantastic! The weather was perfect.", "Yes, I like trips."],
          correct: 1,
          feedback: "¡Correcto! La pregunta está en pasado ('How was...?'). Responder con 'It was fantastic!' responde directamente a la pregunta cualitativa sobre el viaje."
        },
        {
          question: "Complete the dialogue:\n\nSpeaker A: \"Would you like some more coffee?\"\nSpeaker B: \"________________\"",
          options: ["No, thank you, I have had enough.", "Yes, I like coffee yesterday.", "It is very hot today."],
          correct: 0,
          feedback: "¡Perfecto! Un ofrecimiento en presente con 'Would you like...?' se acepta o declina de forma cortés en el mismo plano temporal ('No, thank you...')."
        },
        {
          question: "Complete the dialogue:\n\nSpeaker A: \"Can I borrow your dictionary for a minute?\"\nSpeaker B: \"________________\"",
          options: ["Sure, here you are.", "Yes, I read dictionaries.", "No, it's not mine."],
          correct: 0,
          feedback: "¡Genial! 'Sure, here you are' (Claro, aquí tienes) es la frase conversacional estándar cuando le prestas un objeto a alguien que te lo solicitó."
        },
        {
          question: "Complete the dialogue:\n\nSpeaker A: \"I failed my chemistry exam yesterday.\"\nSpeaker B: \"________________\"",
          options: ["Congratulations! Excellent job.", "Oh, I'm sorry to hear that. Did you study?", "Chemistry is in the laboratory."],
          correct: 1,
          feedback: "¡Excelente! Cuando alguien te comparte una mala noticia, expresar empatía diciendo 'I'm sorry to hear that' (Lamento mucho escuchar eso) es la respuesta natural y adecuada."
        },
        {
          question: "Complete the dialogue:\n\nSpeaker A: \"What does your sister do?\"\nSpeaker B: \"________________\"",
          options: ["She is cooking dinner now.", "She is a pediatrician at a local clinic.", "She does exercise every morning."],
          correct: 1,
          feedback: "¡Correcto! 'What do you do?' / 'What does she do?' es la frase hecha para preguntar por la profesión u ocupación de alguien, no por su acción del momento."
        }
      ];

      const handleReplySelection = (idx) => {
        setChosenReply(idx);
        setChatStep(1);
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

      const changeScenario = (idx) => {
        setActiveScenario(idx);
        setChatStep(0);
        setChosenReply(null);
      };

      const renderIntroduccion = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Parte 3: Diálogos Conversacionales"),
              React.createElement("p", { className: "text-slate-650 dark:text-slate-350 leading-relaxed text-lg font-light" },
                "La Parte 3 evalúa la pragmática conversacional. Leerás una frase dicha por un Hablante A y deberás seleccionar la respuesta más adecuada y natural para el Hablante B. Es vital prestar atención a las ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "normas de interacción social"),
                " (saludos, ofertas, excusas, peticiones) y a la ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "coherencia de los tiempos gramaticales"),
                ".",
                React.createElement("strong", { className: "font-semibold text-sky-600 block mt-2" }, "¡Adapta el tono y el tiempo verbal del diálogo!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Pistas de Interacción Social:"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-650 dark:text-slate-355 text-sm" },
                  [
                    "Ofrecimientos/Peticiones: 'Would you like...?' u ofrecimientos similares se aceptan cortésmente o se declinan con agradecimiento.",
                    "Profesiones: 'What does she do?' indaga sobre su profesión habitual, no sobre lo que está haciendo ahora.",
                    "Noticias compartidas: Responde siempre con empatía/solidaridad ante malas noticias, y felicita ante buenas noticias."
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
                    React.createElement("span", { className: "p-2 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-lg" }, React.createElement(Icon, { name: "forum" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "INGLÉS CONVERSACIONAL"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Saber 11 - Parte 3")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-350 italic leading-relaxed" },
                    "\"Siempre lee la pregunta con cuidado. Identifica saludos, peticiones o expresiones de sentimientos para elegir la respuesta correcta.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-sky-655 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Iniciar Simulador ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // Chat Simulator
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "chat", className: "text-sky-500" }),
              "1. Simulador de Chat Interactivo"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, 
              "Selecciona un escenario de la izquierda y lee la burbuja. Elige la respuesta más adecuada en el menú de opciones inferior."
            ),
            
            React.createElement("div", { className: "grid md:grid-cols-12 gap-8 items-stretch" },
              // Left: Scenarios
              React.createElement("div", { className: "md:col-span-4 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col gap-3" },
                React.createElement("span", { className: "text-xs font-black text-slate-400 block mb-1 uppercase tracking-widest" }, "Escenarios:"),
                scenarios.map((scen, index) => (
                  React.createElement("button", {
                    key: index,
                    onClick: () => changeScenario(index),
                    className: `p-3 rounded-xl border text-left transition-all duration-300 text-xs font-bold ${
                      activeScenario === index 
                        ? 'border-sky-500 bg-sky-500/10 text-sky-600 dark:text-sky-400' 
                        : 'border-slate-200 dark:border-slate-850 text-slate-550 hover:bg-slate-550/5'
                    }`
                  },
                    scen.title
                  ))
                )
              ),
              
              // Right: Chat view
              React.createElement("div", { className: "md:col-span-8 bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-inner flex flex-col justify-between min-h-[300px]" },
                React.createElement("div", { className: "space-y-4 flex-1" },
                  // Character bubble
                  React.createElement("div", { className: "flex items-start gap-3" },
                    React.createElement("div", { className: "w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-xl shrink-0" }, 
                      scenarios[activeScenario].avatar
                    ),
                    React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-850 rounded-2xl p-4 shadow-sm max-w-md relative" },
                      React.createElement("span", { className: "text-[10px] font-black text-sky-600 block mb-1" }, scenarios[activeScenario].characterName),
                      React.createElement("p", { className: "text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-mono" }, scenarios[activeScenario].prompt)
                    )
                  ),
                  
                  // User reply bubble (visible if answered)
                  chatStep === 1 && React.createElement("div", { className: "flex items-start gap-3 justify-end animate-in slide-in-from-right-8 duration-300" },
                    React.createElement("div", { className: "bg-sky-600 text-white rounded-2xl p-4 shadow-sm max-w-md relative text-right" },
                      React.createElement("span", { className: "text-[10px] font-black text-sky-200 block mb-1" }, "Tú"),
                      React.createElement("p", { className: "text-xs leading-relaxed font-mono" }, scenarios[activeScenario].replies[chosenReply].text)
                    ),
                    React.createElement("div", { className: "w-10 h-10 rounded-full bg-sky-800 flex items-center justify-center text-xl shrink-0" }, 
                      "🎓"
                    )
                  )
                ),
                
                // Reply options
                React.createElement("div", { className: "mt-6 border-t border-slate-200 dark:border-slate-800 pt-4" },
                  chatStep === 0 ? React.createElement("div", { className: "space-y-2" },
                    React.createElement("span", { className: "text-[10px] font-black text-slate-400 block mb-1 uppercase tracking-widest" }, "Selecciona una respuesta:"),
                    scenarios[activeScenario].replies.map((reply, i) => (
                      React.createElement("button", {
                        key: i,
                        onClick: () => handleReplySelection(i),
                        className: "w-full text-left p-3 border border-slate-200 dark:border-slate-855 bg-white dark:bg-slate-900 rounded-xl text-xs hover:border-sky-300 transition-all font-semibold font-mono"
                      },
                        reply.text
                      )
                    ))
                  ) : React.createElement("div", { className: "space-y-4 animate-in fade-in duration-300" },
                    React.createElement("div", { className: `p-4 rounded-xl border text-xs leading-relaxed ${
                      scenarios[activeScenario].replies[chosenReply].isCorrect 
                        ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-455' 
                        : 'bg-rose-500/10 border-rose-500/20 text-rose-800 dark:text-rose-455'
                    }` },
                      React.createElement("span", { className: "font-black block mb-0.5 uppercase tracking-wide" }, 
                        scenarios[activeScenario].replies[chosenReply].isCorrect ? "✓ Respuesta Correcta" : "✗ Respuesta Incorrecta"
                      ),
                      scenarios[activeScenario].replies[chosenReply].feedback
                    ),
                    React.createElement("button", {
                      onClick: () => { setChatStep(0); setChosenReply(null); },
                      className: "bg-sky-900 text-white font-bold px-6 py-2 rounded-xl text-[10px] uppercase shadow-sm block ml-auto hover:bg-sky-800 transition-all"
                    }, "Reintentar Escenario")
                  )
                )
              )
            )
          ),

          // Theory details
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "tips_and_updates", className: "text-sky-500" }),
              "2. Reglas de Coherencia Gramatical y Contextual en Diálogos"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-xs leading-relaxed" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-sky-700 dark:text-sky-400 text-sm uppercase mb-2" }, "Compatibilidad de Tiempos Verbales"),
                React.createElement("p", { className: "text-slate-550 dark:text-slate-400" },
                  "Si el Hablante A pregunta en pasado ('How was your trip?'), la respuesta obligatoriamente debe contener elementos en pasado ('It was fantastic'). Si preguntan por planes futuros, descarta las respuestas secas en pasado."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-sky-700 dark:text-sky-400 text-sm uppercase mb-2" }, "Cortesía y Pragmatismo Social"),
                React.createElement("p", { className: "text-slate-550 dark:text-slate-400" },
                  "Los diálogos evaluados modelan interacciones cotidianas amables. Evita opciones que suenen extremadamente rudas, indiferentes o que ignoren el estado de ánimo o la petición del interlocutor."
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
                scorePercent >= 80 ? "¡Maestro de Diálogos!" : scorePercent >= 50 ? "¡Buen Trabajo!" : "Repasa Diálogos"
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Pragmática de Diálogos"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-330 text-xs leading-relaxed font-medium" },
                  "Cuidado con las respuestas que repiten las mismas palabras de la pregunta pero no tienen sentido. Por ejemplo, ante 'Would you mind closing...?', responder 'Yes, I closed it last week' repite el verbo pero malinterpreta la petición."
                )
              ),
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, "PRÁCTICA MULTIPLE OPCIÓN DE DIÁLOGOS"),
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
                        "ABC"[index]
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
        { id: 'teoria', label: 'Teoría y Chat', icon: 'menu_book' },
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

    window.renderENModule3 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule3));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
