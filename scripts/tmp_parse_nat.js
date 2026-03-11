const fs = require('fs');
const data = fs.readFileSync('c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/naturales/nat_simulacro_01.js', 'utf8');

const match = data.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/);
if (match && match[1]) {
    const questions = JSON.parse(match[1]);
    let output = '';
    questions.forEach(q => {
        const text = (q.enunciado + " " + q.opciones.map(o => o.texto).join(" ")).toLowerCase();
        if (text.includes('gráfic') || text.includes('grafic') || text.includes('tabla') ||
            text.includes('esquema') || text.includes('diagrama') || text.includes('figura') ||
            text.includes('dibujo') || text.includes('ilustrac')) {
            output += `ID: ${q.id}\n${q.enunciado}\n\n`;
        }
    });
    fs.writeFileSync('c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/tmp_nat_matches.txt', output);
}
