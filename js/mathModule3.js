(function() {
    console.log("mathModule3.js: IIFE Starting...");
    const { React, ReactDOM, LucideReact } = window;
    const { useState, useEffect, useMemo, useCallback } = React;
    const { 
        Brain, ArrowRight, ArrowDown, RefreshCw, Award, Search, Scale, 
        ShieldCheck, XCircle, CheckCircle, AlertTriangle, Lightbulb, 
        MessageSquare, TrendingUp, EyeOff, BookOpen, Calculator,
        Shapes, Sigma, Percent, Dices
    } = LucideReact || {};

    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

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
      premisa: "Pregunta: Â¿En quÃ© paso se equivocÃ³ al resolver 2x + 8 = 20? / Paso 1: 2x = 20 + 8 / Paso 2: 2x = 28 / Paso 3: x = 14.",
      comprender: "El estudiante intenta despejar 'x' moviendo los tÃ©rminos al otro lado del signo igual (=).",
      rastrear: (
        <ul className="text-xs space-y-2">
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>EcuaciÃ³n: <strong>2x + 8 = 20</strong></li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0 mt-0.5"/>El +8 debe pasar con la operaciÃ³n contraria (restando).</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>El estudiante lo pasÃ³ sumando en el Paso 1.</li>
        </ul>
      ),
      esFalso: true,
      veredicto: "Error detectado en el Paso 1. Todo lo demÃ¡s es invÃ¡lido."
    },
    {
      titulo: "La trampa de la JerarquÃ­a (PEMDAS)",
      premisa: "Un estudiante calcula el Ã¡rea total resolviendo la expresiÃ³n: 5 + 3 Ã— 2. Su resultado final es 16.",
      comprender: "El estudiante realiza operaciones aritmÃ©ticas combinadas (suma y multiplicaciÃ³n).",
      rastrear: (
        <div className="space-y-2 text-xs">
          <p>Verificamos la jerarquÃ­a (PEMDAS): Primero multiplicaciones, luego sumas.</p>
          <div className="bg-white p-2 rounded border border-orange-200 font-mono text-[10px]">
            <div>Lo que hizo: (5 + 3) = 8 â†’ 8 Ã— 2 = 16 <strong className="text-rose-500">âœ—</strong></div>
            <div className="mt-1">Lo correcto: (3 Ã— 2) = 6 â†’ 5 + 6 = 11 <strong className="text-emerald-500">âœ“</strong></div>
          </div>
        </div>
      ),
      esFalso: true,
      veredicto: "Procedimiento incorrecto. No respetÃ³ la jerarquÃ­a de las operaciones."
    },
    {
      titulo: "El signo multiplicador oculto",
      premisa: "Al resolver -4x = 12, el alumno concluye que el primer paso es: x = 12 + 4.",
      comprender: "El alumno ve un nÃºmero negativo (-4) junto a una 'x' e intenta despejarlo.",
      rastrear: (
        <ul className="text-xs space-y-2">
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0 mt-0.5"/>El -4 no estÃ¡ restando a la 'x', la estÃ¡ <strong>multiplicando</strong>.</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>Para despejar, debe pasar a dividir conservando su signo negativo.</li>
          <li className="flex gap-2 font-mono font-bold">Correcto: x = 12 / -4</li>
        </ul>
      ),
      esFalso: true,
      veredicto: "Error conceptual. ConfundiÃ³ un coeficiente negativo con una resta."
    }
  ];

  const ejemplosEstrategia2 = [
    {
      titulo: "El mito del crecimiento",
      premisa: "AfirmaciÃ³n: Si multiplicas un nÃºmero por cualquier otro, el resultado siempre serÃ¡ mÃ¡s grande que el nÃºmero original.",
      comprender: "Aseguran que la regla (X * Y > X) se cumple para ABSOLUTAMENTE TODOS los nÃºmeros del universo.",
      rastrear: (
        <div className="space-y-2 text-xs">
          <p>Buscamos romper la regla probando casos "extremos" (cero o decimales):</p>
          <ul className="font-mono bg-white p-2 rounded border border-orange-200">
            <li>5 Ã— 2 = 10 (Se cumple)</li>
            <li className="text-rose-600 font-bold mt-1">5 Ã— 0.5 = 2.5 (Â¡FallÃ³! 2.5 no es mayor a 5)</li>
            <li className="text-rose-600 font-bold">5 Ã— 0 = 0 (Â¡FallÃ³!)</li>
          </ul>
        </div>
      ),
      esFalso: true,
      veredicto: "Basta un solo contraejemplo (multiplicar por decimales menores a 1) para destruir la palabra 'siempre'."
    },
    {
      titulo: "GeometrÃ­a Absoluta",
      premisa: "AfirmaciÃ³n: Todos los cuadrilÃ¡teros que tienen sus cuatro lados exactamente iguales, son obligatoriamente cuadrados.",
      comprender: "Establece que Lados Iguales = Cuadrado, sin excepciones.",
      rastrear: (
        <div className="space-y-2 text-xs">
          <p>Â¿Existe alguna figura de 4 lados iguales que NO sea un cuadrado?</p>
          <div className="flex items-center gap-3 bg-white p-2 rounded border border-orange-200 mt-2">
            <div className="w-6 h-6 border-2 border-orange-500 rotate-45 transform skew-x-12 ml-2"></div>
            <span>El <strong>Rombo</strong> tiene 4 lados iguales, pero sus Ã¡ngulos no son de 90Â°.</span>
          </div>
        </div>
      ),
      esFalso: true,
      veredicto: "El Rombo es el contraejemplo perfecto. Refuta la afirmaciÃ³n geomÃ©trica."
    },
    {
      titulo: "Sumas EngaÃ±osas",
      premisa: "AfirmaciÃ³n: Sumar dos nÃºmeros distintos siempre da como resultado un nÃºmero mayor que ambos.",
      comprender: "Garantiza que la adiciÃ³n (X + Y = Z) siempre hace que Z > X y Z > Y.",
      rastrear: (
        <ul className="text-xs space-y-2 font-mono">
          <li className="flex gap-2">Prueba 1: 5 + 3 = 8 (8 &gt; 5 y 8 &gt; 3). Funciona.</li>
          <li className="flex gap-2 font-bold text-rose-600">Contraejemplo: 5 + (-2) = 3.</li>
          <li className="text-slate-600 font-sans">El resultado (3) NO es mayor que el nÃºmero original (5).</li>
        </ul>
      ),
      esFalso: true,
      veredicto: "Falso. La regla se rompe al sumar nÃºmeros negativos."
    }
  ];

  const ejemplosEstrategia3 = [
    {
      titulo: "Bases Diferentes",
      premisa: "Mi negocio creciÃ³ un 100% y el hipermercado creciÃ³ un 50%. Por tanto, mi negocio ganÃ³ mÃ¡s dinero este mes.",
      comprender: "Asume que Mayor % Relativo = Mayor Cantidad Absoluta de Dinero.",
      rastrear: (
        <div className="text-xs space-y-2">
          <p>Simulamos con cantidades reales (Bases):</p>
          <div className="bg-white p-2 rounded border border-orange-200 font-mono">
            <div>Negocio: 100% de $10 = <strong className="text-orange-600">+$10</strong></div>
            <div className="mt-1">Hiper: 50% de $1000 = <strong className="text-orange-600">+$500</strong></div>
          </div>
        </div>
      ),
      esFalso: true,
      veredicto: "No se pueden comparar porcentajes si se calculan sobre totales (bases) distintos."
    },
    {
      titulo: "El Espejismo del Descuento",
      premisa: "Este abrigo tiene un 50% de descuento. Al llegar a caja, aplican un 50% extra por usar tarjeta. Â¡El abrigo sale GRATIS (100% descuento)!",
      comprender: "El cliente suma los porcentajes (50 + 50 = 100) directamente.",
      rastrear: (
        <div className="space-y-2 text-xs">
          <p>Aplicamos el descuento paso a paso sobre un precio base de $100:</p>
          <ul className="bg-white p-2 rounded border border-orange-200 font-mono space-y-1">
            <li>1er Dcto: $100 - 50% = $50</li>
            <li>2do Dcto: Aplica sobre $50. El 50% de $50 es $25.</li>
            <li>Precio Final: $25 (Pagaste el 25%, no gratis).</li>
          </ul>
        </div>
      ),
      esFalso: true,
      veredicto: "Falso. Los descuentos sucesivos NO se suman, se aplican uno tras el remanente del otro."
    },
    {
      titulo: "Recuperar la InversiÃ³n",
      premisa: "Ayer perdÃ­ el 50% del valor de mis acciones. Si hoy la bolsa sube un 50%, recuperarÃ© todo mi dinero exacto.",
      comprender: "Cree que bajar X% y subir X% te regresa al punto de partida.",
      rastrear: (
        <div className="space-y-2 text-xs">
          <p>Simulamos con $100 de inversiÃ³n inicial:</p>
          <ul className="bg-white p-2 rounded border border-orange-200 font-mono space-y-1">
            <li>Ayer (Pierde 50%): Me quedan $50.</li>
            <li>Hoy (Sube 50%): El 50% de $50 son $25.</li>
            <li>Total: $50 + $25 = $75. (PerdÃ­ $25 al final).</li>
          </ul>
        </div>
      ),
      esFalso: true,
      veredicto: "Para recuperar una pÃ©rdida del 50%, Â¡necesitas un crecimiento del 100%!"
    }
  ];

  const ejemplosEstrategia4 = [
    {
      titulo: "Helados y Ahogamientos",
      premisa: "Un estudio muestra que los meses donde se venden mÃ¡s helados, hay mÃ¡s ahogados en la playa. ConclusiÃ³n: Comer helados causa ahogamientos.",
      comprender: "Al ver dos grÃ¡ficas subir juntas (CorrelaciÃ³n), se asume que una provoca la otra (Causalidad).",
      rastrear: (
        <div className="text-xs space-y-2">
          <p>Buscamos una tercera variable (Variable de ConfusiÃ³n) que afecte a ambas:</p>
          <div className="bg-white p-2 rounded border border-orange-200 font-bold text-center text-orange-600">
            EL VERANO / CALOR
          </div>
          <p className="mt-1">El calor hace que la gente compre helados, y tambiÃ©n hace que vayan a nadar (donde ocurren accidentes).</p>
        </div>
      ),
      esFalso: true,
      veredicto: "Falsa Causalidad. Las variables estÃ¡n correlacionadas por una tercera causa comÃºn."
    },
    {
      titulo: "TutorÃ­as y Malas Notas",
      premisa: "Los datos de un colegio indican que los estudiantes que asisten a tutorÃ­as privadas reprueban mÃ¡s exÃ¡menes. ConclusiÃ³n: Â¡Las tutorÃ­as empeoran el rendimiento!",
      comprender: "Asume que la tutorÃ­a (A) causa la mala nota (B).",
      rastrear: (
        <div className="text-xs space-y-2">
          <p>Analizamos el sentido de la temporalidad (Causalidad Inversa):</p>
          <ul className="bg-white p-2 rounded border border-orange-200 space-y-1">
            <li>Â¿La tutorÃ­a bajÃ³ la nota? NO.</li>
            <li>Â¿Tener malas notas provocÃ³ que contrataran la tutorÃ­a? SÃ.</li>
          </ul>
        </div>
      ),
      esFalso: true,
      veredicto: "Falso. Confunde la causa con el efecto. Estudiaban porque ya iban mal, no al revÃ©s."
    },
    {
      titulo: "Hospitales y Mortalidad",
      premisa: "Las estadÃ­sticas muestran que los hospitales mÃ¡s grandes y costosos tienen la tasa mÃ¡s alta de pacientes fallecidos. ConclusiÃ³n: Tienen peores mÃ©dicos.",
      comprender: "Se asocia 'Hospital Grande' = 'Mayor Mortalidad = Peor Medicina'.",
      rastrear: (
        <div className="text-xs space-y-2">
          <p>Aplicamos lÃ³gica contextual a la variable de entrada:</p>
          <div className="bg-white p-2 rounded border border-orange-200">
            Los hospitales grandes y equipados son los Ãºnicos que reciben los casos de trauma extremo y urgencias fatales que los hospitales pequeÃ±os rechazan.
          </div>
        </div>
      ),
      esFalso: true,
      veredicto: "Falso sesgo de selecciÃ³n. Atienden mÃ¡s muertes porque reciben casos mucho mÃ¡s graves."
    }
  ];

  const ejemplosEstrategia5 = [
    {
      titulo: "El TriÃ¡ngulo EngaÃ±oso",
      premisa: "La imagen muestra un triÃ¡ngulo y el estudiante multiplicÃ³ el Lado Izquierdo por la Base para hallar el Ã¡rea, porque la esquina 'parece' recta.",
      comprender: "El estudiante asumiÃ³ que el lado inclinado es la 'Altura' matemÃ¡tica de la figura.",
      rastrear: (
        <ul className="text-xs space-y-2">
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>Revisamos el enunciado y la grÃ¡fica.</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>No hay ningÃºn cuadrito de 90Â° en la esquina.</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>No dice 'triÃ¡ngulo rectÃ¡ngulo' en el texto.</li>
        </ul>
      ),
      esFalso: true,
      veredicto: "SuposiciÃ³n InvÃ¡lida. En geometrÃ­a del ICFES, nunca confÃ­es en el dibujo sin datos explÃ­citos."
    },
    {
      titulo: "El Eje Truncado (GrÃ¡ficas)",
      premisa: "En la grÃ¡fica de barras, la barra del 2023 es el doble de alta que la del 2022. Por tanto, las ventas se duplicaron exactamente este aÃ±o.",
      comprender: "Concluye basÃ¡ndose EXCLUSIVAMENTE en el impacto visual (proporciÃ³n de la tinta impresa).",
      rastrear: (
        <div className="text-xs space-y-2">
          <p>Verificamos el Eje Y de la grÃ¡fica:</p>
          <div className="bg-white p-2 rounded border border-orange-200 font-mono">
            Eje Y empieza en <strong>1.000</strong> (truncado).<br/>
            - Barra 2022 llega a 1.010.<br/>
            - Barra 2023 llega a 1.020.
          </div>
          <p>1.020 NO es el doble de 1.010, aunque la barra dibujada sobre el eje 1000 sÃ­ mida el doble de centÃ­metros.</p>
        </div>
      ),
      esFalso: true,
      veredicto: "Trampa visual. Supuso errÃ³neamente que el Eje Y empezaba en Cero (0)."
    },
    {
      titulo: "Probabilidad vs Certeza",
      premisa: "En una urna hay 99 bolas rojas y 1 bola azul. Pedro afirma: 'Como la abrumadora mayorÃ­a es roja, es IMPOSIBLE sacar la azul'.",
      comprender: "Iguala una probabilidad muy baja (1%) con una imposibilidad absoluta (0%).",
      rastrear: (
        <ul className="text-xs space-y-2">
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>Â¿Imposible = Probabilidad de 0/100? SÃ.</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>Â¿CuÃ¡l es la probabilidad real de la azul? 1/100.</li>
          <li className="flex gap-2"><ArrowRight className="w-3 h-3 text-orange-500 shrink-0"/>Como 1/100 &gt; 0, el evento PUEDE ocurrir.</li>
        </ul>
      ),
      esFalso: true,
      veredicto: "Falso. ConfundiÃ³ 'altamente improbable' con 'matemÃ¡ticamente imposible'."
    }
  ];

  // FunciÃ³n Helper para renderizar los Casos DidÃ¡cticos
  const renderCasos = (casosArray) => (
    <div className="space-y-12">
      {casosArray.map((caso, index) => (
        <div key={index} className="pt-8 border-t border-slate-200 mt-8 first:border-t-0 first:pt-0 first:mt-0">
          <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Lightbulb className="w-6 h-6 text-orange-500" /> Caso PrÃ¡ctico {index + 1}: {caso.titulo}
          </h4>
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800">
            <p className="text-slate-700 font-medium italic text-sm md:text-base">"{caso.premisa}"</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
                <h5 className="font-bold text-amber-700 flex items-center gap-2 mb-3"><Search className="w-4 h-4"/> 1. Comprender</h5>
                <div className="text-sm text-slate-600">{caso.comprender}</div>
             </div>
             <div className="bg-orange-50 p-5 rounded-xl border border-orange-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
                <h5 className="font-bold text-orange-700 flex items-center gap-2 mb-3"><AlertTriangle className="w-4 h-4"/> 2. Rastrear</h5>
                <div className="text-sm text-slate-600">{caso.rastrear}</div>
             </div>
             <div className="bg-rose-50 p-5 rounded-xl border border-rose-100 relative overflow-hidden flex flex-col">
                <div className="absolute top-0 left-0 w-1 h-full bg-rose-400"></div>
                <h5 className="font-bold text-rose-700 flex items-center gap-2 mb-3"><ShieldCheck className="w-4 h-4"/> 3. Veredicto</h5>
                <div className="flex flex-col gap-2 mt-auto">
                   <div className={`px-2 py-2 rounded text-center shadow-sm ${caso.esFalso ? 'bg-rose-600' : 'bg-emerald-600'}`}>
                     <span className="text-xs font-bold text-white uppercase tracking-wider">{caso.esFalso ? 'AfirmaciÃ³n / Procedimiento Falso' : 'AfirmaciÃ³n Verdadera'}</span>
                   </div>
                   <div className="text-[11px] text-center text-rose-800 leading-tight font-medium bg-rose-100/50 p-2 rounded">
                     {caso.veredicto}
                   </div>
                </div>
             </div>
          </div>
        </div>
      ))}
    </div>
  );

  // ==========================================
  // QUIZ (TRIBUNAL MATEMÃTICO) - 6 PREGUNTAS
  // ==========================================
  const questions = [
    {
      type: "Caza-errores",
      question: "Un estudiante intentÃ³ resolver la ecuaciÃ³n 3x - 5 = 10. Â¿En quÃ© paso cometiÃ³ el primer error?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 font-mono text-center">
          <div className="text-slate-500 mb-2 border-b border-slate-100 pb-2">EcuaciÃ³n: 3x - 5 = 10</div>
          <div className="py-2"><span className="text-amber-600 font-bold mr-2">Paso 1:</span> 3x = 10 - 5</div>
          <div className="py-2"><span className="text-amber-600 font-bold mr-2">Paso 2:</span> 3x = 5</div>
          <div className="py-2"><span className="text-amber-600 font-bold mr-2">Paso 3:</span> x = 5 / 3</div>
        </div>
      ),
      options: ["En el Paso 1", "En el Paso 2", "En el Paso 3", "No hay ningÃºn error."],
      correct: 0,
      feedback: "Â¡Bien detectado! Al pasar el '-5', debiÃ³ pasar sumando (+5). El Paso 1 debiÃ³ ser: 3x = 10 + 5."
    },
    {
      type: "Contraejemplo",
      question: "Alguien afirma: 'Si elevas cualquier nÃºmero al cuadrado, el resultado siempre serÃ¡ mayor que el nÃºmero original'. Â¿QuÃ© nÃºmero sirve como contraejemplo?",
      visual: (
        <div className="relative h-32 w-full max-w-sm mx-auto mb-8 mt-6">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80">
            <rect x="10" y="10" width="180" height="60" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4"/>
            <text x="100" y="45" fontSize="16" fill="#b45309" textAnchor="middle" fontWeight="bold" fontFamily="monospace">XÂ² &gt; X</text>
            <text x="100" y="60" fontSize="8" fill="#d97706" textAnchor="middle" fontStyle="italic">Â¿Siempre se cumple?</text>
          </svg>
        </div>
      ),
      options: ["x = -2", "x = 2", "x = 0.5", "x = 10"],
      correct: 2,
      feedback: "Â¡Excelente! Si x = 0.5, entonces xÂ² = 0.25. AquÃ­, 0.25 NO es mayor que 0.5, lo que destruye la afirmaciÃ³n."
    },
    {
      type: "AnÃ¡lisis LÃ³gico",
      question: "El dueÃ±o de la Tienda A afirma: 'Mi tienda creciÃ³ mÃ¡s porque mi porcentaje (50%) es mayor que el de la tienda B (20%)'. Â¿Por quÃ© NO es vÃ¡lido?",
      visual: (
        <div className="flex gap-4 w-full max-w-md mx-auto mb-6 mt-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200">
           <div className="flex-1 border-r border-slate-100 pr-4 text-center">
             <div className="text-[10px] text-slate-400">VendÃ­a $1.000</div>
             <div className="flex justify-center my-2">
               <div className="w-8 h-16 bg-gradient-to-t from-orange-400 to-amber-400 rounded-sm relative">
                 <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-orange-600">+50%</span>
               </div>
             </div>
           </div>
           <div className="flex-1 pl-4 text-center">
             <div className="text-[10px] text-slate-400">VendÃ­a $10.000</div>
             <div className="flex justify-center my-2">
               <div className="w-12 h-20 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-sm relative">
                 <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-blue-600">+20%</span>
               </div>
             </div>
           </div>
        </div>
      ),
      options: [
        "El 50% siempre es menor que el 20% en negocios.",
        "Un porcentaje mayor no da mÃ¡s dinero si las bases iniciales son distintas.",
        "La grÃ¡fica de B estÃ¡ dibujada mÃ¡s alta.",
        "SÃ­ es vÃ¡lido."
      ],
      correct: 1,
      feedback: "Â¡Perfecto! Un 50% de poco dinero ($500) es menos que un 20% de mucho dinero ($2.000)."
    },
    {
      type: "GeometrÃ­a Falsa",
      question: "Un carpintero dice: 'Si duplico el ancho y el largo de esta ventana cuadrada de 1 metro, gastarÃ© el doble en vidrio'. Â¿Es correcta su conclusiÃ³n?",
      visual: (
        <div className="flex items-center justify-center gap-8 w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-slate-300 bg-sky-50 mx-auto flex items-center justify-center text-xs text-sky-700 font-bold">1x1</div>
            <div className="text-[10px] text-slate-400 mt-2">Original</div>
          </div>
          <ArrowRight className="text-slate-300 w-6 h-6" />
          <div className="text-center">
            <div className="w-24 h-24 border-2 border-orange-300 bg-orange-50 mx-auto flex items-center justify-center text-xs text-orange-700 font-bold">2x2</div>
            <div className="text-[10px] text-slate-400 mt-2">Lados Duplicados</div>
          </div>
        </div>
      ),
      options: [
        "SÃ­, si los lados se multiplican por 2, el Ã¡rea tambiÃ©n.",
        "No, al duplicar ambos lados (2x2), el Ã¡rea aumenta 4 veces.",
        "SÃ­, porque el perÃ­metro es el doble.",
        "No, porque el vidrio se cobra por perÃ­metro."
      ],
      correct: 1,
      feedback: "Â¡Exacto! El Ã¡rea original es 1x1=1. El Ã¡rea nueva es 2x2=4. Crece 4 veces, no 2."
    },
    {
      type: "Falsa Causalidad",
      question: "Un estudio muestra que las ciudades con mÃ¡s bibliotecas tienen mÃ¡s delitos. Un periodista afirma: 'Â¡Las bibliotecas causan delincuencia!'. Â¿Por quÃ© es errÃ³neo?",
      visual: (
        <div className="w-full max-w-md mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-6">
          <div className="text-center">
            <TrendingUp className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <span className="text-xs font-bold text-slate-600 block">Bibliotecas</span>
          </div>
          <div className="text-center text-amber-500 font-bold font-mono text-2xl">â‰ˆ</div>
          <div className="text-center">
            <TrendingUp className="w-10 h-10 text-rose-500 mx-auto mb-2" />
            <span className="text-xs font-bold text-slate-600 block">Delitos</span>
          </div>
        </div>
      ),
      options: [
        "Los criminales no leen.",
        "CorrelaciÃ³n no es causalidad; una tercera variable (poblaciÃ³n total) causa que ambas suban.",
        "Las encuestas tienen margen de error.",
        "La conclusiÃ³n es vÃ¡lida."
      ],
      correct: 1,
      feedback: "Â¡Excelente! Que dos grÃ¡ficas suban juntas no significa que una cause a la otra. Ciudades grandes tienen mÃ¡s de todo."
    },
    {
      type: "SuposiciÃ³n Oculta",
      question: "Pedro afirma que el Ã¡rea de este triÃ¡ngulo es exactamente 24 cmÂ² porque multiplicÃ³ (6 Ã— 8) / 2. Â¿Es vÃ¡lida su afirmaciÃ³n matemÃ¡tica?",
      visual: (
        <div className="w-full max-w-sm mx-auto mb-8 mt-6 flex justify-center">
          <svg className="w-48 h-40 overflow-visible" viewBox="0 0 100 100">
            <polygon points="10,90 90,90 25,20" fill="#fdf4ff" stroke="#4f46e5" strokeWidth="2" />
            <text x="50" y="105" fontSize="8" fill="#4f46e5" textAnchor="middle" fontWeight="bold">Base = 8 cm</text>
            <text x="-5" y="55" fontSize="8" fill="#4f46e5" textAnchor="middle" transform="rotate(-70 0,50)" fontWeight="bold">Lado = 6 cm</text>
            <path d="M 25 90 A 15 15 0 0 0 16.5 83" fill="none" stroke="#f43f5e" strokeWidth="1.5" />
            <text x="25" y="80" fontSize="8" fill="#f43f5e" textAnchor="middle" fontWeight="bold">?</text>
          </svg>
        </div>
      ),
      options: [
        "SÃ­, la fÃ³rmula es B x h / 2.",
        "SÃ­, 6 x 8 es 48, y la mitad es 24.",
        "No, requiere un Ã¡ngulo recto (90Â°) para usar el 6 como altura, y no lo tiene.",
        "No, el Ã¡rea se suma."
      ],
      correct: 2,
      feedback: "Â¡Brillante! Si un Ã¡ngulo no dice 90Â° explÃ­citamente, NO puedes asumir que ese lado inclinado es la altura real."
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
    if (percentage === 1) return { title: "Â¡Analista Maestro!", desc: "Posees un pensamiento crÃ­tico impecable. No te dejas engaÃ±ar por falacias matemÃ¡ticas ni suposiciones ocultas. EstÃ¡s listo para cualquier prueba." };
    if (percentage >= 0.6) return { title: "Â¡Gran Razonamiento!", desc: "Detectas bien la mayorÃ­a de errores, pero cuidado con las trampas mÃ¡s sutiles. Sigue practicando las tÃ©cnicas de refutaciÃ³n." };
    return { title: "Â¡Cuidado con las trampas!", desc: "La argumentaciÃ³n requiere dudar de todo y ser metÃ³dico. Vuelve a la teorÃ­a y practica cÃ³mo verificar cada paso de una afirmaciÃ³n sin suponer nada." };
  };

  const resultData = getResultMessage();

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-amber-50/40 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] overflow-hidden border border-white">
        
        {/* Header - Tema Ãmbar/Naranja/Rojo */}
        <header className="relative bg-[#1A0B05] p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-orange-500/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-rose-600/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none">
             <div style={{ transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }} className="w-40 h-40 border-2 border-orange-300 rounded-full"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg">
                <Scale className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold tracking-widest text-xs uppercase">MÃ³dulo de Competencia 3</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
                ArgumentaciÃ³n y <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">ValidaciÃ³n</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                EvalÃºa tu capacidad de pensamiento crÃ­tico: encuentra errores en procedimientos, identifica falacias lÃ³gicas, usa contraejemplos y justifica matemÃ¡ticamente.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-rose-600 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.3)] transform rotate-3">
               <ShieldCheck className="w-10 h-10 text-white" />
            </div>
          </div>
        </header>

        {/* NavegaciÃ³n */}
        <nav className="px-6 md:px-10 pt-8 pb-4">
          <div className="flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar">
            {[
              { id: 'introduccion', icon: Search, label: 'El Pensamiento CrÃ­tico' },
              { id: 'teoria', icon: MessageSquare, label: 'TÃ©cnicas de RefutaciÃ³n' },
              { id: 'practica', icon: ShieldCheck, label: 'Tribunal MatemÃ¡tico' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white text-orange-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-orange-500' : ''}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="p-6 md:px-10 md:pb-10 md:pt-4">
          
          {/* SECCIÃ“N: INTRODUCCIÃ“N */}
          {activeTab === 'introduccion' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">No creas todo lo que calculas</h2>
                  <p className="text-slate-600 leading-relaxed text-lg font-light">
                    En las pruebas estandarizadas te vas a encontrar con problemas que ya estÃ¡n "resueltos". Alguien afirma una conclusiÃ³n y te preguntan: <strong className="font-semibold text-orange-700">Â¿Tiene la razÃ³n? Â¿Por quÃ© sÃ­ o por quÃ© no?</strong> 
                  </p>
                  
                  <div className="bg-gradient-to-br from-white to-amber-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-rose-500 rounded-l-2xl"></div>
                    <h3 className="font-bold text-slate-800 mb-4 text-lg">Â¿QuÃ© evalÃºa la argumentaciÃ³n?</h3>
                    <ul className="space-y-4">
                      {[
                        "Detectar el paso exacto donde un cÃ¡lculo o ecuaciÃ³n se arruinÃ³.",
                        "Diferenciar entre un dato absoluto y un porcentaje engaÃ±oso.",
                        "Identificar cuÃ¡ndo dos grÃ¡ficas muestran casualidad y no causalidad.",
                        "Usar un solo 'Contraejemplo' para destruir una teorÃ­a absoluta."
                      ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <div className="mt-1 bg-orange-100 p-1 rounded-full shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                            <AlertTriangle className="w-3 h-3 text-orange-600 group-hover:text-white" />
                          </div>
                          <span>{text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-b from-slate-50 to-orange-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden">
                  <div className="relative w-full h-72 flex items-center justify-center" style={{ perspective: '1200px' }}>
                    <div 
                      className="relative w-48 h-48 transition-transform duration-1000 ease-out cursor-default"
                      style={{ transform: 'rotateX(50deg) rotateZ(-30deg)', transformStyle: 'preserve-3d' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'rotateX(40deg) rotateZ(-15deg) scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'rotateX(50deg) rotateZ(-30deg) scale(1)'}
                    >
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-md border-2 border-white rounded-[2rem] shadow-[0_40px_60px_rgba(245,158,11,0.2)]" style={{ transform: 'translateZ(-1px)' }}></div>
                      <div className="absolute top-6 left-6 w-16 h-24 bg-gradient-to-t from-rose-500 to-red-400 rounded-xl flex items-center justify-center shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" style={{ transform: 'translateZ(1px)' }}><XCircle className="w-8 h-8 text-white/80" /></div>
                      <div className="absolute bottom-6 right-6 w-20 h-16 bg-gradient-to-t from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" style={{ transform: 'translateZ(1px)' }}><CheckCircle className="w-8 h-8 text-white/80" /></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-4 border-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-[0_30px_40px_rgba(245,158,11,0.3)] animate-pulse bg-white/20 backdrop-blur-sm" style={{ transform: 'translateZ(60px)', animationDuration: '3s' }}><div className="absolute w-2 h-16 bg-amber-400 rotate-45 -bottom-10 -right-8 rounded-full shadow-lg"></div></div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 font-medium italic mt-2 text-center">
                    "Las matemÃ¡ticas no mienten, pero las personas pueden usar matemÃ¡ticas falsas."
                  </p>
                  <button 
                    onClick={() => setActiveTab('teoria')}
                    className="mt-6 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(234,88,12,0.2)] active:scale-95 flex items-center gap-2"
                  >
                    Aprender a Refutar <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÃ“N: TEORÃA Y ESTRATEGIAS CON SUS BLOQUES TEÃ“RICOS */}
          {activeTab === 'teoria' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10">
              
              {/* Proceso Mental */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: Search, title: '1. Comprender la Premisa', desc: 'Identificar exactamente quÃ© es lo que la persona estÃ¡ intentando asegurar o vender como "cierto".', color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-100' },
                  { icon: AlertTriangle, title: '2. Rastrear Evidencia', desc: 'Hacer tus propios cÃ¡lculos rÃ¡pidos. Revisar lÃ­nea por lÃ­nea buscando el "truco" algebraico o lÃ³gico.', color: 'text-orange-600', bg: 'bg-orange-100', border: 'border-orange-100' },
                  { icon: ShieldCheck, title: '3. Emitir Veredicto', desc: 'Concluir si es Falso o Verdadero, y emparejar esa conclusiÃ³n con la justificaciÃ³n matemÃ¡tica real.', color: 'text-rose-600', bg: 'bg-rose-100', border: 'border-rose-100' }
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm border ${item.border}`}>
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-extrabold mb-3 text-slate-800">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* MANUAL DE ESTRATEGIAS */}
              <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">TÃ©cnicas de RefutaciÃ³n Maestras</h2>
                  <div className="w-20 h-1.5 bg-gradient-to-r from-amber-400 to-rose-500 mx-auto mt-4 rounded-full"></div>
                  <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-base">
                    Para argumentar que algo "estÃ¡ mal", primero debes conocer <strong className="text-orange-600">la regla que rompe</strong>. Estudia la teorÃ­a y luego analiza los 15 casos.
                  </p>
                </div>

                <div className="space-y-16">
                  
                  {/* ESTRATEGIA 1 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-3 bg-amber-100 rounded-xl"><Search className="w-6 h-6 text-amber-600" /></div>
                        1. El Caza-Errores (Verificar Procedimientos)
                      </h3>
                    </div>
                    
                    {/* BLOQUE DE TEORÃA: ESTRATEGIA 1 */}
                    <div className="bg-white rounded-xl p-6 mb-8 border border-amber-200 shadow-sm">
                       <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                         <BookOpen className="w-5 h-5"/> TeorÃ­a Clave: Â¿CuÃ¡les son las reglas inquebrantables?
                       </h4>
                       <div className="grid md:grid-cols-2 gap-6">
                         <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                           <h5 className="font-bold text-amber-700 text-sm mb-2 border-b border-amber-200 pb-1">1. JerarquÃ­a de Operaciones (PEMDAS)</h5>
                           <ul className="text-xs text-slate-600 space-y-1.5 font-mono">
                             <li><strong className="text-slate-800">P</strong>arÃ©ntesis ( )</li>
                             <li><strong className="text-slate-800">E</strong>xponentes xÂ²</li>
                             <li><strong className="text-slate-800">M</strong>ultiplicaciÃ³n y <strong className="text-slate-800">D</strong>ivisiÃ³n (De Izq a Der)</li>
                             <li><strong className="text-slate-800">A</strong>diciÃ³n (Suma) y <strong className="text-slate-800">S</strong>ustracciÃ³n (Resta)</li>
                           </ul>
                           <p className="text-[10px] text-amber-600 mt-2">Nunca sumes antes de multiplicar si no hay parÃ©ntesis.</p>
                         </div>
                         <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                           <h5 className="font-bold text-orange-700 text-sm mb-2 border-b border-orange-200 pb-1">2. Leyes de Despeje (Ecuaciones)</h5>
                           <ul className="text-xs text-slate-600 space-y-1.5 font-mono">
                             <li>Lo que suma (+) <ArrowRight className="inline w-3 h-3 text-orange-500"/> Pasa a restar (-)</li>
                             <li>Lo que resta (-) <ArrowRight className="inline w-3 h-3 text-orange-500"/> Pasa a sumar (+)</li>
                             <li>Lo que multiplica (Ã—) <ArrowRight className="inline w-3 h-3 text-orange-500"/> Pasa a dividir (Ã·) <strong className="text-rose-600 underline">con el mismo signo</strong>.</li>
                           </ul>
                           <p className="text-[10px] text-orange-600 mt-2">Ej: -4x = 12 $\rightarrow$ x = 12 / -4. El menos (-4) NO pasa a sumar.</p>
                         </div>
                       </div>
                    </div>

                    {renderCasos(ejemplosEstrategia1)}
                  </div>

                  {/* ESTRATEGIA 2 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-3 bg-orange-100 rounded-xl"><XCircle className="w-6 h-6 text-orange-600" /></div>
                        2. El Poder del Contraejemplo
                      </h3>
                    </div>

                    {/* BLOQUE DE TEORÃA: ESTRATEGIA 2 */}
                    <div className="bg-white rounded-xl p-6 mb-8 border border-orange-200 shadow-sm">
                       <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                         <BookOpen className="w-5 h-5"/> TeorÃ­a Clave: La LÃ³gica del "Cisne Negro"
                       </h4>
                       <div className="flex flex-col md:flex-row items-center gap-6">
                         <div className="flex-1 text-sm text-slate-600 leading-relaxed">
                           En matemÃ¡ticas, si alguien afirma que "Todos los cisnes son blancos", no tienes que revisar todos los cisnes del universo para ver si miente. <strong className="text-orange-600">Basta con encontrar UN SOLO cisne negro</strong> (un contraejemplo) para demostrar que su afirmaciÃ³n absoluta es FALSA.
                         </div>
                         <div className="flex-1 w-full">
                           <div className="bg-slate-50 p-3 rounded border border-slate-200 text-xs">
                             <div className="font-bold text-slate-700 mb-1 border-b border-slate-200 pb-1">Palabras de Alerta MÃ¡xima en ExÃ¡menes:</div>
                             <div className="flex gap-2 font-mono text-rose-600 font-bold mb-2">"Siempre", "Nunca", "Todos", "Ninguno"</div>
                             <div className="font-bold text-slate-700 mb-1 border-b border-slate-200 pb-1">Tus Armas para crear contraejemplos:</div>
                             <div className="text-slate-600 font-mono">Usa el Cero (0), nÃºmeros negativos (-2) o fracciones (0.5).</div>
                           </div>
                         </div>
                       </div>
                    </div>

                    {renderCasos(ejemplosEstrategia2)}
                  </div>

                  {/* ESTRATEGIA 3 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-3 bg-rose-100 rounded-xl"><Scale className="w-6 h-6 text-rose-600" /></div>
                        3. Falacias Relativas (Porcentajes)
                      </h3>
                    </div>

                    {/* BLOQUE DE TEORÃA: ESTRATEGIA 3 */}
                    <div className="bg-white rounded-xl p-6 mb-8 border border-rose-200 shadow-sm">
                       <h4 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
                         <BookOpen className="w-5 h-5"/> TeorÃ­a Clave: Valor Absoluto vs. Relativo
                       </h4>
                       <div className="grid md:grid-cols-2 gap-6">
                         <div className="bg-rose-50 p-4 rounded-lg border border-rose-100 text-sm">
                           <h5 className="font-bold text-rose-700 mb-2 border-b border-rose-200 pb-1">El Porcentaje necesita una Base</h5>
                           <p className="text-slate-600 mb-2">Un porcentaje (20%) no es dinero real, es una "rebanada de pastel".</p>
                           <p className="font-mono text-xs text-slate-700 bg-white p-2 rounded">Valor Absoluto = Base Ã— (Porcentaje / 100)</p>
                           <p className="text-xs text-rose-600 font-bold mt-2">Nunca puedes afirmar que el 50% es mÃ¡s dinero que el 20% si los "pasteles" (Bases) son de distinto tamaÃ±o.</p>
                         </div>
                         <div className="flex items-center justify-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                           <div className="text-center">
                             <div className="text-[10px] text-slate-500 font-bold uppercase">50% de $10</div>
                             <div className="w-8 h-4 bg-rose-500 mx-auto mt-1 mb-2"></div>
                             <div className="text-xs font-bold text-rose-600">Es solo $5</div>
                           </div>
                           <div className="mx-4 text-slate-400">vs</div>
                           <div className="text-center">
                             <div className="text-[10px] text-slate-500 font-bold uppercase">10% de $1000</div>
                             <div className="w-16 h-8 bg-blue-500 mx-auto mt-1 mb-2"></div>
                             <div className="text-xs font-bold text-blue-600">Â¡Son $100!</div>
                           </div>
                         </div>
                       </div>
                    </div>

                    {renderCasos(ejemplosEstrategia3)}
                  </div>

                  {/* ESTRATEGIA 4 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-3 bg-teal-100 rounded-xl"><TrendingUp className="w-6 h-6 text-teal-600" /></div>
                        4. CorrelaciÃ³n vs. Causalidad
                      </h3>
                    </div>

                    {/* BLOQUE DE TEORÃA: ESTRATEGIA 4 */}
                    <div className="bg-white rounded-xl p-6 mb-8 border border-teal-200 shadow-sm">
                       <h4 className="font-bold text-teal-800 mb-4 flex items-center gap-2">
                         <BookOpen className="w-5 h-5"/> TeorÃ­a Clave: La Tercera Variable
                       </h4>
                       <div className="grid md:grid-cols-2 gap-6 items-center">
                         <div className="text-sm text-slate-600 space-y-3">
                           <p><strong className="text-teal-700">CorrelaciÃ³n:</strong> Dos variables suben o bajan al mismo tiempo en una grÃ¡fica.</p>
                           <p><strong className="text-teal-700">Causalidad:</strong> Variable A provoca a Variable B de forma directa.</p>
                           <p className="bg-teal-50 p-2 rounded border border-teal-100 text-xs">El error en los exÃ¡menes es ver que las lÃ­neas suben juntas y asumir "A causa B". Casi siempre existe una <strong className="text-teal-700 font-bold">Variable de ConfusiÃ³n (C)</strong> que estÃ¡ causando ambas a la vez.</p>
                         </div>
                         <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center flex flex-col items-center">
                           <div className="px-3 py-1 bg-teal-600 text-white text-xs font-bold rounded shadow-sm">C (El Verano)</div>
                           <div className="flex w-full justify-center gap-8 mt-2">
                             <div className="flex flex-col items-center">
                               <ArrowDown className="w-4 h-4 text-teal-400 rotate-45 mb-1" />
                               <div className="px-2 py-1 border border-slate-300 bg-white text-xs rounded">A (Helados)</div>
                             </div>
                             <div className="flex flex-col items-center">
                               <ArrowDown className="w-4 h-4 text-teal-400 -rotate-45 mb-1" />
                               <div className="px-2 py-1 border border-slate-300 bg-white text-xs rounded">B (Ahogados)</div>
                             </div>
                           </div>
                           <div className="mt-3 text-[10px] text-slate-500">Helados (A) y Ahogados (B) no se causan entre sÃ­.</div>
                         </div>
                       </div>
                    </div>

                    {renderCasos(ejemplosEstrategia4)}
                  </div>

                  {/* ESTRATEGIA 5 */}
                  <div className="bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                        <div className="p-3 bg-indigo-100 rounded-xl"><EyeOff className="w-6 h-6 text-indigo-600" /></div>
                        5. Suposiciones Ocultas
                      </h3>
                    </div>

                    {/* BLOQUE DE TEORÃA: ESTRATEGIA 5 */}
                    <div className="bg-white rounded-xl p-6 mb-8 border border-indigo-200 shadow-sm">
                       <h4 className="font-bold text-indigo-800 mb-4 flex items-center gap-2">
                         <BookOpen className="w-5 h-5"/> TeorÃ­a Clave: Leer lo ExplÃ­cito (Axiomas)
                       </h4>
                       <div className="flex flex-col md:flex-row items-center gap-6">
                         <div className="flex-1 text-sm text-slate-600 leading-relaxed">
                           "A ojo" no sirve en matemÃ¡ticas. Los dibujantes de las pruebas estandarizadas suelen hacer figuras engaÃ±osas a propÃ³sito (grÃ¡ficas cortadas o triÃ¡ngulos deformes). <strong className="text-indigo-600">Si un dato no estÃ¡ escrito en el texto ni marcado con el sÃ­mbolo matemÃ¡tico correcto, asume que NO es cierto.</strong>
                         </div>
                         <div className="flex-1 w-full bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                           <div className="font-bold text-indigo-800 mb-2 border-b border-indigo-200 pb-1 text-xs">SÃ­mbolos que SÃ puedes creer:</div>
                           <div className="flex items-center gap-3 mb-2">
                             <div className="w-4 h-4 border-2 border-indigo-500 rounded-sm"></div>
                             <span className="text-xs text-slate-700">Ãngulo recto (90Â° garantizados)</span>
                           </div>
                           <div className="flex items-center gap-3">
                             <div className="text-indigo-500 font-bold text-lg">&gt; &gt;</div>
                             <span className="text-xs text-slate-700">LÃ­neas paralelas garantizadas</span>
                           </div>
                         </div>
                       </div>
                    </div>

                    {renderCasos(ejemplosEstrategia5)}
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* SECCIÃ“N: PRÃCTICA */}
          {activeTab === 'practica' && (
            <div className="animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto">
              {!showResults ? (
                <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>

                  <div className="mb-8 flex justify-between items-end">
                    <div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                        DesafÃ­o de: <span className="text-orange-500">{questions[currentQuestion].type}</span>
                      </p>
                      <h4 className="text-3xl font-extrabold text-slate-800">CuestiÃ³n {currentQuestion + 1}</h4>
                    </div>
                    <span className="text-slate-400 font-medium">de {questions.length}</span>
                  </div>
                  
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-full transition-all duration-500 ease-out"
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
                            : 'bg-white border-slate-100 hover:border-orange-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.05)] text-slate-600 hover:-translate-y-1'
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
                          ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-[0_10px_20px_rgba(234,88,12,0.2)] hover:-translate-y-1'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {currentQuestion === questions.length - 1 ? 'Emitir Veredicto Final' : 'Siguiente Caso'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(245,158,11,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500"></div>
                  
                  <div className="w-28 h-28 mx-auto bg-gradient-to-br from-amber-100 to-orange-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white">
                    <Award className="w-14 h-14 text-orange-500" />
                  </div>
                  
                  <h2 className="text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">{resultData.title}</h2>
                  <p className="text-slate-500 mb-10 text-lg font-light max-w-md mx-auto">
                    {resultData.desc}
                  </p>
                  
                  <div className="bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 mb-2">
                      {score} <span className="text-3xl text-slate-300 font-bold">/ {questions.length}</span>
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs mt-4">Veredictos Correctos</p>
                  </div>

                  <button
                    onClick={resetQuiz}
                    className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(234,88,12,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Juzgar de nuevo
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

    window.renderMathModule3 = (containerId) => {
        console.log("mathModule3.js: Rendering to", containerId);
        try {
            const container = document.getElementById(containerId);
            if (container && ReactDOM) {
                const root = ReactDOM.createRoot(container);
                root.render(React.createElement(ModuloArgumentacion));
                console.log("mathModule3.js: Render success.");
            } else {
                console.warn("mathModule3.js: Container or ReactDOM missing.");
            }
        } catch (err) {
            console.error("mathModule3.js: Render error:", err);
            const container = document.getElementById(containerId);
            if (container) {
                container.innerHTML = `<div style="padding: 20px; color: #ef4444; background: #fee2e2; border: 1px solid #fecaca; rounded: 12px;"><h3>Error al cargar el mÃ³dulo</h3><p>${err.message}</p></div>`;
            }
        }
    };
    console.log("mathModule3.js: IIFE Finished, renderMathModule3 registered.");
})();
