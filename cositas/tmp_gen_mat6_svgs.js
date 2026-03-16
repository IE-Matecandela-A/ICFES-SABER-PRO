const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\Usuario\\Downloads\\new\\estudiantes\\Saber11_Pro\\img\\preguntas';

const q16_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 320" width="100%" height="100%">
  <!-- Ejes -->
  <line x1="60" y1="260" x2="380" y2="260" stroke="black" stroke-width="2"/>
  <line x1="60" y1="260" x2="60" y2="20" stroke="black" stroke-width="2"/>
  
  <!-- Etiquetas Eje Y -->
  <text x="50" y="265" font-family="sans-serif" font-size="12" text-anchor="end">0</text>
  <text x="50" y="220" font-family="sans-serif" font-size="12" text-anchor="end">500</text>
  <text x="50" y="175" font-family="sans-serif" font-size="12" text-anchor="end">1.000</text>
  <text x="50" y="130" font-family="sans-serif" font-size="12" text-anchor="end">1.500</text>
  <text x="50" y="85" font-family="sans-serif" font-size="12" text-anchor="end">2.000</text>
  <text x="50" y="40" font-family="sans-serif" font-size="12" text-anchor="end">2.500</text>
  
  <!-- Cuadricula opcional -->
  <line x1="60" y1="220" x2="380" y2="220" stroke="#eee" stroke-width="1"/>
  <line x1="60" y1="175" x2="380" y2="175" stroke="#eee" stroke-width="1"/>
  <line x1="60" y1="130" x2="380" y2="130" stroke="#eee" stroke-width="1"/>
  <line x1="60" y1="85" x2="380" y2="85" stroke="#eee" stroke-width="1"/>
  <line x1="60" y1="40" x2="380" y2="40" stroke="#eee" stroke-width="1"/>
  
  <!-- Ticks X -->
  <line x1="70" y1="260" x2="70" y2="265" stroke="black" stroke-width="1"/>
  <line x1="120" y1="260" x2="120" y2="265" stroke="black" stroke-width="1"/>
  <line x1="170" y1="260" x2="170" y2="265" stroke="black" stroke-width="1"/>
  <line x1="220" y1="260" x2="220" y2="265" stroke="black" stroke-width="1"/>
  <line x1="270" y1="260" x2="270" y2="265" stroke="black" stroke-width="1"/>
  <line x1="320" y1="260" x2="320" y2="265" stroke="black" stroke-width="1"/>
  <line x1="370" y1="260" x2="370" y2="265" stroke="black" stroke-width="1"/>

  <!-- Etiquetas Eje X (24 a 30) -->
  <text x="70" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">24</text>
  <text x="120" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">25</text>
  <text x="170" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">26</text>
  <text x="220" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">27</text>
  <text x="270" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">28</text>
  <text x="320" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">29</text>
  <text x="370" y="280" font-family="sans-serif" font-size="12" text-anchor="middle">30</text>
  
  <!-- Liena Horizontal (y=2000 -> 85) empezando desde x=24 hasta 30 -->
  <line x1="70" y1="85" x2="370" y2="85" stroke="black" stroke-width="3"/>
  
  <!-- Nombres de Ejes -->
  <text x="15" y="145" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle" transform="rotate(-90 15 145)">Cantidad de peces</text>
  <text x="220" y="310" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Temperatura (°C)</text>
