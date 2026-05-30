// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas - Simulacro Matemáticas 08 (Sesión 1 2025)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_08_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Roberto quiere cortar por la mitad los frutos, con forma esférica, de un totumo que tiene en su finca, con el fin de formar envases para guardar arequipe. Para ello, decidió seleccionar los frutos que tengan un diámetro entre 10 cm y 12 cm.</p> <p>Roberto necesita calcular el volumen máximo aproximado de los envases que obtendría, para lo cual realiza el siguiente procedimiento, pero comete un error:</p> <ul style=\"margin-left: 20px;\"> <li><strong>Paso 1.</strong> Como los frutos del totumo son esféricos, investiga la fórmula para calcular el volumen de una esfera, la cual es <span class=\"frac\"><span>4</span><span>3</span></span>&pi;r³.</li> <li><strong>Paso 2.</strong> Toma el valor máximo de diámetro que puede tener el fruto de un totumo, que es 12, y divide este número entre 2.</li> <li><strong>Paso 3.</strong> El resultado del paso 2 lo eleva al cubo y, luego, multiplica el resultado por <span class=\"frac\"><span>4</span><span>3</span></span> &times; &pi;.</li> </ul> <p><strong>¿Cuál fue el error que cometió Roberto y cómo puede encontrar el volumen correcto?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El error fue dividir el diámetro entre 2, porque, si bien se obtienen dos envases de cada fruto, la división entre 2 debe realizarse sobre la fórmula del paso 1 y dejar r = 12."
      },
      {
        "id": "B",
        "texto": "El error fue elevar al cubo el resultado del paso 2 y, luego, multiplicarlo por <span class=\"frac\"><span>4</span><span>3</span></span> &times; &pi;. En su lugar, se debe hacer primero la multiplicación y, luego, elevar el resultado al cubo."
      },
      {
        "id": "C",
        "texto": "El error fue utilizar la fórmula para el volumen total de una esfera, debido a que se estaría calculando el volumen de dos envases, por lo que se debe dividir la fórmula dada entre 2."
      },
      {
        "id": "D",
        "texto": "El error fue utilizar el número 12 como diámetro para hallar el volumen máximo aproximado. En lugar de esto, se debe considerar el promedio entre 10 y 12, que es 11."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al cortar la esfera por la mitad para hacer envases, el volumen de cada envase es la mitad del volumen de la esfera. Roberto calculó el volumen de la esfera completa en el paso 3.",
    "svg": "<svg viewBox=\"0 0 350 160\" width=\"100%\" style=\"background:#fff; max-width:400px; display:block; margin:15px auto; border-radius: 8px; border: 1px solid var(--border-glass);\">\n                        <defs>\n                            <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker>\n                        </defs>\n                        <!-- Totumo Entero -->\n                        <text x=\"80\" y=\"20\" font-family=\"Georgia\" font-size=\"13\" font-weight=\"bold\" fill=\"var(--text-heading)\" text-anchor=\"middle\">Fruto entero</text>\n                        <circle cx=\"80\" cy=\"80\" r=\"50\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/>\n                        <ellipse cx=\"80\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"none\" stroke=\"#92400e\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <path d=\"M 80 30 Q 75 10 95 15\" fill=\"none\" stroke=\"#15803d\" stroke-width=\"3\"/>\n                        <path d=\"M 80 30 C 95 15, 110 30, 80 30\" fill=\"#15803d\"/>\n                        \n                        <!-- Cota diámetro -->\n                        <line x1=\"30\" y1=\"140\" x2=\"130\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"30\" y1=\"135\" x2=\"30\" y2=\"145\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"130\" y1=\"135\" x2=\"130\" y2=\"145\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"80\" y=\"152\" font-family=\"Georgia\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\">d = 10 a 12 cm</text>\n\n                        <!-- Flecha de corte -->\n                        <path d=\"M 145 80 L 195 80\" stroke=\"#333\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n                        <text x=\"170\" y=\"70\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">Cortar por</text>\n                        <text x=\"170\" y=\"92\" font-family=\"Georgia\" font-size=\"10\" text-anchor=\"middle\">la mitad</text>\n\n                        <!-- Medio Totumo (Envase) -->\n                        <text x=\"270\" y=\"20\" font-family=\"Georgia\" font-size=\"13\" font-weight=\"bold\" fill=\"var(--text-heading)\" text-anchor=\"middle\">Envase (mitad)</text>\n                        <path d=\"M 220 80 A 50 50 0 0 0 320 80 Z\" fill=\"#fef3c7\" stroke=\"#92400e\" stroke-width=\"2\"/>\n                        <ellipse cx=\"270\" cy=\"80\" rx=\"50\" ry=\"15\" fill=\"#fffbeb\" stroke=\"#92400e\" stroke-width=\"2\"/>\n                        <circle cx=\"270\" cy=\"80\" r=\"2\" fill=\"#92400e\"/>\n                        <line x1=\"270\" y1=\"80\" x2=\"320\" y2=\"80\" stroke=\"#92400e\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"/>\n                        <text x=\"295\" y=\"75\" font-family=\"Georgia\" font-size=\"13\" fill=\"#92400e\" font-weight=\"bold\" text-anchor=\"middle\">r</text>\n                        <text x=\"270\" y=\"110\" font-family=\"Georgia\" font-size=\"12\" font-style=\"italic\" fill=\"#92400e\" text-anchor=\"middle\">Volumen / 2</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p2",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la siguiente tabla se muestran los datos sobre el consumo de vasos de agua durante cuatro meses en una empresa.</p> <table class=\"data-table\" style=\"max-width: 300px; margin: 10px auto;\"> <tr><th>Mes</th><th>Vasos consumidos</th></tr> <tr><td>Febrero</td><td>400</td></tr> <tr><td>Marzo</td><td>200</td></tr> <tr><td>Abril</td><td>600</td></tr> <tr><td>Mayo</td><td>300</td></tr> </table> <p>El director de Recursos Humanos diseña una gráfica que muestra la información presentada en la tabla.</p> <p><strong>¿Es correcta la gráfica diseñada por el director de Recursos Humanos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque representa la cantidad de vasos de agua consumidos al mes proporcionalmente."
      },
      {
        "id": "B",
        "texto": "No, porque se muestra que el mes de menor consumo es Abril."
      },
      {
        "id": "C",
        "texto": "Sí, porque muestra los cuatro meses registrados en la tabla."
      },
      {
        "id": "D",
        "texto": "No, porque el sector que representa el mes de Mayo es visualmente menor que el de Marzo, a pesar de que 300 es mayor que 200."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "Al comparar la tabla con el gráfico, notamos una incongruencia: en la tabla, el consumo de Mayo (300) es mayor que el de Marzo (200), pero en la gráfica circular construida, el área (sector) asignada a Mayo es más pequeña que la de Marzo.",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"250\" style=\"margin: 10px auto; display: block;\">\n                        <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"transparent\" stroke=\"#ffffff\" stroke-width=\"40\" stroke-dasharray=\"150.8 376.99\" stroke-dashoffset=\"0\" />\n                        <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"transparent\" stroke=\"#1e3a8a\" stroke-width=\"40\" stroke-dasharray=\"100.2 376.99\" stroke-dashoffset=\"-150.8\" />\n                        <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"transparent\" stroke=\"#0f172a\" stroke-width=\"40\" stroke-dasharray=\"94.2 376.99\" stroke-dashoffset=\"-251\" />\n                        <circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"transparent\" stroke=\"#cbd5e1\" stroke-width=\"40\" stroke-dasharray=\"31.7 376.99\" stroke-dashoffset=\"-345.2\" />\n                        <circle cx=\"100\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                        <circle cx=\"100\" cy=\"100\" r=\"40\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"2\"/>\n                        \n                        <rect x=\"0\" y=\"80\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"15\" y=\"90\" font-size=\"8\" text-anchor=\"middle\">Abril</text>\n                        <rect x=\"150\" y=\"160\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"165\" y=\"170\" font-size=\"8\" text-anchor=\"middle\">Marzo</text>\n                        <rect x=\"160\" y=\"40\" width=\"40\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"180\" y=\"50\" font-size=\"8\" text-anchor=\"middle\">Febrero</text>\n                        <rect x=\"10\" y=\"20\" width=\"30\" height=\"15\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1\"/><text x=\"25\" y=\"30\" font-size=\"8\" text-anchor=\"middle\">Mayo</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p3",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una heladería registraron la cantidad de helados que vendieron en un día y realizaron la siguiente gráfica:</p> <p><strong>¿Cuál sabor de helado fue el que más se vendió?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Chocolate."
      },
      {
        "id": "B",
        "texto": "Vainilla."
      },
      {
        "id": "C",
        "texto": "Fresa."
      },
      {
        "id": "D",
        "texto": "Coco."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "Al observar el diagrama de barras, la barra correspondiente al sabor 'Coco' es la más alta, alcanzando el valor de 7 unidades vendidas.",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:0 auto;\">\n                        <text x=\"150\" y=\"20\" text-anchor=\"middle\" font-weight=\"bold\" font-size=\"12\">Helados vendidos por sabor en un día</text>\n                        <line x1=\"40\" y1=\"160\" x2=\"280\" y2=\"160\" stroke=\"#000\"/>\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"30\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"45\" font-size=\"10\">8</text> <line x1=\"38\" y1=\"40\" x2=\"42\" y2=\"40\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"60\" font-size=\"10\">7</text>\n                        <text x=\"30\" y=\"75\" font-size=\"10\">6</text> <line x1=\"38\" y1=\"70\" x2=\"42\" y2=\"70\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"90\" font-size=\"10\">5</text>\n                        <text x=\"30\" y=\"105\" font-size=\"10\">4</text> <line x1=\"38\" y1=\"100\" x2=\"42\" y2=\"100\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"120\" font-size=\"10\">3</text>\n                        <text x=\"30\" y=\"135\" font-size=\"10\">2</text> <line x1=\"38\" y1=\"130\" x2=\"42\" y2=\"130\" stroke=\"#000\"/>\n                        <text x=\"30\" y=\"150\" font-size=\"10\">1</text>\n                        <rect x=\"60\" y=\"85\" width=\"30\" height=\"75\" fill=\"#475569\" stroke=\"#000\"/>\n                        <rect x=\"110\" y=\"115\" width=\"30\" height=\"45\" fill=\"#475569\" stroke=\"#000\"/>\n                        <rect x=\"160\" y=\"55\" width=\"30\" height=\"105\" fill=\"#475569\" stroke=\"#000\"/>\n                        <rect x=\"210\" y=\"100\" width=\"30\" height=\"60\" fill=\"#475569\" stroke=\"#000\"/>\n                        <text x=\"75\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Vainilla</text>\n                        <text x=\"125\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Chocolate</text>\n                        <text x=\"175\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Coco</text>\n                        <text x=\"225\" y=\"175\" font-size=\"10\" text-anchor=\"middle\">Fresa</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un comerciante desea conocer el valor de las ganancias que obtiene por la venta de pantalones. En este sentido, si el comerciante compra cada pantalón a $100.000,</p> <p><strong>¿cuál de los siguientes procedimientos le permite determinar el monto de sus ganancias?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Restar $100.000 al precio de venta de cada pantalón y multiplicar dicho valor por el número de unidades vendidas."
      },
      {
        "id": "B",
        "texto": "$100.000 restarle el precio de venta de cada pantalón y multiplicar dicho valor por el número de unidades vendidas."
      },
      {
        "id": "C",
        "texto": "Restar el resultado de la multiplicación entre $100.000 y el número de unidades vendidas, al precio de venta de cada pantalón."
      },
      {
        "id": "D",
        "texto": "Restar el resultado de la multiplicación entre el precio de venta de cada pantalón y el número de unidades vendidas, a $100.000."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "La ganancia unitaria es la diferencia entre el precio de venta y el costo ($100.000). Para hallar la ganancia total, multiplicamos esta diferencia por el número de unidades vendidas: (Precio Venta - $100.000) × Cantidad."
  },
  {
    "id": "mat_sim_08_p5",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Se hace una encuesta a un grupo de estudiantes, de los cuales el 25 % pertenece a escuelas del sector rural y el 75 % a escuelas del sector urbano de un pueblo pequeño de Colombia. Se propone la siguiente metodología para seleccionar a 400 estudiantes que representen a toda la población estudiantil del pueblo:</p> <p style=\"margin: 15px 0; padding: 15px; border-left: 4px solid var(--secondary); background: var(--bg-body); border-radius: 8px; font-family: 'Georgia', serif;\"> <strong>Paso 1.</strong> Hacer dos listas, una para el sector rural y otra para el sector urbano, ordenando a los estudiantes de mayor a menor de acuerdo con sus notas.<br><br> <strong>Paso 2.</strong> Seleccionar los primeros estudiantes de cada lista hasta obtener 100 estudiantes del sector rural y 300 del sector urbano. </p> <p><strong>El procedimiento mostrado NO es adecuado, porque la muestra solo tiene en cuenta a los mejores estudiantes. ¿De qué forma se puede corregir este procedimiento?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Cambiar el paso 1 por: \"Hacer dos listas, una para el sector rural y otra para el sector urbano, ordenando a los estudiantes de menor a mayor de acuerdo con sus notas\"."
      },
      {
        "id": "B",
        "texto": "Cambiar el paso 2 por: \"Seleccionar en cada lista la misma cantidad de estudiantes, escogiendo a los primeros y los últimos de cada una\"."
      },
      {
        "id": "C",
        "texto": "Cambiar el paso 2 por: \"Seleccionar estudiantes que estén al rededor de la mitad de cada lista hasta obtener 100 estudiantes urbanos y 300 rurales\"."
      },
      {
        "id": "D",
        "texto": "Cambiar el paso 1 por: \"Hacer dos listas, una para el sector rural y otra para el sector urbano, sin tener en cuenta el orden\"."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Para que una muestra sea representativa y no esté sesgada por el rendimiento académico, se debe eliminar la jerarquía de notas. Al cambiar el paso 1 para hacer las listas sin tener en cuenta el orden (y seleccionar al azar), se garantiza que estudiantes con cualquier nivel académico tengan la misma probabilidad de ser elegidos."
  },
  {
    "id": "mat_sim_08_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El DANE realiza mediciones de pobreza. La tabla y la gráfica muestran la incidencia de pobreza (IPM) para algunas regiones entre 2011 y 2015.</p> <table class=\"data-table\" style=\"max-width: 450px; margin: 10px auto; font-size: 0.8rem;\"> <tr><th>Año</th><th>Pacífica</th><th>Antioquia</th><th>Bogotá, D.C.</th><th>Central</th></tr> <tr><td>2011</td><td>41,4</td><td>25,7</td><td>11,9</td><td>30,7</td></tr> <tr><td>2012</td><td>36,3</td><td>21,7</td><td>11,1</td><td>26,7</td></tr> <tr><td>2013</td><td>37,6</td><td>22,4</td><td>8,7</td><td>26,1</td></tr> <tr><td>2014</td><td>34,6</td><td>19,5</td><td>5,4</td><td>28,1</td></tr> <tr><td>2015</td><td>33,8</td><td>18,7</td><td>4,7</td><td>22,1</td></tr> </table> <p><strong>¿La información de los datos de la gráfica es la misma que la información presentada en la tabla?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque la información incluida en la gráfica es semejante a la información presentada en la tabla, para las regiones en mención."
      },
      {
        "id": "B",
        "texto": "No, porque en vez de graficar los datos de Antioquia, se graficaron los datos de la región Central."
      },
      {
        "id": "C",
        "texto": "No, porque los datos de la gráfica de Antioquia para 2012 y 2013, y de Bogotá D.C. para 2015, son diferentes a los datos presentados en la tabla."
      },
      {
        "id": "D",
        "texto": "Sí, porque los datos de la gráfica de Antioquia para 2013 y de la región Central para 2012 corresponden a los datos presentados en la tabla."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al hacer una revisión cruzada exhaustiva entre los valores de la tabla y los puntos de la gráfica, se evidencia que existen discrepancias puntuales en los valores graficados para Antioquia (2012, 2013) y Bogotá (2015).",
    "svg": "<svg viewBox=\"0 0 360 220\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:10px auto;\">\n                        <defs>\n                            <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker>\n                        </defs>\n\n                        <!-- Legend at the top -->\n                        <g font-size=\"8\" font-family=\"Segoe UI, sans-serif\">\n                            <!-- Pacífica (Square) -->\n                            <rect x=\"15\" y=\"10\" width=\"6\" height=\"6\" fill=\"#000\"/>\n                            <line x1=\"25\" y1=\"13\" x2=\"45\" y2=\"13\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                            <text x=\"50\" y=\"16\" font-weight=\"bold\">Pacífica</text>\n\n                            <!-- Antioquia (Triangle) -->\n                            <polygon points=\"110,9 106,16 114,16\" fill=\"#000\"/>\n                            <line x1=\"118\" y1=\"13\" x2=\"138\" y2=\"13\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                            <text x=\"143\" y=\"16\" font-weight=\"bold\">Antioquia</text>\n\n                            <!-- Bogotá, D.C. (Grey line) -->\n                            <line x1=\"205\" y1=\"13\" x2=\"225\" y2=\"13\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n                            <text x=\"230\" y=\"16\" font-weight=\"bold\">Bogotá, D.C.</text>\n\n                            <!-- Central (Circle) -->\n                            <circle cx=\"295\" cy=\"13\" r=\"3.5\" fill=\"#000\"/>\n                            <line x1=\"303\" y1=\"13\" x2=\"323\" y2=\"13\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                            <text x=\"328\" y=\"16\" font-weight=\"bold\">Central</text>\n                        </g>\n\n                        <!-- Horizontal Grid Lines -->\n                        <g stroke=\"#e2e8f0\" stroke-width=\"1\">\n                            <line x1=\"55\" y1=\"180\" x2=\"330\" y2=\"180\" stroke=\"#000\" stroke-width=\"1.5\"/> <!-- Eje X -->\n                            <line x1=\"55\" y1=\"162.2\" x2=\"330\" y2=\"162.2\"/>\n                            <line x1=\"55\" y1=\"144.4\" x2=\"330\" y2=\"144.4\"/>\n                            <line x1=\"55\" y1=\"126.7\" x2=\"330\" y2=\"126.7\"/>\n                            <line x1=\"55\" y1=\"108.9\" x2=\"330\" y2=\"108.9\"/>\n                            <line x1=\"55\" y1=\"91.1\" x2=\"330\" y2=\"91.1\"/>\n                            <line x1=\"55\" y1=\"73.3\" x2=\"330\" y2=\"73.3\"/>\n                            <line x1=\"55\" y1=\"55.6\" x2=\"330\" y2=\"55.6\"/>\n                            <line x1=\"55\" y1=\"37.8\" x2=\"330\" y2=\"37.8\"/>\n                            <line x1=\"55\" y1=\"20\" x2=\"330\" y2=\"20\"/>\n                        </g>\n\n                        <!-- Eje Y vertical line -->\n                        <line x1=\"55\" y1=\"180\" x2=\"55\" y2=\"10\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n                        <line x1=\"55\" y1=\"180\" x2=\"340\" y2=\"180\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n\n                        <!-- Y axis labels (Valores/Datos) -->\n                        <g font-size=\"8\" font-family=\"Segoe UI, sans-serif\" text-anchor=\"end\">\n                            <text x=\"48\" y=\"183\">0</text>\n                            <text x=\"48\" y=\"165\">5</text>\n                            <text x=\"48\" y=\"147\">10</text>\n                            <text x=\"48\" y=\"129\">15</text>\n                            <text x=\"48\" y=\"111\">20</text>\n                            <text x=\"48\" y=\"94\">25</text>\n                            <text x=\"48\" y=\"76\">30</text>\n                            <text x=\"48\" y=\"58\">35</text>\n                            <text x=\"48\" y=\"40\">40</text>\n                            <text x=\"48\" y=\"23\">45</text>\n                        </g>\n\n                        <!-- X axis labels (Años) -->\n                        <g font-size=\"8\" font-family=\"Segoe UI, sans-serif\" text-anchor=\"middle\">\n                            <text x=\"70\" y=\"193\">2011</text>\n                            <text x=\"130\" y=\"193\">2012</text>\n                            <text x=\"190\" y=\"193\">2013</text>\n                            <text x=\"250\" y=\"193\">2014</text>\n                            <text x=\"310\" y=\"193\">2015</text>\n                        </g>\n\n                        <!-- Rotated vertical label (Incidencia de la pobreza) -->\n                        <text x=\"15\" y=\"100\" font-size=\"8\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" transform=\"rotate(-90 15,100)\" text-anchor=\"middle\">Incidencia de la pobreza por el IPM</text>\n\n                        <!-- Horizontal label under X arrow (Año) -->\n                        <text x=\"345\" y=\"193\" font-size=\"8\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" text-anchor=\"end\">Año</text>\n\n                        <!-- CURVAS -->\n                        <!-- 1. Pacífica (Squares) -->\n                        <polyline points=\"70,32.8 130,51.0 190,46.3 250,57.0 310,59.9\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <g fill=\"#000\">\n                            <rect x=\"67\" y=\"29.8\" width=\"6\" height=\"6\"/>\n                            <rect x=\"127\" y=\"48.0\" width=\"6\" height=\"6\"/>\n                            <rect x=\"187\" y=\"43.3\" width=\"6\" height=\"6\"/>\n                            <rect x=\"247\" y=\"54.0\" width=\"6\" height=\"6\"/>\n                            <rect x=\"307\" y=\"56.9\" width=\"6\" height=\"6\"/>\n                        </g>\n                        <!-- Pacífica values -->\n                        <g font-size=\"7\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" text-anchor=\"middle\">\n                            <text x=\"70\" y=\"25\">41,4</text>\n                            <text x=\"130\" y=\"43\">36,3</text>\n                            <text x=\"190\" y=\"38\">37,6</text>\n                            <text x=\"250\" y=\"49\">34,6</text>\n                            <text x=\"310\" y=\"52\">33,8</text>\n                        </g>\n\n                        <!-- 2. Central (Circles) -->\n                        <polyline points=\"70,70.9 130,85.1 190,87.2 250,80.1 310,101.4\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <g fill=\"#000\">\n                            <circle cx=\"70\" cy=\"70.9\" r=\"3\"/>\n                            <circle cx=\"130\" cy=\"85.1\" r=\"3\"/>\n                            <circle cx=\"190\" cy=\"87.2\" r=\"3\"/>\n                            <circle cx=\"250\" cy=\"80.1\" r=\"3\"/>\n                            <circle cx=\"310\" cy=\"101.4\" r=\"3\"/>\n                        </g>\n                        <!-- Central values -->\n                        <g font-size=\"7\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" text-anchor=\"middle\">\n                            <text x=\"70\" y=\"64\">30,7</text>\n                            <text x=\"130\" y=\"78\">26,7</text>\n                            <text x=\"190\" y=\"80\">26,1</text>\n                            <text x=\"250\" y=\"73\">28,1</text>\n                            <text x=\"310\" y=\"94\">22,1</text>\n                        </g>\n\n                        <!-- 3. Antioquia (Triangles) -->\n                        <polyline points=\"70,88.6 130,107.1 190,114.9 250,110.7 310,113.5\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <g fill=\"#000\">\n                            <polygon points=\"70,84.6 66,91.6 74,91.6\"/>\n                            <polygon points=\"130,103.1 126,110.1 134,110.1\"/>\n                            <polygon points=\"190,110.9 186,117.9 194,117.9\"/>\n                            <polygon points=\"250,106.7 246,113.7 254,113.7\"/>\n                            <polygon points=\"310,109.5 306,116.5 314,116.5\"/>\n                        </g>\n                        <!-- Antioquia values -->\n                        <g font-size=\"7\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" text-anchor=\"middle\">\n                            <text x=\"70\" y=\"99\">25,7</text>\n                            <text x=\"130\" y=\"118\">20,5</text>\n                            <text x=\"190\" y=\"126\">18,3</text>\n                            <text x=\"250\" y=\"122\">19,5</text>\n                            <text x=\"310\" y=\"125\">18,7</text>\n                        </g>\n\n                        <!-- 4. Bogotá, D.C. (Grey line) -->\n                        <polyline points=\"70,137.7 130,140.5 190,149.1 250,160.8 310,153.0\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"2\"/>\n                        <!-- Bogotá values -->\n                        <g font-size=\"7\" font-family=\"Segoe UI, sans-serif\" font-weight=\"bold\" fill=\"#475569\" text-anchor=\"middle\">\n                            <text x=\"70\" y=\"131\">11,9</text>\n                            <text x=\"130\" y=\"133\">11,1</text>\n                            <text x=\"190\" y=\"142\">8,7</text>\n                            <text x=\"250\" y=\"153\">5,4</text>\n                            <text x=\"310\" y=\"145\">7,6</text>\n                        </g>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p7",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Las tablas muestran la información de cuatro alumnos inscritos y las características de dos cursos ofrecidos en un instituto.</p> <div style=\"display:flex; gap: 20px; flex-wrap: wrap; justify-content:center;\"> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Nombre</th><th>N° Carné</th><th>Curso</th></tr> <tr><td>Claudia</td><td>222</td><td>Diseño</td></tr> <tr><td>Ricardo</td><td>280</td><td>Diseño</td></tr> <tr><td>Hernando</td><td>110</td><td>Fotografía</td></tr> <tr><td>Luisa</td><td>117</td><td>Fotografía</td></tr> </table> <table class=\"data-table\" style=\"max-width: 250px; margin: 0;\"> <tr><th>Curso</th><th>Inscritos</th><th>Duración</th></tr> <tr><td>Diseño</td><td>14</td><td>3 semanas</td></tr> <tr><td>Fotografía</td><td>13</td><td>2 semanas</td></tr> </table> </div> <p style=\"margin-top:15px;\">Un profesor sorteó una cámara entre los estudiantes y el ganador fue un estudiante de un curso de <strong>dos semanas</strong>, cuyo número de carné era <strong>par</strong>.</p> <p><strong>¿Cuál de ellos ganó la cámara?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Luisa."
      },
      {
        "id": "B",
        "texto": "Hernando."
      },
      {
        "id": "C",
        "texto": "Ricardo."
      },
      {
        "id": "D",
        "texto": "Claudia."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "El curso de dos semanas es 'Fotografía'. Los estudiantes de Fotografía son Hernando (110) y Luisa (117). Entre ellos, el único con carné par es Hernando (110)."
  },
  {
    "id": "mat_sim_08_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En el patio de un colegio se pintó una figura teniendo en cuenta dos circunferencias con centros <b>V</b> y <b>W</b>, como se muestra en la gráfica:</p> <p>Se necesita determinar el área de la zona sombreada. ¿Cuál o cuáles datos se deben conocer para establecer el área de la zona sombreada?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Las distancias VY y WX."
      },
      {
        "id": "B",
        "texto": "La distancia VW."
      },
      {
        "id": "C",
        "texto": "La distancia XY."
      },
      {
        "id": "D",
        "texto": "Las distancias VX y VY."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "El área sombreada se calcula restando el área del círculo pequeño al área del círculo grande (A_grande - A_pequeño). Para esto, necesitas el radio mayor (distancia desde el centro V hasta el borde Y, es decir, VY) y el radio menor (distancia desde el centro W hasta el borde X, es decir, WX).",
    "svg": "<svg viewBox=\"0 0 300 200\" width=\"100%\" style=\"margin: 15px auto; display:block; max-width: 350px;\">\n                        <!-- Círculo exterior (Centro V) -->\n                        <circle cx=\"160\" cy=\"100\" r=\"90\" fill=\"#9ca3af\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <!-- Círculo interior (Centro W) -->\n                        <circle cx=\"130\" cy=\"100\" r=\"50\" fill=\"#ffffff\" stroke=\"#000\" stroke-width=\"2\"/>\n                        \n                        <!-- Línea punteada horizontal -->\n                        <line x1=\"70\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#000\" stroke-width=\"2\" stroke-dasharray=\"3,3\"/>\n                        \n                        <!-- Y (Borde exterior izquierdo) -->\n                        <circle cx=\"70\" cy=\"100\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"65\" y=\"90\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">Y</text>\n                        \n                        <!-- X (Borde interior izquierdo) -->\n                        <circle cx=\"80\" cy=\"100\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"85\" y=\"90\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">X</text>\n                        \n                        <!-- W (Centro círculo interior) -->\n                        <circle cx=\"130\" cy=\"100\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"130\" y=\"90\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">W</text>\n                        \n                        <!-- V (Centro círculo exterior) -->\n                        <circle cx=\"160\" cy=\"100\" r=\"3\" fill=\"#000\"/>\n                        <text x=\"160\" y=\"90\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"16\" font-weight=\"bold\" text-anchor=\"middle\">V</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p9",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una papelería el costo de los lápices depende de las unidades que compre el cliente:</p> <ul style=\"margin-left:20px;\"> <li>Si compra un lápiz le cuesta $1.000.</li> <li>Si compra dos lápices, cada uno le cuesta $950.</li> <li>Si compra tres lápices, cada uno le cuesta $900.</li> <li>Por cada lápiz adicional que compre el cliente, cada lápiz cuesta $50 pesos menos.</li> <li>Cada cliente puede comprar mínimo un lápiz y máximo 10 lápices.</li> </ul> <p>El dueño de la papelería escribió una fórmula para calcular el precio <b>y</b> de cada lápiz, a partir de la cantidad <b>x</b> de lápices que compre el cliente, donde x toma valores entre 1 y 10:</p> <div style=\"text-align:center; font-size:1.3rem; margin:15px; font-family:'Georgia', serif; font-weight:bold; color:var(--primary);\"> y = 1.050 - 50x </div> <p><strong>Sobre la fórmula propuesta, ¿cuál de las siguientes afirmaciones es verdadera?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "La fórmula es correcta, porque si no se compran lápices el precio debe ser $1.000."
      },
      {
        "id": "B",
        "texto": "La fórmula es incorrecta, porque la relación debe ser cuadrática para expresar el precio de todos los lápices."
      },
      {
        "id": "C",
        "texto": "La fórmula es correcta, porque la pendiente negativa indica una disminución del precio de cada lápiz."
      },
      {
        "id": "D",
        "texto": "La fórmula es incorrecta, porque si no se compran lápices el precio es cero."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Si reemplazamos x=1: y = 1050 - 50(1) = 1000. Si x=2: y = 1050 - 50(2) = 950. La fórmula funciona perfectamente. Al ser una función lineal de la forma y = mx + b, la pendiente 'm' es -50. Esta pendiente negativa representa exactamente la disminución de $50 en el precio unitario por cada lápiz adicional."
  },
  {
    "id": "mat_sim_08_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una obra de teatro, se ha decidido sortear un bono de descuento entre las 50 personas que asistieron al evento.</p> <p>Camilo asistió al evento con su padre y sus tres hermanos.</p> <p><strong>¿Cuál es la probabilidad de que Camilo o sus acompañantes se vean beneficiados con el bono?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>1</span><span>50</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>2</span><span>50</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>5</span><span>50</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>10</span><span>50</span></span>"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "El grupo familiar está compuesto por: Camilo (1) + padre (1) + hermanos (3) = 5 personas en total. Como se sortea entre 50 asistentes, la probabilidad (Casos Favorables / Casos Posibles) es <span class=\"frac\"><span>5</span><span>50</span></span>."
  },
  {
    "id": "mat_sim_08_p11",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la tabla se muestra la velocidad promedio que alcanzó un vehículo eléctrico en diferentes intervalos de una carrera.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Intervalo</th><th>Velocidad promedio</th></tr> <tr><td>0 km a 10 km</td><td>60 km/h</td></tr> <tr><td>10 km a 20 km</td><td>50 km/h</td></tr> <tr><td>20 km a 30 km</td><td>80 km/h</td></tr> <tr><td>30 km a 40 km</td><td>90 km/h</td></tr> <tr><td>40 km a 50 km</td><td>60 km/h</td></tr> <tr><td>50 km a 60 km</td><td>50 km/h</td></tr> </table> <p><strong>De acuerdo con la información de la tabla, ¿en cuál intervalo la velocidad promedio fue, por primera vez en la carrera, superior a los 70 km/h?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "30 km a 40 km."
      },
      {
        "id": "B",
        "texto": "40 km a 50 km."
      },
      {
        "id": "C",
        "texto": "20 km a 30 km."
      },
      {
        "id": "D",
        "texto": "10 km a 20 km."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Revisando cronológicamente (de arriba hacia abajo en la tabla): de 0-10 es 60, de 10-20 es 50, y al llegar al intervalo de 20 km a 30 km, la velocidad sube a 80 km/h, superando por primera vez la marca de 70 km/h."
  },
  {
    "id": "mat_sim_08_p12",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La figura muestra el triángulo rectángulo <b>EFG</b>.</p> <p><strong>¿Cuál segmento representa la hipotenusa del triángulo rectángulo EFG?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "EG"
      },
      {
        "id": "B",
        "texto": "FG"
      },
      {
        "id": "C",
        "texto": "ET"
      },
      {
        "id": "D",
        "texto": "FT"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "En todo triángulo rectángulo, la hipotenusa es el lado más largo y siempre se encuentra exactamente al lado opuesto del ángulo recto (90°). Como el ángulo de 90° está en el vértice F, el lado opuesto es el segmento que une E con G (EG).",
    "svg": "<svg viewBox=\"0 0 350 250\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:15px auto;\">\n                        <defs>\n                            <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker>\n                        </defs>\n\n                        <!-- Cuadrícula (30px = 1 unidad) -->\n                        <g stroke=\"#cbd5e1\" stroke-width=\"1\">\n                            <!-- Líneas verticales -->\n                            <line x1=\"30\" y1=\"20\" x2=\"30\" y2=\"230\"/><line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"230\"/>\n                            <line x1=\"90\" y1=\"20\" x2=\"90\" y2=\"230\"/><line x1=\"120\" y1=\"20\" x2=\"120\" y2=\"230\"/>\n                            <line x1=\"150\" y1=\"20\" x2=\"150\" y2=\"230\"/><line x1=\"180\" y1=\"20\" x2=\"180\" y2=\"230\"/>\n                            <line x1=\"210\" y1=\"20\" x2=\"210\" y2=\"230\"/><line x1=\"240\" y1=\"20\" x2=\"240\" y2=\"230\"/>\n                            <line x1=\"270\" y1=\"20\" x2=\"270\" y2=\"230\"/><line x1=\"300\" y1=\"20\" x2=\"300\" y2=\"230\"/>\n                            <line x1=\"330\" y1=\"20\" x2=\"330\" y2=\"230\"/>\n\n                            <!-- Líneas horizontales -->\n                            <line x1=\"30\" y1=\"20\" x2=\"330\" y2=\"20\"/><line x1=\"30\" y1=\"50\" x2=\"330\" y2=\"50\"/>\n                            <line x1=\"30\" y1=\"80\" x2=\"330\" y2=\"80\"/><line x1=\"30\" y1=\"110\" x2=\"330\" y2=\"110\"/>\n                            <line x1=\"30\" y1=\"140\" x2=\"330\" y2=\"140\"/><line x1=\"30\" y1=\"170\" x2=\"330\" y2=\"170\"/>\n                            <line x1=\"30\" y1=\"200\" x2=\"330\" y2=\"200\"/><line x1=\"30\" y1=\"230\" x2=\"330\" y2=\"230\"/>\n                        </g>\n\n                        <!-- Ejes (Origen en 210, 140) -->\n                        <line x1=\"30\" y1=\"140\" x2=\"340\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n                        <line x1=\"210\" y1=\"230\" x2=\"210\" y2=\"10\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n                        \n                        <text x=\"340\" y=\"152\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"12\">x</text>\n                        <text x=\"215\" y=\"15\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"12\">y</text>\n\n                        <!-- Etiquetas X -->\n                        <g font-size=\"11\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#1e293b\">\n                            <text x=\"30\" y=\"155\">-6</text><text x=\"60\" y=\"155\">-5</text>\n                            <text x=\"90\" y=\"155\">-4</text><text x=\"120\" y=\"155\">-3</text>\n                            <text x=\"150\" y=\"155\">-2</text><text x=\"180\" y=\"155\">-1</text>\n                            <text x=\"218\" y=\"155\">0</text><text x=\"240\" y=\"155\">1</text>\n                            <text x=\"270\" y=\"155\">2</text><text x=\"300\" y=\"155\">3</text>\n                            <text x=\"330\" y=\"155\">4</text>\n                        </g>\n\n                        <!-- Etiquetas Y -->\n                        <g font-size=\"11\" font-family=\"system-ui, sans-serif\" font-weight=\"bold\" text-anchor=\"end\" fill=\"#1e293b\">\n                            <text x=\"205\" y=\"234\">-3</text><text x=\"205\" y=\"204\">-2</text>\n                            <text x=\"205\" y=\"174\">-1</text><text x=\"205\" y=\"114\">1</text>\n                            <text x=\"205\" y=\"84\">2</text><text x=\"205\" y=\"54\">3</text>\n                            <text x=\"205\" y=\"24\">4</text>\n                        </g>\n\n                        <!-- Trazos principales -->\n                        <!-- Triángulo principal (Catetos y la Hipotenusa EG) -->\n                        <polygon points=\"90,50 90,200 270,200\" fill=\"none\" stroke=\"#000\" stroke-width=\"3\" stroke-linejoin=\"round\"/>\n                        <line x1=\"90\" y1=\"50\" x2=\"270\" y2=\"200\" stroke=\"#000\" stroke-width=\"3\"/> \n                        \n                        <!-- Recta Transversal (Altura desde F cruzando a T) -->\n                        <line x1=\"50\" y1=\"248\" x2=\"240\" y2=\"20\" stroke=\"#000\" stroke-width=\"3\"/>\n\n                        <!-- Puntos y Nomenclatura -->\n                        <circle cx=\"90\" cy=\"50\" r=\"5\" fill=\"#000\"/> \n                        <text x=\"95\" y=\"45\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"15\">E</text>\n                        \n                        <circle cx=\"90\" cy=\"200\" r=\"5\" fill=\"#000\"/> \n                        <text x=\"105\" y=\"215\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"15\">F</text>\n                        \n                        <circle cx=\"270\" cy=\"200\" r=\"5\" fill=\"#000\"/> \n                        <text x=\"275\" y=\"195\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"15\">G</text>\n                        \n                        <!-- Intersección T -->\n                        <!-- Coordenada T exacta calculada (x=-1.54, y=0.95) -> SVG Px: (163.8, 111.5) -->\n                        <circle cx=\"163.8\" cy=\"111.5\" r=\"5\" fill=\"#000\"/> \n                        <text x=\"155\" y=\"105\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\" font-size=\"15\">T</text>\n\n                        <!-- Ángulo de 90° exacto sobre el punto T -->\n                        <path d=\"M 173.0 119.2 L 165.3 128.4 L 156.1 120.7\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"175\" y=\"132\" font-family=\"Georgia\" font-size=\"13\" font-weight=\"bold\">α = 90°</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la tabla se muestran algunos valores de una función.</p> <table class=\"data-table\" style=\"max-width: 200px; margin: 10px auto;\"> <tr><th style=\"background:#cbd5e1; color:#000;\">x</th><td>0</td><td>1</td><td>2</td></tr> <tr><th style=\"background:#cbd5e1; color:#000;\">y</th><td>1</td><td>2</td><td>5</td></tr> </table> <p><strong>¿A cuál de las siguientes igualdades podrían corresponder estos datos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "y = 3x - 1"
      },
      {
        "id": "B",
        "texto": "y = |2x + 1|"
      },
      {
        "id": "C",
        "texto": "y = 2x - 1"
      },
      {
        "id": "D",
        "texto": "y = x² + 1"
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Debemos probar qué ecuación cumple con todos los pares (x,y) de la tabla. Probemos y = x² + 1:<br>Si x=0 → y = 0² + 1 = 1 (Cumple)<br>Si x=1 → y = 1² + 1 = 2 (Cumple)<br>Si x=2 → y = 2² + 1 = 5 (Cumple)."
  },
  {
    "id": "mat_sim_08_p14",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una oficina se usa un sello fechador y, cada vez que se utiliza, queda cierta cantidad de tinta; una vez que se acaba la tinta, el sello se recarga nuevamente en la almohadilla. La tabla muestra la cantidad de tinta que queda en el sello cada vez que se utiliza.</p> <table class=\"data-table\" style=\"max-width: 400px; margin: 10px auto;\"> <tr><th>Usos</th><th>Tinta restante</th></tr> <tr><td>3</td><td>60 microlitros</td></tr> <tr><td>4</td><td>45 microlitros</td></tr> <tr><td>5</td><td>36 microlitros</td></tr> <tr><td>6</td><td>30 microlitros</td></tr> </table> <p><strong>Teniendo en cuenta la cantidad de tinta restante después de cada uso del sello, ¿cuál de las siguientes afirmaciones es verdadera?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Se consumen entre 15 microlitros y 60 microlitros por cada uso del sello."
      },
      {
        "id": "B",
        "texto": "Se utiliza una cantidad diferente de tinta entre cada uso, y hay una relación inversamente proporcional entre el número de usos y la cantidad de tinta restante."
      },
      {
        "id": "C",
        "texto": "Se utiliza una cantidad constante de tinta entre cada uso, y hay una relación directamente proporcional entre el número de usos y la cantidad de tinta restante."
      },
      {
        "id": "D",
        "texto": "Se consumen múltiplos de 30 microlitros por cada uso del sello, por ejemplo, 60 o 90 microlitros."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Dos magnitudes son inversamente proporcionales si al multiplicar sus valores siempre obtenemos una constante. Revisemos la tabla: 3×60=180, 4×45=180, 5×36=180, 6×30=180. Al existir esta constante (k=180), se confirma la relación inversamente proporcional."
  },
  {
    "id": "mat_sim_08_p15",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un parqueadero de motos cobra de acuerdo con el tiempo de uso, como se muestra en la gráfica.</p> <p><strong>¿Qué tendencia se puede identificar a partir de la gráfica?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El precio es constante después de las primeras 6 horas de uso del parqueadero."
      },
      {
        "id": "B",
        "texto": "El precio es constante durante todo el tiempo en el que se usa el parqueadero."
      },
      {
        "id": "C",
        "texto": "El precio aumenta linealmente después de las primeras 6 horas de uso del parqueadero."
      },
      {
        "id": "D",
        "texto": "El precio aumenta linealmente durante todo el tiempo en el que se usa el parqueadero."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Al observar la gráfica, vemos que la línea es completamente horizontal desde la hora 0 hasta la hora 6 (precio constante de $2.000). A partir de la hora 6, la línea comienza a ascender de forma recta, indicando un aumento lineal del precio.",
    "svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:10px auto;\">\n                        <text x=\"175\" y=\"15\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\">Precio en función del tiempo de uso</text>\n                        <text x=\"175\" y=\"27\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"bold\">de un parqueadero</text>\n                        \n                        <!-- Ejes -->\n                        <line x1=\"50\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"50\" y1=\"170\" x2=\"50\" y2=\"30\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Etiquetas Y -->\n                        <text x=\"45\" y=\"173\" font-size=\"8\" text-anchor=\"end\">0</text>\n                        <text x=\"45\" y=\"158\" font-size=\"8\" text-anchor=\"end\">1.000</text>\n                        <text x=\"45\" y=\"143\" font-size=\"8\" text-anchor=\"end\">2.000</text>\n                        <text x=\"45\" y=\"128\" font-size=\"8\" text-anchor=\"end\">3.000</text>\n                        <text x=\"45\" y=\"113\" font-size=\"8\" text-anchor=\"end\">4.000</text>\n                        <text x=\"45\" y=\"98\" font-size=\"8\" text-anchor=\"end\">5.000</text>\n                        <text x=\"45\" y=\"83\" font-size=\"8\" text-anchor=\"end\">6.000</text>\n                        <text x=\"45\" y=\"68\" font-size=\"8\" text-anchor=\"end\">7.000</text>\n                        <text x=\"45\" y=\"53\" font-size=\"8\" text-anchor=\"end\">8.000</text>\n                        <text x=\"45\" y=\"38\" font-size=\"8\" text-anchor=\"end\">9.000</text>\n                        <text x=\"45\" y=\"23\" font-size=\"8\" text-anchor=\"end\">10.000</text>\n                        <text x=\"15\" y=\"100\" font-size=\"10\" font-weight=\"bold\" transform=\"rotate(-90 15,100)\" text-anchor=\"middle\">Precio (pesos)</text>\n\n                        <!-- Etiquetas X -->\n                        <text x=\"50\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">0</text>\n                        <line x1=\"90\" y1=\"170\" x2=\"90\" y2=\"173\" stroke=\"#000\"/><text x=\"90\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">2</text>\n                        <line x1=\"130\" y1=\"170\" x2=\"130\" y2=\"173\" stroke=\"#000\"/><text x=\"130\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">4</text>\n                        <line x1=\"170\" y1=\"170\" x2=\"170\" y2=\"173\" stroke=\"#000\"/><text x=\"170\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">6</text>\n                        <line x1=\"210\" y1=\"170\" x2=\"210\" y2=\"173\" stroke=\"#000\"/><text x=\"210\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">8</text>\n                        <line x1=\"250\" y1=\"170\" x2=\"250\" y2=\"173\" stroke=\"#000\"/><text x=\"250\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">10</text>\n                        <line x1=\"290\" y1=\"170\" x2=\"290\" y2=\"173\" stroke=\"#000\"/><text x=\"290\" y=\"185\" font-size=\"9\" text-anchor=\"middle\">12</text>\n                        <text x=\"175\" y=\"198\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Tiempo (horas)</text>\n                        \n                        <!-- Gráfica: (0, 2000) a (6, 2000) y de (6, 2000) a (12, 8000) -->\n                        <polyline points=\"50,143 170,143 290,23\" fill=\"none\" stroke=\"var(--primary)\" stroke-width=\"2.5\"/>\n                        <circle cx=\"170\" cy=\"143\" r=\"3\" fill=\"var(--primary)\"/>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p16",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una empresa diseña y produce cajas de diferentes tamaños. Un tipo específico de cajas se fabrica teniendo en cuenta ciertas relaciones entre las medidas de su ancho, largo y altura, así:</p> <ul style=\"margin-left: 20px;\"> <li>La medida del largo debe corresponder al doble de la medida del ancho.</li> <li>La medida del ancho debe corresponder a la tercera parte de la medida de la altura.</li> </ul> <p style=\"text-align:center; font-weight:bold;\">Volumen de la caja = Ancho × Largo × Altura</p> <p>Un operario de la empresa afirma que solamente con conocer la medida de la altura de la caja puede determinarse su volumen.</p> <p><strong>¿Es correcta o incorrecta la afirmación del operario?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Incorrecta, porque el producto de las medidas se desconoce, dado que solo se tiene una de ellas."
      },
      {
        "id": "B",
        "texto": "Correcta, porque el volumen equivale a seis veces el cubo de la medida de la altura."
      },
      {
        "id": "C",
        "texto": "Correcta, porque el volumen equivale a dos novenos del cubo de la medida de la altura."
      },
      {
        "id": "D",
        "texto": "Incorrecta, porque se debe conocer el área de la base de la caja y, para ello, se necesita el ancho y largo."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Si Ancho(A) = Altura(H)/3 y Largo(L) = 2A, entonces L = 2(H/3). El Volumen es V = A &times; L &times; H. Sustituyendo: V = <span class=\"frac\"><span>H</span><span>3</span></span> &times; <span class=\"frac\"><span>2H</span><span>3</span></span> &times; H = <span class=\"frac\"><span>2H³</span><span>9</span></span>. Efectivamente, conociendo solo H podemos hallar el volumen.",
    "svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" style=\"background:#fff; max-width:350px; display:block; margin:15px auto;\">\n                        <!-- Cara Izquierda (Ancho x Altura) -->\n                        <polygon points=\"70,50 120,80 120,160 70,130\" fill=\"#6b7280\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <!-- Cara Frontal (Largo x Altura) -->\n                        <polygon points=\"120,80 260,80 260,160 120,160\" fill=\"#9ca3af\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        <!-- Cara Superior (Largo x Ancho) -->\n                        <polygon points=\"70,50 210,50 260,80 120,80\" fill=\"#cbd5e1\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Cinta de empaque superior -->\n                        <polygon points=\"90,62 230,62 235,65 95,65\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"0.5\"/>\n                        <!-- Despliegue de la cinta en la cara lateral izquierda -->\n                        <polygon points=\"90,62 95,65 95,72 90,69\" fill=\"#f8fafc\" stroke=\"#e2e8f0\" stroke-width=\"0.5\"/>\n\n                        <!-- Cota Ancho -->\n                        <line x1=\"60\" y1=\"135\" x2=\"110\" y2=\"165\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"80\" y=\"162\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"end\">Ancho</text>\n                        \n                        <!-- Cota Largo -->\n                        <line x1=\"120\" y1=\"170\" x2=\"260\" y2=\"170\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"190\" y=\"185\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"middle\">Largo</text>\n                        \n                        <!-- Cota Altura -->\n                        <line x1=\"270\" y1=\"80\" x2=\"270\" y2=\"160\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"275\" y=\"125\" font-family=\"system-ui, sans-serif\" font-size=\"12\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"start\">Altura</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p17",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El caballo de Julián compitió en 13 carreras durante un año, de las cuales ganó 3 y perdió 10.</p> <p>Para calcular la probabilidad de que su caballo gane la siguiente carrera, Julián utiliza la información de las 13 carreras y construye una fracción así:</p> <ul style=\"margin-left: 20px;\"> <li><strong>Paso 1.</strong> Ubica en el numerador el número de veces que su caballo ganó.</li> <li><strong>Paso 2.</strong> Ubica en el denominador el número de veces que su caballo perdió.</li> <li><strong>Paso 3.</strong> Multiplica el resultado por 100.</li> </ul> <p>De esta forma, Julián determina que su caballo tiene una probabilidad del 30% de ganar la carrera.</p> <p><strong>¿El procedimiento de Julián contiene un error?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque se debe ubicar en el denominador la diferencia entre el número de veces que ganó y el número de veces que perdió."
      },
      {
        "id": "B",
        "texto": "No, porque se debe multiplicar el porcentaje total por la fracción entre el número de veces que ganó y el número de veces que perdió."
      },
      {
        "id": "C",
        "texto": "Sí, porque se debe ubicar en el denominador la suma del número de veces que ganó y el número de veces que perdió."
      },
      {
        "id": "D",
        "texto": "No, porque se debe multiplicar por 100 para determinar el porcentaje de carreras ganadas."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "La probabilidad de un evento se calcula dividiendo los Casos Favorables entre el TOTAL de Casos Posibles. En el Paso 2, Julián dividió entre las veces que perdió (10), en lugar de dividir entre el total de carreras (3 + 10 = 13). Por lo tanto, el denominador correcto es la suma de victorias y derrotas."
  },
  {
    "id": "mat_sim_08_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Natalia quiere ahorrar $100.000 cada mes durante tres meses. Como ayuda para su ahorro, sus padres le han propuesto dos opciones, pero solo puede elegir una de ellas.</p> <div style=\"display:flex; flex-wrap:wrap; gap:15px; justify-content:center;\"> <div> <strong>Opción 1.</strong> Al finalizar cada mes, su mamá le regala un porcentaje del dinero que tenga acumulado en su ahorro: <table class=\"data-table\" style=\"max-width:250px;\"> <tr><th>Ahorro acumulado</th><th>Mes</th><th>Porcentaje regalado por la mamá</th></tr> <tr><td>$100.000</td><td>1</td><td>10 %</td></tr> <tr><td>$200.000</td><td>2</td><td>10 %</td></tr> <tr><td>$300.000</td><td>3</td><td>10 %</td></tr> </table> </div> <div> <strong>Opción 2.</strong> Al finalizar cada mes, su papá le regala un porcentaje del dinero que tenga acumulado en su ahorro: <table class=\"data-table\" style=\"max-width:250px;\"> <tr><th>Ahorro acumulado</th><th>Mes</th><th>Porcentaje regalado por el papá</th></tr> <tr><td>$100.000</td><td>1</td><td>2 %</td></tr> <tr><td>$200.000</td><td>2</td><td>4 %</td></tr> <tr><td>$300.000</td><td>3</td><td>16 %</td></tr> </table> </div> </div> <p>Natalia decide elegir la option en la que le regalen la mayor cantidad de dinero y eligió la ayuda de la mamá.</p> <p><strong>¿Es correcta la elección de Natalia?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque la ayuda total de su mamá es de $60.000 mientras que la de su papá es de $58.000."
      },
      {
        "id": "B",
        "texto": "No, porque la ayuda total de su papá es de $48.000 mientras que la de su mamá es de $30.000."
      },
      {
        "id": "C",
        "texto": "Sí, porque con la ayuda de la mamá recibe el 30% del total ahorrado y con la ayuda del papá solo recibe el 22%."
      },
      {
        "id": "D",
        "texto": "No, porque con la ayuda del papá el porcentaje del tercer mes es del 16% y con la ayuda de la mamá es solo del 10%."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Calculemos. Mamá: 10% de 100k (10k) + 10% de 200k (20k) + 10% de 300k (30k) = 60.000. Papá: 2% de 100k (2k) + 4% de 200k (8k) + 16% de 300k (48k) = 58.000. La mamá le regala 60.000 y el papá 58.000. La elección de Natalia fue matemáticamente correcta."
  },
  {
    "id": "mat_sim_08_p19",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una biblioteca virtual se registraron 100 consultas en un día. Del total de consultas de ese día, el 30% fueron de Biología, el 20% de Inglés, el 40% de Sociales y el 10% de Matemáticas.</p> <p><strong>¿Cuál de las siguientes gráficas corresponde al número de consultas, por materia, hechas ese día en la biblioteca virtual?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center; padding:10px;\"> <b>Consultas en la biblioteca virtual</b><br> <svg viewBox=\"0 0 200 120\" height=\"120\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <!-- Ejes --> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/> <line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <!-- Flechas --> <polygon points=\"30,5 27,10 33,10\" fill=\"#000\"/> <polygon points=\"195,90 190,87 190,93\" fill=\"#000\"/> <!-- Ticks Y --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text> <text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text> <text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Eje Y label --> <text x=\"10\" y=\"50\" font-size=\"7\" font-weight=\"bold\" transform=\"rotate(-90 10,50)\" text-anchor=\"middle\">Número de consultas</text> <!-- Eje X label --> <text x=\"110\" y=\"115\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">Materias</text> <!-- Etiquetas X --> <text x=\"50\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Biología</text> <text x=\"90\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Inglés</text> <text x=\"130\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Sociales</text> <text x=\"170\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Matemáticas</text> <!-- Barras: Bio=30(y=45,h=45), Ing=20(y=60,h=30), Soc=40(y=30,h=60), Mat=10(y=75,h=15) --> <rect x=\"42\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"82\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"122\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\" stroke=\"#000\"/> </svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center; padding:10px;\"> <b>Consultas en la biblioteca virtual</b><br> <svg viewBox=\"0 0 200 120\" height=\"120\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <!-- Ejes --> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/> <line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <polygon points=\"30,5 27,10 33,10\" fill=\"#000\"/> <polygon points=\"195,90 190,87 190,93\" fill=\"#000\"/> <!-- Ticks Y --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text> <text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text> <text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Labels --> <text x=\"10\" y=\"50\" font-size=\"7\" font-weight=\"bold\" transform=\"rotate(-90 10,50)\" text-anchor=\"middle\">Número de consultas</text> <text x=\"110\" y=\"115\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">Materias</text> <text x=\"50\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Biología</text> <text x=\"90\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Inglés</text> <text x=\"130\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Sociales</text> <text x=\"170\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Matemáticas</text> <!-- Barras: Bio=20(y=60,h=30), Ing=30(y=45,h=45), Soc=40(y=30,h=60), Mat=10(y=75,h=15) --> <rect x=\"42\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"122\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\" stroke=\"#000\"/> </svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center; padding:10px;\"> <b>Consultas en la biblioteca virtual</b><br> <svg viewBox=\"0 0 200 120\" height=\"120\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <!-- Ejes --> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/> <line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <polygon points=\"30,5 27,10 33,10\" fill=\"#000\"/> <polygon points=\"195,90 190,87 190,93\" fill=\"#000\"/> <!-- Ticks Y --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text> <text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text> <text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Labels --> <text x=\"10\" y=\"50\" font-size=\"7\" font-weight=\"bold\" transform=\"rotate(-90 10,50)\" text-anchor=\"middle\">Número de consultas</text> <text x=\"110\" y=\"115\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">Materias</text> <text x=\"50\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Biología</text> <text x=\"90\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Inglés</text> <text x=\"130\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Sociales</text> <text x=\"170\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Matemáticas</text> <!-- Barras: Bio=40(y=30,h=60), Ing=30(y=45,h=45), Soc=20(y=60,h=30), Mat=10(y=75,h=15) --> <rect x=\"42\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"82\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"122\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"162\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\" stroke=\"#000\"/> </svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center; padding:10px;\"> <b>Consultas en la biblioteca virtual</b><br> <svg viewBox=\"0 0 200 120\" height=\"120\" style=\"margin-top:10px; background:#fff; border-radius:4px;\"> <!-- Ejes --> <line x1=\"30\" y1=\"90\" x2=\"190\" y2=\"90\" stroke=\"#000\"/> <line x1=\"30\" y1=\"90\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <polygon points=\"30,5 27,10 33,10\" fill=\"#000\"/> <polygon points=\"195,90 190,87 190,93\" fill=\"#000\"/> <!-- Ticks Y --> <text x=\"25\" y=\"92\" font-size=\"7\" text-anchor=\"end\">0</text> <text x=\"25\" y=\"77\" font-size=\"7\" text-anchor=\"end\">10</text> <text x=\"25\" y=\"62\" font-size=\"7\" text-anchor=\"end\">20</text> <text x=\"25\" y=\"47\" font-size=\"7\" text-anchor=\"end\">30</text> <text x=\"25\" y=\"32\" font-size=\"7\" text-anchor=\"end\">40</text> <text x=\"25\" y=\"17\" font-size=\"7\" text-anchor=\"end\">50</text> <!-- Labels --> <text x=\"10\" y=\"50\" font-size=\"7\" font-weight=\"bold\" transform=\"rotate(-90 10,50)\" text-anchor=\"middle\">Número de consultas</text> <text x=\"110\" y=\"115\" font-size=\"7\" font-weight=\"bold\" text-anchor=\"middle\">Materias</text> <text x=\"50\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Biología</text> <text x=\"90\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Inglés</text> <text x=\"130\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Sociales</text> <text x=\"170\" y=\"102\" font-size=\"7\" text-anchor=\"middle\">Matemáticas</text> <!-- Barras: Bio=10(y=75,h=15), Ing=20(y=60,h=30), Soc=30(y=45,h=45), Mat=40(y=30,h=60) --> <rect x=\"42\" y=\"75\" width=\"16\" height=\"15\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"82\" y=\"60\" width=\"16\" height=\"30\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"122\" y=\"45\" width=\"16\" height=\"45\" fill=\"#1e293b\" stroke=\"#000\"/> <rect x=\"162\" y=\"30\" width=\"16\" height=\"60\" fill=\"#1e293b\" stroke=\"#000\"/> </svg></div>"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Como la base es de 100 consultas exactas, los porcentajes equivalen a la cantidad de personas. Biología = 30, Inglés = 20, Sociales = 40 y Matemáticas = 10. Al verificar el eje vertical de cada gráfica, notamos que solo la opción correcta dibuja las barras hasta la altura numérica exacta que corresponde a cada materia (ej: Sociales llega justo a la línea del 40)."
  },
  {
    "id": "mat_sim_08_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Para elegir el uniforme de un equipo de fútbol existen 5 colores posibles para las camisetas, 4 para las pantalonetas y 3 para las medias.</p> <p><strong>¿Cuántos uniformes diferentes se pueden tener para el equipo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "20 uniformes"
      },
      {
        "id": "B",
        "texto": "60 uniformes"
      },
      {
        "id": "C",
        "texto": "12 uniformes"
      },
      {
        "id": "D",
        "texto": "4 uniformes"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Aplicando el Principio Multiplicativo de la combinatoria, multiplicamos las opciones de cada prenda: 5 (camisetas) × 4 (pantalonetas) × 3 (medias) = 60 combinaciones distintas."
  },
  {
    "id": "mat_sim_08_p21",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La imagen muestra la cara lateral del diseño de un tren hecho por una fábrica de juguetes.</p> <p>El departamento de producción opina que deben agregarse algunas ruedas al diseño para mejorar la estabilidad del juguete. Sabiendo que todas las ruedas deben tener el mismo radio <b>r</b> y conservar una distancia <b>r</b> entre ellas,</p> <p><strong>¿cuántas ruedas pueden agregarse al diseño sin modificar la posición de las que ya se colocaron?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "4"
      },
      {
        "id": "B",
        "texto": "1"
      },
      {
        "id": "C",
        "texto": "3"
      },
      {
        "id": "D",
        "texto": "2"
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "Según la imagen, el largo total del chasis del tren es 13r. Vemos tres medidas indicadas con 'r': un espacio libre 'r' antes de la primera rueda, el radio 'r' dentro de la rueda, y un espacio libre 'r' después de la última rueda. Si el total es 13r y le restamos el espacio libre inicial (r) y el final (r), nos queda un espacio de 11r para distribuir las ruedas y las separaciones entre ellas. Si 'n' es el número total de ruedas, cada una ocupa 2r (su diámetro), y los espacios libres entre ellas son (n-1), cada uno ocupando 'r'. La ecuación es: n(2r) + (n-1)r = 11r. Resolviendo: 2nr + nr - r = 11r ➔ 3nr = 12r ➔ n = 4. En total caben 4 ruedas. Como el tren ya tiene 2 dibujadas, se le pueden agregar exactamente 2 más.",
    "svg": "<svg viewBox=\"0 0 350 160\" width=\"100%\" style=\"background:#fff; max-width:400px; display:block; margin:15px auto;\">\n                        <!-- Chassis -->\n                        <path d=\"M 40 30 L 130 30 L 130 60 L 150 60 L 150 50 L 170 50 L 170 60 L 190 60 L 190 50 L 210 50 L 210 60 L 230 60 L 230 10 L 300 10 L 300 100 L 40 100 Z\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n                        <rect x=\"50\" y=\"40\" width=\"40\" height=\"20\" fill=\"none\" stroke=\"#333\" stroke-width=\"2\"/>\n                        \n                        <!-- Wheels -->\n                        <circle cx=\"80\" cy=\"100\" r=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n                        <circle cx=\"80\" cy=\"100\" r=\"2\" fill=\"#333\"/>\n                        <circle cx=\"260\" cy=\"100\" r=\"20\" fill=\"#fff\" stroke=\"#333\" stroke-width=\"2\"/>\n                        <circle cx=\"260\" cy=\"100\" r=\"2\" fill=\"#333\"/>\n                        \n                        <!-- r indicators -->\n                        <!-- Left gap -->\n                        <line x1=\"40\" y1=\"100\" x2=\"40\" y2=\"115\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <line x1=\"60\" y1=\"100\" x2=\"60\" y2=\"115\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <line x1=\"40\" y1=\"110\" x2=\"60\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <text x=\"50\" y=\"105\" font-size=\"12\" font-family=\"Georgia\" text-anchor=\"middle\">r</text>\n\n                        <!-- Radius of left wheel -->\n                        <line x1=\"80\" y1=\"100\" x2=\"100\" y2=\"100\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <text x=\"90\" y=\"95\" font-size=\"12\" font-family=\"Georgia\" text-anchor=\"middle\">r</text>\n\n                        <!-- Right gap -->\n                        <line x1=\"280\" y1=\"100\" x2=\"280\" y2=\"115\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <line x1=\"300\" y1=\"100\" x2=\"300\" y2=\"115\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <line x1=\"280\" y1=\"110\" x2=\"300\" y2=\"110\" stroke=\"#333\" stroke-width=\"1.5\"/>\n                        <text x=\"290\" y=\"105\" font-size=\"12\" font-family=\"Georgia\" text-anchor=\"middle\">r</text>\n\n                        <!-- 13r total line -->\n                        <line x1=\"40\" y1=\"135\" x2=\"300\" y2=\"135\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"40\" y1=\"130\" x2=\"40\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"300\" y1=\"130\" x2=\"300\" y2=\"140\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"170\" y=\"130\" font-weight=\"bold\" font-family=\"Georgia\" font-size=\"14\" text-anchor=\"middle\">13r</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p22",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la siguiente gráfica están representadas dos líneas rectas con sus respectivas ecuaciones.</p> <p><strong>¿Cuál es el punto de intersección de las dos rectas?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "( 2 , 8 )"
      },
      {
        "id": "B",
        "texto": "( 3 , 5 )"
      },
      {
        "id": "C",
        "texto": "( 5 , 3 )"
      },
      {
        "id": "D",
        "texto": "( -2 , 8 )"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Para hallar la intersección, igualamos las ecuaciones. Despejamos y en ambas: y = 8 - x, y = x - 2. Igualando: 8 - x = x - 2 => 10 = 2x => x = 5. Sustituyendo en la primera: y = 8 - 5 = 3. El punto exacto de cruce es (5, 3).",
    "svg": "<svg viewBox=\"0 0 350 220\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:450px; display:block; margin:15px auto;\">\n                        <defs>\n                            <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker>\n                        </defs>\n                        <!-- Fine Grid (0.2 units = 6px) -->\n                        <pattern id=\"fineGrid\" width=\"6\" height=\"6\" patternUnits=\"userSpaceOnUse\">\n                            <path d=\"M 6 0 L 0 0 0 6\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"0.5\"/>\n                        </pattern>\n                        <!-- Coarse Grid (1 unit = 30px) -->\n                        <pattern id=\"coarseGrid\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\">\n                            <rect width=\"30\" height=\"30\" fill=\"url(#fineGrid)\"/>\n                            <path d=\"M 30 0 L 0 0 0 30\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"1\"/>\n                        </pattern>\n                        \n                        <rect x=\"40\" y=\"20\" width=\"280\" height=\"150\" fill=\"url(#coarseGrid)\" />\n\n                        <!-- Axes -->\n                        <line x1=\"40\" y1=\"170\" x2=\"330\" y2=\"170\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n                        <line x1=\"40\" y1=\"170\" x2=\"40\" y2=\"10\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n                        <text x=\"335\" y=\"175\" font-size=\"12\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">x</text>\n                        <text x=\"30\" y=\"15\" font-size=\"12\" font-family=\"Georgia\" font-weight=\"bold\" font-style=\"italic\">y</text>\n\n                        <!-- X Labels -->\n                        <text x=\"70\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">1</text>\n                        <text x=\"100\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">2</text>\n                        <text x=\"130\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">3</text>\n                        <text x=\"160\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">4</text>\n                        <text x=\"190\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">5</text>\n                        <text x=\"220\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">6</text>\n                        <text x=\"250\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">7</text>\n                        <text x=\"280\" y=\"185\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">8</text>\n\n                        <!-- Y Labels -->\n                        <text x=\"30\" y=\"144\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">1</text>\n                        <text x=\"30\" y=\"114\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">2</text>\n                        <text x=\"30\" y=\"84\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">3</text>\n                        <text x=\"30\" y=\"54\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">4</text>\n                        <text x=\"30\" y=\"175\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"end\">0</text>\n\n                        <!-- Line 1: x + y = 8 -->\n                        <line x1=\"130\" y1=\"20\" x2=\"280\" y2=\"170\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"110\" y=\"70\" font-size=\"14\" font-weight=\"bold\" font-family=\"Georgia\" font-style=\"italic\">x + y = 8</text>\n\n                        <!-- Line 2: -x + y = -2 -->\n                        <line x1=\"100\" y1=\"170\" x2=\"250\" y2=\"20\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <text x=\"210\" y=\"70\" font-size=\"14\" font-weight=\"bold\" font-family=\"Georgia\" font-style=\"italic\">-x + y = -2</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_08_p23",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un profesor les pide a sus estudiantes que escriban los primeros cinco términos de una sucesión, de tal manera que cada uno corresponda al <b>doble del número anterior</b>.</p> <p>Uno de sus estudiantes presenta los siguientes números:</p> <div style=\"font-size: 1.8rem; font-weight: bold; color: var(--primary); text-align: center; margin: 15px 0;\">2, 4, 6, 8, 10</div> <p><strong>¿Cumplen estos números los requerimientos presentados por el profesor?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, pues todos los números presentados son pares."
      },
      {
        "id": "B",
        "texto": "No, pues algunos de los números presentados son múltiplos de 3 y de 5."
      },
      {
        "id": "C",
        "texto": "Sí, pues todos los números presentados tienen una diferencia de dos con el número anterior."
      },
      {
        "id": "D",
        "texto": "No, pues algunos de los números presentados son distintos al multiplicar por 2 el número anterior."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "El requerimiento era que cada número fuera el doble del anterior (ej: 2, 4, 8, 16, 32...). El estudiante escribió una sucesión donde sumó 2 a cada término, lo que la hace aritmética en lugar de geométrica. Por ejemplo, el 6 no es el doble de 4."
  },
  {
    "id": "mat_sim_08_p24",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un parque temático, al encargado de las entradas se le pidió elaborar un informe sobre el número de visitantes que ingresaron al parque en cada temporada. El empleado entregó los resultados en la siguiente tabla:</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Temporada</th><th>Número de días</th><th>Número de visitantes</th></tr> <tr><td>1</td><td>90</td><td>2.577</td></tr> <tr><td>2</td><td>92</td><td>2.386</td></tr> <tr><td>3</td><td>85</td><td>2.723</td></tr> <tr><td>4</td><td>81</td><td>2.920</td></tr> <tr><td>5</td><td>84</td><td>2.345</td></tr> </table> <p><strong>Con base en la información registrada, ¿cuál es el orden de las temporadas, de mayor a menor, de acuerdo con el número de visitantes que ingresaron?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Temporada 2, temporada 1, temporada 3, temporada 5 y temporada 4."
      },
      {
        "id": "B",
        "texto": "Temporada 1, temporada 2, temporada 4, temporada 3 y temporada 5."
      },
      {
        "id": "C",
        "texto": "Temporada 5, temporada 4, temporada 3, temporada 2 y temporada 1."
      },
      {
        "id": "D",
        "texto": "Temporada 4, temporada 3, temporada 1, temporada 2 y temporada 5."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Debemos ordenar la última columna de mayor a menor. Los valores son: 2.920 (Temp 4), 2.723 (Temp 3), 2.577 (Temp 1), 2.386 (Temp 2) y 2.345 (Temp 5). El orden correcto es 4, 3, 1, 2, 5."
  },
  {
    "id": "mat_sim_08_p25",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una ciudad, para ir desde un punto hasta otro, se deben recorrer 9 km al norte y, luego, 12 km al oriente, formando un ángulo recto. Ahora bien, para calcular la distancia que separa a los dos puntos, se usa el siguiente procedimiento:</p> <ul style=\"margin-left: 20px;\"> <li><strong>Paso 1.</strong> Se eleva al cuadrado la distancia del recorrido hacia el norte.</li> <li><strong>Paso 2.</strong> Se eleva al cuadrado la distancia del recorrido hacia el oriente.</li> <li><strong>Paso 3.</strong> Se suman los resultados de los pasos 1 y 2.</li> <li><strong>Paso 4.</strong> Se calcula la raíz cuadrada del resultado del paso 3.</li> </ul> <p><strong>De acuerdo con esto, ¿cuál es la distancia, en kilómetros, que separa los dos puntos mencionados?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "√6"
      },
      {
        "id": "B",
        "texto": "√42"
      },
      {
        "id": "C",
        "texto": "√63"
      },
      {
        "id": "D",
        "texto": "√225"
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Aplicando el teorema de Pitágoras como lo indica el procedimiento: 9² = 81. 12² = 144. Suma = 81 + 144 = 225. La distancia final es la raíz cuadrada de esa suma, es decir, √225 (que equivale a 15 km)."
  }
]);
