(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function CSModule2() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedRegion, setSelectedRegion] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const regionsData = [
        {
          name: "Región Andina",
          icon: "filter_hdr",
          description: "La región más poblada y desarrollada industrialmente. Contiene los principales centros urbanos de Colombia asentados sobre las tres ramificaciones de la cordillera de los Andes.",
          conflict: "Expansión de la frontera agrícola sobre los páramos (monocultivos de papa y ganadería de altura) y degradación de cuencas por vertimiento de aguas servidas e industriales (ríos Bogotá, Cauca y Magdalena).",
          icfesTip: "El ICFES suele evaluar el conflicto del agua en los páramos (ej. delimitación del Páramo de Santurbán frente a la explotación minera de oro multinacional)."
        },
        {
          name: "Región Pacífica",
          icon: "water",
          description: "Zona de altísima pluviosidad, selvas densas y gran biodiversidad (Chocó Biogeográfico). Concentra población afrodescendiente e indígena con altos índices de necesidades básicas insatisfechas.",
          conflict: "Explotación forestal ilegal y minería de aluvión ilegal (oro) utilizando mercurio y cianuro, lo cual destruye el cauce de ríos como el Atrato y envenena las cadenas alimenticias locales.",
          icfesTip: "El río Atrato fue declarado 'sujeto de derechos' por la Corte Constitucional; el ICFES indaga sobre los derechos étnico-territoriales frente a la devastación ambiental."
        },
        {
          name: "Región de la Amazonía",
          icon: "forest",
          description: "El pulmón verde del país, caracterizado por selvas húmedas tropicales y resguardos indígenas de gran extensión territorial.",
          conflict: "Deforestación masiva provocada por la ganadería extensiva, el acaparamiento ilegal de tierras para especulación, los cultivos de uso ilícito y las vías no autorizadas que fragmentan el ecosistema.",
          icfesTip: "Preguntas recurrentes evalúan cómo la tala de selva altera el ciclo del agua andino ('ríos voladores') evidenciando el pensamiento reflexivo y sistémico."
        },
        {
          name: "Región Caribe",
          icon: "beach_access",
          description: "Llanuras costeras, serranías aisladas (Sierra Nevada de Santa Marta) y ecosistemas de ciénagas y manglares.",
          conflict: "Erosión costera acelerada por el aumento del nivel del mar (cambio climático), sobreexplotación pesquera y la desecación de ciénagas para ganadería o complejos viales mal planeados.",
          icfesTip: "Evalúa los efectos sociales de la salinización de acuíferos y las inundaciones recurrentes de la depresión momposina sobre comunidades vulnerables."
        },
        {
          name: "Región de la Orinoquía",
          icon: "grass",
          description: "Extensas sabanas inundables o altillanuras (los Llanos Orientales), tradicionalmente ganadera pero ahora con fuerte expansión agroindustrial.",
          conflict: "Monocultivos agroindustriales (palma de aceite, forestales comerciales) que consumen masivamente agua subterránea y alteran los ecosistemas nativos de sabana y morichales.",
          icfesTip: "Analiza el impacto del modelo extractivista petrolero en el flujo hídrico y las regalías frente al desarrollo social local."
        }
      ];

      const questions = [
        {
          question: "El Páramo de Santurbán es una reserva ecológica vital que provee agua a más de dos millones de personas en Santander. Sin embargo, su subsuelo alberga ricos yacimientos de oro, cuya explotación a gran escala generaría miles de empleos y cuantiosas regalías. Al discutir este proyecto minero, ¿cuál es el dilema sistémico de desarrollo sostenible que se presenta?",
          options: [
            "La contradicción insalvable entre el crecimiento de la población urbana y el aumento de la pluviosidad del páramo.",
            "La tensión entre el beneficio económico inmediato por minería extractiva y la preservación a largo plazo del recurso hídrico y los servicios ecosistémicos indispensables.",
            "El conflicto religioso sobre el carácter sagrado de los volcanes frente a las licencias gubernamentales.",
            "La imposibilidad física de extraer el oro sin desviar permanentemente el curso de la cordillera Andina."
          ],
          correct: 1,
          feedback: "¡Excelente! Este caso refleja la tensión típica del desarrollo sostenible: por un lado, hay intereses económicos legítimos (empleos, inversión extranjera, regalías para el Estado) y por el otro, la conservación ecológica crítica (agua potable para consumo humano, biodiversidad, regulación climática). El ICFES evalúa si puedes ponderar el balance sistémico de estas decisiones."
        },
        {
          question: "Diversos estudios demuestran que la deforestación de la selva amazónica reduce la formación de vapor de agua que viaja por el aire hacia la Cordillera de los Andes, disminuyendo las lluvias en la región Andina, donde se asienta la mayoría de los acueductos e industrias del país. ¿Qué concepto de las ciencias sociales ilustra mejor este fenómeno?",
          options: [
            "La soberanía alimentaria exclusiva de las comunidades indígenas selváticas.",
            "La interdependencia y fragilidad sistémica de las relaciones entre las dinámicas ambientales regionales y los asentamientos humanos.",
            "El éxito del modelo agroindustrial andino en la domesticación de cuencas de agua lejanas.",
            "La total independencia de las zonas urbanas frente a las condiciones ecológicas rurales del país."
          ],
          correct: 1,
          feedback: "¡Muy bien! Se trata de una pregunta de Pensamiento Sistémico. Demuestra que un daño ambiental provocado en un ecosistema lejano (deforestación en la Amazonía) tiene repercusiones directas y graves en el bienestar social y económico de otra zona (escasez de agua en la región Andina), reflejando que los sistemas naturales y sociales están interconectados."
        },
        {
          question: "Una alcaldía municipal propone reubicar a una comunidad de pescadores artesanales que habita una zona de manglar de baja altura costera, debido a la erosión y la inminente inundación por el aumento del nivel del mar provocado por el cambio climático global. La comunidad se opone, argumentando que la pesca es su único sustento económico y que la reubicación destruirá sus lazos culturales ancestrales. Al analizar las perspectivas de este conflicto social, es correcto afirmar que:",
          options: [
            "La alcaldía actúa motivada por un prejuicio racista y excluyente hacia la cultura pesquera.",
            "La comunidad de pescadores carece de racionalidad al no comprender la física del nivel del mar.",
            "Existen intereses encontrados: la protección de la vida humana y la gestión del riesgo de desastres de la alcaldía frente al derecho al territorio, identidad cultural y sustento de los pescadores.",
            "El conflicto se resuelve fácilmente eliminando la regulación de pesca y autorizando la construcción de diques de cemento privados."
          ],
          correct: 2,
          feedback: "¡Correcto! En este problema convergen dos posturas válidas y en tensión: el deber estatal de prevenir desastres y proteger vidas frente al arraigo cultural, económico e identitario de una población étnica al manglar. La competencia ciudadana evaluada es la capacidad de interpretar objetivamente las múltiples dimensiones y perspectivas en un conflicto social."
        },
        {
          question: "El Plan de Ordenamiento Territorial (POT) es un instrumento legal establecido por la Ley 388 de 1997 en Colombia. Un POT tiene como función principal:",
          options: [
            "Fijar el precio de venta de los inmuebles urbanos para controlar la inflación del suelo.",
            "Planificar y regular democráticamente el uso del suelo urbano y rural del municipio, definiendo zonas de desarrollo, conservación y áreas de riesgo no urbanizables.",
            "Determinar el monto exacto de regalías petroleras que debe recibir la alcaldía municipal.",
            "Autorizar la expropiación sin indemnización de todas las propiedades rurales para fines ecológicos."
          ],
          correct: 1,
          feedback: "¡Excelente! El POT es el marco regulatorio que define cómo crece una ciudad o municipio. Establece qué zonas son residenciales, industriales o rurales, y fundamentalmente, cuáles son áreas de conservación y de alto riesgo (ej. laderas propensas a deslizamientos o rondas de ríos propensas a inundación) donde está prohibido edificar para resguardar la vida humana."
        },
        {
          question: "En varios ríos de la región Pacífica, la minería ilegal de aluvión destruye las capas de suelo fértil, contamina las cuencas con mercurio y genera problemas de salud en comunidades indígenas que consumen pescado del río. Si el gobierno decide prohibir toda actividad minera en la región de forma inmediata sin ofrecer alternativas productivas, ¿cuál sería un efecto colateral no deseado de esta medida?",
          options: [
            "La desaparición absoluta de cualquier conflicto ambiental en Colombia de forma inmediata.",
            "El aumento de la minería clandestina y la precarización económica de las familias mineras que dependen de esta actividad para sobrevivir.",
            "Un descenso masivo en la tasa de migración de la población rural a los cascos urbanos.",
            "El fin del cambio climático global gracias al cese de actividades extractivas mineras."
          ],
          correct: 1,
          feedback: "¡Correcto! Una medida prohibitiva unilateral sin planes de reconversión laboral empuja a los mineros informales a la ilegalidad total o a actividades delictivas para no morir de hambre. Esto demuestra cómo las decisiones de política pública ambiental tienen repercusiones socioeconómicas directas que complican la resolución de los problemas de origen si no se analizan sistémicamente."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia: Pensamiento Reflexivo y Sistémico"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "El espacio geográfico no es solo naturaleza estática; es un escenario socialmente construido. El ICFES evalúa cómo la distribución de recursos naturales, el ordenamiento territorial y las decisiones de desarrollo económico impactan el medio ambiente y detonan ",
                React.createElement("strong", { className: "font-bold text-amber-500" }, "conflictos de intereses"),
                " entre comunidades, industrias y el Estado.",
                React.createElement("strong", { className: "font-semibold text-amber-600 block mt-2" }, "¡Las decisiones ecológicas tienen profundas consecuencias sociales!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A caracterizar las problemáticas ambientales críticas de las regiones de Colombia.",
                    "A analizar decisiones territoriales (como el POT) y de desarrollo desde perspectivas encontradas.",
                    "A conectar desastres ambientales con causas locales y globales complejas (pensamiento sistémico)."
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
                    React.createElement("span", { className: "p-2 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-lg" }, React.createElement(Icon, { name: "landscape" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "GEOGRAFÍA Y SOCIEDAD"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Territorio & Conflictos")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El medio ambiente y el desarrollo no son enemigos irreconciliables, pero requieren de decisiones políticas concertadas y éticas.\""
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
          // 1. Explorador Regional Interactivo
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "map", className: "text-amber-500" }),
              "1. Conflictos Socio-Ambientales por Regiones"
            ),
            // Contenedor del Explorador Regional en Dos Columnas
            (() => {
              const regionImages = [
                "img/caricatura_fracking.png",
                "img/mapa_cultivos_pobreza.png",
                "img/espiral_climatica.png",
                "img/mapa_afrocolombiano.png",
                "img/mapa_zonas_riesgo_colombia.png"
              ];

              return React.createElement("div", { className: "grid lg:grid-cols-12 gap-8 items-stretch" },
                // Columna Izquierda: Mapa de Colombia e Selector de Botones
                React.createElement("div", { className: "lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between gap-6" },
                  React.createElement("div", { className: "flex justify-center items-center w-full h-[220px] bg-slate-50 dark:bg-slate-950/40 rounded-2xl p-2 border border-slate-100 dark:border-slate-800/40 overflow-hidden" },
                    React.createElement("div", { className: "relative w-[210px] h-[210px] mx-auto" },
                      React.createElement("img", {
                        src: "img/mapa_regiones_colombia.png",
                        alt: "Mapa de las Regiones de Colombia",
                        className: "w-full h-full object-contain rounded-xl select-none"
                      }),
                      // Hotspots interactivos alineados exactamente al mapa cuadrado
                      // 1. Caribe (Index 3)
                      React.createElement("div", {
                        onClick: () => setSelectedRegion(3),
                        title: "Región Caribe",
                        className: `absolute cursor-pointer rounded-full transition-all duration-300 ${selectedRegion === 3 ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md scale-105' : 'hover:bg-amber-500/5'}`,
                        style: { top: '10%', left: '34%', width: '24%', height: '20%', zIndex: 20 }
                      }),
                      // 2. Pacífica (Index 1)
                      React.createElement("div", {
                        onClick: () => setSelectedRegion(1),
                        title: "Región Pacífica",
                        className: `absolute cursor-pointer rounded-full transition-all duration-300 ${selectedRegion === 1 ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md scale-105' : 'hover:bg-amber-500/5'}`,
                        style: { top: '31%', left: '30%', width: '10%', height: '42%', zIndex: 20 }
                      }),
                      // 3. Andina (Index 0)
                      React.createElement("div", {
                        onClick: () => setSelectedRegion(0),
                        title: "Región Andina",
                        className: `absolute cursor-pointer rounded-full transition-all duration-300 ${selectedRegion === 0 ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md scale-105' : 'hover:bg-amber-500/5'}`,
                        style: { top: '28%', left: '36%', width: '18%', height: '36%', zIndex: 20 }
                      }),
                      // 4. Orinoquía (Index 4)
                      React.createElement("div", {
                        onClick: () => setSelectedRegion(4),
                        title: "Región de la Orinoquía",
                        className: `absolute cursor-pointer rounded-full transition-all duration-300 ${selectedRegion === 4 ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md scale-105' : 'hover:bg-amber-500/5'}`,
                        style: { top: '34%', left: '52%', width: '24%', height: '24%', zIndex: 20 }
                      }),
                      // 5. Amazonía (Index 2)
                      React.createElement("div", {
                        onClick: () => setSelectedRegion(2),
                        title: "Región de la Amazonía",
                        className: `absolute cursor-pointer rounded-full transition-all duration-300 ${selectedRegion === 2 ? 'bg-amber-500/10 border-2 border-amber-500 shadow-md scale-105' : 'hover:bg-amber-500/5'}`,
                        style: { top: '54%', left: '44%', width: '30%', height: '26%', zIndex: 20 }
                      })
                    )
                  ),
                  
                  // Region buttons grid
                  React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-2" },
                    regionsData.map((reg, index) => (
                      React.createElement("button", {
                        key: index,
                        onClick: () => setSelectedRegion(index),
                        className: `p-2 rounded-xl border text-center transition-all duration-350 text-[10px] font-semibold flex items-center justify-center gap-1.5 ${
                          selectedRegion === index 
                            ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-black' 
                            : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                        }`
                      },
                        React.createElement(Icon, { name: reg.icon, style: { fontSize: '12px' } }),
                        reg.name.replace("Región de la ", "").replace("Región ", "")
                      )
                    ))
                  )
                ),
                
                // Columna Derecha: Tarjeta de Detalles de la Región Seleccionada
                React.createElement("div", { className: "lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between" },
                  React.createElement("div", null,
                    React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" }),
                    React.createElement("div", { className: "flex items-center justify-between gap-3 mb-4" },
                      React.createElement("div", { className: "flex items-center gap-3" },
                        React.createElement("div", { className: "w-10 h-10 bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-lg flex items-center justify-center font-bold text-lg" },
                          React.createElement(Icon, { name: regionsData[selectedRegion].icon })
                        ),
                        React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white" }, regionsData[selectedRegion].name)
                      )
                    ),
                    React.createElement("div", { className: "space-y-4" },
                      React.createElement("div", null,
                        React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1 text-[10px]" }, "Descripción Fisiográfica:"),
                        React.createElement("p", { className: "text-slate-650 dark:text-slate-300 text-xs font-light leading-relaxed" }, regionsData[selectedRegion].description)
                      ),
                      React.createElement("div", null,
                        React.createElement("span", { className: "text-rose-500 dark:text-rose-455 block uppercase tracking-wider font-bold mb-1 text-[10px]" }, "Conflictos Ambientales de Gran Impacto:"),
                        React.createElement("p", { className: "text-slate-650 dark:text-slate-300 text-xs font-light leading-relaxed" }, regionsData[selectedRegion].conflict)
                      ),
                      // Ilustración de Conflicto Socio-Ambiental
                      React.createElement("div", { className: "border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[120px]" },
                        React.createElement("img", {
                          src: regionImages[selectedRegion],
                          alt: "Ilustración de conflictos regionales",
                          className: "w-full h-full object-cover select-none transition-all duration-300 hover:scale-102"
                        })
                      )
                    )
                  ),
                  React.createElement("div", { className: "bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 mt-6" },
                    React.createElement("span", { className: "text-amber-600 dark:text-amber-400 block uppercase tracking-wider font-black mb-1 text-[10px]" }, "Enfoque ICFES / Pregunta Clave:"),
                    React.createElement("p", { className: "text-slate-500 dark:text-slate-450 text-xs leading-relaxed font-light" }, regionsData[selectedRegion].icfesTip)
                  )
                )
              );
            })()
          ),

          // 2. Gráfico Conceptual interactivo: Desarrollo vs. Conservación
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "balance", className: "text-amber-500" }),
              "2. Visualización: El Dilema del Desarrollo Sostenible"
            ),
            React.createElement("p", { className: "text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light" },
              "El ICFES evalúa tu capacidad para ubicarte en el centro de un conflicto de intereses y entender la racionalidad de cada actor. Ningún actor social 'odia' el medio ambiente; actúan siguiendo lógicas económicas o de supervivencia específicas:"
            ),
            
            React.createElement("div", { className: "grid md:grid-cols-3 gap-4" },
              [
                {
                  actor: "Comunidades Locales",
                  title: "Identidad & Autonomía",
                  color: "border-emerald-500 bg-emerald-500/5 text-emerald-500",
                  desc: "Buscan defender su territorio ancestral, sus recursos pesqueros/agrícolas limpios, su autonomía cultural y su sustento tradicional."
                },
                {
                  actor: "Sectores Industriales",
                  title: "Crecimiento & Rentabilidad",
                  color: "border-amber-500 bg-amber-500/5 text-amber-500",
                  desc: "Buscan maximizar la rentabilidad de las inversiones, extraer minerales y generar riqueza, argumentando la creación de empleo y el progreso técnico."
                },
                {
                  actor: "Estado y Autoridades",
                  title: "Desarrollo vs. Regulación",
                  color: "border-blue-500 bg-blue-500/5 text-blue-500",
                  desc: "Se debate entre facilitar el desarrollo económico nacional (vía impuestos y regalías) y cumplir su mandato constitucional de velar por la salud colectiva y conservar los recursos ecológicos."
                }
              ].map((act, i) => (
                React.createElement("div", { key: i, className: `p-5 rounded-2xl border ${act.color}` },
                  React.createElement("h4", { className: "font-black text-sm uppercase tracking-wider mb-1" }, act.actor),
                  React.createElement("span", { className: "text-[10px] font-bold block mb-3 opacity-80" }, act.title),
                  React.createElement("p", { className: "text-slate-500 dark:text-slate-300 text-xs leading-relaxed" }, act.desc)
                )
              ))
            )
          ),

          // 3. Alertas y Heurísticas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "policy", className: "text-amber-500" }),
              "⚠️ Trucos de Geografía y Medio Ambiente"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "Descartar respuestas extremas / radicales:"), 
                  " Evita opciones que propongan soluciones inviables o autoritarias ('Expropiar todas las industrias inmediatamente', 'Prohibir el uso del agua en las ciudades para salvar la selva'). El ICFES busca que elijas respuestas concertadas de mediación democrática."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La Ley 388 de 1997 (POT):"), 
                  " Si una pregunta indaga sobre deslizamientos en laderas habitadas o inundaciones de ríos sobre casas construidas recientemente, la respuesta correcta casi siempre apunta a fallas o violaciones de las normas de ordenamiento territorial (el POT) y la omisión de la gestión del riesgo."
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Pensamiento Sistémico"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "En los conflictos ecológicos, evita tomar partido emocionalmente. Busca la respuesta que explique mejor las dinámicas sistémicas (cómo el cambio en una variable ambiental impacta las variables sociales y productivas) y proponga concertación institucional equilibrada."
                )
              ),
              // Right Column: Interactive Quiz
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE ANÁLISIS SISTÉMICO Y AMBIENTAL"),
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

    window.renderCSModule2 = (containerId) => {
      console.log("React CS Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(CSModule2));
          console.log("React CS Engine: Renderizado de CSModule2 exitoso.");
        } catch (e) {
          console.error("React CS Engine Error:", e);
        }
      } else {
        console.warn("React CS Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
