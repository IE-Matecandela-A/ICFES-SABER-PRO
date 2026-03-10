/**
 * ============================================================================
 *  GENERADOR DE GRÁFICAS SVG - Saber 11 Pro
 * ============================================================================
 *
 *  Script reutilizable para generar imágenes SVG de alta calidad:
 *    - Gráficas de barras agrupadas (grouped bar charts)
 *    - Gráficas de barras simples
 *    - Diagramas circulares (pie charts)
 *
 *  Todas las imágenes se generan con fondo blanco y texto negro
 *  para máxima legibilidad en cualquier tema de la app.
 *
 *  ========== USO ==========
 *
 *  node generate_chart_svg.js
 *
 *  Para agregar nuevas gráficas, simplemente agrega entradas al array
 *  CHARTS al final del archivo y vuelve a ejecutar.
 *
 *  ========== EJEMPLOS ==========
 *
 *  // Barras agrupadas (2 series):
 *  {
 *    type: 'grouped-bar',
 *    output: 'img/preguntas/mi_grafica.svg',
 *    title: '',           // Título opcional arriba de la gráfica
 *    width: 450,          // Ancho total en px
 *    height: 300,         // Alto total en px
 *    categories: ['Ene', 'Feb', 'Mar'],
 *    series: [
 *      { name: 'Ingresos', color: '#1a1a1a', values: [12780, 15200, 10500] },
 *      { name: 'Gastos',   color: '#a0a0a0', values: [5400, 4903, 7250] },
 *    ],
 *    showValues: true,    // Mostrar valor encima de cada barra
 *    yLabel: '',          // Etiqueta del eje Y
 *  }
 *
 *  // Barras simples (1 serie):
 *  {
 *    type: 'bar',
 *    output: 'img/preguntas/mi_grafica.svg',
 *    categories: ['A', 'B', 'C'],
 *    values: [10, 20, 30],
 *    color: '#1a1a1a',
 *    showValues: true,
 *  }
 *
 *  // Diagrama circular:
 *  {
 *    type: 'pie',
 *    output: 'img/preguntas/mi_torta.svg',
 *    width: 400,
 *    height: 300,
 *    slices: [
 *      { label: 'Insatisfecho',    value: 25, color: '#262626' },
 *      { label: 'Poco satisfecho', value: 20, color: '#525252' },
 *      { label: 'Conforme',        value: 25, color: '#737373' },
 *      { label: 'Satisfecho',      value: 10, color: '#a3a3a3' },
 *      { label: 'Muy satisfecho',  value: 20, color: '#d4d4d4' },
 *    ],
 *    showPercent: true,   // Mostrar % en cada slice
 *  }
 *
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

// ── CONFIGURACIÓN GLOBAL ─────────────────────────────────────────────────────

const DEFAULTS = {
    width: 450,
    height: 300,
    fontFamily: 'Arial, Helvetica, sans-serif',
    bgColor: 'white',
    axisColor: 'black',
    gridColor: '#e0e0e0',
    labelSize: 11,
    valueSize: 10,
    titleSize: 14,
    padding: { top: 30, right: 20, bottom: 60, left: 50 },
};

// ── UTILIDADES ───────────────────────────────────────────────────────────────

function escapeXml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/** Calcula un "buen" máximo para el eje Y que sea un número redondo */
function niceMax(val) {
    if (val <= 0) return 10;
    const magnitude = Math.pow(10, Math.floor(Math.log10(val)));
    const residual = val / magnitude;
    let nice;
    if (residual <= 1) nice = 1;
    else if (residual <= 2) nice = 2;
    else if (residual <= 5) nice = 5;
    else nice = 10;
    return Math.ceil(val / (nice * magnitude / 2)) * (nice * magnitude / 2);
}

/** Genera ticks uniformes para el eje Y */
function generateTicks(maxVal, desiredCount = 6) {
    const step = Math.ceil(maxVal / desiredCount);
    const ticks = [];
    for (let i = 0; i <= maxVal; i += step) {
        ticks.push(i);
    }
    if (ticks[ticks.length - 1] < maxVal) ticks.push(maxVal);
    return ticks;
}

// ── GENERADOR: BARRAS AGRUPADAS ──────────────────────────────────────────────

