const fs = require('fs');
const filepath = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/naturales/nat_simulacro_01.js';
let data = fs.readFileSync(filepath, 'utf8');

const imageMap = {
    'nat_sim_01_icfes-2025-simulacro-cien-18': 'img/preguntas/nat1_q18_inercia.svg',
    'nat_sim_01_icfes-2025-simulacro-cien-21': 'img/preguntas/nat1_q21_enlace_ionico.svg',
    'nat_sim_01_icfes-2025-simulacro-cien-25': 'img/preguntas/nat1_q25_golgi.svg',
    'nat_sim_01_icfes-2025-simulacro-cien-28': 'img/preguntas/nat1_q28_caida_libre.svg',
    'nat_sim_01_icfes-2025-simulacro-cien-29': 'img/preguntas/nat1_q29_biodigestor.svg'
};

const match = data.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/);
if (match && match[1]) {
    try {
        let questions = JSON.parse(match[1]);
        let changed = false;
        questions.forEach(q => {
            if (imageMap[q.id]) {
                q.tipo = "grafica";
                q.imagen = imageMap[q.id];
                changed = true;
                console.log(`Injected ${imageMap[q.id]} into ${q.id}`);
            }
        });

        if (changed) {
            const newJsonStr = JSON.stringify(questions, null, 4);
            const newData = data.replace(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/, `window.NATIVE_EXAM_DATA.push(...${newJsonStr});`);
            fs.writeFileSync(filepath, newData);
            console.log("Successfully updated Natural Sciences 1 database with new SVGs.");
        }
    } catch (e) {
        console.error("Error parsing/writing:", e);
    }
}
