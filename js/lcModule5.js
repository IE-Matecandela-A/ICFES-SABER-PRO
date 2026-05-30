(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule5() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "La Decisión sobre los Bosques",
        text: `Debemos implementar de inmediato la prohibición absoluta de la minería a cielo abierto en nuestro territorio nacional. (Tesis) Informes de la Contraloría señalan que esta práctica ha devastado más de cien mil hectáreas de bosque andino y contaminado las fuentes hídricas de tres millones de compatriotas. (Premisa 1) Además, naciones vecinas con economías similares han prohibido esta actividad sin sufrir recesión, demostrando que es viable transitar a energías más limpias y sostenibles. (Premisa 2) Quienes se oponen a esta medida a menudo argumentan que prohibirla destruirá el empleo, pero esto es una falacia corporativa: la transición ecológica generará tres puestos de trabajo verdes por cada empleo minero perdido. Por ende, la prohibición no es un ataque a la economía, sino un paso racional hacia la sostenibilidad.`
      };

      const questions = [
        {
          question: "¿Cuál de las siguientes afirmaciones resume la TESIS defendida por el autor del texto?",
          options: [
            "La transición ecológica creará tres puestos de trabajo por cada empleo perdido.",
            "Es necesario prohibir de inmediato la minería a cielo abierto en el país.",
            "Las naciones vecinas tienen economías idénticas y exitosas.",
            "Los informes de la Contraloría deben ser auditados por organizaciones privadas."
          ],
          correct: 1,
          feedback: "¡Excelente! La tesis es la afirmación principal que el autor busca defender ante el lector. En la primera línea del texto se enuncia claramente: 'Debemos implementar de inmediato la prohibición absoluta de la minería a cielo abierto...'. Todo lo demás son razones para apoyar esta propuesta."
        },
        {
          question: "¿Cuál de las siguientes opciones describe una PREMISA basada en evidencias ecológicas nacionales presentadas por el autor?",
          options: [
            "La proyección de que la transición creará empleos ecológicos.",
            "Los datos de devastación forestal y contaminación hídrica reportados por la Contraloría.",
            "El éxito de los países vecinos al prohibir la actividad minera.",
            "La descalificación de los argumentos de los gremios corporativos."
          ],
          correct: 1,
          feedback: "¡Muy bien! Las premisas son las pruebas o razones de soporte. La premisa 1 aporta datos concretos y locales ('devastado más de cien mil hectáreas... y contaminado fuentes hídricas') basados en una entidad del país ('Contraloría')."
        },
        {
          question: "¿Cuál de los siguientes fragmentos representa la CONCLUSIÓN del argumento expuesto?",
          options: [
            "'Informes de la Contraloría señalan que esta práctica ha devastado...'",
            "'Por ende, la prohibición no es un ataque a la economía, sino un paso racional hacia la sostenibilidad.'",
            "'Quienes se oponen a esta medida a menudo argumentan que prohibirla...' ",
            "'Debemos implementar de inmediato la prohibición absoluta...'"
          ],
          correct: 1,
          feedback: "¡Correcto! La conclusión es el cierre lógico que se deriva de las premisas analizadas. Se introduce mediante el conector conclusivo 'Por ende', y sintetiza la idea de que la prohibición es racional y compatible con el cuidado económico."
        },
        {
          question: "Considera el siguiente contraargumento formulado por un opositor: 'O permitimos la minería a cielo abierto o condenamos al país a la quiebra absoluta y a la Edad de Piedra'. ¿Qué falacia argumentativa se comete en este razonamiento?",
          options: [
            "Ad Hominem: ataca a los defensores de la reforma ambiental tildándolos de inexpertos.",
            "Falsa Dicotomía: reduce las opciones a solo dos alternativas extremas (minería o colapso), omitiendo vías intermedias de diversificación.",
            "Hombre de Paja: distorsiona los datos de la Contraloría para hacerlos ver menos alarmantes.",
            "Apelación a la Autoridad: cita a un experto internacional en minería sin presentar datos de su especialidad."
          ],
          correct: 1,
          feedback: "¡Excelente! Se comete una Falsa Dicotomía (o falso dilema). Limita artificialmente las opciones a dos alternativas destructivas (minar o colapsar), ignorando que un país puede prohibir la minería y potenciar el agro, la industria o la tecnología para sostenerse."
        },
        {
          question: "Analiza el siguiente argumento: 'El director del movimiento ecologista defiende la prohibición, pero no debemos escucharle porque es un hipócrita que usa bolsas plásticas en su casa'. ¿Por qué este razonamiento contiene una falacia Ad Hominem?",
          options: [
            "Porque asume que usar bolsas plásticas es un delito ambiental grave.",
            "Porque ataca e intenta descalificar el comportamiento personal del director en lugar de refutar con datos y lógica su propuesta ambiental.",
            "Porque comete un error de causa-efecto al relacionar las bolsas plásticas con los bosques.",
            "Porque exagera el impacto del ecologismo en las finanzas de las familias colombianas."
          ],
          correct: 1,
          feedback: "¡Perfecto! Un argumento Ad Hominem ('contra el hombre') desvía la atención del debate atacando las características de la persona que habla en lugar de discutir la validez de sus ideas o datos."
        },
        {
          question: "Al evaluar críticamente un texto argumentativo en la prueba Saber 11, ¿cuál es la diferencia fundamental entre una OPINIÓN y un ARGUMENTO?",
          options: [
            "Las opiniones siempre se escriben en primera persona, y los argumentos en tercera persona.",
            "La opinión es una postura subjetiva sin fundamentos demostrables, mientras el argumento estructura evidencias e inferencias para justificar racionalmente una posición.",
            "Las opiniones son válidas únicamente en la literatura poética, y los argumentos en ciencias naturales.",
            "No existe ninguna diferencia conceptual; el ICFES las evalúa como sinónimos absolutos."
          ],
          correct: 1,
          feedback: "¡Correcto! Una opinión es una creencia meramente personal y subjetiva ('la minería es mala'). Un argumento exige conectar esa opinión (tesis) con premisas demostrables y evidencias lógicas ('la minería daña la salud porque introduce metales pesados en el agua, según el estudio X')."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 3: Evaluación del Contenido"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Hemos llegado al nivel más exigente de la prueba Saber 11. Ya no solo entiendes las palabras locales ni sigues el hilo conductor; ahora debes evaluar la calidad científica e intelectual del texto. Esto implica desmontar los argumentos y comprobar si sus cimientos lógicos son sólidos o si esconden falacias argumentativas.",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡Conviértete en un auditor de la lógica del autor!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué dominarás aquí?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "Identificar las tres partes de un argumento: la Tesis (lo que se defiende), las Premisas (las pruebas) y la Conclusión (el cierre derivado).",
                    "Detectar falacias clásicas de la prueba: Ad Hominem (ataques personales) y Falsa Dicotomía (extremos sin matiz).",
                    "Evaluar de forma crítica y rigurosa la validez interna del razonamiento expuesto."
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
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "gavel" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "ANÁLISIS DE ARGUMENTOS"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Logic & Fallacies")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"Un argumento sin premisas es solo una opinión subjetiva. Un argumento con falacias es un razonamiento defectuoso disfrazado de verdad.\""
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
              "1. Fundamentos Conceptuales (Anatomía y Validez)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "analytics" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "La Estructura Argumentativa"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  React.createElement("strong", null, "• Tesis:"), " La postura u opinión principal que defiende el autor y que busca que tú aceptes. Responde a: '¿De qué nos quiere convencer?'.\n",
                  React.createElement("strong", { className: "block mt-2" }, "• Premisas:"), " Las razones, evidencias o datos científicos que sostienen y fundamentan la validez de la tesis. Responden a: '¿En qué se apoya el autor?'.\n",
                  React.createElement("strong", { className: "block mt-2" }, "• Conclusión:"), " La síntesis lógica resultante de unir y derivar las premisas con la tesis."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "gavel" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Falacias Lógicas Comunes"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Son razonamientos defectuosos o tramposos que parecen válidos a simple vista pero carecen de lógica formal:\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Ad Hominem: atacar al oponente por su vida, filiación o carácter en lugar de refutar sus datos."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Falsa Dicotomía: forzar la realidad a solo dos alternativas extremas, omitiendo matices."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Hombre de Paja: caricaturizar y deformar el argumento del rival para golpearlo con facilidad.")
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Localizar la Tesis primero:"),
                  " Suele estar explícita en el primer párrafo o al final como una conclusión lógica. Busca la frase donde el autor asuma una posición ideológica o proponga una acción concreta."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Enlazar premisas y tesis:"),
                  " Verifica si las evidencias aportadas (informes, estadísticas, hechos históricos) sostienen de forma lógica y suficiente la tesis declarada."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Evaluar la presencia de falacias:"),
                  " Pregúntate si el autor ataca la vida de otros para defenderse (Ad Hominem), si deforma los hechos para atacar (Hombre de Paja) o si plantea que solo hay dos caminos extremistas (Falsa Dicotomía)."
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
                  "\"Quienes proponen la reducción de la jornada laboral a 40 horas semanales simplemente quieren que los trabajadores se queden en casa durmiendo y viendo televisión, lo que provocará de inmediato la parálisis total de la industria y la ruina económica de nuestro país.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Falacias Lógicas:"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "En el razonamiento anterior, se comete una falacia de tipo:"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) Ad Hominem: ataca las finanzas de los empresarios."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "B) Hombre de Paja: distorsiona la propuesta de reducción horaria para atacarla como si fuera pereza pura. (Correcta)"),
                    React.createElement("li", null, "C) Apelación a la Ignorancia: afirma que la pereza no se puede medir."),
                    React.createElement("li", null, "D) Falsa Causa: asume que ver televisión reduce el intelecto de los obreros.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la B es correcta:"),
                    " La propuesta de reducir la jornada laboral busca mejorar la calidad de vida e incrementar la productividad del empleado. Sin embargo, el autor la deforma diciendo que 'quieren quedarse durmiendo' (lo que es una caricaturización extrema). Al atacar esa versión debilitada de la propuesta, comete la falacia de Hombre de Paja.\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A no aplica porque no se ataca la vida privada de una persona en particular. La C e y D no representan las falacias dominantes ni corresponden con el argumento planteado."
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "El distractor de la 'premisa falsa':"), 
                  " En las preguntas de validez, el ICFES pondrá una premisa falsa como si fuera la conclusión. Recuerda: las premisas dan el soporte, la conclusión es la consecuencia. ¡No confundas los cimientos con el techo!"
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Confundir opinión con argumento:"), 
                  " Si una respuesta dice 'El autor opina que...', es diferente a 'El autor argumenta que...'. Argumentar exige evidencias o datos concretos, mientras opinar solo requiere enunciar el punto de vista personal."
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

    window.renderLCModule5 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule5));
          console.log("React LC Engine: Renderizado de LCModule5 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
