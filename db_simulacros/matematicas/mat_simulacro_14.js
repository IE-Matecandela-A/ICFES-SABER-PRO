// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas - Simulacro Matemáticas 14 (Real 2024-2)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_14_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La figura muestra una pared de una habitación que tiene forma cuadrada de lado L y una ventana hexagonal de lado M.</p> <p>Se quiere pintar la pared y por eso se necesita calcular el área de la pared que se va a pintar. ¿Cuál de las siguientes opciones permite calcular correctamente esta área?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Calcular el área del cuadrado de lado L y el área del hexágono de lado M y luego sumar dichas áreas."
      },
      {
        "id": "B",
        "texto": "Al lado L del cuadrado se le debe restar el lado M del hexágono y luego se debe elevar al cuadrado el resultado de la resta."
      },
      {
        "id": "C",
        "texto": "Al área del cuadrado de lado L se le debe restar el área del hexágono de lado M."
      },
      {
        "id": "D",
        "texto": "Al lado del cuadrado L se debe sumar el lado M del hexágono y luego se debe elevar al cuadrado el resultado de la suma."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Para pintar únicamente el espacio de la pared sólida excluyendo la ventana, debemos hallar el área de la figura exterior envolvente (el cuadrado de lado L) y restarle el área de la abertura interior (la ventana hexagonal de lado M).",
    "svg": "<svg viewBox=\"0 0 200 200\" width=\"100%\" style=\"background:#fff; max-width:200px; display:block; margin:15px auto; border:1px solid #ccc; border-radius:8px;\">\n                        <!-- Cuadrado exterior -->\n                        <rect x=\"20\" y=\"20\" width=\"160\" height=\"160\" fill=\"#f8fafc\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <!-- Hexágono regular interior (Top y bottom planos, left y right con picos) -->\n                        <polygon points=\"80,45.36 120,45.36 140,80 120,114.64 80,114.64 60,80\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <!-- 6 líneas punteadas desde el centro (100, 80) hacia los vértices -->\n                        <line x1=\"100\" y1=\"80\" x2=\"80\" y2=\"45.36\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <line x1=\"100\" y1=\"80\" x2=\"120\" y2=\"45.36\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <line x1=\"100\" y1=\"80\" x2=\"140\" y2=\"80\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <line x1=\"100\" y1=\"80\" x2=\"120\" y2=\"114.64\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <line x1=\"100\" y1=\"80\" x2=\"80\" y2=\"114.64\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n                        <line x1=\"100\" y1=\"80\" x2=\"60\" y2=\"80\" stroke=\"#000\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\"/>\n\n                        <!-- Cota M (justo debajo del lado inferior del hexágono) -->\n                        <line x1=\"80\" y1=\"130\" x2=\"120\" y2=\"130\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"80\" y1=\"125\" x2=\"80\" y2=\"135\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"120\" y1=\"125\" x2=\"120\" y2=\"135\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"100\" y=\"142\" font-size=\"14\" font-family=\"Georgia\" font-style=\"italic\" text-anchor=\"middle\" fill=\"#000\">M</text>\n\n                        <!-- Cota L de la pared -->\n                        <line x1=\"20\" y1=\"190\" x2=\"180\" y2=\"190\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"20\" y1=\"185\" x2=\"20\" y2=\"195\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"180\" y1=\"185\" x2=\"180\" y2=\"195\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"100\" y=\"185\" font-size=\"14\" font-family=\"Georgia\" font-style=\"italic\" text-anchor=\"middle\" fill=\"#000\">L</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p2",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En clase de Matemáticas el profesor planteó la siguiente suma de fracciones:</p> <p style=\"text-align:center; font-family:'Georgia'; font-size:1.4rem;\"><span class=\"frac\"><span>x</span><span>3</span></span> + <span class=\"frac\"><span>x</span><span>6</span></span></p> <p>Y explicó que, para que ambas fracciones tengan el mismo denominador y se puedan sumar más fácil, se puede multiplicar por 2 el numerador y el denominador de la primera fracción. Con eso se obtiene una fracción equivalente con denominador 6:</p> <p style=\"text-align:center; font-family:'Georgia'; font-size:1.4rem;\"><span class=\"frac\"><span>x</span><span>3</span></span> = <span class=\"frac\"><span>2x</span><span>2(3)</span></span> = <span class=\"frac\"><span>2x</span><span>6</span></span></p> <p>De esta manera, la suma de fracciones se resuelve así:</p> <p style=\"text-align:center; font-family:'Georgia'; font-size:1.4rem;\"><span class=\"frac\"><span>x</span><span>3</span></span> + <span class=\"frac\"><span>x</span><span>6</span></span> = <span class=\"frac\"><span>2x</span><span>6</span></span> + <span class=\"frac\"><span>x</span><span>6</span></span> = <span class=\"frac\"><span>3x</span><span>6</span></span></p> <p><strong>Siguiendo la explicación del profesor, ¿cuál es el resultado obtenido al realizar la suma de fracciones x/2 + x/6?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>5x</span><span>6</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>4x</span><span>6</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>3x</span><span>6</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>2x</span><span>6</span></span>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Siguiendo la metodología: convertimos x/2 a una fracción equivalente con denominador 6 multiplicando numerador y denominador por 3: <span class='frac'><span>3 &times; x</span><span>3 &times; 2</span></span> = <span class='frac'><span>3x</span><span>6</span></span>. Luego realizamos la suma directa: <span class='frac'><span>3x</span><span>6</span></span> + <span class='frac'><span>x</span><span>6</span></span> = <span class='frac'><span>4x</span><span>6</span></span>."
  },
  {
    "id": "mat_sim_14_p3",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una feria local cuenta con un juego de azar que consiste en enviar un hámster por un sistema de tubos como el que se muestra en la figura, y el juego tiene las siguientes reglas:</p> <p>• El hámster inicia su recorrido en el tubo de entrada y lo termina en alguno de los tubos etiquetados con los números '1' o '2'.</p> <p>El jugador gana si el hámster termina el recorrido por un tubo etiquetado con el número '2'.</p> <p>Para calcular la probabilidad de que un jugador pierda, se realiza el siguiente procedimiento:</p> <p><strong>Paso 1.</strong> Contar el número de salidas con el número '1'.</p> <p><strong>Paso 2.</strong> Contar el número de salidas totales.</p> <p><strong>Paso 3.</strong> Dividir el resultado del paso 1 entre el resultado del paso 2.</p> <p>¿Cuál es la probabilidad de que un jugador pierda en este juego?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>12</span><span>16</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>4</span><span>12</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>8</span><span>16</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>8</span><span>12</span></span>"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Contando detalladamente de arriba hacia abajo, hay un total de 16 salidas. De estas, hay exactamente 12 etiquetadas con el número '1' (losing) y 4 con el número '2' (winning). La probabilidad es de 12/16.",
    "svg": "<svg viewBox=\"0 0 350 220\" width=\"100%\" style=\"background:#fff; max-width:420px; display:block; margin:15px auto; border-radius:8px; border:1px solid #ccc;\">\n                        <!-- 1. TUBOS FONDO (BORDES OSCUROS) -->\n                        <g stroke=\"#334155\" stroke-width=\"14\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n                            <path d=\"M 55 110 L 100 110\" />\n                            <path d=\"M 100 60 L 100 160\" />\n                            <path d=\"M 100 60 L 140 60\" />\n                            <path d=\"M 100 160 L 140 160\" />\n                            <path d=\"M 140 35 L 140 85\" />\n                            <path d=\"M 140 135 L 140 185\" />\n                            <path d=\"M 140 35 L 180 35\" />\n                            <path d=\"M 140 85 L 180 85\" />\n                            <path d=\"M 140 135 L 180 135\" />\n                            <path d=\"M 140 185 L 180 185\" />\n                            <path d=\"M 180 20 L 180 50\" />\n                            <path d=\"M 180 70 L 180 100\" />\n                            <path d=\"M 180 120 L 180 150\" />\n                            <path d=\"M 180 170 L 180 200\" />\n                            <!-- Bends de salida -->\n                            <path d=\"M 180 20 Q 220 20 220 15\" />\n                            <path d=\"M 180 20 Q 220 20 220 25\" />\n                            <path d=\"M 180 50 Q 220 50 220 45\" />\n                            <path d=\"M 180 50 Q 220 50 220 55\" />\n                            <path d=\"M 180 70 Q 220 70 220 65\" />\n                            <path d=\"M 180 70 Q 220 70 220 75\" />\n                            <path d=\"M 180 100 Q 220 100 220 95\" />\n                            <path d=\"M 180 100 Q 220 100 220 105\" />\n                            <path d=\"M 180 120 Q 220 120 220 115\" />\n                            <path d=\"M 180 120 Q 220 120 220 125\" />\n                            <path d=\"M 180 150 Q 220 150 220 145\" />\n                            <path d=\"M 180 150 Q 220 150 220 155\" />\n                            <path d=\"M 180 170 Q 220 170 220 165\" />\n                            <path d=\"M 180 170 Q 220 170 220 175\" />\n                            <path d=\"M 180 200 Q 220 200 220 195\" />\n                            <path d=\"M 180 200 Q 220 200 220 205\" />\n                        </g>\n\n                        <!-- 2. TUBOS FRENTE (RELLENO CLARO) -->\n                        <g stroke=\"#f1f5f9\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\">\n                            <path d=\"M 55 110 L 100 110\" />\n                            <path d=\"M 100 60 L 100 160\" />\n                            <path d=\"M 100 60 L 140 60\" />\n                            <path d=\"M 100 160 L 140 160\" />\n                            <path d=\"M 140 35 L 140 85\" />\n                            <path d=\"M 140 135 L 140 185\" />\n                            <path d=\"M 140 35 L 180 35\" />\n                            <path d=\"M 140 85 L 180 85\" />\n                            <path d=\"M 140 135 L 180 135\" />\n                            <path d=\"M 140 185 L 180 185\" />\n                            <path d=\"M 180 20 L 180 50\" />\n                            <path d=\"M 180 70 L 180 100\" />\n                            <path d=\"M 180 120 L 180 150\" />\n                            <path d=\"M 180 170 L 180 200\" />\n                            <!-- Bends de salida -->\n                            <path d=\"M 180 20 Q 220 20 220 15\" />\n                            <path d=\"M 180 20 Q 220 20 220 25\" />\n                            <path d=\"M 180 50 Q 220 50 220 45\" />\n                            <path d=\"M 180 50 Q 220 50 220 55\" />\n                            <path d=\"M 180 70 Q 220 70 220 65\" />\n                            <path d=\"M 180 70 Q 220 70 220 75\" />\n                            <path d=\"M 180 100 Q 220 100 220 95\" />\n                            <path d=\"M 180 100 Q 220 100 220 105\" />\n                            <path d=\"M 180 120 Q 220 120 220 115\" />\n                            <path d=\"M 180 120 Q 220 120 220 125\" />\n                            <path d=\"M 180 150 Q 220 150 220 145\" />\n                            <path d=\"M 180 150 Q 220 150 220 155\" />\n                            <path d=\"M 180 170 Q 220 170 220 165\" />\n                            <path d=\"M 180 170 Q 220 170 220 175\" />\n                            <path d=\"M 180 200 Q 220 200 220 195\" />\n                            <path d=\"M 180 200 Q 220 200 220 205\" />\n                        </g>\n\n                        <!-- 3. EL HÁMSTER VECTORIAL -->\n                        <g transform=\"translate(15, 110)\">\n                            <!-- Patas -->\n                            <ellipse cx=\"-8\" cy=\"8\" rx=\"3\" ry=\"1.5\" fill=\"#fbcfe8\" stroke=\"#334155\" stroke-width=\"1\"/>\n                            <ellipse cx=\"8\" cy=\"8\" rx=\"3\" ry=\"1.5\" fill=\"#fbcfe8\" stroke=\"#334155\" stroke-width=\"1\"/>\n                            <!-- Cola -->\n                            <circle cx=\"-13\" cy=\"3\" r=\"2.5\" fill=\"#fbcfe8\" stroke=\"#334155\" stroke-width=\"1\"/>\n                            <!-- Cuerpo -->\n                            <ellipse cx=\"-2\" cy=\"0\" rx=\"13\" ry=\"9\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                            <ellipse cx=\"-2\" cy=\"0\" rx=\"8\" ry=\"6\" fill=\"#f1f5f9\"/>\n                            <!-- Cabeza -->\n                            <circle cx=\"10\" cy=\"-4\" r=\"7.5\" fill=\"#e2e8f0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n                            <!-- Ears -->\n                            <circle cx=\"6\" cy=\"-11\" r=\"2.5\" fill=\"#fbcfe8\" stroke=\"#334155\" stroke-width=\"1\"/>\n                            <circle cx=\"12\" cy=\"-11\" r=\"2.5\" fill=\"#fbcfe8\" stroke=\"#334155\" stroke-width=\"1\"/>\n                            <!-- Eye -->\n                            <circle cx=\"12\" cy=\"-5\" r=\"1\" fill=\"#000\"/>\n                            <!-- Nose -->\n                            <circle cx=\"17\" cy=\"-2\" r=\"1.2\" fill=\"#f43f5e\"/>\n                        </g>\n                        <text x=\"35\" y=\"138\" font-size=\"10\" font-weight=\"bold\" fill=\"#334155\" text-anchor=\"middle\">Entrada</text>\n\n                        <!-- Etiquetas en el borde extremo derecho de la U (Zonas de salida) -->\n                        <g font-size=\"9\" font-family=\"system-ui\" font-weight=\"bold\" fill=\"#0f172a\">\n                            <!-- Grp 1: 1, 2, 2, 1 -->\n                            <text x=\"230\" y=\"18\">1</text><text x=\"230\" y=\"28\">2</text>\n                            <text x=\"230\" y=\"48\">2</text><text x=\"230\" y=\"58\">1</text>\n                            \n                            <!-- Grp 2: 1, 1, 1, 1 -->\n                            <text x=\"230\" y=\"68\">1</text><text x=\"230\" y=\"78\">1</text>\n                            <text x=\"230\" y=\"98\">1</text><text x=\"230\" y=\"108\">1</text>\n                            \n                            <!-- Grp 3: 1, 2, 1, 1 -->\n                            <text x=\"230\" y=\"118\">1</text><text x=\"230\" y=\"128\">2</text>\n                            <text x=\"230\" y=\"148\">1</text><text x=\"230\" y=\"158\">1</text>\n                            \n                            <!-- Grp 4: 1, 1, 1, 2 -->\n                            <text x=\"230\" y=\"171\">1</text><text x=\"230\" y=\"179\">1</text>\n                            <text x=\"230\" y=\"198\">1</text><text x=\"230\" y=\"208\">2</text>\n                        </g>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un parqueadero de motos cobra de acuerdo con el tiempo de uso, como se muestra en la gráfica:</p> <p><strong>Qué tendencia se puede identificar a partir de la gráfica?</strong></p>",
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
    "justificacion": "La gráfica es horizontal constante (en $2.000) de 0 a 6 horas. Luego de la hora 6, cambia su inclinación y asciende como línea recta (aumento lineal).",
    "svg": "<svg viewBox=\"0 0 350 200\" width=\"100%\" style=\"background:#fff; border:1px solid #ccc; max-width:400px; display:block; margin:15px auto; border-radius:8px;\">\n                        <line x1=\"40\" y1=\"160\" x2=\"330\" y2=\"160\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <!-- Línea de tendencia -->\n                        <line x1=\"40\" y1=\"115\" x2=\"180\" y2=\"115\" stroke=\"var(--primary)\" stroke-width=\"2.5\"/>\n                        <line x1=\"180\" y1=\"115\" x2=\"310\" y2=\"30\" stroke=\"var(--primary)\" stroke-width=\"2.5\"/>\n                        <!-- Cotas Eje Y -->\n                        <g font-size=\"8\" text-anchor=\"end\" font-weight=\"bold\">\n                            <text x=\"35\" y=\"163\">0</text>\n                            <text x=\"35\" y=\"138\">1.000</text>\n                            <text x=\"35\" y=\"118\">2.000</text>\n                            <text x=\"35\" y=\"100\">3.000</text>\n                            <text x=\"35\" y=\"85\">4.000</text>\n                            <text x=\"35\" y=\"70\">5.000</text>\n                            <text x=\"35\" y=\"55\">6.000</text>\n                            <text x=\"35\" y=\"40\">7.000</text>\n                            <text x=\"35\" y=\"25\">8.000</text>\n                            <text x=\"15\" y=\"90\" transform=\"rotate(-90 15,90)\" font-size=\"9\">Precio (pesos)</text>\n                        </g>\n                        <!-- Cotas Eje X -->\n                        <g font-size=\"8\" text-anchor=\"middle\" font-weight=\"bold\">\n                            <text x=\"40\" y=\"172\">0</text>\n                            <text x=\"85\" y=\"172\">2</text><line x1=\"85\" y1=\"160\" x2=\"85\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"130\" y=\"172\">4</text><line x1=\"130\" y1=\"160\" x2=\"130\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"180\" y=\"172\">6</text><line x1=\"180\" y1=\"160\" x2=\"180\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"225\" y=\"172\">8</text><line x1=\"225\" y1=\"160\" x2=\"225\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"270\" y=\"172\">10</text><line x1=\"270\" y1=\"160\" x2=\"270\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"310\" y=\"172\">12</text><line x1=\"310\" y1=\"160\" x2=\"310\" y2=\"163\" stroke=\"#000\"/>\n                            <text x=\"175\" y=\"187\" font-size=\"9\">Tiempo (horas)</text>\n                        </g>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p5",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una empresa diseña y produce cajas de diferentes tamaños. Un tipo específico de cajas se fabrica teniendo en cuenta ciertas relaciones entre las medidas de su ancho, largo y altura, así:</p> <p>• La medida del largo debe corresponder al doble de la medida del ancho.</p> <p>• La medida del ancho debe corresponder a la tercera parte de la medida de la altura.</p> <p style=\"text-align:center; font-family:'Georgia'; font-weight:bold; margin: 10px;\">Volumen = Ancho &times; Largo &times; Altura</p> <p><strong>Un operario de la empresa afirma que solamente con conocer la medida de la altura de la caja puede determinarse su volumen. ¿Es correcta o incorrecta la afirmación del operario?</strong></p>",
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
        "texto": "Incorrecta, porque se debe conocer el área de la base de la caja y, para ello, se necesita el ancho y el largo."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "Siendo Ancho (A), Largo (L), Altura (H): A = H/3. L = 2A = 2H/3. Volumen = A &times; L &times; H = (H/3) &times; (2H/3) &times; H = 2H³/9 (dos novenos del cubo de la altura).",
    "svg": "<svg viewBox=\"0 0 200 150\" width=\"100%\" style=\"background:#fff; max-width:200px; display:block; margin:15px auto; border-radius:8px;\">\n                        <!-- Cara Frontal -->\n                        <polygon points=\"50,60 120,60 120,120 50,120\" fill=\"#94a3b8\" stroke=\"#000\"/>\n                        <!-- Cara Lateral -->\n                        <polygon points=\"120,60 160,30 160,90 120,120\" fill=\"#cbd5e1\" stroke=\"#000\"/>\n                        <!-- Cara Superior -->\n                        <polygon points=\"50,60 90,30 160,30 120,60\" fill=\"#f1f5f9\" stroke=\"#000\"/>\n                        <text x=\"85\" y=\"132\" font-size=\"9\" font-weight=\"bold\">Largo</text>\n                        <text x=\"145\" y=\"110\" font-size=\"9\" font-weight=\"bold\">Ancho</text>\n                        <text x=\"168\" y=\"60\" font-size=\"9\" font-weight=\"bold\">Altura</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El caballo de Julián compitió en 13 carreras durante un año, de las cuales ganó 3 y perdió 10.</p> <p>Para calcular la probabilidad de que su caballo gane la siguiente carrera, Julián utiliza la información de las 13 carreras y construye una fracción así:</p> <p><strong>Paso 1.</strong> Ubica en el numerador el número de veces que su caballo ganó.</p> <p><strong>Paso 2.</strong> Ubica en el denominador el número de veces que su caballo perdió.</p> <p><strong>Paso 3.</strong> Multiplica el resultado por 100.</p> <p>De esta forma, Julián determina que su caballo tiene una probabilidad del 30% de ganar la carrera.</p> <p><strong>¿El procedimiento de Julián contiene un error?</strong></p>",
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
    "justificacion": "La probabilidad matemática requiere en el denominador el total de casos posibles (ganadas + perdidas = 13). Julián erróneamente colocó solo las perdidas (10)."
  },
  {
    "id": "mat_sim_14_p7",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Natalia quiere ahorrar $100.000 cada mes durante tres meses. Como ayuda para su ahorro, sus padres le han propuesto dos opciones, pero solo puede elegir una de ellas:</p> <p>• <strong>Opción 1.</strong> Al finalizar cada mes, su mamá le regala el 10% del dinero acumulado.</p> <p>• <strong>Opción 2.</strong> Al finalizar cada mes, su papá le regala un porcentaje progresivo: mes 1 un 2%, mes 2 un 4% y mes 3 un 16%.</p> <p>Natalia decide elegir la opción en la que le regalen la mayor cantidad de dinero y eligió la ayuda de la mamá.</p> <p><strong>¿Es correcta la elección de Natalia?</strong></p>",
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
    "justificacion": "Mamá: 10k (mes 1) + 20k (mes 2) + 30k (mes 3) = 60k. Papá: 2% de 100k (2k) + 4% de 200k (8k) + 16% de 300k (48k) = 58k. Por ende, la mamá aporta más."
  },
  {
    "id": "mat_sim_14_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una biblioteca virtual se registraron 100 consultas en un día. Del total de consultas de ese día, el 30% fueron de Biología, el 20% de Inglés, el 40% de Sociales y el 10% de Matemáticas.</p> <p><strong>¿Cuál de las siguientes gráficas corresponde al número de consultas, por materia, hechas ese día en la biblioteca virtual?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center;\"><b>A. Consultas en la biblioteca</b><br> <svg viewBox=\"0 0 200 120\" width=\"150\" style=\"margin:10px auto; background:#fff;\"> <line x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\"/> <line x1=\"30\" y1=\"100\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <rect x=\"40\" y=\"70\" width=\"20\" height=\"30\" fill=\"#475569\"/> <rect x=\"80\" y=\"80\" width=\"20\" height=\"20\" fill=\"#475569\"/> <rect x=\"120\" y=\"60\" width=\"20\" height=\"40\" fill=\"#475569\"/> <rect x=\"160\" y=\"90\" width=\"20\" height=\"10\" fill=\"#475569\"/> <text x=\"50\" y=\"112\" font-size=\"8\" text-anchor=\"middle\">Bio</text> <text x=\"90\" y=\"112\" font-size=\"8\" text-anchor=\"middle\">Ing</text> <text x=\"130\" y=\"112\" font-size=\"8\" text-anchor=\"middle\">Soc</text> <text x=\"170\" y=\"112\" font-size=\"8\" text-anchor=\"middle\">Mat</text> </svg></div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center;\"><b>B. Consultas en la biblioteca</b><br> <svg viewBox=\"0 0 200 120\" width=\"150\" style=\"margin:10px auto; background:#fff;\"> <line x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\"/> <line x1=\"30\" y1=\"100\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <rect x=\"40\" y=\"80\" width=\"20\" height=\"20\" fill=\"#475569\"/> <rect x=\"80\" y=\"70\" width=\"20\" height=\"30\" fill=\"#475569\"/> <rect x=\"120\" y=\"60\" width=\"20\" height=\"40\" fill=\"#475569\"/> <rect x=\"160\" y=\"90\" width=\"20\" height=\"10\" fill=\"#475569\"/> </svg></div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center;\"><b>C. Consultas en la biblioteca</b><br> <svg viewBox=\"0 0 200 120\" width=\"150\" style=\"margin:10px auto; background:#fff;\"> <line x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\"/> <line x1=\"30\" y1=\"100\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <rect x=\"40\" y=\"60\" width=\"20\" height=\"40\" fill=\"#475569\"/> <rect x=\"80\" y=\"70\" width=\"20\" height=\"30\" fill=\"#475569\"/> <rect x=\"120\" y=\"80\" width=\"20\" height=\"20\" fill=\"#475569\"/> <rect x=\"160\" y=\"90\" width=\"20\" height=\"10\" fill=\"#475569\"/> </svg></div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center;\"><b>D. Consultas en la biblioteca</b><br> <svg viewBox=\"0 0 200 120\" width=\"150\" style=\"margin:10px auto; background:#fff;\"> <line x1=\"30\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\"/> <line x1=\"30\" y1=\"100\" x2=\"30\" y2=\"10\" stroke=\"#000\"/> <rect x=\"40\" y=\"90\" width=\"20\" height=\"10\" fill=\"#475569\"/> <rect x=\"80\" y=\"80\" width=\"20\" height=\"20\" fill=\"#475569\"/> <rect x=\"120\" y=\"70\" width=\"20\" height=\"30\" fill=\"#475569\"/> <rect x=\"160\" y=\"60\" width=\"20\" height=\"40\" fill=\"#475569\"/> </svg></div>"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Dado un total de 100 consultas: Biología(30), Inglés(20), Sociales(40), Matemáticas(10). La opción A escala las barras de forma proporcional (30, 20, 40, 10)."
  },
  {
    "id": "mat_sim_14_p9",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Para elegir el uniforme de un equipo de fútbol existen 5 colores posibles para las camisetas, 4 para las pantalonetas y 3 para las medias.</p> <p><strong>Al aplicar la técnica combinatoria correspondiente, ¿cuántos uniformes diferentes se pueden armar para este equipo de fútbol?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "12 uniformes"
      },
      {
        "id": "B",
        "texto": "60 uniformes"
      },
      {
        "id": "C",
        "texto": "20 uniformes"
      },
      {
        "id": "D",
        "texto": "240 uniformes"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Aplicando el Principio Multiplicativo: 5 (camisetas) &times; 4 (pantalonetas) &times; 3 (medias) = 60 combinaciones posibles de uniforme."
  },
  {
    "id": "mat_sim_14_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La imagen muestra la cara lateral del diseño de un tren hecho por una fábrica de juguetes.</p> <p>El departamento de producción opina que deben agregarse algunas ruedas al diseño para mejorar la estabilidad del juguete. Sabiendo que todas las ruedas deben tener el mismo radio r y conservar una distancia r entre ellas, ¿cuántas ruedas pueden agregarse al diseño sin modificar la posición de las que ya se colocaron?</p>",
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
    "justificacion": "El tren mide 13r. Cada rueda ocupa un diámetro de 2r. Si colocamos 4 ruedas, ocupan 8r. Las 5 separaciones (extremos e interiores) ocupan 5r. Total = 13r. Como ya hay 2 instaladas, se pueden agregar exactamente 2 más.",
    "svg": "<svg viewBox=\"0 0 300 180\" width=\"100%\" style=\"max-width:320px; display:block; margin:15px auto; fill:none;\" class=\"math-font text-heading\">\n                        <!-- Cuerpo del tren -->\n                        <path d=\"M 20 110 L 20 35 L 10 35 L 10 25 L 110 25 L 110 35 L 100 35 L 100 70 L 120 70 L 120 60 L 140 60 L 140 70 L 160 70 L 160 60 L 180 60 L 180 70 L 200 70 L 200 60 L 220 60 L 220 70 L 240 70 L 240 60 L 260 60 L 260 25 L 280 25 L 280 110 Z\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"var(--bg-card)\"/>\n                        \n                        <!-- Ventana de la cabina -->\n                        <rect x=\"45\" y=\"45\" width=\"40\" height=\"20\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\"/>\n                        \n                        <!-- Ruedas -->\n                        <circle cx=\"60\" cy=\"110\" r=\"20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"var(--bg-card)\"/>\n                        <circle cx=\"240\" cy=\"110\" r=\"20\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"var(--bg-card)\"/>\n                        \n                        <!-- Línea entre centros de ruedas -->\n                        <line x1=\"60\" y1=\"110\" x2=\"240\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1\" stroke-dasharray=\"2,2\"/>\n                        \n                        <!-- Centros de las ruedas (pequeñas cruces) -->\n                        <path d=\"M 57 110 L 63 110 M 60 107 L 60 113\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <path d=\"M 237 110 L 243 110 M 240 107 L 240 113\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        \n                        <!-- Cota del radio r (rueda izquierda) -->\n                        <line x1=\"60\" y1=\"110\" x2=\"80\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"70\" y=\"104\" font-size=\"11\" text-anchor=\"middle\" fill=\"currentColor\">r</text>\n                        \n                        <!-- Cota espacio izquierdo r -->\n                        <line x1=\"20\" y1=\"125\" x2=\"40\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"20\" y1=\"120\" x2=\"20\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"40\" y1=\"120\" x2=\"40\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"30\" y=\"138\" font-size=\"11\" text-anchor=\"middle\" fill=\"currentColor\">r</text>\n                        \n                        <!-- Cota espacio derecho r -->\n                        <line x1=\"260\" y1=\"125\" x2=\"280\" y2=\"125\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"260\" y1=\"120\" x2=\"260\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"280\" y1=\"120\" x2=\"280\" y2=\"130\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"270\" y=\"138\" font-size=\"11\" text-anchor=\"middle\" fill=\"currentColor\">r</text>\n                        \n                        <!-- Cota total 13r -->\n                        <line x1=\"20\" y1=\"155\" x2=\"280\" y2=\"155\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"20\" y1=\"150\" x2=\"20\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"280\" y1=\"150\" x2=\"280\" y2=\"160\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"150\" y=\"172\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"currentColor\">13r</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p11",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la siguiente gráfica están representadas dos líneas rectas con sus respectivas ecuaciones: x + y = 8 y -x + y = -2.</p> <p><strong>¿Cuál es el punto de intersección de las dos rectas?</strong></p>",
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
    "justificacion": "Resolviendo el sistema: x + y = 8 y -x + y = -2. Sumando las ecuaciones: 2y = 6 => y = 3. Reemplazando: x + 3 = 8 => x = 5. El punto es (5, 3).",
    "svg": "<svg viewBox=\"0 0 350 220\" width=\"100%\" style=\"max-width:380px; display:block; margin:15px auto; background:var(--bg-card); border-radius:8px; border:1px solid var(--border-glass);\" class=\"math-font text-heading\">\n                        <defs>\n                            <!-- Patrón de cuadrícula tipo papel milimetrado -->\n                            <pattern id=\"graph-grid\" width=\"30\" height=\"30\" patternUnits=\"userSpaceOnUse\" x=\"50\" y=\"170\">\n                                <!-- Subdivisión menor (5 partes por unidad = 6px cada una) -->\n                                <path d=\"M 6 0 L 6 30 M 12 0 L 12 30 M 18 0 L 18 30 M 24 0 L 24 30 M 0 6 L 30 6 M 0 12 L 30 12 M 0 18 L 30 18 M 0 24 L 30 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.3\" opacity=\"0.15\"/>\n                                <!-- División mayor -->\n                                <rect width=\"30\" height=\"30\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"0.6\" opacity=\"0.3\"/>\n                            </pattern>\n                        </defs>\n                        \n                        <!-- Relleno del fondo con el patrón -->\n                        <rect x=\"20\" y=\"5\" width=\"310\" height=\"200\" fill=\"url(#graph-grid)\" opacity=\"0.8\"/>\n                        \n                        <!-- Eje X -->\n                        <line x1=\"15\" y1=\"170\" x2=\"325\" y2=\"170\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                        <polygon points=\"325,170 320,166 320,174\" fill=\"currentColor\"/>\n                        <text x=\"325\" y=\"185\" font-size=\"11\" font-weight=\"bold\" fill=\"currentColor\">x</text>\n                        \n                        <!-- Eje Y -->\n                        <line x1=\"50\" y1=\"205\" x2=\"50\" y2=\"8\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                        <polygon points=\"50,8 46,13 54,13\" fill=\"currentColor\"/>\n                        <text x=\"38\" y=\"12\" font-size=\"11\" font-weight=\"bold\" fill=\"currentColor\">y</text>\n                        \n                        <!-- Etiquetas Eje X -->\n                        <g font-size=\"10\" text-anchor=\"middle\" font-weight=\"bold\" fill=\"currentColor\">\n                            <text x=\"80\" y=\"185\">1</text><line x1=\"80\" y1=\"170\" x2=\"80\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"110\" y=\"185\">2</text><line x1=\"110\" y1=\"170\" x2=\"110\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"140\" y=\"185\">3</text><line x1=\"140\" y1=\"170\" x2=\"140\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"170\" y=\"185\">4</text><line x1=\"170\" y1=\"170\" x2=\"170\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"200\" y=\"185\">5</text><line x1=\"200\" y1=\"170\" x2=\"200\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"230\" y=\"185\">6</text><line x1=\"230\" y1=\"170\" x2=\"230\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"260\" y=\"185\">7</text><line x1=\"260\" y1=\"170\" x2=\"260\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"290\" y=\"185\">8</text><line x1=\"290\" y1=\"170\" x2=\"290\" y2=\"173\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        </g>\n                        \n                        <!-- Etiquetas Eje Y -->\n                        <g font-size=\"10\" text-anchor=\"end\" font-weight=\"bold\" fill=\"currentColor\">\n                            <text x=\"45\" y=\"143\">1</text><line x1=\"50\" y1=\"140\" x2=\"47\" y2=\"140\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"45\" y=\"113\">2</text><line x1=\"50\" y1=\"110\" x2=\"47\" y2=\"110\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"45\" y=\"83\">3</text><line x1=\"50\" y1=\"80\" x2=\"47\" y2=\"80\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                            <text x=\"45\" y=\"53\">4</text><line x1=\"50\" y1=\"50\" x2=\"47\" y2=\"50\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        </g>\n                        \n                        <!-- Líneas del sistema -->\n                        <!-- Recta x+y=8 (pasa por 125,5 y 305,185) -->\n                        <line x1=\"125\" y1=\"5\" x2=\"305\" y2=\"185\" stroke=\"#ef4444\" stroke-width=\"2.5\"/>\n                        <!-- Recta -x+y=-2 (pasa por 95,185 y 275,5) -->\n                        <line x1=\"95\" y1=\"185\" x2=\"275\" y2=\"5\" stroke=\"#3b82f6\" stroke-width=\"2.5\"/>\n                        \n                        <!-- Etiquetas de las ecuaciones escritas en la gráfica -->\n                        <text x=\"135\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"end\">x + y = 8</text>\n                        <text x=\"255\" y=\"60\" font-size=\"10\" font-weight=\"bold\" fill=\"currentColor\" text-anchor=\"start\">-x + y = -2</text>\n                        \n                        <!-- Punto de intersección (5,3) -> (200,80) -->\n                        <circle cx=\"200\" cy=\"80\" r=\"4.5\" fill=\"currentColor\" stroke=\"var(--bg-card)\" stroke-width=\"1\"/>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p12",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un profesor les pide a sus estudiantes que escriban los primeros cinco términos de una sucesión, de tal manera que cada uno corresponda al doble del número anterior.</p> <p>Uno de sus estudiantes presenta los siguientes números:</p> <div style=\"font-size: 1.5rem; font-weight: bold; text-align: center; margin: 15px 0;\">2, 4, 6, 8, 10</div> <p><strong>¿Cumplen estos números los requerimientos presentados por el profesor?</strong></p>",
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
    "id": "mat_sim_14_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un parque temático, al encargado de las entradas se le pidió elaborar un informe sobre el número de visitantes que ingresaron al parque en cada temporada. El empleado entregó los resultados en la siguiente tabla:</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th>Temporada</th><th>Número de días de la temporada</th><th>Número de visitantes</th></tr> <tr><td>1</td><td>90</td><td>2.577</td></tr> <tr><td>2</td><td>92</td><td>2.386</td></tr> <tr><td>3</td><td>85</td><td>2.723</td></tr> <tr><td>4</td><td>81</td><td>2.920</td></tr> <tr><td>5</td><td>84</td><td>2.345</td></tr> </table> <p><strong>Con base en la información registrada en la tabla, ¿cuál es el orden de las temporadas, de mayor a menor, de acuerdo con el número de visitantes que ingresaron al parque en cada una de ellas?</strong></p>",
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
    "id": "mat_sim_14_p14",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una ciudad, para ir desde un punto hasta otro, se deben recorrer 9 km al norte y, luego, 12 km al oriente, formando un ángulo recto. Ahora bien, para calcular la distancia que separa a los dos puntos, se usa el siguiente procedimiento:</p> <ul style=\"margin-left: 20px;\"> <li><strong>Paso 1.</strong> Se eleva al cuadrado la distancia del recorrido hacia el norte.</li> <li><strong>Paso 2.</strong> Se eleva al cuadrado la distancia del recorrido hacia el oriente.</li> <li><strong>Paso 3.</strong> Se suman los resultados de los pasos 1 y 2.</li> <li><strong>Paso 4.</strong> Se calcula la raíz cuadrada del resultado del paso 3.</li> </ul> <!-- Triángulo rectángulo --> <p><strong>De acuerdo con esto, ¿cuál es la distancia, en kilómetros, que separa los dos puntos mencionados?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Opciones..."
      },
      {
        "id": "B",
        "texto": "√6"
      },
      {
        "id": "C",
        "texto": "√42"
      },
      {
        "id": "D",
        "texto": "√63"
      },
      {
        "id": "A",
        "texto": "√225"
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "Aplicando el teorema de Pitágoras como lo indica el procedimiento: 9² = 81. 12² = 144. Suma = 81 + 144 = 225. La distancia final es la raíz cuadrada de esa suma, es decir, √225 (que equivale a 15 km).",
    "svg": "<svg viewBox=\"0 0 200 150\" width=\"100%\" style=\"background:#fff; max-width:250px; display:block; margin:15px auto; border:1px solid #ccc; border-radius:8px;\">\n                        <polyline points=\"40,120 40,40 160,40\" fill=\"none\" stroke=\"#be123c\" stroke-width=\"2\" stroke-dasharray=\"4\"/>\n                        <line x1=\"40\" y1=\"120\" x2=\"160\" y2=\"40\" stroke=\"#1e3a8a\" stroke-width=\"2\"/>\n                        <circle cx=\"40\" cy=\"120\" r=\"4\" fill=\"#000\"/><text x=\"15\" y=\"130\" font-size=\"10\" font-weight=\"bold\">Inicio</text>\n                        <circle cx=\"160\" cy=\"40\" r=\"4\" fill=\"#000\"/><text x=\"165\" y=\"35\" font-size=\"10\" font-weight=\"bold\">Fin</text>\n                        <text x=\"20\" y=\"80\" font-family=\"Georgia\" font-size=\"11\">9 km</text>\n                        <text x=\"100\" y=\"30\" font-family=\"Georgia\" font-size=\"11\">12 km</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p15",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La tabla muestra la asistencia de público durante cuatro partidos consecutivos de un equipo de fútbol:</p> <table class=\"data-table\" style=\"max-width: 450px; margin: 10px auto; font-size: 0.85rem;\"> <tr><th>Partido</th><th>Cantidad de público (personas)</th><th>Diferencia respecto al partido 1</th></tr> <tr><td>Partido 1</td><td>37.000</td><td>-</td></tr> <tr><td>Partido 2</td><td>41.000</td><td>+ 4.000 personas</td></tr> <tr><td>Partido 3</td><td>17.000</td><td>- 20.000 personas</td></tr> <tr><td>Partido 4</td><td>45.000</td><td>+ 8.000 personas</td></tr> <tr><td><b>Total de asistencia</b></td><td>140.000</td><td>-</td></tr> </table> <p>De acuerdo con la información anterior, ¿cuál de las siguientes representaciones muestra la diferencia respecto al partido 1?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center; padding:5px; width:100%;\"><b>A.</b><br> <svg viewBox=\"0 0 320 180\" style=\"background:#fff; width:100%; max-width:280px; display:block; margin:10px auto; border:1px solid #ccc; border-radius:4px; font-family:sans-serif;\"> <text x=\"160\" y=\"22\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\">Diferencia de público</text> <g stroke=\"#e2e8f0\" stroke-width=\"1\"> <line x1=\"70\" y1=\"35\" x2=\"70\" y2=\"145\" /> <line x1=\"102.8\" y1=\"35\" x2=\"102.8\" y2=\"145\" /> <line x1=\"135.7\" y1=\"35\" x2=\"135.7\" y2=\"145\" /> <line x1=\"201.4\" y1=\"35\" x2=\"201.4\" y2=\"145\" /> <line x1=\"234.3\" y1=\"35\" x2=\"234.3\" y2=\"145\" /> <line x1=\"267.1\" y1=\"35\" x2=\"267.1\" y2=\"145\" /> <line x1=\"300\" y1=\"35\" x2=\"300\" y2=\"145\" /> </g> <line x1=\"168.5\" y1=\"30\" x2=\"168.5\" y2=\"150\" stroke=\"#000\" stroke-width=\"1.5\" /> <g font-size=\"8.5\" fill=\"#000\" text-anchor=\"middle\"> <text x=\"70\" y=\"158\">-30.000</text> <text x=\"102.8\" y=\"158\">-20.000</text> <text x=\"135.7\" y=\"158\">-10.000</text> <text x=\"168.5\" y=\"158\">0</text> <text x=\"201.4\" y=\"158\">10.000</text> <text x=\"234.3\" y=\"158\">20.000</text> <text x=\"267.1\" y=\"158\">30.000</text> <text x=\"300\" y=\"158\">40.000</text> </g> <rect x=\"168.5\" y=\"45\" width=\"85\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"65\" y=\"58\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"end\">Partido 4</text> <rect x=\"95\" y=\"80\" width=\"73.5\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"173\" y=\"93\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"start\">Partido 3</text> <rect x=\"168.5\" y=\"115\" width=\"12\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"163\" y=\"128\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"end\">Partido 2</text> </svg> </div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center; padding:5px; width:100%;\"><b>B.</b><br> <svg viewBox=\"0 0 320 180\" style=\"background:#fff; width:100%; max-width:280px; display:block; margin:10px auto; border:1px solid #ccc; border-radius:4px; font-family:sans-serif;\"> <text x=\"160\" y=\"20\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\">Diferencia de público</text> <g stroke=\"#e2e8f0\" stroke-width=\"1\"> <line x1=\"50\" y1=\"35\" x2=\"300\" y2=\"35\" /> <line x1=\"50\" y1=\"52.1\" x2=\"300\" y2=\"52.1\" /> <line x1=\"50\" y1=\"86.4\" x2=\"300\" y2=\"86.4\" /> <line x1=\"50\" y1=\"103.6\" x2=\"300\" y2=\"103.6\" /> <line x1=\"50\" y1=\"120.7\" x2=\"300\" y2=\"120.7\" /> <line x1=\"50\" y1=\"137.9\" x2=\"300\" y2=\"137.9\" /> <line x1=\"50\" y1=\"155\" x2=\"300\" y2=\"155\" /> </g> <line x1=\"45\" y1=\"69.3\" x2=\"305\" y2=\"69.3\" stroke=\"#000\" stroke-width=\"1.5\" /> <g font-size=\"8.5\" fill=\"#000\" text-anchor=\"end\"> <text x=\"42\" y=\"38\">10.000</text> <text x=\"42\" y=\"55\">5.000</text> <text x=\"42\" y=\"72\">0</text> <text x=\"42\" y=\"89\">-5.000</text> <text x=\"42\" y=\"106\">-10.000</text> <text x=\"42\" y=\"123\">-15.000</text> <text x=\"42\" y=\"140\">-20.000</text> <text x=\"42\" y=\"157\">-25.000</text> </g> <rect x=\"95\" y=\"55.6\" width=\"30\" height=\"13.7\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"110\" y=\"172\" font-size=\"9\" fill=\"#000\" font-weight=\"bold\" text-anchor=\"middle\">Partido 2</text> <rect x=\"165\" y=\"69.3\" width=\"30\" height=\"68.6\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"180\" y=\"172\" font-size=\"9\" fill=\"#000\" font-weight=\"bold\" text-anchor=\"middle\">Partido 3</text> <rect x=\"235\" y=\"41.9\" width=\"30\" height=\"27.4\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"250\" y=\"172\" font-size=\"9\" fill=\"#000\" font-weight=\"bold\" text-anchor=\"middle\">Partido 4</text> </svg> </div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center; padding:5px; width:100%;\"><b>C.</b><br> <svg viewBox=\"0 0 320 180\" style=\"background:#fff; width:100%; max-width:280px; display:block; margin:10px auto; border:1px solid #ccc; border-radius:4px; font-family:sans-serif;\"> <text x=\"160\" y=\"20\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\">Diferencia de público</text> <g stroke=\"#e2e8f0\" stroke-width=\"1\"> <line x1=\"50\" y1=\"35\" x2=\"300\" y2=\"35\" /> <line x1=\"50\" y1=\"48.3\" x2=\"300\" y2=\"48.3\" /> <line x1=\"50\" y1=\"61.7\" x2=\"300\" y2=\"61.7\" /> <line x1=\"50\" y1=\"75\" x2=\"300\" y2=\"75\" /> <line x1=\"50\" y1=\"88.3\" x2=\"300\" y2=\"88.3\" /> <line x1=\"50\" y1=\"101.7\" x2=\"300\" y2=\"101.7\" /> <line x1=\"50\" y1=\"115\" x2=\"300\" y2=\"115\" /> <line x1=\"50\" y1=\"128.3\" x2=\"300\" y2=\"128.3\" /> <line x1=\"50\" y1=\"141.7\" x2=\"300\" y2=\"141.7\" /> </g> <line x1=\"45\" y1=\"155\" x2=\"305\" y2=\"155\" stroke=\"#000\" stroke-width=\"1.5\" /> <g font-size=\"8.5\" fill=\"#000\" text-anchor=\"end\"> <text x=\"42\" y=\"38\">45.000</text> <text x=\"42\" y=\"51.3\">40.000</text> <text x=\"42\" y=\"64.7\">35.000</text> <text x=\"42\" y=\"78\">30.000</text> <text x=\"42\" y=\"91.3\">25.000</text> <text x=\"42\" y=\"104.7\">20.000</text> <text x=\"42\" y=\"118\">15.000</text> <text x=\"42\" y=\"131.3\">10.000</text> <text x=\"42\" y=\"144.7\">5.000</text> <text x=\"42\" y=\"158\">0</text> </g> <rect x=\"75\" y=\"56.3\" width=\"35\" height=\"98.7\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"92.5\" y=\"167\" font-size=\"9\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"middle\">Partido 1</text> <rect x=\"150\" y=\"45.7\" width=\"35\" height=\"109.3\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"167.5\" y=\"167\" font-size=\"9\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"middle\">Partido 2</text> <rect x=\"225\" y=\"109.7\" width=\"35\" height=\"45.3\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"242.5\" y=\"167\" font-size=\"9\" font-weight=\"bold\" fill=\"#000\" text-anchor=\"middle\">Partido 3</text> </svg> </div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center; padding:5px; width:100%;\"><b>D.</b><br> <svg viewBox=\"0 0 320 180\" style=\"background:#fff; width:100%; max-width:280px; display:block; margin:15px auto; border:1px solid #ccc; border-radius:4px; font-family:sans-serif;\"> <text x=\"160\" y=\"22\" font-size=\"12\" font-weight=\"bold\" text-anchor=\"middle\" fill=\"#000\">Diferencia de público</text> <g stroke=\"#e2e8f0\" stroke-width=\"1\"> <line x1=\"95\" y1=\"35\" x2=\"95\" y2=\"145\" /> <line x1=\"135\" y1=\"35\" x2=\"135\" y2=\"145\" /> <line x1=\"175\" y1=\"35\" x2=\"175\" y2=\"145\" /> <line x1=\"215\" y1=\"35\" x2=\"215\" y2=\"145\" /> <line x1=\"255\" y1=\"35\" x2=\"255\" y2=\"145\" /> <line x1=\"295\" y1=\"35\" x2=\"295\" y2=\"145\" /> </g> <line x1=\"55\" y1=\"30\" x2=\"55\" y2=\"150\" stroke=\"#000\" stroke-width=\"1.5\" /> <g font-size=\"8.5\" fill=\"#000\" text-anchor=\"middle\"> <text x=\"55\" y=\"158\">0</text> <text x=\"95\" y=\"158\">5.000</text> <text x=\"135\" y=\"158\">10.000</text> <text x=\"175\" y=\"158\">15.000</text> <text x=\"215\" y=\"158\">20.000</text> <text x=\"255\" y=\"158\">25.000</text> <text x=\"295\" y=\"158\">30.000</text> </g> <rect x=\"55\" y=\"45\" width=\"220\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"50\" y=\"58\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"end\">Partido 3</text> <rect x=\"55\" y=\"80\" width=\"30\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"50\" y=\"93\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"end\">Partido 2</text> <rect x=\"55\" y=\"115\" width=\"60\" height=\"18\" fill=\"#94a3b8\" stroke=\"#475569\" stroke-width=\"1\" /> <text x=\"50\" y=\"128\" font-size=\"9.5\" fill=\"#000\" text-anchor=\"end\">Partido 1</text> </svg> </div>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "La opción B representa de manera precisa la diferencia neta (positiva o negativa) de asistencia de público con respecto al Partido 1 mediante un diagrama de barras verticales. El Partido 2 registra una diferencia de +4.000, el Partido 3 una diferencia de -20.000 (barra que se extiende hacia abajo del cero) y el Partido 4 una diferencia de +8.000."
  },
  {
    "id": "mat_sim_14_p16",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una heladería, cada vaso de helado cuesta $3.000. A cada vaso, se le pueden agregar acompañamientos por un precio de $1.000, cada uno.</p> <p><strong>Teniendo en cuenta el número de acompañamientos que se le agreguen, ¿cuál de las siguientes expresiones permite determinar correctamente el precio de un vaso de helado?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "1.000 + (1.000 &times; número de acompañamientos del helado)."
      },
      {
        "id": "B",
        "texto": "3.000 + (1.000 &times; número de acompañamientos del helado)."
      },
      {
        "id": "C",
        "texto": "1.000 + (3.000 &times; número de acompañamientos del helado)."
      },
      {
        "id": "D",
        "texto": "3.000 + (3.000 &times; número de acompañamientos del helado)."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "El helado base tiene un valor constante e inicial de $3.000. Por cada acompañamiento que se decida añadir se pagan $1.000 de forma variable. Por lo tanto, la ecuación es: 3.000 + (1.000 &times; número de acompañamientos)."
  },
  {
    "id": "mat_sim_14_p17",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Álvaro y Jesús trabajan recolectando fruta.</p> <div style=\"display:flex; gap: 20px; flex-wrap: wrap; justify-content:center;\"> <div> <strong>Tabla 1 (Álvaro)</strong> <table class=\"data-table\" style=\"max-width:220px;\"> <tr><th>Día</th><th>Kilogramos recolectados</th></tr> <tr><td>1</td><td>24</td></tr> <tr><td>2</td><td>30</td></tr> <tr><td>3</td><td>26</td></tr> <tr><td>4</td><td>20</td></tr> <tr><td>5</td><td>30</td></tr> </table> </div> <div> <strong>Tabla 2 (Jesús)</strong> <table class=\"data-table\" style=\"max-width:220px;\"> <tr><th>Día</th><th>Kilogramos recolectados</th></tr> <tr><td>1</td><td>20</td></tr> <tr><td>2</td><td>24</td></tr> <tr><td>3</td><td>26</td></tr> <tr><td>4</td><td>24</td></tr> <tr><td>5</td><td>30</td></tr> </table> </div> </div> <p><strong>De acuerdo con la información consignada en las dos tablas, ¿cuál de las siguientes afirmaciones es verdadera?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "La mediana de los kilogramos recolectados por Jesús es igual a la mediana de los kilogramos recolectados por Álvaro."
      },
      {
        "id": "B",
        "texto": "El promedio de los kilogramos recolectados por Álvaro es igual al promedio de los kilogramos recolectados por Jesús."
      },
      {
        "id": "C",
        "texto": "El rango de los kilogramos recolectados por Jesús es mayor que el rango de los kilogramos recolectados por Álvaro."
      },
      {
        "id": "D",
        "texto": "La moda de los kilogramos recolectados por Álvaro es mayor que la moda de los kilogramos recolectados por Jesús."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "Hallemos las modas (dato que más se repite). Para Álvaro, el 30 se repite dos veces (moda = 30). Para Jesús, el 24 se repite dos veces (moda = 24). Al comparar, 30 es mayor que 24; por tanto, la afirmación D es verdadera."
  },
  {
    "id": "mat_sim_14_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Cuando se mide la tensión arterial de una persona, se debe medir la presión diastólica y la presión sistólica. La tabla muestra información sobre la tensión arterial de cuatro personas.</p> <table class=\"data-table\" style=\"max-width: 450px; margin: 10px auto;\"> <tr><th>Persona</th><th>Presión diastólica (mmHg)</th><th>Presión sistólica (mmHg)</th><th>Nivel</th></tr> <tr><td>Persona 1</td><td>70</td><td>110</td><td>Normal</td></tr> <tr><td>Persona 2</td><td>80</td><td>125</td><td>Elevada</td></tr> <tr><td>Persona 3</td><td>90</td><td>136</td><td>Hipertensión I</td></tr> <tr><td>Persona 4</td><td>95</td><td>144</td><td>Hipertensión II</td></tr> </table> <p>Por otra parte, para calcular la desviación estándar de un conjunto de datos, se plantea el siguiente procedimiento:</p> <p><b>Paso 1.</b> Calcular la varianza del conjunto de datos.<br><b>Paso 2.</b> Calcular la raíz cuadrada de la varianza obtenida en el paso 1.</p> <p><strong>Teniendo en cuenta la información anterior, ¿para cuáles variables de la tabla se puede aplicar este procedimiento?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Persona y nivel."
      },
      {
        "id": "B",
        "texto": "Persona, presión diastólica y presión sistólica."
      },
      {
        "id": "C",
        "texto": "Presión diastólica y presión sistólica."
      },
      {
        "id": "D",
        "texto": "Persona, presión diastólica, presión sistólica y nivel."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "La varianza y la desviación estándar son descriptores estadísticos que medirán la dispersión únicamente de variables cuantitativas (numéricas). 'Persona' y 'Nivel' son variables cualitativas categóricas de texto, por lo que no es posible operar matemáticamente con ellas."
  },
  {
    "id": "mat_sim_14_p19",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En los últimos 100 años, las universidades de EE. UU. han dado a los estudiantes calificaciones cada vez más altas por trabajos de similares características. Por ejemplo, alguien que, hace veinte años, tuvo un promedio de 73 puntos sobre 100, con el mismo trabajo, hoy tendría 82 puntos sobre 100, puesto que cada 20 años las calificaciones suben un tercio de lo que les falta para ser iguales a 100; es decir, a 73 le faltan 27, y como, de este último número, debe subir la tercera parte, por eso resulta 82.</p> <p><strong>En general, si una persona tuvo hace veinte años un promedio inicial cualquiera de puntos sobre 100, entonces, ¿cuál sería su media, en el día de hoy, también sobre 100?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Promedio actual = Promedio inicial + (Promedio inicial)/3."
      },
      {
        "id": "B",
        "texto": "Promedio actual = 100 - (Promedio inicial)/3."
      },
      {
        "id": "C",
        "texto": "Promedio actual = Promedio inicial + (100 - Promedio inicial)/3."
      },
      {
        "id": "D",
        "texto": "Promedio actual = Promedio inicial + 100/3."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "El texto indica que las notas suben un tercio de lo que les falta para ser iguales a 100. Matemáticamente, lo que le falta a un promedio inicial 'P' para llegar a 100 es (100 - P). El tercio de esta diferencia es (100 - P)/3. Sumado a la nota original, la ecuación es: Promedio inicial + (100 - Promedio inicial)/3."
  },
  {
    "id": "mat_sim_14_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un torneo deportivo participan tres atletas que acumulan puntos durante cuatro intentos. El puntaje definitivo por atleta se obtiene al sumar los puntajes de los cuatro intentos. La información sobre los puntos obtenidos en cada intento por las atletas aparece en la tabla.</p> <table class=\"data-table\" style=\"max-width: 350px; margin: 10px auto;\"> <tr><th colspan=\"4\" style=\"background:#e2e8f0; color:#000;\">Tabla de clasificación</th></tr> <tr><th rowspan=\"2\" style=\"background:#e2e8f0; color:#000;\">Intento</th><th colspan=\"3\">Puntos obtenidos</th></tr> <tr><th>Andrea</th><th>Mariana</th><th>Catalina</th></tr> <tr><td>Primero</td><td>4</td><td>3</td><td>2</td></tr> <tr><td>Segundo</td><td>1</td><td>2</td><td>3</td></tr> <tr><td>Tercero</td><td>1</td><td>4</td><td>4</td></tr> <tr><td>Cuarto</td><td>3</td><td>2</td><td>4</td></tr> </table> <p><strong>Teniendo en cuenta el resultado definitivo, ¿cuál de las siguientes opciones ordena a las atletas de mayor a menor puntaje?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Andrea, Catalina, Mariana."
      },
      {
        "id": "B",
        "texto": "Catalina, Mariana, Andrea."
      },
      {
        "id": "C",
        "texto": "Catalina, Andrea, Mariana."
      },
      {
        "id": "D",
        "texto": "Mariana, Andrea, Catalina."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "Sumamos los puntajes de cada una de las atletas: Andrea = 4 + 1 + 1 + 3 = 9. Mariana = 3 + 2 + 4 + 2 = 11. Catalina = 2 + 3 + 4 + 4 = 13. El orden de mayor a menor puntaje es Catalina, Mariana, Andrea."
  },
  {
    "id": "mat_sim_14_p21",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La gráfica muestra el comportamiento de una función en el intervalo [1, 5].</p> <p>Un estudiante asegura que la función es constante en el intervalo [1, 5].</p> <p><strong>¿Es verdadera esta afirmación?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque la función toma los mismos valores en los extremos del intervalo [1, 5]."
      },
      {
        "id": "B",
        "texto": "No, porque la función es decreciente en el intervalo [2, 3] y creciente en [4, 5]."
      },
      {
        "id": "C",
        "texto": "Sí, porque el valor de la función en x = 2 es igual a los valores en x = 1 y x = 5."
      },
      {
        "id": "D",
        "texto": "No, porque la función es igual a cero solamente en el intervalo [3, 4]."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "Una función es constante si su valor Y no cambia en todo el dominio. En este caso, la función desciende desde Y=1 hasta Y=0 entre las marcas x=2 y x=3, y luego asciende de Y=0 a Y=1 entre las marcas x=4 y x=5. Por lo tanto, no es constante.",
    "svg": "<svg viewBox=\"0 0 200 120\" width=\"250\" style=\"display:block; margin:auto; background:#fff; border:1px solid #ccc; padding:10px;\">\n                        <defs><marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <line x1=\"20\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\" marker-end=\"url(#arr)\"/>\n                        <line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\" marker-end=\"url(#arr)\"/>\n                        <g stroke=\"#eee\" stroke-dasharray=\"2\">\n                            <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"100\"/>\n                            <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"100\"/>\n                            <line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"100\"/>\n                            <line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"100\"/>\n                            <line x1=\"170\" y1=\"10\" x2=\"170\" y2=\"100\"/>\n                            <line x1=\"20\" y1=\"60\" x2=\"190\" y2=\"60\"/>\n                            <line x1=\"20\" y1=\"20\" x2=\"190\" y2=\"20\"/>\n                        </g>\n                        <g font-size=\"8\" text-anchor=\"middle\">\n                            <text x=\"25\" y=\"110\">0</text><text x=\"50\" y=\"110\">1</text><text x=\"80\" y=\"110\">2</text><text x=\"110\" y=\"110\">3</text><text x=\"140\" y=\"110\">4</text><text x=\"170\" y=\"110\">5</text><text x=\"195\" y=\"105\">x</text>\n                        </g>\n                        <g font-size=\"8\" text-anchor=\"end\">\n                            <text x=\"15\" y=\"63\">1</text><text x=\"15\" y=\"23\">2</text><text x=\"15\" y=\"10\">y</text>\n                        </g>\n                        <polyline points=\"50,60 80,60 110,100 140,100 170,60\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <circle cx=\"50\" cy=\"60\" r=\"2\" fill=\"#000\"/>\n                        <text x=\"180\" y=\"120\" font-size=\"10\" font-weight=\"bold\">Gráfica</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p22",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La imagen muestra el nuevo diseño de una baldosa que se vende en una ferretería.</p> <p>Para calcular el área de la región de la baldosa que está sombreada, un empleado realizó el siguiente procedimiento:</p> <p><strong>Paso 1.</strong> Restó al área de la baldosa el área del círculo que pasa por P, Q, R, S y ese resultado lo dividió entre 2.</p> <p><strong>Paso 2.</strong> Restó al área del círculo el área del cuadrado PQRS, y ese resultado lo dividió entre 2.</p> <p><strong>Paso 3.</strong> Dividió entre 2 el área del cuadrado PQRS.</p> <p><strong>Paso 4.</strong> Sumó los resultados obtenidos en los pasos 1, 2 y 3.</p> <p>Una persona afirma que el anterior procedimiento también sirve para calcular el área de la región que está pintada de blanco. ¿Es verdadera esta afirmación?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque el empleado se confundió y realizó un procedimiento para el área blanca pero no para el área sombreada."
      },
      {
        "id": "B",
        "texto": "No, porque en el paso 2 y 3 se debe usar el área de un rombo y no de un cuadrado, por lo cual no es correcto."
      },
      {
        "id": "C",
        "texto": "Sí, porque el área blanca es igual al área sombreada y el procedimiento realizado por el empleado es correcto."
      },
      {
        "id": "D",
        "texto": "No, porque al ser igual la parte blanca a la sombreada solamente se debía dividir entre 2 el área de la baldosa."
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "grafica",
    "justificacion": "El procedimiento del empleado da como suma exactamente la mitad del área de la baldosa (1.800 cm²). Como la otra mitad corresponde exactamente a la región pintada de blanco, ambas áreas son iguales y la afirmación es verdadera.",
    "svg": "<svg viewBox=\"0 0 260 260\" width=\"100%\" style=\"background:#fff; max-width:260px; display:block; margin:15px auto;\" class=\"math-font text-heading\">\n                        <!-- REGIONES SOMBREADAS EXACTAS DE LA PRUEBA (Color gris claro, totaliza el 50% de la baldosa) -->\n                        <!-- 1. Esquina superior izquierda externa (fuera del círculo) -->\n                        <path d=\"M 40 40 L 120 40 A 80 80 0 0 0 40 120 Z\" fill=\"currentColor\" opacity=\"0.15\" />\n                        \n                        <!-- 2. Cuadrante inferior derecho completo del círculo (incluye el triángulo OQR y el segmento circular QR) -->\n                        <path d=\"M 120 120 L 200 120 A 80 80 0 0 1 120 200 Z\" fill=\"currentColor\" opacity=\"0.15\" />\n                        \n                        <!-- DIBUJO DE LÍNEAS DE LA BALDOSA -->\n                        <!-- Cuadrado exterior de la baldosa (60cm x 60cm, representado de 40 a 200) -->\n                        <rect x=\"40\" y=\"40\" width=\"160\" height=\"160\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"/>\n                        \n                        <!-- Círculo inscrito (radio 80, centro en 120, 120) -->\n                        <circle cx=\"120\" cy=\"120\" r=\"80\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Cuadrado rotado PQRS inscrito (rombo) -->\n                        <polygon points=\"120,40 200,120 120,200 40,120\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Diagonales/Ejes divisores (PR vertical, SQ horizontal) -->\n                        <line x1=\"120\" y1=\"40\" x2=\"120\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"40\" y1=\"120\" x2=\"200\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        \n                        <!-- Etiquetas P, Q, R, S -->\n                        <text x=\"120\" y=\"32\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">P</text>\n                        <text x=\"212\" y=\"124\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" fill=\"currentColor\">Q</text>\n                        <text x=\"120\" y=\"215\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\" fill=\"currentColor\">R</text>\n                        <text x=\"28\" y=\"124\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"12\" fill=\"currentColor\">S</text>\n\n                        <!-- Cotas de dimensiones exactas -->\n                        <!-- Cota Superior Horizontal: 60 cm -->\n                        <line x1=\"40\" y1=\"20\" x2=\"200\" y2=\"20\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"40\" y1=\"15\" x2=\"40\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"200\" y1=\"15\" x2=\"200\" y2=\"25\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"120\" y=\"13\" font-size=\"10\" text-anchor=\"middle\" fill=\"currentColor\" font-weight=\"bold\">60 cm</text>\n                        \n                        <!-- Cota Lateral Izquierda Vertical: 60 cm -->\n                        <line x1=\"18\" y1=\"40\" x2=\"18\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"13\" y1=\"40\" x2=\"23\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"13\" y1=\"200\" x2=\"23\" y2=\"200\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"10\" y=\"124\" font-size=\"10\" text-anchor=\"end\" fill=\"currentColor\" font-weight=\"bold\">60 cm</text>\n                        \n                        <!-- Cota Lateral Derecha Vertical (mitad): 30 cm -->\n                        <line x1=\"222\" y1=\"40\" x2=\"222\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"217\" y1=\"40\" x2=\"227\" y2=\"40\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"217\" y1=\"120\" x2=\"227\" y2=\"120\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"230\" y=\"84\" font-size=\"10\" text-anchor=\"start\" fill=\"currentColor\" font-weight=\"bold\">30 cm</text>\n                        \n                        <!-- Cota Inferior Horizontal (mitad): 30 cm -->\n                        <line x1=\"40\" y1=\"225\" x2=\"120\" y2=\"225\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"40\" y1=\"220\" x2=\"40\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <line x1=\"120\" y1=\"220\" x2=\"120\" y2=\"230\" stroke=\"currentColor\" stroke-width=\"1\"/>\n                        <text x=\"80\" y=\"242\" font-size=\"10\" text-anchor=\"middle\" fill=\"currentColor\" font-weight=\"bold\">30 cm</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_14_p23",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En una fábrica de productos químicos se utiliza un ventilador grande y uno pequeño para eliminar humo y gases industriales. Los dos ventiladores encendidos durante un día consumen 5 kilovatios, de los cuales el 70 % es consumido por el ventilador grande, mientras que el 30 % es consumido por el ventilador pequeño.</p> <p><strong>¿Cuál es el consumo, respectivamente, por día del ventilador grande y del ventilador pequeño?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "3,5 kilovatios y 1,5 kilovatios."
      },
      {
        "id": "B",
        "texto": "2,3 kilovatios y 0,4 kilovatios."
      },
      {
        "id": "C",
        "texto": "4,3 kilovatios y 0,7 kilovatios."
      },
      {
        "id": "D",
        "texto": "8,5 kilovatios y 6,5 kilovatios."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "Grande: 70% de 5 = 0.70 &times; 5 = 3.5 kW. Pequeño: 30% de 5 = 0.30 &times; 5 = 1.5 kW."
  },
  {
    "id": "mat_sim_14_p24",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una pieza de papel de forma cuadrada tiene un lado igual a 2 cm.</p> <p><strong>¿Cuál de las siguientes opciones NO es un método para encontrar el área de esta pieza?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Dividir el cuadrado en dos triángulos con 2 cm de base y 2 cm de altura."
      },
      {
        "id": "B",
        "texto": "Dividir el cuadrado en dos rectángulos con 1 cm de base y 2 cm de altura."
      },
      {
        "id": "C",
        "texto": "Dividir el cuadrado en 8 triángulos con 1 cm de base y 1 cm de altura."
      },
      {
        "id": "D",
        "texto": "Dividir el cuadrado en 10 triángulos con 2 cm de base y 1 cm de altura."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "El área total del papel es 2 cm &times; 2 cm = 4 cm². El método D propone 10 triángulos de base 2 cm y altura 1 cm, cuya suma total sería 10 &times; (2 &times; 1 / 2) = 10 cm², lo cual excede el área real de la pieza."
  },
  {
    "id": "mat_sim_14_p25",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La relación de Mosteller es una fórmula que se utiliza en medicina para calcular el área de la superficie corporal (ASC) de una persona. Si una persona tiene una estatura de 144 cm y su masa corporal es w, medida en kilogramos, el valor nominal del ASC, medido en m², se puede calcular por medio de la fórmula:</p> <p style=\"text-align:center; font-family:'Georgia'; font-size:1.3rem; margin:18px 0; display:flex; justify-content:center; align-items:center; gap:8px;\"> <span>ASC</span> = <span style=\"display:inline-flex; align-items:center; vertical-align:middle;\"> <span style=\"font-size:1.5rem; margin-right:-2px; transform:translateY(-1px);\">&radic;</span> <span style=\"border-top:1.5px solid currentColor; padding-top:2px; display:inline-block;\"> <span class=\"frac\"><span>144w</span><span>3.600</span></span> </span> </span> <span>=</span> <span class=\"frac\"><span>&radic;w</span><span>5</span></span> </p> <p><strong>¿Cuál es el ASC de un paciente con estatura de 144 cm y con una masa corporal de 100 kilogramos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<span class=\"frac\"><span>50 m²</span><span>5</span></span>"
      },
      {
        "id": "B",
        "texto": "<span class=\"frac\"><span>44 m²</span><span>5</span></span>"
      },
      {
        "id": "C",
        "texto": "<span class=\"frac\"><span>10 m²</span><span>5</span></span>"
      },
      {
        "id": "D",
        "texto": "<span class=\"frac\"><span>12 m²</span><span>5</span></span>"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "Sustituyendo w = 100 kg en la fórmula simplificada: ASC = <span class=\"frac\"><span>&radic;100</span><span>5</span></span> = <span class=\"frac\"><span>10</span><span>5</span></span> m² (que equivale a 2 m²)."
  }
]);
