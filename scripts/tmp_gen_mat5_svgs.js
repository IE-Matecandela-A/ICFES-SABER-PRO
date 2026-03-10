const fs = require('fs');
const path = require('path');

const imgDir = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/img/preguntas';

if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir, { recursive: true });
}

const svgs = [
    {
        name: 'mat5_q102_clavadista.svg',
        content: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="white" />
  <!-- Water -->
  <rect x="0" y="250" width="400" height="50" fill="#e0f2fe" />
  <line x1="0" y1="250" x2="400" y2="250" stroke="#0ea5e9" stroke-width="2" />
  
  <!-- Trampolín vertical -->
  <line x1="100" y1="100" x2="100" y2="250" stroke="#334155" stroke-width="3" />
  <text x="90" y="265" font-family="Arial" font-size="14">Q</text>
  <text x="90" y="95" font-family="Arial" font-size="14">P</text>
  
  <!-- Height label -->
  <line x1="85" y1="100" x2="85" y2="250" stroke="#64748b" stroke-width="1" stroke-dasharray="4" />
  <text x="55" y="180" font-family="Arial" font-size="12" fill="#64748b">5 m</text>
  
  <!-- Clavadista leap path (Triangle PQR) -->
  <line x1="100" y1="100" x2="300" y2="250" stroke="#6366f1" stroke-width="2" stroke-dasharray="4" />
  <line x1="100" y1="250" x2="300" y2="250" stroke="#6366f1" stroke-width="2" stroke-dasharray="4" />
  <text x="305" y="265" font-family="Arial" font-size="14">R</text>
  
  <!-- Angles -->
  <!-- Angle at P = 45 -->
  <path d="M 100 130 A 30 30 0 0 0 120 115" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="145" font-family="Arial" font-size="12" fill="#ef4444">45°</text>
  
  <!-- Angle at R = 55 -->
  <path d="M 270 250 A 30 30 0 0 1 285 235" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="245" y="240" font-family="Arial" font-size="12" fill="#ef4444">55°</text>
</svg>`
    },
    {
        name: 'mat5_q104_rampa.svg',
        content: `<svg width="400" height="250" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="250" fill="white" />
  <!-- Ground -->
  <line x1="20" y1="200" x2="380" y2="200" stroke="#334155" stroke-width="2" />
  
  <!-- Camión -->
  <rect x="50" y="100" width="80" height="100" fill="#94a3b8" rx="5" />
  <circle cx="70" cy="200" r="10" fill="#1e293b" />
  <circle cx="110" cy="200" r="10" fill="#1e293b" />
  
  <!-- Rampa -->
  <line x1="130" y1="130" x2="280" y2="200" stroke="#6366f1" stroke-width="4" />
  <text x="180" y="150" font-family="Arial" font-size="12" fill="#6366f1">4 m</text>
  
  <!-- Bandera -->
  <line x1="280" y1="200" x2="280" y2="160" stroke="#334155" stroke-width="2" />
  <path d="M 280 160 L 305 170 L 280 180 Z" fill="#ef4444" />
  
  <!-- Angle 30 -->
  <path d="M 250 200 A 30 30 0 0 0 265 193" fill="none" stroke="#ef4444" stroke-width="2" />
  <text x="220" y="195" font-family="Arial" font-size="12" fill="#ef4444">30°</text>
  
  <!-- Distance L label -->
  <line x1="130" y1="215" x2="280" y2="215" stroke="#64748b" stroke-width="1" />
  <line x1="130" y1="210" x2="130" y2="220" stroke="#64748b" stroke-width="1" />
  <line x1="280" y1="210" x2="280" y2="220" stroke="#64748b" stroke-width="1" />
  <text x="200" y="235" font-family="Arial" font-size="14" font-weight="bold">L</text>
</svg>`
    },
    {
        name: 'mat5_q107_discos.svg',
        content: `<svg width="200" height="300" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="300" fill="white" />
  <!-- Barra -->
  <rect x="95" y="50" width="10" height="200" fill="#64748b" rx="2" />
  <rect x="60" y="250" width="80" height="10" fill="#1e293b" />
  
  <!-- Discos -->
  <rect x="40" y="230" width="120" height="15" fill="#ef4444" rx="7" />
  <rect x="50" y="212" width="100" height="15" fill="#f59e0b" rx="7" />
  <rect x="60" y="194" width="80" height="15" fill="#10b981" rx="7" />
  <rect x="70" y="176" width="60" height="15" fill="#6366f1" rx="7" />
</svg>`
    },
    {
        name: 'mat5_q111_compuesta.svg',
        content: `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="300" fill="white" />
  
  <!-- Cuadrado 4x4 -->
  <rect x="100" y="150" width="100" height="100" fill="rgba(99, 102, 241, 0.1)" stroke="#6366f1" stroke-width="2" />
  <text x="140" y="205" font-family="Arial" font-size="14" fill="#6366f1">4</text>
  
  <!-- Semicírculo r=5 (d=10) -->
  <!-- Scale: 1 unit = 25px. Square 4 units = 100px. Circle diameter 10 units = 250px. -->
  <path d="M 100 150 A 125 125 0 0 1 350 150 Z" fill="rgba(16, 185, 129, 0.1)" stroke="#10b981" stroke-width="2" />
  
  <!-- Center O -->
  <circle cx="225" cy="150" r="3" fill="#10b981" />
  <line x1="225" y1="150" x2="350" y2="150" stroke="#10b981" stroke-width="1" stroke-dasharray="4" />
  <text x="280" y="140" font-family="Arial" font-size="12" fill="#10b981">r = 5</text>
  
  <!-- Segmento S -->
  <line x1="200" y1="160" x2="350" y2="160" stroke="#f59e0b" stroke-width="3" />
  <line x1="200" y1="155" x2="200" y2="165" stroke="#f59e0b" stroke-width="1" />
  <line x1="350" y1="155" x2="350" y2="165" stroke="#f59e0b" stroke-width="1" />
  <text x="270" y="185" font-family="Arial" font-size="16" fill="#f59e0b" font-weight="bold">S</text>
</svg>`
    }
];

svgs.forEach(svg => {
    fs.writeFileSync(path.join(imgDir, svg.name), svg.content);
    console.log(`Created: ${svg.name}`);
});
