// Simulacro 05 - Matemáticas
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-102",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Una persona está utilizando alambre para cercar un terreno que tiene forma de triángulo rectángulo y cuya área es de 54 m². Hasta el momento, la persona ha utilizado 27 m de alambre cercando un cateto y la hipotenusa que mide 15 m. De acuerdo con esto, ¿qué cantidad de alambre le hace falta a la persona para cercar completamente el terreno?",
        "opciones": [
            {
                "id": "A",
                "texto": "7,2 m"
            },
            {
                "id": "B",
                "texto": "9 m"
            },
            {
                "id": "C",
                "texto": "27 m"
            },
            {
                "id": "D",
                "texto": "30,6 m"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "El área del triángulo rectángulo se define como (base x altura) / 2 = 54, lo que implica que el producto de los catetos (base x altura) es 108. Se sabe que la suma de un cateto y la hipotenusa (15 m) es 27 m, por lo que ese cateto mide 27 - 15 = 12 m. Despejando el otro cateto de la relación del área (12 x altura = 108), obtenemos que el cateto faltante mide 9 m. Como ya se cercaron los otros dos lados, solo falta cubrir este último cateto de 9 m."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-103",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Una estudiante de matemáticas desea calcular el dominio de la siguiente función:\n\n<div style='text-align:center; margin:16px 0;'><img src='img/preguntas/mat5_q103_funcion.svg' alt='f(x) = raíz de (x² - 1) + 1/x' style='max-width:300px; height:auto;'></div>\n\nPara lo anterior, la estudiante realiza el siguiente procedimiento:\n\n1. Calcula el conjunto de números reales que satisfacen x² − 1 ≥ 0.\n2. Calcula el conjunto de números reales que satisfacen x ≠ 0.\n3. Calcula la intersección de los conjuntos obtenidos en los pasos 1 y 2.\n\nUn compañero de la estudiante afirma que con este procedimiento es posible calcular el dominio de la función f(x). ¿Es verdadera esta afirmación?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque el dominio de la función √(x² − 1) se calcula al resolver x² − 1 ≥ 0 y el dominio de 1/x corresponde a los valores de x diferentes de cero."
            },
            {
                "id": "B",
                "texto": "No, porque para calcular el dominio de la función, la expresión x² − 1 considerada en el paso 1 debe ser estrictamente mayor que cero."
            },
            {
                "id": "C",
                "texto": "Sí, porque el dominio de una suma de funciones se puede calcular por medio de la unión de los dominios de cada sumando de la función."
            },
            {
                "id": "D",
                "texto": "No, porque en el paso 3 se debe realizar la unión a cambio de la intersección de los conjuntos de los pasos 1 y 2."
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "standard",
        "justificacion": "Para hallar el dominio de una función compuesta por la suma de dos términos, se debe encontrar la intersección de los dominios individuales (los valores de x que hacen válidos ambos términos simultáneamente). El término radical requiere que su interior no sea negativo (x² − 1 ≥ 0), y el término fraccionario requiere que su denominador no sea cero (x ≠ 0). El procedimiento descrito por la estudiante aplica correctamente estas reglas matemáticas."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-104",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Una persona registró durante siete días el tiempo que tardó en llegar a su trabajo. La **Tabla 1** muestra los tiempos ordenados de menor a mayor:\n\n| Día | 1 | 2 | 3 | 4 | 5 | 6 | 7 |\n|---|---|---|---|---|---|---|---|\n| **Tiempo (min)** | 10 | 20 | 22 | 34 | 34 | 50 | 52 |\n\nPara comparar los tiempos, eliminó el menor y el mayor tiempo de la **Tabla 1** y así obtuvo una segunda tabla. ¿Cuál de las siguientes opciones muestra una característica de los tiempos de la segunda tabla?",
        "opciones": [
            {
                "id": "A",
                "texto": "La mediana es menor que la mediana de los tiempos de la Tabla 1."
            },
            {
                "id": "B",
                "texto": "La mediana es igual a la mediana de los tiempos de la Tabla 1."
            },
            {
                "id": "C",
                "texto": "La mediana es menor que la moda de los tiempos de la Tabla 1."
            },
            {
                "id": "D",
                "texto": "La mediana es mayor que la moda de los tiempos de la Tabla 1."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "En el conjunto original de 7 datos ordenados (10, 20, 22, 34, 34, 50, 52), la mediana es el valor central, que ocupa la cuarta posición (34). Al eliminar el valor más bajo (10) y el más alto (52), quedan 5 datos (20, 22, 34, 34, 50). El valor central de este nuevo conjunto sigue siendo el 34. Por lo tanto, la mediana no sufre ninguna alteración."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-105",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "A los 50 estudiantes del grado 10.º de un colegio, se les realizó una encuesta sobre el tipo de mascota que tienen en casa. Resultados: Ninguna (20), Solo perros (15), Solo gatos (10), Perros y gatos (5).\nPara calcular el porcentaje de estudiantes que tienen perros o gatos en sus hogares, un estudiante realizó el siguiente cálculo: Porcentaje de estudiantes con mascotas = (15+10+5)/50 = 30/50 = 0,6%. Y afirmó que el 0,6% de los estudiantes de grado 10.º tienen mascotas. ¿Es verdadera la afirmación que hizo el estudiante?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque el estudiante consideró en el numerador la suma de los estudiantes que tienen solo perros, solo gatos y ambos."
            },
            {
                "id": "B",
                "texto": "No, porque el estudiante no multiplicó por 100 para obtener el porcentaje que tienen perros o gatos."
            },
            {
                "id": "C",
                "texto": "Sí, porque la fracción obtenida corresponde al porcentaje de estudiantes que tienen perros y gatos."
            },
            {
                "id": "D",
                "texto": "No, porque en el denominador el estudiante realizó la suma de todos los 50 estudiantes."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "La proporción calculada por el estudiante (30/50 = 0,6) es matemáticamente correcta para representar la fracción del total. Sin embargo, cometió un error conceptual al interpretar ese número decimal (0,6) directamente como un porcentaje. Para convertir una proporción decimal a porcentaje, es indispensable multiplicar por 100. El porcentaje real es 60%."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-106",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Para saber el índice de calcio en la sangre de una persona que ha consumido un medicamento durante un mes, se efectúa el siguiente procedimiento:\n\n1. Se toma el índice de calcio del paciente antes de tomar el medicamento.\n2. Se multiplica por 10 el resultado del paso 1.\n3. Se suman 6 mg/dL al resultado del paso 2.\n\nSi un paciente tiene un índice de calcio en la sangre de **0,21 mg/dL** antes de tomar el medicamento, ¿cuál de las siguientes afirmaciones es verdadera?",
        "opciones": [
            {
                "id": "A",
                "texto": "El índice de calcio en la sangre del paciente estará entre 16 mg/dL y 17 mg/dL, al cabo de un mes."
            },
            {
                "id": "B",
                "texto": "El índice de calcio en la sangre del paciente estará entre 6 mg/dL y 7 mg/dL, al cabo de un mes."
            },
            {
                "id": "C",
                "texto": "El índice de calcio en la sangre del paciente estará entre 2 mg/dL y 3 mg/dL, al cabo de un mes."
            },
            {
                "id": "D",
                "texto": "El índice de calcio en la sangre del paciente estará entre 8 mg/dL y 9 mg/dL, al cabo de un mes."
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "standard",
        "justificacion": "Aplicando el algoritmo paso a paso: Paso 1) Índice inicial = 0,21. Paso 2) Multiplicar por 10: 0,21 * 10 = 2,1. Paso 3) Sumar 6: 2,1 + 6 = 8,1 mg/dL. El valor final es 8,1 mg/dL, el cual se ubica en el intervalo numérico comprendido entre 8 mg/dL y 9 mg/dL."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-107",
        "area": "Matemáticas",
        "competencia": "Resolución de problemas",
        "componente": "Aleatorio",
        "enunciado": "De un grupo de 1.000 personas, una empresa eligió a algunas de ellas para mostrarles unos diseños de zapatos en varios colores. Luego, les preguntó el color de su preferencia. Los resultados de la encuesta son los siguientes: El 30% eligió rojo, el 50% eligió negro, el 15% eligió blanco y el 5% eligió un color diferente al rojo, al negro y al blanco. ¿Qué se puede determinar a partir de la información recolectada en la encuesta?",
        "opciones": [
            {
                "id": "A",
                "texto": "El total de personas encuestadas."
            },
            {
                "id": "B",
                "texto": "La cantidad de personas encuestadas que prefieren el color blanco."
            },
            {
                "id": "C",
                "texto": "El color favorito de zapatos de las personas encuestadas."
            },
            {
                "id": "D",
                "texto": "La cantidad de colores de zapatos mostrados a las personas encuestadas."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "El enunciado establece explícitamente la población total (1.000 personas) y la distribución porcentual de preferencias. Con esta información, es matemáticamente posible calcular la frecuencia absoluta de cualquier categoría multiplicando el porcentaje por el total poblacional (ej. el 15% de 1.000 es 150 personas prefieren el blanco). No es posible conocer el color favorito absoluto sin asumir sesgos, ni la cantidad de colores mostrados, puesto que el 5% eligió opciones 'diferentes'."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-108",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "La siguiente tabla muestra los ingresos y gastos que ha tenido una empresa durante los primeros seis meses del año:\n\n| Mes | Ingresos | Gastos |\n|:---:|:---:|:---:|\n| Enero | $12.780 | $5.400 |\n| Febrero | $15.200 | $4.903 |\n| Marzo | $10.500 | $7.250 |\n| Abril | $13.700 | $3.500 |\n| Mayo | $10.000 | $4.103 |\n| Junio | $11.650 | $6.230 |\n\n¿Cuál de los siguientes diagramas de barras representa correctamente los ingresos y gastos mostrados en la tabla?",
        "opciones": [
            {
                "id": "A",
                "texto": "<img src='img/preguntas/mat5_q108_opt_A.svg' style='max-width:350px; display:block; margin:10px 0;'> La gráfica donde los ingresos y gastos no coinciden con los valores de la tabla (ej. Enero muestra mayores gastos que ingresos)."
            },
            {
                "id": "B",
                "texto": "<img src='img/preguntas/mat5_q108_opt_B.svg' style='max-width:350px; display:block; margin:10px 0;'> La gráfica de barras agrupadas que refleja fielmente los datos de la tabla (Ingresos en negro, Gastos en gris)."
            },
            {
                "id": "C",
                "texto": "<img src='img/preguntas/mat5_q108_opt_C.svg' style='max-width:350px; display:block; margin:10px 0;'> La gráfica que muestra una sola barra por mes representando la suma de ingresos y gastos."
            },
            {
                "id": "D",
                "texto": "<img src='img/preguntas/mat5_q108_opt_D.svg' style='max-width:350px; display:block; margin:10px 0;'> La gráfica que muestra una sola barra por mes con valores que no corresponden a la tabla."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "Al contrastar los valores numéricos de la tabla con las alturas de las barras en la opción B, se observa una coincidencia exacta meses por mes. Por ejemplo, en Febrero los ingresos ($15.200) alcanzan su punto máximo y los gastos son bajos (~$4.900), lo cual se representa correctamente con la barra negra superando ampliamente a la gris. Las demás opciones fallan al invertir los datos, sumar valores o mostrar una sola serie.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-109",
        "area": "Matemáticas",
        "competencia": "Resolución de problemas",
        "componente": "Aleatorio",
        "enunciado": "Para realizar un estudio sobre lingüística, se debe escoger el mayor grupo de personas que hablen el mismo número de idiomas. En la base de datos se tienen a las siguientes personas: Q (1 idioma), R (1 idioma), S (1 idioma), T (2 idiomas), U (2 idiomas), V (2 idiomas), W (2 idiomas), X (3 idiomas), Y (4 idiomas), Z (5 idiomas). ¿En cuál de las siguientes opciones aparecen las personas seleccionadas para el estudio?",
        "opciones": [
            {
                "id": "A",
                "texto": "Seleccionados: Q, T, X, Y, Z"
            },
            {
                "id": "B",
                "texto": "Seleccionados: Q, R, S"
            },
            {
                "id": "C",
                "texto": "Seleccionados: T, U, V, W"
            },
            {
                "id": "D",
                "texto": "Seleccionados: X, Y, Z"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "El objetivo es identificar la moda estadística de los idiomas hablados, que corresponde al 'mayor grupo de personas con una característica en común'. Al clasificar la tabla: 3 personas hablan 1 idioma; 4 personas hablan 2 idiomas; 1 persona habla 3, 4 y 5 idiomas respectivamente. El grupo más grande es el de los que hablan 2 idiomas, conformado por las 4 personas: T, U, V y W."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-110",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un estudiante observa en un libro de deportes la siguiente figura:\n\n<div style='text-align:center; margin:16px 0;'><img src='img/preguntas/mat5_q110_clavadista.svg' alt='Esquema clavadista' style='max-width:350px; height:auto; border:1px solid #eee;'></div>\n\nEl estudiante necesita determinar la distancia que hay entre el borde Q de la piscina y el punto R donde el deportista entra en contacto con el agua. Con la información de la figura, ¿es posible determinar esta distancia?",
        "opciones": [
            {
                "id": "A",
                "texto": "No, porque se deben usar razones trigonométricas y faltaría un ángulo de 90° en el triángulo PQR."
            },
            {
                "id": "B",
                "texto": "Sí, porque se conocen las medidas de los ángulos y un lado del triángulo, y se puede usar el teorema del seno."
            },
            {
                "id": "C",
                "texto": "No, porque faltan datos para encontrar la ecuación de la parábola que describe el salto del deportista."
            },
            {
                "id": "D",
                "texto": "Sí, porque se conocen la altura del triángulo PQR y los ángulos de la figura, y se puede usar el teorema de Pitágoras."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "Para resolver triángulos que no necesariamente son rectángulos (triángulos oblicuángulos), se emplean las leyes de los senos y cosenos. En este caso, al conocer un lado (PQ = 5m) y dos ángulos (45° y 55°), es posible deducir el tercer ángulo sumando 180°. Con tres ángulos y un lado, el Teorema del Seno permite establecer relaciones proporcionales para calcular cualquier lado restante, como la distancia QR solicitada.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-111",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Natalia es dueña de dos almacenes en los que vende televisores, computadores, licuadoras y planchas. La **Tabla 1** muestra la cantidad de electrodomésticos que tiene disponibles en el almacén 1.\n\n<table style='width:100%; border-collapse:collapse; margin:10px 0; text-align:center;'>\n  <tr style='background:#f3f4f6;'><th style='border:1px solid #ccc; padding:4px;'>Electrodoméstico</th><td style='border:1px solid #ccc; padding:4px;'>Televisores</td><td style='border:1px solid #ccc; padding:4px;'>Computadores</td><td style='border:1px solid #ccc; padding:4px;'>Licuadoras</td><td style='border:1px solid #ccc; padding:4px;'>Planchas</td></tr>\n  <tr><th style='border:1px solid #ccc; padding:4px;'>Unidades en el almacén 1</th><td style='border:1px solid #ccc; padding:4px;'>10</td><td style='border:1px solid #ccc; padding:4px;'>5</td><td style='border:1px solid #ccc; padding:4px;'>7</td><td style='border:1px solid #ccc; padding:4px;'>12</td></tr>\n</table>\n\nLa **Tabla 2** muestra la cantidad de electrodomésticos que tiene disponibles en el almacén 2.\n\n<table style='width:100%; border-collapse:collapse; margin:10px 0; text-align:center;'>\n  <tr style='background:#f3f4f6;'><th style='border:1px solid #ccc; padding:4px;'>Electrodoméstico</th><td style='border:1px solid #ccc; padding:4px;'>Televisores</td><td style='border:1px solid #ccc; padding:4px;'>Computadores</td><td style='border:1px solid #ccc; padding:4px;'>Licuadoras</td><td style='border:1px solid #ccc; padding:4px;'>Planchas</td></tr>\n  <tr><th style='border:1px solid #ccc; padding:4px;'>Unidades en el almacén 2</th><td style='border:1px solid #ccc; padding:4px;'>14</td><td style='border:1px solid #ccc; padding:4px;'>18</td><td style='border:1px solid #ccc; padding:4px;'>11</td><td style='border:1px solid #ccc; padding:4px;'>9</td></tr>\n</table>\n\n¿Cuál gráfica muestra correctamente la cantidad de unidades que tiene disponibles en los dos almacenes?",
        "opciones": [
            {
                "id": "A",
                "texto": "<img src='img/preguntas/mat5_q111_opt_A.svg' style='max-width:320px; display:block; margin:10px 0;'> La gráfica de barras agrupadas que representa fielmente los datos de ambas tablas."
            },
            {
                "id": "B",
                "texto": "<img src='img/preguntas/mat5_q111_opt_B.svg' style='max-width:320px; display:block; margin:10px 0;'> La gráfica donde el Almacén 1 muestra las sumas totales (24, 23, 18, 21) en sus barras."
            },
            {
                "id": "C",
                "texto": "<img src='img/preguntas/mat5_q111_opt_C.svg' style='max-width:320px; display:block; margin:10px 0;'> La gráfica donde el Almacén 2 muestra las sumas totales en sus barras."
            },
            {
                "id": "D",
                "texto": "<img src='img/preguntas/mat5_q111_opt_D.svg' style='max-width:320px; display:block; margin:10px 0;'> La gráfica con valores que no corresponden a las tablas (ej. Televisores en 24 y 10)."
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "standard",
        "justificacion": "La representación gráfica debe trasladar de forma exacta las frecuencias absolutas entregadas en las tablas originales. Verificando punto por punto, la opción A es la única gráfica agrupada en la que la pareja de barras asignada a la categoría 'Computadores' marca 5 unidades para el Almacén 1 (barra negra) y 18 unidades para el Almacén 2 (barra gris), reflejando los valores reales de las tablas.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-112",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Para descargar y pesar apropiadamente la mercancía en una fábrica de alimentos, un camión debe desplegar una rampa de 4 metros de largo, de manera que esta forme un ángulo de 30° con la superficie del suelo. Una bandera señala el punto en donde debe estar el extremo de la rampa, como se muestra en la figura.\n\n<div style='text-align:center; margin:16px 0;'><img src='img/preguntas/mat5_q112_rampa.svg' alt='Esquema camión y rampa' style='max-width:450px; height:auto; border:1px solid #eee;'></div>\n\n¿Cuál es la distancia L, en metros, que debe separar el camión de la bandera para realizar apropiadamente la descarga de mercancía en esta fábrica?",
        "opciones": [
            {
                "id": "A",
                "texto": "2 m."
            },
            {
                "id": "B",
                "texto": "1/8 m."
            },
            {
                "id": "C",
                "texto": "2√3 m."
            },
            {
                "id": "D",
                "texto": "√3/8 m."
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "En el triángulo rectángulo formado por la rampa, la altura del camión y el suelo, la rampa actúa como la hipotenusa (4 m) y la distancia L es el cateto adyacente al ángulo de 30°. Usando la razón trigonométrica coseno:\n\ncos(30°) = cateto adyacente / hipotenusa\n\nDespejando L:\n\nL = 4 · cos(30°)\n\nSegún la tabla, cos(30°) = √3/2. Por lo tanto, L = 4 · (√3/2) = 2√3 metros.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-113",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Para entrar en una academia de ballet, los aspirantes deben presentar 3 rutinas a 4 jurados. Reglas para el puntaje:\n\n1. De cada rutina descartar la menor nota.\n2. Obtener el promedio de las 3 notas restantes.\n3. Multiplicar por 2 el promedio de la primera rutina y sumar los promedios de las otras dos.\n4. Dividir el resultado entre 4.\n\nUn aspirante obtuvo las siguientes calificaciones:\n\n| Rutina | Notas Jurados |\n|---|---|\n| **Rutina 1** | 8, 6, 7, 3 |\n| **Rutina 2** | 10, 5, 8, 9 |\n| **Rutina 3** | 5, 5, 5, 5 |\n\n¿Cuál es su puntaje final?",
        "opciones": [
            {
                "id": "A",
                "texto": "6,25"
            },
            {
                "id": "B",
                "texto": "8"
            },
            {
                "id": "C",
                "texto": "7"
            },
            {
                "id": "D",
                "texto": "7,25"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Aplicando el procedimiento paso a paso: Paso 1 y 2) Para la Rutina 1 se descarta el 3; el promedio de 8, 6 y 7 es 21/3 = 7. Para la Rutina 2 se descarta el 5; el promedio de 10, 8 y 9 es 27/3 = 9. Para la Rutina 3 se descarta un 5; el promedio de 5, 5, y 5 es 15/3 = 5. Paso 3) Se multiplica por 2 el promedio 1 y se suman los demás: (7 * 2) + 9 + 5 = 14 + 14 = 28. Paso 4) Se divide entre 4: 28 / 4 = 7."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-114",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Una persona dibuja una circunferencia y le asigna algunos referentes, como lo muestra la figura.\n\n<div style='text-align:center; margin:16px 0;'><img src='img/preguntas/mat5_q114_circulo.svg' alt='Círculo en plano cartesiano' style='max-width:350px; height:auto; border:1px solid #eee;'></div>\n\nLa persona afirma que la longitud de OP es mayor que la longitud de OQ. ¿Esta afirmación es verdadera?",
        "opciones": [
            {
                "id": "A",
                "texto": "No, porque las dos medidas corresponden al diámetro del círculo."
            },
            {
                "id": "B",
                "texto": "No, porque las dos medidas corresponden al radio del círculo."
            },
            {
                "id": "C",
                "texto": "Sí, porque los dos lados están en el mismo cuadrante."
            },
            {
                "id": "D",
                "texto": "Sí, porque los dos lados forman un diámetro."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "Por definición, la distancia desde el centro de una circunferencia (punto O) hasta cualquier punto en su perímetro (como P o Q) es exactamente el radio. Dado que tanto P como Q pertenecen al perímetro, los segmentos OP y OQ son radios con la misma longitud. Matemáticamente, en la figura se observa que ambos son radios del mismo círculo.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-115",
        "area": "Matemáticas",
        "competencia": "Resolución de problemas",
        "componente": "Aleatorio",
        "enunciado": "Un juego consiste en insertar cuatro discos de distinto tamaño a lo largo de una barra. La figura muestra una posible acomodación de los discos (del más grande en la base al más pequeño en la cima). ¿De cuántas maneras en total se pueden insertar los cuatro discos en la barra?",
        "opciones": [
            {
                "id": "A",
                "texto": "10"
            },
            {
                "id": "B",
                "texto": "24"
            },
            {
                "id": "C",
                "texto": "1"
            },
            {
                "id": "D",
                "texto": "4"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "El problema se trata de una permutación lineal simple de 4 elementos distintos sin repetición, ya que importa el orden en el que se apilan los discos. El número total de acomodaciones posibles se calcula con el factorial de la cantidad de discos (4!). El cálculo es 4 * 3 * 2 * 1 = 24 posibles combinaciones.",
        "imagen": "img/preguntas/mat5_q107_discos.svg"
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-116",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Una persona compra 3 paquetes de arroz, 2 de frijol y 2 de lentejas. La tabla muestra el peso de cada uno de los paquetes:\n\n| Producto | Peso por paquete |\n|---|---|\n| Arroz | 2 kg |\n| Frijol | 1 kg |\n| Lenteja | 0,5 kg |\n\n¿Cuál de las siguientes opciones muestra correctamente el peso total de los paquetes comprados por cada producto?",
        "opciones": [
            {
                "id": "A",
                "texto": "Arroz: 2 kg, Frijol: 1 kg, Lenteja: 0,5 kg"
            },
            {
                "id": "B",
                "texto": "Arroz: 5 kg, Frijol: 3 kg, Lenteja: 7 kg"
            },
            {
                "id": "C",
                "texto": "Arroz: 6 kg, Frijol: 2 kg, Lenteja: 10 kg"
            },
            {
                "id": "D",
                "texto": "Arroz: 6 kg, Frijol: 2 kg, Lenteja: 1 kg"
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "standard",
        "justificacion": "Para encontrar el peso total de cada producto, se debe multiplicar la cantidad de paquetes comprados por el peso unitario de cada paquete. Para el arroz: 3 paquetes * 2 kg = 6 kg. Para el frijol: 2 paquetes * 1 kg = 2 kg. Para la lenteja: 2 paquetes * 0,5 kg = 1 kg. La opción D presenta exactamente estos resultados."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-117",
        "area": "Matemáticas",
        "competencia": "Resolución de problemas",
        "componente": "Numérico - Variacional",
        "enunciado": "Un estudiante va a hacer una cartelera para una tarea. Para comprar los materiales su mamá le dio $6.000, y con ese dinero el estudiante compró una cartulina que cuesta $1.000 y 4 marcadores que cuestan $900 cada uno. ¿Cuánto dinero le sobró de la compra de los materiales?",
        "opciones": [
            {
                "id": "A",
                "texto": "$1.900"
            },
            {
                "id": "B",
                "texto": "$4.100"
            },
            {
                "id": "C",
                "texto": "$4.500"
            },
            {
                "id": "D",
                "texto": "$1.400"
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "standard",
        "justificacion": "Primero, se debe calcular el gasto total. Los 4 marcadores cuestan en conjunto 4 * $900 = $3.600. Al sumar el valor de la cartulina ($1.000), el gasto total asciende a $4.600. Para saber cuánto le sobró, se resta este gasto total al dinero inicial: $6.000 - $4.600 = $1.400."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-118",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "Un profesor preguntó a seis estudiantes cuánto dinero traían al colegio diariamente para comprar refrigerio. Los resultados aparecen en la lista:\n\n`$2.000, $2.000, $3.000, $4.000, $4.000, $4.000`\n\nUno de los estudiantes elaboró la siguiente tabla de frecuencias:\n\n| Monto ($) | Frecuencia (Estudiantes) |\n|---|:---:|\n| $2.000 | 1 |\n| $3.000 | 2 |\n| $4.000 | 3 |\n\nRespecto a la tabla, ¿cuál de las siguientes afirmaciones es verdadera?",
        "opciones": [
            {
                "id": "A",
                "texto": "La tabla es válida porque aparecen todos los montos de dinero que llevan los estudiantes."
            },
            {
                "id": "B",
                "texto": "La tabla no es válida porque no muestra la cantidad de estudiantes a los que se les hizo la pregunta."
            },
            {
                "id": "C",
                "texto": "La tabla es válida porque indica la cantidad de estudiantes que llevan cada monto de dinero."
            },
            {
                "id": "D",
                "texto": "La tabla no es válida porque los números de la segunda columna están en orden incorrecto."
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "standard",
        "justificacion": "Si contamos las frecuencias absolutas en la lista original, vemos que 2 estudiantes traen $2.000, 1 estudiante trae $3.000 y 3 estudiantes traen $4.000. El estudiante que elaboró la tabla puso las frecuencias 1, 2 y 3 respectivamente para esos montos, asignando erróneamente los valores. Por esto, la tabla no es válida, pues la cantidad reportada en la segunda columna no coincide con los datos."
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-119",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Olivia tiene una figura plana compuesta por un cuadrado inferior izquierdo y una semicircunferencia superior. El diámetro de la semicircunferencia es horizontal. El lado izquierdo del cuadrado está alineado con el extremo izquierdo del diámetro. Olivia necesita medir un segmento de recta S, que corresponde a la porción del diámetro de la semicircunferencia que sobresale hacia la derecha del cuadrado. Si se sabe que el radio de la semicircunferencia mide 5 cm y que el lado del cuadrado mide 4 cm, ¿cuánto mide el segmento de recta S?",
        "opciones": [
            {
                "id": "A",
                "texto": "9 cm"
            },
            {
                "id": "B",
                "texto": "6 cm"
            },
            {
                "id": "C",
                "texto": "5,5 cm"
            },
            {
                "id": "D",
                "texto": "4,5 cm"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "Si el radio de la semicircunferencia es de 5 cm, su diámetro total mide el doble, es decir, 10 cm. Según el esquema de la figura, este diámetro está compuesto por el lado superior del cuadrado (4 cm) más la longitud sobrante S. Planteando la ecuación: 10 = 4 + S. Al despejar S, obtenemos 10 - 4 = 6 cm.",
        "imagen": "img/preguntas/mat5_q111_compuesta.svg"
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-120",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Una empresa de servicios de internet, realizó una encuesta a 100 familias de estratos sociales bajo, medio y alto, preguntándoles por el nivel de satisfacción frente al servicio en sus hogares; a continuación se presentan sus percepciones:\n\n| Estratos / Nivel de satisfacción | Insatisfecho | Poco satisfecho | Conforme | Satisfecho | Muy satisfecho | Total |\n|---|:---:|:---:|:---:|:---:|:---:|:---:|\n| Bajo | 15 | 10 | 5 | 0 | 5 | 35 |\n| Medio | 5 | 0 | 10 | 5 | 10 | 30 |\n| Alto | 5 | 10 | 10 | 5 | 5 | 35 |\n| Total | 25 | 20 | 25 | 10 | 20 | 100 |\n\nA partir de la tabla realizada, se ha diseñado el siguiente diagrama circular:\n\n<div style='text-align:center; margin:16px 0;'><img src='img/preguntas/mat5_q120_circular.svg' alt='Diagrama circular satisfacción' style='max-width:350px; height:auto; border:1px solid #eee;'></div>\n\nLa directora de la empresa se percata de que los gráficos no presentan la misma información. En este sentido, ¿qué información es posible obtener de la tabla, pero NO del diagrama circular?",
        "opciones": [
            {
                "id": "A",
                "texto": "El porcentaje de familias poco satisfechas con el servicio."
            },
            {
                "id": "B",
                "texto": "El porcentaje de familias por estrato social que se entrevistaron."
            },
            {
                "id": "C",
                "texto": "El porcentaje de familias conformes con el servicio."
            },
            {
                "id": "D",
                "texto": "El porcentaje de familias satisfechas que fueron entrevistadas."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "El diagrama circular presentado consolida únicamente los porcentajes totales por nivel de satisfacción (Insatisfecho 25%, Muy satisfecho 20%, etc.), lo cual corresponde a la fila de totales de la tabla. Sin embargo, el diagrama circular pierde la segmentación por 'Estrato Social'. Solo la tabla permite saber cuántas familias de estrato medio o alto respondieron, o conocer la distribución de satisfacción dentro de un estrato específico.",
    },
    {
        "id": "mat_sim_05_icfes-2025-simulacro-mate-p1-121",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "El oro blanco es una aleación compuesta de un 90% de oro puro y un 10% de níquel. Se requiere fabricar 60 anillos en oro blanco, cada uno con un peso de 5 gramos. Para determinar la cantidad de níquel necesaria, se usa este procedimiento:\n\n1. Multiplicar el número de anillos por el peso de cada uno.\n2. Multiplicar el resultado anterior por el porcentaje de níquel en el oro blanco.\n\nSi se sigue el procedimiento, ¿cuántos gramos de níquel se necesitan para elaborar los 60 anillos?",
        "opciones": [
            {
                "id": "A",
                "texto": "300"
            },
            {
                "id": "B",
                "texto": "270"
            },
            {
                "id": "C",
                "texto": "50"
            },
            {
                "id": "D",
                "texto": "30"
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "standard",
        "justificacion": "Aplicando rigurosamente el procedimiento: Paso 1) Calculamos la masa total de los 60 anillos multiplicando 60 anillos * 5 g c/u = 300 gramos totales de oro blanco. Paso 2) Se extrae el 10% de esa cantidad para determinar el contenido de níquel: 300 * 0,10 = 30 gramos. Se necesitarán 30 gramos de níquel."
    }
]);
