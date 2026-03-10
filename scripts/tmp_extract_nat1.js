const fs = require('fs');

const data = fs.readFileSync('c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/naturales/nat_simulacro_01.js', 'utf8');

const match = data.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/);
if (match && match[1]) {
    const questions = JSON.parse(match[1]);
    let output = '';
    questions.forEach((q, index) => {
        if (!q.imagen) {
            output += `ID: ${q.id} (Q${index + 1})\n`;
            output += `Enunciado: ${q.enunciado}\n`;
            output += `-------------------------------------------------\n`;
        }
    });
    fs.writeFileSync('c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/tmp_nat1_no_images.txt', output);
    console.log("Extracted text-only questions to tmp_nat1_no_images.txt");
}
