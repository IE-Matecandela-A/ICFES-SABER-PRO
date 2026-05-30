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
      type: "Formulación y Ejecución - Porcentajes vs Absolutos",
      question: "A un grupo de 400 estudiantes de un colegio se les preguntó sobre su deporte favorito. Los resultados se muestran en el siguiente gráfico de barras, donde el Eje Y representa PORCENTAJES.\n\n¿Cuántos estudiantes (en cantidad exacta) respondieron que prefieren el Fútbol?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <!-- Eje Y -->
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="15" x2="280" y2="15" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="42" x2="280" y2="42" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="69" x2="280" y2="69" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="96" x2="280" y2="96" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="123" x2="280" y2="123" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="18" font-size="9" text-anchor="end">50%</text>
                    <text x="40" y="45" font-size="9" text-anchor="end">40%</text>
                    <text x="40" y="72" font-size="9" text-anchor="end">30%</text>
                    <text x="40" y="99" font-size="9" text-anchor="end">20%</text>
                    <text x="40" y="126" font-size="9" text-anchor="end">10%</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">0%</text>
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">Porcentaje (%)</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    <!-- Barras -->
                    <rect x="65" y="42" width="40" height="108" fill="#3b82f6"/> <!-- Futbol 40% -->
                    <text x="85" y="165" font-size="9" text-anchor="middle">Fútbol</text>
                    <rect x="125" y="69" width="40" height="81" fill="#f59e0b"/> <!-- Baloncesto 30% -->
                    <text x="145" y="165" font-size="9" text-anchor="middle">Balonc.</text>
                    <rect x="185" y="96" width="40" height="54" fill="#22c55e"/> <!-- Voleibol 20% -->
                    <text x="205" y="165" font-size="9" text-anchor="middle">Voleibol</text>
                    <rect x="245" y="123" width="40" height="27" fill="#ef4444"/> <!-- Otros 10% -->
                    <text x="265" y="165" font-size="9" text-anchor="middle">Otros</text>
                </svg>` } }),
      options: ["40 estudiantes","160 estudiantes","400 estudiantes","80 estudiantes"],
      correct: 1,
      feedback: "Cascarita clásica: La barra de Fútbol marca el 40%. Muchos marcan \"40\", pero piden la cantidad de estudiantes. El 40% de 400 es (40 * 400)/100 = 160 estudiantes."
    },
    {
      type: "Argumentación - Distorsión de Ejes",
      question: "El gerente de ventas de una empresa presenta este gráfico para afirmar: \"En el mes de Febrero nuestras ventas casi que TRIPLICARON las ventas obtenidas en Enero. Ha sido un crecimiento explosivo\".\n\n¿Es cierta la afirmación del gerente basándose estrictamente en los datos matemáticos?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="30" x2="280" y2="30" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="33" font-size="9" text-anchor="end">130</text>
                    <text x="40" y="73" font-size="9" text-anchor="end">120</text>
                    <text x="40" y="113" font-size="9" text-anchor="end">110</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">100</text> <!-- Eje base en 100 -->
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">Ventas (Millones)</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    <rect x="90" y="110" width="40" height="40" fill="#64748b"/> <!-- Ene: 110 -->
                    <text x="110" y="165" font-size="10" text-anchor="middle">Enero</text>
                    <rect x="180" y="30" width="40" height="120" fill="#22c55e"/> <!-- Feb: 130 -->
                    <text x="200" y="165" font-size="10" text-anchor="middle">Febrero</text>
                </svg>` } }),
      options: ["Sí, porque visualmente la barra de Febrero es casi 3 veces más alta que la de Enero.","Sí, de 110 millones a 130 millones hay una triplicación exacta de las ventas.","No, porque las ventas solo aumentaron de 110 a 130 millones; la gráfica es engañosa porque no inicia en cero.","No, porque el mes de Enero siempre tiene bajas ventas históricas."],
      correct: 2,
      feedback: "Cascarita de manipulación visual: Al iniciar el eje en 100, la barra de 110 mide \"10 unidades\" visuales y la de 130 mide \"30 unidades\". Parece el triple, pero matemáticamente 130 no es el triple de 110."
    },
    {
      type: "Interpretación - Probabilidad Condicional en Tablas",
      question: "La siguiente tabla muestra el resultado de las pruebas de conducción de un grupo de personas, clasificadas por su género.\n\nSi se elige al azar una persona y se sabe de antemano que esta persona APROBÓ el examen, ¿cuál es la probabilidad de que sea Mujer?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Género</th><th>Aprobó</th><th>Reprobó</th><th>Total</th></tr></thead>
                    <tbody>
                        <tr><td><b>Hombre</b></td><td>12</td><td>8</td><td>20</td></tr>
                        <tr><td><b>Mujer</b></td><td>18</td><td>12</td><td>30</td></tr>
                        <tr><td><b>Total</b></td><td>30</td><td>20</td><td>50</td></tr>
                    </tbody>
                </table>` } }),
      options: ["18 / 50","18 / 30","18 / 12","30 / 50"],
      correct: 1,
      feedback: "Cascarita condicional: Al decir \"se sabe que APROBÓ\", el universo ya no es el total (50), sino solo la columna de Aprobados (30). De esos 30, las mujeres son 18. Probabilidad = 18/30."
    },
    {
      type: "Formulación - Tasa vs Cantidad (Líneas)",
      question: "La gráfica muestra la TASA DE INFLACIÓN mensual de un país durante el primer trimestre del año. La inflación mide el porcentaje en que aumentan los precios.\n\nA partir de la gráfica, un estudiante concluye que \"En el mes de Marzo, las cosas se volvieron más baratas que en Febrero porque la línea bajó\". ¿Es correcta esta conclusión?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; background:white; border-radius:8px; padding:10px;">
                    <line x1="30" y1="130" x2="280" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="40" x2="280" y2="40" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="30" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="30" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="25" y="43" font-size="9" text-anchor="end">3%</text>
                    <text x="25" y="73" font-size="9" text-anchor="end">2%</text>
                    <text x="25" y="103" font-size="9" text-anchor="end">1%</text>
                    <text x="25" y="130" font-size="9" text-anchor="end">0%</text>
                    <text x="10" y="70" font-size="9" transform="rotate(-90 10,70)" text-anchor="middle">Inflación (%)</text>
                    
                    <polyline points="70,100 140,40 210,70" fill="none" stroke="#dc2626" stroke-width="3" />
                    <circle cx="70" cy="100" r="4" fill="#000"/><text x="70" y="145" font-size="10" text-anchor="middle">Ene</text>
                    <circle cx="140" cy="40" r="4" fill="#000"/><text x="140" y="145" font-size="10" text-anchor="middle">Feb</text>
                    <circle cx="210" cy="70" r="4" fill="#000"/><text x="210" y="145" font-size="10" text-anchor="middle">Mar</text>
                </svg>` } }),
      options: ["Sí, porque la pendiente es negativa entre Febrero y Marzo, indicando deflación.","Sí, porque el punto de Marzo está más cerca del 0% en el Eje Y.","No, porque la gráfica muestra que los precios siguieron subiendo en Marzo (un 2%), solo que subieron más lento que en Febrero.","No, porque en Enero la inflación era del 1% y en Marzo es mayor."],
      correct: 2,
      feedback: "Cascarita de tasas: Mientras la tasa esté en la zona positiva (arriba de 0%), la variable principal (los precios) sigue creciendo. Bajó la \"velocidad de crecimiento\", pero las cosas no son más baratas."
    },
    {
      type: "Formulación y Ejecución - Ángulos en Circulares",
      question: "Los resultados de una elección escolar con 120 votantes en total se muestran en la tabla adjunta. Se pide a un estudiante crear un Gráfico Circular (diagrama de pastel) con estos datos.\n\n¿Cuántos GRADOS (°) debe medir el ángulo del sector circular correspondiente al Candidato B?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Candidato</th><th>Votos</th></tr></thead>
                    <tbody>
                        <tr><td><b>Candidato A</b></td><td>60</td></tr>
                        <tr><td><b>Candidato B</b></td><td>40</td></tr>
                        <tr><td><b>Voto en Blanco</b></td><td>20</td></tr>
                    </tbody>
                </table>` } }),
      options: ["40°","120°","90°","33°"],
      correct: 1,
      feedback: "Cascarita de conversión: El total de votos es 120, lo que equivale a 360°. Para hallar los grados del Cand B, hacemos regla de 3: (40 votos * 360°) / 120 votos = 120°. No confundir el valor (40) o porcentaje (33%) con el ángulo."
    },
    {
      type: "Interpretación - Lectura de Leyendas",
      question: "La gráfica muestra el número de DEFECTOS DE FÁBRICA reportados en tres marcas de lavadoras durante el último año.\n\nUn cliente observa el gráfico y dice: \"Deberíamos comprar la Marca X porque su barra es la más alta, lo que indica superioridad\". ¿Qué error de interpretación está cometiendo el cliente?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="30" x2="280" y2="30" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="33" font-size="9" text-anchor="end">150</text>
                    <text x="40" y="73" font-size="9" text-anchor="end">100</text>
                    <text x="40" y="113" font-size="9" text-anchor="end">50</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">0</text>
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">N° de Defectos</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    <rect x="70" y="30" width="40" height="120" fill="#ef4444"/> <!-- Marca X: 150 -->
                    <text x="90" y="165" font-size="10" text-anchor="middle">Marca X</text>
                    <rect x="140" y="70" width="40" height="80" fill="#3b82f6"/> <!-- Marca Y: 100 -->
                    <text x="160" y="165" font-size="10" text-anchor="middle">Marca Y</text>
                    <rect x="210" y="110" width="40" height="40" fill="#22c55e"/> <!-- Marca Z: 50 -->
                    <text x="230" y="165" font-size="10" text-anchor="middle">Marca Z</text>
                </svg>` } }),
      options: ["Ninguno, en matemáticas las barras más altas siempre representan el mejor desempeño.","Ignorar que el Eje Y representa \"defectos\", por lo que la barra más alta indica la peor calidad, no la mejor.","Creer que 150 defectos es mucho, cuando en realidad es un número normal.","No tener en cuenta los precios de las lavadoras."],
      correct: 1,
      feedback: "Cascarita de contexto: Los estudiantes tienden a asociar automáticamente \"mayor tamaño = mejor\". El ICFES suele poner gráficas de inflación, quejas, contaminación o defectos donde lo más alto es lo negativo."
    },
    {
      type: "Ejecución - Pictogramas y Fracciones",
      question: "Un municipio muestra la cantidad de árboles plantados en dos zonas usando un pictograma. La convención indica que cada ícono completo (🌳) representa exactamente 200 árboles.\n\n¿Cuántos árboles se plantaron en total sumando ambas zonas?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="background:#fff; padding:15px; border-radius:8px; border:1px dashed #ccc; width:100%; text-align:center;">
                    <div style="font-size:0.9rem; font-weight:bold; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">Convención: 🌳 = 200 Árboles</div>
                    <div style="margin-bottom:12px; font-size:1.5rem; display:flex; align-items:center; justify-content:center;">
                        <span style="font-size:1rem; font-weight:bold; width:80px; text-align:left;">Zona A:</span> 🌳 🌳 🌳
                    </div>
                    <div style="font-size:1.5rem; display:flex; align-items:center; justify-content:center;">
                        <span style="font-size:1rem; font-weight:bold; width:80px; text-align:left;">Zona B:</span> 🌳 <div style="display:inline-block; width:0.5em; overflow:hidden;">🌳</div> 
                        <span style="font-size:0.8rem; color:#666; margin-left:10px;">(Medio ícono)</span>
                    </div>
                </div>` } }),
      options: ["900 árboles","4.5 árboles","800 árboles","500 árboles"],
      correct: 0,
      feedback: "Zona A tiene 3 iconos (600). Zona B tiene 1 y medio iconos (300). Total = 900. La trampa es sumar los iconos y responder 4.5, olvidando multiplicar por la convención."
    },
    {
      type: "Interpretación - Análisis de Pendientes",
      question: "La gráfica muestra la distancia recorrida por un automóvil a lo largo del tiempo durante un viaje por carretera.\n\nSabiendo que la velocidad es la relación entre distancia y tiempo, ¿en qué intervalo de tiempo el automóvil iba a la MAYOR velocidad?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; background:white; border-radius:8px; padding:10px;">
                    <line x1="30" y1="130" x2="280" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
                    <polyline points="30,130 90,100 160,100 230,20 280,20" fill="none" stroke="#0ea5e9" stroke-width="3" />
                    <text x="90" y="145" font-size="10" text-anchor="middle">1 Hr</text>
                    <text x="160" y="145" font-size="10" text-anchor="middle">2 Hr</text>
                    <text x="230" y="145" font-size="10" text-anchor="middle">3 Hr</text>
                    <text x="10" y="70" font-size="9" transform="rotate(-90 10,70)" text-anchor="middle">Distancia (km)</text>
                </svg>` } }),
      options: ["Entre las 0 horas y la 1 Hr.","Entre la 1 Hr y las 2 Hr.","Entre las 2 Hr y las 3 Hr.","La velocidad fue constante durante todo el viaje."],
      correct: 2,
      feedback: "En un gráfico Distancia vs Tiempo, una mayor pendiente (inclinación más pronunciada) indica mayor velocidad. El tramo más empinado es de la hora 2 a la 3."
    },
    {
      type: "Formulación - Interpolación en Dispersión",
      question: "Un pediatra usa el siguiente diagrama de dispersión para relacionar la Edad (meses) de los bebés con su Peso (kg). Un niño de 5 meses llega a la consulta.\n\nProyectando la tendencia lineal de los datos mostrados en la gráfica, ¿qué peso aproximado es esperable para un bebé de 5 meses?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 200 140" style="width:100%; max-width:280px; background:white; padding:10px; border-radius:8px;">
                    <line x1="20" y1="120" x2="180" y2="120" stroke="#333" stroke-width="1.5" />
                    <line x1="20" y1="10" x2="20" y2="120" stroke="#333" stroke-width="1.5" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="20" y1="60" x2="180" y2="60" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="20" y1="20" x2="180" y2="20" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="60" y1="120" x2="60" y2="10" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="100" y1="120" x2="100" y2="10" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="140" y1="120" x2="140" y2="10" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    
                    <text x="15" y="103" font-size="8" text-anchor="end">4</text>
                    <text x="15" y="63" font-size="8" text-anchor="end">6</text>
                    <text x="15" y="23" font-size="8" text-anchor="end">8</text>
                    <text x="60" y="132" font-size="8" text-anchor="middle">2</text>
                    <text x="100" y="132" font-size="8" text-anchor="middle">4</text>
                    <text x="140" y="132" font-size="8" text-anchor="middle">6</text>

                    <text x="100" y="145" font-size="9" text-anchor="middle">Edad (meses)</text>
                    <text x="5" y="65" font-size="9" transform="rotate(-90 5,65)" text-anchor="middle">Peso (kg)</text>
                    
                    <!-- Puntos: (2, 4), (4, 6), (6, 8) -->
                    <circle cx="60" cy="100" r="3" fill="#8b5cf6"/><circle cx="55" cy="105" r="3" fill="#8b5cf6"/>
                    <circle cx="100" cy="60" r="3" fill="#8b5cf6"/><circle cx="105" cy="55" r="3" fill="#8b5cf6"/>
                    <circle cx="140" cy="20" r="3" fill="#8b5cf6"/><circle cx="135" cy="25" r="3" fill="#8b5cf6"/>
                </svg>` } }),
      options: ["5 kg","7 kg","6 kg","8 kg"],
      correct: 1,
      feedback: "A los 2 meses pesa 4kg, a los 4 meses pesa 6kg, a los 6 meses pesa 8kg. Interpolando en la línea, a los 5 meses (mitad entre 4 y 6) le corresponde un peso de 7kg (mitad entre 6 y 8)."
    },
    {
      type: "Razonamiento - Porcentajes Faltantes",
      question: "La superficie total de una finca es de 200 hectáreas (ha), distribuidas en diferentes cultivos y una zona de bosque, como muestra el gráfico circular.\n\nSabiendo que el círculo completo es el 100%, ¿cuántas hectáreas exactas corresponden a la zona de Bosque?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:center; gap:20px; background:white; padding:15px; border-radius:8px;">
                    <div style="width: 140px; height: 140px; border-radius: 50%; background: conic-gradient(#eab308 0% 40%, #14b8a6 40% 75%, #a8a29e 75% 85%, #22c55e 85% 100%); position:relative;">
                        <span style="position:absolute; top:20%; right:15%; font-size:12px; font-weight:bold;">40%</span>
                        <span style="position:absolute; bottom:15%; right:40%; font-size:12px; font-weight:bold;">35%</span>
                        <span style="position:absolute; top:40%; left:10%; font-size:12px; font-weight:bold;">10%</span>
                        <span style="position:absolute; top:10%; left:40%; font-size:12px; font-weight:bold;">? %</span>
                    </div>
                    <div style="font-size:0.9rem;">
                        <div><span style="display:inline-block; width:12px; height:12px; background:#eab308;"></span> Maíz (40%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#14b8a6;"></span> Trigo (35%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#a8a29e;"></span> Lácteos (10%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#22c55e;"></span> Bosque (?)</div>
                    </div>
                </div>` } }),
      options: ["15 ha","30 ha","100 ha","200 ha"],
      correct: 1,
      feedback: "Cascarita de dos pasos. Paso 1: Hallar el % del bosque: 100% - (40+35+10) = 15%. Paso 2: Hallar la cantidad. El 15% de 200 hectáreas es (15*200)/100 = 30 ha."
    },
    {
      type: "Argumentación - Barras Apiladas vs Proporción",
      question: "La gráfica muestra la composición de hombres y mujeres en tres salones de clase. Cada barra está apilada.\n\nUn estudiante afirma: \"El Salón B es el que tiene mayor predominio (porcentaje) de mujeres en su propio grupo\". ¿Es correcta esta afirmación?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="30" x2="280" y2="30" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="33" font-size="9" text-anchor="end">30</text>
                    <text x="40" y="73" font-size="9" text-anchor="end">20</text>
                    <text x="40" y="113" font-size="9" text-anchor="end">10</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">0</text>
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">Total Personas</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    
                    <rect x="70" y="110" width="30" height="40" fill="#60a5fa"/> <!-- H -->
                    <rect x="70" y="70" width="30" height="40" fill="#f472b6"/> <!-- M -->
                    <text x="85" y="165" font-size="10" text-anchor="middle">Salón A</text>
                    
                    <rect x="135" y="70" width="30" height="80" fill="#60a5fa"/> <!-- H -->
                    <rect x="135" y="10" width="30" height="60" fill="#f472b6"/> <!-- M -->
                    <text x="150" y="165" font-size="10" text-anchor="middle">Salón B</text>

                    <rect x="200" y="142" width="30" height="8" fill="#60a5fa"/> <!-- H -->
                    <rect x="200" y="110" width="30" height="32" fill="#f472b6"/> <!-- M -->
                    <text x="215" y="165" font-size="10" text-anchor="middle">Salón C</text>

                    <!-- Leyenda -->
                    <rect x="245" y="20" width="10" height="10" fill="#f472b6"/><text x="260" y="28" font-size="9">Mujer</text>
                    <rect x="245" y="35" width="10" height="10" fill="#60a5fa"/><text x="260" y="43" font-size="9">Hombre</text>
                </svg>` } }),
      options: ["Sí, porque la porción rosada del Salón B es la más grande de todas en cantidad absoluta (15 mujeres).","Sí, porque el Salón B tiene la mayor cantidad de personas en total.","No, porque en el Salón C casi la totalidad de su barra corresponde a mujeres, representando un porcentaje mucho mayor (80%).","No, porque el Salón A es el único donde hay empate."],
      correct: 2,
      feedback: "Cascarita de Proporción vs Absoluto: El Salón B tiene más mujeres contadas una a una (15), pero su barra azul (hombres) es enorme. El Salón C es pequeño, pero casi todo es rosado, indicando el mayor \"predominio o porcentaje\"."
    },
    {
      type: "Ejecución - Áreas o Acumulados (Líneas)",
      question: "Un estudiante guarda dinero en una alcancía. La gráfica muestra el DEPÓSITO DIARIO que hace (cuánto mete ese día, no el total acumulado).\n\nAl finalizar el Día 3, ¿cuánto dinero en TOTAL hay dentro de la alcancía?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; background:white; border-radius:8px; padding:10px;">
                    <line x1="30" y1="130" x2="280" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="40" x2="280" y2="40" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="30" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="30" y1="100" x2="280" y2="100" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="25" y="43" font-size="9" text-anchor="end">\$300</text>
                    <text x="25" y="73" font-size="9" text-anchor="end">\$200</text>
                    <text x="25" y="103" font-size="9" text-anchor="end">\$100</text>
                    <text x="25" y="130" font-size="9" text-anchor="end">\$0</text>
                    <text x="10" y="70" font-size="9" transform="rotate(-90 10,70)" text-anchor="middle">Depósito (\$)</text>
                    
                    <polyline points="80,100 160,40 240,70" fill="none" stroke="#10b981" stroke-width="3" />
                    <circle cx="80" cy="100" r="4" fill="#000"/><text x="80" y="145" font-size="10" text-anchor="middle">Día 1</text>
                    <circle cx="160" cy="40" r="4" fill="#000"/><text x="160" y="145" font-size="10" text-anchor="middle">Día 2</text>
                    <circle cx="240" cy="70" r="4" fill="#000"/><text x="240" y="145" font-size="10" text-anchor="middle">Día 3</text>
                </svg>` } }),
      options: ["$200","$300","$600","$100"],
      correct: 2,
      feedback: "Cascarita de acumulación: Si la pregunta pidiera el depósito del Día 3 la respuesta sería $200. Pero pide el TOTAL acumulado. Debemos sumar: Día 1 ($100) + Día 2 ($300) + Día 3 ($200) = $600."
    },
    {
      type: "Formulación - Cruce de Líneas",
      question: "Dos empresas de telefonía ofrecen planes. El Plan A cobra un cargo fijo alto pero el minuto es barato. El Plan B no tiene cargo fijo pero el minuto es caro. La gráfica ilustra Costo Total vs Minutos Consumidos.\n\n¿A partir de cuántos minutos empieza a ser más económico (barato) para un usuario elegir el Plan A sobre el Plan B?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; background:white; border-radius:8px; padding:10px;">
                    <line x1="30" y1="130" x2="280" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
                    
                    <line x1="30" y1="130" x2="220" y2="20" stroke="#dc2626" stroke-width="2"/>
                    <text x="230" y="25" font-size="10" fill="#dc2626">Plan B</text>
                    
                    <line x1="30" y1="80" x2="250" y2="40" stroke="#2563eb" stroke-width="2"/>
                    <text x="260" y="45" font-size="10" fill="#2563eb">Plan A</text>

                    <line x1="115" y1="130" x2="115" y2="80" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="115" y="145" font-size="10" text-anchor="middle">50 min</text>

                    <text x="10" y="70" font-size="9" transform="rotate(-90 10,70)" text-anchor="middle">Costo (\$)</text>
                    <text x="150" y="145" font-size="9" text-anchor="middle">Minutos</text>
                </svg>` } }),
      options: ["Es más barato desde el minuto 0.","A partir del minuto 50 (cuando la línea azul queda por debajo de la roja).","Nunca, el Plan B siempre es mejor porque inicia en 0.","A partir del minuto 100."],
      correct: 1,
      feedback: "Análisis de cruce: Antes del punto de intersección (50 min), el Plan A (azul) está por encima, es más caro. Después del minuto 50, el Plan A queda por debajo del Plan B, haciéndose más económico."
    },
    {
      type: "Formulación - Regla de Tres en Tablas",
      question: "Un chef tiene una tabla con los ingredientes para preparar un postre diseñado exactamente para 4 personas.\n\nSi el chef necesita preparar este mismo postre para 10 personas manteniendo la receta, ¿cuántos gramos de Azúcar necesitará?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Ingrediente</th><th>Cantidad (para 4 pers)</th></tr></thead>
                    <tbody>
                        <tr><td><b>Harina</b></td><td>200 g</td></tr>
                        <tr><td><b>Azúcar</b></td><td>80 g</td></tr>
                        <tr><td><b>Leche</b></td><td>120 ml</td></tr>
                    </tbody>
                </table>` } }),
      options: ["160 g","200 g","800 g","320 g"],
      correct: 1,
      feedback: "Cascarita de Proporcionalidad: 4 personas requieren 80g de azúcar. Para 1 persona es 80/4 = 20g. Para 10 personas será 20g * 10 = 200g. O alternativamente, multiplicar por 2.5."
    },
    {
      type: "Interpretación - Suma de Intervalos en Histogramas",
      question: "Un cine realizó una encuesta sobre la edad de los asistentes a una película clásica, agrupando los resultados en rangos de edad (10 a 20 años, 20 a 30 años, etc.).\n\n¿Cuántas personas asistentes tenían 30 AÑOS O MÁS?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="30" x2="280" y2="30" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="33" font-size="9" text-anchor="end">30</text>
                    <text x="40" y="73" font-size="9" text-anchor="end">20</text>
                    <text x="40" y="113" font-size="9" text-anchor="end">10</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">0</text>
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">Personas</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    
                    <rect x="50" y="110" width="45" height="40" fill="#a855f7" stroke="white"/>
                    <text x="72" y="165" font-size="9" text-anchor="middle">10-20</text>
                    <rect x="95" y="30" width="45" height="120" fill="#a855f7" stroke="white"/>
                    <text x="117" y="165" font-size="9" text-anchor="middle">20-30</text>
                    <rect x="140" y="70" width="45" height="80" fill="#a855f7" stroke="white"/>
                    <text x="162" y="165" font-size="9" text-anchor="middle">30-40</text>
                    <rect x="185" y="110" width="45" height="40" fill="#a855f7" stroke="white"/>
                    <text x="207" y="165" font-size="9" text-anchor="middle">40-50</text>
                    <rect x="230" y="110" width="45" height="40" fill="#a855f7" stroke="white"/>
                    <text x="252" y="165" font-size="9" text-anchor="middle">50+</text>
                </svg>` } }),
      options: ["20 personas","30 personas","40 personas","80 personas"],
      correct: 2,
      feedback: "Trampa del Histograma: Piden \"30 o más\", eso significa que hay que sumar todas las barras desde los 30 hacia arriba. Es decir, [30-40] + [40-50] + [50+] = 20 + 10 + 10 = 40 personas."
    },
    {
      type: "Argumentación - Diferencia Porcentual",
      question: "La tabla muestra las ventas de dos sucursales en los Años 1 y 2. El dueño afirma: \"La Sucursal B tuvo el mayor porcentaje de crecimiento porque sus ventas aumentaron en 50 unidades, mientras que la A solo aumentó 10 unidades\".\n\n¿Es válido el argumento del dueño para evaluar el PORCENTAJE de crecimiento?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Sucursal</th><th>Ventas Año 1</th><th>Ventas Año 2</th></tr></thead>
                    <tbody>
                        <tr><td><b>Sucursal A</b></td><td>10 unid.</td><td>20 unid.</td></tr>
                        <tr><td><b>Sucursal B</b></td><td>100 unid.</td><td>150 unid.</td></tr>
                    </tbody>
                </table>` } }),
      options: ["Sí, 50 unidades es mayor que 10 unidades, por ende es un mayor porcentaje.","No, porque la Sucursal A creció un 100% (el doble), mientras que la Sucursal B solo creció un 50%.","Sí, porque 150 unidades es el número más grande de toda la tabla.","No, porque los porcentajes no se pueden calcular con estos datos."],
      correct: 1,
      feedback: "Cascarita entre Absoluto y Relativo: La Sucursal B creció más en \"cantidad neta\" (50), pero en \"porcentaje\", la Sucursal A duplicó sus ventas (pasó de 10 a 20, creció 100%), mientras B solo creció la mitad de su valor inicial (50%)."
    },
    {
      type: "Ejecución - Promedios Simples",
      question: "La tabla presenta las calificaciones (de 0 a 10) de tres estudiantes en cuatro asignaturas. Gana la beca quien obtenga el promedio más alto.\n\n¿Qué estudiante se llevó la beca?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Estudiante</th><th>Matemáticas</th><th>Lenguaje</th><th>Ciencias</th><th>Sociales</th></tr></thead>
                    <tbody>
                        <tr><td><b>Ana</b></td><td>6</td><td>8</td><td>7</td><td>7</td></tr>
                        <tr><td><b>Luis</b></td><td>9</td><td>5</td><td>6</td><td>6</td></tr>
                        <tr><td><b>María</b></td><td>7</td><td>7</td><td>8</td><td>8</td></tr>
                    </tbody>
                </table>` } }),
      options: ["Ana","Luis","María","Ana y María empataron"],
      correct: 2,
      feedback: "Suma de Ana = 28. Suma de Luis = 26. Suma de María = 30. Al tener la suma más alta entre la misma cantidad de notas (4), María lógicamente tiene el mayor promedio (7.5)."
    },
    {
      type: "Interpretación - Puntos Atípicos (Outliers)",
      question: "Un diagrama de dispersión grafica el peso (kg) vs la estatura (cm) de un grupo de jóvenes. Se observa una clara tendencia positiva, excepto por un punto aislado.\n\n¿Qué describe físicamente el punto atípico marcado con la estrella roja?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 200 140" style="width:100%; max-width:280px; background:white; padding:10px; border-radius:8px;">
                    <line x1="20" y1="120" x2="180" y2="120" stroke="#333" stroke-width="1.5" />
                    <line x1="20" y1="10" x2="20" y2="120" stroke="#333" stroke-width="1.5" />
                    <circle cx="40" cy="100" r="3" fill="#64748b"/><circle cx="50" cy="95" r="3" fill="#64748b"/>
                    <circle cx="65" cy="80" r="3" fill="#64748b"/><circle cx="75" cy="70" r="3" fill="#64748b"/>
                    <circle cx="90" cy="65" r="3" fill="#64748b"/><circle cx="105" cy="50" r="3" fill="#64748b"/>
                    <circle cx="120" cy="40" r="3" fill="#64748b"/><circle cx="130" cy="30" r="3" fill="#64748b"/>
                    <polygon points="140,105 145,115 135,115" fill="#dc2626"/>
                    <text x="140" y="100" font-size="8" fill="#dc2626" text-anchor="middle">Atípico</text>

                    <text x="100" y="135" font-size="9" text-anchor="middle">Peso (X)</text>
                    <text x="10" y="65" font-size="9" transform="rotate(-90 10,65)" text-anchor="middle">Estatura (Y)</text>
                </svg>` } }),
      options: ["Un joven muy alto y muy pesado.","Un joven de baja estatura pero con un peso elevado.","Un joven muy alto pero con bajo peso.","Un joven promedio que sigue exactamente la tendencia."],
      correct: 1,
      feedback: "El punto está situado a la derecha en el Eje X (peso alto) pero se encuentra muy abajo en el Eje Y (estatura baja). Es un outlier o caso atípico."
    },
    {
      type: "Formulación - Interpolación en Líneas Dobles",
      question: "El gráfico muestra los costos de producción y los ingresos por ventas de una fábrica de zapatos, en función de las docenas fabricadas.\n\nSe llama \"Punto de Equilibrio\" al momento donde no hay ganancias ni pérdidas (Ingresos = Costos). ¿A las cuántas docenas se alcanza este punto?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px; background:white; border-radius:8px; padding:10px;">
                    <line x1="30" y1="130" x2="280" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="10" x2="30" y2="130" stroke="#333" stroke-width="1.5"/>
                    <line x1="30" y1="90" x2="260" y2="30" stroke="#f59e0b" stroke-width="2"/>
                    <text x="270" y="35" font-size="9" fill="#f59e0b">Costos</text>
                    <line x1="30" y1="130" x2="200" y2="10" stroke="#22c55e" stroke-width="2"/>
                    <text x="210" y="15" font-size="9" fill="#22c55e">Ingresos</text>
                    
                    <line x1="120" y1="130" x2="120" y2="65" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="120" y="145" font-size="10" text-anchor="middle">50 Docenas</text>

                    <text x="10" y="70" font-size="9" transform="rotate(-90 10,70)" text-anchor="middle">Dinero (\$)</text>
                    <text x="260" y="145" font-size="9" text-anchor="middle">Docenas</text>
                </svg>` } }),
      options: ["A las 0 docenas","A las 100 docenas","A las 50 docenas","No hay punto de equilibrio"],
      correct: 2,
      feedback: "El punto de equilibrio es literalmente donde se cruzan las dos líneas (Costos e Ingresos son iguales). Bajando por la línea punteada hasta el Eje X, leemos \"50 Docenas\"."
    },
    {
      type: "Razonamiento - Inferencia con Datos Faltantes",
      question: "Se tiene un gráfico de barras incompleto que representa las notas de 50 alumnos. Solo se ven los alumnos que sacaron Insuficiente, Aceptable y Sobresaliente. Se borró la barra de \"Excelente\".\n\nConociendo que el total de alumnos evaluados fue de 50, ¿cuántos alumnos sacaron la nota Excelente?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 180" style="width:100%; max-width:400px; background:white; border-radius:8px; padding:10px;">
                    <line x1="45" y1="10" x2="45" y2="150" stroke="#333" stroke-width="1.5"/>
                    <line x1="45" y1="30" x2="280" y2="30" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="70" x2="280" y2="70" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <line x1="45" y1="110" x2="280" y2="110" stroke="#cbd5e1" stroke-dasharray="2,2"/>
                    <text x="40" y="33" font-size="9" text-anchor="end">30</text>
                    <text x="40" y="73" font-size="9" text-anchor="end">20</text>
                    <text x="40" y="113" font-size="9" text-anchor="end">10</text>
                    <text x="40" y="150" font-size="9" text-anchor="end">0</text>
                    <text x="15" y="80" font-size="9" transform="rotate(-90 15,80)" text-anchor="middle">Alumnos</text>
                    <line x1="45" y1="150" x2="280" y2="150" stroke="#333" stroke-width="1.5"/>
                    
                    <rect x="60" y="110" width="35" height="40" fill="#facc15"/>
                    <text x="77" y="165" font-size="8" text-anchor="middle">Insuf</text>
                    <rect x="110" y="70" width="35" height="80" fill="#facc15"/>
                    <text x="127" y="165" font-size="8" text-anchor="middle">Acep</text>
                    <rect x="160" y="90" width="35" height="60" fill="#facc15"/>
                    <text x="177" y="165" font-size="8" text-anchor="middle">Sobre</text>
                    <rect x="210" y="80" width="35" height="70" fill="transparent" stroke="#94a3b8" stroke-dasharray="2,2"/>
                    <text x="227" y="165" font-size="8" text-anchor="middle">Excel</text>
                    <text x="227" y="115" font-size="16" fill="#94a3b8" text-anchor="middle">?</text>
                </svg>` } }),
      options: ["5 alumnos","10 alumnos","15 alumnos","0 alumnos"],
      correct: 0,
      feedback: "Proyectemos: Insuf=10, Acep=20, Sobre=15 (está en la mitad del 10 y 20). Suma visible = 10+20+15 = 45 alumnos. Si el total es 50, los que faltan son 50 - 45 = 5 alumnos."
    },
    {
      type: "Traducción de Datos - Circular",
      question: "Un colegio tiene 200 estudiantes de grado 11. En una encuesta sobre la carrera que desean estudiar, 100 estudiantes respondieron \"Ingeniería\", 50 respondieron \"Medicina\" y los 50 restantes \"Artes\".\n\n¿Cuál de los siguientes diagramas circulares representa correctamente la proporción de esta información?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; max-width:400px; margin:0 auto; background:white; padding:15px; border-radius:8px;">
                    <div style="grid-column: 1 / -1; font-size: 0.8rem; text-align:center; margin-bottom:10px; border-bottom: 1px solid #ccc; padding-bottom:5px;">
                        <b>Leyenda:</b> <span style="color:#3b82f6;">■ Ing</span> <span style="color:#ef4444;">■ Med</span> <span style="color:#22c55e;">■ Artes</span>
                    </div>
                    <!-- A: 50%, 25%, 25% (CORRECTO) -->
                    <div style="text-align:center;"><b style="font-size:0.9rem;">Gráfica A</b>
                        <div style="width:80px; height:80px; border-radius:50%; background:conic-gradient(#3b82f6 0 50%, #ef4444 50% 75%, #22c55e 75% 100%); margin:5px auto; border:1px solid #ddd;"></div>
                    </div>
                    <!-- B: 33%, 33%, 33% -->
                    <div style="text-align:center;"><b style="font-size:0.9rem;">Gráfica B</b>
                        <div style="width:80px; height:80px; border-radius:50%; background:conic-gradient(#3b82f6 0 33%, #ef4444 33% 66%, #22c55e 66% 100%); margin:5px auto; border:1px solid #ddd;"></div>
                    </div>
                    <!-- C: Trap (Swapped colors: 50% Med) -->
                    <div style="text-align:center;"><b style="font-size:0.9rem;">Gráfica C</b>
                        <div style="width:80px; height:80px; border-radius:50%; background:conic-gradient(#ef4444 0 50%, #3b82f6 50% 75%, #22c55e 75% 100%); margin:5px auto; border:1px solid #ddd;"></div>
                    </div>
                    <!-- D: 75%, 12.5, 12.5 -->
                    <div style="text-align:center;"><b style="font-size:0.9rem;">Gráfica D</b>
                        <div style="width:80px; height:80px; border-radius:50%; background:conic-gradient(#3b82f6 0 75%, #ef4444 75% 87.5%, #22c55e 87.5% 100%); margin:5px auto; border:1px solid #ddd;"></div>
                    </div>
                </div>` } }),
      options: ["Gráfica A","Gráfica B","Gráfica C","Gráfica D"],
      correct: 0,
      feedback: "Ingeniería (100) es exactamente la MITAD del total (200), por lo que debe ocupar el 50% del círculo (azul). Medicina y Artes son la cuarta parte cada uno (25%). La Gráfica A muestra exactamente esto."
    },
    {
      type: "Traducción de Datos - Gráfico de Líneas",
      question: "Un tanque que contiene 100 litros de agua tiene una fuga. El tanque pierde agua de manera constante hasta vaciarse exactamente a la mitad a las 2 horas. En ese momento, se repara la fuga y el nivel del agua se mantiene sin cambios durante 2 horas más.\n\n¿Qué gráfica representa correctamente el volumen de agua en el tanque en función del tiempo?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width:400px; margin:0 auto; background:white; padding:15px; border-radius:8px;">
                    <!-- A: Correcta -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica A</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333" stroke-width="1"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333" stroke-width="1"/>
                            <text x="10" y="15" font-size="7" text-anchor="end">100</text><text x="10" y="42" font-size="7" text-anchor="end">50</text>
                            <text x="55" y="78" font-size="7" text-anchor="middle">2h</text><text x="95" y="78" font-size="7" text-anchor="middle">4h</text>
                            <polyline points="15,15 55,40 95,40" fill="none" stroke="#2563eb" stroke-width="2"/>
                        </svg>
                    </div>
                    <!-- B: Cae a cero -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica B</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333" stroke-width="1"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333" stroke-width="1"/>
                            <text x="10" y="15" font-size="7" text-anchor="end">100</text><text x="10" y="42" font-size="7" text-anchor="end">50</text>
                            <polyline points="15,15 55,70 95,70" fill="none" stroke="#2563eb" stroke-width="2"/>
                        </svg>
                    </div>
                    <!-- C: Invertida -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica C</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333" stroke-width="1"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333" stroke-width="1"/>
                            <text x="10" y="15" font-size="7" text-anchor="end">100</text><text x="10" y="42" font-size="7" text-anchor="end">50</text>
                            <polyline points="15,70 55,40 95,40" fill="none" stroke="#2563eb" stroke-width="2"/>
                        </svg>
                    </div>
                    <!-- D: Tarde en bajar -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica D</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333" stroke-width="1"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333" stroke-width="1"/>
                            <text x="10" y="15" font-size="7" text-anchor="end">100</text><text x="10" y="42" font-size="7" text-anchor="end">50</text>
                            <polyline points="15,15 55,15 95,40" fill="none" stroke="#2563eb" stroke-width="2"/>
                        </svg>
                    </div>
                </div>` } }),
      options: ["Gráfica A","Gráfica B","Gráfica C","Gráfica D"],
      correct: 0,
      feedback: "Empieza en 100, baja linealmente hasta 50 (la mitad) en el eje X=2. Luego, como se repara la fuga, el volumen no cambia, creando una línea horizontal en Y=50."
    },
    {
      type: "Traducción de Datos - Dispersión",
      question: "Un estudio ambiental de varias ciudades en una cordillera afirma lo siguiente: \"Existe una clara relación inversamente proporcional: a medida que los pueblos se ubican a mayor altitud (msnm), su temperatura promedio anual desciende\".\n\n¿Cuál diagrama de dispersión corresponde estrictamente a la afirmación del estudio?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width:400px; margin:0 auto; background:white; padding:15px; border-radius:8px;">
                    <!-- A: Positiva -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica A</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <circle cx="25" cy="60" r="2" fill="#ef4444"/><circle cx="45" cy="45" r="2" fill="#ef4444"/><circle cx="65" cy="30" r="2" fill="#ef4444"/><circle cx="85" cy="15" r="2" fill="#ef4444"/>
                        </svg>
                    </div>
                    <!-- B: Negativa (Correcta) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica B</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <circle cx="25" cy="15" r="2" fill="#ef4444"/><circle cx="45" cy="30" r="2" fill="#ef4444"/><circle cx="65" cy="45" r="2" fill="#ef4444"/><circle cx="85" cy="60" r="2" fill="#ef4444"/>
                        </svg>
                    </div>
                    <!-- C: Horizontal -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica C</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <circle cx="25" cy="40" r="2" fill="#ef4444"/><circle cx="45" cy="40" r="2" fill="#ef4444"/><circle cx="65" cy="40" r="2" fill="#ef4444"/><circle cx="85" cy="40" r="2" fill="#ef4444"/>
                        </svg>
                    </div>
                    <!-- D: Random -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica D</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <circle cx="25" cy="25" r="2" fill="#ef4444"/><circle cx="45" cy="55" r="2" fill="#ef4444"/><circle cx="65" cy="15" r="2" fill="#ef4444"/><circle cx="85" cy="45" r="2" fill="#ef4444"/>
                        </svg>
                    </div>
                </div>` } }),
      options: ["Gráfica A","Gráfica B","Gráfica C","Gráfica D"],
      correct: 1,
      feedback: "Una relación \"inversamente proporcional\" (a mayor X, menor Y) siempre se dibuja como una nube de puntos con pendiente negativa (que baja de izquierda a derecha), como en la Gráfica B."
    },
    {
      type: "Traducción de Datos - Gráfico de Barras",
      question: "Un vendedor registró las siguientes ventas trimestrales de vehículos nuevos: <br>• Trimestre 1: 20 vehículos<br>• Trimestre 2: 40 vehículos<br>• Trimestre 3: 10 vehículos<br>• Trimestre 4: 30 vehículos\n\n¿Qué gráfico de barras representa de manera cronológica y precisa esta información?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width:400px; margin:0 auto; background:white; padding:15px; border-radius:8px;">
                    <!-- A: Correcta (20, 40, 10, 30) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica A</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <rect x="20" y="40" width="10" height="30" fill="#22c55e"/><rect x="40" y="10" width="10" height="60" fill="#22c55e"/><rect x="60" y="55" width="10" height="15" fill="#22c55e"/><rect x="80" y="25" width="10" height="45" fill="#22c55e"/>
                        </svg>
                    </div>
                    <!-- B: Trap Orden Ascendente (10, 20, 30, 40) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica B</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <rect x="20" y="55" width="10" height="15" fill="#22c55e"/><rect x="40" y="40" width="10" height="30" fill="#22c55e"/><rect x="60" y="25" width="10" height="45" fill="#22c55e"/><rect x="80" y="10" width="10" height="60" fill="#22c55e"/>
                        </svg>
                    </div>
                    <!-- C: Trap Aleatoria (40, 20, 30, 10) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica C</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <rect x="20" y="10" width="10" height="60" fill="#22c55e"/><rect x="40" y="40" width="10" height="30" fill="#22c55e"/><rect x="60" y="25" width="10" height="45" fill="#22c55e"/><rect x="80" y="55" width="10" height="15" fill="#22c55e"/>
                        </svg>
                    </div>
                    <!-- D: Trap Repetida (20, 40, 20, 40) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica D</b>
                        <svg viewBox="0 0 100 80" style="width:100%; max-width:120px; display:inline-block;">
                            <line x1="15" y1="70" x2="95" y2="70" stroke="#333"/><line x1="15" y1="10" x2="15" y2="70" stroke="#333"/>
                            <rect x="20" y="40" width="10" height="30" fill="#22c55e"/><rect x="40" y="10" width="10" height="60" fill="#22c55e"/><rect x="60" y="40" width="10" height="30" fill="#22c55e"/><rect x="80" y="10" width="10" height="60" fill="#22c55e"/>
                        </svg>
                    </div>
                </div>` } }),
      options: ["Gráfica A","Gráfica B","Gráfica C","Gráfica D"],
      correct: 0,
      feedback: "Cascarita de orden: Los datos deben graficarse en el mismo orden cronológico en que ocurren (T1, T2, T3, T4). La Gráfica A respeta el patrón visual de subir a 40, caer a 10 y rebotar a 30."
    },
    {
      type: "Traducción de Datos - Barras Apiladas",
      question: "El presupuesto anual de un pequeño municipio se divide en solo 3 rubros: <br>• 60% para Educación.<br>• 30% para Salud.<br>• 10% para Infraestructura.\n\n¿Cuál barra apilada representa correctamente la distribución del presupuesto total (100%)?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; max-width:400px; margin:0 auto; background:white; padding:15px; border-radius:8px;">
                    <div style="grid-column: 1 / -1; font-size: 0.8rem; text-align:center; margin-bottom:10px; border-bottom: 1px solid #ccc; padding-bottom:5px;">
                        <b>Leyenda:</b> <span style="color:#3b82f6;">■ Edu</span> <span style="color:#f59e0b;">■ Sal</span> <span style="color:#64748b;">■ Inf</span>
                    </div>
                    <!-- A: Correcta (60, 30, 10) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica A</b>
                        <svg viewBox="0 0 50 100" style="width:100%; max-width:50px; display:block; margin: 5px auto;">
                            <!-- Edu 60% (height 60), Salud 30% (height 30), Inf 10% (height 10) -->
                            <rect x="10" y="0" width="30" height="60" fill="#3b82f6"/>
                            <rect x="10" y="60" width="30" height="30" fill="#f59e0b"/>
                            <rect x="10" y="90" width="30" height="10" fill="#64748b"/>
                        </svg>
                    </div>
                    <!-- B: Trap Invertida (10, 30, 60) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica B</b>
                        <svg viewBox="0 0 50 100" style="width:100%; max-width:50px; display:block; margin: 5px auto;">
                            <rect x="10" y="0" width="30" height="10" fill="#3b82f6"/>
                            <rect x="10" y="10" width="30" height="30" fill="#f59e0b"/>
                            <rect x="10" y="40" width="30" height="60" fill="#64748b"/>
                        </svg>
                    </div>
                    <!-- C: Trap Partes Iguales (33, 33, 33) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica C</b>
                        <svg viewBox="0 0 50 100" style="width:100%; max-width:50px; display:block; margin: 5px auto;">
                            <rect x="10" y="0" width="30" height="33.3" fill="#3b82f6"/>
                            <rect x="10" y="33.3" width="30" height="33.3" fill="#f59e0b"/>
                            <rect x="10" y="66.6" width="30" height="33.4" fill="#64748b"/>
                        </svg>
                    </div>
                    <!-- D: Trap Falta 10% (50, 50) -->
                    <div style="border:1px solid #eee; padding:5px; text-align:center;">
                        <b style="font-size:0.8rem;">Gráfica D</b>
                        <svg viewBox="0 0 50 100" style="width:100%; max-width:50px; display:block; margin: 5px auto;">
                            <rect x="10" y="0" width="30" height="50" fill="#3b82f6"/>
                            <rect x="10" y="50" width="30" height="50" fill="#f59e0b"/>
                        </svg>
                    </div>
                </div>` } }),
      options: ["Gráfica A","Gráfica B","Gráfica C","Gráfica D"],
      correct: 0,
      feedback: "La Gráfica A es la única que destina más de la mitad (60%) al color azul, casi una tercera parte (30%) al amarillo y deja una porción muy pequeña (10%) para el gris."
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