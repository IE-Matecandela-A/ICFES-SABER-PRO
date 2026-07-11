(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function CSModule4() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedConcept, setSelectedConcept] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);
      const [giniValue, setGiniValue] = useState(0.52);

      const econConcepts = [
        {
          name: "PIB (Producto Interno Bruto)",
          icon: "show_chart",
          definition: "Es el valor monetario total de todos los bienes y servicios finales producidos en un país durante un período (generalmente un año). Mide el tamaño y el crecimiento de la economía.",
          impact: "Un PIB creciente genera empleo e inversión, pero NO indica cómo se distribuye esa riqueza ni mide el impacto ambiental del crecimiento.",
          icfesTip: "El ICFES evalúa los límites conceptuales del PIB, por ejemplo, que no es un indicador de bienestar social directo ni de equidad distributiva."
        },
        {
          name: "Inflación y Banco de la República",
          icon: "trending_up",
          definition: "Es el aumento generalizado y sostenido de los precios de los bienes y servicios en el mercado. Reduce el poder adquisitivo del dinero (el dinero alcanza para menos).",
          impact: "El Banco de la República (banco central autónomo) controla la inflación subiendo las tasas de interés para desincentivar el gasto y el crédito.",
          icfesTip: "Comprender que subir las tasas de interés frena la inflación, pero al mismo tiempo puede desacelerar el crecimiento económico (trade-off)."
        },
        {
          name: "Coeficiente de Gini",
          icon: "pie_chart",
          definition: "Indicador matemático que mide la desigualdad de ingresos en una sociedad. Varía entre 0 (igualdad absoluta: todos ganan lo mismo) y 1 (desigualdad absoluta: una sola persona acumula todo el ingreso).",
          impact: "Colombia posee un Gini histórico alto (~0.52), catalogándose como uno de los países más desiguales de América Latina y del mundo.",
          icfesTip: "El ICFES evalúa la interpretación de gráficos de Gini y el análisis de cómo ciertas reformas impositivas aumentan o reducen la desigualdad de ingresos."
        }
      ];

      const questions = [
        {
          question: "Colombia firma un Tratado de Libre Comercio (TLC) con un país norteamericano. El acuerdo elimina los aranceles (impuestos de importación) para el ingreso de arroz extranjero altamente subsidiado. ¿Qué perspectivas encontradas se presentan entre los arroceros locales y los consumidores urbanos de bajos recursos?",
          options: [
            "Ambos sectores se benefician, pues la importación masiva genera de inmediato un aumento del empleo agrario nacional.",
            "Ambos sectores se perjudican, ya que el TLC prohíbe la venta de arroz en las grandes ciudades colombianas.",
            "Los arroceros locales se perjudican por la competencia desigual con arroz barato importado, mientras que los consumidores urbanos se benefician al adquirir el alimento a menor precio en la canasta familiar.",
            "Los agricultores locales aumentan sus ganancias debido a la llegada de tecnología extranjera gratuita, mientras que los consumidores se ven obligados a cambiar su dieta alimenticia tradicional."
          ],
          correct: 2,
          feedback: "¡Excelente! Este es un dilema de política económica clásica (trade-off de los TLC). Por un lado, los consumidores urbanos (especialmente de bajos ingresos) se benefician del arroz importado más barato. Por el otro, los pequeños productores locales de arroz sufren una competencia desleal debido a que el arroz extranjero entra sin aranceles y cuenta con subsidios en su país de origen, amenazando la quiebra agraria local."
        },
        {
          question: "El Banco de la República detecta que la inflación en Colombia ha subido rápidamente del 3% al 12% anual. Con el fin de enfriar la economía y estabilizar los precios, la junta directiva del banco central decide aumentar significativamente las tasas de interés de intervención. ¿Qué efecto colateral no deseado provoca típicamente esta medida macroeconómica?",
          options: [
            "Una reducción total del desempleo en todas las ramas de la industria.",
            "La devaluación inmediata y absoluta de la moneda nacional en los mercados globales.",
            "La desaceleración del crecimiento económico y del consumo, debido a que el crédito para empresas y personas se vuelve más costoso.",
            "La desaparición forzada de todos los impuestos sobre la renta de los ciudadanos."
          ],
          correct: 2,
          feedback: "¡Muy bien! Subir las tasas de interés encarece los créditos bancarios. Esto hace que las personas y las empresas pidan menos préstamos, frenando la compra de vivienda, autos y bienes de consumo general. Aunque esto sirve para disminuir la demanda y frenar la inflación, tiene como costo colateral la ralentización de la producción, el empleo y el crecimiento económico general."
        },
        {
          question: "El Gobierno nacional propone un proyecto de ley para financiar el presupuesto estatal incrementando la tarifa del Impuesto al Valor Agregado (IVA) del 16% al 19% en productos de consumo básico, mientras que reduce el impuesto sobre la renta a las grandes corporaciones para atraer inversión extranjera. Desde el análisis de la equidad social, esta reforma tributaria resulta:",
          options: [
            "Progresiva, porque al recaudar más IVA se redistribuye el dinero de inmediato hacia las familias de menores ingresos.",
            "Regresiva, dado que el IVA es un impuesto indirecto que grava por igual a ricos y pobres, afectando de manera desproporcionada el presupuesto de las familias de bajos recursos.",
            "Inofensiva, debido a que las familias pobres están exentas de pagar cualquier tipo de impuesto indirecto.",
            "Sostenible, ya que las corporaciones extranjeras se comprometen por ley a donar alimentos gratis a las comunidades necesitadas."
          ],
          correct: 1,
          feedback: "¡Correcto! El IVA es un impuesto regresivo porque cobra la misma tarifa sin importar el nivel de ingresos del comprador. Si una familia pobre y una rica compran el mismo paquete de pasta, pagan el mismo valor de IVA, pero ese gasto representa una proporción mucho mayor de los ingresos mensuales de la familia pobre. En contraste, reducir el impuesto de renta a los sectores más adinerados tiende a aumentar la concentración de la riqueza."
        },
        {
          question: "El Coeficiente de Gini de un país 'X' disminuyó de 0.55 a 0.44 en un período de diez años. ¿Qué interpretación de política social se deriva directamente de esta variación estadística?",
          options: [
            "El país experimentó una caída drástica en su Producto Interno Bruto (PIB).",
            "La economía del país se volvió completamente estatal y socialista.",
            "La brecha en la distribución de los ingresos entre los ciudadanos más ricos y los más pobres se redujo, denotando una sociedad más equitativa.",
            "Se duplicó la tasa de desempleo nacional debido a la devaluación de la moneda."
          ],
          correct: 2,
          feedback: "¡Excelente! Al acercarse el coeficiente de Gini a 0 (desde 0.55 a 0.44), indica que la distribución del ingreso se ha vuelto más uniforme y equitativa. Una reducción de la desigualdad suele estar relacionada con políticas sociales robustas de redistribución de riqueza, aumento del empleo de calidad o mejoras en el acceso a la educación pública."
        },
        {
          question: "Para incentivar la producción nacional de trigo, el gobierno colombiano impone un arancel (impuesto de importación) del 35% al trigo extranjero. ¿A qué actor económico beneficia de manera directa esta medida y a quién perjudica?",
          options: [
            "Beneficia a los importadores de alimentos y perjudica al Ministerio de Hacienda.",
            "Beneficia a los productores locales de trigo, quienes pueden vender a precios competitivos, y perjudica a las industrias panificadoras nacionales y consumidores que ahora compran harina de trigo más costosa.",
            "Beneficia de forma absoluta a toda la población del país sin generar ningún perjuicio económico.",
            "Perjudica a los campesinos colombianos e incentiva la importación legal libre de aranceles de materias primas."
          ],
          correct: 1,
          feedback: "¡Perfecto! Poner aranceles encarece los productos importados. Esto beneficia a los campesinos nacionales que siembran trigo, ya que sus precios compiten mejor en el mercado. Sin embargo, perjudica a los panaderos e industrias de alimentos que utilizan trigo importado como insumo, obligándoles a elevar el precio del pan para los consumidores finales urbanos, mostrando las perspectivas en conflicto de las políticas económicas."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia: Pensamiento Sistémico y Económico"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "La economía es el motor de los cambios y conflictos de las sociedades humanas. El ICFES evalúa si puedes relacionar las decisiones de política macroeconómica (impuestos, TLC, subsidios, tasas de interés) con sus repercusiones en la desigualdad, el empleo y el bienestar colectivo, identificando siempre los ",
                React.createElement("strong", { className: "font-bold text-amber-500" }, "dilemas o costos de oportunidad (trade-offs)"),
                " de cada decisión.",
                React.createElement("strong", { className: "font-semibold text-amber-600 block mt-2" }, "¡Toda medida económica beneficia a unos sectores y exige sacrificios a otros!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A comprender el rol del PIB, la Inflación y el Gini en el debate de políticas públicas.",
                    "A evaluar los impactos distributivos de reformas impositivas progresivas y regresivas.",
                    "A contrastar las posturas encontradas frente a los Tratados de Libre Comercio (TLC) y subsidios sectoriales."
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
                    React.createElement("span", { className: "p-2 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-lg" }, React.createElement(Icon, { name: "show_chart" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "ECONOMÍA Y SOCIEDAD"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Políticas & Trade-offs")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"En economía no existen soluciones milagrosas gratuitas: toda decisión gubernamental exige ponderar un costo de oportunidad.\""
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
          // 1. Conceptos Macroeconómicos Interactivos
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "analytics", className: "text-amber-500" }),
              "1. Conceptos Macroeconómicos Fundamentales"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, "Haz clic en cada indicador para conocer su definición técnica y el tipo de pregunta evaluada:"),
            
            // Concept selectors
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3" },
              econConcepts.map((ec, index) => (
                React.createElement("button", {
                  key: index,
                  onClick: () => setSelectedConcept(index),
                  className: `p-3 rounded-xl border text-center transition-all duration-300 ${
                    selectedConcept === index 
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold scale-100 shadow-md' 
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/40 scale-95'
                  }`
                },
                  React.createElement("div", { className: "flex justify-center mb-1 text-lg" }, React.createElement(Icon, { name: ec.icon })),
                  React.createElement("div", { className: "text-xs font-bold" }, ec.name)
                )
              ))
            ),

            // Concept Details Card
            React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-md transition-all duration-500 relative overflow-hidden" },
              React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" }),
              React.createElement("h4", { className: "text-lg font-black text-slate-800 dark:text-white mb-2" }, econConcepts[selectedConcept].name),
              React.createElement("div", { className: "grid md:grid-cols-2 gap-6 text-xs font-medium mt-4" },
                React.createElement("div", { className: "space-y-4" },
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1" }, "Definición Técnica:"),
                    React.createElement("span", { className: "text-slate-600 dark:text-slate-300 text-xs font-normal" }, econConcepts[selectedConcept].definition)
                  ),
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-orange-400 dark:text-orange-500 block uppercase tracking-wider font-bold mb-1" }, "Impacto en Políticas y Limitaciones:"),
                    React.createElement("span", { className: "text-slate-600 dark:text-slate-300 text-xs font-normal" }, econConcepts[selectedConcept].impact)
                  ),
                  React.createElement("div", { className: "border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[120px] bg-slate-50 dark:bg-slate-950/20" },
                    React.createElement("img", { loading: "lazy", decoding: "async",
                      src: selectedConcept === 0 ? "img/caricatura_neoliberalismo.png" :
                           selectedConcept === 1 ? "img/caricatura_reforma_tributaria.png" :
                           "img/piramide_poblacional.png",
                      alt: "Visualización del concepto económico",
                      className: "w-full h-full object-cover select-none transition-all duration-300 hover:scale-105"
                    })
                  )
                ),
                React.createElement("div", { className: "bg-slate-50 dark:bg-slate-800/30 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 flex flex-col justify-between" },
                  React.createElement("div", null,
                    React.createElement("span", { className: "text-amber-600 dark:text-amber-400 block uppercase tracking-wider font-black mb-1.5" }, "Enfoque ICFES / Pregunta Clave:"),
                    React.createElement("span", { className: "text-slate-600 dark:text-slate-400 text-xs leading-relaxed" }, econConcepts[selectedConcept].icfesTip)
                  )
                )
              )
            )
          ),

          // 2. Coeficiente de Gini y Desigualdad Visualizada
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-6" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "analytics", className: "text-amber-500" }),
              "2. Simulador Interactivo: Distribución de Riqueza y Coeficiente de Gini"
            ),
            React.createElement("p", { className: "text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light" },
              "El Coeficiente de Gini mide estadísticamente la concentración del ingreso. Ajusta el control deslizante para observar cómo cambia el porcentaje de riqueza nacional acumulado por cada 20% de la población (quintiles):"
            ),
            
            // Slider and Presets
            React.createElement("div", { className: "bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 space-y-4" },
              React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4" },
                React.createElement("div", { className: "flex-1" },
                  React.createElement("span", { className: "text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-1" }, "Ajustar Coeficiente de Gini"),
                  React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement("input", {
                      type: "range",
                      min: "0.0",
                      max: "0.85",
                      step: "0.01",
                      value: giniValue,
                      onChange: (e) => setGiniValue(parseFloat(e.target.value)),
                      className: "w-full accent-amber-500 cursor-pointer h-2 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none"
                    }),
                    React.createElement("span", { className: "text-2xl font-black text-amber-500 font-mono shrink-0 w-16 text-right" }, giniValue.toFixed(2))
                  )
                ),
                // Presets
                React.createElement("div", { className: "flex flex-wrap gap-2 shrink-0" },
                  [
                    { name: "Igualdad", val: 0.0 },
                    { name: "Suecia", val: 0.25 },
                    { name: "Colombia", val: 0.52 },
                    { name: "Extrema", val: 0.80 }
                  ].map((p, i) => (
                    React.createElement("button", {
                      key: i,
                      onClick: () => setGiniValue(p.val),
                      className: `px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                        Math.abs(giniValue - p.val) < 0.01
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`
                    }, p.name)
                  ))
                )
              )
            ),

            // Quintile Visualizer columns
            (() => {
              // Q1 to Q5 calculation based on Gini value
              const q1 = Math.max(1, Math.round(20 * Math.pow(1 - giniValue, 2)));
              const q2 = Math.max(2, Math.round(20 * Math.pow(1 - giniValue, 1.3)));
              const q3 = Math.max(3, Math.round(20 * (1 - giniValue * 0.7)));
              const q4 = Math.max(4, Math.round(20 * (1 + giniValue * 0.3)));
              const q5 = Math.max(10, 100 - (q1 + q2 + q3 + q4));
              const quintiles = [q1, q2, q3, q4, q5];
              const labels = [
                "Q1: Poorest 20%",
                "Q2: Lower-Middle 20%",
                "Q3: Middle 20%",
                "Q4: Upper-Middle 20%",
                "Q5: Richest 20%"
              ];

              return React.createElement("div", { className: "space-y-4" },
                // Bars Layout
                React.createElement("div", { className: "grid grid-cols-5 gap-3 items-end h-[160px] pt-4 px-2" },
                  quintiles.map((val, idx) => {
                    // Height style as percentage (capped for rendering aesthetics)
                    const heightPercent = `${Math.max(8, val)}%`;
                    const barColor = idx === 4 
                      ? 'from-rose-500 to-amber-500' 
                      : idx === 0 
                        ? 'from-emerald-600 to-emerald-400' 
                        : 'from-amber-400 to-amber-300 dark:from-slate-700 dark:to-slate-600';

                    return React.createElement("div", {
                      key: idx,
                      className: "flex flex-col items-center gap-2 h-full justify-end"
                    },
                      // Bar representation
                      React.createElement("div", {
                        style: { height: heightPercent },
                        className: `w-full rounded-t-xl bg-gradient-to-t ${barColor} shadow-md transition-all duration-500 relative group flex items-end justify-center pb-2`
                      },
                        React.createElement("span", { className: "text-[10px] font-black text-white block select-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" }, `${val}%`)
                      ),
                      // Labels
                      React.createElement("span", { className: "text-[9px] font-bold text-slate-400 text-center uppercase tracking-tight block max-w-full truncate" }, labels[idx])
                    );
                  })
                ),
                // Explanatory note
                React.createElement("div", { className: "grid md:grid-cols-2 gap-4 text-[10px] font-medium text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800/80 pt-3" },
                  React.createElement("div", { className: "flex items-start gap-2" },
                    React.createElement(Icon, { name: "info", className: "text-emerald-500 text-xs shrink-0 mt-0.5" }),
                    React.createElement("span", null, "En el modelo con Gini = 0.0 (Igualdad Absoluta), todos los quintiles reciben exactamente el 20% del ingreso nacional.")
                  ),
                  React.createElement("div", { className: "flex items-start gap-2" },
                    React.createElement(Icon, { name: "info", className: "text-rose-500 text-xs shrink-0 mt-0.5" }),
                    React.createElement("span", null, `Ajustado en Colombia (~0.52), el quintil más rico (${q5}%) acumula más de 10 veces lo percibido por el quintil más pobre (${q1}%), reflejando la brecha distributiva nacional.`)
                  )
                )
              );
            })()
          ),

          // 3. Alertas y Heurísticas
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "policy", className: "text-amber-500" }),
              "⚠️ Trucos de Economía y Sociedad"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "El rol del Banco de la República:"), 
                  " Recuerda que el Banco de la República es autónomo. Su meta constitucional principal es preservar el poder adquisitivo de la moneda (controlar la inflación). No depende de las órdenes del Presidente ni del Congreso para tomar decisiones sobre tasas de interés."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa de los Subsidios y Aranceles:"), 
                  " Al evaluar un arancel o un subsidio agrícola, la respuesta del ICFES nunca tomará partido moral. Siempre se analizan los efectos contrapuestos: beneficia a los campesinos/productores nacionales frente a la competencia importadora, pero incrementa el precio final que deben pagar los consumidores urbanos."
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Impactos Distributivos"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium" },
                  "Analiza qué sectores de la sociedad tienen ventajas y cuáles sufren pérdidas económicas frente a medidas fiscales del gobierno. Recuerda distinguir claramente entre impuestos progresivos (según ingresos) y regresivos (grava por igual)."
                )
              ),
              // Right Column: Interactive Quiz
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE ANÁLISIS DE POLÍTICA ECONÓMICA"),
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

    window.renderCSModule4 = (containerId) => {
      console.log("React CS Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(CSModule4));
          console.log("React CS Engine: Renderizado de CSModule4 exitoso.");
        } catch (e) {
          console.error("React CS Engine Error:", e);
        }
      } else {
        console.warn("React CS Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
