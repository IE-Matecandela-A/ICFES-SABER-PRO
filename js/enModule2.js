(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule2() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedSign, setSelectedSign] = useState(0);
      
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const signboards = [
        {
          src: "img/sign_no_flash.png",
          title: "No Flash Photography",
          description: "Este aviso indica que las cámaras con flash están prohibidas para proteger objetos históricos sensibles a la luz o evitar distraer a las demás personas.",
          location: "Museo / Galería de Arte",
          clues: "Imperativo 'No' + Sustantivo ('Flash') / 'Do not take photos with flash'."
        },
        {
          src: "img/sign_luggage.png",
          title: "Unattended Luggage",
          description: "Este aviso advierte a los viajeros que deben mantener sus maletas con ellos en todo momento. Los objetos desatendidos serán retirados o destruidos por seguridad.",
          location: "Aeropuerto / Estación de Tren",
          clues: "Palabras clave: 'Luggage' (equipaje), 'Unattended' (desatendido), 'Removed' (retirado)."
        },
        {
          src: "img/sign_wash_hands.png",
          title: "Employees Must Wash Hands",
          description: "Este aviso indica un requisito de higiene obligatorio para los empleados que manipulan alimentos antes de regresar a sus labores.",
          location: "Cocina de Restaurante / Baño",
          clues: "Verbo modal: 'Must' (obligación/deber), palabras clave: 'Employees', 'Wash hands'."
        },
        {
          src: "img/sign_out_of_order.png",
          title: "Out of Order",
          description: "Este aviso señala que una máquina, ascensor o baño público está dañado y no se puede utilizar en el momento.",
          location: "Ascensor / Máquina Dispensadora / Baño Público",
          clues: "Frase idiomática: 'Out of order' (fuera de servicio / dañado)."
        },
        {
          src: "img/sign_boarding_pass.png",
          title: "Boarding Pass Ready",
          description: "Este aviso instruye a los pasajeros a tener listos sus documentos de identidad y pase de abordar para la validación antes de ingresar.",
          location: "Puerta de Embarque de Aeropuerto",
          clues: "Palabras clave: 'Boarding pass' (pase de abordar), 'Ready' (listo), 'Gate' (puerta de embarque)."
        }
      ];

      const questions = [
        {
          question: "Look at the image. Where can you typically see this signboard?",
          imageSrc: "img/sign_no_flash.png",
          options: ["In a library", "In an art museum", "In a swimming pool"],
          correct: 1,
          feedback: "¡Correcto! El símbolo de la cámara tachada y el destello de flash se usa en museos y galerías de arte para prevenir daños químicos a las pinturas antiguas causados por la luz intensa del flash."
        },
        {
          question: "Look at the image. Where can you typically see this signboard?",
          imageSrc: "img/sign_luggage.png",
          options: ["In a shoe shop", "In an airport terminal", "In a basketball court"],
          correct: 1,
          feedback: "¡Perfecto! Las advertencias de seguridad sobre mantener tu 'luggage' (equipaje) contigo son típicas de centros de transporte masivo como aeropuertos o estaciones de tren."
        },
        {
          question: "Look at the image. Where must employees obey this instruction?",
          imageSrc: "img/sign_wash_hands.png",
          options: ["In a cinema room", "In a food kitchen", "In a car garage"],
          correct: 1,
          feedback: "¡Correcto! Lavarse las manos es una regla de higiene obligatoria para los trabajadores en zonas de manipulación de alimentos, como cocinas de restaurantes o baños."
        },
        {
          question: "Look at the image. Where can you see this signboard?",
          imageSrc: "img/sign_out_of_order.png",
          options: ["On a broken coffee machine", "On a new highway road", "On a library book shelf"],
          correct: 0,
          feedback: "¡Genial! 'Out of order' es la expresión en inglés estándar que se utiliza cuando un electrodoméstico, máquina electrónica o ascensor está dañado y fuera de servicio."
        },
        {
          question: "Look at the image. Where is this signboard displayed?",
          imageSrc: "img/sign_boarding_pass.png",
          options: ["At a bus station ticket office", "At an airport gate", "At a hotel reception desk"],
          correct: 1,
          feedback: "¡Excelente! Un 'Boarding Pass' es el documento oficial requerido para abordar un avión. Se muestra en la puerta de embarque ('gate') antes de ingresar al avión."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Parte 2: Avisos Públicos y Pragmática"),
              React.createElement("p", { className: "text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "La Parte 2 evalúa tu competencia pragmática. Se te muestra un aviso público de la vida cotidiana y debes deducir dónde se encuentra. Comprender el contexto e identificar verbos modales de advertencia como ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "must, should, do not"),
                " o palabras clave como ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "luggage, order, pass"),
                " es el secreto para lograr el puntaje máximo.",
                React.createElement("strong", { className: "font-semibold text-sky-600 block mt-2" }, "¡El contexto del aviso lo es todo en esta parte!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Pistas Pragmáticas de Oro:"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-400 text-sm" },
                  [
                    "Imperativos: Expresiones como 'Do not' y 'No' comunican prohibiciones estrictas en zonas públicas.",
                    "Obligaciones: El modal 'Must' representa una norma de seguridad o ley de obligatorio cumplimiento (ej. lavarse las manos).",
                    "Modismos: La frase 'Out of order' siempre señala que una máquina o servicio no está funcionando."
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
                    React.createElement("span", { className: "p-2 bg-sky-100 dark:bg-sky-950/50 text-sky-600 rounded-lg" }, React.createElement(Icon, { name: "info" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "PRAGMÁTICA DE AVISOS"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Saber 11 - Parte 2")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"Presta mucha atención al entorno del aviso. ¡Una señal de seguridad vial nunca aparecerá en el baño de una casa!\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-sky-700 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Ver Galería ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // Signboard Gallery component
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "collections", className: "text-sky-500" }),
              "1. Galería Interactiva de Avisos Públicos"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, 
              "Haz clic en los botones de la izquierda para inspeccionar avisos públicos reales, analizar su significado y aprender dónde se ubican."
            ),
            
            React.createElement("div", { className: "grid md:grid-cols-12 gap-8 items-stretch" },
              // Left: Signboard Selector
              React.createElement("div", { className: "md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between gap-4" },
                React.createElement("div", { className: "flex flex-col gap-2" },
                  signboards.map((sign, index) => (
                    React.createElement("button", {
                      key: index,
                      onClick: () => setSelectedSign(index),
                      className: `p-3 rounded-xl border text-left transition-all duration-300 text-xs font-bold flex items-center gap-3 ${
                        selectedSign === index 
                          ? 'border-sky-500 bg-sky-500/10 text-sky-600 dark:text-sky-400' 
                          : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`
                    },
                      React.createElement("span", { className: "w-2 h-2 rounded-full bg-current" }),
                      sign.title
                    )
                  ))
                )
              ),
              
              // Right: Signboard Details
              React.createElement("div", { className: "md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col lg:flex-row gap-6 relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-sky-500" }),
                
                // Signboard Image Box
                React.createElement("div", { className: "w-36 h-36 bg-slate-50 dark:bg-slate-950/30 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-center justify-center shrink-0 overflow-hidden mx-auto lg:mx-0 p-2 shadow-inner" },
                  React.createElement("img", { loading: "lazy", decoding: "async",
                    src: signboards[selectedSign].src,
                    alt: signboards[selectedSign].title,
                    className: "w-full h-full object-contain select-none transition-all duration-300 hover:scale-105"
                  })
                ),
                
                // Signboard Text Info
                React.createElement("div", { className: "flex-1 space-y-4" },
                  React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white" }, signboards[selectedSign].title),
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-0.5 text-[9px]" }, "Descripción y Significado:"),
                    React.createElement("p", { className: "text-slate-700 dark:text-slate-300 text-xs font-light leading-relaxed" }, signboards[selectedSign].description)
                  ),
                  React.createElement("div", { className: "grid grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-3 text-xs" },
                    React.createElement("div", null,
                      React.createElement("span", { className: "text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider font-bold text-[9px] mb-0.5" }, "Ubicación Típica:"),
                      React.createElement("span", { className: "text-slate-800 dark:text-white font-bold" }, signboards[selectedSign].location)
                    ),
                    React.createElement("div", null,
                      React.createElement("span", { className: "text-amber-600 dark:text-amber-400 block uppercase tracking-wider font-bold text-[9px] mb-0.5" }, "Pistas de Gramática:"),
                      React.createElement("span", { className: "text-slate-500 dark:text-slate-400 font-normal leading-tight block mt-0.5" }, signboards[selectedSign].clues)
                    )
                  )
                )
              )
            )
          ),

          // Alertas/Trucos
          React.createElement("div", { className: "bg-sky-500/10 border-2 border-sky-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-sky-800 dark:text-sky-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "verified_user", className: "text-sky-500" }),
              "2. Consejos y Trucos de Avisos para el Saber 11"
            ),
            React.createElement("div", { className: "space-y-4 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-sky-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Descarta 'Habitaciones Privadas' o el 'Hogar':"), 
                  " Los avisos están diseñados para regular conductas en espacios compartidos. Opciones como 'in a house', 'in a bedroom' o 'in a personal car' casi siempre son distractores erróneos."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-sky-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Busca el Verbo y los Sustantivos Clave:"), 
                  " Un aviso que dice 'Keep off the grass' te pide no caminar sobre el pasto. Identifica 'grass' y asócialo de inmediato con 'park' o 'garden'."
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
                scorePercent >= 80 ? "¡Experto en Avisos!" : scorePercent >= 50 ? "¡Buen Trabajo!" : "Sigue Practicando"
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
              // Left: Signboard rendering
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner flex flex-col items-center gap-4 text-center" },
                React.createElement("span", { className: "text-slate-400 dark:text-slate-500 font-black text-[9px] uppercase tracking-wider block" }, "Imagen del Aviso:"),
                React.createElement("div", { className: "w-44 h-44 bg-white dark:bg-slate-950/50 rounded-2xl border border-slate-150 dark:border-slate-800 p-4 shadow-md flex items-center justify-center overflow-hidden" },
                  React.createElement("img", { loading: "lazy", decoding: "async",
                    src: q.imageSrc,
                    alt: "Question sign",
                    className: "w-full h-full object-contain select-none"
                  })
                ),
                React.createElement("p", { className: "text-[10px] text-slate-400 italic" }, "Analiza las palabras y los iconos del letrero para deducir el lugar.")
              ),
              
              // Right: Quiz answers
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, "PRÁCTICA DE AVISOS PÚBLICOS"),
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
        { id: 'teoria', label: 'Teoría y Galería', icon: 'menu_book' },
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
                    ? 'bg-white dark:bg-slate-800 text-sky-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 scale-100' 
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

    window.renderENModule2 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule2));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
