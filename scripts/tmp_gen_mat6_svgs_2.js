const fs = require('fs');
const path = require('path');

const outputDir = path.resolve(__dirname, '../img/preguntas');

function writeSVG(filename, content) {
    fs.writeFileSync(path.join(outputDir, filename), content);
    console.log(`✅ Generado: ${filename}`);
}

// Q31: Venn Diagram
const svg31 = `<svg width="400" height="300" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="white" />
    
    <!-- Circles -->
    <!-- Carro privado (Top Left) -->
    <circle cx="150" cy="120" r="70" fill="none" stroke="black" stroke-width="2" />
    <!-- Bicicleta (Top Right) -->
    <circle cx="250" cy="120" r="70" fill="none" stroke="black" stroke-width="2" />
    <!-- Transporte publico (Bottom Center) -->
    <circle cx="200" cy="190" r="70" fill="none" stroke="black" stroke-width="2" />

    <!-- Labels -->
    <text x="90" y="55" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">Carro</text>
    <text x="90" y="70" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">privado</text>

    <text x="310" y="60" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">Bicicleta</text>

    <text x="270" y="250" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">Transporte</text>
    <text x="270" y="265" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">público</text>

    <!-- Numbers -->
    <!-- Carro Only -->
    <text x="120" y="110" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">35</text>
    <!-- Bicicleta Only -->
    <text x="280" y="110" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">50</text>
    <!-- Publico Only -->
    <text x="200" y="235" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">10</text>

    <!-- Carro + Bici -->
    <text x="200" y="90" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">20</text>
    <!-- Carro + Publico -->
    <text x="150" y="170" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">15</text>
    <!-- Bici + Publico -->
    <text x="250" y="170" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">25</text>
    
    <!-- Center (All three) -->
    <text x="200" y="145" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">5</text>

    <!-- Figura Label -->
    <text x="350" y="260" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">Figura</text>
</svg>`;
writeSVG('mat6_q31_venn.svg', svg31);

// Q33: Square EFGH with inscribed square PQRS
const svg33 = `<svg width="350" height="350" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
    <rect width="350" height="350" fill="white" />
    
    <g transform="translate(50, 50)">
        <!-- Points: E(0,0), F(250,0), G(250,250), H(0,250) -->
        <!-- P(80,0), Q(250,80), R(170,250), S(0,170) -->
        <!-- Distance x = 80, y = 170. Total side = 250 -->
        
        <!-- Outer Square -->
        <rect x="0" y="0" width="250" height="250" fill="none" stroke="black" stroke-width="2" />
        
        <!-- Inner Square Polygon -->
        <polygon points="80,0 250,80 170,250 0,170" fill="none" stroke="black" stroke-width="2" />
        
        <!-- Shaded triangles -->
        <polygon points="0,0 80,0 0,170" fill="#ddd" stroke="black" stroke-width="2" />
        <polygon points="80,0 250,0 250,80" fill="#ddd" stroke="black" stroke-width="2" />
        <polygon points="250,80 250,250 170,250" fill="#ddd" stroke="black" stroke-width="2" />
        <polygon points="0,170 170,250 0,250" fill="#ddd" stroke="black" stroke-width="2" />
        
        <!-- Labels E,F,G,H -->
        <text x="-10" y="-10" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">E</text>
        <text x="260" y="-10" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">F</text>
        <text x="260" y="265" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">G</text>
        <text x="-10" y="265" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">H</text>

        <!-- Labels P,Q,R,S -->
        <text x="75" y="-10" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">P</text>
        <text x="260" y="85" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">Q</text>
        <text x="165" y="265" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">R</text>
        <text x="-15" y="175" font-family="Arial" font-size="14" font-weight="bold" font-style="italic">S</text>

        <!-- Length labels x, y -->
        <!-- Top edge E-P is x, P-F is y -->
        <text x="40" y="-5" font-family="Arial" font-size="12" font-style="italic" text-anchor="middle">x</text>
        <text x="165" y="-5" font-family="Arial" font-size="12" font-style="italic" text-anchor="middle">y</text>
        
        <!-- Right edge F-Q is x, Q-G is y -->
        <text x="260" y="40" font-family="Arial" font-size="12" font-style="italic" text-anchor="start">x</text>
        <text x="260" y="165" font-family="Arial" font-size="12" font-style="italic" text-anchor="start">y</text>

        <!-- Bottom edge G-R is x, R-H is y -->
        <!-- Wait, image has H-R as y, R-G as x -->
        <text x="210" y="270" font-family="Arial" font-size="12" font-style="italic" text-anchor="middle">x</text>
        <text x="85" y="270" font-family="Arial" font-size="12" font-style="italic" text-anchor="middle">y</text>

        <!-- Left edge H-S is x, S-E is y -->
        <!-- Wait, image has E-S is y, S-H is x -->
        <text x="-15" y="210" font-family="Arial" font-size="12" font-style="italic" text-anchor="end">x</text>
        <text x="-15" y="85" font-family="Arial" font-size="12" font-style="italic" text-anchor="end">y</text>
        
        <!-- x + y labels -->
        <text x="125" y="-30" font-family="Arial" font-size="12" font-weight="bold" font-style="italic" text-anchor="middle">x + y</text>
        <text x="290" y="125" font-family="Arial" font-size="12" font-weight="bold" font-style="italic" text-anchor="start">x + y</text>
    </g>
</svg>`;
writeSVG('mat6_q33_cuadrados.svg', svg33);
