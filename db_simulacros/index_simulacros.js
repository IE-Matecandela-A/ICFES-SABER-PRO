/**
 * BASE DE DATOS NATIVA DE SIMULACROS
 * 
 * Este archivo actúa como el "catálogo" principal.
 * Para añadir un nuevo simulacro, simplemente agrégalo a la lista de abajo
 * y asegúrate de que el archivo .js exista en la ruta indicada.
 */

const NATIVE_EXAMS_DB = {
    categorias: {
        "matematicas": "Matemáticas",
        "lectura": "Lectura Crítica",
        "sociales": "Sociales y Ciudadanas",
        "naturales": "Ciencias Naturales",
        "ingles": "Inglés",
        "simulacro_completo": "Simulacro Completo (Todas las áreas)"
    },

    // Lista de exámenes disponibles
    examenes: [
        {
            id: "mat_2024_oficial",
            titulo: "Simulacro Matemáticas 2024",
            descripcion: "Examen de prueba enfocado en álgebra, cálculo y geometría espacial.",
            area: "matematicas",
            preguntas_count: 25,
            tiempo_minutos: 45,
            dificultad: "Media",
            archivo_js: "db_simulacros/matematicas/mat_2024_oficial.js" // Ruta al archivo de datos
        },
        {
            id: "mat_sim_01",
            titulo: "Simulacro Matemáticas 01 (JSON)",
            descripcion: "Examen interactivo con gráficas adaptado de un JSON.",
            area: "matematicas",
            dificultad: "Media",
            archivo_js: "db_simulacros/matematicas/mat_simulacro_01.js"
        },
        {
            id: "mat_sim_02",
            titulo: "Simulacro Matemáticas 02 (JSON)",
            descripcion: "Segundo examen interactivo con gráficas, probabilidad, geometría y álgebra.",
            area: "matematicas",
            preguntas_count: 20,
            tiempo_minutos: 40,
            dificultad: "Media-Alta",
            archivo_js: "db_simulacros/matematicas/mat_simulacro_02.js"
        },
        {
            id: "mat_sim_03",
            titulo: "Simulacro Matemáticas 03 (JSON)",
            descripcion: "Tercer examen interactivo con explicaciones detalladas y gráficas.",
            area: "matematicas",
            preguntas_count: 20,
            tiempo_minutos: 40,
            dificultad: "Alta",
            archivo_js: "db_simulacros/matematicas/mat_simulacro_03.js"
        },
        {
            id: "mat_sim_04",
            titulo: "Simulacro Matemáticas 04 (JSON)",
            descripcion: "Cuarto examen interactivo con gráficas y análisis de datos.",
            area: "matematicas",
            preguntas_count: 20,
            tiempo_minutos: 40,
            dificultad: "Media-Alta",
            archivo_js: "db_simulacros/matematicas/mat_simulacro_04.js"
        },
        {
            id: "nat_sim_01",
            titulo: "Simulacro Ciencias Naturales 01 (JSON)",
            descripcion: "Primer examen interactivo de ciencias naturales adaptado con gráficas y explicaciones.",
            area: "naturales",
            preguntas_count: 30,
            tiempo_minutos: 60,
            dificultad: "Media-Alta",
            archivo_js: "db_simulacros/naturales/nat_simulacro_01.js"
        },
        {
            id: "nat_sim_02",
            titulo: "Simulacro Ciencias Naturales 02 (JSON)",
            descripcion: "Segundo examen interactivo enfocado en explicación de fenómenos biológicos y físicos.",
            area: "naturales",
            preguntas_count: 30,
            tiempo_minutos: 60,
            dificultad: "Media-Alta",
            archivo_js: "db_simulacros/naturales/nat_simulacro_02.js"
        },
        {
            id: "lec_sim_01",
            titulo: "Simulacro Lectura Crítica 01 (JSON)",
            descripcion: "Primer examen interactivo de lectura crítica.",
            area: "lectura",
            preguntas_count: 30,
            tiempo_minutos: 60,
            dificultad: "Media-Alta",
            archivo_js: "db_simulacros/lectura/lec_simulacro_01.js"
        },
        {
            id: 'soc_sim_01',
            titulo: 'Simulacro Sociales y Ciudadanas 1',
            descripcion: 'Primer simulacro enfocado en competencias ciudadanas, historia, geografía y economía.',
            area: 'sociales',
            preguntas: 41,
            tiempoTotal: 82, // 41 preguntas * 2 mins
            archivo_js: 'db_simulacros/sociales/soc_simulacro_01.js',
            fechaModificacion: '2024-03-04'
        },
        {
            id: 'ing_sim_01',
            titulo: 'Simulacro Inglés 1',
            descripcion: 'Primer simulacro de prueba de inglés, enfocado en gramática, vocabulario y comprensión de lectura.',
            area: 'ingles',
            preguntas: 30,
            tiempoTotal: 60,
            archivo_js: 'db_simulacros/ingles/ing_simulacro_01.js',
            fechaModificacion: '2024-03-04'
        }
    ]
};

// Hacer global la base de datos para que app.js pueda leerla
window.SABER_DB = NATIVE_EXAMS_DB;
