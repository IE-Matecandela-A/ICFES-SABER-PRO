const fs = require('fs');
const path = require('path');

const imgDir = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/img/preguntas';

const generateBarChartSVG = (name, datasets, maxValue = 16000) => {
    const width = 300;
    const height = 180;
    const padding = 30;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = (chartWidth / (6 * (datasets.length + 0.5)));

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${width}" height="${height}" fill="white" />`;

    // Axes
    svg += `<line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#334155" stroke-width="1" />`;
    svg += `<line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#334155" stroke-width="1" />`;

    // Grid lines (y)
    for (let i = 0; i <= 4; i++) {
        const val = (maxValue / 4) * i;
        const y = (height - padding) - (chartHeight * (i / 4));
        svg += `<line x1="${padding}" y1="${y}" x2="${width - padding}" y2="${y}" stroke="#e2e8f0" stroke-width="1" />`;
    }

    // Data
    const months = ["E", "F", "M", "A", "M", "J"];
    for (let m = 0; m < 6; m++) {
        const xOffset = padding + (chartWidth / 6) * m + barWidth / 2;

        datasets.forEach((ds, dsIndex) => {
            const val = ds.data[m];
            const bHeight = (val / maxValue) * chartHeight;
            const bX = xOffset + (barWidth * dsIndex);
            const bY = (height - padding) - bHeight;

            svg += `<rect x="${bX}" y="${bY}" width="${barWidth - 2}" height="${bHeight}" fill="${dsIndex === 0 ? '#1e293b' : '#94a3b8'}" />`;
        });

        svg += `<text x="${xOffset + barWidth}" y="${height - 10}" font-family="Arial" font-size="10" text-anchor="middle">${months[m]}</text>`;
    }

    svg += `</svg>`;
    fs.writeFileSync(path.join(imgDir, name), svg);
};

// --- Q108 DATA ---
const q108_inc = [12780, 15200, 10500, 13700, 10000, 11650];
const q108_gas = [5400, 4903, 7250, 3500, 4103, 6230];

// Opt A: Inverted (Expenses > Income)
generateBarChartSVG('mat5_q108_opt_A.svg', [
    { label: 'Ingresos', data: q108_gas },
    { label: 'Gastos', data: q108_inc }
]);

// Opt B: Correct
generateBarChartSVG('mat5_q108_opt_B.svg', [
    { label: 'Ingresos', data: q108_inc },
    { label: 'Gastos', data: q108_gas }
]);

// Opt C: Single bar (just income)
generateBarChartSVG('mat5_q108_opt_C.svg', [
    { label: 'Ingresos', data: q108_inc }
]);

// Opt D: Uniform proportions (wrong)
generateBarChartSVG('mat5_q108_opt_D.svg', [
    { label: 'Ingresos', data: [12000, 12000, 12000, 12000, 12000, 12000] },
    { label: 'Gastos', data: [8000, 8000, 8000, 8000, 8000, 8000] }
]);

// --- Q111 DATA ---
// Almacén 1: T:10, C:5, L:7, P:12
// Almacén 2: T:14, C:18, L:11, P:9
const q111_alm1 = [10, 5, 7, 12];
const q111_alm2 = [14, 18, 11, 9];

const generateAlmChartSVG = (name, datasets, maxValue = 25) => {
    const width = 300;
    const height = 180;
    const padding = 30;
    const chartWidth = width - padding * 2;
    const chartHeight = height - padding * 2;
    const barWidth = (chartWidth / (4 * (datasets.length + 0.5)));

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`;
    svg += `<rect width="${width}" height="${height}" fill="white" />`;

    // Axes
    svg += `<line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#334155" stroke-width="1" />`;
    svg += `<line x1="${padding}" y1="${padding}" x2="${padding}" y2="${height - padding}" stroke="#334155" stroke-width="1" />`;

    const labels = ["T", "C", "L", "P"];
    for (let m = 0; m < 4; m++) {
        const xOffset = padding + (chartWidth / 4) * m + barWidth / 2;
        datasets.forEach((ds, dsIndex) => {
            const val = ds.data[m];
            const bHeight = (val / maxValue) * chartHeight;
            const bX = xOffset + (barWidth * dsIndex);
            const bY = (height - padding) - bHeight;
            svg += `<rect x="${bX}" y="${bY}" width="${barWidth - 2}" height="${bHeight}" fill="${dsIndex === 0 ? '#1e293b' : '#94a3b8'}" />`;
        });
        svg += `<text x="${xOffset + barWidth}" y="${height - 10}" font-family="Arial" font-size="10" text-anchor="middle">${labels[m]}</text>`;
    }
    svg += `</svg>`;
    fs.writeFileSync(path.join(imgDir, name), svg);
};

// Opt A: Values too high
generateAlmChartSVG('mat5_q111_opt_A.svg', [
    { data: [24, 23, 15, 20] },
    { data: [14, 18, 11, 9] }
]);

// Opt B: Correct
generateAlmChartSVG('mat5_q111_opt_B.svg', [
    { data: q111_alm1 },
    { data: q111_alm2 }
]);

// Opt C: Serie 2 too high
generateAlmChartSVG('mat5_q111_opt_C.svg', [
    { data: q111_alm1 },
    { data: [14, 24, 11, 9] }
]);

// Opt D: Crossed values
generateAlmChartSVG('mat5_q111_opt_D.svg', [
    { data: [12, 7, 5, 10] },
    { data: [9, 11, 18, 14] }
]);

console.log('All option SVGs generated.');
