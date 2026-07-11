/**
 * clasificar_mate.js
 * Carga las 327 preguntas de matemáticas (db_simulacros/matematicas/*.js),
 * las clasifica por TEMA contra los 23 módulos de estudio (MATH_MODULES_CONFIG)
 * usando un clasificador por palabras clave, y reporta:
 *   - conteo por módulo
 *   - preguntas ambiguas (coinciden con varios módulos)
 *   - preguntas SIN tema en los módulos (no coinciden con ninguno) -> a revisar
 *
 * Uso:  node scripts/clasificar_mate.js
 */
const fs = require('fs');
const PATH = 'db_simulacros/matematicas';

// --- 1. Cargar preguntas ---
global.window = { NATIVE_EXAM_DATA: [] };
const files = fs.readdirSync(PATH).filter(f => f.endsWith('.js')).sort();
for (const f of files) {
  try { eval(fs.readFileSync(PATH + '/' + f, 'utf8')); }
  catch (e) { console.error('ERR cargando', f, e.message); }
}
const preguntas = window.NATIVE_EXAM_DATA;

// --- 2. Normalización (minúsculas + sin tildes) ---
const norm = s => (s || '')
  .toString().toLowerCase()
  .normalize('NFD').replace(/[̀-ͯ]/g, '');

function textoCompleto(q) {
  const ops = (q.opciones || []).map(o => o.texto).join(' ');
  return norm([q.texto, ops, q.justificacion, q.grafica && q.grafica.titulo].filter(Boolean).join('  '));
}

// --- 3. Definición de módulos y palabras clave ---
// peso 2 = frase específica; peso 1 = término claro; peso 0.5 = término genérico/ambiguo
const MODULOS = [
  ['Módulo 1: Lectura de Gráficos', [['segun la grafica',2],['segun el grafico',2],['segun la tabla',2],['diagrama de barras',2],['grafico de barras',2],['grafica de barras',2],['diagrama circular',2],['grafica circular',2],['tabla de contingencia',2],['histograma',2],['pictograma',2],['torta',1],['grafica',0.5],['grafico',0.5]]],
  ['Módulo 2: Aritmética: Fracciones', [['fraccion',1],['fracciones',1],['numerador',2],['denominador',2],['numero mixto',2],['racional',1]]],
  ['Módulo 3: Aritmética: Porcentajes', [['porcentaje',1],['por ciento',2],['descuento',1],['iva',1],['interes',1],['recargo',2],['rebaja',1],['aumento del',2],['incremento del',2],['%',1]]],
  ['Módulo 4: Proporcionalidad y Regla de Tres', [['regla de tres',2],['directamente proporcional',2],['inversamente proporcional',2],['proporcional',1],['proporcion',1],['a razon de',2],['por cada',1]]],
  ['Módulo 5: Escalas y Planos', [['a escala',2],['escala',1],['plano',1],['maqueta',2],['cartograf',2],['mapa',0.5]]],
  ['Módulo 6: Geometría: Perímetros y Áreas', [['perimetro',2],['area del',1],['area de la',1],['area de un',1],['metros cuadrados',2],['superficie',1],['contorno',1],['cm2',1],['m2',1]]],
  ['Módulo 7: Geometría: Áreas Sombreadas', [['region sombreada',2],['area sombreada',2],['parte sombreada',2],['sombreada',1],['sombreado',1],['area compuesta',2]]],
  ['Módulo 8: Geometría: Teorema de Pitágoras', [['pitagoras',2],['hipotenusa',2],['cateto',2],['triangulo rectangulo',2]]],
  ['Módulo 9: Geometría Espacial: Volúmenes', [['volumen',2],['capacidad',1],['litros',1],['prisma',2],['cilindro',1],['cm3',2],['m3',2],['metros cubicos',2],['cubica',1]]],
  ['Módulo 10: Plano Cartesiano y Distancia', [['plano cartesiano',2],['coordenada',1],['coordenadas',1],['distancia entre',2],['pendiente',2],['par ordenado',2],['eje x',1],['eje y',1]]],
  ['Módulo 11: Semejanza y Teorema de Tales', [['teorema de tales',2],['semejanza',2],['semejantes',2],['semejante',1],['tales',1],['proyecta una sombra',2],['sombra de',1]]],
  ['Módulo 12: Álgebra: Ecuaciones Lineales', [['ecuacion',1],['despejar',2],['despeje',2],['primer grado',2],['incognita',1],['plantear la ecuacion',2]]],
  ['Módulo 13: Álgebra: Sistemas 2x2', [['sistema de ecuaciones',2],['dos ecuaciones',2],['dos incognitas',2],['ecuaciones simultaneas',2],['sistema 2x2',2]]],
  ['Módulo 14: Álgebra: Inecuaciones', [['inecuacion',2],['desigualdad',2],['mayor o igual',2],['menor o igual',2],['al menos',1],['a lo sumo',1],['intervalo solucion',2]]],
  ['Módulo 15: Sucesiones y Progresiones', [['sucesion',2],['progresion',2],['secuencia',1],['termino siguiente',2],['siguiente figura',2],['siguiente numero',2],['patron',1],['regularidad',1]]],
  ['Módulo 16: Funciones Lineales y Cuadráticas', [['funcion lineal',2],['funcion cuadratica',2],['funcion afin',2],['parabola',2],['vertice',2],['f(x)',2],['grafica de la funcion',2],['recta de ecuacion',2]]],
  ['Módulo 17: Funciones Exponenciales', [['exponencial',2],['crecimiento exponencial',2],['decaimiento',2],['se duplica',2],['se triplica',2],['interes compuesto',2]]],
  ['Módulo 18: Trigonometría: Ley del Seno/Coseno', [['trigonom',2],['ley del seno',2],['ley del coseno',2],['razones trigonometricas',2],['seno',1],['coseno',1],['tangente',1],['angulo de elevacion',2],['angulo de depresion',2]]],
  ['Módulo 19: Estadística: Tendencia Central', [['media aritmetica',2],['tendencia central',2],['mediana',2],['moda',1],['promedio',1],['dato atipico',2],['bimodal',2]]],
  ['Módulo 20: Estadística: Medidas de Dispersión', [['desviacion estandar',2],['varianza',2],['rango de los datos',2],['dispersion',2],['desviacion media',2]]],
  ['Módulo 21: Técnicas de Conteo', [['cuantas formas',2],['de cuantas maneras',2],['permutacion',2],['combinaciones',2],['combinacion',1],['factorial',2],['principio multiplicativo',2],['arreglos',1]]],
  ['Módulo 22: Probabilidad Clásica y Compuesta', [['probabilidad',2],['laplace',2],['al azar',2],['con reemplazo',2],['sin reemplazo',2],['casos favorables',2],['aleatorio',1],['dado',0.5],['moneda',1],['evento',1]]],
  ['Módulo 23: Falacias y Razonamiento Crítico', [['falacia',2],['sesgo',2],['enganosa',2],['enganoso',2],['causalidad',2],['correlacion',2],['induce a error',2],['manipula',2]]],
];

