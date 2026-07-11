(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function CSModule1() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedTimelineEra, setSelectedTimelineEra] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const timelineEras = [
        {
          year: "1810 - 1886",
          title: "Independencia y Tensiones de Estado",
          icon: "gavel",
          desc: "Período marcado por la emancipación de España y la posterior disputa interna sobre la forma de organizar la nación. Se enfrentaron dos modelos antitéticos: el federalismo radical (Constitución de Rionegro de 1863) y el centralismo autoritario y clerical (Constitución de 1886 liderada por Rafael Núñez).",
          context: "El ICFES evalúa cómo estas tensiones iniciales (federalismo vs. centralismo) configuraron la inestabilidad política y el inicio del bipartidismo.",
          keyConcept: "Centralismo vs. Federalismo"
        },
        {
          year: "1899 - 1930",
          title: "Mil Días y la Hegemonía Conservadora",
          icon: "history_edu",
          desc: "Inicia con la Guerra de los Mil Días, la contienda civil más devastadora del país, que facilitó la Separación de Panamá (1903). Posteriormente, la Hegemonía Conservadora trajo estabilidad económica por el café, pero culminó en graves tensiones sociales, como la Masacre de las Bananeras (1928), donde el Estado priorizó intereses multinacionales sobre las demandas obreras.",
          context: "El ICFES pregunta a menudo sobre la Masacre de las Bananeras para evaluar el surgimiento del sindicalismo y la influencia de compañías extranjeras (United Fruit Company).",
          keyConcept: "Soberanía y Protesta Social"
        },
        {
          year: "1930 - 1957",
          title: "República Liberal, Bogotazo y Violencia",
          icon: "local_fire_department",
          desc: "Los liberales retornaron con reformas de modernización social (ej. 'La Revolución en Marcha' de López Pumarejo). Las crecientes tensiones bipartidistas estallaron el 9 de abril de 1948 con el magnicidio de Jorge Eliécer Gaitán ('El Bogotazo'), desencadenando la etapa conocida como 'La Violencia', caracterizada por masacres rurales, despojo de tierras y el colapso institucional.",
          context: "El ICFES analiza el Bogotazo no como un hecho aislado, sino como el catalizador de la urbanización forzada y la radicalización de la violencia partidista.",
          keyConcept: "Bipartidismo e Impacto Agrario"
        },
        {
          year: "1958 - 1974",
          title: "El Frente Nacional y Exclusión Política",
          icon: "handshake",
          desc: "Pacto de alternancia presidencial exclusiva entre los partidos Liberal y Conservador durante 16 años para detener la violencia partidista y la dictadura de Rojas Pinilla. Aunque pacífico en las élites, excluyó a terceras fuerzas políticas, propiciando el desencanto social y la justificación ideológica para la fundación de las guerrillas contemporáneas (FARC, ELN, M-19).",
          context: "El ICFES evalúa el Frente Nacional como un mecanismo de pacificación institucional que, al mismo tiempo, generó exclusión democrática y avivó el conflicto armado.",
          keyConcept: "Exclusión Democrática y Conflicto"
        },
        {
          year: "1989 - Presente",
          title: "Constitución de 1991 y Búsqueda de la Paz",
          icon: "auto_stories",
          desc: "Crisis social extrema por el narcoterrorismo y asesinatos políticos llevó a la desmovilización del M-19 y al movimiento estudiantil de la 'Séptima Papeleta', resultando en la Constitución de 1991. Esta transformó a Colombia en un Estado Social de Derecho y descentralizado. En 2016 se firmó el Acuerdo de Paz con las FARC para dar cierre a más de 50 años de conflicto.",
          context: "El ICFES evalúa la Constitución del 91 como un pacto de inclusión pluricultural y de amparo de derechos fundamentales que redefinió el marco civil de Colombia.",
          keyConcept: "Estado Social de Derecho y Paz"
        }
      ];

      const questions = [
        {
          question: "Durante el período del Frente Nacional (1958-1974) en Colombia, los partidos Liberal y Conservador acordaron alternarse en el poder y repartir de manera equitativa los cargos públicos, excluyendo legalmente a cualquier otro movimiento político. ¿Cuál fue una consecuencia directa de esta exclusión institucionalizada en la historia del país?",
          options: [
            "La desaparición definitiva de la polarización política ideológica en las áreas urbanas.",
            "El fortalecimiento del bipartidismo en los sectores populares mediante la reforma agraria.",
            "El surgimiento y radicalización de movimientos guerrilleros de izquierda como respuesta a la falta de canales democráticos.",
            "La consolidación de un sistema monárquico moderado bajo control militar."
          ],
          correct: 2,
          feedback: "¡Correcto! Al bloquear el acceso legal a la representación política de cualquier tercera corriente, el Frente Nacional clausuró las vías institucionales de participación. Esto fue utilizado por diversos grupos sociales e intelectuales como justificación para recurrir a la lucha armada, propiciando el nacimiento de guerrillas como las FARC, el ELN y el M-19."
        },
        {
          question: "Analistas históricos distinguen entre causas de largo plazo (estructurales) y causas inmediatas (detonantes) de un acontecimiento. En el contexto de la Independencia de Colombia, la invasión napoleónica a España en 1808 y la captura del rey Fernando VII actuaron como:",
          options: [
            "Una causa estructural, puesto que el descontento de los criollos con las reformas borbónicas venía gestándose desde hacía siglos.",
            "Una causa inmediata o detonante, ya que generó un vacío de legitimidad monárquica que los criollos aprovecharon para instaurar juntas autónomas de gobierno.",
            "Una consecuencia histórica de la independencia de las colonias americanas.",
            "Un acontecimiento irrelevante que no guardó relación alguna con el proceso emancipador de la Nueva Granada."
          ],
          correct: 1,
          feedback: "¡Excelente! La causa estructural del descontento criollo era el sistema de castas y la exclusión de cargos políticos. La invasión francesa a la península ibérica (1808) funcionó como el detonante o causa inmediata, al dejar a España sin un gobernante legítimo en el trono, lo cual dio paso a la creación de juntas americanas que finalmente declararon la independencia."
        },
        {
          question: "El asesinato del líder popular Jorge Eliécer Gaitán el 9 de abril de 1948 provocó violentas protestas populares conocidas como 'El Bogotazo'. Desde una perspectiva sociográfica y de ordenamiento territorial, ¿qué impacto estructural a largo plazo provocó este evento en el país?",
          options: [
            "El retorno pacífico de la población a las áreas agrarias debido a la industrialización de la agricultura.",
            "Un proceso acelerado de urbanización forzada, impulsado por el desplazamiento de familias campesinas que huían de la violencia rural subsiguiente.",
            "La abolición del latifundio y la redistribución equitativa de las tierras fértiles.",
            "La descentralización total del poder político, otorgando autonomía a los cabildos rurales."
          ],
          correct: 1,
          feedback: "¡Muy bien! Tras el Bogotazo, la violencia partidista se trasladó con especial crueldad a los campos. Miles de campesinos se vieron obligados a huir para salvar sus vidas, emigrando masivamente a las ciudades principales (Bogotá, Medellín, Cali). Esto transformó la demografía nacional, convirtiendo a Colombia en un país predominantemente urbano."
        },
        {
          question: "En diciembre de 1928, en la zona bananera del departamento del Magdalena, el ejército colombiano disparó contra miles de trabajadores en huelga de la United Fruit Company. Un análisis multicausal de este hecho debe incorporar no solo la demanda de mejores condiciones laborales de los obreros, sino también:",
          options: [
            "El deseo de la multinacional de ceder gratuitamente sus tierras a los sindicatos agrarios.",
            "La presión del gobierno estadounidense por proteger las inversiones de sus corporaciones y el temor del gobierno colombiano a una intervención militar extranjera.",
            "La consolidación de Colombia como el principal exportador mundial de tecnología industrial.",
            "El respaldo unánime del clero católico a las doctrinas comunistas de los trabajadores."
          ],
          correct: 1,
          feedback: "¡Correcto! La Masacre de las Bananeras no se explica únicamente por el conflicto local obrero-patronal. Factores internacionales fueron críticos: el gobierno de EE.UU. amenazó con enviar a sus marines si el gobierno colombiano no protegía las propiedades de la United Fruit Company, lo que llevó al presidente de turno a ordenar una violenta represión militar para disipar la amenaza de invasión."
        },
        {
          question: "Al comparar la Constitución de 1886 con la Constitución de 1991 en Colombia, se observa una transformación radical en la concepción del Estado. Mientras que la Carta de 1886 definía a la nación bajo un modelo centralista, católico y presidencialista estricto, la de 1991 introdujo el concepto de:",
          options: [
            "Monarquía Constitucional con representación parlamentaria.",
            "Estado Social de Derecho, descentralizado, pluriétnico, multicultural y laico.",
            "Confederación de Estados Federales autónomos bajo control clerical.",
            "República unitaria y centralista de religión única oficial obligatoria."
          ],
          correct: 1,
          feedback: "¡Excelente! La Constitución de 1991 rompió con el modelo homogéneo y centralista de 1886. Al fundar a Colombia como un Estado Social de Derecho descentralizado y reconocer la diversidad étnica y cultural, así como la libertad de cultos (Estado laico), abrió espacio a los derechos fundamentales, la inclusión y la participación ciudadana pluricultural."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia: Pensamiento Social e Histórico"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Para contestar con éxito la sección de historia en el examen Saber 11, debes abandonar la memorización mecánica de fechas y nombres. El ICFES evalúa tu capacidad para entender ",
                React.createElement("strong", { className: "font-bold text-amber-500" }, "procesos de mediano y largo plazo"),
                ", identificar la multicausalidad detrás de los hechos y relacionar eventos del pasado con nuestra realidad constitucional y social actual.",
                React.createElement("strong", { className: "font-semibold text-amber-600 block mt-2" }, "¡La historia es un tejido de causas, intereses y consecuencias!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A reconocer los grandes hitos de la historia de Colombia de los siglos XIX, XX y XXI y sus nexos de causa-efecto.",
                    "A diferenciar entre causas coyunturales (detonantes) y causas estructurales (de raíz).",
                    "A analizar la multicausalidad en fenómenos históricos y sus dinámicas de exclusión e inclusión."
                  ].map((text, i) => 
                    React.createElement("li", { key: i, className: "flex items-start gap-3" },
                      React.createElement("div", { className: "mt-1 bg-amber-100 dark:bg-amber-950/30 p-1 rounded-full shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300" },
                        React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-amber-600 dark:text-amber-400" })
                      ),
                      React.createElement("span", null, text)
                    )
                  )
                )
              )
            ),
            React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-900/10 rounded-3xl p-8 border border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center relative shadow-inner overflow-hidden min-h-[360px]" },
              React.createElement("div", { className: "relative w-full h-64 flex items-center justify-center" },
                React.createElement("svg", { className: "w-56 h-56 text-amber-500/10 dark:text-amber-500/5 absolute animate-pulse", viewBox: "0 0 100 100", fill: "currentColor" },
                  React.createElement("circle", { cx: "50", cy: "50", r: "45" })
                ),
                React.createElement("div", { className: "relative z-10 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-xl max-w-xs transition-transform hover:scale-105 duration-300" },
                  React.createElement("div", { className: "flex items-center gap-3 border-b border-slate-100 dark:border-slate-700/50 pb-3 mb-3" },
                    React.createElement("span", { className: "p-2 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-lg" }, React.createElement(Icon, { name: "history_edu" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "PENSAMIENTO HISTÓRICO"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Procesos & Estructuras")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El ICFES no busca saber si recuerdas el día exacto de un combate, sino si entiendes por qué ocurrió y cómo cambió nuestro presente.\""
                  )
                )
              ),
              React.createElement("button", { 
                onClick: () => setActiveTab('teoria'),
                className: "mt-4 bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(245,158,11,0.2)] active:scale-95 flex items-center gap-2"
              },
                "Comenzar Teoría ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
              )
            )
          )
        )
      );

      const renderTeoria = () => (
        React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-8" },
          // 1. Línea de Tiempo Interactiva
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "timeline", className: "text-amber-500" }),
              "1. Línea de Tiempo: Hitos Clave de la Historia de Colombia"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, "Haz clic en cada época para explorar los hechos y el contexto evaluado por el ICFES:"),
            
            // Contenedor de la Línea de Tiempo en Dos Columnas
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch" },
              // Columna izquierda: Línea de Tiempo Vertical
              React.createElement("div", { className: "lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden" },
                React.createElement("div", { className: "relative pl-6 space-y-6" },
                  // Eje vertical
                  React.createElement("div", { className: "absolute left-[13px] top-3 bottom-3 w-[2px] bg-slate-100 dark:bg-slate-800 opacity-60" }),
                  
                  timelineEras.map((era, index) => {
                    const isSelected = selectedTimelineEra === index;
                    return React.createElement("div", {
                      key: index,
                      onClick: () => setSelectedTimelineEra(index),
                      className: `relative flex items-start gap-4 cursor-pointer select-none group transition-all duration-300 ${
                        isSelected ? 'scale-100' : 'opacity-60 hover:opacity-100 hover:scale-95'
                      }`
                    },
                      // Nodo circular
                      React.createElement("div", {
                        className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all z-10 ${
                          isSelected 
                            ? 'border-amber-500 bg-amber-500 text-white shadow-[0_0_12px_rgba(245,158,11,0.4)] scale-110' 
                            : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:border-amber-400'
                        }`
                      },
                        React.createElement(Icon, { name: era.icon, style: { fontSize: '13px' } })
                      ),
                      // Textos cortos
                      React.createElement("div", { className: "flex-1 pt-0.5" },
                        React.createElement("span", {
                          className: `text-[10px] font-black tracking-wider uppercase block ${
                            isSelected ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'
                          }`
                        }, era.year),
                        React.createElement("h5", {
                          className: `text-xs font-black transition-colors ${
                            isSelected ? 'text-slate-800 dark:text-white' : 'text-slate-500 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'
                          }`
                        }, era.title)
                      )
                    );
                  })
                )
              ),
              
              // Columna derecha: Detalles de la Época Seleccionada
              React.createElement("div", { className: "lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between" },
                React.createElement("div", null,
                  React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" }),
                  React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                    React.createElement("div", { className: "w-10 h-10 bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center font-bold text-lg" },
                      React.createElement(Icon, { name: timelineEras[selectedTimelineEra].icon })
                    ),
                    React.createElement("div", null,
                      React.createElement("span", { className: "text-xs font-black text-amber-600 dark:text-amber-400 tracking-widest block uppercase" }, `ÉPOCA: ${timelineEras[selectedTimelineEra].year}`),
                      React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white" }, timelineEras[selectedTimelineEra].title)
                    )
                  ),
                  React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 font-light" }, timelineEras[selectedTimelineEra].desc),
                  React.createElement("div", { className: "border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[140px] mb-4 bg-slate-50 dark:bg-slate-950/20" },
                    React.createElement("img", { loading: "lazy", decoding: "async",
                      src: selectedTimelineEra === 0 ? "img/mapa_nueva_granada.png" :
                           selectedTimelineEra === 1 ? "img/insurreccion_comunera.png" :
                           selectedTimelineEra === 2 ? "img/caricatura_protesta_social.png" :
                           selectedTimelineEra === 3 ? "img/caricatura_reparto_bipolar.png" :
                           "img/modelo_jep.png",
                      alt: "Ilustración de la época histórica",
                      className: "w-full h-full object-cover select-none transition-all duration-300 hover:scale-105"
                    })
                  )
                ),
                React.createElement("div", { className: "border-t border-slate-100 dark:border-slate-800 pt-4 grid md:grid-cols-2 gap-4 text-xs font-medium" },
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1" }, "Enfoque ICFES (Preguntas frecuentes):"),
                    React.createElement("span", { className: "text-slate-600 dark:text-slate-400 leading-normal font-light" }, timelineEras[selectedTimelineEra].context)
                  ),
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1" }, "Concepto Sistémico Clave:"),
                    React.createElement("span", { className: "text-amber-600 dark:text-amber-400 font-bold block mt-1" }, timelineEras[selectedTimelineEra].keyConcept)
                  )
                )
              )
            )
          ),

          // 2. Metodología de Resolución
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "psychology", className: "text-amber-500" }),
              "2. Metodología de Resolución: Estructural vs. Coyuntural"
            ),
            React.createElement("p", { className: "text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light" },
              "Uno de los errores más comunes en la prueba de Ciencias Sociales es confundir el detonante de un hecho con su verdadera causa. Para resolver correctamente las preguntas de análisis histórico, debes aplicar esta distinción metodológica:"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-amber-600 dark:text-amber-400 text-sm uppercase tracking-wider mb-2" }, "Causas Inmediatas (Coyunturales)"),
                React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                  "Son los eventos que desencadenan el acontecimiento de forma directa e inmediata. Suelen ser visibles, llamativos y puntuales (ej. El florero de Llorente en la Independencia, o el asesinato de Gaitán en el Bogotazo). Funcionan como la 'chispa' que enciende la pólvora, pero no explican por qué había pólvora acumulada."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-orange-600 dark:text-orange-400 text-sm uppercase tracking-wider mb-2" }, "Causas de Largo Plazo (Estructurales)"),
                React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed" },
                  "Son los factores de raíz acumulados con el tiempo (económicos, sociales, exclusión política, distribución desigual de la tierra). Son las que explican las condiciones profundas e históricas de un fenómeno (ej. la exclusión criolla por reformas de España, o la miseria rural previa al Bogotazo). Para el ICFES, estas son las causas más importantes."
                )
              )
            )
          ),

          // 3. Alertas y Heurísticas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "gavel", className: "text-amber-500" }),
              "⚠️ Trampas de Historia en el ICFES"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa de la Causa Única:"), 
                  " Desconfía de las opciones que afirman que un proceso histórico ocurrió por una sola causa directa ('La independencia se debió exclusivamente al florero de Llorente'). Los procesos sociales siempre son complejos e involucran intereses económicos, sociales e internacionales a la vez."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa del Anacronismo:"), 
                  " Busca que no juzgues sucesos del pasado con la ética o los conceptos modernos. Por ejemplo, culpar a Simón Bolívar por no crear ministerios ambientales o no incluir derechos digitales en las constituciones del siglo XIX es un anacronismo lógico recurrente en distractores."
                )
              )
            )
          ),
          
          React.createElement("div", { className: "flex justify-center" },
            React.createElement("button", { 
              onClick: () => setActiveTab('practica'),
              className: "bg-amber-600 hover:bg-amber-500 text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-amber-500/20 active:scale-95 transition-all flex items-center gap-2"
            },
              "Ir a la Práctica (Quiz) ", React.createElement(Icon, { name: "quiz" })
            )
          )
        )
      );

      const renderPractica = () => {
        if (showResults) {
          const scorePercent = Math.round((score / questions.length) * 100);
          return (
            React.createElement("div", { className: "animate-in zoom-in-95 duration-500 text-center max-w-md mx-auto py-10" },
              React.createElement("div", { className: "w-20 h-20 bg-amber-100 dark:bg-amber-950/40 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-md" }, "🏆"),
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 dark:text-white mb-2" }, 
                scorePercent >= 80 ? "¡Excelente Trabajo!" : scorePercent >= 50 ? "¡Buen Intento!" : "Sigue Practicando"
              ),
              React.createElement("p", { className: "text-slate-500 dark:text-slate-400 text-lg mb-8" }, 
                `Has respondido correctamente ${score} de ${questions.length} preguntas (${scorePercent}%)`
              ),
              React.createElement("button", { 
                onClick: resetQuiz,
                className: "bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-3 rounded-xl transition-all shadow-md active:scale-95"
              }, "Reintentar Quiz")
            )
          );
        }

        const q = questions[currentQuestion];
        return (
          React.createElement("div", { className: "animate-in fade-in duration-500" },
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-start" },
              // Left Column: Core Tip/Instructions
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-amber-500" }),
                React.createElement("h3", { className: "text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1" }, "Consejo ICFES"),
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Pensamiento Multicausal"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "Lee el enunciado identificando de qué época se está hablando. Recuerda que no debes juzgar con tus opiniones personales sino ubicar el contexto social, las tensiones políticas de los actores involucrados y las reglas institucionales del período histórico mencionado."
                )
              ),
              // Right Column: Interactive Quiz
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE ANÁLISIS HISTÓRICO"),
                  React.createElement("span", { className: "text-sm text-slate-400 font-bold" }, `${currentQuestion + 1} de ${questions.length}`)
                ),
                React.createElement("div", { className: "w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mb-8 overflow-hidden" },
                  React.createElement("div", { className: "bg-gradient-to-r from-amber-400 to-orange-500 h-full transition-all duration-300", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
                ),
                React.createElement("h3", { className: "text-base font-extrabold text-slate-800 dark:text-white mb-6 leading-relaxed" }, q.question),
                React.createElement("div", { className: "space-y-3 mb-8" },
                  q.options.map((option, index) => {
                    let btnStyle = "border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-950/10 text-slate-700 dark:text-slate-300";
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
                      : 'bg-rose-500/10 border-rose-500/20 text-rose-800 dark:text-rose-400'
                  }` },
                    React.createElement("span", { className: "font-black block mb-1 text-xs uppercase tracking-wider" }, 
                      selectedAnswer === q.correct ? "✓ EXPLICACIÓN CORRECTA" : "✗ RETROALIMENTACIÓN"
                    ),
                    q.feedback
                  ),
                  React.createElement("button", {
                    onClick: nextQuestion,
                    className: "bg-slate-900 dark:bg-amber-600 hover:bg-slate-800 dark:hover:bg-amber-500 text-white font-extrabold px-8 py-3.5 rounded-xl ml-auto block transition-all active:scale-95 shadow-md text-sm"
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
                    ? 'bg-white dark:bg-slate-800 text-amber-600 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100 dark:border-slate-700/60 scale-100' 
                    : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/40 scale-95'
                }`
              },
                React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-amber-500' : ''}` }),
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

    window.renderCSModule1 = (containerId) => {
      console.log("React CS Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(CSModule1));
          console.log("React CS Engine: Renderizado de CSModule1 exitoso.");
        } catch (e) {
          console.error("React CS Engine Error:", e);
        }
      } else {
        console.warn("React CS Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
