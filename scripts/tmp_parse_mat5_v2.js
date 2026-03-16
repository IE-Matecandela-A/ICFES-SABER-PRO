const fs = require('fs');
const path = require('path');

const inputPath = 'c:/Users/Usuario/Downloads/new/estudiantes/json simulacros/Matematicas 5.json';
const outputPath = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/matematicas/mat_simulacro_05.js';

try {
    const rawData = fs.readFileSync(inputPath, 'utf8');
    const questions = JSON.parse(rawData);

    questions.forEach((q, index) => {
        // Limpieza de citas [cite: ...]
        q.enunciado = q.enunciado.replace(/ \[cite: \d+(, \d+)*\]/g, "");
        if (q.opciones) {
            q.opciones.forEach(o => {
                o.texto = o.texto.replace(/ \[cite: \d+(, \d+)*\]/g, "");
            });
        }

        // Modificar ID para que inicie en 102
        const startNumber = 102;
        const currentNumber = startNumber + index;
        q.id = `mat_sim_05_icfes-2025-simulacro-mate-p1-${currentNumber}`;

        // Injectar graficas (imágenes svg)
        // Pregunta 09 (índice 8) es la Q09 sobre el clavadista
        if (index === 8) {
            q.imagen = "img/preguntas/mat5_q102_clavadista.svg";
        }
        // Pregunta 11 (índice 10) es sobre la rampa del camión a 30°
        if (index === 10) {
            q.imagen = "img/preguntas/mat5_q104_rampa.svg";
        }
        // Pregunta 14 (índice 13) es sobre la torre de 4 discos
        if (index === 13) {
            q.imagen = "img/preguntas/mat5_q107_discos.svg";
        }
        // Pregunta 18 (índice 17) es sobre la figura semicirculo con cuadrado
        if (index === 17) {
            q.imagen = "img/preguntas/mat5_q111_compuesta.svg";
        }
    });

    const outputContent = `// Simulacro 05 - Matemáticas
window.NATIVE_EXAM_DATA = window.NATIVE_EXAM_DATA || [];
window.NATIVE_EXAM_DATA.push(...${JSON.stringify(questions, null, 4)});
`;

    fs.writeFileSync(outputPath, outputContent);
    console.log(`Successfully updated ${outputPath} with 102+ IDs and graphic links.`);
} catch (error) {
    console.error("Error processing Math Simulacro 05:", error);
}
