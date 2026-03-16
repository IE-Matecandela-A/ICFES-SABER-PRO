const fs = require('fs');
const path = require('path');

const targetFile = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\db_simulacros\\matematicas\\mat_simulacro_06.js';
let content = fs.readFileSync(targetFile, 'utf8');

const newQuestions = [
    {
        "id": "mat_sim_06_p17",
        "area": "Matemáticas",
        "competencia": "Formulación y ejecución",
        "componente": "Numérico - Variacional",
        "enunciado": "La imagen muestra una afirmación que escribió el profesor de Historia.\n\n<div style='margin: 10px 0; padding: 15px; background: #fff; border: 4px solid #000;'>Puerto Carreño fue fundado en 1992, y Mitú fue fundado 13 años después.<br><br>Arauca fue fundada antes que Puerto Carreño, e Inírida fue fundada después de Mitú.</div>\n\n¿Cuál de las siguientes opciones ordena las ciudades desde la primera que se fundó hasta la última que se fundó?",
        "opciones": [
            { "id": "A", "texto": "Arauca - Inírida - Puerto Carreño - Mitú." },
            { "id": "B", "texto": "Puerto Carreño - Mitú - Arauca - Inírida." },
            { "id": "C", "texto": "Arauca - Puerto Carreño - Mitú - Inírida." },
            { "id": "D", "texto": "Puerto Carreño - Arauca - Mitú - Inírida." }
        ],
        "respuestaCorrecta": "C",
        "tipo": "standard",
        "justificacion": "Construyamos la línea de tiempo paso a paso:\n1. <b>Puerto Carreño</b> se fundó en 1992.\n2. <b>Mitú</b> fue fundado 13 años después (es decir, Mitú le sigue a P. Carreño en el tiempo).\n3. <b>Arauca</b> fue fundada _antes_ que Puerto Carreño. Por tanto, Arauca es la más antigua hasta ahora.\n4. <b>Inírida</b> fue fundada _después_ de Mitú. Por tanto, Inírida es la más reciente o nueva.\nEl orden cronológico correcto desde la más antigua a la más nueva es: Arauca (1°) - Puerto Carreño (2°) - Mitú (3°) - Inírida (4°). La opción C presenta el orden correcto."
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

    // Add new question only if it's not already there
    const ids = existingQuestions.map(q => q.id);
    newQuestions.forEach(q => {
        if (!ids.includes(q.id)) {
            existingQuestions.push(q);
            console.log("Adding: " + q.id);
        } else {
            console.log("Already exists: " + q.id);
        }
    });

    // Sort array by id correctly
    existingQuestions.sort((a, b) => {
        const idA = parseInt(a.id.replace('mat_sim_06_p', ''));
        const idB = parseInt(b.id.replace('mat_sim_06_p', ''));
        return idA - idB;
    });

    // Stringify and replace
    const strQuestions = JSON.stringify(existingQuestions, null, 4);
    const newContent = content.replace(functionMatch[1], strQuestions);

    fs.writeFileSync(targetFile, newContent);
    console.log('File updated successfully.');

    // index_simulacros.js question count
    const indexFile = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\db_simulacros\\index_simulacros.js';
    let indexContent = fs.readFileSync(indexFile, 'utf8');

    const countRegex = /id:\s*'mat_sim_06'[\s\S]*?preguntas_count:\s*\d+/;
    const countMatch = indexContent.match(countRegex);
    if (countMatch) {
        const totalQuestions = existingQuestions.length;
        const replacement = countMatch[0].replace(/preguntas_count:\s*\d+/, 'preguntas_count: ' + totalQuestions);
        indexContent = indexContent.replace(countRegex, replacement);
        fs.writeFileSync(indexFile, indexContent);
        console.log('Updated question count in index_simulacros.js to ' + totalQuestions);
    }
}
