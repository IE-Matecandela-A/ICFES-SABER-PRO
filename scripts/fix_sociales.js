const fs = require('fs');
const path = require('path');

const files = [
    path.join(__dirname, '../db_simulacros/sociales/soc_simulacro_01.js'),
    path.join(__dirname, '../db_simulacros/sociales/soc_simulacro_02.js')
];

let totalFixed = 0;

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.error('File not found:', file);
        continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    
    // Extract the JSON array
    const match = content.match(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/);
    if (!match) {
        console.error('Could not find NATIVE_EXAM_DATA array in:', file);
        continue;
    }

    try {
        let questions = JSON.parse(match[1]);
        let changed = false;
        
        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            if (q.imagen && q.grafica) {
                console.log(`Found question with both imagen and grafica in ${path.basename(file)}: (ID: ${q.id})`);
                delete q.grafica;
                changed = true;
                totalFixed++;
            }
        }
        
        if (changed) {
            const newJsonStr = JSON.stringify(questions, null, 4);
            const newData = content.replace(/window\.NATIVE_EXAM_DATA\.push\(\.\.\.(\[[\s\S]*\])\);/, `window.NATIVE_EXAM_DATA.push(...${newJsonStr});`);
            fs.writeFileSync(file, newData, 'utf8');
            console.log(`Updated ${path.basename(file)}`);
        } else {
            console.log(`No fixes needed in ${path.basename(file)}`);
        }
    } catch (e) {
        console.error('Error parsing JSON in:', file, e);
    }
}

console.log('Total questions fixed:', totalFixed);
