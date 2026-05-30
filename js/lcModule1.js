(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule1() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "El Orden Oculto de la Materia",
        text: `En el año 1869, el químico ruso Dmitri Mendeléyev publicó su primera versión de la tabla periódica de los elementos. En esa época, solo se conocían 63 elementos, pero Mendeléyev intuyó que existía un orden fundamental que los agrupaba según sus pesos atómicos y propiedades químicas similares. 

Su enfoque no fue meramente estático; de hecho, Mendeléyev dejó espacios vacíos deliberadamente en su tabla. Él predijo con notable precisión que estos huecos corresponderían a elementos que aún no habían sido descubiertos por la ciencia de su época, e incluso describió las propiedades físicas que tendrían. Años más tarde, con el descubrimiento del galio y el germanio (que encajaban a la perfección en dichos espacios vacíos), la comunidad científica internacional validó su revolucionario método, consagrando su nombre en la historia de la ciencia.`
      };

      const questions = [
        {
          question: "En la frase 'Su enfoque no fue meramente estático', la palabra 'estático' connota en el texto:",
          options: [
            "Inmóvil físicamente, debido a la solidez de los elementos químicos.",
            "Limitado al conocimiento cerrado de su época y refractario a futuras adiciones.",
            "Carente de rigor matemático y claridad metodológica.",
            "Basado exclusivamente en las propiedades macroscópicas de la materia."
          ],
          correct: 1,
          feedback: "¡Excelente! 'Estático' aquí no se refiere al movimiento físico de los objetos, sino a un enfoque intelectual de la tabla periódica. Al decir que 'no fue estático' porque dejó espacios libres para el futuro, indica que su modelo era dinámico, abierto a nuevos conocimientos y no limitado a lo ya conocido."
        },
        {
          question: "De acuerdo con el fragmento proporcionado, ¿en qué año publicó Mendeléyev la primera versión de la tabla periódica?",
          options: [
            "En 1850, coincidiendo con el descubrimiento del galio.",
            "En 1869, organizando los 63 elementos conocidos en ese momento.",
            "En 1899, después del descubrimiento del germanio.",
            "El texto no menciona ninguna fecha exacta para dicha publicación."
          ],
          correct: 1,
          feedback: "¡Muy bien! Se trata de una pregunta de información explícita. El texto dice textualmente en el primer párrafo: 'En el año 1869, el químico ruso Dmitri Mendeléyev publicó su primera versión...'."
        },
        {
          question: "En el fragmento, la expresión 'deliberadamente' señala que la decisión de dejar espacios vacíos en la tabla periódica fue:",
          options: [
            "Un descuido provocado por la prisa en publicar sus hallazgos.",
            "Una limitación técnica de las imprentas de la época rusa.",
            "Una acción planificada y fundamentada en su teoría predictiva.",
            "Una exigencia impuesta por la comunidad científica internacional."
          ],
          correct: 2,
          feedback: "¡Correcto! 'Deliberadamente' significa con intención y planificación previa. Mendeléyev no dejó los huecos por error o falta de datos, sino porque su teoría le dictaba que debían existir elementos que aún no habían sido descubiertos."
        },
        {
          question: "Según el texto, ¿qué evento histórico consolidó la validez del método de Mendeléyev ante la comunidad científica internacional?",
          options: [
            "La publicación de su artículo científico traducido a múltiples idiomas.",
            "El descubrimiento posterior del galio y el germanio, que ocuparon los huecos predichos.",
            "La entrega de una medalla honorífica por parte del zar ruso en 1869.",
            "La unificación de los pesos atómicos de los 63 elementos conocidos."
          ],
          correct: 1,
          feedback: "¡Excelente! El segundo párrafo explica explícitamente que tras el descubrimiento del galio y el germanio ('que encajaban a la perfección en dichos espacios vacíos'), la comunidad internacional validó su revolucionario método."
        },
        {
          question: "En la oración 'Su enfoque no fue meramente estático', la palabra 'enfoque' puede ser reemplazada por:",
          options: [
            "Alineación visual del microscopio.",
            "Manera de concebir y estructurar el problema.",
            "Distancia focal de la observación.",
            "Fuerza de la voluntad científica."
          ],
          correct: 1,
          feedback: "¡Perfecto! En este contexto intelectual, 'enfoque' hace referencia a la perspectiva, el método de análisis o la forma en la que abordó la organización de los elementos."
        },
        {
          question: "¿Cuál de las siguientes afirmaciones sobre Dmitri Mendeléyev es directamente verificable de forma explícita en el texto?",
          options: [
            "Mendeléyev descubrió personalmente el galio y el germanio.",
            "Mendeléyev era un químico de origen ruso y en su época se conocían 63 elementos.",
            "Su tabla periódica fue rechazada inicialmente por los editores.",
            "Estudió en la Universidad de San Petersburgo junto a otros físicos notables."
          ],
          correct: 1,
          feedback: "¡Correcto! El texto afirma textualmente en el primer párrafo: '...el químico ruso Dmitri Mendeléyev...' y 'En esa época, solo se conocían 63 elementos...' Las otras opciones son históricamente ciertas o falsas, pero NO aparecen explícitas en el fragmento."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 1: Contenidos Locales"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Para leer críticamente un texto completo, primero debes dominar sus componentes básicos. El ICFES evalúa tu capacidad de comprender el significado de palabras específicas bajo un contexto particular e identificar información explícita (datos literales) de forma rápida y exacta.",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡Aquí no se interpreta; se localiza y se comprende localmente!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A deducir qué significa una palabra en un texto, ignorando distractores de significados comunes del diccionario.",
                    "A hacer lectura por escaneo (scanning) para capturar fechas, nombres, cantidades y razones literales en segundos.",
                    "A reconocer las pistas contextuales de sinonimia, contraste y explicación."
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
                React.createElement("svg", { className: "w-56 h-56 text-rose-500/10 dark:text-rose-500/5 absolute animate-pulse", viewBox: "0 0 100 100", fill: "currentColor" },
                  React.createElement("circle", { cx: "50", cy: "50", r: "45" })
                ),
                React.createElement("div", { className: "relative z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-xs transition-transform hover:scale-105 duration-300" },
                  React.createElement("div", { className: "flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50 pb-3 mb-3" },
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "search" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "BÚSQUEDA LOCAL"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Scanning & Context")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"No importa cuánto conozcas la palabra fuera del texto; lo único válido es lo que significa dentro de él.\""
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
              "1. Fundamentos Conceptuales (Definición Técnica)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-all duration-300" },
                React.createElement("div", { className: "w-12 h-12 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4 shadow-sm" },
                  React.createElement(Icon, { name: "translate", className: "w-6 h-6" })
                ),
                React.createElement("h4", { className: "text-lg font-bold mb-2 text-slate-800 dark:text-white" }, "Polisemia y Vocabulario en Contexto"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-sm leading-relaxed" },
                  "La polisemia es la propiedad de una palabra de tener múltiples significados. En la prueba Saber 11, el ICFES no evalúa si te sabes de memoria el diccionario, sino si sabes deducir qué acepción de la palabra se está empleando en una frase específica. Por ejemplo, la palabra 'cultura' puede referirse a conocimientos acumulados, a un grupo social o al cultivo biológico. La clave está en analizar las pistas contextuales que rodean la palabra."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md hover:-translate-y-1 transition-all duration-300" },
                React.createElement("div", { className: "w-12 h-12 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4 shadow-sm" },
                  React.createElement(Icon, { name: "filter_alt", className: "w-6 h-6" })
                ),
                React.createElement("h4", { className: "text-lg font-bold mb-2 text-slate-800 dark:text-white" }, "Scanning (Rastreo de Información Explícita)"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-sm leading-relaxed" },
                  "El 'scanning' es una lectura rápida y dirigida en la que no se lee el texto palabra por palabra, sino que se buscan marcadores visuales clave (como fechas, nombres propios con mayúscula, porcentajes o conceptos específicos entre comillas). Es la técnica ideal cuando la pregunta solicita un dato literal e indiscutible del texto ('¿Qué descubrió Mendeléyev en 1869?')."
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Analizar el tipo de pregunta:"),
                  " Identifica si se te pide inferir (leer entre líneas) o simplemente localizar y definir una palabra. Si la pregunta incluye frases como 'Según el texto...', 'En la línea X...', 'En el fragmento...', se trata de una pregunta de contenido local y literal."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Aplicar la técnica de la Ranura Contextual (para vocabulario):"),
                  " Lee la oración que contiene la palabra a evaluar. Tápala mentalmente y reemplázala por una 'incógnita (X)'. Luego, busca entre las opciones de respuesta cuál encaja lógicamente manteniendo el sentido y el tono original del párrafo."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Corroborar con la correspondencia semántica (para información explícita):"),
                  " Localiza el dato exacto en el texto mediante un rastreo visual rápido. Compara la frase exacta del texto con las opciones de respuesta; la respuesta correcta suele usar sinónimos o una paráfrasis elegante de lo que dice el texto de forma literal."
                )
              )
            )
          ),

          // 3. Caso Práctico y Ejemplo Resuelto
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "model_training", className: "text-rose-500" }),
              "3. Caso Práctico y Ejemplo Resuelto"
            ),
            React.createElement("div", { className: "bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner space-y-6" },
              React.createElement("div", null,
                React.createElement("span", { className: "text-xs font-black text-rose-600 bg-rose-50 dark:bg-rose-950/20 px-3 py-1 rounded-full uppercase tracking-wider" }, "Texto de Ejemplo"),
                React.createElement("p", { className: "mt-3 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-sm italic border-l-4 border-rose-300 pl-4" },
                  "\"El director técnico de la compañía decidió rescindir el contrato con la firma consultora, argumentando que los informes entregados eran de un carácter sumamente liviano. A pesar de los reclamos, la decisión se mantuvo inmutable, cerrando un ciclo de asesorías costosas pero estériles.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Ejemplo (Vocabulario):"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "En el texto anterior, la palabra 'liviano' se utiliza para señalar que los informes eran:"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) De poco peso físico."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "B) Superficiales y carentes de rigor técnico. (Correcta)"),
                    React.createElement("li", null, "C) Fáciles de leer y comprender."),
                    React.createElement("li", null, "D) Creativos y de lectura ágil.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la B es correcta:"),
                    " En un contexto profesional, rescindir un contrato debido a que los informes son 'livianos' y 'estériles' (infructuosos) indica que la información no era robusta o carecía del peso analítico y rigor necesario.\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A apela al significado literal físico (distractor común). La C y la D proponen connotaciones positivas ('fácil', 'creativo') que chocan con la decisión negativa de terminar el contrato."
                  )
                )
              )
            )
          ),

          // 4. Alertas Trampas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "warning", className: "text-amber-500" }),
              "⚠️ ¡Cuidado con las Trampas del ICFES!"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "El significado común del diccionario:"), 
                  " Si te preguntan por la palabra 'hundido' en un contexto político, la respuesta jamás será 'sumergido bajo el agua'. El ICFES colocará esta definición literal en las opciones para atrapar a los estudiantes descuidados."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Tu conocimiento externo del mundo:"), 
                  " Si el texto afirma explícitamente un dato erróneo o ficticio (por ejemplo, que la gravedad empuja las cosas hacia arriba), para efectos de la prueba, eso es una verdad absoluta. Responde estrictamente con lo que afirma la lectura, no con lo que aprendiste en el colegio."
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
              // Left Column: Reading Passage
              React.createElement("div", { className: "lg:col-span-5 bg-stone-50 dark:bg-slate-900 border border-stone-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-rose-400" }),
                React.createElement("h3", { className: "text-stone-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1" }, "Pasaje de Lectura"),
                React.createElement("h2", { className: "text-xl font-serif font-black text-stone-800 dark:text-stone-100 mb-4" }, readingPassage.title),
                React.createElement("p", { className: "text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-sm whitespace-pre-line" }, readingPassage.text)
              ),
              // Right Column: Interactive Quiz
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

    window.renderLCModule1 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule1));
          console.log("React LC Engine: Renderizado de LCModule1 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
