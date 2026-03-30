(function() {
    console.log("mathModule4.js: Iniciando carga...");
    const React = window.React;
    const { useState, useEffect, useMemo, useCallback } = React;

    // Standard Icon component using Material Icons
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { 
        className: `material-icons-round ${className}`, 
        style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } 
      }, name)
    );

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
      calculo: (
        <ul className="text-xs space-y-2">
          <li className="flex gap-2 items-center"><ArrowRight className="w-3 h-3 text-cyan-500 shrink-0"/><span>Paso 1: Usar el factor multiplicador 1.19.</span></li>
          <li className="flex gap-2 items-center"><ArrowRight className="w-3 h-3 text-cyan-500 shrink-0"/><span><code className="font-bold">1.000.000 × 1.19 = 1.190.000</code></span></li>
        </ul>
      ),
      resultado: "$1.190.000"
    },
    {
      titulo: "Encontrar el precio original (Sin IVA)",
      situacion: "Compraste un celular por $1.190.000 (IVA del 19% ya incluido). ¿Cuál era el precio del celular sin el impuesto?",
      analisis: "¡Trampa clásica! NO puedes calcular el 19% de $1.190.000 y restarlo. El precio con IVA representa el 119% del valor original, no el 100%. Se debe usar la operación contraria (división).",
      calculo: (
        <div className="space-y-2 text-xs">
          <p>Fórmula: <code className="bg-white px-1 py-0.5 rounded border border-cyan-200">Precio Original = Precio Final ÷ 1.19</code></p>
          <p className="font-mono">1.190.000 ÷ 1.19 = 1.000.000</p>
        </div>
      ),
      resultado: "$1.000.000 exactos."
    },
    {
      titulo: "El engaño del doble descuento",
      situacion: "Una tienda anuncia: '50% de descuento + 20% adicional con nuestra tarjeta'. Un cliente cree que le darán el 70% de descuento. Si el artículo vale $100.000, ¿cuánto paga realmente?",
      analisis: "Los descuentos sucesivos NO se suman. El segundo descuento se aplica sobre el nuevo precio ya rebajado, no sobre el precio inicial.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">1er Dcto (50% de 100k): Queda en $50.000.</li>
          <li className="flex gap-2">2do Dcto (20% de 50k): El 20% de 50k es $10.000.</li>
          <li className="flex gap-2">Resta final: 50.000 - 10.000 = 40.000.</li>
        </ul>
      ),
      resultado: "Paga $40.000. (El descuento real fue del 60%, no del 70%)."
    }
  ];

  const ejemplosEstrategia2 = [
    {
      titulo: "Interés Simple",
      situacion: "Un amigo te presta $200.000 al 5% de interés simple mensual. Le pagas todo al cabo de 3 meses. ¿Cuánto interés pagaste en total?",
      analisis: "El 'interés simple' siempre se calcula sobre el monto inicial prestado. El valor del interés no cambia mes a mes.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Interés 1 mes = 5% de 200.000 = $10.000</li>
          <li className="flex gap-2">Como es simple, pagas $10.000 cada mes fijo.</li>
          <li className="flex gap-2">Total por 3 meses = $10.000 × 3 = 30.000</li>
        </ul>
      ),
      resultado: "$30.000 de interés total."
    },
    {
      titulo: "La bola de nieve del Interés Compuesto",
      situacion: "Inviertes $100.000 al 10% de interés compuesto mensual. ¿Cuánto dinero tendrás al finalizar el segundo mes?",
      analisis: "El 'interés compuesto' se suma al capital cada mes. El interés del segundo mes se calcula sobre el nuevo total, no sobre los $100.000 iniciales.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2 border-b border-blue-100 pb-1">Mes 1: 10% de 100k = 10k. Total = $110.000</li>
          <li className="flex gap-2 pt-1 text-blue-700 font-bold">Mes 2: 10% de 110k = 11k. Total = 110k + 11k</li>
        </ul>
      ),
      resultado: "$121.000 al finalizar el mes 2."
    },
    {
      titulo: "Comparando préstamos",
      situacion: "Banco A ofrece $1.000.000 al 20% anual simple. Banco B ofrece $1.000.000 al 10% compuesto anual. A 2 años, ¿cuál cobra más intereses?",
      analisis: "Hay que proyectar ambos bancos a 2 años. El compuesto parece menor (10%), pero crece acumulativamente.",
      calculo: (
        <div className="space-y-2 text-xs">
          <p className="font-mono text-slate-700">Banco A (Simple): 20% = 200k/año. × 2 años = <strong className="text-rose-500">400k</strong>.</p>
          <p className="font-mono text-slate-700">Banco B (Compuesto):<br/>Año 1 = 100k (Total 1.100k).<br/>Año 2 = 10% de 1.100k = 110k.<br/>Total intereses B: 100k + 110k = <strong className="text-emerald-600">210k</strong>.</p>
        </div>
      ),
      resultado: "El Banco A cobra más ($400.000 vs $210.000)."
    }
  ];

  const ejemplosEstrategia3 = [
    {
      titulo: "El cargo fijo vs consumo",
      situacion: "El recibo del agua tiene un 'Cargo Fijo' de $15.000 y cobra $2.000 por cada metro cúbico (m³) consumido. Si la factura llegó por $45.000, ¿cuántos m³ se consumieron?",
      analisis: "Debemos estructurar una ecuación lineal. Restar el cargo fijo que no depende del consumo, y dividir el resto entre el costo unitario.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Ecuación: 45.000 = 15.000 + (2.000 × m)</li>
          <li className="flex gap-2 text-slate-500">Restar cargo fijo: 45.000 - 15.000 = 30.000</li>
          <li className="flex gap-2">Dividir por unidad: 30.000 ÷ 2.000 = 15</li>
        </ul>
      ),
      resultado: "15 metros cúbicos (m³)."
    },
    {
      titulo: "Lectura de Medidores",
      situacion: "En un recibo de luz dice: 'Lectura anterior: 1250 kWh' y 'Lectura actual: 1350 kWh'. Si el costo por kWh es $500, ¿cuál es el valor total a pagar?",
      analisis: "El medidor es un acumulador. El consumo real del mes es la diferencia (resta) entre lo que marcaba hoy y lo que marcaba el mes pasado.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Consumo = Actual - Anterior</li>
          <li className="flex gap-2">Consumo = 1350 - 1250 = 100 kWh consumidos.</li>
          <li className="flex gap-2">Costo = 100 kWh × $500 = 50.000</li>
        </ul>
      ),
      resultado: "$50.000 a pagar."
    },
    {
      titulo: "Tarifas por tramos (Subsidios)",
      situacion: "El gas cobra $1.000/m³ por los primeros 20 m³ (subsidiado), y $3.000 por cada m³ extra. Si consumes 25 m³, ¿cuánto pagas?",
      analisis: "El consumo se debe dividir en dos 'bolsas'. Una bolsa con los primeros 20 subsidiados, y otra bolsa con el sobrante (los 5 extra).",
      calculo: (
        <div className="space-y-2 text-xs font-mono">
          <p>Tramo 1 (Primeros 20): 20 × $1.000 = $20.000</p>
          <p>Tramo 2 (El exceso): 25 consumidos - 20 límite = 5 extra.</p>
          <p>Costo extra: 5 × $3.000 = $15.000</p>
          <p>Total = 20.000 + 15.000 = 35.000</p>
        </div>
      ),
      resultado: "$35.000 en total."
    }
  ];

  const ejemplosEstrategia4 = [
    {
      titulo: "Tasa de Cambio (Divisas)",
      situacion: "Quieres comprar un juego que vale 40 dólares por internet. Si el banco te cobra el dólar a $4.000 COP y te suma una comisión fija de $5.000 COP, ¿cuánto pagas?",
      analisis: "Es una conversión multiplicativa seguida de una suma. Primero se debe llevar el precio en moneda extranjera a moneda local usando la Tasa Representativa.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Valor juego: 40 USD × $4.000 COP = $160.000 COP</li>
          <li className="flex gap-2">Comisión del banco: + $5.000 COP</li>
          <li className="flex gap-2">Total = 160.000 + 5.000</li>
        </ul>
      ),
      resultado: "$165.000 COP."
    },
    {
      titulo: "Rendimiento de Gasolina",
      situacion: "Un carro rinde 50 km por galón. Vas a hacer un viaje de 300 km. Si el galón cuesta $15.000, ¿cuánto dinero necesitas para la gasolina?",
      analisis: "Un problema de doble paso. 1) Averiguar cuántos galones completos se consumirán en el viaje dividiendo. 2) Multiplicar esos galones por el precio.",
      calculo: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Galones necesarios = 300 km ÷ 50 km/gal = 6 galones.</li>
          <li className="flex gap-2">Costo total = 6 galones × $15.000/gal = 90.000</li>
        </ul>
      ),
      resultado: "$90.000 para el viaje."
    },
    {
      titulo: "Escalando una receta (Proporciones)",
      situacion: "Una receta para 4 personas pide 300 gramos de carne. Estás organizando una cena para 10 personas. ¿Cuánta carne debes comprar?",
      analisis: "Usaremos el método de 'reducción a la unidad' para evitar errores lógicos. Averiguamos primero cuánto come 1 sola persona.",
      calculo: (
        <div className="space-y-2 text-xs font-mono">
          <p className="text-slate-500">Valor para 1 persona: 300g ÷ 4 = 75g por persona.</p>
          <p>Para 10 personas: 75g × 10 = 750</p>
        </div>
      ),
      resultado: "750 gramos de carne."
    }
  ];

  // Función Helper para renderizar los Casos Didácticos
  const renderCasos = (casosArray, colorTheme) => (
    <div className="space-y-12 mt-8">
      {casosArray.map((caso, index) => (
        <div key={index} className="pt-8 border-t border-slate-200">
          <h4 className={`text-lg font-bold text-slate-800 mb-4 flex items-center gap-2`}>
            <Lightbulb className={`w-6 h-6 text-${colorTheme}-500`} /> Caso Práctico {index + 1}: {caso.titulo}
          </h4>
          <div className={`bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800`}>
            <p className="text-slate-700 font-medium italic text-sm md:text-base">"{caso.situacion}"</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             <div className={`bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col`}>
                <div className={`absolute top-0 left-0 w-1 h-full bg-${colorTheme}-400`}></div>
                <h5 className={`font-bold text-${colorTheme}-700 flex items-center gap-2 mb-3`}><Search className="w-4 h-4"/> 1. Analizar</h5>
                <div className="text-sm text-slate-600">{caso.analisis}</div>
             </div>
             <div className={`bg-slate-50 p-5 rounded-xl border border-slate-200 relative overflow-hidden flex flex-col`}>
                <div className={`absolute top-0 left-0 w-1 h-full bg-${colorTheme}-500`}></div>
                <h5 className={`font-bold text-${colorTheme}-800 flex items-center gap-2 mb-3`}><Calculator className="w-4 h-4"/> 2. Calcular</h5>
                <div className="text-sm text-slate-600 mt-auto bg-white p-3 rounded-lg border border-slate-100 shadow-sm">{caso.calculo}</div>
             </div>
             <div className={`bg-${colorTheme}-50 p-5 rounded-xl border border-${colorTheme}-100 relative overflow-hidden flex flex-col`}>
                <div className={`absolute top-0 left-0 w-1 h-full bg-${colorTheme}-600`}></div>
                <h5 className={`font-bold text-${colorTheme}-800 flex items-center gap-2 mb-3`}><CheckCircle className="w-4 h-4"/> 3. Resultado</h5>
                <div className="flex flex-col gap-2 mt-auto">
                   <div className={`px-3 py-3 rounded-lg text-center shadow-sm bg-${colorTheme}-600`}>
                     <span className="text-sm font-bold text-white tracking-wide">{caso.resultado}</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );

  // ==========================================
  // QUIZ (PRÁCTICA) - 6 PREGUNTAS
  // ==========================================
  const questions = [
    {
      type: "Porcentajes (IVA)",
      question: "Un portátil tiene un precio de exhibición de $2.000.000. El vendedor te aclara que este precio aún NO incluye el 19% de IVA. ¿Cuánto debes pagar en caja?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex items-center gap-6">
           <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center border border-cyan-200 shrink-0">
             <DollarSign className="w-8 h-8 text-cyan-600"/>
           </div>
           <div>
             <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Precio Base</div>
             <div className="text-2xl font-mono font-bold text-slate-800">$2.000.000</div>
             <div className="text-xs font-bold text-rose-500 mt-1">+ 19% Impuesto</div>
           </div>
        </div>
      ),
      options: ["$2.019.000", "$2.380.000", "$1.620.000", "$2.190.000"],
      correct: 1,
      feedback: "¡Excelente! Al entender el concepto multiplicador: $2.000.000 × 1.19 = $2.380.000."
    },
    {
      type: "Interés Financiero",
      question: "Pides un crédito de $1.000.000 a un mes con un 'interés de usura' del 20% mensual simple. Para evitar problemas, pagas todo exactamente al cumplir el mes. ¿Cuánto dinero entregaste?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200">
           <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-3">
             <span className="font-bold text-slate-600">Préstamo Inicial:</span>
             <span className="font-mono font-bold text-slate-800">$1.000.000</span>
           </div>
           <div className="flex justify-between items-center text-sm">
             <span className="text-rose-500 font-bold">Interés Mensual:</span>
             <span className="font-mono text-rose-600 font-bold">+ 20%</span>
           </div>
        </div>
      ),
      options: ["$1.020.000", "$1.200.000", "$200.000", "$1.500.000"],
      correct: 1,
      feedback: "¡Bien calculado! El 20% de 1.000.000 es 200.000. Entregas el capital (1M) más los intereses (200k) = 1.2M."
    },
    {
      type: "Lectura de Facturas",
      question: "En la factura del gas, el 'Cargo Fijo' es de $5.000. Consumiste 10 m³, y cada m³ cuesta $1.500. ¿Cuál es el valor total a pagar?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-800 rounded-xl shadow-sm border border-slate-700 text-slate-100 font-mono text-sm">
           <div className="text-center text-cyan-400 border-b border-slate-600 pb-2 mb-3">** RECIBO DE SERVICIO **</div>
           <div className="flex justify-between py-1"><span>Cargo Fijo:</span><span>$5.000</span></div>
           <div className="flex justify-between py-1"><span>Consumo (m³):</span><span>10</span></div>
           <div className="flex justify-between py-1"><span>Tarifa x m³:</span><span>$1.500</span></div>
           <div className="border-t border-dashed border-slate-600 mt-3 pt-2 flex justify-between font-bold text-emerald-400"><span>TOTAL:</span><span>?</span></div>
        </div>
      ),
      options: ["$15.000", "$20.000", "$50.000", "$65.000"],
      correct: 1,
      feedback: "¡Perfecto! El consumo variable es 10 × 1.500 = 15.000. A esto le sumas el cargo fijo obligatorio de 5.000, para un total de $20.000."
    },
    {
      type: "Descuentos",
      question: "Unos tenis valen $200.000. Hoy tienen el 50% de descuento. Si pagas con la tarjeta VIP, te dan un 50% de descuento adicional sobre el precio ya rebajado. ¿Cuánto pagas finalmente?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 flex items-center justify-center gap-3">
           <div className="bg-rose-500 text-white p-3 rounded-lg text-center shadow-md rotate-[-5deg]">
             <span className="block text-xs font-bold opacity-80">HOY</span>
             <span className="block font-black text-xl">-50%</span>
           </div>
           <span className="font-black text-slate-400 text-2xl">+</span>
           <div className="bg-amber-500 text-white p-3 rounded-lg text-center shadow-md rotate-[5deg]">
             <span className="block text-xs font-bold opacity-80">TARJETA VIP</span>
             <span className="block font-black text-xl">-50%</span>
           </div>
        </div>
      ),
      options: ["$0 (Gratis)", "$50.000", "$100.000", "$150.000"],
      correct: 1,
      feedback: "¡No caíste en la trampa! Primer descuento deja los tenis en $100.000. El segundo descuento (50%) aplica sobre esos $100.000, bajándolo a $50.000."
    },
    {
      type: "Conversión de Monedas",
      question: "Estás en el aeropuerto. Quieres comprar un café de $5 dólares. Si la casa de cambio dice: 'Compramos USD a $3.800 y Vendemos USD a $4.000'. ¿Cuántos pesos colombianos exactos te cobrarán por el café?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200">
           <div className="text-center border-b border-slate-100 pb-3 mb-3">
             <Landmark className="w-6 h-6 text-slate-600 mx-auto mb-1" />
             <span className="font-bold text-slate-700">CASA DE CAMBIO</span>
           </div>
           <div className="flex justify-between items-center px-4">
             <div className="text-center">
               <span className="block text-xs text-slate-400 font-bold uppercase">Compra</span>
               <span className="font-mono text-emerald-600 font-bold">$3.800</span>
             </div>
             <div className="w-px h-8 bg-slate-200"></div>
             <div className="text-center">
               <span className="block text-xs text-slate-400 font-bold uppercase">Venta</span>
               <span className="font-mono text-blue-600 font-bold">$4.000</span>
             </div>
           </div>
        </div>
      ),
      options: ["$19.000", "$20.000", "$4.000", "$7.800"],
      correct: 1,
      feedback: "¡Muy bien analizado! La casa de cambio te 'vende' los dólares (tú pagas pesos para obtener el café). Usas la tasa de venta: $4.000 × 5 = $20.000."
    },
    {
      type: "Rendimiento y Proporciones",
      question: "La pintura rinde 10 m² por cada galón. Tienes que pintar una pared de 20m de largo por 3m de alto. Si cada galón cuesta $40.000, ¿cuánto gastarás en pintura?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-6">
          <div className="text-center border-r border-slate-200 pr-6">
            <div className="w-16 h-12 bg-cyan-200 border-2 border-cyan-400 flex items-center justify-center text-xs font-bold text-cyan-800 mx-auto mb-2">20x3m</div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">La Pared</span>
          </div>
          <div className="text-center">
            <div className="w-10 h-12 bg-slate-200 border-2 border-slate-300 rounded-b-md mx-auto mb-2 flex items-center justify-center text-[10px] font-bold text-slate-500">10m²</div>
            <span className="text-[10px] font-bold text-slate-500 uppercase">Rendimiento</span>
          </div>
        </div>
      ),
      options: ["$80.000", "$120.000", "$240.000", "$40.000"],
      correct: 2,
      feedback: "¡Cálculo maestro! 1. Área: 20×3 = 60 m². 2. Galones necesarios: 60 ÷ 10 = 6 galones. 3. Costo: 6 × 40.000 = $240.000."
    }
  ];

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

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-cyan-50/40 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] overflow-hidden border border-white">
        
        {/* Header - Tema Cian/Azul */}
        <header className="relative bg-[#081826] p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none">
             <div style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }} className="w-40 h-40 border-2 border-cyan-300 rounded-xl"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                <BarChart className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold tracking-widest text-xs uppercase">Módulo de Competencia 4</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                Razonamiento <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Cuantitativo</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Matemáticas para la vida real: evalúa tu capacidad para interpretar finanzas, impuestos, descuentos engañosos, tasas de interés y lectura de facturas.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.3)] transform rotate-3">
               <Wallet className="w-10 h-10 text-white" />
            </div>
          </div>
        </header>

        {/* Navegación */}
        <nav className="px-6 md:px-10 pt-8 pb-4">
          <div className="flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar">
            {[
              { id: 'introduccion', icon: Search, label: 'Dinero y Datos' },
              { id: 'teoria', icon: FileText, label: 'Casos de Finanzas' },
              { id: 'practica', icon: Calculator, label: 'Simulador Financiero' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white text-cyan-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-cyan-500' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="p-6 md:px-10 md:pb-10 md:pt-4">
          
          {/* SECCIÓN: INTRODUCCIÓN */}
          {activeTab === 'introduccion' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Las Matemáticas que sí vas a usar</h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    Esta es la sección de las pruebas donde las fórmulas abstractas se convierten en <strong className="font-semibold text-cyan-700">situaciones del día a día</strong>. Si no desarrollas este razonamiento, podrías terminar pagando de más en la vida real.
                  </p>
                  
                  <div className="bg-gradient-to-br from-white to-cyan-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-blue-500 rounded-l-2xl"></div>
                    <h3 className="font-bold text-slate-800 mb-4 text-lg">Los 4 pilares de esta competencia:</h3>
                    <ul className="space-y-4">
                      {[
                        "Porcentajes (IVA y la trampa del doble descuento).",
                        "Matemática Financiera (Interés simple vs. compuesto).",
                        "Comprensión de Lectura (Cargos fijos en facturas y recibos).",
                        "Tasas de Conversión (Divisas y consumo de gasolina)."
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="mt-1 bg-cyan-100 p-1 rounded-full shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
                            <CheckCircle className="w-3 h-3 text-cyan-600 group-hover:text-white" />
                          </div>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-slate-50 to-cyan-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden">
                  <div className="relative w-full h-72 flex items-center justify-center" style={{ perspective: '1200px' }}>
                    
                    <div 
                      className="relative w-48 h-48 transition-transform duration-1000 ease-out cursor-default"
                      style={{ transform: 'rotateX(55deg) rotateZ(-30deg)', transformStyle: 'preserve-3d' }}
                    >
                      {/* Tarjeta de Crédito 3D Flotante */}
                      <div className="absolute inset-0 w-48 h-32 bg-gradient-to-tr from-blue-800 via-cyan-700 to-teal-500 rounded-xl shadow-[10px_20px_30px_rgba(6,182,212,0.4)] border border-cyan-300/30 p-4" style={{ transform: 'translateZ(40px)' }}>
                        <div className="w-8 h-6 bg-amber-200/80 rounded-md mb-8 border border-amber-400/50"></div>
                        <div className="w-3/4 h-2 bg-white/20 rounded-full mb-3"></div>
                        <div className="w-1/2 h-2 bg-white/20 rounded-full"></div>
                      </div>

                      {/* Moneda de Oro Rotando */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-300 via-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-[0_20px_30px_rgba(245,158,11,0.4)] border-2 border-yellow-200" style={{ transform: 'translateZ(80px)' }}>
                        <DollarSign className="w-8 h-8 text-amber-800 opacity-80" />
                      </div>
                      
                      {/* Gráfico de crecimiento de fondo */}
                      <div className="absolute bottom-[-40px] right-0 flex items-end gap-2" style={{ transform: 'translateZ(10px)' }}>
                         <div className="w-4 h-12 bg-emerald-400/80 rounded-t-sm shadow-lg"></div>
                         <div className="w-4 h-20 bg-emerald-400/80 rounded-t-sm shadow-lg"></div>
                         <div className="w-4 h-32 bg-emerald-400/80 rounded-t-sm shadow-lg"></div>
                       </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium italic mt-2 text-center">
                    "Saber hacer cálculos es bueno. Saber cómo nos cobran es indispensable."
                  </p>
                  <button 
                    onClick={() => setActiveTab('teoria')}
                    className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(6,182,212,0.2)] active:scale-95 flex items-center gap-2"
                  >
                    Estudiar Casos Financieros <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN: TEORÍA Y ESTRATEGIAS */}
          {activeTab === 'teoria' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10">
              
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Manual de Casos Cotidianos</h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-16">
                  
                  {/* CATEGORÍA 1 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
                      <div className="p-3 bg-cyan-100 rounded-xl"><Percent className="w-6 h-6 text-cyan-600" /></div>
                      1. Porcentajes y Dinero (IVA y Descuentos)
                    </h3>
                    <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 border border-cyan-200 shadow-sm relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-2 h-full bg-cyan-500"></div>
                       <h4 className="font-bold text-cyan-800 text-lg mb-4 flex items-center gap-2">
                         <BookOpen className="w-6 h-6"/> Concepto Fundamental
                       </h4>
                       <p className="text-sm text-slate-600 leading-relaxed mb-4">
                         Para agregar un porcentaje (como IVA 19%), multiplica por 1.19. Para quitar un descuento (como 20%), multiplica por 0.80. Recuerda: Descuentos sucesivos NO se suman.
                       </p>
                    </div>
                    {renderCasos(ejemplosEstrategia1, 'cyan')}
                  </div>

                  {/* CATEGORÍA 2 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
                      <div className="p-3 bg-blue-100 rounded-xl"><Landmark className="w-6 h-6 text-blue-600" /></div>
                      2. Matemática Financiera (Intereses)
                    </h3>
                    {renderCasos(ejemplosEstrategia2, 'blue')}
                  </div>

                  {/* CATEGORÍA 3 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
                      <div className="p-3 bg-teal-100 rounded-xl"><FileText className="w-6 h-6 text-teal-600" /></div>
                      3. Lectura de Facturas y Recibos
                    </h3>
                    {renderCasos(ejemplosEstrategia3, 'teal')}
                  </div>

                  {/* CATEGORÍA 4 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3 mb-8">
                      <div className="p-3 bg-indigo-100 rounded-xl"><LineChart className="w-6 h-6 text-indigo-600" /></div>
                      4. Conversiones y Proporciones Reales
                    </h3>
                    {renderCasos(ejemplosEstrategia4, 'indigo')}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN: PRÁCTICA */}
          {activeTab === 'practica' && (
            <div className="animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto">
              {!showResults ? (
                <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

                  <div className="mb-8 flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Escenario de: <span className="text-cyan-500">{questions[currentQuestion].type}</span>
                      </p>
                      <h4 className="text-3xl font-extrabold text-slate-800">Simulación {currentQuestion + 1}</h4>
                    </div>
                    <span className="text-slate-400 font-medium">de {questions.length}</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  <h3 className="text-xl font-medium text-slate-700 mb-6 leading-relaxed">
                    {questions[currentQuestion].question}
                  </h3>

                  {questions[currentQuestion].visual && (
                    <div className="w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner">
                      {questions[currentQuestion].visual}
                    </div>
                  )}

                  <div className="space-y-4 mb-10">
                    {questions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        disabled={hasAnswered}
                        className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                          hasAnswered
                            ? index === questions[currentQuestion].correct
                              ? 'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]'
                              : index === selectedAnswer
                                ? 'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80'
                                : 'bg-white border-slate-100 text-slate-400 opacity-50'
                            : 'bg-white border-slate-100 hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(6,182,212,0.05)] text-slate-600 hover:-translate-y-1'
                        }`}
                      >
                         <div className="flex items-center gap-4">
                           <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                             hasAnswered
                               ? index === questions[currentQuestion].correct
                                 ? 'border-emerald-500 bg-emerald-500 text-white'
                                 : index === selectedAnswer
                                   ? 'border-rose-400 bg-rose-400 text-white'
                                   : 'border-slate-200'
                               : 'border-slate-200'
                           }`}>
                             {hasAnswered && index === questions[currentQuestion].correct && <CheckCircle className="w-5 h-5" />}
                           </div>
                           <span className="font-medium text-[15px]">{option}</span>
                         </div>
                      </button>
                    ))}
                  </div>

                  {hasAnswered && (
                    <div className={`p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
                      selectedAnswer === questions[currentQuestion].correct 
                        ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' 
                        : 'bg-rose-50 border border-rose-100 text-rose-800'
                    }`}>
                      <p className="font-semibold text-sm md:text-base">{questions[currentQuestion].feedback}</p>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <button
                      onClick={nextQuestion}
                      disabled={!hasAnswered}
                      className={`px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                        hasAnswered
                          ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-[0_10px_20px_rgba(6,182,212,0.2)] hover:-translate-y-1'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {currentQuestion === questions.length - 1 ? 'Ver Resultado Final' : 'Siguiente Simulación'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(6,182,212,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500"></div>
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-cyan-100 to-blue-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white">
                    <Award className="w-14 h-14 text-cyan-600" />
                  </div>
                  <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">{resultData.title}</h2>
                  <p className="text-slate-500 mb-10 text-lg font-light max-w-md mx-auto">{resultData.desc}</p>
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
                       {score} <span className="text-3xl text-slate-300 font-bold">/ {questions.length}</span>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Soluciones Correctas</p>
                  </div>
                  <button onClick={resetQuiz} className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-4 rounded-xl font-bold transition-all flex items-center gap-3 mx-auto">
                    <RefreshCw className="w-5 h-5" /> Simular de nuevo
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
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
