(function () {
  const { useState, useEffect, useRef } = React;

  // Adaptador de Iconos (Mapeo Lucide -> Material) - Estándar Profe Chiguiro
  const Icon = ({ name, className = "", style = {} }) => {
    const mapping = {
      'Activity': 'insights',
      'TrendingUp': 'trending_up',
      'GitMerge': 'call_split',
      'MinusSquare': 'remove_circle_outline',
      'CheckCircle': 'check_circle',
      'ArrowRight': 'arrow_forward',
      'Lightbulb': 'lightbulb',
      'Award': 'workspace_premium',
      'RefreshCw': 'refresh',
      'BookOpen': 'menu_book',
      'Calculator': 'calculate',
      'Target': 'track_changes',
      'Infinity': 'all_inclusive'
    };
    const iconName = mapping[name] || name || 'help_outline';
    return React.createElement("span", {
      className: `material-icons-round ${className}`,
      style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
    }, iconName);
  };

  function ModuloAlgebra() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: 12 CASOS DIDÁCTICOS
    // ==========================================

    const ejemplosEstrategia1 = [
    {
      titulo: "La tarifa del Taxi (Ecuación Lineal)",
      situacion: "Un taxi cobra $4.000 solo por subirte (banderazo) y $1.000 por cada kilómetro recorrido. ¿Cuál es la función que representa el costo (y) por los kilómetros (x)?",
      analisis: "Es una función lineal y = mx + b. El 'b' (intercepto) es el costo fijo inicial que no depende de los kilómetros. La 'm' (pendiente) es el costo variable que se multiplica por cada kilómetro.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(Icon, { name: "ArrowRight", className: "w-3 h-3 text-emerald-400 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Intercepto (b) = 4.000 (Fijo)")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(Icon, { name: "ArrowRight", className: "w-3 h-3 text-emerald-400 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Pendiente (m) = 1.000 (Variable)")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center border-t border-slate-100 pt-1" }, /*#__PURE__*/React.createElement(Icon, { name: "ArrowRight", className: "w-3 h-3 text-emerald-500 shrink-0" }), /*#__PURE__*/React.createElement("span", { className: "font-bold text-emerald-600" }, "y = 1.000x + 4.000"))
      ),

      resultado: "Ecuación: y = 1000x + 4000"
    },
    {
      titulo: "Encontrar la Recta Visualmente",
      situacion: "Una gráfica muestra una línea recta que cruza el eje vertical (Y) en el número 5 y baja a medida que avanza a la derecha. ¿Cuál de estas ecuaciones podría ser? A) y=2x+5 B) y=-2x+5 C) y=-2x-5",
      analisis: "1. Donde corta el eje Y es el valor 'b'. Como corta en +5, b=+5. 2. La línea baja (desciende), lo que significa que la pendiente 'm' es NEGATIVA (-).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "Corte en Y: b = +5"), /*#__PURE__*/
      React.createElement("p", null, "Direcci\xF3n: Baja = Pendiente negativa (-m)"), /*#__PURE__*/
      React.createElement("p", { className: "pt-2 mt-2 border-t border-slate-100 font-bold text-emerald-600" }, "Ecuaci\xF3n: y = -mx + 5")
      ),

      resultado: "La opción B (y = -2x + 5)."
    },
    {
      titulo: "Depreciación de un Auto",
      situacion: "Un auto cuesta $50 millones y pierde $5 millones de valor cada año. ¿En qué año su valor será de $30 millones?",
      analisis: "Planteamos la función: Valor = Inicial - (Pérdida × Años). y = 50 - 5x. Luego, reemplazamos 'y' por 30 y despejamos la 'x'.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-1.5 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "30 = 50 - 5x"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "5x = 50 - 30"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-emerald-600 font-bold" }, "5x = 20"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "x = 20 / 5 = 4")
      ),

      resultado: "En el año 4."
    }];


    const ejemplosEstrategia2 = [
    {
      titulo: "El Vuelo del Balón",
      situacion: "La trayectoria de un balón sigue la ecuación y = -x² + 4x. ¿En qué momento (x) alcanza su altura máxima?",
      analisis: "La trayectoria es una parábola invertida (porque x² es negativo). La altura máxima se encuentra exactamente en el Vértice. La fórmula del centro es x = -b / (2a).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-slate-500" }, "a = -1, b = 4"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "x = -(4) / (2 \xD7 -1)"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-teal-600 border-t border-slate-100 pt-1" }, "x = -4 / -2 = 2")
      ),

      resultado: "Alcanza la cima en x = 2."
    },
    {
      titulo: "Impacto contra el suelo",
      situacion: "Con la misma ecuación del balón (y = -x² + 4x), ¿en qué momento el balón vuelve a tocar el suelo?",
      analisis: "Tocar el suelo significa que la altura (y) es CERO. Debemos igualar la ecuación a 0 y encontrar las raíces (los cortes con el eje x).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "0 = -x\xB2 + 4x"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Factorizamos (x): 0 = x(-x + 4)"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Soluci\xF3n 1: x = 0 (Inicio)"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-teal-600 font-bold" }, "Soluci\xF3n 2: -x + 4 = 0 \u2192 x = 4")
      ),

      resultado: "Toca el suelo en x = 4."
    },
    {
      titulo: "Identificación de Parábolas",
      situacion: "Ves una gráfica en forma de 'U' (sonrisa) que cruza el eje Y en el número -3. ¿Cuál ecuación la representa? A) y = -x² - 3 B) y = x² + 3 C) y = x² - 3",
      analisis: "1. Forma de 'U' (Cóncava hacia arriba) significa que el número junto a x² es POSITIVO. 2. El punto de corte en Y es el número suelto (c), que debe ser -3.",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "Forma de U: a ", " > ", " 0 (+x\xB2)"), /*#__PURE__*/
      React.createElement("p", null, "Corte en Y: c = -3"), /*#__PURE__*/
      React.createElement("p", { className: "font-bold text-teal-600" }, "Busca: +x\xB2 ... - 3")
      ),

      resultado: "La opción C (y = x² - 3)."
    }];


    const ejemplosEstrategia3 = [
    {
      titulo: "Cruzando dos planes (Sistemas)",
      situacion: "Plan A: y = 2x + 10. Plan B: y = 3x. En una gráfica, estas dos líneas se cruzan. ¿Qué significa ese punto de cruce?",
      analisis: "En un sistema de ecuaciones (2x2), el punto de intersección de dos rectas es el momento exacto donde AMBOS planes cuestan lo mismo para la misma cantidad de uso.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-slate-500" }, "Igualamos: 2x + 10 = 3x"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Despejamos: 10 = 3x - 2x"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-lime-600" }, "x = 10")
      ),

      resultado: "Se cruzan en x=10 (cuestan igual)."
    },
    {
      titulo: "Traducción a 2x2",
      situacion: "Un estudiante pagó $5.000 por 2 panes y 1 jugo. Otro pagó $7.000 por 3 panes y 1 jugo. ¿Cuál es el sistema de ecuaciones que resuelve esto?",
      analisis: "Asignamos variables: p = pan, j = jugo. Traducimos cada oración literal a una ecuación matemática.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Ecuaci\xF3n 1: 2p + 1j = 5.000"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Ecuaci\xF3n 2: 3p + 1j = 7.000"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-lime-600 font-bold border-t border-slate-100 pt-1" }, "Este es el sistema completo.")
      ),

      resultado: "Sistema: { 2p+j=5000 ; 3p+j=7000 }"
    },
    {
      titulo: "Rectas Paralelas (Sin Solución)",
      situacion: "Tienes el sistema: y = 2x + 5 y y = 2x - 3. ¿En qué punto se interceptan?",
      analisis: "Observa la pendiente (el número junto a la x). En ambas es '2'. Si dos rectas tienen la MISMA pendiente, tienen la misma inclinación (son paralelas).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "Recta 1: Pendiente = 2"), /*#__PURE__*/
      React.createElement("p", null, "Recta 2: Pendiente = 2"), /*#__PURE__*/
      React.createElement("p", { className: "pt-2 mt-2 border-t border-slate-100 font-bold text-lime-600" }, "Rectas paralelas jam\xE1s se tocan.")
      ),

      resultado: "El sistema NO tiene solución."
    }];


    const ejemplosEstrategia4 = [
    {
      titulo: "La Regla de Inversión",
      situacion: "Resuelve la inecuación: -3x > 12. ¿Cuál es el rango de valores correctos para x?",
      analisis: "Para despejar 'x', debemos dividir entre -3. ¡ALERTA ROJA! La regla más importante de las desigualdades: si multiplicas o divides por un número NEGATIVO, el signo central gira al revés.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Original: -3x ", " > ", " 12"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-green-600 font-bold" }, "Giro!: x ", " < ", " 12 / -3"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Resultado: x ", " < ", " -4")
      ),

      resultado: "Todos los números menores a -4."
    },
    {
      titulo: "El Rango Visual",
      situacion: "Una gráfica en la recta numérica muestra un círculo relleno (sólido) en el número 5 y una flecha roja que se extiende hacia el infinito positivo. ¿Cómo se escribe esto?",
      analisis: "Flecha a la derecha significa 'Mayor que' (>). Círculo sólido significa que INCLUYE el número ('Mayor o igual que' ≥). Si fuera un círculo hueco/blanco, sería solo '>'.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Direcci\xF3n derecha = ", " > "), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "C\xEDrculo s\xF3lido = Incluye (=)"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-green-600 font-bold border-t border-slate-100 pt-1" }, "S\xEDmbolo final: \u2265 5")
      ),

      resultado: "Inecuación: x ≥ 5."
    },
    {
      titulo: "Límites de Presupuesto",
      situacion: "Tienes máximo $50.000. Vas a comprar un regalo de $20.000 y chocolates que cuestan $3.000 cada uno. ¿Cuántos chocolates (c) puedes comprar?",
      analisis: "Planteamos la desigualdad con el símbolo 'Menor o Igual' (≤) porque es el límite de dinero. 20.000 + 3.000c ≤ 50.000.",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "3.000c \u2264 50.000 - 20.000"), /*#__PURE__*/
      React.createElement("p", null, "3.000c \u2264 30.000"), /*#__PURE__*/
      React.createElement("p", { className: "font-bold text-green-600" }, "c \u2264 30.000 / 3.000"), /*#__PURE__*/
      React.createElement("p", null, "c \u2264 10")
      ),

      resultado: "Máximo 10 chocolates."
    }];


    const themeConfig = {
      emerald: { bgLight: 'bg-emerald-50/50', text: 'text-emerald-600', badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700', grad: 'from-emerald-400 to-emerald-600' },
      teal: { bgLight: 'bg-teal-50/50', text: 'text-teal-600', badgeBg: 'bg-teal-100', badgeText: 'text-teal-700', grad: 'from-teal-400 to-teal-600' },
      lime: { bgLight: 'bg-lime-50/50', text: 'text-lime-600', badgeBg: 'bg-lime-100', badgeText: 'text-lime-700', grad: 'from-lime-400 to-lime-600' },
      green: { bgLight: 'bg-green-50/50', text: 'text-green-600', badgeBg: 'bg-green-100', badgeText: 'text-green-700', grad: 'from-green-400 to-green-600' }
    };

    const renderCasos = (casosArray, colorTheme) => {
      const theme = themeConfig[colorTheme];
      return (/*#__PURE__*/
        React.createElement("div", { className: "space-y-8 mt-8" },
        casosArray.map((caso, index) => /*#__PURE__*/
        React.createElement("div", { key: index, className: "relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" }, /*#__PURE__*/
        React.createElement("div", { className: `absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}` }), /*#__PURE__*/
        React.createElement("div", { className: "p-6 border-b border-slate-100 bg-slate-50/30" }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-3" }, /*#__PURE__*/
        React.createElement("div", { className: `p-2 ${theme.badgeBg} rounded-xl` }, /*#__PURE__*/
        React.createElement(Icon, { name: "Lightbulb", className: `w-5 h-5 ${theme.text}` })
        ), /*#__PURE__*/
        React.createElement("h4", { className: "text-xl font-bold text-slate-800" }, "Caso Pr\xE1ctico ", index + 1, ": ", caso.titulo)
        ), /*#__PURE__*/
        React.createElement("p", { className: "text-slate-600 font-medium text-[15px] leading-relaxed italic border-l-4 border-slate-300 pl-4 ml-1 py-1" }, "\"",
        caso.situacion, "\""
        )
        ), /*#__PURE__*/
        React.createElement("div", { className: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white" }, /*#__PURE__*/
        React.createElement("div", { className: "p-6 hover:bg-slate-50/50 transition-colors" }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /*#__PURE__*/
        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "1"), /*#__PURE__*/
        React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Analizar L\xF3gica")
        ), /*#__PURE__*/
        React.createElement("div", { className: "text-sm text-slate-600 leading-relaxed" }, caso.analisis)
        ), /*#__PURE__*/
        React.createElement("div", { className: "p-6 hover:bg-slate-50/50 transition-colors" }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /*#__PURE__*/
        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "2"), /*#__PURE__*/
        React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Despejar")
        ), /*#__PURE__*/
        React.createElement("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner" },
        caso.calculo
        )
        ), /*#__PURE__*/
        React.createElement("div", { className: `p-6 ${theme.bgLight} flex flex-col justify-center` }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /*#__PURE__*/
        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm` }, "3"), /*#__PURE__*/
        React.createElement("h5", { className: `font-bold ${theme.text} text-sm uppercase tracking-wide` }, "Soluci\xF3n")
        ), /*#__PURE__*/
        React.createElement("div", { className: `mt-2 p-4 rounded-xl bg-gradient-to-br ${theme.grad} text-center shadow-md` }, /*#__PURE__*/
        React.createElement("span", { className: "text-[15px] font-bold text-white tracking-wide" }, caso.resultado)
        )
        )
        )
        )
        )
        ));

    };

    // ==========================================
    // QUIZ (PRÁCTICA) - 6 PREGUNTAS
    // ==========================================
    const questions = [
    {
      type: "Funciones Lineales",
      question: "La factura del celular de Juan dice que paga $20.000 fijos al mes y $50 por cada mensaje enviado (x). ¿Qué gráfica representa esto?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center gap-6" }, /*#__PURE__*/

      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-24 h-24 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "10", y2: "10", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "90", y2: "90", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "40", x2: "80", y2: "10", stroke: "#10b981", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("text", { x: "5", y: "45", fontSize: "10", fill: "#047857", fontWeight: "bold" }, "20k")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-xs font-bold text-slate-500 mt-2" }, "Opci\xF3n A")
      ), /*#__PURE__*/

      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-24 h-24 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "10", y2: "10", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "90", y2: "90", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "80", y2: "10", stroke: "#ef4444", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("text", { x: "5", y: "95", fontSize: "10", fill: "#be123c", fontWeight: "bold" }, "0")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-xs font-bold text-slate-500 mt-2" }, "Opci\xF3n B")
      )
      ),

      options: ["Opción A", "Opción B", "Ninguna", "Ambas son correctas"],
      correct: 0,
      feedback: "¡Exacto! El intercepto 'b' es 20.000. Esto significa que la gráfica NO empieza desde cero en el Eje Y, empieza desde 20.000 (Opción A)."
    },
    {
      type: "Vértice de Parábola",
      situacion: "Un proyectil se lanza al aire siguiendo y = -x² + 6x. ¿En qué momento 'x' alcanza la cima?",
      question: "La ecuación es y = -x² + 6x. ¿En qué valor de 'x' alcanza su altura máxima?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-40 h-32 overflow-visible", viewBox: "0 0 100 80" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "70", x2: "10", y2: "10", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "70", x2: "90", y2: "70", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("path", { d: "M 10 70 Q 50 -20 90 70", fill: "none", stroke: "#14b8a6", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("line", { x1: "50", y1: "10", x2: "50", y2: "70", stroke: "#14b8a6", strokeWidth: "1", strokeDasharray: "3 3" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "85", fontSize: "12", fill: "#0f766e", textAnchor: "middle", fontWeight: "bold" }, "x = ?")
      )
      ),

      options: ["x = 6", "x = -6", "x = 3", "x = 0"],
      correct: 2,
      feedback: "¡Brillante! La fórmula del vértice es x = -b / (2a). Aquí b=6 y a=-1. Por tanto: -6 / (2 × -1) = -6 / -2 = 3."
    },
    {
      type: "Sistemas 2x2",
      question: "En una granja hay gallinas y vacas. Hay 10 cabezas en total y 26 patas en total. ¿Cuántas vacas hay? (Pista: Gallina=2 patas, Vaca=4 patas)",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 font-mono text-center" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 mb-2" }, "Ecuaci\xF3n 1: ", /*#__PURE__*/React.createElement("strong", { className: "text-lime-600" }, "g + v = 10"), " (Cabezas)"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600" }, "Ecuaci\xF3n 2: ", /*#__PURE__*/React.createElement("strong", { className: "text-lime-600" }, "2g + 4v = 26"), " (Patas)")
      ),

      options: ["10 vacas", "7 vacas", "3 vacas", "5 vacas"],
      correct: 2,
      feedback: "¡Perfecto! Puedes resolverlo probando opciones. Si hay 3 vacas (12 patas), quedan 7 gallinas (14 patas). 12 + 14 = 26 patas. ¡Funciona!"
    },
    {
      type: "Inversión de Signos",
      question: "Si resuelves la inecuación -2x ≥ 10, ¿cuál es el conjunto solución correcto?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-emerald-50 rounded-xl shadow-sm border border-emerald-100 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "font-mono text-xl font-bold text-emerald-800" }, "-2x \u2265 10")
      ),

      options: ["x ≥ -5", "x ≤ -5", "x ≥ 5", "x ≤ 5"],
      correct: 1,
      feedback: "¡Alerta superada! Al dividir entre un número negativo (-2), el símbolo ≥ GIRA y se convierte en ≤. Por tanto, x ≤ -5."
    },
    {
      type: "Identificación de Gráficas",
      question: "¿Cuál de las siguientes ecuaciones corresponde a una parábola que se abre hacia ABAJO (forma de montaña) y cruza el eje Y en el número +4?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-32 h-32 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("line", { x1: "50", y1: "90", x2: "50", y2: "10", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "70", x2: "90", y2: "70", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("path", { d: "M 20 90 Q 50 -10 80 90", fill: "none", stroke: "#0ea5e9", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("circle", { cx: "50", cy: "30", r: "4", fill: "#0284c7" }), /*#__PURE__*/
      React.createElement("text", { x: "65", y: "35", fontSize: "12", fill: "#0369a1", fontWeight: "bold" }, "+4")
      )
      ),

      options: [
      "y = x² + 4",
      "y = x² - 4",
      "y = -x² + 4",
      "y = -x² - 4"],

      correct: 2,
      feedback: "¡Magistral! Hacia abajo significa que la 'x²' debe ser NEGATIVA (-). Cruza en +4 significa que el número suelto (c) debe ser +4. Por tanto: y = -x² + 4."
    },
    {
      type: "Rectas Paralelas",
      question: "¿Qué pasa si intentas resolver el sistema formado por las ecuaciones 'y = 4x + 1' e 'y = 4x + 10'?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex justify-center gap-6 text-center" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "font-mono text-sm font-bold text-slate-700" }, "y = 4x + 1"), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-slate-500 mt-1" }, "Recta 1")
      ), /*#__PURE__*/
      React.createElement("div", { className: "w-px h-10 bg-slate-300" }), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "font-mono text-sm font-bold text-slate-700" }, "y = 4x + 10"), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-slate-500 mt-1" }, "Recta 2")
      )
      ),

      options: [
      "Se cruzan en x = 4.",
      "Se cruzan en el eje Y.",
      "Nunca se cruzan, no hay solución.",
      "Son la misma línea exactamente."],

      correct: 2,
      feedback: "¡Ojo entrenado! Ambas ecuaciones tienen EXACTAMENTE la misma pendiente (el 4 junto a la x). Esto significa que son paralelas. Las rectas paralelas jamás se tocan."
    }];


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
      const percentage = score / questions.length;
      if (percentage === 1) return { title: "¡Cerebro Analítico!", desc: "Dominas por completo el lenguaje de las variables. Has desmitificado las funciones y las desigualdades a la perfección." };
      if (percentage >= 0.6) return { title: "¡Buen Cálculo!", desc: "Entiendes cómo se mueven las gráficas, pero cuidado con las trampas de los signos negativos al despejar. Sigue repasando." };
      return { title: "¡Las variables son amigas!", desc: "El álgebra requiere que mires más allá de los números y entiendas el patrón. Vuelve a los Formularios Clave de Funciones." };
    };

    const resultData = getResultMessage();

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-emerald-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#021A11] p-8 md:p-14 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[35rem] h-[35rem] bg-teal-600/20 blur-[120px] rounded-full pointer-events-none" }), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Activity", className: "w-5 h-5 text-emerald-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-emerald-300 font-bold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia Final")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-6xl font-black mb-5 text-white tracking-tight leading-tight" }, "\xC1lgebra y ", /*#__PURE__*/
      React.createElement("br", { className: "hidden md:block" }), /*#__PURE__*/React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400" }, "Funciones")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light max-w-xl" }, "La pieza final del rompecabezas: domina c\xF3mo se comportan las variables en gr\xE1ficas lineales, par\xE1bolas, sistemas de ecuaciones y desigualdades."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-[2rem] shadow-[0_0_40px_rgba(16,185,129,0.3)] transform rotate-6 border border-white/10" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Infinity", className: "w-12 h-12 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-12 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-100/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: 'Activity', label: 'Lógica Algebraica' },
      { id: 'teoria', icon: 'BookOpen', label: 'Formularios de Funciones' },
      { id: 'practica', icon: 'Target', label: 'Simulador Matemático' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-emerald-700 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 scale-95'}` }, /*#__PURE__*/


      React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-emerald-500' : ''}` }),
      tab.label
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("main", { className: "p-6 md:px-12 md:pb-12 md:pt-4" },


      activeTab === 'introduccion' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" }, /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-10 items-center" }, /*#__PURE__*/

      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "El Secreto de las Variables"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "Esta secci\xF3n de la prueba asusta a muchos por las letras, pero en realidad eval\xFAa algo simple: si eres capaz de ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-emerald-700" }, "ver el patr\xF3n visual detr\xE1s de las letras"), ". Una ecuaci\xF3n no es m\xE1s que el dibujo de un plan en la vida real."
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-emerald-50/30 backdrop-blur-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-3xl p-8 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-3xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-6 text-lg" }, "Los 4 pilares Algebraicos:"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-5" },
      [
      "Funciones Lineales (Líneas rectas, pendientes y cortes).",
      "Funciones Cuadráticas (Parábolas, vértices y trayectorias).",
      "Sistemas 2x2 (Intersección de dos planes).",
      "Desigualdades (Rangos, límites y la regla del signo negativo)."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-4 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-0.5 bg-emerald-100 p-1.5 rounded-lg shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(Icon, { name: "CheckCircle", className: "w-3.5 h-3.5 text-emerald-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-medium text-[15px]" }, text)
      )
      )
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-emerald-50/50 rounded-[2.5rem] p-10 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-80 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/

      React.createElement("div", {
        className: "relative w-56 h-56 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(55deg) rotateZ(-20deg)', transformStyle: 'preserve-3d' },
        onMouseEnter: (e) => e.currentTarget.style.transform = 'rotateX(45deg) rotateZ(-10deg) scale(1.05)',
        onMouseLeave: (e) => e.currentTarget.style.transform = 'rotateX(55deg) rotateZ(-20deg) scale(1)' }, /*#__PURE__*/


      React.createElement("div", { className: "absolute inset-0 bg-white/80 backdrop-blur-md border border-emerald-200 rounded-[2rem] shadow-[0_30px_50px_rgba(16,185,129,0.15)] flex items-center justify-center overflow-hidden", style: { transform: 'translateZ(-1px)' } }, /*#__PURE__*/

      React.createElement("div", { className: "w-full h-px bg-slate-200" }), /*#__PURE__*/
      React.createElement("div", { className: "h-full w-px bg-slate-200 absolute" })
      ), /*#__PURE__*/


      React.createElement("div", { className: "absolute inset-0 flex items-center justify-center", style: { transform: 'translateZ(10px)' } }, /*#__PURE__*/
      React.createElement("svg", { className: "w-full h-full overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "90", x2: "90", y2: "10", stroke: "#10b981", strokeWidth: "4" })
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "absolute inset-0 flex items-center justify-center", style: { transform: 'translateZ(20px)' } }, /*#__PURE__*/
      React.createElement("svg", { className: "w-full h-full overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("path", { d: "M 20 90 Q 50 10 80 90", fill: "none", stroke: "#0ea5e9", strokeWidth: "4" })
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "absolute top-4 left-4 w-12 h-12 bg-white backdrop-blur-sm rounded-xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-pulse border-2 border-emerald-100", style: { transform: 'translateZ(60px)', animationDuration: '4s' } }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono font-bold text-emerald-600 text-xl" }, "x")
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute bottom-4 right-4 w-12 h-12 bg-white backdrop-blur-sm rounded-xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] animate-pulse border-2 border-teal-100", style: { transform: 'translateZ(40px)', animationDuration: '5s' } }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono font-bold text-teal-600 text-xl" }, "y")
      )

      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-[15px] text-slate-500 font-medium italic mt-6 text-center max-w-sm" }, "\"Las ecuaciones no muerden, solo intentan dibujarte algo en la mente.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-8 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3" },
      "Ver Formularios Visuales ", /*#__PURE__*/
      React.createElement(Icon, { name: "ArrowRight", className: "w-5 h-5" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16" }, /*#__PURE__*/


      React.createElement("section", null, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-emerald-100 rounded-2xl" }, /*#__PURE__*/
      React.createElement(Icon, { name: "TrendingUp", className: "w-6 h-6 text-emerald-600" })
      ), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "1. Funciones Lineales"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "L\xEDneas rectas y cambios constantes")
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Calculator", className: "w-32 h-32 text-slate-900" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-emerald-900 text-white font-mono text-2xl p-6 rounded-2xl text-center shadow-lg border border-emerald-700/50" }, "y = ", /*#__PURE__*/
      React.createElement("span", { className: "text-emerald-400" }, "m"), "x + ", /*#__PURE__*/React.createElement("span", { className: "text-emerald-400" }, "b")
      ), /*#__PURE__*/
      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" }, /*#__PURE__*/
      React.createElement("p", { className: "flex gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-emerald-600 shrink-0" }, "b (Intercepto):"), "Es el punto de inicio en el eje vertical (Y) cuando x vale cero. Representa costos fijos o valores iniciales."

      ), /*#__PURE__*/
      React.createElement("p", { className: "flex gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-emerald-600 shrink-0" }, "m (Pendiente):"), "Es la inclinaci\xF3n. Si es positiva (+) la l\xEDnea sube; si es negativa (-) la l\xEDnea baja. Representa tasas de cambio o costos variables."

      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "70", x2: "10", y2: "10", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "70", x2: "90", y2: "70", stroke: "#cbd5e1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "50", x2: "80", y2: "15", stroke: "#10b981", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("circle", { cx: "10", cy: "50", r: "3", fill: "#047857" }), /*#__PURE__*/
      React.createElement("text", { x: "-5", y: "55", fontSize: "10", fill: "#047857", fontWeight: "bold" }, "b"), /*#__PURE__*/
      React.createElement("text", { x: "85", y: "78", fontSize: "10", fill: "#94a3b8", fontWeight: "bold" }, "X"), /*#__PURE__*/
      React.createElement("text", { x: "5", y: "10", fontSize: "10", fill: "#94a3b8", fontWeight: "bold" }, "Y")
      )
      )
      )
      ),
      renderCasos(ejemplosEstrategia1, 'emerald')
      ), /*#__PURE__*/


      React.createElement("section", null, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-teal-100 rounded-2xl" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Activity", className: "w-6 h-6 text-teal-600" })
      ), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "2. Funciones Cuadr\xE1ticas"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Par\xE1bolas y trayectorias curvas")
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-teal-900 text-white font-mono text-2xl p-6 rounded-2xl text-center shadow-lg border border-teal-700/50" }, "y = ", /*#__PURE__*/
      React.createElement("span", { className: "text-teal-400" }, "a"), "x\xB2 + bx + c"
      ), /*#__PURE__*/
      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" }, /*#__PURE__*/
      React.createElement("p", { className: "flex gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-teal-600 shrink-0" }, "Signo de 'a':"), "Si 'a' es positivo (+) la par\xE1bola es una sonrisa (U). Si es negativo (-) es una monta\xF1a (Trayectoria de proyectil)."

      ), /*#__PURE__*/
      React.createElement("p", { className: "flex gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-teal-600 shrink-0" }, "V\xE9rtice:"), "Es el punto m\xE1s alto o m\xE1s bajo. Se halla con x = -b / (2a)."

      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" }, /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "75", x2: "90", y2: "75", stroke: "#cbd5e1", strokeWidth: "1" }), /*#__PURE__*/
      React.createElement("path", { d: "M 20 75 Q 50 10 80 75", fill: "none", stroke: "#0f766e", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("circle", { cx: "50", cy: "42", r: "4", fill: "#0d9488" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "30", fontSize: "10", fill: "#0d9488", textAnchor: "middle", fontWeight: "bold" }, "V\xE9rtice")
      )
      )
      )
      ),
      renderCasos(ejemplosEstrategia2, 'teal')
      ), /*#__PURE__*/


      React.createElement("section", null, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-lime-100 rounded-2xl" }, /*#__PURE__*/
      React.createElement(Icon, { name: "GitMerge", className: "w-6 h-6 text-lime-600" })
      ), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "3. Sistemas y Desigualdades"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Cruces de planes y rangos de validez")
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-gradient-to-br from-lime-50 to-white rounded-[2rem] p-8 border border-lime-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-xl font-bold text-lime-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Icon, { name: "GitMerge", className: "w-5 h-5" }), " Sistemas 2x2"
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 text-[15px] leading-relaxed" }, "Un sistema busca el punto exacto donde dos planes o rectas SE CRUZAN. Si las rectas son paralelas (misma pendiente), el sistema no tiene soluci\xF3n porque jam\xE1s se tocan."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-gradient-to-br from-green-50 to-white rounded-[2rem] p-8 border border-green-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-xl font-bold text-green-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Icon, { name: "MinusSquare", className: "w-5 h-5" }), " Desigualdades"
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 text-[15px] leading-relaxed" }, "No buscamos un valor exacto, sino un RANGO (ej: \"m\xEDnimo 5\"). \xA1Recuerda! Si multiplicas o divides por un negativo, el signo de la desigualdad gira (ej: de ",
      " > ", " a ", " < ", ")."
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-4" },
      renderCasos(ejemplosEstrategia3, 'lime'), /*#__PURE__*/
      React.createElement("div", { className: "h-2" }),
      renderCasos(ejemplosEstrategia4, 'green')
      )
      )

      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-4xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "space-y-8" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "flex-1 w-full" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center mb-3" }, /*#__PURE__*/
      React.createElement("span", { className: "text-xs font-black uppercase tracking-widest text-slate-400 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Target", className: "w-4 h-4" }), " Simulaci\xF3n ", currentQuestion + 1, " de ", questions.length
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100" },
      Math.round((currentQuestion + 1) / questions.length * 100), "% Completado"
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50" }, /*#__PURE__*/
      React.createElement("div", {
        className: "h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(16,185,129,0.3)]",
        style: { width: `${(currentQuestion + 1) / questions.length * 100}%` } }
      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "shrink-0 flex items-center gap-3 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100" }, /*#__PURE__*/
      React.createElement("div", { className: "text-right" }, /*#__PURE__*/
      React.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase leading-none" }, "Puntaje"), /*#__PURE__*/
      React.createElement("p", { className: "text-xl font-black text-slate-800" }, score)
      ), /*#__PURE__*/
      React.createElement("div", { className: "w-px h-8 bg-slate-200" }), /*#__PURE__*/
      React.createElement(Icon, { name: "Award", className: "w-6 h-6 text-emerald-500" })
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-500" }, /*#__PURE__*/
      React.createElement("div", { className: "mb-8" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-4" },
      questions[currentQuestion].question
      ),
      questions[currentQuestion].situacion && /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 font-medium" }, questions[currentQuestion].situacion)

      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50 rounded-[2rem] p-4 md:p-10 mb-10 border border-slate-100 shadow-inner flex items-center justify-center min-h-[200px]" },
      questions[currentQuestion].visual
      ), /*#__PURE__*/


      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-10" },
      questions[currentQuestion].options.map((option, index) => /*#__PURE__*/
      React.createElement("button", {
        key: index,
        onClick: () => handleAnswer(index),
        disabled: hasAnswered,
        className: `group relative p-6 rounded-2xl border-2 text-left transition-all duration-300 ${
        hasAnswered ?
        index === questions[currentQuestion].correct ?
        'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]' :
        index === selectedAnswer ?
        'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80' :
        'bg-white border-slate-100 text-slate-400 opacity-50' :
        'bg-white border-slate-100 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/


      React.createElement("div", { className: "flex items-center gap-4" }, /*#__PURE__*/
      React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
        hasAnswered ?
        index === questions[currentQuestion].correct ?
        'border-emerald-500 bg-emerald-500 text-white' :
        index === selectedAnswer ?
        'border-rose-400 bg-rose-400 text-white' :
        'border-slate-200' :
        'border-slate-200 group-hover:border-emerald-400'}` },

      hasAnswered && index === questions[currentQuestion].correct && /*#__PURE__*/React.createElement(Icon, { name: "CheckCircle", className: "w-5 h-5" })
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-medium text-[15px]" }, option)
      )
      )
      )
      ),

      hasAnswered && /*#__PURE__*/
      React.createElement("div", { className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
        selectedAnswer === questions[currentQuestion].correct ?
        'bg-emerald-50 border border-emerald-100 text-emerald-800' :
        'bg-rose-50 border border-rose-100 text-rose-800'}` }, /*#__PURE__*/

      React.createElement("p", { className: "font-semibold text-sm md:text-base" }, questions[currentQuestion].feedback)
      ), /*#__PURE__*/


      React.createElement("div", { className: "flex justify-end" }, /*#__PURE__*/
      React.createElement("button", {
        onClick: nextQuestion,
        disabled: !hasAnswered,
        className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
        hasAnswered ?
        'bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:-translate-y-1' :
        'bg-slate-100 text-slate-400 cursor-not-allowed'}` },


      currentQuestion === questions.length - 1 ? 'Ver Resultado Final' : 'Siguiente Simulación', /*#__PURE__*/
      React.createElement(Icon, { name: "ArrowRight", className: "w-5 h-5" })
      )
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(16,185,129,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-lime-500" }), /*#__PURE__*/

      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Icon, { name: "Award", className: "w-14 h-14 text-emerald-600" })
      ), /*#__PURE__*/

      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" },
      resultData.desc
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600 mb-2" },
      score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Puntaje Algebraico")
      ), /*#__PURE__*/

      React.createElement("button", {
        onClick: resetQuiz,
        className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto" }, /*#__PURE__*/

      React.createElement(Icon, { name: "RefreshCw", className: "w-5 h-5" }), "Simular de nuevo"

      )
      )

      )

      )
      )
      ));

  }

  // Registro global con gestión de raíces para React 18 (Estándar Profe Chiguiro)
  window.renderMathModule7 = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) {
      console.warn("mathModule7.js: No se encontró ReactDOM o el contenedor.");
      return;
    }
    try {
      if (!window._reactRoots) window._reactRoots = {};
      if (!window._reactRoots[containerId]) {
        window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
      }
      window._reactRoots[containerId].render(React.createElement(ModuloAlgebra));
      console.log("mathModule7.js: Renderizado exitoso.");
    } catch (e) {
      console.error("mathModule7.js Error:", e);
      container.innerHTML = `<div class="p-10 text-center" style="color: #ef4444"><h2 class="text-xl font-bold">Error: ${e.message}</h2></div>`;
    }
  };
})();