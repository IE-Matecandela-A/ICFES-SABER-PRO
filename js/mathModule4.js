(function () {
  console.log("mathModule4.js: Iniciando carga...");
  const React = window.React;
  const { useState, useEffect, useMemo, useCallback } = React;

  // Standard Icon component using Material Icons
  const Icon = ({ name, className = "", style = {} }) =>
  React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
  }, name);


  // Component wrappers for lucide-react mapping
  const DollarSign = (props) => React.createElement(Icon, { name: "attach_money", ...props });
  const LineChart = (props) => React.createElement(Icon, { name: "show_chart", ...props });
  const Percent = (props) => React.createElement(Icon, { name: "percent", ...props });
  const Landmark = (props) => React.createElement(Icon, { name: "account_balance", ...props });
  const FileText = (props) => React.createElement(Icon, { name: "description", ...props });
  const Wallet = (props) => React.createElement(Icon, { name: "account_balance_wallet", ...props });
  const CreditCard = (props) => React.createElement(Icon, { name: "credit_card", ...props });
  const TrendingUp = (props) => React.createElement(Icon, { name: "trending_up", ...props });
  const Search = (props) => React.createElement(Icon, { name: "search", ...props });
  const Calculator = (props) => React.createElement(Icon, { name: "calculate", ...props });
  const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
  const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
  const ArrowDown = (props) => React.createElement(Icon, { name: "arrow_downward", ...props });
  const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });
  const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
  const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
  const BarChart = (props) => React.createElement(Icon, { name: "bar_chart", ...props });
  const BookOpen = (props) => React.createElement(Icon, { name: "menu_book", ...props });
  const Layers = (props) => React.createElement(Icon, { name: "layers", ...props });

  function ModuloRazonamiento() {
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
      titulo: "El cálculo del IVA",
      situacion: "Un televisor cuesta $1.000.000 sin IVA. Si el IVA es del 19%, ¿cuánto debe pagar el cliente en total al llegar a la caja?",
      analisis: "El IVA (Impuesto al Valor Agregado) es un recargo que se suma al precio original. El precio final será el 100% del valor base + el 19% del impuesto (119% en total).",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-cyan-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Paso 1: Usar el factor multiplicador 1.19.")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 items-center" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-cyan-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("code", { className: "font-bold" }, "1.000.000 \xD7 1.19 = 1.190.000")))
      ),

      resultado: "$1.190.000"
    },
    {
      titulo: "Encontrar el precio original (Sin IVA)",
      situacion: "Compraste un celular por $1.190.000 (IVA del 19% ya incluido). ¿Cuál era el precio del celular sin el impuesto?",
      analisis: "¡Trampa clásica! NO puedes calcular el 19% de $1.190.000 y restarlo. El precio con IVA representa el 119% del valor original, no el 100%. Se debe usar la operación contraria (división).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", null, "F\xF3rmula: ", /*#__PURE__*/React.createElement("code", { className: "bg-white px-1 py-0.5 rounded border border-cyan-200" }, "Precio Original = Precio Final \xF7 1.19")), /*#__PURE__*/
      React.createElement("p", { className: "font-mono" }, "1.190.000 \xF7 1.19 = 1.000.000")
      ),

      resultado: "$1.000.000 exactos."
    },
    {
      titulo: "El engaño del doble descuento",
      situacion: "Una tienda anuncia: '50% de descuento + 20% adicional con nuestra tarjeta'. Un cliente cree que le darán el 70% de descuento. Si el artículo vale $100.000, ¿cuánto paga realmente?",
      analisis: "Los descuentos sucesivos NO se suman. El segundo descuento se aplica sobre el nuevo precio ya rebajado, no sobre el precio inicial.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "1er Dcto (50% de 100k): Queda en $50.000."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "2do Dcto (20% de 50k): El 20% de 50k es $10.000."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Resta final: 50.000 - 10.000 = 40.000.")
      ),

      resultado: "Paga $40.000. (El descuento real fue del 60%, no del 70%)."
    }];


    const ejemplosEstrategia2 = [
    {
      titulo: "Interés Simple",
      situacion: "Un amigo te presta $200.000 al 5% de interés simple mensual. Le pagas todo al cabo de 3 meses. ¿Cuánto interés pagaste en total?",
      analisis: "El 'interés simple' siempre se calcula sobre el monto inicial prestado. El valor del interés no cambia mes a mes.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Inter\xE9s 1 mes = 5% de 200.000 = $10.000"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Como es simple, pagas $10.000 cada mes fijo."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Total por 3 meses = $10.000 \xD7 3 = 30.000")
      ),

      resultado: "$30.000 de interés total."
    },
    {
      titulo: "La bola de nieve del Interés Compuesto",
      situacion: "Inviertes $100.000 al 10% de interés compuesto mensual. ¿Cuánto dinero tendrás al finalizar el segundo mes?",
      analisis: "El 'interés compuesto' se suma al capital cada mes. El interés del segundo mes se calcula sobre el nuevo total, no sobre los $100.000 iniciales.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 border-b border-blue-100 pb-1" }, "Mes 1: 10% de 100k = 10k. Total = $110.000"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 pt-1 text-blue-700 font-bold" }, "Mes 2: 10% de 110k = 11k. Total = 110k + 11k")
      ),

      resultado: "$121.000 al finalizar el mes 2."
    },
    {
      titulo: "Comparando préstamos",
      situacion: "Banco A ofrece $1.000.000 al 20% anual simple. Banco B ofrece $1.000.000 al 10% compuesto anual. A 2 años, ¿cuál cobra más intereses?",
      analisis: "Hay que proyectar ambos bancos a 2 años. El compuesto parece menor (10%), pero crece acumulativamente.",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs" }, /*#__PURE__*/
      React.createElement("p", { className: "font-mono text-slate-700" }, "Banco A (Simple): 20% = 200k/a\xF1o. \xD7 2 a\xF1os = ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "400k"), "."), /*#__PURE__*/
      React.createElement("p", { className: "font-mono text-slate-700" }, "Banco B (Compuesto):", /*#__PURE__*/React.createElement("br", null), "A\xF1o 1 = 100k (Total 1.100k).", /*#__PURE__*/React.createElement("br", null), "A\xF1o 2 = 10% de 1.100k = 110k.", /*#__PURE__*/React.createElement("br", null), "Total intereses B: 100k + 110k = ", /*#__PURE__*/React.createElement("strong", { className: "text-emerald-600" }, "210k"), ".")
      ),

      resultado: "El Banco A cobra más ($400.000 vs $210.000)."
    }];


    const ejemplosEstrategia3 = [
    {
      titulo: "El cargo fijo vs consumo",
      situacion: "El recibo del agua tiene un 'Cargo Fijo' de $15.000 y cobra $2.000 por cada metro cúbico (m³) consumido. Si la factura llegó por $45.000, ¿cuántos m³ se consumieron?",
      analisis: "Debemos estructurar una ecuación lineal. Restar el cargo fijo que no depende del consumo, y dividir el resto entre el costo unitario.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Ecuaci\xF3n: 45.000 = 15.000 + (2.000 \xD7 m)"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2 text-slate-500" }, "Restar cargo fijo: 45.000 - 15.000 = 30.000"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Dividir por unidad: 30.000 \xF7 2.000 = 15")
      ),

      resultado: "15 metros cúbicos (m³)."
    },
    {
      titulo: "Lectura de Medidores",
      situacion: "En un recibo de luz dice: 'Lectura anterior: 1250 kWh' y 'Lectura actual: 1350 kWh'. Si el costo por kWh es $500, ¿cuál es el valor total a pagar?",
      analisis: "El medidor es un acumulador. El consumo real del mes es la diferencia (resta) entre lo que marcaba hoy y lo que marcaba el mes pasado.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Consumo = Actual - Anterior"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Consumo = 1350 - 1250 = 100 kWh consumidos."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Costo = 100 kWh \xD7 $500 = 50.000")
      ),

      resultado: "$50.000 a pagar."
    },
    {
      titulo: "Tarifas por tramos (Subsidios)",
      situacion: "El gas cobra $1.000/m³ por los primeros 20 m³ (subsidiado), y $3.000 por cada m³ extra. Si consumes 25 m³, ¿cuánto pagas?",
      analisis: "El consumo se debe dividir en dos 'bolsas'. Una bolsa con los primeros 20 subsidiados, y otra bolsa con el sobrante (los 5 extra).",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", null, "Tramo 1 (Primeros 20): 20 \xD7 $1.000 = $20.000"), /*#__PURE__*/
      React.createElement("p", null, "Tramo 2 (El exceso): 25 consumidos - 20 l\xEDmite = 5 extra."), /*#__PURE__*/
      React.createElement("p", null, "Costo extra: 5 \xD7 $3.000 = $15.000"), /*#__PURE__*/
      React.createElement("p", null, "Total = 20.000 + 15.000 = 35.000")
      ),

      resultado: "$35.000 en total."
    }];


    const ejemplosEstrategia4 = [
    {
      titulo: "Tasa de Cambio (Divisas)",
      situacion: "Quieres comprar un juego que vale 40 dólares por internet. Si el banco te cobra el dólar a $4.000 COP y te suma una comisión fija de $5.000 COP, ¿cuánto pagas?",
      analisis: "Es una conversión multiplicativa seguida de una suma. Primero se debe llevar el precio en moneda extranjera a moneda local usando la Tasa Representativa.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Valor juego: 40 USD \xD7 $4.000 COP = $160.000 COP"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Comisi\xF3n del banco: + $5.000 COP"), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Total = 160.000 + 5.000")
      ),

      resultado: "$165.000 COP."
    },
    {
      titulo: "Rendimiento de Gasolina",
      situacion: "Un carro rinde 50 km por galón. Vas a hacer un viaje de 300 km. Si el galón cuesta $15.000, ¿cuánto dinero necesitas para la gasolina?",
      analisis: "Un problema de doble paso. 1) Averiguar cuántos galones completos se consumirán en el viaje dividiendo. 2) Multiplicar esos galones por el precio.",
      calculo: /*#__PURE__*/
      React.createElement("ul", { className: "text-xs space-y-2 font-mono" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Galones necesarios = 300 km \xF7 50 km/gal = 6 galones."), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, "Costo total = 6 galones \xD7 $15.000/gal = 90.000")
      ),

      resultado: "$90.000 para el viaje."
    },
    {
      titulo: "Escalando una receta (Proporciones)",
      situacion: "Una receta para 4 personas pide 300 gramos de carne. Estás organizando una cena para 10 personas. ¿Cuánta carne debes comprar?",
      analisis: "Usaremos el método de 'reducción a la unidad' para evitar errores lógicos. Averiguamos primero cuánto come 1 sola persona.",
      calculo: /*#__PURE__*/
      React.createElement("div", { className: "space-y-2 text-xs font-mono" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500" }, "Valor para 1 persona: 300g \xF7 4 = 75g por persona."), /*#__PURE__*/
      React.createElement("p", null, "Para 10 personas: 75g \xD7 10 = 750")
      ),

      resultado: "750 gramos de carne."
    }];


    // Función Helper para renderizar los Casos Didácticos
    const renderCasos = (casosArray, colorTheme) => /*#__PURE__*/
    React.createElement("div", { className: "space-y-12 mt-8" },
    casosArray.map((caso, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
    React.createElement("h4", { className: `text-lg font-bold text-slate-800 mb-4 flex items-center gap-2` }, /*#__PURE__*/
    React.createElement(Lightbulb, { className: `w-6 h-6 text-${colorTheme}-500` }), " Caso Pr\xE1ctico ", index + 1, ": ", caso.titulo
    ), /*#__PURE__*/
    React.createElement("div", { className: `bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800` }, /*#__PURE__*/
    React.createElement("p", { className: "text-slate-700 font-medium italic text-sm md:text-base" }, "\"", caso.situacion, "\"")
    ), /*#__PURE__*/

    React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
    React.createElement("div", { className: `bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col` }, /*#__PURE__*/
    React.createElement("div", { className: `absolute top-0 left-0 w-1 h-full bg-${colorTheme}-400` }), /*#__PURE__*/
    React.createElement("h5", { className: `font-bold text-${colorTheme}-700 flex items-center gap-2 mb-3` }, /*#__PURE__*/React.createElement(Search, { className: "w-4 h-4" }), " 1. Analizar"), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-slate-600" }, caso.analisis)
    ), /*#__PURE__*/
    React.createElement("div", { className: `bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col` }, /*#__PURE__*/
    React.createElement("div", { className: `absolute top-0 left-0 w-1 h-full bg-${colorTheme}-500` }), /*#__PURE__*/
    React.createElement("h5", { className: `font-bold text-${colorTheme}-800 flex items-center gap-2 mb-3` }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 2. Calcular"), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-slate-600 mt-auto bg-white p-3 rounded-lg border border-slate-100 shadow-sm" }, caso.calculo)
    ), /*#__PURE__*/
    React.createElement("div", { className: `bg-${colorTheme}-50 p-5 rounded-xl border border-${colorTheme}-100 relative overflow-hidden flex flex-col` }, /*#__PURE__*/
    React.createElement("div", { className: `absolute top-0 left-0 w-1 h-full bg-${colorTheme}-600` }), /*#__PURE__*/
    React.createElement("h5", { className: `font-bold text-${colorTheme}-800 flex items-center gap-2 mb-3` }, /*#__PURE__*/React.createElement(CheckCircle, { className: "w-4 h-4" }), " 3. Resultado"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-col gap-2 mt-auto" }, /*#__PURE__*/
    React.createElement("div", { className: `px-3 py-3 rounded-lg text-center shadow-sm bg-${colorTheme}-600` }, /*#__PURE__*/
    React.createElement("span", { className: "text-sm font-bold text-white tracking-wide" }, caso.resultado)
    )
    )
    )
    )
    )
    )
    );


    // ==========================================
    // QUIZ (PRÁCTICA) - 6 PREGUNTAS
    // ==========================================
    const questions = [
    {
      type: "Porcentajes (IVA)",
      question: "Un portátil tiene un precio de exhibición de $2.000.000. El vendedor te aclara que este precio aún NO incluye el 19% de IVA. ¿Cuánto debes pagar en caja?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center border border-cyan-200 shrink-0" }, /*#__PURE__*/
      React.createElement(DollarSign, { className: "w-8 h-8 text-cyan-600" })
      ), /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "text-xs text-slate-500 uppercase tracking-widest font-bold mb-1" }, "Precio Base"), /*#__PURE__*/
      React.createElement("div", { className: "text-2xl font-mono font-bold text-slate-800" }, "$2.000.000"), /*#__PURE__*/
      React.createElement("div", { className: "text-xs font-bold text-rose-500 mt-1" }, "+ 19% Impuesto")
      )
      ),

      options: ["$2.019.000", "$2.380.000", "$1.620.000", "$2.190.000"],
      correct: 1,
      feedback: "¡Excelente! Al entender el concepto multiplicador: $2.000.000 × 1.19 = $2.380.000."
    },
    {
      type: "Interés Financiero",
      question: "Pides un crédito de $1.000.000 a un mes con un 'interés de usura' del 20% mensual simple. Para evitar problemas, pagas todo exactamente al cumplir el mes. ¿Cuánto dinero entregaste?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center border-b border-slate-100 pb-3 mb-3" }, /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-slate-600" }, "Pr\xE9stamo Inicial:"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono font-bold text-slate-800" }, "$1.000.000")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center text-sm" }, /*#__PURE__*/
      React.createElement("span", { className: "text-rose-500 font-bold" }, "Inter\xE9s Mensual:"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-rose-600 font-bold" }, "+ 20%")
      )
      ),

      options: ["$1.020.000", "$1.200.000", "$200.000", "$1.500.000"],
      correct: 1,
      feedback: "¡Bien calculado! El 20% de 1.000.000 es 200.000. Entregas el capital (1M) más los intereses (200k) = 1.2M."
    },
    {
      type: "Lectura de Facturas",
      question: "En la factura del gas, el 'Cargo Fijo' es de $5.000. Consumiste 10 m³, y cada m³ cuesta $1.500. ¿Cuál es el valor total a pagar?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 text-slate-100 font-mono text-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center text-cyan-400 border-b border-slate-600 pb-2 mb-3" }, "** RECIBO DE SERVICIO **"), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between py-1" }, /*#__PURE__*/React.createElement("span", null, "Cargo Fijo:"), /*#__PURE__*/React.createElement("span", null, "$5.000")), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between py-1" }, /*#__PURE__*/React.createElement("span", null, "Consumo (m\xB3):"), /*#__PURE__*/React.createElement("span", null, "10")), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between py-1" }, /*#__PURE__*/React.createElement("span", null, "Tarifa x m\xB3:"), /*#__PURE__*/React.createElement("span", null, "$1.500")), /*#__PURE__*/
      React.createElement("div", { className: "border-t border-dashed border-slate-600 mt-3 pt-2 flex justify-between font-bold text-emerald-400" }, /*#__PURE__*/React.createElement("span", null, "TOTAL:"), /*#__PURE__*/React.createElement("span", null, "?"))
      ),

      options: ["$15.000", "$20.000", "$50.000", "$65.000"],
      correct: 1,
      feedback: "¡Perfecto! El consumo variable es 10 × 1.500 = 15.000. A esto le sumas el cargo fijo obligatorio de 5.000, para un total de $20.000."
    },
    {
      type: "Descuentos",
      question: "Unos tenis valen $200.000. Hoy tienen el 50% de descuento. Si pagas con la tarjeta VIP, te dan un 50% de descuento adicional sobre el precio ya rebajado. ¿Cuánto pagas finalmente?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 flex items-center justify-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-rose-500 text-white p-3 rounded-lg text-center shadow-md rotate-[-5deg]" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs font-bold opacity-80" }, "HOY"), /*#__PURE__*/
      React.createElement("span", { className: "block font-black text-xl" }, "-50%")
      ), /*#__PURE__*/
      React.createElement("span", { className: "font-black text-slate-400 text-2xl" }, "+"), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-500 text-white p-3 rounded-lg text-center shadow-md rotate-[5deg]" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs font-bold opacity-80" }, "TARJETA VIP"), /*#__PURE__*/
      React.createElement("span", { className: "block font-black text-xl" }, "-50%")
      )
      ),

      options: ["$0 (Gratis)", "$50.000", "$100.000", "$150.000"],
      correct: 1,
      feedback: "¡No caíste en la trampa! Primer descuento deja los tenis en $100.000. El segundo descuento (50%) aplica sobre esos $100.000, bajándolo a $50.000."
    },
    {
      type: "Conversión de Monedas",
      question: "Estás en el aeropuerto. Quieres comprar un café de $5 dólares. Si la casa de cambio dice: 'Compramos USD a $3.800 y Vendemos USD a $4.000'. ¿Cuántos pesos colombianos exactos te cobrarán por el café?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center border-b border-slate-100 pb-3 mb-3" }, /*#__PURE__*/
      React.createElement(Landmark, { className: "w-6 h-6 text-slate-600 mx-auto mb-1" }), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-slate-700" }, "CASA DE CAMBIO")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center px-4" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-400 font-bold uppercase" }, "Compra"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-emerald-600 font-bold" }, "$3.800")
      ), /*#__PURE__*/
      React.createElement("div", { className: "w-px h-8 bg-slate-200" }), /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-400 font-bold uppercase" }, "Venta"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-blue-600 font-bold" }, "$4.000")
      )
      )
      ),

      options: ["$19.000", "$20.000", "$4.000", "$7.800"],
      correct: 1,
      feedback: "¡Muy bien analizado! La casa de cambio te 'vende' los dólares (tú pagas pesos para obtener el café). Usas la tasa de venta: $4.000 × 5 = $20.000."
    },
    {
      type: "Rendimiento y Proporciones",
      question: "La pintura rinde 10 m² por cada galón. Tienes que pintar una pared de 20m de largo por 3m de alto. Si cada galón cuesta $40.000, ¿cuánto gastarás en pintura?",
      visual: /*#__PURE__*/
      React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center border-r border-slate-200 pr-6" }, /*#__PURE__*/
      React.createElement("div", { className: "w-16 h-12 bg-cyan-200 border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-800 mx-auto mb-2" }, "20x3m"), /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-slate-500 uppercase" }, "La Pared")
      ), /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "w-10 h-12 bg-slate-200 border-2 border-slate-300 rounded-b-md mx-auto mb-2 flex items-center justify-center text-[10px] font-bold text-slate-500" }, "10m\xB2"), /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-slate-500 uppercase" }, "Rendimiento")
      )
      ),

      options: ["$80.000", "$120.000", "$240.000", "$40.000"],
      correct: 2,
      feedback: "¡Cálculo maestro! 1. Área: 20×3 = 60 m². 2. Galones necesarios: 60 ÷ 10 = 6 galones. 3. Costo: 6 × 40.000 = $240.000."
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
      if (percentage === 1) return { title: "¡Cerebro Financiero!", desc: "Dominas por completo las matemáticas de la vida real. No te dejas engañar por falsos descuentos ni tasas de interés ocultas." };
      if (percentage >= 0.6) return { title: "¡Gran Razonamiento!", desc: "Manejas bien los números, pero cuidado con las trampas en las facturas y los intereses. Revisa los conceptos teóricos." };
      return { title: "¡Protege tu Dinero!", desc: "El razonamiento cuantitativo es vital no solo para el examen, sino para la vida. Vuelve a estudiar los conceptos fundamentales." };
    };

    const resultData = getResultMessage();

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-cyan-50/40 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#081826] p-8 md:p-12 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" }, /*#__PURE__*/
      React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-cyan-300 rounded-xl" })
      ), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(BarChart, { className: "w-5 h-5 text-cyan-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-cyan-300 font-semibold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia 4")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" }, "Razonamiento ", /*#__PURE__*/
      React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" }, "Cuantitativo")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" }, "Matem\xE1ticas para la vida real: eval\xFAa tu capacidad para interpretar finanzas, impuestos, descuentos enga\xF1osos, tasas de inter\xE9s y lectura de facturas."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] transform rotate-3" }, /*#__PURE__*/
      React.createElement(Wallet, { className: "w-10 h-10 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: Search, label: 'Dinero y Datos' },
      { id: 'teoria', icon: FileText, label: 'Casos de Finanzas' },
      { id: 'practica', icon: Calculator, label: 'Simulador Financiero' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-cyan-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'}` }, /*#__PURE__*/


      React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? 'text-cyan-500' : ''}` }),
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
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Las Matem\xE1ticas que s\xED vas a usar"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "Esta es la secci\xF3n de las pruebas donde las f\xF3rmulas abstractas se convierten en ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-cyan-700" }, "situaciones del d\xEDa a d\xEDa"), ". Si no desarrollas este razonamiento, podr\xEDas terminar pagando de m\xE1s en la vida real."
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-2xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "Los 4 pilares de esta competencia:"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-4" },
      [
      "Porcentajes (IVA y la trampa del doble descuento).",
      "Matemática Financiera (Interés simple vs. compuesto).",
      "Comprensión de Lectura (Cargos fijos en facturas y recibos).",
      "Tasas de Conversión (Divisas y consumo de gasolina)."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-1 bg-cyan-100 p-1 rounded-full shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(CheckCircle, { className: "w-3 h-3 text-cyan-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", null, text)
      )
      )
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-cyan-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/

      React.createElement("div", {
        className: "relative w-48 h-48 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(55deg) rotateZ(-30deg)', transformStyle: 'preserve-3d' } }, /*#__PURE__*/


      React.createElement("div", { className: "absolute inset-0 w-48 h-32 bg-gradient-to-tr from-blue-800 via-cyan-700 to-teal-500 rounded-xl shadow-[10px_20px_30px_rgba(6,182,212,0.4)] border border-cyan-300/30 p-4", style: { transform: 'translateZ(40px)' } }, /*#__PURE__*/
      React.createElement("div", { className: "w-8 h-6 bg-amber-200/80 rounded-md mb-8 border border-amber-400/50" }), /*#__PURE__*/
      React.createElement("div", { className: "w-3/4 h-2 bg-white/20 rounded-full mb-3" }), /*#__PURE__*/
      React.createElement("div", { className: "w-1/2 h-2 bg-white/20 rounded-full" })
      ), /*#__PURE__*/


      React.createElement("div", { className: "absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_20px_30px_rgba(245,158,11,0.4)] border-2 border-yellow-200", style: { transform: 'translateZ(80px)' } }, /*#__PURE__*/
      React.createElement(DollarSign, { className: "w-8 h-8 text-amber-800 opacity-80" })
      ), /*#__PURE__*/


      React.createElement("div", { className: "absolute bottom-[-40px] right-0 flex items-end gap-2", style: { transform: 'translateZ(10px)' } }, /*#__PURE__*/
      React.createElement("div", { className: "w-4 h-12 bg-emerald-400/80 rounded-t-sm shadow-lg" }), /*#__PURE__*/
      React.createElement("div", { className: "w-4 h-20 bg-emerald-400/80 rounded-t-sm shadow-lg" }), /*#__PURE__*/
      React.createElement("div", { className: "w-4 h-32 bg-emerald-400/80 rounded-t-sm shadow-lg" })
      )
      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" }, "\"Saber hacer c\xE1lculos es bueno. Saber c\xF3mo nos cobran es indispensable.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)] active:scale-95 flex items-center gap-2" },
      "Estudiar Casos Financieros ", /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-4 h-4" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center mb-10" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Manual de Casos Cotidianos"), /*#__PURE__*/
      React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full" })
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-16" }, /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-cyan-100 rounded-xl" }, /*#__PURE__*/React.createElement(Percent, { className: "w-6 h-6 text-cyan-600" })), "1. Porcentajes y Dinero (IVA y Descuentos)"

      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-2xl p-6 md:p-8 mb-8 border border-cyan-200 shadow-sm relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-2 h-full bg-cyan-500" }), /*#__PURE__*/
      React.createElement("h4", { className: "font-bold text-cyan-800 text-lg mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(BookOpen, { className: "w-6 h-6" }), " Concepto Fundamental"
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600 leading-relaxed mb-4" }, "Para agregar un porcentaje (como IVA 19%), multiplica por 1.19. Para quitar un descuento (como 20%), multiplica por 0.80. Recuerda: Descuentos sucesivos NO se suman."

      )
      ),
      renderCasos(ejemplosEstrategia1, 'cyan')
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-blue-100 rounded-xl" }, /*#__PURE__*/React.createElement(Landmark, { className: "w-6 h-6 text-blue-600" })), "2. Matem\xE1tica Financiera (Intereses)"

      ),
      renderCasos(ejemplosEstrategia2, 'blue')
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-teal-100 rounded-xl" }, /*#__PURE__*/React.createElement(FileText, { className: "w-6 h-6 text-teal-600" })), "3. Lectura de Facturas y Recibos"

      ),
      renderCasos(ejemplosEstrategia3, 'teal')
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-indigo-100 rounded-xl" }, /*#__PURE__*/React.createElement(LineChart, { className: "w-6 h-6 text-indigo-600" })), "4. Conversiones y Proporciones Reales"

      ),
      renderCasos(ejemplosEstrategia4, 'indigo')
      )
      )
      )
      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }), /*#__PURE__*/

      React.createElement("div", { className: "mb-8 flex justify-between items-end" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Escenario de: ", /*#__PURE__*/
      React.createElement("span", { className: "text-cyan-500" }, questions[currentQuestion].type)
      ), /*#__PURE__*/
      React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Simulaci\xF3n ", currentQuestion + 1)
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
      ), /*#__PURE__*/

      React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" }, /*#__PURE__*/
      React.createElement("div", {
        className: "bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500 ease-out",
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
        'bg-white border-slate-100 hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/


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
        'bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_10px_20px_rgba(6,182,212,0.2)] hover:-translate-y-1' :
        'bg-slate-100 text-slate-400 cursor-not-allowed'}` },


      currentQuestion === questions.length - 1 ? 'Ver Resultado Final' : 'Siguiente Simulación', /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" }), /*#__PURE__*/
      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Award, { className: "w-14 h-14 text-cyan-600" })
      ), /*#__PURE__*/
      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" }, resultData.desc), /*#__PURE__*/
      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2" },
      score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Soluciones Correctas")
      ), /*#__PURE__*/
      React.createElement("button", { onClick: resetQuiz, className: "bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto" }, /*#__PURE__*/
      React.createElement(RefreshCw, { className: "w-5 h-5" }), " Simular de nuevo"
      )
      )

      )

      )
      )
      ));

  }

  window.renderMathModule4 = (containerId) => {
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
      try {
        if (!window._reactRoots) window._reactRoots = {};
        // No unmounting here, studyModules.js handles it
        if (!window._reactRoots[containerId]) {
          window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
        }
        window._reactRoots[containerId].render(React.createElement(ModuloRazonamiento));
        console.log("mathModule4.js: Renderizado exitoso.");
      } catch (e) {
        console.error("mathModule4.js Error:", e);
        container.innerHTML = `<div class="p-10 text-center" style="color: #ef4444"><h2 class="text-xl font-bold">Error: ${e.message}</h2></div>`;
      }
    } else {
      console.warn("mathModule4.js: No se encontró ReactDOM o el contenedor.");
    }
  };
})();