function generateGroupedBar(config) {
    const W = config.width || DEFAULTS.width;
    const H = config.height || DEFAULTS.height;
    const pad = { ...DEFAULTS.padding, ...(config.padding || {}) };
    const cats = config.categories;
    const series = config.series;
    const showVals = config.showValues !== false;
    const font = config.fontFamily || DEFAULTS.fontFamily;

    // Calcular máximo
    let maxVal = 0;
    series.forEach(s => s.values.forEach(v => { if (v > maxVal) maxVal = v; }));
    maxVal = niceMax(maxVal);

    // Dimensiones del área de dibujo
    const plotW = W - pad.left - pad.right;
    const plotH = H - pad.top - pad.bottom;
    const groupW = plotW / cats.length;
    const barW = Math.min(groupW / (series.length + 1), 30);
    const gap = (groupW - barW * series.length) / 2;

    // Escala Y
    const scaleY = val => plotH - (val / maxVal) * plotH;

    let svg = '';
    svg += `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">\n`;
    svg += `  <rect width="${W}" height="${H}" fill="${DEFAULTS.bgColor}" />\n`;
    svg += `  <style>\n`;
    svg += `    .axis { stroke: ${DEFAULTS.axisColor}; stroke-width: 2; fill: none; }\n`;
    svg += `    .grid { stroke: ${DEFAULTS.gridColor}; stroke-width: 1; stroke-dasharray: 3; }\n`;
    svg += `    .label { font-family: ${font}; font-size: ${DEFAULTS.labelSize}px; fill: black; }\n`;
    svg += `    .value { font-family: ${font}; font-size: ${DEFAULTS.valueSize}px; fill: black; font-weight: bold; }\n`;
    svg += `    .title { font-family: ${font}; font-size: ${DEFAULTS.titleSize}px; fill: black; font-weight: bold; }\n`;
    svg += `  </style>\n`;

    // Título
    if (config.title) {
        svg += `  <text x="${W / 2}" y="18" class="title" text-anchor="middle">${escapeXml(config.title)}</text>\n`;
    }

    // Grid y ticks Y
    const ticks = generateTicks(maxVal, 8);
    ticks.forEach(t => {
        const y = pad.top + scaleY(t);
        svg += `  <line x1="${pad.left}" y1="${y}" x2="${W - pad.right}" y2="${y}" class="grid" />\n`;
        svg += `  <text x="${pad.left - 5}" y="${y + 4}" class="label" text-anchor="end">${t.toLocaleString('es-CO')}</text>\n`;
    });

    // Ejes
    svg += `  <line x1="${pad.left}" y1="${pad.top}" x2="${pad.left}" y2="${pad.top + plotH}" class="axis" />\n`;
    svg += `  <line x1="${pad.left}" y1="${pad.top + plotH}" x2="${W - pad.right}" y2="${pad.top + plotH}" class="axis" />\n`;

    // Flechas
    svg += `  <path d="M ${pad.left - 3},${pad.top + 10} L ${pad.left},${pad.top} L ${pad.left + 3},${pad.top + 10}" class="axis" />\n`;
    svg += `  <path d="M ${W - pad.right - 10},${pad.top + plotH - 3} L ${W - pad.right},${pad.top + plotH} L ${W - pad.right - 10},${pad.top + plotH + 3}" class="axis" />\n`;

    // Barras
    cats.forEach((cat, ci) => {
        const groupX = pad.left + ci * groupW;
        series.forEach((s, si) => {
            const x = groupX + gap + si * barW;
            const barHeight = (s.values[ci] / maxVal) * plotH;
            const y = pad.top + plotH - barHeight;

            svg += `  <rect x="${x}" y="${y}" width="${barW}" height="${barHeight}" fill="${s.color}" />\n`;

            if (showVals) {
                svg += `  <text x="${x + barW / 2}" y="${y - 3}" class="value" text-anchor="middle">${s.values[ci].toLocaleString('es-CO')}</text>\n`;
            }
        });

        // Etiqueta categoría
        const labelX = groupX + groupW / 2;
        const labelY = pad.top + plotH + 15;
        svg += `  <text x="${labelX}" y="${labelY}" class="label" text-anchor="middle">${escapeXml(cat)}</text>\n`;
    });

    // Leyenda
    const legendY = H - 15;
    const legendStartX = pad.left;
    const legendSpacing = (W - pad.left - pad.right) / series.length;
    series.forEach((s, si) => {
        const x = legendStartX + si * legendSpacing;
        svg += `  <rect x="${x}" y="${legendY - 9}" width="10" height="10" fill="${s.color}" />\n`;
        svg += `  <text x="${x + 14}" y="${legendY}" class="label">${escapeXml(s.name)}</text>\n`;
    });

    svg += `</svg>\n`;
    return svg;
}

// ── GENERADOR: BARRAS SIMPLES ────────────────────────────────────────────────

function generateSimpleBar(config) {
    const singleSeries = {
        name: config.seriesName || 'Datos',
        color: config.color || '#1a1a1a',
        values: config.values,
    };
    return generateGroupedBar({
        ...config,
        type: 'grouped-bar',
        series: [singleSeries],
    });
}

