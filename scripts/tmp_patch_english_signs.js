const fs = require('fs');

// Patch ing_simulacro_01.js - replace grafica objects with imagen refs
const file1 = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/ingles/ing_simulacro_01.js';
let data1 = fs.readFileSync(file1, 'utf8');

// Map of replacements: match the grafica block by context and replace with imagen
const replacements1 = [
    {
        old: `        "tipo": "grafica",
        "grafica": {
            "tipo": "texto_discontinuo",
            "titulo": "Aviso público (Sign)",
            "datos": {
                "descripcion": "Un letrero iluminado típico de cabina con el icono de un cinturón de seguridad abrochado.",
                "texto": "PLEASE KEEP YOUR SEATBELT FASTENED WHILE SEATED"
            },
            "icono": "✈️"
        },`,
        new: `        "tipo": "grafica",
        "imagen": "img/preguntas/ing1_sign_q06.svg",`
    },
    {
        old: `        "tipo": "grafica",
        "grafica": {
            "tipo": "texto_discontinuo",
            "titulo": "Aviso público (Sign)",
            "datos": {
                "descripcion": "Un cartel pegado en una puerta de madera que pide silencio por un examen.",
                "texto": "SILENCE PLEASE. EXAM IN PROGRESS"
            },
            "icono": "🤫"
        },`,
        new: `        "tipo": "grafica",
        "imagen": "img/preguntas/ing1_sign_q07.svg",`
    },
    {
        old: `        "tipo": "grafica",
        "grafica": {
            "tipo": "texto_discontinuo",
            "titulo": "Aviso público (Sign)",
            "datos": {
                "descripcion": "Aviso en una valla cerca de una jaula pidiendo no alimentar a los animales.",
                "texto": "DO NOT FEED THE ANIMALS. THEY HAVE A SPECIAL DIET"
            },
            "icono": "🦁"
        },`,
        new: `        "tipo": "grafica",
        "imagen": "img/preguntas/ing1_sign_q08.svg",`
    },
    {
        old: `        "tipo": "grafica",
        "grafica": {
            "tipo": "texto_discontinuo",
            "titulo": "Aviso público (Sign)",
            "datos": {
                "descripcion": "Letrero amarillo de advertencia clavado en la arena frente al mar.",
                "texto": "CAUTION: DEEP WATER. NO SWIMMING BEYOND THIS POINT"
            },
            "icono": "⚠️"
        },`,
        new: `        "tipo": "grafica",
        "imagen": "img/preguntas/ing1_sign_q09.svg",`
    },
    {
        old: `        "tipo": "grafica",
        "grafica": {
            "tipo": "texto_discontinuo",
            "titulo": "Aviso público (Sign)",
            "datos": {
                "descripcion": "Un gran cartel rojo de descuentos colgado en el escaparate de una tienda comercial.",
                "texto": "SUMMER SALE! 50% OFF ALL BOOTS AND SNEAKERS"
            },
            "icono": "🛍️"
        },`,
        new: `        "tipo": "grafica",
        "imagen": "img/preguntas/ing1_sign_q10.svg",`
    },
];

let count1 = 0;
replacements1.forEach(r => {
    if (data1.includes(r.old)) {
        data1 = data1.replace(r.old, r.new);
        count1++;
        console.log('Replaced block in sim01');
    } else {
        console.warn('Could not find block in sim01:', r.old.substring(0, 60));
    }
});
fs.writeFileSync(file1, data1, 'utf8');
console.log(`ing_simulacro_01.js: ${count1} blocks replaced.`);

// Patch ing_simulacro_02.js
const file2 = 'c:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/db_simulacros/ingles/ing_simulacro_02.js';
let data2 = fs.readFileSync(file2, 'utf8');

