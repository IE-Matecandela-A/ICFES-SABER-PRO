/**
 * Script de transpilación: Convierte JSX → React.createElement
 * para que los módulos funcionen en modo offline (file://) sin Babel Standalone.
 * 
 * Uso: node transpile.js
 */
const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const jsDir = path.join(__dirname, 'js');

// Archivos a transpilar (los que tienen JSX)
const filesToTranspile = [
    'mathModule2.js',
    'mathModule3.js',
    'mathModule4.js',
    'mathModule5.js',
    'mathModule6.js',
    'mathModule7.js',
    'icfesGuideModule.js'
];

console.log('🔄 Transpilando módulos JSX → React.createElement...\n');

let successCount = 0;
let errorCount = 0;

filesToTranspile.forEach(filename => {
    const filePath = path.join(jsDir, filename);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⚠️  ${filename} no encontrado, omitiendo.`);
        return;
    }

    // Leer contenido original
    const originalCode = fs.readFileSync(filePath, 'utf-8');
    
    // Crear backup
    const backupPath = filePath + '.babel-backup';
    if (!fs.existsSync(backupPath)) {
        fs.writeFileSync(backupPath, originalCode, 'utf-8');
        console.log(`📦 Backup creado: ${filename}.babel-backup`);
    }

    try {
        // Transpilar JSX → createElement
        const result = babel.transformSync(originalCode, {
            presets: [
                ['@babel/preset-react', { 
                    runtime: 'classic',  // Usa React.createElement, no jsx runtime
                    pragma: 'React.createElement',
                    pragmaFrag: 'React.Fragment'
                }]
            ],
            filename: filename,
            sourceType: 'script',
            retainLines: true  // Mantener número de líneas para debugging
        });

        if (result && result.code) {
            fs.writeFileSync(filePath, result.code, 'utf-8');
            
            // Verificar resultado
            const jsxRemaining = (result.code.match(/className=/g) || []).length;
            const ceCount = (result.code.match(/React\.createElement/g) || []).length;
            
            console.log(`✅ ${filename} → transpilado (${ceCount} createElement calls)`);
            successCount++;
        }
    } catch (err) {
        console.error(`❌ Error en ${filename}: ${err.message}`);
        errorCount++;
    }
});

console.log(`\n${'='.repeat(50)}`);
console.log(`✅ ${successCount} archivos transpilados correctamente`);
if (errorCount > 0) {
    console.log(`❌ ${errorCount} archivos con errores`);
}
console.log(`\n💡 Ahora los módulos funcionan sin Babel Standalone.`);
console.log(`   Puedes eliminar la línea de Babel en index.html.`);
console.log(`   Los backups están en js/*.babel-backup`);
