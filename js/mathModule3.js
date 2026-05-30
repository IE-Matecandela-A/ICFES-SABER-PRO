(function () {
  console.log("mathModule3.js: Iniciando carga...");
  const React = window.React;
  const { useState, useEffect, useMemo, useCallback } = React;

  // Standard Icon component using Material Icons (matches Module 1 style)
  const Icon = ({ name, className = "", style = {} }) =>
  React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
  }, name);


  // Component wrappers for the icons used in the module
  const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
  const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
  const ArrowDown = (props) => React.createElement(Icon, { name: "arrow_downward", ...props });
  const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
  const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
  const Search = (props) => React.createElement(Icon, { name: "search", ...props });
  const Scale = (props) => React.createElement(Icon, { name: "balance", ...props });
  const ShieldCheck = (props) => React.createElement(Icon, { name: "verified_user", ...props });
  const XCircle = (props) => React.createElement(Icon, { name: "cancel", ...props });
  const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
  const AlertTriangle = (props) => React.createElement(Icon, { name: "warning", ...props });
  const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });
  const MessageSquare = (props) => React.createElement(Icon, { name: "forum", ...props });
  const TrendingUp = (props) => React.createElement(Icon, { name: "trending_up", ...props });
  const EyeOff = (props) => React.createElement(Icon, { name: "visibility_off", ...props });
  const BookOpen = (props) => React.createElement(Icon, { name: "auto_stories", ...props });
  const Calculator = (props) => React.createElement(Icon, { name: "calculate", ...props });
  const Shapes = (props) => React.createElement(Icon, { name: "category", ...props });
  const Sigma = (props) => React.createElement(Icon, { name: "functions", ...props });
  const Percent = (props) => React.createElement(Icon, { name: "percent", ...props });
  const Dices = (props) => React.createElement(Icon, { name: "casino", ...props });

  function ModuloArgumentacion() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: 15 CASOS DIDÃCTICOS (TEORÃA)
    // ==========================================
    const ejemplosEstrategia1 = [
    {
      titulo: "El despeje invertido",
      premisa: "Pregunta: ¿En qué paso se equivocó al resolver 2x + 8 = 20? / Paso 1: 2x = 20 + 8 / Paso 2: 2x = 28 / Paso 3: x = 14.",
      comprender: "El estudiante intenta despejar 'x' moviendo los términos al otro lado del signo igual (=).",
      rastrear: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "Ecuaci\xF3n: ", /*#__PURE__*/React.createElement("strong", null, "2x + 8 = 20")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0 mt-0.5" }), "El +8 debe pasar con la operaci\xF3n contraria (restando)."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "El estudiante lo pas\xF3 sumando en el Paso 1.")
      ),

      esFalso: true,
      veredicto: "Error detectado en el Paso 1. Todo lo demás es inválido."
    },
    {
      titulo: "La trampa de la Jerarquía (PEMDAS)",
      premisa: "Un estudiante calcula el área total resolviendo la expresión: 5 + 3 × 2. Su resultado final es 16.",
      comprender: "El estudiante realiza operaciones aritméticas combinadas (suma y multiplicación).",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "Verificamos la jerarqu\xEDa (PEMDAS): Primero multiplicaciones, luego sumas."), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-orange-200 font-mono text-[10px]" }, /*#__PURE__*/
      React.createElement("div", null, "Lo que hizo: (5 + 3) = 8 \u2192 8 \xD7 2 = 16 ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "\u2717")), /*#__PURE__*/
      React.createElement("div", { className: "mt-1" }, "Lo correcto: (3 \xD7 2) = 6 \u2192 5 + 6 = 11 ", /*#__PURE__*/React.createElement("strong", { className: "text-emerald-500" }, "\u2713"))
      )
      ),

      esFalso: true,
      veredicto: "Procedimiento incorrecto. No respetó la jerarquía de las operaciones."
    },
    {
      titulo: "El signo multiplicador oculto",
      premisa: "Al resolver -4x = 12, el alumno concluye que el primer paso es: x = 12 + 4.",
      comprender: "El alumno ve un número negativo (-4) junto a una 'x' e intenta despejarlo.",
      rastrear: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0 mt-0.5" }), "El -4 no est\xE1 restando a la 'x', la est\xE1 ", /*#__PURE__*/React.createElement("strong", null, "multiplicando"), "."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "Para despejar, debe pasar a dividir conservando su signo negativo."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-mono font-bold" }, "Correcto: x = 12 / -4")
      ),

      esFalso: true,
      veredicto: "Error conceptual. Confundió un coeficiente negativo con una resta."
    }];


    const ejemplosEstrategia2 = [
    {
      titulo: "El mito del crecimiento",
      premisa: "Afirmación: Si multiplicas un número por cualquier otro, el resultado siempre será más grande que el número original.",
      comprender: "Aseguran que la regla (X * Y > X) se cumple para ABSOLUTAMENTE TODOS los números del universo.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "Buscamos romper la regla probando casos \"extremos\" (cero o decimales):"), /*#__PURE__*/
      React.createElement("ul", { className: "font-mono bg-white p-2 rounded border border-orange-200" }, /*#__PURE__*/
      React.createElement("li", null, "5 \xD7 2 = 10 (Se cumple)"), /*#__PURE__*/
      React.createElement("li", { className: "text-rose-600 font-bold mt-1" }, "5 \xD7 0.5 = 2.5 (\xA1Fall\xF3! 2.5 no es mayor a 5)"), /*#__PURE__*/
      React.createElement("li", { className: "text-rose-600 font-bold" }, "5 \xD7 0 = 0 (\xA1Fall\xF3!)")
      )
      ),

      esFalso: true,
      veredicto: "Basta un solo contraejemplo (multiplicar por decimales menores a 1) para destruir la palabra 'siempre'."
    },
    {
      titulo: "Geometría Absoluta",
      premisa: "Afirmación: Todos los cuadriláteros que tienen sus cuatro lados exactamente iguales, son obligatoriamente cuadrados.",
      comprender: "Establece que Lados Iguales = Cuadrado, sin excepciones.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "\xBFExiste alguna figura de 4 lados iguales que NO sea un cuadrado?"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-3 bg-white p-2 rounded border border-orange-200 mt-2" }, /*#__PURE__*/
      React.createElement("div", { className: "w-6 h-6 border-2 border-orange-500 rotate-45 transform skew-x-12 ml-2" }), /*#__PURE__*/
      React.createElement("span", null, "El ", /*#__PURE__*/React.createElement("strong", null, "Rombo"), " tiene 4 lados iguales, pero sus \xE1ngulos no son de 90\xC2\xB0.")
      )
      ),

      esFalso: true,
      veredicto: "El Rombo es el contraejemplo perfecto. Refuta la afirmación geométrica."
    },
    {
      titulo: "Sumas Engañosas",
      premisa: "Afirmación: Sumar dos números distintos siempre da como resultado un número mayor que ambos.",
      comprender: "Garantiza que la adición (X + Y = Z) siempre hace que Z > X y Z > Y.",
      rastrear: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Prueba 1: 5 + 3 = 8 (8 > 5 y 8 > 3). Funciona."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 font-bold text-rose-600" }, "Contraejemplo: 5 + (-2) = 3."), /*#__PURE__*/
      React.createElement("li", { className: "text-slate-600 font-sans" }, "El resultado (3) NO es mayor que el n\xFAmero original (5).")
      ),

      esFalso: true,
      veredicto: "Falso. La regla se rompe al sumar números negativos."
    }];


    const ejemplosEstrategia3 = [
    {
      titulo: "Bases Diferentes",
      premisa: "Mi negocio creció un 100% y el hipermercado creció un 50%. Por tanto, mi negocio ganó más dinero este mes.",
      comprender: "Asume que Mayor % Relativo = Mayor Cantidad Absoluta de Dinero.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("p", null, "Simulamos con cantidades reales (Bases):"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-orange-200 font-mono" }, /*#__PURE__*/
      React.createElement("div", null, "Negocio: 100% de $10 = ", /*#__PURE__*/React.createElement("strong", { className: "text-orange-600" }, "+$10")), /*#__PURE__*/
      React.createElement("div", { className: "mt-1" }, "Hiper: 50% de $1000 = ", /*#__PURE__*/React.createElement("strong", { className: "text-orange-600" }, "+$500"))
      )
      ),

      esFalso: true,
      veredicto: "No se pueden comparar porcentajes si se calculan sobre totales (bases) distintos."
    },
    {
      titulo: "El Espejismo del Descuento",
      premisa: "Este abrigo tiene un 50% de descuento. Al llegar a caja, aplican un 50% extra por usar tarjeta. ¡El abrigo sale GRATIS (100% descuento)!",
      comprender: "El cliente suma los porcentajes (50 + 50 = 100) directamente.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "Aplicamos el descuento paso a paso sobre un precio base de $100:"), /*#__PURE__*/
      React.createElement("ul", { className: "bg-white p-2 rounded border border-orange-200 font-mono space-y-1" }, /*#__PURE__*/
      React.createElement("li", null, "1er Dcto: $100 - 50% = $50"), /*#__PURE__*/
      React.createElement("li", null, "2do Dcto: Aplica sobre $50. El 50% de $50 es $25."), /*#__PURE__*/
      React.createElement("li", null, "Precio Final: $25 (Pagaste el 25%, no gratis).")
      )
      ),

      esFalso: true,
      veredicto: "Falso. Los descuentos sucesivos NO se suman, se aplican uno tras el remanente del otro."
    },
    {
      titulo: "Recuperar la Inversión",
      premisa: "Ayer perdí el 50% del valor de mis acciones. Si hoy la bolsa sube un 50%, recuperaré todo mi dinero exacto.",
      comprender: "Cree que bajar X% y subir X% te regresa al punto de partida.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "Simulamos con $100 de inversi\xF3n inicial:"), /*#__PURE__*/
      React.createElement("ul", { className: "bg-white p-2 rounded border border-orange-200 font-mono space-y-1" }, /*#__PURE__*/
      React.createElement("li", null, "Ayer (Pierde 50%): Me quedan $50."), /*#__PURE__*/
      React.createElement("li", null, "Hoy (Sube 50%): El 50% de $50 son $25."), /*#__PURE__*/
      React.createElement("li", null, "Total: $50 + $25 = $75. (Perd\xED $25 al final).")
      )
      ),

      esFalso: true,
      veredicto: "Para recuperar una pérdida del 50%, ¡necesitas un crecimiento del 100%!"
    }];


    const ejemplosEstrategia4 = [
    {
      titulo: "Helados y Ahogamientos",
      premisa: "Un estudio muestra que los meses donde se venden más helados, hay más ahogados en la playa. Conclusión: Comer helados causa ahogamientos.",
      comprender: "Al ver dos gráficas subir juntas (Correlación), se asume que una provoca la otra (Causalidad).",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("p", null, "Buscamos una tercera variable (Variable de Confusi\xF3n) que afecte a ambas:"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-orange-200 font-bold text-center text-orange-600" }, "EL VERANO / CALOR"

      ), /*#__PURE__*/
      React.createElement("p", { className: "mt-1" }, "El calor hace que la gente compre helados, y tambi\xE9n hace que vayan a nadar (donde ocurren accidentes).")
      ),

      esFalso: true,
      veredicto: "Falsa Causalidad. Las variables están correlacionadas por una tercera causa común."
    },
    {
      titulo: "Tutorías y Malas Notas",
      premisa: "Los datos de un colegio indican que los estudiantes que asisten a tutorías privadas reprueban más exámenes. Conclusión: ¡Las tutorías empeoran el rendimiento!",
      comprender: "Asume que la tutoría (A) causa la mala nota (B).",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("p", null, "Analizamos el sentido de la temporalidad (Causalidad Inversa):"), /*#__PURE__*/
      React.createElement("ul", { className: "bg-white p-2 rounded border border-orange-200 space-y-1" }, /*#__PURE__*/
      React.createElement("li", null, "\xBFLa tutor\xEDa baj\xF3 la nota? NO."), /*#__PURE__*/
      React.createElement("li", null, "\xBFTener malas notas provoc\xF3 que contrataran la tutor\xEDa? S\xC3\x8D.")
      )
      ),

      esFalso: true,
      veredicto: "Falso. Confunde la causa con el efecto. Estudiaban porque ya iban mal, no al revés."
    },
    {
      titulo: "Hospitales y Mortalidad",
      premisa: "Las estadísticas muestran que los hospitales más grandes y costosos tienen la tasa más alta de pacientes fallecidos. Conclusión: Tienen peores médicos.",
      comprender: "Se asocia 'Hospital Grande' = 'Mayor Mortalidad = Peor Medicina'.",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("p", null, "Aplicamos l\xF3gica contextual a la variable de entrada:"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-orange-200" }, "Los hospitales grandes y equipados son los \xFAnicos que reciben los casos de trauma extremo y urgencias fatales que los hospitales peque\xF1os rechazan."

      )
      ),

      esFalso: true,
      veredicto: "Falso sesgo de selección. Atienden más muertes porque reciben casos mucho más graves."
    }];


    const ejemplosEstrategia5 = [
    {
      titulo: "El Triángulo Engañoso",
      premisa: "La imagen muestra un triángulo y el estudiante multiplicó el Lado Izquierdo por la Base para hallar el área, porque la esquina 'parece' recta.",
      comprender: "El estudiante asumió que el lado inclinado es la 'Altura' matemática de la figura.",
      rastrear: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "Revisamos el enunciado y la gr\xE1fica."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "No hay ning\xFAn cuadrito de 90\xC2\xB0 en la esquina."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "No dice 'tri\xE1ngulo rect\xE1ngulo' en el texto.")
      ),

      esFalso: true,
      veredicto: "Suposición Inválida. En geometría del ICFES, nunca confíes en el dibujo sin datos explícitos."
    },
    {
      titulo: "El Eje Truncado (Gráficas)",
      premisa: "En la gráfica de barras, la barra del 2023 es el doble de alta que la del 2022. Por tanto, las ventas se duplicaron exactamente este año.",
      comprender: "Concluye basándose EXCLUSIVAMENTE en el impacto visual (proporción de la tinta impresa).",
      rastrear: /*#__PURE__*/
      React.createElement("div", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("p", null, "Verificamos el Eje Y de la gr\xE1fica:"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-orange-200 font-mono" }, "Eje Y empieza en ", /*#__PURE__*/
      React.createElement("strong", null, "1.000"), " (truncado).", /*#__PURE__*/React.createElement("br", null), "- Barra 2022 llega a 1.010.", /*#__PURE__*/
      React.createElement("br", null), "- Barra 2023 llega a 1.020."

      ), /*#__PURE__*/
      React.createElement("p", null, "1.020 NO es el doble de 1.010, aunque la barra dibujada sobre el eje 1000 s\xED mida el doble de cent\xEDmetros.")
      ),

      esFalso: true,
      veredicto: "Trampa visual. Supuso erróneamente que el Eje Y empezaba en Cero (0)."
    },
    {
      titulo: "Probabilidad vs Certeza",
      premisa: "En una urna hay 99 bolas rojas y 1 bola azul. Pedro afirma: 'Como la abrumadora mayoría es roja, es IMPOSIBLE sacar la azul'.",
      comprender: "Iguala una probabilidad muy baja (1%) con una imposibilidad absoluta (0%).",
      rastrear: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "\xBFImposible = Probabilidad de 0/100? S\xC3\x8D."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "\xBFCu\xE1l es la probabilidad real de la azul? 1/100."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-orange-500 shrink-0" }), "Como 1/100 > 0, el evento PUEDE ocurrir.")
      ),

      esFalso: true,
      veredicto: "Falso. Confundió 'altamente improbable' con 'matemáticamente imposible'."
    }];


    // Función Helper para renderizar los Casos Didácticos
    const renderCasos = (casosArray) => /*#__PURE__*/
    React.createElement("div", { className: "space-y-12" },
    casosArray.map((caso, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "pt-8 border-t border-slate-200 mt-8 first:border-t-0 first:pt-0 first:mt-0" }, /*#__PURE__*/
    React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
    React.createElement(Lightbulb, { className: "w-6 h-6 text-orange-500" }), " Caso Pr\xE1ctico ", index + 1, ": ", caso.titulo
    ), /*#__PURE__*/
    React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
    React.createElement("p", { className: "text-slate-700 font-medium italic text-sm md:text-base" }, "\"", caso.premisa, "\"")
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
    React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
    React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
    React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Search, { className: "w-4 h-4" }), " 1. Comprender"), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-slate-600" }, caso.comprender)
    ), /*#__PURE__*/
    React.createElement("div", { className: "bg-orange-50 p-5 rounded-xl border border-orange-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
    React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-orange-400" }), /*#__PURE__*/
    React.createElement("h5", { className: "font-bold text-orange-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(AlertTriangle, { className: "w-4 h-4" }), " 2. Rastrear"), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-slate-600" }, caso.rastrear)
    ), /*#__PURE__*/
    React.createElement("div", { className: "bg-rose-50 p-5 rounded-xl border border-rose-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
    React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-rose-400" }), /*#__PURE__*/
    React.createElement("h5", { className: "font-bold text-rose-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(ShieldCheck, { className: "w-4 h-4" }), " 3. Veredicto"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col gap-2 mt-auto" }, /*#__PURE__*/
    React.createElement("div", { className: `px-2 py-2 rounded text-center shadow-sm ${caso.esFalso ? 'bg-rose-600' : 'bg-emerald-600'}` }, /*#__PURE__*/
    React.createElement("span", { className: "text-xs font-bold text-white uppercase tracking-wider" }, caso.esFalso ? 'Afirmación / Procedimiento Falso' : 'Afirmación Verdadera')
    ), /*#__PURE__*/
    React.createElement("div", { className: "text-[11px] text-center text-rose-800 leading-tight font-medium bg-rose-100/50 p-2 rounded" },
    caso.veredicto
    )
    )
    )
    )
    )
    )
    );


    // ==========================================
    // QUIZ (TRIBUNAL MATEMÃTICO) - 6 PREGUNTAS
    // ==========================================
    const questions = [
    {
      type: "Procedimientos",
      question: "Un estudiante debe resolver la ecuación 4x - 8 = 12. Su procedimiento es:\nPaso 1: 4x = 12 - 8\nPaso 2: 4x = 4\nPaso 3: x = 4 / 4\nPaso 4: x = 1.\n¿Es correcto el procedimiento del estudiante?",
      visual: null,
      options: ["Sí, el estudiante aplicó correctamente todas las propiedades de las igualdades.","No, el error está en el Paso 1, porque el 8 debía pasar a sumar, no a restar.","No, el error está en el Paso 3, porque el 4 multiplicando pasa a restar.","No, el error está en el Paso 2, porque 12 - 8 no es igual a 4."],
      correct: 1,
      feedback: "Al despejar, un término que está restando pasa al otro lado de la igualdad a realizar la operación contraria (suma). Debió ser 12 + 8."
    },
    {
      type: "Procedimientos",
      question: "Para calcular el costo total de 3 cuadernos a $5.000 cada uno, más un lapicero de $2.000, un estudiante plantea la expresión: 5.000 + 2.000 × 3 y afirma que el resultado es $21.000. El profesor le indica que su razonamiento tiene una falacia. ¿Cuál es?",
      visual: null,
      options: ["Planteó mal la operación, ya que el precio del lapicero debe multiplicarse por los 3 cuadernos.","Olvidó sumar un cuaderno extra al resultado final.","Sumó antes de multiplicar, ignorando la jerarquía de operaciones, lo que le dio $21.000 en vez de $11.000.","El procedimiento es correcto, el resultado real es $21.000."],
      correct: 2,
      feedback: "La jerarquía de operaciones (PEMDAS) dicta que las multiplicaciones se resuelven antes que las sumas. Correcto: 5000 + (2000×3) = 11000."
    },
    {
      type: "Procedimientos",
      question: "Al despejar la variable en la ecuación -3x = 15, un estudiante concluye que el primer paso correcto es x = 15 + 3. Esta conclusión es:",
      visual: null,
      options: ["Verdadera, porque el 3 tiene un signo negativo y pasa a hacer la operación contraria.","Falsa, porque el -3 está multiplicando a la x, por lo tanto debe pasar a dividir conservando su signo negativo.","Falsa, porque el -3 está restando, por lo que debe pasar a dividir con signo positivo.","Verdadera, porque los signos negativos siempre se invierten al cambiar de lado."],
      correct: 1,
      feedback: "El número -3 actúa como coeficiente multiplicador. Al despejar mediante división, se conserva el signo del coeficiente (x = 15 / -3)."
    },
    {
      type: "Procedimientos",
      question: "Un estudiante calcula la expresión (10 + 6) / 2. En su primer paso, divide el 6 entre 2 y luego suma el 10, obteniendo 13. ¿Por qué es incorrecto este procedimiento?",
      visual: null,
      options: ["Porque el numerador (10 + 6) actúa como un bloque agrupado por un paréntesis implícito y debe sumarse primero.","Porque la división siempre se debe hacer de izquierda a derecha, empezando por el 10.","Porque el resultado real de dividir 6 entre 2 no es 3.","El procedimiento no es incorrecto, 13 es la respuesta válida."],
      correct: 0,
      feedback: "En una fracción, toda la expresión del numerador debe resolverse antes de ejecutar la división general (16 / 2 = 8)."
    },
    {
      type: "Procedimientos",
      question: "Un estudiante simplifica la fracción algebráica (2x + 4) / 2 cancelando únicamente el número 2 del denominador con el coeficiente 2 de la 'x', obteniendo como resultado final x + 4. ¿Es matemáticamente correcto este paso?",
      visual: null,
      options: ["Sí, porque al haber un 2 arriba y uno abajo, se pueden cancelar directamente.","No, porque el 2 del denominador afecta y divide a ambos términos del binomio superior (2x y 4).","No, porque el resultado correcto de la cancelación directa debería ser 2x + 2.","Sí, es una propiedad estándar de la suma de fracciones heterogéneas."],
      correct: 1,
      feedback: "El denominador divide a todo el bloque del numerador. Para simplificar, debes dividir cada término (2x/2 + 4/2), lo que daría como resultado x + 2."
    },
    {
      type: "Contraejemplos",
      question: "Un texto escolar afirma: 'Elevar un número entero al cuadrado siempre da como resultado un valor mayor que el número original'. ¿Cuál de las siguientes opciones sirve como contraejemplo para demostrar que la afirmación es FALSA?",
      visual: null,
      options: ["x = -2","x = 5","x = 1","x = -10"],
      correct: 2,
      feedback: "Un contraejemplo destruye la regla 'siempre'. Si x=1, entonces 1² = 1. Uno no es mayor que uno (son iguales)."
    },
    {
      type: "Contraejemplos",
      question: "Alguien afirma: 'La suma de dos números reales distintos siempre es mayor que cualquiera de los dos números sumados por separado'. Para demostrar que esto es falso, basta con sumar:",
      visual: null,
      options: ["Dos números pares positivos.","Un número positivo y el cero.","Dos números fraccionarios mayores que 1.","Un número positivo y un número negativo."],
      correct: 3,
      feedback: "Si sumas 5 + (-3) el resultado es 2. El 2 NO es mayor que el 5 original, refutando la afirmación absoluta."
    },
    {
      type: "Contraejemplos",
      question: "Una regla general dice que 'Todo cuadrilátero con sus cuatro lados de igual longitud es obligatoriamente un cuadrado'. ¿Qué figura geométrica refuta esta afirmación?",
      visual: null,
      options: ["Un rectángulo, porque tiene lados iguales dos a dos.","Un rombo, porque tiene cuatro lados iguales pero sus ángulos no son rectos.","Un trapecio isósceles, porque tiene dos lados no paralelos iguales.","Un pentágono, porque tiene cinco lados."],
      correct: 1,
      feedback: "El rombo es el contraejemplo geométrico perfecto: lados iguales, pero ángulos diferentes a 90°."
    },
    {
      type: "Contraejemplos",
      question: "Un compañero argumenta: 'Si multiplico un número x por cualquier valor y, el resultado siempre será de mayor magnitud que x'. ¿Por qué valor de 'y' debes multiplicar para demostrarle que está equivocado?",
      visual: null,
      options: ["y = 2","y = 10","y = 0.5","y = 1.1"],
      correct: 2,
      feedback: "Al multiplicar por un decimal entre 0 y 1 (como 0.5), el número original se reduce a la mitad, refutando que 'siempre aumenta'."
    },
    {
      type: "Contraejemplos",
      question: "Se afirma como regla general que: 'Todo número multiplicado por -1 da como resultado un número estrictamente menor que cero'. ¿Qué número demuestra que esto es falso?",
      visual: null,
      options: ["Cualquier fracción positiva.","El número 5.","Cualquier número negativo (ejemplo: -3).","El número 1."],
      correct: 2,
      feedback: "Si multiplicas -3 por -1, el resultado es 3 positivo, el cual es mayor a cero. Esto rompe la regla de la afirmación."
    },
    {
      type: "Porcentajes",
      question: "Un almacén anuncia un descuento del 50% en una chaqueta de $200.000. Al pagar con tarjeta de crédito de la tienda, ofrecen un 50% de descuento adicional sobre el valor ya rebajado. Un cliente afirma que la chaqueta le saldrá gratis. Esta afirmación es:",
      visual: null,
      options: ["Verdadera, porque 50% + 50% = 100% de descuento total.","Falsa, porque los descuentos sucesivos no se suman. El cliente pagará $50.000.","Falsa, porque el descuento adicional solo se aplica sobre el valor del IVA.","Verdadera, la publicidad obliga al almacén a regalar la prenda."],
      correct: 1,
      feedback: "Primer descuento: 50% de 200.000 = 100.000. Segundo descuento: 50% de 100.000 = 50.000. El cliente paga $50.000."
    },
    {
      type: "Porcentajes",
      question: "Las ventas de la 'Tienda A' crecieron un 100% este año. Las ventas de la multinacional 'Tienda B' crecieron un 5%. El dueño de la Tienda A afirma que sus ganancias aumentaron en mayor cantidad de dinero que las de la Tienda B. Su argumento es:",
      visual: null,
      options: ["Válido, porque 100% es un número mucho mayor que 5%.","Inválido, porque no se pueden comparar porcentajes relativos sin conocer las bases (ingresos iniciales) de cada tienda.","Válido, porque un crecimiento del 100% significa que se duplicó la inversión inicial garantizando más ganancias.","Inválido, porque la Tienda A probablemente evade impuestos."],
      correct: 1,
      feedback: "El 100% de $10 (son $10) es mucho menor que el 5% de $1.000.000 (son $50.000). Sin la base absoluta, el porcentaje no define la cantidad de dinero."
    },
    {
      type: "Porcentajes",
      question: "Un inversor compra acciones por $100. Al día siguiente, la bolsa cae y pierde el 50% de su dinero. Al tercer día, la bolsa se recupera y sube un 50%. El inversor asegura que volvió a tener sus $100 iniciales. ¿Es esto correcto?",
      visual: null,
      options: ["Sí, porque la bajada y la subida fueron del mismo porcentaje.","No, porque al subir el 50% sobre el dinero que le quedaba ($50), solo recuperó $25, terminando con $75.","No, porque el mercado de valores descuenta comisiones por transacción.","Sí, porque matemáticamente -50 + 50 = 0, dejándolo en equilibrio."],
      correct: 1,
      feedback: "El 50% de caída lo deja en $50. El incremento del 50% ahora se calcula sobre esos $50 (que son $25). Termina con $75."
    },
    {
      type: "Porcentajes",
      question: "En una elección, el candidato A pasó de tener el 10% de intención de voto al 15%. Su jefe de campaña afirma en televisión: '¡Nuestra intención de voto creció un 5%!'. Desde un punto de vista matemático estricto, la afirmación es:",
      visual: null,
      options: ["Verdadera, porque 15 - 10 = 5.","Falsa, porque pasó de 10 a 15, lo que representa un crecimiento relativo del 50% respecto a su base inicial, no del 5%.","Verdadera, porque las encuestas siempre miden porcentajes absolutos.","Falsa, porque los votos en blanco reducen el porcentaje."],
      correct: 1,
      feedback: "La afirmación del jefe habla de puntos porcentuales absolutos, no del crecimiento relativo del candidato. Pasar de 10 a 15 implica que aumentó la mitad de lo que ya tenía (creció un 50% sobre su propia base)."
    },
    {
      type: "Porcentajes",
      question: "El precio de un celular de última tecnología sube un 20% debido a impuestos. Al mes siguiente, la tienda decide hacer un descuento bajándole el 20% al nuevo precio. El vendedor afirma que 'el producto volvió a su precio original'. ¿Es cierto?",
      visual: null,
      options: ["Sí, porque si le sumas 20 y le restas 20, queda exactamente igual.","No, porque el descuento del 20% se aplicó sobre un precio base que ahora era mayor, por lo que rebajó más dinero del que había subido.","Sí, es una estrategia común de marketing donde los números se anulan mutuamente.","No, porque los impuestos nunca se devuelven al cliente final."],
      correct: 1,
      feedback: "Si costaba 100 y sube 20%, pasa a 120. Si le quitas el 20% a 120, le estás quitando 24, por lo que el precio final será 96 (quedó más barato que al inicio)."
    },
    {
      type: "Causalidad",
      question: "Un análisis estadístico en una ciudad costera demuestra que los meses en los que más se vende helado coinciden exactamente con los meses en que hay más personas ahogadas en el mar. Un periódico titula: 'Comer helado aumenta el riesgo de ahogarse'. ¿Qué error argumentativo se está cometiendo?",
      visual: null,
      options: ["Ignorar que las ventas de helado no pagan impuestos.","Asumir que la correlación implica causalidad, ignorando que el calor (verano) es la tercera variable que causa el aumento en ambas cosas.","Mentir en los datos, ya que es imposible que ambas variables suban al mismo tiempo.","Usar una muestra demasiado pequeña para el análisis estadístico."],
      correct: 1,
      feedback: "Falacia de falsa causalidad. Dos cosas que ocurren juntas no significa que una cause la otra. La 'Variable de confusión' es el verano."
    },
    {
      type: "Causalidad",
      question: "El consejo directivo de un colegio nota que los estudiantes que asisten a tutorías privadas extracurriculares tienen los peores promedios del salón. Deciden prohibir las tutorías argumentando que estas 'hacen que los alumnos bajen sus notas'. Este argumento es:",
      visual: null,
      options: ["Correcto, las estadísticas demuestran el bajo rendimiento de ese grupo.","Incorrecto, comete el error de causalidad inversa: los estudiantes van a tutorías PORQUE tienen malas notas, no al revés.","Correcto, las tutorías sobrecargan de información a los alumnos.","Incorrecto, porque la muestra de estudiantes no fue seleccionada aleatoriamente."],
      correct: 1,
      feedback: "Causalidad inversa: Se confunde la causa con el efecto. Las bajas notas son la causa de ir a la tutoría, no el resultado."
    },
    {
      type: "Causalidad",
      question: "Se observa que los niños de primaria que tienen pies más grandes (mayor talla de zapatos) tienen un vocabulario más amplio y leen mejor. Por tanto, se sugiere hacer zapatos más grandes para estimular la lectura. La falacia aquí es que se ignora una variable oculta. ¿Cuál es?",
      visual: null,
      options: ["El nivel socioeconómico de los padres.","La edad y el desarrollo natural del niño.","El material con el que se fabrican los zapatos.","La metodología de enseñanza del colegio."],
      correct: 1,
      feedback: "Los niños mayores (más edad) leen mejor y, naturalmente, tienen pies más grandes. La talla del zapato no causa inteligencia."
    },
    {
      type: "Causalidad",
      question: "Un informe del Ministerio de Salud revela que los hospitales nivel 4 (los más avanzados y costosos) presentan la tasa de mortalidad más alta del país frente a las clínicas locales pequeñas. Se concluye que las clínicas locales tienen mejores médicos. ¿Por qué es inválida esta conclusión?",
      visual: null,
      options: ["Porque los hospitales nivel 4 falsifican los datos.","Por sesgo de selección: a los hospitales de nivel 4 se envían los casos más graves y terminales, elevando naturalmente su mortalidad.","Porque las clínicas locales no atienden a suficientes personas para ser contadas.","La conclusión es válida y demuestra la ineficiencia de la inversión en salud."],
      correct: 1,
      feedback: "Sesgo de selección. Estás comparando poblaciones distintas. El hospital de alto nivel recibe a los pacientes que ya tienen riesgo inminente de muerte."
    },
    {
      type: "Causalidad",
      question: "Una investigación demuestra que las personas que usan mucho protector solar a diario tienen más probabilidades de sufrir de insolación y deshidratación que aquellos que no lo usan. Conclusión del estudio: ¡El químico del protector solar causa la deshidratación corporal! ¿Cuál es el error?",
      visual: null,
      options: ["Confundir un producto químico con un factor biológico natural.","Ignorar una tercera variable lógica: el nivel de exposición al sol. Quienes más usan bloqueador es porque están más expuestos a climas o tareas de alto calor que, de por sí, causan deshidratación.","Aceptar que las encuestas de salud siempre mienten por intereses de las farmacéuticas.","La conclusión es lógicamente inquebrantable."],
      correct: 1,
      feedback: "Correlación no es causalidad. El calor excesivo es la causa común: te obliga a usar más bloqueador y, al mismo tiempo, es lo que realmente deshidrata tu cuerpo."
    },
    {
      type: "Suposiciones",
      question: "En un examen, se presenta un polígono que visualmente se asemeja a un cuadrado. No hay datos de ángulos ni símbolos de perpendicularidad. Un estudiante calcula su área multiplicando lado por lado asumiendo que sus ángulos son de 90°. Según las normas geométricas del ICFES, esto es:",
      visual: null,
      options: ["Correcto, porque las figuras siempre están dibujadas a escala exacta.","Incorrecto, porque no se puede asumir que un ángulo es de 90° (recto) si no está explícitamente indicado con el símbolo o en el texto.","Correcto, es la única forma de resolver el problema.","Incorrecto, porque el área se calcula sumando los lados."],
      correct: 1,
      feedback: "Regla fundamental: 'A ojo' no vale en el ICFES. Si no hay cuadrito de 90° o no lo dice el texto explícitamente, matemáticamente podría ser un romboide."
    },
    {
      type: "Suposiciones",
      question: "Una gráfica de barras en las noticias compara las ganancias de dos empresas. La barra de la Empresa A es visualmente el doble de alta que la de la Empresa B. Sin embargo, al observar el eje vertical (Y), se nota que este comienza en $1.000.000 y no en $0. La ganancia de B es $1.010.000 y la de A es $1.020.000. ¿Qué se puede deducir?",
      visual: null,
      options: ["La Empresa A gana exactamente el doble de dinero que la Empresa B.","La gráfica usa un eje truncado para crear una ilusión visual de una diferencia gigantesca, cuando en realidad la ganancia de A es solo ligeramente superior.","La gráfica es matemáticamente inválida y no debería publicarse.","El eje X está mal etiquetado."],
      correct: 1,
      feedback: "El eje truncado (no empezar en cero) distorsiona las proporciones visuales. 1.020.000 no es el doble de 1.010.000."
    },
    {
      type: "Suposiciones",
      question: "En una bolsa hay 99 pelotas rojas y 1 azul. Un jugador dice: 'Dado que la inmensa mayoría de las pelotas son rojas, es IMPOSIBLE sacar la pelota azul al azar'. Esta afirmación es:",
      visual: null,
      options: ["Verdadera, porque la probabilidad es estadísticamente irrelevante.","Falsa, porque sacar la pelota azul es improbable (1%), pero no matemáticamente imposible (0%).","Verdadera, porque el cerebro humano no percibe la diferencia en probabilidades menores al 5%.","Falsa, porque tiene un 50% de probabilidad: o la saca o no la saca."],
      correct: 1,
      feedback: "En matemáticas, 'imposible' significa probabilidad cero (0/100). 1/100 es una probabilidad baja, pero permite categóricamente que el evento ocurra."
    },
    {
      type: "Suposiciones",
      question: "Un gráfico circular (torta) distribuido en un periódico muestra los porcentajes de presupuesto de un municipio: Educación 40%, Salud 30%, Infraestructura 30% y Seguridad 20%. Un analista descarta inmediatamente el gráfico argumentando que:",
      visual: null,
      options: ["Faltan más categorías de inversión.","Los gráficos circulares no se usan para presupuestos.","La suma de las partes de un gráfico circular representa el todo, y en este caso suma 120%, lo cual es un error matemático estructural.","La seguridad recibe muy poco porcentaje comparado con educación."],
      correct: 2,
      feedback: "Una torta estadística representa el 100% de los datos. Si las partes suman 120% (40+30+30+20), el gráfico es matemáticamente absurdo y falso."
    },
    {
      type: "Suposiciones",
      question: "En un reporte visual, una gráfica circular muestra que el sector 'Alimentos' representa el 50% de los gastos y 'Transporte' el 25%. Sin embargo, al observar el dibujo, ambas rebanadas parecen tener exactamente el mismo tamaño físico. ¿Qué inferencia es la única lógicamente válida?",
      visual: null,
      options: ["El gasto en transporte subió para igualar al de alimentos.","La representación gráfica está mal construida o fue manipulada deliberadamente, ya que las proporciones matemáticas (50 vs 25) no coinciden con las áreas dibujadas.","El 50% y el 25% son estadísticamente equivalentes cuando se miden en gastos mensuales.","El reporte es perfectamente confiable si se lee rápido."],
      correct: 1,
      feedback: "La regla de oro de la argumentación gráfica: si el área dibujada no es proporcional al número que representa, la gráfica está sesgada o mal hecha intencionalmente para engañar al lector."
    }
  ];;


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
      if (percentage === 1) return { title: "¡Analista Maestro!", desc: "Posees un pensamiento crítico impecable. No te dejas engañar por falacias matemáticas ni suposiciones ocultas. Estás listo para cualquier prueba." };
      if (percentage >= 0.6) return { title: "¡Gran Razonamiento!", desc: "Detectas bien la mayoría de errores, pero cuidado con las trampas más sutiles. Sigue practicando las técnicas de refutación." };
      return { title: "¡Cuidado con las trampas!", desc: "La argumentación requiere dudar de todo y ser metódico. Vuelve a la teoría y practica cómo verificar cada paso de una afirmación sin suponer nada." };
    };

    const resultData = getResultMessage();

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-amber-50/40 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#1A0B05] p-8 md:p-12 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-rose-600/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" }, /*#__PURE__*/
      React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-orange-300 rounded-full" })
      ), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(Scale, { className: "w-5 h-5 text-orange-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-orange-300 font-semibold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia 3")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" }, "Argumentaci\xF3n y ", /*#__PURE__*/
      React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500" }, "Validaci\xF3n")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" }, "Eval\xFAa tu capacidad de pensamiento cr\xEDtico: encuentra errores en procedimientos, identifica falacias l\xF3gicas, usa contraejemplos y justifica matem\xE1ticamente."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-rose-600 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)] transform rotate-3" }, /*#__PURE__*/
      React.createElement(ShieldCheck, { className: "w-10 h-10 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: Search, label: 'El Pensamiento Crítico' },
      { id: 'teoria', icon: MessageSquare, label: 'Técnicas de Refutación' },
      { id: 'practica', icon: ShieldCheck, label: 'Tribunal Matemático' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-orange-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'}` }, /*#__PURE__*/


      React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? 'text-orange-500' : ''}` }),
      tab.label
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("main", { className: "p-6 md:px-10 md:pb-10 md:pt-4" },


      activeTab === 'introduccion' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" }, /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" }, /*#__PURE__*/

      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "No creas todo lo que calculas"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "En las pruebas estandarizadas te vas a encontrar con problemas que ya est\xE1n \"resueltos\". Alguien afirma una conclusi\xF3n y te preguntan: ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-orange-700" }, "\xBFTiene la raz\xF3n? \xBFPor qu\xE9 s\xED o por qu\xE9 no?")
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-rose-500 rounded-l-2xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "\xBFQu\xE9 eval\xFAa la argumentaci\xF3n?"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-4" },
      [
      "Detectar el paso exacto donde un cálculo o ecuación se arruinó.",
      "Diferenciar entre un dato absoluto y un porcentaje engañoso.",
      "Identificar cuándo dos gráficas muestran casualidad y no causalidad.",
      "Usar un solo 'Contraejemplo' para destruir una teoría absoluta."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-1 bg-orange-100 p-1 rounded-full shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(AlertTriangle, { className: "w-3 h-3 text-orange-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", null, text)
      )
      )
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-orange-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/
      React.createElement("div", {
        className: "relative w-48 h-48 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(50deg) rotateZ(-30deg)', transformStyle: 'preserve-3d' },
        onMouseEnter: (e) => e.currentTarget.style.transform = 'rotateX(40deg) rotateZ(-15deg) scale(1.1)',
        onMouseLeave: (e) => e.currentTarget.style.transform = 'rotateX(50deg) rotateZ(-30deg) scale(1)' }, /*#__PURE__*/

      React.createElement("div", { className: "absolute inset-0 bg-white/60 backdrop-blur-md border-2 border-white rounded-[2rem] shadow-[0_40px_60px_rgba(245,158,11,0.2)]", style: { transform: 'translateZ(-1px)' } }), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-6 left-6 w-16 h-24 bg-gradient-to-t from-rose-500 to-red-400 rounded-xl flex items-center justify-center shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95", style: { transform: 'translateZ(1px)' } }, /*#__PURE__*/React.createElement(XCircle, { className: "w-8 h-8 text-white/80" })), /*#__PURE__*/
      React.createElement("div", { className: "absolute bottom-6 right-6 w-20 h-16 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95", style: { transform: 'translateZ(1px)' } }, /*#__PURE__*/React.createElement(CheckCircle, { className: "w-8 h-8 text-white/80" })), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-[0_30px_40px_rgba(245,158,11,0.3)] animate-pulse bg-white/20 backdrop-blur-sm", style: { transform: 'translateZ(60px)', animationDuration: '3s' } }, /*#__PURE__*/React.createElement("div", { className: "absolute w-2 h-16 bg-amber-400 rotate-45 -bottom-10 -right-8 rounded-full shadow-lg" }))
      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" }, "\"Las matem\xE1ticas no mienten, pero las personas pueden usar matem\xE1ticas falsas.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(234,88,12,0.2)] active:scale-95 flex items-center gap-2" },
      "Aprender a Refutar ", /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-4 h-4" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" }, /*#__PURE__*/


      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
      [
      { icon: Search, title: '1. Comprender la Premisa', desc: 'Identificar exactamente qué es lo que la persona está intentando asegurar o vender como "cierto".', color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-100' },
      { icon: AlertTriangle, title: '2. Rastrear Evidencia', desc: 'Hacer tus propios cálculos rápidos. Revisar línea por línea buscando el "truco" algebraico o lógico.', color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-100' },
      { icon: ShieldCheck, title: '3. Emitir Veredicto', desc: 'Concluir si es Falso o Verdadero, y emparejar esa conclusión con la justificación matemática real.', color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-100' }].
      map((item, i) => /*#__PURE__*/
      React.createElement("div", { key: i, className: "bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300" }, /*#__PURE__*/
      React.createElement("div", { className: `w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm border ${item.border}` }, /*#__PURE__*/
      React.createElement(item.icon, { className: "w-7 h-7" })
      ), /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-extrabold mb-3 text-slate-800" }, item.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 text-sm leading-relaxed" }, item.desc)
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center mb-10" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "T\xE9cnicas de Refutaci\xF3n Maestras"), /*#__PURE__*/
      React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mt-4 rounded-full" }), /*#__PURE__*/
      React.createElement("p", { className: "mt-4 text-slate-500 max-w-2xl mx-auto text-base" }, "Para argumentar que algo \"est\xE1 mal\", primero debes conocer ", /*#__PURE__*/
      React.createElement("strong", { className: "text-orange-600" }, "la regla que rompe"), ". Estudia la teor\xEDa y luego analiza los 15 casos."
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-16" }, /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-100 rounded-xl" }, /*#__PURE__*/React.createElement(Search, { className: "w-6 h-6 text-amber-600" })), "1. El Caza-Errores (Verificar Procedimientos)"

      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-xl p-6 mb-8 border border-amber-200 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-amber-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-5 h-5" }), " Teor\xEDa Clave: \xBFCu\xE1les son las reglas inquebrantables?"
      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-4 rounded-lg border border-amber-100" }, /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 text-sm mb-2 border-b border-amber-200 pb-1" }, "1. Jerarqu\xEDa de Operaciones (PEMDAS)"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-1.5 font-mono" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "P"), "ar\xE9ntesis ( )"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "E"), "xponentes x\xC2\xB2"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "M"), "ultiplicaci\xF3n y ", /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "D"), "ivisi\xF3n (De Izq a Der)"), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "A"), "dici\xF3n (Suma) y ", /*#__PURE__*/React.createElement("strong", { className: "text-slate-800" }, "S"), "ustracci\xF3n (Resta)")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-[10px] text-amber-600 mt-2" }, "Nunca sumes antes de multiplicar si no hay par\xE9ntesis.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-orange-50 p-4 rounded-lg border border-orange-100" }, /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-orange-700 text-sm mb-2 border-b border-orange-200 pb-1" }, "2. Leyes de Despeje (Ecuaciones)"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-1.5 font-mono" }, /*#__PURE__*/
      React.createElement("li", null, "Lo que suma (+) ", /*#__PURE__*/React.createElement(ArrowRight, { className: "inline w-3 h-3 text-orange-500" }), " Pasa a restar (-)"), /*#__PURE__*/
      React.createElement("li", null, "Lo que resta (-) ", /*#__PURE__*/React.createElement(ArrowRight, { className: "inline w-3 h-3 text-orange-500" }), " Pasa a sumar (+)"), /*#__PURE__*/
      React.createElement("li", null, "Lo que multiplica (\xD7) ", /*#__PURE__*/React.createElement(ArrowRight, { className: "inline w-3 h-3 text-orange-500" }), " Pasa a dividir (\xC3\xB7) ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-600 underline" }, "con el mismo signo"), ".")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-[10px] text-orange-600 mt-2" }, "Ej: -4x = 12 $\\rightarrow$ x = 12 / -4. El menos (-4) NO pasa a sumar.")
      )
      )
      ),

      renderCasos(ejemplosEstrategia1)
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-orange-100 rounded-xl" }, /*#__PURE__*/React.createElement(XCircle, { className: "w-6 h-6 text-orange-600" })), "2. El Poder del Contraejemplo"

      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-xl p-6 mb-8 border border-orange-200 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-orange-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-5 h-5" }), " Teor\xEDa Clave: La L\xF3gica del \"Cisne Negro\""
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "flex-1 text-sm text-slate-600 leading-relaxed" }, "En matem\xE1ticas, si alguien afirma que \"Todos los cisnes son blancos\", no tienes que revisar todos los cisnes del universo para ver si miente. ", /*#__PURE__*/
      React.createElement("strong", { className: "text-orange-600" }, "Basta con encontrar UN SOLO cisne negro"), " (un contraejemplo) para demostrar que su afirmaci\xF3n absoluta es FALSA."
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex-1 w-full" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-slate-50 p-3 rounded border border-slate-200 text-xs" }, /*#__PURE__*/
      React.createElement("div", { className: "font-bold text-slate-700 mb-1 border-b border-slate-200 pb-1" }, "Palabras de Alerta M\xE1xima en Ex\xE1menes:"), /*#__PURE__*/
      React.createElement("div", { className: "flex gap-2 font-mono text-rose-600 font-bold mb-2" }, "\"Siempre\", \"Nunca\", \"Todos\", \"Ninguno\""), /*#__PURE__*/
      React.createElement("div", { className: "font-bold text-slate-700 mb-1 border-b border-slate-200 pb-1" }, "Tus Armas para crear contraejemplos:"), /*#__PURE__*/
      React.createElement("div", { className: "text-slate-600 font-mono" }, "Usa el Cero (0), n\xFAmeros negativos (-2) o fracciones (0.5).")
      )
      )
      )
      ),

      renderCasos(ejemplosEstrategia2)
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-rose-100 rounded-xl" }, /*#__PURE__*/React.createElement(Scale, { className: "w-6 h-6 text-rose-600" })), "3. Falacias Relativas (Porcentajes)"

      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-xl p-6 mb-8 border border-rose-200 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-rose-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-5 h-5" }), " Teor\xEDa Clave: Valor Absoluto vs. Relativo"
      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-rose-50 p-4 rounded-lg border border-rose-100 text-sm" }, /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-rose-700 mb-2 border-b border-rose-200 pb-1" }, "El Porcentaje necesita una Base"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 mb-2" }, "Un porcentaje (20%) no es dinero real, es una \"rebanada de pastel\"."), /*#__PURE__*/
      React.createElement("p", { className: "font-mono text-xs text-slate-700 bg-white p-2 rounded" }, "Valor Absoluto = Base \xD7 (Porcentaje / 100)"), /*#__PURE__*/
      React.createElement("p", { className: "text-xs text-rose-600 font-bold mt-2" }, "Nunca puedes afirmar que el 50% es m\xE1s dinero que el 20% si los \"pasteles\" (Bases) son de distinto tama\xF1o.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-slate-500 font-bold uppercase" }, "50% de $10"), /*#__PURE__*/
      React.createElement("div", { className: "w-8 h-4 bg-rose-500 mx-auto mt-1 mb-2" }), /*#__PURE__*/
      React.createElement("div", { className: "text-xs font-bold text-rose-600" }, "Es solo $5")
      ), /*#__PURE__*/
      React.createElement("div", { className: "mx-4 text-slate-400" }, "vs"), /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-slate-500 font-bold uppercase" }, "10% de $1000"), /*#__PURE__*/
      React.createElement("div", { className: "w-16 h-8 bg-blue-500 mx-auto mt-1 mb-2" }), /*#__PURE__*/
      React.createElement("div", { className: "text-xs font-bold text-blue-600" }, "\xA1Son $100!")
      )
      )
      )
      ),

      renderCasos(ejemplosEstrategia3)
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-teal-100 rounded-xl" }, /*#__PURE__*/React.createElement(TrendingUp, { className: "w-6 h-6 text-teal-600" })), "4. Correlaci\xF3n vs. Causalidad"

      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-xl p-6 mb-8 border border-teal-200 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-teal-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-5 h-5" }), " Teor\xEDa Clave: La Tercera Variable"
      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-6 items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-sm text-slate-600 space-y-3" }, /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("strong", { className: "text-teal-700" }, "Correlaci\xF3n:"), " Dos variables suben o bajan al mismo tiempo en una gr\xE1fica."), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("strong", { className: "text-teal-700" }, "Causalidad:"), " Variable A provoca a Variable B de forma directa."), /*#__PURE__*/
      React.createElement("p", { className: "bg-teal-50 p-2 rounded border border-teal-100 text-xs" }, "El error en los ex\xE1menes es ver que las l\xEDneas suben juntas y asumir \"A causa B\". Casi siempre existe una ", /*#__PURE__*/React.createElement("strong", { className: "text-teal-700 font-bold" }, "Variable de Confusi\xF3n (C)"), " que est\xE1 causando ambas a la vez.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-slate-50 p-4 rounded-lg border border-slate-200 text-center flex flex-col items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded shadow-sm" }, "C (El Verano)"), /*#__PURE__*/
      React.createElement("div", { className: "flex w-full justify-center gap-8 mt-2" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center" }, /*#__PURE__*/
      React.createElement(ArrowDown, { className: "w-4 h-4 text-teal-400 rotate-45 mb-1" }), /*#__PURE__*/
      React.createElement("div", { className: "px-2 py-1 border border-slate-300 bg-white text-xs rounded" }, "A (Helados)")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center" }, /*#__PURE__*/
      React.createElement(ArrowDown, { className: "w-4 h-4 text-teal-400 -rotate-45 mb-1" }), /*#__PURE__*/
      React.createElement("div", { className: "px-2 py-1 border border-slate-300 bg-white text-xs rounded" }, "B (Ahogados)")
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "mt-3 text-[10px] text-slate-500" }, "Helados (A) y Ahogados (B) no se causan entre s\xED.")
      )
      )
      ),

      renderCasos(ejemplosEstrategia4)
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-indigo-100 rounded-xl" }, /*#__PURE__*/React.createElement(EyeOff, { className: "w-6 h-6 text-indigo-600" })), "5. Suposiciones Ocultas"

      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-white rounded-xl p-6 mb-8 border border-indigo-200 shadow-sm" }, /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-indigo-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-5 h-5" }), " Teor\xEDa Clave: Leer lo Expl\xEDcito (Axiomas)"
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "flex-1 text-sm text-slate-600 leading-relaxed" }, "\"A ojo\" no sirve en matem\xE1ticas. Los dibujantes de las pruebas estandarizadas suelen hacer figuras enga\xF1osas a prop\xF3sito (gr\xE1ficas cortadas o tri\xE1ngulos deformes). ", /*#__PURE__*/
      React.createElement("strong", { className: "text-indigo-600" }, "Si un dato no est\xE1 escrito en el texto ni marcado con el s\xEDmbolo matem\xE1tico correcto, asume que NO es cierto.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex-1 w-full bg-indigo-50 p-3 rounded-lg border border-indigo-100" }, /*#__PURE__*/
      React.createElement("div", { className: "font-bold text-indigo-800 mb-2 border-b border-indigo-200 pb-1 text-xs" }, "S\xEDmbolos que S\xC3\x8D puedes creer:"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-3 mb-2" }, /*#__PURE__*/
      React.createElement("div", { className: "w-4 h-4 border-2 border-indigo-500 rounded-sm" }), /*#__PURE__*/
      React.createElement("span", { className: "text-xs text-slate-700" }, "\xC3\x81ngulo recto (90\xC2\xB0 garantizados)")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "text-indigo-500 font-bold text-lg" }, "> >"), /*#__PURE__*/
      React.createElement("span", { className: "text-xs text-slate-700" }, "L\xEDneas paralelas garantizadas")
      )
      )
      )
      ),

      renderCasos(ejemplosEstrategia5)
      )

      )
      )
      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }), /*#__PURE__*/

      React.createElement("div", { className: "mb-8 flex justify-between items-end" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Desaf\xEDo de: ", /*#__PURE__*/
      React.createElement("span", { className: "text-orange-500" }, questions[currentQuestion].type)
      ), /*#__PURE__*/
      React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Cuesti\xF3n ", currentQuestion + 1)
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
      ), /*#__PURE__*/

      React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" }, /*#__PURE__*/
      React.createElement("div", {
        className: "bg-gradient-to-r from-amber-400 to-orange-500 h-full transition-all duration-500 ease-out",
        style: { width: `${(currentQuestion + 1) / questions.length * 100}%` } }
      )
      ), /*#__PURE__*/

      React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" },
      questions[currentQuestion].question
      ),

      questions[currentQuestion].visual && /*#__PURE__*/
      React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner" },
      questions[currentQuestion].visual
      ), /*#__PURE__*/


      React.createElement("div", { className: "space-y-4 mb-10" },
      questions[currentQuestion].options.map((option, index) => /*#__PURE__*/
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
        'bg-white border-slate-100 hover:border-orange-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/


      React.createElement("div", { className: "flex items-center gap-4" }, /*#__PURE__*/
      React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
        hasAnswered ?
        index === questions[currentQuestion].correct ?
        'border-emerald-500 bg-emerald-500 text-white' :
        index === selectedAnswer ?
        'border-rose-400 bg-rose-400 text-white' :
        'border-slate-200' :
        'border-slate-200'}` },

      hasAnswered && index === questions[currentQuestion].correct && /*#__PURE__*/React.createElement(CheckCircle, { className: "w-5 h-5" })
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
        'bg-orange-600 hover:bg-orange-700 text-white shadow-[0_10px_20px_rgba(234,88,12,0.2)] hover:-translate-y-1' :
        'bg-slate-100 text-slate-400 cursor-not-allowed'}` },


      currentQuestion === questions.length - 1 ? 'Emitir Veredicto Final' : 'Siguiente Caso', /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" }), /*#__PURE__*/

      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 to-orange-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Award, { className: "w-14 h-14 text-orange-500" })
      ), /*#__PURE__*/

      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" },
      resultData.desc
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2" },
      score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Veredictos Correctos")
      ), /*#__PURE__*/

      React.createElement("button", {
        onClick: resetQuiz,
        className: "bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(234,88,12,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto" }, /*#__PURE__*/

      React.createElement(RefreshCw, { className: "w-5 h-5" }), "Juzgar de nuevo"

      )
      )

      )


      )
      )
      ));

  }

  window.renderMathModule3 = (containerId) => {
    console.log("mathModule3.js: Ejecutando render en", containerId);
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
      try {
        if (!window._reactRoots) window._reactRoots = {};
        if (!window._reactRoots[containerId]) {
          window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
        }
        window._reactRoots[containerId].render(React.createElement(ModuloArgumentacion));
        console.log("mathModule3.js: Renderizado exitoso.");
      } catch (e) {
        console.error("mathModule3.js Error:", e);
        container.innerHTML = `<div class="p-10 text-center" style="color: #f87171"><h2 class="text-xl font-bold">Error en renderizado: ${e.message}</h2></div>`;
      }
    } else {
      console.warn("mathModule3.js: No se encontró ReactDOM o el contenedor.");
    }
  };
})();