// --- 4. Clasificar ---
const conteo = {}; MODULOS.forEach(m => conteo[m[0]] = 0);
const sinTema = [];      // 0 coincidencias
const ambiguas = [];     // >=2 módulos con score alto
const detalle = [];

for (const q of preguntas) {
  const t = textoCompleto(q);
  const scores = MODULOS.map(([nombre, kws]) => {
    let s = 0; const hits = [];
    for (const [kw, w] of kws) { if (t.includes(kw)) { s += w; hits.push(kw); } }
    return { nombre, s, hits };
  }).filter(x => x.s > 0).sort((a, b) => b.s - a.s);

  const fila = {
    id: q.id,
    competencia: q.competencia, componente: q.componente, tipo: q.tipo,
    texto: (q.texto || '').slice(0, 110),
    top: scores[0] ? scores[0].nombre : null,
    score: scores[0] ? scores[0].s : 0,
    candidatos: scores.slice(0, 3).map(x => `${x.nombre} (${x.s})`),
  };
  detalle.push(fila);

  if (scores.length === 0) { sinTema.push(fila); continue; }
  conteo[scores[0].nombre]++;
  // ambigua: segundo candidato con score >=2 y cercano al primero
  if (scores[1] && scores[1].s >= 2 && (scores[0].s - scores[1].s) <= 1) ambiguas.push(fila);
}

// --- 5. Reporte ---
let out = '';
const P = s => { out += s + '\n'; console.log(s); };

P('===== CLASIFICACIÓN DE PREGUNTAS DE MATEMÁTICAS POR TEMA =====');
P('Total de preguntas analizadas: ' + preguntas.length);
P('Clasificadas en algún módulo: ' + (preguntas.length - sinTema.length));
P('SIN tema en los módulos (revisar): ' + sinTema.length);
P('Ambiguas (encajan en >1 módulo): ' + ambiguas.length);
P('');
P('----- Conteo por módulo (tema) -----');
MODULOS.forEach(m => P(String(conteo[m[0]]).padStart(4) + '  ' + m[0]));
P('');
P('----- PREGUNTAS SIN TEMA EN LOS MÓDULOS -----');
if (!sinTema.length) P('(ninguna)');
sinTema.forEach(f => P(`• [${f.id}] comp=${f.competencia}/${f.componente}\n    ${f.texto}`));
P('');
P('----- PREGUNTAS AMBIGUAS (top candidatos) -----');
ambiguas.slice(0, 60).forEach(f => P(`• [${f.id}] -> ${f.candidatos.join('  |  ')}`));

fs.writeFileSync('scripts/clasificacion_mate.txt', out);
fs.writeFileSync('scripts/clasificacion_mate.json', JSON.stringify({ conteo, sinTema, ambiguas, detalle }, null, 2));
console.log('\n[Reporte guardado en scripts/clasificacion_mate.txt y .json]');
