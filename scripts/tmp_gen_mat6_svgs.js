const fs = require('fs');
const path = require('path');

const outputDir = path.resolve(__dirname, '../img/preguntas');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function writeSVG(filename, content) {
    fs.writeFileSync(path.join(outputDir, filename), content);
    console.log(`✅ Generado: ${filename}`);
}

// Q21: Bar charts for Vallenato (Total = 50, Target = 30)
// A: 60, B: 20, C: 30, D: 50
const q21_values = { A: 60, B: 20, C: 30, D: 50 };

for (const [opt, val] of Object.entries(q21_values)) {
    const W = 150;
    const H = 200;
    const maxVal = 60;
    const barW = 60;
    const barH = (val / maxVal) * 140;

    let svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="white" />
    <style>
        .axis { stroke: black; stroke-width: 2; }
        .label { font-family: Arial, sans-serif; font-size: 11px; font-weight: bold; }
        .tick { font-family: Arial, sans-serif; font-size: 10px; }
    </style>
    <!-- Y Axis -->
    <line x1="40" y1="20" x2="40" y2="160" class="axis"/>
    <!-- X Axis -->
    <line x1="40" y1="160" x2="130" y2="160" class="axis"/>
    <!-- Arrows -->
    <path d="M 37,25 L 40,20 L 43,25" />
    <path d="M 125,157 L 130,160 L 125,163" />
    <!-- Ticks -->
    `;

    for (let i = 0; i <= 60; i += 10) {
        const y = 160 - (i / 60) * 140;
        svg += `    <line x1="37" y1="${y}" x2="40" y2="${y}" class="axis" stroke-width="1"/>\n`;
        svg += `    <text x="32" y="${y + 4}" class="tick" text-anchor="end">${i}</text>\n`;
    }

    // Bar
    const yBar = 160 - barH;
    svg += `    <rect x="55" y="${yBar}" width="${barW}" height="${barH}" fill="#333" />\n`;

    // Labels
    svg += `    <text x="85" y="175" class="label" text-anchor="middle">■ Vallenato</text>\n`;
    svg += `    <text x="20" y="90" class="label" transform="rotate(-90 20,90)" text-anchor="middle">Total de estudiantes</text>\n`;

    svg += `</svg>`;
    writeSVG(`mat6_q21_opt${opt}.svg`, svg);
}


// Q22: Polygons (A: Triangle, B: Pentagon, C: Hexagon, D: Octagon)
const polygons = {
    A: { sides: 3, apothemLabel: "4 cm", sideLabel: "5 cm", name: "Triángulo" },
    B: { sides: 5, apothemLabel: "4 cm", sideLabel: "5 cm", name: "Pentágono" },
    C: { sides: 6, apothemLabel: "4 cm", sideLabel: "5 cm", name: "Hexágono" },
    D: { sides: 8, apothemLabel: "4 cm", sideLabel: "5 cm", name: "Octágono" },
};

for (const [opt, data] of Object.entries(polygons)) {
    const W = 200, H = 200;
    const cx = 100, cy = 90;

    // Si la apotema es 4 y el lado es 5, no todas son figuras geométricas válidas,
    // pero dibujaremos figuras regulares genéricas representativas.
    const r = 50; // radio para dibujar

    let points = "";
    for (let i = 0; i < data.sides; i++) {
        // Rotar un poco para que el lado quede horizontal abajo
        const angle = -Math.PI / 2 + (Math.PI / data.sides) + (i * 2 * Math.PI / data.sides) + (data.sides % 2 === 0 ? Math.PI / data.sides : 0);
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        points += `${px},${py} `;
    }

    const maxPy = Math.max(...points.trim().split(' ').map(p => parseFloat(p.split(',')[1])));

    let svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${W}" height="${H}" fill="white" />
    <polygon points="${points.trim()}" fill="none" stroke="black" stroke-width="2" />
    <circle cx="${cx}" cy="${cy}" r="2" fill="black" />
    <!-- Apotema -->
    <line x1="${cx}" y1="${cy}" x2="${cx + 25}" y2="${cy + 25}" stroke="black" stroke-width="1.5" />
    <path d="M ${cx + 21},${cy + 25} L ${cx + 25},${cy + 25} L ${cx + 23},${cy + 22}" fill="black" />
    <text x="${cx + 12}" y="${cy + 15}" font-family="Arial" font-size="11" font-weight="bold">${data.apothemLabel}</text>
    
    <!-- Base Bracket -->
    <line x1="60" y1="${maxPy + 15}" x2="140" y2="${maxPy + 15}" stroke="black" stroke-width="1.5" />
    <line x1="60" y1="${maxPy + 10}" x2="60" y2="${maxPy + 20}" stroke="black" stroke-width="1.5" />
    <line x1="140" y1="${maxPy + 10}" x2="140" y2="${maxPy + 20}" stroke="black" stroke-width="1.5" />
    <text x="100" y="${maxPy + 30}" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">${data.sideLabel}</text>
    </svg>`;

    writeSVG(`mat6_q22_opt${opt}.svg`, svg);
}


// Q25: Cards
const q25_svg = `<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="250" fill="white" />
    
    <!-- Cartas superiores (boca abajo) -->
    <rect x="180" y="30" width="50" height="70" fill="#a8cda8" stroke="#ccc" />
    <rect x="250" y="30" width="50" height="70" fill="#a8cda8" stroke="#ccc" />

    <!-- Cartas inferiores -->
    <rect x="180" y="130" width="50" height="70" fill="#a8cda8" stroke="#ccc" />
    <rect x="250" y="130" width="50" height="70" fill="#a8cda8" stroke="#ccc" />

    <!-- Carta Izquierda (Rectángulo con diagonal) -->
    <g transform="translate(100, 30)">
        <text x="25" y="-5" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">2 cm</text>
        <rect x="0" y="0" width="50" height="30" fill="none" stroke="black" stroke-width="2" />
        <line x1="0" y1="30" x2="50" y2="0" stroke="black" stroke-width="2" />
        <text x="28" y="22" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(-30 25,15)">3 cm</text>
    </g>

    <!-- Carta Derecha (Triángulo rectángulo) -->
    <g transform="translate(320, 130)">
        <polygon points="0,0 0,40 30,40" fill="none" stroke="black" stroke-width="2" />
        <text x="15" y="55" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">3 cm</text>
        <text x="25" y="20" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" transform="rotate(50 15,20)">5 cm</text>
    </g>

</svg>`;
writeSVG('mat6_q25_cartas.svg', q25_svg);
