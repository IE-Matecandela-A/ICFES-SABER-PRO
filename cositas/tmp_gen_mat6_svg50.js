const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\img\\preguntas';

// Values: E(2000), F(5000), G(4500), H(7000), I(3400)
// Total = 21900
// Order (clockwise from top): E, I, G, H, F

const cx = 0, cy = 0, r = 120;
let startAngle = -Math.PI / 2; // -90 deg
const data = [
    { name: 'Candidato E', votes: 2000, fill: 'url(#patE)', lblX: 130, lblY: -110 },
    { name: 'Candidato I', votes: 3400, fill: 'url(#patI)', lblX: 160, lblY: 10 },
    { name: 'Candidato G', votes: 4500, fill: '#888', lblX: 150, lblY: 110 },
    { name: 'Candidato H', votes: 7000, fill: 'url(#patH)', lblX: -150, lblY: 80 },
    { name: 'Candidato F', votes: 5000, fill: '#ddd', lblX: -150, lblY: -80 }
];

let paths = '';
let total = 21900;

data.forEach((d) => {
    let sliceAngle = (d.votes / total) * 2 * Math.PI;
    let endAngle = startAngle + sliceAngle;

    let x1 = cx + r * Math.cos(startAngle);
    let y1 = cy + r * Math.sin(startAngle);
    let x2 = cx + r * Math.cos(endAngle);
    let y2 = cy + r * Math.sin(endAngle);

    let largeArcFlag = sliceAngle > Math.PI ? 1 : 0;

    let dPath = `M ${cx},${cy} L ${x1},${y1} A ${r},${r} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    paths += `    <path d="${dPath}" fill="${d.fill}" stroke="#fff" stroke-width="1.5" />\n`;

    // Line for label (approx middle of slice)
    let midAngle = startAngle + sliceAngle / 2;
    let rx = cx + (r * 0.9) * Math.cos(midAngle);
    let ry = cy + (r * 0.9) * Math.sin(midAngle);

    // special positioning for labels
    paths += `    <line x1="${rx}" y1="${ry}" x2="${d.lblX}" y2="${d.lblY}" stroke="#666" stroke-width="1.5" />\n`;

    let textAnchor = d.lblX > 0 ? 'start' : 'end';
    let textX = d.lblX > 0 ? d.lblX + 5 : d.lblX - 5;

    paths += `    <text x="${textX}" y="${d.lblY + 4}" font-family="sans-serif" font-size="13" font-weight="bold" fill="#333" text-anchor="${textAnchor}">${d.name}</text>\n`;

    startAngle = endAngle;
});

const q50_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
  <defs>
    <!-- Pattern for Candidate E: Dots -->
    <pattern id="patE" width="12" height="12" patternUnits="userSpaceOnUse">
      <rect width="12" height="12" fill="#fff" />
      <circle cx="3" cy="3" r="2.5" fill="#aaa" />
      <circle cx="9" cy="9" r="2.5" fill="#aaa" />
    </pattern>
    <!-- Pattern for Candidate I: Diagonal Stripes -->
    <pattern id="patI" width="10" height="10" patternTransform="rotate(-45 0 0)" patternUnits="userSpaceOnUse">
      <rect width="10" height="10" fill="#222" />
      <line x1="0" y1="0" x2="0" y2="10" stroke="#fff" stroke-width="2" />
    </pattern>
    <!-- Pattern for Candidate H: Checkered (Squares) -->
    <pattern id="patH" width="16" height="16" patternUnits="userSpaceOnUse">
      <rect width="16" height="16" fill="#fff" />
      <rect width="8" height="8" fill="#333" />
      <rect x="8" y="8" width="8" height="8" fill="#333" />
    </pattern>
  </defs>

  <g transform="translate(250, 175)">
${paths}
  </g>
</svg>`;

fs.writeFileSync(path.join(dir, 'mat6_q50.svg'), q50_svg);
console.log("SVG 50 creado successfully.");
