(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule3() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "La Erosión del Silencio",
        text: `En un rincón de la vieja biblioteca pública, los tomos empastados en cuero de la Enciclopedia Británica juntaban polvo. Pocos usuarios se acercaban a esa sección; la gran mayoría prefería las terminales de computadora ubicadas en el centro del salón, donde las búsquedas en Google arrojaban millones de resultados en menos de un segundo. El bibliotecario solía contemplar el contraste con una mezcla de nostalgia y resignación: sabía que los datos en línea eran vastos e instantáneos, pero también sospechaba que la velocidad de la consulta web erosionaba la paciencia necesaria para el estudio profundo y la asimilación del conocimiento verdadero.`
      };

      const questions = [
        {
          question: "¿Cuál es el tema central del fragmento?",
          options: [
            "La lamentable pérdida física de los tomos de la Enciclopedia Británica.",
            "El contraste entre la velocidad de la información digital y la profundidad en la asimilación del conocimiento.",
            "Las rutinas diarias y los problemas laborales de los bibliotecarios públicos.",
            "El dominio de Google como monopolio tecnológico en la educación moderna."
          ],
          correct: 1,
          feedback: "¡Excelente! El tema responde a '¿de qué trata el texto?'. El fragmento contrasta el uso de libros impresos lentos con la rapidez de los computadores y reflexiona sobre cómo esta velocidad afecta la concentración y el aprendizaje verdadero."
        },
        {
          question: "Del comportamiento de los usuarios en la biblioteca se puede inferir válidamente que:",
          options: [
            "Están perdiendo por completo el interés en educarse.",
            "Priorizan la velocidad y el volumen de resultados sobre la profundidad de la lectura física.",
            "Han recibido instrucciones del bibliotecario para no usar los libros de cuero.",
            "Desconocen la existencia física de las enciclopedias impresas."
          ],
          correct: 1,
          feedback: "¡Muy bien! Puesto que la gran mayoría prefiere los computadores porque arrojan 'millones de resultados en menos de un segundo' en lugar de usar las enciclopedias, se deduce que valoran la inmediatez y la cantidad de datos que ofrece el entorno digital."
        },
        {
          question: "¿Cuál de los siguientes enunciados expresa la IDEA PRINCIPAL del texto?",
          options: [
            "La Enciclopedia Británica ha quedado obsoleta debido a su encuadernación en cuero.",
            "La inmediatez de la búsqueda en internet puede comprometer el proceso reflexivo indispensable para el aprendizaje profundo.",
            "Los buscadores de internet son herramientas inútiles que solo confunden a los usuarios.",
            "Los bibliotecarios públicos se oponen al avance de la informática en sus salones."
          ],
          correct: 1,
          feedback: "¡Correcto! La idea principal es la tesis o reflexión central del autor, la cual se resume en la sospecha final del bibliotecario: que la rapidez del internet erosiona la paciencia requerida para la asimilación profunda del conocimiento."
        },
        {
          question: "En el fragmento, el sentimiento de 'resignación' atribuido al bibliotecario implica que:",
          options: [
            "Está planeando renunciar a su puesto debido al desinterés de la gente.",
            "Reconoce el avance digital como una corriente inevitable frente a la cual es inútil resistirse.",
            "Se siente enojado y planea apagar los computadores de la biblioteca.",
            "Se siente aliviado porque ahora tiene menos trabajo cargando libros pesados."
          ],
          correct: 1,
          feedback: "¡Excelente! La resignación denota la aceptación pasiva de una situación desfavorable o inevitable. El bibliotecario siente nostalgia por los libros, pero acepta con resignación el auge digital por ser el rumbo actual de la sociedad."
        },
        {
          question: "A partir de la sospecha del bibliotecario sobre la 'erosión de la paciencia', se puede deducir que, en su opinión, el estudio profundo exige:",
          options: [
            "Acceso ilimitado a millones de enlaces web por segundo.",
            "Tiempos de espera y procesos cognitivos reflexivos ajenos a la prisa tecnológica.",
            "La memorización literal de datos históricos y fechas atómicas.",
            "Un rechazo radical a todo tipo de computadoras o bases de datos."
          ],
          correct: 1,
          feedback: "¡Perfecto! Si la inmediatez de la web erosiona la paciencia necesaria para el estudio profundo, se infiere lógicamente que dicho estudio profundo requiere, por el contrario, calma, lentitud y paciencia en la asimilación."
        },
        {
          question: "En el texto, las palabras 'vastos e instantáneos' se refieren de manera directa a:",
          options: [
            "Los tomos impresos de la biblioteca.",
            "Los datos accesibles a través de búsquedas web.",
            "Los sentimientos de nostalgia del bibliotecario.",
            "Los usuarios que llenan el centro del salón."
          ],
          correct: 1,
          feedback: "¡Correcto! Es una pregunta de identificación de información local y explícita. El texto dice literalmente: '...sabía que los datos en línea eran vastos e instantáneos...'."
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
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
            React.createElement("div", { className: "space-y-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 2: Comprensión Global"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Para alcanzar un puntaje sobresaliente, debes ir más allá de los datos explícitos. La prueba evalúa tu capacidad para sintetizar las ideas locales y descubrir la macroestructura del texto: qué defiende el autor globalmente (idea principal) y qué verdades ocultas se desprenden de sus palabras (inferencias).",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡Aprende a leer entre líneas conectando pistas textuales!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué dominarás aquí?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "Diferenciar de forma clara el tema ('¿de qué trata?') de la idea principal ('¿qué afirma el autor sobre ese tema?').",
                    "Construir deducciones lógicas (inferencias de causa, actitud, situación) basadas únicamente en evidencias del texto.",
                    "Evitar distractores comunes, como afirmaciones que son verdaderas en la vida real pero que no están en la lectura."
                  ].map((text, i) => 
                    React.createElement("li", { key: i, className: "flex items-start gap-3" },
                      React.createElement("div", { className: "mt-1 bg-rose-100 dark:bg-rose-950/30 p-1 rounded-full shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300" },
                        React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-rose-600 dark:text-rose-400" })
                      ),
                      React.createElement("span", null, text)
                    )
                  )
                )
              )
            ),
            React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[360px]" },
              React.createElement("div", { className: "relative w-full h-64 flex items-center justify-center" },
                React.createElement("div", { className: "relative z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-xs transition-transform hover:scale-105 duration-300" },
                  React.createElement("div", { className: "flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50 pb-3 mb-3" },
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "lightbulb" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "PENSAMIENTO INFERENCIAL"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Inference & Synthesis")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"La idea principal une todo el texto bajo una sola premisa. La inferencia saca a la luz lo que el autor calla pero implica.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(244,63,94,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Comenzar Teoría ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // 1. Conceptos Clave
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "menu_book", className: "text-rose-500" }),
              "1. Fundamentos Conceptuales (Idea Central e Inferencia)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "center_focus_strong" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Tema vs. Idea Principal"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  React.createElement("strong", null, "El Tema:"), " Responde a '¿de qué trata el texto?'. Es una frase nominal corta sin verbos conjugados (ej. 'La tecnología en la educación').\n",
                  React.createElement("strong", { className: "block mt-2" }, "La Idea Principal:"), " Responde a '¿qué sostiene primordialmente el autor sobre el tema?'. Es una oración completa con verbo conjugado que sintetiza la tesis o núcleo de la lectura (ej. 'La sobreexposición tecnológica entorpece la capacidad de análisis reflexivo de los estudiantes')."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "psychology" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "La Inferencia Válida (Deducción)"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Es extraer información implícita que no está escrita de forma literal en la lectura, pero que se deriva obligatoriamente de la lógica de sus argumentos. En el ICFES, una inferencia no es una suposición hipotética; es una consecuencia racional demostrable mediante las pistas del texto."
                )
              )
            )
          ),

          // 2. Metodología Paso a Paso
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "playlist_add_check", className: "text-rose-500" }),
              "2. Metodología de Resolución (Paso a Paso)"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300" },
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "1"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Extraer la Idea Principal mediante Abstracción:"),
                  " Después de leer, hazte la pregunta: 'Si tuviera que resumir todo este pasaje en una sola frase comprensible, ¿cuál sería?'. La opción de respuesta que englobe todas las ideas secundarias del texto es la correcta."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Comprobar la Inferencia con la Prueba de Negación:"),
                  " Para comprobar si una deducción es válida, intenta negarla mentalmente. Si al negarla el texto pierde coherencia o se contradice, la inferencia es lógicamente correcta e indispensable."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Descartar la Extrapolación:"),
                  " Desecha las opciones de respuesta que añadan opiniones personales, supuestos éticos o verdades universales que no estén sustentadas en los enunciados escritos del texto."
                )
              )
            )
          ),

          // 3. Caso Práctico
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "model_training", className: "text-rose-500" }),
              "3. Caso Práctico y Ejemplo Resuelto"
            ),
            React.createElement("div", { className: "bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner space-y-6" },
              React.createElement("div", null,
                React.createElement("span", { className: "text-xs font-black text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-3 py-1 rounded-full uppercase tracking-wider" }, "Texto de Ejemplo"),
                React.createElement("p", { className: "mt-3 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-sm italic border-l-4 border-rose-300 pl-4" },
                  "\"Cada vez que la bolsa de valores sufre una caída drástica, los pequeños ahorradores retiran despavoridos su dinero para resguardarlo bajo el colchón, a pesar de que los analistas repiten incansablemente que los mercados siempre se recuperan a mediano plazo.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Inferencia Válida:"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "A partir del texto anterior, se puede inferir válidamente que los pequeños ahorradores actúan guiados por:"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) El conocimiento técnico del funcionamiento de la bolsa."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "B) El pánico inmediato ante la pérdida, ignorando la racionalidad de largo plazo. (Correcta)"),
                    React.createElement("li", null, "C) Una conspiración económica orquestada por los analistas."),
                    React.createElement("li", null, "D) El deseo de boicotear el desarrollo financiero del país.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la B es correcta:"),
                    " El texto señala que los ahorradores retiran su dinero 'despavoridos' (indicando pánico/emoción) a pesar de que existen advertencias racionales e incansables de los analistas. Esto demuestra deductivamente que su proceder está motivado por el temor y no por un análisis lógico.\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A contradice el texto (su acción contradice la racionalidad técnica). La C y la D son extrapolaciones ajenas a la lectura: el fragmento no insinúa conspiraciones o deseos deliberados de causar boicot nacional."
                  )
                )
              )
            )
          ),

          // 4. Trampas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "warning", className: "text-amber-500" }),
              "⚠️ ¡Cuidado con las Trampas del ICFES!"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "El distractor de la 'idea que sí aparece':"), 
                  " Una opción de respuesta puede ser una copia textual de una frase del texto. Sin embargo, si es solo un ejemplo o un dato particular, no puede ser la idea principal del pasaje completo. ¡No te dejes confundir solo porque la frase sea idéntica al texto!"
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Confundir inferencia con suposición:"), 
                  " Si el texto dice 'El sol brillaba en lo alto', puedes inferir lógicamente que es de día. No puedes suponer que hacía calor o que los personajes estaban sudando. Toda inferencia debe estar atada a premisas escritas."
                )
              )
            )
          ),
          
          React.createElement("div", { className: "flex justify-center" },
            React.createElement("button", { 
              onClick: () => setActiveTab('practica'),
              className: "bg-rose-600 hover:bg-rose-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-rose-500/20 active:scale-95 transition-all flex items-center gap-2"
            },
              "Ir a la Práctica ", React.createElement(Icon, { name: "quiz" })
            )
          )
        )
      );

      const renderPractica = () => {
        if (showResults) {
          const scorePercent = Math.round((score / questions.length) * 100);
          return (
            React.createElement("div", { className: "animate-in zoom-in-95 duration-500 text-center max-w-md mx-auto py-10" },
              React.createElement("div", { className: "w-20 h-20 bg-rose-100 dark:bg-rose-950/40 text-rose-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-md" }, "🏆"),
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 dark:text-white mb-2" }, 
                scorePercent >= 80 ? "¡Excelente Trabajo!" : scorePercent >= 50 ? "¡Buen Intento!" : "Sigue Practicando"
              ),
              React.createElement("p", { className: "text-slate-500 dark:text-slate-400 text-lg mb-8" }, 
                `Has respondido correctamente ${score} de ${questions.length} preguntas (${scorePercent}%)`
              ),
              React.createElement("button", { 
                onClick: resetQuiz,
                className: "bg-rose-600 hover:bg-rose-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-95"
              }, "Reintentar Quiz")
            )
          );
        }

        const q = questions[currentQuestion];
        return (
          React.createElement("div", { className: "animate-in fade-in duration-500" },
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-start" },
              React.createElement("div", { className: "lg:col-span-5 bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-rose-400" }),
                React.createElement("h3", { className: "text-stone-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1" }, "Pasaje de Lectura"),
                React.createElement("h2", { className: "text-xl font-serif font-black text-stone-800 dark:text-stone-100 mb-4" }, readingPassage.title),
                React.createElement("p", { className: "text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-sm whitespace-pre-line" }, readingPassage.text)
              ),
              React.createElement("div", { className: "lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE APLICACIÓN"),
                  React.createElement("span", { className: "text-sm text-slate-400 font-bold" }, `${currentQuestion + 1} de ${questions.length}`)
                ),
                React.createElement("div", { className: "w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden" },
                  React.createElement("div", { className: "bg-gradient-to-r from-rose-400 to-pink-600 h-full transition-all duration-300", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
                ),
                React.createElement("h3", { className: "text-lg font-bold text-slate-800 dark:text-white mb-6 leading-relaxed" }, q.question),
                React.createElement("div", { className: "space-y-3 mb-8" },
                  q.options.map((option, index) => {
                    let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-rose-400 dark:hover:border-rose-500 hover:bg-rose-50/50 dark:hover:bg-rose-950/10 text-slate-700 dark:text-slate-300";
                    let badgeStyle = "border-slate-300 text-slate-400 dark:border-slate-600";

                    if (hasAnswered) {
                      if (index === q.correct) {
                        btnStyle = "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400";
                        badgeStyle = "bg-emerald-500 border-emerald-500 text-white";
                      } else if (index === selectedAnswer) {
                        btnStyle = "bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-800 dark:text-rose-400 animate-shake-custom";
                        badgeStyle = "bg-rose-500 border-rose-500 text-white";
                      } else {
                        btnStyle = "opacity-40 border-slate-200 dark:border-slate-700 text-slate-400";
                      }
                    }

                    return React.createElement("button", {
                      key: index,
                      onClick: () => handleAnswer(index),
                      disabled: hasAnswered,
                      className: `w-full text-left p-4 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 font-semibold text-sm ${btnStyle}`
                    },
                      React.createElement("span", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 text-xs font-black transition-all ${badgeStyle}` },
                        "ABCD"[index]
                      ),
                      React.createElement("span", null, option)
                    );
                  })
                ),
                hasAnswered && React.createElement("div", { className: "animate-in fade-in duration-300" },
                  React.createElement("div", { className: `p-5 rounded-2xl border mb-6 text-sm leading-relaxed font-medium ${
                    selectedAnswer === q.correct 
                      ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-800 dark:text-emerald-400' 
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-800 dark:text-rose-400'
                  }` },
                    React.createElement("span", { className: "font-black block mb-1 text-xs uppercase tracking-wider" }, 
                      selectedAnswer === q.correct ? "✓ RESPUESTA CORRECTA" : "✗ EXPLICACIÓN"
                    ),
                    q.feedback
                  ),
                  React.createElement("button", {
                    onClick: nextQuestion,
                    className: "bg-slate-950 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white font-extrabold px-8 py-3.5 rounded-xl ml-auto block transition-all active:scale-95 shadow-md"
                  },
                    currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente →"
                  )
                )
              )
            )
          )
        );
      };

      const tabs = [
        { id: 'introduccion', label: 'Introducción', icon: 'auto_stories' },
        { id: 'teoria', label: 'Teoría y Trucos', icon: 'menu_book' },
        { id: 'practica', label: 'Práctica (Quiz)', icon: 'quiz' }
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
                    ? 'bg-white dark:bg-slate-800 text-rose-600 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 scale-100' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 scale-95'
                }`
              },
                React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-rose-500' : ''}` }),
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

    window.renderLCModule3 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule3));
          console.log("React LC Engine: Renderizado de LCModule3 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
