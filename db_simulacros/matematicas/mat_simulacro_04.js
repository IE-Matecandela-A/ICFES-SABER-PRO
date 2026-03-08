// ARCHIVO GENERADO AUTOMÁTICAMENTE PARA SIMULACRO NATIVO
// Matemáticas Simulacro 04 - Adaptado desde JSON

window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...[
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-01",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "En un juego de diseño de ciudades, un jugador debe ubicar una zona de parque en un mapa cuadriculado (plano cartesiano). El parque tiene forma rectangular y el jugador lo ubicó como muestra la figura. ¿Cuáles son las coordenadas (x,y) de los vértices que encierran exactamente la zona del parque?",
        "opciones": [
            {
                "id": "A",
                "texto": "(2, 1); (5, 1); (2, 3); (5, 3)"
            },
            {
                "id": "B",
                "texto": "(1, 2); (1, 5); (3, 2); (3, 5)"
            },
            {
                "id": "C",
                "texto": "(2, 2); (5, 5); (1, 1); (3, 3)"
            },
            {
                "id": "D",
                "texto": "(3, 1); (6, 1); (3, 3); (6, 3)"
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Plano del parque",
            "datos": {
                "labels": [
                    "Eje X",
                    "Eje Y"
                ],
                "datasets": [
                    {
                        "label": "Vértices",
                        "data": [
                            {
                                "x": 2,
                                "y": 1
                            },
                            {
                                "x": 5,
                                "y": 1
                            },
                            {
                                "x": 2,
                                "y": 3
                            },
                            {
                                "x": 5,
                                "y": 3
                            }
                        ]
                    }
                ]
            }
        },
        "justificacion": "Los vértices del rectángulo se leen ubicando primero la coordenada en el eje horizontal (x) y luego en el vertical (y). La base abarca desde x=2 hasta x=5, y la altura desde y=1 hasta y=3. Por lo tanto, los pares ordenados exactos en las esquinas son (2, 1), (5, 1), (2, 3) y (5, 3)."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-02",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "La gráfica de barras muestra los ingresos y costos que ha tenido una cafetería escolar durante 4 semanas. Un analista financiero observa el diagrama para detectar déficits. ¿En qué semana los costos fueron estrictamente mayores a los ingresos?",
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
        "grafica": {
            "tipo": "bar",
            "titulo": "Ingresos vs Costos Semanales",
            "datos": {
                "labels": [
                    "Sem 1",
                    "Sem 2",
                    "Sem 3",
                    "Sem 4"
                ],
                "datasets": [
                    {
                        "label": "Ingresos ($)",
                        "data": [
                            800,
                            900,
                            600,
                            1000
                        ]
                    },
                    {
                        "label": "Costos ($)",
                        "data": [
                            400,
                            500,
                            700,
                            400
                        ]
                    }
                ]
            }
        },
        "justificacion": "Al observar el diagrama de barras agrupadas, la barra correspondiente a los costos (segunda barra de cada par) supera en altura a la barra de ingresos (primera barra) únicamente en la Semana 3, donde los costos alcanzan $700 y los ingresos solo $600."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-03",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "La gráfica de barras compara la cantidad de libros disponibles por género en dos bibliotecas públicas de la ciudad. Al analizar el inventario, ¿cuál género de libros presenta la mayor diferencia de cantidad entre ambas bibliotecas?",
        "opciones": [
            {
                "id": "A",
                "texto": "Novela"
            },
            {
                "id": "B",
                "texto": "Ciencia"
            },
            {
                "id": "C",
                "texto": "Historia"
            },
            {
                "id": "D",
                "texto": "Arte"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Inventario de Libros por Biblioteca",
            "datos": {
                "labels": [
                    "Novela",
                    "Ciencia",
                    "Historia",
                    "Arte"
                ],
                "datasets": [
                    {
                        "label": "Biblioteca 1",
                        "data": [
                            20,
                            30,
                            10,
                            5
                        ]
                    },
                    {
                        "label": "Biblioteca 2",
                        "data": [
                            25,
                            15,
                            15,
                            10
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para hallar la respuesta se debe calcular la diferencia absoluta entre las barras de cada género: Novela (25-20=5), Ciencia (30-15=15), Historia (15-10=5) y Arte (10-5=5). El género de Ciencia presenta una brecha de 15 libros, siendo la mayor de todas."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-04",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Para pintar la fachada de un edificio, un pintor apoya una escalera de 6 metros de longitud, formando un ángulo de 60° con la superficie del suelo, como ilustra el esquema. ¿Cuál es la altura H, en metros, que alcanza la escalera sobre el edificio? (Considere sen(60°)=$\\sqrt{3}/2$ y cos(60°)=1/2).",
        "opciones": [
            {
                "id": "A",
                "texto": "3 m"
            },
            {
                "id": "B",
                "texto": "3$\\sqrt{3}$ m"
            },
            {
                "id": "C",
                "texto": "12 m"
            },
            {
                "id": "D",
                "texto": "12$\\sqrt{3}$ m"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Escalera apoyada (Triángulo rectángulo)",
            "datos": {
                "labels": [
                    "Hipotenusa (L=6m)",
                    "Ángulo=60°",
                    "Cateto Opuesto (H)"
                ],
                "datasets": [
                    {
                        "data": [
                            6,
                            60
                        ]
                    }
                ]
            }
        },
        "justificacion": "La escalera forma la hipotenusa de un triángulo rectángulo. La altura H es el cateto opuesto al ángulo de 60°. Usando la razón trigonométrica seno: sen(60°) = Opuesto / Hipotenusa. Despejando: H = 6 * sen(60°) = 6 * ($\\sqrt{3}/2$) = 3$\\sqrt{3}$ metros."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-05",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Una persona dibuja una circunferencia con centro en el origen O(0,0) y ubica dos puntos sobre ella: el punto P en el cuadrante I y el punto Q en el cuadrante III. Afirma que la distancia desde el origen hasta P es diferente a la distancia desde el origen hasta Q porque están en cuadrantes de signos matemáticos opuestos. ¿Es verdadera esta afirmación?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque las coordenadas en el cuadrante III son negativas, haciendo la longitud métrica menor."
            },
            {
                "id": "B",
                "texto": "No, porque ambas distancias corresponden al diámetro de la circunferencia."
            },
            {
                "id": "C",
                "texto": "Sí, porque la distancia varía dependiendo del ángulo de inclinación de la recta."
            },
            {
                "id": "D",
                "texto": "No, porque ambas medidas corresponden al radio de la misma circunferencia, el cual es siempre constante."
            }
        ],
        "respuestaCorrecta": "D",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Circunferencia en el plano",
            "datos": {
                "labels": [
                    "Origen (0,0)",
                    "Punto P (I)",
                    "Punto Q (III)"
                ],
                "datasets": [
                    {
                        "data": [
                            1,
                            1
                        ]
                    }
                ]
            }
        },
        "justificacion": "En toda circunferencia geométrica, la distancia lineal desde el centro hasta cualquier punto de su borde exterior se define como el radio. Dado que tanto P como Q están dibujados sobre la misma circunferencia perfecta, la longitud de los segmentos OP y OQ es idéntica por definición, sin importar en qué cuadrante o con qué signos se ubiquen los puntos."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-06",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Una ventana está diseñada uniendo un rectángulo en la parte inferior y un semicírculo en la parte superior, como se muestra en la figura geométrica. Si el ancho del rectángulo es de 4 m y su altura es de 3 m, ¿cuál es el área total de la estructura de la ventana?",
        "opciones": [
            {
                "id": "A",
                "texto": "12 + 2π m²"
            },
            {
                "id": "B",
                "texto": "12 + 4π m²"
            },
            {
                "id": "C",
                "texto": "12 + 8π m²"
            },
            {
                "id": "D",
                "texto": "12 + 16π m²"
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Figura compuesta (Ventana)",
            "datos": {
                "labels": [
                    "Base=4m",
                    "Altura=3m",
                    "Radio del semicírculo"
                ],
                "datasets": [
                    {
                        "data": [
                            4,
                            3,
                            2
                        ]
                    }
                ]
            }
        },
        "justificacion": "El área total de la figura compuesta es la suma de sus partes. El área del rectángulo es Base × Altura = 4 × 3 = 12 m². El radio del semicírculo es la mitad del ancho total del rectángulo (r = 4/2 = 2). El área de un círculo completo de radio 2 es π(2)² = 4π. Al ser un semicírculo, se divide a la mitad: 2π m². Por lo tanto, el área total es 12 + 2π m²."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-07",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Una empresa realizó una encuesta a 200 usuarios sobre su medio de transporte preferido, segmentándolos por edades (Jóvenes, Adultos, Mayores) en una tabla. Posteriormente, se elaboró el diagrama circular adjunto que resume el porcentaje total de preferencia de los transportes. ¿Qué información es posible deducir de la tabla original, pero NO del diagrama circular?",
        "opciones": [
            {
                "id": "A",
                "texto": "El porcentaje total de personas que prefieren movilizarse en Bus."
            },
            {
                "id": "B",
                "texto": "La cantidad específica de usuarios Jóvenes que prefieren usar el Taxi."
            },
            {
                "id": "C",
                "texto": "El medio de transporte menos utilizado a nivel general."
            },
            {
                "id": "D",
                "texto": "Cuáles son todos los tipos de transporte evaluados en la encuesta."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "pie",
            "titulo": "Preferencia General de Transporte",
            "datos": {
                "labels": [
                    "Bus 40%",
                    "Metro 35%",
                    "Taxi 25%"
                ],
                "datasets": [
                    {
                        "data": [
                            40,
                            35,
                            25
                        ]
                    }
                ]
            }
        },
        "justificacion": "El diagrama circular de la imagen únicamente consolida los porcentajes totales por tipo de vehículo (Bus, Metro, Taxi). Las variables cruzadas, como el rango de edad exacto (Jóvenes) asociado a un transporte específico, se agrupan en el gráfico perdiendo esa granularidad, la cual solo puede ser consultada en la tabla matricial de origen."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-08",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "Se realizó un sondeo a 120 personas para conocer su género de cine preferido. La gráfica de barras muestra el porcentaje de preferencia obtenido para cada género. Según los porcentajes graficados, ¿cuántas personas en total afirmaron preferir el cine de Comedia?",
        "opciones": [
            {
                "id": "A",
                "texto": "30 personas"
            },
            {
                "id": "B",
                "texto": "60 personas"
            },
            {
                "id": "C",
                "texto": "120 personas"
            },
            {
                "id": "D",
                "texto": "50 personas"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Preferencias Cine (%)",
            "datos": {
                "labels": [
                    "Acción",
                    "Comedia",
                    "Terror",
                    "Drama"
                ],
                "datasets": [
                    {
                        "label": "Porcentaje (%)",
                        "data": [
                            25,
                            50,
                            12.5,
                            12.5
                        ]
                    }
                ]
            }
        },
        "justificacion": "La gráfica indica claramente que la barra de 'Comedia' alcanza el 50%. Sabiendo que el total de la muestra encuestada es de 120 personas, se debe calcular el 50% de 120. Multiplicar 120 por 0.5 (o dividir entre 2) da como resultado exacto 60 personas."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-09",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "En un polígono regular, la medida de todos sus lados es la misma y su perímetro es igual al número de lados multiplicado por la longitud de uno de ellos. Si el polígono ilustrado en la gráfica tiene 8 lados (octágono) y el perímetro total reportado es de 40 cm, ¿cuál es la medida exacta de uno de sus lados?",
        "opciones": [
            {
                "id": "A",
                "texto": "8 cm"
            },
            {
                "id": "B",
                "texto": "6 cm"
            },
            {
                "id": "C",
                "texto": "5 cm"
            },
            {
                "id": "D",
                "texto": "40 cm"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Octágono Regular",
            "datos": {
                "labels": [
                    "Número de lados (n) = 8",
                    "Perímetro (P) = 40"
                ],
                "datasets": [
                    {
                        "data": [
                            8,
                            40
                        ]
                    }
                ]
            }
        },
        "justificacion": "La fórmula general para calcular el perímetro de un polígono regular es P = n × L, donde 'n' es el número de lados y 'L' la medida de un lado. Teniendo un perímetro (P) de 40 cm y 8 lados (n), despejamos la longitud del lado: L = P / n = 40 / 8 = 5 cm."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-10",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un juego de mesa matemático exige a los jugadores armar parejas con cartas de figuras geométricas que posean exactamente la misma área. Si una carta visible muestra un rectángulo de lados 8 cm y 3 cm, y otra carta muestra un triángulo de base 6 cm, ¿qué altura (h) debe tener el triángulo dibujado para formar una pareja correcta?",
        "opciones": [
            {
                "id": "A",
                "texto": "4 cm"
            },
            {
                "id": "B",
                "texto": "8 cm"
            },
            {
                "id": "C",
                "texto": "12 cm"
            },
            {
                "id": "D",
                "texto": "24 cm"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Cartas Geométricas",
            "datos": {
                "labels": [
                    "Rectángulo (8x3)",
                    "Triángulo (b=6, h=?)"
                ],
                "datasets": [
                    {
                        "data": [
                            24,
                            6
                        ]
                    }
                ]
            }
        },
        "justificacion": "El primer paso es calcular el área que se debe emparejar: Área del rectángulo = Base × Altura = 8 × 3 = 24 cm². Para que la segunda carta haga pareja, el triángulo también debe tener un área de 24 cm². Sabiendo que el Área del triángulo = (Base × Altura)/2, se reemplaza: (6 × h)/2 = 24. Resolviendo: 3h = 24; h = 8 cm."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-11",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Numérico - Variacional",
        "enunciado": "Una empresa lleva el registro del llenado de un tanque de almacenamiento hídrico durante 4 horas seguidas. La gráfica de líneas muestra el volumen de agua acumulado en litros en función del tiempo. Al interpretar la gráfica, ¿cuál es la tendencia de llenado constante del tanque?",
        "opciones": [
            {
                "id": "A",
                "texto": "Aumenta 400 litros por cada hora."
            },
            {
                "id": "B",
                "texto": "Disminuye 200 litros por cada hora."
            },
            {
                "id": "C",
                "texto": "Aumenta 200 litros por cada hora."
            },
            {
                "id": "D",
                "texto": "El volumen aumenta de manera exponencial tras la primera hora."
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Llenado del tanque hídrico",
            "datos": {
                "labels": [
                    "Hora 1",
                    "Hora 2",
                    "Hora 3",
                    "Hora 4"
                ],
                "datasets": [
                    {
                        "label": "Volumen (L)",
                        "data": [
                            200,
                            400,
                            600,
                            800
                        ]
                    }
                ]
            }
        },
        "justificacion": "Al analizar la pendiente de la línea ascendente trazada, se evidencia que por cada paso de 1 unidad en el eje horizontal (incremento de 1 hora), el valor en el eje vertical (volumen en litros) crece de forma constante en 200 unidades: pasa de 200 a 400, de 400 a 600, etc. Es un crecimiento rectilíneo proporcional a razón de +200 L/h."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-12",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "La figura muestra un diagrama de Venn que representa la distribución de 150 estudiantes de un instituto según el idioma extranjero en el que están matriculados: Inglés, Francés y Alemán. Si la secretaría necesita saber la cantidad total de estudiantes que asisten a las clases de Inglés, ¿cuáles valores numéricos del diagrama se deben sumar?",
        "opciones": [
            {
                "id": "A",
                "texto": "Solamente el 40."
            },
            {
                "id": "B",
                "texto": "40, 15 y 10."
            },
            {
                "id": "C",
                "texto": "40, 15, 10 y 5."
            },
            {
                "id": "D",
                "texto": "15, 10 y 5."
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Diagrama de Venn (Idiomas)",
            "datos": {
                "labels": [
                    "Solo Inglés",
                    "Inglés+Francés",
                    "Inglés+Alemán",
                    "Todos los idiomas"
                ],
                "datasets": [
                    {
                        "data": [
                            40,
                            15,
                            10,
                            5
                        ]
                    }
                ]
            }
        },
        "justificacion": "En la teoría de conjuntos y los diagramas de Venn, para determinar el tamaño total de un conjunto (en este caso 'Inglés'), se debe tomar el área completa del círculo que lo representa. Esto obliga a sumar a quienes estudian solo ese idioma (40) y también las intersecciones con los otros conjuntos (15, 10 y 5), pues todos ellos asisten a Inglés independientemente de qué otras clases tomen."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-13",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Un hospital publica los reportes de pacientes ingresados por urgencias en una semana: una tabla indica (Lunes: 40, Martes: 50, Miércoles: 30, Jueves: 60, Viernes: 45), pero la gráfica adjunta muestra una línea que hace un pico en 60 el miércoles y baja a 30 el jueves. Un auditor advierte el descuadre. ¿Por qué la gráfica NO corresponde fielmente a la información de la tabla?",
        "opciones": [
            {
                "id": "A",
                "texto": "Porque en la gráfica los días fueron ordenados alfabéticamente en el eje X."
            },
            {
                "id": "B",
                "texto": "Porque los valores graficados del miércoles y jueves fueron intercambiados por accidente respecto a la tabla."
            },
            {
                "id": "C",
                "texto": "Porque los datos numéricos de la gráfica están representados en un formato de porcentajes proporcionales."
            },
            {
                "id": "D",
                "texto": "Porque los reportes omitieron los días sábado y domingo."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Pacientes en Urgencias (Reporte Gráfico)",
            "datos": {
                "labels": [
                    "Lunes",
                    "Martes",
                    "Miércoles",
                    "Jueves",
                    "Viernes"
                ],
                "datasets": [
                    {
                        "label": "Pacientes",
                        "data": [
                            40,
                            50,
                            60,
                            30,
                            45
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para realizar una lectura crítica de datos, se contrasta punto por punto. El lunes (40), martes (50) y viernes (45) cuadran perfecto entre la tabla y el gráfico. El error radica en que la tabla establece 30 para el miércoles y 60 para el jueves, pero en la construcción de la gráfica, la línea ubica el pico de 60 en el miércoles y cae a 30 el jueves, intercambiando las posiciones."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-14",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Aleatorio",
        "enunciado": "Una empacadora agrícola automatizada clasifica un lote de 1.000 manzanas según su peso continuo en gramos. La distribución estadística se presenta en el histograma. Según los datos graficados en los intervalos, ¿cuántas manzanas del lote analizado pesan 100 gramos o más?",
        "opciones": [
            {
                "id": "A",
                "texto": "400 manzanas"
            },
            {
                "id": "B",
                "texto": "500 manzanas"
            },
            {
                "id": "C",
                "texto": "800 manzanas"
            },
            {
                "id": "D",
                "texto": "100 manzanas"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Histograma de Pesos (Manzanas)",
            "datos": {
                "labels": [
                    "80 - 90 g",
                    "90 - 100 g",
                    "100 - 110 g",
                    "110 - 120 g"
                ],
                "datasets": [
                    {
                        "label": "Frecuencia Absoluta",
                        "data": [
                            200,
                            300,
                            400,
                            100
                        ]
                    }
                ]
            }
        },
        "justificacion": "La pregunta solicita la cantidad agregada de manzanas cuyo peso se ubica desde los 100 gramos en adelante. Ubicándose en el eje X del histograma, esto corresponde a la suma directa de las frecuencias de las dos últimas barras: la del intervalo '100 - 110 g' (frecuencia 400) más la del intervalo '110 - 120 g' (frecuencia 100). 400 + 100 = 500."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-15",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Para la clase de artes manuales, un alumno tiene una tabla de madera completamente rectangular de 120 cm de base por 40 cm de altura. Siguiendo el plano, debe realizar un corte recto cruzando exactamente desde una esquina a la esquina diagonal opuesta para sacar dos trozos. ¿Cuál es el área final que tendrá una sola de estas dos piezas triangulares obtenidas?",
        "opciones": [
            {
                "id": "A",
                "texto": "4.800 cm²"
            },
            {
                "id": "B",
                "texto": "2.400 cm²"
            },
            {
                "id": "C",
                "texto": "160 cm²"
            },
            {
                "id": "D",
                "texto": "1.200 cm²"
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Corte de Tabla (Rectángulo a Triángulos)",
            "datos": {
                "labels": [
                    "Base",
                    "Altura"
                ],
                "datasets": [
                    {
                        "data": [
                            120,
                            40
                        ]
                    }
                ]
            }
        },
        "justificacion": "Geométricamente, la diagonal de un rectángulo divide la figura original en dos triángulos rectángulos congruentes (idénticos). Primero se halla el área total del rectángulo: 120 cm × 40 cm = 4.800 cm². Dado que el corte crea dos piezas que comparten la mitad del área total, el área de una sola es 4.800 / 2 = 2.400 cm²."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-16",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un arquitecto urbanista diseña un parque público rectangular (20 m x 10 m) que contiene una gran fuente de agua circular (radio de 4 m) en su interior. Para estimar los metros cuadrados de pasto (el área sobrante del rectángulo), usa este procedimiento: Paso 1. Multiplica 20 x 10. Paso 2. Calcula el área del círculo multiplicando pi por 4 al cuadrado (π × 4²). Paso 3. Suma el resultado del Paso 1 con el del Paso 2. ¿En qué paso cometió un error lógico de modelamiento y por qué?",
        "opciones": [
            {
                "id": "A",
                "texto": "En el paso 1, porque el área de cualquier rectángulo se halla sumando las medidas de sus cuatro lados."
            },
            {
                "id": "B",
                "texto": "En el paso 2, porque la fórmula correcta del área de un círculo no emplea pi sino el diámetro multiplicado por el radio."
            },
            {
                "id": "C",
                "texto": "En el paso 3, porque geométricamente para aislar la zona verde restante se debe restar la superficie interna (círculo) del espacio total, no sumarla."
            },
            {
                "id": "D",
                "texto": "El procedimiento está modelado e interconectado de manera completamente correcta."
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Esquema del Parque (Zonas compuestas)",
            "datos": {
                "labels": [
                    "Rectángulo externo",
                    "Círculo interno"
                ],
                "datasets": [
                    {
                        "data": [
                            200,
                            16
                        ]
                    }
                ]
            }
        },
        "justificacion": "Para resolver problemas de áreas sombreadas o sobrantes, el modelo matemático dictamina que se halla el área de la figura mayor exterior y se le restan los elementos contenidos en ella. Al sumar el círculo al rectángulo en el paso 3, el arquitecto estaría asumiendo erróneamente que la fuente es una extensión externa del terreno, fallando en el cálculo del pasto."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-17",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Un agricultor prueba el uso de un nuevo fertilizante. Mide las dosis agregadas a lo largo de varias semanas contra el rendimiento de las matas y traza una gráfica de dispersión. Al observar la gráfica (curva que sube y luego decae), el cultivador afirma feliz: 'La tendencia confirma que si sigo aplicando fertilizante de forma indefinida, los kilos de tomates cosechados nunca dejarán de crecer'. ¿Es correcta la deducción basada en el gráfico?",
        "opciones": [
            {
                "id": "A",
                "texto": "Sí, porque el primer segmento del experimento presenta una pendiente matemática claramente ascendente."
            },
            {
                "id": "B",
                "texto": "No, porque la gráfica muestra una cóncava donde, al superar la cantidad óptima (pico), el rendimiento por planta empieza a caer dramáticamente."
            },
            {
                "id": "C",
                "texto": "Sí, porque teóricamente todo nutriente agregado a una planta potenciará siempre su capacidad fotosintética."
            },
            {
                "id": "D",
                "texto": "No, porque faltaron tomar datos relacionados con factores externos como el clima y el riego diario de la tierra."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "line",
            "titulo": "Dosis de Fertilizante vs Rendimiento",
            "datos": {
                "labels": [
                    "10kg",
                    "20kg",
                    "30kg",
                    "40kg",
                    "50kg",
                    "60kg",
                    "70kg"
                ],
                "datasets": [
                    {
                        "label": "Tomates Cosechados",
                        "data": [
                            20,
                            50,
                            80,
                            100,
                            110,
                            80,
                            40
                        ]
                    }
                ]
            }
        },
        "justificacion": "La lectura global de la gráfica evidencia un comportamiento parabólico. Señala claramente que a partir del pico productivo máximo (ubicado en el punto de los 50 kg de abono), la inserción adicional de fertilizante no favorece a la planta sino que es perjudicial o tóxica, haciendo que la curva inicie un descenso en caída. La proyección al infinito del agricultor falla la validación visual."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-18",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "En la final de clavados olímpicos, cinco jueces entregan una calificación del 1 al 10. El reglamento oficial dicta un algoritmo: Paso 1. Eliminar la nota mayor y menor de la pizarra. Paso 2. Promediar las tres calificaciones centrales restantes. Paso 3. Multiplicar ese promedio por el nivel de dificultad. Un clavadista obtuvo las notas: 7, 8, 8, 9 y 10. Un comentarista sugiere que 'Si los jueces cambiaran las reglas y NO eliminaran la calificación perfecta (el 10), el promedio de notas en el paso 2 de este clavadista se incrementaría'. ¿Tiene validez la apreciación del comentarista deportivo?",
        "opciones": [
            {
                "id": "A",
                "texto": "No, porque las normativas estadísticas garantizan que suprimir los valores atípicos nunca afecta el resultado de un promedio en series pequeñas."
            },
            {
                "id": "B",
                "texto": "Sí, porque al retener un valor máximo extremo (el 10), la sumatoria del numerador crece más rápido que la división del denominador, arrastrando la media hacia arriba."
            },
            {
                "id": "C",
                "texto": "No, porque la existencia del número 7 (nota más baja) anula automáticamente las repercusiones positivas que pudiera inyectar el número 10."
            },
            {
                "id": "D",
                "texto": "Sí, pero únicamente si el grado de dificultad se evalúa y multiplica antes de realizar el promedio aritmético."
            }
        ],
        "respuestaCorrecta": "B",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Calificaciones de los Jueces",
            "datos": {
                "labels": [
                    "Juez 1",
                    "Juez 2",
                    "Juez 3",
                    "Juez 4",
                    "Juez 5"
                ],
                "datasets": [
                    {
                        "label": "Puntaje otorgado",
                        "data": [
                            7,
                            8,
                            8,
                            9,
                            10
                        ]
                    }
                ]
            }
        },
        "justificacion": "Se puede probar matemáticamente hallando los dos promedios. Con la regla activa (sin extremos), se promedia (8+8+9)/3 = 8.33. Si ignoráramos la regla e incluyéramos todos los valores, el cálculo bruto sería (7+8+8+9+10)/5 = 8.4. Al comparar (8.4 > 8.33), se valida algebraicamente la sospecha del comentarista respecto a cómo el valor máximo (10) arrastra positivamente la media general."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-19",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un soldador debe calcular la cantidad de contorno de acero necesario para rodear un emblema metálico decorativo que tiene la forma exacta de un hexágono regular. Escribió en su libreta el siguiente plan: Paso 1. Medir un lado. Paso 2. Sumar la medida de ese lado consigo misma (L+L). Paso 3. Multiplicar ese bloque intermedio por tres. Un aprendiz revisa la hoja e interviene asegurando que esos 3 pasos se pueden fusionar en una única operación matemática equivalente más sencilla. ¿Cuál de las opciones ejecuta de manera eficiente lo sugerido?",
        "opciones": [
            {
                "id": "A",
                "texto": "Multiplicar de inmediato la longitud medida del lado por el número 6."
            },
            {
                "id": "B",
                "texto": "Elevar al cuadrado la medida del primer lado para que represente toda el área exterior."
            },
            {
                "id": "C",
                "texto": "Multiplicar la longitud obtenida del primer paso de medición por el coeficiente 5."
            },
            {
                "id": "D",
                "texto": "Someter el lado a tres adiciones secuenciales e independientes en una calculadora."
            }
        ],
        "respuestaCorrecta": "A",
        "tipo": "grafica",
        "grafica": {
            "tipo": "geometry",
            "titulo": "Geometría Hexagonal Perimetral",
            "datos": {
                "labels": [
                    "Polígono regular",
                    "Lados idénticos"
                ],
                "datasets": [
                    {
                        "data": [
                            6
                        ]
                    }
                ]
            }
        },
        "justificacion": "El perímetro se define sumando todos los bordes externos. Al ser un polígono regular hexagonal, todos los 6 lados son idénticos en tamaño. El soldador propuso sumar (L+L)=2L y luego multiplicar (2L) × 3, resultando en 6L. Simplificar aplicando una sola operación multiplicativa (L × 6) genera una expresión matemática equivalente y operativamente directa."
    },
    {
        "id": "mat_sim_04_icfes-2025-simulacro-mate-p1-20",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "Los organizadores de un campeonato local de videojuegos analizan qué tan larga será la ronda de clasificación si deciden que el formato será de estilo liga: 'Todos juegan contra todos, exactamente una sola vez'. En su gráfica comparativa plasman los partidos totales que arrojan para ligas de 3, 4 y 5 equipos, haciendo uso de la fórmula de combinaciones sin repetición: (n × (n-1)) / 2. Siguiendo la misma estructura combinatoria, ¿cuál será el total exacto de enfrentamientos a agendar si en esta edición logran inscribir a 8 equipos participantes?",
        "opciones": [
            {
                "id": "A",
                "texto": "15 partidos"
            },
            {
                "id": "B",
                "texto": "21 partidos"
            },
            {
                "id": "C",
                "texto": "28 partidos"
            },
            {
                "id": "D",
                "texto": "56 partidos"
            }
        ],
        "respuestaCorrecta": "C",
        "tipo": "grafica",
        "grafica": {
            "tipo": "bar",
            "titulo": "Proyección de Partidos por Cantidad de Equipos",
            "datos": {
                "labels": [
                    "3 Equipos",
                    "4 Equipos",
                    "5 Equipos"
                ],
                "datasets": [
                    {
                        "label": "Partidos Totales",
                        "data": [
                            3,
                            6,
                            10
                        ]
                    }
                ]
            }
        },
        "justificacion": "Este es un ejercicio probabilístico de combinación binaria (en un partido actúan siempre 2 actores) sin repetición y sin considerar la localía o el orden. Se exige aplicar la fórmula n(n-1)/2. Reemplazando la 'n' por la variable dada en el nuevo escenario (n=8): Se multiplica 8 por (8-1=7), lo que entrega 56 escenarios posibles. Al dividir 56 entre 2, se constata que habrá un total estricto de 28 juegos únicos."
    }
]);
