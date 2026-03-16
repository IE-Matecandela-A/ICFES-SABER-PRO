const fs = require('fs');
const path = require('path');
const outputDir = path.resolve(__dirname, '../img/preguntas');

function writeSVG(filename, content) {
    fs.writeFileSync(path.join(outputDir, filename), content);
    console.log(`✅ Generado: ${filename}`);
}

// Q36: Rampa
const svg36 = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="white" />
    
    <g transform="translate(50, 20)">
        <!-- Wall -->
        <rect x="0" y="20" width="30" height="120" fill="url(#hatch)" stroke="black" stroke-width="2" />
        
        <!-- Hatches pattern for the wall -->
        <defs>
            <pattern id="hatch" width="8" height="8" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="8" stroke="black" stroke-width="1" />
            </pattern>
        </defs>

        <!-- Floor -->
        <line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2" />
        
        <!-- Ramp Line (Hypotenuse) -->
        <line x1="30" y1="20" x2="280" y2="140" stroke="black" stroke-width="3" />
        
        <!-- Double lines for the ramp thickness -->
        <line x1="32" y1="18" x2="282" y2="138" stroke="black" stroke-width="1" />

        <!-- Column 'h' at middle -->
        <!-- Center between 30 and 280 is 155. Let's make it proportional. 2m out of 4m is middle. -->
        <!-- Distance from wall is 280-30 = 250. Middle is 155. -->
        <line x1="155" y1="80" x2="155" y2="140" stroke="black" stroke-width="2" />
        
        <!-- Height h label -->
        <text x="165" y="115" font-family="Arial" font-size="14" font-weight="bold">h</text>

        <!-- Overall width label (4m) from wall to end -->
        <line x1="30" y1="160" x2="280" y2="160" stroke="black" stroke-width="1.5" />
        <line x1="30" y1="155" x2="30" y2="165" stroke="black" stroke-width="1.5" />
        <line x1="280" y1="155" x2="280" y2="165" stroke="black" stroke-width="1.5" />
        <text x="155" y="175" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">4 m</text>

        <!-- Specific width label (2m) from column to end -->
        <line x1="155" y1="145" x2="280" y2="145" stroke="black" stroke-width="1.5" />
        <line x1="155" y1="140" x2="155" y2="150" stroke="black" stroke-width="1.5" />
        <line x1="280" y1="140" x2="280" y2="150" stroke="black" stroke-width="1.5" />
        <text x="217" y="142" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle" fill="black">2 m</text>
        
        <!-- Specific width from wall to column (2m) implied or explicitly labeled in original image? The image has 2m labeled from wall to column, wait... let me check again.
        Image shows "2 m" bracket is from wall (x=30) to column (x=155). Let's fix that! -->
    </g>
</svg>`;

// Correcting the 2m label position based on closer inspection: The bracket for 2m is between the column and the wall.
const svg36_fixed = `<svg width="400" height="200" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="200" fill="white" />
    <g transform="translate(50, 20)">
        <defs>
            <pattern id="hatch" width="4" height="4" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="0" y2="4" stroke="black" stroke-width="1" />
            </pattern>
        </defs>
        <rect x="0" y="20" width="30" height="120" fill="url(#hatch)" stroke="black" stroke-width="2" />
        <line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2" />
        <line x1="30" y1="20" x2="280" y2="140" stroke="black" stroke-width="3" />
        <line x1="30" y1="18" x2="282" y2="138" stroke="black" stroke-width="1" />

        <line x1="155" y1="80" x2="155" y2="140" stroke="black" stroke-width="2" />
        <text x="165" y="115" font-family="Arial" font-size="14" font-weight="bold">h</text>
        
        <text x="-10" y="85" font-family="Arial" font-size="14" font-weight="bold" text-anchor="end">3 m</text>

        <line x1="30" y1="165" x2="280" y2="165" stroke="black" stroke-width="1.5" />
        <line x1="30" y1="160" x2="30" y2="170" stroke="black" stroke-width="1.5" />
        <line x1="280" y1="160" x2="280" y2="170" stroke="black" stroke-width="1.5" />
        <text x="155" y="180" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle">4 m</text>

        <line x1="30" y1="150" x2="155" y2="150" stroke="black" stroke-width="1.5" />
        <line x1="30" y1="145" x2="30" y2="155" stroke="black" stroke-width="1.5" />
        <line x1="155" y1="145" x2="155" y2="155" stroke="black" stroke-width="1.5" />
        <text x="92" y="145" font-family="Arial" font-size="12" font-weight="bold" text-anchor="middle">2 m</text>
    </g>
</svg>`;

writeSVG('mat6_q36_rampa.svg', svg36_fixed);
