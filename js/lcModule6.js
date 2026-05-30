(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function LCModule6() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const readingPassage = {
        title: "Educación y Utilidad",
        text: `En las últimas décadas, el debate sobre el rol de las artes en la educación secundaria ha cobrado fuerza. Algunos tecnócratas afirman que las asignaturas artísticas son un pasatiempo ornamental e inútil que distrae a los jóvenes de las disciplinas STEM (Ciencia, Tecnología, Ingeniería y Matemáticas), las únicas verdaderamente ligadas al crecimiento del Producto Interno Bruto (PIB) nacional. Sin embargo, este enfoque economicista omite de manera selectiva que el pensamiento creativo y la flexibilidad cognitiva —habilidades que se cultivan de forma directa a través de las disciplinas artísticas— son fundamentales para la innovación científico-tecnológica. Reducir la educación al adiestramiento laboral es despojar a los estudiantes de su derecho al desarrollo humano integral en favor de un indicador macroeconómico frío.`
      };

      const questions = [
        {
          question: "¿Qué sesgo cognitivo u omisión atribuye el autor a la postura de los tecnócratas?",
          options: [
            "Sesgo de género, al asumir que las artes son de interés exclusivamente femenino.",
            "Omisión selectiva de los beneficios indirectos que aporta la creatividad artística a la propia innovación tecnológica.",
            "Prejuicio religioso contra el estudio de las ciencias puras en el colegio.",
            "Sesgo de confirmación por citar únicamente estudios internacionales sobre pintura."
          ],
          correct: 1,
          feedback: "¡Excelente! El texto señala directamente que la visión de los tecnócratas 'omite de manera selectiva' que el pensamiento creativo y la flexibilidad cognitiva (fomentados por las artes) son la base de la innovación científico-tecnológica."
        },
        {
          question: "¿Qué recurso discursivo o retórico emplea principalmente el autor al usar términos como 'enfoque economicista' o 'indicador macroeconómico frío'?",
          options: [
            "Metáforas poéticas abstractas para embellecer la descripción de la economía.",
            "Lenguaje cargado (adjetivación valorativa) para inclinar la opinión del lector en contra de los tecnócratas.",
            "Analogía científica comparando la educación con los estados del agua.",
            "Exageración hiperbólica para asustar al lector sobre la desaparición de las escuelas."
          ],
          correct: 1,
          feedback: "¡Muy bien! Los adjetivos 'economicista' o 'frío' añaden un juicio de valor implícito y negativo. Este lenguaje cargado busca descalificar éticamente la postura de los tecnócratas y guiar emocionalmente al lector hacia su tesis humanista."
        },
        {
          question: "¿Cuál de los siguientes supuestos implícitos (no escritos) sostiene la tesis del autor?",
          options: [
            "La formación técnica secundaria debe ser eliminada por completo del currículo nacional.",
            "La educación tiene un valor trascendental que va más allá de la mera preparación para generar ingresos económicos.",
            "Los indicadores macroeconómicos son herramientas inútiles diseñadas para engañar a la población.",
            "Los profesores de artes tienen más derecho a financiamiento estatal que los profesores de matemáticas."
          ],
          correct: 1,
          feedback: "¡Correcto! El autor argumenta que reducir la educación al entrenamiento laboral es un 'despojo'. Esto presupone que el fin último de la escuela es la formación integral de la persona en todos sus aspectos, y no solo el beneficio industrial."
        },
        {
          question: "Si quisieras asumir una postura crítica frente al fragmento, ¿cuál de las siguientes evidencias debilitaría con mayor fuerza el argumento del autor?",
          options: [
            "Una encuesta de opinión donde los jóvenes declaran preferir las clases de artes sobre las de física.",
            "Un estudio comparativo internacional que demuestre que los países con currículos puramente técnicos (STEM) patentan el doble de innovaciones tecnológicas.",
            "Un artículo de prensa que demuestre que el PIB del país creció un 2% el año pasado.",
            "Una declaración de un grupo de pintores que afirman que su arte es puramente estético y no sirve para la ciencia."
          ],
          correct: 1,
          feedback: "¡Excelente! Para debilitar o refutar el argumento del autor (que las artes son necesarias para innovar en ciencia), debes atacar ese vínculo con datos empíricos contrarios. Mostrar que los países que redujeron las artes e incrementaron STEM lograron duplicar sus innovaciones tecnológicas destruye el supuesto central del texto."
        },
        {
          question: "En el fragmento, con el uso de la frase 'pasatiempo ornamental e inútil', el autor busca:",
          options: [
            "Definir de manera formal el concepto de artes aplicadas o artesanía.",
            "Presentar de forma cruda y sin adornos la visión despectiva que los tecnócratas tienen sobre el arte.",
            "Recomendar a las escuelas secundarias que eliminen los talleres de costura.",
            "Explicar que la estética artística carece de relación con el Producto Interno Basto."
          ],
          correct: 1,
          feedback: "¡Perfecto! El autor no cree que el arte sea ornamental o inútil. Utiliza esos adjetivos extremos para retratar la visión radical y descalificadora de sus oponentes ('algunos tecnócratas afirman...'), y así poder contrastarla con sus propios argumentos."
        },
        {
          question: "¿Cuál de los siguientes estereotipos pretende combatir el autor en el fragmento?",
          options: [
            "La creencia de que los científicos son personas racionales pero sin creatividad.",
            "La suposición de que el arte es un lujo innecesario que carece de utilidad práctica o cognitiva para el desarrollo de la sociedad.",
            "La idea de que las materias del currículo escolar deben ser dictadas únicamente por profesionales rusos.",
            "El supuesto de que la educación secundaria debe durar seis años de forma obligatoria."
          ],
          correct: 1,
          feedback: "¡Correcto! El texto confronta la noción extendida de que las humanidades o el arte no sirven para la economía real. Propone que, por el contrario, estas disciplinas alimentan la creatividad y flexibilidad mental indispensables para la innovación científica avanzada."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia 3: Lectura Crítica Avanzada"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Hemos alcanzado la cima de la lectura crítica. En este nivel no solo analizas la lógica del argumento, sino que identificas las intenciones ocultas de persuasión que se esconden en las palabras (estrategias retóricas), los sesgos o prejuicios del emisor, y eres capaz de contrastar el texto con otros puntos de vista para tomar una posición propia fundamentada.",
                React.createElement("strong", { className: "font-semibold text-rose-600 block mt-2" }, "¡La verdadera lectura crítica te libera de la manipulación discursiva!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-400 to-pink-600 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué dominarás aquí?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "Identificar sesgos cognitivos e ideológicos (sesgo de confirmación, generalizaciones de estereotipos, omisión de datos).",
                    "Analizar los recursos retóricos discursivos (preguntas retóricas, hipérboles y el uso de lenguaje cargado afectivamente).",
                    "Aprender a refutar argumentos encontrando sus contradicciones empíricas o sus supuestos falsos."
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
                    React.createElement("span", { className: "p-2 bg-rose-100 dark:bg-rose-950/50 text-rose-600 rounded-lg" }, React.createElement(Icon, { name: "fact_check" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "LECTURA CRÍTICA GENERAL"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Biases & Rhetoric")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El lector pasivo traga la información. El lector crítico evalúa las intenciones y juzga con base en razones y evidencias.\""
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
              "1. Fundamentos Conceptuales (Sesgos y Retórica)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "visibility_off" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Sesgos Cognitivos e Ideológicos"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Un sesgo es una desviación sistemática de la objetividad. En los textos del examen, los sesgos se detectan principalmente mediante:\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Omisión Selectiva: ignorar deliberadamente evidencias que contradigan la tesis del autor."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Generalización y Estereotipo: asignar cualidades simplistas e infundadas a grupos o ideas opuestas.")
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-6 shadow-md" },
                React.createElement("div", { className: "w-10 h-10 bg-rose-100 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 rounded-xl flex items-center justify-center mb-4" },
                  React.createElement(Icon, { name: "auto_fix_high" })
                ),
                React.createElement("h4", { className: "font-bold text-slate-800 dark:text-white mb-2" }, "Estrategias Retóricas"),
                React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" },
                  "Son recursos discursivos no lógicos destinados a captar la empatía del lector o predisponerlo emocionalmente:\n",
                  React.createElement("strong", { className: "block mt-2 text-rose-600 dark:text-rose-400 font-mono" }, "• Preguntas Retóricas: oraciones interrogativas que sugieren y fuerzan su propia respuesta."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Analogías Argumentativas: comparaciones para hacer comprensible un suceso complejo."),
                  React.createElement("strong", { className: "block text-rose-600 dark:text-rose-400 font-mono" }, "• Lenguaje Cargado: adjetivar con fuerte carga valorativa (ej. 'indicador macroeconómico frío').")
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Desmontar el supuesto base del autor:"),
                  " Identifica qué creencia implícita sostiene toda la estructura del escrito. Si demuestras que ese supuesto inicial es falso o discutible, el argumento se debilita completamente."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "2"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Identificar los sesgos discursivos:"),
                  " Examina si el autor emplea términos cargados de emotividad para descalificar la postura contraria sin fundamentar sus afirmaciones con hechos."
                )
              ),
              React.createElement("div", { className: "flex gap-4 items-start" },
                React.createElement("div", { className: "w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center font-black shrink-0" }, "3"),
                React.createElement("p", { className: "mt-1" },
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Formular contraejemplos para refutar:"),
                  " Para anular una tesis de carácter general del texto, busca un caso empírico o experimental documentado que contradiga directamente su afirmación."
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
                  "\"¿Acaso podemos confiar en las energías renovables, cuyo suministro depende enteramente de que brille el sol o sople el viento? Es evidente que estas tecnologías inmaduras e inestables solo nos arrastrarán a un desabastecimiento energético continuo, a diferencia de los combustibles fósiles tradicionales, cuya confiabilidad ha sido demostrada por más de un siglo.\""
                )
              ),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-sm" },
                React.createElement("div", { className: "space-y-3" },
                  React.createElement("h4", { className: "font-black text-slate-800 dark:text-white" }, "Pregunta de Refutación Crítica:"),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 italic" }, "¿Cuál de las siguientes evidencias debilita en mayor grado el argumento central del autor?"),
                  React.createElement("ul", { className: "space-y-1.5 list-disc list-inside font-semibold text-slate-500" },
                    React.createElement("li", null, "A) Un reporte que demuestre que el precio del petróleo aumentó el mes pasado."),
                    React.createElement("li", { className: "text-rose-600 dark:text-rose-400" }, "B) Estudios que demuestran que las baterías modernas y la energía hidroeléctrica de reserva garantizan el suministro estable aun sin sol ni viento. (Correcta)"),
                    React.createElement("li", null, "C) Una encuesta donde el 80% de los ciudadanos apoya el uso de paneles solares."),
                    React.createElement("li", null, "D) Una investigación que demuestre que el carbón daña gravemente el medio ambiente.")
                  )
                ),
                React.createElement("div", { className: "bg-white dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl space-y-2" },
                  React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5" },
                    React.createElement(Icon, { name: "check_circle" }), "Análisis del Descarte:"
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block" }, "Por qué la B es correcta:"),
                    " El autor argumenta que las energías renovables no son confiables porque dependen directamente de las condiciones climáticas momentáneas. Si demuestras con hechos que existen tecnologías de almacenamiento (baterías y reservas) que eliminan esa dependencia, destruyes el supuesto de inestabilidad en el que descansa su tesis.\n\n",
                    React.createElement("strong", { className: "text-slate-700 dark:text-slate-300 font-bold block mt-2" }, "Por qué fallan las demás:"),
                    " La A e y D muestran desventajas del petróleo/carbón, pero no refutan el argumento de la inestabilidad de las renovables. La C es una apelación a la opinión popular (falacia Ad Populum) que no prueba la estabilidad física del sistema."
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
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Las preguntas retóricas camufladas como dudas:"), 
                  " Una pregunta retórica no indaga por información real; busca imponer un supuesto implícito (ej. '¿Acaso podemos confiar...?' presupone de partida que no). No las leas como dudas genuinas, sino como afirmaciones disfrazadas."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-rose-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Refutar atacando al autor en vez del argumento:"), 
                  " Si te piden refutar un texto, el distractor clásico será una opción que censure éticamente al emisor. Recuerda: refutar de verdad exige datos empíricos, contraejemplos y lógica, no ataques personales (Ad Hominem)."
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

    window.renderLCModule6 = (containerId) => {
      console.log("React LC Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(LCModule6));
          console.log("React LC Engine: Renderizado de LCModule6 exitoso.");
        } catch (e) {
          console.error("React LC Engine Error:", e);
        }
      } else {
        console.warn("React LC Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
