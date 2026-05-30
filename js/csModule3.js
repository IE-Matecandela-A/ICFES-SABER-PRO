(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function CSModule3() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedBranch, setSelectedBranch] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const stateBranches = [
        {
          name: "Rama Ejecutiva",
          icon: "business",
          leader: "Presidente, Ministros, Gobernadores y Alcaldes",
          function: "Administrar el Estado, ejecutar las leyes y gobernar el país para velar por los derechos e intereses de los ciudadanos.",
          check: "El Congreso (Rama Legislativa) ejerce control político sobre los ministros, y la Corte Suprema puede investigar penalmente a los altos funcionarios."
        },
        {
          name: "Rama Legislativa",
          icon: "gavel",
          leader: "Congreso de la República (Senado y Cámara de Representantes)",
          function: "Reformar la Constitución, elaborar/aprobar las leyes y ejercer el control político sobre el Gobierno nacional.",
          check: "La Corte Constitucional (Rama Judicial) revisa que las leyes aprobadas no vulneren los derechos consagrados en la Constitución de 1991."
        },
        {
          name: "Rama Judicial",
          icon: "balance",
          leader: "Cortes (Corte Constitucional, Corte Suprema, Consejo de Estado)",
          function: "Administrar justicia, resolver los conflictos civiles, comerciales, penales y laborales, y actuar como guardiana del orden jurídico.",
          check: "Los magistrados de las altas cortes son elegidos mediante un sistema mixto de postulaciones que involucra al Congreso y al propio sector judicial."
        },
        {
          name: "Órganos de Control",
          icon: "policy",
          leader: "Procuraduría, Contraloría y Defensoría del Pueblo",
          function: "Vigilar la conducta disciplinaria de los funcionarios públicos (Procuraduría), el correcto gasto del erario público (Contraloría) y defender los derechos de todos los ciudadanos (Defensoría).",
          check: "Son entidades autónomas e independientes de las tres ramas del poder público para garantizar la imparcialidad de sus investigaciones."
        }
      ];

      const questions = [
        {
          question: "Un ciudadano sospecha que el alcalde de su municipio está desviando los fondos destinados al plan de alimentación escolar (PAE) para financiar campañas políticas privadas de sus allegados. ¿A qué organismo autónomo de control del Estado debe acudir este ciudadano para denunciar formalmente la pérdida de los recursos económicos públicos?",
          options: [
            "A la Defensoría del Pueblo.",
            "A la Contraloría General de la República.",
            "Al Congreso de la República (Cámara de Representantes).",
            "A la Corte Constitucional."
          ],
          correct: 1,
          feedback: "¡Excelente! La Contraloría es el organismo autónomo encargado de ejercer el control fiscal. Su función constitucional es auditar y vigilar el correcto recaudo y gasto de los fondos y recursos del erario público (el dinero del Estado). La Procuraduría vigila la conducta de los funcionarios (disciplinario) y la Defensoría promueve los derechos humanos."
        },
        {
          question: "Para solucionar un conflicto limítrofe entre dos departamentos, el Presidente de la República firma un decreto que prohíbe la conformación de nuevos municipios en todo el territorio nacional y suspende indefinidamente el derecho al sufragio en la zona del conflicto. ¿Por qué este decreto presidencial resulta inconstitucional en Colombia?",
          options: [
            "Porque el Presidente solo puede emitir decretos sobre temas económicos y tributarios.",
            "Porque la suspensión del derecho al voto y la modificación de la estructura territorial violan las competencias exclusivas del Congreso y los derechos fundamentales amparados por la Constitución de 1991.",
            "Porque los departamentos fronterizos tienen autonomía absoluta para declararse naciones independientes si lo desean.",
            "Porque el decreto no contó con el voto aprobatorio unánime de los gobernadores departamentales involucrados."
          ],
          correct: 1,
          feedback: "¡Muy bien! Colombia es una democracia republicana donde rige el principio de separación de poderes y la supremacía de la Constitución. El Presidente (Rama Ejecutiva) no puede legislar a voluntad ni suspender derechos constitucionales fundamentales (como el voto), pues estas reformas de fondo competen al Congreso y están limitadas estrictamente por los derechos humanos de la carta constitucional."
        },
        {
          question: "Una mujer cabeza de hogar solicita un cupo escolar para su hijo de 7 años en la institución pública oficial más cercana a su residencia. El rector rechaza la matrícula argumentando que los cupos están reservados exclusivamente para estudiantes de familias católicas y que, al ser ella no creyente, debe buscar un colegio privado. ¿Qué mecanismo constitucional idóneo e inmediato debe interponer la madre para defender el derecho de su hijo?",
          options: [
            "Un Derecho de Petición dirigido a la Secretaría de Educación.",
            "Una Acción de Tutela argumentando la vulneración de los derechos fundamentales a la educación y a la no discriminación (igualdad y libertad de cultos).",
            "Una Acción Popular debido a que la educación beneficia a toda la comunidad de pescadores y campesinos locales.",
            "Un recurso de Habeas Corpus ante el juez penal municipal."
          ],
          correct: 1,
          feedback: "¡Correcto! La Acción de Tutela (Art. 86) es el mecanismo diseñado para amparar de manera preferente y sumaria los derechos fundamentales (como la educación de los niños, la igualdad y la libertad de cultos) cuando resulten vulnerados por una autoridad pública o particular, y requiere una resolución judicial en un plazo máximo e improrrogable de 10 días."
        },
        {
          question: "El Gobierno nacional decide convocar a los colombianos a las urnas para que aprueben o rechacen un acuerdo comercial de gran trascendencia que ya ha sido redactado e impulsado directamente por el Presidente. ¿Qué mecanismo de participación ciudadana corresponde a esta consulta sobre una decisión del Ejecutivo?",
          options: [
            "Un Referendo aprobatorio.",
            "Un Plebiscito convocado por el Presidente.",
            "Un Cabildo Abierto municipal.",
            "Una Consulta Popular de iniciativa legislativa parlamentaria."
          ],
          correct: 1,
          feedback: "¡Excelente! El Plebiscito (Art. 104) es el pronunciamiento del pueblo convocado por el Presidente de la República para apoyar o rechazar una decisión del Poder Ejecutivo. Se diferencia del Referendo en que este último se utiliza específicamente para someter a votación un texto de ley o una reforma constitucional para que el pueblo lo apruebe o derogue."
        },
        {
          question: "Un colegio privado expulsa a una estudiante de 15 años tras enterarse de que está embarazada, señalando que su estado 'contradice los principios morales del manual de convivencia y da un mal ejemplo a las demás alumnas'. La Corte Constitucional colombiana ha fallado reiteradamente en contra de estas medidas. ¿Cuál es el principal argumento constitucional de las sentencias de la Corte?",
          options: [
            "Las adolescentes embarazadas tienen derecho a no pagar pensiones mensuales de estudio.",
            "El derecho fundamental al libre desarrollo de la personalidad y a la educación prevalece sobre las regulaciones internas del manual de convivencia del colegio.",
            "Los manuales de convivencia no tienen validez legal alguna dentro de los colegios privados.",
            "La expulsión debió contar con la firma escrita del Defensor del Pueblo."
          ],
          correct: 1,
          feedback: "¡Excelente! Los manuales de convivencia son válidos, pero tienen un límite constitucional absoluto: no pueden vulnerar derechos fundamentales consagrados en la Carta Magna. La Corte señala que expulsar a una joven por embarazo viola su derecho a la educación y al libre desarrollo de la personalidad, constituyendo una discriminación inaceptable en un Estado Social de Derecho."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia: Constitución y Deberes Ciudadanos"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "La Constitución de 1991 no es un papel inerte; es la norma de normas que rige nuestra convivencia democrática. El ICFES evalúa si comprendes el concepto de ",
                React.createElement("strong", { className: "font-bold text-amber-500" }, "Estado Social de Derecho"),
                ", si sabes distinguir entre las ramas del poder público para el equilibrio constitucional, y si conoces las herramientas legales para exigir y proteger tus derechos fundamentales.",
                React.createElement("strong", { className: "font-semibold text-amber-600 block mt-2" }, "¡Un ciudadano activo conoce la estructura del Estado y sus mecanismos de amparo!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A reconocer los derechos fundamentales, colectivos y sociales y sus prioridades de tutela.",
                    "A emplear correctamente las acciones legales (Acción de Tutela, Petición, Habeas Corpus).",
                    "A identificar el organigrama de las Ramas Públicas e instituciones de control fiscal y disciplinario."
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
                    React.createElement("span", { className: "p-2 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-lg" }, React.createElement(Icon, { name: "account_balance" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "CONSTITUCIÓN POLÍTICA"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Ramas & Garantías")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"La tutela de los derechos fundamentales es el logro más grande de la Constitución de 1991, dotando al ciudadano de un escudo legal inmediato.\""
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
          // 1. Organigrama de las Ramas Públicas y Organismos
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "account_tree", className: "text-amber-500" }),
              "1. Organigrama: Estructura del Estado Colombiano"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, "Explora la división de poderes y los entes de control fiscal/disciplinario:"),
            
            // Arbol Organizacional del Estado
            React.createElement("div", { className: "space-y-6" },
              React.createElement("div", { className: "flex flex-col items-center gap-6" },
                // Nodo Principal
                React.createElement("div", { className: "bg-slate-900 text-white dark:bg-amber-600 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-md text-center border border-amber-500/20" },
                  "Estructura de la República de Colombia"
                ),
                // Conector vertical principal
                React.createElement("div", { className: "w-0.5 h-6 bg-slate-300 dark:bg-slate-800 -mt-6" }),
                
                // Nodos de Ramas y Órganos
                React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 w-full relative" },
                  // Conector horizontal de soporte (solo desktop)
                  React.createElement("div", { className: "hidden md:block absolute top-[28px] left-[12%] right-[12%] h-0.5 bg-slate-200 dark:bg-slate-800 z-0" }),
                  
                  stateBranches.map((branch, index) => {
                    const isSelected = selectedBranch === index;
                    return React.createElement("div", {
                      key: index,
                      onClick: () => setSelectedBranch(index),
                      className: "relative flex flex-col items-center z-10 cursor-pointer group select-none"
                    },
                      // Conector vertical individual
                      React.createElement("div", { className: "hidden md:block w-0.5 h-3 bg-slate-200 dark:bg-slate-800 z-0" }),
                      
                      // Card del Nodo
                      React.createElement("div", {
                        className: `w-full p-4 rounded-2xl border text-center transition-all duration-350 ${
                          isSelected
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold scale-100 shadow-md'
                            : 'border-slate-200 dark:border-slate-800 text-slate-500 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/40 scale-95'
                        }`
                      },
                        React.createElement("div", { className: `w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 transition-all ${
                          isSelected ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-850 text-slate-500 group-hover:bg-amber-100 group-hover:text-amber-500'
                        }` },
                          React.createElement(Icon, { name: branch.icon, style: { fontSize: '15px' } })
                        ),
                        React.createElement("h5", { className: "text-xs font-black tracking-tight" }, branch.name),
                        React.createElement("span", { className: "text-[9px] text-slate-400 dark:text-slate-550 block mt-1 uppercase tracking-wider font-bold truncate max-w-full" }, branch.leader.split(",")[0])
                      )
                    );
                  })
                )
              ),

              // Detalles del Nodo Seleccionado
              React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden transition-all duration-500" },
                React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" }),
                React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white mb-1" }, stateBranches[selectedBranch].name),
                React.createElement("span", { className: "text-[10px] font-black text-amber-600 dark:text-amber-400 block mb-4 uppercase tracking-widest" }, `INTEGRADO POR: ${stateBranches[selectedBranch].leader}`),
                React.createElement("p", { className: "text-slate-650 dark:text-slate-350 text-sm leading-relaxed mb-6 font-light" }, stateBranches[selectedBranch].function),
                React.createElement("div", { className: "border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[180px] mb-4 bg-slate-50 dark:bg-slate-950/20 flex items-center justify-center p-2" },
                  React.createElement("img", {
                    src: selectedBranch === 0 ? "img/diagrama_estados_excepcion.png" :
                         selectedBranch === 1 ? "img/ruta_proyecto_ley.png" :
                         selectedBranch === 2 ? "img/estructura_altas_cortes.png" :
                         "img/esquema_organos_control.png",
                    alt: "Esquema conceptual",
                    className: "w-full h-full object-contain select-none transition-all duration-300 hover:scale-102"
                  })
                ),
                React.createElement("div", { className: "border-t border-slate-100 dark:border-slate-800 pt-4 text-xs font-medium" },
                  React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1" }, "Mecanismo de Pesos y Contrapesos (Control recíproco):"),
                  React.createElement("p", { className: "text-slate-650 dark:text-slate-400 font-light leading-relaxed" }, stateBranches[selectedBranch].check)
                )
              )
            )
          ),

          // 2. Acciones Constitucionales (Tabla comparativa de amparo)
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "verified_user", className: "text-amber-500" }),
              "2. Comparativa: Mecanismos de Amparo de Derechos"
            ),
            React.createElement("div", { className: "grid lg:grid-cols-12 gap-6" },
              React.createElement("div", { className: "lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 flex items-center justify-center h-[280px] lg:h-auto" },
                React.createElement("img", {
                  src: "img/diagrama_mecanismos_proteccion.png",
                  alt: "Diagrama de Mecanismos de Protección",
                  className: "w-full h-full object-contain rounded-xl select-none"
                })
              ),
              React.createElement("div", { className: "lg:col-span-8 grid md:grid-cols-2 gap-4" },
                [
                  {
                    title: "Acción de Tutela",
                    art: "Artículo 86",
                    use: "Protección INMEDIATA de derechos fundamentales (Vida, Salud, Educación, No discriminación) cuando se vulneren por autoridades o particulares.",
                    tip: "Solo procede cuando no existan otros medios de defensa judicial eficaces (subsidiariedad), salvo para evitar perjuicios irremediables."
                  },
                  {
                    title: "Derecho de Petición",
                    art: "Artículo 23",
                    use: "Elevar solicitudes respetuosas de información, copias o quejas ante autoridades públicas y empresas privadas prestadoras de servicios públicos.",
                    tip: "Plazo de respuesta regular: 15 días hábiles. Si no contestan, se puede interponer tutela debido a que se vulnera un derecho fundamental."
                  },
                  {
                    title: "Habeas Corpus",
                    art: "Artículo 30",
                    use: "Proteger la libertad personal de quien es privado de ella de forma ilegal, retenido con violación de garantías constitucionales o prolongando su arresto.",
                    tip: "Debe ser resuelto por cualquier juez en un término máximo de 36 horas continuas. Funciona a cualquier hora del día."
                  },
                  {
                    title: "Acción Popular",
                    art: "Artículo 88",
                    use: "Proteger derechos e intereses colectivos (el medio ambiente sano, el espacio público, la moralidad administrativa o la seguridad pública).",
                    tip: "No busca reparar daños individuales, sino prevenir o corregir un peligro que amenaza o lesiona a toda una comunidad de habitantes."
                  }
                ].map((item, index) => (
                  React.createElement("div", { key: index, className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 space-y-2 flex flex-col" },
                    React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-sm" }, item.title),
                    React.createElement("span", { className: "text-[10px] font-black text-amber-500 block uppercase tracking-wider" }, item.art),
                    React.createElement("p", { className: "text-slate-500 dark:text-slate-400 text-xs leading-relaxed flex-1" }, item.use),
                    React.createElement("p", { className: "text-slate-400 dark:text-slate-500 text-[10px] italic pt-2 border-t border-slate-50 dark:border-slate-800" }, item.tip)
                  )
                ))
              )
            )
          ),

          // 3. Alertas y Heurísticas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "policy", className: "text-amber-500" }),
              "⚠️ Trucos de Competencias Ciudadanas"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "El Plebiscito de 2016 como precedente de examen:"), 
                  " Recuerda que el Plebiscito es vinculante políticamente solo para el Presidente (Rama Ejecutiva), no para el Congreso. Un plebiscito no puede reformar la Constitución de forma directa (para eso está el Referendo)."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa del Pluralismo vs. Derechos Fundamentales:"), 
                  " El multiculturalismo protege las tradiciones indígenas, PERO estas tienen un límite absoluto: los derechos fundamentales mínimos (el derecho a la vida, integridad física y no discriminación de mujeres y niños). Ninguna tradición étnica puede vulnerar la Constitución."
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
              // Left Column: Core Tip
              React.createElement("div", { className: "lg:col-span-4 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-inner relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-amber-500" }),
                React.createElement("h3", { className: "text-slate-500 dark:text-slate-400 font-bold text-xs uppercase tracking-widest mb-1" }, "Consejo ICFES"),
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Protección de Derechos"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "Analiza la gravedad de la situación presentada: si se trata de un peligro inminente para la vida, la integridad, la salud o la igualdad y libre expresión de un individuo, se vulnera un derecho fundamental y debes optar por la Acción de Tutela."
                )
              ),
              // Right Column: Interactive Quiz
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE APLICACIÓN CIUDADANA"),
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

    window.renderCSModule3 = (containerId) => {
      console.log("React CS Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(CSModule3));
          console.log("React CS Engine: Renderizado de CSModule3 exitoso.");
        } catch (e) {
          console.error("React CS Engine Error:", e);
        }
      } else {
        console.warn("React CS Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
