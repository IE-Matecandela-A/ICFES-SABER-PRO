(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule1() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedDesc, setSelectedDesc] = useState(null);
      const [matches, setMatches] = useState({}); // { descId: wordId }
      const [wrongMatch, setWrongMatch] = useState(null); // { descId, wordId }
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const vocabularyList = [
        { id: 'desc_0', text: "A professional who prepares and cooks food in a restaurant.", word: "Chef", wordId: "w_0" },
        { id: 'desc_1', text: "A building where historical, scientific, or artistic objects are kept.", word: "Museum", wordId: "w_1" },
        { id: 'desc_2', text: "An instrument with a magnetic needle that shows you the direction.", word: "Compass", wordId: "w_2" },
        { id: 'desc_3', text: "A period of ten years.", word: "Decade", wordId: "w_3" },
        { id: 'desc_4', text: "Very cold; covered in or made of ice.", word: "Frozen", wordId: "w_4" }
      ];

      // Randomized word list for the matcher
      const matchWords = [
        { id: "w_3", text: "Decade" },
        { id: "w_0", text: "Chef" },
        { id: "w_4", text: "Frozen" },
        { id: "w_2", text: "Compass" },
        { id: "w_1", text: "Museum" }
      ];

      const questions = [
        {
          question: "Read the description and choose the correct word:\n\n\"A document that allows you to travel to other countries as official proof of citizenship.\"",
          options: ["Ticket", "Passport", "License", "Map"],
          correct: 1,
          feedback: "¡Correcto! Un 'Passport' (pasaporte) es un documento oficial emitido por un gobierno que certifica la identidad y nacionalidad del titular para viajar."
        },
        {
          question: "Read the description and choose the correct word:\n\n\"A small piece of paper that shows you have paid to enter a cinema, stadium, or travel on a bus.\"",
          options: ["Ticket", "Receipt", "Envelope", "Card"],
          correct: 0,
          feedback: "¡Perfecto! Un 'Ticket' (boleto/pasaje) te da derecho a viajar o ingresar a un lugar o evento público."
        },
        {
          question: "Read the description and choose the correct word:\n\n\"A machine that washes plates, cups, and cutlery automatically after meals.\"",
          options: ["Oven", "Fridge", "Dishwasher", "Toaster"],
          correct: 2,
          feedback: "¡Excelente! 'Dishwasher' (lavavajillas) es una palabra compuesta formada por 'dish' (plato) y 'washer' (lavadora). Lava cubiertos y platos automáticamente."
        },
        {
          question: "Read the description and choose the correct word:\n\n\"The scientific study of stars, planets, and other celestial bodies in outer space.\"",
          options: ["Biology", "History", "Astronomy", "Geography"],
          correct: 2,
          feedback: "¡Genial! 'Astronomy' (astronomía) es la ciencia que estudia las estrellas, planetas y el espacio. No la confundas con la Astrología (pseudociencia)."
        },
        {
          question: "Read the description and choose the correct word:\n\n\"A thick, warm cover for a bed, usually filled with feathers or synthetic fibers.\"",
          options: ["Curtain", "Blanket", "Pillow", "Mirror"],
          correct: 1,
          feedback: "¡Correcto! Una 'Blanket' (cobija/manta) se utiliza sobre la cama para mantenerte abrigado en climas fríos."
        }
      ];

      const handleMatchWord = (wordId) => {
        if (selectedDesc === null) return;
        const target = vocabularyList.find(v => v.id === selectedDesc);
        if (target.wordId === wordId) {
          // Correct match
          setMatches(prev => ({ ...prev, [selectedDesc]: wordId }));
          setSelectedDesc(null);
        } else {
          // Wrong match animation
          setWrongMatch({ descId: selectedDesc, wordId: wordId });
          setTimeout(() => {
            setWrongMatch(null);
          }, 600);
        }
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

      const resetMatcher = () => {
        setMatches({});
        setSelectedDesc(null);
      };

      const renderIntroduccion = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Parte 1: Vocabulario y Asociación"),
              React.createElement("p", { className: "text-slate-650 dark:text-slate-350 leading-relaxed text-lg font-light" },
                "La sección de inglés del Saber 11 comienza con la asociación de vocabulario. Se te presentarán 5 definiciones y 8 palabras para elegir. La clave del éxito es identificar ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "palabras clave"),
                " como categorías gramaticales (personas, lugares, cosas, acciones) y eliminar las opciones incorrectas.",
                React.createElement("strong", { className: "font-semibold text-sky-600 block mt-2" }, "¡Aprende a conectar palabras con sus contextos!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Temas de Estudio Clave:"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-650 dark:text-slate-355 text-sm" },
                  [
                    "Ocupaciones y profesiones (chef, nurse, guide).",
                    "Lugares públicos comunes (airport, museum, supermarket, library).",
                    "Electrodomésticos y objetos cotidianos (dishwasher, blanket, keys).",
                    "Adjetivos que describen estados o temperatura (frozen, hot, empty)."
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
                    React.createElement("span", { className: "p-2 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-lg" }, React.createElement(Icon, { name: "search" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "ASOCIACIÓN Y VOCABULARIO"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Saber 11 - Parte 1")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-350 italic leading-relaxed" },
                    "\"Las palabras clave son tus mejores aliadas. Conecta verbos con acciones y sustantivos con objetos para encontrar rápidamente la palabra correcta.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-sky-655 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Iniciar Teoría ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // Interactive Word Matcher
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "extension", className: "text-sky-500" }),
              "1. Simulador Interactivo: Juego de Asociación de Palabras"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, 
              "Selecciona una descripción a la izquierda y luego haz clic en la palabra correspondiente a la derecha. ¡Asocia las 5 de forma correcta!"
            ),
            
            React.createElement("div", { className: "grid md:grid-cols-12 gap-8 items-start" },
              // Left Column: Descriptions
              React.createElement("div", { className: "md:col-span-7 space-y-3" },
                React.createElement("span", { className: "text-xs font-black text-slate-400 block mb-1 uppercase tracking-widest" }, "Descripciones (Inglés):"),
                vocabularyList.map((item) => {
                  const isMatched = matches[item.id] !== undefined;
                  const isSelected = selectedDesc === item.id;
                  let bgStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800";
                  
                  if (isMatched) {
                    bgStyle = "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400 opacity-60";
                  } else if (isSelected) {
                    bgStyle = "border-sky-500 bg-sky-500/5 text-sky-600 dark:text-sky-400 font-bold scale-102 shadow-sm";
                  } else if (wrongMatch && wrongMatch.descId === item.id) {
                    bgStyle = "border-rose-500 bg-rose-500/5 text-rose-600 dark:text-rose-455 animate-shake-custom";
                  }
                  
                  return React.createElement("div", {
                    key: item.id,
                    onClick: () => !isMatched && setSelectedDesc(item.id),
                    className: `p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-3 text-xs ${bgStyle}`
                  },
                    React.createElement("span", { className: `w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] font-black ${
                      isMatched ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'
                    }` }, 
                      isMatched ? "✓" : "•"
                    ),
                    React.createElement("span", { className: "leading-relaxed font-mono text-slate-700 dark:text-slate-300" }, item.text)
                  );
                })
              ),
              
              // Right Column: Words
              React.createElement("div", { className: "md:col-span-5 space-y-3" },
                React.createElement("span", { className: "text-xs font-black text-slate-400 block mb-1 uppercase tracking-widest" }, "Palabras:"),
                matchWords.map((word) => {
                  const descKey = Object.keys(matches).find(k => matches[k] === word.id);
                  const isMatched = descKey !== undefined;
                  let wordBgStyle = "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sky-300";
                  
                  if (isMatched) {
                    wordBgStyle = "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400 opacity-60 pointer-events-none";
                  } else if (wrongMatch && wrongMatch.wordId === word.id) {
                    wordBgStyle = "border-rose-500 bg-rose-500/5 text-rose-600 dark:text-rose-455 animate-shake-custom";
                  }

                  return React.createElement("button", {
                    key: word.id,
                    onClick: () => handleMatchWord(word.id),
                    disabled: selectedDesc === null || isMatched,
                    className: `w-full text-left p-4 rounded-xl border-2 font-black text-xs transition-all duration-300 ${
                      selectedDesc === null && !isMatched ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'
                    } ${wordBgStyle}`
                  },
                    word.text
                  );
                }),
                Object.keys(matches).length === 5 && React.createElement("div", { className: "bg-emerald-500/10 border-2 border-emerald-500/20 text-emerald-800 dark:text-emerald-400 p-4 rounded-2xl text-center space-y-2 mt-4 animate-in zoom-in-95 duration-300" },
                  React.createElement("p", { className: "font-black text-xs" }, "🎉 ¡TODAS ASOCIADAS CON ÉXITO!"),
                  React.createElement("button", { onClick: resetMatcher, className: "bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-[10px] uppercase shadow-sm" }, "Jugar de nuevo")
                )
              )
            )
          ),

          // Theory Tips Section
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "tips_and_updates", className: "text-sky-500" }),
              "2. Estrategias Clave para la Asociación de Vocabulario"
            ),
            React.createElement("div", { className: "grid md:grid-cols-3 gap-4 text-xs leading-relaxed" },
              [
                {
                  title: "Identificar Categorías Gramaticales",
                  desc: "Determina si la definición busca una acción (verbo), un objeto físico (sustantivo) o una característica (adjetivo) para emparejarla con la categoría correcta."
                },
                {
                  title: "Buscar Sinónimos y Pistas",
                  desc: "Indicadores de tiempo como 'period of ten years' apuntan de inmediato a 'decade'. 'A person who...' indica una profesión. Identifica estas raíces semánticas."
                },
                {
                  title: "La Regla de Eliminación",
                  desc: "Hay 5 definiciones pero 8 opciones de palabras. Completa primero las más fáciles, lo que te dejará menos opciones para las que te resulten difíciles."
                }
              ].map((tip, i) => (
                React.createElement("div", { key: i, className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/85" },
                  React.createElement("h4", { className: "font-black text-sky-700 dark:text-sky-400 mb-2 uppercase tracking-wide" }, tip.title),
                  React.createElement("p", { className: "text-slate-550 dark:text-slate-400" }, tip.desc)
                )
              ))
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
                scorePercent >= 80 ? "¡Puntaje Excelente!" : scorePercent >= 50 ? "¡Buen Intento!" : "Sigue Practicando"
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Parte 1: Vocabulario"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "Ten cuidado con los distractores que pertenecen a la misma categoría semántica. Por ejemplo, si la definición dice 'una cubierta gruesa para mantenerte caliente', tanto 'Blanket' como 'Curtain' son telas, pero 'Blanket' cumple la función de abrigar."
                )
              ),
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, "PRÁCTICA DE ASOCIACIÓN"),
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
                    className: "bg-slate-900 dark:bg-sky-600 hover:bg-slate-800 dark:hover:bg-sky-500 text-white font-extrabold px-8 py-3.5 rounded-xl ml-auto block transition-all active:scale-95 shadow-md text-sm"
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
        { id: 'teoria', label: 'Teoría y Simulador', icon: 'menu_book' },
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
                    ? 'bg-white dark:bg-slate-800 text-sky-650 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 scale-100' 
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

    window.renderENModule1 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule1));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
