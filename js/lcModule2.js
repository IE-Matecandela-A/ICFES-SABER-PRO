(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule2() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "La Bifurcación del Lenguaje",
        text: `El debate científico sobre el origen del lenguaje humano ha estado dividido históricamente en dos grandes vertientes. Por un lado, la hipótesis de la continuidad sostiene que el lenguaje es un desarrollo evolutivo gradual que se remonta a los sistemas de comunicación de nuestros ancestros primates. En contraste, la teoría de la discontinuidad, respaldada por lingüistas como Noam Chomsky, argumenta que el lenguaje es un rasgo biológico único y repentino, producto de una mutación genética singular en el Homo sapiens que permitió la aparición de la gramática universal. Por consiguiente, determinar cuál de estas teorías es correcta requiere no solo evidencias fósiles del aparato fonador, sino análisis genéticos comparados sumamente sofisticados.`
      };

      const questions = [
        {
          question: "¿Qué tipo de texto es el fragmento anterior?",
          options: [
            "Narrativo: relata la historia de cómo surgió la lingüística moderna.",
            "Expositivo: presenta de manera objetiva dos teorías opuestas sobre un tema sin decantarse por ninguna.",
            "Instructivo: dicta las directrices que debe seguir un genetista para estudiar el habla.",
            "Argumentativo: defiende la tesis de Chomsky sobre la mutación genética."
          ],
          correct: 1,
          feedback: "¡Excelente! El texto es expositivo (o informativo) porque el autor no toma partido ni defiende una tesis propia. Se limita a describir de forma neutral las dos posturas del debate científico y concluye mencionando qué se necesita para resolverlo."
        },
        {
          question: "En el texto, ¿qué función cumple el conector 'En contraste'?",
          options: [
            "Introducir un ejemplo concreto sobre la hipótesis de la continuidad.",
            "Señalar la oposición radical entre la hipótesis de la continuidad y la teoría de la discontinuidad.",
            "Indicar una conclusión lógica derivada del primer párrafo.",
            "Agregar una tercera teoría alternativa sobre el origen del lenguaje."
          ],
          correct: 1,
          feedback: "¡Muy bien! 'En contraste' es un conector adversativo o de oposición. Sirve para confrontar directamente la primera tesis presentada (continuidad gradual) con la segunda tesis (discontinuidad por mutación)."
        },
        {
          question: "En la última oración del fragmento, ¿cuál es la relación lógica que introduce la expresión 'Por consiguiente'?",
          options: [
            "Causalidad: indica que las teorías provocaron la necesidad de estudios genéticos.",
            "Consecuencia: presenta el requerimiento metodológico como deducción lógica de la división del debate.",
            "Adición: suma un argumento a favor de la hipótesis evolutiva.",
            "Concesión: acepta parcialmente que una de las dos teorías es superior."
          ],
          correct: 1,
          feedback: "¡Correcto! 'Por consiguiente' introduce una consecuencia o conclusión de lo expuesto anteriormente. Como el debate está dividido en dos teorías tan dispares (gradualismo vs. mutación), la consecuencia lógica es que resolverlo exige análisis sofisticados."
        },
        {
          question: "¿Qué función cumple el primer enunciado del texto ('El debate científico sobre el origen del lenguaje... dividido históricamente en dos grandes vertientes')?",
          options: [
            "Refutar el concepto de lenguaje humano.",
            "Presentar el tema central del texto y anticipar la estructura bipartita de la exposición.",
            "Resumir las conclusiones de la genética contemporánea.",
            "Persuadir al lector sobre la importancia de la gramática universal."
          ],
          correct: 1,
          feedback: "¡Excelente! Es un enunciado introductorio clásico. Presenta el tema ('origen del lenguaje') y establece el esquema que seguirá el texto ('dos grandes vertientes'), preparando al lector para la descripción de ambas."
        },
        {
          question: "De acuerdo con el fragmento, la hipótesis de la continuidad se caracteriza por sostener que el lenguaje:",
          options: [
            "Surgió de forma repentina gracias a una mutación singular.",
            "Es un desarrollo evolutivo paulatino ligado a la comunicación de ancestros primates.",
            "Es una propiedad exclusiva que no comparte ninguna relación con la biología.",
            "Es imposible de analizar mediante registros fósiles."
          ],
          correct: 1,
          feedback: "¡Perfecto! Esta es una pregunta de información explícita y relación local. El texto dice: 'la hipótesis de la continuidad sostiene que el lenguaje es un desarrollo evolutivo gradual que se remonta a los sistemas de comunicación de nuestros ancestros primates'."
        },
        {
          question: "Si un filólogo escribiera un artículo periodístico atacando la teoría de Chomsky y aportando razones para defender el gradualismo, dicho escrito se clasificaría como:",
          options: [
            "Una crónica narrativa literaria.",
            "Un texto descriptivo de especies primates.",
            "Un texto argumentativo de opinión.",
            "Un manual instructivo de gramática."
          ],
          correct: 2,
          feedback: "¡Correcto! Al 'atacar' una postura y 'defender' otra mediante razones, el autor asume una posición y busca persuadir al lector de su tesis. Esta es la definición de un texto argumentativo de opinión."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 1 y 2: Arquitectura del Texto"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Un texto no es una lista caótica de palabras; es un edificio diseñado con precisión. El ICFES evalúa si puedes reconocer el tipo de plano que usa el autor (tipología textual), el propósito de cada habitación (función de las partes de un texto) y las vigas lógicas que los conectan (conectores lógicos).",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡Aprende a leer la estructura para anticipar el sentido!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué lograrás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "Clasificar instantáneamente un texto en continuo (narrativo, argumentativo, expositivo) o discontinuo (caricatura, infografía).",
                    "Identificar la función de cada párrafo (introducción, desarrollo, ejemplificación, contraste, conclusión).",
                    "Dominar la lógica detrás de los conectores clave (causa-efecto, oposición, secuencia, consecuencia)."
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
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "account_tree" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "MAPA DE ESTRUCTURA"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Cohesion & Architecture")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El tipo de texto te dice qué buscar, y los conectores te dicen hacia dónde te lleva la mente del autor.\""
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
              "1. Fundamentos Conceptuales (Tipologías y Cohesión)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "splitscreen" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Textos Continuos vs. Discontinuos"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  React.createElement("strong", null, "Continuos:"), " Se leen de forma lineal, de izquierda a derecha y de arriba a abajo (ej. ensayos, novelas, noticias). Su cohesión reside en la estructura de párrafos.\n",
                  React.createElement("strong", { className: "block mt-2" }, "Discontinuos:"), " No siguen una estructura lineal. La información está distribuida visualmente (ej. caricaturas, infografías, tablas). Exigen relacionar elementos verbales (palabras) con no verbales (imágenes, tamaños, flechas)."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "link" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Conectores Lógicos"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Son palabras o locuciones que establecen relaciones de sentido entre oraciones o párrafos. Actúan como señales de tráfico para el lector:\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Causa-Efecto: porque, ya que, puesto que, por lo tanto, por consiguiente."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Oposición/Contraste: sin embargo, no obstante, pero, en cambio, al contrario."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Concesión: aunque, a pesar de que (acepta una dificultad sin anular la idea principal).")
                )
              )
            )
          ),

          // Tabla de tipos de texto
          React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 md:p-8 shadow-md" },
            React.createElement("h4", { className: "text-lg font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-2" }, 
              React.createElement(Icon, { name: "table_chart", className: "text-rose-500" }),
              "Clasificación Rápida del ICFES"
            ),
            React.createElement("div", { className: "overflow-x-auto" },
              React.createElement("table", { className: "w-full text-xs text-left border-collapse" },
                React.createElement("thead", { className: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200" },
                  React.createElement("tr", null,
                    React.createElement("th", { className: "p-3 font-bold border-b border-slate-200 dark:border-slate-700" }, "Categoría"),
                    React.createElement("th", { className: "p-3 font-bold border-b border-slate-200 dark:border-slate-700" }, "Tipo de Texto"),
                    React.createElement("th", { className: "p-3 font-bold border-b border-slate-200 dark:border-slate-700" }, "Propósito Principal"),
                    React.createElement("th", { className: "p-3 font-bold border-b border-slate-200 dark:border-slate-700" }, "Qué evaluar en la prueba")
                  )
                ),
                React.createElement("tbody", null,
                  [
                    { cat: "Continuo", tipo: "Argumentativo", prop: "Convencer o persuadir", eval: "Tesis, premisas de soporte y validez de la conclusión." },
                    { cat: "Continuo", tipo: "Expositivo / Informativo", prop: "Presentar datos y hechos", eval: "Estructura objetiva (introducción, desarrollo y cierre)." },
                    { cat: "Continuo", tipo: "Narrativo / Literario", prop: "Relatar sucesos ficticios o reales", eval: "Perspectiva del narrador, intenciones del personaje, metáforas." },
                    { cat: "Discontinuo", tipo: "Caricatura Política", prop: "Criticar con humor/sátira", eval: "Ironía, metáforas visuales, expresiones físicas de personajes." },
                    { cat: "Discontinuo", tipo: "Infografía / Gráficos", prop: "Sintetizar información compleja", eval: "Correlación entre cifras estadísticas e interpretación visual." }
                  ].map((row, i) => 
                    React.createElement("tr", { key: i, className: "border-b border-slate-100 dark:border-slate-800/60" },
                      React.createElement("td", { className: "p-3 font-black text-slate-800 dark:text-white" }, row.cat),
                      React.createElement("td", { className: "p-3 font-bold text-rose-600 dark:text-rose-400 bg-rose-50/10" }, row.tipo),
                      React.createElement("td", { className: "p-3 text-slate-600 dark:text-slate-300" }, row.prop),
                      React.createElement("td", { className: "p-3 text-slate-500 dark:text-slate-400 italic" }, row.eval)
                    )
                  )
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Determinar el tipo de texto a primera vista:"),
                  " Clasifica el formato. ¿Son párrafos continuos o contiene viñetas, tablas o dibujos? Esto cambia el esquema de búsqueda: si es argumentativo buscarás tesis; si es expositivo, un tema de estudio."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Mapear los roles de los párrafos:"),
                  " Pregúntate en cada cambio de bloque: '¿Qué hace el autor aquí?'. ¿Está refutando la idea anterior? ¿Está ilustrando la tesis con un ejemplo práctico? ¿Está concluyendo?"
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Rastrear la cohesión interna (conectores):"),
                  " Subraya marcadores discursivos como 'sin embargo', 'por tanto' o 'en consecuencia'. Te indicarán de forma explícita hacia dónde se desplaza el pensamiento y la lógica de la argumentación."
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
                  "\"Párrafo 1: Las energías renovables representan el camino obvio para detener el cambio climático global.\n",
                  "Párrafo 2: No obstante, la transición exige metales raros cuya minería genera una inmensa devastación ambiental en países en vías de desarrollo.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Relación Textual:"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "¿Cuál es la relación lógica entre el Párrafo 1 y el Párrafo 2?"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) El Párrafo 2 es una consecuencia directa del Párrafo 1."),
                    React.createElement("li", null, "B) El Párrafo 2 ilustra el beneficio planteado en el Párrafo 1."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "C) El Párrafo 2 introduce una objeción que limita la validez del Párrafo 1. (Correcta)"),
                    React.createElement("li", null, "D) El Párrafo 2 repite la misma idea del Párrafo 1 en otros términos.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la C es correcta:"),
                    " La frase 'No obstante' al inicio del segundo párrafo es un conector de contraste. Sirve para poner límites o matizar el optimismo inicial del primer párrafo introduciendo un costo ambiental severo (la minería de metales raros).\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A no funciona porque la devastación minera no es una consecuencia lógica 'de detener' el cambio, sino del método. La B y la D fallan porque ignoran el giro contrastante e introducen relaciones de adición o similitud que el conector explícitamente desmiente."
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Confundir el tema con el conector:"), 
                  " A veces el ICFES te preguntará por el conector de una frase larga y llena de tecnicismos. Ignora los tecnicismos; concéntrate únicamente en la estructura lógica de unión ('A diferencia de B', 'Si bien A, B')."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Ignorar los detalles visuales de textos discontinuos:"), 
                  " En las viñetas o cómics, las respuestas incorrectas suelen describir perfectamente el texto de los globos, pero contradicen la expresión física, el sudor, la postura o los objetos de fondo del personaje. ¡El dibujo es el 50% de la información!"
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
                    className: "bg-slate-900 dark:bg-rose-600 hover:bg-slate-800 dark:hover:bg-rose-500 text-white font-extrabold px-8 py-3.5 rounded-xl ml-auto block transition-all active:scale-95 shadow-md"
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

    window.renderLCModule2 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule2));
          console.log("React LC Engine: Renderizado de LCModule2 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
