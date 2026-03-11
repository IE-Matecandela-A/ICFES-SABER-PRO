const fs = require('fs');

const inputPath = 'c:/Users/Usuario/Downloads/new/estudiantes/json simulacros/Matematicas 5.json';
const outputPath = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/matematicas/mat_simulacro_05.js';

try {
    const rawData = fs.readFileSync(inputPath, 'utf8');
    const questions = JSON.parse(rawData);

    // Validar y limpiar (quitar [cite: ...]) si fuera necesario. pero veo que el texto ya tiene "[cite: ]", lo usaré textual.

    // A veces los JSONs vienen con [cite: ] de la IA, pero lo podemos borrar para que quede limpio.
    questions.forEach(q => {
        q.enunciado = q.enunciado.replace(/ \[cite: \d+(, \d+)*\]/g, "");
        if (q.opciones) {
            q.opciones.forEach(o => {
                o.texto = o.texto.replace(/ \[cite: \d+(, \d+)*\]/g, "");
            });
        }
    });

    const outputContent = `// Simulacro 05 - Matemáticas
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...${JSON.stringify(questions, null, 4)});
`;

    fs.writeFileSync(outputPath, outputContent);
    console.log(`Successfully created ${outputPath}`);
} catch (error) {
    console.error("Error processing Math Simulacro 05:", error);
}
