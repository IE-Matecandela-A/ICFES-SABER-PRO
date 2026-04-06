// Simulacro 07 - Matemáticas (Basado en el archivo matematicas 7.json)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_07_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Un agricultor quiere comprar un terreno que tiene forma de trapecio rectángulo, como se muestra en el plano. Para calcular el precio, necesita saber el área total. Si el metro cuadrado cuesta $10.000, ¿cuánto pagará por el terreno?",
    "opciones": [
      { "id": "A", "texto": "$3.000.000" },
      { "id": "B", "texto": "$3.500.000" },
      { "id": "C", "texto": "$4.000.000" },
      { "id": "D", "texto": "$5.000.000" }
    ],
    "test_metadata": {
        "original_id": "icfes-2025-simulacro-geo-01"
    },
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grassPattern" patternUnits="userSpaceOnUse" width="10" height="10">
          <path d="M 2,10 L 5,2 L 8,10" fill="none" stroke="#10b981" stroke-width="0.5" opacity="0.3"/>
        </pattern>
        <linearGradient id="plotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#059669;stop-opacity:0.1" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#f8fafc" rx="12"/>
      <path d="M 60,160 L 340,160 L 260,60 L 60,60 Z" fill="url(#plotGrad)" stroke="#059669" stroke-width="2" />
      <rect x="60" y="60" width="280" height="100" fill="url(#grassPattern)" style="pointer-events: none;"/>
      
      <!-- Dimensions -->
      <line x1="60" y1="175" x2="340" y2="175" stroke="#64748b" stroke-width="1.5" />
      <text x="200" y="195" text-anchor="middle" font-size="13" font-family="Inter" font-weight="bold" fill="#334155">Base Mayor = 40m</text>
      
      <line x1="60" y1="45" x2="260" y2="45" stroke="#64748b" stroke-width="1.5" />
      <text x="160" y="38" text-anchor="middle" font-size="13" font-family="Inter" font-weight="bold" fill="#334155">Base Menor = 30m</text>
      
      <line x1="45" y1="60" x2="45" y2="160" stroke="#64748b" stroke-width="1.5" />
      <text x="35" y="110" text-anchor="middle" font-size="13" font-family="Inter" font-weight="bold" transform="rotate(-90, 35, 110)" fill="#334155">Altura = 10m</text>
      
      <!-- Decorations -->
      <text x="180" y="110" font-size="40" opacity="0.1">🏡</text>
      <rect x="60" y="150" width="10" height="10" fill="none" stroke="#059669" stroke-width="1"/>
      <rect x="60" y="60" width="10" height="10" fill="none" stroke="#059669" stroke-width="1"/>
    </svg>`,
    "justificacion": "Para hallar el área de un trapecio se usa la fórmula A = (B + b) * h / 2. Reemplazando: A = (40 + 30) * 10 / 2 = 70 * 10 / 2 = 700 / 2 = 350 m². Si cada metro cuadrado cuesta $10.000, el costo total es 350 * 10.000 = $3.500.000. La opción B es la correcta."
  },
  {
    "id": "mat_sim_07_p2",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "En la clase de dibujo técnico, se presenta la vista superior, frontal y lateral de un sólido geométrico compuesto por cubos. Según las vistas proporcionadas, ¿cuál es la cantidad mínima de cubos necesarios para armar este sólido?",
    "opciones": [
      { "id": "A", "texto": "4 cubos" },
      { "id": "B", "texto": "5 cubos" },
      { "id": "C", "texto": "6 cubos" },
      { "id": "D", "texto": "8 cubos" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect width="400" height="160" fill="#f8fafc" rx="12"/>
      <g transform="translate(40, 30)">
        <text x="35" y="10" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b" font-family="Inter">SUPERIOR</text>
        <path d="M 10,30 h 40 v 20 h -20 v 20 h -20 Z" fill="#6366f122" stroke="#6366f1" stroke-width="2"/>
        <text x="20" y="45" font-size="10" fill="#6366f1">1</text><text x="40" y="45" font-size="10" fill="#6366f1">2</text><text x="20" y="65" font-size="10" fill="#6366f1">3</text>
      </g>
      <g transform="translate(150, 30)">
        <text x="35" y="10" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b" font-family="Inter">FRONTAL</text>
        <rect x="10" y="30" width="40" height="20" fill="#6366f122" stroke="#6366f1" stroke-width="2"/>
        <rect x="10" y="50" width="20" height="20" fill="#6366f122" stroke="#6366f1" stroke-width="2"/>
      </g>
      <g transform="translate(260, 30)">
        <text x="35" y="10" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b" font-family="Inter">LATERAL</text>
        <rect x="10" y="30" width="20" height="40" fill="#6366f122" stroke="#6366f1" stroke-width="2"/>
        <rect x="30" y="50" width="20" height="20" fill="#6366f122" stroke="#6366f1" stroke-width="2"/>
      </g>
    </svg>`,
    "justificacion": "La vista superior en forma de 'L' indica que la base ocupa 3 posiciones. La vista frontal muestra que una de esas columnas tiene una altura de 2 cubos, y la lateral confirma que el escalón extra está en una sola posición. Por lo tanto, hay 3 cubos en el primer nivel y 2 cubos adicionales apilados en partes específicas, sumando un mínimo de 5 cubos."
  },
  {
    "id": "mat_sim_07_p3",
    "area": "Matemáticas",
    "competencia": "Argumentación",
    "componente": "Geométrico - Métrico",
    "enunciado": "Un estudiante afirma que si se duplica la medida del radio de una circunferencia, su área también se duplica. ¿Es correcta la afirmación del estudiante?",
    "opciones": [
      { "id": "A", "texto": "Sí, porque el área y el radio son directamente proporcionales en una relación lineal." },
      { "id": "B", "texto": "No, porque al duplicar el radio, el área se cuadruplica debido a que el radio está elevado al cuadrado en la fórmula." },
      { "id": "C", "texto": "Sí, porque al multiplicar por 2 la constante pi (π), el resultado final es el doble." },
      { "id": "D", "texto": "No, porque el área se mantiene constante; lo único que cambia es el perímetro." }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#f8fafc" rx="12"/>
      <g transform="translate(100, 100)">
        <circle r="40" fill="#6366f11a" stroke="#6366f1" stroke-width="2" />
        <line x1="0" y1="0" x2="40" y2="0" stroke="#6366f1" stroke-width="2" />
        <text x="20" y="-5" text-anchor="middle" font-size="12" fill="#6366f1" font-weight="bold">r</text>
        <text x="0" y="60" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">Círculo 1</text>
      </g>
      <g transform="translate(280, 100)">
        <circle r="80" fill="#10b9811a" stroke="#10b981" stroke-width="2" />
        <line x1="0" y1="0" x2="80" y2="0" stroke="#10b981" stroke-width="2" />
        <text x="40" y="-5" text-anchor="middle" font-size="12" fill="#10b981" font-weight="bold">2r</text>
        <text x="0" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">Círculo 2 (Radio Duplicado)</text>
      </g>
    </svg>`,
    "justificacion": "La fórmula del área de un círculo es A = π * r². Si el nuevo radio es (2r), el nuevo área será A' = π * (2r)² = π * 4r² = 4(π * r²). Esto demuestra algebraicamente que el área no se duplica, sino que se hace cuatro veces mayor (se cuadruplica)."
  },
  {
    "id": "mat_sim_07_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Se va a construir una rampa para sillas de ruedas que debe alcanzar una altura de 1,5 metros. Las normas exigen que la rampa tenga un ángulo de inclinación máximo que permita una longitud horizontal (base) de 2 metros. Usando el teorema de Pitágoras, ¿cuál será la longitud de la superficie inclinada de la rampa?",
    "opciones": [
      { "id": "A", "texto": "2,0 metros" },
      { "id": "B", "texto": "2,5 metros" },
      { "id": "C", "texto": "3,5 metros" },
      { "id": "D", "texto": "6,25 metros" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="rampGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#cbd5e1" />
          <stop offset="100%" style="stop-color:#94a3b8" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#f1f5f9" rx="12"/>
      <!-- Surface -->
      <path d="M 50,180 L 350,180 L 50,40 Z" fill="url(#rampGrad)" stroke="#475569" stroke-width="2" />
      
      <!-- Right angle -->
      <path d="M 50,170 h 10 v 10" fill="none" stroke="#475569" stroke-width="1"/>
      
      <!-- Measurements -->
      <g fill="#334155" font-family="Inter" font-weight="bold" font-size="13">
        <text x="200" y="200" text-anchor="middle">Base = 2,0m</text>
        <text x="30" y="110" text-anchor="middle" transform="rotate(-90, 30, 110)">Altura = 1,5m</text>
        <text x="210" y="100" text-anchor="middle" transform="rotate(-25, 210, 100)" fill="#6366f1">Hipotenusa / Superficie (?)</text>
      </g>
      
      <!-- Icon decoration -->
      <circle cx="280" cy="180" r="10" fill="#1e293b" />
      <path d="M 270,180 q 10,-20 20,0" fill="none" stroke="#1e293b" stroke-width="2"/>
      <text x="320" y="170" font-size="24">♿</text>
    </svg>`,
    "justificacion": "La rampa forma un triángulo rectángulo donde la superficie inclinada es la hipotenusa (c). Aplicando el teorema de Pitágoras: c² = a² + b². c² = (1,5)² + (2,0)² = 2,25 + 4,0 = 6,25. Para hallar 'c', sacamos la raíz cuadrada de 6,25, que es exactamente 2,5 metros."
  },
  {
    "id": "mat_sim_07_p5",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "La gráfica muestra un polígono en un plano cartesiano. Si a este polígono se le aplica una reflexión (simetría axial) respecto al eje Y, ¿en qué cuadrante quedará ubicada la mayor parte de la nueva figura?",
    "opciones": [
      { "id": "A", "texto": "Cuadrante I" },
      { "id": "B", "texto": "Cuadrante II" },
      { "id": "C", "texto": "Cuadrante III" },
      { "id": "D", "texto": "Cuadrante IV" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="400" height="240" fill="#f8fafc" rx="12"/>
      <rect width="400" height="240" fill="url(#smallGrid)" />
      
      <!-- Axes -->
      <line x1="20" y1="120" x2="380" y2="120" stroke="#94a3b8" stroke-width="2" />
      <line x1="200" y1="20" x2="200" y2="220" stroke="#94a3b8" stroke-width="2" />
      <text x="385" y="125" font-size="12" font-weight="bold" fill="#64748b">X</text>
      <text x="200" y="15" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Y</text>
      
      <!-- Polygons -->
      <path d="M 240,40 L 300,40 L 300,100 Z" fill="#6366f133" stroke="#6366f1" stroke-width="2" />
      <text x="270" y="30" font-size="11" font-weight="bold" fill="#6366f1" text-anchor="middle">Original (Cuad. I)</text>
      
      <path d="M 160,40 L 100,40 L 100,100 Z" fill="#10b98133" stroke="#10b981" stroke-width="2" stroke-dasharray="4,2" />
      <text x="130" y="30" font-size="11" font-weight="bold" fill="#10b981" text-anchor="middle">Reflejo en Eje Y (?)</text>
      
      <text x="300" y="200" opacity="0.2" font-size="60" text-anchor="middle">🪞</text>
    </svg>`,
    "justificacion": "El polígono original está en el Cuadrante I (coordenadas x e y positivas). Una reflexión sobre el eje Y actúa como un espejo vertical, cambiando el signo de las coordenadas X (se vuelven negativas) pero manteniendo las Y positivas. El cuadrante con (-x, +y) es el Cuadrante II."
  },
  {
    "id": "mat_sim_07_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Un arquitecto está diseñando un tanque de reserva de agua cilíndrico. El tanque debe tener un radio de 2 metros y una altura de 5 metros. Sabiendo que el volumen de un cilindro es V = π * r² * h, ¿cuál será la capacidad volumétrica del tanque en metros cúbicos? (Tome π como 3,14 para el cálculo final).",
    "opciones": [
      { "id": "A", "texto": "31,4 m³" },
      { "id": "B", "texto": "62,8 m³" },
      { "id": "C", "texto": "125,6 m³" },
      { "id": "D", "texto": "314,0 m³" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tankSide" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#94a3b8" />
          <stop offset="50%" style="stop-color:#f1f5f9" />
          <stop offset="100%" style="stop-color:#94a3b8" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#f8fafc" rx="12"/>
      
      <ellipse cx="200" cy="50" rx="80" ry="25" fill="#f1f5f9" stroke="#475569" stroke-width="2" />
      <path d="M 120,50 v 140 a 80 25 0 0 0 160 0 v -140" fill="url(#tankSide)" stroke="#475569" stroke-width="2" />
      <path d="M 120,190 a 80 25 0 0 0 160 0" fill="none" stroke="#475569" stroke-width="2" />
      <path d="M 120,50 a 80 25 0 0 0 160 0" fill="none" stroke="#475569" stroke-width="2" />
      
      <!-- Labeling -->
      <line x1="200" y1="50" x2="280" y2="50" stroke="#10b981" stroke-width="2.5" />
      <text x="240" y="42" text-anchor="middle" font-size="13" font-family="Inter" font-weight="bold" fill="#10b981">Radio = 2m</text>
      
      <line x1="300" y1="50" x2="300" y2="190" stroke="#6366f1" stroke-width="2" />
      <path d="M 295,50 h 10 M 295,190 h 10" stroke="#6366f1" stroke-width="2" />
      <text x="310" y="125" text-anchor="start" font-size="13" font-family="Inter" font-weight="bold" fill="#6366f1">Altura = 5m</text>
      
      <text x="200" y="140" font-size="40" opacity="0.1" text-anchor="middle">💧</text>
    </svg>`,
    "justificacion": "Aplicando la fórmula dada: V = π * r² * h. V = 3,14 * (2)² * 5. Resolvemos el cuadrado: 3,14 * 4 * 5. Multiplicamos 4 * 5 = 20. Finalmente, 3,14 * 20 = 62,8 metros cúbicos."
  },
  {
    "id": "mat_sim_07_p7",
    "area": "Matemáticas",
    "competencia": "Argumentación",
    "componente": "Geométrico - Métrico",
    "enunciado": "En la figura se muestran dos triángulos, ABC y DEF. Se sabe que el ángulo A es igual al ángulo D, y el ángulo B es igual al ángulo E. Pedro afirma que, con esta información, es seguro que ambos triángulos son congruentes (exactamente iguales en tamaño y forma). ¿Tiene razón Pedro?",
    "opciones": [
      { "id": "A", "texto": "Sí, porque si dos triángulos tienen dos ángulos iguales, el tercer ángulo también lo es, asegurando la congruencia." },
      { "id": "B", "texto": "No, porque tener los ángulos iguales garantiza que son semejantes (tienen la misma forma), pero pueden tener tamaños diferentes." },
      { "id": "C", "texto": "Sí, por el postulado LAL (Lado-Ángulo-Lado), que se cumple en este caso." },
      { "id": "D", "texto": "No, porque para ser congruentes necesitan obligatoriamente ser triángulos rectángulos." }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="180" fill="#f8fafc" rx="12"/>
      <g transform="translate(60, 40)">
        <path d="M 0,100 L 100,100 L 60,10 Z" fill="#6366f111" stroke="#6366f1" stroke-width="2" />
        <path d="M 20,100 a 20,20 0 0 0 5,-10" fill="none" stroke="#6366f1" stroke-width="2"/>
        <path d="M 90,100 a 10,10 0 0 1 -5,-8" fill="none" stroke="#6366f1" stroke-width="2"/>
        <text x="50" y="115" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">Δ ABC</text>
      </g>
      <g transform="translate(220, 30)">
        <path d="M 0,110 L 140,110 L 84,11 Z" fill="#10b98111" stroke="#10b981" stroke-width="2" />
        <path d="M 25,110 a 25,25 0 0 0 6,-12" fill="none" stroke="#10b981" stroke-width="2"/>
        <path d="M 130,110 a 15,15 0 0 1 -8,-11" fill="none" stroke="#10b981" stroke-width="2"/>
        <text x="70" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">Δ DEF</text>
      </g>
      <text x="200" y="90" font-size="24" fill="#cbd5e1">≈</text>
    </svg>`,
    "justificacion": "El postulado AA (Ángulo-Ángulo) establece que si dos ángulos de un triángulo son iguales a dos ángulos de otro, los triángulos son semejantes, no necesariamente congruentes. Es decir, tienen la misma forma, pero uno puede ser una ampliación del otro. Para demostrar congruencia (mismo tamaño), se requiere conocer la medida de al menos un lado correspondiente (ALA, LAL, LLL)."
  },
  {
    "id": "mat_sim_07_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Para medir la altura de un edificio, un estudiante mide la sombra que este proyecta en el suelo, la cual es de 15 metros. A la misma hora, un poste vertical de 3 metros de altura proyecta una sombra de 1,5 metros. Asumiendo que los rayos del sol son paralelos, ¿cuál es la altura del edificio?",
    "opciones": [
      { "id": "A", "texto": "15 metros" },
      { "id": "B", "texto": "20 metros" },
      { "id": "C", "texto": "30 metros" },
      { "id": "D", "texto": "45 metros" }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="brickPattern" width="10" height="5" patternUnits="userSpaceOnUse">
          <rect width="10" height="5" fill="#94a3b8" />
          <path d="M 0 0 L 10 0 M 5 0 L 5 5" fill="none" stroke="#f1f5f9" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="400" height="240" fill="#f8fafc" rx="12"/>
      
      <!-- Ground -->
      <line x1="20" y1="200" x2="380" y2="200" stroke="#475569" stroke-width="2" />
      
      <!-- Building -->
      <rect x="40" y="40" width="60" height="160" fill="url(#brickPattern)" stroke="#475569" />
      <path d="M 100,200 L 260,200 L 100,40 Z" fill="#6366f111" stroke="#6366f1" stroke-width="1" stroke-dasharray="4" />
      <line x1="100" y1="200" x2="260" y2="200" stroke="#6366f1" stroke-width="4" />
      <text x="180" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">Sombra Edificio = 15m</text>
      
      <!-- Poste -->
      <rect x="300" y="160" width="5" height="40" fill="#1e293b" />
      <path d="M 305,200 L 335,200 L 305,160 Z" fill="#10b98122" stroke="#10b981" stroke-width="1" stroke-dasharray="2" />
      <line x1="305" y1="200" x2="335" y2="200" stroke="#10b981" stroke-width="4" />
      <text x="320" y="215" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">Sombra = 1,5m</text>
      <text x="290" y="180" text-anchor="end" font-size="10" font-weight="bold" fill="#475569">Poste 3m</text>
      
      <!-- Sun -->
      <circle cx="360" cy="40" r="15" fill="#fbcfe8" opacity="0.3" />
      <circle cx="360" cy="40" r="10" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" />
      <text x="360" y="44" text-anchor="middle" font-size="12">☀️</text>
    </svg>`,
    "justificacion": "Este problema se resuelve usando semejanza de triángulos (Teorema de Tales). Se establece una proporción entre alturas y sombras: Altura_Edificio / Sombra_Edificio = Altura_Poste / Sombra_Poste. Sea x la altura del edificio: x / 15 = 3 / 1,5. Despejando x = (3 * 15) / 1,5 = 45 / 1,5 = 30 metros."
  },
  {
    "id": "mat_sim_07_p9",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "La gráfica muestra un terreno dividido en dos parcelas. La línea que las divide pasa por los puntos coordenados A(0, 4) y B(4, 0). ¿Cuál de las siguientes ecuaciones describe correctamente la recta que divide el terreno?",
    "opciones": [
      { "id": "A", "texto": "y = x + 4" },
      { "id": "B", "texto": "y = -x + 4" },
      { "id": "C", "texto": "y = 4x" },
      { "id": "D", "texto": "y = -4x + 4" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="240" fill="#f8fafc" rx="12"/>
      <line x1="50" y1="120" x2="250" y2="120" stroke="#cbd5e1" stroke-width="1" />
      <line x1="150" y1="30" x2="150" y2="210" stroke="#cbd5e1" stroke-width="1" />
      
      <circle cx="150" cy="40" r="5" fill="#ef4444" />
      <text x="160" y="45" font-size="11" font-weight="bold" fill="#ef4444">A (0, 4)</text>
      <circle cx="230" cy="120" r="5" fill="#10b981" />
      <text x="230" y="135" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">B (4, 0)</text>
      
      <line x1="100" y1="-10" x2="260" y2="150" stroke="#6366f1" stroke-width="3" />
    </svg>`,
    "justificacion": "Para hallar la ecuación de la recta (y = mx + b), primero calculamos la pendiente (m) = (y2 - y1) / (x2 - x1) = (0 - 4) / (4 - 0) = -4 / 4 = -1. El punto de corte con el eje Y (b) es 4, dado por el punto A(0, 4). Uniendo la pendiente y el punto de corte, la ecuación es y = -1x + 4, o y = -x + 4."
  },
  {
    "id": "mat_sim_07_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "En el diseño de una plaza circular, se quiere construir una fuente en el centro con un radio de 3 metros, rodeada por un camino peatonal empedrado que extiende el radio total a 5 metros. ¿Cuál es el área exacta de la corona circular (el camino empedrado) que rodea la fuente?",
    "opciones": [
      { "id": "A", "texto": "4π m²" },
      { "id": "B", "texto": "8π m²" },
      { "id": "C", "texto": "16π m²" },
      { "id": "D", "texto": "25π m²" }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="200" fill="#f8fafc" rx="12"/>
      <circle cx="100" cy="100" r="80" fill="#6366f122" stroke="#6366f1" stroke-width="3" />
      <circle cx="100" cy="100" r="48" fill="#fff" stroke="#6366f1" stroke-width="2" />
      
      <!-- R (Mayor) -->
      <line x1="100" y1="100" x2="169" y2="60" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <text x="145" y="75" font-size="12" font-weight="extrabold" fill="#334155">R = 5m</text>
      
      <!-- r (Menor) -->
      <line x1="100" y1="100" x2="100" y2="52" stroke="#10b981" stroke-width="2" />
      <text x="105" y="80" font-size="12" font-weight="extrabold" fill="#059669">r = 3m</text>
      
      <circle cx="100" cy="100" r="4" fill="#1e293b" stroke="white" stroke-width="1"/>
      <text x="100" y="185" text-anchor="middle" font-size="11" font-weight="800" fill="#64748b">DISEÑO DE FUENTE</text>
    </svg>`,
    "justificacion": "El área de una corona circular se calcula restando el área del círculo menor al área del círculo mayor: A = πR² - πr² = π(R² - r²). Sustituyendo: A = π(5² - 3²) = π(25 - 9) = 16π m²."
  },
  {
    "id": "mat_sim_07_p11",
    "area": "Matemáticas",
    "competencia": "Argumentación",
    "componente": "Geométrico - Métrico",
    "enunciado": "Se tiene un prisma rectangular sólido de dimensiones 2m x 3m x 4m. Si un operario corta el prisma exactamente por la mitad mediante un plano paralelo a su base de 2x3m, afirma que el volumen total de las dos mitades juntas será mayor que el volumen original porque ahora hay más caras expuestas. ¿Es válido su razonamiento?",
    "opciones": [
      { "id": "A", "texto": "Sí, porque al aumentar el área superficial, el volumen interior se expande proporcionalmente." },
      { "id": "B", "texto": "No, porque el corte altera la densidad del material, reduciendo su volumen real." },
      { "id": "C", "texto": "Sí, porque ahora son dos prismas independientes que suman más capacidad." },
      { "id": "D", "texto": "No, porque el volumen es la cantidad de espacio tridimensional que ocupa un cuerpo; cortarlo aumenta el área superficial (caras), pero el espacio total ocupado sigue siendo exactamente el mismo." }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#f8fafc" rx="12"/>
      <g transform="translate(40, 40)">
        <path d="M 0,0 h 80 v 100 h -80 Z" fill="#6366f111" stroke="#6366f1" stroke-width="2" />
        <path d="M 0,0 l 30,-20 h 80 l -30,20" fill="none" stroke="#6366f1" stroke-width="1.5" />
        <path d="M 80,0 l 30,-20 v 100 l -30,20" fill="none" stroke="#6366f1" stroke-width="1.5" />
        <text x="55" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Prisma Original</text>
      </g>
      <text x="175" y="100" font-size="30">➞</text>
      <g transform="translate(240, 40)">
        <path d="M 0,0 h 80 v 40 h -80 Z" fill="#10b98111" stroke="#10b981" stroke-width="2" />
        <path d="M 0,55 h 80 v 40 h -80 Z" fill="#10b98111" stroke="#10b981" stroke-width="2" />
        <text x="40" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">2 Mitades</text>
        <path d="M 30,45 h 20" stroke="#ef4444" stroke-width="2" stroke-dasharray="2" />
      </g>
    </svg>`,
    "justificacion": "El volumen representa el espacio interior de un objeto 3D. El principio de conservación volumétrica establece que dividir un sólido no crea ni destruye espacio interior, simplemente crea nuevas superficies externas (área superficial). El volumen original era 2x3x4 = 24 m³, y cada mitad será de 2x3x2 = 12 m³. Juntas siguen sumando 24 m³."
  },
  {
    "id": "mat_sim_07_p12",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "La gráfica ilustra una red plana (plantilla desdoblada) compuesta por 6 cuadrados idénticos formando una cruz. ¿Qué sólido geométrico tridimensional se forma al doblar esta plantilla por sus aristas?",
    "opciones": [
      { "id": "A", "texto": "Una pirámide de base cuadrada." },
      { "id": "B", "texto": "Un prisma triangular." },
      { "id": "C", "texto": "Un cubo (hexaedro regular)." },
      { "id": "D", "texto": "Un octaedro." }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="200" fill="#f8fafc" rx="12"/>
      <g fill="#6366f111" stroke="#6366f1" stroke-width="2">
        <rect x="100" y="20" width="40" height="40" />
        <rect x="100" y="60" width="40" height="40" />
        <rect x="60" y="60" width="40" height="40" />
        <rect x="140" y="60" width="40" height="40" />
        <rect x="100" y="100" width="40" height="40" />
        <rect x="100" y="140" width="40" height="40" />
      </g>
      <text x="120" y="190" text-anchor="middle" font-size="10" font-weight="bold" fill="#64748b">6 Caras Cuadradas</text>
    </svg>`,
    "justificacion": "La visualización espacial permite identificar que una figura plana compuesta por 6 cuadrados perfectos dispuestos en patrón de cruz (o desarrollo en red) es la plantilla clásica estándar que, al plegarse a 90 grados en cada arista de unión, cierra perfectamente para formar un cubo."
  },
  {
    "id": "mat_sim_07_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Un radar aéreo detecta objetos dentro de un radio de 50 km desde la torre de control, ubicada en el origen (0,0) del plano cartesiano. ¿Qué inecuación representa correctamente la zona de cobertura en la que un avión es detectable por el radar?",
    "opciones": [
      { "id": "A", "texto": "x² + y² ≤ 50" },
      { "id": "B", "texto": "x² + y² ≤ 2500" },
      { "id": "C", "texto": "x + y ≤ 50" },
      { "id": "D", "texto": "x² - y² ≤ 2500" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="radarRef" cx="50%" cy="50%" r="50%">
          <stop offset="0%" style="stop-color:#0f172a" />
          <stop offset="100%" style="stop-color:#1e293b" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="#0f172a" rx="12"/>
      <circle cx="200" cy="150" r="100" fill="rgba(56, 189, 248, 0.05)" stroke="#334155" stroke-width="1" />
      <circle cx="200" cy="150" r="70" fill="rgba(56, 189, 248, 0.1)" stroke="#0ea5e9" stroke-width="2" />
      <circle cx="200" cy="150" r="40" stroke="#334155" fill="none"/>
      
      <!-- Sweep line -->
      <line x1="200" y1="150" x2="270" y2="150" stroke="#0ea5e9" stroke-width="3">
        <animateTransform attributeName="transform" type="rotate" from="0 200 150" to="360 200 150" dur="4s" repeatCount="indefinite" />
      </line>
      
      <!-- Plane Icon inside -->
      <g transform="translate(160, 110)">
        <text font-size="20">✈️</text>
      </g>
      
      <!-- Scale -->
      <line x1="200" y1="150" x2="270" y2="150" stroke="#f8fafc" stroke-width="2" stroke-dasharray="2" />
      <text x="235" y="145" fill="#f8fafc" font-size="12" font-weight="bold">50 km</text>
      <text x="200" y="270" text-anchor="middle" fill="#94a3b8" font-size="12">Origen (0,0) - Torre de Control</text>
      
      <!-- X-Y Axis -->
      <line x1="200" y1="50" x2="200" y2="250" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <line x1="100" y1="150" x2="300" y2="150" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    </svg>`,
    "justificacion": "La ecuación canónica de una circunferencia con centro en el origen es x² + y² = r². Como el radio r es 50, r² es 50² = 2500. La zona de cobertura incluye la línea límite y todo el espacio interior, por lo que se utiliza una inecuación de 'menor o igual que': x² + y² ≤ 2500."
  },
  {
    "id": "mat_sim_07_p14",
    "area": "Matemáticas",
    "competencia": "Argumentación",
    "componente": "Geométrico - Métrico",
    "enunciado": "Se requiere encerrar un lote para pastoreo usando exactamente 100 metros de malla de alambre. Carlos propone hacer un corral en forma de cuadrado (25m x 25m), mientras que Luisa propone hacerlo en forma de círculo. Luisa afirma que el círculo encerrará más área de pasto. ¿Es correcta la afirmación de Luisa?",
    "opciones": [
      { "id": "A", "texto": "No, porque todas las figuras geométricas que tienen el mismo perímetro encierran exactamente la misma área." },
      { "id": "B", "texto": "Sí, porque el círculo es la figura geométrica que optimiza el espacio, logrando la mayor área posible para un perímetro dado (isoperimetría)." },
      { "id": "C", "texto": "No, porque los vértices rectos del cuadrado permiten aprovechar mejor las esquinas, dando mayor área." },
      { "id": "D", "texto": "Sí, pero solo porque el cálculo de pi (π) aumenta artificialmente el número resultante." }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="200" fill="#f8fafc" rx="12"/>
      
      <rect x="50" y="50" width="100" height="100" fill="#6366f111" stroke="#6366f1" stroke-width="2" />
      <text x="100" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#6366f1">CUADRADO</text>
      <text x="100" y="110" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#4338ca">P = 100m</text>
      <text x="100" y="165" text-anchor="middle" font-size="10" fill="#64748b">Lado = 25m</text>
      
      <line x1="200" y1="50" x2="200" y2="150" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="4" />
      
      <circle cx="280" cy="100" r="50" fill="#10b98111" stroke="#10b981" stroke-width="2" />
      <text x="280" y="45" text-anchor="middle" font-size="11" font-weight="bold" fill="#10b981">CÍRCULO</text>
      <text x="280" y="110" text-anchor="middle" font-size="12" font-weight="extrabold" fill="#047857">P = 100m</text>
      <text x="280" y="165" text-anchor="middle" font-size="10" fill="#64748b">Radio ≈ 15,9m</text>
      
      <text x="350" y="100" font-size="30" opacity="0.3">🏆</text>
    </svg>`,
    "justificacion": "El Teorema Isoperimétrico establece que, de todas las curvas cerradas simples planas con un perímetro dado (en este caso 100m), la circunferencia es la que encierra la mayor área. El cuadrado encerraría 625 m², mientras que el círculo encerraría (10000 / 4π) ≈ 795,7 m². Por tanto, Luisa tiene razón."
  },
  {
    "id": "mat_sim_07_p15",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "El mecanismo de un limpiaparabrisas trasero de un automóvil describe un sector circular. La longitud de la escobilla limpiadora es de 40 cm y en su recorrido barre un ángulo de 120°. ¿Cuánta área del vidrio logra limpiar en un solo barrido? (Tome π = 3).",
    "opciones": [
      { "id": "A", "texto": "1.600 cm²" },
      { "id": "B", "texto": "4.800 cm²" },
      { "id": "C", "texto": "1.600π cm²" },
      { "id": "D", "texto": "3.200 cm²" }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="240" fill="#f8fafc" rx="12"/>
      <path d="M 200,200 L 80,80 A 170 170 0 0 1 320,80 Z" fill="#6366f111" stroke="#6366f1" stroke-width="2" />
      <path d="M 200,200 L 285,115" stroke="#475569" stroke-width="2" stroke-dasharray="4" />
      <text x="250" y="170" transform="rotate(-45, 250, 170)" font-size="13" font-weight="bold" fill="#475569">Radio = 40cm</text>
      
      <!-- Wiper details -->
      <line x1="200" y1="200" x2="80" y2="80" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
      <text x="200" y="60" text-anchor="middle" font-size="20" font-weight="900" fill="#6366f1">120°</text>
      <text x="50" y="100" font-size="30">🚗</text>
    </svg>`,
    "justificacion": "El área de un círculo completo (360°) es A = π * r². Primero hallamos el área total teórica: 3 * (40)² = 3 * 1600 = 4.800 cm². Como el limpiaparabrisas barre 120°, esto representa la tercera parte de un círculo (360 / 120 = 3). Por lo tanto, el área barrida es 4.800 / 3 = 1.600 cm²."
  },
  {
    "id": "mat_sim_07_p16",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "Un ingeniero instala un cable tensor desde la cima de un poste vertical hasta un anclaje en el suelo. En el plano de diseño coordenado, la base del poste está en (0,0), la cima en el punto P(0, 8) y el anclaje en A(6, 0). ¿Cuál es la distancia diagonal (longitud del cable) trazada entre los puntos P y A en el plano?",
    "opciones": [
      { "id": "A", "texto": "8 unidades" },
      { "id": "B", "texto": "10 unidades" },
      { "id": "C", "texto": "14 unidades" },
      { "id": "D", "texto": "100 unidades" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="400" height="280" fill="#f8fafc" rx="12"/>
      <rect width="400" height="280" fill="url(#gridPattern)" />
      
      <!-- Pole -->
      <rect x="60" y="40" width="8" height="200" fill="#475569" />
      <circle cx="64" cy="40" r="10" fill="#94a3b8" />
      <text x="35" y="140" transform="rotate(-90, 35, 140)" font-weight="bold" fill="#475569">Poste P (0, 8)</text>
      
      <!-- Ground Axis -->
      <line x1="20" y1="240" x2="380" y2="240" stroke="#1e293b" stroke-width="2" />
      <circle cx="340" cy="240" r="6" fill="#10b981" stroke="white" stroke-width="2" />
      <text x="340" y="265" text-anchor="middle" font-weight="bold" fill="#10b981">Anclaje A (6, 0)</text>
      
      <!-- Cable -->
      <line x1="64" y1="40" x2="340" y2="240" stroke="#6366f1" stroke-width="4" stroke-dasharray="8,4" />
      <text x="210" y="130" transform="rotate(35, 210, 130)" font-weight="900" fill="#4338ca" font-size="16">Cable ?</text>
    </svg>`,
    "justificacion": "La distancia entre dos puntos en el plano cartesiano se calcula con la fórmula d = √[(x2 - x1)² + (y2 - y1)²]. Aplicando a P(0,8) y A(6,0): d = √[(6 - 0)² + (0 - 8)²] = √[36 + 64] = √100. La raíz cuadrada de 100 es 10. (Esencialmente, un triángulo rectángulo de catetos 6 y 8)."
  },
  {
    "id": "mat_sim_07_p17",
    "area": "Matemáticas",
    "competencia": "Argumentación",
    "componente": "Geométrico - Métrico",
    "enunciado": "Se inscribe perfectamente una esfera dentro de una caja cúbica, de modo que la esfera toca las 6 caras del cubo. Un estudiante observa esto y deduce que la esfera ocupa más del 80% del volumen total de la caja. Sabiendo que V_esfera = (4/3)πr³ y V_cubo = L³ (con L = 2r), ¿es correcta la deducción del estudiante?",
    "opciones": [
      { "id": "A", "texto": "Sí, porque al tocar las 6 caras, casi no queda espacio vacío en las esquinas." },
      { "id": "B", "texto": "No, porque al hacer la relación matemática, la esfera solo ocupa aproximadamente el 52% del cubo." },
      { "id": "C", "texto": "Sí, porque el cubo y la esfera tienen el mismo centro geométrico." },
      { "id": "D", "texto": "No, porque la esfera ocupa exactamente el 33% (un tercio) del volumen del cubo." }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sphereGrad" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#4338ca" />
        </radialGradient>
      </defs>
      <rect width="300" height="240" fill="#f8fafc" rx="12"/>
      <!-- Cube -->
      <rect x="75" y="45" width="150" height="150" fill="none" stroke="#94a3b8" stroke-width="2" />
      <path d="M 75,45 l 40,-30 h 150 l -40,30" fill="none" stroke="#94a3b8" stroke-width="1" />
      <path d="M 225,45 l 40,-30 v 150 l -40,30" fill="none" stroke="#94a3b8" stroke-width="1" />
      <!-- Sphere -->
      <circle cx="150" cy="120" r="75" fill="url(#sphereGrad)" opacity="0.9" stroke="#312e81" stroke-width="1" />
      <ellipse cx="150" cy="120" rx="75" ry="25" fill="none" stroke="white" opacity="0.3" />
    </svg>`,
    "justificacion": "Para probarlo, se hace la razón de volúmenes. V_cubo = (2r)³ = 8r³. V_esfera = (4/3)πr³. Relación = [(4/3)πr³] / [8r³] = (4π) / 24 = π / 6. Sabiendo que π ≈ 3.1416, la relación es 3.1416 / 6 ≈ 0.5236. Esto demuestra que la esfera ocupa cerca del 52.3% del espacio de la caja, refutando la afirmación del 80%."
  },
  {
    "id": "mat_sim_07_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "Se quiere colocar un poste de luz a la misma distancia de dos casas ubicadas en las coordenadas M(-2, 3) y N(4, -1). Para ello, se debe calcular el punto medio del segmento de recta que une ambas casas. ¿Cuáles son las coordenadas exactas donde se instalará el poste?",
    "opciones": [
      { "id": "A", "texto": "(2, 2)" },
      { "id": "B", "texto": "(1, 1)" },
      { "id": "C", "texto": "(3, 1)" },
      { "id": "D", "texto": "(1, 2)" }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#e2e8f0" />
        </pattern>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>
      <rect width="400" height="280" fill="#f8fafc" rx="12"/>
      <rect width="400" height="280" fill="url(#dotGrid)" />
      
      <!-- Axis -->
      <line x1="40" y1="160" x2="360" y2="160" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="160" y1="240" x2="160" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
      <text x="365" y="165" font-size="12" font-weight="bold" fill="#64748b">X</text>
      <text x="160" y="30" font-size="12" font-weight="bold" fill="#64748b" text-anchor="middle">Y</text>
      
      <!-- Houses (Illustrative Icons) -->
      <g transform="translate(80, 40)">
        <path d="M 0,15 L 15,0 L 30,15 V 35 H 0 Z" fill="#ef4444" stroke="#b91c1c" stroke-width="2" />
        <text x="15" y="-10" text-anchor="middle" font-size="13" font-weight="bold" fill="#ef4444">Casa M (-2, 3)</text>
      </g>
      
      <g transform="translate(280, 180)">
        <path d="M 0,15 L 15,0 L 30,15 V 35 H 0 Z" fill="#10b981" stroke="#047857" stroke-width="2" />
        <text x="15" y="55" text-anchor="middle" font-size="13" font-weight="bold" fill="#10b981">Casa N (4, -1)</text>
      </g>
      
      <!-- Connection line -->
      <line x1="110" y1="75" x2="295" y2="195" stroke="#475569" stroke-width="2" stroke-dasharray="6,4" opacity="0.6"/>
      
      <!-- Midpoint Marker -->
      <circle cx="200" cy="140" r="10" fill="#6366f1" stroke="white" stroke-width="3">
         <animate attributeName="r" values="8;11;8" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="215" y="130" font-size="14" font-weight="extrabold" fill="#4338ca">Poste / Punto Medio (?)</text>
    </svg>`,
    "justificacion": "La fórmula para hallar las coordenadas del punto medio P(x, y) de un segmento entre dos puntos (x1, y1) y (x2, y2) es: P = ( (x1 + x2)/2 , (y1 + y2)/2 ). Sustituyendo los datos: x = (-2 + 4)/2 = 2/2 = 1. y = (3 + -1)/2 = 2/2 = 1. Por lo tanto, el punto medio coordenado es (1, 1)."
  },
  {
    "id": "mat_sim_07_p19",
    "area": "Matemáticas",
    "competencia": "Interpretación y representación",
    "componente": "Geométrico - Métrico",
    "enunciado": "La gráfica muestra un hexágono irregular. La suma de sus 6 ángulos interiores fue calculada midiendo cada vértice por separado. ¿A qué valor numérico constante debe equivaler siempre la suma de los ángulos internos de cualquier figura plana de 6 lados?",
    "opciones": [
      { "id": "A", "texto": "360°" },
      { "id": "B", "texto": "540°" },
      { "id": "C", "texto": "720°" },
      { "id": "D", "texto": "1080°" }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 240 240" xmlns="http://www.w3.org/2000/svg">
      <rect width="240" height="240" fill="#f8fafc" rx="12"/>
      <polygon points="120,30 200,75 200,165 120,210 40,165 40,75" fill="#6366f111" stroke="#6366f1" stroke-width="3" />
      <!-- Angle arcs -->
      <path d="M 120,50 a 20,20 0 0 0 -15,5" fill="none" stroke="#4338ca" stroke-width="2" />
      <circle cx="120" cy="120" r="4" fill="#94a3b8" />
      <text x="120" y="135" text-anchor="middle" font-weight="900" fill="#4338ca">Hexágono (n=6)</text>
    </svg>`,
    "justificacion": "La fórmula general para calcular la sumatoria de todos los ángulos interiores de un polígono es S = 180° × (n - 2), donde 'n' representa el número de lados. Para un hexágono (n=6), la operación es S = 180° × (6 - 2) = 180° × 4 = 720°. Esto aplica sea el polígono regular o irregular."
  },
  {
    "id": "mat_sim_07_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Geométrico - Métrico",
    "enunciado": "En la construcción de un tobogán acuático cónico, se necesita calcular la tela plastificada externa (Área lateral) para cubrir un cono que tiene un radio de base de 3 metros y una generatriz (lado inclinado) de 5 metros. Sabiendo que el área lateral del cono es A = π * r * g, ¿cuántos metros cuadrados de tela se usarán? (Tome π = 3,14)",
    "opciones": [
      { "id": "A", "texto": "15,0 m²" },
      { "id": "B", "texto": "28,26 m²" },
      { "id": "C", "texto": "47,1 m²" },
      { "id": "D", "texto": "75,36 m²" }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "svg": `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#4338ca" />
          <stop offset="50%" style="stop-color:#818cf8" />
          <stop offset="100%" style="stop-color:#4338ca" />
        </radialGradient>
      </defs>
      <rect width="300" height="240" fill="#f8fafc" rx="12"/>
      <ellipse cx="150" cy="190" rx="80" ry="25" fill="#f1f5f9" stroke="#1e293b" stroke-width="2" />
      <path d="M 70,190 L 150,30 L 230,190" fill="url(#coneGrad)" stroke="#1e293b" stroke-width="2" />
      <path d="M 70,190 a 80 25 0 0 0 160 0" stroke="#1e293b" stroke-width="2" fill="none" />
      
      <!-- Measurements -->
      <line x1="150" y1="190" x2="230" y2="190" stroke="#10b981" stroke-width="3" />
      <text x="190" y="185" text-anchor="middle" font-weight="bold" fill="#10b981">Radio r = 3m</text>
      <text x="210" y="100" transform="rotate(-65, 210, 100)" font-weight="bold" fill="#f1f5f9">Generatriz g = 5m</text>
    </svg>`,
    "justificacion": "La fórmula del área lateral no incluye la base circular, solo la envoltura. A = π * r * g. Reemplazando los valores dados: A = 3,14 * 3 * 5. Multiplicamos primero los enteros: 3 * 5 = 15. Luego: 15 * 3,14 = 47,1 m². Esta será la cantidad exacta de material necesario."
  }
]);
