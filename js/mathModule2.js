(function () {
  console.log("mathModule2.js: Iniciando carga completa...");
  const React = window.React;
  const { useState, useEffect, useMemo, useCallback } = React;

  // Standard Icon component using Material Icons
  const Icon = ({ name, className = "", style = {} }) =>
  React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
  }, name);


  // Component wrappers for the icons used in the module
  const Calculator = (props) => React.createElement(Icon, { name: "calculate", ...props });
  const Shapes = (props) => React.createElement(Icon, { name: "category", ...props });
  const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
  const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
  const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
  const ArrowDown = (props) => React.createElement(Icon, { name: "arrow_downward", ...props });
  const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
  const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
  const Sigma = (props) => React.createElement(Icon, { name: "functions", ...props });
  const Percent = (props) => React.createElement(Icon, { name: "percent", ...props });
  const Dices = (props) => React.createElement(Icon, { name: "casino", ...props });
  const Scale = (props) => React.createElement(Icon, { name: "balance", ...props });
  const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });

  function ModuloFormulacion() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // Banco de Preguntas - Formulación y Ejecución
    const questions = [
    {
      type: "Modelado Geométrico (Áreas compuestas)",
      question: "Un estudiante quiere calcular el área de la fachada de una casa de muñecas, la cual está compuesta por un cuadrado de 6 cm de lado y un techo triangular de 4 cm de altura. De acuerdo a la figura, ¿qué expresión permite hallar el área total de la fachada?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 150" width="200" height="150">
                            <!-- Base Cuadrada -->
                            <rect x="50" y="70" width="100" height="80" fill="#c7d2fe" stroke="#4f46e5" stroke-width="2"/>
                            <text x="100" y="140" text-anchor="middle" font-size="12" fill="#312e81">Base = 6 cm</text>
                            <text x="35" y="115" text-anchor="middle" font-size="12" fill="#312e81" transform="rotate(-90 35,115)">Altura = 6 cm</text>
                            <!-- Techo Triángulo -->
                            <polygon points="50,70 100,20 150,70" fill="#fbcfe8" stroke="#e11d48" stroke-width="2"/>
                            <line x1="100" y1="20" x2="100" y2="70" stroke="#e11d48" stroke-dasharray="4,4"/>
                            <text x="110" y="50" font-size="12" fill="#be123c">h=4</text>
                         </svg>` } }),
      options: ["(6 × 6) + [(6 × 4) / 2]","(6 + 6) + (6 × 4)","(6 × 6) × 4","(6 × 4) / 2"],
      correct: 0,
      feedback: "El área total se halla sumando el área del cuadrado (Lado × Lado = 6×6) con el área del triángulo (Base × Altura / 2 = 6×4/2)."
    },
    {
      type: "Álgebra (Traducción y Modelado)",
      question: "El recibo del agua en una ciudad indica que existe un cargo fijo mensual de $12.000 y un costo de $1.500 por cada metro cúbico (m³) consumido. Si una familia consume 'x' metros cúbicos en un mes, ¿cuál de las siguientes funciones representa el costo total (C) a pagar?",
      visual: null,
      options: ["C = 12.000x + 1.500","C = 13.500x","C = 12.000 + 1.500x","C = (12.000 + 1.500)x"],
      correct: 2,
      feedback: "El valor fijo (12.000) no depende del consumo, por lo que va solo. El valor variable (1.500) se multiplica por la cantidad consumida (x). Por tanto, C = 12.000 + 1.500x."
    },
    {
      type: "Probabilidad Clásica",
      question: "En un experimento de genética se cuenta con una urna que contiene semillas de arveja: 4 semillas lisas (L) y 6 semillas rugosas (R). Si un investigador extrae una semilla al azar, ¿cuál es la probabilidad de que la semilla extraída sea lisa?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 120" width="200" height="120">
                            <path d="M 50 20 L 50 100 A 50 20 0 0 0 150 100 L 150 20" fill="none" stroke="#64748b" stroke-width="3"/>
                            <ellipse cx="100" cy="20" rx="50" ry="15" fill="none" stroke="#64748b" stroke-width="3"/>
                            <circle cx="80" cy="70" r="10" fill="#fbbf24"/> <text x="80" y="74" text-anchor="middle" font-size="10" font-weight="bold">L</text>
                            <circle cx="100" cy="90" r="10" fill="#fbbf24"/> <text x="100" y="94" text-anchor="middle" font-size="10" font-weight="bold">L</text>
                            <circle cx="120" cy="75" r="10" fill="#fbbf24"/> <text x="120" y="79" text-anchor="middle" font-size="10" font-weight="bold">L</text>
                            <circle cx="90" cy="50" r="10" fill="#fbbf24"/> <text x="90" y="54" text-anchor="middle" font-size="10" font-weight="bold">L</text>
                            
                            <circle cx="70" cy="90" r="10" fill="#10b981"/> <text x="70" y="94" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                            <circle cx="130" cy="90" r="10" fill="#10b981"/> <text x="130" y="94" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                            <circle cx="110" cy="50" r="10" fill="#10b981"/> <text x="110" y="54" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                            <circle cx="130" cy="60" r="10" fill="#10b981"/> <text x="130" y="64" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                            <circle cx="70" cy="55" r="10" fill="#10b981"/> <text x="70" y="59" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                            <circle cx="100" cy="70" r="10" fill="#10b981"/> <text x="100" y="74" text-anchor="middle" font-size="10" font-weight="bold">R</text>
                         </svg>` } }),
      options: ["4/6","4/10","6/10","1/4"],
      correct: 1,
      feedback: "La probabilidad es (Casos Favorables / Casos Totales). Hay 4 semillas lisas a favor, y el total de semillas es 10 (4+6). Por lo tanto, es 4/10."
    },
    {
      type: "Proporcionalidad",
      question: "En un laboratorio químico, para preparar una solución desinfectante se requieren 30 ml de cloro por cada 2 litros de agua. ¿Qué operación permite determinar la cantidad de cloro requerida para preparar 8 litros de solución?",
      visual: null,
      options: ["(30 × 2) / 8","(30 ÷ 8) × 2","(30 ÷ 2) × 8","30 + (8 × 2)"],
      correct: 2,
      feedback: "Mediante reducción a la unidad: divides 30 ml entre 2 litros para saber cuánto cloro va por 1 litro, y luego multiplicas el resultado por los 8 litros deseados."
    },
    {
      type: "Modelado Geométrico (Perímetro)",
      question: "Para delimitar un lote de conservación ecológica rectangular que mide 40 metros de largo y 25 metros de ancho, se decidió colocar una cerca de 3 hilos de alambre. ¿Cuántos metros de alambre se necesitan en total?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 120" width="200" height="120">
                            <rect x="30" y="30" width="140" height="60" fill="#dcfce7" stroke="#16a34a" stroke-width="2" stroke-dasharray="5,5"/>
                            <text x="100" y="20" text-anchor="middle" font-size="12" fill="#16a34a">40 m</text>
                            <text x="15" y="65" text-anchor="middle" font-size="12" fill="#16a34a" transform="rotate(-90 15,65)">25 m</text>
                         </svg>` } }),
      options: ["130 m","390 m","1.000 m","3.000 m"],
      correct: 1,
      feedback: "Primero hallamos el perímetro de 1 vuelta: 40 + 40 + 25 + 25 = 130 m. Como son 3 hilos (3 vueltas), se multiplica 130 m × 3 = 390 m."
    },
    {
      type: "Modelado Geométrico (Área Sombreada)",
      question: "Un parque municipal tiene forma de rectángulo de 50 m × 30 m. En su interior se ha construido una pista de patinaje cuadrada de 10 m de lado. Si el resto del parque se va a cubrir de pasto, ¿cuál es el área destinada para el pasto?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 120" width="200" height="120">
                            <rect x="20" y="20" width="160" height="80" fill="#86efac" stroke="#15803d" stroke-width="2"/>
                            <text x="100" y="15" text-anchor="middle" font-size="10" fill="#15803d">50 m</text>
                            <text x="10" y="60" text-anchor="middle" font-size="10" fill="#15803d" transform="rotate(-90 10,60)">30 m</text>
                            
                            <rect x="130" y="40" width="30" height="30" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
                            <text x="145" y="58" text-anchor="middle" font-size="8" fill="#334155">10x10</text>
                         </svg>` } }),
      options: ["1.500 m²","100 m²","1.400 m²","1.490 m²"],
      correct: 2,
      feedback: "Área del rectángulo: 50 × 30 = 1.500 m². Área del cuadrado (pista): 10 × 10 = 100 m². Área de pasto = 1.500 - 100 = 1.400 m²."
    },
    {
      type: "Probabilidad y Tablas",
      question: "En un curso de Biología se registraron las preferencias de proyectos finales: 12 estudiantes eligieron Botánica, 8 eligieron Zoología y 5 eligieron Ecología. Si se escoge un proyecto al azar para la feria de ciencias, ¿cuál es la probabilidad de que pertenezca al área de Zoología?",
      visual: null,
      options: ["8 / 25","8 / 12","1 / 8","12 / 25"],
      correct: 0,
      feedback: "El total de estudiantes (casos posibles) es 12 + 8 + 5 = 25. Los que eligieron Zoología (casos favorables) son 8. La probabilidad es 8 / 25."
    },
    {
      type: "Proporcionalidad (Escalas)",
      question: "Un estudiante de arquitectura dibuja el plano de un edificio. En el plano, una pared que en la realidad mide 15 metros, está representada por un segmento de 5 cm. ¿A qué escala está dibujado el plano?",
      visual: null,
      options: ["1 : 3","1 : 30","1 : 300","1 : 150"],
      correct: 2,
      feedback: "Convertimos los 15 metros reales a cm: 15 × 100 = 1.500 cm. Si 5 cm en el plano equivalen a 1.500 cm reales, dividimos 1.500 / 5 = 300. La escala es 1:300."
    },
    {
      type: "Álgebra (Despeje de Ecuaciones)",
      question: "En un experimento de física, la distancia (d) recorrida por un móvil a velocidad constante se modela como d = 4t + 10. Si el móvil recorrió una distancia de 34 metros, ¿cuántos segundos (t) estuvo en movimiento?",
      visual: null,
      options: ["24 s","6 s","10 s","4 s"],
      correct: 1,
      feedback: "Sustituimos d por 34: 34 = 4t + 10. Pasamos 10 a restar: 24 = 4t. Despejamos t pasando el 4 a dividir: t = 24 / 4 = 6 segundos."
    },
    {
      type: "Lectura de Gráficas (Proporcionalidad)",
      question: "La siguiente gráfica muestra el crecimiento de una planta en función de los días transcurridos. Observando la tendencia de la línea recta, ¿cuántos milímetros habrá crecido la planta en el día 6 si mantiene el mismo ritmo?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 150" width="200" height="150">
                            <!-- Ejes -->
                            <line x1="30" y1="130" x2="180" y2="130" stroke="#475569" stroke-width="2"/>
                            <line x1="30" y1="130" x2="30" y2="20" stroke="#475569" stroke-width="2"/>
                            <!-- Títulos -->
                            <text x="100" y="145" text-anchor="middle" font-size="10" fill="#475569">Tiempo (Días)</text>
                            <text x="15" y="70" text-anchor="middle" font-size="10" fill="#475569" transform="rotate(-90 15,70)">Altura (mm)</text>
                            
                            <!-- Datos (1 dia = 5mm, 2 = 10, 4 = 20) -->
                            <line x1="30" y1="130" x2="110" y2="50" stroke="#2563eb" stroke-width="2"/>
                            
                            <circle cx="50" cy="110" r="3" fill="#ef4444"/> <text x="50" y="140" font-size="8">2</text> <text x="20" y="113" font-size="8">10</text>
                            <circle cx="90" cy="70" r="3" fill="#ef4444"/> <text x="90" y="140" font-size="8">4</text> <text x="20" y="73" font-size="8">20</text>
                         </svg>` } }),
      options: ["25 mm","30 mm","35 mm","40 mm"],
      correct: 1,
      feedback: "La gráfica muestra que por cada 2 días, la planta crece 10 mm (es decir, 5 mm por día). Si son 6 días, crecerá 6 × 5 = 30 mm."
    },
    {
      type: "Modelado Geométrico (Descomposición)",
      question: "Un arquitecto necesita entapetar el piso de un salón con forma de 'L'. El plano muestra las siguientes medidas. Para calcular la cantidad de tapete, él descompone la figura trazando una línea (punteada) formando dos rectángulos. ¿Cuál es el área total del salón?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 150" width="200" height="150">
                            <!-- Poligono en forma de L -->
                            <polygon points="60,20 100,20 100,80 160,80 160,130 60,130" fill="#fef08a" stroke="#d97706" stroke-width="2"/>
                            <!-- Línea de descomposición -->
                            <line x1="100" y1="80" x2="100" y2="130" stroke="#d97706" stroke-dasharray="4,4"/>
                            
                            <!-- Etiquetas -->
                            <text x="80" y="15" text-anchor="middle" font-size="10" fill="#b45309">4m</text>
                            <text x="45" y="75" text-anchor="middle" font-size="10" fill="#b45309" transform="rotate(-90 45,75)">10m</text>
                            <text x="110" y="145" text-anchor="middle" font-size="10" fill="#b45309">10m</text>
                            <text x="175" y="105" text-anchor="middle" font-size="10" fill="#b45309" transform="rotate(-90 175,105)">5m</text>
                         </svg>` } }),
      options: ["70 m²","100 m²","80 m²","50 m²"],
      correct: 0,
      feedback: "Descomponiendo en dos rectángulos: El de la izquierda tiene base 4m y altura 10m (Área = 40m²). La parte derecha tiene altura 5m y su base es 6m (10m totales abajo - 4m de la izquierda). Área derecha = 6m × 5m = 30m². Total = 40 + 30 = 70 m²."
    },
    {
      type: "Álgebra (Traducción Simultánea)",
      question: "El doble de la masa del reactivo A sumada con el triple de la masa del reactivo B resulta en 50 gramos. ¿Cuál de las siguientes expresiones algebraicas traduce correctamente este enunciado?",
      visual: null,
      options: ["2A + 3B = 50","(2+A) + (3+B) = 50","A² + B³ = 50","2(A + B) + 3 = 50"],
      correct: 0,
      feedback: "El 'doble de A' es 2A, y el 'triple de B' es 3B. La palabra 'sumada' indica adición (+), y 'resulta' indica igualdad (=). Por tanto, 2A + 3B = 50."
    },
    {
      type: "Probabilidad Clásica (Dados)",
      question: "Un estudiante lanza un dado no trucado de seis caras (numeradas del 1 al 6). ¿Cuál es la probabilidad de que el número obtenido sea MÚLTIPLO DE 3?",
      visual: null,
      options: ["1/6","2/6 (o 1/3)","3/6 (o 1/2)","4/6 (o 2/3)"],
      correct: 1,
      feedback: "Los múltiplos de 3 en un dado son el 3 y el 6 (2 casos favorables). El total de caras es 6. La probabilidad es 2/6, que al simplificar es 1/3."
    },
    {
      type: "Modelado Geométrico (Descomposición Mixta)",
      question: "Una ventana de estilo clásico tiene la forma de un rectángulo coronado por un semicírculo. Si la base del rectángulo mide 40 cm y su altura es de 60 cm, ¿cuál es el procedimiento correcto para encontrar el área total de la ventana?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 150" width="200" height="150">
                            <!-- Rectángulo -->
                            <rect x="70" y="60" width="60" height="80" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <!-- Semicírculo -->
                            <path d="M 70 60 A 30 30 0 0 1 130 60 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/>
                            <!-- Etiquetas -->
                            <text x="100" y="155" text-anchor="middle" font-size="10" fill="#0369a1">40 cm</text>
                            <text x="55" y="100" text-anchor="middle" font-size="10" fill="#0369a1" transform="rotate(-90 55,100)">60 cm</text>
                            <!-- Línea guía -->
                            <line x1="70" y1="60" x2="130" y2="60" stroke="#0284c7" stroke-dasharray="4,4"/>
                         </svg>` } }),
      options: ["Área del rectángulo (40×60) más el área del semicírculo (π × 20² / 2)","Área del rectángulo (40×60) más el área del círculo completo (π × 40²)","Perímetro del rectángulo más la circunferencia","Área del rectángulo (40×60) por el área del semicírculo"],
      correct: 0,
      feedback: "La figura se descompone en un rectángulo y un semicírculo. El radio del semicírculo es la mitad de la base del rectángulo (20 cm). Al área del rectángulo se le SUMA la mitad del área de un círculo (πr²/2)."
    },
    {
      type: "Modelado Geométrico (Triángulos Rectángulos)",
      question: "Para alcanzar una muestra en lo alto de un muro de 4 metros, un estudiante apoya una escalera. Si la base de la escalera está a 3 metros de la pared, ¿cuál debe ser la longitud mínima de la escalera? (Pista: Usa el Teorema de Pitágoras c² = a² + b²)",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `<svg viewBox="0 0 200 150" width="200" height="150">
                            <!-- Pared -->
                            <rect x="40" y="20" width="20" height="100" fill="#94a3b8"/>
                            <text x="25" y="70" font-size="10" fill="#475569">4m</text>
                            <!-- Piso -->
                            <line x1="40" y1="120" x2="160" y2="120" stroke="#475569" stroke-width="4"/>
                            <text x="100" y="140" font-size="10" fill="#475569">3m</text>
                            <!-- Escalera -->
                            <line x1="60" y1="20" x2="130" y2="120" stroke="#d97706" stroke-width="4"/>
                            <text x="110" y="60" font-size="14" fill="#d97706" font-weight="bold">c = ?</text>
                         </svg>` } }),
      options: ["7 m","5 m","12 m","25 m"],
      correct: 1,
      feedback: "Aplicando Pitágoras: c² = 4² + 3² = 16 + 9 = 25. La raíz cuadrada de 25 es 5. La escalera mide 5 metros."
    },
    {
      type: "Álgebra (Consecutivos)",
      question: "En un experimento, la suma de las temperaturas de dos soluciones consecutivas (en grados) es 45. Si la temperatura de la primera solución es 'x', ¿qué modelo matemático representa este fenómeno?",
      visual: null,
      options: ["x + y = 45","x² + x = 45","x + (x + 1) = 45","2x = 45"],
      correct: 2,
      feedback: "Si un número es 'x', el siguiente o consecutivo es 'x + 1'. La suma de ambos se expresa correctamente como x + (x + 1) = 45."
    },
    {
      type: "Proporcionalidad Directa",
      question: "En la ley de Hooke, la fuerza aplicada a un resorte es directamente proporcional a su elongación (estiramiento). Si una fuerza de 10 Newtons estira el resorte 2 cm, ¿cuántos centímetros se estirará con una fuerza de 35 Newtons?",
      visual: null,
      options: ["7 cm","5 cm","10 cm","3.5 cm"],
      correct: 0,
      feedback: "Reduciendo a la unidad: si 10 N causan 2 cm, entonces 1 cm es causado por 5 N. Dividiendo 35 N / 5 N/cm = 7 cm. (También mediante regla de tres: 35×2/10 = 7)."
    },
    {
      type: "Geometría (Círculos)",
      question: "El contorno de una placa circular bacteriana mide 62.8 mm de perímetro (circunferencia). Sabiendo que la fórmula de la circunferencia es C = 2 × π × r, y tomando π = 3.14, ¿cuál es el valor del radio de la placa?",
      visual: null,
      options: ["5 mm","10 mm","20 mm","31.4 mm"],
      correct: 1,
      feedback: "Despejamos 'r': r = C / (2 × π) = 62.8 / (2 × 3.14) = 62.8 / 6.28 = 10 mm."
    },
    {
      type: "Probabilidad Compuesta",
      question: "Un estudiante lanza una moneda normal y un dado de seis caras al mismo tiempo. ¿Cuál es la probabilidad de obtener 'Sello' en la moneda Y un número 'menor que 3' en el dado?",
      visual: null,
      options: ["1/2","1/6","2/8","1/3"],
      correct: 1,
      feedback: "P(Sello) = 1/2. Los números menores que 3 son el 1 y el 2 (2/6 = 1/3). Como son eventos independientes, se multiplican: (1/2) × (1/3) = 1/6."
    },
    {
      type: "Interpretación de Datos (Probabilidad)",
      question: "Un estudio sobre eficacia de un medicamento en 100 pacientes mostró los siguientes resultados: 60 pacientes se curaron y 40 no. Si se selecciona un paciente al azar para una entrevista, ¿cuál es la probabilidad porcentual de elegir a alguien que NO se curó?",
      visual: null,
      options: ["40%","60%","100%","4%"],
      correct: 0,
      feedback: "La cantidad de pacientes que no se curaron es 40 de un total de 100. En fracción es 40/100, lo que equivale directamente al 40%."
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
      if (percentage === 1) return { title: "¡Estratega Maestro!", desc: "Tienes una habilidad excepcional para modelar situaciones matemáticas y ejecutar los cálculos sin errores." };
      if (percentage >= 0.5) return { title: "¡Buen Análisis!", desc: "Lograste formular varios problemas con éxito. Repasa los pasos de modelado geométrico y algebraico para alcanzar la perfección." };
      return { title: "¡Sigue Entrenando!", desc: "Formular problemas requiere práctica. Vuelve a la sección de Teoría y repasa cómo traducir el lenguaje cotidiano a matemáticas." };
    };

    const resultData = getResultMessage();

    return (/*#__PURE__*/
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-indigo-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/70 backdrop-blur-2xl rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] overflow-hidden border border-white" }, /*#__PURE__*/


      React.createElement("header", { className: "relative bg-[#0B1120] p-8 md:p-12 overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-violet-600/20 blur-[100px] rounded-full pointer-events-none" }), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" }, /*#__PURE__*/
      React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-indigo-300 rounded-2xl" })
      ), /*#__PURE__*/

      React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "max-w-2xl" }, /*#__PURE__*/
      React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" }, /*#__PURE__*/
      React.createElement(Brain, { className: "w-5 h-5 text-indigo-400" }), /*#__PURE__*/
      React.createElement("span", { className: "text-indigo-300 font-semibold tracking-widest text-xs uppercase" }, "M\xF3dulo de Competencia 2")
      ), /*#__PURE__*/
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" }, "Formulaci\xF3n y ", /*#__PURE__*/
      React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400" }, "Ejecuci\xF3n")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" }, "Eval\xFAa la capacidad para dise\xF1ar estrategias, crear modelos matem\xE1ticos y ejecutar c\xE1lculos precisos paso a paso para resolver problemas."

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.3)] transform rotate-3" }, /*#__PURE__*/
      React.createElement(Calculator, { className: "w-10 h-10 text-white" })
      )
      )
      ), /*#__PURE__*/


      React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" }, /*#__PURE__*/
      React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
      [
      { id: 'introduccion', icon: Brain, label: 'Introducción' },
      { id: 'teoria', icon: Shapes, label: 'Modelos y Estrategias' },
      { id: 'practica', icon: CheckCircle, label: 'Taller Práctico' }].
      map((tab) => /*#__PURE__*/
      React.createElement("button", {
        key: tab.id,
        onClick: () => setActiveTab(tab.id),
        className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
        activeTab === tab.id ?
        'bg-white text-indigo-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' :
        'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'}` }, /*#__PURE__*/


      React.createElement(tab.icon, { className: `w-4 h-4 ${activeTab === tab.id ? 'text-indigo-500' : ''}` }),
      tab.label
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("main", { className: "px-6 md:px-10 pb-12" },

      activeTab === 'introduccion' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" }, /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" }, /*#__PURE__*/

      React.createElement("div", { className: "space-y-6" }, /*#__PURE__*/
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "De los datos a la acci\xF3n"), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "En el m\xF3dulo anterior aprendiste a extraer informaci\xF3n. Ahora, el resto es mayor: debes usar esos datos para ", /*#__PURE__*/
      React.createElement("strong", { className: "font-semibold text-indigo-700" }, "dise\xF1ar un plan"), " y calcular una soluci\xF3n. Esto es lo que eval\xFAa verdaderamente tus matem\xE1ticas."
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-violet-500 rounded-l-2xl" }), /*#__PURE__*/
      React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "Habilidades clave de este m\xF3dulo:"), /*#__PURE__*/
      React.createElement("ul", { className: "space-y-4" },
      [
      "Traducir problemas del mundo real a lenguaje matemático.",
      "Seleccionar la fórmula o algoritmo adecuado.",
      "Ejecutar operaciones matemáticas sin equivocaciones lógicas."].
      map((text, i) => /*#__PURE__*/
      React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" }, /*#__PURE__*/
      React.createElement("div", { className: "mt-1 bg-indigo-100 p-1 rounded-full shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-600 group-hover:text-white" })
      ), /*#__PURE__*/
      React.createElement("span", null, text)
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-indigo-50/50 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } }, /*#__PURE__*/
      React.createElement("div", {
        className: "relative w-40 h-40 transition-transform duration-1000 ease-out cursor-default",
        style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' },
        onMouseEnter: (e) => e.currentTarget.style.transform = 'rotateX(50deg) rotateZ(-20deg) scale(1.1)',
        onMouseLeave: (e) => e.currentTarget.style.transform = 'rotateX(60deg) rotateZ(-45deg) scale(1)' }, /*#__PURE__*/

      React.createElement("div", { className: "absolute inset-0 bg-indigo-900 shadow-[0_40px_60px_rgba(79,70,229,0.3)]", style: { transform: 'translateZ(-1px)' } }), /*#__PURE__*/
      React.createElement("div", { className: "absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-indigo-600 to-violet-500 origin-bottom flex items-center justify-center border-t border-white/20", style: { transform: 'rotateX(-90deg)' } }, /*#__PURE__*/
      React.createElement(Sigma, { className: "w-8 h-8 text-white/50" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-violet-700 to-purple-600 origin-right flex items-center justify-center border-l border-white/20", style: { transform: 'rotateY(-90deg)' } }, /*#__PURE__*/
      React.createElement(Percent, { className: "w-8 h-8 text-white/50" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute inset-0 bg-white/30 backdrop-blur-sm border border-white flex items-center justify-center", style: { transform: 'translateZ(80px)' } }, /*#__PURE__*/
      React.createElement(Calculator, { className: "w-12 h-12 text-indigo-700 drop-shadow-md" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "absolute -top-10 -left-10 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce", style: { transform: 'translateZ(120px)', animationDuration: '2.5s' } }, "X"), /*#__PURE__*/
      React.createElement("div", { className: "absolute -bottom-10 -right-10 w-8 h-8 bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg animate-bounce", style: { transform: 'translateZ(90px)', animationDuration: '3s', animationDelay: '0.5s' } }, "Y")
      )
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" }, "\"Un problema bien formulado ya est\xE1 resuelto a la mitad.\""

      ), /*#__PURE__*/
      React.createElement("button", {
        onClick: () => setActiveTab('teoria'),
        className: "mt-6 bg-indigo-900 hover:bg-indigo-800 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(49,46,129,0.2)] active:scale-95 flex items-center gap-2" },
      "Estudiar Modelos ", /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-4 h-4" })
      )
      )
      )
      ),



      activeTab === 'teoria' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" }, /*#__PURE__*/


      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
      [
      { icon: Brain, title: '1. Modelar', desc: 'Traducir el problema cotidiano a un formato matemático (ecuación, figura, gráfico).', color: 'text-violet-600', bg: 'bg-violet-100', border: 'border-violet-100' },
      { icon: Shapes, title: '2. Diseñar Plan', desc: 'Seleccionar las fórmulas o pasos correctos. ¿Qué operaciones necesito hacer primero?', color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-100' },
      { icon: Calculator, title: '3. Ejecutar', desc: 'Realizar los cálculos sin errores aritméticos, mostrando el despeje paso a paso.', color: 'text-indigo-600', bg: 'bg-indigo-100', border: 'border-indigo-100' }].
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
      React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Manual de Estrategias y Ejecuci\xF3n"), /*#__PURE__*/
      React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-indigo-400 to-violet-500 mx-auto mt-4 rounded-full" }), /*#__PURE__*/
      React.createElement("p", { className: "mt-4 text-slate-500 max-w-2xl mx-auto text-base" }, "Estos son los 4 modelos que m\xE1s se eval\xFAan. Observa detalladamente c\xF3mo se resuelve cada uno ", /*#__PURE__*/
      React.createElement("strong", { className: "text-indigo-600" }, "paso a paso"), "."
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "space-y-12" }, /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-indigo-100 rounded-lg" }, /*#__PURE__*/React.createElement(Sigma, { className: "w-5 h-5 text-indigo-600" })), "1. Traducci\xF3n Algebraica"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "space-y-3 bg-white p-5 rounded-xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3 border-b border-slate-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"El doble de un n\xFAmero\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md" }, "2x")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3 border-b border-slate-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"Disminuido en cinco\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-md" }, "- 5")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center p-3" }, /*#__PURE__*/
      React.createElement("span", { className: "text-sm font-medium text-slate-600" }, "\"Es igual a su mitad\""), /*#__PURE__*/
      React.createElement("span", { className: "font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-md" }, "= x/2")
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-indigo-100 shadow-[0_4px_20px_rgba(79,70,229,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-indigo-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " Lee el texto parte por parte. Transforma cada frase en un s\xEDmbolo matem\xE1tico antes de intentar resolver. Identifica siempre cu\xE1l es tu valor desconocido (la variable ", /*#__PURE__*/React.createElement("strong", null, "X"), ")."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"Un plan de internet cobra $30.000 fijos al mes m\xE1s $2.000 por cada Giga extra. Si la factura lleg\xF3 por $44.000, \xBFcu\xE1ntas Gigas extra se consumieron?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600 mb-3" }, "Convertimos el texto a una ecuaci\xF3n identificando la variable desconocida ", /*#__PURE__*/React.createElement("strong", null, "(g = gigas)"), "."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 rounded-lg border border-violet-200 text-center shadow-sm" }, /*#__PURE__*/
      React.createElement("span", { className: "text-xs text-slate-500 block mb-1" }, "Total = Fijo + (Costo \xD7 gigas)"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-violet-800" }, "44.000 = 30.000 + 2.000g")
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600 mb-3" }, "Objetivo: Dejar la variable ", /*#__PURE__*/React.createElement("strong", null, "'g'"), " sola de un lado de la igualdad (Despejar)."), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Pasar los $30.000 fijos a restar.")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Pasar los $2.000 que multiplican a dividir."))
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/

      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "44.000 = ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "30.000"), " + 2.000g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "El 30.000 pasa a restar al otro lado"), /*#__PURE__*/


      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "44.000 ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-500" }, "- 30.000"), " = ", /*#__PURE__*/React.createElement("strong", { className: "text-blue-500" }, "2.000"), "g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/


      React.createElement("div", { className: "bg-white px-2 py-1.5 rounded border border-indigo-100 text-center" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-700" }, "14.000 = ", /*#__PURE__*/React.createElement("strong", { className: "text-blue-500" }, "2.000"), "g")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "El 2.000 pasa a dividir"), /*#__PURE__*/


      React.createElement("div", { className: "bg-indigo-600 px-2 py-2 rounded text-center shadow-sm" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-white" }, "g = 14.000 / 2.000 = 7")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-violet-100 rounded-lg" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-5 h-5 text-violet-600" })), "2. Modelado Geom\xE9trico (Figuras Compuestas)"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col items-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-40 h-40 overflow-visible", viewBox: "0 0 100 100" }, /*#__PURE__*/
      React.createElement("path", { d: "M 10 90 L 90 90 L 90 50 L 50 50 L 50 10 L 10 10 Z", fill: "#e0e7ff", stroke: "#6366f1", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("line", { x1: "50", y1: "50", x2: "10", y2: "50", stroke: "#8b5cf6", strokeWidth: "2", strokeDasharray: "4 4", className: "animate-pulse" }), /*#__PURE__*/
      React.createElement("text", { x: "30", y: "35", fontSize: "8", fill: "#4f46e5", fontWeight: "bold" }, "A1"), /*#__PURE__*/
      React.createElement("text", { x: "50", y: "75", fontSize: "8", fill: "#4f46e5", fontWeight: "bold" }, "A2")
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-xs text-slate-500 font-bold mt-4 tracking-widest uppercase" }, "Dividir para conquistar")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-violet-100 shadow-[0_4px_20px_rgba(139,92,246,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-violet-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " Rara vez te pedir\xE1n el \xE1rea de un cuadrado simple. El modelo consiste en ", /*#__PURE__*/React.createElement("strong", null, "trazar l\xEDneas imaginarias"), " para dividir la figura en cuadrados o tri\xE1ngulos conocidos, y sumar sus \xE1reas."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800 flex flex-col md:flex-row gap-6 items-center" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic flex-1" }, "\"Se desea sembrar pasto en un terreno rectangular de 10m x 8m, pero hay una piscina cuadrada de 3m de lado en su interior. \xBFCu\xE1l es el \xE1rea exacta a sembrar de pasto?\""), /*#__PURE__*/
      React.createElement("div", { className: "shrink-0 bg-slate-50 p-4 rounded-lg border border-slate-100 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement("svg", { className: "w-36 h-28 overflow-visible", viewBox: "0 0 120 100" }, /*#__PURE__*/
      React.createElement("rect", { x: "10", y: "10", width: "100", height: "80", fill: "#dcfce7", stroke: "#22c55e", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "60", y: "102", fontSize: "8", fill: "#166534", textAnchor: "middle", fontWeight: "bold" }, "10m"), /*#__PURE__*/
      React.createElement("text", { x: "0", y: "50", fontSize: "8", fill: "#166534", textAnchor: "middle", transform: "rotate(-90 0,50)", fontWeight: "bold" }, "8m"), /*#__PURE__*/
      React.createElement("rect", { x: "60", y: "25", width: "30", height: "30", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "2" }), /*#__PURE__*/
      React.createElement("text", { x: "75", y: "42", fontSize: "6", fill: "#0369a1", textAnchor: "middle", fontWeight: "bold" }, "3m"), /*#__PURE__*/
      React.createElement("text", { x: "56", y: "40", fontSize: "6", fill: "#0369a1", textAnchor: "middle", transform: "rotate(-90 56,40)", fontWeight: "bold" }, "3m"), /*#__PURE__*/
      React.createElement("text", { x: "35", y: "52", fontSize: "8", fill: "#15803d", textAnchor: "middle", fontWeight: "bold" }, "PASTO")
      )
      )
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "No hay f\xF3rmula para un rect\xE1ngulo con un hueco. Hay que modelarlo como una resta de dos figuras conocidas."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 text-center rounded-lg border border-violet-200" }, /*#__PURE__*/
      React.createElement("span", { className: "text-xs font-bold text-violet-800" }, "\xC1rea Verde = \xC1.Rect\xE1ngulo - \xC1.Piscina")
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Calcular \xE1rea del rect\xE1ngulo (Base \xD7 Altura).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Calcular \xE1rea del cuadrado (Lado \xD7 Lado).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Restar el valor peque\xF1o del grande."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/
      React.createElement("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-indigo-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase" }, "Rect\xE1ngulo"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-1 text-[11px]" }, /*#__PURE__*/React.createElement("span", { className: "font-mono" }, "10\xD78"), /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400" }), /*#__PURE__*/React.createElement("span", { className: "font-mono font-bold" }, "80"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-indigo-100" }, /*#__PURE__*/
      React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase" }, "Piscina"), /*#__PURE__*/
      React.createElement("div", { className: "flex items-center gap-1 text-[11px]" }, /*#__PURE__*/React.createElement("span", { className: "font-mono" }, "3\xD73"), /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-slate-400" }), /*#__PURE__*/React.createElement("span", { className: "font-mono font-bold" }, "9"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 leading-tight" }, "Restamos ambas \xE1reas:"), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-600 px-2 py-2 rounded text-center shadow-sm flex items-center justify-center gap-2 mt-1" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm text-white" }, "80 - 9 ="), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-amber-300" }, "71 m\xB2")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-amber-100 rounded-lg" }, /*#__PURE__*/React.createElement(Scale, { className: "w-5 h-5 text-amber-600" })), "3. Proporcionalidad y Regla de Tres"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "grid grid-cols-2 gap-4 text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-50 rounded-lg border border-amber-100" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Si 3 kilos cuestan"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-600" }, "$15.000")
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "text-slate-300" })
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-50 rounded-lg border border-amber-100" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Entonces 1 kilo"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-600" }, "$5.000")
      ), /*#__PURE__*/
      React.createElement("div", { className: "p-3 bg-amber-100 rounded-lg border border-amber-200" }, /*#__PURE__*/
      React.createElement("span", { className: "block text-xs text-slate-500 mb-1" }, "Por lo tanto 5 kilos"), /*#__PURE__*/
      React.createElement("strong", { className: "text-lg text-amber-700" }, "$25.000")
      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-amber-100 shadow-[0_4px_20px_rgba(245,158,11,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " \xA1Reducci\xF3n a la unidad! Antes de hacer multiplicaciones cruzadas complejas, preg\xFAntate: \"\xBFCu\xE1nto vale 1 sola unidad?\". Al encontrar el valor unitario, multiplicarlo por lo que te pidan es facil\xEDsimo."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"Una f\xE1brica empaca 120 cajas en 3 horas. Si mantienen el mismo ritmo constante, \xBFcu\xE1ntas cajas empacar\xE1n en un turno completo de 8 horas?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Es un problema de proporci\xF3n directa: A m\xE1s horas trabajadas, mayor ser\xE1 el n\xFAmero de cajas empacadas.")
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Usaremos la ", /*#__PURE__*/React.createElement("strong", { className: "text-amber-700" }, "Reducci\xF3n a la unidad"), "."), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-2" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Dividir para saber cu\xE1ntas cajas hacen en ", /*#__PURE__*/React.createElement("strong", null, "1 sola hora"), ".")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Multiplicar ese resultado por 8 horas."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col gap-1 mt-auto" }, /*#__PURE__*/
      React.createElement("div", { className: "text-[10px] text-center text-slate-500 font-bold uppercase tracking-wider mb-1" }, "Paso 1: Valor Unitario"), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-2 rounded border border-indigo-100 flex items-center justify-center gap-2" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-slate-600" }, "120 \xF7 3"), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-400" }), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs font-bold text-indigo-700" }, "40 cajas/hora")
      ), /*#__PURE__*/

      React.createElement("div", { className: "flex justify-center py-1" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/

      React.createElement("div", { className: "text-[10px] text-center text-slate-500 font-bold uppercase tracking-wider mb-1" }, "Paso 2: Multiplicar por 8"), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-600 p-2 rounded text-center shadow-sm flex items-center justify-center gap-2" }, /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-xs text-indigo-100" }, "40 \xD7 8"), /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-300" }), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-sm font-bold text-white" }, "320 cajas")
      )
      )
      )
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" }, /*#__PURE__*/
      React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" }, /*#__PURE__*/
      React.createElement("div", { className: "p-2 bg-rose-100 rounded-lg" }, /*#__PURE__*/React.createElement(Dices, { className: "w-5 h-5 text-rose-600" })), "4. Probabilidad Cl\xE1sica"

      ), /*#__PURE__*/
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center mb-8" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex justify-center items-center" }, /*#__PURE__*/
      React.createElement("div", { className: "text-center" }, /*#__PURE__*/
      React.createElement("div", { className: "px-6 py-2 bg-rose-50 border-b-2 border-slate-800 rounded-t-lg font-bold text-rose-600" }, "Casos a mi favor"

      ), /*#__PURE__*/
      React.createElement("div", { className: "px-6 py-2 bg-slate-50 rounded-b-lg font-bold text-slate-600 border-x-2 border-b-2 border-slate-100" }, "Total de opciones"

      )
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.05)] relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" }), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-600 leading-relaxed" }, /*#__PURE__*/
      React.createElement("strong", { className: "text-slate-800" }, "Estrategia:"), " No te dejes confundir por porcentajes al inicio. Toda probabilidad empieza como una simple fracci\xF3n. Cuenta lo que te sirve, ponlo arriba. Cuenta absolutamente todo lo posible, ponlo abajo."
      )
      )
      ), /*#__PURE__*/


      React.createElement("div", { className: "pt-8 border-t border-slate-200" }, /*#__PURE__*/
      React.createElement("h4", { className: "text-lg font-bold text-slate-800 mb-4 flex items-center gap-2" }, /*#__PURE__*/
      React.createElement(Lightbulb, { className: "w-5 h-5 text-amber-500" }), " Ejemplo de Aplicaci\xF3n Detallado"
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-white p-5 rounded-xl border border-slate-200 shadow-sm mb-6 border-l-4 border-l-slate-800" }, /*#__PURE__*/
      React.createElement("p", { className: "text-slate-700 font-medium italic" }, "\"En una ruleta de feria hay 2 casillas rojas, 3 azules y 1 verde. Si se gira una sola vez, \xBFcu\xE1l es la probabilidad de NO caer en una casilla azul?\"")
      ), /*#__PURE__*/

      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" }, /*#__PURE__*/
      React.createElement("div", { className: "bg-violet-50 p-5 rounded-xl border border-violet-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-violet-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-violet-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Brain, { className: "w-4 h-4" }), " 1. Modelar"), /*#__PURE__*/
      React.createElement("p", { className: "text-sm text-slate-600" }, "Debemos identificar matem\xE1ticamente los dos valores de la fracci\xF3n de probabilidad."), /*#__PURE__*/
      React.createElement("div", { className: "mt-auto bg-white p-2 rounded-lg border border-violet-200 text-center font-bold text-xs text-violet-800 shadow-sm" }, "Prob = (Casos Favorables) / (Total)"

      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-amber-50 p-5 rounded-xl border border-amber-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-amber-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-amber-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Shapes, { className: "w-4 h-4" }), " 2. Dise\xF1ar Plan"), /*#__PURE__*/
      React.createElement("ul", { className: "text-xs text-slate-600 space-y-2 mt-auto" }, /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Sumar todas las casillas para hallar el Total (Denominador).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, "Sumar solo las casillas rojas y verde para hallar los Favorables (Numerador).")), /*#__PURE__*/
      React.createElement("li", { className: "flex gap-2" }, /*#__PURE__*/React.createElement(ArrowRight, { className: "w-3 h-3 text-amber-500 shrink-0" }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", null, "Simplificar"), " la fracci\xF3n resultante."))
      )
      ), /*#__PURE__*/
      React.createElement("div", { className: "bg-indigo-50 p-5 rounded-xl border border-indigo-100 relative overflow-hidden flex flex-col" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-indigo-400" }), /*#__PURE__*/
      React.createElement("h5", { className: "font-bold text-indigo-700 flex items-center gap-2 mb-3" }, /*#__PURE__*/React.createElement(Calculator, { className: "w-4 h-4" }), " 3. Ejecutar Paso a Paso"), /*#__PURE__*/

      React.createElement("div", { className: "flex flex-col mt-auto gap-2" }, /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center bg-white px-2 py-1.5 rounded border border-indigo-100 text-[10px]" }, /*#__PURE__*/
      React.createElement("span", { className: "text-slate-500 font-bold uppercase" }, "Abajo (Total):"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-slate-700" }, "2+3+1 = ", /*#__PURE__*/React.createElement("strong", null, "6"))
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex justify-between items-center bg-white px-2 py-1.5 rounded border border-indigo-100 text-[10px]" }, /*#__PURE__*/
      React.createElement("span", { className: "text-slate-500 font-bold uppercase" }, "Arriba (A Favor):"), /*#__PURE__*/
      React.createElement("span", { className: "font-mono text-slate-700" }, "2(rojas)+1(verde) = ", /*#__PURE__*/React.createElement("strong", { className: "text-rose-600" }, "3"))
      ), /*#__PURE__*/

      React.createElement("div", { className: "flex justify-center" }, /*#__PURE__*/React.createElement(ArrowDown, { className: "w-3 h-3 text-indigo-300" })), /*#__PURE__*/

      React.createElement("div", { className: "flex items-center justify-center gap-3 bg-indigo-600 p-2 rounded shadow-sm" }, /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center font-mono font-bold text-xs text-rose-200" }, /*#__PURE__*/
      React.createElement("span", { className: "border-b border-indigo-400 px-1" }, "3"), /*#__PURE__*/
      React.createElement("span", { className: "px-1 text-indigo-200" }, "6")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center" }, /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-3 h-3 text-indigo-300" }), /*#__PURE__*/
      React.createElement("span", { className: "text-[7px] text-indigo-200 uppercase tracking-widest mt-0.5" }, "Simplificar (\xF73)")
      ), /*#__PURE__*/
      React.createElement("div", { className: "flex flex-col items-center font-mono font-bold text-sm text-white" }, /*#__PURE__*/
      React.createElement("span", { className: "border-b border-indigo-400 px-1" }, "1"), /*#__PURE__*/
      React.createElement("span", { className: "px-1" }, "2")
      )
      )
      )
      )
      )
      )
      )

      )
      )
      ),



      activeTab === 'practica' && /*#__PURE__*/
      React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? /*#__PURE__*/
      React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }), /*#__PURE__*/

      React.createElement("div", { className: "mb-8 flex justify-between items-end" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" }, "Desaf\xEDo de: ", /*#__PURE__*/
      React.createElement("span", { className: "text-indigo-500" }, questions[currentQuestion].type)
      ), /*#__PURE__*/
      React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
      ), /*#__PURE__*/
      React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
      ), /*#__PURE__*/

      React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" }, /*#__PURE__*/
      React.createElement("div", {
        className: "bg-gradient-to-r from-indigo-400 to-violet-500 h-full transition-all duration-500 ease-out",
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
        'bg-white border-slate-100 hover:border-indigo-300 hover:shadow-[0_8px_30px_rgba(79,70,229,0.05)] text-slate-600 hover:-translate-y-1'}` }, /*#__PURE__*/


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
        'bg-indigo-900 hover:bg-indigo-800 text-white shadow-[0_10px_20px_rgba(49,46,129,0.2)] hover:-translate-y-1' :
        'bg-slate-100 text-slate-400 cursor-not-allowed'}` },


      currentQuestion === questions.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Desafío', /*#__PURE__*/
      React.createElement(ArrowRight, { className: "w-5 h-5" })
      )
      )
      ) : /*#__PURE__*/

      React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(79,70,229,0.15)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" }, /*#__PURE__*/
      React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-400 via-violet-500 to-purple-500" }), /*#__PURE__*/

      React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-indigo-100 to-violet-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" }, /*#__PURE__*/
      React.createElement(Award, { className: "w-14 h-14 text-indigo-500" })
      ), /*#__PURE__*/

      React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" },
      resultData.desc
      ), /*#__PURE__*/

      React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" }, /*#__PURE__*/
      React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-400 mb-2" },
      score, " ", /*#__PURE__*/React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, "/ ", questions.length)
      ), /*#__PURE__*/
      React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Respuestas Correctas")
      ), /*#__PURE__*/

      React.createElement("button", {
        onClick: resetQuiz,
        className: "bg-indigo-900 hover:bg-indigo-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(49,46,129,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto" }, /*#__PURE__*/

      React.createElement(RefreshCw, { className: "w-5 h-5" }), "Intentar de nuevo"

      )
      )

      )


      )
      )
      ));

  }

  window.renderMathModule2 = (containerId) => {
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
      try {
        if (!window._reactRoots) window._reactRoots = {};
        if (!window._reactRoots[containerId]) {
          window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
        }
        window._reactRoots[containerId].render(React.createElement(ModuloFormulacion));
        console.log("mathModule2.js: Renderizado exitoso.");
      } catch (e) {
        console.error("mathModule2.js Error:", e);
        container.innerHTML = `<div class="p-10 text-center" style="color: #f87171"><h2 class="text-xl font-bold">Error en renderizado: ${e.message}</h2></div>`;
      }
    } else {
      console.warn("mathModule2.js: No se encontró ReactDOM o el contenedor.");
    }
  };
})();