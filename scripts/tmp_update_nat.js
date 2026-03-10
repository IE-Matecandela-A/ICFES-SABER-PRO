const fs = require('fs');
const filepath = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/naturales/nat_simulacro_01.js';
let data = fs.readFileSync(filepath, 'utf8');

const imageMap = {
    'nat_sim_01_icfes-2025-simulacro-cien-04': 'img/preguntas/pizarra_quimica.png',
    'nat_sim_01_icfes-2025-simulacro-cien-06': 'img/preguntas/salto_bungee.png',
    'nat_sim_01_icfes-2025-simulacro-cien-09': 'img/preguntas/ecosistema_marino.png',
    'nat_sim_01_icfes-2025-simulacro-cien-10': 'img/preguntas/globo_montana.png',
    'nat_sim_01_icfes-2025-simulacro-cien-12': 'img/preguntas/cruce_flores.png',
    'nat_sim_01_icfes-2025-simulacro-cien-13': 'img/preguntas/cubos_metal_agua.png',
    'nat_sim_01_icfes-2025-simulacro-cien-14': 'img/preguntas/bacterias_antibiotico.png',
    'nat_sim_01_icfes-2025-simulacro-cien-16': 'img/preguntas/diamante_grafito.png',
    'nat_sim_01_icfes-2025-simulacro-cien-17': 'img/preguntas/flujo_carbono_fotosintesis.png',
    'nat_sim_01_icfes-2025-simulacro-cien-19': 'img/preguntas/destilacion_quimica.png',
    'nat_sim_01_icfes-2025-simulacro-cien-20': 'img/preguntas/lapiz_vaso_agua.png',
    'nat_sim_01_icfes-2025-simulacro-cien-30': 'img/preguntas/circuito_liquido_bombillo.png'
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
                console.log(`Updated ${q.id} with ${imageMap[q.id]}`);
            }
        });

        if (changed) {
            const newJsonStr = JSON.stringify(questions, null, 4);
            const newData = data.replace(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/, `window.NATIVE_EXAM_DATA.push(...${newJsonStr});`);
            fs.writeFileSync(filepath, newData);
            console.log("File saved successfully.");
        }
    } catch (e) {
        console.error("Error parsing/writing:", e);
    }
}