const replacements2 = [
    {
        old: `    "tipo": "grafica",
    "justificacion": "La Parte 2 evalúa la ubicación lógica de avisos en la vida real. La prohibición de usar flash en fotografías ('Do not use flash photography') es común en los museos ('In a museum'), ya que la luz intensa del flash puede degradar y dañar los pigmentos de las obras de arte históricas.",
    "grafica": {
      "tipo": "texto_discontinuo",
      "datos": {
        "texto": "PLEASE DO NOT USE FLASH PHOTOGRAPHY"
      },
      "icono": "📸"
    }`,
        new: `    "tipo": "grafica",
    "imagen": "img/preguntas/ing2_sign_q06.svg",
    "justificacion": "La Parte 2 evalúa la ubicación lógica de avisos en la vida real. La prohibición de usar flash en fotografías ('Do not use flash photography') es común en los museos ('In a museum'), ya que la luz intensa del flash puede degradar y dañar los pigmentos de las obras de arte históricas."`
    },
    {
        old: `    "tipo": "grafica",
    "justificacion": "Las palabras clave son 'Passengers' (pasajeros) y, de manera definitiva, 'Boarding passes' (pases de abordar). Un pase de abordar es el documento específico y obligatorio que se exige en los controles de seguridad y puertas de embarque de un aeropuerto ('At an airport') antes de subir al avión.",
    "grafica": {
      "tipo": "texto_discontinuo",
      "datos": {
        "texto": "PASSENGERS MUST SHOW THEIR BOARDING PASSES BEFORE ENTERING"
      },
      "icono": "✈️"
    }`,
        new: `    "tipo": "grafica",
    "imagen": "img/preguntas/ing2_sign_q07.svg",
    "justificacion": "Las palabras clave son 'Passengers' (pasajeros) y, de manera definitiva, 'Boarding passes' (pases de abordar). Un pase de abordar es el documento específico y obligatorio que se exige en los controles de seguridad y puertas de embarque de un aeropuerto ('At an airport') antes de subir al avión."`
    },
    {
        old: `    "tipo": "grafica",
    "justificacion": "Este es un aviso legal de salubridad muy común. Va dirigido a los empleados ('Employees') y les obliga a lavarse las manos ('Wash their hands') antes de volver al trabajo. Es un estándar obligatorio para quienes manipulan alimentos, por lo que se encuentra típicamente en los baños o cocinas de los restaurantes ('In a restaurant bathroom').",
    "grafica": {
      "tipo": "texto_discontinuo",
      "datos": {
        "texto": "EMPLOYEES MUST WASH THEIR HANDS BEFORE RETURNING TO WORK"
      },
      "icono": "🧼"
    }`,
        new: `    "tipo": "grafica",
    "imagen": "img/preguntas/ing2_sign_q08.svg",
    "justificacion": "Este es un aviso legal de salubridad muy común. Va dirigido a los empleados ('Employees') y les obliga a lavarse las manos ('Wash their hands') antes de volver al trabajo. Es un estándar obligatorio para quienes manipulan alimentos, por lo que se encuentra típicamente en los baños o cocinas de los restaurantes ('In a restaurant bathroom')."`
    },
    {
        old: `    "tipo": "grafica",
    "justificacion": "La palabra 'Luggage' significa equipaje (maletas). La advertencia de no dejar el equipaje desatendido ('unattended') es una medida de seguridad contra robos o terrorismo típica de grandes terminales de transporte de pasajeros, como una estación de tren ('At a train station') o un aeropuerto.",
    "grafica": {
      "tipo": "texto_discontinuo",
      "datos": {
        "texto": "DO NOT LEAVE YOUR LUGGAGE UNATTENDED AT ANY TIME"
      },
      "icono": "🧳"
    }`,
        new: `    "tipo": "grafica",
    "imagen": "img/preguntas/ing2_sign_q09.svg",
    "justificacion": "La palabra 'Luggage' significa equipaje (maletas). La advertencia de no dejar el equipaje desatendido ('unattended') es una medida de seguridad contra robos o terrorismo típica de grandes terminales de transporte de pasajeros, como una estación de tren ('At a train station') o un aeropuerto."`
    },
    {
        old: `    "tipo": "grafica",
    "justificacion": "La expresión 'Out of order' significa 'Fuera de servicio' (dañado). La instrucción complementaria es 'Please use the stairs' (Por favor, use las escaleras). La única máquina en las opciones cuya alternativa directa de movilidad son las escaleras es un ascensor o elevador ('On an elevator').",
    "grafica": {
      "tipo": "texto_discontinuo",
      "datos": {
        "texto": "OUT OF ORDER. PLEASE USE THE STAIRS"
      },
      "icono": "🚧"
    }`,
        new: `    "tipo": "grafica",
    "imagen": "img/preguntas/ing2_sign_q10.svg",
    "justificacion": "La expresión 'Out of order' significa 'Fuera de servicio' (dañado). La instrucción complementaria es 'Please use the stairs' (Por favor, use las escaleras). La única máquina en las opciones cuya alternativa directa de movilidad son las escaleras es un ascensor o elevador ('On an elevator')."`
    }
];

let count2 = 0;
replacements2.forEach(r => {
    if (data2.includes(r.old)) {
        data2 = data2.replace(r.old, r.new);
        count2++;
        console.log('Replaced in sim02');
    } else {
        console.warn('Block not found in sim02:', r.old.substring(0, 70));
    }
});
fs.writeFileSync(file2, data2, 'utf8');
console.log(`ing_simulacro_02.js: ${count2} blocks replaced.`);
