const fs = require('fs');
const path = require('path');

const targetFile = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\db_simulacros\\matematicas\\mat_simulacro_06.js';
let content = fs.readFileSync(targetFile, 'utf8');

const newQuestions = [
    {
        "id": "mat_sim_06_p15",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "Una ruta escolar se encarga de recoger 8 estudiantes para llevarlos al colegio diariamente antes del inicio de clases que es a las 7:10 a. m. Con el fin de ver el promedio de las horas de llegada de la ruta al colegio, se realizó un registro en una semana, como se muestra en la siguiente tabla.\n\n<table border='1' cellpadding='5' cellspacing='0' style='margin:16px auto; text-align:center; border-collapse:collapse; background:white; font-size:14px;'><tr><th>Día</th><th>Hora de llegada (a. m.)</th></tr><tr><td>Lunes</td><td>7:02</td></tr><tr><td>Martes</td><td>7:04</td></tr><tr><td>Miércoles</td><td>7:05</td></tr><tr><td>Jueves</td><td>7:08</td></tr><tr><td>Viernes</td><td>7:01</td></tr></table>\n\nCon esto se calcula que en promedio a las 7:05 a. m. llega la ruta al colegio. Al respecto, ¿cuál de las siguientes afirmaciones sobre el promedio calculado es válida?",
        "opciones": [
            { "id": "A", "texto": "Es incorrecto porque se deben sumar los minutos de llegada y dividir entre los 8 estudiantes." },
            { "id": "B", "texto": "Es correcto porque corresponde a la hora de llegada del miércoles que es la mitad de la semana." },
            { "id": "C", "texto": "Es incorrecto porque se deben sumar los minutos de llegada y dividir en los 5 días de la semana." },
            { "id": "D", "texto": "Es correcto porque corresponde a la mitad entre las 7:00 a. m. y las 7:10 a. m." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Para calcular el promedio (media aritmética) de la hora de llegada, se deben sumar los minutos de las horas de llegada registrados cada día y luego dividir esta suma entre el número total de observaciones (los 5 días de la semana registrada), no entre el número de estudiantes ni buscando el valor medio del rango de horas."
    },
    {
        "id": "mat_sim_06_p16",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "Una familia que se dedica al cultivo de mojarras consulta a un experto, que sugiere que un aumento de la temperatura del agua produciría un aumento proporcional en la cantidad de peces. La familia midió la cantidad de peces obtenidos a diferentes temperaturas y obtuvo la siguiente gráfica.\n\n<div style='text-align:center; padding: 10px;'><img src='img/preguntas/mat6_q16.svg' alt='Temperatura vs Peces' style='max-width:300px; height:auto; border:1px solid #ddd;'></div>\n\nSegún estos resultados, ¿es verdadera la afirmación del experto?",
        "opciones": [
            { "id": "A", "texto": "No, puesto que a medida que aumenta la cantidad de peces, la temperatura permanece constante." },
            { "id": "B", "texto": "Sí, puesto que la gráfica muestra un aumento en la temperatura del agua." },
            { "id": "C", "texto": "No, puesto que al variar la temperatura, no cambia la cantidad de peces." },
            { "id": "D", "texto": "Sí, puesto que para todas las temperaturas mostradas hay una cantidad de peces mayor que cero." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "El experto afirmó que un aumento en la temperatura produciría un aumento en la cantidad de peces. Sin embargo, la gráfica muestra una línea completamente horizontal en 2.000 peces para todo el rango de temperaturas estudiado (de 24 °C a 30 °C). Esto indica que la cantidad de peces es constante y no aumenta cuando la temperatura lo hace. Por tanto, la afirmación del experto es falsa, como lo describe la opción C."
    },
    {
        "id": "mat_sim_06_p17",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "La imagen muestra una afirmación que escribió el profesor de Historia.\n\n<div style='margin: 10px 0; padding: 10px; background: #eee; border: 2px solid #000;'>Puerto Carreño fue fundado en 1992, y Mitú fue fundado 13 años después.<br><br>Arauca fue fundada antes que Puerto Carreño, e Inírida fue fundada después de Mitú.</div>\n\n¿Cuál de las siguientes opciones ordena las ciudades desde la primera que se fundó hasta la última que se fundó?",
        "opciones": [
            { "id": "A", "texto": "Arauca - Inírida - Puerto Carreño - Mitú." },
            { "id": "B", "texto": "Puerto Carreño - Mitú - Arauca - Inírida." },
            { "id": "C", "texto": "Arauca - Puerto Carreño - Mitú - Inírida." },
            { "id": "D", "texto": "Puerto Carreño - Arauca - Mitú - Inírida." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Construyamos la línea de tiempo paso a paso:\n1. Puerto Carreño se fundó en 1992.\n2. Mitú fue fundado 13 años después (es decir, Mitú después de P. Carreño).\n3. Arauca fue fundada _antes_ que Puerto Carreño. Por tanto, Arauca es la más antigua hasta ahora.\n4. Inírida fue fundada _después_ de Mitú. Por tanto, Inírida es la más reciente.\nEl orden cronológico correcto es: Arauca (1°) - Puerto Carreño (2°) - Mitú (3°) - Inírida (4°). La opción C presenta el orden correcto."
    },
    {
        "id": "mat_sim_06_p18",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "Para confeccionar una camiseta, un sastre utiliza 2 metros de tela. El precio de cada metro de tela es de 6.000 pesos, y cada camiseta se puede vender a un precio de 20.000 pesos. Adicionalmente, si el sastre no incurre en ningún costo adicional, la ganancia que obtiene se puede calcular por medio de la expresión\n\n<div style='text-align:center; font-style:italic; font-weight:bold; margin: 10px 0;'>y = 8.000x</div>\n\nSi la ganancia fue 80.000 pesos, ¿cuál fue la cantidad de camisetas que confeccionó el sastre?",
        "opciones": [
            { "id": "A", "texto": "10" },
            { "id": "B", "texto": "8" },
            { "id": "C", "texto": "6" },
            { "id": "D", "texto": "2" }
        ],
        "respuestaCorrecta": "A",
        "tipo": "standard",
        "justificacion": "La ecuación de ganancia dada es `y = 8.000x`, donde 'y' es la ganancia total y 'x' representa la cantidad de camisetas vendidas (la ganancia unitaria es de $8.000). Si la ganancia total (y) fue de $80.000, sustituimos en la ecuación: `80.000 = 8.000x`. Despejando 'x', dividimos `80.000 / 8.000 = 10`. El sastre fabricó 10 camisetas."
    },
    {
        "id": "mat_sim_06_p46",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Aleatorio",
        "enunciado": "Un candidato a la gobernación de un departamento quiere estimar el porcentaje de la población que votará por él. Para ello, contrata una firma encuestadora que realizará 1.000 llamadas telefónicas, en las que se pregunta por la preferencia de las personas a la hora de votar en las elecciones para gobernador. Para realizar la encuesta, la firma escoge aleatoriamente un municipio del departamento y llama a 1.000 personas de este lugar.\n\n¿Por qué el resultado de la encuesta puede diferir mucho de la realidad?",
        "opciones": [
            { "id": "A", "texto": "Porque la única manera de obtener resultados precisos es encuestar a toda la población del departamento." },
            { "id": "B", "texto": "Porque la encuesta solo representará la opinión de las personas del departamento, si el municipio escogido es el más grande." },
            { "id": "C", "texto": "Porque de esta manera solo están tomándose en cuenta las opiniones de la población de un municipio del departamento." },
            { "id": "D", "texto": "Porque la muestra es muy grande, lo cual permite que existan grandes diferencias entre las respuestas de las personas." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Para que una encuesta sea estadísticamente representativa y confiable ante un panorama general (todo el departamento), la muestra debe recoger a individuos diversos de todas las regiones del departamento y en proporción adecuada, seleccionados preferiblemente al azar. Al escoger únicamente a los pobladores de _un solo municipio_, las respuestas tendrán un evidente sesgo geográfico debido a características, intereses o apoyos locales particulares de dicho poblado que no reflejan el parecer de los demás habitantes del departamento."
    },
    {
        "id": "mat_sim_06_p47",
        "area": "Matemáticas",
        "competencia": "Interpretación y representación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Una torta con forma rectangular, que tiene 60 cm de base por 20 cm de altura, fue repartida entre 8 personas por medio de los siguientes cortes rectos:\n\n<div style='text-align:center; padding: 10px;'><img src='img/preguntas/mat6_q47.svg' alt='Esquema de la Torta' style='max-width:350px; height:auto;'></div>\n\nConsiderando la información anterior, ¿cuál es el área del trozo de torta número 1?",
        "opciones": [
            { "id": "A", "texto": "225 cm²" },
            { "id": "B", "texto": "150 cm²" },
            { "id": "C", "texto": "75 cm²" },
            { "id": "D", "texto": "40 cm²" }
        ],
        "respuestaCorrecta": "B",
        "tipo": "standard",
        "justificacion": "De la figura extraemos el ancho del gran corte derecho que es 30 cm en la base. Sabemos que el trozo de torta que tiene los trozos '5' y '8' ocupa un ancho de 15 cm dentro de esos 30 cm. Por tanto, el ancho restante para el trozo '1' que se ubica a su derecha es de la diferencia: `30 cm - 15 cm = 15 cm`. Como la altura general de la mitad superior es de 10 cm, el área del trozo rectangular 1 es `base × altura = 15 cm × 10 cm = 150 cm²`."
    },
    {
        "id": "mat_sim_06_p48",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Numérico - Variacional",
        "enunciado": "En la tabla se muestra el peso de tres pedidos de mercancía que una empresa necesita enviar a otro país:\n\n<table border='1' cellpadding='5' cellspacing='0' style='margin:16px auto; text-align:center; border-collapse:collapse; background:white; font-size:14px;'><tr><th></th><th>Peso</th></tr><tr><td>Pedido 1</td><td>500 kg</td></tr><tr><td>Pedido 2</td><td>200 kg</td></tr><tr><td>Pedido 3</td><td>1 ton</td></tr></table>\n\nPara saber el costo total del envío se debe calcular primero el peso total de los tres pedidos. Para esto, un empleado de la empresa efectúa el siguiente cálculo:\n\n<div style='text-align:center; margin:16px 0; font-weight:bold;'>500 + 200 + 1 = 701 ton</div>\n\nEsta solución es:",
        "opciones": [
            { "id": "A", "texto": "incorrecta; el resultado debe estar dado en kg, ya que la mayoría de los valores están en esta unidad." },
            { "id": "B", "texto": "correcta; se suman correctamente los tres valores y se utiliza una de las unidades de los pedidos." },
            { "id": "C", "texto": "incorrecta; como los datos están en unidades diferentes, no pueden sumarse directamente." },
            { "id": "D", "texto": "correcta; el resultado se calcula bien y la unidad utilizada corresponde a la unidad de mayor peso." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Las magnitudes físicas de adición y sustracción exigen que las cantidades operadas posean las mismas unidades de medida subyacentes. El empleado sumó las magnitudes (los números) de kg y toneladas conjuntamente sin realizar ninguna conversión (ignorando las unidades de cada magnitud). Esto es un error categórico en matemática; antes de sumarlas debe convertir todos los datos a la misma unidad, por ejemplo, los kilos a toneladas o las toneladas a kilos."
    },
    {
        "id": "mat_sim_06_p49",
        "area": "Matemáticas",
        "competencia": "Argumentación",
        "componente": "Geométrico - Métrico",
        "enunciado": "Un pintor tiene un lienzo rectangular que quiere dividir en tres regiones: la región 1, que es triangular; la región 2, con forma de un cuarto de círculo; y la región 3, que ocupa el resto del lienzo, como se muestra en la figura.\n\n<div style='text-align:center; padding: 10px;'><img src='img/preguntas/mat6_q49.svg' alt='Lienzo, 8m x 5m' style='max-width:350px; height:auto;'></div>\n\nPara calcular el área de la región 3, el pintor realizó el siguiente procedimiento:\n\n<b>Paso 1.</b> Calculó el área del lienzo, multiplicando 8 m × 5 m.\n<b>Paso 2.</b> Calculó el área de región 1, multiplicando 4 m × 3 m.\n<b>Paso 3.</b> Calculó el área de la región 2, multiplicando π × 16 m² y dividiendo el resultado entre 4.\n<b>Paso 4.</b> Al resultado del paso 1, le restó los resultados del paso 2 y del paso 3.\n\n¿En cuál paso hay un error y cómo se puede corregir?",
        "opciones": [
            { "id": "A", "texto": "En el paso 2, porque se debe multiplicar 3 m × 4 m × 5 m." },
            { "id": "B", "texto": "En el paso 3, porque se debe multiplicar 2π × 4 m y luego dividir entre 4." },
            { "id": "C", "texto": "En el paso 2, porque se debe multiplicar 4 m × 3 m y luego dividir entre 2." },
            { "id": "D", "texto": "En el paso 3, porque se debe multiplicar π × 4 m y luego dividir entre 4." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "El área de un triángulo rectángulo se calcula multiplicando la base por su altura, y el resultado de ese producto se debe dividir siempre entre 2 `(Área = (b * h) / 2)`. El pintor en el Paso 2 multiplicó la base por su altura pero olvidó completamente realizar la división entre 2, calculando con error el área de un _rectángulo_ en su lugar. La opción pertinente que describe y rectifica el error es la C."
    },
    {
        "id": "mat_sim_06_p50",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Aleatorio",
        "enunciado": "En una encuesta sobre la intención de voto para la elección de presidente en un país, se registraron los resultados que se observan en la tabla y en la gráfica.\n\n<table border='1' cellpadding='5' cellspacing='0' style='margin:16px auto; text-align:center; border-collapse:collapse; background:white; font-size:14px;'><tr><th>Candidato</th><th>Votos</th></tr><tr><td>E</td><td>2.000</td></tr><tr><td>F</td><td>5.000</td></tr><tr><td>G</td><td>4.500</td></tr><tr><td>H</td><td>7.000</td></tr><tr><td>I</td><td>3.400</td></tr></table>\n\n<div style='text-align:center; padding: 10px;'><img src='img/preguntas/mat6_q50.svg' alt='Gráfica de Votos' style='max-width:300px; height:auto; border:1px solid #ddd;'></div>\n\nDe acuerdo con lo anterior, ¿cuál de las siguientes afirmaciones es falsa?",
        "opciones": [
            { "id": "A", "texto": "Con la información de la tabla se obtienen los datos de la gráfica." },
            { "id": "B", "texto": "Con la información de la gráfica se obtiene cuál es el candidato con mayor intención de voto." },
            { "id": "C", "texto": "Con la información de la gráfica se obtienen los datos de la tabla." },
            { "id": "D", "texto": "Con la información de la tabla se obtiene la proporción entre los votos por un candidato y el total." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Las afirmaciones A, B, y D son ciertas. Pero la afirmación en la opción C es completamente FALSA. La gráfica presenta visualmente las porciones o cuotas de representación proporcional de cada candidato, pero al carecer de etiquetas numéricas o porcentajes, **no permite reconstruir ni obtener** las cifras exactas y valores absolutos de votos (2.000, 5.000, 4.500, etc.) presentes en la tabla original."
    }
];

// Evaluate the arrays from the string
const functionMatch = content.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/);

if (functionMatch && functionMatch[1]) {
    let existingQuestions;
    try {
        existingQuestions = eval(functionMatch[1]);
    } catch (e) {
        console.error("Eval failed", e);
    }

    // Add new questions
    newQuestions.forEach(q => existingQuestions.push(q));

    // Sort array by id
    existingQuestions.sort((a, b) => a.id.localeCompare(b.id));

    // Stringify and replace
    const strQuestions = JSON.stringify(existingQuestions, null, 4);

    // Replace the array part exactly
    const newContent = content.replace(functionMatch[1], strQuestions);

    fs.writeFileSync(targetFile, newContent);
    console.log('File updated successfully. Added ' + newQuestions.length + ' questions.');

    // we also need to update index_simulacros.js question count
    const indexFile = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\db_simulacros\\index_simulacros.js';
    let indexContent = fs.readFileSync(indexFile, 'utf8');

    // update: preguntas_count: 21
    const totalQuestions = existingQuestions.length;
    // Find mat_sim_06 and replace its preguntas_count

    const countRegex = /id:\s*'mat_sim_06'[\s\S]*?preguntas_count:\s*\d+/;
    const countMatch = indexContent.match(countRegex);
    if (countMatch) {
        const replacement = countMatch[0].replace(/preguntas_count:\s*\d+/, 'preguntas_count: ' + totalQuestions);
        indexContent = indexContent.replace(countRegex, replacement);
        fs.writeFileSync(indexFile, indexContent);
        console.log('Updated question count in index_simulacros.js to ' + totalQuestions);
    }
}