</svg>`;

const q47_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 250" width="100%" height="100%">
  <!-- Tortas principales -->
  <rect x="50" y="50" width="400" height="150" fill="#fcfcfc" stroke="black" stroke-width="2"/>
  <!-- Línea central horizontal -->
  <line x1="50" y1="125" x2="450" y2="125" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
  <!-- Líneas verticales -->
  <line x1="350" y1="50" x2="350" y2="200" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
  <line x1="250" y1="50" x2="250" y2="200" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
  <line x1="216.7" y1="50" x2="216.7" y2="200" stroke="black" stroke-width="1" stroke-dasharray="8,4"/>
  
  <!-- Texturas (patrón rústico de la imagen) -->
  <g fill="none" stroke="#ddd" stroke-width="1">
     <path d="M60,60 Q80,70 100,55 T150,80 T200,60" />
     <path d="M70,160 Q90,170 120,150 T180,180" />
     <path d="M260,80 Q280,60 300,90 T340,70" />
     <path d="M370,140 Q390,120 420,150" />
     <path d="M220,180 Q230,190 240,170" />
  </g>
  
  <!-- Labels for pieces -->
  <text x="133" y="95" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">2</text>
  <text x="233" y="95" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">6</text>
  <text x="300" y="95" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">5</text>
  <text x="400" y="95" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">1</text>

  <text x="133" y="170" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">3</text>
  <text x="233" y="170" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">7</text>
  <text x="300" y="170" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">8</text>
  <text x="400" y="170" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">4</text>
  
  <!-- Dimensions -->
  <line x1="465" y1="125" x2="465" y2="200" stroke="black" stroke-width="1"/>
  <polygon points="465,125 462,130 468,130" fill="black"/>
  <polygon points="465,200 462,195 468,195" fill="black"/>
  <text x="475" y="167" font-family="sans-serif" font-size="12">10 cm</text>
  
  <line x1="250" y1="215" x2="450" y2="215" stroke="black" stroke-width="1"/>
  <polygon points="250,215 255,212 255,218" fill="black"/>
  <polygon points="450,215 445,212 445,218" fill="black"/>
  <text x="350" y="230" font-family="sans-serif" font-size="12" text-anchor="middle">30 cm</text>
  
  <line x1="250" y1="110" x2="350" y2="110" stroke="black" stroke-width="1"/>
  <polygon points="250,110 255,107 255,113" fill="black"/>
  <polygon points="350,110 345,107 345,113" fill="black"/>
  <text x="300" y="105" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">15 cm</text>

  <line x1="216.7" y1="110" x2="250" y2="110" stroke="black" stroke-width="1"/>
  <polygon points="216.7,110 219.7,107 219.7,113" fill="black"/>
  <polygon points="250,110 247,107 247,113" fill="black"/>
  <text x="233" y="105" font-family="sans-serif" font-size="11" text-anchor="middle" font-weight="bold">5 cm</text>
</svg>`;

const q49_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" width="100%" height="100%">
  <!-- Lienzo -->
  <rect x="50" y="50" width="400" height="250" fill="#f0f0f0" stroke="black" stroke-width="2"/>
  <text x="170" y="260" font-family="sans-serif" font-size="14" font-weight="bold">Región 3</text>
  
  <!-- Región 1: Triángulo -->
  <polygon points="50,50 250,50 50,200" fill="white" stroke="black" stroke-width="2"/>
  <text x="100" y="90" font-family="sans-serif" font-size="14" font-weight="bold">Región 1</text>
  
  <!-- Región 2: Cuarto de Círculo -->
  <path d="M 450,50 A 200,200 0 0,0 250,250 L 450,250 Z" fill="white" stroke="black" stroke-width="2"/>
  <text x="350" y="100" font-family="sans-serif" font-size="14" font-weight="bold">Región 2</text>
  
  <!-- Dimensiones superiores -->
  <line x1="50" y1="30" x2="250" y2="30" stroke="black" stroke-width="1"/>
  <polygon points="50,30 55,27 55,33" fill="black"/>
  <polygon points="250,30 245,27 245,33" fill="black"/>
  <text x="150" y="22" font-family="sans-serif" font-size="12" text-anchor="middle">4 m</text>
  
  <!-- ticks -->
  <line x1="50" y1="20" x2="50" y2="40" stroke="black" stroke-width="1"/>
  <line x1="250" y1="20" x2="250" y2="40" stroke="black" stroke-width="1"/>
  
  <line x1="250" y1="30" x2="450" y2="30" stroke="black" stroke-width="1"/>
  <polygon points="250,30 255,27 255,33" fill="black"/>
  <polygon points="450,30 445,27 445,33" fill="black"/>
  <text x="350" y="22" font-family="sans-serif" font-size="12" text-anchor="middle">4 m</text>
  <line x1="450" y1="20" x2="450" y2="40" stroke="black" stroke-width="1"/>
  
  <!-- Dimensiones inferiores -->
  <line x1="50" y1="320" x2="450" y2="320" stroke="black" stroke-width="1"/>
  <polygon points="50,320 55,317 55,323" fill="black"/>
  <polygon points="450,320 445,317 445,323" fill="black"/>
  <text x="250" y="340" font-family="sans-serif" font-size="12" text-anchor="middle">8 m</text>
  <line x1="50" y1="310" x2="50" y2="330" stroke="black" stroke-width="1"/>
  <line x1="450" y1="310" x2="450" y2="330" stroke="black" stroke-width="1"/>

  <!-- Dimensiones izquierda -->
  <line x1="30" y1="50" x2="30" y2="200" stroke="black" stroke-width="1"/>
  <polygon points="30,50 27,55 33,55" fill="black"/>
  <polygon points="30,200 27,195 33,195" fill="black"/>
  <text x="20" y="130" font-family="sans-serif" font-size="12" text-anchor="end">3 m</text>
  <line x1="20" y1="50" x2="40" y2="50" stroke="black" stroke-width="1"/>
  <line x1="20" y1="200" x2="40" y2="200" stroke="black" stroke-width="1"/>
  
  <line x1="10" y1="50" x2="10" y2="300" stroke="black" stroke-width="1"/>
  <polygon points="10,50 7,55 13,55" fill="black"/>
  <polygon points="10,300 7,295 13,295" fill="black"/>
  <text x="25" y="175" font-family="sans-serif" font-size="12" text-anchor="middle" transform="rotate(-90 25 175) translate(0, -15)">5 m</text>

  <!-- Dimensiones derecha -->
  <line x1="470" y1="50" x2="470" y2="300" stroke="black" stroke-width="1"/>
  <polygon points="470,50 467,55 473,55" fill="black"/>
  <polygon points="470,300 467,295 473,295" fill="black"/>
  <text x="485" y="180" font-family="sans-serif" font-size="12">5 m</text>
  <line x1="460" y1="50" x2="480" y2="50" stroke="black" stroke-width="1"/>
  <line x1="460" y1="300" x2="480" y2="300" stroke="black" stroke-width="1"/>

  <!-- Hipotenusa region 1 -->
  <text x="145" y="115" font-family="sans-serif" font-size="12" transform="rotate(37 145 115)">5 m</text>
