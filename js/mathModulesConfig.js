/**
 * MATH_MODULES_CONFIG
 * Configuración centralizada de temas, teoría y preguntas para los 23 módulos de matemáticas.
 * Generado automáticamente - Contiene ilustraciones vectoriales SVG y teoría completa.
 */
(function() {
    const React = window.React;
    const { useState, useEffect, useMemo } = React;

    // Helper de iconos Material Design
    const Icon = ({ name, className = "", style = {} }) =>
        React.createElement("span", {
            className: `material-icons-round ${className}`,
            style: { fontSize: 'inherit', verticalAlign: 'middle', ...style }
        }, name);

    // Mapeo Lucide -> Material Icons
    const Box = (props) => React.createElement(Icon, { name: "inventory_2", ...props });
    const Triangle = (props) => React.createElement(Icon, { name: "change_history", ...props });
    const Maximize = (props) => React.createElement(Icon, { name: "aspect_ratio", ...props });
    const Ruler = (props) => React.createElement(Icon, { name: "straighten", ...props });
    const Brain = (props) => React.createElement(Icon, { name: "psychology", ...props });
    const CheckCircle = (props) => React.createElement(Icon, { name: "check_circle", ...props });
    const ArrowRight = (props) => React.createElement(Icon, { name: "arrow_forward", ...props });
    const Lightbulb = (props) => React.createElement(Icon, { name: "lightbulb", ...props });
    const Award = (props) => React.createElement(Icon, { name: "emoji_events", ...props });
    const RefreshCw = (props) => React.createElement(Icon, { name: "refresh", ...props });
    const Compass = (props) => React.createElement(Icon, { name: "explore", ...props });
    const Layers = (props) => React.createElement(Icon, { name: "layers", ...props });
    const Square = (props) => React.createElement(Icon, { name: "crop_square", ...props });
    const BookOpen = (props) => React.createElement(Icon, { name: "menu_book", ...props });

    // Helper to render flat horizontal fractions
    const Frac = (num, den) => React.createElement("span", {
        className: "inline-flex flex-col align-middle text-center leading-none mx-0.5 whitespace-nowrap"
    },
        React.createElement("span", { className: "border-b border-current pb-0.5 text-[10px] font-bold whitespace-nowrap" }, num),
        React.createElement("span", { className: "text-[10px] font-bold pt-0.5 whitespace-nowrap" }, den)
    );

    window.MATH_MODULES_CONFIG = {

        "mat_mod_1": {
            id: "mat_mod_1",
            title: "Módulo 1: Lectura de Gráficos",
            description: "Lectura directa de datos en barras, líneas, tortas y tablas de contingencia.",
            icon: "insights",
            theme: "indigo",
            introduccion: {
                pilarTitulo: "Pilares del Análisis Gráfico",
                pilares: [
                    "Lectura directa e interpretación de datos en diagramas de barras.",
                    "Seguimiento de tendencias temporales en gráficos de líneas continuas.",
                    "Distribución porcentual en diagramas circulares (tortas).",
                    "Cruce de datos y variables en tablas de contingencia de doble entrada.",
                ],
                deseaPintarText: "Este módulo entrena tu habilidad para interpretar y extraer información de representaciones gráficas directamente, sin cálculos complejos. Es la base de la competencia de Interpretación y Representación del ICFES."
            },
            teoria: [
                {
                    titulo: "Gráfico de Barras: Comparación de Categorías",
                    situacion: "Comparar la cantidad de libros prestados en una biblioteca por género literario: Ficción = 150, Historia = 300, Clásica = 200.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El gráfico de barras representa datos cualitativos discretos, donde la altura de cada barra es proporcional a su frecuencia."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "¿Cuál es el género literario del que se prestaron exactamente 300 libros?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "100", x2: "190", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Cantidad"),
                        React.createElement("text", { x: "185", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Géneros"),
                        React.createElement("line", { x1: "25", y1: "80", x2: "190", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "80", x2: "25", y2: "80", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "100"),
                        React.createElement("line", { x1: "25", y1: "60", x2: "190", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "60", x2: "25", y2: "60", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "62", fontSize: "6", textAnchor: "end" }, "200"),
                        React.createElement("line", { x1: "25", y1: "40", x2: "190", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "40", x2: "25", y2: "40", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "42", fontSize: "6", textAnchor: "end" }, "300"),
                        React.createElement("line", { x1: "25", y1: "20", x2: "190", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "20", x2: "25", y2: "20", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "400"),
                        React.createElement("rect", { x: "35", y: "70", width: "25", height: "30", fill: "#34d399", stroke: "#059669", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "47.5", y: "65", fontSize: "8", textAnchor: "middle", fontWeight: "bold" }, "150"),
                        React.createElement("rect", { x: "85", y: "40", width: "25", height: "60", fill: "#3b82f6", stroke: "#1d4ed8", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "97.5", y: "35", fontSize: "8", textAnchor: "middle", fontWeight: "bold" }, "300"),
                        React.createElement("rect", { x: "135", y: "60", width: "25", height: "40", fill: "#2dd4bf", stroke: "#0f766e", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "147.5", y: "55", fontSize: "8", textAnchor: "middle", fontWeight: "bold" }, "200"),
                        React.createElement("text", { x: "47.5", y: "112", fontSize: "7", textAnchor: "middle" }, "Ficción"),
                        React.createElement("text", { x: "97.5", y: "112", fontSize: "7", textAnchor: "middle" }, "Historia"),
                        React.createElement("text", { x: "147.5", y: "112", fontSize: "7", textAnchor: "middle" }, "Clásica")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) Ficción"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) Historia"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) Clásica"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) Poesía")
                    )
                )
            ),
                    resultado: "Opción Correcta: B (Historia). Explicación: Al ubicar 'Historia' en el eje X, su barra sube hasta la línea de 300 en el eje Y. Ficción tiene 150 y Clásica tiene 200."
                },
                {
                    titulo: "Gráfico de Líneas: Evolución y Tendencias",
                    situacion: "Monitorear la variación de la temperatura ambiente de un salón a lo largo del día: 08:00 = 10°C, 10:00 = 20°C, 12:00 = 30°C, 14:00 = 25°C.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El gráfico de líneas representa el comportamiento o evolución de una variable continua a lo largo del tiempo, conectando puntos cartesianos."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "¿En qué momento del día se registró la temperatura máxima de 30°C?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Temp (°C)"),
                        React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Hora"),
                        React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "80", x2: "25", y2: "80", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "10°"),
                        React.createElement("line", { x1: "25", y1: "50", x2: "185", y2: "50", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "50", x2: "25", y2: "50", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "52", fontSize: "6", textAnchor: "end" }, "20°"),
                        React.createElement("line", { x1: "25", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "20", y1: "20", x2: "25", y2: "20", stroke: "#334155" }),
                        React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "30°"),
                        React.createElement("polyline", { points: "45,80 90,50 135,20 180,35", fill: "none", stroke: "#f43f5e", strokeWidth: "2", strokeLinecap: "round" }),
                        React.createElement("circle", { cx: "45", cy: "80", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                        React.createElement("circle", { cx: "90", cy: "50", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                        React.createElement("circle", { cx: "135", cy: "20", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                        React.createElement("circle", { cx: "180", cy: "35", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                        React.createElement("text", { x: "45", y: "112", fontSize: "7", textAnchor: "middle" }, "08:00"),
                        React.createElement("text", { x: "90", y: "112", fontSize: "7", textAnchor: "middle" }, "10:00"),
                        React.createElement("text", { x: "135", y: "112", fontSize: "7", textAnchor: "middle" }, "12:00"),
                        React.createElement("text", { x: "180", y: "112", fontSize: "7", textAnchor: "middle" }, "14:00")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) 08:00"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) 10:00"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) 12:00"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) 14:00")
                    )
                )
            ),
                    resultado: "Opción Correcta: C (12:00). Explicación: Encuentra el punto más alto en la línea (30°C) y lee en el eje X la hora correspondiente (12:00)."
                },
                {
                    titulo: "Diagrama Circular: Distribución Proporcional",
                    situacion: "Analizar la distribución porcentual de los gastos mensuales de un hogar con un presupuesto de $2,000: Vivienda = 50%, Alimentos = 25%, Transporte = 15%, Ahorro = 10%.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El diagrama circular representa las partes de un todo, de forma proporcional al porcentaje (100% total) de cada sector."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "Si el presupuesto mensual total del hogar es de $2,000, ¿cuánto dinero se destina mensualmente para Ahorro?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center items-center gap-6" },
                    React.createElement("svg", { viewBox: "0 0 100 100", className: "w-20 h-20 shrink-0" },
                        React.createElement("path", { d: "M 50 50 L 50 10 A 40 40 0 0 1 50 90 Z", fill: "#10b981" }),
                        React.createElement("path", { d: "M 50 50 L 50 90 A 40 40 0 0 1 10 50 Z", fill: "#3b82f6" }),
                        React.createElement("path", { d: "M 50 50 L 10 50 A 40 40 0 0 1 26.5 17.6 Z", fill: "#8b5cf6" }),
                        React.createElement("path", { d: "M 50 50 L 26.5 17.6 A 40 40 0 0 1 50 10 Z", fill: "#f59e0b" })
                    ),
                    React.createElement("ul", { className: "text-[10px] space-y-1 font-semibold text-slate-600 text-left" },
                        React.createElement("li", { className: "flex items-center gap-1.5" },
                            React.createElement("div", { className: "w-2.5 h-2.5 rounded-sm bg-emerald-500" }), "Vivienda (50%)"
                        ),
                        React.createElement("li", { className: "flex items-center gap-1.5" },
                            React.createElement("div", { className: "w-2.5 h-2.5 rounded-sm bg-blue-500" }), "Alimentos (25%)"
                        ),
                        React.createElement("li", { className: "flex items-center gap-1.5" },
                            React.createElement("div", { className: "w-2.5 h-2.5 rounded-sm bg-purple-500" }), "Transporte (15%)"
                        ),
                        React.createElement("li", { className: "flex items-center gap-1.5" },
                            React.createElement("div", { className: "w-2.5 h-2.5 rounded-sm bg-amber-500" }), "Ahorro (10%)"
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) $10"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) $100"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) $200"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) $500")
                    )
                )
            ),
                    resultado: "Opción Correcta: C ($200). Explicación: Multiplica el presupuesto total ($2,000) por el porcentaje de Ahorro (10% = 0.10): 2,000 x 0.10 = $200."
                },
                {
                    titulo: "Tabla de Doble Entrada: Frecuencias Cruzadas",
                    situacion: "Organizar y cruzar los datos del estado físico de tres sustancias químicas tras calentarlas de 20°C a 100°C.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "La tabla de doble entrada organiza y cruza frecuencias o condiciones de dos variables de forma simultánea (filas vs columnas)."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "¿Qué sustancia química no sufrió cambios en su estado físico tras calentarse de 20°C a 100°C?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "w-full bg-white rounded-lg border border-slate-200 shadow-sm p-2" },
                    React.createElement("table", { className: "w-full text-xs text-left border-collapse font-sans" },
                        React.createElement("thead", null,
                            React.createElement("tr", { className: "bg-slate-100 text-slate-700 border-b border-slate-200 font-bold" },
                                React.createElement("th", { className: "p-1.5" }, "Sustancia"),
                                React.createElement("th", { className: "p-1.5 text-center" }, "20°C"),
                                React.createElement("th", { className: "p-1.5 text-center" }, "100°C")
                            )
                        ),
                        React.createElement("tbody", null,
                            React.createElement("tr", { className: "border-b border-slate-100" },
                                React.createElement("td", { className: "p-1.5 font-semibold text-slate-800 bg-slate-50/50" }, "Alfa-1"),
                                React.createElement("td", { className: "p-1.5 text-center font-medium" }, "S"),
                                React.createElement("td", { className: "p-1.5 text-center text-emerald-600 font-bold" }, "L")
                            ),
                            React.createElement("tr", { className: "border-b border-slate-100" },
                                React.createElement("td", { className: "p-1.5 font-semibold text-slate-800 bg-slate-50/50" }, "Beta-2"),
                                React.createElement("td", { className: "p-1.5 text-center font-medium" }, "L"),
                                React.createElement("td", { className: "p-1.5 text-center text-blue-600 font-bold" }, "G")
                            ),
                            React.createElement("tr", null,
                                React.createElement("td", { className: "p-1.5 font-semibold text-slate-800 bg-slate-50/50" }, "Gamma-3"),
                                React.createElement("td", { className: "p-1.5 text-center font-medium" }, "S"),
                                React.createElement("td", { className: "p-1.5 text-center text-slate-700 font-bold" }, "S")
                            )
                        )
                    ),
                    React.createElement("div", { className: "text-[10px] text-slate-500 mt-2 pt-1.5 border-t border-slate-100 text-center font-sans" },
                        "Leyenda: S = Sólido | L = Líquido | G = Gas"
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) Alfa-1"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) Beta-2"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) Gamma-3"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) Todas cambiaron")
                    )
                )
            ),
                    resultado: "Opción Correcta: C (Gamma-3). Explicación: Compara el estado a 20°C con 100°C en la fila de Gamma-3; permanece en estado 'S' (Sólido) en ambas columnas."
                },
                {
                    titulo: "Diagrama de Dispersión: Relaciones y Correlaciones",
                    situacion: "Evaluar la relación entre las horas semanales de videojuegos jugados por un estudiante y su puntaje obtenido en el examen final.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El diagrama de dispersión representa la relación entre dos variables en un plano de puntos cartesianos para evaluar si existe correlación."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "Según la tendencia general del gráfico, ¿qué relación existe entre las horas de videojuegos y el puntaje obtenido?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Puntaje Examen"),
                        React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Horas Videojuegos"),
                        React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                        React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "25"),
                        React.createElement("text", { x: "18", y: "62", fontSize: "6", textAnchor: "end" }, "50"),
                        React.createElement("text", { x: "18", y: "42", fontSize: "6", textAnchor: "end" }, "75"),
                        React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "100"),
                        React.createElement("line", { x1: "35", y1: "25", x2: "175", y2: "95", stroke: "#fca5a5", strokeWidth: "2", strokeDasharray: "3 3" }),
                        React.createElement("circle", { cx: "35", cy: "30", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "45", cy: "25", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "50", cy: "40", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "60", cy: "35", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "75", cy: "45", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "80", cy: "50", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "95", cy: "60", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "105", cy: "55", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "120", cy: "65", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "130", cy: "75", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "145", cy: "70", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "155", cy: "80", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "170", cy: "90", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("circle", { cx: "175", cy: "85", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                        React.createElement("text", { x: "35", y: "112", fontSize: "6", textAnchor: "middle" }, "0"),
                        React.createElement("text", { x: "70", y: "112", fontSize: "6", textAnchor: "middle" }, "5"),
                        React.createElement("text", { x: "105", y: "112", fontSize: "6", textAnchor: "middle" }, "10"),
                        React.createElement("text", { x: "140", y: "112", fontSize: "6", textAnchor: "middle" }, "15"),
                        React.createElement("text", { x: "175", y: "112", fontSize: "6", textAnchor: "middle" }, "20")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) Relación positiva"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) Relación negativa"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) No hay relación"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) Relación constante")
                    )
                )
            ),
                    resultado: "Opción Correcta: B (Relación negativa). Explicación: La línea de tendencia desciende; a mayores horas de juego (eje X), disminuye el puntaje (eje Y)."
                },
                {
                    titulo: "Pictograma: Conteo por Iconos Representativos",
                    situacion: "Visualizar la cantidad de alumnos en talleres extracurriculares: Ajedrez (20 alumnos) y Robótica (40 alumnos), donde cada icono de estrella representa 10 alumnos.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El pictograma representa cantidades mediante figuras alusivas, donde cada figura tiene un valor definido en la convención."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "Con base en el pictograma de talleres extracurriculares, ¿cuántos estudiantes están inscritos en Robótica?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "w-full bg-white rounded-xl shadow-sm border border-slate-200 p-3" },
                    React.createElement("div", { className: "text-center mb-3 pb-1.5 border-b border-slate-100" },
                        React.createElement("span", { className: "text-[9px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5" }, "Convención"),
                        React.createElement("div", { className: "inline-flex items-center gap-1.5 bg-amber-50 px-2 py-0.5 rounded border border-amber-100" },
                            React.createElement("span", { className: "material-icons-round text-amber-500", style: { fontSize: "14px", verticalAlign: "middle" } }, "star"),
                            React.createElement("span", { className: "text-[11px] font-bold text-slate-700" }, "= 10 Estudiantes")
                        )
                    ),
                    React.createElement("div", { className: "space-y-2.5" },
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("span", { className: "w-14 text-xs font-bold text-slate-600 text-right" }, "Ajedrez"),
                            React.createElement("div", { className: "flex gap-0.5 text-amber-500" },
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star"),
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star")
                            )
                        ),
                        React.createElement("div", { className: "flex items-center gap-3" },
                            React.createElement("span", { className: "w-14 text-xs font-bold text-slate-600 text-right" }, "Robótica"),
                            React.createElement("div", { className: "flex gap-0.5 text-amber-500" },
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star"),
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star"),
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star"),
                                React.createElement("span", { className: "material-icons-round", style: { fontSize: "14px" } }, "star")
                            )
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) 4 alumnos"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) 10 alumnos"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) 40 alumnos"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) 400 alumnos")
                    )
                )
            ),
                    resultado: "Opción Correcta: C (40 alumnos). Explicación: Robótica tiene 4 estrellas. Como 1 estrella = 10 alumnos, operamos: 4 x 10 = 40."
                },
                {
                    titulo: "Histograma: Distribución de Intervalos Continuos",
                    situacion: "Analizar la distribución de notas obtenidas por 50 estudiantes en un examen agrupadas en intervalos de clase, donde el límite de aprobación es 3.0.",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "El histograma muestra frecuencias de datos agrupados en intervalos de clase continuos mediante barras adyacentes."),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "Si la nota mínima aprobatoria es 3.0, ¿cuántos estudiantes lograron aprobar el examen final?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "70", x2: "185", y2: "70", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Estudiantes"),
                        React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Notas"),
                        React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                        React.createElement("text", { x: "18", y: "70", fontSize: "6", textAnchor: "end" }, "10"),
                        React.createElement("text", { x: "18", y: "40", fontSize: "6", textAnchor: "end" }, "20"),
                        React.createElement("rect", { x: "25", y: "85", width: "35", height: "15", fill: "#fb7185", stroke: "#e11d48", strokeWidth: "1" }),
                        React.createElement("text", { x: "42.5", y: "80", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "5"),
                        React.createElement("rect", { x: "60", y: "55", width: "35", height: "45", fill: "#f43f5e", stroke: "#be123c", strokeWidth: "1" }),
                        React.createElement("text", { x: "77.5", y: "50", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "15"),
                        React.createElement("rect", { x: "95", y: "40", width: "35", height: "60", fill: "#3b82f6", stroke: "#1d4ed8", strokeWidth: "1" }),
                        React.createElement("text", { x: "112.5", y: "35", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "20"),
                        React.createElement("rect", { x: "130", y: "70", width: "35", height: "30", fill: "#10b981", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("text", { x: "147.5", y: "65", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "10"),
                        React.createElement("line", { x1: "95", y1: "15", x2: "95", y2: "100", stroke: "#e11d48", strokeWidth: "1.5", strokeDasharray: "3 3" }),
                        React.createElement("text", { x: "98", y: "25", fontSize: "6", fill: "#be123c", fontWeight: "bold" }, "Aprobación (3.0)"),
                        React.createElement("text", { x: "25", y: "112", fontSize: "6", textAnchor: "middle" }, "0.0"),
                        React.createElement("text", { x: "60", y: "112", fontSize: "6", textAnchor: "middle" }, "1.5"),
                        React.createElement("text", { x: "95", y: "112", fontSize: "6", textAnchor: "middle" }, "3.0"),
                        React.createElement("text", { x: "130", y: "112", fontSize: "6", textAnchor: "middle" }, "4.5"),
                        React.createElement("text", { x: "165", y: "112", fontSize: "6", textAnchor: "middle" }, "5.0")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) 15 estudiantes"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) 20 estudiantes"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) 35 estudiantes"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) 50 estudiantes")
                    )
                )
            ),
                    resultado: "Opción Correcta: C (35 estudiantes). Explicación: Sumamos las frecuencias de las calificaciones mayores o iguales a 3.0: [3.0-4.0] = 20 estudiantes y [4.0-5.0] = 15 estudiantes, lo que da un total de 35 aprobados."
                },
            ],
            preguntas: [
                {
            type: "extraer",
            question: "Observa el gráfico de barras sobre préstamos. ¿Cuántos libros del género 'Historia' se prestaron el mes pasado?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Cantidad"),
                    React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Géneros"),
                    React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                    React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "100"),
                    React.createElement("text", { x: "18", y: "62", fontSize: "6", textAnchor: "end" }, "200"),
                    React.createElement("text", { x: "18", y: "42", fontSize: "6", textAnchor: "end" }, "300"),
                    React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "400"),
                    React.createElement("rect", { x: "35", y: "70", width: "25", height: "30", fill: "#34d399", stroke: "#059669", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("rect", { x: "85", y: "40", width: "25", height: "60", fill: "#3b82f6", stroke: "#1d4ed8", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("rect", { x: "135", y: "60", width: "25", height: "40", fill: "#2dd4bf", stroke: "#0f766e", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "47.5", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "C. Ficción"),
                    React.createElement("text", { x: "97.5", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Historia"),
                    React.createElement("text", { x: "147.5", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Clásica")
                )
            ),
            options: ["150 libros", "200 libros", "300 libros", "400 libros"],
            correct: 2,
            feedback: "¡Excelente! Extraer información relevante implica ubicar la categoría 'Historia' en el Eje X (horizontal) y cruzarla con su altura en el Eje Y (vertical) para obtener 300."
        },
{
            type: "interpretar",
            question: "Analiza el gráfico de líneas. ¿En qué horario se registró la temperatura máxima?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "50", x2: "185", y2: "50", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Temp (°C)"),
                    React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Hora"),
                    React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0°"),
                    React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "10°"),
                    React.createElement("text", { x: "18", y: "52", fontSize: "6", textAnchor: "end" }, "20°"),
                    React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "30°"),
                    React.createElement("polyline", { points: "45,80 90,50 135,20 180,35", fill: "none", stroke: "#f43f5e", strokeWidth: "2", strokeLinecap: "round" }),
                    React.createElement("circle", { cx: "45", cy: "80", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                    React.createElement("circle", { cx: "90", cy: "50", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                    React.createElement("circle", { cx: "135", cy: "20", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                    React.createElement("circle", { cx: "180", cy: "35", r: "3", fill: "#be123c", stroke: "#ffffff", strokeWidth: "1" }),
                    React.createElement("text", { x: "45", y: "112", fontSize: "7", textAnchor: "middle" }, "08:00"),
                    React.createElement("text", { x: "90", y: "112", fontSize: "7", textAnchor: "middle" }, "10:00"),
                    React.createElement("text", { x: "135", y: "112", fontSize: "7", textAnchor: "middle" }, "12:00"),
                    React.createElement("text", { x: "180", y: "112", fontSize: "7", textAnchor: "middle" }, "14:00")
                )
            ),
            options: ["08:00", "10:00", "12:00", "14:00"],
            correct: 2,
            feedback: "¡Muy bien! Interpretar gráficas de líneas implica encontrar el 'pico' más alto de la línea y ver a qué punto en la base (Eje X) corresponde. El pico está en las 12:00."
        },
{
            type: "transformar",
            question: "Observa el gráfico circular. Si el ingreso total es de $2,000, ¿qué cantidad de dinero representa el sector 'Ahorro'?",
            visual: React.createElement("div", { className: "flex justify-center items-center gap-6 mb-6 mt-4 p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full max-w-sm mx-auto" },
                React.createElement("svg", { viewBox: "0 0 100 100", className: "w-24 h-24 shrink-0" },
                    React.createElement("path", { d: "M 50 50 L 50 10 A 40 40 0 0 1 50 90 Z", fill: "#10b981" }),
                    React.createElement("path", { d: "M 50 50 L 50 90 A 40 40 0 0 1 10 50 Z", fill: "#3b82f6" }),
                    React.createElement("path", { d: "M 50 50 L 10 50 A 40 40 0 0 1 26.5 17.6 Z", fill: "#8b5cf6" }),
                    React.createElement("path", { d: "M 50 50 L 26.5 17.6 A 40 40 0 0 1 50 10 Z", fill: "#f59e0b" })
                ),
                React.createElement("ul", { className: "text-xs space-y-1.5 font-semibold text-slate-600 text-left" },
                    React.createElement("li", { className: "flex items-center gap-2" },
                        React.createElement("div", { className: "w-3 h-3 rounded-sm bg-emerald-500" }), "Vivienda (50%)"
                    ),
                    React.createElement("li", { className: "flex items-center gap-2" },
                        React.createElement("div", { className: "w-3 h-3 rounded-sm bg-blue-500" }), "Alimentos (25%)"
                    ),
                    React.createElement("li", { className: "flex items-center gap-2" },
                        React.createElement("div", { className: "w-3 h-3 rounded-sm bg-purple-500" }), "Transporte (15%)"
                    ),
                    React.createElement("li", { className: "flex items-center gap-2" },
                        React.createElement("div", { className: "w-3 h-3 rounded-sm bg-amber-500" }), "Ahorro (10%)"
                    )
                )
            ),
            options: ["$10", "$100", "$200", "$500"],
            correct: 2,
            feedback: "¡Correcto! Transformar implica aplicar la proporción al total. Según la leyenda, el ahorro es el 10% del gráfico. El 10% de $2,000 es $200."
        },
{
            type: "comprender",
            question: "Basado en la siguiente tabla de reacciones químicas, ¿cuál sustancia NO cambió de estado al ser calentada a 100°C?",
            visual: React.createElement("div", { className: "w-full mb-2 mt-4 bg-white rounded-lg border border-slate-200 shadow-sm p-2" },
                React.createElement("table", { className: "w-full text-xs text-left border-collapse font-sans" },
                    React.createElement("thead", null,
                        React.createElement("tr", { className: "bg-slate-100 text-slate-700 border-b border-slate-200 font-bold" },
                            React.createElement("th", { className: "p-1.5" }, "Sustancia"),
                            React.createElement("th", { className: "p-1.5 text-center" }, "20°C"),
                            React.createElement("th", { className: "p-1.5 text-center" }, "100°C")
                        )
                    ),
                    React.createElement("tbody", null,
                        React.createElement("tr", { className: "border-b border-slate-100" },
                            React.createElement("td", { className: "p-1.5 font-semibold text-slate-800" }, "Alfa-1"),
                            React.createElement("td", { className: "p-1.5 text-center font-medium" }, "S"),
                            React.createElement("td", { className: "p-1.5 text-center text-emerald-600 font-bold" }, "L")
                        ),
                        React.createElement("tr", { className: "border-b border-slate-100" },
                            React.createElement("td", { className: "p-1.5 font-semibold text-slate-800" }, "Beta-2"),
                            React.createElement("td", { className: "p-1.5 text-center font-medium" }, "L"),
                            React.createElement("td", { className: "p-1.5 text-center text-blue-600 font-bold" }, "G")
                        ),
                        React.createElement("tr", null,
                            React.createElement("td", { className: "p-1.5 font-semibold text-slate-800" }, "Gamma-3"),
                            React.createElement("td", { className: "p-1.5 text-center font-medium" }, "S"),
                            React.createElement("td", { className: "p-1.5 text-center text-slate-700 font-bold" }, "S")
                        )
                    )
                ),
                React.createElement("div", { className: "text-[10px] text-slate-500 mt-2 pt-1.5 border-t border-slate-100 text-center font-sans" },
                    "Leyenda: S = Sólido | L = Líquido | G = Gas"
                )
            ),
            options: ["Sustancia Alfa-1", "Sustancia Beta-2", "Sustancia Gamma-3", "Todas cambiaron de estado"],
            correct: 2,
            feedback: "¡Perfecto! Al comprender la tabla y comparar la columna inicial (20°C) con la final (100°C), vemos que Gamma-3 permaneció sólida en ambos casos."
        },
{
            type: "interpretar",
            question: "Este diagrama de dispersión muestra las 'Horas jugadas de videojuegos por semana' (Eje X) vs el 'Puntaje en el examen final' (Eje Y). ¿Qué interpretación es correcta?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Puntaje Examen"),
                    React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Horas Videojuegos"),
                    React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                    React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "25"),
                    React.createElement("text", { x: "18", y: "62", fontSize: "6", textAnchor: "end" }, "50"),
                    React.createElement("text", { x: "18", y: "42", fontSize: "6", textAnchor: "end" }, "75"),
                    React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "100"),
                    React.createElement("line", { x1: "35", y1: "25", x2: "175", y2: "95", stroke: "#fca5a5", strokeWidth: "2", strokeDasharray: "3 3" }),
                    React.createElement("circle", { cx: "35", cy: "30", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "45", cy: "25", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "50", cy: "40", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "60", cy: "35", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "75", cy: "45", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "80", cy: "50", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "95", cy: "60", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "105", cy: "55", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "120", cy: "65", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "130", cy: "75", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "145", cy: "70", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "155", cy: "80", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "170", cy: "90", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("circle", { cx: "175", cy: "85", r: "2.5", fill: "#8b5cf6", stroke: "#ffffff", strokeWidth: "0.5" }),
                    React.createElement("text", { x: "35", y: "112", fontSize: "6", textAnchor: "middle" }, "0"),
                    React.createElement("text", { x: "70", y: "112", fontSize: "6", textAnchor: "middle" }, "5"),
                    React.createElement("text", { x: "105", y: "112", fontSize: "6", textAnchor: "middle" }, "10"),
                    React.createElement("text", { x: "140", y: "112", fontSize: "6", textAnchor: "middle" }, "15"),
                    React.createElement("text", { x: "175", y: "112", fontSize: "6", textAnchor: "middle" }, "20")
                )
            ),
            options: [
                "A mayor cantidad de horas de juego, mayor es el puntaje obtenido.",
                "Existe una correlación negativa: más horas de juego se asocian a un menor puntaje.",
                "Las horas de juego no afectan en absoluto el puntaje del examen.",
                "Todos los estudiantes aprobaron el examen sin importar cuánto jugaron."
            ],
            correct: 1,
            feedback: "¡Exacto! La 'nube' de puntos desciende de izquierda a derecha. Esto significa que a medida que avanza el Eje X (más juegos), disminuye el Eje Y (menos puntaje), creando una correlación negativa."
        },
{
            type: "extraer",
            question: "Observa el pictograma de estudiantes inscritos en cursos extracurriculares. ¿Cuántos estudiantes están inscritos en 'Robótica'?",
            visual: React.createElement("div", { className: "w-full max-w-sm mx-auto mb-6 mt-4 p-3 bg-white rounded-xl shadow-sm border border-slate-200 font-sans" },
                React.createElement("div", { className: "text-center mb-4 pb-2 border-b border-slate-100" },
                    React.createElement("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1" }, "Convención"),
                    React.createElement("div", { className: "inline-flex items-center gap-2 bg-amber-50 px-3 py-1 rounded-md border border-amber-100" },
                        React.createElement("span", { className: "material-icons-round text-amber-500", style: { fontSize: "16px", verticalAlign: "middle" } }, "star"),
                        React.createElement("span", { className: "text-xs font-bold text-slate-700" }, "= 10 Estudiantes")
                    )
                ),
                React.createElement("div", { className: "space-y-3" },
                    React.createElement("div", { className: "flex items-center gap-3" },
                        React.createElement("span", { className: "w-14 text-xs font-bold text-slate-600 text-right" }, "Ajedrez"),
                        React.createElement("div", { className: "flex gap-0.5 text-amber-500" },
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star"),
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star")
                        )
                    ),
                    React.createElement("div", { className: "flex items-center gap-3" },
                        React.createElement("span", { className: "w-14 text-xs font-bold text-slate-600 text-right" }, "Robótica"),
                        React.createElement("div", { className: "flex gap-0.5 text-amber-500" },
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star"),
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star"),
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star"),
                            React.createElement("span", { className: "material-icons-round", style: { fontSize: "16px" } }, "star")
                        )
                    )
                )
            ),
            options: ["4 estudiantes", "10 estudiantes", "40 estudiantes", "400 estudiantes"],
            correct: 2,
            feedback: "¡Muy bien! Extraer en pictogramas exige leer la convención primero. Si cada estrella vale 10, y Robótica tiene 4 estrellas, la operación es 4 x 10 = 40 estudiantes."
        },
{
            type: "interpretar",
            question: "Un histograma registra los puntajes de un grupo de estudiantes en una prueba de selección. Si la empresa contratante solo selecciona a aquellos que obtengan un puntaje igual o superior a 70 puntos, ¿cuántas personas califican para el puesto?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "25", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "20", y: "12", fontSize: "6", textAnchor: "start", fontWeight: "bold" }, "Estudiantes"),
                    React.createElement("text", { x: "180", y: "112", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Puntaje"),
                    React.createElement("text", { x: "18", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                    React.createElement("text", { x: "18", y: "82", fontSize: "6", textAnchor: "end" }, "5"),
                    React.createElement("text", { x: "18", y: "62", fontSize: "6", textAnchor: "end" }, "10"),
                    React.createElement("text", { x: "18", y: "42", fontSize: "6", textAnchor: "end" }, "15"),
                    React.createElement("text", { x: "18", y: "22", fontSize: "6", textAnchor: "end" }, "20"),
                    React.createElement("rect", { x: "30", y: "76", width: "35", height: "24", fill: "#cbd5e1", stroke: "#64748b", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "47.5", y: "71", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#475569" }, "8"),
                    React.createElement("rect", { x: "65", y: "64", width: "35", height: "36", fill: "#94a3b8", stroke: "#475569", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "82.5", y: "59", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#334155" }, "12"),
                    React.createElement("rect", { x: "100", y: "46", width: "35", height: "54", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "117.5", y: "41", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#6b21a8" }, "18"),
                    React.createElement("rect", { x: "135", y: "70", width: "35", height: "30", fill: "#a855f7", stroke: "#6b21a8", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "152.5", y: "65", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#581c87" }, "10"),
                    React.createElement("line", { x1: "100", y1: "15", x2: "100", y2: "100", stroke: "#ef4444", strokeWidth: "1.5", strokeDasharray: "3 3" }),
                    React.createElement("text", { x: "103", y: "25", fontSize: "6", fill: "#ef4444", fontWeight: "bold" }, "Corte (70 pts)"),
                    React.createElement("text", { x: "30", y: "112", fontSize: "6", textAnchor: "middle" }, "0"),
                    React.createElement("text", { x: "65", y: "112", fontSize: "6", textAnchor: "middle" }, "35"),
                    React.createElement("text", { x: "100", y: "112", fontSize: "6", textAnchor: "middle" }, "70"),
                    React.createElement("text", { x: "135", y: "112", fontSize: "6", textAnchor: "middle" }, "85"),
                    React.createElement("text", { x: "170", y: "112", fontSize: "6", textAnchor: "middle" }, "100")
                )
            ),
            options: ["10 personas", "18 personas", "28 personas", "48 personas"],
            correct: 2,
            feedback: "¡Excelente! Para calificar, los aspirantes deben obtener un puntaje de 70 o más. Sumamos las frecuencias de los intervalos que cumplen esta condición: el rango [70, 85) con 18 personas y el rango [85, 100] con 10 personas, dando 18 + 10 = 28 personas seleccionadas."
        }
            ]
        },
        "mat_mod_2": {
            id: "mat_mod_2",
            title: "Módulo 2: Aritmética: Fracciones",
            description: "Operaciones básicas y representación con números racionales y fraccionarios.",
            icon: "percent",
            theme: "emerald",
            introduccion: {
                pilarTitulo: "Pilares del Razonamiento Racional",
                pilares: [
                    "Interpretación del numerador y denominador en contextos de repartición.",
                    "Identificación de fracciones equivalentes mediante amplificación y simplificación.",
                    "Operaciones básicas (+, -, *, /) con fracciones homogéneas y heterogéneas.",
                    "Resolución de problemas de herencia, recetas y partes de un todo.",
                ],
                deseaPintarText: "Aprenderás a operar con números racionales y fracciones de manera intuitiva y procedimental. Desarrollarás agilidad para resolver problemas que involucran divisiones de porciones y sumas parciales."
            },
            teoria: [
                {
                    titulo: "Representación y Tipos de Fracciones",
                    situacion: "En una pizzería se divide una pizza familiar en 8 rebanadas iguales y un cliente se come 5 de ellas. ¿Qué porción de la pizza quedó?",
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "Una fracción representa la división de un todo en partes iguales. El denominador indica el total de partes y el numerador las partes tomadas. Si el numerador es menor que el denominador, la fracción es propia (menor que 1). Si es mayor, es impropia."),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "Si una pizza se divide en 8 porciones iguales y se consumen 5 de ellas, ¿cuál es la fracción correspondiente a la porción restante?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-44" },
                        React.createElement("circle", { cx: "100", cy: "60", r: "45", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1.5" }),
                        React.createElement("path", { d: "M 100 60 L 145 60 A 45 45 0 0 1 131.8 91.8 Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.8" }),
                        React.createElement("path", { d: "M 100 60 L 131.8 91.8 A 45 45 0 0 1 100 105 Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.8" }),
                        React.createElement("path", { d: "M 100 60 L 100 105 A 45 45 0 0 1 68.2 91.8 Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.8" }),
                        React.createElement("path", { d: "M 100 60 L 68.2 91.8 A 45 45 0 0 1 55 60 Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.8" }),
                        React.createElement("path", { d: "M 100 60 L 55 60 A 45 45 0 0 1 68.2 28.2 Z", fill: "#e2e8f0", stroke: "#94a3b8", strokeWidth: "0.8" }),
                        React.createElement("path", { d: "M 100 60 L 68.2 28.2 A 45 45 0 0 1 100 15 Z", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("path", { d: "M 100 60 L 100 15 A 45 45 0 0 1 131.8 28.2 Z", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("path", { d: "M 100 60 L 131.8 28.2 A 45 45 0 0 1 145 60 Z", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("g", {},
                            React.createElement("text", { x: "148", y: "85", fontSize: "7", fill: "#64748b", fontWeight: "bold" }, "Consumido:"),
                            React.createElement("g", { transform: "translate(192, 83)" },
                                React.createElement("text", { x: "0", y: "-3", fontSize: "7", fill: "#64748b", fontWeight: "bold", textAnchor: "middle" }, "5"),
                                React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#64748b", strokeWidth: "0.6" }),
                                React.createElement("text", { x: "0", y: "5", fontSize: "7", fill: "#64748b", fontWeight: "bold", textAnchor: "middle" }, "8")
                            )
                        ),
                        React.createElement("g", {},
                            React.createElement("text", { x: "32", y: "30", fontSize: "7", fill: "#059669", fontWeight: "bold" }, "Sobró:"),
                            React.createElement("g", { transform: "translate(62, 28)" },
                                React.createElement("text", { x: "0", y: "-3", fontSize: "7", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "3"),
                                React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#059669", strokeWidth: "0.6" }),
                                React.createElement("text", { x: "0", y: "5", fontSize: "7", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "8")
                            )
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) ", Frac("5", "8")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) ", Frac("3", "8")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) ", Frac("8", "5")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) ", Frac("8", "3"))
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: La pizza entera es 1 unidad. Restamos la porción consumida:"),
                React.createElement("div", { className: "flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20" },
                    Frac("8", "8"),
                    " - ",
                    Frac("5", "8"),
                    " = ",
                    Frac("8 - 5", "8"),
                    " = ",
                    Frac("3", "8")
                )
            )
                },
                {
                    titulo: "Fracciones Equivalentes y Simplificación",
                    situacion: React.createElement("span", {},
                "Dos estudiantes compran cartulinas iguales. El primero usa dos cuartos (",
                Frac("2", "4"),
                ") de su cartulina y el segundo usa cuatro octavos (",
                Frac("4", "8"),
                ") de la suya. ¿Quién usó más cartulina?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "Dos fracciones son equivalentes si representan el mismo valor numérico o la misma porción de un entero. Se pueden obtener amplificando (multiplicando numerador y denominador por el mismo número) o simplificando (dividiendo)."),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "¿Qué relación existe entre el área usada por el primer estudiante y el segundo estudiante?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex flex-col gap-3 items-center" },
                    React.createElement("div", { className: "w-full flex items-center gap-2" },
                        React.createElement("span", { className: "w-10 text-[10px] font-bold text-slate-500" }, Frac("2", "4")),
                        React.createElement("svg", { viewBox: "0 0 160 20", className: "w-36 h-6 border rounded" },
                            React.createElement("rect", { x: "0", y: "0", width: "40", height: "20", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "40", y: "0", width: "40", height: "20", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "80", y: "0", width: "40", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "120", y: "0", width: "40", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" })
                        )
                    ),
                    React.createElement("div", { className: "w-full flex items-center gap-2" },
                        React.createElement("span", { className: "w-10 text-[10px] font-bold text-slate-500" }, Frac("4", "8")),
                        React.createElement("svg", { viewBox: "0 0 160 20", className: "w-36 h-6 border rounded" },
                            React.createElement("rect", { x: "0", y: "0", width: "20", height: "20", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "20", y: "0", width: "20", height: "20", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "40", y: "0", width: "20", height: "20", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "60", y: "0", width: "20", height: "20", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "80", y: "0", width: "20", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "100", y: "0", width: "20", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "120", y: "0", width: "20", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" }),
                            React.createElement("rect", { x: "140", y: "0", width: "20", height: "20", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" })
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[10px] font-semibold text-slate-700 shadow-sm" }, "A) El primero usó más"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[10px] font-semibold text-slate-700 shadow-sm" }, "B) El segundo usó más"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[10px] font-semibold text-slate-700 shadow-sm" }, "C) Ambos usaron igual"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[10px] font-semibold text-slate-700 shadow-sm" }, "D) No se pueden comparar")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: C. Explicación: Simplificamos la fracción del segundo estudiante dividiendo entre 2 sucesivamente:"),
                React.createElement("div", { className: "flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20" },
                    Frac("4", "8"),
                    " = ",
                    Frac("4 ÷ 2", "8 ÷ 2"),
                    " = ",
                    Frac("2", "4"),
                    " = ",
                    Frac("2 ÷ 2", "4 ÷ 2"),
                    " = ",
                    Frac("1", "2")
                )
            )
                },
                {
                    titulo: "Suma de Fracciones Heterogéneas",
                    situacion: React.createElement("span", {},
                "Un agricultor siembra un tercio (",
                Frac("1", "3"),
                ") de su finca con maíz y dos quintos (",
                Frac("2", "5"),
                ") con papa. ¿Qué fracción total de la finca ha sembrado?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "Para sumar o restar fracciones heterogéneas (diferente denominador), debemos convertirlas a fracciones equivalentes con un denominador común. El denominador común suele ser el mínimo común múltiplo (m.c.m.) de los denominadores."),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" }, "¿Cuál es la fracción del terreno sembrada al sumar las porciones de maíz y papa?")
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-44" },
                        React.createElement("rect", { x: "25", y: "10", width: "150", height: "60", fill: "none", stroke: "#475569", strokeWidth: "1" }),
                        React.createElement("line", { x1: "55", y1: "10", x2: "55", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "85", y1: "10", x2: "85", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "115", y1: "10", x2: "115", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "145", y1: "10", x2: "145", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "25", y1: "30", x2: "175", y2: "30", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "25", y1: "50", x2: "175", y2: "50", stroke: "#cbd5e1" }),
                        React.createElement("rect", { x: "25", y: "10", width: "30", height: "20", fill: "#bae6fd", opacity: "0.7" }),
                        React.createElement("rect", { x: "55", y: "10", width: "30", height: "20", fill: "#bae6fd", opacity: "0.7" }),
                        React.createElement("rect", { x: "85", y: "10", width: "30", height: "20", fill: "#bae6fd", opacity: "0.7" }),
                        React.createElement("rect", { x: "115", y: "10", width: "30", height: "20", fill: "#bae6fd", opacity: "0.7" }),
                        React.createElement("rect", { x: "145", y: "10", width: "30", height: "20", fill: "#bae6fd", opacity: "0.7" }),
                        React.createElement("rect", { x: "25", y: "30", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("rect", { x: "55", y: "30", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("rect", { x: "85", y: "30", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("rect", { x: "115", y: "30", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("rect", { x: "145", y: "30", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("rect", { x: "25", y: "50", width: "30", height: "20", fill: "#fef08a", opacity: "0.7" }),
                        React.createElement("text", { x: "3", y: "22", fontSize: "5", fill: "#0284c7", fontWeight: "bold" }, "Maíz"),
                        React.createElement("g", { transform: "translate(8, 28)" },
                            React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "5"),
                            React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#0284c7", strokeWidth: "0.5" }),
                            React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "15")
                        ),
                        React.createElement("text", { x: "3", y: "45", fontSize: "5", fill: "#b45309", fontWeight: "bold" }, "Papa"),
                        React.createElement("g", { transform: "translate(8, 51)" },
                            React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "6"),
                            React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#b45309", strokeWidth: "0.5" }),
                            React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "15")
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) ", Frac("3", "8")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) ", Frac("3", "5")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) ", Frac("11", "15")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) ", Frac("2", "15"))
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: C. Explicación: Homogeneizamos las fracciones usando el m.c.m.(3, 5) = 15 y sumamos:"),
                React.createElement("div", { className: "flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20" },
                    Frac("1", "3"),
                    " + ",
                    Frac("2", "5"),
                    " = ",
                    Frac("5", "15"),
                    " + ",
                    Frac("6", "15"),
                    " = ",
                    Frac("5 + 6", "15"),
                    " = ",
                    Frac("11", "15")
                )
            )
                },
                {
                    titulo: "Multiplicación de Fracciones",
                    situacion: React.createElement("span", {},
                "Un tanque de agua contiene tres cuartos (",
                Frac("3", "4"),
                ") de su capacidad. Si se consumen dos tercios (",
                Frac("2", "3"),
                ") del agua disponible para regar, ¿qué fracción del total del tanque se usó?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "La multiplicación de fracciones permite calcular una fracción de otra fracción. Se realiza multiplicando en línea recta: numerador por numerador, y denominador por denominador."),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Al multiplicar ",
                        Frac("2", "3"),
                        " por ",
                        Frac("3", "4"),
                        " para hallar la porción del tanque total usada, ¿cuál es el resultado?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-44" },
                        React.createElement("rect", { x: "30", y: "10", width: "120", height: "60", fill: "none", stroke: "#475569", strokeWidth: "1" }),
                        React.createElement("line", { x1: "60", y1: "10", x2: "60", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "90", y1: "10", x2: "90", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("line", { x1: "120", y1: "10", x2: "120", y2: "70", stroke: "#cbd5e1" }),
                        React.createElement("rect", { x: "30", y: "10", width: "90", height: "60", fill: "#bae6fd", opacity: "0.5" }),
                        React.createElement("line", { x1: "30", y1: "30", x2: "150", y2: "30", stroke: "#cbd5e1", strokeDasharray: "1 1" }),
                        React.createElement("line", { x1: "30", y1: "50", x2: "150", y2: "50", stroke: "#cbd5e1", strokeDasharray: "1 1" }),
                        React.createElement("rect", { x: "30", y: "30", width: "90", height: "40", fill: "#818cf8", opacity: "0.7", stroke: "#4f46e5", strokeWidth: "1" }),
                        React.createElement("g", { transform: "translate(125, 25)" },
                            React.createElement("text", { x: "0", y: "0", fontSize: "5", fill: "#0284c7", fontWeight: "bold" }, "Tanque"),
                            React.createElement("g", { transform: "translate(22, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "3"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#0284c7", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "4")
                            )
                        ),
                        React.createElement("g", { transform: "translate(125, 45)" },
                            React.createElement("text", { x: "0", y: "0", fontSize: "5", fill: "#4f46e5", fontWeight: "bold" }, "Uso:"),
                            React.createElement("g", { transform: "translate(15, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#4f46e5", fontWeight: "bold", textAnchor: "middle" }, "2"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#4f46e5", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#4f46e5", fontWeight: "bold", textAnchor: "middle" }, "3")
                            ),
                            React.createElement("text", { x: "22", y: "0", fontSize: "5", fill: "#4f46e5", fontWeight: "bold" }, "de"),
                            React.createElement("g", { transform: "translate(33, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#4f46e5", fontWeight: "bold", textAnchor: "middle" }, "3"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#4f46e5", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#4f46e5", fontWeight: "bold", textAnchor: "middle" }, "4")
                            )
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) ", Frac("6", "7")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) ", Frac("1", "2")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) ", Frac("5", "12")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) ", Frac("2", "3"))
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: Calculamos el producto en línea recta y simplificamos:"),
                React.createElement("div", { className: "flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20" },
                    Frac("2", "3"),
                    " × ",
                    Frac("3", "4"),
                    " = ",
                    Frac("2 × 3", "3 × 4"),
                    " = ",
                    Frac("6", "12"),
                    " = ",
                    Frac("1", "2")
                )
            )
                },
                {
                    titulo: "División de Fracciones y Comparación",
                    situacion: React.createElement("span", {},
                "Se tienen tres medios (",
                Frac("3", "2"),
                ") kilogramos de café y se quieren empacar en bolsas de un cuarto (",
                Frac("1", "4"),
                ") de kilogramo. ¿Cuántas bolsas se pueden llenar?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" }, "La división de fracciones determina cuántas veces cabe una porción dentro de otra. Se resuelve multiplicando el numerador de la primera por el denominador de la segunda (extremos), y el denominador de la primera por el numerador de la segunda (medios)."),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Al dividir ",
                        Frac("3", "2"),
                        " kg entre ",
                        Frac("1", "4"),
                        " kg, ¿cuántas bolsas se obtienen en total?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "15", width: "30", height: "25", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("rect", { x: "40", y: "15", width: "30", height: "25", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("rect", { x: "70", y: "15", width: "30", height: "25", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("rect", { x: "100", y: "15", width: "30", height: "25", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                        React.createElement("rect", { x: "130", y: "15", width: "30", height: "25", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "1" }),
                        React.createElement("rect", { x: "160", y: "15", width: "30", height: "25", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "1" }),
                        React.createElement("g", { transform: "translate(55, 52)" },
                            React.createElement("text", { x: "0", y: "0", fontSize: "6", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "1 Entero ("),
                            React.createElement("g", { transform: "translate(28, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "4"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#059669", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "4")
                            ),
                            React.createElement("text", { x: "34", y: "0", fontSize: "6", fill: "#059669", fontWeight: "bold" }, ")")
                        ),
                        React.createElement("g", { transform: "translate(145, 52)" },
                            React.createElement("text", { x: "0", y: "0", fontSize: "6", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "1/2 Entero ("),
                            React.createElement("g", { transform: "translate(34, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "2"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#0284c7", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "4")
                            ),
                            React.createElement("text", { x: "40", y: "0", fontSize: "6", fill: "#0284c7", fontWeight: "bold" }, ")")
                        ),
                        React.createElement("g", { transform: "translate(123, 52)" },
                            React.createElement("g", { transform: "translate(3, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "1"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#0284c7", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "2")
                            ),
                            React.createElement("text", { x: "8", y: "0", fontSize: "6", fill: "#0284c7", fontWeight: "bold" }, " Entero ("),
                            React.createElement("g", { transform: "translate(38, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "2"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#0284c7", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "4")
                            ),
                            React.createElement("text", { x: "43", y: "0", fontSize: "6", fill: "#0284c7", fontWeight: "bold" }, ")")
                        ),
                        React.createElement("g", { transform: "translate(61, 9)" },
                            React.createElement("text", { x: "0", y: "0", fontSize: "6", fill: "#334155" }, "Total:"),
                            React.createElement("g", { transform: "translate(22, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "3"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#334155", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "2")
                            ),
                            React.createElement("text", { x: "28", y: "0", fontSize: "6", fill: "#334155" }, " (6 porciones de"),
                            React.createElement("g", { transform: "translate(74, -1)" },
                                React.createElement("text", { x: "0", y: "-2.5", fontSize: "5", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "1"),
                                React.createElement("line", { x1: "-3", y1: "-1", x2: "3", y2: "-1", stroke: "#334155", strokeWidth: "0.5" }),
                                React.createElement("text", { x: "0", y: "4", fontSize: "5", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "4")
                            ),
                            React.createElement("text", { x: "80", y: "0", fontSize: "6", fill: "#334155" }, ")")
                        )
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) 3 bolsas"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) 4 bolsas"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) 6 bolsas"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) 8 bolsas")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: C. Explicación: Dividimos aplicando la ley de extremos y medios:"),
                React.createElement("div", { className: "flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20" },
                    Frac("3", "2"),
                    " ÷ ",
                    Frac("1", "4"),
                    " = ",
                    Frac("3 × 4", "2 × 1"),
                    " = ",
                    Frac("12", "2"),
                    " = 6 bolsas"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Operaciones",
            question: React.createElement("span", {}, "En un salón de clases, ", Frac("1", "3"), " de los estudiantes prefiere fútbol, ", Frac("2", "5"), " prefiere baloncesto y el resto prefiere voleibol. ¿Qué fracción del salón prefiere voleibol?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 60", className: "w-48" },
                    React.createElement("rect", { x: "10", y: "15", width: "60", height: "30", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "2" }),
                    React.createElement("text", { x: "40", y: "25", fontSize: "7", fill: "#047857", fontWeight: "bold", textAnchor: "middle" }, "1"),
                    React.createElement("line", { x1: "35", y1: "28", x2: "45", y2: "28", stroke: "#047857", strokeWidth: "1" }),
                    React.createElement("text", { x: "40", y: "36", fontSize: "7", fill: "#047857", fontWeight: "bold", textAnchor: "middle" }, "3"),
                    React.createElement("text", { x: "40", y: "43", fontSize: "6", fill: "#047857", textAnchor: "middle" }, "Fútbol"),
                    React.createElement("rect", { x: "70", y: "15", width: "80", height: "30", fill: "#fef08a", stroke: "#d97706", strokeWidth: "2" }),
                    React.createElement("text", { x: "110", y: "25", fontSize: "7", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "2"),
                    React.createElement("line", { x1: "105", y1: "28", x2: "115", y2: "28", stroke: "#b45309", strokeWidth: "1" }),
                    React.createElement("text", { x: "110", y: "36", fontSize: "7", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "5"),
                    React.createElement("text", { x: "110", y: "43", fontSize: "6", fill: "#b45309", textAnchor: "middle" }, "Basquet"),
                    React.createElement("rect", { x: "150", y: "15", width: "40", height: "30", fill: "#fecdd3", stroke: "#e11d48", strokeWidth: "2", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "170", y: "34", fontSize: "10", fill: "#be123c", fontWeight: "bold", textAnchor: "middle" }, "?")
                )
            ),
            options: [Frac("4", "15"), Frac("11", "15"), Frac("7", "15"), Frac("2", "15")],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Sumamos las porciones ocupadas y restamos de la unidad (1) para obtener el resto:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    Frac("1", "3"),
                    " + ",
                    Frac("2", "5"),
                    " = ",
                    Frac("5 + 6", "15"),
                    " = ",
                    Frac("11", "15"),
                    "  ➔  1 - ",
                    Frac("11", "15"),
                    " = ",
                    Frac("4", "15")
                )
            )
        },
{
            type: "Comparación",
            question: React.createElement("span", {}, "¿Cuál de las siguientes fracciones es mayor que ", Frac("3", "4"), " y menor que ", Frac("5", "6"), "?"),
            visual: null,
            options: [Frac("7", "8"), Frac("2", "3"), Frac("4", "5"), Frac("11", "12")],
            correct: 2,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Convertimos las fracciones a decimales para comparar sus valores fácilmente:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    React.createElement("span", { className: "flex items-center" }, "Rango: ", Frac("3", "4"), " = 0.75 y ", Frac("5", "6"), " ≈ 0.83"),
                    React.createElement("span", { className: "text-slate-400" }, "|"),
                    React.createElement("span", { className: "flex items-center" }, "A) ", Frac("7", "8"), " = 0.875"),
                    React.createElement("span", { className: "flex items-center" }, "B) ", Frac("2", "3"), " ≈ 0.67"),
                    React.createElement("span", { className: "flex items-center font-bold text-emerald-800" }, "C) ", Frac("4", "5"), " = 0.80 (Correcto)"),
                    React.createElement("span", { className: "flex items-center" }, "D) ", Frac("11", "12"), " ≈ 0.92")
                )
            )
        },
{
            type: "Multiplicación",
            question: React.createElement("span", {}, "Un tanque de agua de 300 litros se encuentra lleno hasta las ", Frac("3", "4"), " partes. Si se consumen ", Frac("2", "5"), " del agua que contiene, ¿cuántos litros quedan en el tanque?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 100", className: "w-44" },
                    React.createElement("rect", { x: "70", y: "10", width: "60", height: "80", fill: "none", stroke: "#475569", strokeWidth: "2", rx: "3" }),
                    React.createElement("rect", { x: "71", y: "30", width: "58", height: "59", fill: "#bae6fd", opacity: "0.8" }),
                    React.createElement("line", { x1: "70", y1: "30", x2: "130", y2: "30", stroke: "#0284c7", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "70", y1: "50", x2: "130", y2: "50", stroke: "#475569", strokeWidth: "0.5", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "70", y1: "70", x2: "130", y2: "70", stroke: "#475569", strokeWidth: "0.5", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "138", y: "90", fontSize: "6", fill: "#475569" }, "Vacío (0)"),
                    React.createElement("text", { x: "138", y: "14", fontSize: "6", fill: "#475569" }, "Total: 300L"),
                    React.createElement("g", { transform: "translate(145, 30)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "3"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#0284c7", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#0284c7", fontWeight: "bold", textAnchor: "middle" }, "4"),
                        React.createElement("text", { x: "6", y: "2", fontSize: "6", fill: "#0284c7", fontWeight: "bold" }, "Lleno")
                    ),
                    React.createElement("g", { transform: "translate(100, 55)" },
                        React.createElement("text", { x: "0", y: "-4", fontSize: "7", fill: "#0369a1", fontWeight: "bold", textAnchor: "middle" }, "3"),
                        React.createElement("line", { x1: "-5", y1: "-1", x2: "5", y2: "-1", stroke: "#0369a1", strokeWidth: "0.8" }),
                        React.createElement("text", { x: "0", y: "6", fontSize: "7", fill: "#0369a1", fontWeight: "bold", textAnchor: "middle" }, "4")
                    )
                )
            ),
            options: ["135 litros", "90 litros", "225 litros", "112 litros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos el agua inicial y restamos la cantidad consumida:"),
                React.createElement("div", { className: "flex flex-col items-start justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    React.createElement("span", { className: "flex items-center" }, "1. Agua inicial: ", Frac("3", "4"), " de 300L = 225L"),
                    React.createElement("span", { className: "flex items-center" }, "2. Consumo: ", Frac("2", "5"), " de 225L = 90L"),
                    React.createElement("span", { className: "flex items-center font-bold" }, "3. Quedan: 225L - 90L = 135L")
                )
            )
        },
{
            type: "Suma y Resta",
            question: React.createElement("span", {}, "Camila gasta ", Frac("1", "4"), " de su sueldo en arriendo y ", Frac("3", "8"), " en alimentación. Si aún le quedan $600.000, ¿cuál es su sueldo total?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 100", className: "w-48" },
                    React.createElement("circle", { cx: "60", cy: "50", r: "35", fill: "#f1f5f9", stroke: "#cbd5e1", strokeWidth: "1.5" }),
                    React.createElement("path", { d: "M 60 50 L 60 15 A 35 35 0 0 1 95 50 Z", fill: "#fecdd3", stroke: "#e11d48", strokeWidth: "1" }),
                    React.createElement("path", { d: "M 60 50 L 95 50 A 35 35 0 0 1 35.2 74.7 Z", fill: "#fed7aa", stroke: "#ea580c", strokeWidth: "1" }),
                    React.createElement("path", { d: "M 60 50 L 35.2 74.7 A 35 35 0 0 1 60 15 Z", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1" }),
                    React.createElement("rect", { x: "110", y: "20", width: "8", height: "8", fill: "#fecdd3", stroke: "#e11d48" }),
                    React.createElement("text", { x: "122", y: "27", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, "Arriendo ("),
                    React.createElement("g", { transform: "translate(156, 26)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#e11d48", fontWeight: "bold", textAnchor: "middle" }, "1"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#e11d48", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#e11d48", fontWeight: "bold", textAnchor: "middle" }, "4")
                    ),
                    React.createElement("text", { x: "162", y: "27", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, ")"),
                    React.createElement("rect", { x: "110", y: "40", width: "8", height: "8", fill: "#fed7aa", stroke: "#ea580c" }),
                    React.createElement("text", { x: "122", y: "47", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, "Comida ("),
                    React.createElement("g", { transform: "translate(153, 46)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#ea580c", fontWeight: "bold", textAnchor: "middle" }, "3"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#ea580c", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#ea580c", fontWeight: "bold", textAnchor: "middle" }, "8")
                    ),
                    React.createElement("text", { x: "159", y: "47", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, ")"),
                    React.createElement("rect", { x: "110", y: "60", width: "8", height: "8", fill: "#a7f3d0", stroke: "#059669" }),
                    React.createElement("text", { x: "122", y: "67", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, "Queda ("),
                    React.createElement("g", { transform: "translate(151, 66)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "3"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#059669", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#059669", fontWeight: "bold", textAnchor: "middle" }, "8")
                    ),
                    React.createElement("text", { x: "157", y: "67", fontSize: "6", fill: "#475569", fontWeight: "semibold" }, ")"),
                    React.createElement("text", { x: "122", y: "76", fontSize: "6", fill: "#059669", fontWeight: "bold" }, "= $600.000")
                )
            ),
            options: ["$1.600.000", "$1.800.000", "$1.200.000", "$2.000.000"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Sumamos los gastos para hallar la porción restante y calcular el sueldo total:"),
                React.createElement("div", { className: "flex flex-col items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    React.createElement("span", { className: "flex items-center" }, "• Gasto: ", Frac("1", "4"), " + ", Frac("3", "8"), " = ", Frac("2", "8"), " + ", Frac("3", "8"), " = ", Frac("5", "8")),
                    React.createElement("span", { className: "flex items-center" }, "• Queda: ", Frac("8", "8"), " - ", Frac("5", "8"), " = ", Frac("3", "8"), " del sueldo ($600.000)"),
                    React.createElement("span", { className: "flex items-center" }, "• Si ", Frac("3", "8"), " = $600.000 ➔ ", Frac("1", "8"), " = $200.000"),
                    React.createElement("span", { className: "flex items-center font-bold" }, "• Sueldo total: 8 × $200.000 = $1.600.000")
                )
            )
        },
{
            type: "Multiplicación",
            question: React.createElement("span", {}, "En una receta de cocina, se necesitan ", Frac("2", "3"), " de taza de leche para hacer un pastel. Si se quiere preparar la mitad (", Frac("1", "2"), ") de la receta, ¿qué fracción de taza de leche se debe usar?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 100", className: "w-44" },
                    React.createElement("path", { d: "M 70 20 L 75 80 A 5 5 0 0 0 80 85 L 120 85 A 5 5 0 0 0 125 80 L 130 20 Z", fill: "none", stroke: "#475569", strokeWidth: "2" }),
                    React.createElement("path", { d: "M 130 30 L 145 35 L 145 65 L 127 70", fill: "none", stroke: "#475569", strokeWidth: "2" }),
                    React.createElement("line", { x1: "72", y1: "40", x2: "90", y2: "40", stroke: "#475569", strokeWidth: "1" }),
                    React.createElement("line", { x1: "73", y1: "62", x2: "90", y2: "62", stroke: "#475569", strokeWidth: "1" }),
                    React.createElement("path", { d: "M 71.6 40 L 75 80 A 5 5 0 0 0 80 85 L 120 85 A 5 5 0 0 0 125 80 L 128.4 40 Z", fill: "#fef08a", opacity: "0.8" }),
                    React.createElement("g", { transform: "translate(60, 40)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#475569", fontWeight: "bold", textAnchor: "middle" }, "2"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#475569", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#475569", fontWeight: "bold", textAnchor: "middle" }, "3")
                    ),
                    React.createElement("g", { transform: "translate(60, 62)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#475569", fontWeight: "bold", textAnchor: "middle" }, "1"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#475569", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#475569", fontWeight: "bold", textAnchor: "middle" }, "3")
                    ),
                    React.createElement("path", { d: "M 160 40 L 160 62", fill: "none", stroke: "#e11d48", strokeWidth: "1.5", markerEnd: "url(#arrow)" }),
                    React.createElement("text", { x: "165", y: "50", fontSize: "5", fill: "#e11d48", fontWeight: "bold" }, "La Mitad"),
                    React.createElement("g", { transform: "translate(175, 60)" },
                        React.createElement("text", { x: "0", y: "-3", fontSize: "6", fill: "#e11d48", fontWeight: "bold", textAnchor: "middle" }, "1"),
                        React.createElement("line", { x1: "-4", y1: "-1", x2: "4", y2: "-1", stroke: "#e11d48", strokeWidth: "0.6" }),
                        React.createElement("text", { x: "0", y: "5", fontSize: "6", fill: "#e11d48", fontWeight: "bold", textAnchor: "middle" }, "2")
                    )
                )
            ),
            options: [Frac("1", "3"), Frac("1", "6"), Frac("2", "5"), Frac("3", "4")],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Para hallar la mitad de una porción, multiplicamos las fracciones y simplificamos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    Frac("1", "2"),
                    " × ",
                    Frac("2", "3"),
                    " = ",
                    Frac("1 × 2", "2 × 3"),
                    " = ",
                    Frac("2", "6"),
                    " = ",
                    Frac("1", "3"),
                    " de taza"
                )
            )
        }
            ]
        },
        "mat_mod_3": {
            id: "mat_mod_3",
            title: "Módulo 3: Aritmética: Porcentajes",
            description: "Cálculo de porcentajes, variaciones y descuentos comerciales.",
            icon: "trending_up",
            theme: "violet",
            introduccion: {
                pilarTitulo: "Pilares del Razonamiento Porcentual",
                pilares: [
                    "Conversión fluida de porcentajes a fracciones de base 100 y números decimales.",
                    "Cálculo directo y proporcional de porcentajes en transacciones comerciales.",
                    "Cálculo de incrementos y descuentos porcentuales simples y sucesivos.",
                    "Determinación de la variación porcentual de datos en periodos de tiempo.",
                ],
                deseaPintarText: "Los porcentajes representan el tema más evaluado de la aritmética comercial en el ICFES. Este módulo te prepara para modelar y resolver de forma instantánea problemas de tasas de interés, IVA, inflación y descuentos."
            },
            teoria: [
                {
                    titulo: "Concepto de Porcentaje y Conversión",
                    situacion: React.createElement("span", {},
                "Una tienda de ropa anuncia que el ",
                "40%",
                " de su mercancía tiene descuento. ¿Cómo se expresa esta proporción en forma de fracción simplificada y número decimal?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un porcentaje representa una parte de un todo dividido en 100 partes iguales. Para convertir un porcentaje a fracción, lo colocamos sobre 100 y simplificamos. Para convertirlo a decimal, dividimos el número entre 100 (desplazando la coma dos lugares a la izquierda)."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "¿Qué fracción irreducible representa exactamente al 40%?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 50", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "15", width: "36", height: "20", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "46", y: "15", width: "36", height: "20", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "82", y: "15", width: "36", height: "20", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "118", y: "15", width: "36", height: "20", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "154", y: "15", width: "36", height: "20", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "46", y: "45", fontSize: "7", fill: "#7e22ce", fontWeight: "bold", textAnchor: "middle" }, "Sombreado: 40% (2/5)"),
                        React.createElement("text", { x: "146", y: "45", fontSize: "7", fill: "#64748b", fontWeight: "bold", textAnchor: "middle" }, "Sin sombrear: 60% (3/5)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) ", Frac("4", "10")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) ", Frac("2", "5")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) ", Frac("1", "5")),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) ", Frac("3", "5"))
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: Escribimos el porcentaje como fracción de 100 y dividimos numerador y denominador por su máximo común divisor (20):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "40%",
                    " = ",
                    Frac("40", "100"),
                    " = ",
                    Frac("40 ÷ 20", "100 ÷ 20"),
                    " = ",
                    Frac("2", "5"),
                    " = ",
                    "0.40"
                )
            )
                },
                {
                    titulo: "Cálculo Directo de Porcentajes",
                    situacion: React.createElement("span", {},
                "Una consola de videojuegos tiene un precio de $800.000. Por compras hoy, se ofrece un descuento inmediato del ",
                "15%",
                " sobre el precio de lista. ¿A cuánto dinero equivale este descuento?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para hallar el P% de una cantidad X, multiplicamos X por la fracción P/100, o por su representación decimal equivalente (0.01 × P). Este es el método directo de cálculo de porcentajes comerciales."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "¿Cuánto dinero ahorra el comprador con el descuento del 15%?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "15", width: "180", height: "20", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "163", y: "15", width: "27", height: "20", fill: "#f43f5e", stroke: "#be123c", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "85", y: "27", fontSize: "7", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "Pagas: 85% ($680.000)"),
                        React.createElement("text", { x: "176", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "15%"),
                        React.createElement("text", { x: "100", y: "47", fontSize: "7", fill: "#64748b", fontWeight: "bold", textAnchor: "middle" }, "Precio Total: $800.000")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) $80.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) $100.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) $120.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) $150.000")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: C. Explicación: Aplicamos la multiplicación del porcentaje directo sobre el total de la siguiente forma:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Ahorro",
                    " = ",
                    "800.000",
                    " × ",
                    Frac("15", "100"),
                    " = ",
                    "800.000",
                    " × ",
                    "0.15",
                    " = ",
                    "120.000 COP"
                )
            )
                },
                {
                    titulo: "Incrementos Porcentuales",
                    situacion: React.createElement("span", {},
                "Una factura de servicios públicos por un valor de $150.000 se paga de manera extemporánea. El reglamento impone un recargo por mora del ",
                "8%",
                ". ¿Cuál es el valor total que debe pagar el usuario?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un incremento porcentual suma el P% del valor original al valor original. Esto equivale a multiplicar el valor inicial por un factor multiplicador de (1 + P/100). En este caso, un incremento del 8% se calcula multiplicando por 1.08."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "¿Cuál es el monto final a pagar con el recargo incluido?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 65", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "10", width: "150", height: "15", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "85", y: "20", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "Base: 100% ($150.000)"),
                        React.createElement("rect", { x: "10", y: "35", width: "150", height: "15", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                        React.createElement("rect", { x: "160", y: "35", width: "12", height: "15", fill: "#f43f5e", stroke: "#be123c", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "85", y: "45", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "100%"),
                        React.createElement("text", { x: "166", y: "45", fontSize: "6", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "8%"),
                        React.createElement("text", { x: "180", y: "45", fontSize: "7", fill: "#be123c", fontWeight: "bold", textAnchor: "start" }, "$12.000")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) $158.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) $162.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) $165.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) $170.000")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: Calculamos multiplicando por el factor multiplicador correspondiente a un aumento del 8% (1.08):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Total",
                    " = ",
                    "150.000",
                    " × ",
                    "(1 + 0.08)",
                    " = ",
                    "150.000",
                    " × ",
                    "1.08",
                    " = ",
                    "162.000 COP"
                )
            )
                },
                {
                    titulo: "Descuentos Sucesivos y Multiplicación",
                    situacion: React.createElement("span", {},
                "Un abrigo cuesta $200.000 y cuenta con un descuento inicial del ",
                "20%",
                ". Si el cliente paga con la tarjeta exclusiva del almacén, se aplica un descuento adicional del ",
                "10%",
                " sobre el saldo ya rebajado. ¿Cuál es el precio final?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Los porcentajes de descuentos o aumentos sucesivos nunca se deben sumar directamente (20% + 10% ≠ 30%). Se aplican secuencialmente, lo que significa multiplicar los factores de descuento individuales: (1 - 0.20) × (1 - 0.10) = 0.80 × 0.90 = 0.72 (descuento real de 28%)."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "¿Cuál es el valor neto a pagar tras aplicar ambos descuentos en cadena?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "15", width: "45", height: "20", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "32.5", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$200.000"),
                        
                        React.createElement("line", { x1: "60", y1: "25", x2: "80", y2: "25", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("polyline", { points: "76,21 80,25 76,29", fill: "none", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "70", y: "17", fontSize: "6", fill: "#7e22ce", fontWeight: "bold", textAnchor: "middle" }, "-20%"),

                        React.createElement("rect", { x: "85", y: "15", width: "45", height: "20", fill: "#a855f7", stroke: "#6b21a8", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "107.5", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$160.000"),

                        React.createElement("line", { x1: "135", y1: "25", x2: "155", y2: "25", stroke: "#6b21a8", strokeWidth: "1.5" }),
                        React.createElement("polyline", { points: "151,21 155,25 151,29", fill: "none", stroke: "#6b21a8", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "145", y: "17", fontSize: "6", fill: "#6b21a8", fontWeight: "bold", textAnchor: "middle" }, "-10%"),

                        React.createElement("rect", { x: "160", y: "15", width: "35", height: "20", fill: "#10b981", stroke: "#059669", strokeWidth: "1", rx: "1" }),
                        React.createElement("text", { x: "177.5", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$144.000")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "A) $140.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "B) $144.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "C) $150.000"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm" }, "D) $160.000")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: Calculamos en cadena multiplicando consecutivamente por los factores residuales:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Precio Final",
                    " = ",
                    "200.000",
                    " × ",
                    "0.80",
                    " × ",
                    "0.90",
                    " = ",
                    "160.000",
                    " × ",
                    "0.90",
                    " = ",
                    "144.000 COP"
                )
            )
                },
                {
                    titulo: "Variación Porcentual (Cambio Porcentual)",
                    situacion: React.createElement("span", {},
                "El valor de una acción en la bolsa sube de $4.000 a $5.000 en el transcurso de una semana de operaciones. ¿Cuál fue la tasa porcentual de incremento del activo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La variación porcentual mide el cambio relativo respecto al valor inicial. Se calcula restando el valor inicial al final, dividiendo la diferencia obtenida entre el valor inicial, y multiplicando el resultado por 100%."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-500 uppercase tracking-wider block mb-1" }, "Pregunta de Ejemplo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "¿Qué porcentaje de aumento experimentó el precio de la acción?"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "50", x2: "175", y2: "50", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "20", x2: "175", y2: "20", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "25", y1: "55", x2: "175", y2: "55", stroke: "#334155", strokeWidth: "1.2" }),
                        React.createElement("polyline", { points: "50,50 150,20", fill: "none", stroke: "#8b5cf6", strokeWidth: "2" }),
                        React.createElement("circle", { cx: "50", cy: "50", r: "3", fill: "#7e22ce" }),
                        React.createElement("circle", { cx: "150", cy: "20", r: "3", fill: "#7e22ce" }),
                        React.createElement("text", { x: "50", y: "44", fontSize: "7", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "$4.000"),
                        React.createElement("text", { x: "150", y: "14", fontSize: "7", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "$5.000"),
                        React.createElement("text", { x: "100", y: "30", fontSize: "7", fill: "#7e22ce", fontWeight: "bold", textAnchor: "middle" }, "Cambio: +$1.000 (+25%)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Opciones de Respuesta"),
                    React.createElement("div", { className: "grid grid-cols-2 gap-2" },
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "A) 20%"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "B) 25%"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "C) 30%"),
                        React.createElement("div", { className: "p-2 bg-white rounded-lg border border-slate-100 text-[11px] font-semibold text-slate-700 shadow-sm flex items-center justify-center gap-1" }, "D) 50%")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Opción Correcta: B. Explicación: Aplicamos la fórmula de variación porcentual dividiendo el incremento entre el valor original:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Variación %",
                    " = ",
                    Frac("5.000 - 4.000", "4.000"),
                    " × ",
                    "100%",
                    " = ",
                    Frac("1.000", "4.000"),
                    " × ",
                    "100%",
                    " = ",
                    "0.25 × 100% = 25%"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Operaciones",
            question: "Una tableta cuesta $500.000 antes de aplicar el Impuesto sobre las Ventas (IVA) del 19%. ¿Cuál es el precio final de la tableta con el IVA incluido?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "35", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "35", y1: "15", x2: "35", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "32", y: "12", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Precio ($)"),
                    React.createElement("text", { x: "32", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                    React.createElement("text", { x: "32", y: "82", fontSize: "6", textAnchor: "end" }, "200.000"),
                    React.createElement("text", { x: "32", y: "62", fontSize: "6", textAnchor: "end" }, "400.000"),
                    React.createElement("text", { x: "32", y: "42", fontSize: "6", textAnchor: "end" }, "600.000"),
                    
                    React.createElement("rect", { x: "50", y: "50", width: "35", height: "50", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "67.5", y: "45", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#047857" }, "$500.000"),
                    React.createElement("text", { x: "67.5", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Precio Base (100%)"),
                    
                    React.createElement("rect", { x: "120", y: "40.5", width: "35", height: "59.5", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("rect", { x: "120", y: "40.5", width: "35", height: "9.5", fill: "#f43f5e", stroke: "#be123c", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "137.5", y: "35", fontSize: "8", textAnchor: "middle", fontWeight: "bold", fill: "#be123c" }, "$ ?"),
                    React.createElement("text", { x: "137.5", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Con IVA (119%)"),
                    React.createElement("text", { x: "137.5", y: "47", fontSize: "6", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "IVA 19%")
                )
            ),
            options: ["$519.000", "$595.000", "$600.000", "$650.000"],
            correct: 1,
            feedback: "¡Excelente! El IVA del 19% se suma al valor base del producto (100% + 19% = 119%). Realizamos la multiplicación por el factor multiplicador correspondiente: $500.000 × 1.19 = $595.000. También puedes hallar el 19% de $500.000 ($95.000) y sumarlo al valor base."
        },
{
            type: "Operaciones",
            question: "Un almacén de ropa ofrece un 30% de descuento en toda la mercancía por fin de temporada. Adicionalmente, si el cliente paga con el cupón de la tienda, recibe otro 20% de descuento sobre el precio ya rebajado. Si una chaqueta cuesta originalmente $150.000, ¿cuánto pagará una persona al usar ambos descuentos?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 60", className: "w-48" },
                    React.createElement("rect", { x: "10", y: "15", width: "45", height: "20", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "32.5", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$150.000"),
                    
                    React.createElement("line", { x1: "60", y1: "25", x2: "80", y2: "25", stroke: "#7e22ce", strokeWidth: "1.5" }),
                    React.createElement("polyline", { points: "76,21 80,25 76,29", fill: "none", stroke: "#7e22ce", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "70", y: "17", fontSize: "6", fill: "#7e22ce", fontWeight: "bold", textAnchor: "middle" }, "-30%"),

                    React.createElement("rect", { x: "85", y: "15", width: "45", height: "20", fill: "#a855f7", stroke: "#6b21a8", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "107.5", y: "27", fontSize: "7", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$105.000"),

                    React.createElement("line", { x1: "135", y1: "25", x2: "155", y2: "25", stroke: "#6b21a8", strokeWidth: "1.5" }),
                    React.createElement("polyline", { points: "151,21 155,25 151,29", fill: "none", stroke: "#6b21a8", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "145", y: "17", fontSize: "6", fill: "#6b21a8", fontWeight: "bold", textAnchor: "middle" }, "-20%"),

                    React.createElement("rect", { x: "160", y: "15", width: "35", height: "20", fill: "#10b981", stroke: "#059669", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "177.5", y: "28", fontSize: "8", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "$ ?")
                )
            ),
            options: ["$75.000", "$84.000", "$90.000", "$105.000"],
            correct: 1,
            feedback: "¡Muy bien! Los descuentos sucesivos se aplican de forma encadenada y no sumándolos de manera directa (30% + 20% ≠ 50%). Primero calculamos el 70% del valor inicial: $150.000 × 0.70 = $105.000. Luego calculamos el 80% sobre este nuevo valor: $105.000 × 0.80 = $84.000."
        },
{
            type: "Variación",
            question: React.createElement("span", {}, "El número de usuarios activos de una aplicación de estudio aumentó de 8.000 a 10.000 en el transcurso de un mes. ¿Cuál fue el porcentaje de incremento de usuarios de la aplicación?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 120", className: "w-48" },
                    React.createElement("line", { x1: "35", y1: "80", x2: "185", y2: "80", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "60", x2: "185", y2: "60", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "40", x2: "185", y2: "40", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "20", x2: "185", y2: "20", stroke: "#e2e8f0", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("line", { x1: "35", y1: "100", x2: "185", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "35", y1: "15", x2: "35", y2: "100", stroke: "#334155", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "32", y: "12", fontSize: "6", textAnchor: "end", fontWeight: "bold" }, "Usuarios"),
                    React.createElement("text", { x: "32", y: "102", fontSize: "6", textAnchor: "end" }, "0"),
                    React.createElement("text", { x: "32", y: "82", fontSize: "6", textAnchor: "end" }, "2.000"),
                    React.createElement("text", { x: "32", y: "62", fontSize: "6", textAnchor: "end" }, "4.000"),
                    React.createElement("text", { x: "32", y: "42", fontSize: "6", textAnchor: "end" }, "6.000"),
                    React.createElement("text", { x: "32", y: "22", fontSize: "6", textAnchor: "end" }, "8.000"),
                    React.createElement("text", { x: "32", y: "2", fontSize: "6", textAnchor: "end" }, "10.000"),
                    
                    React.createElement("rect", { x: "55", y: "20", width: "30", height: "80", fill: "#94a3b8", stroke: "#475569", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "70", y: "15", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#334155" }, "8.000"),
                    React.createElement("text", { x: "70", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Mes Anterior"),
                    
                    React.createElement("rect", { x: "130", y: "2", width: "30", height: "98", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "145", y: "-3", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#6b21a8" }, "10.000"),
                    React.createElement("text", { x: "145", y: "112", fontSize: "7", textAnchor: "middle", fontWeight: "semibold" }, "Mes Actual"),
                    
                    React.createElement("line", { x1: "85", y1: "20", x2: "130", y2: "2", stroke: "#f43f5e", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "107.5", y: "9", fontSize: "7", fill: "#f43f5e", fontWeight: "bold", textAnchor: "middle" }, "+ ? %")
                )
            ),
            options: ["20%", "25%", "80%", "125%"],
            correct: 1,
            feedback: React.createElement("span", {}, "¡Correcto! Calculamos la variación porcentual con la fórmula del cambio porcentual dividiendo la diferencia sobre el valor inicial: ", React.createElement("span", { className: "inline-flex items-center justify-start gap-1 bg-black/5 px-2.5 py-2 rounded font-mono text-xs mx-1 whitespace-nowrap overflow-x-auto max-w-full align-middle" }, "Var % = ", Frac("10.000 - 8.000", "8.000"), " × 100% = ", Frac("2.000", "8.000"), " × 100% = ", Frac("1", "4"), " × 100% = 25%"), ".")
        },
{
            type: "Operaciones",
            question: "Un comerciante vende un producto en $119.000, valor que ya tiene incorporado el 19% del Impuesto sobre las Ventas (IVA). ¿Cuál es el precio base del producto sin el IVA?",
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 200 80", className: "w-48" },
                    React.createElement("rect", { x: "15", y: "15", width: "170", height: "25", fill: "#f1f5f9", stroke: "#cbd5e1", strokeWidth: "1", rx: "1" }),
                    React.createElement("text", { x: "100", y: "31", fontSize: "8", fill: "#334155", fontWeight: "bold", textAnchor: "middle" }, "Precio Total: $119.000 (119%)"),
                    
                    React.createElement("rect", { x: "15", y: "45", width: "135", height: "25", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "82.5", y: "61", fontSize: "8", fill: "#047857", fontWeight: "bold", textAnchor: "middle" }, "Base: 100% ($ ? )"),
                    
                    React.createElement("rect", { x: "155", y: "45", width: "30", height: "25", fill: "#f43f5e", stroke: "#be123c", strokeWidth: "1.5", rx: "1" }),
                    React.createElement("text", { x: "170", y: "60", fontSize: "8", fill: "#ffffff", fontWeight: "bold", textAnchor: "middle" }, "19%")
                )
            ),
            options: ["$96.390", "$100.000", "$110.000", "$115.000"],
            correct: 1,
            feedback: "¡Perfecto! Al tener el IVA incluido, el precio final de $119.000 equivale al 119% del precio base. Denotamos la base como X y planteamos la ecuación: X × 1.19 = $119.000. Despejamos el precio base: X = $119.000 ÷ 1.19 = $100.000."
        },
{
            type: "Proporciones",
            question: React.createElement("span", {}, "Un estudiante organiza sus 24 horas diarias del día de la manera siguiente: 8 horas para dormir, 6 horas para clases presenciales, 4 horas para estudio independiente y el tiempo restante para ocio y esparcimiento. ¿Qué porcentaje del día dedica al ocio?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-4" },
                React.createElement("svg", { viewBox: "0 0 160 100", className: "w-44" },
                    React.createElement("circle", { cx: "50", cy: "50", r: "35", fill: "#f1f5f9", stroke: "#94a3b8", strokeWidth: "1" }),
                    React.createElement("path", { d: "M 50 50 L 50 15 A 35 35 0 0 1 85 50 Z", fill: "#c084fc", stroke: "#7e22ce", strokeWidth: "0.8" }),
                    React.createElement("path", { d: "M 50 50 L 85 50 A 35 35 0 0 1 50 85 Z", fill: "#a7f3d0", stroke: "#059669", strokeWidth: "0.8" }),
                    React.createElement("path", { d: "M 50 50 L 50 85 A 35 35 0 0 1 15 50 Z", fill: "#fb7185", stroke: "#e11d48", strokeWidth: "0.8" }),
                    
                    React.createElement("ul", { className: "absolute", style: { left: "100px", top: "15px", listStyle: "none", padding: 0, margin: 0 } },
                        React.createElement("li", { style: { fontSize: "6px", display: "flex", alignItems: "center", gap: "2px", fontWeight: "bold" } }, 
                            React.createElement("div", { style: { width: "4px", height: "4px", backgroundColor: "#cbd5e1" } }), "Dormir (33%)"
                        ),
                        React.createElement("li", { style: { fontSize: "6px", display: "flex", alignItems: "center", gap: "2px", fontWeight: "bold" } }, 
                            React.createElement("div", { style: { width: "4px", height: "4px", backgroundColor: "#a7f3d0" } }), "Clases (25%)"
                        ),
                        React.createElement("li", { style: { fontSize: "6px", display: "flex", alignItems: "center", gap: "2px", fontWeight: "bold" } }, 
                            React.createElement("div", { style: { width: "4px", height: "4px", backgroundColor: "#fb7185" } }), "Estudio (17%)"
                        ),
                        React.createElement("li", { style: { fontSize: "6px", display: "flex", alignItems: "center", gap: "2px", fontWeight: "bold" } }, 
                            React.createElement("div", { style: { width: "4px", height: "4px", backgroundColor: "#c084fc" } }), "Ocio (?%)"
                        )
                    )
                )
            ),
            options: ["25%", "33.3%", "50%", "75%"],
            correct: 0,
            feedback: React.createElement("span", {}, "¡Excelente! Primero sumamos las horas destinadas a las actividades y restamos del total de 24 horas: Horas de Ocio = 24 - 8 - 6 - 4 = 6 horas. Luego dividimos las horas de ocio entre el total y multiplicamos por 100%: ", React.createElement("span", { className: "inline-flex items-center justify-start gap-1 bg-black/5 px-2.5 py-2 rounded font-mono text-xs mx-1 whitespace-nowrap overflow-x-auto max-w-full align-middle" }, "Porcentaje = ", Frac("6", "24"), " × 100% = ", Frac("1", "4"), " × 100% = 25%"), ".")
        }
            ]
        },
        "mat_mod_4": {
            id: "mat_mod_4",
            title: "Módulo 4: Proporcionalidad y Regla de Tres",
            description: "Proporcionalidad directa e inversa, y reglas de tres.",
            icon: "balance",
            theme: "amber",
            introduccion: {
                pilarTitulo: "Pilares de la Proporcionalidad",
                pilares: [
                    "Concepto de razón y proporción entre dos magnitudes.",
                    "Aplicación de la regla de tres simple directa (magnitudes coproporcionales).",
                    "Aplicación de la regla de tres simple inversa (magnitudes contrapuestas).",
                    "Modelado de proporcionalidad compuesta en situaciones complejas de rendimiento.",
                ],
                deseaPintarText: "Este módulo explica cómo se relacionan las magnitudes físicas y económicas de manera lineal directa o inversa. Aprenderás cuándo multiplicar en diagonal o en línea horizontal usando la regla de tres."
            },
            teoria: [
                {
                    titulo: "Concepto de Razón y Proporción",
                    situacion: React.createElement("span", {},
                "Una receta indica que por cada ",
                "2 tazas de arroz",
                " se deben verter ",
                "5 tazas de agua",
                ". ¿Cómo se expresa esta relación matemáticamente y cómo calculamos la cantidad de agua para 6 tazas de arroz?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Una razón es la comparación entre dos cantidades mediante un cociente. Se escribe como ",
                    Frac("A", "B"),
                    " y se lee 'A es a B'. Una proporción es la igualdad entre dos razones equivalentes. En este caso, la razón de arroz a agua es ",
                    Frac("2", "5"),
                    "."
                ),
                React.createElement("div", { className: "p-3 bg-amber-50/50 border border-amber-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1" }, "Relación Básica"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si duplicamos o triplicamos la cantidad de arroz, la cantidad de agua debe aumentar en la misma proporción para mantener el sabor y la cocción."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-44" },
                        // Arroz
                        React.createElement("rect", { x: "10", y: "10", width: "40", height: "20", fill: "#fef3c7", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "30", y: "22", fontSize: "7", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "2 Arroz"),
                        
                        React.createElement("line", { x1: "60", y1: "20", x2: "90", y2: "20", stroke: "#d97706", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "75", y: "15", fontSize: "6", fill: "#b45309", textAnchor: "middle" }, "×3"),
                        
                        React.createElement("rect", { x: "100", y: "10", width: "40", height: "20", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "120", y: "22", fontSize: "7", fill: "#b45309", fontWeight: "bold", textAnchor: "middle" }, "6 Arroz"),
                        
                        // Agua
                        React.createElement("rect", { x: "10", y: "45", width: "40", height: "20", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "30", y: "57", fontSize: "7", fill: "#0369a1", fontWeight: "bold", textAnchor: "middle" }, "5 Agua"),
                        
                        React.createElement("line", { x1: "60", y1: "55", x2: "90", y2: "55", stroke: "#0284c7", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "75", y: "50", fontSize: "6", fill: "#0369a1", textAnchor: "middle" }, "×3"),
                        
                        React.createElement("rect", { x: "100", y: "45", width: "40", height: "20", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "120", y: "57", fontSize: "7", fill: "#0369a1", fontWeight: "bold", textAnchor: "middle" }, "15 Agua")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Propiedad de la Razón"),
                    React.createElement("div", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "La proporción se mantiene constante: ",
                        React.createElement("span", { className: "font-mono font-bold" }, Frac("2", "5"), " = ", Frac("6", "15"), " = 0.4")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se deben verter 15 tazas de agua. Explicación matemática:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    Frac("Arroz 1", "Agua 1"),
                    " = ",
                    Frac("Arroz 2", "Agua 2"),
                    "  ➔  ",
                    Frac("2", "5"),
                    " = ",
                    Frac("6", "X"),
                    "  ➔  X = ",
                    Frac("6 × 5", "2"),
                    " = 15"
                )
            )
                },
                {
                    titulo: "Regla de Tres Simple Directa",
                    situacion: React.createElement("span", {},
                "Si un automóvil consume ",
                "6 galones",
                " de gasolina para recorrer 90 km, ¿cuántos galones necesitará para recorrer 275 km bajo las mismas condiciones?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En la proporcionalidad directa, al aumentar una magnitud, la otra también aumenta de manera constante (y viceversa). Su cociente es constante. Se resuelve multiplicando de forma cruzada (diagonal) y dividiendo por el término restante."
                ),
                React.createElement("div", { className: "p-3 bg-amber-50/50 border border-amber-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1" }, "Fórmula Directa"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si A1 ➔ B1 y A2 ➔ X, entonces X = (A2 × B1) ÷ A1."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("circle", { cx: "30", cy: "30", r: "18", fill: "#fef3c7", stroke: "#d97706", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "30", y: "33", fontSize: "7", textAnchor: "middle" }, "6 Gal"),
                        React.createElement("line", { x1: "50", y1: "30", x2: "80", y2: "30", stroke: "#d97706", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                        React.createElement("circle", { cx: "100", cy: "30", r: "18", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "33", fontSize: "7", textAnchor: "middle" }, "X Gal"),
                        React.createElement("text", { x: "30", y: "56", fontSize: "6", textAnchor: "middle" }, "90 km"),
                        React.createElement("text", { x: "100", y: "56", fontSize: "6", textAnchor: "middle" }, "275 km")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Planteamiento Cruzado"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Multiplicamos 275 × 6 y luego dividimos entre 90."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se necesitan aproximadamente 18.33 galones (o 55/3 galones):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "X = ",
                    Frac("275 × 6", "90"),
                    " = ",
                    Frac("1650", "90"),
                    " = ",
                    Frac("55", "3"),
                    " ≈ 18.33 Gal"
                )
            )
                },
                {
                    titulo: "Regla de Tres Simple Inversa",
                    situacion: React.createElement("span", {},
                "Una obra es completada por ",
                "4 obreros",
                " en ",
                "12 días",
                ". ¿Cuántos días tardarán 6 obreros en terminar la misma obra?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En la proporcionalidad inversa, al aumentar una magnitud, la otra disminuye proporcionalmente. Su producto es constante. Se resuelve multiplicando horizontalmente y dividiendo por la cantidad restante."
                ),
                React.createElement("div", { className: "p-3 bg-amber-50/50 border border-amber-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1" }, "Constante de Trabajo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Total de esfuerzo necesario = 4 obreros × 12 días = 48 obreros-día. Este total de 48 debe mantenerse constante."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-44" },
                        React.createElement("line", { x1: "25", y1: "80", x2: "185", y2: "80", stroke: "#334155", strokeWidth: "1" }),
                        React.createElement("line", { x1: "25", y1: "15", x2: "25", y2: "80", stroke: "#334155", strokeWidth: "1" }),
                        React.createElement("text", { x: "20", y: "20", fontSize: "6", textAnchor: "end" }, "Días"),
                        React.createElement("text", { x: "180", y: "90", fontSize: "6", textAnchor: "end" }, "Obreros"),
                        
                        // Curve points
                        React.createElement("circle", { cx: "60", cy: "30", r: "3", fill: "#d97706" }),
                        React.createElement("text", { x: "65", y: "28", fontSize: "6" }, "4 ob, 12 d"),
                        React.createElement("circle", { cx: "90", cy: "45", r: "3", fill: "#d97706" }),
                        React.createElement("text", { x: "95", y: "43", fontSize: "6" }, "6 ob, X d"),
                        
                        // Hyperbola curve
                        React.createElement("path", { d: "M 40,20 Q 70,40 130,70", fill: "none", stroke: "#d97706", strokeWidth: "1.5" })
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Resolución Lineal"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Multiplicamos horizontalmente: 4 × 12 = 48. Dividimos entre 6."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Tardarán 8 días en completar la obra. Cálculo formal:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "X = ",
                    Frac("4 × 12", "6"),
                    " = ",
                    Frac("48", "6"),
                    " = 8 días"
                )
            )
                },
                {
                    titulo: "Regla de Tres Compuesta",
                    situacion: React.createElement("span", {},
                "Si ",
                "3 impresoras",
                " tardan ",
                "5 horas",
                " en imprimir 150 carteles, ¿cuántas horas tardarán ",
                "4 impresoras",
                " en imprimir 240 carteles?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La regla de tres compuesta vincula tres o más magnitudes. Evaluamos la relación respecto a la variable desconocida (Tiempo):",
                    React.createElement("br", {}),
                    "• Impresoras y Tiempo: A más impresoras, menos tiempo (Inversa).",
                    React.createElement("br", {}),
                    "• Carteles y Tiempo: A más carteles, más tiempo (Directa)."
                ),
                React.createElement("div", { className: "p-3 bg-amber-50/50 border border-amber-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1" }, "Estructuración de Fracciones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Planteamos: ",
                        Frac("X", "5"),
                        " = ",
                        Frac("3", "4"),
                        " (inversa) × ",
                        Frac("240", "150"),
                        " (directa)"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("div", { className: "grid grid-cols-3 gap-2 font-bold text-slate-500 text-center" },
                        React.createElement("span", {}, "Impresoras"),
                        React.createElement("span", {}, "Carteles"),
                        React.createElement("span", {}, "Tiempo (h)")
                    ),
                    React.createElement("div", { className: "grid grid-cols-3 gap-2 text-center text-slate-700 mt-1" },
                        React.createElement("span", {}, "3"),
                        React.createElement("span", {}, "150"),
                        React.createElement("span", {}, "5"),
                        React.createElement("span", {}, "4"),
                        React.createElement("span", {}, "240"),
                        React.createElement("span", {}, "X")
                    )
                ),
                React.createElement("p", { className: "text-slate-600 text-[10px] text-left leading-relaxed" },
                    "Despejamos la ecuación multiplicando la razón de cada magnitud por el valor conocido de tiempo."
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Tardarán 6 horas en imprimir los carteles:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "X = 5 × ",
                    Frac("3", "4"),
                    " × ",
                    Frac("240", "150"),
                    " = 5 × ",
                    Frac("3", "4"),
                    " × ",
                    Frac("8", "5"),
                    " = 5 × ",
                    Frac("24", "20"),
                    " = 6 horas"
                )
            )
                },
                {
                    titulo: "Reparto Proporcional Directo",
                    situacion: React.createElement("span", {},
                "Una herencia de ",
                "\$15.000",
                " se divide entre dos hermanos en partes directamente proporcionales a sus edades: ",
                "10 y 15 años",
                ". ¿Cuánto dinero le corresponde a cada hermano?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El reparto proporcional directo adjudica mayor cantidad a quien tiene un índice mayor. Se suma la base de reparto (edades) y se determina la constante de reparto ",
                    React.createElement("strong", {}, "k"),
                    "."
                ),
                React.createElement("div", { className: "p-3 bg-amber-50/50 border border-amber-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1" }, "Pasos de Reparto"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "1. Suma de edades: 10 + 15 = 25.",
                        React.createElement("br", {}),
                        "2. Constante k = total ÷ suma = 15.000 ÷ 25 = 600.",
                        React.createElement("br", {}),
                        "3. Multiplicar cada edad por k."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 50", className: "w-44" },
                        // Bar for Brother 1 (10/25 = 40%)
                        React.createElement("rect", { x: "10", y: "15", width: "72", height: "20", fill: "#fef3c7", stroke: "#d97706", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "46", y: "27", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "10 años (40%)"),
                        
                        // Bar for Brother 2 (15/25 = 60%)
                        React.createElement("rect", { x: "82", y: "15", width: "108", height: "20", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "136", y: "27", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "15 años (60%)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Distribución Final"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Hermano menor: 10 × 600 = \$6.000. Hermano mayor: 15 × 600 = \$9.000."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Al hermano de 10 años le corresponden \$6.000 y al de 15 años \$9.000. Ecuación:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "k = ",
                    Frac("15.000", "10 + 15"),
                    " = 600  ➔  10 × 600 = \$6.000  y  15 × 600 = \$9.000"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Directa",
            question: React.createElement("span", {}, "Si un tren recorre 180 km en 2 horas a velocidad constante, ¿cuántos kilómetros recorrerá en 5 horas bajo las mismas condiciones?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 200 65", className: "w-40" },
                    React.createElement("rect", { x: "10", y: "15", width: "45", height: "25", fill: "#fef3c7", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                    React.createElement("text", { x: "32", y: "30", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "2 horas"),
                    React.createElement("text", { x: "32", y: "40", fontSize: "6", fill: "#64748b", textAnchor: "middle" }, "180 km"),
                    
                    React.createElement("line", { x1: "65", y1: "27", x2: "135", y2: "27", stroke: "#d97706", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "100", y: "22", fontSize: "7", fill: "#b45309", textAnchor: "middle" }, "Proporcional"),
                    
                    React.createElement("rect", { x: "145", y: "15", width: "45", height: "25", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                    React.createElement("text", { x: "167", y: "30", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "5 horas"),
                    React.createElement("text", { x: "167", y: "40", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "? km")
                )
            ),
            options: ["450 km", "360 km", "90 km", "270 km"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Es proporcionalidad directa: a más tiempo, más distancia recorrida. Multiplicamos en diagonal y dividimos entre el tiempo restante:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Distancia = ",
                    Frac("180 km × 5 h", "2 h"),
                    " = 90 × 5 = 450 km"
                )
            )
        },
{
            type: "Inversa",
            question: React.createElement("span", {}, "Un grupo de 6 estudiantes tarda 4 horas en realizar un mural para el colegio. Si se quiere terminar el mural en solo 3 horas, ¿cuántos estudiantes se necesitarán trabajando al mismo ritmo?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 200 65", className: "w-40" },
                    React.createElement("rect", { x: "10", y: "15", width: "45", height: "25", fill: "#fef3c7", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                    React.createElement("text", { x: "32", y: "30", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "6 estud."),
                    React.createElement("text", { x: "32", y: "40", fontSize: "6", fill: "#64748b", textAnchor: "middle" }, "4 horas"),
                    
                    React.createElement("line", { x1: "65", y1: "27", x2: "135", y2: "27", stroke: "#d97706", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "100", y: "22", fontSize: "7", fill: "#b45309", textAnchor: "middle" }, "Inversa"),
                    
                    React.createElement("rect", { x: "145", y: "15", width: "45", height: "25", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5", rx: "4" }),
                    React.createElement("text", { x: "167", y: "30", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "? estud."),
                    React.createElement("text", { x: "167", y: "40", fontSize: "6", fill: "#64748b", textAnchor: "middle" }, "3 horas")
                )
            ),
            options: ["8 estudiantes", "9 estudiantes", "5 estudiantes", "7 estudiantes"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Es una relación inversa: a menos tiempo, se necesitan más estudiantes. El producto de las magnitudes debe ser constante:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Estudiantes = ",
                    Frac("6 estudiantes × 4 h", "3 h"),
                    " = ",
                    Frac("24", "3"),
                    " = 8 estudiantes"
                )
            )
        },
{
            type: "Razón",
            question: React.createElement("span", {}, "En una receta, la razón entre harina y azúcar es de 5 a 2. Si se utilizan 400 gramos de harina, ¿qué cantidad de azúcar se debe agregar para mantener la proporción?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 200 60", className: "w-40" },
                    React.createElement("rect", { x: "10", y: "15", width: "70", height: "30", fill: "#fde68a", stroke: "#d97706", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "45", y: "30", fontSize: "7", fontWeight: "bold", fill: "#b45309", textAnchor: "middle" }, "Harina: 400g"),
                    React.createElement("text", { x: "45", y: "40", fontSize: "6", fill: "#b45309", textAnchor: "middle" }, "(Razón: 5)"),
                    
                    React.createElement("rect", { x: "120", y: "15", width: "70", height: "30", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                    React.createElement("text", { x: "155", y: "30", fontSize: "7", fontWeight: "bold", fill: "#0369a1", textAnchor: "middle" }, "Azúcar: ? g"),
                    React.createElement("text", { x: "155", y: "40", fontSize: "6", fill: "#0369a1", textAnchor: "middle" }, "(Razón: 2)")
                )
            ),
            options: ["160 gramos", "200 gramos", "100 gramos", "250 gramos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La proporción es harina es a azúcar como 5 es a 2. Despejamos el azúcar:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    Frac("5", "2"),
                    " = ",
                    Frac("400 g", "Azúcar"),
                    "  ➔  Azúcar = ",
                    Frac("400 g × 2", "5"),
                    " = 160 g"
                )
            )
        },
{
            type: "Compuesta",
            question: React.createElement("span", {}, "Si 3 máquinas embotelladoras iguales producen 6.000 botellas en 4 horas, ¿cuántas botellas producirán 5 de estas máquinas en 2 horas?"),
            visual: null,
            options: ["5.000 botellas", "8.000 botellas", "4.000 botellas", "6.000 botellas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Ambas magnitudes (máquinas y horas) tienen una relación directa con el número de botellas. Planteamos la proporción compuesta:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Botellas = 6.000 × ",
                    Frac("5 máquinas", "3 máquinas"),
                    " × ",
                    Frac("2 horas", "4 horas"),
                    " = 6.000 × ",
                    Frac("10", "12"),
                    " = 5.000 botellas"
                )
            )
        },
{
            type: "Reparto",
            question: React.createElement("span", {}, "Tres hermanos de 8, 12 y 16 años se reparten una herencia de \$18.000 de forma directamente proporcional a sus edades. ¿Cuánto dinero recibirá el menor?"),
            visual: null,
            options: ["\$4.000", "\$6.000", "\$8.000", "\$2.000"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Determinamos la constante de reparto sumando las edades de reparto y dividiendo el total de la herencia:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "k = ",
                    Frac("\$18.000", "8 + 12 + 16"),
                    " = ",
                    Frac("18.000", "36"),
                    " = 500  ➔  Menor (8 años) = 8 × 500 = \$4.000"
                )
            )
        }
            ]
        },
        "mat_mod_5": {
            id: "mat_mod_5",
            title: "Módulo 5: Escalas y Planos",
            description: "Relaciones de escalas cartográficas y conversión de dimensiones reales.",
            icon: "map",
            theme: "cyan",
            introduccion: {
                pilarTitulo: "Pilares de la Escala Métrica",
                pilares: [
                    "Comprensión de la escala numérica de reducción y ampliación (Plano:Realidad).",
                    "Lectura e interpretación de planos arquitectónicos y mapas geográficos.",
                    "Conversión rápida de unidades de longitud (cm a metros o km y viceversa).",
                    "Cálculo de áreas y volúmenes reales a partir de dimensiones acotadas a escala.",
                ],
                deseaPintarText: "El dominio de las escalas métricas es fundamental para comprender mapas y planos. Aprenderás a deducir distancias reales a partir de un mapa de carreteras o a proyectar maquetas con precisión matemática."
            },
            teoria: [
                {
                    titulo: "Escala Numérica de Reducción",
                    situacion: React.createElement("span", {},
                "En un plano arquitectónico con una escala de ",
                "1:75",
                ", la longitud de un corredor en el dibujo es de ",
                "8 cm",
                ". ¿Cuál es la longitud real de ese corredor en metros?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Una escala de reducción de la forma ",
                    React.createElement("strong", {}, "1:N"),
                    " nos indica que 1 unidad de longitud medida sobre el plano representa N unidades de longitud en el mundo físico. La fórmula básica es: ",
                    React.createElement("br", {}),
                    "• Longitud Real = Longitud Dibujo × Factor N"
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Conversión de Unidades"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Dado que la longitud resultante estará originalmente en centímetros, se debe convertir a metros dividiendo entre 100."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-44" },
                        React.createElement("rect", { x: "10", y: "20", width: "120", height: "12", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "10", y1: "15", x2: "10", y2: "37", stroke: "#0284c7", strokeWidth: "1" }),
                        React.createElement("line", { x1: "130", y1: "15", x2: "130", y2: "37", stroke: "#0284c7", strokeWidth: "1" }),
                        React.createElement("text", { x: "70", y: "45", fontSize: "7", fontWeight: "bold", fill: "#0369a1", textAnchor: "middle" }, "Medida en plano: 8 cm (1:75)"),
                        React.createElement("path", { d: "M 10,12 L 130,12", stroke: "#0284c7", strokeWidth: "1" })
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Operación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Real = 8 cm × 75 = 600 cm. Convertido a metros: 600 ÷ 100 = 6 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La longitud real es de 6 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Real = ",
                    "8 cm × 75 = 600 cm = ",
                    Frac("600", "100"),
                    " m = 6 m"
                )
            )
                },
                {
                    titulo: "Escalas de Ampliación",
                    situacion: React.createElement("span", {},
                "Una pieza de microtecnología mide ",
                "4 mm",
                " de ancho. En un plano publicitario técnico se la dibuja con un ancho de ",
                "20 cm",
                ". ¿Cuál es la escala del dibujo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La escala de ampliación se emplea cuando representamos objetos sumamente pequeños con dimensiones mayores en el dibujo. Se define con la fórmula básica: ",
                    React.createElement("br", {}),
                    "• Escala = ",
                    Frac("Medida Dibujo", "Medida Real"),
                    React.createElement("br", {}),
                    "Ambas medidas deben estar en la misma unidad antes de simplificar."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Homogeneidad"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Convertimos 20 cm a milímetros multiplicando por 10: 20 cm = 200 mm. Así podemos comparar directamente 200 mm frente a 4 mm."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-around items-center" },
                    React.createElement("div", { className: "text-center" },
                        React.createElement("div", { className: "w-4 h-4 bg-slate-400 rounded-full mx-auto" }),
                        React.createElement("span", { className: "text-[9px] text-slate-500 font-mono block mt-1" }, "Real (4 mm)")
                    ),
                    React.createElement("text", { className: "text-slate-400 font-bold" }, "➔"),
                    React.createElement("div", { className: "text-center" },
                        React.createElement("div", { className: "w-24 h-12 bg-cyan-100 border border-cyan-400 rounded flex items-center justify-center font-mono text-[9px] text-cyan-800" }, "Dibujo (20 cm = 200 mm)"),
                        React.createElement("span", { className: "text-[9px] text-slate-500 font-mono block mt-1" }, "Ampliación")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Simplificación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Relación: ",
                        Frac("200 mm", "4 mm"),
                        " = ",
                        Frac("50", "1"),
                        " o escala 50:1."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La escala de ampliación es 50:1 (el dibujo es 50 veces más grande):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Escala = ",
                    Frac("Dibujo", "Real"),
                    " = ",
                    Frac("200 mm", "4 mm"),
                    " = ",
                    Frac("50", "1"),
                    "  ➔  50:1"
                )
            )
                },
                {
                    titulo: "Escala Gráfica en Mapas",
                    situacion: React.createElement("span", {},
                "En un mapa turístico, una barra de escala gráfica muestra que un segmento de ",
                "2 cm",
                " representa exactamente ",
                "6 km",
                " en el terreno. Si dos ciudades distan ",
                "10 cm",
                " en el mapa, ¿cuál es su separación real?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La escala gráfica es una línea graduada o barra que indica la equivalencia de distancias reales sobre el papel. Ofrece la ventaja de que la proporción se mantiene inalterable si el mapa se reduce o amplía en una copia fotográfica. Planteamos una regla de tres directa."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Relación Directa"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si 2 cm representan 6 km, entonces cada 1 cm representa 3 km."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-44" },
                        // Distancia del mapa
                        React.createElement("line", { x1: "20", y1: "25", x2: "180", y2: "25", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "20", cy: "25", r: "2.5", fill: "#0284c7" }),
                        React.createElement("circle", { cx: "180", cy: "25", r: "2.5", fill: "#0284c7" }),
                        React.createElement("text", { x: "100", y: "18", fontSize: "7", fontWeight: "bold", fill: "#0369a1", textAnchor: "middle" }, "Medida del Mapa: 10 cm"),
                        
                        // Barra escala
                        React.createElement("rect", { x: "50", y: "45", width: "40", height: "6", fill: "#0ea5e9" }),
                        React.createElement("rect", { x: "90", y: "45", width: "40", height: "6", fill: "#cbd5e1" }),
                        React.createElement("text", { x: "50", y: "62", fontSize: "6", textAnchor: "middle" }, "0 km"),
                        React.createElement("text", { x: "90", y: "62", fontSize: "6", textAnchor: "middle" }, "3 km"),
                        React.createElement("text", { x: "130", y: "62", fontSize: "6", textAnchor: "middle" }, "6 km"),
                        React.createElement("text", { x: "90", y: "72", fontSize: "5", fill: "#64748b", textAnchor: "middle" }, "Barra de Escala: 2 cm = 6 km")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Proporción"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "X = (10 cm × 6 km) ÷ 2 cm = 30 km."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La separación real entre las ciudades es de 30 km:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "X = ",
                    Frac("10 cm × 6 km", "2 cm"),
                    " = 30 km"
                )
            )
                },
                {
                    titulo: "Relación de Áreas en Escalas (Efecto Cuadrático)",
                    situacion: React.createElement("span", {},
                "Un terreno rectangular mide en un plano a escala ",
                "1:100",
                " exactamente ",
                "12 cm²",
                " de superficie. ¿Cuál es la superficie real del terreno en metros cuadrados?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "¡Cuidado! Cuando las dimensiones lineales se escalan por un factor ",
                    React.createElement("strong", {}, "N"),
                    ", el área se escala por el factor al cuadrado ",
                    React.createElement("strong", {}, "N²"),
                    ". Para una escala de 1:100, las áreas reales son 100² = 10.000 veces más grandes que en el dibujo."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Escala Superficial"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área Real = Área Dibujo × N².",
                        React.createElement("br", {}),
                        "Luego convertimos de cm² a m² dividiendo por 10.000, ya que 1 m² = 10.000 cm²."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 65", className: "w-44" },
                        // Dibujo 3x4 cm = 12 cm^2
                        React.createElement("rect", { x: "15", y: "15", width: "40", height: "30", fill: "#cbd5e1", stroke: "#64748b" }),
                        React.createElement("text", { x: "35", y: "32", fontSize: "6", textAnchor: "middle" }, "Dibujo: 12 cm²"),
                        
                        React.createElement("text", { x: "90", y: "32", fontSize: "7", fontWeight: "bold" }, "Escala 1:100"),
                        
                        // Realidad 3x4 m = 12 m^2
                        React.createElement("rect", { x: "140", y: "10", width: "50", height: "40", fill: "#e0f2fe", stroke: "#0284c7" }),
                        React.createElement("text", { x: "165", y: "32", fontSize: "6", textAnchor: "middle" }, "Real: 12 m²")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Directo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área Real = 12 cm² × 10.000 = 120.000 cm². En metros cuadrados: 120.000 ÷ 10.000 = 12 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La superficie real es de 12 metros cuadrados:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Real = 12 cm² × 100² = 12 cm² × 10.000 = 120.000 cm² = ",
                    Frac("120.000", "10.000"),
                    " m² = 12 m²"
                )
            )
                },
                {
                    titulo: "Determinación de la Escala Usada",
                    situacion: React.createElement("span", {},
                "Una maqueta de un rascacielos que tiene una altura real de ",
                "150 metros",
                " mide exactamente ",
                "30 cm",
                " de alto. ¿A qué escala numérica está construida dicha maqueta?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para determinar la escala numérica del dibujo, calculamos la razón entre la medida del dibujo y su homóloga en la realidad. La fórmula es: ",
                    React.createElement("br", {}),
                    "• Escala = ",
                    Frac("Medida Dibujo", "Medida Real"),
                    React.createElement("br", {}),
                    "Para que la razón sea adimensional, ambas dimensiones deben estar en la misma unidad física."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Homogeneización"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Convertimos los 150 metros reales a centímetros multiplicándolos por 100: 150 m × 100 = 15.000 cm."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Establecemos la fracción de la escala: ",
                        React.createElement("span", { className: "font-mono font-bold" }, Frac("30 cm", "15.000 cm"))
                    ),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed mt-1" },
                        "Simplificamos dividiendo ambos números por 30: ",
                        React.createElement("span", { className: "font-mono font-bold" }, Frac("1", "500"), " (Escala 1:500)")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La maqueta está construida a escala 1:500:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Escala = ",
                    Frac("30", "15.000"),
                    " = ",
                    Frac("30 ÷ 30", "15.000 ÷ 30"),
                    " = ",
                    Frac("1", "500"),
                    "  ➔  1:500"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Escala Reducción",
            question: React.createElement("span", {}, "En el plano de un apartamento a escala 1:75, la anchura de una puerta mide 4 cm en el papel. ¿A cuántos metros equivale en la realidad?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 150 65", className: "w-36" },
                    React.createElement("rect", { x: "15", y: "15", width: "120", height: "35", fill: "#ecfeff", stroke: "#0891b2", strokeWidth: "2" }),
                    React.createElement("text", { x: "75", y: "37", fontSize: "9", fill: "#0e7490", fontWeight: "bold", textAnchor: "middle" }, "Plano: 4 cm (1:75)")
                )
            ),
            options: ["3 metros", "30 metros", "0.3 metros", "1.875 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La escala 1:75 significa que 1 cm en el papel equivale a 75 cm reales:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Real = 4 cm × 75 = 300 cm = ",
                    Frac("300 cm", "100"),
                    " = 3 metros"
                )
            )
        },
{
            type: "Escala Gráfica",
            question: React.createElement("span", {}, "En un mapa de carreteras, una escala gráfica indica que 2 cm equivalen a 5 km de terreno real. Si la distancia entre dos pueblos es de 8 cm en el mapa, ¿cuál es su separación real?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 200 60", className: "w-40" },
                    React.createElement("line", { x1: "20", y1: "15", x2: "180", y2: "15", stroke: "#0891b2", strokeWidth: "1.5" }),
                    React.createElement("circle", { cx: "20", cy: "15", r: "2", fill: "#0891b2" }),
                    React.createElement("circle", { cx: "180", cy: "15", r: "2", fill: "#0891b2" }),
                    React.createElement("text", { x: "100", y: "30", fontSize: "7", fill: "#0e7490", textAnchor: "middle" }, "Distancia medida: 8 cm"),
                    
                    React.createElement("rect", { x: "60", y: "40", width: "40", height: "5", fill: "#0891b2" }),
                    React.createElement("text", { x: "60", y: "55", fontSize: "6", textAnchor: "middle" }, "0 km"),
                    React.createElement("text", { x: "100", y: "55", fontSize: "6", textAnchor: "middle" }, "5 km"),
                    React.createElement("text", { x: "140", y: "55", fontSize: "6", textAnchor: "middle" }, "10 km")
                )
            ),
            options: ["20 km", "10 km", "40 km", "16 km"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos una regla de tres directa con la escala gráfica del mapa:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Distancia Real = ",
                    Frac("8 cm × 5 km", "2 cm"),
                    " = 4 × 5 = 20 km"
                )
            )
        },
{
            type: "Ampliación",
            question: React.createElement("span", {}, "Un engranaje de reloj que mide 5 mm de diámetro real se representa en un plano técnico a una escala de ampliación de 8:1. ¿Con qué diámetro se representará en dicho plano?"),
            visual: null,
            options: ["40 mm", "40 cm", "0.625 mm", "8 mm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La escala 8:1 indica que el plano es 8 veces más grande que la pieza real. Multiplicamos la medida real por el factor de ampliación:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Dibujo = 5 mm × 8 = 40 mm"
                )
            )
        },
{
            type: "Escala Áreas",
            question: React.createElement("span", {}, "Un jardín rectangular de 6 cm² de superficie en un mapa está construido a una escala de 1:200. ¿Cuál es el área real del jardín en metros cuadrados (m²)?"),
            visual: null,
            options: ["24 m²", "12 m²", "120 m²", "240 m²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Recuerda que la escala de áreas es el cuadrado de la escala lineal (200² = 40.000). Convertimos el resultado a metros cuadrados dividiendo entre 10.000:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Real = 6 cm² × 200² = 240.000 cm² = ",
                    Frac("240.000 cm²", "10.000"),
                    " = 24 m²"
                )
            )
        },
{
            type: "Determinar Escala",
            question: React.createElement("span", {}, "En un mapa, la distancia entre dos ciudades es de 15 cm. En la realidad, dicha distancia es de 75 km. ¿A qué escala numérica se diseñó el mapa?"),
            visual: null,
            options: ["1:500.000", "1:50.000", "1:5.000", "1:5.000.000"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Igualamos las unidades a centímetros: 75 km = 7.500.000 cm. Calculamos el factor de escala simplificando la fracción:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Escala = ",
                    Frac("15 cm", "7.500.000 cm"),
                    " = ",
                    Frac("1", "500.000"),
                    "  ➔  1:500.000"
                )
            )
        }
            ]
        },
        "mat_mod_6": {
            id: "mat_mod_6",
            title: "Módulo 6: Geometría: Perímetros y Áreas",
            description: "Cálculo de perímetros y áreas en figuras planas básicas.",
            icon: "square_foot",
            theme: "sky",
            introduccion: {
                pilarTitulo: "Pilares de la Geometría Plana",
                pilares: [
                    "Cálculo de perímetros (contornos) de polígonos regulares e irregulares.",
                    "Área de cuadriláteros básicos (cuadrados, rectángulos, paralelogramos).",
                    "Área de triángulos (base por altura dividido entre dos) y trapecios.",
                    "Cálculo del perímetro y área del círculo usando radio y diámetro.",
                ],
                deseaPintarText: "La medición de figuras en dos dimensiones es clave en las pruebas Saber. En este módulo repasarás las fórmulas esenciales de área y contorno de figuras planas básicas para resolver problemas de cercado y pavimentación."
            },
            teoria: [
                {
                    titulo: "Perímetro de Polígonos y Esquinas Entrantes",
                    situacion: React.createElement("span", {},
                "Una casa tiene una planta en forma de L, con dimensiones exteriores de ",
                "16 m de largo",
                " y ",
                "12 m de ancho",
                ". ¿Cuál es su perímetro total sin conocer las medidas de las esquinas interiores?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En una figura con ángulos rectos interiores (tipo L), los segmentos interiores se proyectan de forma paralela hacia afuera. Esto hace que la suma de sus longitudes interiores equivalga exactamente a los lados externos correspondientes."
                ),
                React.createElement("div", { className: "p-3 bg-sky-50/50 border border-sky-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1" }, "Proyección de Esquinas"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Cualquier polígono rectilineo ortogonal convexo tiene un perímetro idéntico al de su rectángulo circunscrito: Perímetro = 2 × (Largo + Ancho)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 160 120", className: "w-36" },
                        // L-shape path
                        React.createElement("path", { d: "M 20 100 L 140 100 L 140 70 L 90 70 L 90 20 L 20 20 Z", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "2" }),
                        
                        // Dashed lines showing projection
                        React.createElement("path", { d: "M 90 70 L 140 70 M 90 20 L 90 70", fill: "none", stroke: "#0284c7", strokeWidth: "1", strokeDasharray: "2 2" }),
                        
                        React.createElement("text", { x: "80", y: "112", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "16 m"),
                        React.createElement("text", { x: "12", y: "60", fontSize: "7", fontWeight: "bold", textAnchor: "middle", transform: "rotate(-90 12,60)" }, "12 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Propiedad"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Perímetro = 2 × (16 + 12) = 2 × 28 = 56 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El perímetro del contorno es de 56 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Perímetro = 2 × (16 + 12) = 2 × 28 = 56 m"
                )
            )
                },
                {
                    titulo: "Área de Cuadriláteros",
                    situacion: React.createElement("span", {},
                "Un terreno rectangular mide ",
                "12 m de base",
                " y ",
                "8 m de altura",
                ". ¿Cómo se altera su área si se inclina manteniendo base y altura constantes?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El área de un cuadrilátero regular o paralelogramo se define mediante la fórmula: Área = base × altura. Al inclinar la figura manteniendo la altura perpendicular constante, el área no varía. Sin embargo, los lados laterales inclinados se vuelven más largos por Pitágoras, lo que incrementa el perímetro total de la figura."
                ),
                React.createElement("div", { className: "p-3 bg-sky-50/50 border border-sky-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1" }, "Principio de Cavalieri"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "El área de un paralelogramo es igual a la de un rectángulo que comparta su misma base y altura: A = b × h."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 65", className: "w-44" },
                        // Rectangle 12x8
                        React.createElement("rect", { x: "15", y: "15", width: "50", height: "35", fill: "none", stroke: "#64748b", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "40", y: "35", fontSize: "6", textAnchor: "middle" }, "Rectángulo: 96 m²"),
                        
                        React.createElement("text", { x: "90", y: "35", fontSize: "7", fontWeight: "bold" }, "➔"),
                        
                        // Paralelogramo 12x8
                        React.createElement("polygon", { points: "120,50 170,50 185,15 135,15", fill: "none", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "152", y: "35", fontSize: "6", textAnchor: "middle" }, "Paralelogramo: 96 m²")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Fórmula"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área = 12 × 8 = 96 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área se mantiene en 96 m², pero el perímetro aumenta:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Rectángulo = Área Paralelogramo = 12 m × 8 m = 96 m²"
                )
            )
                },
                {
                    titulo: "Área de un Triángulo Inscrito",
                    situacion: React.createElement("span", {},
                "Se inscribe un cantero de flores triangular en un terreno rectangular de ",
                "10 m de largo",
                " y ",
                "6 m de ancho",
                ". Si el triángulo comparte toda la base y la altura del rectángulo, ¿cuál es su área?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El área de un triángulo es base × altura dividido entre 2. Como consecuencia directa, cualquier triángulo que se inscriba dentro de un rectángulo ocupará exactamente la mitad de la superficie total, independientemente de la inclinación del triángulo."
                ),
                React.createElement("div", { className: "p-3 bg-sky-50/50 border border-sky-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1" }, "Relación de Áreas"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área Triángulo = ",
                        Frac("Área Rectángulo", "2"),
                        " = ",
                        Frac("base × altura", "2"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 90", className: "w-44" },
                        // Outer rectangle
                        React.createElement("rect", { x: "20", y: "15", width: "160", height: "60", fill: "none", stroke: "#94a3b8", strokeWidth: "1", strokeDasharray: "2 2" }),
                        
                        // Triangle
                        React.createElement("polygon", { points: "20,75 180,75 110,15", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                        
                        React.createElement("text", { x: "100", y: "85", fontSize: "7", textAnchor: "middle" }, "Base: 10 m"),
                        React.createElement("text", { x: "12", y: "45", fontSize: "7", textAnchor: "middle", transform: "rotate(-90 12,45)" }, "Alt: 6 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Operación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área Rectángulo = 10 × 6 = 60 m². Área Triángulo = 60 ÷ 2 = 30 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área del cantero es de 30 m² (la mitad del rectángulo contenedor):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Triángulo = ",
                    Frac("10 m × 6 m", "2"),
                    " = 30 m²"
                )
            )
                },
                {
                    titulo: "Geometría del Círculo",
                    situacion: React.createElement("span", {},
                "Una plaza circular tiene un diámetro de ",
                "14 metros",
                ". ¿Cuál es su perímetro (circunferencia) y su área superficial? (Usa π ≈ ",
                Frac("22", "7"),
                " o 3.14)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La circunferencia representa el contorno del círculo: C = 2 × π × r = π × d. El área representa la superficie interior: A = π × r². Si el diámetro es d = 14 m, el radio es r = 7 m. En las pruebas Saber, a veces se sugiere usar la fracción aproximada ",
                    Frac("22", "7"),
                    " para π."
                ),
                React.createElement("div", { className: "p-3 bg-sky-50/50 border border-sky-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1" }, "Simplificación con Fracciones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si r = 7, entonces r² = 49. Al multiplicar por ",
                        Frac("22", "7"),
                        " el 7 del denominador simplifica al 49 o 14 directamente: 14 × ",
                        Frac("22", "7"),
                        " = 2 × 22 = 44."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 120 120", className: "w-28" },
                        React.createElement("circle", { cx: "60", cy: "60", r: "50", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "10", y1: "60", x2: "110", y2: "60", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "60", cy: "60", r: "3", fill: "#0369a1" }),
                        React.createElement("text", { x: "60", y: "52", fontSize: "7", fontWeight: "bold", fill: "#0369a1", textAnchor: "middle" }, "d = 14 m"),
                        React.createElement("text", { x: "85", y: "72", fontSize: "7", fontWeight: "bold", fill: "#0369a1", textAnchor: "middle" }, "r = 7 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Circunferencia: 14 × π ≈ 44 m. Área: π × 7² = 49 × π ≈ 154 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La circunferencia mide 44 m y la superficie 154 m²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "C = 14 × ",
                    Frac("22", "7"),
                    " = 44 m  ➔  A = ",
                    Frac("22", "7"),
                    " × 7² = 22 × 7 = 154 m²"
                )
            )
                },
                {
                    titulo: "Descomposición de Figuras Compuestas",
                    situacion: React.createElement("span", {},
                "Una pared tiene la forma de un rectángulo de ",
                "8 m de base",
                " por ",
                "4 m de altura",
                ", coronada por un triángulo de ",
                "3 m de altura",
                " sobre el rectángulo. ¿Cuál es la superficie total de la pared?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para calcular la superficie de una figura compuesta (o irregular), la descomponemos en figuras básicas cuyos límites no se traslapen. Calculamos el área de cada figura por separado y sumamos los resultados."
                ),
                React.createElement("div", { className: "p-3 bg-sky-50/50 border border-sky-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-sky-600 uppercase tracking-wider block mb-1" }, "Descomposición Eficiente"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Área del Rectángulo inferior: A = base × altura = 8 × 4 = 32 m².",
                        React.createElement("br", {}),
                        "• Área del Triángulo superior: A = (base × altura) ÷ 2 = (8 × 3) ÷ 2 = 12 m²."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 160 120", className: "w-36" },
                        // Rectangle
                        React.createElement("rect", { x: "20", y: "60", width: "120", height: "50", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                        // Triangle
                        React.createElement("polygon", { points: "20,60 140,60 80,15", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "1.5" }),
                        
                        React.createElement("text", { x: "80", y: "85", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "Rectángulo: 32 m²"),
                        React.createElement("text", { x: "80", y: "45", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "Triángulo: 12 m²"),
                        
                        React.createElement("text", { x: "80", y: "118", fontSize: "6", textAnchor: "middle" }, "Base = 8 m"),
                        React.createElement("text", { x: "12", y: "85", fontSize: "6", textAnchor: "middle", transform: "rotate(-90 12,85)" }, "Alt = 4 m"),
                        React.createElement("text", { x: "148", y: "37", fontSize: "6", textAnchor: "middle", transform: "rotate(90 148,37)" }, "Alt = 3 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Suma de Áreas"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área Total = Área Rectángulo + Área Triángulo = 32 + 12 = 44 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La superficie de la pared es de 44 m²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-3 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Total = (8 × 4) + ",
                    Frac("8 × 3", "2"),
                    " = 32 + 12 = 44 m²"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Perímetro L",
            question: React.createElement("span", {}, "Una piscina tiene forma de L con las dimensiones externas que se muestran en el plano. Si queremos colocar un borde antideslizante en todo su contorno, ¿cuántos metros de borde requerimos?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 160 120", className: "w-32" },
                    React.createElement("path", { d: "M 20 100 L 140 100 L 140 70 L 80 70 L 80 20 L 20 20 Z", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "2" }),
                    React.createElement("text", { x: "80", y: "115", fontSize: "8", fontWeight: "bold", textAnchor: "middle" }, "14 m"),
                    React.createElement("text", { x: "12", y: "60", fontSize: "8", fontWeight: "bold", textAnchor: "middle", transform: "rotate(-90 12,60)" }, "10 m"),
                    React.createElement("text", { x: "110", y: "85", fontSize: "8", fontWeight: "bold", fill: "#be123c", textAnchor: "middle" }, "? m")
                )
            ),
            options: ["48 metros", "34 metros", "24 metros", "40 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Por la propiedad de proyección de esquinas en ángulos rectos, el perímetro de esta figura en L es igual al del rectángulo de 14m × 10m:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Perímetro = 2 × (Largo + Ancho) = 2 × (14 + 10) = 48 m"
                )
            )
        },
{
            type: "Triángulo Inscrito",
            question: React.createElement("span", {}, "Un terreno rectangular de 12 metros de largo por 8 metros de ancho se divide por su diagonal para destinar una parte triangular al cultivo. ¿Cuál es el área de esta sección triangular?"),
            visual: null,
            options: ["48 m²", "96 m²", "24 m²", "36 m²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El área del terreno rectangular completo es de 12 × 8 = 96 m². La diagonal lo divide exactamente por la mitad, formando un triángulo cuya área es:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = ",
                    Frac("12 m × 8 m", "2"),
                    " = ",
                    Frac("96", "2"),
                    " = 48 m²"
                )
            )
        },
{
            type: "Circunferencia Rueda",
            question: React.createElement("span", {}, "Una rueda de bicicleta tiene un radio de 35 cm. Si la rueda da una vuelta completa sobre el pavimento, ¿qué distancia lineal recorre aproximadamente? (Usa π ≈ ", Frac("22", "7"), ")"),
            visual: null,
            options: ["220 cm", "110 cm", "70 cm", "3850 cm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La distancia recorrida en una vuelta es igual a la longitud de la circunferencia (2 × π × r). Al usar la aproximación de π podemos simplificar de forma exacta:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Distancia = 2 × π × r = 2 × ",
                    Frac("22", "7"),
                    " × 35 cm = 2 × 22 × 5 = 220 cm"
                )
            )
        },
{
            type: "Área Trapecio",
            question: React.createElement("span", {}, "Un terreno tiene la forma de un trapecio con una base mayor de 15 m, una base menor de 9 m y una altura de 8 m. ¿Cuál es su superficie en metros cuadrados?"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 200 90", className: "w-40" },
                    React.createElement("polygon", { points: "20,75 180,75 120,15 60,15", fill: "#bae6fd", stroke: "#0284c7", strokeWidth: "1.5" }),
                    React.createElement("line", { x1: "60", y1: "15", x2: "60", y2: "75", stroke: "#0284c7", strokeWidth: "1", strokeDasharray: "2 2" }),
                    React.createElement("text", { x: "100", y: "85", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "B = 15 m"),
                    React.createElement("text", { x: "90", y: "25", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "b = 9 m"),
                    React.createElement("text", { x: "52", y: "45", fontSize: "6", textAnchor: "middle", transform: "rotate(-90 52,45)" }, "h = 8 m")
                )
            ),
            options: ["96 m²", "120 m²", "192 m²", "72 m²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El área de un trapecio es el producto de la semisuma de sus bases por la altura:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = ",
                    Frac("(B + b) × h", "2"),
                    " = ",
                    Frac("(15 + 9) × 8", "2"),
                    " = 12 × 8 = 96 m²"
                )
            )
        },
{
            type: "Desecho Chapa",
            question: React.createElement("span", {}, "A partir de una lámina cuadrada de metal de 10 cm de lado se recorta el mayor círculo posible para fabricar una tapa circular. ¿Qué área de metal se desperdicia en las esquinas? (Usa π ≈ 3.14)"),
            visual: React.createElement("div", { className: "w-full flex justify-center py-2" },
                React.createElement("svg", { viewBox: "0 0 120 120", className: "w-28" },
                    React.createElement("rect", { x: "10", y: "10", width: "100", height: "100", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                    React.createElement("circle", { cx: "60", cy: "60", r: "50", fill: "#ffffff", stroke: "#0284c7", strokeWidth: "1" }),
                    React.createElement("text", { x: "60", y: "117", fontSize: "7", fontWeight: "bold", textAnchor: "middle" }, "10 cm"),
                    React.createElement("text", { x: "115", y: "65", fontSize: "7", fontWeight: "bold", textAnchor: "middle", transform: "rotate(90 115,65)" }, "10 cm"),
                    React.createElement("text", { x: "20", y: "25", fontSize: "8", fontWeight: "bold", fill: "#be123c", textAnchor: "middle" }, "?")
                )
            ),
            options: ["21.5 cm²", "78.5 cm²", "50 cm²", "9.5 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El círculo inscrito tiene un diámetro igual al lado del cuadrado (10 cm), por tanto su radio es de 5 cm. Restamos el área del círculo del área total de la chapa:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Desperdiciada = 10² - (3.14 × 5²) = 100 - 78.5 = 21.5 cm²"
                )
            )
        }
            ]
        },
        "mat_mod_7": {
            id: "mat_mod_7",
            title: "Módulo 7: Geometría: Áreas Sombreadas",
            description: "Diferencia y descomposición de áreas compuestas.",
            icon: "pattern",
            theme: "purple",
            introduccion: {
                pilarTitulo: "Pilares de la Descomposición Geométrica",
                pilares: [
                    "Cálculo de áreas sombreadas por diferencia de regiones estándar.",
                    "Descomposición de figuras compuestas en rectángulos y triángulos simples.",
                    "Cálculo de coronas circulares y sectores circulares acotados.",
                    "Suma de áreas parciales en estructuras irregulares y logotipos.",
                ],
                deseaPintarText: "El ICFES suele evaluar figuras compuestas formadas por la unión o sustracción de formas simples (ej. círculos dentro de cuadrados). Este módulo te enseña a plantear restas de áreas para hallar las zonas sombreadas."
            },
            teoria: [
                {
                    titulo: "Área Sombreada por Diferencia de Regiones",
                    situacion: React.createElement("span", {},
                "En una lámina rectangular de ",
                "20 cm de largo",
                " por ",
                "15 cm de ancho",
                ", se perforan dos círculos idénticos de ",
                "5 cm de radio",
                " cada uno. ¿Qué área de la lámina queda después de la perforación? (Usa π ≈ 3.14)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El área sombreada resultante se obtiene restando el área de las partes extraídas (perforaciones circulares) del área total de la figura original (rectángulo inicial). La fórmula general es:",
                    React.createElement("br", {}),
                    "• Área Restante = Área Total - N × Área Círculo"
                ),
                React.createElement("div", { className: "p-3 bg-purple-50/50 border border-purple-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1" }, "Operación Clave"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área del Rectángulo = Largo × Ancho. Área del Círculo = π × r²."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "10", y: "10", width: "180", height: "100", fill: "#f3e8ff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "60", cy: "60", r: "30", fill: "#ffffff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "140", cy: "60", r: "30", fill: "#ffffff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "115", fontSize: "7", fill: "#6b21a8", fontWeight: "bold", textAnchor: "middle" }, "20 cm x 15 cm"),
                        React.createElement("line", { x1: "60", y1: "60", x2: "90", y2: "60", stroke: "#7e22ce", strokeWidth: "1" }),
                        React.createElement("text", { x: "75", y: "55", fontSize: "6", fill: "#7e22ce", textAnchor: "middle" }, "r=5cm")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos Parciales"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área Rectángulo = 20 × 15 = 300 cm². Área de cada Círculo ≈ 3.14 × 5² = 78.5 cm²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área sobrante de la lámina es de 143 cm²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = 300 - 2 × (3.14 × 25) = 300 - 157 = 143 cm²"
                )
            )
                },
                {
                    titulo: "Corona Circular",
                    situacion: React.createElement("span", {},
                "Una rotonda vial circular tiene un diámetro exterior de ",
                "12 metros",
                " y un jardín circular interior de ",
                "8 metros de diámetro",
                ". ¿Cuál es el área de la calzada de tránsito pavimentada? (Usa π ≈ 3)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Una corona circular es la región del plano limitada por dos círculos concéntricos (que comparten el mismo centro). El área pavimentada es el círculo mayor menos el círculo menor."
                ),
                React.createElement("div", { className: "p-3 bg-purple-50/50 border border-purple-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1" }, "Ecuación de la Corona"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área = π × (R² - r²), donde R es el radio exterior y r es el radio interior."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("circle", { cx: "100", cy: "60", r: "50", fill: "#f3e8ff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "100", cy: "60", r: "30", fill: "#f8fafc", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "100", y1: "60", x2: "150", y2: "60", stroke: "#7e22ce", strokeWidth: "1" }),
                        React.createElement("line", { x1: "100", y1: "60", x2: "70", y2: "60", stroke: "#c084fc", strokeWidth: "1" }),
                        React.createElement("text", { x: "125", y: "55", fontSize: "6", fill: "#7e22ce", textAnchor: "middle" }, "R = 6 m"),
                        React.createElement("text", { x: "85", y: "55", fontSize: "6", fill: "#a855f7", textAnchor: "middle" }, "r = 4 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo de Radios"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Diámetro exterior 12 m ➔ R = 6 m. Diámetro interior 8 m ➔ r = 4 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área pavimentada de la calzada es de 60 m²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = 3 × (6² - 4²) = 3 × (36 - 16) = 3 × 20 = 60 m²"
                )
            )
                },
                {
                    titulo: "Suma por Descomposición (Traslación)",
                    situacion: React.createElement("span", {},
                "Una baldosa de jardín de ",
                "20 cm por 10 cm",
                " tiene grabada una onda formada por dos semicírculos contrapuestos de ",
                "10 cm de diámetro",
                " cada uno. ¿Cómo calculamos el área sombreada ondulada?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En ocasiones, podemos desplazar una porción del área sombreada hacia otra región hueca idéntica. Esta traslación simplifica el cálculo geométrico complejo a una figura rectangular estándar."
                ),
                React.createElement("div", { className: "p-3 bg-purple-50/50 border border-purple-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1" }, "Efecto Visual"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Al trasladar el semicírculo sombreado superior al vacío inferior, completamos exactamente un cuadrado perfecto de 10 cm de lado."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "10", y: "10", width: "180", height: "80", fill: "none", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "100", y1: "10", x2: "100", y2: "90", stroke: "#7e22ce", strokeWidth: "1", strokeDasharray: "2 2" }),
                        // Shaded area (Square representation)
                        React.createElement("path", { d: "M 10 90 A 45 45 0 0 1 100 90 Z", fill: "#f3e8ff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("path", { d: "M 100 10 A 45 45 0 0 1 190 10 Z", fill: "#f3e8ff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "55", y: "50", fontSize: "6", fill: "#7e22ce", textAnchor: "middle" }, "10 cm"),
                        React.createElement("text", { x: "145", y: "50", fontSize: "6", fill: "#7e22ce", textAnchor: "middle" }, "10 cm")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Simplificación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "La suma de un semicírculo y otro semicírculo idéntico forman un círculo completo. Sin embargo, la traslación demuestra que el área es equivalente a la mitad del rectángulo total."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área sombreada ondulada equivale a 100 cm²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = Lado² = 10 × 10 = 100 cm²"
                )
            )
                },
                {
                    titulo: "Suma y Resta en Polígonos",
                    situacion: React.createElement("span", {},
                "Un terreno tiene forma rectangular de ",
                "12 m de base por 8 m de altura",
                ". En su interior se delimita un triángulo que comparte la base y la altura del rectángulo. ¿Cuál es el área sobrante del rectángulo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El área de un triángulo inscrito que comparte base y altura con un rectángulo ocupa exactamente la mitad del área de este. Esto se puede demostrar restando la fórmula del triángulo del rectángulo."
                ),
                React.createElement("div", { className: "p-3 bg-purple-50/50 border border-purple-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1" }, "Resta Teórica"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área Sobrante = Base × Altura - ",
                        Frac("Base × Altura", "2"),
                        " = ",
                        Frac("Base × Altura", "2"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "20", y: "15", width: "160", height: "90", fill: "#f3e8ff", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("polygon", { points: "20,105 100,15 180,105", fill: "#f8fafc", stroke: "#7e22ce", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "115", fontSize: "7", fontWeight: "bold", fill: "#6b21a8", textAnchor: "middle" }, "Base = 12 m"),
                        React.createElement("text", { x: "12", y: "60", fontSize: "7", fontWeight: "bold", fill: "#6b21a8", textAnchor: "middle", transform: "rotate(-90 12,60)" }, "Alt = 8 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área Rectángulo = 12 × 8 = 96 m². Área Triángulo = (12 × 8)/2 = 48 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área sobrante del terreno es de 48 m²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Sobrante = 96 - 48 = 48 m²"
                )
            )
                },
                {
                    titulo: "Áreas en Cuadrículas (Estimación)",
                    situacion: React.createElement("span", {},
                "Un logotipo en forma de trapecio está dibujado sobre una cuadrícula donde cada cuadrado representa ",
                "1 cm²",
                ". ¿Cómo estimamos su área exacta contando cuadritos?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El análisis de áreas en cuadrículas consiste en sumar la cantidad de cuadrados completamente sombreados y estimar las porciones de los cuadrados parcialmente cortados."
                ),
                React.createElement("div", { className: "p-3 bg-purple-50/50 border border-purple-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-1" }, "Contar y Agrupar"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "1. Cuadrados completos: 4.",
                        React.createElement("br", {}),
                        "2. Cuadrados cortados a la mitad: 4 (equivalen a 2 completos)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        // Draw a grid of 6x4 squares
                        React.createElement("path", { d: "M 20 20 L 140 20 M 20 45 L 140 45 M 20 70 L 140 70 M 20 95 L 140 95 M 20 20 L 20 95 M 50 20 L 50 95 M 80 20 L 80 95 M 110 20 L 110 95 M 140 20 L 140 95", fill: "none", stroke: "#cbd5e1", strokeWidth: "0.5" }),
                        // Shaded trapezoid
                        React.createElement("polygon", { points: "50,45 110,45 140,70 20,70", fill: "#f3e8ff", opacity: "0.8", stroke: "#7e22ce", strokeWidth: "1.5" })
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Formal"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Área del Trapecio = ",
                        Frac("(B + b) × h", "2"),
                        " = ",
                        Frac("(4 + 2) × 1", "2"),
                        " = 3 cuadrados = 6 cm²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El área estimada es de 6 cm²:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = 4 completos + 4 mitades = 4 + 2 = 6 cm²"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Diferencia de Áreas",
            question: React.createElement("span", {},
                "Una placa metálica cuadrada de ",
                "20 cm de lado",
                " tiene una perforación circular en el centro con un ",
                "radio de 7 cm",
                ". ¿Cuál es el área resultante de la superficie metálica de la placa? (Usa π ≈ ",
                Frac("22", "7"),
                ")"
            ),
            options: ["246 cm²", "400 cm²", "154 cm²", "320 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Restamos el área del círculo perforado del área total del cuadrado:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Cuadrado = 20² = 400 cm²  |  Área Círculo = ",
                    Frac("22", "7"),
                    " × 7² = 22 × 7 = 154 cm²  ➔  Sobrante = 400 - 154 = 246 cm²"
                )
            )
        },
{
            type: "Corona Circular",
            question: React.createElement("span", {},
                "Una junta cilíndrica de goma tiene un ",
                "diámetro exterior de 10 cm",
                " y un espesor de pared de ",
                "1 cm",
                " (lo que da un radio interior de 4 cm). ¿Cuál es el área de la sección transversal de goma de la junta? (Usa π ≈ 3.14)"
            ),
            options: ["28.26 cm²", "78.5 cm²", "50.24 cm²", "12.56 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El radio exterior es R = 5 cm (la mitad del diámetro). El radio interior es r = 5 - 1 = 4 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área = 3.14 × (5² - 4²) = 3.14 × (25 - 16) = 3.14 × 9 = 28.26 cm²"
                )
            )
        },
{
            type: "Traslación de Regiones",
            question: React.createElement("span", {},
                "Un rectángulo de ",
                "20 cm por 10 cm",
                " está dividido en dos cuadrados de 10 cm de lado. En cada cuadrado se inscribe una semicircunferencia sombreada. ¿Cuál es el área de la zona sombreada ondulada?"
            ),
            options: ["100 cm²", "200 cm²", "150 cm²", "120 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Al trasladar la sección curva superior al vacío simétrico opuesto, completamos exactamente un cuadrado perfecto de 10 cm de lado:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Equivalente = 10 cm × 10 cm = 100 cm²"
                )
            )
        },
{
            type: "Semicírculo y Triángulo",
            question: React.createElement("span", {},
                "Un jardín rectangular mide ",
                "10 metros de base por 6 metros de altura",
                ". Se le adiciona un cantero semicircular exterior a lo largo de su altura de 6 metros (diámetro = 6 m). ¿Cuál es el área total del jardín en metros cuadrados? (Usa π ≈ 3.14)"
            ),
            options: ["74.13 m²", "60 m²", "88.26 m²", "78.5 m²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El área total es la suma del área del rectángulo y el área del semicírculo (con radio r = 3 m):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Rectángulo = 10 × 6 = 60 m²  |  Área Semicírculo = ",
                    Frac("3.14 × 3²", "2"),
                    " = 14.13 m²  ➔  Total = 60 + 14.13 = 74.13 m²"
                )
            )
        },
{
            type: "Cuadrícula",
            question: React.createElement("span", {},
                "Un logotipo en forma de polígono irregular está dibujado sobre una cuadrícula donde cada cuadrícula tiene dimensiones de ",
                "2 cm por 2 cm",
                " (Área = 4 cm²). Si el polígono cubre exactamente 6 cuadrículas completas y 4 cuadrículas a la mitad, ¿cuál es su área en cm²?"
            ),
            options: ["32 cm²", "24 cm²", "8 cm²", "16 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos el número equivalente de cuadrículas enteras y lo multiplicamos por el área de cada cuadrícula (4 cm²):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Cuadrículas Totales = 6 + ",
                    Frac("4", "2"),
                    " = 6 + 2 = 8 cuadrículas  ➔  Área Total = 8 × 4 cm² = 32 cm²"
                )
            )
        }
            ]
        },
        "mat_mod_8": {
            id: "mat_mod_8",
            title: "Módulo 8: Geometría: Teorema de Pitágoras",
            description: "Relaciones métricas y cálculo de longitudes en triángulos rectángulos.",
            icon: "change_history",
            theme: "rose",
            introduccion: {
                pilarTitulo: "Pilares del Triángulo Rectángulo",
                pilares: [
                    "Identificación del ángulo recto (90°) e hipotenusa frente a los catetos.",
                    "Fórmula y demostración geométrica del Teorema de Pitágoras (c² = a² + b²).",
                    "Despeje y cálculo de la hipotenusa (diagonal) con catetos conocidos.",
                    "Despeje y cálculo de un cateto desconocido a partir de la hipotenusa.",
                ],
                deseaPintarText: "El Teorema de Pitágoras es una de las herramientas más importantes de la geometría. Este módulo te enseñará a calcular distancias en línea recta cruzando terrenos, alturas de muros y diagonales de pantallas."
            },
            teoria: [
                {
                    titulo: "Identificación de Hipotenusa y Catetos",
                    situacion: React.createElement("span", {},
                "En un terreno en forma de triángulo rectángulo, la hipotenusa es la diagonal mayor. Si los catetos que delimitan el ángulo recto miden ",
                "3 metros y 4 metros",
                ", ¿cuál es la longitud de la hipotenusa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El Teorema de Pitágoras establece que en cualquier triángulo rectángulo, el área del cuadrado construido sobre la hipotenusa es igual a la suma de las áreas de los cuadrados de los catetos: c² = a² + b²."
                ),
                React.createElement("div", { className: "p-3 bg-rose-50/50 border border-rose-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1" }, "Trío Pitagórico Fundamental"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La proporción de lados 3:4:5 es el triángulo rectángulo entero más pequeño. Multiplicando estos lados por cualquier constante se obtienen otros triángulos rectángulos."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "30,100 150,100 30,20", fill: "#ffe4e6", stroke: "#e11d48", strokeWidth: "1.5" }),
                        React.createElement("rect", { x: "30", y: "92", width: "8", height: "8", fill: "none", stroke: "#e11d48", strokeWidth: "1" }),
                        React.createElement("text", { x: "90", y: "112", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle" }, "4 m"),
                        React.createElement("text", { x: "20", y: "60", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle" }, "3 m"),
                        React.createElement("text", { x: "100", y: "55", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle" }, "H = ?")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Fórmula básica"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Hipotenusa = √(3² + 4²) = √(9 + 16) = √25 = 5 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La longitud de la hipotenusa es de 5 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "H = \u221a(3² + 4²) = \u221a(9 + 16) = \u221a25 = 5 m"
                )
            )
                },
                {
                    titulo: "Cálculo de la Hipotenusa (Diagonal)",
                    situacion: React.createElement("span", {},
                "La pantalla rectangular de un televisor mide ",
                "12 pulgadas de alto por 16 pulgadas de ancho",
                ". ¿Cómo calculamos la diagonal de la pantalla en pulgadas?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La diagonal divide al rectángulo en dos triángulos rectángulos congruentes. La diagonal actúa como la hipotenusa, y la base y altura son los catetos."
                ),
                React.createElement("div", { className: "p-3 bg-rose-50/50 border border-rose-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1" }, "Relación de Aspecto"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La proporción de lados 12 y 16 es una ampliación de factor 4 del triángulo 3-4-5: (3×4) = 12, (4×4) = 16 ➔ (5×4) = 20."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "20", y: "15", width: "160", height: "90", fill: "none", stroke: "#e11d48", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "20", y1: "105", x2: "180", y2: "15", stroke: "#e11d48", strokeWidth: "1.5", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "100", y: "115", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "16 Pulgadas"),
                        React.createElement("text", { x: "12", y: "60", fontSize: "7", fill: "#9f1239", textAnchor: "middle", transform: "rotate(-90 12,60)" }, "12 Pulgadas"),
                        React.createElement("text", { x: "90", y: "55", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "Diagonal = ?")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Pitagórico"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Diagonal = √(16² + 12²) = √(256 + 144) = √400 = 20 pulgadas."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La diagonal de la pantalla mide 20 pulgadas:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "D = \u221a(16² + 12²) = \u221a(256 + 144) = \u221a400 = 20"
                )
            )
                },
                {
                    titulo: "Cálculo de un Cateto Desconocido",
                    situacion: React.createElement("span", {},
                "Una escalera de ",
                "5 metros de largo",
                " se apoya contra una pared vertical. Si la base de la escalera está separada ",
                "3 metros de la pared",
                ", ¿a qué altura sobre el suelo se apoya la escalera en la pared?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Cuando el valor desconocido es uno de los catetos, despejamos la variable restando el cuadrado del cateto conocido del cuadrado de la hipotenusa: a² = c² - b²."
                ),
                React.createElement("div", { className: "p-3 bg-rose-50/50 border border-rose-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1" }, "Fórmula Despejada"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Cateto = √(Hipotenusa² - Cateto_conocido²)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "40", y1: "15", x2: "40", y2: "105", stroke: "#64748b", strokeWidth: "1.5" }), // Pared
                        React.createElement("line", { x1: "40", y1: "105", x2: "160", y2: "105", stroke: "#64748b", strokeWidth: "1.5" }), // Suelo
                        React.createElement("line", { x1: "40", y1: "25", x2: "140", y2: "105", stroke: "#e11d48", strokeWidth: "2" }), // Escalera
                        React.createElement("text", { x: "90", y: "55", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle", transform: "rotate(-38 90,55)" }, "Escalera = 5 m"),
                        React.createElement("text", { x: "90", y: "115", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle" }, "Separación = 3 m"),
                        React.createElement("text", { x: "30", y: "65", fontSize: "7", fontWeight: "bold", fill: "#9f1239", textAnchor: "middle" }, "Alt = ?")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Operación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Altura = √(5² - 3²) = √(25 - 9) = √16 = 4 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La altura alcanzada es de 4 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = \u221a(5² - 3²) = \u221a(25 - 9) = \u221a16 = 4 m"
                )
            )
                },
                {
                    titulo: "Tríos Pitagóricos Comunes",
                    situacion: React.createElement("span", {},
                "Un topógrafo debe trazar un ángulo recto perfecto en el campo. ¿Cómo puede usar una cuerda marcada con nudos en distancias de ",
                "5, 12 y 13 unidades",
                " para verificar el ángulo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Los tríos pitagóricos son conjuntos de tres números enteros positivos (a, b, c) que satisfacen exactamente la ecuación de Pitágoras. El trío 5-12-13 es una de las soluciones enteras más comunes."
                ),
                React.createElement("div", { className: "p-3 bg-rose-50/50 border border-rose-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1" }, "Ecuación Verificada"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "5² + 12² = 25 + 144 = 169. Como 13² = 169, se cumple perfectamente."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "30,100 170,100 30,40", fill: "#ffe4e6", stroke: "#e11d48", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "112", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "Cateto = 12"),
                        React.createElement("text", { x: "20", y: "70", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "5"),
                        React.createElement("text", { x: "110", y: "65", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "Hip = 13")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Propiedad"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "El ángulo opuesto al lado de 13 unidades es garantizadamente de 90°."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Cualquier triángulo con proporciones 5, 12, 13 es un triángulo rectángulo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "5² + 12² = 25 + 144 = 169 = 13²  ➔  Ángulo = 90°"
                )
            )
                },
                {
                    titulo: "Teorema de Pitágoras en Polígonos Equiláteros",
                    situacion: React.createElement("span", {},
                "Un triángulo equilátero tiene lados de ",
                "10 cm de longitud",
                ". ¿Cómo podemos hallar su altura exacta trazando una línea bisectriz interior?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La altura del triángulo equilátero biseca (corta a la mitad) a la base en un ángulo recto, dividiendo el triángulo original en dos triángulos rectángulos congruentes con una base de la mitad del lado original."
                ),
                React.createElement("div", { className: "p-3 bg-rose-50/50 border border-rose-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-rose-600 uppercase tracking-wider block mb-1" }, "Dimensiones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La hipotenusa mide 10 cm y el cateto de la base mide la mitad: 5 cm."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "40,100 160,100 100,15", fill: "#ffe4e6", stroke: "#e11d48", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "100", y1: "15", x2: "100", y2: "100", stroke: "#e11d48", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "100", y: "112", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "10 cm (base total)"),
                        React.createElement("text", { x: "140", y: "60", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "10 cm"),
                        React.createElement("text", { x: "115", y: "60", fontSize: "7", fill: "#9f1239", textAnchor: "middle" }, "H = ?"),
                        React.createElement("text", { x: "70", y: "95", fontSize: "6", fill: "#9f1239", textAnchor: "middle" }, "5 cm")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "h = √(10² - 5²) = √(100 - 25) = √75 ≈ 8.66 cm."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La altura del triángulo equilátero es de aproximadamente 8.66 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = \u221a(10² - 5²) = \u221a(100 - 25) = \u221a75 \u2248 8.66 cm"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Cálculo Hipotenusa",
            question: React.createElement("span", {},
                "Un cable de tensión sostiene un poste de luz vertical. El cable está sujeto en la parte superior a una altura de ",
                "12 metros",
                " y en el suelo a una distancia de ",
                "5 metros",
                " de la base. ¿Cuánto mide el cable de tensión en metros?"
            ),
            options: ["13 metros", "17 metros", "15 metros", "14.4 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos el Teorema de Pitágoras para hallar la hipotenusa (cable):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Cable = \u221a(12² + 5²) = \u221a(144 + 25) = \u221a169 = 13 metros"
                )
            )
        },
{
            type: "Cálculo Cateto",
            question: React.createElement("span", {},
                "Para alcanzar un gato atrapado en un árbol, se apoya una escalera de ",
                "10 metros de longitud",
                ". Si por seguridad la base de la escalera se coloca a ",
                "6 metros de la base del árbol",
                ", ¿a qué altura en metros sobre el suelo se apoya el extremo superior de la escalera?"
            ),
            options: ["8 metros", "4 metros", "9.2 metros", "7.5 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Despejamos el cateto (altura en la pared) en el Teorema de Pitágoras:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = \u221a(10² - 6²) = \u221a(100 - 36) = \u221a64 = 8 metros"
                )
            )
        },
{
            type: "Distancia en Diagonal",
            question: React.createElement("span", {},
                "Una cancha rectangular mide ",
                "40 metros de largo por 30 metros de ancho",
                ". Si una persona corre en línea recta en diagonal cruzando la cancha desde una esquina hasta la opuesta, ¿cuántos metros recorre?"
            ),
            options: ["50 metros", "70 metros", "60 metros", "45 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La diagonal es la hipotenusa de un triángulo rectángulo de catetos 40 m y 30 m:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Diagonal = \u221a(40² + 30²) = \u221a(1600 + 900) = \u221a2500 = 50 metros"
                )
            )
        },
{
            type: "Altura del Triángulo",
            question: React.createElement("span", {},
                "Un triángulo isósceles tiene dos lados iguales de ",
                "10 cm",
                " y una base de ",
                "12 cm",
                ". ¿Cuál es el área total del triángulo en cm²? (Ayuda: calcula primero la altura con Pitágoras)"
            ),
            options: ["48 cm²", "96 cm²", "60 cm²", "36 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La altura h biseca la base a la mitad (6 cm) formando un triángulo rectángulo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura h = \u221a(10² - 6²) = 8 cm  ➔  Área = ",
                    Frac("Base × h", "2"),
                    " = ",
                    Frac("12 × 8", "2"),
                    " = 48 cm²"
                )
            )
        },
{
            type: "Aplicación Avanzada",
            question: React.createElement("span", {},
                "Un barco viaja ",
                "8 km al norte",
                " y luego gira y navega ",
                "15 km al este",
                ". ¿A qué distancia en línea recta se encuentra del punto de partida?"
            ),
            options: ["17 km", "23 km", "19.5 km", "16 km"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La trayectoria hacia el norte y luego al este forman un ángulo recto (90°):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Distancia = \u221a(8² + 15²) = \u221a(64 + 225) = \u221a289 = 17 km"
                )
            )
        }
            ]
        },
        "mat_mod_9": {
            id: "mat_mod_9",
            title: "Módulo 9: Geometría Espacial: Volúmenes",
            description: "Volumen y capacidad de prismas rectangulares y cilindros.",
            icon: "view_in_ar",
            theme: "pink",
            introduccion: {
                pilarTitulo: "Pilares de la Geometría Espacial",
                pilares: [
                    "Concepto de volumen en tres dimensiones y unidades cúbicas (m³, cm³).",
                    "Volumen de prismas rectangulares (cajas) mediante producto de tres lados.",
                    "Volumen de cilindros a partir del área base y la altura cilíndrica.",
                    "Relación de volumen y capacidad de almacenamiento en litros (1 m³ = 1.000 L).",
                ],
                deseaPintarText: "Este módulo aborda el cálculo de la capacidad de almacenamiento y volumen de sólidos geométricos. Es vital para resolver problemas de piscinas, tanques de agua y embalaje de mercancías."
            },
            teoria: [
                {
                    titulo: "Volumen de Prismas Rectangulares",
                    situacion: React.createElement("span", {},
                "Una caja de embalaje de carga tiene dimensiones de ",
                "3 m de largo, 2 m de ancho y 1.5 m de alto",
                ". ¿Cómo calculamos su capacidad de volumen total en metros cúbicos?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un prisma rectangular (u ortoedro) tiene tres dimensiones ortogonales: largo, ancho y alto. Su volumen es simplemente el producto de estas tres medidas lineales: Volumen = Largo × Ancho × Alto."
                ),
                React.createElement("div", { className: "p-3 bg-pink-50/50 border border-pink-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1" }, "Área de la Base"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "También se puede interpretar como: Área de la Base (Largo × Ancho) × Altura."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        // Isometric box representation
                        React.createElement("polygon", { points: "30,80 110,95 110,55 30,40", fill: "#fce7f3", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("polygon", { points: "110,95 170,75 170,35 110,55", fill: "#fbcfe8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("polygon", { points: "30,40 110,55 170,35 90,20", fill: "#fdf2f8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "70", y: "105", fontSize: "7", fontWeight: "bold", fill: "#be185d", textAnchor: "middle" }, "Largo = 3 m"),
                        React.createElement("text", { x: "145", y: "90", fontSize: "7", fontWeight: "bold", fill: "#be185d", textAnchor: "middle" }, "Ancho = 2 m"),
                        React.createElement("text", { x: "185", y: "55", fontSize: "7", fontWeight: "bold", fill: "#be185d", textAnchor: "middle" }, "H = 1.5 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Lineal"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Volumen = 3 × 2 × 1.5 = 9 m³."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El volumen total de la caja de carga es de 9 m³:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = 3 m × 2 m × 1.5 m = 9 m³"
                )
            )
                },
                {
                    titulo: "Volumen de un Cilindro",
                    situacion: React.createElement("span", {},
                "Un depósito de almacenamiento de granos cilíndrico tiene un radio de base de ",
                "3 metros",
                " y una altura de ",
                "10 metros",
                ". ¿Cómo calculamos su volumen de almacenamiento en metros cúbicos? (Usa π ≈ 3.14)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un cilindro es un sólido de revolución limitado por dos bases circulares paralelas. Su volumen se calcula multiplicando el área del círculo de la base por la altura: Volumen = π × r² × h."
                ),
                React.createElement("div", { className: "p-3 bg-pink-50/50 border border-pink-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1" }, "Ecuación de la Base"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área de la base circular = π × r² = 3.14 × 3² = 3.14 × 9 = 28.26 m²."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("ellipse", { cx: "100", cy: "25", rx: "40", ry: "12", fill: "#fdf2f8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "60", y1: "25", x2: "60", y2: "95", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "140", y1: "25", x2: "140", y2: "95", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("ellipse", { cx: "100", cy: "95", rx: "40", ry: "12", fill: "#fce7f3", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "100", y1: "25", x2: "140", y2: "25", stroke: "#be185d", strokeWidth: "1" }),
                        React.createElement("text", { x: "120", y: "20", fontSize: "7", fill: "#be185d", textAnchor: "middle" }, "r = 3 m"),
                        React.createElement("text", { x: "155", y: "60", fontSize: "7", fontWeight: "bold", fill: "#be185d", textAnchor: "middle" }, "h = 10 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Multiplicación por Altura"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Volumen = Área Base × h = 28.26 × 10 = 282.6 m³."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La capacidad del silo es de 282.6 m³:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = 3.14 × 3² × 10 = 3.14 × 9 × 10 = 282.6 m³"
                )
            )
                },
                {
                    titulo: "Equivalencia de Volumen y Litros",
                    situacion: React.createElement("span", {},
                "Un depósito rectangular de agua tiene dimensiones de ",
                "2 metros de largo, 1.5 metros de ancho y 1 metro de alto",
                ". ¿Cuántos litros de agua le caben cuando está completamente lleno? (Sabiendo que 1 m³ = 1.000 L)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para hallar la capacidad de almacenamiento en litros, primero debemos obtener el volumen tridimensional del contenedor en metros cúbicos (m³), y posteriormente aplicar el factor de equivalencia lineal de un decímetro cúbico equivalente a un litro."
                ),
                React.createElement("div", { className: "p-3 bg-pink-50/50 border border-pink-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1" }, "Equivalencia Directa"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Un metro cúbico (1 m³) equivale exactamente a 1.000 litros. Multiplicamos el volumen final por 1.000."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Volumen = 2 × 1.5 × 1 = 3 m³."
                    ),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed mt-1" },
                        "Capacidad = 3 × 1.000 = 3.000 litros."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La capacidad del depósito es de 3.000 litros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = 3 m³  ➔  Capacidad = 3 × 1.000 = 3.000 L"
                )
            )
                },
                {
                    titulo: "Volumen de Conos y Pirámides",
                    situacion: React.createElement("span", {},
                "Una pirámide cuadrangular tiene una base cuadrada con lados de ",
                "6 metros",
                " y una altura vertical de ",
                "5 metros",
                ". ¿Cómo calculamos su volumen total?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El volumen de cualquier sólido que termina en punta (como pirámides o conos) es exactamente un tercio del volumen de un prisma con la misma base y altura. La fórmula es: Volumen = ",
                    Frac("Área_Base × Altura", "3"),
                    "."
                ),
                React.createElement("div", { className: "p-3 bg-pink-50/50 border border-pink-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1" }, "Área de Base Cuadrada"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Área Base = Lado × Lado = 6 × 6 = 36 m²."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "40,90 120,95 160,80 80,75", fill: "none", stroke: "#db2777", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("polygon", { points: "40,90 120,95 100,20", fill: "#fce7f3", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("polygon", { points: "120,95 160,80 100,20", fill: "#fbcfe8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "100", y1: "20", x2: "100", y2: "85", stroke: "#be185d", strokeWidth: "1.2", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "80", y: "105", fontSize: "7", fill: "#be185d", textAnchor: "middle" }, "Lado = 6 m"),
                        React.createElement("text", { x: "115", y: "60", fontSize: "7", fill: "#be185d", textAnchor: "middle" }, "h = 5 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Volumen = (36 m² × 5 m) ÷ 3 = 180 ÷ 3 = 60 m³."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El volumen de la pirámide es de 60 m³:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = ",
                    Frac("36 × 5", "3"),
                    " = 12 × 5 = 60 m³"
                )
            )
                },
                {
                    titulo: "Escalamiento Tridimensional (Efecto Cúbico)",
                    situacion: React.createElement("span", {},
                "Una caja cúbica de metal de ",
                "10 cm de arista",
                " tiene un volumen de 1.000 cm³. Si duplicamos la longitud de sus aristas a ",
                "20 cm",
                ", ¿cuántas veces aumenta su volumen total?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "¡Cuidado con la proporcionalidad de volúmenes! Si las longitudes lineales de un objeto tridimensional aumentan por un factor de proporción ",
                    React.createElement("strong", {}, "N"),
                    ", su superficie o área aumenta por ",
                    React.createElement("strong", {}, "N²"),
                    ", y su volumen aumenta por el factor al cubo ",
                    React.createElement("strong", {}, "N³"),
                    "."
                ),
                React.createElement("div", { className: "p-3 bg-pink-50/50 border border-pink-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-pink-600 uppercase tracking-wider block mb-1" }, "Efecto Volumétrico"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si el factor de duplicación es 2, el volumen aumenta 2³ = 8 veces."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 65", className: "w-64 mx-auto mb-2" },
                        // Original Cube
                        React.createElement("rect", { x: "20", y: "25", width: "20", height: "20", fill: "#fce7f3", stroke: "#db2777" }),
                        React.createElement("text", { x: "30", y: "57", fontSize: "5", textAnchor: "middle" }, "10 cm"),
                        
                        React.createElement("text", { x: "90", y: "37", fontSize: "7", fontWeight: "bold" }, "Factor N = 2"),
                        
                        // Scaled Cube
                        React.createElement("rect", { x: "140", y: "15", width: "40", height: "40", fill: "#fbcfe8", stroke: "#db2777" }),
                        React.createElement("text", { x: "160", y: "62", fontSize: "5", textAnchor: "middle" }, "20 cm")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Comparación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Volumen 1 = 10³ = 1.000 cm³. Volumen 2 = 20³ = 8.000 cm³. Relación = 8.000 ÷ 1.000 = 8 veces."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El volumen aumenta en un factor de N³ = 8 veces:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen 2 = Volumen 1 × 2³ = 1.000 cm³ × 8 = 8.000 cm³"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Volumen Prisma",
            question: React.createElement("span", {},
                "Una caja rectangular de encomiendas tiene dimensiones de ",
                "40 cm de largo, 30 cm de ancho y 20 cm de alto",
                ". ¿Cuál es su capacidad volumétrica en litros? (Recuerda que 1.000 cm³ = 1 litro)"
            ),
            options: ["24 litros", "24.000 litros", "12 litros", "48 litros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El volumen en centímetros cúbicos se obtiene multiplicando las tres dimensiones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = 40 × 30 × 20 = 24.000 cm³  ➔  En litros: ",
                    Frac("24.000", "1.000"),
                    " = 24 litros"
                )
            )
        },
{
            type: "Volumen Cilindro",
            question: React.createElement("span", {},
                "Un cilindro metálico tiene un ",
                "diámetro de base de 4 metros",
                " y una altura de ",
                "5 metros",
                ". ¿Cuál es su volumen en metros cúbicos? (Usa π ≈ 3.14)"
            ),
            options: ["62.8 m³", "251.2 m³", "125.6 m³", "20 m³"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El diámetro es de 4 m, por tanto el radio es r = 2 m:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = 3.14 × 2² × 5 = 3.14 × 4 × 5 = 3.14 × 20 = 62.8 m³"
                )
            )
        },
{
            type: "Equivalencia Litros",
            question: React.createElement("span", {},
                "Una piscina en forma de prisma rectangular tiene ",
                "5 m de largo, 3 m de ancho y 2 m de profundidad",
                ". Si está llena de agua hasta la mitad de su capacidad, ¿cuántos litros de agua contiene? (Sabiendo que 1 m³ = 1.000 L)"
            ),
            options: ["15.000 litros", "30.000 litros", "7.500 litros", "150.000 litros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos el volumen total y luego la mitad por el factor de litros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen Total = 5 × 3 × 2 = 30 m³  ➔  Mitad = 15 m³  ➔  En litros = 15 × 1.000 = 15.000 L"
                )
            )
        },
{
            type: "Volumen Cono",
            question: React.createElement("span", {},
                "Un cono de señalización de tránsito tiene una base circular de ",
                "10 cm de radio",
                " y una altura vertical de ",
                "30 cm",
                ". ¿Cuál es su volumen en cm³? (Usa π ≈ 3.14)"
            ),
            options: ["3140 cm³", "9420 cm³", "1046 cm³", "1570 cm³"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El volumen del cono es la tercera parte del cilindro correspondiente:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen = ",
                    Frac("3.14 × 10² × 30", "3"),
                    " = 3.14 × 100 × 10 = 3.14 × 1.000 = 3140 cm³"
                )
            )
        },
{
            type: "Escalamiento Cúbico",
            question: React.createElement("span", {},
                "Una escultura metálica en forma de pirámide tiene un volumen de ",
                "5 dm³",
                ". Si se construye una réplica exacta a escala ampliando todas sus medidas lineales al triple (N = 3), ¿cuál será el volumen de la nueva réplica en dm³?"
            ),
            options: ["135 dm³", "45 dm³", "15 dm³", "90 dm³"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El volumen escala en función del cubo del factor de escala lineal N³ (3³ = 27):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Volumen Final = 5 dm³ × 3³ = 5 × 27 = 135 dm³"
                )
            )
        }
            ]
        },
        "mat_mod_10": {
            id: "mat_mod_10",
            title: "Módulo 10: Plano Cartesiano y Distancia",
            description: "Coordenadas, distancia en el plano bidimensional y cálculo de pendientes.",
            icon: "grid_on",
            theme: "blue",
            introduccion: {
                pilarTitulo: "Pilares de la Geometría Analítica",
                pilares: [
                    "Ubicación de puntos mediante parejas ordenadas (x, y) en los 4 cuadrantes.",
                    "Fórmula de distancia entre dos puntos mediante proyecciones de catetos.",
                    "Cálculo de las coordenadas del punto medio de un segmento de recta.",
                    "Definición y cálculo de la pendiente (m) de una recta en el plano.",
                ],
                deseaPintarText: "El plano cartesiano conecta el álgebra y la geometría. Aprenderás a graficar coordenadas en mapas digitales, calcular el camino más corto entre dos puntos y deducir la inclinación de una rampa."
            },
            teoria: [
                {
                    titulo: "Coordenadas en los Cuatro Cuadrantes",
                    situacion: React.createElement("span", {},
                "En un mapa cuadriculado de una ciudad, la estación de bomberos está en el punto ",
                "(-3, 4)",
                " y un hospital está en el punto ",
                "(5, -2)",
                ". ¿Cómo ubicamos estos puntos en el plano cartesiano?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El plano cartesiano está dividido por dos ejes ortogonales en cuatro cuadrantes:",
                    React.createElement("br", {}),
                    "• Cuadrante I: (+, +) | Cuadrante II: (-, +)",
                    React.createElement("br", {}),
                    "• Cuadrante III: (-, -) | Cuadrante IV: (+, -)"
                ),
                React.createElement("div", { className: "p-3 bg-blue-50/50 border border-blue-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1" }, "Lectura de Coordenadas"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La primera coordenada representa la distancia sobre el Eje X (horizontal), y la segunda la distancia sobre el Eje Y (vertical)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 140 120", className: "w-64 mx-auto mb-2" },
                        // Axes
                        React.createElement("line", { x1: "10", y1: "60", x2: "130", y2: "60", stroke: "#475569", strokeWidth: "1.2" }), // X
                        React.createElement("line", { x1: "70", y1: "10", x2: "70", y2: "110", stroke: "#475569", strokeWidth: "1.2" }), // Y
                        // Points
                        React.createElement("circle", { cx: "40", cy: "20", r: "3", fill: "#2563eb" }),
                        React.createElement("text", { x: "40", y: "15", fontSize: "6", fill: "#1d4ed8", textAnchor: "middle" }, "Bomberos (-3, 4)"),
                        React.createElement("circle", { cx: "120", cy: "80", r: "3", fill: "#2563eb" }),
                        React.createElement("text", { x: "120", y: "90", fontSize: "6", fill: "#1d4ed8", textAnchor: "middle" }, "Hospital (5, -2)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Ubicación cuadrante"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "(-3, 4) está en el Cuadrante II. (5, -2) está en el Cuadrante IV."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La estación de bomberos está en el cuadrante II y el hospital en el IV."),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Bomberos = Cuadrante II (x<0, y>0)  |  Hospital = Cuadrante IV (x>0, y<0)"
                )
            )
                },
                {
                    titulo: "Distancia entre Dos Puntos",
                    situacion: React.createElement("span", {},
                "Una antena de comunicaciones está en las coordenadas ",
                "(1, 2)",
                " y otra está en ",
                "(7, 10)",
                ". ¿Cómo calculamos la distancia geométrica en línea recta entre las dos antenas?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La distancia entre dos puntos en el plano cartesiano es la hipotenusa de un triángulo rectángulo imaginario. Los catetos son las diferencias absolutas de las coordenadas X e Y."
                ),
                React.createElement("div", { className: "p-3 bg-blue-50/50 border border-blue-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1" }, "Ecuación de Distancia"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "d = √((x2 - x1)² + (y2 - y1)²). Es la aplicación directa de Pitágoras en geometría analítica."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 160 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "30,80 130,80 130,20", fill: "none", stroke: "#cbd5e1", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("line", { x1: "30", y1: "80", x2: "130", y2: "20", stroke: "#2563eb", strokeWidth: "2" }),
                        React.createElement("circle", { cx: "30", cy: "80", r: "3", fill: "#2563eb" }),
                        React.createElement("text", { x: "25", y: "90", fontSize: "6" }, "A(1, 2)"),
                        React.createElement("circle", { cx: "130", cy: "20", r: "3", fill: "#2563eb" }),
                        React.createElement("text", { x: "135", y: "15", fontSize: "6" }, "B(7, 10)"),
                        React.createElement("text", { x: "80", y: "90", fontSize: "6", fill: "#475569" }, "dx = 6"),
                        React.createElement("text", { x: "140", y: "50", fontSize: "6", fill: "#475569" }, "dy = 8")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos Parciales"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Diferencia en X: 7 - 1 = 6. Diferencia en Y: 10 - 2 = 8. Distancia = √(6² + 8²) = √(36 + 64) = √100 = 10."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La distancia en línea recta es de 10 unidades:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "d = \u221a((7 - 1)² + (10 - 2)²) = \u221a(6² + 8²) = \u221a100 = 10"
                )
            )
                },
                {
                    titulo: "Punto Medio de un Segmento",
                    situacion: React.createElement("span", {},
                "Una línea de ferrocarril conecta la ciudad A en el punto ",
                "(2, 3)",
                " con la ciudad B en ",
                "(8, 11)",
                ". ¿Cómo hallamos la ubicación exacta de una estación de parada en el punto medio?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El punto medio es el punto que se encuentra a igual distancia de ambos extremos de un segmento de recta. Sus coordenadas se determinan promediando aritméticamente las coordenadas individuales."
                ),
                React.createElement("div", { className: "p-3 bg-blue-50/50 border border-blue-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1" }, "Fórmulas de Promedio"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Xm = ",
                        Frac("x1 + x2", "2"),
                        "  |  Ym = ",
                        Frac("y1 + y2", "2"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Coordenada X: (2 + 8) / 2 = 10 / 2 = 5."
                    ),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed mt-1" },
                        "Coordenada Y: (3 + 11) / 2 = 14 / 2 = 7."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La estación de parada debe estar en las coordenadas (5, 7):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Pm = (",
                    Frac("2 + 8", "2"),
                    ", ",
                    Frac("3 + 11", "2"),
                    ") = (5, 7)"
                )
            )
                },
                {
                    titulo: "Cálculo e Interpretación de la Pendiente",
                    situacion: React.createElement("span", {},
                "Una rampa de acceso para discapacitados parte del suelo en el punto ",
                "(1, 0)",
                " y termina a una altura de 2 metros en el punto ",
                "(5, 2)",
                ". ¿Cómo calculamos la pendiente (m) de la rampa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La pendiente (m) representa la inclinación o tasa de cambio de una recta. Se calcula dividiendo la diferencia de alturas (desplazamiento vertical en Y) por la distancia recorrida (desplazamiento horizontal en X)."
                ),
                React.createElement("div", { className: "p-3 bg-blue-50/50 border border-blue-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1" }, "Ecuación de Inclinación"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "m = ",
                        Frac("y2 - y1", "x2 - x1"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "65", x2: "180", y2: "65", stroke: "#cbd5e1" }), // Suelo
                        React.createElement("line", { x1: "30", y1: "65", x2: "150", y2: "25", stroke: "#2563eb", strokeWidth: "2" }), // Rampa
                        React.createElement("line", { x1: "150", y1: "65", x2: "150", y2: "25", stroke: "#475569", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "25", y: "75", fontSize: "6" }, "(1, 0)"),
                        React.createElement("text", { x: "155", y: "20", fontSize: "6" }, "(5, 2)"),
                        React.createElement("text", { x: "90", y: "75", fontSize: "6", fill: "#475569" }, "Desplazamiento horizontal = 4 m"),
                        React.createElement("text", { x: "155", y: "45", fontSize: "6", fill: "#475569", transform: "rotate(-90 155,45)" }, "Altura = 2 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "m = (2 - 0) / (5 - 1) = 2 / 4 = 0.5 (o 50% de pendiente)."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La pendiente de la rampa es de 0.5 (o 1/2):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = ",
                    Frac("2 - 0", "5 - 1"),
                    " = ",
                    Frac("2", "4"),
                    " = 0.5"
                )
            )
                },
                {
                    titulo: "Rectas Paralelas y Perpendiculares",
                    situacion: React.createElement("span", {},
                "Dos tuberías A y B siguen trayectorias lineales en una fábrica. La tubería A conecta los puntos ",
                "(0, 1) y (4, 3)",
                ". La tubería B es perpendicular a la A y cruza por el punto ",
                "(2, 4)",
                ". ¿Cómo determinamos la pendiente y la ecuación lineal de la tubería B?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "1. Dos rectas son paralelas si y solo si tienen la misma pendiente (m1 = m2).",
                    React.createElement("br", {}),
                    "2. Dos rectas son perpendiculares si y solo si el producto de sus pendientes es -1 (m1 × m2 = -1). Esto significa que la pendiente de la recta perpendicular es la recíproca negativa de la original (m2 = -1/m1)."
                ),
                React.createElement("div", { className: "p-3 bg-blue-50/50 border border-blue-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-blue-600 uppercase tracking-wider block mb-1" }, "Ecuación Punto-Pendiente"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "y - y1 = m × (x - x1)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "95", x2: "180", y2: "55", stroke: "#2563eb", strokeWidth: "1.5" }), // Tubería A
                        React.createElement("line", { x1: "60", y1: "20", x2: "110", y2: "110", stroke: "#e11d48", strokeWidth: "1.5" }), // Tubería B
                        React.createElement("text", { x: "135", y: "60", fontSize: "6", fill: "#2563eb" }, "Tubería A (m1 = 0.5)"),
                        React.createElement("text", { x: "105", y: "35", fontSize: "6", fill: "#e11d48" }, "Tubería B (m2 = -2)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Pendiente m1 = (3 - 1) / (4 - 0) = 2/4 = 0.5. Pendiente perpendicular m2 = -1 / 0.5 = -2. Ecuación tubería B: y - 4 = -2(x - 2) ➔ y = -2x + 8."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La pendiente de la tubería perpendicular B es -2 y su ecuación es:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m2 = -2  |  y = -2x + 8"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Distancia",
            question: React.createElement("span", {},
                "En un plano cartesiano, un dron vuela desde el punto A de coordenadas ",
                "(2, -3)",
                " hasta el punto B de coordenadas ",
                "(8, 5)",
                ". ¿Qué distancia en línea recta recorre el dron en unidades?"
            ),
            options: ["10 unidades", "14 unidades", "12 unidades", "8 unidades"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos la diferencia en X e Y para aplicar la fórmula de distancia cartesiana:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "dx = 8 - 2 = 6  |  dy = 5 - (-3) = 8  ➔  d = \u221a(6² + 8²) = \u221a(36 + 64) = 10"
                )
            )
        },
{
            type: "Punto Medio",
            question: React.createElement("span", {},
                "Un puente rectilíneo en el plano tiene un extremo A en las coordenadas ",
                "(-4, 2)",
                " y el otro extremo B en ",
                "(6, 8)",
                ". ¿Cuáles son las coordenadas del centro de control ubicado en el punto medio del puente?"
            ),
            options: ["(1, 5)", "(2, 10)", "(1, 3)", "(2, 5)"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Promediamos los valores de las coordenadas en X y en Y:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Xm = ",
                    Frac("-4 + 6", "2"),
                    " = 1  |  Ym = ",
                    Frac("2 + 8", "2"),
                    " = 5  ➔  Punto Medio = (1, 5)"
                )
            )
        },
{
            type: "Cálculo Pendiente",
            question: React.createElement("span", {},
                "Una tubería de desagüe subterránea conecta el punto A en ",
                "(3, 7)",
                " con el punto B en ",
                "(9, 4)",
                " en el plano. ¿Cuál es el valor de la pendiente (m) de la tubería?"
            ),
            options: [
                React.createElement("span", {}, "-", Frac("1", "2")),
                React.createElement("span", {}, "-", Frac("2", "3")),
                React.createElement("span", {}, Frac("1", "2")),
                React.createElement("span", {}, "-2")
            ],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la ecuación de la pendiente:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = ",
                    Frac("y2 - y1", "x2 - x1"),
                    " = ",
                    Frac("4 - 7", "9 - 3"),
                    " = ",
                    Frac("-3", "6"),
                    " = -0.5 (pendiente descendente)"
                )
            )
        },
{
            type: "Cuadrante",
            question: React.createElement("span", {},
                "Un satélite se localiza en las coordenadas cartesianas ",
                "(-15, -20)",
                ". ¿En cuál de los cuadrantes del plano cartesiano se encuentra ubicado?"
            ),
            options: ["Cuadrante III", "Cuadrante II", "Cuadrante IV", "Cuadrante I"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Ubicamos los signos de las coordenadas (-15, -20):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x = -15 (negativo)  |  y = -20 (negativo)  ➔  Ambos negativos corresponden al Cuadrante III"
                )
            )
        },
{
            type: "Pendiente Cero",
            question: React.createElement("span", {},
                "Una carretera rectilínea sobre el plano conecta el punto A ",
                "(5, 8)",
                " con el punto B ",
                "(12, 8)",
                ". ¿Cuál es el valor de la pendiente de esta carretera?"
            ),
            options: ["0", "Indefinida", "1", "7"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos la pendiente con los puntos dados:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = ",
                    Frac("8 - 8", "12 - 5"),
                    " = ",
                    Frac("0", "7"),
                    " = 0 (línea horizontal perfectamente plana)"
                )
            )
        }
            ]
        },
        "mat_mod_11": {
            id: "mat_mod_11",
            title: "Módulo 11: Semejanza y Teorema de Tales",
            description: "Triángulos semejantes y proporcionalidad en geometría.",
            icon: "star_border",
            theme: "teal",
            introduccion: {
                pilarTitulo: "Pilares de la Semejanza Geométrica",
                pilares: [
                    "Definición de figuras semejantes y proporcionalidad de sus lados.",
                    "Teorema de Tales sobre segmentos cortados por rectas paralelas.",
                    "Resolución de problemas de sombras proyectadas (Tales aplicado).",
                    "Criterios de semejanza de triángulos (Ángulo-Ángulo, Lado-Ángulo-Lado).",
                ],
                deseaPintarText: "La semejanza de figuras permite calcular distancias inaccesibles. Aprenderás a deducir la altura de un edificio a partir de su sombra o a resolver problemas geométricos donde se dividen lados paralelos."
            },
            teoria: [
                {
                    titulo: "Concepto de Semejanza de Figuras",
                    situacion: React.createElement("span", {},
                "Una fotografía de ",
                "10 cm de ancho por 15 cm de alto",
                " se amplía proporcionalmente de modo que su nuevo ancho mide ",
                "30 cm",
                ". ¿Cómo calculamos la nueva altura de la fotografía?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Dos figuras son semejantes si sus lados correspondientes (homólogos) son proporcionales y sus ángulos correspondientes son iguales. La relación de aumento se llama constante de semejanza o razón."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Proporcionalidad"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Razón de semejanza k = ",
                        Frac("Ancho final", "Ancho inicial"),
                        " = ",
                        Frac("30", "10"),
                        " = 3."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-64 mx-auto mb-2" },
                        // Original photo
                        React.createElement("rect", { x: "20", y: "15", width: "20", height: "30", fill: "#f0fdf4", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "30", y: "50", fontSize: "5", textAnchor: "middle" }, "10x15"),
                        
                        React.createElement("text", { x: "90", y: "37", fontSize: "7", fontWeight: "bold" }, "Razón k = 3"),
                        
                        // Scaled photo
                        React.createElement("rect", { x: "130", y: "15", width: "50", height: "55", fill: "#ccfbf1", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "155", y: "50", fontSize: "5", textAnchor: "middle" }, "30xH")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Operación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Nueva altura H = Altura original × k = 15 cm × 3 = 45 cm."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La altura de la fotografía ampliada es de 45 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "H = 15 cm × ",
                    Frac("30", "10"),
                    " = 15 × 3 = 45 cm"
                )
            )
                },
                {
                    titulo: "Teorema de Tales en Triángulos",
                    situacion: React.createElement("span", {},
                "En un triángulo ABC se traza una línea DE paralela a la base BC. Si el segmento AD mide ",
                "6 cm",
                ", DB mide ",
                "3 cm",
                " y el segmento AE mide ",
                "8 cm",
                ", ¿cuánto mide el segmento EC?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El Teorema de Tales indica que si en un triángulo se traza una línea paralela a cualquiera de sus lados, los otros dos lados quedan divididos en segmentos proporcionales entre sí."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Ecuación de Tales"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "AD ÷ DB = AE ÷ EC. Esto nos permite despejar la variable desconocida."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "100,15 30,105 170,105", fill: "none", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "53", y1: "75", x2: "147", y2: "75", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "10", fontSize: "7", fill: "#0f766e", textAnchor: "middle" }, "A"),
                        React.createElement("text", { x: "47", y: "78", fontSize: "6", fill: "#0f766e" }, "D"),
                        React.createElement("text", { x: "148", y: "78", fontSize: "6", fill: "#0f766e" }, "E"),
                        React.createElement("text", { x: "70", y: "45", fontSize: "6" }, "6 cm"),
                        React.createElement("text", { x: "32", y: "93", fontSize: "6" }, "3 cm"),
                        React.createElement("text", { x: "130", y: "45", fontSize: "6" }, "8 cm"),
                        React.createElement("text", { x: "162", y: "93", fontSize: "6" }, "X = ?")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Planteamiento"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "6 / 3 = 8 / X. Como 6 / 3 = 2, entonces 2 = 8 / X, de donde X = 4 cm."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El segmento EC mide 4 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "X = ",
                    Frac("3 × 8", "6"),
                    " = ",
                    Frac("24", "6"),
                    " = 4 cm"
                )
            )
                },
                {
                    titulo: "Medición Indirecta (Sombras Proyectadas)",
                    situacion: React.createElement("span", {},
                "Un árbol proyecta una sombra de ",
                "12 metros de largo",
                " sobre el suelo. En ese mismo instante, una vara vertical de ",
                "2 metros de altura",
                " clavada en el suelo proyecta una sombra de ",
                "1.5 metros.",
                " ¿Cuál es la altura del árbol?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Los rayos solares paralelos forman triángulos rectángulos semejantes con el suelo en el mismo momento temporal. Esto nos permite comparar de forma directa la altura y sombra del árbol con la de la vara."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Ecuación de Semejanza"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Altura_Árbol ÷ Sombra_Árbol = Altura_Vara ÷ Sombra_Vara."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-64 mx-auto mb-2" },
                        // Tree Triangle
                        React.createElement("line", { x1: "20", y1: "65", x2: "110", y2: "65", stroke: "#0d9488", strokeWidth: "1.5" }), // Sombra
                        React.createElement("line", { x1: "20", y1: "15", x2: "20", y2: "65", stroke: "#0f766e", strokeWidth: "2" }), // Árbol
                        React.createElement("line", { x1: "20", y1: "15", x2: "110", y2: "65", stroke: "#cbd5e1", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "12", y: "40", fontSize: "7", fontWeight: "bold" }, "H = ?"),
                        React.createElement("text", { x: "65", y: "75", fontSize: "7" }, "12 m"),
                        
                        // Post Triangle
                        React.createElement("line", { x1: "140", y1: "65", x2: "170", y2: "65", stroke: "#0d9488", strokeWidth: "1.5" }), // Sombra
                        React.createElement("line", { x1: "140", y1: "35", x2: "140", y2: "65", stroke: "#0f766e", strokeWidth: "2" }), // Vara
                        React.createElement("line", { x1: "140", y1: "35", x2: "170", y2: "65", stroke: "#cbd5e1", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "132", y: "50", fontSize: "7" }, "2 m"),
                        React.createElement("text", { x: "155", y: "75", fontSize: "7" }, "1.5 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Operación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "H = (12 m × 2 m) ÷ 1.5 m = 24 ÷ 1.5 = 16 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La altura del árbol es de 16 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "H = ",
                    Frac("12 × 2", "1.5"),
                    " = ",
                    Frac("24", "1.5"),
                    " = 16 m"
                )
            )
                },
                {
                    titulo: "Criterios de Semejanza de Triángulos",
                    situacion: React.createElement("span", {},
                "Un ingeniero quiere determinar si dos piezas metálicas triangulares son semejantes. La primera tiene ángulos de ",
                "35° y 55°",
                ", y la segunda tiene ángulos de ",
                "55° y 90°",
                ". ¿Podemos afirmar con certeza que los triángulos son semejantes?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para comprobar la semejanza de triángulos no es necesario medir todos los lados y ángulos. Contamos con tres criterios básicos:",
                    React.createElement("br", {}),
                    "• Criterio AA (Ángulo-Ángulo): Si dos ángulos de un triángulo son iguales a dos de otro.",
                    React.createElement("br", {}),
                    "• Criterio LAL (Lado-Ángulo-Lado): Si dos lados son proporcionales y el ángulo entre ellos es igual.",
                    React.createElement("br", {}),
                    "• Criterio LLL (Lado-Lado-Lado): Si los tres pares de lados homólogos son proporcionales."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Suma de Ángulos"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La suma de los ángulos internos de todo triángulo es de 180°."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "30,100 80,100 30,30", fill: "#e0f2fe", stroke: "#0284c7", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "40", y: "90", fontSize: "6" }, "90°"),
                        React.createElement("text", { x: "65", y: "97", fontSize: "6" }, "35°"),
                        React.createElement("text", { x: "42", y: "50", fontSize: "6" }, "55°"),
                        
                        React.createElement("polygon", { points: "120,100 170,100 120,30", fill: "#ccfbf1", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "130", y: "90", fontSize: "6" }, "90°"),
                        React.createElement("text", { x: "155", y: "97", fontSize: "6" }, "35°"),
                        React.createElement("text", { x: "132", y: "50", fontSize: "6" }, "55°")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Pieza A: Ángulos = 35°, 55° y el tercero es 180° - 35° - 55° = 90°. Pieza B: Ángulos = 55°, 90° y el tercero es 180° - 55° - 90° = 35°. Ambas piezas tienen ángulos idénticos: 35°, 55° y 90°."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Las piezas son semejantes por el criterio Ángulo-Ángulo (AA):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Ángulos: 35°, 55°, 90° ➔ Semejantes por Criterio AA"
                )
            )
                },
                {
                    titulo: "Relación de Semejanza en Áreas",
                    situacion: React.createElement("span", {},
                "Una lona publicitaria rectangular de ",
                "2 m² de área",
                " debe ampliarse proporcionalmente de manera que sus dimensiones lineales se tripliquen (escala lineal de factor ",
                "k = 3",
                "). ¿Qué área de lona se necesitará para la lona gigante?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Cuando ampliamos una figura por un factor de escala k, sus medidas de longitud aumentan en factor k. Sin embargo, su área aumenta en factor k² (al cuadrado de la escala lineal). La relación es:",
                    React.createElement("br", {}),
                    "• Área Final = Área Inicial × k²"
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Escalamiento Bidimensional"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si el largo aumenta 3 veces y el ancho aumenta 3 veces, el producto largo × ancho aumenta 3 × 3 = 9 veces."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "20", y: "45", width: "20", height: "10", fill: "#ccfbf1", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "30", y: "40", fontSize: "6", fill: "#0f766e", textAnchor: "middle" }, "2 m²"),
                        React.createElement("line", { x1: "50", y1: "50", x2: "90", y2: "50", stroke: "#0d9488", strokeWidth: "1", strokeDasharray: "2 2" }),
                        React.createElement("text", { x: "70", y: "45", fontSize: "6", fill: "#0d9488", textAnchor: "middle" }, "Lados ×3"),
                        React.createElement("rect", { x: "100", y: "20", width: "60", height: "30", fill: "#ccfbf1", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "130", y: "15", fontSize: "6", fill: "#0f766e", textAnchor: "middle" }, "Área = 18 m²")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo de Área"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Factor de escala lineal k = 3. Factor de escala en áreas = k² = 3² = 9. Área Final = 2 m² × 9 = 18 m²."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se requerirán 18 m² de lona para el cartel gigante:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área Final = 2 m² × 3² = 2 × 9 = 18 m²"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Tales Sombras",
            question: React.createElement("span", {},
                "Un edificio proyecta una sombra de ",
                "24 metros",
                " en el suelo. Al mismo tiempo, un semáforo de ",
                "3 metros de altura",
                " proyecta una sombra de ",
                "2 metros",
                ". ¿Cuál es la altura del edificio en metros?"
            ),
            options: ["36 metros", "16 metros", "48 metros", "24 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos la relación de semejanza entre el edificio y el semáforo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = Sombra_edificio × ",
                    Frac("Altura_semáforo", "Sombra_semáforo"),
                    " = 24 × ",
                    Frac("3", "2"),
                    " = 12 × 3 = 36 metros"
                )
            )
        },
{
            type: "Razón Áreas",
            question: React.createElement("span", {},
                "Dos rectángulos A y B son semejantes. Si la razón de semejanza de sus lados es ",
                "k = 3",
                " (los lados de B son el triple que los de A) y el área del rectángulo A mide ",
                "8 cm²",
                ", ¿cuál es el área del rectángulo B?"
            ),
            options: ["72 cm²", "24 cm²", "64 cm²", "36 cm²"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La razón entre las áreas de figuras semejantes es igual al cuadrado de la razón de semejanza lineal k² (3² = 9):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Área de B = Área de A × k² = 8 cm² × 3² = 8 × 9 = 72 cm²"
                )
            )
        },
{
            type: "Tales Triángulo",
            question: React.createElement("span", {},
                "En un triángulo ABC, una recta paralela al lado BC corta a los lados AB y AC en los puntos D y E respectivamente. Si AD = 4 cm, DB = 2 cm y AE = 6 cm, ¿cuánto mide el segmento EC?"
            ),
            options: ["3 cm", "12 cm", "8 cm", "4 cm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Por el Teorema de Tales, los segmentos sobre los lados cortados son proporcionales:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "EC = ",
                    Frac("DB × AE", "AD"),
                    " = ",
                    Frac("2 × 6", "4"),
                    " = ",
                    Frac("12", "4"),
                    " = 3 cm"
                )
            )
        },
{
            type: "Semejanza Lados",
            question: React.createElement("span", {},
                "Un plano de una casa rectangular mide ",
                "15 cm de largo",
                ". Si la casa real mide ",
                "30 metros de largo",
                " por ",
                "16 metros de ancho",
                ", ¿cuál es el ancho de la casa en el plano en cm?"
            ),
            options: ["8 cm", "10 cm", "12 cm", "7.5 cm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Establecemos la proporción de semejanza entre el plano y la realidad:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Ancho plano = Ancho real × ",
                    Frac("Largo plano", "Largo real"),
                    " = 16 m × ",
                    Frac("15 cm", "30 m"),
                    " = 16 × 0.5 = 8 cm"
                )
            )
        },
{
            type: "Tales Altura",
            question: React.createElement("span", {},
                "Una persona de 1.8 metros de estatura proyecta una sombra de 1.2 metros. Si a esa misma hora la sombra de una estatua mide 4 metros, ¿cuál es la altura de la estatua?"
            ),
            options: ["6 metros", "5.4 metros", "4.8 metros", "3.6 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos la proporcionalidad directa de sombras y alturas:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = Sombra_estatua × ",
                    Frac("Altura_persona", "Sombra_persona"),
                    " = 4 × ",
                    Frac("1.8", "1.2"),
                    " = 4 × 1.5 = 6 metros"
                )
            )
        }
            ]
        },
        "mat_mod_12": {
            id: "mat_mod_12",
            title: "Módulo 12: Álgebra: Ecuaciones Lineales",
            description: "Modelado y despeje de ecuaciones de primer grado a partir de texto.",
            icon: "notes",
            theme: "fuchsia",
            introduccion: {
                pilarTitulo: "Pilares del Modelado Lineal",
                pilares: [
                    "Traducción de enunciados en lenguaje natural a ecuaciones algebraicas.",
                    "Propiedades de las igualdades y despeje paso a paso de la incógnita X.",
                    "Modelado de tarifas de servicios (costo fijo más costo variable).",
                    "Identificación y corrección de falacias de despeje (jerarquía de signos).",
                ],
                deseaPintarText: "Aprenderás a formular ecuaciones a partir de problemas cotidianos de compras o cobros y a despejar variables sin cometer errores algebraicos comunes."
            },
            teoria: [
                {
                    titulo: "Modelado de Enunciados en Ecuaciones",
                    situacion: React.createElement("span", {},
                "Traduce y resuelve el enunciado: 'El triple de un número, aumentado en ",
                "12 unidades",
                ", es igual a la mitad de 96'. ¿Cuál es el número?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El modelado algebraico consiste en traducir las expresiones del lenguaje cotidiano a símbolos y operaciones matemáticas. La variable o incógnita representa la cantidad desconocida."
                ),
                React.createElement("div", { className: "p-3 bg-fuchsia-50/50 border border-fuchsia-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase tracking-wider block mb-1" }, "Traducción Directa"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• 'El triple de un número' ➔ 3x",
                        React.createElement("br", {}),
                        "• 'aumentado en 12' ➔ + 12",
                        React.createElement("br", {}),
                        "• 'mitad de 96' ➔ 48"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "10", y: "15", width: "80", height: "30", fill: "#fdf4ff", stroke: "#c084fc", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "50", y: "33", fontSize: "10", fontWeight: "bold", fill: "#86198f", textAnchor: "middle" }, "3x + 12"),
                        React.createElement("text", { x: "100", y: "35", fontSize: "12", fontWeight: "bold", fill: "#c084fc", textAnchor: "middle" }, "="),
                        React.createElement("rect", { x: "110", y: "15", width: "80", height: "30", fill: "#fdf4ff", stroke: "#c084fc", strokeWidth: "1.5", rx: "4" }),
                        React.createElement("text", { x: "150", y: "33", fontSize: "10", fontWeight: "bold", fill: "#86198f", textAnchor: "middle" }, "48")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Pasos de Resolución"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Planteamiento: 3x + 12 = 48. Restamos 12 a ambos lados: 3x = 36. Dividimos entre 3: x = 12."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El número desconocido es 12:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "3x + 12 = 48  ➔  3x = 36  ➔  x = 12"
                )
            )
                },
                {
                    titulo: "Resolución de Ecuaciones por Balanceo",
                    situacion: React.createElement("span", {},
                "Resuelve paso a paso la ecuación lineal de primer grado: ",
                "5x - 7 = 2x + 8",
                ". ¿Cómo despejamos x aplicando la propiedad de las igualdades?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El balanceo consiste en agrupar los términos con la variable en un miembro de la ecuación (habitualmente el izquierdo) y los términos independientes en el otro miembro, realizando operaciones inversas en ambos lados."
                ),
                React.createElement("div", { className: "p-3 bg-fuchsia-50/50 border border-fuchsia-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase tracking-wider block mb-1" }, "Pasos Clave"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "1. Restar 2x en ambos miembros para agrupar variables.",
                        React.createElement("br", {}),
                        "2. Sumar 7 en ambos miembros para agrupar términos independientes."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Ecuación original: 5x - 7 = 2x + 8"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Restar 2x: 5x - 2x - 7 = 8 ➔ 3x - 7 = 8"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Sumar 7: 3x = 8 + 7 ➔ 3x = 15")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La variable x es igual a 5:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "3x = 15  ➔  x = ",
                    Frac("15", "3"),
                    " = 5"
                )
            )
                },
                {
                    titulo: "Modelo de Costo Fijo y Variable",
                    situacion: React.createElement("span", {},
                "Una empresa de telefonía cobra un costo fijo de ",
                "10.000 COP mensuales",
                " más ",
                "150 COP por minuto",
                " de llamada. Si la factura de un usuario fue de 28.000 COP, ¿cuántos minutos consumió?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Esta situación responde al modelo lineal y = mx + b, donde b es el costo fijo (intercepto) y m es la tasa de costo por minuto (pendiente). x representa la cantidad de minutos consumidos."
                ),
                React.createElement("div", { className: "p-3 bg-fuchsia-50/50 border border-fuchsia-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase tracking-wider block mb-1" }, "Modelo Matemático"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Costo Total = Costo Fijo + Costo Variable × Minutos",
                        React.createElement("br", {}),
                        "28.000 = 10.000 + 150 × x"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 90", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "80", x2: "180", y2: "80", stroke: "#cbd5e1" }), // Eje X
                        React.createElement("line", { x1: "20", y1: "10", x2: "20", y2: "80", stroke: "#cbd5e1" }), // Eje Y
                        React.createElement("path", { d: "M 20 60 L 160 20", fill: "none", stroke: "#d946ef", strokeWidth: "2" }),
                        React.createElement("text", { x: "25", y: "55", fontSize: "6", fill: "#d946ef" }, "Costo Fijo = 10.000"),
                        React.createElement("text", { x: "130", y: "15", fontSize: "6", fill: "#d946ef" }, "Total = 28.000")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Restamos costo fijo: 28.000 - 10.000 = 18.000. Dividimos por tarifa por minuto: 18.000 / 150 = 120 minutos."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El usuario consumió 120 minutos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x = ",
                    Frac("28.000 - 10.000", "150"),
                    " = ",
                    Frac("18.000", "150"),
                    " = 120 min"
                )
            )
                },
                {
                    titulo: "Ecuaciones con Coeficientes Fraccionarios",
                    situacion: React.createElement("span", {},
                "Resuelve la ecuación con términos fraccionarios: ",
                Frac("2x", "3"),
                " - 4 = 6. ¿Cómo eliminamos los denominadores para facilitar el despeje?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para resolver ecuaciones fraccionarias, el método más rápido consiste en multiplicar todos los términos de la ecuación por el mínimo común múltiplo (mcm) de los denominadores. En este caso, multiplicamos todo por 3."
                ),
                React.createElement("div", { className: "p-3 bg-fuchsia-50/50 border border-fuchsia-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase tracking-wider block mb-1" }, "Efecto del mcm"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Al multiplicar por 3: 3 × (",
                        Frac("2x", "3"),
                        ") - 3 × 4 = 3 × 6 ➔ 2x - 12 = 18."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "2x - 12 = 18"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Sumar 12: 2x = 18 + 12 ➔ 2x = 30"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Dividir entre 2: x = 15")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La solución de la ecuación es x = 15:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "2x - 12 = 18  ➔  2x = 30  ➔  x = 15"
                )
            )
                },
                {
                    titulo: "Modelado de Perímetros y Geometría",
                    situacion: React.createElement("span", {},
                "El perímetro de una parcela rectangular mide ",
                "60 metros",
                ". Si el largo mide el doble que el ancho, ¿cuáles son las dimensiones exactas de la parcela?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El perímetro de un rectángulo es la suma de sus cuatro lados: P = 2 × (Largo + Ancho). Planteamos la relación en función de una sola variable para el ancho (x)."
                ),
                React.createElement("div", { className: "p-3 bg-fuchsia-50/50 border border-fuchsia-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-fuchsia-600 uppercase tracking-wider block mb-1" }, "Ecuación de Perímetro"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Ancho = x. Largo = 2x.",
                        React.createElement("br", {}),
                        "Perímetro = 2 × (x + 2x) = 2 × 3x = 6x."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "30", y: "20", width: "140", height: "60", fill: "#fdf4ff", stroke: "#c084fc", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "15", fontSize: "7", fill: "#86198f", textAnchor: "middle" }, "Largo = 2x"),
                        React.createElement("text", { x: "20", y: "55", fontSize: "7", fill: "#86198f", textAnchor: "middle", transform: "rotate(-90 20,55)" }, "Ancho = x")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "6x = 60 ➔ x = 10 m (ancho). Largo = 2x = 20 m."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Las dimensiones son Ancho = 10 m y Largo = 20 m:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "6x = 60  ➔  x = 10 m  |  Largo = 20 m"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Ecuaciones",
            question: React.createElement("span", {},
                "Un plan de suscripción premium cobra una tarifa fija mensual de ",
                "15.000 COP",
                " más ",
                "500 COP por cada película descargada",
                ". Si la factura mensual de un usuario fue de ",
                "21.500 COP",
                ", ¿cuántas películas descargó en el mes?"
            ),
            options: ["13 películas", "10 películas", "15 películas", "8 películas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Formulamos la ecuación lineal Costo = Fijo + Variable × x y despejamos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "15.000 + 500x = 21.500  ➔  500x = 6.500  ➔  x = ",
                    Frac("6.500", "500"),
                    " = 13 películas"
                )
            )
        },
{
            type: "Despejes",
            question: React.createElement("span", {},
                "Resuelve para la variable x en la ecuación lineal de primer grado: ",
                "6x - 9 = 2x + 11",
                "."
            ),
            options: ["5", "3", "4", "6"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Restamos 2x a ambos lados y sumamos 9:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "4x = 20  ➔  x = ",
                    Frac("20", "4"),
                    " = 5"
                )
            )
        },
{
            type: "Edades",
            question: React.createElement("span", {},
                "La edad de Juan es el doble de la de Pedro y ambas edades suman ",
                "45 años",
                ". ¿Cuál es la edad de Pedro?"
            ),
            options: ["15 años", "30 años", "20 años", "10 años"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Definimos la edad de Pedro como x. La de Juan es 2x:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x + 2x = 45  ➔  3x = 45  ➔  x = ",
                    Frac("45", "3"),
                    " = 15 años"
                )
            )
        },
{
            type: "Fracciones",
            question: React.createElement("span", {},
                "Resuelve la ecuación con términos fraccionarios: ",
                Frac("x", "2"),
                " + ",
                Frac("x", "3"),
                " = 10."
            ),
            options: ["12", "6", "15", "10"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Multiplicamos toda la ecuación por el mcm (6):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "3x + 2x = 60  ➔  5x = 60  ➔  x = ",
                    Frac("60", "5"),
                    " = 12"
                )
            )
        },
{
            type: "Precios",
            question: React.createElement("span", {},
                "Un cliente compra 3 manzanas y 2 peras por ",
                "8.000 COP",
                ". Si una pera cuesta ",
                "1.000 COP más que una manzana",
                ", ¿cuánto cuesta una manzana?"
            ),
            options: ["1.200 COP", "1.500 COP", "1.000 COP", "2.000 COP"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Definimos Manzana = x, Pera = x + 1.000:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "3x + 2(x + 1.000) = 8.000  ➔  5x + 2.000 = 8.000  ➔  5x = 6.000  ➔  x = 1.200 COP"
                )
            )
        }
            ]
        },
        "mat_mod_13": {
            id: "mat_mod_13",
            title: "Módulo 13: Álgebra: Sistemas 2x2",
            description: "Planteamiento y resolución de sistemas de ecuaciones lineales simultáneas.",
            icon: "schema",
            theme: "orange",
            introduccion: {
                pilarTitulo: "Pilares del Álgebra Simultánea",
                pilares: [
                    "Planteamiento de problemas de dos variables con dos condiciones independientes.",
                    "Resolución de sistemas mediante el método de eliminación (suma y resta).",
                    "Resolución mediante sustitución de variables en ecuaciones simultáneas.",
                    "Representación gráfica de sistemas 2x2 e identificación de la solución.",
                ],
                deseaPintarText: "Los sistemas de ecuaciones 2x2 resuelven problemas de mezclas de precios, conteo de cabezas y patas de animales en granjas, y cruce de tarifas comerciales."
            },
            teoria: [
                {
                    titulo: "Método de Eliminación (Suma y Resta)",
                    situacion: React.createElement("span", {},
                "Resuelve el sistema de ecuaciones simultáneas: ",
                "3x + 2y = 18 y 2x - 2y = 2",
                ". ¿Cómo eliminamos la variable y directamente?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El método de eliminación consiste en sumar o restar las dos ecuaciones para cancelar una de las incógnitas. Si los coeficientes de una variable son opuestos (+2y y -2y), la suma directa las elimina."
                ),
                React.createElement("div", { className: "p-3 bg-orange-50/50 border border-orange-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1" }, "Suma Directa"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "(3x + 2y) + (2x - 2y) = 18 + 2 ➔ 5x = 20."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Sumamos: 5x = 20 ➔ x = 4."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Sustituimos x en ec 1: 3(4) + 2y = 18 ➔ 12 + 2y = 18 ➔ 2y = 6 ➔ y = 3.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La solución del sistema es x = 4, y = 3:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x = 4  |  y = 3"
                )
            )
                },
                {
                    titulo: "Método de Sustitución",
                    situacion: React.createElement("span", {},
                "Resuelve por sustitución el sistema: ",
                "y = 2x - 1 y 3x + y = 9",
                ". ¿Cómo usamos el despeje de la primera ecuación en la segunda?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El método de sustitución consiste en despejar una variable en una ecuación y reemplazar su expresión equivalente en la otra ecuación, obteniendo una ecuación con una sola incógnita."
                ),
                React.createElement("div", { className: "p-3 bg-orange-50/50 border border-orange-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1" }, "Sustitución"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Reemplazamos y = 2x - 1 en 3x + y = 9 ➔ 3x + (2x - 1) = 9."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "5x - 1 = 9 ➔ 5x = 10 ➔ x = 2. Luego y = 2(2) - 1 = 3."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La solución es x = 2, y = 3:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x = 2  |  y = 3"
                )
            )
                },
                {
                    titulo: "Planteamiento en Problemas de Conteo",
                    situacion: React.createElement("span", {},
                "En una granja hay gallinas y conejos. Si contamos las cabezas hay ",
                "30 en total",
                ", y si contamos las patas hay ",
                "90",
                ". ¿Cómo planteamos un sistema 2x2 para hallar cuántos animales hay de cada tipo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Definimos x como el número de gallinas (2 patas cada una) e y como el número de conejos (4 patas cada uno). Formulamos dos ecuaciones para representar las cabezas y las patas."
                ),
                React.createElement("div", { className: "p-3 bg-orange-50/50 border border-orange-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1" }, "Ecuaciones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Ecuación Cabezas: x + y = 30",
                        React.createElement("br", {}),
                        "• Ecuación Patas: 2x + 4y = 90"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Resolución"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Multiplicamos cabezas por -2: -2x - 2y = -60. Sumamos a patas: 2y = 30 ➔ y = 15 conejos. Luego x = 15 gallinas."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Hay 15 gallinas y 15 conejos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Gallinas = 15  |  Conejos = 15"
                )
            )
                },
                {
                    titulo: "Interpretación Gráfica de Sistemas 2x2",
                    situacion: React.createElement("span", {},
                "Grafica y analiza el punto de intersección de las rectas correspondientes al sistema: ",
                "y = x + 1 e y = -x + 5",
                ". ¿Qué representa el punto de corte en el plano?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En un sistema de ecuaciones lineales, cada ecuación representa una recta en el plano. La solución del sistema corresponde a las coordenadas del punto donde se intersectan ambas rectas."
                ),
                React.createElement("div", { className: "p-3 bg-orange-50/50 border border-orange-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1" }, "Intersección"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "El punto de corte de las rectas y = x + 1 e y = -x + 5 es (2, 3)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "10", y1: "100", x2: "190", y2: "100", stroke: "#cbd5e1" }), // X
                        React.createElement("line", { x1: "30", y1: "10", x2: "30", y2: "110", stroke: "#cbd5e1" }), // Y
                        React.createElement("line", { x1: "30", y1: "80", x2: "170", y2: "20", stroke: "#f97316", strokeWidth: "1.5" }), // y = x + 1
                        React.createElement("line", { x1: "30", y1: "20", x2: "170", y2: "80", stroke: "#3b82f6", strokeWidth: "1.5" }), // y = -x + 5
                        React.createElement("circle", { cx: "100", cy: "50", r: "3", fill: "#db2777" }),
                        React.createElement("text", { x: "100", y: "42", fontSize: "7", fontWeight: "bold", fill: "#db2777", textAnchor: "middle" }, "(2, 3)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Verificación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Reemplazamos (2,3): 3 = 2 + 1 (correcto) | 3 = -2 + 5 (correcto)."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La solución gráfica es el punto de corte (2, 3):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Solución = (2, 3)"
                )
            )
                },
                {
                    titulo: "Sistemas Inconsistentes y Paralelismo",
                    situacion: React.createElement("span", {},
                "Analiza el sistema: ",
                "2x - y = 4 y 4x - 2y = 12",
                ". ¿Por qué no existe ninguna pareja de valores (x, y) que satisfaga ambas condiciones?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un sistema no tiene solución (inconsistente) si las rectas asociadas son paralelas y no coinciden en ningún punto. Esto ocurre cuando las pendientes son iguales pero tienen interceptos diferentes."
                ),
                React.createElement("div", { className: "p-3 bg-orange-50/50 border border-orange-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-orange-600 uppercase tracking-wider block mb-1" }, "Pendientes"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Recta 1: y = 2x - 4 ➔ m = 2",
                        React.createElement("br", {}),
                        "• Recta 2: 2y = 4x - 12 ➔ y = 2x - 6 ➔ m = 2"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "40", x2: "180", y2: "40", stroke: "#cbd5e1", strokeWidth: "1.5" }), // Recta 1
                        React.createElement("line", { x1: "20", y1: "65", x2: "180", y2: "65", stroke: "#cbd5e1", strokeWidth: "1.5" }) // Recta 2
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Conclusión"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Las rectas paralelas nunca se cruzan. Por lo tanto, el sistema tiene 0 soluciones."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El sistema no tiene solución (Rectas Paralelas):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Soluciones = 0  ➔  Sistema Inconsistente"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Monedas",
            question: React.createElement("span", {},
                "Un cajero tiene un total de ",
                "20 monedas",
                " de dos denominaciones: de $100 y de $500, sumando en total ",
                "4.000 COP",
                ". ¿Cuántas monedas de $500 tiene el cajero?"
            ),
            options: ["5 monedas", "15 monedas", "10 monedas", "8 monedas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos el sistema x + y = 20 (monedas) y 100x + 500y = 4.000 (valor):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x + y = 20  |  100x + 500y = 4.000 ➔ 100(20 - y) + 500y = 4.000 ➔ 400y = 2.000 ➔ y = 5 monedas"
                )
            )
        },
{
            type: "Intersección",
            question: React.createElement("span", {},
                "Determina el punto de intersección (x, y) de las rectas lineales: ",
                "y = 2x + 1 y y = -x + 4",
                "."
            ),
            options: ["(1, 3)", "(2, 5)", "(0, 4)", "(3, 1)"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Igualamos las dos ecuaciones para hallar la coordenada x:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "2x + 1 = -x + 4  ➔  3x = 3  ➔  x = 1. Sustituyendo: y = 2(1) + 1 = 3  ➔  Punto = (1, 3)"
                )
            )
        },
{
            type: "Mezcla",
            question: React.createElement("span", {},
                "Se quieren mezclar dos tipos de café: uno de ",
                "2.000 COP/kg",
                " y otro de ",
                "3.000 COP/kg",
                " para obtener una mezcla de ",
                "10 kg a un costo promedio de 2.400 COP/kg",
                ". ¿Cuántos kg del café de 3.000 COP/kg se necesitan?"
            ),
            options: ["4 kg", "6 kg", "5 kg", "3 kg"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos x + y = 10 y 2.000x + 3.000y = 24.000:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "2.000(10 - y) + 3.000y = 24.000 ➔ 20.000 + 1.000y = 24.000 ➔ 1.000y = 4.000 ➔ y = 4 kg"
                )
            )
        },
{
            type: "Igualación",
            question: React.createElement("span", {},
                "Resuelve el sistema: ",
                "x + y = 12 y x = 2y - 3",
                ". ¿Cuál es la solución para la variable y?"
            ),
            options: ["5", "7", "9", "4"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Sustituimos x directamente en la primera ecuación:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "(2y - 3) + y = 12  ➔  3y - 3 = 12  ➔  3y = 15  ➔  y = 5"
                )
            )
        },
{
            type: "Inconsistencia",
            question: React.createElement("span", {},
                "Considera las ecuaciones: ",
                "2x - y = 4 y 4x - 2y = 8",
                ". ¿Cuántas soluciones tiene este sistema de ecuaciones?"
            ),
            options: ["Infinitas soluciones", "Una única solución", "Ninguna solución", "Dos soluciones"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La segunda ecuación es exactamente el doble de la primera:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Las dos ecuaciones representan la misma recta en el plano ➔ Hay infinitas soluciones coincidentes"
                )
            )
        }
            ]
        },
        "mat_mod_14": {
            id: "mat_mod_14",
            title: "Módulo 14: Álgebra: Inecuaciones",
            description: "Desigualdades lineales y representación de intervalos de solución.",
            icon: "rule",
            theme: "red",
            introduccion: {
                pilarTitulo: "Pilares del Análisis de Desigualdades",
                pilares: [
                    "Concepto de desigualdad (<, >, ≤, ≥) e intervalos en la recta numérica.",
                    "Propiedades de inecuaciones y la regla del cambio de sentido al dividir por negativos.",
                    "Planteamiento de restricciones de presupuesto máximo y capacidades de carga.",
                    "Sistemas de inecuaciones simultáneas e intersección de intervalos.",
                ],
                deseaPintarText: "En la vida real las decisiones se basan en límites y presupuestos. Este módulo te capacita para modelar restricciones lógicas, optimizar compras y graficar intervalos de solución."
            },
            teoria: [
                {
                    titulo: "Desigualdades e Intervalos en la Recta Real",
                    situacion: React.createElement("span", {},
                "Representa en la recta numérica real el intervalo de números reales que cumplen la desigualdad: ",
                "-2 < x ≤ 4",
                ". ¿Cómo diferenciamos un extremo abierto de uno cerrado?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un intervalo es el conjunto de números reales comprendidos entre dos extremos. Un extremo abierto (indica < o >) excluye el valor y se dibuja con círculo vacío o paréntesis. Uno cerrado (indica ≤ o ≥) incluye el valor y se dibuja con círculo relleno o corchete."
                ),
                React.createElement("div", { className: "p-3 bg-red-50/50 border border-red-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1" }, "Nomenclatura"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Intervalo = (-2, 4]."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "10", y1: "30", x2: "190", y2: "30", stroke: "#cbd5e1", strokeWidth: "2" }), // Recta
                        React.createElement("line", { x1: "50", y1: "30", x2: "150", y2: "30", stroke: "#ef4444", strokeWidth: "3" }), // Intervalo
                        React.createElement("circle", { cx: "50", cy: "30", r: "4", fill: "#ffffff", stroke: "#ef4444", strokeWidth: "2" }), // Abierto (-2)
                        React.createElement("circle", { cx: "150", cy: "30", r: "4", fill: "#ef4444" }), // Cerrado (4)
                        React.createElement("text", { x: "50", y: "45", fontSize: "7", textAnchor: "middle" }, "-2"),
                        React.createElement("text", { x: "150", y: "45", fontSize: "7", textAnchor: "middle" }, "4")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Explicación"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "El valor -2 no pertenece al conjunto, pero el valor 4 sí pertenece exactamente."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La representación formal del intervalo es:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x \in (-2, 4]"
                )
            )
                },
                {
                    titulo: "Propiedad de Multiplicación por Negativos",
                    situacion: React.createElement("span", {},
                "Resuelve paso a paso la inecuación lineal: ",
                "-3x + 5 < 17",
                ". ¿Por qué cambia el sentido del signo menor que?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Al multiplicar o dividir ambos miembros de una desigualdad por un número negativo, la dirección de la desigualdad se invierte obligatoriamente para mantener la veracidad matemática."
                ),
                React.createElement("div", { className: "p-3 bg-red-50/50 border border-red-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1" }, "Inversión de Sentido"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si -3x < 12 ➔ Dividimos entre -3 ➔ x > -4."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Restamos 5: -3x < 17 - 5 ➔ -3x < 12"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Dividimos entre -3: x > 12 / (-3) ➔ x > -4")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La solución es x mayor que -4:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x > -4"
                )
            )
                },
                {
                    titulo: "Restricciones de Presupuesto",
                    situacion: React.createElement("span", {},
                "Un estudiante tiene un presupuesto máximo de ",
                "50.000 COP",
                " para comprar libros. Si compra un morral de ",
                "14.000 COP",
                " y cada libro cuesta ",
                "8.000 COP",
                ", ¿cuántos libros (x) como máximo puede adquirir?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Planteamos una inecuación donde la suma de los costos fijos y variables debe ser menor o igual al presupuesto total disponible."
                ),
                React.createElement("div", { className: "p-3 bg-red-50/50 border border-red-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1" }, "Modelo"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "14.000 + 8.000x ≤ 50.000"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Despeje"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "8.000x ≤ 36.000 ➔ x ≤ 36.000 / 8.000 ➔ x ≤ 4.5. Al ser libros enteros, el máximo es 4."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El estudiante puede comprar como máximo 4 libros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x \le 4"
                )
            )
                },
                {
                    titulo: "Sistemas de Inecuaciones (Intersección)",
                    situacion: React.createElement("span", {},
                "Determina el intervalo de valores para x que satisfacen simultáneamente las inecuaciones: ",
                "x > 1 y x ≤ 5",
                "."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un sistema de inecuaciones se resuelve buscando el conjunto de números reales que pertenecen simultáneamente a las soluciones de todas las inecuaciones individuales (intersección de intervalos)."
                ),
                React.createElement("div", { className: "p-3 bg-red-50/50 border border-red-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1" }, "Intersección"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "x > 1 ➔ (1, ∞)  |  x ≤ 5 ➔ (-∞, 5]  ➔  Intersección = (1, 5]."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "10", y1: "30", x2: "190", y2: "30", stroke: "#cbd5e1", strokeWidth: "2" }), // Recta
                        React.createElement("line", { x1: "70", y1: "30", x2: "150", y2: "30", stroke: "#ef4444", strokeWidth: "3" }), // Intersección
                        React.createElement("circle", { cx: "70", cy: "30", r: "4", fill: "#ffffff", stroke: "#ef4444", strokeWidth: "2" }), // Abierto (1)
                        React.createElement("circle", { cx: "150", cy: "30", r: "4", fill: "#ef4444" }), // Cerrado (5)
                        React.createElement("text", { x: "70", y: "45", fontSize: "7", textAnchor: "middle" }, "1"),
                        React.createElement("text", { x: "150", y: "45", fontSize: "7", textAnchor: "middle" }, "5")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La intersección de las soluciones es el intervalo (1, 5]:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x \in (1, 5]"
                )
            )
                },
                {
                    titulo: "Inecuaciones con Valor Absoluto",
                    situacion: React.createElement("span", {},
                "Un control de calidad de tornillos acepta diámetros d tales que: ",
                "|d - 10| ≤ 0.2",
                " milímetros. ¿Cuál es el rango de diámetros permitidos?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Las inecuaciones con valor absoluto del tipo |x - c| ≤ d se interpretan como la distancia de x a un punto central c, la cual no debe superar la tolerancia d. Se resuelven abriendo la desigualdad: -d ≤ x - c ≤ d."
                ),
                React.createElement("div", { className: "p-3 bg-red-50/50 border border-red-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-red-600 uppercase tracking-wider block mb-1" }, "Desglose"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "-0.2 ≤ d - 10 ≤ 0.2"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "10", y1: "30", x2: "190", y2: "30", stroke: "#cbd5e1", strokeWidth: "2" }),
                        React.createElement("line", { x1: "50", y1: "30", x2: "150", y2: "30", stroke: "#ef4444", strokeWidth: "3" }),
                        React.createElement("circle", { cx: "50", cy: "30", r: "4", fill: "#ef4444" }),
                        React.createElement("circle", { cx: "150", cy: "30", r: "4", fill: "#ef4444" }),
                        React.createElement("text", { x: "50", y: "45", fontSize: "7", textAnchor: "middle" }, "9.8"),
                        React.createElement("text", { x: "100", y: "45", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "10.0"),
                        React.createElement("text", { x: "150", y: "45", fontSize: "7", textAnchor: "middle" }, "10.2")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Sumamos 10 a los tres miembros de la inecuación lineal doble: 10 - 0.2 ≤ d ≤ 10 + 0.2 ➔ 9.8 ≤ d ≤ 10.2 mm."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El rango de diámetros aceptados es de 9.8 mm a 10.2 mm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "d \in [9.8, 10.2]"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Inecuaciones",
            question: React.createElement("span", {},
                "Resuelve la inecuación lineal de primer grado: ",
                "4x - 5 ≥ 2x + 7",
                "."
            ),
            options: ["x ≥ 6", "x ≥ 2", "x ≤ 6", "x ≤ 2"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Restamos 2x y sumamos 5 a ambos lados:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "2x ≥ 12  ➔  x ≥ ",
                    Frac("12", "2"),
                    "  ➔  x ≥ 6"
                )
            )
        },
{
            type: "Signo Negativo",
            question: React.createElement("span", {},
                "Resuelve la inecuación teniendo en cuenta el coeficiente negativo: ",
                "-3x + 2 < 11",
                "."
            ),
            options: ["x > -3", "x < -3", "x > 3", "x < 3"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Restamos 2 y dividimos por -3, invirtiendo el sentido de la desigualdad:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "-3x < 9  ➔  x > ",
                    Frac("9", "-3"),
                    "  ➔  x > -3"
                )
            )
        },
{
            type: "Presupuesto",
            question: React.createElement("span", {},
                "Un cliente cuenta con un presupuesto de ",
                "100.000 COP",
                " para comprar regalos. Si paga un valor fijo de envío de ",
                "12.000 COP",
                " y cada regalo cuesta ",
                "8.000 COP",
                ", ¿cuál es el máximo número entero de regalos que puede comprar?"
            ),
            options: ["11 regalos", "10 regalos", "12 regalos", "9 regalos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos la desigualdad 12.000 + 8.000x ≤ 100.000:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "8.000x ≤ 88.000  ➔  x ≤ 11 regalos"
                )
            )
        },
{
            type: "Intervalos",
            question: React.createElement("span", {},
                "¿Cuál de las siguientes representaciones de intervalos corresponde a la desigualdad: ",
                "2 < x ≤ 8",
                "?"
            ),
            options: ["(2, 8]", "[2, 8)", "(2, 8)", "[2, 8]"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El extremo izquierdo es abierto (paréntesis) y el derecho es cerrado (corchete):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x \in (2, 8]"
                )
            )
        },
{
            type: "Intersección",
            question: React.createElement("span", {},
                "Determina el intervalo de intersección para el sistema de inecuaciones: ",
                "x ≥ 3 y x < 7",
                "."
            ),
            options: ["[3, 7)", "(3, 7]", "[3, 7]", "(3, 7)"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Buscamos los puntos que cumplen ambas condiciones simultáneamente:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x ≥ 3 ➔ [3, ∞)  |  x < 7 ➔ (-∞, 7)  ➔  Intersección = [3, 7)"
                )
            )
        }
            ]
        },
        "mat_mod_15": {
            id: "mat_mod_15",
            title: "Módulo 15: Sucesiones y Progresiones",
            description: "Secuencias y regularidades aritméticas y geométricas.",
            icon: "format_list_numbered",
            theme: "lime",
            introduccion: {
                pilarTitulo: "Pilares de las Secuencias",
                pilares: [
                    "Fórmula del término general (a_n) en secuencias lógicas y numéricas.",
                    "Progresiones aritméticas (crecimiento por sumas constantes).",
                    "Progresiones geométricas (crecimiento por multiplicadores constantes).",
                    "Cálculo de la suma acumulada de los primeros N términos de una sucesión.",
                ],
                deseaPintarText: "Las progresiones permiten modelar patrones periódicos (como intereses mensuales o reproducción celular). Aprenderás a deducir términos futuros sin necesidad de calcular paso a paso todos los intermedios."
            },
            teoria: [
                {
                    titulo: "Sucesiones Aritméticas (Diferencia Constante)",
                    situacion: React.createElement("span", {},
                "Una persona decide ahorrar en una alcancía de forma progresiva: ",
                "5.000 COP el primer día, 8.000 COP el segundo, 11.000 COP el tercero",
                "... ¿Cuál es el término general (an) y cuánto ahorrará el día 10?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En una progresión aritmética (PA), cada término se obtiene sumando una cantidad constante d (diferencia) al término anterior. La fórmula general es:"
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Término General"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "an = a1 + (n - 1) × d, donde a1 es el primer término."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Diferencia d = 8.000 - 5.000 = 3.000."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Día 10: a10 = 5.000 + (10 - 1) × 3.000 = 5.000 + 27.000 = 32.000 COP.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El ahorro correspondiente al día 10 es de 32.000 COP:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a10 = 32.000 COP"
                )
            )
                },
                {
                    titulo: "Suma de Progresiones Aritméticas (Fórmula de Gauss)",
                    situacion: React.createElement("span", {},
                "¿Cómo calculamos el total acumulado de dinero ahorrado por el usuario durante los primeros ",
                "10 días",
                " del ejemplo anterior?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La suma de los primeros n términos de una progresión aritmética se calcula promediando el primer y el último término, multiplicando luego el resultado por la cantidad total de términos."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Suma"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Sn = ",
                        Frac("(a1 + an) × n", "2"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "a1 = 5.000. a10 = 32.000. S10 = (5.000 + 32.000) × 10 / 2 = 37.000 × 5 = 185.000 COP."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El total acumulado tras 10 días es de 185.000 COP:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "S10 = ",
                    Frac("(5.000 + 32.000) × 10", "2"),
                    " = 185.000 COP"
                )
            )
                },
                {
                    titulo: "Sucesiones Geométricas (Razón Multiplicativa)",
                    situacion: React.createElement("span", {},
                "Una población bacteriana se duplica cada hora. Si inicialmente hay ",
                "5 bacterias",
                ", ¿cuál es el término general (an) y cuántas habrá tras 6 horas?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En una progresión geométrica (PG), cada término se obtiene multiplicando el término anterior por una constante r (razón). El término general para una razón r es:"
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Ecuación Geométrica"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "an = a1 × r^(n-1), donde n es la posición en la secuencia."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "El inicio de las horas: Hora 0 (a1) = 5. Hora 6 (término 7): a7 = 5 × 2^(7-1) = 5 × 2^6 = 5 × 64 = 320."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La población en la hora 6 es de 320 bacterias:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a7 = 5 × 2⁶ = 320"
                )
            )
                },
                {
                    titulo: "Crecimiento de Ahorros Progresivos",
                    situacion: React.createElement("span", {},
                "Una persona planifica sus finanzas: el primer mes ahorra ",
                "10.000 COP",
                ", y cada mes sucesivo ahorra el ",
                "doble del anterior",
                ". ¿Cuánto dinero ahorra en total al cabo de 5 meses?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El total acumulado en una progresión geométrica se calcula mediante la fórmula de la suma de términos de una PG:"
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Suma Geométrica"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Sn = ",
                        Frac("a1 × (r^n - 1)", "r - 1"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "a1 = 10.000. r = 2. S5 = 10.000 × (2^5 - 1) / (2 - 1) = 10.000 × (32 - 1) = 310.000 COP."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El ahorro acumulado en 5 meses es de 310.000 COP:"),
                React.createElement("div", { className: "flex items-start justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "S5 = 10.000 × (2⁵ - 1) = 310.000 COP"
                )
            )
                },
                {
                    titulo: "Sucesiones Especiales y Patrones Cuadráticos",
                    situacion: React.createElement("span", {},
                "Encuentra la cantidad de mosaicos cuadrados que componen la figura de la secuencia no lineal: ",
                "1, 4, 9, 16",
                "... ¿Cuál es la cantidad para la figura número 7?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Los patrones cuadráticos o no lineales tienen un crecimiento que depende de elevar al cuadrado la posición del término: an = n²."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Ecuación Cuadrática"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "a7 = 7² = 49."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 140 60", className: "w-64 mx-auto mb-2" },
                        // Draw grid dot matrices representing squares 1, 4, 9
                        React.createElement("rect", { x: "10", y: "20", width: "10", height: "10", fill: "#ecfccb", stroke: "#84cc16" }),
                        React.createElement("rect", { x: "40", y: "20", width: "20", height: "20", fill: "#d9f99d", stroke: "#84cc16" }),
                        React.createElement("line", { x1: "50", y1: "20", x2: "50", y2: "40", stroke: "#84cc16" }),
                        React.createElement("line", { x1: "40", y1: "30", x2: "60", y2: "30", stroke: "#84cc16" }),
                        React.createElement("text", { x: "15", y: "45", fontSize: "6", textAnchor: "middle" }, "Fig 1"),
                        React.createElement("text", { x: "50", y: "55", fontSize: "6", textAnchor: "middle" }, "Fig 2")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La figura 7 tiene 49 mosaicos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a7 = 7² = 49"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "PA Término",
            question: React.createElement("span", {},
                "Encuentra el término número 10 (a10) de la siguiente progresión aritmética: ",
                "5, 8, 11, 14...",
                "."
            ),
            options: ["32", "35", "29", "38"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Identificamos el primer término a1 = 5 y la diferencia d = 3:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a10 = a1 + (10 - 1) × d = 5 + 9 × 3 = 5 + 27 = 32"
                )
            )
        },
{
            type: "PA Suma",
            question: React.createElement("span", {},
                "¿Cuál es el valor de la suma de los primeros ",
                "20 números enteros positivos",
                " (1 al 20)?"
            ),
            options: ["210", "190", "200", "420"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la fórmula de Gauss de la suma con a1 = 1 y a20 = 20:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "S20 = ",
                    Frac("(1 + 20) × 20", "2"),
                    " = 21 × 10 = 210"
                )
            )
        },
{
            type: "PG Término",
            question: React.createElement("span", {},
                "Encuentra el término número 5 (a5) de la siguiente progresión geométrica: ",
                "2, 6, 18, 54...",
                "."
            ),
            options: ["162", "108", "243", "486"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Identificamos a1 = 2 y la razón multiplicativa r = 3:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a5 = a1 × r^(5-1) = 2 × 3⁴ = 2 × 81 = 162"
                )
            )
        },
{
            type: "Ahorro",
            question: React.createElement("span", {},
                "Un plan de ahorro diario inicia con ",
                "5.000 COP el primer día",
                " y cada día sucesivo se incrementa en ",
                "2.000 COP",
                ". ¿Cuánto dinero ahorrará el usuario el día 15?"
            ),
            options: ["33.000 COP", "35.000 COP", "31.000 COP", "30.000 COP"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Es una PA con a1 = 5.000 y d = 2.000:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a15 = 5.000 + 14 × 2.000 = 5.000 + 28.000 = 33.000 COP"
                )
            )
        },
{
            type: "Patrón Mosaico",
            question: React.createElement("span", {},
                "Un patrón de mosaicos cuadráticos crece con las posiciones consecutivas de la forma: ",
                "1, 4, 9, 16...",
                " ¿Cuántos mosaicos componen la figura 6?"
            ),
            options: ["36 mosaicos", "25 mosaicos", "49 mosaicos", "30 mosaicos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La sucesión responde a la secuencia de los cuadrados perfectos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "a6 = 6² = 36 mosaicos"
                )
            )
        }
            ]
        },
        "mat_mod_16": {
            id: "mat_mod_16",
            title: "Módulo 16: Funciones Lineales y Cuadráticas",
            description: "Propiedades de rectas y cálculo de vértice de parábolas.",
            icon: "show_chart",
            theme: "indigo",
            introduccion: {
                pilarTitulo: "Pilares del Análisis de Funciones",
                pilares: [
                    "Representación y propiedades de la función lineal (y = mx + b).",
                    "Representación de la función cuadrática (y = ax² + bx + c).",
                    "Cálculo del vértice (h, k) de una parábola (punto de máximo o mínimo).",
                    "Determinación de interceptos y raíces de funciones cuadráticas.",
                ],
                deseaPintarText: "Las funciones describen cómo una variable depende de otra. Este módulo te entrena en la lectura de parábolas de trayectorias de proyectiles y rectas de cobro de planes de telefonía."
            },
            teoria: [
                {
                    titulo: "Función Afín e Inclinación",
                    situacion: React.createElement("span", {},
                "Estudia el comportamiento de la función lineal de costo: ",
                "y = 3x + 10",
                ". ¿Qué representan el coeficiente de inclinación (3) y la ordenada en el origen (10)?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La ecuación de la recta en forma pendiente-intercepto es y = mx + b, donde m es la pendiente (inclinación) y b es el intercepto con el Eje Y (valor inicial o de salida)."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Inclinación"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Si m > 0, la recta es creciente. Si m < 0, es decreciente. Si m = 0, es horizontal."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "80", x2: "180", y2: "80", stroke: "#cbd5e1" }), // X
                        React.createElement("line", { x1: "30", y1: "10", x2: "30", y2: "90", stroke: "#cbd5e1" }), // Y
                        React.createElement("line", { x1: "30", y1: "65", x2: "170", y2: "20", stroke: "#6366f1", strokeWidth: "1.5" }),
                        React.createElement("circle", { cx: "30", cy: "65", r: "3", fill: "#4f46e5" }),
                        React.createElement("text", { x: "42", y: "70", fontSize: "7", fill: "#4f46e5" }, "(0, 10)")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La recta tiene una pendiente ascendente m = 3 e intercepta a Y en (0,10):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = 3 (creciente)  |  b = 10 (costo base)"
                )
            )
                },
                {
                    titulo: "Vértice de una Parábola (Optimización)",
                    situacion: React.createElement("span", {},
                "Una empresa modela sus ganancias mensuales P(x) en millones en función del precio x del artículo: ",
                "P(x) = -2x² + 12x - 10",
                ". ¿Qué precio maximiza la ganancia de la empresa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La gráfica de una función cuadrática y = ax² + bx + c es una parábola. Si el coeficiente del término cuadrático a es negativo (a < 0), la parábola abre hacia abajo, por lo que su vértice representa el punto de ganancia máxima."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Fórmula del Vértice"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "xv = ",
                        Frac("-b", "2a"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("path", { d: "M 30 110 Q 100 20 170 110", fill: "none", stroke: "#6366f1", strokeWidth: "1.5" }), // Parábola
                        React.createElement("circle", { cx: "100", cy: "30", r: "3", fill: "#4f46e5" }), // Vértice
                        React.createElement("text", { x: "100", y: "22", fontSize: "7", fontWeight: "bold", fill: "#4f46e5", textAnchor: "middle" }, "Máximo (3, 8)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "xv = -12 / (2 × -2) = -12 / -4 = 3. Ganancia máxima = P(3) = -2(3²) + 12(3) - 10 = -18 + 36 - 10 = 8 millones."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El precio óptimo es x = 3 y la ganancia máxima es de 8 millones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Precio = 3 COP  |  Ganancia = 8.000.000 COP"
                )
            )
                },
                {
                    titulo: "Intersecciones con los Ejes",
                    situacion: React.createElement("span", {},
                "Halla los puntos donde la parábola de utilidad: ",
                "y = x² - 4",
                " cruza al Eje X (raíces) y al Eje Y."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "• Para hallar la intersección con Y: evaluamos la función en x = 0.",
                    React.createElement("br", {}),
                    "• Para hallar las raíces (intersección con X): resolvemos la ecuación cuadrática igualando y = 0."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Ecuación de Corte"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "y = 0 ➔ x² - 4 = 0 ➔ x² = 4 ➔ x = ±2."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Eje Y: y = 0² - 4 = -4 ➔ Punto (0, -4)."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Eje X: x = 2 y x = -2 ➔ Puntos (2, 0) y (-2, 0).")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Los puntos de cruce en los ejes cartesianos son:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Eje Y: (0, -4)  |  Eje X: (2, 0) y (-2, 0)"
                )
            )
                },
                {
                    titulo: "Modelado de Trayectorias Físicas",
                    situacion: React.createElement("span", {},
                "El lanzamiento parabólico de una pelota sigue la función de trayectoria de altura: ",
                "h(t) = -5t² + 20t",
                ", donde t es el tiempo transcurrido en segundos. ¿Cuánto tiempo dura el vuelo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El final del vuelo del objeto ocurre cuando este toca el suelo nuevamente (altura h(t) = 0). Resolvemos factorizando la ecuación cuadrática."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Factor común"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "-5t² + 20t = 0 ➔ 5t × (-t + 4) = 0."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Las raíces son t = 0 segundos (inicio del lanzamiento) y t = 4 segundos (final del vuelo)."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El objeto dura en el aire un tiempo de 4 segundos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Vuelo = 4 segundos"
                )
            )
                },
                {
                    titulo: "Dominio y Rango de Funciones Reales",
                    situacion: React.createElement("span", {},
                "Estudia las restricciones de dominio y rango de la función real: ",
                "f(x) = \u221a(x - 3)",
                "."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "• El Dominio representa todos los valores válidos para la variable independiente x.",
                    React.createElement("br", {}),
                    "• El Rango es el conjunto de valores resultantes de la variable y.",
                    React.createElement("br", {}),
                    "• Las funciones con raíz cuadrada tienen una restricción: el radicando debe ser mayor o igual a 0."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Restricción"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "x - 3 ≥ 0 ➔ x ≥ 3."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Dominio: [3, ∞). Rango: [0, ∞).")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El dominio de la función radical es [3, ∞):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Dominio = [3, \u221e)"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Recta Ec",
            question: React.createElement("span", {},
                "Determina la ecuación de la recta afín que corta al Eje Y en el punto ",
                "(0, 3)",
                " y tiene una pendiente de ",
                "m = 2",
                "."
            ),
            options: ["y = 2x + 3", "y = 3x + 2", "y = 2x - 3", "y = -2x + 3"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Usamos la ecuación ordinaria y = mx + b, donde b es el corte con Y:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = 2  |  b = 3  ➔  y = 2x + 3"
                )
            )
        },
{
            type: "Producción",
            question: React.createElement("span", {},
                "El costo de producción C(x) de un lote de ropa incluye un costo fijo de ",
                "500 USD",
                " más un costo variable de ",
                "20 USD por unidad fabricada (x)",
                ". ¿Cuál es la función lineal que representa esta situación?"
            ),
            options: ["C(x) = 20x + 500", "C(x) = 500x + 20", "C(x) = 20x - 500", "C(x) = 520x"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La pendiente es la tasa variable y el intercepto es el costo fijo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "C(x) = 20x + 500"
                )
            )
        },
{
            type: "Vértice",
            question: React.createElement("span", {},
                "Determina la coordenada x del vértice de la parábola dada por la función cuadrática: ",
                "y = -x² + 6x - 5",
                "."
            ),
            options: ["3", "-3", "6", "5"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la ecuación xv = -b / (2a) con a = -1 y b = 6:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "xv = ",
                    Frac("-6", "2 × (-1)"),
                    " = ",
                    Frac("-6", "-2"),
                    " = 3"
                )
            )
        },
{
            type: "Raíces",
            question: React.createElement("span", {},
                "Determina los puntos de corte con el Eje X (raíces) de la función cuadrática: ",
                "y = x² - 9",
                "."
            ),
            options: ["(3, 0) y (-3, 0)", "(9, 0) y (-9, 0)", "(0, 9)", "(3, 0)"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Igualamos y = 0 y despejamos la variable x:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "x² - 9 = 0  ➔  x² = 9  ➔  x = ±3  ➔  Puntos = (3, 0) y (-3, 0)"
                )
            )
        },
{
            type: "Identificación",
            question: React.createElement("span", {},
                "Una recta lineal y = mx + b tiene una pendiente decreciente (m < 0) y corta al Eje Y en un valor positivo (b > 0). ¿Cuál de las siguientes es una posible ecuación para esta recta?"
            ),
            options: ["y = -2x + 5", "y = 2x + 5", "y = -2x - 5", "y = 2x - 5"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Buscamos un coeficiente negativo para x y un término independiente positivo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "m = -2 (negativo)  |  b = 5 (positivo)  ➔  y = -2x + 5"
                )
            )
        }
            ]
        },
        "mat_mod_17": {
            id: "mat_mod_17",
            title: "Módulo 17: Funciones Exponenciales",
            description: "Modelado de crecimiento exponencial y decaimiento.",
            icon: "stacked_line_chart",
            theme: "emerald",
            introduccion: {
                pilarTitulo: "Pilares del Modelado Exponencial",
                pilares: [
                    "Concepto de crecimiento y decaimiento exponencial (f(t) = a * b^t).",
                    "Modelado de reproducción biológica acelerada y decaimiento radiactivo.",
                    "Uso de logaritmos como operación inversa para despejar exponentes.",
                    "Propiedades de las funciones exponenciales y logarítmicas.",
                ],
                deseaPintarText: "Muchos fenómenos de la naturaleza crecen de forma no lineal. Aprenderás a calcular la propagación de epidemias, la vida útil de compuestos químicos y el saldo acumulado por interés compuesto."
            },
            teoria: [
                {
                    titulo: "Estructura Exponencial y Crecimiento",
                    situacion: React.createElement("span", {},
                "El cultivo de bacterias se duplica de manera constante según el modelo: ",
                "N(t) = 5 × 2^t",
                ", donde t es el tiempo transcurrido en horas. ¿Cuál es la cantidad inicial de bacterias?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La función exponencial responde a f(t) = a × b^t, donde a representa el valor inicial (para t = 0) y b es el factor de base de crecimiento (b > 1) o decrecimiento (0 < b < 1)."
                ),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1" }, "Evaluación en t = 0"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "N(0) = 5 × 2^0 = 5 × 1 = 5."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 100", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "80", x2: "180", y2: "80", stroke: "#cbd5e1" }), // X
                        React.createElement("line", { x1: "30", y1: "10", x2: "30", y2: "90", stroke: "#cbd5e1" }), // Y
                        React.createElement("path", { d: "M 30 75 Q 80 70 160 20", fill: "none", stroke: "#10b981", strokeWidth: "1.5" }), // Exponencial
                        React.createElement("circle", { cx: "30", cy: "75", r: "3", fill: "#059669" }),
                        React.createElement("text", { x: "40", y: "82", fontSize: "7", fill: "#059669" }, "Valor inicial: 5")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La cantidad inicial en el tiempo cero es de 5 bacterias:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "N(0) = 5"
                )
            )
                },
                {
                    titulo: "Decaimiento Exponencial (Vida Media)",
                    situacion: React.createElement("span", {},
                "Una sustancia radiactiva se reduce a la mitad de su masa cada 3 horas. Si inicialmente hay ",
                "80 gramos",
                ", ¿cuál es la masa restante tras 9 horas?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El decaimiento responde a un modelo exponencial con base b = 1/2. El número de periodos de vida media transcurridos se calcula dividiendo el tiempo total transcurrido por el tiempo de vida media."
                ),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1" }, "Ecuación de Decaimiento"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Masa = Masa_Inicial × (0.5)^(Tiempo / Vida_Media)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Periodos n = 9 / 3 = 3 periodos. Masa = 80 × (0.5)³ = 80 × 0.125 = 10 gramos."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La masa de la sustancia radiactiva restante es de 10 gramos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Masa = 80 × (",
                    Frac("1", "2"),
                    ")³ = 80 × ",
                    Frac("1", "8"),
                    " = 10 g"
                )
            )
                },
                {
                    titulo: "Interés Compuesto",
                    situacion: React.createElement("span", {},
                "Una persona invierte ",
                "1.000.000 COP",
                " a una tasa de interés del ",
                "10% anual compuesto",
                ". ¿Cómo calculamos el saldo final acumulado al cabo de 3 años?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El interés compuesto acumula el capital ganado período a período, incrementando exponencialmente el monto. Su ecuación lineal multiplicadora es:"
                ),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1" }, "Ecuación Financiera"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Monto = Capital_Inicial × (1 + Tasa)^Tiempo."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Monto = 1.000.000 × (1.10)³ = 1.000.000 × 1.331 = 1.331.000 COP."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El saldo final acumulado es de 1.331.000 COP:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Monto = 1.000.000 × (1.10)³ = 1.331.000 COP"
                )
            )
                },
                {
                    titulo: "Comportamiento Asintótico de Funciones Exponenciales",
                    situacion: React.createElement("span", {},
                "Estudia el límite del comportamiento de la función de decaimiento de temperatura: ",
                "T(t) = 20 + 80 × 2^-t",
                ", donde t es el tiempo transcurrido en minutos. ¿A qué temperatura tiende a estabilizarse el objeto?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "A medida que el tiempo t aumenta indefinidamente, el término exponencial 2^-t (que equivale a 1/2^t) se aproxima cada vez más a 0. Esto hace que la función se estabilice en torno a su asíntota horizontal."
                ),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1" }, "Límite Asintótico"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Para t ➔ ∞, y ➔ 20. La recta y = 20 es la asíntota horizontal."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "t = 0 min ➔ T = 20 + 80 = 100°C."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "t = 1 min ➔ T = 20 + 40 = 60°C."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "t = 2 min ➔ T = 20 + 20 = 40°C.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La temperatura se estabiliza en la asíntota de 20°C:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Temperatura \to 20 °C"
                )
            )
                },
                {
                    titulo: "Propiedad de los Exponentes Negativos",
                    situacion: React.createElement("span", {},
                "Evalúa la función exponencial: ",
                "f(x) = 16 × 2^-x",
                " para los valores de x = 2 y x = -2."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La ley de los exponentes establece que una base con exponente negativo es igual al recíproco de la base con exponente positivo: b^-n = 1/b^n. Igualmente, un exponente negativo sobre un exponente negativo se convierte en positivo."
                ),
                React.createElement("div", { className: "p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-emerald-600 uppercase tracking-wider block mb-1" }, "Exponentes"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• f(2) = 16 × 2^-2 = 16 × ",
                        Frac("1", "4"),
                        " = 4.",
                        React.createElement("br", {}),
                        "• f(-2) = 16 × 2^(--2) = 16 × 2² = 16 × 4 = 64."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "f(2) = 16 / 4 = 4. f(-2) = 16 * 4 = 64.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Las evaluaciones correspondientes son 4 y 64:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "f(2) = 4  |  f(-2) = 64"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Cultivo",
            question: React.createElement("span", {},
                "Un cultivo biológico de bacterias se duplica cada hora. Si la cantidad inicial es de ",
                "100 bacterias",
                ", ¿cuántas bacterias habrá al cabo de ",
                "5 horas",
                "?"
            ),
            options: ["3.200 bacterias", "1.600 bacterias", "500 bacterias", "6.400 bacterias"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la ecuación exponencial N = N0 × 2^t con N0 = 100 y t = 5:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "N = 100 × 2⁵ = 100 × 32 = 3.200 bacterias"
                )
            )
        },
{
            type: "Decaimiento",
            question: React.createElement("span", {},
                "Un medicamento inyectado de 80 mg se elimina del organismo de forma que su masa se reduce a la mitad cada ",
                "2 horas",
                ". ¿Cuántos mg de medicamento quedan en el cuerpo tras ",
                "6 horas",
                "?"
            ),
            options: ["10 mg", "20 mg", "40 mg", "5 mg"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El número de periodos de vida media transcurridos es n = 6 / 2 = 3:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Masa = 80 × (0.5)³ = 80 × ",
                    Frac("1", "8"),
                    " = 10 mg"
                )
            )
        },
{
            type: "Interés",
            question: React.createElement("span", {},
                "Una cuenta de ahorros ofrece una tasa de interés del ",
                "10% anual compuesto",
                ". Si una persona deposita ",
                "1.000.000 COP",
                ", ¿cuánto dinero tendrá acumulado al cabo de ",
                "2 años",
                "?"
            ),
            options: ["1.210.000 COP", "1.200.000 COP", "1.100.000 COP", "1.300.000 COP"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Multiplicamos por el factor de interés compuesto al cuadrado:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Saldo = 1.000.000 × (1.10)² = 1.000.000 × 1.21 = 1.210.000 COP"
                )
            )
        },
{
            type: "Asíntota",
            question: React.createElement("span", {},
                "La temperatura de una taza de café en una habitación climatizada se modela por: ",
                "T(t) = 22 + 70 × 2^-t",
                ", donde t es el tiempo en minutos. ¿Cuál es la temperatura límite a la que se aproxima el café tras mucho tiempo?"
            ),
            options: ["22 °C", "70 °C", "92 °C", "0 °C"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "A medida que t tiende a infinito, el término 70 × 2^-t tiende a cero:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Temperatura final = 22 + 0 = 22 °C (la asíntota horizontal)"
                )
            )
        },
{
            type: "Negativos",
            question: React.createElement("span", {},
                "Evalúa la función exponencial f(x) = 8 × 2^-x para el valor de ",
                "x = -3",
                "."
            ),
            options: ["64", "1", "8", "16"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Sustituimos x = -3, transformando el exponente en positivo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "f(-3) = 8 × 2^(--3) = 8 × 2³ = 8 × 8 = 64"
                )
            )
        }
            ]
        },
        "mat_mod_18": {
            id: "mat_mod_18",
            title: "Módulo 18: Trigonometría: Ley del Seno/Coseno",
            description: "Razones trigonométricas y leyes de senos/cosenos en triángulos.",
            icon: "architecture",
            theme: "violet",
            introduccion: {
                pilarTitulo: "Pilares del Razonamiento Angular",
                pilares: [
                    "Razones trigonométricas básicas (Seno, Coseno, Tangente) en triángulos rectángulos.",
                    "Relaciones métricas en triángulos rectángulos notables (30°, 45°, 60°).",
                    "Ley del Seno para resolver lados y ángulos en triángulos oblicuángulos.",
                    "Ley del Coseno para calcular el tercer lado a partir de dos lados y un ángulo.",
                ],
                deseaPintarText: "La trigonometría extiende el análisis de triángulos a cualquier tipo de ángulo. Te preparará para calcular la inclinación de la luz solar, distancias de navegación y tensiones en cuerdas de soporte."
            },
            teoria: [
                {
                    titulo: "Razones Trigonométricas en Triángulos Rectángulos",
                    situacion: React.createElement("span", {},
                "En un parque, una rampa de patinaje tiene una base horizontal de ",
                "4 metros",
                " y una altura vertical de ",
                "3 metros",
                ". ¿Cuáles son las razones trigonométricas del ángulo de inclinación θ respecto al suelo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En un triángulo rectángulo, definimos las funciones trigonométricas en función de las relaciones de los lados: Seno (Opuesto/Hipotenusa), Coseno (Adyacente/Hipotenusa), y Tangente (Opuesto/Adyacente)."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "SOH-CAH-TOA"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Cateto Opuesto = 3. Cateto Adyacente = 4. Hipotenusa = 5."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 120", className: "w-64 mx-auto mb-2" },
                        React.createElement("polygon", { points: "30,100 150,100 30,20", fill: "#f5f3ff", stroke: "#7c3aed", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "90", y: "112", fontSize: "7", fill: "#6d28d9" }, "Adyacente = 4 m"),
                        React.createElement("text", { x: "15", y: "60", fontSize: "7", fill: "#6d28d9" }, "Opuesto = 3 m"),
                        React.createElement("text", { x: "100", y: "55", fontSize: "7", fill: "#6d28d9" }, "Hip = 5 m")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Razones notables"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Sen θ = 3/5. Cos θ = 4/5. Tan θ = 3/4."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Las razones trigonométricas son:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Sen θ = 0.6  |  Cos θ = 0.8  |  Tan θ = 0.75"
                )
            )
                },
                {
                    titulo: "Ángulos de Elevación y Depresión",
                    situacion: React.createElement("span", {},
                "Una persona observa la cima de una torre con un ángulo de elevación de ",
                "30°",
                ". Si la persona está a ",
                "30 metros",
                " de la base de la torre, ¿cuál es la altura de la torre? (Usa Tan 30° ≈ 0.58)"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El ángulo de elevación se mide respecto a la línea horizontal de visión hacia arriba. Para relacionar la altura (cateto opuesto) con la distancia horizontal (cateto adyacente), usamos la función tangente."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Ecuación de Altura"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Tan θ = ",
                        Frac("Cateto Opuesto", "Cateto Adyacente"),
                        " ➔ Altura = Distancia × Tan θ."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Altura = 30 m × Tan 30° ≈ 30 × 0.58 = 17.4 metros."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La altura de la torre es de aproximadamente 17.4 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = 30 × Tan 30° \u2248 17.4 m"
                )
            )
                },
                {
                    titulo: "La Ley del Seno en Triángulos Oblicuángulos",
                    situacion: React.createElement("span", {},
                "En un triángulo oblicuángulo, conocemos el ángulo ",
                "A = 45°",
                ", el ángulo ",
                "B = 60°",
                " y la longitud del lado opuesto ",
                "a = 10 cm",
                ". ¿Cómo calculamos la longitud del lado b?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La Ley del Seno se aplica en cualquier triángulo y establece que los lados son proporcionales a los senos de sus respectivos ángulos opuestos. Es útil cuando se conocen dos ángulos y un lado."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Ecuación de la Ley"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        Frac("a", "Sen A"),
                        " = ",
                        Frac("b", "Sen B"),
                        " ➔ b = ",
                        Frac("a × Sen B", "Sen A"),
                        "."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Sen 45° = 0.707. Sen 60° = 0.866. b = 10 × 0.866 / 0.707 ≈ 12.25 cm."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La longitud del lado b es de aproximadamente 12.25 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "b = ",
                    Frac("10 × Sen 60°", "Sen 45°"),
                    " \u2248 12.25 cm"
                )
            )
                },
                {
                    titulo: "La Ley del Coseno",
                    situacion: React.createElement("span", {},
                "Un barco viaja ",
                "5 km",
                " y otro viaja ",
                "8 km",
                " saliendo desde el mismo puerto con un ángulo de separación de ",
                "60°",
                ". ¿Qué distancia en línea recta los separa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La Ley del Coseno se utiliza en triángulos oblicuángulos cuando se conocen dos lados y el ángulo comprendido entre ellos (LAL), o cuando se conocen los tres lados (LLL)."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Ecuación de la Ley"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "a² = b² + c² - 2bc × Cos A, donde A es el ángulo comprendido."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Cos 60° = 0.5. d² = 5² + 8² - 2(5)(8) × Cos 60° = 25 + 64 - 80 × 0.5 = 89 - 40 = 49 ➔ d = √49 = 7 km."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La distancia que separa a los dos barcos es de 7 km:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "d = \u221a(5² + 8² - 2 × 5 × 8 × Cos 60°) = 7 km"
                )
            )
                },
                {
                    titulo: "Razones Trigonométricas en Ángulos Notables",
                    situacion: React.createElement("span", {},
                "Determina el valor del cateto opuesto en un triángulo rectángulo con un ángulo agudo de ",
                "30°",
                " y una hipotenusa de ",
                "10 cm",
                "."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En los ángulos notables (30°, 45°, 60°), los valores de las razones trigonométricas se derivan de la geometría del triángulo equilátero y del cuadrado. Para el ángulo de 30°, el seno es siempre 1/2."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Seno de 30°"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Sen 30° = ",
                        Frac("1", "2"),
                        " = ",
                        Frac("Cateto Opuesto", "Hipotenusa"),
                        " ➔ Cateto Opuesto = Hipotenusa × Sen 30°."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Cateto Opuesto = 10 cm × (1/2) = 5 cm.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El cateto opuesto mide exactamente 5 cm:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Opuesto = 10 × ",
                    Frac("1", "2"),
                    " = 5 cm"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Poste Sombra",
            question: React.createElement("span", {},
                "Un poste vertical proyecta una sombra horizontal de ",
                "10 metros",
                " en el suelo. Si el ángulo de elevación solar es de ",
                "45°",
                ", ¿cuál es la altura del poste?"
            ),
            options: ["10 metros", "5 metros", "14 metros", "7 metros"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La tangente de 45° es igual a 1 (Cateto Opuesto / Cateto Adyacente = 1):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Altura = Sombra × Tan 45° = 10 × 1 = 10 metros"
                )
            )
        },
{
            type: "Hipotenusa",
            question: React.createElement("span", {},
                "En un triángulo rectángulo, la hipotenusa mide ",
                "12 cm",
                " y uno de los ángulos agudos es de ",
                "30°",
                ". ¿Cuánto mide el cateto opuesto a dicho ángulo? (Usa Sen 30° = 0.5)"
            ),
            options: ["6 cm", "8 cm", "10 cm", "4 cm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la definición de la razón seno:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Cateto Opuesto = Hipotenusa × Sen 30° = 12 × 0.5 = 6 cm"
                )
            )
        },
{
            type: "Ley Seno",
            question: React.createElement("span", {},
                "En un triángulo oblicuángulo, conocemos el lado ",
                "a = 10 cm",
                " y su ángulo opuesto ",
                "A = 30°",
                ". Si el ángulo opuesto al lado b es ",
                "B = 45°",
                ", ¿cuánto mide el lado b? (Usa Sen 30° = 0.5 y Sen 45° ≈ 0.7)"
            ),
            options: ["14 cm", "10 cm", "7 cm", "12 cm"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Planteamos la relación de la Ley del Seno:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "b = ",
                    Frac("a × Sen B", "Sen A"),
                    " = ",
                    Frac("10 × 0.7", "0.5"),
                    " = ",
                    Frac("7", "0.5"),
                    " = 14 cm"
                )
            )
        },
{
            type: "Ley Coseno",
            question: React.createElement("span", {},
                "Dos barcos parten de un puerto con trayectorias lineales separadas por un ángulo de ",
                "60°",
                ". Si un barco viaja ",
                "3 km",
                " y el otro ",
                "5 km",
                ", ¿qué distancia los separa en línea recta? (Usa Cos 60° = 0.5)"
            ),
            options: ["4.36 km", "7 km", "5 km", "6.2 km"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la Ley del Coseno: d² = b² + c² - 2bc × Cos A:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "d² = 3² + 5² - 2(3)(5) × 0.5 = 9 + 25 - 15 = 19  ➔  d = √19 ≈ 4.36 km"
                )
            )
        },
{
            type: "Ley Aplicación",
            question: React.createElement("span", {},
                "Si en un triángulo oblicuángulo conocemos únicamente las longitudes de sus tres lados (Lado-Lado-Lado), ¿cuál es el procedimiento adecuado para hallar la medida de sus ángulos?"
            ),
            options: ["Usar la Ley del Coseno", "Usar la Ley del Seno", "Usar el Teorema de Pitágoras", "Usar las razones trigonométricas directas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La Ley del Coseno permite despejar un ángulo conociendo los tres lados:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Cos A = ",
                    Frac("b² + c² - a²", "2bc"),
                    " ➔ Por tanto, se usa la Ley del Coseno."
                )
            )
        }
            ]
        },
        "mat_mod_19": {
            id: "mat_mod_19",
            title: "Módulo 19: Estadística: Tendencia Central",
            description: "Media, mediana, moda, valores atípicos y bimodalidad.",
            icon: "query_stats",
            theme: "amber",
            introduccion: {
                pilarTitulo: "Pilares de la Centralización",
                pilares: [
                    "Cálculo de la Media aritmética (promedio) y propiedades de suma de constantes.",
                    "Identificación del valor de posición central (Mediana) en listas ordenadas.",
                    "Determinación del valor o categoría de mayor repetición (Moda).",
                    "Impacto de valores extremos atípicos y bimodalidad en la interpretación.",
                ],
                deseaPintarText: "Las medidas de tendencia central resumen conjuntos de datos en un solo número representativo. Aprenderás a elegir cuál medida es más justa según la simetría de los datos."
            },
            teoria: [
                {
                    titulo: "Media Aritmética o Promedio",
                    situacion: React.createElement("span", {},
                "Calcula el promedio de las calificaciones de un estudiante en 5 materias: ",
                "60, 70, 80, 90, 100",
                ". ¿Cómo se interpreta este valor central?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La media aritmética es el valor obtenido al sumar todos los datos y dividir el resultado entre el número total de datos. Representa el punto de equilibrio o balance del conjunto."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Fórmula de la Media"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "μ = ",
                        Frac("Σ x", "N"),
                        " = ",
                        Frac("60 + 70 + 80 + 90 + 100", "5")
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "40", x2: "180", y2: "40", stroke: "#cbd5e1", strokeWidth: "2" }),
                        React.createElement("polygon", { points: "100,40 95,50 105,50", fill: "#0d9488" }),
                        React.createElement("circle", { cx: "60", cy: "32", r: "4", fill: "#0d9488" }),
                        React.createElement("text", { x: "60", y: "24", fontSize: "7", textAnchor: "middle" }, "60"),
                        React.createElement("circle", { cx: "80", cy: "32", r: "4", fill: "#0d9488" }),
                        React.createElement("text", { x: "80", y: "24", fontSize: "7", textAnchor: "middle" }, "70"),
                        React.createElement("circle", { cx: "100", cy: "32", r: "4", fill: "#db2777" }),
                        React.createElement("text", { x: "100", y: "24", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "80 (μ)"),
                        React.createElement("circle", { cx: "120", cy: "32", r: "4", fill: "#0d9488" }),
                        React.createElement("text", { x: "120", y: "24", fontSize: "7", textAnchor: "middle" }, "90"),
                        React.createElement("circle", { cx: "140", cy: "32", r: "4", fill: "#0d9488" }),
                        React.createElement("text", { x: "140", y: "24", fontSize: "7", textAnchor: "middle" }, "100")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La calificación promedio es 80 puntos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "μ = ",
                    Frac("400", "5"),
                    " = 80"
                )
            )
                },
                {
                    titulo: "La Mediana en Listas Pares e Impares",
                    situacion: React.createElement("span", {},
                "Determina la mediana para el conjunto de datos ordenados: A = ",
                "{12, 15, 18, 20, 35}",
                " (N impar) y B = ",
                "{12, 15, 18, 20}",
                " (N par)."
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La mediana (Me) es el valor de la variable de posición central en un conjunto de datos ordenados. Si el número de datos N es impar, es exactamente el dato del centro. Si N es par, es el promedio de los dos datos centrales."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Pasos de Selección"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Conjunto A (impar): Me = 18 (el tercer dato).",
                        React.createElement("br", {}),
                        "• Conjunto B (par): Me = ",
                        Frac("15 + 18", "2"),
                        " = 16.5"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Ordenado A: 12, 15, [18], 20, 35 ➔ Centro = 18"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Ordenado B: 12, [15, 18], 20 ➔ Promedio = (15+18)/2 = 16.5")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Las medianas de los conjuntos A y B son:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Me_A = 18  |  Me_B = 16.5"
                )
            )
                },
                {
                    titulo: "La Moda y Muestras Multimodales",
                    situacion: React.createElement("span", {},
                "Identifica la moda del conjunto de edades registradas en un salón: ",
                "{15, 15, 16, 16, 16, 17, 18}",
                ". ¿Qué ocurre si dos valores tienen la misma frecuencia máxima?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La moda (Mo) es el valor que aparece con mayor frecuencia absoluta en una distribución. Si dos o más valores comparten la frecuencia más alta, la distribución se denomina bimodal o multimodal."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Frecuencias"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Edad 15: freq = 2",
                        React.createElement("br", {}),
                        "• Edad 16: freq = 3 (Máxima)",
                        React.createElement("br", {}),
                        "• Edad 17: freq = 1 | Edad 18: freq = 1"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 70", className: "w-64 mx-auto mb-2" },
                        React.createElement("rect", { x: "20", y: "45", width: "30", height: "20", fill: "#ccfbf1", stroke: "#0d9488" }),
                        React.createElement("text", { x: "35", y: "60", fontSize: "7", textAnchor: "middle" }, "15 (f=2)"),
                        React.createElement("rect", { x: "65", y: "25", width: "30", height: "40", fill: "#99f6e4", stroke: "#0d9488", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "80", y: "45", fontSize: "7", textAnchor: "middle", fontWeight: "bold", fill: "#0f766e" }, "16 (f=3)"),
                        React.createElement("rect", { x: "110", y: "55", width: "30", height: "10", fill: "#ccfbf1", stroke: "#0d9488" }),
                        React.createElement("text", { x: "125", y: "63", fontSize: "7", textAnchor: "middle" }, "17 (f=1)")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La moda del salón es 16 años:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Mo = 16 años"
                )
            )
                },
                {
                    titulo: "Media Ponderada",
                    situacion: React.createElement("span", {},
                "Una asignatura se evalúa en tres porcentajes: ",
                "Proyecto (50%), Examen (30%) y Quices (20%)",
                ". Si un alumno obtuvo notas de 80, 60 y 90 respectivamente, ¿cuál es su nota definitiva?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La media ponderada asigna un peso o importancia relativa (w) a cada uno de los valores (x). Se calcula multiplicando cada dato por su peso, sumando estos productos y dividiendo entre la suma total de los pesos."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Ecuación Ponderada"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Nota = Σ (x_i × w_i) = 80 × 0.50 + 60 × 0.30 + 90 × 0.20"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Proyecto: 80 * 0.50 = 40 puntos"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Examen: 60 * 0.30 = 18 puntos"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Quices: 90 * 0.20 = 18 puntos"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Suma = 40 + 18 + 18 = 76 puntos")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La nota definitiva es 76:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Nota Final = 76 / 100"
                )
            )
                },
                {
                    titulo: "Media con Datos Agrupados (Marca de Clase)",
                    situacion: React.createElement("span", {},
                "Una encuesta de estaturas agrupa los datos en dos intervalos: ",
                "[1.50, 1.60) con 4 personas y [1.60, 1.70) con 6 personas",
                ". ¿Cómo calculamos el promedio de estatura estimado?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Para datos agrupados, se calcula la marca de clase (MC), que es el punto medio de cada intervalo. Luego se multiplica cada marca de clase por su frecuencia de personas, se suma todo y se divide por el total de la muestra."
                ),
                React.createElement("div", { className: "p-3 bg-teal-50/50 border border-teal-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-teal-600 uppercase tracking-wider block mb-1" }, "Marcas de Clase"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• MC1 = (1.50 + 1.60)/2 = 1.55 m",
                        React.createElement("br", {}),
                        "• MC2 = (1.60 + 1.70)/2 = 1.65 m"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculos"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Suma = 1.55 × 4 + 1.65 × 6 = 6.20 + 9.90 = 16.10. Promedio = 16.10 / 10 = 1.61 metros."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El promedio estimado de estatura es 1.61 metros:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "μ = ",
                    Frac("16.10", "10"),
                    " = 1.61 m"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Promedio",
            question: React.createElement("span", {},
                "Las temperaturas de una ciudad durante 4 días fueron: ",
                "15°C, 18°C, 22°C y 25°C",
                ". ¿Cuál fue la temperatura promedio en este período?"
            ),
            options: ["20°C", "18°C", "21°C", "22°C"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Sumamos los datos y dividimos entre el número total N = 4:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "μ = ",
                    Frac("15 + 18 + 22 + 25", "4"),
                    " = ",
                    Frac("80", "4"),
                    " = 20 °C"
                )
            )
        },
{
            type: "Mediana",
            question: React.createElement("span", {},
                "Halla la mediana del siguiente conjunto de salarios mensuales (en millones de COP): ",
                "1.0, 1.2, 1.5, 2.0 y 5.0",
                "."
            ),
            options: ["1.5 millones", "2.0 millones", "1.2 millones", "2.14 millones"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Como la lista ya está ordenada y N = 5 (impar), la mediana es el dato central:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Me = 1.5 millones"
                )
            )
        },
{
            type: "Ponderado",
            question: React.createElement("span", {},
                "Un estudiante obtiene notas de 4.0, 3.0 y 5.0 en tres exámenes que valen el ",
                "40%, 40% y 20%",
                " respectivamente. ¿Cuál es su promedio ponderado?"
            ),
            options: ["3.8", "4.0", "3.5", "3.9"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Multiplicamos cada nota por su peso respectivo y sumamos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Nota = 4.0(0.40) + 3.0(0.40) + 5.0(0.20) = 1.6 + 1.2 + 1.0 = 3.8"
                )
            )
        },
{
            type: "Moda",
            question: React.createElement("span", {},
                "En una encuesta sobre color preferido, se obtuvieron las respuestas: Azul (12), Rojo (15), Verde (8) y Amarillo (12). ¿Cuál es la moda de esta distribución?"
            ),
            options: ["Rojo", "Azul", "Amarillo", "Verde"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La moda es el valor con la mayor frecuencia absoluta de respuestas:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Mo = Rojo (frecuencia = 15)"
                )
            )
        },
{
            type: "Mediana Par",
            question: React.createElement("span", {},
                "Calcula la mediana del conjunto de tiempos de carrera en minutos de 6 atletas: ",
                "10, 12, 14, 15, 18, 20",
                "."
            ),
            options: ["14.5 minutos", "14.0 minutos", "15.0 minutos", "14.8 minutos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Como N = 6 es par, la mediana es el promedio de los dos datos centrales (14 y 15):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Me = ",
                    Frac("14 + 15", "2"),
                    " = 14.5 min"
                )
            )
        }
            ]
        },
        "mat_mod_20": {
            id: "mat_mod_20",
            title: "Módulo 20: Estadística: Medidas de Dispersión",
            description: "Rango, varianza y desviación estándar en conjuntos de datos.",
            icon: "analytics",
            theme: "cyan",
            introduccion: {
                pilarTitulo: "Pilares de la Dispersión",
                pilares: [
                    "Cálculo del rango de un conjunto de datos (Valor máximo - Valor mínimo).",
                    "Comprensión del concepto de varianza y desviación estándar.",
                    "Análisis de homogeneidad y estabilidad de datos comparando desviaciones.",
                    "Interpretación de la dispersión de puntajes de colegios en exámenes.",
                ],
                deseaPintarText: "Los promedios pueden ser engañosos si los datos están muy dispersos. Este módulo te enseña a medir la variabilidad de los datos, identificando qué lote de producción o qué notas de curso son más estables."
            },
            teoria: [
                {
                    titulo: "El Rango Estadístico",
                    situacion: React.createElement("span", {},
                "Comparamos la estabilidad del clima de dos pueblos midiendo temperaturas: Pueblo A = ",
                "{18, 20, 22, 24}",
                " y Pueblo B = ",
                "{10, 20, 22, 32}",
                ". ¿Qué pueblo presenta mayor dispersión?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El rango o amplitud es la medida de dispersión más sencilla. Se calcula restando el valor menor (mínimo) del valor mayor (máximo) del conjunto. Indica la extensión total de los datos."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Cálculo de Rangos"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Rango A = 24 - 18 = 6°C.",
                        React.createElement("br", {}),
                        "• Rango B = 32 - 10 = 22°C. El Pueblo B es mucho más inestable."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Rango = Máx - Mín"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Pueblo A: R = 6. Pueblo B: R = 22.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Los rangos respectivos son 6°C y 22°C:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "R_A = 6 °C  |  R_B = 22 °C"
                )
            )
                },
                {
                    titulo: "Varianza y Desviación Estándar",
                    situacion: React.createElement("span", {},
                "Dos grupos de atletas tienen una estatura media de ",
                "1.70 m",
                ". Si el Grupo 1 tiene desviación estándar σ = ",
                "0.02 m",
                " y el Grupo 2 tiene σ = ",
                "0.15 m",
                ", ¿cuál de los grupos es más homogéneo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La varianza y la desviación estándar miden cuánto se alejan los datos respecto a su media aritmética. Una desviación estándar baja indica que los datos están muy concentrados alrededor de la media (muestra homogénea)."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Análisis de Dispersión"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Grupo 1: σ = 0.02 m ➔ Estaturas muy similares.",
                        React.createElement("br", {}),
                        "• Grupo 2: σ = 0.15 m ➔ Estaturas dispersas."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-60 mx-auto mb-2" },
                        React.createElement("path", { d: "M 30,75 C 80,75 90,20 100,20 C 110,20 120,75 170,75", fill: "none", stroke: "#06b6d4", strokeWidth: "2" }),
                        React.createElement("path", { d: "M 30,75 C 60,75 80,50 100,50 C 120,50 140,75 170,75", fill: "none", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "15", fontSize: "6", textAnchor: "middle", fill: "#06b6d4", fontWeight: "bold" }, "Grupo 1 (Homogéneo)"),
                        React.createElement("text", { x: "100", y: "45", fontSize: "6", textAnchor: "middle", fill: "#db2777" }, "Grupo 2 (Disperso)")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El Grupo 1 es el más homogéneo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "σ_1 = 0.02 m  <  σ_2 = 0.15 m"
                )
            )
                },
                {
                    titulo: "Medidas de Posición: Cuartiles",
                    situacion: React.createElement("span", {},
                "En una prueba de matemáticas de 200 estudiantes, el primer cuartil Q1 es ",
                "45 puntos",
                " y el tercer cuartil Q3 es ",
                "80 puntos",
                ". ¿Qué porcentaje de estudiantes obtuvo entre 45 y 80 puntos?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Los cuartiles dividen la muestra ordenada en 4 partes iguales, cada una con el 25% de los datos. Q1 acumula el 25%, Q2 (la mediana) el 50%, y Q3 el 75%. El rango entre Q1 y Q3 contiene siempre el 50% central de la población."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Porcentajes Clave"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Menos de 45 puntos: 25% de los alumnos.",
                        React.createElement("br", {}),
                        "• Más de 80 puntos: 25% de los alumnos.",
                        React.createElement("br", {}),
                        "• Entre 45 y 80 puntos: 50% de los alumnos (rango intercuartílico)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Diferencia de porcentajes: Q3 - Q1"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Porcentaje central = 75% - 25% = 50%"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Cantidad alumnos = 200 * 0.50 = 100 alumnos.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El 50% de los estudiantes (100 alumnos) se encuentra en este rango:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Rango Intercuartil = [45, 80]  ➔  50% Alumnos"
                )
            )
                },
                {
                    titulo: "Diagrama de Caja y Bigotes (Boxplot)",
                    situacion: React.createElement("span", {},
                "Interpreta un diagrama de caja y bigotes para las puntuaciones de un examen: ",
                "Mínimo = 10, Q1 = 30, Mediana = 55, Q3 = 70, Máximo = 95",
                ". ¿Cómo calculamos el rango intercuartílico (IQR)?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El diagrama de caja representa visualmente los cuartiles de los datos. El ancho de la caja es el rango intercuartílico (IQR = Q3 - Q1), que mide la dispersión del 50% de los datos centrales."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Fórmula IQR"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "IQR = Q3 - Q1 = 70 - 30 = 40 puntos."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 65", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "30", x2: "180", y2: "30", stroke: "#64748b", strokeWidth: "1.5" }),
                        React.createElement("rect", { x: "60", y: "15", width: "80", height: "30", fill: "#ecfeff", stroke: "#0891b2", strokeWidth: "1.5" }),
                        React.createElement("line", { x1: "110", y1: "15", x2: "110", y2: "45", stroke: "#0891b2", strokeWidth: "2" }),
                        React.createElement("text", { x: "20", y: "55", fontSize: "6", textAnchor: "middle" }, "Mín (10)"),
                        React.createElement("text", { x: "60", y: "55", fontSize: "6", textAnchor: "middle" }, "Q1 (30)"),
                        React.createElement("text", { x: "110", y: "55", fontSize: "6", textAnchor: "middle", fontWeight: "bold" }, "Me (55)"),
                        React.createElement("text", { x: "140", y: "55", fontSize: "6", textAnchor: "middle" }, "Q3 (70)"),
                        React.createElement("text", { x: "180", y: "55", fontSize: "6", textAnchor: "middle" }, "Máx (95)")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El rango intercuartílico mide 40 unidades:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "IQR = Q3 - Q1 = 70 - 30 = 40"
                )
            )
                },
                {
                    titulo: "Coeficiente de Variación (CV)",
                    situacion: React.createElement("span", {},
                "Para comparar la dispersión de dos variables con distintas magnitudes: Peso Elefantes (μ = ",
                "4.000 kg",
                ", σ = ",
                "400 kg",
                ") vs Peso Ratones (μ = ",
                "20 g",
                ", σ = ",
                "4 g",
                "). ¿Cuál tiene mayor dispersión relativa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El coeficiente de variación es una medida de dispersión relativa adimensional. Se calcula dividiendo la desviación estándar por la media y expresándola en porcentaje. Permite comparar la dispersión de variables muy distintas."
                ),
                React.createElement("div", { className: "p-3 bg-cyan-50/50 border border-cyan-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-cyan-600 uppercase tracking-wider block mb-1" }, "Ecuaciones del CV"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• CV_Elefante = (400 / 4.000) × 100% = 10%.",
                        React.createElement("br", {}),
                        "• CV_Ratón = (4 / 20) × 100% = 20%. Los ratones presentan mayor dispersión relativa."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "CV = (σ / μ) * 100%"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Elefante: 400 / 4000 = 0.1 ➔ 10%"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Ratón: 4 / 20 = 0.2 ➔ 20%")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La variabilidad relativa de los ratones (20%) es el doble que los elefantes (10%):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "CV_Elefante = 10%  |  CV_Ratón = 20%"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Rango",
            question: React.createElement("span", {},
                "Determina el rango estadístico del siguiente conjunto de edades: ",
                "3, 5, 12, 18, 20 y 2",
                "."
            ),
            options: ["18", "20", "17", "15"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El rango es la diferencia entre el valor máximo (20) y el mínimo (2):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Rango = Máx - Mín = 20 - 2 = 18"
                )
            )
        },
{
            type: "Desviación",
            question: React.createElement("span", {},
                "Si la varianza del rendimiento de un grupo de estudiantes en un examen es de ",
                "16 puntos al cuadrado",
                ", ¿cuál es la desviación estándar del grupo?"
            ),
            options: ["4 puntos", "8 puntos", "16 puntos", "2 puntos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "La desviación estándar es la raíz cuadrada positiva de la varianza:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "σ = √(16) = 4 puntos"
                )
            )
        },
{
            type: "Percentil",
            question: React.createElement("span", {},
                "En un examen, un estudiante se ubica en el ",
                "percentil 90",
                " de un grupo de 200 alumnos. ¿Cuántos alumnos obtuvieron una calificación menor o igual a la de él?"
            ),
            options: ["180 alumnos", "90 alumnos", "10 alumnos", "20 alumnos"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El percentil 90 indica que el 90% del grupo obtuvo una nota menor o igual:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Cantidad = 200 × 0.90 = 180 alumnos"
                )
            )
        },
{
            type: "IQR",
            question: React.createElement("span", {},
                "En un diagrama de caja y bigotes, la caja (que representa el rango medio) inicia en la puntuación ",
                "15",
                " y termina en la puntuación ",
                "35",
                ". ¿Cuál es el rango intercuartílico (IQR) de los datos?"
            ),
            options: ["20", "15", "35", "50"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El rango intercuartílico (IQR) es la diferencia entre el cuartil Q3 (35) y Q1 (15):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "IQR = Q3 - Q1 = 35 - 15 = 20"
                )
            )
        },
{
            type: "Variabilidad",
            question: React.createElement("span", {},
                "El Grupo A tiene media de 10 y desviación de 2. El Grupo B tiene media de 20 y desviación de 2. ¿Cuál grupo presenta menor variabilidad relativa a su promedio?"
            ),
            options: ["Grupo B", "Grupo A", "Ambos tienen igual variabilidad", "No se puede determinar"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Calculamos el coeficiente de variación CV = (desviación / media) × 100%:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "CV_A = 20%  |  CV_B = 10% ➔ El Grupo B es más homogéneo relativo a su media."
                )
            )
        }
            ]
        },
        "mat_mod_21": {
            id: "mat_mod_21",
            title: "Módulo 21: Técnicas de Conteo",
            description: "Principio multiplicativo, permutaciones y combinatoria.",
            icon: "tag",
            theme: "sky",
            introduccion: {
                pilarTitulo: "Pilares de la Combinatoria",
                pilares: [
                    "Aplicación del principio multiplicativo de conteo en eventos secuenciales.",
                    "Permutaciones de elementos sin repetición (donde el orden sí importa).",
                    "Combinaciones de elementos (donde el orden de elección no importa).",
                    "Cálculo y propiedades de factoriales de números enteros.",
                ],
                deseaPintarText: "Contar combinaciones a mano puede ser imposible. Este módulo te capacita para calcular contraseñas seguras, posibles ganadores de torneos y conformación de comités de forma matemática."
            },
            teoria: [
                {
                    titulo: "Principio Multiplicativo",
                    situacion: React.createElement("span", {},
                "En una cafetería escolar, el menú consta de ",
                "3 opciones de plato fuerte, 4 bebidas y 2 postres",
                ". ¿Cuántos combos diferentes de almuerzo se pueden armar?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El principio multiplicativo establece que si un primer evento puede ocurrir de n maneras y un segundo evento puede ocurrir de m maneras, la cantidad de formas en que pueden ocurrir consecutivamente ambos es n × m."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Combinación del Combos"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "N = 3 platos × 4 bebidas × 2 postres = 24 combos diferentes."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Platos: 3. Bebidas: 4. Postres: 2"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Cálculo: 3 * 4 * 2 = 12 * 2 = 24")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se pueden elegir un total de 24 combos de comida:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Combos = 24"
                )
            )
                },
                {
                    titulo: "Principio Aditivo",
                    situacion: React.createElement("span", {},
                "Una persona quiere viajar de Cali a Bogotá. Puede elegir entre ",
                "3 aerolíneas",
                " de aviación o ",
                "5 empresas de bus interdepartamental",
                ". ¿Cuántas alternativas tiene para realizar el viaje?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El principio aditivo se aplica cuando los eventos son mutuamente excluyentes (es decir, no pueden ocurrir al mismo tiempo). Si el evento A ocurre de n formas o bien el evento B de m formas, hay n + m formas totales de elegir."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Decisión Excluyente"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "No se puede viajar en avión y en bus al mismo tiempo. Alternativas = 3 + 5 = 8 opciones."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Vía aérea: 3 opciones. Vía terrestre: 5 opciones"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Suma = 3 + 5 = 8")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "El viajero tiene 8 alternativas de viaje en total:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Opciones = 8"
                )
            )
                },
                {
                    titulo: "Permutaciones (El Orden Importa)",
                    situacion: React.createElement("span", {},
                "En una competencia de atletismo participan 5 corredores. ¿De cuántas formas se pueden asignar las medallas de ",
                "Oro, Plata y Bronce",
                "?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En las permutaciones, el orden de los elementos sí importa, ya que ocupar diferentes puestos representa configuraciones distintas. La fórmula para agrupar r elementos de un total de n es: P(n, r) = n! / (n - r)!."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Fórmula de Permutaciones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "P(5, 3) = ",
                        Frac("5!", "(5 - 3)!"),
                        " = ",
                        Frac("5 × 4 × 3 × 2!", "2!"),
                        " = 5 × 4 × 3 = 60"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Oro: 5 opciones de atleta."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Plata: 4 opciones de atleta restantes."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Bronce: 3 opciones de atleta restantes."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Total = 5 * 4 * 3 = 60 formas.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Existen 60 podios posibles:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Podios = 60"
                )
            )
                },
                {
                    titulo: "Combinaciones (El Orden NO Importa)",
                    situacion: React.createElement("span", {},
                "De un salón de 5 estudiantes, se debe elegir un equipo de ",
                "3 representantes",
                " para asistir a un foro. ¿De cuántas formas se puede elegir el grupo?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "En las combinaciones, el orden de selección no importa, ya que el grupo final de elementos es idéntico sin importar en qué orden se llamaron. La fórmula es: C(n, r) = n! / [r! × (n - r)!]."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Fórmula de Combinaciones"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "C(5, 3) = ",
                        Frac("5!", "3! × 2!"),
                        " = ",
                        Frac("5 × 4 × 3!", "3! × 2"),
                        " = ",
                        Frac("20", "2"),
                        " = 10"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 60", className: "w-64 mx-auto mb-2" },
                        React.createElement("circle", { cx: "30", cy: "25", r: "8", fill: "#fdf2f8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "30", y: "28", fontSize: "8", fill: "#db2777", textAnchor: "middle", fontWeight: "bold" }, "A"),
                        
                        React.createElement("circle", { cx: "65", cy: "25", r: "8", fill: "#f8fafc", stroke: "#64748b", strokeWidth: "1" }),
                        React.createElement("text", { x: "65", y: "28", fontSize: "8", fill: "#64748b", textAnchor: "middle" }, "B"),
                        
                        React.createElement("circle", { cx: "100", cy: "25", r: "8", fill: "#fdf2f8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "100", y: "28", fontSize: "8", fill: "#db2777", textAnchor: "middle", fontWeight: "bold" }, "C"),
                        
                        React.createElement("circle", { cx: "135", cy: "25", r: "8", fill: "#fdf2f8", stroke: "#db2777", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "135", y: "28", fontSize: "8", fill: "#db2777", textAnchor: "middle", fontWeight: "bold" }, "D"),
                        
                        React.createElement("circle", { cx: "170", cy: "25", r: "8", fill: "#f8fafc", stroke: "#64748b", strokeWidth: "1" }),
                        React.createElement("text", { x: "170", y: "28", fontSize: "8", fill: "#64748b", textAnchor: "middle" }, "E"),
                        
                        React.createElement("rect", { x: "18", y: "12", width: "130", height: "26", rx: "13", fill: "none", stroke: "#db2777", strokeWidth: "1.2", strokeDasharray: "3 3" }),
                        React.createElement("text", { x: "82.5", y: "50", fontSize: "7", fill: "#db2777", textAnchor: "middle", fontWeight: "semibold" }, "Comité: {A, C, D} (El orden no importa)")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Combinatorio"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "Fórmula: C(5, 3) = 5! / (3! × 2!) = (5 × 4) / 2 = 10 formas de seleccionar el grupo."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se pueden conformar 10 comités distintos:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Comités = 10"
                )
            )
                },
                {
                    titulo: "Permutaciones con Elementos Repetidos",
                    situacion: React.createElement("span", {},
                "¿Cuántas palabras de 4 letras (con o sin sentido) se pueden formar reordenando las letras de la palabra ",
                "CASA",
                "?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Cuando queremos reordenar n elementos pero algunos son idénticos entre sí, las permutaciones se reducen debido a que intercambiar los elementos repetidos no crea una palabra nueva. Fórmula: PR = n! / (n1! × n2! ...)."
                ),
                React.createElement("div", { className: "p-3 bg-lime-50/50 border border-lime-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-lime-600 uppercase tracking-wider block mb-1" }, "Fórmula de Repetición"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Letras n = 4. La letra 'A' se repite n1 = 2 veces. PR = ",
                        Frac("4!", "2!"),
                        " = ",
                        Frac("24", "2"),
                        " = 12 palabras."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Palabras posibles: CASA, CAAS, CSAA, ACSA, ACAS, ASCA, ASAC, AACS, AASC, SCAA, SACA, SAAC.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se pueden formar exactamente 12 palabras:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "PR = 12 palabras"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Clave",
            question: React.createElement("span", {},
                "¿Cuántas contraseñas de ",
                "3 dígitos diferentes",
                " se pueden formar utilizando los números del 0 al 9 sin repetir ningún número?"
            ),
            options: ["720 contraseñas", "1000 contraseñas", "120 contraseñas", "504 contraseñas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El orden de los dígitos importa en una contraseña, usamos permutaciones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P(10, 3) = ",
                    Frac("10!", "7!"),
                    " = 10 × 9 × 8 = 720 contraseñas"
                )
            )
        },
{
            type: "Helados",
            question: React.createElement("span", {},
                "Un heladero ofrece copas de helado con ",
                "2 sabores diferentes",
                " elegidos de un total de 6 sabores de fruta disponibles. ¿Cuántas combinaciones de sabores se pueden armar?"
            ),
            options: ["15 copas", "30 copas", "12 copas", "36 copas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "No importa el orden de los sabores en la copa, usamos combinaciones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "C(6, 2) = ",
                    Frac("6!", "2! × 4!"),
                    " = ",
                    Frac("6 × 5", "2"),
                    " = 15 copas"
                )
            )
        },
{
            type: "Banderas",
            question: React.createElement("span", {},
                "Se quieren fabricar banderas horizontales de 3 franjas de colores distintos. Si disponemos de ",
                "5 colores de tela",
                ", ¿cuántas banderas diferentes se pueden confeccionar?"
            ),
            options: ["60 banderas", "10 banderas", "125 banderas", "15 banderas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "El orden de los colores de las franjas sí importa, usamos permutaciones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P(5, 3) = 5 × 4 × 3 = 60 banderas"
                )
            )
        },
{
            type: "Cargos",
            question: React.createElement("span", {},
                "En un salón de 4 estudiantes, se deben elegir a un ",
                "Vocero y a un suplente",
                ". ¿De cuántas formas diferentes se puede realizar la elección?"
            ),
            options: ["12 formas", "6 formas", "8 formas", "16 formas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Dado que los cargos son distintos (importa el orden de asignación), usamos permutaciones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P(4, 2) = 4 × 3 = 12 formas"
                )
            )
        },
{
            type: "Comité",
            question: React.createElement("span", {},
                "De un grupo de 6 médicos, se deben seleccionar ",
                "4 médicos",
                " para atender una brigada especial. ¿De cuántas formas se puede elegir el grupo de brigadistas?"
            ),
            options: ["15 formas", "30 formas", "24 formas", "20 formas"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "No importa el orden de selección de los brigadistas en el equipo, usamos combinaciones:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "C(6, 4) = C(6, 2) = ",
                    Frac("6 × 5", "2"),
                    " = 15 formas"
                )
            )
        }
            ]
        },
        "mat_mod_22": {
            id: "mat_mod_22",
            title: "Módulo 22: Probabilidad Clásica y Compuesta",
            description: "Regla de Laplace, eventos independientes y compuestos con y sin reemplazo.",
            icon: "casino",
            theme: "rose",
            introduccion: {
                pilarTitulo: "Pilares de la Probabilidad",
                pilares: [
                    "Cálculo de probabilidad simple mediante la regla de Laplace (Favorables/Totales).",
                    "Probabilidad compuesta de eventos independientes consecuentes (Regla del Producto).",
                    "Análisis de probabilidad de eventos sucesivos con reemplazo y sin reemplazo.",
                    "Resolución de problemas mediante el trazado de diagramas de árbol de probabilidad.",
                ],
                deseaPintarText: "La probabilidad evalúa la incertidumbre de los eventos. Este módulo te prepara para estimar la posibilidad de ganar juegos de azar, extraer esferas de colores de urnas y acertar pronósticos."
            },
            teoria: [
                {
                    titulo: "Probabilidad Clásica (Regla de Laplace)",
                    situacion: React.createElement("span", {},
                "Lanzamos un dado corriente de 6 caras. ¿Cuál es la probabilidad de que la cara superior muestre un ",
                "número primo",
                "?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La regla de Laplace establece que la probabilidad de un suceso es el cociente entre el número de casos favorables y el número de casos posibles de la muestra, siempre que todos tengan la misma probabilidad."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Casos de la Muestra"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Favorables (primos): {2, 3, 5} ➔ 3 casos.",
                        React.createElement("br", {}),
                        "• Posibles (dado): {1, 2, 3, 4, 5, 6} ➔ 6 casos."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "P = Casos Favorables / Casos Posibles"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "P = 3 / 6 = 0.50 = 50% de probabilidad.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La probabilidad de obtener un primo es del 50%:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("3", "6"),
                    " = 0.50 (50%)"
                )
            )
                },
                {
                    titulo: "Eventos Independientes (Regla del Producto)",
                    situacion: React.createElement("span", {},
                "Lanzamos una moneda al aire y un dado de 6 caras al mismo tiempo. ¿Cuál es la probabilidad de que salga ",
                "Sello y un 6",
                "?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Dos eventos son independientes si el resultado de uno no afecta la probabilidad del otro. Para calcular la probabilidad de que ocurran ambos a la vez, se multiplican sus probabilidades individuales."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Probabilidades"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• P(Sello) = 1/2",
                        React.createElement("br", {}),
                        "• P(6) = 1/6",
                        React.createElement("br", {}),
                        "• P(Sello ∩ 6) = P(Sello) × P(6)"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "P = (1/2) * (1/6) = 1/12 ≈ 8.33%")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La probabilidad de que ocurran ambos eventos es de 1/12:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("1", "2"),
                    " × ",
                    Frac("1", "6"),
                    " = ",
                    Frac("1", "12")
                )
            )
                },
                {
                    titulo: "Eventos Excluyentes y la Regla de la Suma",
                    situacion: React.createElement("span", {},
                "Extraemos una carta de una baraja española de 40 cartas. ¿Cuál es la probabilidad de que la carta sea ",
                "un As o un Rey",
                "?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Dos eventos son mutuamente excluyentes si no pueden ocurrir simultáneamente. La probabilidad de que ocurra uno u otro es la suma de sus probabilidades: P(A ∪ B) = P(A) + P(B)."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Probabilidad del Evento"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• P(As) = 4/40 = 1/10.",
                        React.createElement("br", {}),
                        "• P(Rey) = 4/40 = 1/10.",
                        React.createElement("br", {}),
                        "• P(As o Rey) = P(As) + P(Rey)"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "P = 4/40 + 4/40 = 8/40 = 1/5 = 20% de probabilidad.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La probabilidad de extraer As o Rey es de 1/5:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("4", "40"),
                    " + ",
                    Frac("4", "40"),
                    " = ",
                    Frac("1", "5"),
                    " (20%)"
                )
            )
                },
                {
                    titulo: "Probabilidad Condicional",
                    situacion: React.createElement("span", {},
                "En un colegio, el 60% de los estudiantes son mujeres. De las mujeres, el 20% habla inglés. Si se elige una alumna al azar, ¿cuál es la probabilidad de que hable inglés?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La probabilidad condicional P(A|B) calcula la probabilidad del suceso A bajo la condición de que ya se sabe que el suceso B ha ocurrido. Esto equivale a restringir el espacio muestral al conjunto B."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Restricción"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La alumna ya es mujer (condición B). La tasa dentro del grupo es del 20% (0.20)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "P(Inglés | Mujer) = 20% = 0.20")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La probabilidad condicionada es del 20%:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P(A|B) = 0.20"
                )
            )
                },
                {
                    titulo: "Diagramas de Árbol",
                    situacion: React.createElement("span", {},
                "Una caja contiene ",
                "3 bolas rojas y 2 bolas azules",
                ". Si sacamos dos bolas de manera consecutiva sin reemplazo, ¿cuál es la probabilidad de que la primera sea Roja y la segunda sea Azul?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un diagrama de árbol permite estructurar un experimento por etapas, multiplicando las probabilidades de las ramas del camino para hallar la probabilidad conjunta de los eventos encadenados."
                ),
                React.createElement("div", { className: "p-3 bg-indigo-50/50 border border-indigo-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mb-1" }, "Pasos de las Ramas"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• 1ra bola es Roja: P(R1) = 3/5.",
                        React.createElement("br", {}),
                        "• Quedan en la caja: 2 rojas y 2 azules.",
                        React.createElement("br", {}),
                        "• 2da bola es Azul dado 1ra Roja: P(A2|R1) = 2/4 = 1/2."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 90", className: "w-64 mx-auto mb-2" },
                        React.createElement("circle", { cx: "20", cy: "45", r: "3", fill: "#475569" }),
                        React.createElement("text", { x: "10", y: "42", fontSize: "6", fontWeight: "bold" }, "Inicio"),
                        
                        React.createElement("line", { x1: "20", y1: "45", x2: "80", y2: "20", stroke: "#ef4444", strokeWidth: "1.5" }),
                        React.createElement("text", { x: "45", y: "27", fontSize: "6", fill: "#ef4444", fontWeight: "bold" }, "R (3/5)"),
                        
                        React.createElement("line", { x1: "20", y1: "45", x2: "80", y2: "70", stroke: "#3b82f6", strokeWidth: "1" }),
                        React.createElement("text", { x: "45", y: "66", fontSize: "6", fill: "#3b82f6" }, "A (2/5)"),
                        
                        React.createElement("circle", { cx: "80", cy: "20", r: "3", fill: "#ef4444" }),
                        React.createElement("circle", { cx: "80", cy: "70", r: "3", fill: "#3b82f6" }),
                        
                        React.createElement("line", { x1: "80", y1: "20", x2: "140", y2: "10", stroke: "#ef4444", strokeWidth: "1" }),
                        React.createElement("text", { x: "105", y: "11", fontSize: "6", fill: "#ef4444" }, "R (2/4)"),
                        
                        React.createElement("line", { x1: "80", y1: "20", x2: "140", y2: "30", stroke: "#db2777", strokeWidth: "1.8" }),
                        React.createElement("text", { x: "105", y: "32", fontSize: "6", fill: "#db2777", fontWeight: "bold" }, "A (2/4)"),
                        
                        React.createElement("line", { x1: "80", y1: "70", x2: "140", y2: "60", stroke: "#ef4444", strokeWidth: "1" }),
                        React.createElement("text", { x: "105", y: "61", fontSize: "6", fill: "#ef4444" }, "R (3/4)"),
                        
                        React.createElement("line", { x1: "80", y1: "70", x2: "140", y2: "80", stroke: "#3b82f6", strokeWidth: "1" }),
                        React.createElement("text", { x: "105", y: "82", fontSize: "6", fill: "#3b82f6" }, "A (1/4)"),
                        
                        React.createElement("circle", { cx: "140", cy: "10", r: "2", fill: "#cbd5e1" }),
                        React.createElement("text", { x: "145", y: "12", fontSize: "5", fill: "#64748b" }, "R, R"),
                        
                        React.createElement("circle", { cx: "140", cy: "30", r: "3", fill: "#db2777" }),
                        React.createElement("text", { x: "145", y: "32", fontSize: "6", fill: "#db2777", fontWeight: "bold" }, "R, A (30%)"),
                        
                        React.createElement("circle", { cx: "140", cy: "60", r: "2", fill: "#cbd5e1" }),
                        React.createElement("text", { x: "145", y: "62", fontSize: "5", fill: "#64748b" }, "A, R"),
                        
                        React.createElement("circle", { cx: "140", cy: "80", r: "2", fill: "#cbd5e1" }),
                        React.createElement("text", { x: "145", y: "82", fontSize: "5", fill: "#64748b" }, "A, A")
                    )
                ),
                React.createElement("div", { className: "border-t border-slate-200/60 pt-3 text-left font-sans" },
                    React.createElement("div", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Cálculo Multiplicativo"),
                    React.createElement("p", { className: "text-slate-600 text-[11px] leading-relaxed" },
                        "La probabilidad de la ruta Roja ➔ Azul es: P(R ∩ A) = P(R) × P(A|R) = " + Frac("3", "5") + " × " + Frac("2", "4") + " = " + Frac("6", "20") + " = " + Frac("3", "10") + " (30%)."
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La probabilidad final es del 30%:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("3", "5"),
                    " × ",
                    Frac("2", "4"),
                    " = ",
                    Frac("3", "10"),
                    " (30%)"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Urna",
            question: React.createElement("span", {},
                "En una urna hay ",
                "5 bolas rojas, 3 bolas verdes y 2 bolas amarillas",
                ". ¿Cuál es la probabilidad de extraer una bola verde en el primer intento?"
            ),
            options: ["30%", "50%", "20%", "3%"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Casos favorables (verdes) = 3. Casos totales = 5 + 3 + 2 = 10:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("3", "10"),
                    " = 0.30 (30%)"
                )
            )
        },
{
            type: "Suma Dados",
            question: React.createElement("span", {},
                "Lanzamos dos dados corrientes. ¿Cuál es la probabilidad de que la suma de los valores de las caras superiores sea exactamente ",
                "7",
                "?"
            ),
            options: ["1/6", "1/12", "1/36", "5/36"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Casos favorables = {(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)} ➔ 6. Casos totales = 36:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("6", "36"),
                    " = ",
                    Frac("1", "6")
                )
            )
        },
{
            type: "Doble As",
            question: React.createElement("span", {},
                "Se extraen dos cartas al azar de una baraja de 52 cartas de manera consecutiva ",
                "sin reemplazo",
                ". ¿Cuál es la probabilidad de que ambas sean un As?"
            ),
            options: ["1/221", "1/169", "2/13", "1/26"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Multiplicamos la probabilidad del primer As por el del segundo As condicionado:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = ",
                    Frac("4", "52"),
                    " × ",
                    Frac("3", "51"),
                    " = ",
                    Frac("1", "13"),
                    " × ",
                    Frac("1", "17"),
                    " = ",
                    Frac("1", "221")
                )
            )
        },
{
            type: "Deporte",
            question: React.createElement("span", {},
                "En una encuesta, el 70% practica fútbol, el 40% practica baloncesto y el 20% practica ambos. ¿Cuál es la probabilidad de que un entrevistado elegido al azar practique fútbol o baloncesto?"
            ),
            options: ["90%", "70%", "80%", "110%"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos la regla general de adición P(A ∪ B) = P(A) + P(B) - P(A ∩ B):"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = 0.70 + 0.40 - 0.20 = 0.90 (90%)"
                )
            )
        },
{
            type: "Fábrica",
            question: React.createElement("span", {},
                "Una máquina A produce el 60% de las piezas con 2% de fallos. La máquina B produce el 40% con 5% de fallos. ¿Probabilidad de que una pieza elegida al azar sea defectuosa?"
            ),
            options: ["3.2%", "2.0%", "3.5%", "7.0%"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Aplicamos el teorema de probabilidad total:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P = 0.60 × 0.02 + 0.40 × 0.05 = 0.012 + 0.02 = 0.032 (3.2%)"
                )
            )
        }
            ]
        },
        "mat_mod_23": {
            id: "mat_mod_23",
            title: "Módulo 23: Falacias y Razonamiento Crítico",
            description: "Detección de falacias estadísticas, errores de causalidad y sesgos visuales.",
            icon: "fact_check",
            theme: "purple",
            introduccion: {
                pilarTitulo: "Pilares del Análisis Crítico",
                pilares: [
                    "Detección de falacias estadísticas en gráficos con ejes e intervalos manipulados.",
                    "Distinción rigurosa entre correlación estadística y causalidad física.",
                    "Identificación de sesgos muestrales (muestras pequeñas o no representativas).",
                    "Evaluación de la validez lógica de hipótesis estadísticas en exámenes.",
                ],
                deseaPintarText: "No todas las estadísticas que se presentan son veraces. Aprenderás a detectar manipulaciones en noticias, sesgos en encuestas de opinión y falacias de causa-efecto que confunden a los postulantes del ICFES."
            },
            teoria: [
                {
                    titulo: "Correlación no implica Causalidad",
                    situacion: React.createElement("span", {},
                "Un estudio muestra que en las regiones con mayor consumo de helado se registra un mayor índice de ahogamientos. ¿Comer helado causa ahogamientos?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Dos variables tienen correlación si cambian juntas en una dirección. Sin embargo, esto no demuestra que una sea la causa de la otra. Comúnmente existe una variable de confusión (la temperatura del verano) que impulsa a ambas simultáneamente."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Diagrama de Causalidad"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Temperatura alta (Verano) ➔ Aumenta venta de helados",
                        React.createElement("br", {}),
                        "Temperatura alta (Verano) ➔ Aumenta baños en piscina ➔ Ahogamientos"
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 80", className: "w-60 mx-auto mb-2" },
                        React.createElement("rect", { x: "75", y: "5", width: "50", height: "20", fill: "#f5f3ff", stroke: "#7c3aed", rx: "3" }),
                        React.createElement("text", { x: "100", y: "17", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "Verano (Calor)"),
                        React.createElement("rect", { x: "15", y: "50", width: "50", height: "20", fill: "#fdf4ff", stroke: "#c084fc", rx: "3" }),
                        React.createElement("text", { x: "40", y: "62", fontSize: "7", textAnchor: "middle" }, "Helados"),
                        React.createElement("rect", { x: "135", y: "50", width: "50", height: "20", fill: "#fdf4ff", stroke: "#c084fc", rx: "3" }),
                        React.createElement("text", { x: "160", y: "62", fontSize: "7", textAnchor: "middle" }, "Ahogamientos"),
                        React.createElement("line", { x1: "85", y1: "25", x2: "50", y2: "50", stroke: "#7c3aed", strokeWidth: "1.5", markerEnd: "url(#arrow)" }),
                        React.createElement("line", { x1: "115", y1: "25", x2: "150", y2: "50", stroke: "#7c3aed", strokeWidth: "1.5", markerEnd: "url(#arrow)" })
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La relación estadística se debe a una causa común:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Correlación  ≠  Causalidad"
                )
            )
                },
                {
                    titulo: "Sesgo de Selección en Encuestas",
                    situacion: React.createElement("span", {},
                "Una revista de tecnología realiza una encuesta en su sitio web preguntando si la población tiene acceso a internet y el ",
                "100% responde afirmativamente",
                ". ¿Por qué esta conclusión no es representativa?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "El sesgo de selección ocurre cuando la muestra tomada para un estudio no se elige de manera aleatoria o representativa, lo que causa que ciertos subgrupos de la población sean sistemáticamente excluidos de los resultados."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Error Metodológico"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Realizar una encuesta web excluye por defecto a todas las personas que no tienen internet, invalidando los resultados."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Población objetivo: Toda la población nacional"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Muestra seleccionada: Usuarios activos del sitio web"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Sesgo: Exclusión absoluta del grupo sin acceso a red")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La muestra está sesgada y la conclusión es inválida:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Sesgo de Selección  ➔  Muestra No Representativa"
                )
            )
                },
                {
                    titulo: "Gráficos Estadísticos Engañosos",
                    situacion: React.createElement("span", {},
                "Un canal de televisión presenta un gráfico de barras donde las ventas aumentaron de 90 a 92 unidades. Sin embargo, la barra de 92 es tres veces más alta que la de 90. ¿Dónde radica el engaño?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "Un truco frecuente para manipular datos visuales es truncar el eje Y, haciéndolo comenzar en un valor diferente de cero (por ejemplo, en 89). Esto exagera diferencias mínimas que visualmente parecen enormes."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Truco del Eje Y"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "Al no iniciar en 0, la diferencia visual (2 unidades) aparenta ser de más del 200% de aumento."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "flex justify-center" },
                    React.createElement("svg", { viewBox: "0 0 200 75", className: "w-64 mx-auto mb-2" },
                        React.createElement("line", { x1: "20", y1: "60", x2: "180", y2: "60", stroke: "#64748b" }),
                        React.createElement("rect", { x: "40", y: "45", width: "30", height: "15", fill: "#f472b6" }),
                        React.createElement("text", { x: "55", y: "40", fontSize: "7", textAnchor: "middle" }, "90"),
                        React.createElement("rect", { x: "100", y: "15", width: "30", height: "45", fill: "#db2777" }),
                        React.createElement("text", { x: "115", y: "10", fontSize: "7", textAnchor: "middle", fontWeight: "bold" }, "92"),
                        React.createElement("text", { x: "15", y: "60", fontSize: "5", fill: "#94a3b8" }, "Y = 89"),
                        React.createElement("text", { x: "150", y: "35", fontSize: "6", fill: "#db2777", fontWeight: "bold" }, "¡Eje Y truncado!")
                    )
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "Se manipuló la escala del eje vertical:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Eje Y Truncado  ➔  Exageración Visual"
                )
            )
                },
                {
                    titulo: "Generalización Apresurada",
                    situacion: React.createElement("span", {},
                "Una persona conoce a 3 estudiantes de medicina de una universidad y nota que todos son desorganizados. Concluye que todos los estudiantes de esa universidad son descuidados. ¿Es válido su argumento?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La generalización apresurada es una falacia lógica que consiste en tomar una muestra extremadamente pequeña e insuficiente y extender su comportamiento a toda la población general como si fuera una regla absoluta."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Relación de Tamaños"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "• Muestra: n = 3 estudiantes.",
                        React.createElement("br", {}),
                        "• Población total de la universidad: N = 15.000 estudiantes."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "Porcentaje de la población analizada:"),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "Tasa = (3 / 15.000) * 100% = 0.02% de los estudiantes. Muestra estadísticamente insignificante.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La conclusión carece de soporte estadístico:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Muestra Insuficiente  ➔  Generalización Apresurada"
                )
            )
                },
                {
                    titulo: "Falacia del Jugador",
                    situacion: React.createElement("span", {},
                "En una mesa de ruleta, el color rojo ha salido 5 veces seguidas. Un jugador apuesta con fuerza al color negro creyendo que 'por probabilidad ya le toca salir'. ¿Tiene razón?"
            ),
                    analisis: React.createElement("div", { className: "space-y-4 font-sans text-left" },
                React.createElement("p", { className: "text-slate-600 leading-relaxed text-xs font-light" },
                    "La falacia del jugador es la creencia errónea de que los resultados de eventos independientes del pasado alteran la probabilidad de eventos futuros. En lanzamientos independientes, la probabilidad es siempre idéntica en cada tirada."
                ),
                React.createElement("div", { className: "p-3 bg-violet-50/50 border border-violet-100 rounded-xl" },
                    React.createElement("span", { className: "text-[10px] font-bold text-violet-600 uppercase tracking-wider block mb-1" }, "Probabilidad del Turno 6"),
                    React.createElement("p", { className: "text-slate-700 font-semibold text-xs leading-relaxed" },
                        "La ruleta no tiene memoria. P(Negro en el lanzamiento 6) es exactamente 50% (sin contar el cero)."
                    )
                )
            ),
                    calculo: React.createElement("div", { className: "w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 mt-2 shadow-inner flex flex-col gap-4" },
                React.createElement("div", { className: "border-b border-slate-200/60 pb-2 text-left font-mono text-[11px]" },
                    React.createElement("p", { className: "text-slate-600" }, "P(Rojo en cada tiro) = 1/2. P(Negro en cada tiro) = 1/2."),
                    React.createElement("p", { className: "text-slate-600 mt-1" }, "P(Rojo, Rojo, Rojo, Rojo, Rojo, Negro) = (1/2)^6 = 1/64.")
                )
            ),
                    resultado: React.createElement("div", { className: "flex flex-col items-center gap-1.5 text-xs text-white" },
                React.createElement("span", {}, "La ruleta no recuerda eventos pasados; la probabilidad es la misma:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl font-mono text-[13px] border border-white/20 whitespace-nowrap overflow-x-auto max-w-full" },
                    "P(Negro) = 0.50 (50%)"
                )
            )
                },
            ],
            preguntas: [
                {
            type: "Causalidad",
            question: React.createElement("span", {},
                "Un estudio muestra que a mayor cantidad de iglesias en una ciudad, también es mayor el consumo de bebidas alcohólicas. ¿A qué se debe este fenómeno?"
            ),
            options: ["Ambas aumentan debido a una causa común (el crecimiento de la población)", "Ir a la iglesia provoca que la gente beba alcohol", "El consumo de alcohol causa que se construyan más iglesias", "Es una relación aleatoria sin correlación real"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Es una correlación impulsada por una variable de confusión común:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Población Grande ➔ Más Iglesias y Más Bares. Correlación ≠ Causalidad."
                )
            )
        },
{
            type: "Muestreo",
            question: React.createElement("span", {},
                "Para conocer la intención de voto residencial de un país, se llama solo a teléfonos fijos entre las 10 AM y las 12 PM. ¿Qué sesgo metodológico se comete?"
            ),
            options: ["Sesgo de selección por exclusión de la población trabajadora y móvil", "Sesgo de respuesta por llamadas caídas", "Sesgo de confirmación del encuestador", "Ausencia de sesgo estadístico"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Se excluye a quienes no tienen teléfono fijo o están trabajando fuera del hogar a esa hora:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Muestra sesgada ➔ Excluye subgrupos clave de la población."
                )
            )
        },
{
            type: "Porcentaje",
            question: React.createElement("span", {},
                "Una marca afirma: '8 de cada 10 dentistas nos recomiendan'. Si en la encuesta se permitía recomendar múltiples marcas a la vez, ¿por qué es engañosa la publicidad?"
            ),
            options: ["Porque no aclara que esos mismos dentistas también recomiendan a la competencia", "Porque 8 de cada 10 es un porcentaje menor al 50%", "Porque los dentistas no están autorizados a recomendar marcas comerciales", "Porque la muestra de dentistas es demasiado grande"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Ocultar el hecho de que recomiendan varias marcas manipula el contexto real:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Omisión de Datos de Múltiple Opción"
                )
            )
        },
{
            type: "Torta",
            question: React.createElement("span", {},
                "Un informe de mercadeo muestra un gráfico circular (gráfico de torta) donde tres categorías representan el ",
                "45%, 35% y 25%",
                " respectivamente. ¿Qué error técnico presenta este gráfico?"
            ),
            options: ["Los porcentajes suman 105%, superando el 100% que corresponde a un círculo completo", "Un gráfico de torta no admite más de dos categorías", "Los porcentajes deberían representarse solo en números decimales", "Las porciones deben tener todas el mismo tamaño"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "En un gráfico circular, la suma de las partes debe ser exactamente el 100%:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "45% + 35% + 25% = 105% (Error: Supera el 100% total)"
                )
            )
        },
{
            type: "Conclusión",
            question: React.createElement("span", {},
                "Un analista dice: 'En este hospital murieron más pacientes este año que el año pasado, por lo tanto la calidad médica empeoró'. Si el hospital duplicó su número de admisiones este año, ¿por qué es falsa la conclusión?"
            ),
            options: ["Porque al aumentar las admisiones, el total absoluto de muertes puede subir aunque la tasa de mortalidad baje", "Porque la calidad médica nunca varía de un año a otro", "Porque los hospitales grandes tienen siempre peor calidad", "Porque no se consideraron las muertes fuera del hospital"],
            correct: 0,
            feedback: React.createElement("div", { className: "flex flex-col items-center gap-2 text-center text-xs" },
                React.createElement("span", {}, "Se confunde una cifra absoluta con una tasa o porcentaje relativo:"),
                React.createElement("div", { className: "flex items-center justify-start gap-1.5 bg-black/5 px-3 py-3 rounded-xl font-mono text-xs text-slate-800 whitespace-nowrap overflow-x-auto max-w-full" },
                    "Tasa de mortalidad = Muertes / Admisiones"
                )
            )
        }
            ]
        },
    };
    console.log("mathModulesConfig.js: Configuración global cargada con éxito con ilustraciones SVG.");
})();
