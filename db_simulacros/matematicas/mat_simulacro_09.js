// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas - Simulacro Matemáticas 09 (Sesión 2 2025)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_09_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una fábrica de helados produce conos de galleta. El departamento de diseño establece que el cono debe tener un diámetro exacto de 6 cm en la base superior y una altura de 8 cm.</p> <p>El ingeniero aplica la fórmula del volumen de un cono (V = <span class=\"frac\"><span>&pi;r²h</span><span>3</span></span>) y realiza este cálculo:</p> <p style=\"text-align:center; font-family:Georgia; font-weight:bold; font-size:1.1rem;\">V = <span class=\"frac\"><span>&pi; &times; (6)² &times; 8</span><span>3</span></span> = 96&pi;</p> <p><strong>¿Cuál fue el error que cometió el ingeniero en su procedimiento?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El error fue dividir todo entre 3, ya que la fórmula del cono no lleva denominador."
      },
      {
        "id": "B",
        "texto": "El error fue multiplicar la altura por el radio al cuadrado antes de aplicar la constante &pi;."
      },
      {
        "id": "C",
        "texto": "El error fue utilizar el diámetro (6) en lugar del radio (3) al momento de aplicar la fórmula."
      },
      {
        "id": "D",
        "texto": "El error fue no elevar la altura al cuadrado, como se hace en todas las figuras tridimensionales."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "La fórmula del cono requiere el radio (r). El radio es la mitad del diámetro (6/2 = 3). El ingeniero utilizó el diámetro completo (6) en lugar del radio. El cálculo correcto sería V = &pi;(3)²(8) / 3 = 24&pi;.",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"100%\" style=\"background:#fff; max-width:200px; display:block; margin:15px auto; border-radius:8px; border:1px solid var(--border-glass);\">\n                        <ellipse cx=\"100\" cy=\"40\" rx=\"60\" ry=\"15\" fill=\"#fef3c7\" stroke=\"#b45309\" stroke-width=\"2\"/>\n                        <path d=\"M 40 40 L 100 160 L 160 40 Z\" fill=\"#fde68a\" stroke=\"#b45309\" stroke-width=\"2\"/>\n                        \n                        <!-- Cota Diámetro -->\n                        <line x1=\"40\" y1=\"40\" x2=\"160\" y2=\"40\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4\"/>\n                        <text x=\"100\" y=\"30\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">d = 6 cm</text>\n                        \n                        <!-- Cota Altura -->\n                        <line x1=\"175\" y1=\"40\" x2=\"175\" y2=\"160\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"170\" y1=\"40\" x2=\"180\" y2=\"40\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"170\" y1=\"160\" x2=\"180\" y2=\"160\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"182\" y=\"105\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"start\">h = 8 cm</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p2",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un concesionario presenta un informe de ventas mensuales de 4 marcas de vehículos. Los datos reales de ventas fueron:</p> <table class=\"data-table\" style=\"max-width: 300px; margin: 10px auto;\"> <tr><th>Marca</th><th>Autos vendidos</th></tr> <tr><td>Toyota</td><td>40</td></tr> <tr><td>Kia</td><td>30</td></tr> <tr><td>Ford</td><td>20</td></tr> <tr><td>Mazda</td><td>10</td></tr> </table> <p>El gerente de publicidad, para favorecer a una marca en específico, elabora el siguiente gráfico circular:</p> <p><strong>¿La gráfica representa de manera honesta y proporcional los datos de la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque aparecen las cuatro marcas registradas en la tabla original."
      },
      {
        "id": "B",
        "texto": "No, porque el sector que representa a Mazda es visualmente más grande que el de Ford, cuando 10 es menor que 20."
      },
      {
        "id": "C",
        "texto": "Sí, porque los cuatro sectores completan perfectamente el 100% del círculo."
      },
      {
        "id": "D",
        "texto": "No, porque el color de Toyota debería ser más claro para representar mayor volumen."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Al cruzar los datos de la tabla con el gráfico, la porción de Mazda (10 ventas) es dibujada engañosamente más grande que la porción de Ford (20 ventas), lo que invalida la gráfica estadística.",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"250\" style=\"margin: 10px auto; display: block;\">\n                        <!-- Toyota 40% (Correct) -->\n                        <path d=\"M100,100 L100,20 A80,80 0 0,1 176,124 Z\" fill=\"#1e3a8a\" stroke=\"#fff\" stroke-width=\"2\"/>\n                        <!-- Kia 30% (Correct) -->\n                        <path d=\"M100,100 L176,124 A80,80 0 0,1 53,164 Z\" fill=\"#be123c\" stroke=\"#fff\" stroke-width=\"2\"/>\n                        <!-- Mazda (Should be 10%, drawn as 20% or bigger) -->\n                        <path d=\"M100,100 L53,164 A80,80 0 0,1 25,75 Z\" fill=\"#f59e0b\" stroke=\"#fff\" stroke-width=\"2\"/>\n                        <!-- Ford (Should be 20%, drawn as 10% or smaller) -->\n                        <path d=\"M100,100 L25,75 A80,80 0 0,1 100,20 Z\" fill=\"#9ca3af\" stroke=\"#fff\" stroke-width=\"2\"/>\n                        \n                        <rect x=\"150\" y=\"40\" width=\"40\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"170\" y=\"50\" font-size=\"8\" text-anchor=\"middle\">Toyota</text>\n                        <rect x=\"130\" y=\"160\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"145\" y=\"170\" font-size=\"8\" text-anchor=\"middle\">Kia</text>\n                        <rect x=\"20\" y=\"140\" width=\"35\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"37\" y=\"150\" font-size=\"8\" text-anchor=\"middle\">Mazda</text>\n                        <rect x=\"25\" y=\"30\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"40\" y=\"40\" font-size=\"8\" text-anchor=\"middle\">Ford</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p3",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un colegio organizó un concurso de lectura. El siguiente diagrama de barras representa la cantidad de libros leídos por cuatro salones de clase durante un mes.</p> <p><strong>¿Cuál fue el salón ganador al registrar la mayor cantidad de libros leídos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Salón 11A"
      },
      {
        "id": "B",
        "texto": "Salón 11B"
      },
      {
        "id": "C",
        "texto": "Salón 11C"
      },
      {
        "id": "D",
        "texto": "Salón 11D"
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "Visualmente, la barra que alcanza la mayor altura en el eje vertical (situándose en 35 unidades) es la correspondiente al salón 11D.",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:0 auto;\">\n                        <text x=\"150\" y=\"20\" text-anchor=\"middle\" font-weight=\"bold\" font-size=\"12\">Libros Leídos por Salón</text>\n                        <line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#000\"/>\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"30\" stroke=\"#000\"/>\n                        \n                        <text x=\"30\" y=\"45\" font-size=\"10\">40</text> <line x1=\"38\" y1=\"40\" x2=\"42\" y2=\"40\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"75\" font-size=\"10\">30</text> <line x1=\"38\" y1=\"70\" x2=\"42\" y2=\"70\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"105\" font-size=\"10\">20</text> <line x1=\"38\" y1=\"100\" x2=\"42\" y2=\"100\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"135\" font-size=\"10\">10</text> <line x1=\"38\" y1=\"130\" x2=\"42\" y2=\"130\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"165\" font-size=\"10\">0</text>\n                        \n                        <!-- Barras. Max 40 = 120px -> 3px = 1 unidad -->\n                        <!-- 11A: 15 (160 - 45 = 115) -->\n                        <rect x=\"60\" y=\"115\" width=\"30\" height=\"45\" fill=\"#2563eb\" stroke=\"#000\"/>\n                        <!-- 11B: 25 (160 - 75 = 85) -->\n                        <rect x=\"110\" y=\"85\" width=\"30\" height=\"75\" fill=\"#2563eb\" stroke=\"#000\"/>\n                        <!-- 11C: 10 (160 - 30 = 130) -->\n                        <rect x=\"160\" y=\"130\" width=\"30\" height=\"30\" fill=\"#2563eb\" stroke=\"#000\"/>\n                        <!-- 11D: 35 (160 - 105 = 55) -->\n                        <rect x=\"210\" y=\"55\" width=\"30\" height=\"105\" fill=\"#2563eb\" stroke=\"#000\"/>\n                        \n                        <text x=\"75\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">11A</text>\n                        <text x=\"125\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">11B</text>\n                        <text x=\"175\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">11C</text>\n                        <text x=\"225\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">11D</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un panadero artesanal calcula que preparar una torta le cuesta $12.000 en ingredientes. Él vende cada torta terminada por $20.000 a sus clientes.</p> <p><strong>¿Cuál de las siguientes expresiones le permite al panadero calcular su ganancia neta total si logra vender <b>x</b> tortas?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "($20.000 - $12.000) &times; x"
      },
      {
        "id": "B",
        "texto": "$20.000 &times; x - $12.000"
      },
      {
        "id": "C",
        "texto": "($20.000 + $12.000) &times; x"
      },
      {
        "id": "D",
        "texto": "$12.000 &times; x - $20.000"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "La ganancia neta de una sola torta es el precio de venta menos el costo de producción ($20.000 - $12.000). Para hallar la ganancia de todo el lote, esta resta debe multiplicarse por la cantidad de tortas vendidas (x)."
  },
  {
    "id": "mat_sim_09_p5",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un colegio cuenta con 1.000 estudiantes: 600 niños y 400 niñas. La rectoría desea realizar una encuesta para saber cuál es el deporte favorito de los estudiantes.</p> <p style=\"margin: 15px 0; padding: 15px; border-left: 4px solid var(--secondary); background: var(--bg-body); border-radius: 8px; font-family: 'Georgia', serif;\"> <strong>Método propuesto:</strong> Seleccionar y encuestar únicamente a los 100 niños que pertenecen al equipo oficial de fútbol del colegio. </p> <p><strong>El procedimiento propuesto NO es adecuado estadísticamente. ¿Por qué?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Porque 100 estudiantes es una muestra demasiado grande y sería muy costoso tabularla."
      },
      {
        "id": "B",
        "texto": "Porque la muestra está sesgada: excluye la opinión de las niñas y de quienes practican otros deportes."
      },
      {
        "id": "C",
        "texto": "Porque el equipo de fútbol debería tener al menos 200 integrantes para ser válido."
      },
      {
        "id": "D",
        "texto": "Porque no se encuestó a los profesores del colegio."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Una muestra debe ser representativa de toda la población. Al elegir solo a niños y solo a aquellos que ya juegan fútbol, los resultados estarán totalmente inclinados hacia ese deporte, ignorando la diversidad real del colegio."
  },
  {
    "id": "mat_sim_09_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una estación meteorológica registra la temperatura media mensual de tres ciudades durante cuatro meses. Los datos se muestran en la tabla:</p> <table class=\"data-table\" style=\"max-width: 400px; margin: 10px auto; font-size: 0.9rem;\"> <tr><th>Ciudad</th><th>Mes 1</th><th>Mes 2</th><th>Mes 3</th><th>Mes 4</th></tr> <tr><td>Cartagena</td><td>30</td><td>32</td><td>28</td><td>30</td></tr> <tr><td>Bogotá</td><td>14</td><td>15</td><td>12</td><td>14</td></tr> <tr><td>Tunja</td><td>10</td><td>8</td><td>11</td><td>9</td></tr> </table> <p>Al generar la gráfica de líneas, un pasante cometió un error tipográfico en uno de los puntos.</p> <p><strong>Al cruzar los datos de la gráfica y la tabla, ¿en dónde radica el error de digitación?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "En el Mes 2 para Bogotá, donde se graficó 25°C en lugar de 15°C."
      },
      {
        "id": "B",
        "texto": "En el Mes 3 para Cartagena, donde se graficó 32°C en lugar de 28°C."
      },
      {
        "id": "C",
        "texto": "En el Mes 1 para Tunja, donde el triángulo está sobre la línea del 20."
      },
      {
        "id": "D",
        "texto": "No hay errores, la gráfica es fiel a la tabla."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Si observas la línea azul de círculos (Bogotá) en el Mes 2, el punto se dispara hacia arriba hasta quedar en la mitad entre el 20 y el 30 (es decir, en 25). Sin embargo, la tabla indica que la temperatura real de Bogotá ese mes fue de 15.",
    "svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:10px auto;\">\n                        <defs><marker id=\"arrowS3\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <!-- Grid -->\n                        <g stroke=\"#e2e8f0\" stroke-width=\"1\">\n                            <line x1=\"40\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                            <line x1=\"40\" y1=\"120\" x2=\"330\" y2=\"120\"/>\n                            <line x1=\"40\" y1=\"80\" x2=\"330\" y2=\"80\"/>\n                            <line x1=\"40\" y1=\"40\" x2=\"330\" y2=\"40\"/>\n                        </g>\n                        <!-- Y Axis -->\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowS3)\"/>\n                        <text x=\"35\" y=\"163\" font-size=\"9\" text-anchor=\"end\">0</text>\n                        <text x=\"35\" y=\"123\" font-size=\"9\" text-anchor=\"end\">10</text>\n                        <text x=\"35\" y=\"83\" font-size=\"9\" text-anchor=\"end\">20</text>\n                        <text x=\"35\" y=\"43\" font-size=\"9\" text-anchor=\"end\">30</text>\n                        <!-- X Axis -->\n                        <text x=\"80\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">M 1</text>\n                        <text x=\"150\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">M 2</text>\n                        <text x=\"220\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">M 3</text>\n                        <text x=\"290\" y=\"175\" font-size=\"9\" text-anchor=\"middle\">M 4</text>\n                        \n                        <!-- Cartagena (Cuadrados) - Datos: 30, 32, 28, 30 -->\n                        <polyline points=\"80,40 150,32 220,48 290,40\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/>\n                        <rect x=\"77\" y=\"37\" width=\"6\" height=\"6\" fill=\"#be123c\"/>\n                        <rect x=\"147\" y=\"29\" width=\"6\" height=\"6\" fill=\"#be123c\"/>\n                        <rect x=\"217\" y=\"45\" width=\"6\" height=\"6\" fill=\"#be123c\"/>\n                        <rect x=\"287\" y=\"37\" width=\"6\" height=\"6\" fill=\"#be123c\"/>\n\n                        <!-- Bogotá (Círculos) - Datos tabla: 14, 15, 12, 14 -->\n                        <!-- ERROR INTENCIONAL en M2: Graficado en 25 en vez de 15 -->\n                        <polyline points=\"80,104 150,60 220,112 290,104\" fill=\"none\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <circle cx=\"80\" cy=\"104\" r=\"3.5\" fill=\"#1e3a8a\"/>\n                        <circle cx=\"150\" cy=\"60\" r=\"3.5\" fill=\"#1e3a8a\"/> <!-- Error aquí: y=60 es 25 grados -->\n                        <circle cx=\"220\" cy=\"112\" r=\"3.5\" fill=\"#1e3a8a\"/> \n                        <circle cx=\"290\" cy=\"104\" r=\"3.5\" fill=\"#1e3a8a\"/>\n\n                        <!-- Tunja (Triangulos) - Datos: 10, 8, 11, 9 -->\n                        <polyline points=\"80,120 150,128 220,116 290,124\" fill=\"none\" stroke=\"#0d9488\" stroke-width=\"2\"/>\n                        <polygon points=\"80,116 76,123 84,123\" fill=\"#0d9488\"/>\n                        <polygon points=\"150,124 146,131 154,131\" fill=\"#0d9488\"/>\n                        <polygon points=\"220,112 216,119 224,119\" fill=\"#0d9488\"/>\n                        <polygon points=\"290,120 286,127 294,127\" fill=\"#0d9488\"/>\n\n                        <!-- Leyenda -->\n                        <rect x=\"80\" y=\"10\" width=\"6\" height=\"6\" fill=\"#be123c\"/><text x=\"90\" y=\"16\" font-size=\"8\">Cartagena</text>\n                        <circle cx=\"150\" cy=\"13\" r=\"3\" fill=\"#1e3a8a\"/><text x=\"158\" y=\"16\" font-size=\"8\">Bogotá</text>\n                        <polygon points=\"210,10 206,16 214,16\" fill=\"#0d9488\"/><text x=\"218\" y=\"16\" font-size=\"8\">Tunja</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p7",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Las tablas muestran los datos de 4 deportistas de un club y las disciplinas que entrenan.</p> <div style=\"display:flex; gap: 20px; flex-wrap: wrap; justify-content:center;\"> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Nombre</th><th>Categoría</th><th>Deporte</th></tr> <tr><td>Mateo</td><td>Sub-15</td><td>Natación</td></tr> <tr><td>Valeria</td><td>Sub-20</td><td>Atletismo</td></tr> <tr><td>Daniel</td><td>Sub-15</td><td>Atletismo</td></tr> <tr><td>Camila</td><td>Sub-20</td><td>Natación</td></tr> </table> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Deporte</th><th>Piscina</th></tr> <tr><td>Natación</td><td>Sí</td></tr> <tr><td>Atletismo</td><td>No</td></tr> </table> </div> <p style=\"margin-top:15px;\">El club premia al estudiante que cumple con la siguiente condición: <em>\"Entrena un deporte que usa <b>piscina</b> y pertenece a la categoría <b>Sub-20</b>\"</em>.</p> <p><strong>¿Quién recibe el premio?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Mateo."
      },
      {
        "id": "B",
        "texto": "Valeria."
      },
      {
        "id": "C",
        "texto": "Daniel."
      },
      {
        "id": "D",
        "texto": "Camila."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Cruzando datos: El deporte de piscina es Natación. Quienes practican Natación son Mateo y Camila. De ellos dos, la única que pertenece a la categoría Sub-20 es Camila."
  },
  {
    "id": "mat_sim_09_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un parque rectangular de dimensiones <b>L</b> (largo) y <b>A</b> (ancho) tiene en su interior una zona circular de juegos infantiles con radio <b>r</b>.</p> <p>Se desea plantar césped en toda la zona verde del parque (el área rectangular excluyendo la zona circular de juegos).</p> <p><strong>¿Qué expresión matemática determina el área exacta de césped a plantar?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Área = L &times; A &times; &pi;r²"
      },
      {
        "id": "B",
        "texto": "Área = (L &times; A) - (&pi;r²)"
      },
      {
        "id": "C",
        "texto": "Área = (L + A) - 2&pi;r"
      },
      {
        "id": "D",
        "texto": "Área = &pi;r² - (L &times; A)"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "El área total disponible es el área del rectángulo (Largo × Ancho). A esta superficie se le debe 'restar' el espacio ocupado por la zona infantil circular (&pi;r²) para hallar el área verde restante.",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"margin: 15px auto; display:block; max-width: 300px;\">\n                        <rect x=\"50\" y=\"40\" width=\"200\" height=\"120\" fill=\"#dcfce7\" stroke=\"#16a34a\" stroke-width=\"2\"/>\n                        <circle cx=\"150\" cy=\"100\" r=\"40\" fill=\"#fef08a\" stroke=\"#ca8a04\" stroke-width=\"2\"/>\n                        \n                        <!-- Cota L y A -->\n                        <text x=\"150\" y=\"30\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\">Largo (L)</text>\n                        <text x=\"35\" y=\"105\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\" transform=\"rotate(-90 35,105)\" text-anchor=\"middle\">Ancho (A)</text>\n                        \n                        <!-- Cota r -->\n                        <line x1=\"150\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\" stroke-width=\"2\" stroke-dasharray=\"3\"/>\n                        <circle cx=\"150\" cy=\"100\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"170\" y=\"95\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\">r</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p9",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un plan de telefonía celular cobra un cargo fijo mensual de $20.000, e incluye una tarifa variable de $500 por cada minuto de llamada adicional consumido.</p> <p><strong>¿Qué ecuación permite calcular el costo total mensual <b>y</b> del plan si se consumen <b>x</b> minutos adicionales?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "y = 20.000x + 500"
      },
      {
        "id": "B",
        "texto": "y = 20.500x"
      },
      {
        "id": "C",
        "texto": "y = (20.000 + 500) &times; x"
      },
      {
        "id": "D",
        "texto": "y = 20.000 + 500x"
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Esta es una función lineal y = mx + b. El cargo base que no depende del uso es b = 20.000. El cargo variable (pendiente) que se multiplica por los minutos consumidos (x) es m = 500."
  },
  {
    "id": "mat_sim_09_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una feria, se introduce un conjunto de 50 esferas numeradas del 1 al 50 en una tómbola opaca. Un participante compra 5 boletos que le dan derecho a elegir 5 esferas ganadoras.</p> <p><strong>¿Cuál es la probabilidad matemática de que el participante gane el premio mayor en el primer intento al sacar una esfera al azar?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>1</span><span>5</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>5</span><span>50</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>50</span><span>5</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>1</span><span>50</span></span>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "La probabilidad es la división de los casos a favor entre los casos totales. El participante tiene 5 opciones a su favor dentro de un universo de 50 esferas totales. La probabilidad es 5/50."
  },
  {
    "id": "mat_sim_09_p11",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una persona revisa los extractos de su cuenta de ahorros durante el primer semestre del año.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Mes</th><th>Saldo de la cuenta</th></tr> <tr><td>Enero</td><td>$120.000</td></tr> <tr><td>Febrero</td><td>$95.000</td></tr> <tr><td>Marzo</td><td>$70.000</td></tr> <tr><td>Abril</td><td>$40.000</td></tr> <tr><td>Mayo</td><td>$25.000</td></tr> <tr><td>Junio</td><td>$60.000</td></tr> </table> <p><strong>De acuerdo con el extracto, ¿en qué mes el saldo de la cuenta de ahorros cayó, por primera vez, por debajo de los $50.000?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Febrero"
      },
      {
        "id": "B",
        "texto": "Marzo"
      },
      {
        "id": "C",
        "texto": "Abril"
      },
      {
        "id": "D",
        "texto": "Mayo"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Haciendo un recorrido cronológico: Ene(120), Feb(95), Mar(70). En estos meses el saldo era superior a 50k. Es exactamente en el mes de Abril cuando el saldo baja a 40k, cruzando la barrera hacia abajo por primera vez."
  },
  {
    "id": "mat_sim_09_p12",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Observa el triángulo rectángulo en el plano cartesiano. Fíjate en el ángulo &beta; marcado en el vértice <b>C</b>.</p> <p><strong>En trigonometría, respecto al ángulo &beta; marcado, ¿cuál segmento representa el cateto adyacente?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El segmento AC"
      },
      {
        "id": "B",
        "texto": "El segmento AB"
      },
      {
        "id": "C",
        "texto": "El segmento BC"
      },
      {
        "id": "D",
        "texto": "La línea punteada"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "En un triángulo rectángulo, el 'cateto adyacente' es el lado que ayuda a formar el ángulo junto con la hipotenusa. El ángulo &beta; está en el vértice C, por lo que el cateto que lo toca es la línea base horizontal que va de B a C (segmento BC).",
    "svg": "<svg viewBox=\"0 0 250 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:350px; display:block; margin:10px auto;\">\n                        <defs><marker id=\"arrowS3\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <!-- Cuadrícula -->\n                        <pattern id=\"gridS3\" width=\"20\" height=\"20\" patternUnits=\"userSpaceOnUse\"><path d=\"M 20 0 L 0 0 0 20\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"1\"/></pattern>\n                        <rect width=\"100%\" height=\"100%\" fill=\"url(#gridS3)\" />\n                        \n                        <line x1=\"0\" y1=\"140\" x2=\"250\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowS3)\"/>\n                        <line x1=\"60\" y1=\"200\" x2=\"60\" y2=\"0\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowS3)\"/>\n                        \n                        <!-- Triángulo: A(60,60), B(60,140), C(200,140) -->\n                        <polygon points=\"60,60 60,140 200,140\" fill=\"rgba(16,185,129,0.1)\" stroke=\"var(--success)\" stroke-width=\"3\"/>\n                        <circle cx=\"60\" cy=\"60\" r=\"4\" fill=\"#000\"/> <text x=\"50\" y=\"55\" font-weight=\"bold\">A</text>\n                        <circle cx=\"60\" cy=\"140\" r=\"4\" fill=\"#000\"/> <text x=\"45\" y=\"155\" font-weight=\"bold\">B</text>\n                        <circle cx=\"200\" cy=\"140\" r=\"4\" fill=\"#000\"/> <text x=\"210\" y=\"155\" font-weight=\"bold\">C</text>\n                        \n                        <!-- 90 deg at B -->\n                        <path d=\"M 60 130 L 70 130 L 70 140\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <!-- Angle beta at C -->\n                        <path d=\"M 180 140 A 20 20 0 0 1 183 130\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/>\n                        <text x=\"170\" y=\"132\" font-family=\"Georgia\" font-weight=\"bold\" fill=\"#be123c\">&beta;</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un laboratorio monitorea el crecimiento de un compuesto químico con el paso de los días (x), registrando la masa en gramos (y).</p> <table class=\"data-table\" style=\"max-width: 200px; margin: 10px auto;\"> <tr><th style=\"background:#e2e8f0; color:#000;\">Día (x)</th><td>0</td><td>1</td><td>2</td><td>3</td></tr> <tr><th style=\"background:#e2e8f0; color:#000;\">Gramos (y)</th><td>2</td><td>3</td><td>6</td><td>11</td></tr> </table> <p><strong>¿Cuál de los siguientes modelos matemáticos describe a la perfección los datos de la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "y = 2x + 1"
      },
      {
        "id": "B",
        "texto": "y = x² + 2"
      },
      {
        "id": "C",
        "texto": "y = 3x - 1"
      },
      {
        "id": "D",
        "texto": "y = x³ + 2"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Probamos los datos en la ecuación y = x² + 2. Si x=0: y = 0² + 2 = 2. Si x=1: y = 1² + 2 = 3. Si x=2: y = 2² + 2 = 6. Si x=3: y = 3² + 2 = 11. La ecuación cuadra con todos los valores exactos de la tabla."
  },
  {
    "id": "mat_sim_09_p14",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un contratista nota que el tiempo que tarda en pintar una casa depende de cuántos pintores contrate para la obra. El registro de obras anteriores es:</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Cant. Pintores</th><th>Días de Trabajo</th></tr> <tr><td>2</td><td>10</td></tr> <tr><td>4</td><td>5</td></tr> <tr><td>5</td><td>4</td></tr> </table> <p><strong>¿Qué tipo de relación proporcional existe entre estas dos variables?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Directamente proporcional, porque a mayor cantidad de pintores, más días demoran."
      },
      {
        "id": "B",
        "texto": "Inversamente proporcional, porque al multiplicar ambas variables el resultado (k) siempre es 20."
      },
      {
        "id": "C",
        "texto": "No hay relación proporcional, los valores son aleatorios."
      },
      {
        "id": "D",
        "texto": "Directamente proporcional al cuadrado, porque 4 es el doble de 2."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "La relación inversa indica que si una variable sube, la otra baja en la misma proporción, manteniendo el producto constante. Comprobación: 2×10=20, 4×5=20, 5×4=20. El producto constante K es 20."
  },
  {
    "id": "mat_sim_09_p15",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un servicio de taxis en Bogotá establece su tarifa de la siguiente manera: $4.000 como tarifa base obligatoria que cubre los primeros 2 kilómetros del viaje. A partir del tercer kilómetro, se cobra un valor adicional por cada kilómetro recorrido.</p> <p>¿Qué gráfica geométrica representa de forma exacta el comportamiento de esta tarifa?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center;\"><b>Opción A</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">4k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">2 km</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,100 80,70 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center;\"><b>Opción B</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">4k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">2 km</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,70 80,70 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center;\"><b>Opción C</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">4k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">2 km</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><line x1=\"20\" y1=\"70\" x2=\"180\" y2=\"70\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center;\"><b>Opción D</b><br><svg viewBox=\"0 0 200 120\" height=\"100\"><line x1=\"20\" y1=\"100\" x2=\"180\" y2=\"100\" stroke=\"#000\"/><line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\"/><text x=\"15\" y=\"70\" font-size=\"8\" text-anchor=\"end\">4k</text><line x1=\"18\" y1=\"70\" x2=\"22\" y2=\"70\" stroke=\"#000\"/><text x=\"70\" y=\"112\" font-size=\"8\">2 km</text><line x1=\"80\" y1=\"98\" x2=\"80\" y2=\"102\" stroke=\"#000\"/><polyline points=\"20,70 80,100 160,20\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\"/></svg></div>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Es una función definida a trozos. Desde 0 km hasta los 2 km, el usuario debe pagar una tarifa plana de $4.000, lo que dibuja una línea completamente horizontal. Al sobrepasar los 2 km, cada metro suma dinero al costo, formando una línea diagonal ascendente. La gráfica correcta es la B."
  },
  {
    "id": "mat_sim_09_p16",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una fábrica de empaques se diseña un prisma rectangular de cartón rígido basándose en una sola medida base: la altura (<b>H</b>).</p> <ul style=\"margin-left: 20px;\"> <li>El largo del prisma equivale a 3 veces su altura.</li> <li>El ancho del prisma equivale a la mitad de su altura.</li> </ul> <p>Sabiendo que el <b>Volumen = Ancho &times; Largo &times; Altura</b>, ¿cuál de las siguientes expresiones algebraicas indica el volumen del empaque?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "V = <span class=\"frac\"><span>3</span><span>2</span></span>H³"
      },
      {
        "id": "B",
        "texto": "V = 3H³"
      },
      {
        "id": "C",
        "texto": "V = <span class=\"frac\"><span>1</span><span>2</span></span>H³"
      },
      {
        "id": "D",
        "texto": "V = 3.5H"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Planteamos las variables: Altura = H. Largo = 3H. Ancho = H/2. Multiplicamos las tres para hallar el volumen: V = H &times; 3H &times; (H/2). Multiplicamos coeficientes: 1 &times; 3 &times; 1/2 = 3/2. Multiplicamos letras: H &times; H &times; H = H³. Queda V = (3/2)H³.",
    "svg": "<svg viewBox=\"0 0 200 180\" width=\"100%\" style=\"background:#fff; max-width:250px; display:block; margin:15px auto;\">\n                        <polygon points=\"50,110 100,130 100,20 50,20\" fill=\"#94a3b8\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <polygon points=\"50,110 100,130 70,160 20,140\" fill=\"#64748b\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <polygon points=\"20,140 70,160 70,50 20,30\" fill=\"#475569\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <text x=\"35\" y=\"90\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\" transform=\"rotate(-20 35,90)\">Altura</text>\n                        <text x=\"80\" y=\"155\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\">Largo</text>\n                        <text x=\"65\" y=\"125\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\" transform=\"rotate(-30 65,125)\">Ancho</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p17",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una bolsa negra de terciopelo hay exactamente 4 bolas rojas y 6 bolas azules.</p> <p>Un estudiante mete la mano, saca una bola al azar y afirma: <em>\"Como hay 4 bolas rojas de un total de 6 azules, la probabilidad de que me salga una bola roja es de <span class=\"frac\"><span>4</span><span>6</span></span>\".</em></p> <p><strong>¿La conclusión probabilística del estudiante es correcta?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque divide los casos que le sirven (4) entre los casos que no le sirven (6)."
      },
      {
        "id": "B",
        "texto": "No, porque en el denominador siempre debe ir la cantidad TOTAL de bolas dentro de la bolsa, que en este caso es 10."
      },
      {
        "id": "C",
        "texto": "Sí, la fracción 4/6 se puede simplificar a 2/3, lo cual es la respuesta real."
      },
      {
        "id": "D",
        "texto": "No, porque la probabilidad de sacar cualquier bola siempre es del 50%."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "La regla fundamental de la probabilidad simple (Regla de Laplace) dicta que se dividen los casos a favor sobre el TOTAL de casos posibles. El total de bolas es 4 rojas + 6 azules = 10 bolas. La probabilidad real es 4/10."
  },
  {
    "id": "mat_sim_09_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Carlos quiere contratar un servicio de películas en línea por 6 meses. Existen dos promociones vigentes:</p> <ul style=\"margin-left:20px;\"> <li><b>Plan Clásico:</b> Pagar un valor fijo de $15.000 por cada mes de servicio.</li> <li><b>Plan Trimestral:</b> Pagar una cuota inicial de $40.000 que te cubre 3 meses enteros, y luego renovar por otros 3 meses al mismo costo.</li> </ul> <p><strong>Al cabo de los 6 meses que Carlos necesita, ¿qué opción representa el menor gasto total para su bolsillo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El Plan Trimestral, porque gasta $80.000 en lugar de $90.000."
      },
      {
        "id": "B",
        "texto": "El Plan Clásico, porque gasta $60.000 en lugar de $80.000."
      },
      {
        "id": "C",
        "texto": "Ambos planes resultan costando exactamente lo mismo ($90.000)."
      },
      {
        "id": "D",
        "texto": "El Plan Trimestral, porque ahorra $30.000."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Cálculos matemáticos: El Plan Clásico cobra 15.000 mensual &times; 6 meses = $90.000. El Plan Trimestral cobra 40.000 por cada bloque de 3 meses; como son 6 meses, debe pagar dos bloques de 40.000 = $80.000. El Plan Trimestral es más económico ($80k vs $90k)."
  },
  {
    "id": "mat_sim_09_p19",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una veterinaria encuesta a sus clientes sobre la adopción de mascotas. El 50% adopta Perros, el 30% adopta Gatos, el 15% adopta Aves y el 5% adopta Peces.</p> <p><strong>¿Cuál de las siguientes gráficas ilustra fielmente estos porcentajes estadísticos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción A</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <!-- Ticks: 0, 10, 20, 30, 40, 50 --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text><text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text><text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Barras. Max 50(y=15, h=75). Per=50, Gat=30, Ave=15, Peces=5 --> <rect x=\"42\" y=\"15\" width=\"16\" height=\"75\" fill=\"#1e293b\"/> <!-- 50 --> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"122\" y=\"67.5\" width=\"16\" height=\"22.5\" fill=\"#1e293b\"/> <!-- 15 --> <rect x=\"162\" y=\"82.5\" width=\"16\" height=\"7.5\" fill=\"#1e293b\"/> <!-- 5 --> <!-- X Labels --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Perro</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Gato</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Ave</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Pez</text> </svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción B</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <!-- Ticks: 0, 10, 20, 30, 40, 50 --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text><text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text><text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Barras. Per=30, Gat=50, Ave=5, Peces=15 --> <rect x=\"42\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"82\" y=\"15\" width=\"16\" height=\"75\" fill=\"#1e293b\"/> <!-- 50 --> <rect x=\"122\" y=\"82.5\" width=\"16\" height=\"7.5\" fill=\"#1e293b\"/> <!-- 5 --> <rect x=\"162\" y=\"67.5\" width=\"16\" height=\"22.5\" fill=\"#1e293b\"/> <!-- 15 --> <!-- X Labels --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Perro</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Gato</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Ave</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Pez</text> </svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción C</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <!-- Ticks: 0, 10, 20, 30, 40, 50 --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text><text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text><text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Barras. Per=50, Gat=30, Ave=30, Peces=30 --> <rect x=\"42\" y=\"15\" width=\"16\" height=\"75\" fill=\"#1e293b\"/> <!-- 50 --> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"122\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"162\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <!-- X Labels --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Perro</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Gato</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Ave</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Pez</text> </svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center; padding:10px;\"><b>Opción D</b><br> <svg viewBox=\"0 0 200 120\" height=\"100\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/><line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <!-- Ticks: 0, 10, 20, 30, 40, 50 --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text><text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text><text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text><text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Barras. Per=15, Gat=50, Ave=30, Peces=5 --> <rect x=\"42\" y=\"67.5\" width=\"16\" height=\"22.5\" fill=\"#1e293b\"/> <!-- 15 --> <rect x=\"82\" y=\"15\" width=\"16\" height=\"75\" fill=\"#1e293b\"/> <!-- 50 --> <rect x=\"122\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\"/> <!-- 30 --> <rect x=\"162\" y=\"82.5\" width=\"16\" height=\"7.5\" fill=\"#1e293b\"/> <!-- 5 --> <!-- X Labels --> <text x=\"50\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Perro</text><text x=\"90\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Gato</text> <text x=\"130\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Ave</text><text x=\"170\" y=\"105\" font-size=\"7\" text-anchor=\"middle\">Pez</text> </svg></div>"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Evaluando la escala vertical: La barra de Perros debe alcanzar la línea superior del 50. La de Gatos debe bajar a la línea del 30. La de Aves corta a la mitad entre 10 y 20 (15), y los Peces forman la barra más diminuta en el nivel del 5. La opción A ilustra esto perfectamente a escala."
  },
  {
    "id": "mat_sim_09_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un sistema de seguridad requiere configurar una contraseña corta. Esta debe estar formada por: <b>un dígito (del 1 al 4)</b> seguido de <b>un dígito (del 1 al 5)</b> y finalizar con <b>una letra (A o B)</b>.</p> <div style=\"display:flex; justify-content:center; align-items:center; gap:10px; font-size:1.5rem; background:#fff; padding:15px; border-radius:8px; width:fit-content; margin:0 auto;\"> <div style=\"border:2px solid #ccc; padding:10px; border-radius:8px;\">1-4</div> <div style=\"border:2px solid #ccc; padding:10px; border-radius:8px;\">1-5</div> <div style=\"border:2px solid #ccc; padding:10px; border-radius:8px;\">A-B</div> </div> <p><strong>Basado en el principio multiplicativo de la combinatoria, ¿cuántas contraseñas totalmente distintas puede generar el sistema?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "40 contraseñas"
      },
      {
        "id": "B",
        "texto": "11 contraseñas"
      },
      {
        "id": "C",
        "texto": "20 contraseñas"
      },
      {
        "id": "D",
        "texto": "120 contraseñas"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Multiplicamos la cantidad de opciones disponibles en cada casilla o decisión: Hay 4 números posibles para la primera celda, 5 números posibles para la segunda celda, y 2 letras posibles para la tercera. 4 &times; 5 &times; 2 = 40 combinaciones diferentes."
  },
  {
    "id": "mat_sim_09_p21",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un finquero va a construir una cerca recta instalando postes de madera idénticos. Cada poste tiene un grosor <b>P</b>. La distancia de alambre que separa un poste del siguiente mide siempre <b>3P</b>.</p> <p>Considerando que la cerca comienza en un poste y termina en otro poste final, ¿cuál de las siguientes fórmulas determina la longitud total de la cerca si se colocan <b>n</b> postes en total?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "4nP - 3P"
      },
      {
        "id": "B",
        "texto": "4nP"
      },
      {
        "id": "C",
        "texto": "nP + 3P"
      },
      {
        "id": "D",
        "texto": "4nP + 3P"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Suma de longitudes: El espacio ocupado por los n postes es n &times; P. La cantidad de espacios libres (alambre) entre ellos siempre será (n-1). Cada espacio libre mide 3P, así que el alambre total es (n-1)3P. Sumando ambos: nP + 3nP - 3P. Simplificando: 4nP - 3P.",
    "svg": "<svg viewBox=\"0 0 350 120\" width=\"100%\" style=\"background:#fff; max-width:400px; display:block; margin:15px auto;\">\n                        <rect x=\"60\" y=\"45\" width=\"15\" height=\"50\" fill=\"#b45309\" stroke=\"#333\"/>\n                        <rect x=\"120\" y=\"45\" width=\"15\" height=\"50\" fill=\"#b45309\" stroke=\"#333\"/>\n                        <rect x=\"180\" y=\"45\" width=\"15\" height=\"50\" fill=\"#b45309\" stroke=\"#333\"/>\n                        <rect x=\"240\" y=\"45\" width=\"15\" height=\"50\" fill=\"#b45309\" stroke=\"#333\"/>\n                        \n                        <line x1=\"60\" y1=\"60\" x2=\"255\" y2=\"60\" stroke=\"#64748b\" stroke-width=\"2\"/>\n                        <line x1=\"60\" y1=\"80\" x2=\"255\" y2=\"80\" stroke=\"#64748b\" stroke-width=\"2\"/>\n\n                        <!-- Cota P -->\n                        <line x1=\"60\" y1=\"105\" x2=\"75\" y2=\"105\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"60\" y1=\"102\" x2=\"60\" y2=\"108\" stroke=\"#000\"/> <line x1=\"75\" y1=\"102\" x2=\"75\" y2=\"108\" stroke=\"#000\"/>\n                        <text x=\"67.5\" y=\"115\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">P</text>\n\n                        <!-- Cota 3P -->\n                        <line x1=\"75\" y1=\"105\" x2=\"120\" y2=\"105\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"120\" y1=\"102\" x2=\"120\" y2=\"108\" stroke=\"#000\"/>\n                        <text x=\"97.5\" y=\"115\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">3P</text>\n                        \n                        <text x=\"160\" y=\"20\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">Longitud Total = ?</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p22",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En el siguiente plano están graficadas dos rectas que obedecen a un sistema de ecuaciones de 2x2. Presta atención a dónde se intersectan matemáticamente.</p> <p><strong>Revisa la cuadrícula. ¿Cuál es el punto exacto de intersección de este sistema lineal?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "( 4 , 2 )"
      },
      {
        "id": "B",
        "texto": "( 2 , 4 )"
      },
      {
        "id": "C",
        "texto": "( 3 , 3 )"
      },
      {
        "id": "D",
        "texto": "( 2 , 2 )"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Visualmente, trazando líneas hacia los ejes desde el punto negro, este coincide con el 2 en el eje x, y con el 4 en el eje y. Analíticamente: y = 2x y y = 6-x. Igualando: 2x = 6-x ➔ 3x = 6 ➔ x = 2. Reemplazando: y = 2(2) = 4. El punto solución es (2, 4).",
    "svg": "<svg viewBox=\"0 0 350 220\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:15px auto;\">\n                        <defs>\n                            <marker id=\"arrow22\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker>\n                        </defs>\n                        <!-- Fine Grid (0.2 units = 6px) -->\n                        <pattern id=\"fineGrid3\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\">\n                            <path d=\"M 6 0 L 0 0 0 6\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"0.5\"/>\n                        </pattern>\n                        <!-- Coarse Grid (1 unit = 30px) -->\n                        <pattern id=\"coarseGrid3\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n                            <rect width=\"30\" height=\"30\" fill=\"url(#fineGrid3)\"/>\n                            <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n                        </pattern>\n                        \n                        <rect x=\"40\" y=\"20\" width=\"280\" height=\"150\" fill=\"url(#coarseGrid3)\" />\n\n                        <!-- Axes -->\n                        <line x1=\"40\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow22)\"/>\n                        <line x1=\"40\" y1=\"170\" x2=\"40\" y2=\"10\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow22)\"/>\n                        <text x=\"335\" y=\"175\" font-size=\"12\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">x</text>\n                        <text x=\"30\" y=\"15\" font-size=\"12\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">y</text>\n\n                        <!-- X Labels -->\n                        <text x=\"70\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">1</text>\n                        <text x=\"100\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">2</text>\n                        <text x=\"130\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n                        <text x=\"160\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">4</text>\n                        <text x=\"190\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">5</text>\n                        <text x=\"220\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">6</text>\n                        <text x=\"250\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">7</text>\n                        <text x=\"280\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">8</text>\n\n                        <!-- Y Labels -->\n                        <text x=\"30\" y=\"144\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">1</text>\n                        <text x=\"30\" y=\"114\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">2</text>\n                        <text x=\"30\" y=\"84\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">3</text>\n                        <text x=\"30\" y=\"54\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">4</text>\n                        <text x=\"30\" y=\"24\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">5</text>\n\n                        <!-- Line 1: y = 2x. Cruza (0,0)->(40,170) y (3,6)->(130,-10) -->\n                        <line x1=\"40\" y1=\"170\" x2=\"115\" y2=\"20\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <text x=\"130\" y=\"40\" font-size=\"14\" font-weight=\"bold\" font-family=\"Georgia\" font-style=\"italic\" fill=\"#1e3a8a\">y = 2x</text>\n\n                        <!-- Line 2: x + y = 6 (y = 6 - x). Cruza (0,6)->(40,-10) y (6,0)->(220,170) -->\n                        <line x1=\"90\" y1=\"20\" x2=\"220\" y2=\"170\" stroke=\"#be123c\" stroke-width=\"2\"/>\n                        <text x=\"200\" y=\"140\" font-size=\"14\" font-weight=\"bold\" font-family=\"Georgia\" font-style=\"italic\" fill=\"#be123c\">x + y = 6</text>\n                        \n                        <!-- Intersection at (2, 4) -> x=100, y=50 -->\n                        <circle cx=\"100\" cy=\"50\" r=\"4\" fill=\"#000\"/>\n                    </svg>"
  },
  {
    "id": "mat_sim_09_p23",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El profesor plantea un acertijo numérico con la siguiente regla estricta: <b>\"El siguiente término siempre será igual al cuadrado matemático del número anterior\"</b>.</p> <p>Un estudiante entrega en la pizarra la siguiente secuencia de números:</p> <div style=\"font-size: 1.8rem; font-weight: bold; color: var(--primary); text-align: center; margin: 15px 0;\">2, &nbsp; 4, &nbsp; 8, &nbsp; 16, &nbsp; 32</div> <p><strong>¿La secuencia presentada por el estudiante cumple con la regla dictada por el profesor?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque cada número es perfectamente el cuadrado del número anterior en la lista."
      },
      {
        "id": "B",
        "texto": "No, porque el estudiante lo que hizo fue multiplicar por 2 el término anterior, no elevarlo al cuadrado."
      },
      {
        "id": "C",
        "texto": "Sí, porque elevar al cuadrado significa lo mismo que sumar el número por sí mismo."
      },
      {
        "id": "D",
        "texto": "No, porque la secuencia debía contener únicamente números impares."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Elevar al cuadrado significa multiplicar un número por sí mismo (x²). Si empezamos en 2, el siguiente es 2² = 4. El siguiente debería ser 4² = 16. El siguiente 16² = 256. El estudiante confundió la regla y construyó la secuencia multiplicando por 2 (que es 2^n)."
  },
  {
    "id": "mat_sim_09_p24",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La tabla muestra el número final de medallas obtenidas por diferentes delegaciones deportivas internacionales al finalizar las Olimpiadas.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Delegación</th><th>Medallas Acumuladas</th></tr> <tr><td>Canadá</td><td>55</td></tr> <tr><td>Francia</td><td>75</td></tr> <tr><td>Japón</td><td>32</td></tr> <tr><td>Brasil</td><td>68</td></tr> <tr><td>Australia</td><td>49</td></tr> </table> <p><strong>Basado en la estadística final, si se debe hacer el podio organizando las delegaciones del MAYOR al MENOR número de medallas, ¿cuál es el orden correcto?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Francia, Brasil, Canadá, Australia, Japón."
      },
      {
        "id": "B",
        "texto": "Francia, Canadá, Brasil, Australia, Japón."
      },
      {
        "id": "C",
        "texto": "Japón, Australia, Canadá, Brasil, Francia."
      },
      {
        "id": "D",
        "texto": "Francia, Brasil, Australia, Canadá, Japón."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Es un ejercicio de ordenamiento jerárquico. Ordenamos la columna numérica de mayor a menor: 75 (Francia), 68 (Brasil), 55 (Canadá), 49 (Australia) y 32 (Japón)."
  },
  {
    "id": "mat_sim_09_p25",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un pequeño barco zarpa desde el puerto de la ciudad y navega 6 kilómetros en línea recta hacia el Este. En ese punto, gira bruscamente 90° a babor y avanza 8 kilómetros en línea recta hacia el Norte hasta fondear.</p> <p><strong>Utilizando el teorema de Pitágoras, ¿a qué distancia geométrica exacta se encuentra el barco de su puerto de origen?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "14 km"
      },
      {
        "id": "B",
        "texto": "10 km"
      },
      {
        "id": "C",
        "texto": "100 km"
      },
      {
        "id": "D",
        "texto": "2 km"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Los desplazamientos ortogonales (Este y Norte) dibujan los catetos de un triángulo rectángulo. La distancia de regreso a casa es la hipotenusa (c). Pitágoras dice que c² = a² + b². Es decir, c² = 6² + 8² = 36 + 64 = 100. La raíz cuadrada de 100 es 10 km.",
    "svg": "<svg viewBox=\"0 0 200 150\" width=\"100%\" style=\"background:#fff; max-width:250px; display:block; margin:15px auto; border:1px solid #ccc; border-radius:8px;\">\n                        <!-- Vectores de camino -->\n                        <polyline points=\"40,120 140,120 140,40\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n                        <!-- Hipotenusa de regreso -->\n                        <line x1=\"40\" y1=\"120\" x2=\"140\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <!-- Nodos -->\n                        <circle cx=\"40\" cy=\"120\" r=\"4\" fill=\"#000\"/><text x=\"15\" y=\"130\" font-size=\"10\" font-weight=\"bold\">Puerto</text>\n                        <circle cx=\"140\" cy=\"40\" r=\"4\" fill=\"#000\"/><text x=\"145\" y=\"35\" font-size=\"10\" font-weight=\"bold\">Barco</text>\n                        \n                        <text x=\"90\" y=\"135\" font-family=\"Georgia\" font-size=\"11\">6 km</text>\n                        <text x=\"150\" y=\"80\" font-family=\"Georgia\" font-size=\"11\">8 km</text>\n                        <text x=\"60\" y=\"70\" font-family=\"Georgia\" font-size=\"11\" font-weight=\"bold\" fill=\"#1e3a8a\">Distancia Real</text>\n                        <path d=\"M 130 120 L 130 110 L 140 110\" fill=\"none\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                    </svg>"
  }
]);
