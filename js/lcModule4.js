(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule4() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "¡Vaya Milagro Virtual!",
        text: `¡Vaya milagro de la modernidad! Ahora nos prometen que con el despliegue del metaverso y las oficinas virtuales ya no tendremos que soportar el 'desgastante' contacto cara a cara con nuestros colegas. Desde la comodidad de un visor de plástico de ochocientos dólares pegado a la cara, podremos interactuar con avatares flotantes que carecen de pies, pero rebosan de sonrisas corporativas preprogramadas. Nos venden este aislamiento climatizado como la cúspide de la productividad y la conciliación laboral, cuando en realidad solo perfecciona la alienación del trabajador bajo una estética digital digna de un mal sueño infantil.`
      };

      const questions = [
        {
          question: "¿Cuál es la actitud o TONO predominante del autor en el texto?",
          options: [
            "Neutro y objetivo: presenta las ventajas del metaverso laboral con datos corporativos.",
            "Entusiasta y optimista: alienta al lector a adquirir visores de realidad virtual de inmediato.",
            "Sarcástico e irónico: utiliza la burla y el desprecio hacia la promesa de las oficinas virtuales.",
            "Melancólico y resignado: lamenta con tristeza el cierre de las oficinas tradicionales físicas."
          ],
          correct: 2,
          feedback: "¡Excelente! El autor usa expresiones como '¡Vaya milagro de la modernidad!' (en sentido irónico) y describe los avatares como 'flotantes y sin pies' con 'sonrisas preprogramadas'. Esto demuestra un tono fuertemente sarcástico e irónico diseñado para ridiculizar el concepto."
        },
        {
          question: "¿Cuál es el PROPÓSITO comunicativo principal del fragmento?",
          options: [
            "Exponer de forma técnica cómo calibrar y utilizar un visor de realidad virtual en el trabajo.",
            "Persuadir al lector sobre la artificialidad y alienación que esconde la promesa del trabajo virtual en el metaverso.",
            "Invitar a las grandes empresas multinacionales a comprar visores corporativos de ochocientos dólares.",
            "Describir la evolución de los avatares digitales en la industria de los videojuegos infantiles."
          ],
          correct: 1,
          feedback: "¡Muy bien! El propósito principal es el objetivo persuasivo del autor. Busca que el lector deje de ver las oficinas virtuales como un avance y las conciba como un mecanismo de aislamiento ('aislamiento climatizado') y alienación del trabajador."
        },
        {
          question: "En la primera frase del texto ('¡Vaya milagro de la modernidad!'), el autor recurre a la ironía para:",
          options: [
            "Felicitar sinceramente a los desarrolladores de tecnología por sus grandes logros.",
            "Señalar la contradicción entre las promesas de bienestar y la realidad de aislamiento que percibe.",
            "Indicar que las oficinas virtuales son de origen religioso o espiritual.",
            "Expresar su asombro ante la reducción de costos en los servicios de internet."
          ],
          correct: 1,
          feedback: "¡Correcto! La ironía consiste en decir lo opuesto a lo que se piensa de manera que el contexto revele la verdadera opinión. Al llamarlo 'milagro' con signos de exclamación y luego criticarlo con dureza, el autor resalta la falsedad de esa supuesta maravilla."
        },
        {
          question: "A partir de la lectura, se puede deducir que, en opinión del autor, la interacción humana cara a cara en el trabajo:",
          options: [
            "Es un obstáculo innecesario que destruye la productividad diaria.",
            "Es un elemento de valor social que la simulación tecnológica no puede reemplazar.",
            "Debe reservarse únicamente para discutir despidos o juntas de alta dirección.",
            "Resulta demasiado desgastante comparada con el uso de avatares sonrientes."
          ],
          correct: 1,
          feedback: "¡Excelente! Dado que el autor ridiculiza la idea de sustituir el contacto directo por avatares flotantes y se burla de que llamen 'desgastante' al trato en persona (colocándolo entre comillas), se deduce que él valora el contacto cara a cara real."
        },
        {
          question: "En la oración 'ya no tendremos que soportar el 'desgastante' contacto cara a cara', las comillas en la palabra 'desgastante' sirven para:",
          options: [
            "Citar literalmente una frase de un informe científico o un estudio gubernamental.",
            "Resaltar que es el concepto fundamental de la teoría de la productividad del metaverso.",
            "Distanciarse críticamente del término, sugiriendo que la interacción física no es realmente desgastante.",
            "Indicar que es una palabra en idioma extranjero o poco conocida por la sociedad."
          ],
          correct: 2,
          feedback: "¡Perfecto! En lectura crítica, las comillas se usan a menudo para marcar ironía o distanciamiento. El autor pone 'desgastante' entre comillas para indicar que esa es la etiqueta exagerada que le ponen los promotores del metaverso, algo con lo que él discrepa."
        },
        {
          question: "¿Cuál de las siguientes opciones describe de forma correcta la estructura formal del texto?",
          options: [
            "Comienza con una alabanza irónica, describe sarcásticamente la tecnología y concluye con una crítica argumentada sobre la alienación.",
            "Inicia describiendo una anécdota personal, expone datos del precio del visor y concluye con recomendaciones de compra.",
            "Compara cronológicamente las oficinas del siglo XX con las oficinas del siglo XXI paso a paso.",
            "Es una lista desorganizada de quejas emocionales sin relación lógica ni conectores."
          ],
          correct: 0,
          feedback: "¡Correcto! El texto tiene una estructura argumentativa corta y fluida: capta la atención con la ironía inicial, desarrolla la descripción burlesca de los visores y avatares, y remata con la tesis crítica de fondo (la alienación y el mal sueño infantil)."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 2: Propósito y Actitud"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Un autor nunca escribe sin un motivo. La prueba Saber 11 evalúa tu habilidad para identificar qué busca lograr el emisor con su texto (propósito comunicativo) y cómo se siente respecto al tema que trata (el tono).",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡Identifica el propósito respondiendo a '¿para qué?' y el tono respondiendo a '¿cómo lo dice'!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué dominarás aquí?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "Reconocer las intenciones de persuadir, informar, advertir, instruir y entretener analizando los rasgos de la redacción.",
                    "Detectar la ironía, el sarcasmo, el tono crítico, el tono escéptico o el tono objetivo a través de palabras clave y comillas.",
                    "Interpretar la voz del narrador o del autor detrás del velo del lenguaje figurado."
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
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "record_voice_over" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "INTENCIÓN Y TONO"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Purpose & Tone")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El tono es la música del texto. Si no escuchas la ironía, estarás interpretando la melodía de forma equivocada.\""
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
              "1. Fundamentos Conceptuales (Propósitos y Actitud)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "campaign" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "El Propósito Comunicativo"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Es la intención con la que se concibió el texto. Responde a '¿para qué escribió esto el autor?'.\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Persuadir: busca convencerte de adoptar una tesis (ensayos, columnas)."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Informar: busca aportar datos objetivos sin valoraciones (noticias, manuales)."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Satirizar / Criticar: ridiculizar conductas o posturas (caricaturas, sátira).")
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "sentiment_neutral" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "El Tono del Autor"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "El tono es el matiz emocional que el escritor da a sus palabras. Determina la actitud del autor hacia el tema:\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Irónico o Sarcástico: burla refinada que dice lo contrario de lo que piensa."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Solemne / Académico: lenguaje formal, riguroso y objetivo."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Beligerante / Crítico: tono agresivo y hostil hacia posturas contrarias.")
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Evaluar la adjetivación y el léxico:"),
                  " Subraya palabras con carga valorativa (ej. 'brillante', 'ridículo', 'estúpido', 'maravilloso'). Si el autor usa adjetivos exageradamente positivos seguidos de datos desalentadores, está usando ironía."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Identificar signos de distanciamiento:"),
                  " Las comillas en palabras clave ('desgastante', 'salvadores') o signos de exclamación abundantes suelen revelar el distanciamiento satírico del emisor."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Preguntarse por el efecto final buscado:"),
                  " ¿El texto pretende educarme neutralmente sobre un suceso (informar) o busca que me indigne o me sume a su crítica (sarcasmo/persuadir)?"
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
                  "\"¡Qué alegría infinita nos produce recibir otro impuesto a la canasta básica! De seguro, los legisladores se desvelan pensando en cómo aliviar nuestra pesada billetera, asegurando que no gastemos de forma desordenada en algo tan superfluo como la comida diaria.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Tono e Intención:"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "El tono del autor en el texto anterior es predominantemente:"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) Agradecido y festivo."),
                    React.createElement("li", null, "B) Serio y de carácter argumentado."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "C) Sarcástico e irónico. (Correcta)"),
                    React.createElement("li", null, "D) Indiferente y neutral.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la C es correcta:"),
                    " Nadie celebra un nuevo impuesto a sus víveres con 'alegría infinita', ni clasifica la comida como algo 'superfluo'. Estas contradicciones extremas evidencian que el autor quiere plasmar disgusto e indignación empleando la ironía.\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A interpreta la ironía literalmente, cayendo en la trampa básica. La B falla porque no existen cifras formales ni argumentos racionales estructurados. La D ignora los evidentes signos de exclamación y sarcasmo."
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Tomar la ironía de manera literal:"), 
                  " Si el autor escribe irónicamente 'los ilustres y salvadores senadores', y la pregunta cuestiona qué opina de ellos, la respuesta jamás será 'los admira'. ¡Identifica el tono antes de marcar!"
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Confundir el propósito con detalles del texto:"), 
                  " Un distractor común en las preguntas de intención es colocar una acción real menor (ej. 'indicar el costo de ochocientos dólares del visor') como la intención del escrito completo, cuando solo era un detalle secundario del argumento general."
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

    window.renderLCModule4 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule4));
          console.log("React LC Engine: Renderizado de LCModule4 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
