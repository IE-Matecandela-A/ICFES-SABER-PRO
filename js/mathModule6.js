(function() {
    // Definición de iconos Material
    const Icon = ({ name, className = "" }) => (
        <span className={`material-icons-round ${className}`} style={{ fontSize: 'inherit', verticalAlign: 'middle' }}>
            {name}
        </span>
    );

    const iconMap = {
        'PieChart': 'pie_chart',
        'BarChart': 'bar_chart',
        'Dices': 'casino',
        'Sigma': 'functions',
        'Target': 'adjust',
        'Brain': 'psychology',
        'CheckCircle': 'check_circle',
        'ArrowRight': 'arrow_forward',
        'Lightbulb': 'lightbulb',
        'Award': 'emoji_events',
        'RefreshCw': 'refresh',
        'Calculator': 'calculate',
        'BookOpen': 'menu_book',
        'Users': 'groups',
        'List': 'list',
        'TrendingUp': 'trending_up',
        'ScatterChart': 'scatter_plot'
    };

    function MathModule6() {
        const [activeTab, setActiveTab] = React.useState('introduccion');
        
        // Quiz State
        const [currentQuestion, setCurrentQuestion] = React.useState(0);
        const [score, setScore] = React.useState(0);
        const [showResults, setShowResults] = React.useState(false);
        const [selectedAnswer, setSelectedAnswer] = React.useState(null);
        const [hasAnswered, setHasAnswered] = React.useState(false);

        // ==========================================
        // BANCO DE DATOS: 12 CASOS DIDÁCTICOS
        // ==========================================
        
        const ejemplosEstrategia1 = [
            {
                titulo: "El promedio alterado",
                situacion: "En un grupo de 4 estudiantes, el promedio de edad es 15 años. Si entra el profesor que tiene 40 años, ¿cuál es el nuevo promedio del grupo completo?",
                analisis: "Para hallar el nuevo promedio, necesitamos la SUMA TOTAL de todas las edades. Sabemos que los 4 alumnos promedian 15, así que su suma es 4 × 15 = 60. A esto le sumamos el profesor.",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex gap-2 items-center"><Icon name="arrow_forward" className="w-3 h-3 text-slate-400 shrink-0"/><span>Suma alumnos: 4 × 15 = 60</span></li>
                        <li className="flex gap-2 items-center"><Icon name="arrow_forward" className="w-3 h-3 text-slate-400 shrink-0"/><span>Suma total: 60 + 40 (Profesor) = 100</span></li>
                        <li className="flex gap-2 items-center"><Icon name="arrow_forward" className="w-3 h-3 text-slate-400 shrink-0"/><span>Total personas: 4 + 1 = 5</span></li>
                        <li className="flex gap-2 items-center"><Icon name="arrow_forward" className="w-3 h-3 text-rose-500 shrink-0"/><span className="font-bold text-rose-600">Nuevo Promedio: 100 ÷ 5 = 20</span></li>
                    </ul>
                ),
                resultado: "El nuevo promedio es 20 años."
            },
            {
                titulo: "Hallar el dato faltante",
                situacion: "Tus primeras tres notas en matemáticas son 3.0, 4.0 y 2.0. Si quieres que tu promedio exacto de las 4 notas sea 3.5, ¿cuánto debes sacar en el último examen?",
                analisis: "Si el promedio de 4 notas debe ser 3.5, la SUMA TOTAL de las 4 notas debe ser 4 × 3.5 = 14.0. Solo tenemos que restar las notas que ya tenemos para hallar la nota faltante.",
                calculo: (
                    <div className="space-y-1.5 text-xs font-mono">
                        <p>Suma objetivo = 4 × 3.5 = 14.0</p>
                        <p>Suma actual = 3.0 + 4.0 + 2.0 = 9.0</p>
                        <p className="pt-2 mt-2 border-t border-slate-100 font-bold text-rose-600">Faltante = 14.0 - 9.0 = 5.0</p>
                    </div>
                ),
                resultado: "Debes sacar un 5.0 exacto."
            },
            {
                titulo: "La Mediana tramposa",
                situacion: "Calcula la mediana de la siguiente lista de salarios (en millones): $10, $2, $8, $4.",
                analisis: "¡Cuidado! Nunca saques la mediana sin ORDENAR los datos primero (de menor a mayor). Como la lista es PAR (4 datos), la mediana será el promedio de los DOS números centrales.",
                calculo: (
                    <ul className="text-xs space-y-1.5 font-mono">
                        <li className="flex gap-2 text-slate-500 line-through">10, 2, 8, 4 (Incorrecto)</li>
                        <li className="flex gap-2 font-bold">Ordenados: 2, 4, 8, 10</li>
                        <li className="flex gap-2">Centro: 4 y 8.</li>
                        <li className="flex gap-2 text-rose-600 font-bold">Promedio: (4 + 8) ÷ 2 = 6</li>
                    </ul>
                ),
                resultado: "La mediana es $6 millones."
            }
        ];

        const ejemplosEstrategia2 = [
            {
                titulo: "Claves de candado (Multiplicativo)",
                situacion: "Un candado de bicicleta tiene 4 rodillos, cada uno con dígitos del 0 al 9. ¿Cuántas combinaciones diferentes existen si se pueden repetir los números?",
                analisis: "Usamos el Principio Multiplicativo. Hay 10 opciones para el primer dígito (0-9), 10 para el segundo, etc. Simplemente multiplicamos las opciones de cada espacio.",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex justify-between"><span>Dígito 1:</span> <span>10 opciones</span></li>
                        <li className="flex justify-between"><span>Dígito 2:</span> <span>10 opciones</span></li>
                        <li className="flex justify-between"><span>Dígito 3:</span> <span>10 opciones</span></li>
                        <li className="flex justify-between"><span>Dígito 4:</span> <span>10 opciones</span></li>
                        <li className="flex justify-between text-orange-600 font-bold border-t border-slate-100 pt-1"><span>Total:</span> <span>10 × 10 × 10 × 10</span></li>
                    </ul>
                ),
                resultado: "Hay 10.000 combinaciones posibles."
            },
            {
                titulo: "El Podio Olímpico (Permutación)",
                situacion: "En una carrera de 8 atletas, se van a entregar medallas de Oro, Plata y Bronce. ¿De cuántas formas diferentes se puede formar el podio?",
                analisis: "Como los puestos son distintos (Oro no es lo mismo que Plata), ¡EL ORDEN IMPORTA! Es una Permutación. Hay 8 opciones para el Oro, 7 para la Plata y 6 para el Bronce.",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex justify-between border-b border-slate-100 pb-1"><span>Oro:</span> <span className="text-amber-500 font-bold">8 opciones</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-1"><span>Plata:</span> <span className="text-slate-400 font-bold">7 opciones restantes</span></li>
                        <li className="flex justify-between border-b border-slate-100 pb-1"><span>Bronce:</span> <span className="text-orange-700 font-bold">6 opciones restantes</span></li>
                        <li className="flex justify-between text-orange-600 font-bold pt-1"><span>Cálculo:</span> <span>8 × 7 × 6</span></li>
                    </ul>
                ),
                resultado: "Existen 336 podios distintos."
            },
            {
                titulo: "Equipos de Trabajo (Combinación)",
                situacion: "¿De cuántas formas puede un profesor elegir un grupo de 2 estudiantes para borrar el pizarrón, si hay 5 estudiantes voluntarios?",
                analisis: "Como ambos harán lo mismo (borrar el pizarrón), ¡EL ORDEN NO IMPORTA! (Elegir a Juan y Ana es lo mismo que Ana y Juan). Es una Combinación. Fórmula: n! / [r!(n-r)!]",
                calculo: (
                    <div className="space-y-1.5 text-xs font-mono">
                        <p className="text-slate-500">Total (n) = 5. Elegir (r) = 2.</p>
                        <p>Combinación = (5 × 4) ÷ (2 × 1)</p>
                        <p className="font-bold text-orange-600">C = 20 ÷ 2 = 10</p>
                    </div>
                ),
                resultado: "Hay 10 equipos posibles."
            }
        ];

        const ejemplosEstrategia3 = [
            {
                titulo: "Lanzar dos dados (Suma 7)",
                situacion: "Si lanzas dos dados estándar (de 6 caras), ¿cuál es la probabilidad exacta de que la suma de sus caras sea 7?",
                analisis: "Probabilidad = (Casos a Favor) / (Casos Totales). Cada dado tiene 6 caras, por tanto hay 6 × 6 = 36 casos totales. Ahora buscamos cuáles suman 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1).",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex gap-2">Casos Totales = 36</li>
                        <li className="flex gap-2 text-red-600">Casos a Favor = 6</li>
                        <li className="flex gap-2 font-bold text-red-600 border-t border-slate-100 pt-1">Prob = 6 / 36</li>
                        <li className="flex gap-2">Simplificando: 1 / 6</li>
                    </ul>
                ),
                resultado: "Probabilidad = 1/6 (o 16.6%)."
            },
            {
                titulo: "Eventos Sin Reemplazo (Dependientes)",
                situacion: "En una urna hay 3 bolas rojas y 2 azules. Extraes una bola (es roja) y NO la devuelves. ¿Cuál es la probabilidad de que la segunda bola también sea roja?",
                analisis: "Al no devolver la primera bola, el 'Universo' cambia. Originalmente había 5 bolas (3 rojas). Como sacaste una roja, ahora quedan 4 bolas totales, y solo 2 de ellas son rojas.",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex gap-2 text-slate-500">Inicio: 3 Rojas, 2 Azules (Total 5).</li>
                        <li className="flex gap-2 text-slate-500">Sacas 1 Roja (Quedan: 2 Rojas, Total 4).</li>
                        <li className="flex gap-2 font-bold text-red-600">Nueva Probabilidad = Favorables / Total</li>
                        <li className="flex gap-2 font-bold text-red-600">Prob = 2 / 4 = 1 / 2</li>
                    </ul>
                ),
                resultado: "Probabilidad = 1/2 (o 50%)."
            },
            {
                titulo: "La Regla del 'O' (Suma de Probabilidades)",
                situacion: "En una baraja de 52 cartas hay 4 Ases y 4 Reyes. Si sacas una sola carta, ¿cuál es la probabilidad de sacar un As O un Rey?",
                analisis: "En probabilidad, la letra 'O' significa SUMA (eventos excluyentes). Sumamos la probabilidad de sacar As con la probabilidad de sacar Rey.",
                calculo: (
                    <div className="space-y-1.5 text-xs font-mono">
                        <p>Prob(As) = 4 / 52</p>
                        <p>Prob(Rey) = 4 / 52</p>
                        <p className="pt-2 mt-2 border-t border-slate-100 font-bold text-red-600">Prob(As O Rey) = 4/52 + 4/52 = 8/52</p>
                    </div>
                ),
                resultado: "Probabilidad = 8/52 (aprox 15%)."
            }
        ];

        const ejemplosEstrategia4 = [
            {
                titulo: "El Rango de Temperaturas",
                situacion: "Las temperaturas (en °C) registradas durante una semana fueron: 20, 22, 19, 35, 21. ¿Cuál es el rango de temperatura y qué indica ese valor atípico (35)?",
                analisis: "El Rango es la medida de dispersión más básica: Valor Máximo menos Valor Mínimo. Indica qué tan estirados están los datos. El 35 es un 'valor atípico' que distorsiona el análisis.",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex gap-2">Valor Máximo = 35</li>
                        <li className="flex gap-2">Valor Mínimo = 19</li>
                        <li className="flex gap-2 font-bold text-pink-600">Rango = 35 - 19 = 16</li>
                    </ul>
                ),
                resultado: "El rango es 16°C (Alta dispersión)."
            },
            {
                titulo: "Mismo promedio, distinta realidad",
                situacion: "El Grupo A sacó notas de (40, 50, 60). El Grupo B sacó (10, 50, 90). Ambos promedian 50. ¿Cuál grupo es más 'homogéneo' (menos disperso)?",
                analisis: "La 'Dispersión' (Varianza o Desviación Estándar) mide qué tan lejos están los datos del promedio. Datos agrupados cerca del centro significan baja dispersión (homogéneos).",
                calculo: (
                    <ul className="text-xs space-y-2 font-mono">
                        <li className="flex gap-2">Grupo A: Notas cerca al 50. Rango = 20.</li>
                        <li className="flex gap-2">Grupo B: Notas muy extremas. Rango = 80.</li>
                        <li className="flex gap-2 text-pink-600 font-bold border-t border-slate-100 pt-1">Menor rango/distancia al centro = Menor dispersión.</li>
                    </ul>
                ),
                resultado: "El Grupo A es más homogéneo."
            },
            {
                titulo: "Promedio vs. Mediana",
                situacion: "En una empresa pequeña, 9 empleados ganan $1 millón. El jefe gana $50 millones. ¿Qué medida representa mejor el salario típico de la empresa, el promedio o la mediana?",
                analisis: "Cuando hay valores extremos o atípicos (el jefe), el Promedio se distorsiona enormemente hacia arriba. La Mediana, al enfocarse solo en la posición central, ignora esos extremos.",
                calculo: (
                    <div className="space-y-1.5 text-xs font-mono">
                        <p className="text-slate-500">Promedio = (9M + 50M) / 10 = $5.9M</p>
                        <p className="font-bold text-pink-600">Mediana (Dato central de 10) = $1 Millón</p>
                    </div>
                ),
                resultado: "La Mediana es mucho más realista aquí."
            }
        ];

        // Configuración de temas para el diseño unificado
        const themeConfig = {
            rose: { bgLight: 'bg-rose-50/50', text: 'text-rose-600', badgeBg: 'bg-rose-100', badgeText: 'text-rose-700', grad: 'from-rose-400 to-rose-600' },
            orange: { bgLight: 'bg-orange-50/50', text: 'text-orange-600', badgeBg: 'bg-orange-100', badgeText: 'text-orange-700', grad: 'from-orange-400 to-orange-600' },
            red: { bgLight: 'bg-red-50/50', text: 'text-red-600', badgeBg: 'bg-red-100', badgeText: 'text-red-700', grad: 'from-red-400 to-red-600' },
            pink: { bgLight: 'bg-pink-50/50', text: 'text-pink-600', badgeBg: 'bg-pink-100', badgeText: 'text-pink-700', grad: 'from-pink-400 to-pink-600' },
        };

        // Función Helper para renderizar los Casos Didácticos
        const renderCasos = (casosArray, colorTheme) => {
            const theme = themeConfig[colorTheme];
            
            return (
                <div className="space-y-8 mt-8">
                    {casosArray.map((caso, index) => (
                        <div key={index} className="relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group">
                            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${theme.grad}`}></div>
                            <div className="p-6 md:px-8 md:pt-8 md:pb-6 border-b border-slate-100 bg-slate-50/30">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-2 ${theme.badgeBg} rounded-xl`}>
                                        <Icon name="lightbulb" className={`w-5 h-5 ${theme.text}`} />
                                    </div>
                                    <h4 className="text-xl font-bold text-slate-800">Caso Práctico {index + 1}: {caso.titulo}</h4>
                                </div>
                                <p className="text-slate-600 font-medium text-[15px] leading-relaxed italic border-l-4 border-slate-300 pl-4 ml-1 py-1">
                                    "{caso.situacion}"
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100 bg-white">
                                 <div className="p-6 hover:bg-slate-50/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs`}>1</span>
                                            <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Analizar</h5>
                                        </div>
                                        <div className="text-sm text-slate-600 leading-relaxed">{caso.analisis}</div>
                                 </div>
                                 <div className="p-6 hover:bg-slate-50/50 transition-colors">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`flex items-center justify-center w-7 h-7 rounded-full ${theme.badgeBg} ${theme.badgeText} font-bold text-xs`}>2</span>
                                            <h5 className="font-bold text-slate-800 text-sm uppercase tracking-wide">Operar</h5>
                                        </div>
                                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner">
                                            {caso.calculo}
                                        </div>
                                 </div>
                                 <div className={`p-6 ${theme.bgLight} flex flex-col justify-center`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className={`flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br ${theme.grad} text-white font-bold text-xs shadow-sm`}>3</span>
                                            <h5 className={`font-bold ${theme.text} text-sm uppercase tracking-wide`}>Conclusión</h5>
                                        </div>
                                        <div className={`mt-2 p-4 rounded-xl bg-gradient-to-br ${theme.grad} text-center shadow-md`}>
                                            <span className="text-[15px] font-bold text-white tracking-wide">{caso.resultado}</span>
                                        </div>
                                 </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        };

        // ==========================================
        // QUIZ (PRÁCTICA) - 6 PREGUNTAS
        // ==========================================
        const questions = [
            {
                type: "Promedios",
                question: "Un basquetbolista anotó 10, 15 y 20 puntos en sus primeros tres juegos. ¿Cuántos puntos debe anotar en su cuarto juego para que su promedio final sea exactamente 15 puntos por partido?",
                visual: (
                    <div className="w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center">
                         <svg className="w-48 h-32 overflow-visible" viewBox="0 0 120 80">
                             <rect x="10" y="50" width="15" height="30" fill="#fb7185" />
                             <text x="17.5" y="45" fontSize="8" fill="#e11d48" textAnchor="middle" fontWeight="bold">10</text>
                             
                             <rect x="35" y="35" width="15" height="45" fill="#f43f5e" />
                             <text x="42.5" y="30" fontSize="8" fill="#e11d48" textAnchor="middle" fontWeight="bold">15</text>
                             
                             <rect x="60" y="20" width="15" height="60" fill="#e11d48" />
                             <text x="67.5" y="15" fontSize="8" fill="#be123c" textAnchor="middle" fontWeight="bold">20</text>
                             
                             <rect x="85" y="40" width="15" height="40" fill="none" stroke="#be123c" strokeWidth="2" strokeDasharray="2 2" />
                             <text x="92.5" y="35" fontSize="12" fill="#be123c" textAnchor="middle" fontWeight="bold">?</text>
                             
                             <line x1="5" y1="35" x2="110" y2="35" stroke="#be123c" strokeWidth="1.5" strokeDasharray="4 2" />
                             <text x="110" y="32" fontSize="6" fill="#be123c" fontWeight="bold">Promedio 15</text>
                         </svg>
                    </div>
                ),
                options: ["10", "15", "20", "25"],
                correct: 1,
                feedback: "¡Muy bien! Suma objetivo = 4 juegos × 15 pts = 60. Suma actual = 10+15+20 = 45. Puntos faltantes = 60 - 45 = 15."
            },
            {
                type: "Combinatoria",
                question: "Un restaurante ofrece 3 tipos de entradas, 4 platos fuertes y 2 postres. Si un 'Menú del Día' consiste en elegir exactamente uno de cada uno, ¿cuántos menús diferentes puedes armar?",
                visual: (
                    <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 text-center font-mono">
                         <div className="flex justify-between text-orange-600 font-bold mb-2 text-xs">
                             <span>Entradas</span> <span>Fuertes</span> <span>Postres</span>
                         </div>
                         <div className="flex justify-between text-2xl font-black text-slate-800">
                             <span>3</span> <span className="text-orange-400">×</span> <span>4</span> <span className="text-orange-400">×</span> <span>2</span>
                         </div>
                    </div>
                ),
                options: ["9 Menús", "14 Menús", "24 Menús", "12 Menús"],
                correct: 2,
                feedback: "¡Exacto! Usaste el Principio Multiplicativo. Simplemente multiplicas las opciones de cada etapa: 3 × 4 × 2 = 24."
            },
            {
                type: "Permutación",
                question: "Tengo 5 libros diferentes. Quiero acomodar 3 de ellos en una repisa. Como la portada de cada libro importa visualmente, el ORDEN sí importa. ¿De cuántas formas puedo ordenarlos?",
                visual: (
                    <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-slate-50 rounded-xl shadow-sm border border-slate-200">
                      <div className="flex justify-center gap-4">
                             <div className="w-12 h-16 border-2 border-orange-400 bg-orange-100 flex items-center justify-center text-orange-700 font-bold rounded text-xs">1ro</div>
                             <div className="w-12 h-16 border-2 border-orange-400 bg-orange-100 flex items-center justify-center text-orange-700 font-bold rounded text-xs">2do</div>
                             <div className="w-12 h-16 border-2 border-orange-400 bg-orange-100 flex items-center justify-center text-orange-700 font-bold rounded text-xs">3ro</div>
                      </div>
                      <div className="text-center text-[10px] mt-3 text-slate-500 font-bold uppercase">5 LIBROS DISPONIBLES EN TOTAL</div>
                    </div>
                ),
                options: ["15 formas", "60 formas", "10 formas", "120 formas"],
                correct: 1,
                feedback: "¡Perfecto! Tienes 5 opciones para el primer espacio, 4 para el segundo y 3 para el tercero. Multiplicando: 5 × 4 × 3 = 60."
            },
            {
                type: "Probabilidad Simple",
                question: "En una baraja francesa (52 cartas), hay 13 cartas de Corazones (rojas). ¿Cuál es la probabilidad de sacar al azar una carta que NO sea de Corazones?",
                visual: (
                    <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-white rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-6">
                        <div className="text-center border-r border-slate-200 pr-6">
                            <div className="text-4xl text-slate-800 mb-1">♠ ♣ ♦</div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">NO Corazones</span>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl text-red-500 mb-1">♥</div>
                            <span className="text-[10px] font-bold text-slate-500 uppercase">13 Corazones</span>
                        </div>
                    </div>
                ),
                options: ["13 / 52", "39 / 52", "1 / 4", "1 / 2"],
                correct: 1,
                feedback: "¡Muy bien! Si 13 son de corazones, entonces 52 - 13 = 39 NO son de corazones. La probabilidad es 39 / 52 (que se simplifica a 3/4 o 75%)."
            },
            {
                type: "Dispersión",
                question: "El rango de estaturas del Salón A es 10 cm. El rango del Salón B es 35 cm. Si ambos salones promedian 1.60m de estatura, ¿qué salón tiene estudiantes de estaturas más similares (homogéneas)?",
                visual: (
                    <div className="w-full max-md mx-auto mb-6 mt-4 p-4 bg-slate-50 rounded-xl shadow-sm border border-slate-200 flex justify-center items-center gap-4">
                         <div className="flex-1 text-center bg-white p-3 rounded shadow-sm border border-pink-100">
                             <div className="text-xs font-bold text-pink-600 mb-1">Salón A</div>
                             <div className="font-mono text-xl font-black text-slate-800">R: 10</div>
                         </div>
                         <div className="flex-1 text-center bg-white p-3 rounded shadow-sm border border-pink-100">
                             <div className="text-xs font-bold text-pink-600 mb-1">Salón B</div>
                             <div className="font-mono text-xl font-black text-slate-800">R: 35</div>
                         </div>
                    </div>
                ),
                options: [
                    "Salón B",
                    "Ambos son iguales porque promedian lo mismo.",
                    "Salón A",
                    "No se puede deducir con el rango."
                ],
                correct: 2,
                feedback: "¡Ojo clínico! El Rango (Max - Min) mide la dispersión. Un rango menor (10) significa que los datos están agrupados muy cerquita del promedio, por lo que son más homogéneos."
            },
            {
                type: "Dato Atípico",
                question: "En una lista de notas (1, 2, 2, 3, 3, 4, 100), se introdujo por error el '100'. ¿Qué medida estadística se dañará (distorsionará) más brutalmente por este error?",
                visual: (
                    <div className="w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-white rounded-xl shadow-sm border border-slate-200 text-center">
                        <p className="font-mono font-bold text-lg text-slate-600 tracking-widest text-xs">1 2 2 3 3 4 <span className="text-red-500 text-2xl animate-pulse">100</span></p>
                    </div>
                ),
                options: ["La Moda", "La Mediana", "El Promedio (Media)", "El total de datos"],
                correct: 2,
                feedback: "¡Así es! El promedio (Media) suma todos los valores, por lo que un valor gigante lo arrastra hacia arriba. La Mediana, al solo mirar el centro, no se afecta casi nada."
            }
        ];

        const handleAnswer = (index) => {
            if (hasAnswered) return;
            setSelectedAnswer(index);
            setHasAnswered(true);
            if (index === questions[currentQuestion].correct) setScore(score + 1);
        };

        const nextQuestion = () => {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setSelectedAnswer(null);
                setHasAnswered(false);
            } else {
                setShowResults(true);
            }
        };

        const resetQuiz = () => {
            setCurrentQuestion(0);
            setScore(0);
            setShowResults(false);
            setSelectedAnswer(null);
            setHasAnswered(false);
        };

        const getResultMessage = () => {
            const percentage = score / questions.length;
            if (percentage === 1) return { title: "¡Científico de Datos!", desc: "Dominas por completo la probabilidad y la estadística. Sabes diferenciar permutaciones y evitas los engaños del promedio." };
            if (percentage >= 0.6) return { title: "¡Buen Análisis Estocástico!", desc: "Entiendes los datos, pero ten cuidado con la diferencia entre Combinación y Permutación. Repasa esos casos." };
            return { title: "¡La probabilidad es práctica!", desc: "El azar tiene reglas fijas. Vuelve a estudiar el formulario clave, especialmente la Regla de Laplace." };
        };

        const resultData = getResultMessage();

        return (
            <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8 flex items-center justify-center">
                <div className="max-w-6xl w-full mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-200">
                    
                    {/* Header */}
                    <header className="relative bg-[#1A0A0E] p-8 md:p-14 overflow-hidden">
                        <div className="absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-rose-500/10 blur-[120px] rounded-full"></div>
                        
                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="max-w-2xl">
                                <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full">
                                    <Icon name="pie_chart" className="text-rose-400" />
                                    <span className="text-rose-300 font-bold tracking-widest text-[10px] uppercase">Módulo de Competencia 6</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-black mb-5 text-white tracking-tight leading-tight">
                                    Estadística y <br className="hidden md:block"/><span className="text-rose-400">Probabilidad</span>
                                </h1>
                                <p className="text-slate-300 text-base leading-relaxed font-light max-w-xl">
                                    Evalúa tu capacidad de analizar datos e incertidumbre: domina promedios engañosos, técnicas de conteo, distribuciones y leyes de probabilidad.
                                </p>
                            </div>
                            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-rose-600 rounded-3xl transform rotate-6 shadow-lg border border-white/20">
                                 <Icon name="casino" className="text-white text-4xl" />
                            </div>
                        </div>
                    </header>

                    {/* Navegación */}
                    <nav className="px-6 md:px-12 pt-8 pb-4">
                        <div className="flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 overflow-x-auto">
                            {[
                                { id: 'introduccion', icon: 'bar_chart', label: 'Datos y Azar' },
                                { id: 'teoria', icon: 'menu_book', label: 'Leyes Estadísticas' },
                                { id: 'practica', icon: 'adjust', label: 'Simulador de Datos' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex items-center justify-center gap-2 px-6 py-3 font-bold text-xs transition-all rounded-xl whitespace-nowrap flex-1 ${
                                        activeTab === tab.id 
                                            ? 'bg-white text-rose-700 shadow-sm border border-slate-200' 
                                            : 'text-slate-500 hover:text-slate-800'
                                    }`}
                                >
                                    <Icon name={tab.icon} className={activeTab === tab.id ? 'text-rose-500' : ''} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    {/* Contenido Principal */}
                    <main className="p-6 md:px-12 pb-12">
                        
                        {activeTab === 'introduccion' && (
                            <div className="space-y-10">
                                <div className="grid md:grid-cols-2 gap-10 items-center">
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Jugando con la incertidumbre</h2>
                                        <p className="text-slate-600 leading-relaxed text-base font-light">
                                            El mundo no es perfecto y no siempre tenemos todos los datos. Esta sección del examen evalúa si puedes <strong className="font-semibold text-rose-700">predecir escenarios futuros</strong> y sacar conclusiones de conjuntos de información masivos.
                                        </p>
                                        
                                        <div className="bg-white border border-slate-200 shadow-sm rounded-3xl p-8 relative overflow-hidden group">
                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-500 rounded-l-3xl"></div>
                                            <h3 className="font-bold text-slate-800 mb-6 text-base uppercase tracking-wider">Los 4 pilares Estadísticos:</h3>
                                            <ul className="space-y-5">
                                                {[
                                                    "Tendencia Central (Promedio, Mediana y Moda).",
                                                    "Análisis Combinatorio (Permutaciones y Combinaciones).",
                                                    "Probabilidad Simple y Compuesta (Eventos).",
                                                    "Medidas de Dispersión (Rangos y valores atípicos)."
                                                ].map((text, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-slate-600">
                                                        <div className="mt-0.5 bg-rose-100 p-1.5 rounded-lg shrink-0">
                                                            <Icon name="check_circle" className="text-rose-600 text-base" />
                                                        </div>
                                                        <span className="font-medium text-sm">{text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-200 flex flex-col items-center justify-center relative shadow-inner overflow-hidden">
                                        <div className="relative w-full h-64 flex items-center justify-center">
                                            <div className="relative w-48 h-48 bg-white border border-rose-100 rounded-3xl shadow-xl flex items-center justify-center">
                                                <div className="flex items-end gap-2">
                                                     <div className="w-5 h-10 bg-rose-300 rounded-t-sm"></div>
                                                     <div className="w-5 h-20 bg-rose-400 rounded-t-sm"></div>
                                                     <div className="w-5 h-28 bg-rose-500 rounded-t-sm"></div>
                                                     <div className="w-5 h-16 bg-rose-400 rounded-t-sm"></div>
                                                </div>
                                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-slate-100" style={{ background: 'conic-gradient(#f43f5e 0% 60%, #fb923c 60% 100%)' }}></div>
                                                <div className="absolute -top-6 -left-6 w-14 h-14 bg-white rounded-2xl shadow-lg border border-rose-100 flex items-center justify-center animate-bounce duration-[3000ms]">
                                                    <Icon name="casino" className="text-rose-600 text-3xl" />
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-slate-500 font-medium italic mt-6 text-center max-w-sm">
                                            "En Dios confiamos, todos los demás deben traer datos."
                                        </p>
                                        <button 
                                            onClick={() => setActiveTab('teoria')}
                                            className="mt-8 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-all hover:shadow-lg flex items-center gap-3 text-sm"
                                        >
                                            Ver Fórmulas Visuales <Icon name="arrow_forward" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'teoria' && (
                            <div className="space-y-12">
                                <div className="text-center max-w-3xl mx-auto mb-10">
                                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight mb-4">Leyes y Fórmulas Estadísticas</h2>
                                    <div className="w-20 h-1 bg-rose-500 mx-auto rounded-full mb-6"></div>
                                    <p className="text-slate-500 text-base">
                                        Estudia nuestro <strong>Formulario Clave</strong> y luego analiza cómo aplicar estas leyes estocásticas para resolver los casos de estudio.
                                    </p>
                                </div>

                                <div className="space-y-10">
                                    {/* Categoría 1 */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                            <Icon name="functions" className="text-rose-600 text-2xl" />
                                            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">1. Tendencia Central</h3>
                                        </div>
                                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                <div className="space-y-2">
                                                    <h5 className="font-bold text-rose-700 text-[10px] uppercase tracking-widest">Media (Promedio)</h5>
                                                    <p className="text-xs text-slate-500">Punto de equilibrio del conjunto.</p>
                                                    <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 font-mono text-center text-xs text-rose-600 font-bold">Sum / Count</div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h5 className="font-bold text-rose-700 text-[10px] uppercase tracking-widest">Mediana</h5>
                                                    <p className="text-xs text-slate-500">Valor central (con datos ordenados).</p>
                                                </div>
                                                <div className="space-y-2">
                                                    <h5 className="font-bold text-rose-700 text-[10px] uppercase tracking-widest">Moda</h5>
                                                    <p className="text-xs text-slate-500">El valor que más veces aparece.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {renderCasos(ejemplosEstrategia1, 'rose')}
                                    </div>

                                    {/* Categoría 2 */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                            <Icon name="list" className="text-orange-600 text-2xl" />
                                            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">2. Técnicas de Conteo</h3>
                                        </div>
                                        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <h5 className="font-bold text-orange-700 text-[10px] uppercase tracking-widest">Permutación (SÍ importa el orden)</h5>
                                                    <p className="text-xs text-slate-500 italic">Ej: Contraseñas, rankings.</p>
                                                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-center font-mono text-xs font-bold text-orange-700">P = n! / (n-r)!</div>
                                                </div>
                                                <div className="space-y-3">
                                                    <h5 className="font-bold text-orange-700 text-[10px] uppercase tracking-widest">Combinación (NO importa el orden)</h5>
                                                    <p className="text-xs text-slate-500 italic">Ej: Equipos, ensaladas.</p>
                                                    <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-center font-mono text-xs font-bold text-orange-700">C = n! / [r!(n-r)!]</div>
                                                </div>
                                            </div>
                                        </div>
                                        {renderCasos(ejemplosEstrategia2, 'orange')}
                                    </div>

                                    {/* Categoría 3 */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                            <Icon name="adjust" className="text-red-600 text-2xl" />
                                            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">3. Probabilidad</h3>
                                        </div>
                                        {renderCasos(ejemplosEstrategia3, 'red')}
                                    </div>

                                    {/* Categoría 4 */}
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                                            <Icon name="scatter_plot" className="text-pink-600 text-2xl" />
                                            <h3 className="text-xl font-bold text-slate-800 uppercase tracking-wider">4. Dispersión</h3>
                                        </div>
                                        {renderCasos(ejemplosEstrategia4, 'pink')}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practica' && (
                            <div className="max-w-3xl mx-auto">
                                {!showResults ? (
                                    <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-sm relative overflow-hidden">
                                        <div className="mb-8 flex justify-between items-end">
                                            <div>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-3 py-1 bg-slate-100 rounded-full inline-block">
                                                    Desafío: <span className="text-rose-500">{questions[currentQuestion].type}</span>
                                                </p>
                                                <h4 className="text-3xl font-extrabold text-slate-800">Pregunta {currentQuestion + 1}</h4>
                                            </div>
                                            <span className="text-slate-400 font-bold text-xs uppercase">Simulación {currentQuestion + 1}/{questions.length}</span>
                                        </div>
                                        
                                        <div className="w-full bg-slate-100 h-2 rounded-full mb-10 overflow-hidden">
                                            <div 
                                                className="bg-rose-500 h-full transition-all duration-500 ease-out"
                                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                            ></div>
                                        </div>

                                        <h3 className="text-lg font-medium text-slate-700 mb-6 leading-relaxed">
                                            {questions[currentQuestion].question}
                                        </h3>

                                        {questions[currentQuestion].visual && (
                                            <div className="w-full bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8">
                                                {questions[currentQuestion].visual}
                                            </div>
                                        )}

                                        <div className="grid gap-3 mb-10">
                                            {questions[currentQuestion].options.map((option, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleAnswer(index)}
                                                    disabled={hasAnswered}
                                                    className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium text-sm ${
                                                        hasAnswered
                                                            ? index === questions[currentQuestion].correct
                                                                ? 'bg-emerald-50 border-emerald-400 text-emerald-900'
                                                                : index === selectedAnswer
                                                                    ? 'bg-rose-50 border-rose-300 text-rose-900'
                                                                    : 'bg-white border-slate-100 text-slate-400 opacity-50'
                                                            : 'bg-white border-slate-200 hover:border-rose-400 hover:bg-rose-50/10 text-slate-600'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 text-[10px] b ${
                                                            hasAnswered
                                                                ? index === questions[currentQuestion].correct
                                                                    ? 'border-emerald-500 bg-emerald-500 text-white'
                                                                    : index === selectedAnswer
                                                                        ? 'border-rose-400 bg-rose-400 text-white'
                                                                        : 'border-slate-200'
                                                                : 'border-slate-200'
                                                        }`}>
                                                            {String.fromCharCode(65 + index)}
                                                        </div>
                                                        <span>{option}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>

                                        {hasAnswered && (
                                            <div className={`p-5 rounded-xl border mb-8 flex gap-4 ${
                                                selectedAnswer === questions[currentQuestion].correct 
                                                    ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                                                    : 'bg-rose-50 border-rose-100 text-rose-800'
                                            }`}>
                                                <Icon name={selectedAnswer === questions[currentQuestion].correct ? 'check_circle' : 'info'} className="text-xl shrink-0" />
                                                <p className="font-semibold text-sm leading-relaxed">{questions[currentQuestion].feedback}</p>
                                            </div>
                                        )}

                                        <div className="flex justify-end">
                                            <button
                                                onClick={nextQuestion}
                                                disabled={!hasAnswered}
                                                className={`px-10 py-4 rounded-xl font-bold flex items-center gap-3 transition-all text-sm ${
                                                    hasAnswered
                                                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg'
                                                        : 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                                                }`}
                                            >
                                                {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Continuar'}
                                                <Icon name="arrow_forward" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-3xl border border-slate-200 p-10 md:p-16 text-center shadow-xl relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-500 to-red-500"></div>
                                        
                                        <div className="w-24 h-24 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-8 border-4 border-white shadow-lg">
                                            <Icon name="emoji_events" className="text-rose-600 text-5xl" />
                                        </div>
                                        
                                        <h2 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight">{resultData.title}</h2>
                                        <p className="text-sm text-slate-500 mb-10 font-light max-w-xs mx-auto leading-relaxed">
                                            {resultData.desc}
                                        </p>
                                        
                                        <div className="bg-slate-50 rounded-3xl p-8 mb-10 max-w-xs mx-auto border border-slate-100">
                                            <div className="text-6xl font-black text-rose-600 mb-2">
                                                {score} <span className="text-xl text-slate-300">/ {questions.length}</span>
                                            </div>
                                            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mt-4">Puntaje Estadístico</p>
                                        </div>

                                        <button
                                            onClick={resetQuiz}
                                            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-5 rounded-2xl font-bold transition-all hover:shadow-xl flex items-center gap-3 mx-auto text-sm"
                                        >
                                            <Icon name="refresh" />
                                            Simular de nuevo
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}

                    </main>
                </div>
            </div>
        );
    }

    // Registro para el sistema de ruteo
    window.renderMathModule6 = function(containerId) {
        console.log("Iniciando render de mathModule6 en:", containerId);
        const container = document.getElementById(containerId);
        if (!container) return;

        if (window._reactRoots && window._reactRoots[containerId]) {
            const root = window._reactRoots[containerId];
            root.render(<MathModule6 />);
        } else {
            const root = ReactDOM.createRoot(container);
            if (!window._reactRoots) window._reactRoots = {};
            window._reactRoots[containerId] = root;
            root.render(<MathModule6 />);
        }
    };
})();
