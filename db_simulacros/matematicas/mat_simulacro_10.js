// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas - Simulacro Matemáticas 10 (Sesión 3 2025)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_10_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un ingeniero necesita calcular el volumen de un tanque cilíndrico para almacenar agua. El tanque tiene un diámetro de 4 metros y una altura de 10 metros.</p> <p>El ingeniero aplica la fórmula del volumen de un cilindro (V = &pi;r²h) y realiza la siguiente operación:</p> <p style=\"text-align:center; font-family:Georgia; font-weight:bold; font-size:1.2rem;\">V = &pi; &times; (4)² &times; 10 = 160&pi;</p> <p><strong>¿Qué error cometió el ingeniero en su cálculo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El error fue multiplicar por 10, ya que la altura debe dividirse a la mitad al igual que el diámetro."
      },
      {
        "id": "B",
        "texto": "El error fue no elevar la altura al cuadrado, como lo indica la fórmula general de los volúmenes."
      },
      {
        "id": "C",
        "texto": "El error fue elevar al cuadrado la constante &pi; antes de multiplicarla por los demás valores."
      },
      {
        "id": "D",
        "texto": "El error fue utilizar el diámetro (4) en lugar del radio (2) al momento de aplicar la fórmula."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "La fórmula del cilindro requiere el radio (r). El radio es la mitad del diámetro (4/2 = 2). El ingeniero introdujo directamente el 4 en la fórmula, elevando el diámetro al cuadrado en lugar del radio. El volumen correcto sería V = &pi;(2)²(10) = 40&pi;.",
    "svg": "<svg viewBox=\"0 0 200 250\" width=\"100%\" style=\"background:#fff; max-width:200px; display:block; margin:15px auto; border-radius:8px; border:1px solid var(--border-glass);\">\n                        <!-- Cilindro -->\n                        <ellipse cx=\"100\" cy=\"50\" rx=\"60\" ry=\"20\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n                        <path d=\"M 40 50 L 40 200 A 60 20 0 0 0 160 200 L 160 50\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"2\"/>\n                        <!-- Cota Diámetro -->\n                        <line x1=\"40\" y1=\"50\" x2=\"160\" y2=\"50\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n                        <circle cx=\"100\" cy=\"50\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"100\" y=\"40\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">d = 4 m</text>\n                        <!-- Cota Altura -->\n                        <line x1=\"175\" y1=\"50\" x2=\"175\" y2=\"200\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"170\" y1=\"50\" x2=\"180\" y2=\"50\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"170\" y1=\"200\" x2=\"180\" y2=\"200\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"182\" y=\"130\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"start\">h = 10 m</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p2",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un hospital se registró la cantidad de pacientes atendidos en el área de urgencias durante 4 días de la semana. Los datos se muestran en la tabla:</p> <table class=\"data-table\" style=\"max-width: 300px; margin: 10px auto;\"> <tr><th>Día</th><th>Pacientes</th></tr> <tr><td>Lunes</td><td>50</td></tr> <tr><td>Martes</td><td>30</td></tr> <tr><td>Miércoles</td><td>80</td></tr> <tr><td>Jueves</td><td>40</td></tr> </table> <p>Para la presentación gerencial, se elaboró la siguiente gráfica circular:</p> <p><strong>¿La gráfica elaborada representa correctamente los datos de la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque incluye los cuatro días registrados en la tabla de urgencias."
      },
      {
        "id": "B",
        "texto": "No, porque se omitió la cantidad de pacientes atendidos el día viernes."
      },
      {
        "id": "C",
        "texto": "No, porque el sector que representa el día Martes es visualmente mucho más grande que el del Miércoles, a pesar de que 30 es menor que 80."
      },
      {
        "id": "D",
        "texto": "Sí, porque los sectores del gráfico circular están divididos proporcionalmente en cuatro partes iguales."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al comparar las magnitudes, el Miércoles tiene la mayor cantidad de pacientes (80). Sin embargo, en el gráfico, el sector del Martes (30) ocupa casi la mitad del círculo, siendo visualmente superior al del Miércoles. Esto hace que la gráfica sea incorrecta y engañosa.",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"250\" style=\"margin: 10px auto; display: block;\">\n                        <!-- Lunes (50) - 25% real -->\n                        <path d=\"M100,100 L100,20 A80,80 0 0,1 180,100 Z\" fill=\"#eff6ff\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <!-- Miércoles (80) - 40% real, pero lo dibujaremos mal (ej. 15%) -->\n                        <path d=\"M100,100 L180,100 A80,80 0 0,1 160,150 Z\" fill=\"#9ca3af\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <!-- Martes (30) - 15% real, pero lo dibujaremos inmenso (ej. 45%) -->\n                        <path d=\"M100,100 L160,150 A80,80 0 0,1 25,125 Z\" fill=\"#1e3a8a\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <!-- Jueves (40) - 20% real -->\n                        <path d=\"M100,100 L25,125 A80,80 0 0,1 100,20 Z\" fill=\"#be123c\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        \n                        <rect x=\"140\" y=\"40\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"155\" y=\"50\" font-size=\"8\" text-anchor=\"middle\">Lunes</text>\n                        <rect x=\"160\" y=\"110\" width=\"40\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"180\" y=\"120\" font-size=\"8\" text-anchor=\"middle\">Miércoles</text>\n                        <rect x=\"60\" y=\"160\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"75\" y=\"170\" font-size=\"8\" text-anchor=\"middle\">Martes</text>\n                        <rect x=\"20\" y=\"40\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"35\" y=\"50\" font-size=\"8\" text-anchor=\"middle\">Jueves</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p3",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una tienda de tecnología graficó las ventas de computadores portátiles durante cuatro semanas consecutivas.</p> <p><strong>¿Cuál fue la semana con la menor cantidad de portátiles vendidos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Semana 1"
      },
      {
        "id": "B",
        "texto": "Semana 2"
      },
      {
        "id": "C",
        "texto": "Semana 3"
      },
      {
        "id": "D",
        "texto": "Semana 4"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al inspeccionar el diagrama de barras, la barra correspondiente a la 'Semana 3' es la más baja de todas, ubicándose entre 10 y 20 unidades.",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:0 auto;\">\n                        <text x=\"150\" y=\"20\" text-anchor=\"middle\" font-weight=\"bold\" font-size=\"12\">Venta de Portátiles por Semana</text>\n                        <line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#000\"/>\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"30\" stroke=\"#000\"/>\n                        <!-- Eje Y: Max 50 -->\n                        <text x=\"30\" y=\"45\" font-size=\"10\">50</text> <line x1=\"38\" y1=\"40\" x2=\"42\" y2=\"40\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"69\" font-size=\"10\">40</text> <line x1=\"38\" y1=\"64\" x2=\"42\" y2=\"64\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"93\" font-size=\"10\">30</text> <line x1=\"38\" y1=\"88\" x2=\"42\" y2=\"88\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"117\" font-size=\"10\">20</text> <line x1=\"38\" y1=\"112\" x2=\"42\" y2=\"112\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"141\" font-size=\"10\">10</text> <line x1=\"38\" y1=\"136\" x2=\"42\" y2=\"136\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"165\" font-size=\"10\">0</text>\n                        \n                        <!-- Barras -->\n                        <!-- Sem 1: 30 -->\n                        <rect x=\"60\" y=\"88\" width=\"30\" height=\"72\" fill=\"#0d9488\" stroke=\"#000\"/>\n                        <!-- Sem 2: 45 (y= 160 - (45/50)*120 = 160 - 108 = 52) -->\n                        <rect x=\"110\" y=\"52\" width=\"30\" height=\"108\" fill=\"#0d9488\" stroke=\"#000\"/>\n                        <!-- Sem 3: 15 (y= 160 - (15/50)*120 = 160 - 36 = 124) -->\n                        <rect x=\"160\" y=\"124\" width=\"30\" height=\"36\" fill=\"#0d9488\" stroke=\"#000\"/>\n                        <!-- Sem 4: 40 -->\n                        <rect x=\"210\" y=\"64\" width=\"30\" height=\"96\" fill=\"#0d9488\" stroke=\"#000\"/>\n                        \n                        <text x=\"75\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Sem 1</text>\n                        <text x=\"125\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Sem 2</text>\n                        <text x=\"175\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Sem 3</text>\n                        <text x=\"225\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Sem 4</text>\n                        <text x=\"15\" y=\"100\" font-size=\"10\" font-weight=\"bold\" transform=\"rotate(-90 15,100)\" text-anchor=\"middle\">Unidades</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una modista fabrica camisas. El costo de los materiales para fabricar una camisa es de $25.000 y ella vende cada camisa terminada a $40.000.</p> <p><strong>¿Qué expresión matemática le permite calcular su ganancia total si vende <b>n</b> camisas?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "$40.000 + $25.000 &times; n"
      },
      {
        "id": "B",
        "texto": "($40.000 - $25.000) &times; n"
      },
      {
        "id": "C",
        "texto": "($40.000 &times; n) - $25.000"
      },
      {
        "id": "D",
        "texto": "$25.000 &times; n - $40.000"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "La ganancia por UNA camisa se calcula restando el costo al precio de venta ($40.000 - $25.000 = $15.000). Para saber la ganancia total, se debe multiplicar esta diferencia por la cantidad total de camisas vendidas (n)."
  },
  {
    "id": "mat_sim_10_p5",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una gran empresa de ensamblaje trabajan 500 operarios en el turno diurno y 200 operarios en el turno nocturno. La gerencia quiere hacer una encuesta sobre la calidad de la comida en la cafetería, seleccionando a 70 empleados.</p> <p style=\"margin: 15px 0; padding: 15px; border-left: 4px solid var(--secondary); background: var(--bg-body); border-radius: 8px; font-family: 'Georgia', serif;\"> <strong>Método propuesto:</strong> Seleccionar a los 70 empleados que tengan el mayor nivel de productividad, sin importar su turno. </p> <p><strong>¿Es representativa la muestra obtenida con este método?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque los empleados más productivos son los que más tiempo pasan en la empresa."
      },
      {
        "id": "B",
        "texto": "No, porque se excluye a los empleados con rendimiento medio o bajo, y podría no haber proporción entre turnos."
      },
      {
        "id": "C",
        "texto": "Sí, porque 70 empleados es el 10% exacto de la población total (700)."
      },
      {
        "id": "D",
        "texto": "No, porque la encuesta debería realizarse obligatoriamente a los 700 operarios."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Para que una muestra estadística sea representativa, debe seleccionarse de manera aleatoria y estratificada (incluyendo tanto a empleados de turno diurno como nocturno). Seleccionar solo a los 'más productivos' introduce un sesgo en la encuesta."
  },
  {
    "id": "mat_sim_10_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La siguiente tabla y gráfica de líneas muestran el registro de precipitaciones (en milímetros) en tres zonas durante 4 meses.</p> <table class=\"data-table\" style=\"max-width: 400px; margin: 10px auto; font-size: 0.9rem;\"> <tr><th>Zona</th><th>Enero</th><th>Febrero</th><th>Marzo</th><th>Abril</th></tr> <tr><td>Norte</td><td>10</td><td>15</td><td>25</td><td>20</td></tr> <tr><td>Sur</td><td>5</td><td>10</td><td>10</td><td>15</td></tr> <tr><td>Centro</td><td>20</td><td>30</td><td>25</td><td>10</td></tr> </table> <p><strong>¿La gráfica de líneas representa fielmente toda la información de la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque las tres líneas coinciden exactamente con los 12 valores numéricos de la tabla."
      },
      {
        "id": "B",
        "texto": "No, porque en la gráfica la Zona Centro muestra 25 mm en Febrero, pero la tabla dice 30 mm."
      },
      {
        "id": "C",
        "texto": "No, porque en el mes de Marzo, el dato graficado para la Zona Sur (20) no coincide con el de la tabla (10)."
      },
      {
        "id": "D",
        "texto": "Sí, porque los meses en el eje X y las zonas en la leyenda coinciden con las columnas y filas de la tabla."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al verificar punto por punto, observamos que en el mes de Marzo (Mar), el punto rojo (Zona Sur) está posicionado sobre la línea del 20 en el eje vertical, cuando según la tabla debería estar en el nivel del 10.",
    "svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:10px auto;\">\n                        <defs><marker id=\"arrow6\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <!-- Grid -->\n                        <g stroke=\"#e2e8f0\" stroke-width=\"1\">\n                            <line x1=\"40\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                            <line x1=\"40\" y1=\"120\" x2=\"330\" y2=\"120\"/>\n                            <line x1=\"40\" y1=\"80\" x2=\"330\" y2=\"80\"/>\n                            <line x1=\"40\" y1=\"40\" x2=\"330\" y2=\"40\"/>\n                        </g>\n                        <!-- Y Axis -->\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow6)\"/>\n                        <text x=\"35\" y=\"163\" font-size=\"9\" text-anchor=\"end\">0</text>\n                        <text x=\"35\" y=\"123\" font-size=\"9\" text-anchor=\"end\">10</text>\n                        <text x=\"35\" y=\"83\" font-size=\"9\" text-anchor=\"end\">20</text>\n                        <text x=\"35\" y=\"43\" font-size=\"9\" text-anchor=\"end\">30</text>\n                        <!-- X Axis -->\n                        <text x=\"80\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">Ene</text>\n                        <text x=\"150\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">Feb</text>\n                        <text x=\"220\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">Mar</text>\n                        <text x=\"290\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">Abr</text>\n                        \n                        <!-- Norte (Cuadrados) - Datos: 10, 15, 25, 20 -->\n                        <polyline points=\"80,120 150,100 220,60 290,80\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <rect x=\"77\" y=\"117\" width=\"6\" height=\"6\" fill=\"#1e3a8a\"/>\n                        <rect x=\"147\" y=\"97\" width=\"6\" height=\"6\" fill=\"#1e3a8a\"/>\n                        <rect x=\"217\" y=\"57\" width=\"6\" height=\"6\" fill=\"#1e3a8a\"/>\n                        <rect x=\"287\" y=\"77\" width=\"6\" height=\"6\" fill=\"#1e3a8a\"/>\n\n                        <!-- Sur (Círculos) - Datos tabla: 5, 10, 10, 15 -->\n                        <!-- ERROR INTENCIONAL: Graficado como 5, 10, 20, 15 -->\n                        <polyline points=\"80,140 150,120 220,80 290,100\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/>\n                        <circle cx=\"80\" cy=\"140\" r=\"3.5\" fill=\"#be123c\"/>\n                        <circle cx=\"150\" cy=\"120\" r=\"3.5\" fill=\"#be123c\"/>\n                        <circle cx=\"220\" cy=\"80\" r=\"3.5\" fill=\"#be123c\"/> <!-- Aquí está en 20 en vez de 10 -->\n                        <circle cx=\"290\" cy=\"100\" r=\"3.5\" fill=\"#be123c\"/>\n\n                        <!-- Centro (Triangulos) - Datos: 20, 30, 25, 10 -->\n                        <polyline points=\"80,80 150,40 220,60 290,120\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"2\"/>\n                        <polygon points=\"80,76 76,83 84,83\" fill=\"#0d9488\"/>\n                        <polygon points=\"150,36 146,43 154,43\" fill=\"#0d9488\"/>\n                        <polygon points=\"220,56 216,63 224,63\" fill=\"#0d9488\"/>\n                        <polygon points=\"290,116 286,123 294,123\" fill=\"#0d9488\"/>\n\n                        <!-- Leyenda -->\n                        <rect x=\"80\" y=\"10\" width=\"6\" height=\"6\" fill=\"#1e3a8a\"/><text x=\"90\" y=\"16\" font-size=\"8\">Norte</text>\n                        <circle cx=\"140\" cy=\"13\" r=\"3\" fill=\"#be123c\"/><text x=\"148\" y=\"16\" font-size=\"8\">Sur</text>\n                        <polygon points=\"190,10 186,16 194,16\" fill=\"#0d9488\"/><text x=\"198\" y=\"16\" font-size=\"8\">Centro</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p7",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una fábrica de software, se sorteará una licencia premium entre un grupo de programadores. Las siguientes tablas muestran la información:</p> <div style=\"display:flex; gap: 20px; flex-wrap: wrap; justify-content:center;\"> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Nombre</th><th>Código</th><th>Lenguaje</th></tr> <tr><td>Ana</td><td>501</td><td>Python</td></tr> <tr><td>Luis</td><td>302</td><td>Java</td></tr> <tr><td>Pedro</td><td>403</td><td>Java</td></tr> <tr><td>Sofía</td><td>104</td><td>Python</td></tr> </table> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Lenguaje</th><th>Dpto</th></tr> <tr><td>Java</td><td>Backend</td></tr> <tr><td>Python</td><td>Data</td></tr> </table> </div> <p style=\"margin-top:15px;\">El gerente anuncia: <em>\"El ganador es un programador del departamento de <b>Backend</b>, cuyo código de empleado es un número <b>impar</b>\"</em>.</p> <p><strong>¿Quién ganó la licencia premium?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Ana."
      },
      {
        "id": "B",
        "texto": "Luis."
      },
      {
        "id": "C",
        "texto": "Pedro."
      },
      {
        "id": "D",
        "texto": "Sofía."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Primero cruzamos las tablas: el departamento de 'Backend' programa en 'Java'. Los programadores de Java son Luis (302) y Pedro (403). De ellos dos, el único que tiene un código de empleado impar es Pedro (403)."
  },
  {
    "id": "mat_sim_10_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El diseño de un jardín incluye una fuente circular rodeada por un sendero de piedra, formando dos circunferencias concéntricas con centro en <b>O</b>.</p> <p>El área pintada de gris representa el sendero de piedra. ¿Qué datos mínimos se necesitan para calcular el área exacta de dicho sendero?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "La medida del segmento PQ únicamente."
      },
      {
        "id": "B",
        "texto": "Las medidas de los segmentos OP y OQ."
      },
      {
        "id": "C",
        "texto": "El perímetro de la circunferencia exterior."
      },
      {
        "id": "D",
        "texto": "La medida del segmento OP únicamente."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "El área del sendero es una 'corona circular'. Se halla restando el área del círculo pequeño (la fuente) al área del círculo grande. Para calcular ambas áreas, se requiere conocer el radio interior (distancia OP) y el radio exterior (distancia OQ).",
    "svg": "<svg viewBox=\"0 0 280 200\" width=\"100%\" style=\"margin: 15px auto; display:block; max-width: 280px;\">\n                        <circle cx=\"140\" cy=\"100\" r=\"80\" fill=\"#e2e8f0\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <circle cx=\"140\" cy=\"100\" r=\"45\" fill=\"#bae6fd\" stroke=\"#000\" stroke-width=\"2\"/>\n                        \n                        <line x1=\"140\" y1=\"100\" x2=\"220\" y2=\"100\" stroke=\"#000\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n                        <circle cx=\"140\" cy=\"100\" r=\"4\" fill=\"#000\"/> <text x=\"135\" y=\"90\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\">O</text>\n                        <circle cx=\"185\" cy=\"100\" r=\"4\" fill=\"#000\"/> <text x=\"180\" y=\"90\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\">P</text>\n                        <circle cx=\"220\" cy=\"100\" r=\"4\" fill=\"#000\"/> <text x=\"215\" y=\"90\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\">Q</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p9",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El servicio de agua de una ciudad cobra una tarifa fija mensual de $15.000, más un recargo de $2.000 por cada metro cúbico (m³) de agua consumido.</p> <p><strong>¿Cuál de las siguientes ecuaciones permite determinar el costo total <b>y</b> de la factura mensual, sabiendo que <b>x</b> es la cantidad de m³ consumidos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "y = 15.000x + 2.000"
      },
      {
        "id": "B",
        "texto": "y = (15.000 + 2.000) &times; x"
      },
      {
        "id": "C",
        "texto": "y = 15.000 + 2.000x"
      },
      {
        "id": "D",
        "texto": "y = 17.000x"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Es una función lineal clásica y = mx + b. La tarifa fija es el punto de corte (b = 15.000), un valor que se cobra sin importar el consumo. El recargo por unidad consumida es la pendiente (m = 2.000), ya que multiplica a la variable x."
  },
  {
    "id": "mat_sim_10_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una rifa escolar se vendieron en total 200 boletas. Carlos y su familia compraron 8 boletas para apoyar la actividad.</p> <p><strong>¿Cuál es la probabilidad matemática de que Carlos o su familia ganen el premio mayor?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>8</span><span>100</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>1</span><span>200</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>8</span><span>200</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>200</span><span>8</span></span>"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "La fórmula de probabilidad simple es Casos Favorables divididos entre los Casos Posibles (Totales). Carlos tiene 8 boletas (favorables) de un total de 200 (posibles). Por tanto, la probabilidad es 8/200."
  },
  {
    "id": "mat_sim_10_p11",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un deportista mide su ritmo cardíaco (en pulsaciones por minuto) al finalizar cada kilómetro de una carrera de 5 km.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Distancia</th><th>Pulsaciones / min</th></tr> <tr><td>Km 1</td><td>110</td></tr> <tr><td>Km 2</td><td>115</td></tr> <tr><td>Km 3</td><td>125</td></tr> <tr><td>Km 4</td><td>130</td></tr> <tr><td>Km 5</td><td>122</td></tr> </table> <p><strong>De acuerdo con la tabla, ¿en qué kilómetro el ritmo cardíaco superó por primera vez las 120 pulsaciones por minuto?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Km 2"
      },
      {
        "id": "B",
        "texto": "Km 3"
      },
      {
        "id": "C",
        "texto": "Km 4"
      },
      {
        "id": "D",
        "texto": "Km 5"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Al recorrer la tabla en orden de distancia, vemos que en el Km 1 tenía 110, en el Km 2 tenía 115, y al llegar al Km 3 registró 125, siendo esta la primera vez que supera la barrera de 120 pulsaciones."
  },
  {
    "id": "mat_sim_10_p12",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La figura muestra el triángulo <b>PQR</b> ubicado en el plano cartesiano.</p> <p><strong>¿Qué segmento representa el cateto opuesto al ángulo en el vértice P?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El segmento PQ."
      },
      {
        "id": "B",
        "texto": "El segmento PR."
      },
      {
        "id": "C",
        "texto": "El segmento QR."
      },
      {
        "id": "D",
        "texto": "Los segmentos PQ y PR."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "En un triángulo rectángulo, el 'cateto opuesto' a un ángulo es el lado que no forma parte de dicho ángulo. Si te sitúas en el vértice P, los lados que lo conforman son la hipotenusa (PR) y el cateto adyacente (PQ). El lado que queda justo al frente, sin tocar a P, es el segmento QR.",
    "svg": "<svg viewBox=\"0 0 350 250\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:15px auto;\">\n                        <defs><marker id=\"arrow12\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <!-- Grid 30px -->\n                        <g stroke=\"#cbd5e1\" stroke-width=\"1\">\n                            <line x1=\"20\" y1=\"20\" x2=\"20\" y2=\"230\"/><line x1=\"50\" y1=\"20\" x2=\"50\" y2=\"230\"/>\n                            <line x1=\"80\" y1=\"20\" x2=\"80\" y2=\"230\"/><line x1=\"110\" y1=\"20\" x2=\"110\" y2=\"230\"/>\n                            <line x1=\"140\" y1=\"20\" x2=\"140\" y2=\"230\"/><line x1=\"170\" y1=\"20\" x2=\"170\" y2=\"230\"/>\n                            <line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"230\"/><line x1=\"230\" y1=\"20\" x2=\"230\" y2=\"230\"/>\n                            <line x1=\"260\" y1=\"20\" x2=\"260\" y2=\"230\"/><line x1=\"290\" y1=\"20\" x2=\"290\" y2=\"230\"/>\n                            <line x1=\"320\" y1=\"20\" x2=\"320\" y2=\"230\"/>\n                            <line x1=\"20\" y1=\"20\" x2=\"330\" y2=\"20\"/><line x1=\"20\" y1=\"50\" x2=\"330\" y2=\"50\"/>\n                            <line x1=\"20\" y1=\"80\" x2=\"330\" y2=\"80\"/><line x1=\"20\" y1=\"110\" x2=\"330\" y2=\"110\"/>\n                            <line x1=\"20\" y1=\"140\" x2=\"330\" y2=\"140\"/><line x1=\"20\" y1=\"170\" x2=\"330\" y2=\"170\"/>\n                            <line x1=\"20\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"20\" y1=\"230\" x2=\"330\" y2=\"230\"/>\n                        </g>\n                        <!-- Ejes (Origen en 140, 140) -->\n                        <line x1=\"20\" y1=\"140\" x2=\"340\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow12)\"/>\n                        <line x1=\"140\" y1=\"230\" x2=\"140\" y2=\"10\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow12)\"/>\n                        <text x=\"330\" y=\"130\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">x</text>\n                        <text x=\"145\" y=\"20\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">y</text>\n                        \n                        <!-- Triángulo: P(-2,3), Q(-2,-1), R(4,-1) -> px=(140-60)=80, py=(140-90)=50. -->\n                        <polygon points=\"80,50 80,170 260,170\" fill=\"rgba(220,38,38,0.1)\" stroke=\"#000\" stroke-width=\"3\"/>\n                        <circle cx=\"80\" cy=\"50\" r=\"5\" fill=\"#000\"/><text x=\"65\" y=\"45\" font-family=\"Georgia\" font-weight=\"bold\">P</text>\n                        <circle cx=\"80\" cy=\"170\" r=\"5\" fill=\"#000\"/><text x=\"65\" y=\"185\" font-family=\"Georgia\" font-weight=\"bold\">Q</text>\n                        <circle cx=\"260\" cy=\"170\" r=\"5\" fill=\"#000\"/><text x=\"270\" y=\"185\" font-family=\"Georgia\" font-weight=\"bold\">R</text>\n\n                        <!-- Símbolo 90 grados -->\n                        <path d=\"M 80 155 L 95 155 L 95 170\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>A continuación se muestra una tabla con los valores de x y los valores resultantes de y.</p> <table class=\"data-table\" style=\"max-width: 200px; margin: 10px auto;\"> <tr><th style=\"background:#e2e8f0; color:#000;\">x</th><td>0</td><td>1</td><td>2</td></tr> <tr><th style=\"background:#e2e8f0; color:#000;\">y</th><td>-3</td><td>0</td><td>5</td></tr> </table> <p><strong>¿Cuál de las siguientes ecuaciones algebraicas modela correctamente los datos de la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "y = 2x - 3"
      },
      {
        "id": "B",
        "texto": "y = x² + 2x - 3"
      },
      {
        "id": "C",
        "texto": "y = 3x - 3"
      },
      {
        "id": "D",
        "texto": "y = x² - 3"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Debemos probar qué ecuación cumple con todos los pares. Si tomamos y = x² + 2x - 3:<br>Para x=0 ➔ y = 0 + 0 - 3 = -3 (Cumple).<br>Para x=1 ➔ y = 1² + 2(1) - 3 = 1+2-3 = 0 (Cumple).<br>Para x=2 ➔ y = 2² + 2(2) - 3 = 4+4-3 = 5 (Cumple)."
  },
  {
    "id": "mat_sim_10_p14",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una piscina se vacía utilizando motobombas. La tabla muestra el tiempo que se tarda en vaciar la piscina dependiendo de la cantidad de motobombas (todas de igual capacidad) que se utilicen simultáneamente.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Cant. Motobombas</th><th>Tiempo (Horas)</th></tr> <tr><td>2</td><td>12</td></tr> <tr><td>3</td><td>8</td></tr> <tr><td>4</td><td>6</td></tr> </table> <p><strong>¿Qué tipo de relación matemática existe entre la cantidad de motobombas y el tiempo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Directamente proporcional, porque al aumentar las motobombas, el tiempo también aumenta."
      },
      {
        "id": "B",
        "texto": "Inversamente proporcional, porque el producto entre las motobombas y el tiempo siempre es constante (24)."
      },
      {
        "id": "C",
        "texto": "Exponencial, porque la velocidad de vaciado aumenta de forma cuadrática."
      },
      {
        "id": "D",
        "texto": "Inversamente proporcional, porque la suma de ambas variables siempre da el mismo resultado."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Dos magnitudes son inversamente proporcionales si cuando una aumenta, la otra disminuye, y su producto es siempre una constante (K). Comprobamos: 2×12=24, 3×8=24, 4×6=24. Al ser constante, se confirma."
  },
  {
    "id": "mat_sim_10_p15",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una empresa proveedora de internet cobra un plan mensual así: un valor fijo de $30.000 por los primeros 10 Gigabytes (GB) consumidos. A partir del GB número 11, cobra $2.000 adicionales por cada GB extra.</p> <p>¿Cuál de las siguientes gráficas representa correctamente el cobro de este plan?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center;\"><b>Opción A</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">30k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">10 GB</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,100 80,70 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center;\"><b>Opción B</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">30k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">10 GB</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,70 80,70 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center;\"><b>Opción C</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">30k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">10 GB</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><line x1=\"20\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center;\"><b>Opción D</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">30k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">10 GB</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,70 80,100 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Es una función a trozos. Desde 0 hasta 10 GB el precio no cambia, es decir, se mantiene constante en 30k (una línea totalmente horizontal). Al cruzar la marca de 10 GB, el precio empieza a subir linealmente por el recargo adicional, formando una línea diagonal ascendente. Esto es exactamente lo que ilustra la Opción B."
  },
  {
    "id": "mat_sim_10_p16",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una caja rectangular de cartón se diseña bajo las siguientes restricciones de producción:</p> <ul style=\"margin-left: 20px;\"> <li>El largo de la caja es exactamente el doble de su ancho.</li> <li>La altura de la caja es exactamente el cuádruple de su ancho.</li> </ul> <p>Recordando que el <b>Volumen = Ancho &times; Largo &times; Altura</b>, ¿cuál expresión algebraica representa el volumen de esta caja en términos únicamente de su ancho (<b>A</b>)?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "V = 8A³"
      },
      {
        "id": "B",
        "texto": "V = 6A³"
      },
      {
        "id": "C",
        "texto": "V = 8A"
      },
      {
        "id": "D",
        "texto": "V = A³ + 2A + 4A"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Definimos las variables: Ancho = A. Largo = 2A. Altura = 4A. El Volumen es el producto de las tres dimensiones: V = A &times; 2A &times; 4A. Al multiplicar los coeficientes (1×2×4) da 8, y al multiplicar las variables (A×A×A) da A³. Por lo tanto, V = 8A³.",
    "svg": "<svg viewBox=\"0 0 200 180\" width=\"100%\" style=\"background:#fff; max-width:250px; display:block; margin:15px auto;\">\n                        <polygon points=\"50,110 100,130 100,20 50,20\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <polygon points=\"50,110 100,130 70,160 20,140\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <polygon points=\"20,140 70,160 70,50 20,30\" fill=\"#475569\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <text x=\"35\" y=\"90\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\" transform=\"rotate(-20 35,90)\">Altura</text>\n                        <text x=\"80\" y=\"155\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\">Largo</text>\n                        <text x=\"65\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\" transform=\"rotate(-30 65,125)\">Ancho</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p17",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Se lanza una moneda normal 20 veces. Al registrar los resultados, se obtuvo 'Cara' en 12 ocasiones y 'Sello' en las 8 ocasiones restantes.</p> <p>Un estudiante concluye que, basado en este experimento, la probabilidad frecuencial de obtener Cara es <span class=\"frac\"><span>12</span><span>8</span></span>.</p> <p><strong>¿La conclusión del estudiante es matemáticamente correcta?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque se divide el evento que ocurrió más veces (12) entre el evento que ocurrió menos veces (8)."
      },
      {
        "id": "B",
        "texto": "No, porque la probabilidad se debe expresar como un porcentaje, no como una fracción."
      },
      {
        "id": "C",
        "texto": "No, porque en el denominador debe colocarse el total de lanzamientos realizados (20), no los resultados del otro evento."
      },
      {
        "id": "D",
        "texto": "Sí, porque simplificando la fracción 12/8 se obtiene 3/2, lo cual es la probabilidad real."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "La probabilidad siempre es una relación entre una 'parte' y el 'TODO'. En el denominador siempre debe ir la cantidad total de casos posibles o lanzamientos (20 en este caso). Una probabilidad jamás puede dar un número mayor que 1 (como 12/8), eso es matemáticamente imposible."
  },
  {
    "id": "mat_sim_10_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Carlos quiere ingresar a un gimnasio durante 3 meses y tiene dos opciones de pago:</p> <ul style=\"margin-left:20px;\"> <li><b>Plan A:</b> Pagar una tarifa plana mensual de $80.000 sin importar los días que asista.</li> <li><b>Plan B:</b> Pagar una inscripción única de $50.000 y luego $15.000 por cada semana que asista.</li> </ul> <p>Carlos asiste puntualmente las 4 semanas de cada uno de los 3 meses (12 semanas en total).</p> <p><strong>¿Cuál plan le resultó más económico a Carlos al finalizar los 3 meses?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El Plan A, porque pagó $240.000 frente a los $260.000 del Plan B."
      },
      {
        "id": "B",
        "texto": "El Plan B, porque pagó $230.000 frente a los $240.000 del Plan A."
      },
      {
        "id": "C",
        "texto": "El Plan A, porque al no pagar inscripción ahorró $50.000 desde el principio."
      },
      {
        "id": "D",
        "texto": "Paga exactamente lo mismo en ambos planes ($240.000)."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Calculemos. Plan A (3 meses): $80.000 &times; 3 = $240.000. Plan B (Inscripción + 12 semanas): $50.000 + ($15.000 &times; 12) = $50.000 + $180.000 = $230.000. El Plan B fue más económico ($230.000 < $240.000)."
  },
  {
    "id": "mat_sim_10_p19",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un centro comercial realizó una encuesta a 100 personas para conocer su método de pago preferido. Los resultados arrojaron que el 40% usa Tarjeta Débito, el 30% usa Efectivo, el 20% usa Tarjeta Crédito y el 10% usa Billeteras Digitales (App).</p> <p><strong>¿Qué gráfica representa correctamente estos porcentajes?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción A</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <text x=\"25\" y=\"52\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <rect x=\"42\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\"/> <!-- 40 --> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"122\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\"/> <!-- 20 --> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\"/> <!-- 10 --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Débito</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Efectivo</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Crédito</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">App</text> </svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción B</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <text x=\"25\" y=\"52\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <rect x=\"42\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"82\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\"/> <!-- 40 --> <rect x=\"122\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\"/> <!-- 20 --> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\"/> <!-- 10 --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Débito</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Efectivo</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Crédito</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">App</text> </svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción C</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <text x=\"25\" y=\"52\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <rect x=\"42\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\"/> <!-- 20 --> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"122\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\"/> <!-- 40 --> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\"/> <!-- 10 --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Débito</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Efectivo</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Crédito</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">App</text> </svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción D</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <text x=\"25\" y=\"52\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <rect x=\"42\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\"/> <!-- 40 --> <rect x=\"82\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\"/> <!-- 20 --> <rect x=\"122\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\"/> <!-- 10 --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Débito</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Efectivo</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Crédito</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">App</text> </svg></div>"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Revisando las alturas: Débito es 40% (la barra más alta), Efectivo es 30%, Crédito es 20%, App es 10%. La única gráfica que respeta este orden exacto descendente es la Opción A."
  },
  {
    "id": "mat_sim_10_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un restaurante ofrecen un \"Menú Ejecutivo\" donde el cliente debe armar su plato eligiendo <b>1 proteína</b>, <b>1 carbohidrato</b> y <b>1 ensalada</b>.</p> <p>Las opciones disponibles son:</p> <ul style=\"margin-left:20px;\"> <li><b>Proteínas (3):</b> Pollo, Carne, Pescado.</li> <li><b>Carbohidratos (4):</b> Arroz, Papa, Yuca, Pasta.</li> <li><b>Ensaladas (2):</b> Verde, Rusa.</li> </ul> <p><strong>¿Cuántas combinaciones diferentes de Menú Ejecutivo se pueden armar en este restaurante?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "9 combinaciones"
      },
      {
        "id": "B",
        "texto": "24 combinaciones"
      },
      {
        "id": "C",
        "texto": "12 combinaciones"
      },
      {
        "id": "D",
        "texto": "3 combinaciones"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Por el principio multiplicativo de probabilidad y combinatoria, multiplicamos las opciones de cada categoría: 3 (proteínas) &times; 4 (carbohidratos) &times; 2 (ensaladas) = 24 combinaciones posibles."
  },
  {
    "id": "mat_sim_10_p21",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un ingeniero diseña un puente sostenido por columnas rectangulares idénticas. Cada columna tiene un ancho <b>C</b> y la distancia de separación entre una columna y la siguiente es de <b>2C</b>.</p> <p>Si el puente tiene <b>n</b> columnas, sabiendo que empieza y termina exactamente en una columna, la longitud total del puente está dada por la expresión:</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "3nC - 2C"
      },
      {
        "id": "B",
        "texto": "3nC + 2C"
      },
      {
        "id": "C",
        "texto": "nC + 2C"
      },
      {
        "id": "D",
        "texto": "3nC"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Si hay 'n' columnas, estas ocupan un ancho de n×C. El número de espacios vacíos entre ellas será siempre (n-1), y cada espacio mide 2C. La suma total es: nC + (n-1)2C = nC + 2nC - 2C = 3nC - 2C.",
    "svg": "<svg viewBox=\"0 0 350 120\" width=\"100%\" style=\"background:#fff; max-width:400px; display:block; margin:15px auto;\">\n                        <rect x=\"50\" y=\"30\" width=\"250\" height=\"15\" fill=\"#94a3b8\" stroke=\"#333\"/>\n                        <rect x=\"60\" y=\"45\" width=\"20\" height=\"50\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n                        <rect x=\"120\" y=\"45\" width=\"20\" height=\"50\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n                        <rect x=\"180\" y=\"45\" width=\"20\" height=\"50\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n                        <rect x=\"240\" y=\"45\" width=\"20\" height=\"50\" fill=\"#cbd5e1\" stroke=\"#333\"/>\n                        \n                        <!-- Cota columna -->\n                        <line x1=\"60\" y1=\"105\" x2=\"80\" y2=\"105\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"60\" y1=\"102\" x2=\"60\" y2=\"108\" stroke=\"#000\"/> <line x1=\"80\" y1=\"102\" x2=\"80\" y2=\"108\" stroke=\"#000\"/>\n                        <text x=\"70\" y=\"115\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">C</text>\n\n                        <!-- Cota espacio -->\n                        <line x1=\"80\" y1=\"105\" x2=\"120\" y2=\"105\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"120\" y1=\"102\" x2=\"120\" y2=\"108\" stroke=\"#000\"/>\n                        <text x=\"100\" y=\"115\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">2C</text>\n                        \n                        <!-- Cota total -->\n                        <line x1=\"60\" y1=\"15\" x2=\"260\" y2=\"15\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"60\" y1=\"10\" x2=\"60\" y2=\"20\" stroke=\"#000\"/> <line x1=\"260\" y1=\"10\" x2=\"260\" y2=\"20\" stroke=\"#000\"/>\n                        <text x=\"160\" y=\"10\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Longitud Total</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p22",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En el siguiente plano se representan dos ecuaciones lineales que forman un sistema.</p> <p><strong>¿Cuál es la solución gráfica (el punto de intersección) de este sistema de ecuaciones?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "( 2 , 4 )"
      },
      {
        "id": "B",
        "texto": "( 4 , 2 )"
      },
      {
        "id": "C",
        "texto": "( 6 , 0 )"
      },
      {
        "id": "D",
        "texto": "( -2 , 2 )"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Visualmente, el punto negro donde se cruzan está alineado con el 4 en el eje X y con el 2 en el eje Y. Matemáticamente, igualando y = 6 - x y y = x - 2, obtenemos 6 - x = x - 2 ➔ 8 = 2x ➔ x = 4. Reemplazando x, y = 4 - 2 = 2. El punto es (4, 2).",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:15px auto;\">\n                        <defs><marker id=\"arrow22\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <!-- Grid 20px = 1 unidad -->\n                        <pattern id=\"grid22\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/></pattern>\n                        <rect x=\"20\" y=\"20\" width=\"260\" height=\"140\" fill=\"url(#grid22)\" />\n                        \n                        <!-- Ejes (Origen en 40, 140) -->\n                        <line x1=\"40\" y1=\"140\" x2=\"280\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow22)\"/>\n                        <line x1=\"40\" y1=\"140\" x2=\"40\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow22)\"/>\n                        <text x=\"285\" y=\"145\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"10\">x</text>\n                        <text x=\"30\" y=\"15\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"10\">y</text>\n                        \n                        <!-- X Labels -->\n                        <text x=\"80\" y=\"155\" font-size=\"10\" text-anchor=\"middle\">2</text>\n                        <text x=\"120\" y=\"155\" font-size=\"10\" text-anchor=\"middle\">4</text>\n                        <text x=\"160\" y=\"155\" font-size=\"10\" text-anchor=\"middle\">6</text>\n                        <text x=\"200\" y=\"155\" font-size=\"10\" text-anchor=\"middle\">8</text>\n\n                        <!-- Y Labels -->\n                        <text x=\"35\" y=\"104\" font-size=\"10\" text-anchor=\"end\">2</text>\n                        <text x=\"35\" y=\"64\" font-size=\"10\" text-anchor=\"end\">4</text>\n                        \n                        <!-- Recta 1: x + y = 6 -> y = 6 - x. Cruza (0,6)->(40,20) y (6,0)->(160,140) -->\n                        <line x1=\"40\" y1=\"20\" x2=\"160\" y2=\"140\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <text x=\"100\" y=\"50\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"12\" fill=\"#1e3a8a\">x + y = 6</text>\n\n                        <!-- Recta 2: -x + y = -2 -> y = x - 2. Cruza (2,0)->(80,140) y (6,4)->(160,60) -->\n                        <!-- Intersección: 6 - x = x - 2 -> 2x = 8 -> x = 4. y = 2. Punto: (4, 2) -> (120, 100) -->\n                        <line x1=\"60\" y1=\"160\" x2=\"180\" y2=\"40\" stroke=\"#be123c\" stroke-width=\"2\"/>\n                        <text x=\"180\" y=\"60\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"12\" fill=\"#be123c\">-x + y = -2</text>\n                        \n                        <circle cx=\"120\" cy=\"100\" r=\"4\" fill=\"#000\"/>\n                    </svg>"
  },
  {
    "id": "mat_sim_10_p23",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un test de inteligencia pide continuar la siguiente secuencia numérica, donde cada término nuevo se obtiene aplicando la misma regla matemática al anterior:</p> <div style=\"font-size: 1.8rem; font-weight: bold; color: var(--primary); text-align: center; margin: 15px 0;\">3, &nbsp; 9, &nbsp; 27, &nbsp; 81, &nbsp; ...</div> <p><strong>¿Cuál es el quinto número de esta secuencia y qué regla se aplicó?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Es 243, porque la regla es multiplicar por 3 el número anterior."
      },
      {
        "id": "B",
        "texto": "Es 162, porque la regla es multiplicar por 2 el número anterior."
      },
      {
        "id": "C",
        "texto": "Es 105, porque la regla es sumar 24 al número anterior."
      },
      {
        "id": "D",
        "texto": "Es 243, porque la regla es elevar al cubo el número anterior."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Revisamos el patrón: 3 × 3 = 9. 9 × 3 = 27. 27 × 3 = 81. Se trata de una progresión geométrica cuya razón es multiplicar por 3. El siguiente término será 81 × 3 = 243."
  },
  {
    "id": "mat_sim_10_p24",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un analista financiero organizó en una tabla los gastos mensuales de una familia en diferentes rubros, pero olvidó ordenarlos de mayor a menor como le solicitó el banco.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Rubro</th><th>Gasto Mensual</th></tr> <tr><td>Alimentación</td><td>$850.000</td></tr> <tr><td>Transporte</td><td>$230.000</td></tr> <tr><td>Vivienda</td><td>$1.200.000</td></tr> <tr><td>Servicios</td><td>$310.000</td></tr> <tr><td>Educación</td><td>$600.000</td></tr> </table> <p><strong>¿Cuál es el orden correcto de los rubros si se organizan del gasto más alto al más bajo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Vivienda, Alimentación, Educación, Servicios, Transporte."
      },
      {
        "id": "B",
        "texto": "Vivienda, Alimentación, Servicios, Educación, Transporte."
      },
      {
        "id": "C",
        "texto": "Transporte, Servicios, Educación, Alimentación, Vivienda."
      },
      {
        "id": "D",
        "texto": "Vivienda, Educación, Alimentación, Servicios, Transporte."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Identificamos los valores de mayor a menor: 1.200.000 (Vivienda) > 850.000 (Alimentación) > 600.000 (Educación) > 310.000 (Servicios) > 230.000 (Transporte)."
  },
  {
    "id": "mat_sim_10_p25",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un dron de vigilancia despega y vuela 5 kilómetros en dirección Norte. Luego, gira 90 grados y vuela 12 kilómetros en dirección Este.</p> <p><strong>Aplicando el Teorema de Pitágoras, ¿a qué distancia en línea recta se encuentra el dron desde su punto de inicio?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "17 km"
      },
      {
        "id": "B",
        "texto": "13 km"
      },
      {
        "id": "C",
        "texto": "7 km"
      },
      {
        "id": "D",
        "texto": "60 km"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Los recorridos Norte y Este forman los catetos de un triángulo rectángulo. Para hallar la hipotenusa (distancia directa) aplicamos Pitágoras: c² = a² + b². Así, c² = 5² + 12² = 25 + 144 = 169. La raíz cuadrada de 169 es 13.",
    "svg": "<svg viewBox=\"0 0 200 150\" width=\"100%\" style=\"background:#fff; max-width:250px; display:block; margin:15px auto; border:1px solid #ccc; border-radius:8px;\">\n                        <!-- Camino -->\n                        <polyline points=\"40,120 40,40 160,40\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n                        <!-- Diagonal -->\n                        <line x1=\"40\" y1=\"120\" x2=\"160\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <!-- Puntos -->\n                        <circle cx=\"40\" cy=\"120\" r=\"4\" fill=\"#000\"/><text x=\"25\" y=\"130\" font-size=\"10\" font-weight=\"bold\">Inicio</text>\n                        <circle cx=\"160\" cy=\"40\" r=\"4\" fill=\"#000\"/><text x=\"165\" y=\"35\" font-size=\"10\" font-weight=\"bold\">Dron</text>\n                        \n                        <text x=\"20\" y=\"80\" font-family=\"Georgia\" font-size=\"11\">5 km</text>\n                        <text x=\"100\" y=\"30\" font-family=\"Georgia\" font-size=\"11\">12 km</text>\n                        <text x=\"100\" y=\"90\" font-family=\"Georgia\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e3a8a\">Distancia = ?</text>\n                    </svg>"
  }
]);
