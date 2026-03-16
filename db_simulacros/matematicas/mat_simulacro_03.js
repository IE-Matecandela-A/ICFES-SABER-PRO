// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas Simulacro 03 - Adaptado desde JSON

window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
    {
        "id": "mat_sim_03_icfes-2025-simulacro-41",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "La gráfica muestra las ventas semanales en una frutería. Según los datos presentados, ¿qué porcentaje del total de las ventas corresponde a las manzanas?",
        "opciones": [
            {
                "id": "A",
                "texto": "20%"
            },
            {
                "id": "B",
                "texto": "30%"
            },
            {
                "id": "C",
                "texto": "40%"
            },
            {
                "id": "D",
                "texto": "50%"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Ventas semanales (kg)",
            "datos": {
                "labels": [
                    "Manzana",
                    "Pera",
                    "Banano",
                    "Mango"
                ],
                "datasets": [
                    {
                        "label": "Kilogramos",
                        "data": [
                            40,
                            20,
                            30,
                            10
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para hallar el porcentaje, primero se debe calcular el total de ventas sumando los kilogramos de todas las frutas: 40 (Manzana) + 20 (Pera) + 30 (Banano) + 10 (Mango) = 100 kg en total.\n\nComo las manzanas representan 40 kg de un total de 100 kg, la fracción es 40/100, lo que equivale exactamente al 40%. Esta es una lectura directa de frecuencias relativas convertidas a porcentaje."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-42",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Se requiere trasladar el triángulo ABC mostrado en la gráfica 3 unidades hacia la izquierda y 2 unidades hacia arriba. ¿Cuáles serán las coordenadas del nuevo vértice C'?",
        "opciones": [
            {
                "id": "A",
                "texto": "(-1, 6)"
            },
            {
                "id": "B",
                "texto": "(5, 6)"
            },
            {
                "id": "C",
                "texto": "(-1, 2)"
            },
            {
                "id": "D",
                "texto": "(2, 2)"
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Triángulo en plano cartesiano",
            "datos": {
                "datasets": [
                    {
                        "label": "Triángulo ABC",
                        "data": [
                            {
                                "x": 1,
                                "y": 1
                            },
                            {
                                "x": 3,
                                "y": 1
                            },
                            {
                                "x": 2,
                                "y": 4
                            },
                            {
                                "x": 1,
                                "y": 1
                            }
                        ]
                    }
                ]
            }
        },
        "justificacion": "En el plano cartesiano, una traslación horizontal afecta la coordenada X, y una vertical la coordenada Y. El vértice C original tiene coordenadas (2, 4).\n\nAl trasladar 3 unidades a la izquierda, restamos 3 a la coordenada X: 2 - 3 = -1. Al trasladar 2 unidades hacia arriba, sumamos 2 a la coordenada Y: 4 + 2 = 6. Por lo tanto, el nuevo vértice C' queda en la posición (-1, 6)."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-43",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Un vendedor afirma que el vehículo pierde la misma cantidad de dinero cada año. Al observar la gráfica, ¿es correcta la afirmación del vendedor?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque la gráfica siempre va hacia abajo."
            },
            {
                "id": "B",
                "texto": "No, porque la gráfica es una curva, lo que indica que pierde más valor en los primeros años que en los últimos."
            },
            {
                "id": "C",
                "texto": "Sí, porque el precio final llega a cero eventualmente."
            },
            {
                "id": "D",
                "texto": "No, porque los vehículos no pierden valor con el tiempo, sino que lo ganan."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Depreciación del automóvil",
            "datos": {
                "labels": [
                    "Año 0",
                    "Año 1",
                    "Año 2",
                    "Año 3",
                    "Año 4",
                    "Año 5"
                ],
                "datasets": [
                    {
                        "label": "Valor ($)",
                        "data": [
                            50000,
                            35000,
                            24500,
                            17150,
                            12005,
                            8400
                        ]
                    }
                ]
            }
        },
        "justificacion": "Si un vehículo perdiera la misma cantidad exacta de dinero cada año, el comportamiento sería modelado por una función lineal, viéndose gráficamente como una línea recta decreciente constante.\n\nAl ser la gráfica una curva descendente (función exponencial decreciente), la pendiente cambia con el tiempo. La caída en el precio es más abrupta entre el Año 0 y el Año 1 (pierde $15.000) que entre el Año 4 y el Año 5 (pierde $3.605). Por tanto, la afirmación es incorrecta."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-44",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "Una persona lanza una moneda para decidir de qué urna sacar una bola. Si sale cara (50%), saca de la Urna 1 (probabilidad de roja = 0.8). Si sale sello, saca de la Urna 2 (probabilidad de roja = 0.4). ¿Cuál es la probabilidad total de sacar una bola roja?",
        "opciones": [
            {
                "id": "A",
                "texto": "0.50"
            },
            {
                "id": "B",
                "texto": "0.60"
            },
            {
                "id": "C",
                "texto": "0.80"
            },
            {
                "id": "D",
                "texto": "1.20"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Probabilidades parciales (Diagrama de árbol)",
            "datos": {
                "labels": [
                    "Urna 1 (Cara)",
                    "Urna 2 (Sello)"
                ],
                "datasets": [
                    {
                        "label": "Probabilidad final de Roja",
                        "data": [
                            0.4,
                            0.2
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para resolver este ejercicio se aplica el Teorema de la Probabilidad Total. Existen dos ramas: sacar cara e ir a la Urna 1, o sacar sello e ir a la Urna 2.\n\nLa probabilidad de la rama 1 es P(Cara) * P(Roja|Urna1) = 0.5 * 0.8 = 0.4. La probabilidad de la rama 2 es P(Sello) * P(Roja|Urna2) = 0.5 * 0.4 = 0.2. Sumando ambos resultados (0.4 + 0.2), se obtiene que la probabilidad total de sacar una bola roja es 0.60 (o el 60%)."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-45",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "La figura muestra dos tanques cilíndricos. Si se desea saber cuál tiene mayor capacidad, ¿qué relación existe entre el volumen del tanque A y el volumen del tanque B?",
        "opciones": [
            {
                "id": "A",
                "texto": "El tanque A tiene el doble de capacidad que el B."
            },
            {
                "id": "B",
                "texto": "Ambos tanques tienen exactamente la misma capacidad."
            },
            {
                "id": "C",
                "texto": "El tanque B tiene el doble de capacidad que el A."
            },
            {
                "id": "D",
                "texto": "El tanque B tiene cuatro veces la capacidad del A."
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Comparación de Cilindros",
            "datos": {
                "labels": [
                    "Cilindro A (r, h)",
                    "Cilindro B (2r, h/2)"
                ],
                "datasets": [
                    {
                        "label": "Radio",
                        "data": [
                            1,
                            2
                        ]
                    },
                    {
                        "label": "Altura",
                        "data": [
                            2,
                            1
                        ]
                    }
                ]
            }
        },
        "justificacion": "El volumen de un cilindro se calcula con la fórmula V = π * r² * h. Para el cilindro A, su volumen es Va = π * r² * h.\n\nPara el cilindro B, su radio es el doble (2r) y su altura la mitad (h/2). Reemplazando: Vb = π * (2r)² * (h/2) = π * 4r² * (h/2). Simplificando el 4 con el 2, queda Vb = 2 * π * r² * h. Esto demuestra matemáticamente que el volumen de B es exactamente el doble del volumen de A."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-46",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Numérico - Variacional",
        "enunciado": "La gráfica representa las finanzas de una familia. ¿Qué sucede a partir del mes de agosto?",
        "opciones": [
            {
                "id": "A",
                "texto": "Los ingresos comienzan a ser menores que los egresos, generando deudas."
            },
            {
                "id": "B",
                "texto": "Los egresos comienzan a ser menores que los ingresos, permitiendo ahorrar."
            },
            {
                "id": "C",
                "texto": "Los ingresos y egresos se mantienen constantes y equivalentes."
            },
            {
                "id": "D",
                "texto": "Los ingresos llegan a su punto más bajo del año."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Finanzas Familiares",
            "datos": {
                "labels": [
                    "Junio",
                    "Julio",
                    "Agosto",
                    "Septiembre",
                    "Octubre"
                ],
                "datasets": [
                    {
                        "label": "Ingresos",
                        "data": [
                            2000,
                            2200,
                            2500,
                            2800,
                            3000
                        ]
                    },
                    {
                        "label": "Egresos",
                        "data": [
                            2800,
                            2600,
                            2500,
                            2300,
                            2100
                        ]
                    }
                ]
            }
        },
        "justificacion": "La gráfica muestra dos líneas que se intersecan exactamente en el mes de agosto. Antes de agosto, la línea de egresos (gastos) está por encima de la de ingresos.\n\nA partir del punto de intersección en agosto, la tendencia se invierte: la línea de ingresos sigue subiendo y cruza para posicionarse por encima de la línea de egresos, la cual va en descenso. Tener más ingresos que egresos es la condición matemática que permite generar un saldo positivo (ahorro)."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-47",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "Un analista afirma que el 50% de los estudiantes tarda 20 minutos o menos en llegar al colegio. ¿Esta afirmación se puede confirmar con el diagrama?",
        "opciones": [
            {
                "id": "A",
                "texto": "No, porque 20 minutos representa el primer cuartil, no la mitad."
            },
            {
                "id": "B",
                "texto": "Sí, porque la línea central de la caja (mediana) está ubicada exactamente en el valor 20."
            },
            {
                "id": "C",
                "texto": "No, porque la mitad exacta entre 10 y 50 es 30, no 20."
            },
            {
                "id": "D",
                "texto": "Sí, porque la mayoría de la caja se concentra a la derecha del 20."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Diagrama de Caja - Tiempo al colegio",
            "datos": {
                "labels": [
                    "Mínimo",
                    "Q1",
                    "Mediana",
                    "Q3",
                    "Máximo"
                ],
                "datasets": [
                    {
                        "label": "Minutos",
                        "data": [
                            10,
                            15,
                            20,
                            35,
                            50
                        ]
                    }
                ]
            }
        },
        "justificacion": "El diagrama de caja y bigotes (Boxplot) divide un conjunto de datos en cuatro partes porcentualmente iguales (cuartiles). La línea interior de la caja representa el segundo cuartil (Q2) o la mediana.\n\nPor definición estadística, la mediana es el valor que deja por debajo al 50% de las observaciones. Ya que en la gráfica esta línea central marca el valor de 20 minutos, es totalmente correcto afirmar que la mitad (50%) de los estudiantes tardan 20 minutos o menos."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-48",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Se necesita recortar un círculo de madera que circunscriba exactamente al triángulo rectángulo de la figura. ¿Cuál es el radio que debe tener el círculo de madera?",
        "opciones": [
            {
                "id": "A",
                "texto": "5 cm"
            },
            {
                "id": "B",
                "texto": "7 cm"
            },
            {
                "id": "C",
                "texto": "10 cm"
            },
            {
                "id": "D",
                "texto": "14 cm"
            }
        ],
        "respuestaCorrecta": "A",
        "imagen": "img/preguntas/circulo_triangulo.svg",
        "justificacion": "Según el teorema de Tales, todo triángulo rectángulo inscrito en una circunferencia tiene su hipotenusa coincidiendo exactamente con el diámetro de dicha circunferencia.\n\nPara hallar la hipotenusa usamos el Teorema de Pitágoras con los catetos dados: H² = 6² + 8² = 36 + 64 = 100. La raíz cuadrada de 100 es 10. Si el diámetro es 10 cm, el radio de la circunferencia debe ser exactamente la mitad, es decir, 5 cm."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-49",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Según el histograma, ¿cuál es la clase modal (el intervalo con mayor frecuencia) de las edades de los estudiantes?",
        "opciones": [
            {
                "id": "A",
                "texto": "10 - 12 años"
            },
            {
                "id": "B",
                "texto": "12 - 14 años"
            },
            {
                "id": "C",
                "texto": "14 - 16 años"
            },
            {
                "id": "D",
                "texto": "16 - 18 años"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Histograma de Edades",
            "datos": {
                "labels": [
                    "10-12",
                    "12-14",
                    "14-16",
                    "16-18"
                ],
                "datasets": [
                    {
                        "label": "Frecuencia",
                        "data": [
                            5,
                            15,
                            10,
                            5
                        ]
                    }
                ]
            }
        },
        "justificacion": "En un histograma o gráfica de frecuencias agrupadas, la 'clase modal' corresponde a la barra más alta, ya que indica el intervalo que contiene la mayor cantidad de datos recopilados.\n\nObservando el eje Y de la gráfica, el intervalo '12-14' llega a una frecuencia de 15, superando a todos los demás (5, 10 y 5 respectivamente). Por ende, el rango de 12 a 14 años es la clase modal del conjunto."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-50",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "De acuerdo con las vistas (superior, frontal y lateral) mostradas en la imagen, ¿cuál de las siguientes características describe correctamente al sólido?",
        "opciones": [
            {
                "id": "A",
                "texto": "Tiene una base de 3x3 cubos y una altura máxima de 1 cubo."
            },
            {
                "id": "B",
                "texto": "Es una pirámide perfecta de base cuadrada."
            },
            {
                "id": "C",
                "texto": "Tiene escalones que incrementan su altura desde el frente hacia atrás."
            },
            {
                "id": "D",
                "texto": "Es un cubo perfecto de 2x2x2."
            }
        ],
        "respuestaCorrecta": "C",
        "imagen": "img/preguntas/vistas_solido.svg",
        "justificacion": "La lectura e interpretación de vistas bidimensionales para deducir figuras tridimensionales indica que si la vista frontal es baja (1 nivel) pero la vista lateral dibuja perfiles escalonados ascendentes (1, luego 2, luego 3), la figura no es plana ni uniforme.\n\nEsa configuración espacial corresponde claramente a una escalera o pirámide asimétrica escalonada, descartando la idea de un cubo liso perfecto o una figura de una sola altura."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-51",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Si el presupuesto total del municipio es de $500 millones, ¿cuánto dinero más se invierte en Educación que en Infraestructura?",
        "opciones": [
            {
                "id": "A",
                "texto": "$50 millones"
            },
            {
                "id": "B",
                "texto": "$100 millones"
            },
            {
                "id": "C",
                "texto": "$150 millones"
            },
            {
                "id": "D",
                "texto": "$200 millones"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "pie",
            "titulo": "Presupuesto Municipal",
            "datos": {
                "labels": [
                    "Educación",
                    "Salud",
                    "Infraestructura",
                    "Cultura"
                ],
                "datasets": [
                    {
                        "data": [
                            40,
                            25,
                            20,
                            15
                        ]
                    }
                ]
            }
        },
        "justificacion": "Primero se comparan los porcentajes de ambos sectores: Educación tiene el 40% y la Infraestructura el 20%. La diferencia entre ambos es de 20 puntos porcentuales (40% - 20% = 20%).\n\nLuego se calcula cuánto equivale ese 20% respecto al total de 500 millones. Se multiplica 500 * 0.20 = 100. Por lo tanto, hay una diferencia neta de 100 millones de pesos a favor del sector educación."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-52",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "Utilizando la línea de tendencia de la gráfica, ¿cuántos goles se espera, aproximadamente, que marque un jugador que entrena 8 horas a la semana? (La línea pasa por el punto (8, 6)).",
        "opciones": [
            {
                "id": "A",
                "texto": "4 goles"
            },
            {
                "id": "B",
                "texto": "6 goles"
            },
            {
                "id": "C",
                "texto": "8 goles"
            },
            {
                "id": "D",
                "texto": "10 goles"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Horas vs Goles",
            "datos": {
                "labels": [
                    "2",
                    "4",
                    "6",
                    "8",
                    "10"
                ],
                "datasets": [
                    {
                        "label": "Goles esperados",
                        "data": [
                            1.5,
                            3,
                            4.5,
                            6,
                            7.5
                        ]
                    }
                ]
            }
        },
        "justificacion": "Una línea de tendencia en un gráfico de dispersión representa una estimación matemática (usualmente una regresión lineal) de la relación entre dos variables. El eje X marca las horas y el eje Y los goles.\n\nSi nos ubicamos en la marca del 8 en el eje de las horas (X) y proyectamos hacia arriba hasta tocar la línea de tendencia, cruzamos hacia la izquierda con el eje Y directamente en el valor de 6. De allí se deduce la expectativa."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-53",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un topógrafo afirma que el área total del terreno se puede hallar calculando el área del rectángulo y sumándole el área del triángulo. ¿Es válido el método propuesto?",
        "opciones": [
            {
                "id": "A",
                "texto": "No, porque el área de un trapecio solo se puede hallar con su fórmula propia: (B+b)*h/2."
            },
            {
                "id": "B",
                "texto": "Sí, porque las figuras planas compuestas pueden descomponerse en figuras más simples y sus áreas se suman."
            },
            {
                "id": "C",
                "texto": "No, porque faltaría restar el lado compartido entre el rectángulo y el triángulo."
            },
            {
                "id": "D",
                "texto": "Sí, pero solo si el triángulo es equilátero."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Terreno Compuesto",
            "datos": {
                "labels": [
                    "Rectángulo",
                    "Triángulo"
                ],
                "datasets": [
                    {
                        "label": "Área unitaria",
                        "data": [
                            1,
                            1
                        ]
                    }
                ]
            }
        },
        "justificacion": "El postulado fundamental de la adición de áreas (o conservación de área) establece que el área de una figura compuesta es igual a la suma de las áreas de sus partes no solapadas.\n\nUn trapecio rectángulo está perfectamente compuesto geométricamente por un rectángulo y un triángulo rectángulo pegados por uno de sus lados de altura. Sumar el área de ambas partes arrojará matemáticamente el mismo resultado que aplicar la fórmula directa del trapecio."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-54",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Numérico - Variacional",
        "enunciado": "De acuerdo con el modelo gráfico, ¿en qué momentos del día un barco muy pesado tiene menor riesgo de encallar por la profundidad del agua?",
        "opciones": [
            {
                "id": "A",
                "texto": "A las 0 y a las 12 horas."
            },
            {
                "id": "B",
                "texto": "A las 6 y a las 18 horas."
            },
            {
                "id": "C",
                "texto": "A las 12 y a las 24 horas."
            },
            {
                "id": "D",
                "texto": "En cualquier momento, el nivel es constante."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Nivel de marea (Modelo Seno)",
            "datos": {
                "labels": [
                    "0h",
                    "6h",
                    "12h",
                    "18h",
                    "24h"
                ],
                "datasets": [
                    {
                        "label": "Profundidad",
                        "data": [
                            0,
                            10,
                            0,
                            10,
                            0
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para que un barco pesado navegue sin tocar fondo (encallar), el agua debe tener la mayor profundidad posible, lo que corresponde a los picos más altos (máximos) de la función mostrada en la gráfica.\n\nAl examinar la curva oscilatoria, el eje Y (profundidad) alcanza sus valores máximos de 10 metros exactamente en las marcas horarias de las 6:00 y las 18:00 del eje X. En esos puntos el riesgo es el mínimo."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-55",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Al girar la ruleta mostrada en la gráfica, ¿cuál es la probabilidad de que la flecha caiga en el color Azul?",
        "opciones": [
            {
                "id": "A",
                "texto": "1/2"
            },
            {
                "id": "B",
                "texto": "1/3"
            },
            {
                "id": "C",
                "texto": "1/4"
            },
            {
                "id": "D",
                "texto": "3/4"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "pie",
            "titulo": "Ruleta de Probabilidad",
            "datos": {
                "labels": [
                    "Rojo (180°)",
                    "Azul (90°)",
                    "Amarillo (90°)"
                ],
                "datasets": [
                    {
                        "data": [
                            50,
                            25,
                            25
                        ]
                    }
                ]
            }
        },
        "justificacion": "En experimentos de probabilidad geométrica, la probabilidad de caer en un sector específico es proporcional al área o a la amplitud del ángulo que ocupa frente al total disponible (360° en una circunferencia completa).\n\nEl color azul abarca un ángulo de 90 grados. Por la Regla de Laplace aplicada a la geometría: Probabilidad = Casos favorables / Casos totales = 90° / 360° = 1/4. Esto indica un 25% de probabilidad."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-56",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Se desea comprar baldosas para el piso del salón principal. Si cada caja de baldosas cubre 2 metros cuadrados, ¿cuántas cajas se deben comprar exactamente para cubrir todo el salón?",
        "opciones": [
            {
                "id": "A",
                "texto": "9 cajas"
            },
            {
                "id": "B",
                "texto": "10 cajas"
            },
            {
                "id": "C",
                "texto": "20 cajas"
            },
            {
                "id": "D",
                "texto": "40 cajas"
            }
        ],
        "respuestaCorrecta": "B",
        "imagen": "img/preguntas/baldosas_salon.svg",
        "justificacion": "Primero debemos conocer el área total de la habitación que se desea cubrir. Al ser un rectángulo en una cuadrícula de 4 cuadritos por 5 cuadritos (y cada cuadro es 1 m²), el área es Base x Altura = 5m * 4m = 20 m².\n\nPara hallar la cantidad de cajas, dividimos el área total a cubrir entre la capacidad que recubre una sola caja: 20 m² / 2 m² por caja = 10 cajas. No hace falta comprar más, ni menos."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-57",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Un analista concluye que el número total de usuarios de internet aumentó cada año. ¿La gráfica aporta suficiente evidencia para esta conclusión?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque la proporción del Navegador Y crece de forma evidente cada año."
            },
            {
                "id": "B",
                "texto": "No, porque la gráfica solo muestra el porcentaje de uso relativo entre navegadores, no el total de usuarios."
            },
            {
                "id": "C",
                "texto": "Sí, porque las barras alcanzan siempre el 100%, indicando crecimiento."
            },
            {
                "id": "D",
                "texto": "No, porque el uso del Navegador X disminuye drásticamente."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Uso relativo de Navegadores (100% Apilado)",
            "datos": {
                "labels": [
                    "Año 1",
                    "Año 2",
                    "Año 3"
                ],
                "datasets": [
                    {
                        "label": "Navegador X (%)",
                        "data": [
                            80,
                            50,
                            20
                        ]
                    },
                    {
                        "label": "Navegador Y (%)",
                        "data": [
                            20,
                            50,
                            80
                        ]
                    }
                ]
            }
        },
        "justificacion": "Una gráfica de barras apiladas al 100% (o de porcentaje relativo) está diseñada específicamente para mostrar cómo se distribuyen las partes respecto de un todo, independientemente del volumen total real.\n\nQue el Navegador Y robe cuota de mercado al Navegador X no dice absolutamente nada sobre el volumen global. Podría haber 1.000 usuarios el Año 1, y solo 100 el Año 3, y la gráfica porcentual se vería igual. Por ende, la evidencia de la gráfica no basta para sacar deducciones absolutas."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-58",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "Un maestro afirma: 'Si un estudiante aprueba Lenguaje, es casi seguro que apruebe Matemáticas'. Basado en los datos de la gráfica, ¿tiene razón el maestro?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque la alta dependencia estadística (90%) entre ambas materias respalda la afirmación."
            },
            {
                "id": "B",
                "texto": "No, porque siempre hay una probabilidad del 50% de perder una materia sin importar la otra."
            },
            {
                "id": "C",
                "texto": "Sí, pero solo porque Lenguaje y Matemáticas siempre se evalúan el mismo día."
            },
            {
                "id": "D",
                "texto": "No, porque el 10% que reprueba invalida cualquier conclusión general."
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Aprobación cruzada (Lenguaje vs Matemáticas)",
            "datos": {
                "labels": [
                    "Aprobó Lenguaje",
                    "Reprobó Lenguaje"
                ],
                "datasets": [
                    {
                        "label": "Aprobó Matemáticas",
                        "data": [
                            90,
                            20
                        ]
                    },
                    {
                        "label": "Reprobó Matemáticas",
                        "data": [
                            10,
                            80
                        ]
                    }
                ]
            }
        },
        "justificacion": "Las tablas o gráficas de contingencia permiten analizar la probabilidad condicional. Nos interesa saber qué pasa con Matemáticas dado el hecho de que ya aprobaron Lenguaje.\n\nMirando la categoría 'Aprobó Lenguaje', observamos una desproporción fuerte: 90 aprobaron Matemáticas y solo 10 perdieron. Esto arroja una altísima probabilidad (9 de cada 10), por lo que usar expresiones como 'es casi seguro' es estadísticamente coherente y fundamentado."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-59",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Observando la ecuación y la gráfica de la parábola, ¿cuánto tiempo tarda el balón en volver a tocar el suelo (altura = 0)?",
        "opciones": [
            {
                "id": "A",
                "texto": "2 segundos"
            },
            {
                "id": "B",
                "texto": "4 segundos"
            },
            {
                "id": "C",
                "texto": "8 segundos"
            },
            {
                "id": "D",
                "texto": "16 segundos"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Trayectoria del balón (f(x) = -x² + 4x)",
            "datos": {
                "labels": [
                    "0",
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "datasets": [
                    {
                        "label": "Altura (m)",
                        "data": [
                            0,
                            3,
                            4,
                            3,
                            0
                        ]
                    }
                ]
            }
        },
        "justificacion": "La pregunta pide encontrar las raíces o ceros de la función parabólica. Se puede hacer algebraicamente resolviendo -x² + 4x = 0. Factorizando x(-x + 4) = 0, nos da dos soluciones: x=0 (cuando el balón es lanzado) y x=4 (cuando vuelve a caer).\n\nGráficamente esto es comprobable observando los cortes de la curva con el eje horizontal de las X. Empieza en el origen (0,0), sube hasta el segundo 2, y vuelve a chocar contra la línea del 0 en el segundo 4."
    },
    {
        "id": "mat_sim_03_icfes-2025-simulacro-60",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Al analizar los dos polígonos presentados en el plano, ¿qué transformación geométrica se aplicó al Polígono 1 para obtener el Polígono 2?",
        "opciones": [
            {
                "id": "A",
                "texto": "Una rotación de 180 grados alrededor del origen."
            },
            {
                "id": "B",
                "texto": "Una traslación horizontal de 5 unidades."
            },
            {
                "id": "C",
                "texto": "Una reflexión respecto al eje de las ordenadas (eje Y)."
            },
            {
                "id": "D",
                "texto": "Una ampliación al doble de su tamaño original."
            }
        ],
        "respuestaCorrecta": "C",
        "imagen": "img/preguntas/transformacion_poligonos.svg",
        "justificacion": "Las transformaciones geométricas modifican la posición de una figura sin cambiar sus propiedades intrínsecas. Si el polígono en el Cuadrante I (derecha) es como ver el polígono del Cuadrante II (izquierda) al revés o frente a un espejo, estamos ante una simetría.\n\nDado que los puntos en Y permanecen iguales, pero las coordenadas en X cambiaron sus signos (por ejemplo de -2 pasó a 2 de manera equidistante), la línea divisoria del 'espejo' corresponde al eje Y. A este proceso se le denomina matemáticamente reflexión o simetría axial."
    }
]);
