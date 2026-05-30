(function () {
  const { useState, useEffect, useRef } = React;

  // Adaptador de Iconos (Mapeo Lucide -> Material) - Estándar Premium
  const Icon = ({ name, className = "", style = {} }) => {
    const mapping = {
      'PieChart': 'pie_chart',
      'BarChart': 'bar_chart',
      'Dices': 'casino',
      'Sigma': 'functions',
      'Target': 'adjust',
      'Brain': 'psychology',
      'CheckCircle': 'check_circle',
      'ArrowRight': 'arrow_forward',
      'Lightbulb': 'lightbulb',
      'Award': 'emoji_events',
      'RefreshCw': 'refresh',
      'Calculator': 'calculate',
      'BookOpen': 'menu_book',
      'Users': 'groups',
      'List': 'list',
      'TrendingUp': 'trending_up',
      'ScatterChart': 'scatter_plot',
      'Activity': 'insights',
      'Info': 'info'
    };
    const iconName = mapping[name] || name || 'help_outline';
    return React.createElement("span", {
      className: `material-icons-round ${className}`,
      style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
    }, iconName);
  };

  function MathModule8() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: EJEMPLOS Y ESTRATEGIAS
    // ==========================================

    const ejemplosEstrategia1 = [
      {
        titulo: "La Media (Notas escolares)",
        situacion: "Tienes las notas de tres materias: 7, 8 y 9. ¿Cuál es tu nota media (promedio)?",
        analisis: "Sumamos las notas y las dividimos entre el número total de materias.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Suma = 7 + 8 + 9 = 24. División = 24 ÷ 3 = 8."),
        resultado: "Media = 8"
      },
      {
        titulo: "La Media (Edades del grupo)",
        situacion: "En un grupo de amigos las edades son: 10, 12, 14 y 16 años. ¿Cuál es el promedio de edad?",
        analisis: "Sumamos todas las edades y las dividimos entre las 4 personas.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Suma = 10 + 12 + 14 + 16 = 52. División = 52 ÷ 4 = 13."),
        resultado: "Media = 13 años"
      },
      {
        titulo: "La Media (Temperaturas semanales)",
        situacion: "Se registran las temperaturas de tres días seguidos: 20°C, 22°C y 24°C. ¿Cuál es el promedio de temperatura?",
        analisis: "Sumamos los tres registros y dividimos entre 3.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Suma = 20 + 22 + 24 = 66. División = 66 ÷ 3 = 22."),
        resultado: "Media = 22°C"
      }
    ];

    const ejemplosEstrategia2 = [
      {
        titulo: "La Mediana (Cantidad impar de datos)",
        situacion: "Encuentra la mediana para el conjunto de edades: {3, 5, 7, 9, 11}.",
        analisis: "Como los datos ya están ordenados y la cantidad es impar (5 datos), la mediana es el dato exacto de la mitad.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Posición central: (5 + 1) ÷ 2 = 3 (el tercer dato, que es 7)."),
        resultado: "Mediana = 7"
      },
      {
        titulo: "La Mediana (Cantidad par de datos)",
        situacion: "Encuentra la mediana de las estaturas: {2, 4, 6, 8, 10, 12}.",
        analisis: "Como los datos están ordenados y la cantidad es par (6 datos), tomamos los dos datos centrales (6 y 8) y sacamos su promedio.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Centro: 6 y 8. Promedio = (6 + 8) ÷ 2 = 7."),
        resultado: "Mediana = 7"
      },
      {
        titulo: "La Mediana (Datos desordenados)",
        situacion: "Calcula la mediana del conjunto de notas: {9, 2, 5}.",
        analisis: "¡Importante! Antes de calcular, se deben ordenar los datos de menor a mayor.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Ordenando: {2, 5, 9}. El valor central es 5."),
        resultado: "Mediana = 5"
      }
    ];

    const ejemplosEstrategia3 = [
      {
        titulo: "La Moda (Unimodal - 1 moda)",
        situacion: "Se registra el número de calzado de un grupo: {2, 3, 4, 4, 4, 5}. ¿Cuál es la moda?",
        analisis: "Buscamos el valor que tiene la mayor frecuencia (el que más se repite).",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "El número 4 aparece 3 veces, mientras que los demás aparecen solo 1 vez."),
        resultado: "Moda = 4 (Unimodal)"
      },
      {
        titulo: "La Moda (Bimodal - 2 modas)",
        situacion: "Ventas de helados por sabores: {Chocolate, Chocolate, Vainilla, Fresa, Fresa, Chocolate, Fresa, Chocolate, Fresa}.",
        analisis: "Identificamos si hay múltiples categorías empatadas en la frecuencia máxima.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Chocolate se repite 4 veces, Fresa se repite 4 veces. Vainilla 1 vez."),
        resultado: "Modas = Chocolate y Fresa"
      },
      {
        titulo: "La Moda (Amodal - 0 modas)",
        situacion: "Calificaciones de un examen de 5 alumnos: {1, 2, 3, 4, 5}.",
        analisis: "Si todos los datos se repiten exactamente el mismo número de veces, no hay un valor predominante.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Cada número aparece exactamente 1 vez. No hay ninguno con frecuencia mayor."),
        resultado: "No hay moda (Amodal)"
      }
    ];

    const ejemplosEstrategia4 = [
      {
        titulo: "Conteo (Diagrama de Árbol)",
        situacion: "Un menú ofrece 2 entradas, 3 platos fuertes y 2 postres. ¿Cuántos almuerzos diferentes se pueden armar?",
        analisis: "Multiplicamos las opciones de cada nivel del árbol utilizando el principio multiplicativo.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "Cálculo = 2 × 3 × 2 = 12 combinaciones."),
        resultado: "12 menús diferentes"
      },
      {
        titulo: "Probabilidad (Las Mochilas)",
        situacion: "Mochila A tiene 3 bolas rojas y 2 azules. Mochila B tiene 1 roja y 4 azules. Sacas una bola de cada una. ¿Probabilidad de que ambas sean rojas?",
        analisis: "Multiplicamos las probabilidades de cada evento independiente consecutivo.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "P(Roja A) = 3/5. P(Roja B) = 1/5. Prob conjunta = 3/5 × 1/5 = 3/25 (12%)."),
        resultado: "Probabilidad = 3/25"
      },
      {
        titulo: "Probabilidad (Monedas al aire)",
        situacion: "Lanzamos dos monedas al aire. ¿Cuál es la probabilidad de que ambas caigan en Cara?",
        analisis: "La probabilidad de obtener cara en una moneda es 1/2. Multiplicamos las probabilidades individuales.",
        calculo: React.createElement("div", { className: "text-xs font-mono" }, "P(C y C) = 1/2 × 1/2 = 1/4 (25%)."),
        resultado: "Probabilidad = 1/4"
      }
    ];

    // Configuración de temas para el diseño unificado
    const themeConfig = {
      rose: { bgLight: 'bg-rose-50/50', text: 'text-rose-600', badgeBg: 'bg-rose-100', badgeText: 'text-rose-700', grad: 'from-rose-400 to-rose-600' },
      orange: { bgLight: 'bg-orange-50/50', text: 'text-orange-600', badgeBg: 'bg-orange-100', badgeText: 'text-orange-700', grad: 'from-orange-400 to-orange-600' },
      red: { bgLight: 'bg-red-50/50', text: 'text-red-600', badgeBg: 'bg-red-100', badgeText: 'text-red-700', grad: 'from-red-400 to-red-600' },
      pink: { bgLight: 'bg-pink-50/50', text: 'text-pink-600', badgeBg: 'bg-pink-100', badgeText: 'text-pink-700', grad: 'from-pink-400 to-pink-600' }
    };

    const renderCasos = (casosArray, colorTheme) => {
      const theme = themeConfig[colorTheme];
      return React.createElement("div", { className: "space-y-8 mt-8" },
        casosArray.map((caso, index) => 
          React.createElement("div", { key: index, className: "relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group" },
            React.createElement("div", { className: `absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}` }),
            React.createElement("div", { className: "p-6 border-b border-slate-100 bg-slate-50/30" },
              React.createElement("div", { className: "flex items-center gap-3 mb-3" },
                React.createElement("div", { className: `p-2 ${theme.badgeBg} rounded-xl` },
                  React.createElement(Icon, { name: "Lightbulb", className: `w-5 h-5 ${theme.text}` })
                ),
                React.createElement("h4", { className: "text-xl font-bold text-slate-800" }, "Caso Práctico ", index + 1, ": ", caso.titulo)
              ),
              React.createElement("p", { className: "text-slate-600 font-medium text-[15px] leading-relaxed italic border-l-4 border-slate-300 pl-4 ml-1 py-1" }, "\"", caso.situacion, "\"")
            ),
            React.createElement("div", { className: "grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white" },
              React.createElement("div", { className: "p-6 hover:bg-slate-50/50 transition-colors" },
                React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                  React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "1"),
                  React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Analizar Lógica")
                ),
                React.createElement("div", { className: "text-sm text-slate-600 leading-relaxed" }, caso.analisis)
              ),
              React.createElement("div", { className: "p-6 hover:bg-slate-50/50 transition-colors" },
                React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                  React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs` }, "2"),
                  React.createElement("h5", { className: "font-bold text-slate-800 text-sm uppercase tracking-wide" }, "Operar")
                ),
                React.createElement("div", { className: "bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner" }, caso.calculo)
              ),
              React.createElement("div", { className: `p-6 ${theme.bgLight} flex flex-col justify-center` },
                React.createElement("div", { className: "flex items-center gap-3 mb-4" },
                  React.createElement("span", { className: `flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm` }, "3"),
                  React.createElement("h5", { className: `font-bold ${theme.text} text-sm uppercase tracking-wide` }, "Solución")
                ),
                React.createElement("div", { className: `mt-2 p-4 rounded-xl bg-gradient-to-br ${theme.grad} text-center shadow-md` },
                  React.createElement("span", { className: "text-[15px] font-bold text-white tracking-wide" }, caso.resultado)
                )
              )
            )
          )
        )
      );
    };

    // ==========================================
    // QUIZ (PRÁCTICA) - 21 PREGUNTAS
    // ==========================================
    const questions = [
      {
        "type": "Promedios",
        "question": "En un grupo de 5 estudiantes de grado 11, las notas obtenidas en el último examen de matemáticas (calificado de 1.0 a 5.0) fueron: 3.0, 4.0, 3.5, 4.5 y 5.0. ¿Cuál es la media (promedio) de las notas obtenidas por este grupo?",
        "visual": null,
        "options": [
          "3.5",
          "4.0",
          "4.2",
          "3.8"
        ],
        "correct": 1,
        "feedback": "¡Excelente! La media aritmética se calcula sumando todos los valores de las notas (3.0 + 4.0 + 3.5 + 4.5 + 5.0 = 20.0) y dividiendo esta suma entre el número total de estudiantes (5). Así, 20.0 ÷ 5 = 4.0."
      },
      {
        "type": "Medidas de Tendencia Central",
        "question": "Una pequeña empresa tiene 5 empleados. Cuatro de ellos son operarios y ganan $1.000.000 cada uno, y el quinto es el gerente que gana $10.000.000. Si se desea dar a conocer una cifra que represente de forma justa el salario típico de los trabajadores de esta empresa, ¿qué medida de tendencia central se debe utilizar y cuál es su valor?",
        "visual": null,
        "options": [
          "La media, porque tiene en cuenta todos los valores; su valor es $2.800.000.",
          "La moda, porque representa el salario más alto; su valor es $10.000.000.",
          "La mediana, porque no se ve afectada por el salario extremo del gerente; su valor es $1.000.000.",
          "La media y la mediana por igual, ambas valen $1.000.000."
        ],
        "correct": 2,
        "feedback": "¡Muy bien! Cuando hay valores extremos atípicos (como los $10.000.000 del gerente frente a los $1.000.000 de los operarios), la media aritmética se ve muy distorsionada ($2.800.000). La mediana representa el valor de la posición central ($1.000.000) y describe de forma más realista el salario típico de los operarios."
      },
      {
        "type": "Técnicas de Conteo",
        "question": "Un almacén de ropa ofrece una promoción que incluye: 4 tipos de camisas, 3 tipos de pantalones y 2 tipos de zapatos. Un cliente debe escoger una prenda de cada categoría. ¿Cuántas combinaciones diferentes de ropa (outfits) puede armar?",
        "visual": null,
        "options": [
          "9 combinaciones",
          "12 combinaciones",
          "18 combinaciones",
          "24 combinaciones"
        ],
        "correct": 3,
        "feedback": "¡Así es! De acuerdo con el principio multiplicativo, para determinar el número total de combinaciones de eventos independientes secuenciales, se multiplican las opciones de cada categoría: 4 camisas × 3 pantalones × 2 zapatos = 24 combinaciones de ropa."
      },
      {
        "type": "Probabilidad Independiente",
        "question": "En una clase hay dos mochilas oscuras. La Mochila A contiene 3 bolas rojas y 2 azules. La Mochila B contiene 1 bola roja y 4 bolas azules. Si un estudiante saca al azar una bola de la Mochila A y luego otra de la Mochila B, ¿cuál es la probabilidad de que AMBAS bolas sean rojas?",
        "visual": null,
        "options": [
          "3/25",
          "4/10",
          "3/5",
          "1/5"
        ],
        "correct": 0,
        "feedback": "¡Correcto! La probabilidad de sacar roja de la Mochila A es 3 de 5 (3/5). La probabilidad de roja de la Mochila B es 1 de 5 (1/5). Como son eventos independientes, multiplicamos sus probabilidades individuales: (3/5) × (1/5) = 3/25."
      },
      {
        "type": "Propiedades de la Media",
        "question": "Se tiene un conjunto de 10 datos cuya media aritmética es 15. Si a cada uno de los 10 datos se le suma el número 2, ¿cuál será la nueva media del conjunto?",
        "visual": null,
        "options": [
          "Se mantiene en 15",
          "Aumenta a 17",
          "Aumenta a 30",
          "No se puede determinar sin conocer los datos"
        ],
        "correct": 1,
        "feedback": "¡Perfecto! Una propiedad fundamental de la media aritmética indica que si se suma una constante (en este caso 2) a todos los valores de un conjunto de datos, la media de ese nuevo conjunto aumenta exactamente en esa misma cantidad constante: 15 + 2 = 17."
      },
      {
        "type": "Mediana",
        "question": "Considere el siguiente conjunto de datos correspondientes a las edades de 6 niños: {2, 4, 6, 8, 10, 12}. ¿Cuál es la mediana de este conjunto?",
        "visual": null,
        "options": [
          "6",
          "7",
          "8",
          "6 y 8"
        ],
        "correct": 1,
        "feedback": "¡Excelente! El conjunto de datos ya está ordenado de menor a mayor. Dado que el número de datos es par (6 elements), la mediana corresponde al promedio aritmético de los dos valores centrales (el tercero y el cuarto valor, es decir, 6 y 8): (6 + 8) ÷ 2 = 7."
      },
      {
        "type": "Moda",
        "question": "Una heladería registró las ventas de sabores durante una hora: Vainilla, Chocolate, Fresa, Chocolate, Vainilla, Chocolate, Limón. ¿Cuál es la moda de este conjunto de datos?",
        "visual": null,
        "options": [
          "Vainilla",
          "Chocolate",
          "Fresa",
          "No hay moda"
        ],
        "correct": 1,
        "feedback": "¡Muy bien! La moda es la categoría que cuenta con la mayor frecuencia absoluta en el conjunto de datos (el que más se repite). En este registro, el sabor 'Chocolate' aparece 3 veces, superando a Vainilla (2 veces), Fresa (1 vez) y Limón (1 vez)."
      },
      {
        "type": "Probabilidad Simple",
        "question": "Si se lanzan tres monedas al aire simultáneamente, ¿cuál es la probabilidad de que las tres caigan mostrando 'Cara'?",
        "visual": null,
        "options": [
          "1/3",
          "3/8",
          "1/8",
          "1/4"
        ],
        "correct": 2,
        "feedback": "¡Así es! El espacio muestral para el lanzamiento de tres monedas contiene 2³ = 8 resultados posibles ({CCC, CCS, CSC, CSS, SCC, SCS, SSC, SSS}). De ellos, solo 1 caso ({CCC}) es favorable. Por tanto, la probabilidad es de 1/8."
      },
      {
        "type": "Medidas de Tendencia Central",
        "question": "¿En qué escenario es preferible utilizar la Mediana en lugar de la Media?",
        "visual": null,
        "options": [
          "Cuando todos los datos son exactamente iguales.",
          "Cuando existen valores atípicos (muy grandes o muy pequeños) que distorsionan el promedio.",
          "Cuando los datos son variables cualitativas como colores o marcas.",
          "Cuando se requiere saber cuál es el dato que más se repite."
        ],
        "correct": 1,
        "feedback": "¡Correcto! La mediana es resistente (robusta) ante valores extremos o atípicos de una distribución porque representa la posición central del ordenamiento, mientras que la media aritmética puede verse gravemente desviada por datos muy grandes o pequeños."
      },
      {
        "type": "Probabilidad Simple",
        "question": "Al lanzar un dado legal de 6 caras, ¿cuál es la probabilidad de obtener un número primo (considerando que los primos en el dado son 2, 3 y 5)?",
        "visual": null,
        "options": [
          "1/6",
          "1/3",
          "1/2",
          "2/3"
        ],
        "correct": 2,
        "feedback": "¡Excelente! Los casos favorables en el dado son 3 (los números 2, 3 y 5). Los casos posibles totales son 6. Por tanto, la probabilidad es 3/6, que al simplificarse da 1/2 (o el 50%)."
      },
      {
        "type": "Técnicas de Conteo",
        "question": "Para viajar de la Ciudad A a la Ciudad B existen 3 rutas diferentes. Para viajar de la Ciudad B a la Ciudad C existen 4 rutas diferentes. Utilizando un diagrama de árbol mental, ¿cuántas formas distintas hay de viajar de la Ciudad A a la Ciudad C pasando obligatoriamente por la Ciudad B?",
        "visual": null,
        "options": [
          "7 formas",
          "12 formas",
          "64 formas",
          "81 formas"
        ],
        "correct": 1,
        "feedback": "¡Correcto! Por el principio multiplicativo, el total de alternativas consecutivas es la multiplicación de los caminos disponibles para cada tramo de viaje: 3 caminos (de A a B) × 4 caminos (de B a C) = 12 formas diferentes."
      },
      {
        "type": "Probabilidad Independiente",
        "question": "Una ruleta está dividida en 8 secciones iguales: 3 secciones son rojas y 5 secciones son negras. Si se hace girar la ruleta dos veces, ¿cuál es la probabilidad de que en ambos giros la ruleta se detenga en una sección roja?",
        "visual": null,
        "options": [
          "3/8",
          "6/16",
          "9/64",
          "6/64"
        ],
        "correct": 2,
        "feedback": "¡Muy bien! Los giros son eventos independientes. En cada uno, la probabilidad de detenerse en rojo es de 3/8. Multiplicamos la probabilidad de ambos eventos consecutivos: (3/8) × (3/8) = 9/64."
      },
      {
        "type": "Promedios",
        "question": "Un estudiante necesita un promedio (media) mínimo de 3.5 en 4 evaluaciones para aprobar la materia. Sus notas en las tres primeras evaluaciones son: 3.0, 4.0 y 2.0. ¿Qué nota mínima debe sacar en la cuarta evaluación para lograr exactamente el promedio de 3.5?",
        "visual": null,
        "options": [
          "3.5",
          "4.0",
          "4.5",
          "5.0"
        ],
        "correct": 3,
        "feedback": "¡Exacto! Si el promedio deseado de 4 exámenes es 3.5, la suma de las cuatro notas debe ser 4 × 3.5 = 14.0. La suma de las primeras tres notas es 3.0 + 4.0 + 2.0 = 9.0. Por lo tanto, la cuarta nota debe ser de 14.0 - 9.0 = 5.0."
      },
      {
        "type": "Moda",
        "question": "Un investigador analiza los resultados de una encuesta y afirma que los datos son 'bimodales'. Esto significa que:",
        "visual": null,
        "options": [
          "El conjunto de datos tiene exactamente dos promedios distintos.",
          "Existen dos valores que comparten la frecuencia máxima de repetición.",
          "La diferencia entre la media y la mediana es igual a 2.",
          "El conjunto de datos se dividió en dos mitades exactas."
        ],
        "correct": 1,
        "feedback": "¡Correcto! Una distribución es bimodal cuando presenta dos valores que se presentan con la misma frecuencia máxima dentro del conjunto de observaciones."
      },
      {
        "type": "Probabilidad con Reemplazo",
        "question": "Se tiene una urna con 4 bolas blancas y 6 bolas negras. Un experimento consiste en sacar una bola, anotar su color, VOLVERLA A METER a la urna (con reposición), y sacar una segunda bola. ¿Cuál es la probabilidad de que ambas bolas extraídas sean blancas?",
        "visual": null,
        "options": [
          "16/100 (16%)",
          "4/100 (4%)",
          "12/90 (13.3%)",
          "24/100 (24%)"
        ],
        "correct": 0,
        "feedback": "¡Excelente! Como hay reposición, la composición de la urna no cambia en la segunda extracción (4 blancas de 10). La probabilidad de blanca en cada extracción es 4/10. La probabilidad de ambas es (4/10) × (4/10) = 16/100, equivalente al 16%."
      },
      {
        "type": "Leyes de Probabilidad",
        "question": "La regla del producto en probabilidad (multiplicar fracciones) se utiliza principalmente para calcular:",
        "visual": null,
        "options": [
          "La probabilidad de que ocurra un evento O bien el otro.",
          "La probabilidad de eventos mutuamente excluyentes.",
          "La probabilidad de que ocurran dos eventos independientes de forma simultánea o consecutiva (evento A Y evento B).",
          "El promedio de probabilidades."
        ],
        "correct": 2,
        "feedback": "¡Perfecto! La regla del producto indica que la probabilidad conjunta de que ocurran eventos independientes simultánea o consecutivamente (evento A y evento B) es la multiplicación de sus probabilidades individuales: P(A ∩ B) = P(A) × P(B)."
      },
      {
        "type": "Medidas de Tendencia Central",
        "question": "Si en una distribución de datos se observa una campana de Gauss perfecta (distribución totalmente simétrica), es correcto afirmar que:",
        "visual": null,
        "options": [
          "No existe la moda.",
          "La media es mucho mayor que la mediana.",
          "La media y la mediana son exactamente el mismo valor.",
          "La mediana siempre será el doble de la media."
        ],
        "correct": 2,
        "feedback": "¡Muy bien! En distribuciones perfectamente simétricas y unimodales (como la campana de Gauss), la media aritmética, la mediana y la moda coinciden exactamente en el mismo punto de simetría."
      },
      {
        "type": "Probabilidad Simple",
        "question": "Un estudiante debe responder un examen de dos preguntas de Falso/Verdadero. Como no estudió, responde ambas al azar. ¿Cuál es la probabilidad de que acierte ambas preguntas?",
        "visual": null,
        "options": [
          "1/4 (25%)",
          "1/2 (50%)",
          "1/3 (33%)",
          "100%"
        ],
        "correct": 0,
        "feedback": "¡Excelente! Para cada pregunta hay una probabilidad de 1/2 de acertar al azar. Al ser respuestas independientes, la probabilidad de acertar ambas es el producto de las probabilidades individuales: (1/2) × (1/2) = 1/4 o 25%."
      },
      {
        "type": "Técnicas de Conteo",
        "question": "En un concesionario se venden autos que pueden ser configurados por el comprador: hay 2 modelos disponibles, 4 colores exteriores y 3 tipos de rines. ¿Cuántos autos completamente distintos en su configuración (modelo + color + rines) puede ensamblar el concesionario?",
        "visual": null,
        "options": [
          "9 autos",
          "18 autos",
          "24 autos",
          "32 autos"
        ],
        "correct": 2,
        "feedback": "¡Perfecto! Nuevamente aplicamos el principio multiplicativo: 2 modelos × 4 colores × 3 tipos de rines = 24 combinaciones o configuraciones de automóviles diferentes."
      },
      {
        "type": "Efecto de Valores Atípicos",
        "question": "Se tiene una lista con las edades de 5 hermanos: {5, 5, 8, 12, 15}. Si nace un nuevo hermano (edad 0), ¿cuál de las siguientes medidas cambiará drásticamente disminuyendo su valor?",
        "visual": null,
        "options": [
          "La moda",
          "La media",
          "La mediana",
          "Ninguna medida cambia"
        ],
        "correct": 1,
        "feedback": "¡Muy bien! La media aritmética es altamente sensible a valores extremos o atípicos. Al introducir un recién nacido (edad 0), la suma de las edades se mantiene casi igual pero se divide entre 6 en lugar de 5, reduciendo la media de 9 a 7.5. La mediana varía levemente de 8 a 6.5, y la moda se mantiene en 5."
      },
      {
        "type": "Técnicas de Conteo",
        "question": "Tienes 4 rosquitas (aros) de diferentes tamaños que deseas apilar en un poste vertical. ¿De cuántas formas distintas puedes organizar u ordenar las 4 rosquitas en el poste?",
        "visual": null,
        "options": [
          "4 formas",
          "16 formas",
          "24 formas",
          "120 formas"
        ],
        "correct": 2,
        "feedback": "¡Excelente! Como el orden de las rosquitas importa (al ser de diferentes tamaños), se trata de una permutación lineal de 4 elementos. El número de formas de ordenar 4 objetos distintos viene dado por 4 factorial (4!): 4 × 3 × 2 × 1 = 24 formas distintas."
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
      if (percentage === 1) return { title: "¡Científico de Datos!", desc: "Dominas por completo la probabilidad y la estadística. Sabes diferenciar permutaciones y evitas los engaños del promedio." };
      if (percentage >= 0.6) return { title: "¡Buen Análisis Estocástico!", desc: "Entiendes los datos, pero ten cuidado con la diferencia entre Combinación y Permutación. Repasa esos casos." };
      return { title: "¡La probabilidad es práctica!", desc: "El azar tiene reglas fijas. Vuelve a estudiar el formulario clave, especialmente la Regla de Laplace." };
    };

    const resultData = getResultMessage();

    return (
      React.createElement("div", { className: "min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-50 via-rose-50/30 to-slate-200 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center" },
        React.createElement("div", { className: "max-w-6xl w-full mx-auto bg-white/80 backdrop-blur-2xl shadow-[0_20px_60px_-15px_rgba(244,63,94,0.15)] overflow-hidden border border-white rounded-[2.5rem]" },
          React.createElement("header", { className: "relative bg-[#1e080b] p-8 md:p-14 overflow-hidden" },
            React.createElement("div", { className: "absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-rose-500/20 blur-[120px] rounded-full pointer-events-none" }),
            React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[35rem] h-[35rem] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" }),
            React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" },
              React.createElement("div", { className: "max-w-2xl" },
                React.createElement("div", { className: "inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" },
                  React.createElement(Icon, { name: "PieChart", className: "text-rose-400" }),
                  React.createElement("span", { className: "text-rose-300 font-bold tracking-widest text-xs uppercase" }, "Módulo de Competencia 8")
                ),
                React.createElement("h1", { className: "text-4xl md:text-6xl font-black mb-5 text-white tracking-tight leading-tight" }, "Estadística y ",
                  React.createElement("br", { className: "hidden md:block" }),
                  React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400" }, "Probabilidad II")
                ),
                React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light max-w-xl" }, "Evalúa tu capacidad de analizar datos e incertidumbre: domina promedios engañosos, técnicas de conteo, distribuciones y leyes de probabilidad.")
              ),
              React.createElement("div", { className: "hidden md:flex items-center justify-center w-24 h-24 bg-gradient-to-br from-rose-500 to-red-600 rounded-[2rem] shadow-[0_0_40px_rgba(244,63,94,0.3)] transform rotate-6 border border-white/10" },
                React.createElement(Icon, { name: "Dices", className: "text-white text-4xl" })
              )
            )
          ),
          React.createElement("nav", { className: "px-6 md:px-12 pt-8 pb-4" },
            React.createElement("div", { className: "flex bg-slate-100/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200/60 overflow-x-auto hide-scrollbar" },
              [
                { id: 'introduccion', icon: 'BarChart', label: 'Datos y Azar' },
                { id: 'teoria', icon: 'BookOpen', label: 'Leyes Estadísticas' },
                { id: 'practica', icon: 'Target', label: 'Simulador de Datos' }
              ].map((tab) =>
                React.createElement("button", {
                  key: tab.id,
                  onClick: () => setActiveTab(tab.id),
                  className: `flex items-center justify-center gap-2 px-8 py-3.5 font-bold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                    activeTab === tab.id ?
                      'bg-white text-rose-700 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-white scale-100' :
                      'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50 scale-95'
                  }`
                },
                  React.createElement(Icon, { name: tab.icon, className: activeTab === tab.id ? 'text-rose-500' : '' }),
                  tab.label
                )
              )
            )
          ),
          React.createElement("main", { className: "p-6 md:px-12 md:pb-12 md:pt-4" },
            activeTab === 'introduccion' && React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" },
              React.createElement("div", { className: "grid md:grid-cols-2 gap-10 items-center" },
                React.createElement("div", { className: "space-y-6" },
                  React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Jugando con la incertidumbre"),
                  React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" }, "El mundo no es perfecto y no siempre tenemos todos los datos. Esta sección del examen evalúa si puedes ",
                    React.createElement("strong", { className: "font-semibold text-rose-700" }, "predecir escenarios futuros"), " y sacar conclusiones de conjuntos de información masivos."
                  ),
                  React.createElement("div", { className: "bg-gradient-to-br from-white to-rose-50/30 backdrop-blur-xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] rounded-3xl p-8 relative overflow-hidden group" },
                    React.createElement("div", { className: "absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 to-red-500 rounded-l-3xl" }),
                    React.createElement("h3", { className: "font-bold text-slate-800 mb-6 text-lg" }, "Los 4 pilares Estadísticos:"),
                    React.createElement("ul", { className: "space-y-5" },
                      [
                        "Tendencia Central (Promedio, Mediana y Moda).",
                        "Análisis Combinatorio (Permutaciones y Combinaciones).",
                        "Probabilidad Simple y Compuesta (Eventos).",
                        "Medidas de Dispersión (Rangos y valores atípicos)."
                      ].map((text, i) =>
                        React.createElement("li", { key: i, className: "flex items-start gap-4 text-slate-600" },
                          React.createElement("div", { className: "mt-0.5 bg-rose-100 p-1.5 rounded-lg shrink-0 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300" },
                            React.createElement(Icon, { name: "CheckCircle", className: "w-3.5 h-3.5 text-rose-600 group-hover:text-white" })
                          ),
                          React.createElement("span", { className: "font-medium text-[15px]" }, text)
                        )
                      )
                    )
                  )
                ),
                React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-rose-50/50 rounded-[2.5rem] p-10 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" },
                  React.createElement("div", { className: "relative w-full h-80 flex items-center justify-center", style: { perspective: '1200px' } },
                    React.createElement("div", {
                      className: "relative w-56 h-56 transition-transform duration-1000 ease-out cursor-default",
                      style: { transform: 'rotateX(55deg) rotateZ(-20deg)', transformStyle: 'preserve-3d' },
                      onMouseEnter: (e) => e.currentTarget.style.transform = 'rotateX(45deg) rotateZ(-10deg) scale(1.05)',
                      onMouseLeave: (e) => e.currentTarget.style.transform = 'rotateX(55deg) rotateZ(-20deg) scale(1)'
                    },
                      React.createElement("div", { className: "absolute inset-0 bg-white/80 backdrop-blur-md border border-rose-200 rounded-[2rem] shadow-[0_30px_50px_rgba(244,63,94,0.15)] flex flex-col items-center justify-center overflow-hidden", style: { transform: 'translateZ(-1px)' } },
                        React.createElement("div", { className: "flex items-end gap-2", style: { transform: 'translateZ(15px)' } },
                          React.createElement("div", { className: "w-5 h-10 bg-rose-300 rounded-t-sm" }),
                          React.createElement("div", { className: "w-5 h-20 bg-rose-400 rounded-t-sm" }),
                          React.createElement("div", { className: "w-5 h-28 bg-rose-500 rounded-t-sm" }),
                          React.createElement("div", { className: "w-5 h-16 bg-rose-400 rounded-t-sm" })
                        )
                      ),
                      React.createElement("div", { className: "absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-slate-100 shadow-[0_10px_20px_rgba(0,0,0,0.1)]", style: { background: 'conic-gradient(#f43f5e 0% 60%, #fb923c 60% 100%)', transform: 'translateZ(30px)' } }),
                      React.createElement("div", { className: "absolute -top-6 -left-6 w-14 h-14 bg-white rounded-2xl shadow-lg border border-rose-100 flex items-center justify-center animate-bounce duration-[3000ms]", style: { transform: 'translateZ(50px)' } },
                        React.createElement(Icon, { name: "Dices", className: "text-rose-600 text-3xl" })
                      )
                    )
                  ),
                  React.createElement("p", { className: "text-[15px] text-slate-500 font-medium italic mt-6 text-center max-w-sm" }, "\"En Dios confiamos, todos los demás deben traer datos.\""),
                  React.createElement("button", {
                    onClick: () => setActiveTab('teoria'),
                    className: "mt-8 bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3"
                  }, "Ver Formularios Visuales ", React.createElement(Icon, { name: "ArrowRight", className: "w-5 h-5" }))
                )
              )
            ),
            activeTab === 'teoria' && React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16" },
              React.createElement("section", null,
                React.createElement("div", { className: "flex items-center gap-4 mb-8" },
                  React.createElement("div", { className: "p-3 bg-rose-100 rounded-2xl" },
                    React.createElement(Icon, { name: "Sigma", className: "w-6 h-6 text-rose-600" })
                  ),
                  React.createElement("div", null,
                    React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "1. Medidas de Tendencia Central"),
                    React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Media, Mediana y Moda para resumir datos")
                  )
                ),
                React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" },
                  React.createElement("div", { className: "absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none" },
                    React.createElement(Icon, { name: "Calculator", className: "w-32 h-32 text-slate-900" })
                  ),
                  React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "space-y-6" },
                      React.createElement("div", { className: "bg-rose-900 text-white font-mono text-2xl p-6 rounded-2xl text-center shadow-lg border border-rose-700/50" }, "Media = \u2211x / n"),
                      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" },
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-rose-600 shrink-0" }, "Media (\u03BC):"), "El promedio de los datos. Se suman todos los valores y se divide por la cantidad total de datos."
                        ),
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-rose-600 shrink-0" }, "Mediana (Me):"), "El valor del centro cuando los datos están ordenados de menor a mayor. Si la cantidad de datos es par, se promedian los dos centrales."
                        ),
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-rose-600 shrink-0" }, "Moda (Mo):"), "El valor o categoría que se repite con mayor frecuencia en el conjunto."
                        )
                      )
                    ),
                    React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" },
                      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" },
                        React.createElement("rect", { x: "10", y: "55", width: "15", height: "20", fill: "#fca5a5" }),
                        React.createElement("rect", { x: "35", y: "35", width: "15", height: "40", fill: "#f87171" }),
                        React.createElement("rect", { x: "60", y: "15", width: "15", height: "60", fill: "#f43f5e" }),
                        React.createElement("text", { x: "67.5", y: "10", fontSize: "7", fill: "#e11d48", textAnchor: "middle", fontWeight: "bold" }, "Moda"),
                        React.createElement("line", { x1: "5", y1: "45", x2: "95", y2: "45", stroke: "#e11d48", strokeWidth: "1.5", strokeDasharray: "4 2" }),
                        React.createElement("text", { x: "85", y: "42", fontSize: "7", fill: "#be123c", fontWeight: "bold" }, "Media")
                      )
                    )
                  )
                ),
                renderCasos(ejemplosEstrategia1, 'rose')
              ),
              React.createElement("section", null,
                React.createElement("div", { className: "flex items-center gap-4 mb-8" },
                  React.createElement("div", { className: "p-3 bg-orange-100 rounded-2xl" },
                    React.createElement(Icon, { name: "List", className: "w-6 h-6 text-orange-600" })
                  ),
                  React.createElement("div", null,
                    React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "2. Técnicas de Conteo"),
                    React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Permutaciones y combinaciones para contar arreglos")
                  )
                ),
                React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" },
                  React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "space-y-6" },
                      React.createElement("div", { className: "bg-orange-950 text-white font-mono text-xl p-6 rounded-2xl text-center shadow-lg border border-orange-700/50" }, "P = n! / (n-r)!  |  C = n! / [r!(n-r)!]"),
                      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" },
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-orange-600 shrink-0" }, "Permutación (SÍ importa el orden):"), "Usada cuando la posición, puesto o rol de cada elemento hace una diferencia (ej: contraseñas, podios)."
                        ),
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-orange-600 shrink-0" }, "Combinación (NO importa el orden):"), "Usada cuando agrupamos elementos y el orden en que se eligen no cambia el grupo (ej: equipos de trabajo, ensaladas)."
                        )
                      )
                    ),
                    React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" },
                      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" },
                        React.createElement("circle", { cx: "30", cy: "40", r: "12", fill: "#fed7aa", stroke: "#ea580c", strokeWidth: "2" }),
                        React.createElement("text", { x: "30", y: "43", fontSize: "7", fill: "#ea580c", textAnchor: "middle", fontWeight: "bold" }, "AB"),
                        React.createElement("line", { x1: "42", y1: "40", x2: "58", y2: "40", stroke: "#94a3b8", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                        React.createElement("circle", { cx: "70", cy: "28", r: "10", fill: "#ffedd5", stroke: "#ea580c", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "70", y: "30", fontSize: "6", fill: "#ea580c", textAnchor: "middle" }, "AB"),
                        React.createElement("circle", { cx: "70", cy: "52", r: "10", fill: "#ffedd5", stroke: "#ea580c", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "70", y: "54", fontSize: "6", fill: "#ea580c", textAnchor: "middle" }, "BA"),
                        React.createElement("text", { x: "30", y: "65", fontSize: "6", fill: "#ea580c", textAnchor: "middle", fontWeight: "bold" }, "Combinación"),
                        React.createElement("text", { x: "70", y: "72", fontSize: "6", fill: "#ea580c", textAnchor: "middle", fontWeight: "bold" }, "Permutación")
                      )
                    )
                  )
                ),
                renderCasos(ejemplosEstrategia2, 'orange')
              ),
              React.createElement("section", null,
                React.createElement("div", { className: "flex items-center gap-4 mb-8" },
                  React.createElement("div", { className: "p-3 bg-red-100 rounded-2xl" },
                    React.createElement(Icon, { name: "Dices", className: "w-6 h-6 text-red-600" })
                  ),
                  React.createElement("div", null,
                    React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "3. Probabilidad"),
                    React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Leyes de probabilidad simple, compuesta e independiente")
                  )
                ),
                React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" },
                  React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "space-y-6" },
                      React.createElement("div", { className: "bg-red-950 text-white font-mono text-xl p-6 rounded-2xl text-center shadow-lg border border-red-700/50" }, "P(A) = Favorables / Totales"),
                      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" },
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-red-600 shrink-0" }, "Regla de Laplace:"), "La probabilidad de un evento es el número de resultados favorables dividido por el número total de resultados posibles."
                        ),
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-red-600 shrink-0" }, "Regla del Producto (Y):"), "Para eventos independientes que ocurren juntos, multiplicamos sus probabilidades: P(A y B) = P(A) \xD7 P(B)."
                        )
                      )
                    ),
                    React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" },
                      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" },
                        React.createElement("circle", { cx: "35", cy: "40", r: "15", fill: "#fecaca", stroke: "#dc2626", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "65", cy: "40", r: "15", fill: "#fedaca", stroke: "#ea580c", strokeWidth: "1.5", opacity: "0.8" }),
                        React.createElement("text", { x: "25", y: "42", fontSize: "6", fill: "#dc2626" }, "A"),
                        React.createElement("text", { x: "75", y: "42", fontSize: "6", fill: "#ea580c" }, "B"),
                        React.createElement("text", { x: "50", y: "42", fontSize: "5", fill: "#b91c1c", textAnchor: "middle", fontWeight: "bold" }, "A \u2229 B")
                      )
                    )
                  )
                ),
                renderCasos(ejemplosEstrategia3, 'red')
              ),
              React.createElement("section", null,
                React.createElement("div", { className: "flex items-center gap-4 mb-8" },
                  React.createElement("div", { className: "p-3 bg-pink-100 rounded-2xl" },
                    React.createElement(Icon, { name: "ScatterChart", className: "w-6 h-6 text-pink-600" })
                  ),
                  React.createElement("div", null,
                    React.createElement("h3", { className: "text-2xl font-black text-slate-800" }, "4. Medidas de Dispersión"),
                    React.createElement("p", { className: "text-slate-500 font-medium text-sm mt-1" }, "Rangos y desviaciones para entender la homogeneidad de los datos")
                  )
                ),
                React.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-8 mb-8 shadow-sm relative overflow-hidden" },
                  React.createElement("div", { className: "grid md:grid-cols-2 gap-12 items-center" },
                    React.createElement("div", { className: "space-y-6" },
                      React.createElement("div", { className: "bg-pink-950 text-white font-mono text-xl p-6 rounded-2xl text-center shadow-lg border border-pink-700/50" }, "Rango = Valor Máximo - Valor Mínimo"),
                      React.createElement("div", { className: "space-y-4 text-sm leading-relaxed" },
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-pink-600 shrink-0" }, "El Rango:"), "Indica la extensión total de la dispersión de los datos. A menor rango, los datos tienden a ser más homogéneos."
                        ),
                        React.createElement("p", { className: "flex gap-3 text-slate-600" },
                          React.createElement("strong", { className: "text-pink-600 shrink-0" }, "Valores Atípicos:"), "Datos extremadamente raros o lejanos del promedio que pueden sesgar fuertemente la media, pero no la mediana."
                        )
                      )
                    ),
                    React.createElement("div", { className: "flex justify-center bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-inner" },
                      React.createElement("svg", { className: "w-56 h-40 overflow-visible", viewBox: "0 0 100 80" },
                        React.createElement("line", { x1: "10", y1: "50", x2: "90", y2: "50", stroke: "#cbd5e1", strokeWidth: "2" }),
                        React.createElement("circle", { cx: "20", cy: "50", r: "3", fill: "#db2777" }),
                        React.createElement("circle", { cx: "25", cy: "50", r: "3", fill: "#db2777" }),
                        React.createElement("circle", { cx: "30", cy: "50", r: "3", fill: "#db2777" }),
                        React.createElement("circle", { cx: "85", cy: "50", r: "3", fill: "#f43f5e", className: "animate-pulse" }),
                        React.createElement("text", { x: "85", y: "42", fontSize: "5", fill: "#be123c", textAnchor: "middle", fontWeight: "bold" }, "Atípico")
                      )
                    )
                  )
                ),
                renderCasos(ejemplosEstrategia4, 'pink')
              )
            ),
            activeTab === 'practica' && React.createElement("div", { className: "max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700" },
              !showResults ? React.createElement("div", { className: "bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-slate-200/80 p-8 md:p-12 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "mb-8 flex justify-between items-end" },
                  React.createElement("div", null,
                    React.createElement("p", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3 py-1.5 bg-slate-100 rounded-full inline-block" }, "Desafío: ",
                      React.createElement("span", { className: "text-rose-500" }, questions[currentQuestion].type)
                    ),
                    React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
                  ),
                  React.createElement("span", { className: "text-slate-400 font-bold text-xs uppercase" }, "Simulación ", currentQuestion + 1, "/", questions.length)
                ),
                React.createElement("div", { className: "w-full bg-slate-100 h-2 rounded-full mb-10 overflow-hidden" },
                  React.createElement("div", {
                    className: "bg-gradient-to-r from-rose-400 to-rose-600 h-full transition-all duration-500 ease-out",
                    style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` }
                  })
                ),
                React.createElement("h3", { className: "text-lg font-medium text-slate-700 mb-6 leading-relaxed" }, questions[currentQuestion].question),
                questions[currentQuestion].visual && React.createElement("div", { className: "w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8" }, questions[currentQuestion].visual),
                React.createElement("div", { className: "grid gap-3 mb-10" },
                  questions[currentQuestion].options.map((option, index) =>
                    React.createElement("button", {
                      key: index,
                      onClick: () => handleAnswer(index),
                      disabled: hasAnswered,
                      className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 font-semibold text-sm ${
                        hasAnswered ?
                          index === questions[currentQuestion].correct ?
                            'bg-emerald-50/80 border-emerald-400 text-emerald-900 shadow-[0_4px_20px_rgba(16,185,129,0.1)]' :
                            index === selectedAnswer ?
                              'bg-rose-50/80 border-rose-300 text-rose-900 shadow-[0_4px_20px_rgba(244,63,94,0.1)]' :
                              'bg-white/40 border-slate-100 text-slate-400 opacity-50 scale-95' :
                          'bg-white border-slate-200/80 hover:border-rose-400 hover:bg-rose-50/10 hover:shadow-[0_8px_25px_-10px_rgba(244,63,94,0.15)] hover:-translate-y-0.5 text-slate-600'
                      }`
                    },
                      React.createElement("div", { className: "flex items-center gap-3" },
                        React.createElement("div", {
                          className: `w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] ${
                            hasAnswered ?
                              index === questions[currentQuestion].correct ?
                                'border-emerald-500 bg-emerald-500 text-white' :
                                index === selectedAnswer ?
                                  'border-rose-400 bg-rose-400 text-white' :
                                  'border-slate-200' :
                              'border-slate-200'
                          }`
                        }, String.fromCharCode(65 + index)),
                        React.createElement("span", null, option)
                      )
                    )
                  )
                ),
                hasAnswered && React.createElement("div", {
                  className: `p-6 rounded-2xl border mb-8 flex gap-4 animate-in zoom-in-95 duration-300 ${
                    selectedAnswer === questions[currentQuestion].correct ?
                      'bg-emerald-50/80 border-emerald-100 text-emerald-800 backdrop-blur-sm' :
                      'bg-rose-50/80 border-rose-100 text-rose-800 backdrop-blur-sm'
                  }`
                },
                  React.createElement(Icon, { name: selectedAnswer === questions[currentQuestion].correct ? 'CheckCircle' : 'Info', className: "text-xl shrink-0" }),
                  React.createElement("p", { className: "font-semibold text-sm leading-relaxed" }, questions[currentQuestion].feedback)
                ),
                React.createElement("div", { className: "flex justify-end" },
                  React.createElement("button", {
                    onClick: nextQuestion,
                    disabled: !hasAnswered,
                    className: `px-10 py-4.5 rounded-2xl font-bold flex items-center gap-3 transition-all duration-300 text-sm ${
                      hasAnswered ?
                        'bg-slate-900 hover:bg-slate-800 text-white shadow-[0_10px_25px_-5px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:scale-95' :
                        'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200/60'
                    }`
                  },
                    currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Continuar',
                    React.createElement(Icon, { name: "ArrowRight" })
                  )
                )
              ) : React.createElement("div", { className: "bg-white/80 backdrop-blur-md rounded-[2.5rem] border border-slate-200/80 p-10 md:p-16 text-center shadow-xl relative overflow-hidden" },
                React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-red-500" }),
                React.createElement("div", { className: "w-28 h-28 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-lg animate-bounce duration-[3000ms]" },
                  React.createElement(Icon, { name: "Award", className: "text-rose-600 text-5xl" })
                ),
                React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title),
                React.createElement("p", { className: "text-sm text-slate-500 mb-10 font-light max-w-xs mx-auto leading-relaxed" }, resultData.desc),
                React.createElement("div", { className: "bg-gradient-to-br from-slate-50 to-rose-50/30 rounded-3xl p-8 mb-10 max-w-xs mx-auto border border-slate-100 shadow-inner" },
                  React.createElement("div", { className: "text-6xl font-black text-rose-600 mb-2" }, score, " ",
                    React.createElement("span", { className: "text-xl text-slate-300" }, "/ ", questions.length)
                  ),
                  React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4" }, "Puntaje Estadístico")
                ),
                React.createElement("button", {
                  onClick: resetQuiz,
                  className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto text-sm"
                },
                  React.createElement(Icon, { name: "RefreshCw" }),
                  "Simular de nuevo"
                )
              )
            )
          )
        )
      )
    );
  }

  // Registro para el sistema de ruteo
  window.renderMathModule8 = function (containerId) {
    console.log("Iniciando render de mathModule8 en:", containerId);
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) {
      console.warn("mathModule8.js: No se encontró ReactDOM o el contenedor.");
      return;
    }
    try {
      if (!window._reactRoots) window._reactRoots = {};
      if (!window._reactRoots[containerId]) {
        window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
      }
      window._reactRoots[containerId].render(React.createElement(MathModule8));
      console.log("mathModule8.js: Renderizado exitoso.");
    } catch (e) {
      console.error("mathModule8.js Error:", e);
      container.innerHTML = `<div class="p-10 text-center" style="color: #ef4444"><h2 class="text-xl font-bold">Error: ${e.message}</h2></div>`;
    }
  };
})();