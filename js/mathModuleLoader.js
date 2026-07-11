/**
 * MATH_MODULE_LOADER
 * Componente genérico y dinámico en React para cargar cualquiera de los 23 módulos de matemáticas.
 * Mantiene la estética premium con pestañas interactivas, retroalimentaciones de colores HSL
 * armoniosos, barra de progreso y gráficos/SVGs dinámicos.
 */
(function () {
  const React = window.React;
  const { useState, useEffect, useMemo } = React;

  // Adapter for Icons (Material Icons mapping)
  const Icon = ({ name, className = "", style = {} }) => {
    const mapping = {
      'insights': 'insights',
      'percent': 'percent',
      'trending_up': 'trending_up',
      'balance': 'balance',
      'map': 'map',
      'square_foot': 'square_foot',
      'pattern': 'pattern',
      'change_history': 'change_history',
      'view_in_ar': 'view_in_ar',
      'grid_on': 'grid_on',
      'star_border': 'star_border',
      'notes': 'notes',
      'schema': 'schema',
      'rule': 'rule',
      'format_list_numbered': 'format_list_numbered',
      'show_chart': 'show_chart',
      'stacked_line_chart': 'stacked_line_chart',
      'architecture': 'architecture',
      'query_stats': 'query_stats',
      'analytics': 'analytics',
      'tag': 'tag',
      'casino': 'casino',
      'fact_check': 'fact_check',
      'CheckCircle': 'check_circle',
      'ArrowRight': 'arrow_forward',
      'Lightbulb': 'lightbulb',
      'Award': 'emoji_events',
      'RefreshCw': 'refresh',
      'Layers': 'layers',
      'Square': 'crop_square',
      'BookOpen': 'menu_book',
      'Info': 'info'
    };
    const iconName = mapping[name] || name || 'help_outline';
    return React.createElement("span", {
      className: `material-icons-round ${className}`,
      style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
    }, iconName);
  };

  // Helper wrappers
  const Box = (props) => React.createElement(Icon, { name: "inventory_2", ...props });
  const Triangle = (props) => React.createElement(Icon, { name: "change_history", ...props });
  const Maximize = (props) => React.createElement(Icon, { name: "aspect_ratio", ...props });
  const Ruler = (props) => React.createElement(Icon, { name: "straighten", ...props });
  const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
  const CheckCircle = (props) => React.createElement(Icon, { name: "CheckCircle", ...props });
  const ArrowRight = (props) => React.createElement(Icon, { name: "ArrowRight", ...props });
  const Lightbulb = (props) => React.createElement(Icon, { name: "Lightbulb", ...props });
  const Award = (props) => React.createElement(Icon, { name: "Award", ...props });
  const RefreshCw = (props) => React.createElement(Icon, { name: "RefreshCw", ...props });
  const Compass = (props) => React.createElement(Icon, { name: "explore", ...props });
  const Layers = (props) => React.createElement(Icon, { name: "Layers", ...props });
  const Square = (props) => React.createElement(Icon, { name: "Square", ...props });
  const BookOpen = (props) => React.createElement(Icon, { name: "BookOpen", ...props });

  function MathModuleGeneric({ moduleId }) {
    const config = window.MATH_MODULES_CONFIG ? window.MATH_MODULES_CONFIG[moduleId] : null;

    if (!config) {
      return React.createElement("div", { className: "p-10 text-center text-red-500 font-bold bg-slate-900 rounded-3xl" },
        "Error: No se pudo cargar la configuración para " + moduleId
      );
    }

    const [activeTab, setActiveTab] = useState('introduccion');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    const questions = config.preguntas || [];
    
    // Theme setup based on configuration color
    const themeConfig = {
      indigo: { bgLight: 'bg-indigo-50/50', text: 'text-indigo-600', border: 'border-indigo-200', badgeBg: 'bg-indigo-100', badgeText: 'text-indigo-700', grad: 'from-indigo-400 to-indigo-600', glow: 'bg-indigo-500/20' },
      emerald: { bgLight: 'bg-emerald-50/50', text: 'text-emerald-600', border: 'border-emerald-200', badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700', grad: 'from-emerald-400 to-emerald-600', glow: 'bg-emerald-500/20' },
      violet: { bgLight: 'bg-violet-50/50', text: 'text-violet-600', border: 'border-violet-200', badgeBg: 'bg-violet-100', badgeText: 'text-violet-700', grad: 'from-violet-400 to-violet-600', glow: 'bg-violet-500/20' },
      amber: { bgLight: 'bg-amber-50/50', text: 'text-amber-600', border: 'border-amber-200', badgeBg: 'bg-amber-100', badgeText: 'text-amber-700', grad: 'from-amber-400 to-amber-600', glow: 'bg-amber-500/20' },
      cyan: { bgLight: 'bg-cyan-50/50', text: 'text-cyan-600', border: 'border-cyan-200', badgeBg: 'bg-cyan-100', badgeText: 'text-cyan-700', grad: 'from-cyan-400 to-cyan-600', glow: 'bg-cyan-500/20' },
      sky: { bgLight: 'bg-sky-50/50', text: 'text-sky-600', border: 'border-sky-200', badgeBg: 'bg-sky-100', badgeText: 'text-sky-700', grad: 'from-sky-400 to-sky-600', glow: 'bg-sky-500/20' },
      purple: { bgLight: 'bg-purple-50/50', text: 'text-purple-600', border: 'border-purple-200', badgeBg: 'bg-purple-100', badgeText: 'text-purple-700', grad: 'from-purple-400 to-purple-600', glow: 'bg-purple-500/20' },
      rose: { bgLight: 'bg-rose-50/50', text: 'text-rose-600', border: 'border-rose-200', badgeBg: 'bg-rose-100', badgeText: 'text-rose-700', grad: 'from-rose-400 to-rose-600', glow: 'bg-rose-500/20' },
      pink: { bgLight: 'bg-pink-50/50', text: 'text-pink-600', border: 'border-pink-200', badgeBg: 'bg-pink-100', badgeText: 'text-pink-700', grad: 'from-pink-400 to-pink-600', glow: 'bg-pink-500/20' },
      blue: { bgLight: 'bg-blue-50/50', text: 'text-blue-600', border: 'border-blue-200', badgeBg: 'bg-blue-100', badgeText: 'text-blue-700', grad: 'from-blue-400 to-blue-600', glow: 'bg-blue-500/20' },
      teal: { bgLight: 'bg-teal-50/50', text: 'text-teal-600', border: 'border-teal-200', badgeBg: 'bg-teal-100', badgeText: 'text-teal-700', grad: 'from-teal-400 to-teal-600', glow: 'bg-teal-500/20' },
      fuchsia: { bgLight: 'bg-fuchsia-50/50', text: 'text-fuchsia-600', border: 'border-fuchsia-200', badgeBg: 'bg-fuchsia-100', badgeText: 'text-fuchsia-700', grad: 'from-fuchsia-400 to-fuchsia-600', glow: 'bg-fuchsia-500/20' },
      orange: { bgLight: 'bg-orange-50/50', text: 'text-orange-600', border: 'border-orange-200', badgeBg: 'bg-orange-100', badgeText: 'text-orange-700', grad: 'from-orange-400 to-orange-600', glow: 'bg-orange-500/20' },
      red: { bgLight: 'bg-red-50/50', text: 'text-red-600', border: 'border-red-200', badgeBg: 'bg-red-100', badgeText: 'text-red-700', grad: 'from-red-400 to-red-600', glow: 'bg-red-500/20' },
      lime: { bgLight: 'bg-lime-50/50', text: 'text-lime-600', border: 'border-lime-200', badgeBg: 'bg-lime-100', badgeText: 'text-lime-700', grad: 'from-lime-400 to-lime-600', glow: 'bg-lime-500/20' }
    };
    
    const theme = themeConfig[config.theme] || themeConfig.indigo;

    const handleAnswer = (index) => {
      if (hasAnswered) return;
      setSelectedAnswer(index);
      setHasAnswered(true);
      if (index === questions[currentQuestion].correct) setScore(score + 1);
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

    const getResultMessage = () => {
      const percentage = score / (questions.length || 1);
      if (percentage === 1) return { title: "¡Dominio Total!", desc: "¡Asombroso! Tienes un entendimiento perfecto de este tema de razonamiento cuantitativo." };
      if (percentage >= 0.6) return { title: "¡Buen Desempeño!", desc: "Entiendes los conceptos esenciales. Con un poco más de práctica lograrás el puntaje perfecto." };
      return { title: "¡Sigue Intentándolo!", desc: "La práctica hace al maestro. Te recomendamos repasar los casos prácticos y volver a simular." };
    };

    const resultData = getResultMessage();

    return React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-slate-100 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" },
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden border border-white" },
        
        // Header Section
        React.createElement("header", { className: "relative bg-[#0d1220] p-8 md:p-14 overflow-hidden" },
          React.createElement("div", { className: `absolute -top-32 -right-32 w-[35rem] h-[35rem] ${theme.glow} blur-[120px] rounded-full pointer-events-none` }),
          React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" },
            React.createElement("div", { className: "max-w-2xl" },
              React.createElement("div", { className: "inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" },
                React.createElement(Icon, { name: config.icon, className: `${theme.text} text-sm` }),
                React.createElement("span", { className: "text-slate-300 font-bold tracking-widest text-xs uppercase" }, config.title.split(": ")[0])
              ),
              React.createElement("h1", { className: "text-4xl md:text-5xl font-black mb-5 text-white tracking-tight leading-tight" }, 
                config.title.split(": ")[1]
              ),
              React.createElement("p", { className: "text-slate-300 text-base leading-relaxed font-light" }, 
                config.description
              )
            ),
            React.createElement("div", { className: `hidden md:flex items-center justify-center w-24 h-24 bg-gradient-to-br ${theme.grad} rounded-[2rem] shadow-xl border border-white/10` },
              React.createElement(Icon, { name: config.icon, className: "w-12 h-12 text-white" })
            )
          )
        ),

        // Tabs Navigation
        React.createElement("nav", { className: "px-6 md:px-12 pt-8 pb-4" },
          React.createElement("div", { className: "flex bg-slate-100/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto hide-scrollbar" },
            [
              { id: 'introduccion', icon: BookOpen, label: 'Introducción' },
              { id: 'teoria', icon: Ruler, label: 'Teoría y Casos' },
              { id: 'practica', icon: Brain, label: 'Simulador' }
            ].map((tab) =>
              React.createElement("button", {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id ?
                  `bg-white ${theme.text} shadow-md border border-white scale-100` :
                  'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 scale-95'
                }`
              },
                React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? theme.text : ''}` }),
                tab.label
              )
            )
          )
        ),

        // Main Content Area
        React.createElement("main", { className: "p-6 md:px-12 md:pb-12 md:pt-4" },
          
          // Tab 1: Introduccion
          activeTab === 'introduccion' && React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500" },
            React.createElement("div", { className: "grid md:grid-cols-2 gap-10 items-center" },
              React.createElement("div", { className: "space-y-6" },
                React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Preparación Temática"),
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-[16px] font-light" },
                  config.introduccion.deseaPintarText
                ),
                React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 border border-slate-100 shadow-md rounded-3xl p-8 relative overflow-hidden" },
                  React.createElement("div", { className: `absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${theme.grad} rounded-l-3xl` }),
                  React.createElement("h3", { className: "font-bold text-slate-800 mb-6 text-lg" }, config.introduccion.pilarTitulo),
                  React.createElement("ul", { className: "space-y-5" },
                    config.introduccion.pilares.map((pilar, i) =>
                      React.createElement("li", { key: i, className: "flex items-start gap-4 text-slate-600" },
                        React.createElement("div", { className: `mt-0.5 ${theme.badgeBg} p-1.5 rounded-lg shrink-0` },
                          React.createElement(CheckCircle, { className: `w-3.5 h-3.5 ${theme.text}` })
                        ),
                        React.createElement("span", { className: "font-medium text-[15px]" }, pilar)
                      )
                    )
                  )
                )
              ),
              React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-[2.5rem] p-10 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" },
                React.createElement("div", { className: "relative w-full h-80 flex items-center justify-center", style: { perspective: '1200px' } },
                  React.createElement("div", {
                    className: "relative w-56 h-56 transition-transform duration-1000 ease-out cursor-default",
                    style: { transform: 'rotateX(55deg) rotateZ(-15deg)', transformStyle: 'preserve-3d' }
                  },
                    React.createElement("div", { className: `absolute inset-0 bg-white/90 border ${theme.border} rounded-[2rem] shadow-2xl` }),
                    React.createElement("div", { className: `absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-tr ${theme.grad} rounded-xl shadow-lg flex items-center justify-center` }, 
                      React.createElement(Box, { className: "w-10 h-10 text-white/95" })
                    ),
                    React.createElement("div", { className: "absolute top-8 right-10 w-20 h-20 bg-white border border-slate-100 rounded-full shadow-lg flex items-center justify-center" }, 
                      React.createElement(Compass, { className: `w-10 h-10 ${theme.text}` })
                    ),
                    React.createElement("div", { className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border-2 ${theme.border}` },
                      React.createElement(Ruler, { className: `w-10 h-10 ${theme.text}` })
                    )
                  )
                ),
                React.createElement("button", {
                  onClick: () => setActiveTab('teoria'),
                  className: "mt-8 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                },
                  "Estudiar Teoría ",
                  React.createElement(ArrowRight, { className: "w-5 h-5" })
                )
              )
            )
          ),

          // Tab 2: Teoria
          activeTab === 'teoria' && React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-500 space-y-12" },
            React.createElement("div", { className: "text-center max-w-3xl mx-auto mb-6" },
              React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight mb-4" }, "Fundamentos y Ejemplos de Estudio"),
              React.createElement("div", { className: `w-24 h-1.5 bg-gradient-to-r ${theme.grad} mx-auto rounded-full` })
            ),
            React.createElement("div", { className: "space-y-8" },
              config.teoria.map((caso, index) =>
                React.createElement("div", { key: index, className: "relative bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden" },
                  React.createElement("div", { className: `absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}` }),
                  
                  // Case Header
                  React.createElement("div", { className: "p-6 md:px-8 md:pt-8 md:pb-6 border-b border-slate-100 bg-slate-50/50" },
                    React.createElement("div", { className: "flex items-center gap-3 mb-3" },
                      React.createElement("div", { className: `p-2 ${theme.badgeBg} rounded-xl` },
                        React.createElement(Lightbulb, { className: `w-5 h-5 ${theme.text}` })
                      ),
                      React.createElement("h4", { className: "text-xl font-bold text-slate-800" }, 
                        caso.titulo.includes(":") ? caso.titulo : `Caso Práctico ${index + 1}: ${caso.titulo}`
                      )
                    ),
                    React.createElement("p", { className: "text-slate-600 font-medium text-[15px] leading-relaxed italic border-l-4 border-slate-300 pl-4 py-1" }, 
                      typeof caso.situacion === 'string' ? `"${caso.situacion}"` : caso.situacion
                    )
                  ),

                  React.createElement("div", { className: "flex flex-col bg-white" },
                    // Step 1 and 2 Container (side-by-side on desktop)
                    React.createElement("div", { className: "grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 border-b border-slate-100" },
                      // Step 1
                      React.createElement("div", { className: "p-6 hover:bg-slate-50/20 transition-colors" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                          React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "1"),
                          React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Analizar")
                        ),
                        React.createElement("div", { className: "text-sm text-slate-600 leading-relaxed font-light" }, caso.analisis)
                      ),
                      // Step 2
                      React.createElement("div", { className: "p-6 hover:bg-slate-50/20 transition-colors" },
                        React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                          React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "2"),
                          React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Operar")
                        ),
                        React.createElement("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner text-sm font-mono" },
                          typeof caso.calculo === 'string' ?
                            (caso.calculo.startsWith('<') ?
                              React.createElement("div", { dangerouslySetInnerHTML: { __html: caso.calculo } }) :
                              caso.calculo) :
                            caso.calculo
                        )
                      )
                    ),
                    // Step 3 (Below)
                    React.createElement("div", { className: `p-6 ${theme.bgLight} flex flex-col justify-center border-t border-slate-100/50` },
                      React.createElement("div", { className: "flex items-center gap-3 mb-2" },
                        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm` }, "3"),
                        React.createElement("h5", { className: `font-bold ${theme.text} text-sm uppercase tracking-wide` }, "Conclusión")
                      ),
                      React.createElement("div", { className: `mt-2 p-4 rounded-xl bg-gradient-to-br ${theme.grad} text-center shadow-md max-w-4xl mx-auto w-full` },
                        React.createElement("span", { className: "text-[15px] font-bold text-white tracking-wide" }, 
                          caso.resultado
                        )
                      )
                    )
                  )
                )
              )
            ),
            React.createElement("div", { className: "flex justify-center pt-6" },
              React.createElement("button", {
                onClick: () => setActiveTab('practica'),
                className: "bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 rounded-2xl font-bold transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 flex items-center gap-3"
              },
                "Entrar al Simulador Práctico ",
                React.createElement(Brain, { className: "w-5 h-5" })
              )
            )
          ),

          // Tab 3: Practica
          activeTab === 'practica' && React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
            !showResults ? React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" },
              React.createElement("div", { className: "mb-8 flex justify-between items-end" },
                React.createElement("div", null,
                  React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, 
                    "Desafío: ",
                    React.createElement("span", { className: theme.text }, questions[currentQuestion].type)
                  ),
                  React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta " + (currentQuestion + 1))
                ),
                React.createElement("span", { className: "text-slate-400 font-medium" }, `de ${questions.length}`)
              ),
              
              // Progress Bar
              React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" },
                React.createElement("div", { 
                  className: `bg-gradient-to-r ${theme.grad} h-full transition-all duration-500 ease-out`,
                  style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
                })
              ),
              
              // Question Text
              React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" }, 
                questions[currentQuestion].question
              ),

              // Visual Graph
              questions[currentQuestion].visual && React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner flex justify-center" },
                typeof questions[currentQuestion].visual === 'string' ?
                  React.createElement("div", { dangerouslySetInnerHTML: { __html: questions[currentQuestion].visual } }) :
                  questions[currentQuestion].visual
              ),

              // Answer Options
              React.createElement("div", { className: "space-y-4 mb-10" },
                questions[currentQuestion].options.map((option, index) =>
                  React.createElement("button", {
                    key: index,
                    onClick: () => handleAnswer(index),
                    disabled: hasAnswered,
                    className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                      hasAnswered ?
                        index === questions[currentQuestion].correct ?
                          'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]' :
                          index === selectedAnswer ?
                            'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80' :
                            'bg-white border-slate-100 text-slate-400 opacity-50' :
                        `bg-white border-slate-100 hover:border-slate-300 hover:shadow-lg text-slate-600 hover:-translate-y-1`
                    }`
                  },
                    React.createElement("div", { className: "flex items-center gap-4" },
                      React.createElement("div", {
                        className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                          hasAnswered ?
                            index === questions[currentQuestion].correct ?
                              'border-emerald-500 bg-emerald-500 text-white' :
                              index === selectedAnswer ?
                                'border-rose-400 bg-rose-400 text-white' :
                                'border-slate-200' :
                            'border-slate-200'
                        }`
                      },
                        hasAnswered && index === questions[currentQuestion].correct ?
                          React.createElement(CheckCircle, { className: "w-5 h-5" }) :
                          String.fromCharCode(65 + index)
                      ),
                      React.createElement("span", { className: "font-medium text-[15px]" }, option)
                    )
                  )
                )
              ),

              // Feedback Banner
              hasAnswered && React.createElement("div", {
                className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 border ${
                  selectedAnswer === questions[currentQuestion].correct ?
                  'bg-emerald-50/50 border-emerald-100 text-emerald-800' :
                  'bg-rose-50/50 border-rose-100 text-rose-800'
                }`
              },
                React.createElement("p", { className: "font-semibold text-sm md:text-base leading-relaxed" }, 
                  questions[currentQuestion].feedback
                )
              ),

              // Action Buttons
              React.createElement("div", { className: "flex justify-end" },
                React.createElement("button", {
                  onClick: nextQuestion,
                  disabled: !hasAnswered,
                  className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                    hasAnswered ?
                    'bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:-translate-y-1' :
                    'bg-slate-100 text-slate-400 cursor-not-allowed border'
                  }`
                },
                  currentQuestion === questions.length - 1 ? 'Ver Resultado Final' : 'Siguiente Pregunta',
                  React.createElement(ArrowRight, { className: "w-5 h-5" })
                )
              )
            ) :
            
            // Quiz Results Summary
            React.createElement("div", { className: "bg-white rounded-[2.5rem] border border-slate-100 p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" },
              React.createElement("div", { className: `absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${theme.grad}` }),
              React.createElement("div", { className: "w-28 h-28 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" },
                React.createElement(Award, { className: `w-14 h-14 ${theme.text}` })
              ),
              React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title),
              React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" }, resultData.desc),
              React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-inner" },
                React.createElement("div", { className: `text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${theme.grad} mb-2` }, 
                  score,
                  React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, ` / ${questions.length}`)
                ),
                React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Puntaje Logrado")
              ),
              React.createElement("button", {
                onClick: resetQuiz,
                className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto shadow-md"
              },
                React.createElement(RefreshCw, { className: "w-5 h-5" }),
                " Simular de nuevo"
              )
            )
          )
        )
      )
    );
  }

  // Global mount function for studyModules.js integration
  window.renderMathModuleGeneric = (containerId, moduleId) => {
    console.log(`renderMathModuleGeneric: Montando ${moduleId} en ${containerId}...`);
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) {
      console.warn("renderMathModuleGeneric: ReactDOM o contenedor no disponibles.");
      return;
    }

    try {
      if (!window._reactRoots) window._reactRoots = {};
      if (!window._reactRoots[containerId]) {
        window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
      }
      window._reactRoots[containerId].render(
        React.createElement(MathModuleGeneric, { moduleId: moduleId })
      );
      console.log(`renderMathModuleGeneric: Montaje exitoso para ${moduleId}.`);
    } catch (e) {
      console.error(`renderMathModuleGeneric Error en ${moduleId}:`, e);
      container.innerHTML = `<div class="p-10 text-center text-red-500"><h2 class="text-xl font-bold">Error en Módulo: ${e.message}</h2></div>`;
    }
  };
})();