</svg>`;

const q50_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="100%" height="100%">
  <!-- Gráfica circular genérica de intención de voto -->
  <g transform="translate(200, 150)">
    <!-- G: Puntos grises -->
    <path d="M 0,0 L 0,-120 A 120,120 0 0,1 115,34 Z" fill="#ccc" stroke="#333" stroke-width="1"/>
    <!-- H: Rayas cruzadas -->
    <path d="M 0,0 L 115,34 A 120,120 0 0,1 25,117 Z" fill="#333" stroke="#fff" stroke-width="1"/>
    <!-- I: Sólido claro -->
    <path d="M 0,0 L 25,117 A 120,120 0 0,1 -95,73 Z" fill="#999" stroke="#fff" stroke-width="1"/>
    <!-- F: Cuadros oscuros -->
    <path d="M 0,0 L -95,73 A 120,120 0 0,1 -60,-104 Z" fill="#666" stroke="#fff" stroke-width="1"/>
    <!-- E: Sólido muy claro -->
    <path d="M 0,0 L -60,-104 A 120,120 0 0,1 0,-120 Z" fill="#f4f4f4" stroke="#333" stroke-width="1"/>
  </g>
  
  <text x="240" y="30" font-family="sans-serif" font-size="12" font-weight="bold">Candidato G</text>
  <line x1="240" y1="35" x2="220" y2="60" stroke="black"/>
  
  <text x="320" y="160" font-family="sans-serif" font-size="12" font-weight="bold">Candidato H</text>
  <line x1="315" y1="160" x2="280" y2="180" stroke="black"/>

  <text x="50" y="240" font-family="sans-serif" font-size="12" font-weight="bold">Candidato I</text>
  <line x1="120" y1="235" x2="160" y2="210" stroke="black"/>
  
  <text x="50" y="80" font-family="sans-serif" font-size="12" font-weight="bold">Candidato F</text>
  <line x1="120" y1="80" x2="140" y2="120" stroke="black"/>
  
  <text x="140" y="30" font-family="sans-serif" font-size="12" font-weight="bold">Candidato E</text>
  <line x1="160" y1="35" x2="180" y2="50" stroke="black"/>
</svg>`;

fs.writeFileSync(path.join(dir, 'mat6_q16.svg'), q16_svg);
fs.writeFileSync(path.join(dir, 'mat6_q47.svg'), q47_svg);
fs.writeFileSync(path.join(dir, 'mat6_q49.svg'), q49_svg);
fs.writeFileSync(path.join(dir, 'mat6_q50.svg'), q50_svg);

console.log("SVGs creados successfully.");
