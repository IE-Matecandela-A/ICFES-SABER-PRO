const fs = require('fs');
const path = require('path');

const imgDir = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/img/preguntas';

// Helper to build an English sign SVG
function makeSvgSign(text, icon, color = '#1e40af') {
    const lines = text.split('\n');
    const lineHeight = 32;
    const padding = 40;
    const width = 440;
    const textAreaHeight = lines.length * lineHeight + (lines.length > 1 ? 8 : 0);
    const height = textAreaHeight + 130; // icon + text + padding

    const textEls = lines.map((line, i) =>
        `<text x="${width / 2}" y="${100 + i * lineHeight}" fill="#ffffff" font-family="'Arial Black', Arial, sans-serif" font-size="17" font-weight="900" text-anchor="middle" letter-spacing="1">${line}</text>`
    ).join('\n        ');

    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="100%">
    <defs>
        <style>
            .bg { fill: #ffffff; }
            .sign-bg { fill: ${color}; }
            .border { fill: none; stroke: ${color}; stroke-width: 6; rx: 12; }
        </style>
    </defs>
    <!-- White page background -->
    <rect x="0" y="0" width="${width}" height="${height}" fill="#ffffff"/>
    <!-- Sign board -->
    <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="12" ry="12" fill="${color}"/>
    <!-- Inner border -->
    <rect x="28" y="28" width="${width - 56}" height="${height - 56}" rx="8" ry="8" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="3"/>
    <!-- Icon -->
    <text x="${width / 2}" y="72" font-size="36" text-anchor="middle">${icon}</text>
    <!-- Sign text -->
    ${textEls}
</svg>`;
}

// English Simulacro 1 - Part 2 Signs (Q6 to Q10)
const signs01 = [
    { id: 'ing1_sign_q06', text: 'PLEASE KEEP YOUR\nSEATBELT FASTENED\nWHILE SEATED', icon: '✈️', color: '#1e3a5f' },
    { id: 'ing1_sign_q07', text: 'SILENCE PLEASE\nEXAM IN PROGRESS', icon: '🤫', color: '#4a1942' },
    { id: 'ing1_sign_q08', text: 'DO NOT FEED THE ANIMALS\nTHEY HAVE A SPECIAL DIET', icon: '🦁', color: '#78350f' },
    { id: 'ing1_sign_q09', text: 'CAUTION: DEEP WATER\nNO SWIMMING BEYOND\nTHIS POINT', icon: '⚠️', color: '#b45309' },
    { id: 'ing1_sign_q10', text: 'SUMMER SALE!\n50% OFF ALL\nBOOTS AND SNEAKERS', icon: '🛍️', color: '#991b1b' },
];

// English Simulacro 2 - Part 2 Signs (Q6 to Q10)
const signs02 = [
    { id: 'ing2_sign_q06', text: 'PLEASE DO NOT USE\nFLASH PHOTOGRAPHY', icon: '📸', color: '#1a3c5f' },
    { id: 'ing2_sign_q07', text: 'PASSENGERS MUST SHOW\nTHEIR BOARDING PASSES\nBEFORE ENTERING', icon: '✈️', color: '#1e3a5f' },
    { id: 'ing2_sign_q08', text: 'EMPLOYEES MUST WASH\nTHEIR HANDS BEFORE\nRETURNING TO WORK', icon: '🧼', color: '#14532d' },
    { id: 'ing2_sign_q09', text: 'DO NOT LEAVE YOUR\nLUGGAGE UNATTENDED\nAT ANY TIME', icon: '🧳', color: '#1e3a5f' },
    { id: 'ing2_sign_q10', text: 'OUT OF ORDER\nPLEASE USE THE STAIRS', icon: '🚧', color: '#7c2d12' },
];

const allSigns = [...signs01, ...signs02];

allSigns.forEach(sign => {
    const svg = makeSvgSign(sign.text, sign.icon, sign.color);
    const outPath = path.join(imgDir, `${sign.id}.svg`);
    fs.writeFileSync(outPath, svg, 'utf8');
    console.log(`Created: ${sign.id}.svg`);
});

console.log('\nAll English sign SVGs created successfully!');

// --- Now patch ing_simulacro_01.js ---
const file1 = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/ingles/ing_simulacro_01.js';
let data1 = fs.readFileSync(file1, 'utf8');

const pathMap1 = {
    'ing_sim_01_icfes-2025-simulacro-ing-p2-06': 'img/preguntas/ing1_sign_q06.svg',
    'ing_sim_01_icfes-2025-simulacro-ing-p2-07': 'img/preguntas/ing1_sign_q07.svg',
    'ing_sim_01_icfes-2025-simulacro-ing-p2-08': 'img/preguntas/ing1_sign_q08.svg',
    'ing_sim_01_icfes-2025-simulacro-ing-p2-09': 'img/preguntas/ing1_sign_q09.svg',
    'ing_sim_01_icfes-2025-simulacro-ing-p2-10': 'img/preguntas/ing1_sign_q10.svg',
};

// This file uses examData array, not NATIVE_EXAM_DATA.push pattern
// Parse by finding the array literal directly
const match1 = data1.match(/const examData = (\[[\s\S]*?\]);\s*window\.NATIVE_EXAM_DATA/);
if (match1) {
    try {
        let questions = JSON.parse(match1[1]);
        let changed = false;
        questions.forEach(q => {
            if (pathMap1[q.id]) {
                delete q.grafica;
                q.tipo = 'grafica';
                q.imagen = pathMap1[q.id];
                changed = true;
                console.log(`Patched ${q.id}`);
            }
        });
        if (changed) {
            const newArr = JSON.stringify(questions, null, 4);
            data1 = data1.replace(/const examData = \[[\s\S]*?\];\s*window\.NATIVE_EXAM_DATA/, `const examData = ${newArr};\nwindow.NATIVE_EXAM_DATA`);
            fs.writeFileSync(file1, data1, 'utf8');
            console.log('ing_simulacro_01.js saved!');
        }
    } catch (e) { console.error('Error sim01:', e.message); }
} else {
    console.log('Could not find examData pattern in sim01, trying alternate...');
    // Try alternate pattern with push approach
    const match1b = data1.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*?\])\)/);
    if (match1b) {
        try {
            let questions = JSON.parse(match1b[1]);
            let changed = false;
            questions.forEach(q => {
                if (pathMap1[q.id]) {
                    delete q.grafica;
                    q.tipo = 'grafica';
                    q.imagen = pathMap1[q.id];
                    changed = true;
                    console.log(`Patched ${q.id}`);
                }
            });
            if (changed) {
                const newArr = JSON.stringify(questions, null, 4);
                data1 = data1.replace(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*?\])\)/, `window.NATIVE_EXAM_DATA.push(...${newArr})`);
                fs.writeFileSync(file1, data1, 'utf8');
                console.log('ing_simulacro_01.js saved (alternate pattern)!');
            }
        } catch (e) { console.error('Error sim01 alt:', e.message); }
    }
}

// --- Now patch ing_simulacro_02.js ---
const file2 = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/ingles/ing_simulacro_02.js';
let data2 = fs.readFileSync(file2, 'utf8');

const pathMap2 = {
    'icfes-2025-simulacro-ing-new-06': 'img/preguntas/ing2_sign_q06.svg',
    'icfes-2025-simulacro-ing-new-07': 'img/preguntas/ing2_sign_q07.svg',
    'icfes-2025-simulacro-ing-new-08': 'img/preguntas/ing2_sign_q08.svg',
    'icfes-2025-simulacro-ing-new-09': 'img/preguntas/ing2_sign_q09.svg',
    'icfes-2025-simulacro-ing-new-10': 'img/preguntas/ing2_sign_q10.svg',
};

const match2 = data2.match(/const simulacroIngles02 = (\[[\s\S]*?\]);\s*window\.NATIVE_EXAM_DATA/);
if (match2) {
    try {
        let questions = JSON.parse(match2[1]);
        let changed = false;
        questions.forEach(q => {
            if (pathMap2[q.id]) {
                delete q.grafica;
                q.tipo = 'grafica';
                q.imagen = pathMap2[q.id];
                changed = true;
                console.log(`Patched ${q.id}`);
            }
        });
        if (changed) {
            const newArr = JSON.stringify(questions, null, 4);
            data2 = data2.replace(/const simulacroIngles02 = \[[\s\S]*?\];\s*window\.NATIVE_EXAM_DATA/, `const simulacroIngles02 = ${newArr};\nwindow.NATIVE_EXAM_DATA`);
            fs.writeFileSync(file2, data2, 'utf8');
            console.log('ing_simulacro_02.js saved!');
        }
    } catch (e) { console.error('Error sim02:', e.message); }
} else {
    console.log('Could not parse simulacroIngles02 pattern.');
}