// ── GENERADOR: PIE CHART ─────────────────────────────────────────────────────

function generatePie(config) {
    const W = config.width || 400;
    const H = config.height || 300;
    const font = config.fontFamily || DEFAULTS.fontFamily;
    const slices = config.slices;
    const showPct = config.showPercent !== false;

    const cx = Math.min(W * 0.38, 160);
    const cy = H / 2;
    const r = Math.min(cx - 20, cy - 20);

    const total = slices.reduce((sum, s) => sum + s.value, 0);

    let svg = '';
    svg += `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">\n`;
    svg += `  <rect width="${W}" height="${H}" fill="${DEFAULTS.bgColor}" />\n`;
    svg += `  <style>\n`;
    svg += `    .label { font-family: ${font}; font-size: 11px; fill: black; }\n`;
    svg += `    .pct   { font-family: ${font}; font-size: 11px; font-weight: bold; }\n`;
    svg += `  </style>\n`;

    if (config.title) {
        svg += `  <text x="${W / 2}" y="18" class="label" text-anchor="middle" style="font-size:14px; font-weight:bold;">${escapeXml(config.title)}</text>\n`;
    }

    let angle = -Math.PI / 2; // start at top

    slices.forEach((slice, i) => {
        const frac = slice.value / total;
        const sweepAngle = frac * 2 * Math.PI;
        const largeArc = sweepAngle > Math.PI ? 1 : 0;

        const x1 = cx + r * Math.cos(angle);
        const y1 = cy + r * Math.sin(angle);
        const x2 = cx + r * Math.cos(angle + sweepAngle);
        const y2 = cy + r * Math.sin(angle + sweepAngle);

        svg += `  <path d="M ${cx} ${cy} L ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="${slice.color}" stroke="white" stroke-width="1" />\n`;

        // Etiqueta porcentaje dentro del slice
        if (showPct) {
            const midAngle = angle + sweepAngle / 2;
            const labelR = r * 0.65;
            const lx = cx + labelR * Math.cos(midAngle);
            const ly = cy + labelR * Math.sin(midAngle);
            const pctText = `${Math.round(frac * 100)} %`;
            // Usar blanco para slices oscuros, negro para claros
            const brightness = parseInt(slice.color.replace('#', ''), 16);
            const fillColor = brightness < 0x888888 ? 'white' : 'black';
            svg += `  <text x="${lx.toFixed(1)}" y="${(ly + 4).toFixed(1)}" class="pct" text-anchor="middle" fill="${fillColor}">${pctText}</text>\n`;
        }

        angle += sweepAngle;
    });

    // Leyenda
    const legendX = cx + r + 30;
    const legendStartY = cy - (slices.length * 25) / 2;
    slices.forEach((slice, i) => {
        const y = legendStartY + i * 25;
        svg += `  <rect x="${legendX}" y="${y}" width="12" height="12" fill="${slice.color}" />\n`;
        svg += `  <text x="${legendX + 18}" y="${y + 11}" class="label">${escapeXml(slice.label)}</text>\n`;
    });

    svg += `</svg>\n`;
    return svg;
}

// ── ENRUTADOR DE TIPOS ───────────────────────────────────────────────────────

function generateChart(config) {
    switch (config.type) {
        case 'grouped-bar': return generateGroupedBar(config);
        case 'bar': return generateSimpleBar(config);
        case 'pie': return generatePie(config);
        default:
            console.error(`❌ Tipo desconocido: ${config.type}`);
            return null;
    }
}

// ══════════════════════════════════════════════════════════════════════════════
//  DEFINICIÓN DE GRÁFICAS A GENERAR
//  ──────────────────────────────────
//  Agrega aquí las gráficas que necesites. Luego ejecuta:
//    node generate_chart_svg.js
// ══════════════════════════════════════════════════════════════════════════════

