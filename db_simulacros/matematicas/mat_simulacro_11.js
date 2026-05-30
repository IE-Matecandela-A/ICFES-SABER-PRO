// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas - Simulacro Matemáticas 11 (Sesión 1)
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
  {
    "id": "mat_sim_11_p1",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Para determinar los cortes con el eje x de la gráfica de la función f(x) = x² - 169, se pueden emplear varios métodos.</p> <p><strong>¿Cuál de los siguientes métodos NO permite determinar los cortes con el eje x?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Factorizar x² - 169 = (x - 13)(x + 13)"
      },
      {
        "id": "B",
        "texto": "Utilizar la fórmula cuadrática x = <span class='frac'><span>&plusmn; &radic;(4 &times; 169)</span><span>2</span></span>"
      },
      {
        "id": "C",
        "texto": "Completar cuadrados x² - 169 + 26x - 26x = (x - 13)²"
      },
      {
        "id": "D",
        "texto": "Encontrar dos números tales que su cuadrado sea 169 o resolver x = &plusmn; &radic;169"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis Conceptual:</div> <p>Para determinar los cortes de la gráfica f(x) = x<sup>2</sup> - 169 con el eje x, se debe resolver la ecuación de segundo grado f(x) = 0:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>x<sup>2</sup> - 169 = 0</b> </div> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis de los Métodos Válidos:</div> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Método 1 (Factorización):</b> Diferencia de cuadrados:<br> x<sup>2</sup> - 13<sup>2</sup> = (x - 13)(x + 13) = 0 &rArr; x = 13 o x = -13.</li> <li><b>Método 2 (Despeje directo):</b> Extracción de raíces:<br> x<sup>2</sup> = 169 &rArr; x = &plusmn;&radic;169 &rArr; x = &plusmn;13.</li> <li><b>Método 3 (Fórmula cuadrática):</b> Con a = 1, b = 0, c = -169:<br> x = <span class=\"frac\"><span>&plusmn;&radic;-4(1)(-169)</span><span>2</span></span> = <span class=\"frac\"><span>&plusmn;&radic;676</span><span>2</span></span> = &plusmn;13.</li> </ul> <div style='margin-bottom:6px; font-weight:700; color:var(--accent);'>¿Por qué la opción C es el método INCORRECTO?</div> <p>La opción C propone: <i>Completar cuadrados x<sup>2</sup> - 169 + 26x - 26x = (x-13)<sup>2</sup></i>. Si desarrollamos el trinomio cuadrado perfecto de la derecha obtenemos:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>(x - 13)<sup>2</sup> = x<sup>2</sup> - 26x + 169</b> </div> <p>Esta expresión altera el término constante original de <b>-169</b> a <b>+169</b>, lo cual representa una falsedad y altera la función original.</p>"
  },
  {
    "id": "mat_sim_11_p2",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La tabla muestra la cantidad de personas contagiadas de un virus en un pequeño hospital, según su rango de edad.</p> <table class=\"data-table\" style=\"max-width: 300px;\"> <tr><th>Edad</th><th>Cantidad de contagiados</th></tr> <tr><td>45 - 64</td><td>56</td></tr> <tr><td>65 - 74</td><td>4</td></tr> <tr><td>75 o +</td><td>20</td></tr> </table> <p><strong>¿Cuál de las siguientes gráficas muestra la distribución de las 80 personas contagiadas en el hospital?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<div style=\"text-align:center;\"><b>A. Distribución de personas contagiadas</b><br> <svg viewBox=\"0 0 100 100\" width=\"100\" style=\"margin: 10px auto;\"> <g style=\"transform: rotate(-90deg); transform-origin: 50px 50px;\"> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"31.831\" stroke-dasharray=\"55 100\" stroke-dashoffset=\"0\" /> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"31.831\" stroke-dasharray=\"5 100\" stroke-dashoffset=\"-55\" /> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"31.831\" stroke-dasharray=\"20 100\" stroke-dashoffset=\"-60\" /> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#475569\" stroke-width=\"31.831\" stroke-dasharray=\"20 100\" stroke-dashoffset=\"-80\" /> </g> <circle cx=\"50\" cy=\"50\" r=\"31.831\" fill=\"none\" stroke=\"#000\" stroke-width=\"1\"/> <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"18.169\" stroke=\"#000\" stroke-width=\"1\"/> <line x1=\"50\" y1=\"50\" x2=\"21\" y2=\"60\" stroke=\"#000\" stroke-width=\"1\"/> <line x1=\"50\" y1=\"50\" x2=\"19\" y2=\"44\" stroke=\"#000\" stroke-width=\"1\"/> <line x1=\"50\" y1=\"50\" x2=\"40\" y2=\"19.7\" stroke=\"#000\" stroke-width=\"1\"/> </svg> <div style=\"font-size: 8px; display: flex; justify-content: center; gap: 5px;\"> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#1e293b;margin-right:2px;border:1px solid #000;\"></div> 45-64</span> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#e2e8f0;margin-right:2px;border:1px solid #000;\"></div> 65-74</span> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#94a3b8;margin-right:2px;border:1px solid #000;\"></div> 75+</span> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#475569;margin-right:2px;border:1px solid #000;\"></div> Otro</span> </div> </div>"
      },
      {
        "id": "B",
        "texto": "<div style=\"text-align:center;\"><b>B. Distribución de personas contagiadas</b><br> <svg viewBox=\"0 0 100 100\" width=\"100\" style=\"margin: 10px auto;\"> <g style=\"transform: rotate(-90deg); transform-origin: 50px 50px;\"> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#1e293b\" stroke-width=\"31.831\" stroke-dasharray=\"70 100\" stroke-dashoffset=\"0\" /> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#e2e8f0\" stroke-width=\"31.831\" stroke-dasharray=\"5 100\" stroke-dashoffset=\"-70\" /> <circle r=\"15.9155\" cx=\"50\" cy=\"50\" fill=\"none\" stroke=\"#94a3b8\" stroke-width=\"31.831\" stroke-dasharray=\"25 100\" stroke-dashoffset=\"-75\" /> </g> <circle cx=\"50\" cy=\"50\" r=\"31.831\" fill=\"none\" stroke=\"#000\" stroke-width=\"1\"/> <line x1=\"50\" y1=\"50\" x2=\"50\" y2=\"18.169\" stroke=\"#000\" stroke-width=\"1\"/> <!-- Corte top --> <line x1=\"50\" y1=\"50\" x2=\"19.7\" y2=\"59.8\" stroke=\"#000\" stroke-width=\"1\"/> <!-- Corte 70% --> <line x1=\"50\" y1=\"50\" x2=\"18.169\" y2=\"50\" stroke=\"#000\" stroke-width=\"1\"/> <!-- Corte 75% --> </svg> <div style=\"font-size: 8px; display: flex; justify-content: center; gap: 5px;\"> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#1e293b;margin-right:2px;border:1px solid #000;\"></div> 45-64</span> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#e2e8f0;margin-right:2px;border:1px solid #000;\"></div> 65-74</span> <span style=\"display:flex; align-items:center;\"><div style=\"width:8px;height:8px;background:#94a3b8;margin-right:2px;border:1px solid #000;\"></div> 75+</span> </div> </div>"
      },
      {
        "id": "C",
        "texto": "<div style=\"text-align:center;\"><b>C. Distribución de personas contagiadas</b><br> <svg viewBox=\"0 0 200 150\" width=\"200\" style=\"margin: 10px auto; background:#fff;\"> <defs><marker id=\"arrowC\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs> <g stroke=\"#94a3b8\" stroke-width=\"1\"> <line x1=\"30\" y1=\"110\" x2=\"180\" y2=\"110\"/><line x1=\"30\" y1=\"90\" x2=\"180\" y2=\"90\"/> <line x1=\"30\" y1=\"70\" x2=\"180\" y2=\"70\"/><line x1=\"30\" y1=\"50\" x2=\"180\" y2=\"50\"/> <line x1=\"30\" y1=\"30\" x2=\"180\" y2=\"30\"/><line x1=\"30\" y1=\"10\" x2=\"180\" y2=\"10\"/> </g> <line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"130\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowC)\"/> <line x1=\"30\" y1=\"130\" x2=\"30\" y2=\"5\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowC)\"/> <g font-size=\"8\" text-anchor=\"end\" fill=\"#000\"> <text x=\"25\" y=\"133\">0</text><text x=\"25\" y=\"113\">20</text><text x=\"25\" y=\"93\">40</text> <text x=\"25\" y=\"73\">60</text><text x=\"25\" y=\"53\">80</text><text x=\"25\" y=\"33\">100</text><text x=\"25\" y=\"13\">120</text> </g> <!-- Barras: ~65, ~75, ~100 --> <rect x=\"45\" y=\"65\" width=\"20\" height=\"65\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <rect x=\"95\" y=\"55\" width=\"20\" height=\"75\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <rect x=\"145\" y=\"30\" width=\"20\" height=\"100\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <g font-size=\"8\" text-anchor=\"middle\" fill=\"#000\"> <text x=\"55\" y=\"142\">45-64</text><text x=\"105\" y=\"142\">65-74</text><text x=\"155\" y=\"142\">75+</text> </g> </svg> </div>"
      },
      {
        "id": "D",
        "texto": "<div style=\"text-align:center;\"><b>D. Distribución de personas contagiadas</b><br> <svg viewBox=\"0 0 200 150\" width=\"200\" style=\"margin: 10px auto; background:#fff;\"> <defs><marker id=\"arrowD\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs> <g stroke=\"#94a3b8\" stroke-width=\"1\"> <line x1=\"30\" y1=\"110\" x2=\"180\" y2=\"110\"/><line x1=\"30\" y1=\"90\" x2=\"180\" y2=\"90\"/> <line x1=\"30\" y1=\"70\" x2=\"180\" y2=\"70\"/><line x1=\"30\" y1=\"50\" x2=\"180\" y2=\"50\"/> <line x1=\"30\" y1=\"30\" x2=\"180\" y2=\"30\"/><line x1=\"30\" y1=\"10\" x2=\"180\" y2=\"10\"/> </g> <line x1=\"30\" y1=\"130\" x2=\"190\" y2=\"130\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowD)\"/> <line x1=\"30\" y1=\"130\" x2=\"30\" y2=\"5\" stroke=\"#000\" stroke-width=\"1.5\" marker-end=\"url(#arrowD)\"/> <g font-size=\"8\" text-anchor=\"end\" fill=\"#000\"> <text x=\"25\" y=\"133\">0%</text><text x=\"25\" y=\"113\">10%</text><text x=\"25\" y=\"93\">20%</text> <text x=\"25\" y=\"73\">30%</text><text x=\"25\" y=\"53\">40%</text><text x=\"25\" y=\"33\">50%</text><text x=\"25\" y=\"13\">60%</text> </g> <!-- Barras con el error tipográfico intencional de la gráfica D: 0, 55%, 5%, 20% --> <rect x=\"80\" y=\"20\" width=\"15\" height=\"110\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <rect x=\"115\" y=\"120\" width=\"15\" height=\"10\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <rect x=\"150\" y=\"90\" width=\"15\" height=\"40\" fill=\"#1e293b\" stroke=\"#000\" stroke-width=\"1\"/> <g font-size=\"8\" text-anchor=\"middle\" fill=\"#000\"> <text x=\"50\" y=\"142\">0-45</text><text x=\"87\" y=\"142\">65-74</text><text x=\"122\" y=\"142\">75+</text><text x=\"157\" y=\"142\">75+</text> </g> </svg> </div>"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo de Frecuencias y Porcentajes:</div> <p>Primero, calculamos el total de personas contagiadas sumando las cantidades de cada grupo de edad:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Total = 56 + 4 + 20 = 80 personas</b> </div> <p>Posteriormente, determinamos el porcentaje correspondiente a cada sector:</p> <table class='data-table' style='max-width:350px; margin:10px auto;'> <tr><th>Grupo de Edad</th><th>Cálculo</th><th>Porcentaje</th></tr> <tr><td><b>45 - 64 años</b></td><td><span class=\"frac\"><span>56</span><span>80</span></span> = 0.70</td><td><b>70%</b></td></tr> <tr><td><b>65 - 74 años</b></td><td><span class=\"frac\"><span>4</span><span>80</span></span> = 0.05</td><td><b>5%</b></td></tr> <tr><td><b>75 o más años</b></td><td><span class=\"frac\"><span>20</span><span>80</span></span> = 0.25</td><td><b>25%</b></td></tr> </table> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis de las Gráficas:</div> <ul style='margin-left:20px; display:flex; flex-direction:column; gap:6px;'> <li><b>Gráfica B:</b> Representa exactamente estas proporciones (70% del círculo para el primer grupo, 25% o un cuarto de círculo para el grupo 75+, y un 5% para el grupo de 65-74).</li> <li><b>Gráfica A:</b> Introduce erróneamente un sector 'Otro' de 20% que no existe.</li> <li><b>Gráfica C y D:</b> Son diagramas de barras con errores tipográficos y escalas incorrectas.</li> </ul>"
  },
  {
    "id": "mat_sim_11_p3",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La figura muestra un recipiente cilíndrico de 10 cm de altura y 5 cm de diámetro en su base, en el que se depositaron 50 ml de agua y un volumen desconocido de aceite.</p> <p>Para calcular el volumen de aceite depositado, se efectúa el siguiente procedimiento:</p> <p><b>Paso 1.</b> Se calcula el área del círculo que tiene 5 cm de diámetro.<br><b>Paso 2.</b> El anterior resultado se multiplica por 10 cm.<br><b>Paso 3.</b> Al resultado del paso 2, se le resta 50 ml.</p> <p>¿En qué paso hay un error?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Paso 1, porque el área del círculo se debe calcular con el radio de la base del cilindro."
      },
      {
        "id": "B",
        "texto": "Paso 1, porque la base del cilindro que forma el aceite es diferente a la del recipiente."
      },
      {
        "id": "C",
        "texto": "Paso 2, porque con esa altura se estaría calculando el volumen de todo el recipiente."
      },
      {
        "id": "D",
        "texto": "Paso 2, porque se estaría calculando el volumen que ocupa el agua."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis del Volumen del Cilindro:</div> <p>El volumen total de un cilindro está dado por la fórmula:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>V = Área de la base &times; Altura = (&pi; &times; r<sup>2</sup>) &times; h</b> </div> <div style='margin-bottom:12px; font-weight:700; color:var(--accent);'>Explicación del Error (Paso 1):</div> <p>El diámetro de la base mide 5 cm. Por definición, el radio (r) es la mitad del diámetro:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>r = <span class=\"frac\"><span>d</span><span>2</span></span> = <span class=\"frac\"><span>5 cm</span><span>2</span></span> = 2.5 cm</b> </div> <p>Para calcular el área de la base en el <b>Paso 1</b>, es indispensable emplear el radio (r = 2.5 cm):</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>A = &pi; &times; (2.5)<sup>2</sup> &approx; 19.63 cm<sup>2</sup></b> </div> <p>El error del Paso 1 radica en realizar el cálculo utilizando directamente los 5 cm de diámetro como si fuera el radio, lo que cuadruplica el área de la base y da un volumen erróneo.</p>",
    "svg": "<svg viewBox=\"0 0 200 220\" width=\"150\" style=\"display:block; margin:auto; background:#fff; border-radius:8px;\">\n                        <ellipse cx=\"100\" cy=\"40\" rx=\"40\" ry=\"12\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n                        <path d=\"M 60 40 L 60 180 A 40 12 0 0 0 140 180 L 140 40\" fill=\"none\" stroke=\"#334155\" stroke-width=\"2\"/>\n                        <path d=\"M 60 120 A 40 12 0 0 0 140 120\" fill=\"none\" stroke=\"#334155\" stroke-width=\"1\" stroke-dasharray=\"3\"/>\n                        <rect x=\"61\" y=\"80\" width=\"78\" height=\"40\" fill=\"#333\"/>\n                        <rect x=\"61\" y=\"120\" width=\"78\" height=\"60\" fill=\"#e2e8f0\"/>\n                        <text x=\"100\" y=\"105\" font-size=\"10\" font-weight=\"bold\" fill=\"#fff\" text-anchor=\"middle\">Aceite</text>\n                        <text x=\"100\" y=\"150\" font-size=\"10\" font-weight=\"bold\" text-anchor=\"middle\">Agua</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p4",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un estudiante está ahorrando para un paseo que tiene un costo de $800.000; él empezó su ahorro en enero con $100.000, que su abuela le regaló, y al final de cada mes, está ahorrando cierta cantidad de dinero. La tabla resume el progreso del ahorro del estudiante durante los primeros cuatro meses.</p> <table class=\"data-table\"> <tr><th>Mes</th><th>Dinero ahorrado al inicio de mes</th><th>Dinero ahorrado al finalizar el mes</th><th>Dinero que hace falta para completar el ahorro</th></tr> <tr><td>Enero</td><td>$100.000</td><td>$130.000</td><td>$670.000</td></tr> <tr><td>Febrero</td><td>$130.000</td><td>$160.000</td><td>$640.000</td></tr> <tr><td>Marzo</td><td>$160.000</td><td>$190.000</td><td>$610.000</td></tr> <tr><td>Abril</td><td>$190.000</td><td>$220.000</td><td>$580.000</td></tr> </table> <p><strong>¿Cuál es la tendencia del dinero ahorrado al finalizar cada mes?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Disminuye $30.000 cada mes."
      },
      {
        "id": "B",
        "texto": "Aumenta $30.000 cada mes."
      },
      {
        "id": "C",
        "texto": "Aumenta $100.000 cada mes."
      },
      {
        "id": "D",
        "texto": "Disminuye $100.000 cada mes."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis de la Serie de Datos:</div> <p>Examinamos el dinero ahorrado al finalizar cada mes según los registros de la tabla:</p> <table class='data-table' style='max-width:400px; margin:10px auto;'> <tr><th>Mes</th><th>Dinero al finalizar el mes</th><th>Variación mensual</th></tr> <tr><td>Enero</td><td>$130.000</td><td>Inicio de serie</td></tr> <tr><td>Febrero</td><td>$160.000</td><td>$160.000 - $130.000 = <b>+$30.000</b></td></tr> <tr><td>Marzo</td><td>$190.000</td><td>$190.000 - $160.000 = <b>+$30.000</b></td></tr> <tr><td>Abril</td><td>$220.000</td><td>$220.000 - $190.000 = <b>+$30.000</b></td></tr> </table> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Conclusión:</div> <p>La tendencia del saldo acumulado muestra un incremento mensual uniforme y constante de exactamente <b>$30.000</b>.</p>"
  },
  {
    "id": "mat_sim_11_p5",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La tabla muestra el registro que llevó un mecánico automotriz de las piezas que tuvieron que reemplazarse durante el mantenimiento de tres vehículos.</p> <table class=\"data-table\" style=\"max-width: 300px;\"> <tr><th>Vehículo</th><th>Número de piezas reemplazadas</th></tr> <tr><td>1</td><td>6</td></tr> <tr><td>2</td><td>5</td></tr> <tr><td>3</td><td>10</td></tr> </table> <p><strong>De acuerdo con esta información, ¿cuál es el promedio del número de piezas reemplazadas de los tres vehículos?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "21"
      },
      {
        "id": "B",
        "texto": "7"
      },
      {
        "id": "C",
        "texto": "10"
      },
      {
        "id": "D",
        "texto": "6"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo del Promedio o Media Aritmética (x&#772;):</div> <p>El promedio se calcula dividiendo la suma de todos los valores entre el número total de datos (N):</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>x&#772; = <span class=\"frac\"><span>&Sigma; x<sub>i</sub></span><span>N</span></span></b> </div> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Procedimiento Paso a Paso:</div> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li><b>Paso 1:</b> Sumamos la cantidad de piezas reemplazadas de los tres vehículos:<br> Suma = 6 (Vehículo 1) + 5 (Vehículo 2) + 10 (Vehículo 3) = 21 piezas</li> <li><b>Paso 2:</b> Dividimos el resultado de la suma entre el número total de vehículos (N = 3):<br> x&#772; = <span class=\"frac\"><span>21</span><span>3</span></span> = <b>7</b></li> </ol> <p style='margin-top:10px;'>Por lo tanto, el promedio de piezas reemplazadas es de <b>7 piezas por vehículo</b>.</p>"
  },
  {
    "id": "mat_sim_11_p6",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La figura muestra la distribución de los tipos de transporte que utilizan 160 personas para llegar al trabajo. Algunas personas usan únicamente un medio de transporte, otras dos, y otras tres.</p> <p><strong>Si se necesita saber la cantidad total de personas que se transportan en bicicleta, ¿cuáles son los datos que se deben sumar?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "5, 15, 20 y 25."
      },
      {
        "id": "B",
        "texto": "5 y 20."
      },
      {
        "id": "C",
        "texto": "25, 35 y 50."
      },
      {
        "id": "D",
        "texto": "5, 20, 25 y 50."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "grafica",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis del Diagrama de Venn:</div> <p>Un diagrama de Venn organiza elementos en conjuntos circulares interconectados. Para hallar el total de personas que usan un transporte determinado, debemos sumar todas las regiones dentro del círculo que lo representa.</p> <div style='margin-bottom:12px; font-weight:700; color:var(--success);'>Pertenencia al Conjunto \"Bicicleta\":</div> <p>Al observar el círculo etiquetado como <b>Bicicleta</b>, identificamos las siguientes cuatro cantidades:</p> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>50:</b> Personas que usan únicamente la bicicleta.</li> <li><b>20:</b> Personas que comparten el uso de carro privado y bicicleta.</li> <li><b>25:</b> Personas que comparten el uso de transporte público y bicicleta.</li> <li><b>5:</b> Personas que emplean simultáneamente los tres medios.</li> </ul> <div style='margin-bottom:6px; font-weight:700; color:var(--primary);'>Suma Total:</div> <p>El número total de personas que usan bicicleta se obtiene sumando estos cuatro valores:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>50 + 20 + 25 + 5 = 100 personas</b> </div>",
    "svg": "<svg viewBox=\"0 0 250 160\" width=\"250\" style=\"display:block; margin:auto;\">\n                        <circle cx=\"80\" cy=\"70\" r=\"45\" fill=\"none\" stroke=\"#000\"/>\n                        <circle cx=\"140\" cy=\"70\" r=\"45\" fill=\"none\" stroke=\"#000\"/>\n                        <circle cx=\"110\" cy=\"110\" r=\"45\" fill=\"none\" stroke=\"#000\"/>\n                        \n                        <text x=\"55\" y=\"65\" font-size=\"10\">35</text>\n                        <text x=\"165\" y=\"65\" font-size=\"10\">50</text>\n                        <text x=\"110\" y=\"135\" font-size=\"10\">10</text>\n                        \n                        <text x=\"110\" y=\"65\" font-size=\"10\">20</text>\n                        <text x=\"85\" y=\"95\" font-size=\"10\">15</text>\n                        <text x=\"135\" y=\"95\" font-size=\"10\">25</text>\n                        \n                        <text x=\"110\" y=\"85\" font-size=\"10\">5</text>\n                        \n                        <text x=\"50\" y=\"15\" font-size=\"8\">Carro</text><text x=\"50\" y=\"25\" font-size=\"8\">privado</text>\n                        <text x=\"170\" y=\"20\" font-size=\"8\">Bicicleta</text>\n                        <text x=\"170\" y=\"145\" font-size=\"8\">Transporte</text><text x=\"170\" y=\"155\" font-size=\"8\">público</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p7",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El fundador de una empresa de procesadores identificó que el número de transistores de un procesador del tipo X se duplicó cada dos años. Si en el 2010 el procesador tipo X tenía 10.000 transistores, ¿cuántos transistores tenía el procesador tipo X en el 2016?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "20.000 transistores."
      },
      {
        "id": "B",
        "texto": "40.000 transistores."
      },
      {
        "id": "C",
        "texto": "60.000 transistores."
      },
      {
        "id": "D",
        "texto": "80.000 transistores."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Desarrollo del Crecimiento Exponencial:</div> <p>El número de transistores se duplica cada dos años. Con un valor inicial de 10.000 en el año 2010, calculamos el crecimiento período a período:</p> <table class='data-table' style='max-width:350px; margin:10px auto;'> <tr><th>Año</th><th>Cálculo</th><th>Transistores</th></tr> <tr><td>2010</td><td>Valor inicial</td><td><b>10.000</b></td></tr> <tr><td>2012</td><td>10.000 &times; 2</td><td><b>20.000</b></td></tr> <tr><td>2014</td><td>20.000 &times; 2</td><td><b>40.000</b></td></tr> <tr><td>2016</td><td>40.000 &times; 2</td><td><b>80.000</b></td></tr> </table> <div style='margin-bottom:6px; font-weight:700; color:var(--primary);'>Modelado Matemático:</div> <p>Esto se puede representar con la función de crecimiento exponencial:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>N(t) = N<sub>0</sub> &times; 2<sup><span class=\"frac\"><span>t</span><span>2</span></span></sup></b> </div> <p>Donde t es el tiempo transcurrido en años desde 2010 (t = 2016 - 2010 = 6):</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>N(6) = 10.000 &times; 2<sup><span class=\"frac\"><span>6</span><span>2</span></span></sup> = 10.000 &times; 2<sup>3</sup> = 10.000 &times; 8 = 80.000</b> </div>"
  },
  {
    "id": "mat_sim_11_p8",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Un jardín con forma cuadrada, de vértices EFGH, tiene de lado x + y. Otro cuadrado de vértices PQRS está inscrito en el cuadrado EFGH, de tal manera que la distancia más cercana entre dos vértices consecutivos mide x.</p> <p>Para encontrar una fórmula que corresponda al área de la región sombreada, el jardinero propuso los siguientes pasos:</p> <p><b>Paso 1.</b> Escoger uno de los cuatro triángulos sombreados y multiplicar la medida de la altura por la medida de la base.<br><b>Paso 2.</b> Dividir entre 2 el resultado obtenido en el paso 1.<br><b>Paso 3.</b> Multiplicar por 4 el resultado del paso anterior.<br><b>Paso 4.</b> Sumar cuatro veces el resultado del paso 2.</p> <p><strong>De los pasos propuestos, ¿cuál es redundante para el cálculo del área de la región sombreada?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "El paso 4, porque, al sumar cuatro veces el resultado del paso 2, se obtiene el resultado del paso 3."
      },
      {
        "id": "B",
        "texto": "El paso 3, porque, al multiplicar por 4 el resultado del paso 2, se obtiene el mismo resultado obtenido en el paso 1."
      },
      {
        "id": "C",
        "texto": "El paso 2, porque, al dividir entre 2 el resultado del paso 1, se obtiene el mismo resultado del paso 3."
      },
      {
        "id": "D",
        "texto": "El paso 1, porque, al multiplicar la altura de uno de los triángulos por la base, se obtiene el área total de la figura."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis Geométrico de Regiones:</div> <p>El área de la región sombreada está compuesta por la suma de las áreas de los cuatro triángulos rectángulos en las esquinas del cuadrado exterior.</p> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo de Área de un Triángulo:</div> <p>Cada triángulo rectángulo tiene base y y altura x (o viceversa). El área de uno de ellos es:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Área del triángulo = <span class=\"frac\"><span>x &times; y</span><span>2</span></span></b> (Paso 2) </div> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Comparación de los Pasos del Jardinero:</div> <ul style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li><b>Paso 3 (Multiplicar por 4):</b> Multiplica el área de un triángulo por los 4 triángulos existentes:<br> Área Sombreada = 4 &times; (<span class=\"frac\"><span>x &times; y</span><span>2</span></span>) = <b>2xy</b></li> <li><b>Paso 4 (Sumar cuatro veces):</b> Realiza la suma sucesiva del área de los 4 triángulos:<br> Área Sombreada = <span class=\"frac\"><span>xy</span><span>2</span></span> + <span class=\"frac\"><span>xy</span><span>2</span></span> + <span class=\"frac\"><span>xy</span><span>2</span></span> + <span class=\"frac\"><span>xy</span><span>2</span></span> = <b>2xy</b></li> </ul> <p style='margin-top:10px;'>Dado que multiplicar por 4 (Paso 3) y sumar el mismo valor 4 veces (Paso 4) son operaciones algebraicamente equivalentes que llevan al mismo resultado, realizar ambas instrucciones es innecesario. Por lo tanto, el <b>Paso 4 es redundante</b>.</p>",
    "svg": "<svg viewBox=\"0 0 220 220\" width=\"220\" style=\"display:block; margin:15px auto; background:#fff; border-radius:8px;\">\n                        <!-- Cuadrado exterior (Triángulos sombreados) -->\n                        <rect x=\"50\" y=\"50\" width=\"120\" height=\"120\" fill=\"#cbd5e1\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Cuadrado interior (Blanco) -->\n                        <polygon points=\"80,50 170,80 140,170 50,140\" fill=\"#fff\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        \n                        <!-- Nodos en vértices -->\n                        <circle cx=\"50\" cy=\"50\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"40\" y=\"45\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">E</text>\n                        <circle cx=\"80\" cy=\"50\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"80\" y=\"40\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">P</text>\n                        <circle cx=\"170\" cy=\"50\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"175\" y=\"45\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">F</text>\n                        \n                        <circle cx=\"170\" cy=\"80\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"180\" y=\"85\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">Q</text>\n                        \n                        <circle cx=\"170\" cy=\"170\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"175\" y=\"180\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">G</text>\n                        <circle cx=\"140\" cy=\"170\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"140\" y=\"185\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\" text-anchor=\"middle\">R</text>\n                        \n                        <circle cx=\"50\" cy=\"170\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"40\" y=\"180\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">H</text>\n                        <circle cx=\"50\" cy=\"140\" r=\"3\" fill=\"#64748b\" stroke=\"#000\"/><text x=\"35\" y=\"145\" font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\" font-size=\"12\">S</text>\n                        \n                        <!-- Etiquetas de los bordes x, y (en cursiva) -->\n                        <text x=\"65\" y=\"45\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n                        <text x=\"125\" y=\"45\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n                        <text x=\"180\" y=\"68\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" font-weight=\"bold\">x</text>\n                        <text x=\"180\" y=\"130\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" font-weight=\"bold\">y</text>\n\n                        <text x=\"155\" y=\"185\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n                        <text x=\"95\" y=\"185\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n                        <text x=\"35\" y=\"160\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">x</text>\n                        <text x=\"35\" y=\"100\" font-family=\"Georgia\" font-style=\"italic\" font-size=\"12\" text-anchor=\"middle\" font-weight=\"bold\">y</text>\n\n                        <!-- Etiquetas Globales (x + y horizontales, solo x,y en cursiva) -->\n                        <text x=\"110\" y=\"25\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\">\n                            <tspan font-style=\"italic\">x</tspan> + <tspan font-style=\"italic\">y</tspan>\n                        </text>\n                        <text x=\"202\" y=\"115\" font-family=\"Georgia\" font-weight=\"bold\" font-size=\"14\" text-anchor=\"middle\">\n                            <tspan font-style=\"italic\">x</tspan> + <tspan font-style=\"italic\">y</tspan>\n                        </text>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p9",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Al entrar a un túnel, un carro que lleva una velocidad de 10 m/s, acelera a 3m/s² durante 15 segundos, que es lo que dura recorriéndolo. La longitud del túnel se puede calcular mediante la siguiente fórmula:</p> <p style=\"text-align:center; font-family:'Georgia';\">(10 m/s) &times; (15s) + <span class=\"frac\"><span>1</span><span>2</span></span>(3 m/s²) &times; (15s)²</p> <p>Al ver la fórmula, una persona afirma que esta es equivalente a:</p> <p style=\"text-align:center; font-family:'Georgia';\">15s &times; ( 10 m/s + <span class=\"frac\"><span>1</span><span>2</span></span>(3 m/s² &times; 15s) )</p> <p><strong>¿Es verdadera la afirmación de la persona?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque lo que hizo fue factorizar el tiempo que tarda en recorrer el túnel."
      },
      {
        "id": "B",
        "texto": "No, porque omitió que hay unos 15 segundos elevados al cuadrado."
      },
      {
        "id": "C",
        "texto": "Sí, porque el exponente 2, al que está elevado el tiempo, se puede cancelar."
      },
      {
        "id": "D",
        "texto": "No, porque también se tiene que factorizar el fraccionario 1/2."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Demostración de Equivalencia Algebraica:</div> <p>Partimos de la expresión original para calcular la longitud del túnel:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Longitud = 10 &times; 15 + <span class=\"frac\"><span>1</span><span>2</span></span> &times; 3 &times; 15<sup>2</sup></b> </div> <p>Reescribimos el término al cuadrado 15<sup>2</sup> como 15 &times; 15 para visualizar el término común:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Longitud = 10 &times; (15) + <span class=\"frac\"><span>1</span><span>2</span></span> &times; 3 &times; 15 &times; (15)</b> </div> <p>Aplicamos la propiedad distributiva (factor común) extrayendo un 15 fuera de la expresión:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Longitud = 15 &times; [ 10 + <span class=\"frac\"><span>1</span><span>2</span></span> &times; (3 &times; 15) ]</b> </div> <p>La expresión factorizada coincide con la propuesta de la persona, demostrando que su afirmación es <b>verdadera y equivalente</b>.</p>"
  },
  {
    "id": "mat_sim_11_p10",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Arturo quiere calcular el tiempo que se necesita para descargar un archivo de internet que tiene un tamaño de 12,6 megabytes. Él sabe que en su computador la velocidad de descarga es de 300 kilobytes por segundo y que 1 megabyte equivale a 1.024 kilobytes.</p> <p><strong>¿Cuál de los siguientes procedimientos NO permite calcular el tiempo necesario para descargar el archivo?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<b>Paso 1.</b> Multiplicar 12,6 por 1.024<br><b>Paso 2.</b> Dividir el resultado del paso 1 entre 300"
      },
      {
        "id": "B",
        "texto": "<b>Paso 1.</b> Multiplicar 1.024 por 300<br><b>Paso 2.</b> Dividir el resultado del paso 1 entre 12,6"
      },
      {
        "id": "C",
        "texto": "<b>Paso 1.</b> Dividir 12,6 entre 300<br><b>Paso 2.</b> Multiplicar el resultado del paso 1 por 1.024"
      },
      {
        "id": "D",
        "texto": "<b>Paso 1.</b> Dividir 1.024 entre 300<br><b>Paso 2.</b> Multiplicar el resultado del paso 1 por 12,6"
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Procedimiento Correcto de Conversión y Tiempo:</div> <p>Para calcular el tiempo de descarga debemos unificar las unidades (de megabytes a kilobytes) y luego dividir entre la tasa de transferencia:</p> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li><b>Paso 1 (Conversión de unidades):</b> Convertimos 12.6 Megabytes (MB) a Kilobytes (KB):<br> 12.6 MB &times; 1024 KB/MB = 12902.4 KB</li> <li><b>Paso 2 (Cálculo del tiempo):</b> Dividimos el tamaño en KB entre la velocidad de descarga (300 KB/s):<br> Tiempo = <span class=\"frac\"><span>12902.4 KB</span><span>300 KB/s</span></span> = <b>43.008 segundos</b></li> </ol> <div style='margin-bottom:6px; font-weight:700; color:var(--accent);'>Análisis de la Opción B (Incorrecta):</div> <p>La opción B propone: <i>Multiplicar 1024 por 300 y dividir el resultado entre 12.6</i>. Esto se traduce en:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b><span class=\"frac\"><span>1024 &times; 300</span><span>12.6</span></span> &approx; 24380.95 segundos</b> </div> <p>Este procedimiento da un resultado erróneo y no tiene sentido físico, por lo que es la opción que <b>NO permite calcular el tiempo</b>.</p>"
  },
  {
    "id": "mat_sim_11_p11",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Una persona construyó una rampa, como se muestra en la figura, pero se necesita un refuerzo para evitar que esta se parta. Para esto, a dos metros del muro, se va a construir una columna que fortalezca la estructura.</p> <p><strong>¿Cuál de los siguientes procedimientos permite calcular la altura h que debe tener la columna?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<b>Paso 1.</b> Dividir 2 m entre 4 m, obteniendo 0,5.<br><b>Paso 2.</b> Dividir 3 m entre el valor calculado en el paso 1."
      },
      {
        "id": "B",
        "texto": "<b>Paso 1.</b> Dividir 2 m entre 4 m, obteniendo 0,5.<br><b>Paso 2.</b> Multiplicar 3 m por el valor calculado en el paso 1."
      },
      {
        "id": "C",
        "texto": "<b>Paso 1.</b> Dividir 4 m entre 2 m, obteniendo 2.<br><b>Paso 2.</b> Dividir 3 m entre el valor calculado en el paso 1."
      },
      {
        "id": "D",
        "texto": "<b>Paso 1.</b> Dividir 2 m entre 4 m, obteniendo 2.<br><b>Paso 2.</b> Multiplicar 3 m por el valor calculado en el paso 1."
      }
    ],
    "respuestaCorrecta": "B",
    "tipo": "grafica",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Semejanza de Triángulos (Teorema de Tales):</div> <p>La rampa y la columna forman dos triángulos rectángulos semejantes (tienen los mismos ángulos internos):</p> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Triángulo grande:</b> Altura del muro = 3 m, Base = 4 m.</li> <li><b>Triángulo pequeño (desde la columna a la punta derecha):</b> Altura de la columna = h, Base = 4 m - 2 m = 2 m.</li> </ul> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Proporción de Semejanza:</div> <p>La razón entre las alturas es igual a la razón entre las bases correspondientes:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b><span class=\"frac\"><span>h</span><span>3 m</span></span> = <span class=\"frac\"><span>2 m</span><span>4 m</span></span></b> </div> <p>Despejamos h multiplicando ambos miembros por 3 m:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>h = 3 m &times; (<span class=\"frac\"><span>2 m</span><span>4 m</span></span>) = 3 &times; 0.5 = 1.5 m</b> </div> <p>El procedimiento matemático correcto consiste en <b>dividir 2 m entre 4 m y luego multiplicar 3 m por ese valor</b>.</p>",
    "svg": "<svg viewBox=\"0 0 250 120\" width=\"250\" style=\"display:block; margin:auto;\">\n                        <defs>\n                            <pattern id=\"hatch\" patternUnits=\"userSpaceOnUse\" width=\"4\" height=\"4\">\n                                <path d=\"M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2\" stroke=\"#666\" stroke-width=\"1\"/>\n                            </pattern>\n                        </defs>\n                        <rect x=\"20\" y=\"20\" width=\"40\" height=\"80\" fill=\"url(#hatch)\" stroke=\"#000\"/>\n                        <polygon points=\"60,20 60,100 240,100\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <line x1=\"150\" y1=\"60\" x2=\"150\" y2=\"100\" stroke=\"#000\" stroke-width=\"1.5\"/>\n                        <text x=\"155\" y=\"85\" font-size=\"10\">h</text>\n                        <text x=\"40\" y=\"70\" font-size=\"10\">3 m</text>\n                        \n                        <!-- Cotas -->\n                        <line x1=\"60\" y1=\"110\" x2=\"240\" y2=\"110\" stroke=\"#000\"/>\n                        <line x1=\"60\" y1=\"105\" x2=\"60\" y2=\"115\" stroke=\"#000\"/>\n                        <line x1=\"240\" y1=\"105\" x2=\"240\" y2=\"115\" stroke=\"#000\"/>\n                        <text x=\"150\" y=\"120\" font-size=\"10\" text-anchor=\"middle\">4 m</text>\n\n                        <line x1=\"60\" y1=\"90\" x2=\"150\" y2=\"90\" stroke=\"#000\"/>\n                        <text x=\"105\" y=\"85\" font-size=\"10\" text-anchor=\"middle\">2 m</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p12",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En la gráfica se muestra la ubicación, en coordenadas polares, de cuatro aviones (<i class=\"math-font\">V, W, X, Y</i>) respecto a la torre de control de un aeropuerto.</p> <p>Si las coordenadas polares de un punto son de la forma <i class=\"math-font\">(r, &theta;)</i>, donde <i class=\"math-font\">r</i> es la distancia al polo y <i class=\"math-font\">&theta;</i> es el ángulo respecto al eje polar, ¿cuál es el orden de los aviones, del que está más cerca al que está más lejos de la torre de control?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "W, V, Y, X."
      },
      {
        "id": "B",
        "texto": "X, V, W, Y."
      },
      {
        "id": "C",
        "texto": "V, Y, W, X."
      },
      {
        "id": "D",
        "texto": "X, Y, V, W."
      }
    ],
    "respuestaCorrecta": "A",
    "tipo": "grafica",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Comprensión de Coordenadas Polares (r, &theta;):</div> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li>El componente <b>r</b> (el primer número) indica la distancia radial o directa desde el origen (polo o torre de control) hasta el punto.</li> <li>El componente <b>&theta;</b> (el segundo número) es el ángulo direccional y no influye en la distancia.</li> </ul> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Distancia de los Aviones a la Torre (r):</div> <p>Extraemos el radio de cada coordenada polar dada en el gráfico:</p> <table class='data-table' style='max-width:350px; margin:10px auto;'> <tr><th>Avión</th><th>Coordenada Polar</th><th>Distancia (r)</th></tr> <tr><td><b>W</b></td><td>(20 km, 90&deg;)</td><td><b>20 km</b> (Círculo 2)</td></tr> <tr><td><b>V</b></td><td>(30 km, 30&deg;)</td><td><b>30 km</b> (Círculo 3)</td></tr> <tr><td><b>Y</b></td><td>(40 km, 60&deg;)</td><td><b>40 km</b> (Círculo 4)</td></tr> <tr><td><b>X</b></td><td>(60 km, 180&deg;)</td><td><b>60 km</b> (Círculo 6)</td></tr> </table> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Orden Ascendente (de más cerca a más lejos):</div> <p>Ordenamos según las distancias:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>20 km (W) < 30 km (V) < 40 km (Y) < 60 km (X)</b> </div> <p>El orden correcto es <b>W, V, Y, X</b>.</p>",
    "svg": "<svg viewBox=\"0 0 400 240\" width=\"100%\" style=\"display:block; margin:15px auto; max-width:450px; background:#fff; border-radius:8px; border:1px solid var(--border-glass);\">\n                        <g transform=\"translate(200, 160)\">\n                            <!-- Círculos de distancia (cada 10 km = 20px de radio en SVG) -->\n                            <g stroke=\"#cbd5e1\" fill=\"none\" stroke-width=\"1.2\" stroke-dasharray=\"3,4\">\n                                <circle cx=\"0\" cy=\"0\" r=\"20\"/>  <!-- 10 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"40\"/>  <!-- 20 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"60\"/>  <!-- 30 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"80\"/>  <!-- 40 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"100\"/> <!-- 50 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"120\"/> <!-- 60 km -->\n                                <circle cx=\"0\" cy=\"0\" r=\"140\"/> <!-- 70 km -->\n                            </g>\n                            \n                            <!-- Eje Horizontal Sólido (0° y 180°) -->\n                            <line x1=\"-180\" y1=\"0\" x2=\"180\" y2=\"0\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n                            <!-- LÍNEAS SÓLIDAS ARRIBA (5 líneas en total) -->\n                            <g stroke=\"#334155\" stroke-width=\"1.5\">\n                                <line x1=\"0\" y1=\"0\" x2=\"160\" y2=\"0\" transform=\"rotate(-30)\"/>  <!-- 30° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"160\" y2=\"0\" transform=\"rotate(-60)\"/>  <!-- 60° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"160\" y2=\"0\" transform=\"rotate(-90)\"/>  <!-- 90° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"160\" y2=\"0\" transform=\"rotate(-120)\"/> <!-- 120° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"160\" y2=\"0\" transform=\"rotate(-150)\"/> <!-- 150° -->\n                            </g>\n\n                            <!-- LÍNEAS PUNTEADAS ABAJO (3 líneas en total) -->\n                            <g stroke=\"#334155\" stroke-width=\"1.5\" stroke-dasharray=\"4,4\">\n                                <line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" transform=\"rotate(-210)\"/> <!-- Extensión de 30° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" transform=\"rotate(-270)\"/> <!-- Extensión de 90° -->\n                                <line x1=\"0\" y1=\"0\" x2=\"100\" y2=\"0\" transform=\"rotate(-330)\"/> <!-- Extensión de 150° -->\n                            </g>\n\n                            <!-- Textos base -->\n                            <circle cx=\"0\" cy=\"0\" r=\"4\" fill=\"#000\"/>\n                            <text x=\"0\" y=\"15\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Torre de control (polo)</text>\n                            <text x=\"140\" y=\"15\" font-size=\"12\" font-weight=\"bold\" fill=\"#0f172a\" text-anchor=\"middle\">Eje polar</text>\n                            \n                            <!-- PUNTOS GEOMÉTRICOS EXACTOS -->\n                            <!-- X (60km, 180°) -> r=120px -->\n                            <circle cx=\"-120\" cy=\"0\" r=\"4\" fill=\"#000\"/>\n                            <text x=\"-120\" y=\"-10\" font-size=\"12\" fill=\"#0f172a\" text-anchor=\"middle\"><tspan font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\">X</tspan> (60 km, 180°)</text>\n\n                            <!-- W (20km, 90°) -> r=40px. TEXTO CENTRADO ARRIBA PARA EVITAR CHOQUES -->\n                            <circle cx=\"0\" cy=\"-40\" r=\"4\" fill=\"#000\"/>\n                            <text x=\"0\" y=\"-52\" font-size=\"12\" fill=\"#0f172a\" text-anchor=\"middle\"><tspan font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\">W</tspan> (20 km, 90°)</text>\n\n                            <!-- Y (40km, 60°) -> r=80px (x=40, y=-69.28) -->\n                            <circle cx=\"40\" cy=\"-69.3\" r=\"4\" fill=\"#000\"/>\n                            <text x=\"45\" y=\"-75\" font-size=\"12\" fill=\"#0f172a\" text-anchor=\"start\"><tspan font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\">Y</tspan> (40 km, 60°)</text>\n\n                            <!-- V (30km, 30°) -> r=60px (x=51.96, y=-30) -->\n                            <circle cx=\"52\" cy=\"-30\" r=\"4\" fill=\"#000\"/>\n                            <text x=\"58\" y=\"-35\" font-size=\"12\" fill=\"#0f172a\" text-anchor=\"start\"><tspan font-family=\"Georgia\" font-style=\"italic\" font-weight=\"bold\">V</tspan> (30 km, 30°)</text>\n                        </g>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p13",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Kevin trabaja en una farmacia que entrega los medicamentos a domicilio. Los días viernes, Kevin tiene la posibilidad de salir tres horas antes de su trabajo, pero la condición es que debe repartir los pedidos que hagan falta por entregar y que estén ubicados en la ruta que toma hacia su casa. Por ejemplo, el último viernes que salió tuvo que entregar un total de cuatro pedidos, así:</p> <ul style=\"margin-left: 20px;\"> <li>Para entregar el primer pedido, tuvo que avanzar 3 cuadras.</li> <li>Para entregar el segundo pedido, tuvo que avanzar el doble de cuadras de las que había hecho para entregar el primer pedido.</li> <li>Para llegar a la dirección del tercer pedido, tuvo que avanzar la mitad de cuadras que avanzó para entregar el pedido anterior.</li> <li>Para el último pedido, tuvo que regresarse 10 cuadras y, así, acabar su ruta de entregas.</li> <li>Después de terminar las entregas, solo tuvo que caminar una cuadra para llegar a su casa.</li> </ul> <p><strong>¿Cuál de las siguientes operaciones permite obtener la distancia que hay desde la farmacia hasta la casa de Kevin?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "3 + 3 + 3 - 10 + 1"
      },
      {
        "id": "B",
        "texto": "3 + 6 + 6 + 10"
      },
      {
        "id": "C",
        "texto": "3 + 6 + 3 - 10 + 1"
      },
      {
        "id": "D",
        "texto": "6 + 3 + 10 - 1"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Modelado de Desplazamientos sobre la Ruta:</div> <p>Establecemos la posición inicial en la farmacia como cero (0). Cada instrucción describe un movimiento positivo (avanzar) o negativo (regresar) en cuadras:</p> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li><b>Primer pedido:</b> Avanza 3 cuadras &rArr; <b>+3</b></li> <li><b>Segundo pedido:</b> Avanza el doble del anterior (2 &times; 3) &rArr; <b>+6</b></li> <li><b>Tercer pedido:</b> Avanza la mitad del paso anterior (6/2) &rArr; <b>+3</b></li> <li><b>Cuarto pedido:</b> Se regresa 10 cuadras &rArr; <b>-10</b></li> <li><b>Llegada a casa:</b> Avanza 1 cuadra más &rArr; <b>+1</b></li> </ol> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Expresión Aritmética Completa:</div> <p>Combinamos todas las operaciones en orden cronológico para hallar la distancia neta final:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Distancia = 3 + 6 + 3 - 10 + 1</b> </div>"
  },
  {
    "id": "mat_sim_11_p14",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>La presión pleural se genera entre algunas paredes de los pulmones en el proceso de respiración del ser humano. Al respecto, se midió la presión pleural de cuatro pacientes para determinar el orden en que deben recibir un tratamiento pulmonar.</p> <table class=\"data-table\" style=\"max-width: 300px;\"> <tr><th>Paciente</th><th>Presión pleural (cmH₂O)</th></tr> <tr><td>Santiago</td><td>-7,6</td></tr> <tr><td>Ximena</td><td>-7,09</td></tr> <tr><td>Mariana</td><td>-7,62</td></tr> <tr><td>Orlando</td><td>-7,53</td></tr> </table> <p>Para determinar el orden en que los pacientes van a recibir el tratamiento médico, se les debe ordenar de menor a mayor según su presión pleural.</p> <p><strong>¿Cuál de las siguientes tablas indica el orden en qué deben recibir el tratamiento los pacientes?</strong></p>",
    "opciones": [
      {
        "id": "A",
        "texto": "<table class=\"data-table\" style=\"font-size:0.8rem; margin:0;\"><tr><th>Orden en que se va a recibir el tratamiento</th><th>Paciente</th></tr><tr><td>Primero</td><td>Ximena</td></tr><tr><td>Segundo</td><td>Mariana</td></tr><tr><td>Tercero</td><td>Santiago</td></tr><tr><td>Cuarto</td><td>Orlando</td></tr></table>"
      },
      {
        "id": "B",
        "texto": "<table class=\"data-table\" style=\"font-size:0.8rem; margin:0;\"><tr><th>Orden en que se va a recibir el tratamiento</th><th>Paciente</th></tr><tr><td>Primero</td><td>Orlando</td></tr><tr><td>Segundo</td><td>Santiago</td></tr><tr><td>Tercero</td><td>Mariana</td></tr><tr><td>Cuarto</td><td>Ximena</td></tr></table>"
      },
      {
        "id": "C",
        "texto": "<table class=\"data-table\" style=\"font-size:0.8rem; margin:0;\"><tr><th>Orden en que se va a recibir el tratamiento</th><th>Paciente</th></tr><tr><td>Primero</td><td>Mariana</td></tr><tr><td>Segundo</td><td>Santiago</td></tr><tr><td>Tercero</td><td>Orlando</td></tr><tr><td>Cuarto</td><td>Ximena</td></tr></table>"
      },
      {
        "id": "D",
        "texto": "<table class=\"data-table\" style=\"font-size:0.8rem; margin:0;\"><tr><th>Orden en que se va a recibir el tratamiento</th><th>Paciente</th></tr><tr><td>Primero</td><td>Santiago</td></tr><tr><td>Segundo</td><td>Ximena</td></tr><tr><td>Tercero</td><td>Mariana</td></tr><tr><td>Cuarto</td><td>Orlando</td></tr></table>"
      }
    ],
    "respuestaCorrecta": "C",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Ordenamiento de Números Decimales Negativos:</div> <p>En el conjunto de los números reales negativos, un número es menor que otro si se encuentra más alejado del cero en la recta numérica (tiene un valor absoluto mayor):</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>-a < -b &iff; a > b</b> (para a, b > 0) </div> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Comparación de las Presiones Pleurales:</div> <p>Comparamos los valores numéricos:</p> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li>Mariana tiene -7.62. Al ser el valor más negativo, es la presión menor: <b>-7.62 (mínima)</b>.</li> <li>Santiago tiene -7.60. Comparando centésimas, -7.62 < -7.60.</li> <li>Orlando tiene -7.53. Comparando décimas, -7.60 < -7.53.</li> <li>Ximena tiene -7.09. Al estar más cerca de cero, es la presión mayor: <b>-7.09 (máxima)</b>.</li> </ol> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Orden de Menor a Mayor:</div> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Mariana (-7.62) < Santiago (-7.60) < Orlando (-7.53) < Ximena (-7.09)</b> </div>"
  },
  {
    "id": "mat_sim_11_p15",
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
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis del Área del Papel:</div> <p>Un papel cuadrado de lado 2 cm posee un área total e inalterable de:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>A<sub>cuadrado</sub> = Lado &times; Lado = 2 cm &times; 2 cm = 4 cm<sup>2</sup></b> </div> <div style='margin-bottom:12px; font-weight:700; color:var(--accent);'>Evaluación de la Opción Incorrecta (Método D):</div> <p>La opción D propone dividir el papel en 10 triángulos de base 2 cm y altura 1 cm:</p> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li>Área de uno de estos triángulos:<br> A<sub>t</sub> = <span class=\"frac\"><span>Base &times; Altura</span><span>2</span></span> = <span class=\"frac\"><span>2 cm &times; 1 cm</span><span>2</span></span> = 1 cm<sup>2</sup></li> <li>Área total combinada de los 10 triángulos:<br> A<sub>total</sub> = 10 &times; 1 cm<sup>2</sup> = <b>10 cm<sup>2</sup></b></li> </ul> <p>Como 10 cm<sup>2</sup> supera los 4 cm<sup>2</sup> de papel real de los que disponemos, este método geométrico no es factible y es el <b>único método erróneo</b>.</p>"
  },
  {
    "id": "mat_sim_11_p16",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>El padre de Manuel tiene una cuenta de ahorros en el Banco M, donde le cobran $12.000 de cuota de manejo trimestral y $1.000 cada vez que retira dinero de la entidad. Manuel le sugiere a su padre que se cambie al Banco N, que no cobra cuota de manejo, pero en el que, cada vez que retira dinero, le descuentan un valor de $5.000.</p> <p>Si el padre de Manuel siempre retira dinero del banco dos veces al mes, al cabo de un año, ¿ahorraría al seguir el consejo de su hijo?</p>",
    "opciones": [
      {
        "id": "A",
        "texto": "Sí, porque en el Banco M le cobran cuota de manejo y en el N, no."
      },
      {
        "id": "B",
        "texto": "No, porque debería pagar igual cantidad de dinero a ambos bancos cada año."
      },
      {
        "id": "C",
        "texto": "Sí, porque, teniendo en cuenta cada retiro, pagaría menos dinero si se cambiara al Banco N."
      },
      {
        "id": "D",
        "texto": "No, porque, incluso pagando cuota de manejo, pagaría menos dinero si se quedara en el Banco M."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo de Gastos Anuales en Banco M:</div> <p>Frecuencia de retiro: 2 veces al mes &rarr; 2 &times; 12 meses = 24 retiros al año.</p> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Cuotas de manejo trimestral:</b> 4 trimestres al año &times; $12.000 = $48.000.</li> <li><b>Cobro por transacciones:</b> 24 retiros &times; $1.000 = $24.000.</li> <li><b>Total Anual Banco M:</b> $48.000 + $24.000 = <b>$72.000</b>.</li> </ul> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo de Gastos Anuales en Banco N:</div> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Cuotas de manejo:</b> No cobra &rarr; $0.</li> <li><b>Cobro por transacciones:</b> 24 retiros &times; $5.000 = $120.000.</li> <li><b>Total Anual Banco N:</b> <b>$120.000</b>.</li> </ul> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Comparación y Conclusión:</div> <p>El Banco M representa un gasto anual menor que el Banco N:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>$72.000 (Banco M) < $120.000 (Banco N)</b> </div> <p>El padre de Manuel <b>no ahorraría</b> si siguiera el consejo de su hijo, sino que gastaría $48.000 adicionales al año.</p>"
  },
  {
    "id": "mat_sim_11_p17",
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
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Planteamiento Algebraico de la Expresión:</div> <p>Definimos los términos según las indicaciones del texto:</p> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li>Sea <b>P<sub>i</sub></b> el promedio inicial de calificaciones sobre 100.</li> <li>Los puntos que le hacen falta a este promedio para alcanzar la puntuación perfecta (100) se expresan como:<br> Puntos faltantes = <b>100 - P<sub>i</sub></b></li> <li>Las calificaciones actuales suben una tercera parte de esa cantidad faltante:<br> Incremento = <b><span class=\"frac\"><span>100 - P<sub>i</sub></span><span>3</span></span></b></li> <li>La media final actual de la calificación es igual al promedio inicial más la cantidad incrementada:<br> Promedio actual = <b>P<sub>i</sub> + <span class=\"frac\"><span>100 - P<sub>i</sub></span><span>3</span></span></b></li> </ol>"
  },
  {
    "id": "mat_sim_11_p18",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>En un torneo deportivo participan tres atletas que acumulan puntos durante cuatro intentos. El puntaje definitivo por atleta se obtiene al sumar los puntajes de los cuatro intentos. La información sobre los puntos obtenidos en cada intento por las atletas aparece en la tabla.</p> <table class=\"data-table\" style=\"max-width: 350px;\"> <tr><th colspan=\"4\" style=\"background:#e2e8f0; color:#000;\">Tabla de clasificación</th></tr> <tr><th rowspan=\"2\" style=\"background:#e2e8f0; color:#000;\">Intento</th><th colspan=\"3\">Puntos obtenidos</th></tr> <tr><th>Andrea</th><th>Mariana</th><th>Catalina</th></tr> <tr><td>Primero</td><td>4</td><td>3</td><td>2</td></tr> <tr><td>Segundo</td><td>1</td><td>2</td><td>3</td></tr> <tr><td>Tercero</td><td>1</td><td>4</td><td>4</td></tr> <tr><td>Cuarto</td><td>3</td><td>2</td><td>4</td></tr> </table> <p><strong>Teniendo en cuenta el resultado definitivo, ¿cuál de las siguientes opciones ordena a las atletas de mayor a menor puntaje?</strong></p>",
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
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Suma de Puntajes Definitivos:</div> <p>Calculamos la puntuación total de cada atleta sumando sus cuatro intentos registrados en la tabla:</p> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Andrea:</b> 4 + 1 + 1 + 3 = <b>9 puntos</b></li> <li><b>Mariana:</b> 3 + 2 + 4 + 2 = <b>11 puntos</b></li> <li><b>Catalina:</b> 2 + 3 + 4 + 4 = <b>13 puntos</b></li> </ul> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Ordenamiento de Mayor a Menor (Descendente):</div> <p>Comparamos los totales:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>13 (Catalina) > 11 (Mariana) > 9 (Andrea)</b> </div> <p>El orden decreciente correcto es <b>Catalina, Mariana, Andrea</b>.</p>"
  },
  {
    "id": "mat_sim_11_p19",
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
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Definición Matemática de Función Constante:</div> <p>Una función es constante en un intervalo si y solo si toma el mismo valor y = c para todo valor del dominio x en dicho intervalo. Gráficamente se observa como una línea recta completamente horizontal.</p> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Análisis de Intervalos de la Gráfica:</div> <ul style='margin-left:20px; display:flex; flex-direction:column; gap:6px;'> <li><b>Intervalo [1, 2]:</b> La función es constante (y = 1).</li> <li><b>Intervalo [2, 3]:</b> La función es <b>decreciente</b> (el valor de y baja de 1 a 0).</li> <li><b>Intervalo [3, 4]:</b> La función es constante (y = 0).</li> <li><b>Intervalo [4, 5]:</b> La función es <b>creciente</b> (el valor de y sube de 0 a 1).</li> </ul> <p style='margin-top:10px;'>Dado que en los intervalos [2, 3] y [4, 5] el valor de y varía (decrece y crece, respectivamente), la función no se mantiene horizontal en todo el intervalo [1, 5]. Por lo tanto, la afirmación de que es constante en dicho intervalo es <b>falsa</b>.</p>",
    "svg": "<svg viewBox=\"0 0 200 120\" width=\"250\" style=\"display:block; margin:auto; background:#fff; border:1px solid #ccc; padding:10px;\">\n                        <defs><marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"5\" refY=\"5\" markerWidth=\"4\" markerHeight=\"4\" orient=\"auto\"><path d=\"M 0 0 L 10 5 L 0 10 z\" fill=\"#000\" /></marker></defs>\n                        <line x1=\"20\" y1=\"100\" x2=\"190\" y2=\"100\" stroke=\"#000\" marker-end=\"url(#arr)\"/>\n                        <line x1=\"20\" y1=\"100\" x2=\"20\" y2=\"10\" stroke=\"#000\" marker-end=\"url(#arr)\"/>\n                        <g stroke=\"#eee\" stroke-dasharray=\"2\">\n                            <line x1=\"50\" y1=\"10\" x2=\"50\" y2=\"100\"/>\n                            <line x1=\"80\" y1=\"10\" x2=\"80\" y2=\"100\"/>\n                            <line x1=\"110\" y1=\"10\" x2=\"110\" y2=\"100\"/>\n                            <line x1=\"140\" y1=\"10\" x2=\"140\" y2=\"100\"/>\n                            <line x1=\"170\" y1=\"10\" x2=\"170\" y2=\"100\"/>\n                            <line x1=\"20\" y1=\"60\" x2=\"190\" y2=\"60\"/>\n                            <line x1=\"20\" y1=\"20\" x2=\"190\" y2=\"20\"/>\n                        </g>\n                        <g font-size=\"8\" text-anchor=\"middle\">\n                            <text x=\"25\" y=\"110\">0</text><text x=\"50\" y=\"110\">1</text><text x=\"80\" y=\"110\">2</text><text x=\"110\" y=\"110\">3</text><text x=\"140\" y=\"110\">4</text><text x=\"170\" y=\"110\">5</text><text x=\"195\" y=\"105\">x</text>\n                        </g>\n                        <g font-size=\"8\" text-anchor=\"end\">\n                            <text x=\"15\" y=\"63\">1</text><text x=\"15\" y=\"23\">2</text><text x=\"15\" y=\"10\">y</text>\n                        </g>\n                        <polyline points=\"50,60 80,60 110,100 140,100 170,60\" fill=\"none\" stroke=\"#000\" stroke-width=\"2\"/>\n                        <circle cx=\"50\" cy=\"60\" r=\"2\" fill=\"#000\"/>\n                        <text x=\"180\" y=\"120\" font-size=\"10\" font-weight=\"bold\">Gráfica</text>\n                    </svg>"
  },
  {
    "id": "mat_sim_11_p20",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Cuando se mide la tensión arterial de una persona, se debe medir la presión diastólica y la presión sistólica. La tabla muestra información sobre la tensión arterial de cuatro personas.</p> <table class=\"data-table\"> <tr><th>Persona</th><th>Presión diastólica (mmHg)</th><th>Presión sistólica (mmHg)</th><th>Nivel</th></tr> <tr><td>Persona 1</td><td>70</td><td>110</td><td>Normal</td></tr> <tr><td>Persona 2</td><td>80</td><td>125</td><td>Elevada</td></tr> <tr><td>Persona 3</td><td>90</td><td>136</td><td>Hipertensión I</td></tr> <tr><td>Persona 4</td><td>95</td><td>144</td><td>Hipertensión II</td></tr> </table> <p>Por otra parte, para calcular la desviación estándar de un conjunto de datos, se plantea el siguiente procedimiento:</p> <p><b>Paso 1.</b> Calcular la varianza del conjunto de datos.<br><b>Paso 2.</b> Calcular la raíz cuadrada de la varianza obtenida en el paso 1.</p> <p><strong>Teniendo en cuenta la información anterior, ¿para cuáles variables de la tabla se puede aplicar este procedimiento?</strong></p>",
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
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Clasificación de Variables Estadísticas:</div> <ul style='margin-left:20px; margin-bottom:12px; display:flex; flex-direction:column; gap:6px;'> <li><b>Variables Cuantitativas (Numéricas):</b> Expresan valores medibles numéricamente sobre los cuales se pueden realizar operaciones algebraicas. En este caso: <b>Presión diastólica</b> y <b>Presión sistólica</b>.</li> <li><b>Variables Cualitativas (Nominales):</b> Expresan atributos o categorías no numéricas. En este caso: <b>Persona</b> (identificadores) y <b>Nivel</b> (categorías de hipertensión).</li> </ul> <div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Requisitos para la Desviación Estándar:</div> <p>La desviación estándar mide la dispersión de un conjunto de datos numéricos respecto a su media aritmética. Exige sumar valores, restar y elevar al cuadrado. Por tanto, es matemáticamente imposible aplicarlo a datos de texto como nombres de personas o niveles de hipertensión.</p> <p>Por ende, el procedimiento solo se puede aplicar a las variables de <b>Presión diastólica y presión sistólica</b>.</p>"
  },
  {
    "id": "mat_sim_11_p21",
    "area": "Matemáticas",
    "competencia": "Formulación y ejecución",
    "componente": "Numérico - Variacional",
    "texto": "<p>Álvaro y Jesús trabajan recolectando fruta. La Tabla 1 muestra la cantidad de kilogramos de fruta recolectada por Álvaro durante cinco días.</p> <table class=\"data-table\" style=\"max-width: 250px;\"> <tr><th>Día</th><th>Kilogramos de fruta recolectada</th></tr> <tr><td>1</td><td>24</td></tr> <tr><td>2</td><td>30</td></tr> <tr><td>3</td><td>26</td></tr> <tr><td>4</td><td>20</td></tr> <tr><td>5</td><td>30</td></tr> </table> <p>La Tabla 2 muestra la cantidad de kilogramos de fruta recolectada por Jesús durante los mismos cinco días.</p> <table class=\"data-table\" style=\"max-width: 250px;\"> <tr><th>Día</th><th>Kilogramos de fruta recolectada</th></tr> <tr><td>1</td><td>20</td></tr> <tr><td>2</td><td>24</td></tr> <tr><td>3</td><td>26</td></tr> <tr><td>4</td><td>24</td></tr> <tr><td>5</td><td>30</td></tr> </table> <p><strong>De acuerdo con la información consignada en las dos tablas, ¿cuál de las siguientes afirmaciones es verdadera?</strong></p>",
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
        "texto": "La moda de los kilogramos recolectados por Álvaro es mayor que moda de los kilogramos recolectados por Jesús."
      }
    ],
    "respuestaCorrecta": "D",
    "tipo": "standard",
    "justificacion": "<div style='margin-bottom:12px; font-weight:700; color:var(--primary);'>Cálculo de la Moda en Ambos Conjuntos:</div> <p>La moda es la medida de tendencia central que representa el valor con mayor frecuencia absoluta (el dato que más se repite):</p> <ol style='margin-left:20px; display:flex; flex-direction:column; gap:8px;'> <li><b>Álvaro (Tabla 1):</b><br> Datos: {20, 24, 26, 30, 30}<br> El kilogramo <b>30</b> se repite 2 veces. Las demás cantidades ocurren solo una vez.<br> Moda<sub>Álvaro</sub> = <b>30</b></li> <li><b>Jesús (Tabla 2):</b><br> Datos: {20, 24, 24, 26, 30}<br> El kilogramo <b>24</b> se repite 2 veces. Las demás cantidades ocurren solo una vez.<br> Moda<sub>Jesús</sub> = <b>24</b></li> </ol> <div style='margin-bottom:6px; font-weight:700; color:var(--success);'>Comparación de Modas:</div> <p>Comparamos los resultados:</p> <div style='margin:10px 0; padding:8px; background:var(--bg-body); border-radius:6px; font-family:Georgia, serif; text-align:center;'> <b>Moda<sub>Álvaro</sub> (30) > Moda<sub>Jesús</sub> (24)</b> </div> <p>La afirmación de que la moda de Álvaro es mayor que la de Jesús es <b>verdadera</b>.</p>"
  }
]);
