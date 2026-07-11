(function() {
    const React = window.React;
    const { useState, useEffect, useRef } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function ENModule6() {
      const [activeTab, setActiveTab] = useState('introduccion');
      
      // Simulator States
      const [isStarted, setIsStarted] = useState(false);
      const [timeLimit, setTimeLimit] = useState(300); // 300 seconds default
      const [timeLeft, setTimeLeft] = useState(300);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [answers, setAnswers] = useState({}); // { questionIndex: optionIndex }
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [selectedTimeMode, setSelectedTimeMode] = useState(300); // 300 or 180
      const timerRef = useRef(null);

      // Strategies States
      const [activePartStrategy, setActivePartStrategy] = useState(1);

      const questions = [
        {
          id: 1,
          part: 1,
          partName: "Parte 1: Vocabulario (Asociación)",
          question: "Read the description and choose the correct word:\n\n\"A small, handheld device that shows you the time.\"",
          options: ["Clock", "Watch", "Calendar", "Mirror"],
          correct: 1, // Watch
          explanation: "Un 'watch' es un reloj de pulsera o dispositivo portátil diseñado para llevar consigo, mientras que 'clock' es un reloj fijo de pared o mesa."
        },
        {
          id: 2,
          part: 2,
          partName: "Parte 2: Avisos Públicos (Pragmática)",
          question: "Where would you see this sign?\n\n\"LUGGAGE PICK-UP AREA: Have your boarding pass ready\"",
          options: ["In a library", "At an airport", "In a department store", "At a train station entrance"],
          correct: 1, // At an airport
          explanation: "Los términos 'Luggage pick-up' (zona de reclamo de equipaje) y 'boarding pass' (pase de abordar) son de uso exclusivo en aeropuertos."
        },
        {
          id: 3,
          part: 3,
          partName: "Parte 3: Conversaciones Cortas",
          question: "Complete the conversation:\n\nSpeaker A: \"I failed my driving test yesterday.\"\nSpeaker B: \"__________________\"",
          options: ["Oh, what a pity! You'll do better next time.", "Yes, I like driving very much.", "Congratulations, that is wonderful!"],
          correct: 0, // Oh, what a pity!
          explanation: "Cuando un interlocutor comparte una mala noticia, la respuesta pragmática natural es mostrar empatía ('what a pity') y darle ánimos."
        },
        {
          id: 4,
          part: 4,
          partName: "Parte 4: Textos con Espacios (Gramática Básica)",
          question: "Choose the correct word to fill in the blank:\n\n\"We decided to go for a walk in the forest __________ the heavy rain.\"",
          options: ["although", "despite", "because of", "however"],
          correct: 1, // despite
          explanation: "'Despite' (a pesar de) actúa como preposición y debe ser seguido por un sustantivo o frase nominal ('the heavy rain'). 'Although' es conjunción y requiere sujeto + verbo."
        },
        {
          id: 5,
          part: 5,
          partName: "Parte 5: Comprensión de Lectura Literal",
          question: "Read the short text and answer the question:\n\n\"The Galapagos Islands are famous for their unique wildlife. In 1835, Charles Darwin visited the islands, and his observations of different species there inspired his theory of evolution by natural selection. Today, strict conservation rules limit the number of tourists who can visit the islands to protect the delicate ecosystem.\"\n\nQuestion: According to the text, why are tourist numbers restricted today?",
          options: ["To make tickets more expensive for luxury travelers.", "To protect the delicate local ecosystem.", "Because there is not enough wildlife to see anymore."],
          correct: 1, // To protect the delicate local ecosystem.
          explanation: "El texto indica explícitamente que los turistas se restringen para 'protect the delicate ecosystem' (proteger el delicado ecosistema)."
        },
        {
          id: 6,
          part: 6,
          partName: "Parte 6: Comprensión de Lectura Crítica (Inferencia)",
          question: "Read the short text and answer the question:\n\n\"Electric vehicles (EVs) are marketed as the ultimate solution to urban air pollution. While they emit no tailpipe gases, the source of their electricity is often coal or gas power plants. Furthermore, battery manufacturing requires mining raw materials under controversial environmental conditions. Thus, calling them 'zero-emission' is, at best, a partial truth.\"\n\nQuestion: What is the author's main point about electric vehicles?",
          options: ["They are completely useless and we should stop building them.", "Their environmental benefits are sometimes overstated or ignore full lifecycle emissions.", "They are the only way to solve urban pollution immediately.", "Battery manufacturing is the only clean part of their production process."],
          correct: 1, // Their environmental benefits are sometimes overstated...
          explanation: "El autor cuestiona la afirmación de 'cero emisiones' al detallar que estas se trasladan a plantas eléctricas y a la minería, sugiriendo que sus beneficios se exageran."
        },
        {
          id: 7,
          part: 7,
          partName: "Parte 7: Textos con Espacios (Gramática Avanzada / Vocabulario)",
          question: "Choose the correct word to fill in the blank:\n\n\"If you want to improve your fluency in English, you __________ practice speaking every day.\"",
          options: ["ought", "should", "would", "might"],
          correct: 1, // should
          explanation: "'Should' es el verbo modal para sugerencia o recomendación. 'Ought' requeriría obligatoriamente la preposición to ('ought to practice')."
        },
        {
          id: 8,
          part: 1,
          partName: "Parte 1: Vocabulario (Asociación)",
          question: "Read the description and choose the correct word:\n\n\"A system of tracks on which trains run.\"",
          options: ["Highway", "Airport", "Railway", "Pavement"],
          correct: 2, // Railway
          explanation: "Una 'railway' (vía férrea) es la red de rieles ('tracks') diseñada para el tránsito de trenes."
        },
        {
          id: 9,
          part: 2,
          partName: "Parte 2: Avisos Públicos (Pragmática)",
          question: "Where would you see this sign?\n\n\"PLEASE DO NOT USE FLASH PHOTOGRAPHY DURING THE PERFORMANCE\"",
          options: ["In a swimming pool", "In a theater or concert hall", "In a supermarket", "At a gas station"],
          correct: 1, // In a theater
          explanation: "Palabras clave como 'performance' (espectáculo) y 'flash photography' (fotografía con flash) corresponden a un teatro o auditorio."
        },
        {
          id: 10,
          part: 3,
          partName: "Parte 3: Conversaciones Cortas",
          question: "Complete the conversation:\n\nSpeaker A: \"Would you like some more coffee?\"\nSpeaker B: \"__________________\"",
          options: ["Yes, please. Just a little bit.", "No, I am not drinking coffee yesterday.", "It is very expensive here."],
          correct: 0, // Yes, please. Just a little bit.
          explanation: "Un ofrecimiento con 'Would you like...?' se acepta de forma educada con 'Yes, please' o se rechaza con 'No, thank you'."
        }
      ];

      // Timer effect
      useEffect(() => {
        if (isStarted && !isSubmitted && timeLeft > 0) {
          timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
              if (prev <= 1) {
                clearInterval(timerRef.current);
                handleAutoSubmit();
                return 0;
              }
              return prev - 1;
            });
          }, 1000);
        }

        return () => {
          if (timerRef.current) clearInterval(timerRef.current);
        };
      }, [isStarted, isSubmitted, timeLeft]);

      const startSimulator = () => {
        setTimeLimit(selectedTimeMode);
        setTimeLeft(selectedTimeMode);
        setAnswers({});
        setCurrentQuestion(0);
        setIsSubmitted(false);
        setIsStarted(true);
      };

      const selectOption = (optIndex) => {
        if (isSubmitted) return;
        setAnswers(prev => ({ ...prev, [currentQuestion]: optIndex }));
      };

      const nextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
        }
      };

      const prevQuestion = () => {
        if (currentQuestion > 0) {
          setCurrentQuestion(currentQuestion - 1);
        }
      };

      const handleAutoSubmit = () => {
        setIsSubmitted(true);
        if (typeof confetti !== 'undefined') {
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.7 } });
        }
      };

      const handleManualSubmit = () => {
        if (confirm("¿Estás seguro de que deseas finalizar el simulacro y ver tus resultados?")) {
          setIsSubmitted(true);
          if (typeof confetti !== 'undefined') {
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
          }
        }
      };

      const restartSimulator = () => {
        setIsStarted(false);
        setIsSubmitted(false);
        setAnswers({});
        setCurrentQuestion(0);
      };

      const calculateScore = () => {
        let correctCount = 0;
        questions.forEach((q, idx) => {
          if (answers[idx] === q.correct) {
            correctCount++;
          }
        });
        return correctCount;
      };

      const getCefrLevel = (score) => {
        if (score >= 9) return { level: "B1", desc: "Usuario Independiente (Intermedio / Alto)", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20" };
        if (score >= 6) return { level: "A2", desc: "Usuario Básico (Pre-Intermedio / Medio)", color: "text-sky-500 bg-sky-500/10 border-sky-500/20" };
        if (score >= 3) return { level: "A1", desc: "Usuario Básico (Elemental / Básico)", color: "text-amber-500 bg-amber-500/10 border-amber-500/20" };
        return { level: "A-", desc: "Principiante (Bajo)", color: "text-rose-500 bg-rose-500/10 border-rose-500/20" };
      };

      const getIcfesScoreEstimate = (score) => {
        // Rango de escala estándar del ICFES (0 - 100)
        return Math.min(100, Math.max(15, (score * 9) + 10));
      };

      const formatTime = (secs) => {
        const mins = Math.floor(secs / 60);
        const remainingSecs = secs % 60;
        return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
      };

      const renderIntroduccion = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Módulo 6: Simulacro y Estrategias del Examen"),
              React.createElement("p", { className: "text-slate-700 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "La sección de inglés de las pruebas Saber 11 evalúa vocabulario, avisos, diálogos y comprensión de textos en varios niveles. En este módulo de cierre, pondrás a prueba tus habilidades en un ",
                React.createElement("strong", { className: "font-bold text-sky-500" }, "simulacro contra reloj"),
                " con el fin de dominar el tiempo por pregunta, descartar distractores típicos de examen y consolidar tus aciertos.",
                React.createElement("strong", { className: "font-semibold text-sky-600 block mt-2" }, "¡Administra bien el tiempo y lee con atención!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-sky-400 to-blue-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "Estructura Evaluada en Inglés Saber 11:"),
                React.createElement("ul", { className: "space-y-3 font-medium text-slate-700 dark:text-slate-400 text-xs" },
                  [
                    "Parte 1: Vocabulario (Asociar 5 definiciones cortas con 8 palabras opciones).",
                    "Parte 2: Avisos Públicos (Deducir el lugar o intención de un aviso en la calle).",
                    "Parte 3: Diálogos Cortos (Completar conversaciones de forma coherente y natural).",
                    "Parte 4: Textos con Espacios - Gramática Básica (Preposiciones, pronombres y verbos).",
                    "Parte 5: Lectura Literal (Responder sobre datos explícitos presentes en el texto).",
                    "Parte 6: Lectura Crítica (Inferir ideas implícitas, tonos u opiniones del autor).",
                    "Parte 7: Textos con Espacios - Gramática Avanzada (Conectores y modales de nivel B1)."
                  ].map((text, i) => 
                    React.createElement("li", { key: i, className: "flex items-start gap-2" },
                      React.createElement("span", { className: "text-sky-500 font-extrabold" }, "•"),
                      React.createElement("span", null, text)
                    )
                  )
                )
              )
            ),
            React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[360px]" },
              React.createElement("div", { className: "relative w-full flex flex-col items-center" },
                React.createElement("div", { className: "w-full max-w-[200px] aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-slate-150 mb-6" },
                  React.createElement("img", { loading: "lazy", decoding: "async",
                    src: "img/hero_student_laptop.png",
                    alt: "Estudiante rindiendo examen en computadora",
                    className: "w-full h-full object-cover select-none"
                  })
                ),
                React.createElement("div", { className: "relative z-10 p-5 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-xs text-center" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs mb-1" }, "¿LISTO PARA MEDIR TU NIVEL?"),
                  React.createElement("p", { className: "text-[10px] text-slate-500 dark:text-slate-300 leading-relaxed italic" },
                    "\"La simulación de ambiente real te prepara para el gran día. Mide tu nivel, analiza tus errores y afina tus trucos de descarte.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('simulador'),
                className: "mt-6 bg-slate-900 dark:bg-sky-700 hover:bg-slate-800 dark:hover:bg-sky-555 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(14,165,233,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Abrir Simulador ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderSimulador = () => {
        // Case 1: Simulator hasn't started yet
        if (!isStarted) {
          return (
            React.createElement("div", { className: "animate-in fade-in duration-500 max-w-2xl mx-auto py-8 space-y-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-8 shadow-md text-center space-y-6" },
                React.createElement("div", { className: "w-16 h-16 bg-sky-100 dark:bg-sky-950/40 text-sky-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-sm" }, 
                  React.createElement(Icon, { name: "timer" })
                ),
                React.createElement("div", { className: "space-y-2" },
                  React.createElement("h2", { className: "text-2xl font-black text-slate-800 dark:text-white" }, "Reglas del Simulacro Contra Reloj"),
                  React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto" }, 
                    "Ponte a prueba en las 7 áreas de inglés evaluadas en el Saber 11. Selecciona la modalidad de tiempo y responde las 10 preguntas."
                  )
                ),

                // Difficulty selector
                React.createElement("div", { className: "grid grid-cols-2 gap-4 max-w-md mx-auto" },
                  [
                    { time: 300, label: "Modo Normal", sub: "5:00 minutos (30s / preg)", icon: "speed" },
                    { time: 180, label: "Modo Adrenalina", sub: "3:00 minutos (18s / preg)", icon: "bolt" }
                  ].map((mode) => (
                    React.createElement("button", {
                      key: mode.time,
                      onClick: () => setSelectedTimeMode(mode.time),
                      className: `p-4 rounded-2xl border-2 text-left transition-all duration-300 ${
                        selectedTimeMode === mode.time 
                          ? 'border-sky-500 bg-sky-500/5 text-sky-600 dark:text-sky-400 scale-105 shadow-sm font-bold'
                          : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 text-slate-500 hover:border-slate-300'
                      }`
                    },
                      React.createElement("div", { className: "flex items-center gap-2 mb-1" },
                        React.createElement(Icon, { name: mode.icon, className: selectedTimeMode === mode.time ? 'text-sky-500' : 'text-slate-400' }),
                        React.createElement("span", { className: "text-xs font-black" }, mode.label)
                      ),
                      React.createElement("div", { className: "text-[10px] opacity-75 font-medium" }, mode.sub)
                    ))
                  )
                ),

                React.createElement("div", { className: "bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium" },
                  React.createElement("strong", { className: "text-sky-600 block uppercase mb-1" }, "💡 Configuración del Simulador:"),
                  "Durante el examen no verás si respondiste de forma correcta o incorrecta. Al finalizar o cuando el tiempo acabe, se generará tu diagnóstico con las correcciones correspondientes."
                ),

                React.createElement("button", {
                  onClick: startSimulator,
                  className: "w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-4 rounded-2xl transition-all shadow-md hover:shadow-emerald-500/10 active:scale-95 flex items-center justify-center gap-2 text-sm"
                },
                  "Iniciar Simulacro ahora", React.createElement(Icon, { name: "play_arrow" })
                )
              )
            )
          );
        }

        // Case 2: Simulator finished and showing results
        if (isSubmitted) {
          const finalScore = calculateScore();
          const cefr = getCefrLevel(finalScore);
          const estimatedIcfes = getIcfesScoreEstimate(finalScore);
          
          return (
            React.createElement("div", { className: "animate-in zoom-in-95 duration-500 space-y-8" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "grid md:grid-cols-12 gap-8 items-center" },
                  // Score circle and details
                  React.createElement("div", { className: "md:col-span-7 space-y-6" },
                    React.createElement("span", { className: "text-xs font-black text-slate-400 uppercase tracking-widest block" }, "Diagnóstico Completado"),
                    React.createElement("h2", { className: "text-3xl font-black text-slate-800 dark:text-white" }, "Resultados de tu Simulacro"),
                    
                    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                      React.createElement("div", { className: `p-5 rounded-2xl border-2 flex flex-col justify-center ${cefr.color}` },
                        React.createElement("span", { className: "text-[10px] font-black uppercase opacity-75 tracking-wider mb-1" }, "Nivel MCER Estimado"),
                        React.createElement("span", { className: "text-3xl font-black" }, cefr.level),
                        React.createElement("span", { className: "text-[10px] font-bold mt-1 opacity-90" }, cefr.desc)
                      ),
                      React.createElement("div", { className: "p-5 rounded-2xl border-2 border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-col justify-center" },
                        React.createElement("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1" }, "Puntaje Saber 11 Estimado"),
                        React.createElement("span", { className: "text-3xl font-black text-slate-800 dark:text-white" }, `${estimatedIcfes}/100`),
                        React.createElement("span", { className: "text-[10px] font-bold text-slate-400 mt-1" }, `Acertaste ${finalScore} de 10 preguntas`)
                      )
                    ),

                    React.createElement("div", { className: "space-y-2 text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-medium" },
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Retroalimentación de Diagnóstico:"),
                      finalScore >= 9 && React.createElement("p", null, "¡Excelente trabajo! Demuestras competencias sólidas del nivel B1 (Usuario Independiente / Alto). Este es el nivel máximo evaluado en las pruebas Saber 11 para bachillerato. Estás completamente preparado para la prueba real."),
                      finalScore >= 6 && finalScore <= 8 && React.createElement("p", null, "¡Gran resultado! Tienes un nivel A2 sólido (Usuario Básico / Medio). Para subir a la banda B1, te recomendamos enfocarte en las preposiciones complejas de textos con espacios (Parte 7) y en la deducción de intenciones en lecturas analíticas (Parte 6)."),
                      finalScore >= 3 && finalScore <= 5 && React.createElement("p", null, "Muestras una base inicial en la banda A1 (Usuario Básico / Inicial). Te recomendamos practicar más la asociación de vocabulario de la vida real (Parte 1) y los condicionales o preposiciones (Parte 4) para asegurar más aciertos en el examen."),
                      finalScore <= 2 && React.createElement("p", null, "Te encuentras actualmente en la banda A- (Usuario Principiante). Trabaja primero en definiciones de palabras sencillas y avisos públicos comunes (Partes 1 y 2). ¡Revisa la pestaña de estrategias para guiar tu estudio!")
                    )
                  ),

                  // Image on the right
                  React.createElement("div", { className: "md:col-span-5 flex flex-col items-center justify-center" },
                    React.createElement("div", { className: "w-full max-w-[220px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 bg-slate-100 relative group" },
                      React.createElement("img", { loading: "lazy", decoding: "async",
                        src: "img/hero_student_laptop.png",
                        alt: "Estudiante viendo la libreta de calificaciones",
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      })
                    ),
                    React.createElement("button", {
                      onClick: restartSimulator,
                      className: "mt-6 bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs flex items-center gap-2"
                    },
                      React.createElement(Icon, { name: "restart_alt" }), "Reintentar Simulacro"
                    )
                  )
                )
              ),

              // Interactive Question Review Section
              React.createElement("div", { className: "space-y-4" },
                React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
                  React.createElement(Icon, { name: "fact_check", className: "text-sky-500" }),
                  "Revisión Detallada del Simulacro"
                ),
                React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400" }, 
                  "Revisa cada una de tus respuestas. Estudia las explicaciones gramaticales y contextuales en español para evitar trampas en el examen real."
                ),

                React.createElement("div", { className: "space-y-4" },
                  questions.map((q, idx) => {
                    const studentAns = answers[idx];
                    const isCorrect = studentAns === q.correct;
                    
                    return React.createElement("div", { 
                      key: q.id, 
                      className: `border rounded-3xl p-5 md:p-6 bg-white dark:bg-slate-900 transition-all duration-300 relative overflow-hidden ${
                        isCorrect 
                          ? 'border-emerald-250 dark:border-emerald-950/60 shadow-[0_4px_20px_rgba(16,185,129,0.02)]' 
                          : studentAns === undefined
                          ? 'border-slate-200 dark:border-slate-800 opacity-80'
                          : 'border-rose-250 dark:border-rose-950/60 shadow-[0_4px_20px_rgba(244,63,94,0.02)]'
                      }`
                    },
                      // Correct/Wrong side indicator strip
                      React.createElement("div", { 
                        className: `absolute top-0 left-0 w-1.5 h-full ${
                          isCorrect ? 'bg-emerald-500' : studentAns === undefined ? 'bg-slate-400' : 'bg-rose-500'
                        }` 
                      }),

                      // Question Header
                      React.createElement("div", { className: "flex justify-between items-start gap-4 mb-3 border-b border-slate-100 dark:border-slate-800 pb-3" },
                        React.createElement("div", null,
                          React.createElement("span", { className: "text-[10px] font-black text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-2 py-1 rounded-full uppercase tracking-wider block w-fit mb-1" }, q.partName),
                          React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, `Pregunta ${q.id}`)
                        ),
                        React.createElement("div", { className: "flex items-center gap-1 shrink-0" },
                          isCorrect ? 
                            React.createElement("span", { className: "text-emerald-600 dark:text-emerald-400 font-black text-xs flex items-center gap-1" }, React.createElement(Icon, { name: "check_circle" }), "Correcta") : 
                            studentAns === undefined ?
                            React.createElement("span", { className: "text-slate-400 font-bold text-xs flex items-center gap-1" }, React.createElement(Icon, { name: "error_outline" }), "Sin Responder") :
                            React.createElement("span", { className: "text-rose-600 dark:text-rose-455 font-black text-xs flex items-center gap-1" }, React.createElement(Icon, { name: "cancel" }), "Incorrecta")
                        )
                      ),

                      // Question Body
                      React.createElement("p", { className: "text-xs font-bold text-slate-700 dark:text-white mb-4 whitespace-pre-line leading-relaxed font-mono" }, q.question),

                      // Options list
                      React.createElement("div", { className: "grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4" },
                        q.options.map((option, optIdx) => {
                          let optStyle = "border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400";
                          
                          if (optIdx === q.correct) {
                            optStyle = "border-emerald-500 bg-emerald-500/5 text-emerald-800 dark:text-emerald-400 font-bold";
                          } else if (optIdx === studentAns) {
                            optStyle = "border-rose-500 bg-rose-500/5 text-rose-800 dark:text-rose-455 font-bold";
                          }
                          
                          return React.createElement("div", {
                            key: optIdx,
                            className: `p-3 rounded-xl border text-[11px] flex items-center gap-2 ${optStyle}`
                          },
                            React.createElement("span", { className: `w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-extrabold ${
                              optIdx === q.correct ? 'bg-emerald-500 border-emerald-500 text-white' : 
                              optIdx === studentAns ? 'bg-rose-500 border-rose-500 text-white' : 'border-slate-300'
                            }` }, "ABCD"[optIdx]),
                            React.createElement("span", null, option)
                          );
                        })
                      ),

                      // Feedback
                      React.createElement("div", { className: "bg-slate-50 dark:bg-slate-950/20 border border-slate-100 dark:border-slate-800 p-4 rounded-xl text-[10px] leading-relaxed text-slate-700 dark:text-slate-400 font-medium" },
                        React.createElement("strong", { className: "text-slate-800 dark:text-white block mb-1 uppercase tracking-wide" }, "Explicación en Español:"),
                        q.explanation
                      )
                    );
                  })
                )
              )
            )
          );
        }

        // Case 3: Simulation is running
        const q = questions[currentQuestion];
        const hasAnsweredCurrent = answers[currentQuestion] !== undefined;
        const selectedOpt = answers[currentQuestion];
        const isTimeLow = timeLeft < 45;

        return (
          React.createElement("div", { className: "animate-in fade-in duration-500" },
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch" },
              // Left Panel: Timer & Progress Tracker
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner flex flex-col justify-between" },
                React.createElement("div", { className: "space-y-6" },
                  // Timer box
                  React.createElement("div", { className: `p-6 rounded-2xl border text-center transition-all duration-300 ${
                    isTimeLow 
                      ? 'border-rose-500 bg-rose-500/10 text-rose-600 dark:text-rose-400 animate-pulse' 
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/30'
                  }` },
                    React.createElement("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1" }, "Tiempo Restante"),
                    React.createElement("span", { className: "text-4xl font-mono font-black" }, formatTime(timeLeft)),
                    isTimeLow && React.createElement("span", { className: "text-[10px] font-black block mt-2 text-rose-500 tracking-wider animate-bounce" }, "⚠️ ¡TE QUEDA POCO TIEMPO!")
                  ),

                  // Circular/Line Progress indicators
                  React.createElement("div", { className: "space-y-3" },
                    React.createElement("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest block" }, "Progreso del Examen"),
                    React.createElement("div", { className: "grid grid-cols-5 gap-2" },
                      questions.map((_, idx) => {
                        const isCurrent = idx === currentQuestion;
                        const isAnswered = answers[idx] !== undefined;
                        
                        let dotStyle = "border-slate-300 dark:border-slate-800 text-slate-400";
                        if (isCurrent) {
                          dotStyle = "border-sky-500 bg-sky-500/10 text-sky-700 dark:text-sky-400 font-extrabold scale-110 shadow-sm";
                        } else if (isAnswered) {
                          dotStyle = "border-sky-600 bg-sky-600 text-white font-bold";
                        }

                        return React.createElement("button", {
                          key: idx,
                          onClick: () => setCurrentQuestion(idx),
                          className: `w-9 h-9 rounded-xl border-2 flex items-center justify-center text-xs transition-all duration-300 ${dotStyle}`
                        },
                          idx + 1
                        );
                      })
                    )
                  )
                ),

                React.createElement("div", { className: "bg-slate-100 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed font-medium mt-6" },
                  React.createElement("span", { className: "font-black text-sky-500 block uppercase mb-1" }, "💡 Consejo rápido:"),
                  "Puedes cambiar de pregunta haciendo clic en la cuadrícula numérica de arriba para revisar o cambiar respuestas antes de enviar."
                )
              ),

              // Right Panel: Active Question View
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-between" },
                React.createElement("div", { className: "space-y-6" },
                  // Section Header
                  React.createElement("div", { className: "flex justify-between items-center" },
                    React.createElement("span", { className: "text-xs font-black text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-3 py-1.5 rounded-full" }, q.partName),
                    React.createElement("span", { className: "text-xs text-slate-400 font-bold" }, `Pregunta ${currentQuestion + 1} de 10`)
                  ),

                  // Line progress bar
                  React.createElement("div", { className: "w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden" },
                    React.createElement("div", { 
                      className: "bg-gradient-to-r from-sky-400 to-blue-500 h-full transition-all duration-300", 
                      style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } 
                    })
                  ),

                  // Question text
                  React.createElement("h3", { className: "text-base font-extrabold text-slate-800 dark:text-white leading-relaxed whitespace-pre-line font-mono text-lg" }, q.question),

                  // Options grid
                  React.createElement("div", { className: "space-y-3" },
                    q.options.map((option, index) => {
                      const isSelected = selectedOpt === index;
                      let btnStyle = "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 hover:border-sky-300 hover:bg-sky-500/5";
                      let badgeStyle = "border-slate-300 text-slate-400 dark:border-slate-700";

                      if (isSelected) {
                        btnStyle = "border-sky-500 bg-sky-500/5 text-sky-700 dark:text-sky-400 font-bold scale-105";
                        badgeStyle = "bg-sky-500 border-sky-500 text-white font-extrabold shadow-sm";
                      }

                      return React.createElement("button", {
                        key: index,
                        onClick: () => selectOption(index),
                        className: `w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 font-semibold text-xs ${btnStyle}`
                      },
                        React.createElement("span", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs transition-all ${badgeStyle}` },
                          "ABCD"[index]
                        ),
                        React.createElement("span", null, option)
                      );
                    })
                  )
                ),

                // Controls Footer
                React.createElement("div", { className: "flex justify-between items-center mt-8 border-t border-slate-100 dark:border-slate-900 pt-6" },
                  React.createElement("button", {
                    onClick: prevQuestion,
                    disabled: currentQuestion === 0,
                    className: `flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all border ${
                      currentQuestion === 0 
                        ? 'opacity-30 border-slate-200 text-slate-400 cursor-not-allowed' 
                        : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                    }`
                  },
                    React.createElement(Icon, { name: "arrow_back" }), "Atrás"
                  ),

                  currentQuestion === questions.length - 1 ? (
                    React.createElement("button", {
                      onClick: handleManualSubmit,
                      className: "bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs flex items-center gap-2"
                    },
                      "Enviar Simulacro", React.createElement(Icon, { name: "send" })
                    )
                  ) : (
                    React.createElement("button", {
                      onClick: nextQuestion,
                      className: "bg-slate-900 dark:bg-sky-700 hover:bg-slate-800 dark:hover:bg-sky-555 text-white font-extrabold px-6 py-3 rounded-xl transition-all shadow-md active:scale-95 text-xs flex items-center gap-2"
                    },
                      "Siguiente", React.createElement(Icon, { name: "arrow_forward" })
                    )
                  )
                )
              )
            )
          )
        );
      };

      const renderEstrategias = () => {
        const strategyContent = {
          1: {
            title: "Parte 1: Vocabulario (Asociación)",
            desc: "Esta sección presenta 5 definiciones y una lista de 8 palabras. Debes emparejar la definición en inglés con su palabra correspondiente.",
            evaluates: "Conocimiento semántico, asociación de categorías generales y definiciones de adjetivos o sustantivos.",
            tips: [
              "Identifica categorías semánticas primero: si la definición menciona 'un lugar', filtra únicamente las palabras de sitios físicos (ej. hospital, school).",
              "Revisa raíces gramaticales: determina si define a una persona ('someone who...'), un objeto o una acción física.",
              "Aplica descarte sistemático: asocia primero las definiciones que te resulten más fáciles. Esto reduce la lista para las opciones complejas."
            ]
          },
          2: {
            title: "Parte 2: Avisos Públicos (Pragmática)",
            desc: "Presenta imágenes con avisos públicos de advertencia. Debes seleccionar la ubicación lógica de la vida real donde aparecería cada letrero.",
            evaluates: "Comprensión pragmática del contexto, advertencias comunes de seguridad y reglas públicas.",
            tips: [
              "Identifica verbos/sustantivos principales: letreros sobre 'luggage' (equipaje) corresponden a aeropuertos; 'silence' (silencio) a bibliotecas.",
              "Deduce la intención: ¿El letrero te prohíbe una acción (no flash), te advierte de un peligro, o indica un requisito de higiene?",
              "Descarta 'habitaciones privadas': los avisos públicos regulan conductas en espacios compartidos. Evita opciones de casas privadas o carros."
            ]
          },
          3: {
            title: "Parte 3: Conversaciones Cortas",
            desc: "Lee diálogos cortos de la vida cotidiana donde falta la réplica del segundo hablante. Elige la opción de respuesta más coherente.",
            evaluates: "Habilidades de comunicación social estándar, pragmática conversacional y coherencia en la interacción.",
            tips: [
              "Analiza la emoción del Hablante A: si comparte un problema, responde mostrando disculpas o solidaridad. Evita respuestas secas o fuera de tono.",
              "Sigue estructuras de cortesía: responde coherentemente a ofrecimientos ('Would you like...?') aceptando o rechazando formalmente.",
              "Cuidado con la compatibilidad de tiempos: si te preguntan en pasado, la respuesta conversacional estándar debe estar en el mismo tiempo."
            ]
          },
          4: {
            title: "Parte 4: Textos con Espacios (Gramática Básica)",
            desc: "Un texto con espacios vacíos donde debes elegir entre 3 opciones gramaticales de opción múltiple para completar la oración.",
            evaluates: "Gramática estructural (preposiciones, pronombres relativos, conjunciones y auxiliares simples).",
            tips: [
              "Lee la oración completa antes de seleccionar: el conector o preposición depende directamente de las palabras que siguen al espacio vacío.",
              "Deduce la relación lógica de la frase: define si el texto requiere una adición (and), un contraste (but, although, despite) o una causa (because).",
              "Recuerda las preposiciones comunes: asocia qué preposición acompaña a qué verbo o adjetivo (ej. 'good at', 'depend on', 'interested in')."
            ]
          },
          5: {
            title: "Parte 5: Lectura Literal",
            desc: "Pasaje informativo acompañado de preguntas sobre información explícita y directa presente en el texto.",
            evaluates: "Técnica de escaneo rápido (scanning), reconocimiento de sinónimos y recolección de evidencia literal.",
            tips: [
              "Busca nombres propios o cifras: las mayúsculas de países, nombres de personas o cifras numéricas te ubican al instante en el párrafo correcto.",
              "Identifica el parafraseo simple: la opción correcta suele redactar el mismo dato del texto utilizando palabras o sinónimos más sencillos.",
              "No sobreinterpretes: si no se menciona directamente dentro de la lectura, descarta esa opción por más lógica que parezca en la vida real."
            ]
          },
          6: {
            title: "Parte 6: Lectura Crítica (Inferencia)",
            desc: "Pasaje argumentativo con preguntas analíticas que evalúan la postura del autor, opiniones implícitas, tonos o el propósito central del escrito.",
            evaluates: "Comprensión inferencial, detección del tono, postura o tesis del autor.",
            tips: [
              "Analiza adjetivos con carga de opinión: si el autor usa términos como 'biased' (sesgado), 'incorrect' o 'valuable', define su tono u opinión.",
              "Ubica la tesis central: por lo general, los argumentos centrales y la tesis se ubican al inicio del pasaje o en el párrafo final de conclusión.",
              "Define el destinatario: asocia el nivel técnico del vocabulario con el tipo de público para el que fue redactado el artículo."
            ]
          },
          7: {
            title: "Parte 7: Textos con Espacios (Gramática Avanzada)",
            desc: "Cloze test de nivel B1 con 4 opciones por cada espacio vacío, evaluando gramática y vocabulario avanzados.",
            evaluates: "Vocabulario de nivel intermedio, phrasal verbs, condicionales avanzados y modales en contexto.",
            tips: [
              "Domina las cláusulas condicionales: repasa la estructura del primer y segundo condicional (ej. 'if I had... I would...').",
              "Estudia phrasal verbs frecuentes: memoriza verbos compuestos comunes de nivel intermedio B1 (ej. 'give up', 'carry out', 'set up').",
              "Realiza una prueba auditiva mental: lee la oración con cada opción. El flujo gramatical natural te ayudará a detectar la preposición adecuada."
            ]
          }
        };

        const currentStrategy = strategyContent[activePartStrategy];

        return (
          React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch" },
              // Left: Strategy selection menu
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner space-y-2" },
                React.createElement("span", { className: "text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-4" }, "Partes de la Prueba"),
                [1, 2, 3, 4, 5, 6, 7].map((num) => (
                  React.createElement("button", {
                    key: num,
                    onClick: () => setActivePartStrategy(num),
                    className: `w-full text-left p-3.5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-3 ${
                      activePartStrategy === num
                        ? 'border-sky-500 bg-sky-500/5 text-sky-700 dark:text-sky-400 font-bold scale-105'
                        : 'border-transparent bg-white dark:bg-slate-950/20 text-slate-600 dark:text-slate-400 hover:border-slate-200'
                    }`
                  },
                    React.createElement("span", { className: `w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                      activePartStrategy === num ? 'bg-sky-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                    }` }, num),
                    React.createElement("span", { className: "text-xs font-bold truncate" }, strategyContent[num].title)
                  )
                ))
              ),

              // Right: Selected Strategy Details
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md space-y-6" },
                React.createElement("div", { className: "border-b border-slate-100 dark:border-slate-900 pb-4" },
                  React.createElement("span", { className: "text-[10px] font-black text-sky-600 bg-sky-50 dark:bg-sky-950/20 px-2.5 py-1 rounded-full uppercase tracking-wider mb-2 inline-block" }, `Saber 11 - Inglés - Parte ${activePartStrategy}`),
                  React.createElement("h3", { className: "text-2xl font-black text-slate-800 dark:text-white" }, currentStrategy.title)
                ),

                React.createElement("div", { className: "space-y-4 text-xs font-medium text-slate-700 dark:text-slate-300 leading-relaxed" },
                  React.createElement("div", null,
                    React.createElement("strong", { className: "text-slate-800 dark:text-white block mb-1 uppercase tracking-wide text-[10px]" }, "Descripción de la Parte:"),
                    React.createElement("p", null, currentStrategy.desc)
                  ),
                  React.createElement("div", null,
                    React.createElement("strong", { className: "text-slate-800 dark:text-white block mb-1 uppercase tracking-wide text-[10px]" }, "Qué se Evalúa:"),
                    React.createElement("p", null, currentStrategy.evaluates)
                  ),
                  React.createElement("div", { className: "space-y-3" },
                    React.createElement("strong", { className: "text-slate-800 dark:text-white block mb-1 uppercase tracking-wide text-[10px]" }, "Consejos de Oro:"),
                    React.createElement("ul", { className: "space-y-3 pl-1" },
                      currentStrategy.tips.map((tip, idx) => (
                        React.createElement("li", { key: idx, className: "flex items-start gap-3" },
                          React.createElement("div", { className: "mt-0.5 bg-sky-100 dark:bg-sky-955/30 p-0.5 rounded-full shrink-0" },
                            React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-sky-700 dark:text-sky-400" })
                          ),
                          React.createElement("span", null, tip)
                        )
                      ))
                    )
                  )
                )
              )
            )
          )
        );
      };

      const tabs = [
        { id: 'introduccion', label: 'Introducción', icon: 'auto_stories' },
        { id: 'simulador', label: 'Simulacro Contra Reloj', icon: 'timer' },
        { id: 'estrategias', label: 'Estrategias de Examen', icon: 'psychology' }
      ];

      return (
        React.createElement("div", { className: "max-w-6xl mx-auto py-8 px-4" },
          React.createElement("div", { className: "flex border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto custom-scrollbar gap-2 pb-1" },
            tabs.map(tab => 
              React.createElement("button", {
                key: tab.id,
                onClick: () => {
                  if (isStarted && !isSubmitted && tab.id !== 'simulador') {
                    if (confirm("Si sales del simulador en ejecución perderás tu progreso actual. ¿Deseas salir de todas formas?")) {
                      setIsStarted(false);
                      setActiveTab(tab.id);
                    }
                  } else {
                    setActiveTab(tab.id);
                  }
                },
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
            activeTab === 'simulador' && renderSimulador(),
            activeTab === 'estrategias' && renderEstrategias()
          )
        )
      );
    }

    window.renderENModule6 = (containerId) => {
      console.log("React EN Engine: Executing on", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(ENModule6));
        } catch (e) {
          console.error("React EN Engine Error:", e);
        }
      }
    };
})();
