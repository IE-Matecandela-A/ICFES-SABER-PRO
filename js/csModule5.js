(function() {
    const React = window.React;
    const { useState } = React;
    
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function CSModule5() {
      const [activeTab, setActiveTab] = useState('introduccion');
      const [selectedQuote, setSelectedQuote] = useState(0);
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [showResults, setShowResults] = useState(false);
      const [selectedAnswer, setSelectedAnswer] = useState(null);
      const [hasAnswered, setHasAnswered] = useState(false);

      const speeches = [
        {
          speaker: "Gremio de Industriales Petroleros",
          quote: "\"La imposición de licencias ambientales demoradas y costosas asfixia la economía del país. El Estado debe simplificar estos trámites innecesarios de forma inmediata para permitir que las inversiones extranjeras fluyan y garanticen el empleo y progreso de los municipios más alejados.\"",
          bias: "Sesgo Corporativo / Productivista",
          intention: "Minimizar la regulación ambiental para reducir costos de operación y aumentar el margen de ganancia corporativa, presentándolo estratégicamente como un beneficio exclusivo para el empleo local.",
          contrast: "Las comunidades locales priorizan la soberanía del agua y la salud colectiva, argumentando que la flexibilización de licencias genera daños irreparables que superan el beneficio transitorio del empleo."
        },
        {
          speaker: "Defensor del Neoliberalismo Económico",
          quote: "\"Los subsidios gubernamentales a los pequeños campesinos locales solo fomentan la ineficiencia productiva y prolongan la pobreza. Lo racional es permitir que el libre mercado defina quién sobrevive; si el arroz importado es más barato, la sociedad entera gana al consumir a menor precio.\"",
          bias: "Sesgo de Libre Mercado Absoluto",
          intention: "Legitimar la eliminación de la protección estatal al agro local, ignorando los impactos de seguridad alimentaria y el desempleo masivo que la quiebra rural acarrea.",
          contrast: "Los gremios agrícolas locales denotan que competir con importaciones fuertemente subsidiadas en origen es una competencia desleal que destruye el tejido social del campo."
        },
        {
          speaker: "Vocero de Seguridad Urbana Radical",
          quote: "\"El aumento de hurtos en el centro de la ciudad se soluciona únicamente retirando de circulación y deteniendo preventivamente a cualquier persona sospechosa, vendedores informales o habitantes de calle sin empleo fijo. La tranquilidad de las familias respetables debe primar sobre formalidades burocráticas.\"",
          bias: "Sesgo Clasista / Estereotipo Criminal",
          intention: "Criminalizar la pobreza e informalidad bajo la premisa de que la falta de empleo formal equivale a delincuencia implícita, promoviendo el autoritarismo sobre el debido proceso.",
          contrast: "Los defensores de derechos humanos exponen que estas medidas violan el principio constitucional de presunción de inocencia e igualdad, discriminando a personas por su aspecto social."
        }
      ];

      const questions = [
        {
          question: "Un representante gremial de la minería de carbón afirma en un foro público: 'Prohibir la minería a cielo abierto en zonas rurales es condenar a nuestros campesinos al hambre eterna y a la miseria, pues esta industria es la única fuente de empleo digno en la región'. Al analizar este discurso, es correcto afirmar que:",
          options: [
            "Es una verdad factual indiscutible dado que la agricultura no produce ingresos económicos en ninguna parte de Colombia.",
            "Posee un sesgo interesado del gremio corporativo, que presenta la explotación minera como la única opción de supervivencia para desestimar alternativas económicas agrícolas más sostenibles.",
            "Demuestra un absoluto altruismo por parte de las empresas mineras, las cuales carecen de intereses lucrativos en el territorio.",
            "Representa una propuesta ecologista que busca defender la biodiversidad frente a la degradación industrial."
          ],
          correct: 1,
          feedback: "¡Excelente! En las preguntas de Análisis de Perspectivas, el ICFES busca que identifiques cómo un actor con intereses particulares (la rentabilidad del gremio minero) maquilla o reduce un debate complejo a una disyuntiva extrema (minería o hambre) para desacreditar la conservación ecológica o las alternativas agrarias."
        },
        {
          question: "Analiza el siguiente extracto periodístico: 'El desempleo aumentó en un 2% durante el último trimestre, según cifras oficiales de la entidad de estadística. A todas luces, esto se debe a la desidia e ineficiencia del actual gabinete ministerial, que no sabe administrar los destinos económicos del país'. En este fragmento, ¿cuál de los enunciados corresponde a un hecho objetivo y cuál a un juicio de valor (opinión)?",
          options: [
            "El aumento del 2% del desempleo es una opinión; la acusación de ineficiencia del gabinete es un hecho comprobado matemáticamente.",
            "Tanto el aumento del desempleo como la ineficiencia del gabinete son hechos objetivos irrefutables.",
            "El aumento del 2% del desempleo es un hecho objetivo sustentado en estadísticas; la acusación de ineficiencia del gabinete es un juicio de valor subjetivo del redactor.",
            "Tanto la ineficiencia ministerial como las cifras estadísticas de desempleo corresponden a valoraciones meramente emotivas de la población."
          ],
          correct: 2,
          feedback: "¡Muy bien! El incremento estadístico del 2% reportado por una entidad estatal es un dato observable y comprobable (un hecho). Atribuir dicho incremento exclusivamente a la 'desidia o ineficiencia' del gabinete es una interpretación personal cargada de valoración (un juicio de valor), lo cual es recurrente diferenciar en el ICFES para evaluar lectura crítica en sociales."
        },
        {
          question: "Una propuesta de reforma en materia de seguridad vial plantea confiscar definitivamente el vehículo de cualquier conductor que transite por vías públicas con el impuesto de rodamiento vencido, afirmando: 'Los infractores tributarios son criminales en potencia y un peligro letal para las familias en las calles'. Al evaluar críticamente este discurso, se evidencia que:",
          options: [
            "La propuesta promueve un estereotipo que asocia falsamente la falta de capacidad de pago oportuno de un impuesto con una conducta delictiva grave contra la vida.",
            "El argumento resulta plenamente constitucional al estar alineado con los derechos de los niños consagrados en el artículo 44.",
            "La medida es perfectamente equitativa ya que el 100% de los deudores viales conducen bajo los efectos del alcohol.",
            "Promueve la inclusión de los sectores informales mediante la flexibilización de sanciones fiscales municipales."
          ],
          correct: 0,
          feedback: "¡Correcto! El discurso comete un sesgo de generalización y estereotipo al catalogar como 'criminales en potencia' a los ciudadanos que no han pagado un impuesto (falta administrativa/económica), buscando justificar una medida sumamente drástica a través de un juicio moral cargado de prejuicios."
        },
        {
          question: "Choque de Perspectivas: El gobierno propone construir una gran hidroeléctrica que inundará tierras de un resguardo indígena para dotar de energía eléctrica barata a las ciudades y exportar a países vecinos. Los indígenas afirman que la inundación de sus cementerios tradicionales destruye su cordón sagrado ancestral y espiritual con el territorio. Al evaluar las posturas en conflicto, ¿cuál es la tensión de fondo?",
          options: [
            "Un conflicto técnico sobre si la electricidad viaja de forma más rápida por cables de cobre o fibra de vidrio.",
            "La tensión ética entre la concepción de la naturaleza como recurso explotable para el bienestar mayoritario de la nación frente al territorio como espacio sagrado constitutivo de identidad étnica minoritaria.",
            "La imposibilidad física de coexistir entre la energía eléctrica y las ceremonias espirituales indígenas.",
            "La rivalidad política electoral entre los caciques locales indígenas y el partido de gobierno nacional."
          ],
          correct: 1,
          feedback: "¡Excelente! Este caso muestra la tensión clásica entre dos cosmovisiones válidas en Colombia: el modelo desarrollista estatal de la utilidad pública (energía barata para las masas de las ciudades) versus la cosmovisión diferencial de las comunidades étnicas amparadas por la Constitución, que entienden el territorio de manera holística, sagrada y espiritual."
        },
        {
          question: "Un editorialista de opinión propone prohibir la migración e ingreso de trabajadores de un país vecino argumentando: 'El incremento de robos e informalidad es una consecuencia matemática de permitir la entrada de extranjeros, quienes vienen a arrebatar el empleo digno de los nacionales'. Este argumento resulta deficiente porque:",
          options: [
            "La delincuencia está genéticamente ligada a la geografía de la frontera terrestre.",
            "Utiliza un prejuicio xenófobo generalizante y asume una relación causa-efecto falaz sin aportar evidencia empírica ni estadística objetiva que demuestre la causalidad.",
            "El ICFES prohíbe de forma absoluta cualquier mención de relaciones limítrofes nacionales.",
            "Es correcto, puesto que los trabajadores nacionales nunca incurren en delitos de hurto ni en trabajo informal."
          ],
          correct: 1,
          feedback: "¡Perfecto! El discurso recurre a la xenofobia (prejuicio hacia el extranjero) para imputarles la causa directa de problemas socioeconómicos complejos como la delincuencia o el desempleo, cometiendo una falacia de causa simple. El análisis de perspectivas te capacita para desmantelar estos discursos falaces basados en discriminación."
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
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight dark:text-white" }, "Competencia: Análisis de Perspectivas y Discursos"),
              React.createElement("p", { className: "text-slate-600 dark:text-slate-300 leading-relaxed text-lg font-light" },
                "Un ciudadano competente no acepta afirmaciones como verdades absolutas. El ICFES evalúa tu capacidad para ubicarte críticamente frente a un conflicto, identificar los ",
                React.createElement("strong", { className: "font-bold text-amber-500" }, "intereses particulares"),
                " de los discursos políticos o gremiales, desenmascarar prejuicios colectivos y diferenciar con precisión los hechos verificables de las simples opiniones sesgadas.",
                React.createElement("strong", { className: "font-semibold text-amber-600 block mt-2" }, "¡Aprende a decodificar discursos para ver los intereses detrás!")
              ),
              React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800 border border-slate-100 dark:border-slate-700/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
                React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-orange-500 rounded-l-2xl" }),
                React.createElement("h3", { className: "font-bold text-slate-800 dark:text-white mb-4 text-lg" }, "¿Qué aprenderás en este módulo?"),
                React.createElement("ul", { className: "space-y-4 font-medium text-slate-600 dark:text-slate-300 text-sm" },
                  [
                    "A rastrear intenciones implícitas y sesgos en discursos y editoriales de opinión.",
                    "A separar rigurosamente los hechos empíricos de los juicios de valor.",
                    "A desmantelar estereotipos discriminatorios (xenofobia, racismo, clasismo) comunes en distractores."
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
                    React.createElement("span", { className: "p-2 bg-amber-100 dark:bg-amber-950/50 text-amber-600 rounded-lg" }, React.createElement(Icon, { name: "psychology" })),
                    React.createElement("div", null,
                      React.createElement("h4", { className: "font-black text-slate-800 dark:text-white text-xs" }, "ANÁLISIS DE PERSPECTIVAS"),
                      React.createElement("p", { className: "text-[10px] text-slate-400 font-bold" }, "Discursos & Sesgos")
                    )
                  ),
                  React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-300 italic leading-relaxed" },
                    "\"El pensamiento crítico consiste en analizar la veracidad de las afirmaciones desmenuzando los intereses de quienes las pronuncian.\""
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
          // 1. Analizador Interactivo de Discursos
          React.createElement("div", { className: "space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "visibility", className: "text-amber-500" }),
              "1. Analizador Interactivo de Discursos y Sesgos"
            ),
            React.createElement("p", { className: "text-sm text-slate-500 dark:text-slate-400" }, "Haz clic en cada actor social para deconstruir críticamente su discurso e intenciones de fondo:"),
            
            // Selector grid
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3" },
              speeches.map((sp, index) => {
                const isSelected = selectedQuote === index;
                return React.createElement("button", {
                  key: index,
                  onClick: () => setSelectedQuote(index),
                  className: `p-3 rounded-xl border text-center transition-all duration-300 ${
                    isSelected 
                      ? 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold scale-100 shadow-md' 
                      : 'border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800/40 scale-95'
                  }`
                },
                  React.createElement("div", { className: "text-xs font-black" }, sp.speaker)
                );
              })
            ),

            // Analysis Panel Card
            React.createElement("div", { className: "bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-3xl p-6 shadow-sm relative overflow-hidden flex flex-col justify-between" },
              React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" }),
              React.createElement("div", { className: "space-y-4" },
                React.createElement("div", { className: "bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/40 italic text-slate-650 dark:text-slate-350 text-xs leading-relaxed" },
                  speeches[selectedQuote].quote
                ),
                React.createElement("div", { className: "grid md:grid-cols-4 gap-4 pt-2 text-xs font-medium" },
                  React.createElement("div", { className: "md:col-span-1 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden h-[120px] bg-slate-50 dark:bg-slate-950/20" },
                    React.createElement("img", {
                      src: selectedQuote === 0 ? "img/perfil_geologico_fracking.png" :
                           selectedQuote === 1 ? "img/caricatura_neoliberalismo.png" :
                           "img/caricatura_protesta_social.png",
                      alt: "Ilustración del discurso",
                      className: "w-full h-full object-cover select-none"
                    })
                  ),
                  React.createElement("div", { className: "md:col-span-1" },
                    React.createElement("span", { className: "text-amber-600 dark:text-amber-400 block uppercase tracking-wider font-bold mb-1 text-[10px]" }, "Sesgo Identificado:"),
                    React.createElement("span", { className: "text-slate-800 dark:text-white font-black" }, speeches[selectedQuote].bias)
                  ),
                  React.createElement("div", { className: "md:col-span-1" },
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1 text-[10px]" }, "Intención Implícita:"),
                    React.createElement("p", { className: "text-slate-650 dark:text-slate-400 font-light leading-relaxed" }, speeches[selectedQuote].intention)
                  ),
                  React.createElement("div", { className: "md:col-span-1" },
                    React.createElement("span", { className: "text-slate-400 dark:text-slate-500 block uppercase tracking-wider font-bold mb-1 text-[10px]" }, "Perspectiva de Contraste:"),
                    React.createElement("p", { className: "text-slate-650 dark:text-slate-400 font-light leading-relaxed" }, speeches[selectedQuote].contrast)
                  )
                )
              )
            )
          ),

          // 2. Hechos vs. Opiniones
          React.createElement("div", { className: "bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800 p-6 md:p-8 rounded-3xl space-y-4" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2" },
              React.createElement(Icon, { name: "balance", className: "text-amber-500" }),
              "2. Deconstrucción Crítica: Hechos vs. Juicios de Valor"
            ),
            React.createElement("p", { className: "text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light" },
              "El ICFES incluye constantemente textos donde se mezclan sutilmente datos factuales objetivos con opiniones sesgadas del relator. Para resolver de forma profesional, aplica esta regla:"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-6" },
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-emerald-600 dark:text-emerald-450 text-sm uppercase tracking-wider mb-2" }, "Hechos Objetivos"),
                React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light" },
                  "Enunciados constatables empíricamente, basados en estadísticas oficiales, leyes aprobadas, registros físicos o sucesos comprobados históricamente (ej: 'El PIB de Colombia decreció un 0.5% en el 2020'). Son ajenos a la emotividad o simpatía del autor."
                )
              ),
              React.createElement("div", { className: "bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80" },
                React.createElement("h4", { className: "font-black text-rose-600 dark:text-rose-450 text-sm uppercase tracking-wider mb-2" }, "Juicios de Valor (Opiniones)"),
                React.createElement("p", { className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light" },
                  "Apreciaciones subjetivas, valoraciones morales o interpretaciones sesgadas de los hechos (ej: 'El PIB decreció debido a que el Ministro no sabe de finanzas públicas y es flojo'). Usan lenguaje adjetivado y ad-hominem para moldear la postura del lector."
                )
              )
            )
          ),

          // 3. Heurísticas y Trampas del ICFES
          React.createElement("div", { className: "bg-amber-500/10 border-2 border-amber-500/20 rounded-3xl p-6 md:p-8" },
            React.createElement("h3", { className: "text-xl font-bold text-amber-800 dark:text-amber-400 flex items-center gap-3 mb-4" },
              React.createElement(Icon, { name: "policy", className: "text-amber-500" }),
              "⚠️ Trampas de Perspectivas y Discursos en el ICFES"
            ),
            React.createElement("div", { className: "space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed" },
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "1."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa de la Causalidad Simple (Falacia del Chivo Expiatorio):"), 
                  " Evita validar explicaciones unilaterales que culpen enteramente a un solo grupo social minoritario (migrantes, informales, deudores) de males sistémicos del país. Las respuestas racionales ICFES valoran la multicausalidad."
                )
              ),
              React.createElement("div", { className: "flex gap-3" },
                React.createElement("span", { className: "font-black text-amber-500 text-base" }, "2."),
                React.createElement("p", null, 
                  React.createElement("strong", { className: "text-slate-800 dark:text-white" }, "La trampa del 'Deber Ser' Moralizador:"), 
                  " Cuando se te pregunte por el interés implícito de una corporación o gremio, no escojas opciones que afirmen que actúan movidos meramente por beneficencia pública desinteresada. Su naturaleza intrínseca apunta a la ganancia de capital, aunque su discurso diga lo contrario."
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
                React.createElement("h2", { className: "text-lg font-black text-slate-800 dark:text-white mb-3" }, "Detección de Sesgos"),
                React.createElement("p", { className: "text-slate-600 dark:text-slate-300 text-xs leading-relaxed font-medium font-light" },
                  "En los conflictos de discursos de la prueba de Sociales, analiza a quién beneficia económicamente o políticamente la postura planteada por el actor en el texto de origen. Ello te guiará directamente a la respuesta correcta."
                )
              ),
              // Right Column: Interactive Quiz
              React.createElement("div", { className: "lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-md" },
                React.createElement("div", { className: "flex justify-between items-center mb-6" },
                  React.createElement("span", { className: "text-xs font-extrabold text-amber-600 bg-amber-50 dark:bg-amber-950/20 px-3 py-1.5 rounded-full" }, "PREGUNTA DE ANÁLISIS DE PERSPECTIVAS Y FUENTES"),
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

    window.renderCSModule5 = (containerId) => {
      console.log("React CS Engine: Ejecutando en", containerId);
      const container = document.getElementById(containerId);
      if (container && window.ReactDOM) {
        try {
          if (!window._reactRoots) window._reactRoots = {};
          if (!window._reactRoots[containerId]) {
              window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
          }
          window._reactRoots[containerId].render(React.createElement(CSModule5));
          console.log("React CS Engine: Renderizado de CSModule5 exitoso.");
        } catch (e) {
          console.error("React CS Engine Error:", e);
        }
      } else {
        console.warn("React CS Engine: No se encontró ReactDOM o el contenedor.");
      }
    };
})();
