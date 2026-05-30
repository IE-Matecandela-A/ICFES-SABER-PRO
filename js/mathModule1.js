(function() {
    const React = window.React;
    const { useState, useEffect, useMemo, useCallback } = React;
    
    // Icon component wrapper for Material Icons
    const Icon = ({ name, className = "", style = {} }) => (
      React.createElement("span", { className: `material-icons-round ${className}`, style: { fontSize: 'inherit', verticalAlign: 'middle', ...style } }, name)
    );

    function MathModule1() {
  const [activeTab, setActiveTab] = useState('introduccion');
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  // Contenido del Quiz (6 Preguntas)
  const questions = [
    {
      type: "Gráficos de Barras",
      question: "La gráfica muestra las ventas de 4 productos. ¿Qué producto vendió exactamente el doble que el producto D?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:flex-end; height:200px; border-left:2px solid #333; border-bottom:2px solid #333; width:80%; padding-bottom:5px; justify-content:space-around;">
                    <div style="height: 37%; width: 40px; background: #3b82f6; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">150</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">A</span></div>
                    <div style="height: 100%; width: 40px; background: #3b82f6; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">400</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">B</span></div>
                    <div style="height: 77%; width: 40px; background: #3b82f6; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">310</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">C</span></div>
                    <div style="height: 50%; width: 40px; background: #3b82f6; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">200</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">D</span></div>
                </div>
                <div style="margin-top: 30px; font-weight:bold; color:#666;">Productos</div>` } }),
      options: ["Producto A","Producto B","Producto C","Ninguno"],
      correct: 1,
      feedback: "El producto D vendió 200. El doble de 200 es 400, que corresponde al Producto B."
    },
    {
      type: "Gráfico de Líneas",
      question: "El gráfico ilustra los cambios de temperatura. ¿En qué intervalo se observa el mayor descenso de temperatura?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 200" style="width:100%; max-width:400px; height:auto;">
                    <!-- Ejes -->
                    <line x1="30" y1="170" x2="280" y2="170" stroke="#333" stroke-width="2"/>
                    <line x1="30" y1="20" x2="30" y2="170" stroke="#333" stroke-width="2"/>
                    <!-- Puntos y líneas (Valores: 80, 70, 30, 50, 45) -->
                    <!-- Escala Y: max 100 = y:20, min 0 = y:170 -->
                    <polyline points="50,50 100,65 150,125 200,95 250,102.5" fill="none" stroke="#ef4444" stroke-width="3" />
                    <circle cx="50" cy="50" r="4" fill="#000"/><text x="40" y="40" font-size="10">80°</text>
                    <circle cx="100" cy="65" r="4" fill="#000"/><text x="90" y="55" font-size="10">70°</text>
                    <circle cx="150" cy="125" r="4" fill="#000"/><text x="140" y="115" font-size="10">30°</text>
                    <circle cx="200" cy="95" r="4" fill="#000"/><text x="190" y="85" font-size="10">50°</text>
                    <circle cx="250" cy="102.5" r="4" fill="#000"/><text x="240" y="92" font-size="10">45°</text>
                    <!-- Etiquetas X -->
                    <text x="40" y="185" font-size="12">Min1</text><text x="90" y="185" font-size="12">Min2</text><text x="140" y="185" font-size="12">Min3</text><text x="190" y="185" font-size="12">Min4</text><text x="240" y="185" font-size="12">Min5</text>
                </svg>` } }),
      options: ["Min 1 a Min 2","Min 2 a Min 3","Min 3 a Min 4","Min 4 a Min 5"],
      correct: 1,
      feedback: "La pendiente más empinada hacia abajo ocurre del Min 2 (70°) al Min 3 (30°), cayendo 40°."
    },
    {
      type: "Gráficos Circulares",
      question: "Si el ingreso mensual es $4,000,000 COP, ¿cuánto dinero destinan a Transporte (15%) y Ahorro (10%) en conjunto?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:center; gap:20px;">
                    <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#10b981 0% 50%, #f59e0b 50% 75%, #6366f1 75% 90%, #8b5cf6 90% 100%);"></div>
                    <div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#10b981; margin-right:5px;"></span> Vivienda (50%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#f59e0b; margin-right:5px;"></span> Alimentos (25%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#6366f1; margin-right:5px;"></span> Transporte (15%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#8b5cf6; margin-right:5px;"></span> Ahorro (10%)</div>
                    </div>
                </div>` } }),
      options: ["$600,000","$1,000,000","$400,000","$1,400,000"],
      correct: 1,
      feedback: "15% + 10% = 25%. El 25% (una cuarta parte) de $4,000,000 es $1,000,000."
    },
    {
      type: "Tablas de Doble Entrada",
      question: "Según la tabla de propiedades, ¿qué cambio de estado experimenta el Elemento B al pasar de 20°C a 100°C?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Sustancia</th><th>20°C (Inicial)</th><th>100°C (Final)</th></tr></thead>
                    <tbody>
                        <tr><td><b>Elemento A</b></td><td>Sólido</td><td>Líquido</td></tr>
                        <tr><td><b>Elemento B</b></td><td>Líquido</td><td>Gas</td></tr>
                        <tr><td><b>Elemento C</b></td><td>Sólido</td><td>Sólido</td></tr>
                    </tbody>
                </table>` } }),
      options: ["De sólido a líquido","De líquido a gas (Evaporación)","De gas a líquido","De líquido a sólido"],
      correct: 1,
      feedback: "Cruzando la fila \"Elemento B\", inicia Líquido y termina en Gas."
    },
    {
      type: "Diagrama de Dispersión",
      question: "El gráfico muestra horas de estudio vs puntaje. ¿Qué conclusión es correcta basándose en la \"nube\" de puntos?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 200 150" style="width:100%; max-width:300px;">
                    <line x1="20" y1="130" x2="180" y2="130" stroke="#333" />
                    <line x1="20" y1="10" x2="20" y2="130" stroke="#333" />
                    <!-- Nube positiva -->
                    <circle cx="40" cy="110" r="4" fill="#ec4899"/><circle cx="55" cy="95" r="4" fill="#ec4899"/>
                    <circle cx="70" cy="100" r="4" fill="#ec4899"/><circle cx="90" cy="70" r="4" fill="#ec4899"/>
                    <circle cx="110" cy="85" r="4" fill="#ec4899"/><circle cx="130" cy="50" r="4" fill="#ec4899"/>
                    <circle cx="150" cy="60" r="4" fill="#ec4899"/><circle cx="170" cy="30" r="4" fill="#ec4899"/>
                    <text x="70" y="145" font-size="10">Horas Estudio →</text>
                    <text x="5" y="80" font-size="10" transform="rotate(-90 5,80)">Puntaje →</text>
                </svg>` } }),
      options: ["Correlación negativa; a más horas, menor puntaje.","No hay relación.","Correlación positiva; a más horas, mayor puntaje.","El puntaje es constante."],
      correct: 2,
      feedback: "La nube sube de izquierda a derecha, indicando que a mayor valor en X (horas), mayor valor en Y (puntaje)."
    },
    {
      type: "Pictogramas",
      question: "Si cada icono (👤) representa 1,000 personas, ¿cuántas personas habitan en la Zona Sur?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="font-size: 1.2rem; background:white; padding:15px; border-radius:8px; width:100%;">
                    <div style="font-size:0.9rem; color:#666; font-weight:bold; border-bottom:1px solid #ccc; margin-bottom:10px;">CONVENCIÓN: 👤 = 1,000 Personas</div>
                    <div><b>Norte:</b> 👤👤👤</div>
                    <div><b>Centro:</b> 👤👤👤👤👤</div>
                    <div><b>Sur:</b> 👤👤<span style="display:inline-block; width:0.6em; overflow:hidden;">👤</span> <span style="font-size:0.8rem;color:#888;">(medio icono)</span></div>
                </div>` } }),
      options: ["2,000","2,500","3,000","25,000"],
      correct: 1,
      feedback: "La Zona Sur tiene 2 iconos completos y medio icono (2.5). 2.5 * 1000 = 2,500 personas."
    },
    {
      type: "Gráficos de Barras",
      question: "Según la gráfica de lluvia, ¿cuál es la diferencia exacta en mm entre el mes más lluvioso y el menos lluvioso?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:flex-end; height:200px; border-left:2px solid #333; border-bottom:2px solid #333; width:80%; padding-bottom:5px; justify-content:space-around;">
                    <div style="height: 37%; width: 40px; background: #0ea5e9; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">45</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Ene</span></div>
                    <div style="height: 100%; width: 40px; background: #0ea5e9; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">120</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Feb</span></div>
                    <div style="height: 66%; width: 40px; background: #0ea5e9; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">80</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Mar</span></div>
                    <div style="height: 16%; width: 40px; background: #0ea5e9; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">20</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Abr</span></div>
                </div>` } }),
      options: ["100 mm","80 mm","75 mm","40 mm"],
      correct: 0,
      feedback: "Más lluvioso: Febrero (120). Menos lluvioso: Abril (20). Diferencia: 120 - 20 = 100 mm."
    },
    {
      type: "Tablas de Doble Entrada",
      question: "Si se elige al azar a alguien del grupo que NO usa gafas, ¿cuál es la probabilidad de que sea Mujer?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Género</th><th>Usan Gafas</th><th>NO Usan Gafas</th><th>Total</th></tr></thead>
                    <tbody>
                        <tr><td><b>Hombres</b></td><td>15</td><td>25</td><td>40</td></tr>
                        <tr><td><b>Mujeres</b></td><td>20</td><td>40</td><td>60</td></tr>
                        <tr><td><b>Total</b></td><td>35</td><td style="color:red; font-weight:bold;">65</td><td>100</td></tr>
                    </tbody>
                </table>` } }),
      options: ["40 / 100","40 / 60","40 / 65","20 / 65"],
      correct: 2,
      feedback: "La condición es \"personas que NO usan gafas\", cuyo total es 65. De ellas, las mujeres son 40. La probabilidad es 40/65."
    },
    {
      type: "Gráficos Circulares",
      question: "Si se necesita más del 50% para ganar en primera vuelta, ¿qué indica el gráfico electoral?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:center; gap:20px;">
                    <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#ef4444 0% 42%, #3b82f6 42% 77%, #10b981 77% 95%, #9ca3af 95% 100%);"></div>
                    <div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#ef4444; margin-right:5px;"></span> Cand. A (42%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#3b82f6; margin-right:5px;"></span> Cand. B (35%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#10b981; margin-right:5px;"></span> Cand. C (18%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#9ca3af; margin-right:5px;"></span> Blanco (5%)</div>
                    </div>
                </div>` } }),
      options: ["Ganó el Cand. A en primera vuelta.","Habrá segunda vuelta porque nadie superó el 50%.","El Cand. B obtuvo exactamente 3,500 votos.","Los votos blancos ganaron."],
      correct: 1,
      feedback: "El Cand. A es el mayor pero solo tiene el 42%, lo que no cumple el requisito de >50%."
    },
    {
      type: "Gráfico de Líneas",
      question: "Observando el precio del dólar, ¿qué día se produjo un \"descenso\" respecto al día inmediatamente anterior?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="text-align:center; width:100%;">
                    <svg viewBox="0 0 300 150" style="width:100%; max-width:350px;">
                        <line x1="30" y1="120" x2="280" y2="120" stroke="#333" />
                        <!-- L, M, Mi, J, V. (3900, 3950, 4010, 3980, 4050) -->
                        <polyline points="50,90 100,75 150,57 200,66 250,45" fill="none" stroke="#16a34a" stroke-width="3" />
                        <circle cx="50" cy="90" r="4" fill="#000"/><text x="35" y="80" font-size="9">3900</text>
                        <circle cx="100" cy="75" r="4" fill="#000"/><text x="85" y="65" font-size="9">3950</text>
                        <circle cx="150" cy="57" r="4" fill="#000"/><text x="135" y="47" font-size="9">4010</text>
                        <circle cx="200" cy="66" r="4" fill="#000"/><text x="185" y="82" font-size="9">3980</text>
                        <circle cx="250" cy="45" r="4" fill="#000"/><text x="235" y="35" font-size="9">4050</text>
                        <text x="45" y="135" font-size="10">Lun</text><text x="95" y="135" font-size="10">Mar</text><text x="145" y="135" font-size="10">Mié</text><text x="195" y="135" font-size="10">Jue</text><text x="245" y="135" font-size="10">Vie</text>
                    </svg>
                </div>` } }),
      options: ["Martes","Miércoles","Jueves","Viernes"],
      correct: 2,
      feedback: "La línea baja del Miércoles (4010) al Jueves (3980), lo que indica un descenso."
    },
    {
      type: "Diagramas de Dispersión",
      question: "El siguiente diagrama de dispersión muestra la relación entre el Precio de vehículos usados y su Kilometraje. Según la gráfica, ¿qué tipo de tendencia es lógico concluir?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 200 150" style="width:100%; max-width:300px;">
                    <line x1="20" y1="130" x2="180" y2="130" stroke="#333" />
                    <line x1="20" y1="10" x2="20" y2="130" stroke="#333" />
                    <!-- Nube negativa (baja de izquierda a derecha) -->
                    <circle cx="30" cy="20" r="4" fill="#0ea5e9"/><circle cx="45" cy="40" r="4" fill="#0ea5e9"/>
                    <circle cx="55" cy="25" r="4" fill="#0ea5e9"/><circle cx="70" cy="55" r="4" fill="#0ea5e9"/>
                    <circle cx="85" cy="45" r="4" fill="#0ea5e9"/><circle cx="100" cy="70" r="4" fill="#0ea5e9"/>
                    <circle cx="115" cy="65" r="4" fill="#0ea5e9"/><circle cx="130" cy="95" r="4" fill="#0ea5e9"/>
                    <circle cx="145" cy="85" r="4" fill="#0ea5e9"/><circle cx="160" cy="115" r="4" fill="#0ea5e9"/>
                    <circle cx="170" cy="100" r="4" fill="#0ea5e9"/>
                    <text x="70" y="145" font-size="10">Kilometraje →</text>
                    <text x="5" y="80" font-size="10" transform="rotate(-90 5,80)">Precio →</text>
                </svg>` } }),
      options: ["Correlación positiva (sube).","Correlación negativa (baja).","Ausencia de correlación.","Correlación constante."],
      correct: 1,
      feedback: "La nube de puntos desciende de izquierda a derecha. A mayor kilometraje (aumenta X), el precio disminuye (baja Y). Esto es una correlación negativa."
    },
    {
      type: "Pictogramas",
      question: "Si 📚 = 50 libros prestados. ¿Cuántos libros MÁS se prestaron en Abril comparado con Mayo?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="font-size: 1.5rem; background:white; padding:15px; border-radius:8px; width:100%; text-align:center;">
                    <div style="font-size:0.9rem; color:#666; font-weight:bold; border-bottom:1px solid #ccc; margin-bottom:10px;">CONVENCIÓN: 📚 = 50 Libros</div>
                    <div style="margin-bottom:10px;"><b style="font-size:1.1rem; margin-right:15px;">ABRIL:</b> 📚 📚 📚 📚</div>
                    <div><b style="font-size:1.1rem; margin-right:15px;">MAYO:</b> 📚 📚</div>
                </div>` } }),
      options: ["2","100","200","150"],
      correct: 1,
      feedback: "Abril tiene 4 iconos (200). Mayo tiene 2 (100). 200 - 100 = 100 libros más."
    },
    {
      type: "Gráficos de Barras",
      question: "¿Cuál fue el promedio de gasto mensual en este cuatrimestre?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:flex-end; height:200px; border-left:2px solid #333; border-bottom:2px solid #333; width:80%; padding-bottom:5px; justify-content:space-around;">
                    <div style="height: 66%; width: 40px; background: #f59e0b; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">\$200</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Ene</span></div>
                    <div style="height: 50%; width: 40px; background: #f59e0b; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">\$150</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Feb</span></div>
                    <div style="height: 100%; width: 40px; background: #f59e0b; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">\$300</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Mar</span></div>
                    <div style="height: 83%; width: 40px; background: #f59e0b; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">\$250</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold; font-size:11px;">Abr</span></div>
                </div>` } }),
      options: ["$200","$225","$250","$900"],
      correct: 1,
      feedback: "Suma de datos: 200+150+300+250 = 900. Promedio: 900 ÷ 4 = 225."
    },
    {
      type: "Gráfico de Líneas",
      question: "El gráfico muestra el crecimiento de una planta en centímetros. ¿Entre qué semanas NO hubo crecimiento?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 300 150" style="width:100%; max-width:350px;">
                    <line x1="30" y1="120" x2="280" y2="120" stroke="#333" />
                    <polyline points="50,105 100,90 150,75 200,75 250,60" fill="none" stroke="#2563eb" stroke-width="3" />
                    <circle cx="50" cy="105" r="4" fill="#000"/><text x="45" y="95" font-size="9">5cm</text>
                    <circle cx="100" cy="90" r="4" fill="#000"/><text x="95" y="80" font-size="9">10cm</text>
                    <circle cx="150" cy="75" r="4" fill="#000"/><text x="145" y="65" font-size="9">15cm</text>
                    <circle cx="200" cy="75" r="4" fill="#000"/><text x="195" y="65" font-size="9">15cm</text>
                    <circle cx="250" cy="60" r="4" fill="#000"/><text x="245" y="50" font-size="9">20cm</text>
                    <text x="40" y="135" font-size="10">Sem1</text><text x="90" y="135" font-size="10">Sem2</text><text x="140" y="135" font-size="10">Sem3</text><text x="190" y="135" font-size="10">Sem4</text><text x="240" y="135" font-size="10">Sem5</text>
                </svg>` } }),
      options: ["Sem 1 y 2","Sem 2 y 3","Sem 3 y 4","Sem 4 y 5"],
      correct: 2,
      feedback: "Entre la semana 3 y 4 la línea es horizontal (se mantuvo en 15cm), lo que indica pendiente cero o nulo crecimiento."
    },
    {
      type: "Gráficos Circulares",
      question: "Si el total de encuestados es de 200 estudiantes, ¿cuántos prefieren el Tenis?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:center; gap:20px;">
                    <div style="width: 150px; height: 150px; border-radius: 50%; background: conic-gradient(#3b82f6 0% 40%, #f59e0b 40% 70%, #10b981 70% 90%, #6b7280 90% 100%);"></div>
                    <div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#3b82f6; margin-right:5px;"></span> Fútbol (40%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#f59e0b; margin-right:5px;"></span> Baloncesto (30%)</div>
                        <div style="margin-bottom:5px;"><span style="display:inline-block; width:12px; height:12px; background:#10b981; margin-right:5px;"></span> Tenis (20%)</div>
                        <div><span style="display:inline-block; width:12px; height:12px; background:#6b7280; margin-right:5px;"></span> Otros (10%)</div>
                    </div>
                </div>` } }),
      options: ["40","20","60","80"],
      correct: 0,
      feedback: "El Tenis tiene el 20%. El 20% de 200 es 40."
    },
    {
      type: "Tablas de Doble Entrada",
      question: "Si se selecciona a un trabajador que labora en la Tarde, ¿cuál es la probabilidad de que sea Mujer?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Turno</th><th>Hombres</th><th>Mujeres</th><th>Total</th></tr></thead>
                    <tbody>
                        <tr><td><b>Mañana</b></td><td>10</td><td>15</td><td>25</td></tr>
                        <tr><td><b>Tarde</b></td><td>20</td><td>10</td><td>30</td></tr>
                        <tr><td><b>Noche</b></td><td>15</td><td>5</td><td>20</td></tr>
                    </tbody>
                </table>` } }),
      options: ["10 / 75","10 / 30","20 / 30","10 / 25"],
      correct: 1,
      feedback: "El total de trabajadores en el turno Tarde es 30. De esos, 10 son mujeres. Probabilidad = 10 / 30."
    },
    {
      type: "Diagramas de Dispersión",
      question: "Este diagrama compara \"Horas semanales de ejercicio\" vs \"Índice de Masa Corporal (IMC)\". ¿Qué relación visualizan los datos?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <svg viewBox="0 0 200 150" style="width:100%; max-width:300px;">
                    <line x1="20" y1="130" x2="180" y2="130" stroke="#333" />
                    <line x1="20" y1="10" x2="20" y2="130" stroke="#333" />
                    <!-- Nube negativa -->
                    <circle cx="30" cy="30" r="4" fill="#8b5cf6"/><circle cx="45" cy="40" r="4" fill="#8b5cf6"/>
                    <circle cx="60" cy="55" r="4" fill="#8b5cf6"/><circle cx="75" cy="45" r="4" fill="#8b5cf6"/>
                    <circle cx="95" cy="70" r="4" fill="#8b5cf6"/><circle cx="115" cy="85" r="4" fill="#8b5cf6"/>
                    <circle cx="130" cy="100" r="4" fill="#8b5cf6"/><circle cx="150" cy="95" r="4" fill="#8b5cf6"/>
                    <text x="50" y="145" font-size="10">Horas Ejercicio →</text>
                    <text x="5" y="80" font-size="10" transform="rotate(-90 5,80)">IMC →</text>
                </svg>` } }),
      options: ["Correlación Positiva.","Correlación Negativa.","Cero Correlación.","Relación exponencial perfecta."],
      correct: 1,
      feedback: "La nube de puntos desciende de izquierda a derecha; a más ejercicio, menor IMC. Es correlación negativa."
    },
    {
      type: "Pictogramas",
      question: "Si 🌳 = 100 árboles. ¿Cuántos árboles en TOTAL se plantaron sumando los tres parques?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="font-size: 1.2rem; background:white; padding:15px; border-radius:8px; width:100%;">
                    <div style="font-size:0.9rem; color:#666; font-weight:bold; border-bottom:1px solid #ccc; margin-bottom:10px;">CONVENCIÓN: 🌳 = 100 Árboles</div>
                    <div><b>Parque A:</b> 🌳 🌳 🌳</div>
                    <div><b>Parque B:</b> 🌳 🌳 🌳 🌳 <span style="display:inline-block; width:0.6em; overflow:hidden;">🌳</span></div>
                    <div><b>Parque C:</b> 🌳 🌳</div>
                </div>` } }),
      options: ["9.5","95","950","1000"],
      correct: 2,
      feedback: "A(3) + B(4.5) + C(2) = 9.5 iconos. 9.5 * 100 = 950 árboles."
    },
    {
      type: "Gráficos de Barras",
      question: "¿Qué porcentaje del total anual de ventas representa el trimestre C?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <div style="display:flex; align-items:flex-end; height:200px; border-left:2px solid #333; border-bottom:2px solid #333; width:80%; padding-bottom:5px; justify-content:space-around;">
                    <div style="height: 25%; width: 40px; background: #6366f1; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">500</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">A</span></div>
                    <div style="height: 50%; width: 40px; background: #6366f1; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">1000</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">B</span></div>
                    <div style="height: 100%; width: 40px; background: #6366f1; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">2000</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">C</span></div>
                    <div style="height: 25%; width: 40px; background: #6366f1; position:relative;"><span style="position:absolute; top:-20px; width:100%; text-align:center; font-size:12px;">500</span><span style="position:absolute; bottom:-25px; width:100%; text-align:center; font-weight:bold;">D</span></div>
                </div>` } }),
      options: ["20%","30%","50%","40%"],
      correct: 2,
      feedback: "Total = 500+1000+2000+500 = 4000. El trimestre C tuvo 2000, que es exactamente la mitad (50%)."
    },
    {
      type: "Tablas de Doble Entrada",
      question: "¿Qué porcentaje de las personas encuestadas en Cali utiliza Moto como medio principal?",
      visual: React.createElement("div", { dangerouslySetInnerHTML: { __html: `
                <table class="data-table">
                    <thead><tr><th>Ciudad</th><th>Bus</th><th>Moto</th><th>Auto</th><th>Total</th></tr></thead>
                    <tbody>
                        <tr><td><b>Cali</b></td><td>50</td><td>30</td><td>20</td><td>100</td></tr>
                        <tr><td><b>Medellín</b></td><td>40</td><td>40</td><td>20</td><td>100</td></tr>
                    </tbody>
                </table>` } }),
      options: ["15%","30%","50%","60%"],
      correct: 1,
      feedback: "El total de Cali es 100. Los que usan Moto en Cali son 30. Por lo tanto, representan el 30%."
    }
  ];;

  const handleAnswer = (index) => {
    if (hasAnswered) return;
    setSelectedAnswer(index);
    setHasAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
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
    if (percentage === 1) return { title: "¡Desempeño Perfecto!", desc: "Dominas por completo la lectura, extracción y transformación de datos. Estás más que listo para este tipo de preguntas en el examen." };
    if (percentage >= 0.6) return { title: "¡Buen Trabajo!", desc: "Tienes una base muy sólida. Revisa las preguntas en las que fallaste para asegurar un puntaje perfecto la próxima vez." };
    return { title: "¡Sigue Practicando!", desc: "La lectura de gráficas requiere entrenamiento. Te sugerimos volver a la sección de 'Teoría y Gráficas' y repasar los conceptos." };
  };

  const resultData = getResultMessage();

  // Render functions for sections
  const renderIntroduccion = () => (
    React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700" },
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
        // Left column
        React.createElement("div", { className: "space-y-6" },
          React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Bienvenido al módulo"),
          React.createElement("p", { className: "text-slate-600 leading-relaxed text-lg font-light" },
            "En nuestro día a día, estamos bombardeados de información: textos, gráficas, noticias y datos. No basta solo con leer; es fundamental desarrollar la habilidad de ",
            React.createElement("strong", { className: "font-semibold text-emerald-700" }, "procesar"),
            " esa información."
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-white to-slate-50/50 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 relative overflow-hidden group" },
            React.createElement("div", { className: "absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500 rounded-l-2xl" }),
            React.createElement("h3", { className: "font-bold text-slate-800 mb-4 text-lg" }, "¿Qué lograrás en este módulo?"),
            React.createElement("ul", { className: "space-y-4" },
              [
                "Aprender a separar los datos importantes del 'ruido'.",
                "Convertir textos en gráficas y viceversa.",
                "Interpretar qué significan realmente los datos presentados."
              ].map((text, i) => 
                React.createElement("li", { key: i, className: "flex items-start gap-3 text-slate-600" },
                  React.createElement("div", { className: "mt-1 bg-emerald-100 p-1 rounded-full shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300" },
                    React.createElement(Icon, { name: "arrow_forward", className: "w-3 h-3 text-emerald-600 group-hover:text-white" })
                  ),
                  React.createElement("span", null, text)
                )
              )
            )
          )
        ),
        // Right column - 3D visualization
        React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-slate-100 rounded-3xl p-8 border border-white flex flex-col items-center justify-center relative shadow-inner overflow-hidden" },
          React.createElement("div", { className: "relative w-full h-72 flex items-center justify-center", style: { perspective: '1200px' } },
            React.createElement("div", { 
              className: "relative w-56 h-56 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out cursor-default",
              style: { transform: 'rotateX(55deg) rotateZ(-35deg)', transformStyle: 'preserve-3d' }
            },
              React.createElement("div", { style: { transform: 'translateZ(0px)' }, className: "absolute inset-4 border border-slate-300/40 rounded-2xl grid grid-cols-3 grid-rows-3 overflow-hidden" },
                React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-slate-300/40" }),
                React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-r border-slate-300/40" }), React.createElement("div", { className: "border-b border-slate-300/40" }),
                React.createElement("div", { className: "border-r border-slate-300/40" }), React.createElement("div", { className: "border-r border-slate-300/40" }), React.createElement("div")
              ),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-6 left-6 w-12 h-20 bg-gradient-to-t from-emerald-500 to-teal-300 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-6 left-24 w-12 h-32 bg-gradient-to-t from-blue-500 to-indigo-400 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(1px)' }, className: "absolute bottom-24 left-6 w-12 h-24 bg-gradient-to-t from-violet-500 to-purple-400 rounded-t-lg shadow-[inset_-2px_-2px_6px_rgba(0,0,0,0.1),_12px_12px_20px_rgba(0,0,0,0.15)] opacity-95" }),
              React.createElement("div", { style: { transform: 'translateZ(70px)', animationDuration: '3s' }, className: "absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-tr from-amber-300 to-orange-500 rounded-full shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.2),_0_20px_30px_rgba(245,158,11,0.4)] flex items-center justify-center animate-bounce" },
                React.createElement(Icon, { name: "gps_fixed", className: "w-6 h-6 text-white opacity-80" })
              )
            )
          ),
          React.createElement("p", { className: "text-sm text-slate-500 font-medium italic mt-2 text-center" },
            "\"La información es poder, pero solo si sabes cómo interpretarla.\""
          ),
          React.createElement("button", { 
            onClick: () => setActiveTab('teoria'),
            className: "mt-6 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95 flex items-center gap-2"
          },
            "Comenzar Teoría ", React.createElement(Icon, { name: "arrow_forward", className: "w-4 h-4" })
          )
        )
      )
    )
  );

  const renderTeoria = () => (
    React.createElement("div", { className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10" },
      // Three concept cards
      React.createElement("div", { className: "grid md:grid-cols-3 gap-6" },
        [
          { icon: "menu_book", title: '1. Comprender', desc: 'Leer un texto o ver una gráfica y entender su mensaje central. Implicar inferir significados.', color: 'text-purple-600', bg: 'bg-purple-100' },
          { icon: "gps_fixed", title: '2. Extraer', desc: 'Localizar información específica dentro de un gran volumen de datos. Encontrar el dato exacto.', color: 'text-orange-600', bg: 'bg-orange-100' },
          { icon: "sync", title: '3. Transformar', desc: 'Cambiar el formato de la información sin perder su significado. Ej: de tabla a gráfica.', color: 'text-blue-600', bg: 'bg-blue-100' }
        ].map((item, i) => 
          React.createElement("div", { key: i, className: "bg-white/80 backdrop-blur-xl border border-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300" },
            React.createElement("div", { className: `w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-5 shadow-sm border border-${item.color.replace('text-', '')}/10` },
              React.createElement(Icon, { name: item.icon, className: "w-7 h-7" })
            ),
            React.createElement("h3", { className: "text-xl font-extrabold mb-3 text-slate-800" }, item.title),
            React.createElement("p", { className: "text-slate-500 text-sm leading-relaxed" }, item.desc)
          )
        )
      ),
      // Theory content
      React.createElement("div", { className: "bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/40" },
        React.createElement("div", { className: "text-center mb-10" },
          React.createElement("h2", { className: "text-3xl font-extrabold text-slate-800 tracking-tight" }, "Manual Práctico: Tipos de Gráficas"),
          React.createElement("div", { className: "w-20 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mt-4 rounded-full" }),
          React.createElement("p", { className: "mt-4 text-slate-500 max-w-2xl mx-auto text-base" },
            "Analizaremos los formatos visuales más utilizados en las pruebas y te daremos las claves exactas para leerlos sin cometer errores."
          )
        ),
        React.createElement("div", { className: "space-y-8" },
          // Gráficos de Barras
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-emerald-100 rounded-lg" }, React.createElement(Icon, { name: "bar_chart", className: "w-5 h-5 text-emerald-600" })),
              "1. Gráficos de Barras (Comparaciones)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "pt-4 pb-8 px-4 bg-white rounded-xl shadow-sm border border-slate-100" },
                React.createElement("div", { className: "relative h-48 border-b-2 border-l-2 border-slate-300 flex items-end justify-around ml-8" },
                  React.createElement("div", { className: "absolute h-full -left-8 top-0 flex flex-col justify-between text-[10px] text-slate-500 font-bold py-0 text-right w-6 pr-1" },
                    React.createElement("span", null, "100"), React.createElement("span", null, "75"), React.createElement("span", null, "50"), React.createElement("span", null, "25"), React.createElement("span", null, "0")
                  ),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-1/4 left-0 -z-10" }),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-2/4 left-0 -z-10" }),
                  React.createElement("div", { className: "absolute w-full border-t border-dashed border-slate-200 bottom-3/4 left-0 -z-10" }),
                  [
                    { label: 'Matemáticas', short: 'Mate', val: '85', from: 'from-emerald-400', to: 'to-emerald-500' },
                    { label: 'Lectura Crít.', short: 'Lectura', val: '70', from: 'from-blue-400', to: 'to-blue-500' },
                    { label: 'C. Naturales', short: 'Ciencias', val: '60', from: 'from-teal-400', to: 'to-teal-500' },
                    { label: 'Sociales', short: 'Sociales', val: '45', from: 'from-indigo-400', to: 'to-indigo-500' }
                  ].map((item, i) => 
                    React.createElement("div", { key: i, className: "flex flex-col items-center w-1/4 h-full justify-end relative z-10 group" },
                      React.createElement("span", { className: "text-xs font-bold text-slate-700 absolute transition-all duration-300 mb-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2", style: { bottom: `${item.val}%` } }, item.val + '%'),
                      React.createElement("div", { className: `w-8 md:w-12 bg-gradient-to-t ${item.from} ${item.to} rounded-t-md transition-all duration-1000 shadow-sm`, style: { height: `${item.val}%` } }),
                      React.createElement("span", { className: "text-xs font-semibold text-slate-500 absolute -bottom-7 text-center whitespace-nowrap" }, item.short)
                    )
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-emerald-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " El Eje X muestra categorías independientes, mientras el Eje Y indica cantidad. Son ideales para ",
                  React.createElement("strong", { className: "text-emerald-600" }, "comparar magnitudes"),
                  " rápidamente."
                )
              )
            )
          ),
          // Gráfico de Líneas
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-blue-100 rounded-lg" }, React.createElement(Icon, { name: "show_chart", className: "w-5 h-5 text-blue-600" })),
              "2. Gráfico de Líneas (Tendencias)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center" },
                React.createElement("svg", { className: "w-full h-40 overflow-visible drop-shadow-sm", viewBox: "0 0 1000 400" },
                  React.createElement("defs", null,
                    React.createElement("linearGradient", { id: "area-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%" },
                      React.createElement("stop", { offset: "0%", stopColor: "#3b82f6", stopOpacity: "0.4" }),
                      React.createElement("stop", { offset: "100%", stopColor: "#3b82f6", stopOpacity: "0.0" })
                    )
                  ),
                  React.createElement("g", { stroke: "#e2e8f0", strokeWidth: "2", strokeDasharray: "6 6" },
                    React.createElement("line", { x1: "0", y1: "100", x2: "1000", y2: "100" }),
                    React.createElement("line", { x1: "0", y1: "200", x2: "1000", y2: "200" })
                  ),
                  React.createElement("g", { stroke: "#cbd5e1", strokeWidth: "3" },
                    React.createElement("line", { x1: "0", y1: "350", x2: "1000", y2: "350" }),
                    React.createElement("line", { x1: "0", y1: "0", x2: "0", y2: "350" })
                  ),
                  React.createElement("path", { d: "M 0 300 L 250 200 L 500 250 L 750 100 L 1000 150 L 1000 350 L 0 350 Z", fill: "url(#area-gradient)" }),
                  React.createElement("polyline", { points: "0,300 250,200 500,250 750,100 1000,150", fill: "none", stroke: "#3b82f6", strokeWidth: "6", strokeLinecap: "round", strokeLinejoin: "round" }),
                  React.createElement("g", { fill: "#ffffff", stroke: "#2563eb", strokeWidth: "4" },
                    React.createElement("circle", { cx: "0", cy: "300", r: "8" }), React.createElement("circle", { cx: "250", cy: "200", r: "8" }),
                    React.createElement("circle", { cx: "500", cy: "250", r: "8" }), React.createElement("circle", { cx: "750", cy: "100", r: "8" }),
                    React.createElement("circle", { cx: "1000", cy: "150", r: "8" })
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-blue-100 shadow-[0_4px_20px_rgba(59,130,246,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Muestran cambios de una variable ",
                  React.createElement("strong", { className: "text-blue-600" }, "continua"),
                  ". Observa las pendientes: una línea subiendo indica incremento; bajando indica descenso."
                )
              )
            )
          ),
          // Gráficos Circulares
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-purple-100 rounded-lg" }, React.createElement(Icon, { name: "pie_chart", className: "w-5 h-5 text-purple-600" })),
              "3. Gráficos Circulares (Proporciones)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col md:flex-row justify-center gap-8 items-center" },
                React.createElement("div", { className: "w-40 h-40 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] shrink-0 border-[6px] border-white", style: { background: 'conic-gradient(#10b981 0% 50%, #3b82f6 50% 75%, #8b5cf6 75% 90%, #f59e0b 90% 100%)' } }),
                React.createElement("ul", { className: "text-sm space-y-4 font-medium text-slate-600" },
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-emerald-500 shadow-sm" }), "Vivienda (50%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-blue-500 shadow-sm" }), "Alimentos (25%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-purple-500 shadow-sm" }), "Transporte (15%)"),
                  React.createElement("li", { className: "flex items-center gap-3" }, React.createElement("div", { className: "w-4 h-4 rounded-md bg-amber-500 shadow-sm" }), "Ahorro (10%)")
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-purple-100 shadow-[0_4px_20px_rgba(139,92,246,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-purple-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " El círculo completo ",
                  React.createElement("strong", { className: "text-purple-600" }, "siempre representa el 100%"),
                  ". Sirve para ver qué porción es mayor o menor de forma relativa comparada con el total."
                )
              )
            )
          ),
          // Tablas de Doble Entrada
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-amber-100 rounded-lg" }, React.createElement(Icon, { name: "table_chart", className: "w-5 h-5 text-amber-600" })),
              "4. Tablas de Doble Entrada"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm" },
                React.createElement("table", { className: "w-full text-sm text-left" },
                  React.createElement("thead", { className: "bg-slate-50 text-slate-700 border-b border-slate-200" },
                    React.createElement("tr", null,
                      React.createElement("th", { className: "p-4 font-bold" }, "Sustancia"),
                      React.createElement("th", { className: "p-4 font-bold text-center" }, "20°C (Inicial)"),
                      React.createElement("th", { className: "p-4 font-bold text-center" }, "100°C (Final)")
                    )
                  ),
                  React.createElement("tbody", null,
                    React.createElement("tr", { className: "border-b border-slate-100" },
                      React.createElement("td", { className: "p-4 font-semibold text-slate-800 bg-slate-50/50" }, "Elemento A"),
                      React.createElement("td", { className: "p-4 text-center" }, "Sólido"),
                      React.createElement("td", { className: "p-4 text-center text-blue-600 font-bold" }, "Líquido")
                    ),
                    React.createElement("tr", null,
                      React.createElement("td", { className: "p-4 font-semibold text-slate-800 bg-slate-50/50" }, "Elemento B"),
                      React.createElement("td", { className: "p-4 text-center" }, "Líquido"),
                      React.createElement("td", { className: "p-4 text-center text-orange-500 font-bold" }, "Gas")
                    )
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-amber-100 shadow-[0_4px_20px_rgba(245,158,11,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-amber-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Cruza filas con columnas. La cabecera indica 'qué' se está midiendo, y la fila indica 'a quién'. Un error común es leer solo un dato sin relacionarlo con su cruce."
                )
              )
            )
          ),
          // Diagramas de Dispersión
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-rose-100 rounded-lg" }, React.createElement(Icon, { name: "scatter_plot", className: "w-5 h-5 text-rose-600" })),
              "5. Diagramas de Dispersión"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-center justify-center" },
                React.createElement("svg", { className: "w-full h-40 overflow-visible drop-shadow-sm", viewBox: "0 0 100 100" },
                  React.createElement("polyline", { points: "10,10 10,90 90,90", fill: "none", stroke: "#cbd5e1", strokeWidth: "2" }),
                  React.createElement("text", { x: "50", y: "99", fontSize: "6", fill: "#64748b", textAnchor: "middle", fontWeight: "bold" }, "Horas de Estudio"),
                  React.createElement("text", { x: "2", y: "50", fontSize: "6", fill: "#64748b", transform: "rotate(-90 2,50)", textAnchor: "middle", fontWeight: "bold" }, "Puntaje"),
                  React.createElement("line", { x1: "15", y1: "85", x2: "85", y2: "15", stroke: "#ffe4e6", strokeWidth: "4", strokeLinecap: "round" }),
                  React.createElement("line", { x1: "15", y1: "85", x2: "85", y2: "15", stroke: "#fda4af", strokeWidth: "1.5", strokeDasharray: "3 3" }),
                  [ [15, 80], [20, 85], [25, 70], [30, 75], [35, 60], [40, 65], [45, 50], [50, 55], [55, 40], [60, 45], [65, 30], [70, 35], [75, 20], [80, 25], [85, 10] ].map((point, i) =>
                    React.createElement("circle", { key: i, cx: point[0], cy: point[1], r: "2.5", fill: "#e11d48", className: "hover:r-4 transition-all duration-200 cursor-pointer" })
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-rose-100 shadow-[0_4px_20px_rgba(244,63,94,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-rose-500" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Muestran relaciones entre dos variables. Imagina una 'nube' de puntos. Si sube de izquierda a derecha, es una ",
                  React.createElement("strong", { className: "text-rose-600" }, "correlación positiva"),
                  "."
                )
              )
            )
          ),
          // Pictogramas
          React.createElement("div", { className: "bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow" },
            React.createElement("h3", { className: "text-xl font-bold text-slate-800 mb-6 flex items-center gap-3" },
              React.createElement("div", { className: "p-2 bg-teal-100 rounded-lg" }, React.createElement(Icon, { name: "grid_view", className: "w-5 h-5 text-teal-600" })),
              "6. Pictogramas (Iconos)"
            ),
            React.createElement("div", { className: "grid md:grid-cols-2 gap-8 items-center" },
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-slate-100 shadow-sm" },
                React.createElement("div", { className: "mb-4 text-center pb-3 border-b border-slate-100" },
                  React.createElement("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest" }, "Convención Clave"),
                  React.createElement("div", { className: "flex items-center justify-center gap-2 mt-2 bg-slate-50 py-2 rounded-lg border border-slate-200/60 w-max mx-auto px-4" },
                    React.createElement(Icon, { name: "groups", className: "w-5 h-5 text-teal-500" }), 
                    React.createElement("span", { className: "text-sm font-bold text-slate-700" }, "= 1,000 Personas")
                  )
                ),
                React.createElement("div", { className: "space-y-4 mt-6" },
                  React.createElement("div", { className: "flex items-center gap-4" },
                    React.createElement("span", { className: "w-16 text-sm font-bold text-slate-600 text-right" }, "Norte"),
                    React.createElement("div", { className: "flex gap-1.5 text-teal-500" },
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" }),
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" }),
                      React.createElement(Icon, { name: "groups", className: "w-6 h-6 hover:scale-110 transition-transform cursor-pointer drop-shadow-sm" })
                    ),
                    React.createElement("span", { className: "text-xs font-bold text-teal-700 bg-teal-50 px-2 py-1 rounded-md ml-auto" }, "3,000")
                  )
                )
              ),
              React.createElement("div", { className: "bg-white p-6 rounded-xl border border-teal-100 shadow-[0_4px_20px_rgba(20,184,166,0.05)] relative overflow-hidden" },
                React.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-1.5 bg-teal-400" }),
                React.createElement("p", { className: "text-slate-600 leading-relaxed" },
                  React.createElement("strong", { className: "text-slate-800" }, "Cómo leerlo:"), " Utilizan imágenes para representar cantidades. La ",
                  React.createElement("strong", { className: "text-teal-600" }, "regla de oro"),
                  " es buscar siempre la leyenda (ej. '1 icono = 1000') antes de empezar a contar."
                )
              )
            )
          )
        )
      )
    )
  );

  const renderPractica = () => (
    React.createElement("div", { className: "animate-in fade-in zoom-in-95 duration-500 max-w-3xl mx-auto" },
      !showResults ? 
        React.createElement("div", { className: "bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-12 relative overflow-hidden" },
          React.createElement("div", { className: "absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2" }),
          React.createElement("div", { className: "mb-8 flex justify-between items-end" },
            React.createElement("div", null,
              React.createElement("p", { className: "text-sm font-bold text-slate-400 uppercase tracking-widest mb-2" },
                "Habilidad: ", React.createElement("span", { className: "text-emerald-500" }, questions[currentQuestion].type)
              ),
              React.createElement("h4", { className: "text-3xl font-extrabold text-slate-800" }, "Pregunta ", currentQuestion + 1)
            ),
            React.createElement("span", { className: "text-slate-400 font-medium" }, "de ", questions.length)
          ),
          React.createElement("div", { className: "w-full bg-slate-100 h-2.5 rounded-full mb-10 overflow-hidden shadow-inner" },
            React.createElement("div", { className: "bg-gradient-to-r from-emerald-400 to-teal-500 h-full transition-all duration-500 ease-out", style: { width: `${((currentQuestion + 1) / questions.length) * 100}%` } })
          ),
          React.createElement("h3", { className: "text-xl font-medium text-slate-700 mb-6 leading-relaxed" }, questions[currentQuestion].question),
          questions[currentQuestion].visual && 
            React.createElement("div", { className: "w-full bg-slate-50/70 rounded-2xl border border-slate-200/60 p-2 md:p-6 mb-8 shadow-inner" }, questions[currentQuestion].visual),
          React.createElement("div", { className: "space-y-4 mb-10" },
            questions[currentQuestion].options.map((option, index) => 
              React.createElement("button", {
                key: index,
                onClick: () => handleAnswer(index),
                disabled: hasAnswered,
                className: `w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                  hasAnswered
                    ? index === questions[currentQuestion].correct
                      ? 'bg-emerald-50/50 border-emerald-400 text-emerald-900 shadow-[0_8px_20px_rgba(52,211,153,0.15)] scale-[1.02]'
                      : index === selectedAnswer
                        ? 'bg-rose-50/50 border-rose-300 text-rose-900 scale-[0.98] opacity-80'
                        : 'bg-white border-slate-100 text-slate-400 opacity-50'
                    : 'bg-white border-slate-100 hover:border-emerald-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] text-slate-600 hover:-translate-y-1'
                }`
              },
                React.createElement("div", { className: "flex items-center gap-4" },
                  React.createElement("div", { className: `w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                    hasAnswered
                      ? index === questions[currentQuestion].correct
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : index === selectedAnswer
                          ? 'border-rose-400 bg-rose-400 text-white'
                          : 'border-slate-200'
                      : 'border-slate-200'
                  }` },
                    hasAnswered && index === questions[currentQuestion].correct && React.createElement(Icon, { name: "check_circle", className: "w-5 h-5" })
                  ),
                  React.createElement("span", { className: "font-medium text-[15px]" }, option)
                )
              )
            )
          ),
          hasAnswered && 
            React.createElement("div", { className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 ${
              selectedAnswer === questions[currentQuestion].correct 
                ? 'bg-emerald-50 border border-emerald-100 text-emerald-800' 
                : 'bg-amber-50 border border-amber-100 text-amber-800'
            }` },
              React.createElement("p", { className: "font-semibold text-sm md:text-base" }, questions[currentQuestion].feedback)
            ),
          React.createElement("div", { className: "flex justify-end" },
            React.createElement("button", {
              onClick: nextQuestion,
              disabled: !hasAnswered,
              className: `px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 ${
                hasAnswered
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`
            },
              currentQuestion === questions.length - 1 ? 'Ver Resultados Finales' : 'Siguiente Pregunta',
              React.createElement(Icon, { name: "arrow_forward", className: "w-5 h-5" })
            )
          )
        ) :
        React.createElement("div", { className: "bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-white p-10 md:p-16 text-center animate-in zoom-in-95 duration-500 relative overflow-hidden" },
          React.createElement("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500" }),
          React.createElement("div", { className: "w-28 h-28 mx-auto bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full flex items-center justify-center mb-8 shadow-inner border border-white" },
            React.createElement(Icon, { name: "emoji_events", className: "w-14 h-14 text-emerald-500" })
          ),
          React.createElement("h2", { className: "text-4xl font-extrabold text-slate-800 mb-4 tracking-tight" }, resultData.title),
          React.createElement("p", { className: "text-slate-500 mb-10 text-lg font-light max-w-md mx-auto" }, resultData.desc),
          React.createElement("div", { className: "bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 mb-10 max-w-sm mx-auto border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" },
            React.createElement("div", { className: "text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 mb-2" },
              score, React.createElement("span", { className: "text-3xl text-slate-300 font-bold" }, " / ", questions.length)
            ),
            React.createElement("p", { className: "text-slate-400 font-bold uppercase tracking-widest text-xs mt-4" }, "Respuestas Correctas")
          ),
          React.createElement("button", {
            onClick: resetQuiz,
            className: "bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 rounded-xl font-bold transition-all hover:shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
          },
            React.createElement(Icon, { name: "refresh", className: "w-5 h-5" }),
            "Intentar de nuevo"
          )
        )
    )
  );

  // Main render
  return (
    React.createElement("div", { className: "w-full min-h-[calc(100vh-76px)] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-slate-100 via-slate-50 to-slate-200 font-sans text-slate-800 p-2 md:p-6 flex flex-col" },
      React.createElement("div", { className: "max-w-[1600px] w-full flex-grow mx-auto bg-white/70 backdrop-blur-2xl rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-0 sm:border border-white flex flex-col" },
        // Header
        React.createElement("header", { className: "relative bg-slate-900 p-8 md:p-12 overflow-hidden" },
          React.createElement("div", { className: "absolute -top-32 -right-32 w-[30rem] h-[30rem] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" }),
          React.createElement("div", { className: "absolute -bottom-32 -left-32 w-[30rem] h-[30rem] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" }),
          React.createElement("div", { className: "absolute top-10 right-10 opacity-10 transform rotate-12 pointer-events-none" },
            React.createElement("div", { style: { transform: 'rotateX(60deg) rotateZ(-45deg)', transformStyle: 'preserve-3d' }, className: "w-40 h-40 border-2 border-white rounded-2xl" })
          ),
          React.createElement("div", { className: "relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6" },
            React.createElement("div", { className: "max-w-2xl" },
              React.createElement("div", { className: "inline-flex items-center gap-3 mb-5 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg" },
                React.createElement(Icon, { name: "psychology", className: "w-5 h-5 text-emerald-400" }),
                React.createElement("span", { className: "text-emerald-300 font-semibold tracking-widest text-xs uppercase" }, "Módulo de Competencia")
              ),
              React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight" },
                "Interpretación y ", React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300" }, "Representación")
              ),
              React.createElement("p", { className: "text-slate-300 text-lg leading-relaxed font-light" },
                "Evalúa la capacidad para comprender y transformar la información, así como la capacidad para extraer información relevante."
              )
            ),
            React.createElement("div", { className: "hidden md:flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] transform rotate-3" },
              React.createElement(Icon, { name: "insights", className: "w-10 h-10 text-white" })
            )
          )
        ),
        // Navigation tabs
        React.createElement("nav", { className: "px-6 md:px-10 pt-8 pb-4" },
          React.createElement("div", { className: "flex bg-slate-200/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-300/50 overflow-x-auto hide-scrollbar" },
            [
              { id: 'introduccion', icon: 'gps_fixed', label: 'Introducción' },
              { id: 'teoria', icon: 'menu_book', label: 'Teoría y Gráficas' },
              { id: 'practica', icon: 'check_circle', label: 'Práctica Interactiva' }
            ].map((tab) => 
              React.createElement("button", {
                key: tab.id,
                onClick: () => setActiveTab(tab.id),
                className: `flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-xl whitespace-nowrap flex-1 ${
                  activeTab === tab.id 
                    ? 'bg-white text-emerald-700 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-white scale-100' 
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-300/30 scale-95'
                }`
              },
                React.createElement(Icon, { name: tab.icon, className: `w-4 h-4 ${activeTab === tab.id ? 'text-emerald-500' : ''}` }),
                tab.label
              )
            )
          )
        ),
        // Main content
        React.createElement("main", { className: "p-6 md:px-10 md:pb-10 md:pt-4" },
          activeTab === 'introduccion' && renderIntroduccion(),
          activeTab === 'teoria' && renderTeoria(),
          activeTab === 'practica' && renderPractica()
        )
      )
    )
  );
}

  window.renderMathModule1 = (containerId) => {
    console.log("React Render Engine: Ejecutando en", containerId);
    const container = document.getElementById(containerId);
    if (container && window.ReactDOM) {
      try {
        if (!window._reactRoots) window._reactRoots = {};
        if (!window._reactRoots[containerId]) {
            window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
        }
        window._reactRoots[containerId].render(React.createElement(MathModule1));
        console.log("React Render Engine: Renderizado exitoso.");
      } catch (e) {
        console.error("React Render Engine Error:", e);
      }
    } else {
      console.warn("React Render Engine: No se encontró ReactDOM o el contenedor.");
    }
  };
})();
