(function () {
  console.log("mathModule5.js: Iniciando carga...");
  const React = window.React;
  const { useState, useEffect, useMemo, useCallback } = React;

  // Standard Icon component using Material Icons
  const Icon = ({ name, className = "", style = {} }) =>
  React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
  }, name);


  // Component wrappers for lucide-react mapping
  const Box = (props) => React.createElement(Icon, { name: "inventory_2", ...props });
  const Triangle = (props) => React.createElement(Icon, { name: "change_history", ...props });
  const Maximize = (props) => React.createElement(Icon, { name: "aspect_ratio", ...props });
  const Ruler = (props) => React.createElement(Icon, { name: "straighten", ...props });
  const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
  const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
  const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
  const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });
  const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
  const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
  const Compass = (props) => React.createElement(Icon, { name: "explore", ...props });
  const Layers = (props) => React.createElement(Icon, { name: "layers", ...props });
  const Square = (props) => React.createElement(Icon, { name: "crop_square", ...props });
  const BookOpen = (props) => React.createElement(Icon, { name: "menu_book", ...props });

  function ModuloGeometria() {
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
      titulo: "La Escalera y el Muro",
      situacion: "Una escalera de 5 metros está apoyada contra una pared. La base de la escalera está a 3 metros de la pared. ¿A qué altura de la pared llega la escalera?",
      analisis: "La pared, el suelo y la escalera forman un triángulo rectángulo. La escalera es la hipotenusa (c = 5), la base es un cateto (a = 3). Nos falta la altura (b).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "F\xF3rmula: c\xB2 = a\xB2 + b\xB2")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Sustituir: 5\xB2 = 3\xB2 + b\xB2")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Resolver: 25 = 9 + b\xB2")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-fuchsia-500 shrink-0" }), /*#__PURE__*/React.createElement("span", { className: "font-bold text-fuchsia-600" }, "Despejar: b\xB2 = 25 - 9 = 16"))
      ),

      resultado: "Altura = √16 = 4 metros."
    },
    {
      titulo: "El atajo del parque",
      situacion: "Para cruzar un parque rectangular de 60m de ancho y 80m de largo, María camina en diagonal desde una esquina a la otra. ¿Cuántos metros caminó?",
      analisis: "Al trazar una diagonal en un rectángulo, se forman dos triángulos rectángulos. Los lados del parque son los catetos (60 y 80). Buscamos la hipotenusa (la diagonal).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "c\xB2 = 60\xB2 + 80\xB2"), /*#__PURE__*/
      React.createElement("p", null, "c\xB2 = 3600 + 6400"), /*#__PURE__*/
      React.createElement("p", null, "c\xB2 = 10000"), /*#__PURE__*/
      React.createElement("p", { className: "pt-2 mt-2 border-t border-slate-100 font-bold text-fuchsia-600" }, "c = \u221A10000")
      ),

      resultado: "Caminó 100 metros en diagonal."
    },
    {
      titulo: "La antena anclada",
      situacion: "Una antena vertical de 12 metros de altura está anclada al suelo por un cable que mide 15 metros. ¿A qué distancia de la base de la antena está amarrado el cable?",
      analisis: "La antena vertical y el suelo forman 90°. La antena es un cateto (12m) y el cable tensado es la hipotenusa (15m). Nos falta el cateto de la base en el suelo.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-1.5 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "15\xB2 = 12\xB2 + x\xB2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "225 = 144 + x\xB2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-fuchsia-600 font-bold" }, "x\xB2 = 225 - 144 = 81"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "x = \u221A81")
      ),

      resultado: "Anclada a 9 metros de la base."
    }];


    const ejemplosEstrategia2 = [
    {
      titulo: "Cercar vs. Sembrar",
      situacion: "Tienes un terreno rectangular de 10m x 20m. Cuesta $5.000 el metro de cerca y $2.000 el metro cuadrado (m²) de pasto. ¿Cuánto gastas en total para cercarlo y sembrarlo?",
      analisis: "La cerca rodea el borde (Perímetro = Suma de lados). El pasto cubre el interior (Área = b × h). Calculamos ambos por separado y multiplicamos por su respectivo costo.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement("span", { className: "text-purple-600 font-bold w-16" }, "Per\xEDmetro:"), " 10+20+10+20 = 60m. ", /*#__PURE__*/React.createElement("br", null), "60 \xD7 $5.000 = $300k"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 border-t border-slate-100 pt-1" }, /*#__PURE__*/React.createElement("span", { className: "text-purple-600 font-bold w-16" }, "\xC1rea:"), " 10 \xD7 20 = 200m\xB2. ", /*#__PURE__*/React.createElement("br", null), "200 \xD7 $2.000 = $400k")
      ),

      resultado: "Gasto total de $700.000."
    },
    {
      titulo: "El hueco en la pared",
      situacion: "Deseas pintar una pared de 5m de base por 3m de altura. En la pared hay una ventana cuadrada de 1m de lado que NO se pintará. ¿Cuántos m² de pintura necesitas?",
      analisis: "Problema clásico de 'Área Sombreada'. Se calcula el área total (la pared) y se le RESTA el área vacía (la ventana).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex justify-between border-b border-slate-100 pb-1" }, /*#__PURE__*/React.createElement("span", null, "\xC1rea Pared (5\xD73):"), " ", /*#__PURE__*/React.createElement("span", null, "15 m\xB2")), /*#__PURE__*/
      React.createElement("li", { className: "flex justify-between border-b border-slate-100 pb-1" }, /*#__PURE__*/React.createElement("span", null, "\xC1rea Ventana (1\xD71):"), " ", /*#__PURE__*/React.createElement("span", null, "1 m\xB2")), /*#__PURE__*/
      React.createElement("li", { className: "flex justify-between text-purple-600 font-bold pt-1" }, /*#__PURE__*/React.createElement("span", null, "Resta (15 - 1):"), " ", /*#__PURE__*/React.createElement("span", null, "14 m\xB2"))
      ),

      resultado: "Se necesitan 14 m² de pintura."
    },
    {
      titulo: "La alfombra circular",
      situacion: "Un salón cuadrado mide 4m de lado. En el centro hay una alfombra circular que toca exactamente los 4 bordes del salón. ¿Cuál es el área de la alfombra? (Usa π ≈ 3.14)",
      analisis: "Si el círculo toca los bordes de un cuadrado de 4m, entonces el DIÁMETRO del círculo es 4m. Su radio (la mitad) es 2m. El área del círculo es π × r².",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500" }, "Radio (r) = 2m"), /*#__PURE__*/
      React.createElement("p", null, "F\xF3rmula: \xC1rea = \u03C0 \xD7 2\xB2"), /*#__PURE__*/
      React.createElement("p", { className: "font-bold text-purple-600" }, "\xC1rea = 3.14 \xD7 4")
      ),

      resultado: "Aprox. 12.56 m²."
    }];


    const ejemplosEstrategia3 = [
    {
      titulo: "Llenar la piscina",
      situacion: "Una piscina tiene 10m de largo, 5m de ancho y 2m de profundidad. Si el agua cuesta $1.000 por metro cúbico (m³), ¿cuánto cuesta llenarla?",
      analisis: "Para saber cuánta agua cabe, calculamos el volumen (Largo × Ancho × Profundidad). Luego multiplicamos el volumen total por el precio unitario.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Volumen = 10 \xD7 5 \xD7 2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-pink-600" }, "Volumen = 100 m\xB3"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 border-t border-slate-100 pt-1" }, "Costo = 100 \xD7 $1.000")
      ),

      resultado: "Cuesta $100.000 llenarla."
    },
    {
      titulo: "El tanque cilíndrico",
      situacion: "Un tanque de agua en forma de cilindro tiene un radio base de 2m y una altura de 3m. ¿Cuál es su capacidad en volumen? (Usa π ≈ 3)",
      analisis: "Fórmula del cilindro: Volumen = (Área de la base circular) × (Altura). Primero calculamos el área de la base (π × r²) y luego multiplicamos por la altura (h).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-slate-500" }, "Base = 3 \xD7 (2\xB2) = 3 \xD7 4 = 12 m\xB2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-slate-500" }, "Vol = \xC1rea Base \xD7 Altura"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-pink-600" }, "Vol = 12 m\xB2 \xD7 3 m")
      ),

      resultado: "Volumen de 36 m³ (aprox)."
    },
    {
      titulo: "Empacando cubitos",
      situacion: "Tienes una caja grande que mide 10cm x 10cm x 10cm. Quieres llenarla con dados pequeños que miden 1cm de lado. ¿Cuántos dados caben en la caja?",
      analisis: "Calculamos el volumen de la caja grande y lo dividimos entre el volumen de un dado pequeño para saber cuántos caben exactamente.",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "Caja = 10 \xD7 10 \xD7 10 = 1000 cm\xB3"), /*#__PURE__*/
      React.createElement("p", null, "Dado = 1 \xD7 1 \xD7 1 = 1 cm\xB3"), /*#__PURE__*/
      React.createElement("p", { className: "pt-2 mt-2 border-t border-slate-100 font-bold text-pink-600" }, "Divisi\xF3n: 1000 \xF7 1")
      ),

      resultado: "Caben 1.000 dados exactos."
    }];


    const ejemplosEstrategia4 = [
    {
      titulo: "La escala del mapa",
      situacion: "En un mapa con escala 1:100.000, la distancia entre dos ciudades es de 5 cm. ¿Cuál es la distancia real en kilómetros?",
      analisis: "Escala 1:100.000 significa que 1 cm en el papel son 100.000 cm en la realidad. Primero multiplicamos, luego convertimos de centímetros a kilómetros (1 km = 100.000 cm).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Real = 5 cm \xD7 100.000 = 500.000 cm"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-indigo-600" }, "A km: 500.000 \xF7 100.000")
      ),

      resultado: "Distancia de 5 kilómetros."
    },
    {
      titulo: "Duplicando el terreno (Área)",
      situacion: "Un granjero tiene un terreno cuadrado de 10m de lado (100 m²). Si compra el terreno vecino y ahora su nuevo terreno es un cuadrado de 20m de lado, ¿se duplicó su área?",
      analisis: "¡Trampa visual! Si multiplicas los lados por 2, el área NO se multiplica por 2. El área se multiplica por el factor de escala al cuadrado (K²). Aquí K=2, así que el área crece por 2² (4).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "\xC1rea Original: 10 \xD7 10 = 100 m\xB2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "\xC1rea Nueva: 20 \xD7 20 = 400 m\xB2"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-indigo-600 font-bold border-t border-slate-100 pt-1" }, "400 es CUATRO veces 100.")
      ),

      resultado: "Falso. El área se cuadruplicó."
    },
    {
      titulo: "La caja de regalo (Volumen)",
      situacion: "Una caja pequeña guarda 1 litro de jugo. Si construyes una caja gigante donde cada uno de sus lados es el TRIPLE de largo (x3), ¿cuántos litros le cabrán?",
      analisis: "Igual que el área, pero en 3D. Si la escala lineal (los lados) crece por K=3, el volumen crece por ese factor elevado al cubo (K³).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-1.5 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500" }, "Factor de escala (K) = 3"), /*#__PURE__*/
      React.createElement("p", { className: "font-bold text-indigo-600" }, "Escala Volumen = 3\xB3 = 3\xD73\xD73 = 27"), /*#__PURE__*/
      React.createElement("p", { className: "pt-1 mt-1 border-t border-slate-100" }, "1 Litro \xD7 27")
      ),

      resultado: "Le cabrán 27 litros de jugo."
    }];


    // Configuración de temas para el diseño unificado
    const themeConfig = {
      fuchsia: { bgLight: 'bg-fuchsia-50/50', text: 'text-fuchsia-600', badgeBg: 'bg-fuchsia-100', badgeText: 'text-fuchsia-700', grad: 'from-fuchsia-400 to-fuchsia-600' },
      purple: { bgLight: 'bg-purple-50/50', text: 'text-purple-600', badgeBg: 'bg-purple-100', badgeText: 'text-purple-700', grad: 'from-purple-400 to-purple-600' },
      pink: { bgLight: 'bg-pink-50/50', text: 'text-pink-600', badgeBg: 'bg-pink-100', badgeText: 'text-pink-700', grad: 'from-pink-400 to-pink-600' },
      indigo: { bgLight: 'bg-indigo-50/50', text: 'text-indigo-600', badgeBg: 'bg-indigo-100', badgeText: 'text-indigo-700', grad: 'from-indigo-400 to-indigo-600' }
    };

    // Función Helper para renderizar los Casos Didácticos
    const renderCasos = (casosArray, colorTheme) => {
      const theme = themeConfig[colorTheme];

      return (/*#__PURE__*/
        React.createElement("div", { className: "space-y-8 mt-8" },
        casosArray.map((caso, index) => /*#__PURE__*/
        React.createElement("div", { key: index, className: "relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" }, /*#__PURE__*/
        React.createElement("div", { className: `absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}` }), /*#__PURE__*/
        React.createElement("div", { className: "p-6 md:px-8 md:pt-8 md:pb-6 border-b border-slate-100 bg-slate-50/30" }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-3" }, /*#__PURE__*/
        React.createElement("div", { className: `p-2 ${theme.badgeBg} rounded-xl` }, /*#__PURE__*/
        React.createElement(Lightbulb, { className: `w-5 h-5 ${theme.text}` })
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
        React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Analizar")
        ), /*#__PURE__*/
        React.createElement("div", { className: "text-sm text-slate-600 leading-relaxed" }, caso.analisis)
        ), /*#__PURE__*/
        React.createElement("div", { className: "p-6 hover:bg-slate-50/50 transition-colors" }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /*#__PURE__*/
        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "2"), /*#__PURE__*/
        React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Operar")
        ), /*#__PURE__*/
        React.createElement("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-inner" },
        caso.calculo
        )
        ), /*#__PURE__*/
        React.createElement("div", { className: `p-6 ${theme.bgLight} flex flex-col justify-center` }, /*#__PURE__*/
        React.createElement("div", { className: "flex items-center gap-3 mb-4" }, /*#__PURE__*/
        React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm` }, "3"), /*#__PURE__*/
        React.createElement("h5", { className: `font-bold ${theme.text} text-sm uppercase tracking-wide` }, "Conclusi\xF3n")
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
      type: "Pitágoras",
      question: "En un triángulo rectángulo, un cateto mide 6 cm y el otro cateto mide 8 cm. ¿Cuánto mide la hipotenusa (diagonal)?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-40 h-32 overflow-visible", viewBox: "0 0 100 80" }, /*#__PURE__*/
      React.createElement("polygon", { points: "10,70 90,70 10,10", fill: "#fdf4ff", stroke: "#d946ef", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("polyline", { points: "10,60 20,60 20,70", fill: "none", stroke: "#d946ef", strokeWidth: "1" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "85", fontSize: "10", fill: "#a21caf", textAnchor: "middle", fontWeight: "bold" }, "8 cm"), /*#__PURE__*/
      React.createElement("text", { x: "-5", y: "45", fontSize: "10", fill: "#a21caf", textAnchor: "middle", transform: "rotate(-90 -5,45)", fontWeight: "bold" }, "6 cm"), /*#__PURE__*/
      React.createElement("text", { x: "55", y: "35", fontSize: "12", fill: "#c026d3", textAnchor: "middle", fontWeight: "bold" }, "?")
      )
      ),

      options: ["10 cm", "14 cm", "12 cm", "48 cm"],
      correct: 0,
      feedback: "¡Excelente! Fórmula c² = 6² + 8². Es decir, c² = 36 + 64 = 100. La raíz cuadrada de 100 es 10."
    },
    {
      type: "Área Sombreada",
      question: "Se recorta un círculo de 2m de radio dentro de un cuadrado de 4m de lado. ¿Cuál es la expresión que representa el área sobrante (sombreada) del cuadrado?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-32 h-32 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("rect", { x: "10", y: "10", width: "80", height: "80", fill: "#e879f9" }), /*#__PURE__*/
      React.createElement("circle", { cx: "50", cy: "50", r: "40", fill: "#ffffff", stroke: "#c026d3", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "50", y1: "50", x2: "90", y2: "50", stroke: "#c026d3", strokeWidth: "2", strokeDasharray: "2 2" }), /*#__PURE__*/
      React.createElement("text", { x: "70", y: "45", fontSize: "8", fill: "#a21caf", textAnchor: "middle", fontWeight: "bold" }, "r=2m"), /*#__PURE__*/
      React.createElement("line", { x1: "10", y1: "95", x2: "90", y2: "95", stroke: "#a21caf", strokeWidth: "1" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "108", fontSize: "10", fill: "#a21caf", textAnchor: "middle", fontWeight: "bold" }, "4m")
      )
      ),

      options: ["16 + 4π", "16 - 2π", "16 - 4π", "8 - 4π"],
      correct: 2,
      feedback: "¡Cálculo maestro! El área del cuadrado es L×L = 4×4 = 16. El área del círculo es π×r² = π×(2²) = 4π. Al restar el hoyo, queda 16 - 4π."
    },
    {
      type: "Perímetros",
      question: "Deseas poner rodapié alrededor de una habitación en forma de 'L'. Tienes todas las medidas exteriores menos dos interiores. Sin embargo, ¿puedes deducir el perímetro total?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-40 h-40 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("path", { d: "M 20 80 L 80 80 L 80 40 L 50 40 L 50 20 L 20 20 Z", fill: "#f3e8ff", stroke: "#a855f7", strokeWidth: "3" }), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "95", fontSize: "10", fill: "#7e22ce", textAnchor: "middle", fontWeight: "bold" }, "6m"), /*#__PURE__*/
      React.createElement("text", { x: "5", y: "50", fontSize: "10", fill: "#7e22ce", textAnchor: "middle", transform: "rotate(-90 5,50)", fontWeight: "bold" }, "6m"), /*#__PURE__*/
      React.createElement("text", { x: "65", y: "32", fontSize: "14", fill: "#d946ef", textAnchor: "middle", fontWeight: "bold" }, "?")
      )
      ),

      options: [
      "No se puede saber sin medir las esquinas interiores.",
      "Es igual al perímetro de un cuadrado completo de 6x6 (24m).",
      "El perímetro es 12m.",
      "El perímetro es 18m."],

      correct: 1,
      feedback: "¡Ojo clínico! Al mover visualmente los dos bordes interiores (la esquina entrante) hacia afuera, completan el cuadrado de 6x6. El perímetro es 6+6+6+6 = 24m."
    },
    {
      type: "Volumen Básico",
      question: "Una piscina rectangular mide 10m de largo, 4m de ancho y tiene una profundidad constante de 2m. ¿Cuál es su capacidad total en metros cúbicos (m³)?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex items-center justify-center p-4 bg-purple-50 rounded-xl border border-purple-100" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center" }, /*#__PURE__*/
      React.createElement(Layers, { className: "w-12 h-12 text-purple-400 mb-2" }), /*#__PURE__*/
      React.createElement("div", { className: "flex gap-4 font-mono font-bold text-purple-800" }, /*#__PURE__*/
      React.createElement("span", null, "L: 10m"), " ", /*#__PURE__*/React.createElement("span", null, "A: 4m"), " ", /*#__PURE__*/React.createElement("span", null, "P: 2m")
      )
      )
      ),

      options: ["16 m³", "40 m³", "80 m³", "100 m³"],
      correct: 2,
      feedback: "¡Perfecto! El volumen de un prisma es (Área Base) × (Profundidad). La base es 10×4=40. Y 40 × 2 = 80 m³."
    },
    {
      type: "Escalas Avanzadas",
      question: "Un arquitecto construye una maqueta cuadrada. Si él decide TRIPLICAR la medida de los lados (x3), ¿qué le sucederá al ÁREA de la nueva maqueta?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement(Square, { className: "w-8 h-8 text-slate-400 mx-auto mb-1" }), /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-slate-500 uppercase" }, "Original (K=1)")
      ), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-6 h-6 text-fuchsia-500" }), /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement(Square, { className: "w-16 h-16 text-fuchsia-500 mx-auto mb-1" }), /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase" }, "Agrandado (K=3)")
      )
      )
      ),

      options: [
      "El área será 3 veces mayor.",
      "El área será 6 veces mayor.",
      "El área será 9 veces mayor.",
      "El área será 27 veces mayor."],

      correct: 2,
      feedback: "¡Excelente! Regla geométrica: Si el factor de escala lineal es K, el factor de área es K². Como triplicó el lado (K=3), el área crece al cuadrado (3² = 9)."
    },
    {
      type: "Capacidad",
      question: "1 litro de agua equivale a 1.000 centímetros cúbicos (cm³). Si tienes una jarra que mide 10cm x 10cm x 20cm, ¿cuántos litros le caben?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement(Box, { className: "w-10 h-10 text-fuchsia-500 mx-auto mb-2" }), /*#__PURE__*/
      React.createElement("span", { className: "text-xs font-bold text-slate-600 block" }, "Jarra: 10x10x20 cm")
      )
      ),

      options: ["1 Litro", "2 Litros", "20 Litros", "2.000 Litros"],
      correct: 1,
      feedback: "¡Muy bien analizado! El volumen de la jarra es 10 × 10 × 20 = 2.000 cm³. Sabiendo que 1.000 cm³ es 1 litro, al dividir 2000/1000 obtenemos 2 Litros exactos."
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
      if (percentage === 1) return { title: "¡Arquitecto Visual!", desc: "Dominas por completo el espacio 2D y 3D. Tienes una intuición espacial privilegiada para estas pruebas." };
      if (percentage >= 0.6) return { title: "¡Buena Visión!", desc: "Entiendes la geometría básica, pero las escalas y los volúmenes te pueden hacer dudar. Repasa la teoría de factores de crecimiento." };
      return { title: "¡Afina tu Visión 3D!", desc: "La geometría requiere imaginación y memoria para fórmulas clave. Vuelve a los ejemplos teóricos." };
    };

    const resultData = getResultMessage();

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-fuchsia-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/80 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(217,70,239,0.1)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#150A15] p-8 md:p-14 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-fuchsia-500/20 blur-[120px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[35rem] h-[35rem] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" }), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(Box, { className: "w-5 h-5 text-fuchsia-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-fuchsia-300 font-bold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia 5")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-6xl font-black mb-5 text-white tracking-tight leading-tight" }, "Pensamiento ", /*#__PURE__*/
      React.createElement("br", { className: "hidden md:block" }), /*#__PURE__*/React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400" }, "Geom\xE9trico")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light max-w-xl" }, "Eval\xFAa tu capacidad espacial y m\xE9trica: domina \xE1reas, vol\xFAmenes, el Teorema de Pit\xE1goras y las leyes matem\xE1ticas de escalabilidad visual."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-24 h-24 bg-gradient-to-br from-fuchsia-500 to-purple-600 rounded-[2rem] shadow-[0_0_40px_rgba(217,70,239,0.3)] transform rotate-6 border border-white/10" }, /*#__PURE__*/
      React.createElement(Compass, { className: "w-12 h-12 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-12 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-100/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: Box, label: 'El Espacio y la Forma' },
      { id: 'teoria', icon: Ruler, label: 'Leyes Geométricas' },
      { id: 'practica', icon: Brain, label: 'Simulador Espacial' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-fuchsia-700 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 scale-95'}` }, /*#__PURE__*/


      React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? 'text-fuchsia-500' : ''}` }),
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
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Geometr\xEDa para la prueba"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "Esta secci\xF3n busca evaluar si puedes ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-fuchsia-700" }, "imaginar formas en tu cabeza"), " y convertirlas en medidas reales. No es solo aplicar f\xF3rmulas, es \"ver\" la soluci\xF3n en un plano."
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-fuchsia-50/30 backdrop-blur-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-3xl p-8 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-fuchsia-400 to-purple-500 rounded-l-3xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-6 text-lg" }, "Los 4 pilares de la Geometr\xEDa:"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-5" },
      [
      "Teorema de Pitágoras (Triángulos rectángulos).",
      "Dimensiones 2D (Áreas, contornos y perímetros).",
      "Dimensiones 3D (Volúmenes y capacidad).",
      "Escalabilidad y Transformación (Lectura de mapas)."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-4 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-0.5 bg-fuchsia-100 p-1.5 rounded-lg shrink-0 group-hover:bg-fuchsia-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(CheckCircle, { className: "w-3.5 h-3.5 text-fuchsia-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-medium text-[15px]" }, text)
      )
      )
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-fuchsia-50/50 rounded-[2.5rem] p-10 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-80 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/

      React.createElement("div", {
        className: "relative w-56 h-56 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(60deg) rotateZ(-20deg)', transformStyle: 'preserve-3d' } }, /*#__PURE__*/

      React.createElement("div", { className: "absolute inset-0 bg-white/80 backdrop-blur-md border border-fuchsia-200 rounded-[2rem] shadow-[0_30px_50px_rgba(217,70,239,0.15)]", style: { transform: 'translateZ(-1px)' } }), /*#__PURE__*/
      React.createElement("div", { className: "absolute bottom-8 left-8 w-20 h-20 bg-gradient-to-tr from-fuchsia-600 to-pink-400 rounded-xl shadow-xl flex items-center justify-center", style: { transform: 'translateZ(1px)' } }, /*#__PURE__*/React.createElement(Box, { className: "w-10 h-10 text-white/90" })), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-8 right-10 w-20 h-20 bg-gradient-to-tr from-purple-600 to-indigo-400 rounded-full shadow-xl flex items-center justify-center", style: { transform: 'translateZ(1px)' } }, /*#__PURE__*/React.createElement(Triangle, { className: "w-10 h-10 text-white/90" })), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.1)] border-2 border-fuchsia-300", style: { transform: 'translateZ(80px)' } }, /*#__PURE__*/
      React.createElement(Ruler, { className: "w-10 h-10 text-fuchsia-600" })
      )
      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-[15px] text-slate-500 font-medium italic mt-6 text-center max-w-sm" }, "\"La geometr\xEDa es el arte de pensar bien, dibujando mal.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-8 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3" },
      "Ver Teor\xEDa y Ejemplos ", /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center max-w-3xl mx-auto mb-12" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight mb-4" }, "Leyes y F\xF3rmulas Geom\xE9tricas"), /*#__PURE__*/
      React.createElement("div", { className: "w-24 h-1.5 bg-gradient-to-r from-fuchsia-400 to-purple-500 mx-auto rounded-full mb-6" })
      ), /*#__PURE__*/


      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 border-b-2 border-slate-100 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-fuchsia-100 rounded-xl shadow-sm border border-fuchsia-200" }, /*#__PURE__*/
      React.createElement(Triangle, { className: "w-6 h-6 text-fuchsia-600" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800" }, "1. Teorema de Pit\xE1goras")
      ),
      renderCasos(ejemplosEstrategia1, 'fuchsia')
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-6 pt-10" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 border-b-2 border-slate-100 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-purple-100 rounded-xl shadow-sm border border-purple-200" }, /*#__PURE__*/
      React.createElement(Square, { className: "w-6 h-6 text-purple-600" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800" }, "2. \xC1reas y Per\xEDmetros (2D)")
      ),
      renderCasos(ejemplosEstrategia2, 'purple')
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-6 pt-10" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 border-b-2 border-slate-100 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-pink-100 rounded-xl shadow-sm border border-pink-200" }, /*#__PURE__*/
      React.createElement(Layers, { className: "w-6 h-6 text-pink-600" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800" }, "3. Vol\xFAmenes y Capacidad (3D)")
      ),
      renderCasos(ejemplosEstrategia3, 'pink')
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-6 pt-10" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4 border-b-2 border-slate-100 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-indigo-100 rounded-xl shadow-sm border border-indigo-200" }, /*#__PURE__*/
      React.createElement(Maximize, { className: "w-6 h-6 text-indigo-600" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800" }, "4. Escalas y Transformaciones")
      ),
      renderCasos(ejemplosEstrategia4, 'indigo')
      )
      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-fuchsia-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }), /*#__PURE__*/
      React.createElement("div", { className: "mb-8 flex justify-between items-end" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Desaf\xEDo Geom\xE9trico: ", /*#__PURE__*/React.createElement("span", { className: "text-fuchsia-500" }, questions[currentQuestion].type)), /*#__PURE__*/
      React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
      ), /*#__PURE__*/
      React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-gradient-to-r from-fuchsia-400 to-purple-500 h-full transition-all duration-500 ease-out", style: { width: `${(currentQuestion + 1) / questions.length * 100}%` } })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" }, questions[currentQuestion].question),
      questions[currentQuestion].visual && /*#__PURE__*/
      React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner" }, questions[currentQuestion].visual), /*#__PURE__*/

      React.createElement("div", { className: "space-y-4 mb-10" },
      questions[currentQuestion].options.map((option, index) => /*#__PURE__*/
      React.createElement("button", { key: index, onClick: () => handleAnswer(index), disabled: hasAnswered, className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${hasAnswered ? index === questions[currentQuestion].correct ? 'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]' : index === selectedAnswer ? 'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80' : 'bg-white border-slate-100 text-slate-400 opacity-50' : 'bg-white border-slate-100 hover:border-fuchsia-300 hover:shadow-[0_8px_30px_rgba(217,70,239,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-4" }, /*#__PURE__*/
      React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${hasAnswered ? index === questions[currentQuestion].correct ? 'border-emerald-500 bg-emerald-500 text-white' : index === selectedAnswer ? 'border-rose-400 bg-rose-400 text-white' : 'border-slate-200' : 'border-slate-200'}` },
      hasAnswered && index === questions[currentQuestion].correct && /*#__PURE__*/React.createElement(CheckCircle, { className: "w-5 h-5" })
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-medium text-[15px]" }, option)
      )
      )
      )
      ),
      hasAnswered && /*#__PURE__*/
      React.createElement("div", { className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${selectedAnswer === questions[currentQuestion].correct ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' : 'bg-rose-50 border border-rose-100 text-rose-800'}` }, /*#__PURE__*/
      React.createElement("p", { className: "font-semibold text-sm md:text-base" }, questions[currentQuestion].feedback)
      ), /*#__PURE__*/

      React.createElement("div", { className: "flex justify-end" }, /*#__PURE__*/
      React.createElement("button", { onClick: nextQuestion, disabled: !hasAnswered, className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${hasAnswered ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}` },
      currentQuestion === questions.length - 1 ? 'Ver Resultado Final' : 'Siguiente Simulación', " ", /*#__PURE__*/React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(217,70,239,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-indigo-500" }), /*#__PURE__*/
      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-fuchsia-100 to-purple-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Award, { className: "w-14 h-14 text-fuchsia-600" })
      ), /*#__PURE__*/
      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" }, resultData.desc), /*#__PURE__*/
      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600 mb-2" }, score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Puntaje Geom\xE9trico")
      ), /*#__PURE__*/
      React.createElement("button", { onClick: resetQuiz, className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto" }, /*#__PURE__*/
      React.createElement(RefreshCw, { className: "w-5 h-5" }), " Simular de nuevo"
      )
      )

      )

      )
      )
      ));

  }

  window.renderMathModule5 = (containerId) => {
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
      try {
        if (!window._reactRoots) window._reactRoots = {};
        if (!window._reactRoots[containerId]) {
          window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
        }
        window._reactRoots[containerId].render(React.createElement(ModuloGeometria));
        console.log("mathModule5.js: Renderizado exitoso.");
      } catch (e) {
        console.error("mathModule5.js Error:", e);
        container.innerHTML = `<div class="p-10 text-center" style="color: #ef4444"><h2 class="text-xl font-bold">Error: ${e.message}</h2></div>`;
      }
    } else {
      console.warn("mathModule5.js: No se encontró ReactDOM o el contenedor.");
    }
  };
})();