const CHARTS = [

    // ──── Q108 Ingresos y Gastos ─ Opción A (incorrecta: datos invertidos) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q108_opt_A.svg',
        width: 450, height: 300,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        series: [
            { name: 'Ingresos', color: '#1a1a1a', values: [5400, 4903, 7250, 3500, 4103, 6230] },
            { name: 'Gastos', color: '#a0a0a0', values: [12780, 15200, 10500, 13700, 10000, 11650] },
        ],
        showValues: true,
    },

    // ──── Q108 Ingresos y Gastos ─ Opción B (CORRECTA) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q108_opt_B.svg',
        width: 450, height: 300,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        series: [
            { name: 'Ingresos', color: '#1a1a1a', values: [12780, 15200, 10500, 13700, 10000, 11650] },
            { name: 'Gastos', color: '#a0a0a0', values: [5400, 4903, 7250, 3500, 4103, 6230] },
        ],
        showValues: true,
    },

    // ──── Q108 Ingresos y Gastos ─ Opción C (sumas) ────
    {
        type: 'bar',
        output: 'img/preguntas/mat5_q108_opt_C.svg',
        width: 450, height: 300,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        values: [18180, 20103, 17750, 17200, 14103, 17880],
        color: '#1a1a1a',
        seriesName: 'Total',
        showValues: true,
    },

    // ──── Q108 Ingresos y Gastos ─ Opción D (aleatorio) ────
    {
        type: 'bar',
        output: 'img/preguntas/mat5_q108_opt_D.svg',
        width: 450, height: 300,
        categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        values: [9500, 11200, 8900, 14500, 7800, 13100],
        color: '#525252',
        seriesName: 'Datos',
        showValues: true,
    },

    // ──── Q111 Natalia ─ Opción A (CORRECTA: datos fieles) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q111_opt_A.svg',
        width: 450, height: 300,
        categories: ['Televisores', 'Computadores', 'Licuadoras', 'Planchas'],
        series: [
            { name: 'Unidades en el almacén 1', color: '#1a1a1a', values: [10, 5, 7, 12] },
            { name: 'Unidades en el almacén 2', color: '#a0a0a0', values: [14, 18, 11, 9] },
        ],
        showValues: true,
    },

    // ──── Q111 Natalia ─ Opción B (sumas en serie 1) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q111_opt_B.svg',
        width: 450, height: 300,
        categories: ['Televisores', 'Computadores', 'Licuadoras', 'Planchas'],
        series: [
            { name: 'Unidades en el almacén 1', color: '#1a1a1a', values: [24, 23, 18, 21] },
            { name: 'Unidades en el almacén 2', color: '#a0a0a0', values: [14, 18, 11, 9] },
        ],
        showValues: true,
    },

    // ──── Q111 Natalia ─ Opción C (sumas en serie 2) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q111_opt_C.svg',
        width: 450, height: 300,
        categories: ['Televisores', 'Computadores', 'Licuadoras', 'Planchas'],
        series: [
            { name: 'Unidades en el almacén 1', color: '#1a1a1a', values: [10, 5, 7, 12] },
            { name: 'Unidades en el almacén 2', color: '#a0a0a0', values: [24, 23, 18, 21] },
        ],
        showValues: true,
    },

    // ──── Q111 Natalia ─ Opción D (datos cruzados) ────
    {
        type: 'grouped-bar',
        output: 'img/preguntas/mat5_q111_opt_D.svg',
        width: 450, height: 300,
        categories: ['Televisores', 'Computadores', 'Licuadoras', 'Planchas'],
        series: [
            { name: 'Unidades en el almacén 1', color: '#1a1a1a', values: [10, 23, 7, 21] },
            { name: 'Unidades en el almacén 2', color: '#a0a0a0', values: [24, 18, 18, 9] },
        ],
        showValues: true,
    },

    // ──── Q120 Satisfacción ─ Diagrama Circular ────
    {
        type: 'pie',
        output: 'img/preguntas/mat5_q120_circular.svg',
        width: 400, height: 300,
        slices: [
            { label: 'Insatisfecho', value: 25, color: '#262626' },
            { label: 'Poco satisfecho', value: 20, color: '#525252' },
            { label: 'Conforme', value: 25, color: '#737373' },
            { label: 'Satisfecho', value: 10, color: '#a3a3a3' },
            { label: 'Muy satisfecho', value: 20, color: '#d4d4d4' },
        ],
        showPercent: true,
    },

];


// ══════════════════════════════════════════════════════════════════════════════
//  EJECUCIÓN
// ══════════════════════════════════════════════════════════════════════════════

const BASE_DIR = path.join(__dirname, '..');

console.log('');
console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║      🎨  Generador de Gráficas SVG - Saber 11 Pro         ║');
console.log('╚══════════════════════════════════════════════════════════════╝');
console.log('');

let success = 0;
let errors = 0;

CHARTS.forEach((chart, idx) => {
    const svgContent = generateChart(chart);
    if (!svgContent) {
        errors++;
        return;
    }

    const outputPath = path.join(BASE_DIR, chart.output);
    const outputDir = path.dirname(outputPath);

    // Crear directorio si no existe
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, svgContent, 'utf8');
    console.log(`  ✅ [${idx + 1}/${CHARTS.length}] ${chart.output}`);
    success++;
});

console.log('');
console.log(`  📊 Generadas: ${success} | Errores: ${errors}`);
console.log('  📁 Directorio base:', BASE_DIR);
console.log('');
console.log('  ¡Listo! Todas las gráficas han sido generadas.');
console.log('');
