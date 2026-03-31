(function () {
  const React = window.React;
  if (!React) return;
  const {
    useState,
    useEffect,
    useMemo,
    useCallback,
    useRef
  } = React;

  // Core Icon mapping component
  const Icon = ({
    name,
    className = "",
    style = {}
  }) => React.createElement("span", {
    className: `material-icons-round ${className}`,
    style: {
      fontSize: 'inherit',
      verticalAlign: 'middle',
      ...style
    }
  }, name);

  // Provide localized variables replacing lucide-react imports so React object references work
  const TestTube = props => React.createElement(Icon, {
    name: "science",
    className: props.className || "",
    style: props.style || {}
  });
  const Microscope = props => React.createElement(Icon, {
    name: "biotech",
    className: props.className || "",
    style: props.style || {}
  });
  const Atom = props => React.createElement(Icon, {
    name: "memory",
    className: props.className || "",
    style: props.style || {}
  });
  const Bug = props => React.createElement(Icon, {
    name: "bug_report",
    className: props.className || "",
    style: props.style || {}
  });
  const Activity = props => React.createElement(Icon, {
    name: "show_chart",
    className: props.className || "",
    style: props.style || {}
  });
  const CheckCircle = props => React.createElement(Icon, {
    name: "check_circle",
    className: props.className || "",
    style: props.style || {}
  });
  const ArrowRight = props => React.createElement(Icon, {
    name: "arrow_forward",
    className: props.className || "",
    style: props.style || {}
  });
  const Lightbulb = props => React.createElement(Icon, {
    name: "lightbulb",
    className: props.className || "",
    style: props.style || {}
  });
  const Award = props => React.createElement(Icon, {
    name: "emoji_events",
    className: props.className || "",
    style: props.style || {}
  });
  const RefreshCw = props => React.createElement(Icon, {
    name: "refresh",
    className: props.className || "",
    style: props.style || {}
  });
  const BookOpen = props => React.createElement(Icon, {
    name: "menu_book",
    className: props.className || "",
    style: props.style || {}
  });
  const Target = props => React.createElement(Icon, {
    name: "my_location",
    className: props.className || "",
    style: props.style || {}
  });
  const Sparkles = props => React.createElement(Icon, {
    name: "auto_awesome",
    className: props.className || "",
    style: props.style || {}
  });
  const ChevronRight = props => React.createElement(Icon, {
    name: "chevron_right",
    className: props.className || "",
    style: props.style || {}
  });
  const Search = props => React.createElement(Icon, {
    name: "search",
    className: props.className || "",
    style: props.style || {}
  });
  const AlertTriangle = props => React.createElement(Icon, {
    name: "warning",
    className: props.className || "",
    style: props.style || {}
  });
  const Crosshair = props => React.createElement(Icon, {
    name: "gps_fixed",
    className: props.className || "",
    style: props.style || {}
  });
  const FlaskConical = props => React.createElement(Icon, {
    name: "science",
    className: props.className || "",
    style: props.style || {}
  });
  const Network = props => React.createElement(Icon, {
    name: "hub",
    className: props.className || "",
    style: props.style || {}
  });
  const Zap = props => React.createElement(Icon, {
    name: "bolt",
    className: props.className || "",
    style: props.style || {}
  });
  const GitBranch = props => React.createElement(Icon, {
    name: "alt_route",
    className: props.className || "",
    style: props.style || {}
  });
  const ShieldCheck = props => React.createElement(Icon, {
    name: "verified_user",
    className: props.className || "",
    style: props.style || {}
  });
  const Binary = props => React.createElement(Icon, {
    name: "data_object",
    className: props.className || "",
    style: props.style || {}
  });
  const Beaker = props => React.createElement(Icon, {
    name: "science",
    className: props.className || "",
    style: props.style || {}
  });
  const ZapOff = props => React.createElement(Icon, {
    name: "offline_bolt",
    className: props.className || "",
    style: props.style || {}
  });
  const Globe = props => React.createElement(Icon, {
    name: "public",
    className: props.className || "",
    style: props.style || {}
  });
  const Leaf = props => React.createElement(Icon, {
    name: "eco",
    className: props.className || "",
    style: props.style || {}
  });
  const Factory = props => React.createElement(Icon, {
    name: "factory",
    className: props.className || "",
    style: props.style || {}
  });
  const Droplets = props => React.createElement(Icon, {
    name: "water_drop",
    className: props.className || "",
    style: props.style || {}
  });
  const Wind = props => React.createElement(Icon, {
    name: "air",
    className: props.className || "",
    style: props.style || {}
  });
  const Sprout = props => React.createElement(Icon, {
    name: "eco",
    className: props.className || "",
    style: props.style || {}
  });
  const Dna = props => React.createElement(Icon, {
    name: "science",
    className: props.className || "",
    style: props.style || {}
  });
  const Waves = props => React.createElement(Icon, {
    name: "waves",
    className: props.className || "",
    style: props.style || {}
  });
  const Flame = props => React.createElement(Icon, {
    name: "local_fire_department",
    className: props.className || "",
    style: props.style || {}
  });
  const Thermometer = props => React.createElement(Icon, {
    name: "thermostat",
    className: props.className || "",
    style: props.style || {}
  });
  const TrendingUp = props => React.createElement(Icon, {
    name: "trending_up",
    className: props.className || "",
    style: props.style || {}
  });
  const BarChart2 = props => React.createElement(Icon, {
    name: "bar_chart",
    className: props.className || "",
    style: props.style || {}
  });
  const Menu = props => React.createElement(Icon, {
    name: "menu",
    className: props.className || "",
    style: props.style || {}
  });
  const Scale = props => React.createElement(Icon, {
    name: "scale",
    className: props.className || "",
    style: props.style || {}
  });
  const Brain = props => React.createElement(Icon, {
    name: "psychology",
    className: props.className || "",
    style: props.style || {}
  });
  const Layers = props => React.createElement(Icon, {
    name: "layers",
    className: props.className || "",
    style: props.style || {}
  });
  const Cpu = props => React.createElement(Icon, {
    name: "memory",
    className: props.className || "",
    style: props.style || {}
  });
  const Compass = props => React.createElement(Icon, {
    name: "explore",
    className: props.className || "",
    style: props.style || {}
  });
  const Play = props => React.createElement(Icon, {
    name: "play_arrow",
    className: props.className || "",
    style: props.style || {}
  });
  const MousePointerClick = props => React.createElement(Icon, {
    name: "touch_app",
    className: props.className || "",
    style: props.style || {}
  });
  const FileWarning = props => React.createElement(Icon, {
    name: "report",
    className: props.className || "",
    style: props.style || {}
  });
  function ModuloIndagacion() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: 12 CASOS DIDÁCTICOS
    // ==========================================

    const ejemplosEstrategia1 = [{
      titulo: "La planta y la luz",
      situacion: "Un estudiante quiere saber si el color de la luz afecta el crecimiento de una planta. Pone 3 plantas iguales bajo luz roja, azul y verde. ¿Cuáles son las variables?",
      analisis: "Para que un experimento tenga sentido, tú decides cambiar algo (Independiente) y mides qué ocurre como resultado (Dependiente). El resto debe quedar igual.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex justify-between items-center bg-cyan-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Lo que \xE9l cambia:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-cyan-700"
      }, "Independiente = Color de luz")), /*#__PURE__*/React.createElement("li", {
        className: "flex justify-between items-center bg-cyan-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Lo que \xE9l mide:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-cyan-700"
      }, "Dependiente = Crecimiento (cm)"))),
      resultado: "Indep: Color de Luz / Dep: Crecimiento."
    }, {
      titulo: "El azúcar y la temperatura",
      situacion: "En un laboratorio, disuelven 10g de azúcar en agua a 20°C, 40°C y 60°C para ver en cuál vaso se disuelve más rápido. Identifica la Variable Controlada.",
      analisis: "Las variables controladas son aquellas que el científico MANTIENE EXACTAMENTE IGUALES en todos los vasos para que el experimento sea justo y no se contamine.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-cyan-50/50 p-2 rounded border border-cyan-100"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "V. Independiente:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-slate-700"
      }, "Temperatura (20, 40, 60)")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-cyan-50/50 p-2 rounded border border-cyan-100"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "V. Controlada:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-cyan-700"
      }, "Cantidad de az\xFAcar (10g)"))),
      resultado: "Controlada: 10g de azúcar."
    }, {
      titulo: "Frecuencia Cardíaca",
      situacion: "Una gráfica muestra el 'Tiempo corriendo (min)' en el Eje X, y la 'Frecuencia Cardíaca (lpm)' en el Eje Y. ¿Cuál es la variable dependiente?",
      analisis: "REGLA UNIVERSAL DE GRÁFICAS: El Eje X (horizontal) siempre aloja a la Variable Independiente. El Eje Y (vertical) siempre aloja a la Variable Dependiente.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-cyan-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Eje X = Tiempo corriendo \u2192 V. Independiente"), /*#__PURE__*/React.createElement("li", {
        className: "text-cyan-700 font-bold border-t border-cyan-100 pt-2 mt-2"
      }, "Eje Y = Frec. Card\xEDaca \u2192 V. Dependiente")),
      resultado: "Dependiente: Frecuencia Cardíaca."
    }];
    const ejemplosEstrategia2 = [{
      titulo: "Cazando la Pregunta Correcta",
      situacion: "Observas que los osos polares tienen más grasa que los osos pardos. ¿Cuál es una buena pregunta de investigación científica?",
      analisis: "Una pregunta científica no se responde con 'Sí' o 'No'. Debe buscar la relación directa entre una Causa (Independiente) y un Efecto (Dependiente).",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-rose-50 p-2 rounded line-through text-rose-400"
      }, "\xBFLos osos polares comen mucho?"), /*#__PURE__*/React.createElement("div", {
        className: "bg-indigo-50/80 border border-indigo-200 p-2 rounded text-indigo-700 font-bold"
      }, "\xBFC\xF3mo afecta la temperatura del h\xE1bitat (Indep) al grosor de la capa de grasa (Dep) en los osos?")),
      resultado: "Debe relacionar Temperatura y Grasa."
    }, {
      titulo: "Formular la Hipótesis",
      situacion: "Basado en la pregunta anterior sobre los osos y la temperatura, redacta una hipótesis válida.",
      analisis: "La hipótesis es una predicción o respuesta tentativa a la pregunta. Debe tener el formato: 'SI [cambio en Independiente], ENTONCES [efecto en Dependiente]'.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-indigo-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "SI"), " la temperatura del h\xE1bitat es muy baja (fr\xEDo)..."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "ENTONCES"), " el oso desarrollar\xE1 una capa de grasa m\xE1s gruesa..."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "PORQUE"), " act\xFAa como aislante t\xE9rmico.")),
      resultado: "A menor temperatura, mayor grosor de grasa."
    }, {
      titulo: "Hipótesis vs Conclusión",
      situacion: "Texto: 'Creemos que el paracetamol curará el dolor de cabeza. Tras el experimento en 100 pacientes, el 90% se curó'. ¿Cuál es la hipótesis?",
      analisis: "Los estudiantes suelen confundir la hipótesis con la conclusión. La hipótesis ocurre ANTES del experimento. La conclusión ocurre DESPUÉS (basada en los datos).",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-indigo-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Antes (Hip\xF3tesis):"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-indigo-700"
      }, "\"Creemos que curar\xE1...\"")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-indigo-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Despu\xE9s (Conclusi\xF3n):"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-slate-700"
      }, "\"El 90% se cur\xF3.\""))),
      resultado: "La hipótesis es: 'Creemos que curará el dolor'."
    }];
    const ejemplosEstrategia3 = [{
      titulo: "La prueba del nuevo Abono",
      situacion: "Un granjero pone un nuevo abono 'Súper-X' a sus tomates y riega otro grupo de tomates solo con agua. ¿Para qué sirve el grupo que solo recibe agua?",
      analisis: "En todo experimento debe haber un 'Grupo Experimental' (el que recibe el tratamiento) y un 'Grupo de Control' (el que se deja normal).",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-violet-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Grupo Abono S\xFAper-X = Grupo Experimental."), /*#__PURE__*/React.createElement("li", null, "Grupo Solo Agua = Grupo de Control."), /*#__PURE__*/React.createElement("li", {
        className: "text-violet-700 font-bold"
      }, "Sin el grupo de control, si los tomates crecen mucho, no sabr\xEDa si fue por el abono o por un buen clima.")),
      resultado: "Sirve como base de comparación."
    }, {
      titulo: "El Experimento Arruinado",
      situacion: "Un alumno prueba un fertilizante. Pone la Planta A (con fertilizante) al sol, y la Planta B (sin fertilizante) en un cuarto oscuro. Ambas crecen igual. ¿Qué hizo mal?",
      analisis: "¡Rompió la regla de oro del diseño experimental! Solo se puede cambiar UNA variable a la vez (el fertilizante). Si cambia también la luz, el experimento pierde validez.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-violet-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Variable Manipulada 1:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-rose-600"
      }, "Fertilizante")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-violet-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Variable Manipulada 2:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-rose-600"
      }, "Luz Solar")), /*#__PURE__*/React.createElement("p", {
        className: "text-violet-700 font-bold text-center border-t border-violet-100 pt-2"
      }, "No sabr\xE1 cu\xE1l de las dos afect\xF3 el crecimiento.")),
      resultado: "Cambió dos variables al mismo tiempo."
    }, {
      titulo: "El Efecto Placebo",
      situacion: "Se prueba un medicamento para el insomnio. Al Grupo 1 se le da la medicina real. Al Grupo 2 se le da una pastilla de azúcar que luce igual. ¿Por qué?",
      analisis: "El cerebro humano puede curarse solo por creer que está recibiendo medicina. La pastilla de azúcar (Placebo) aísla el efecto psicológico del efecto químico real.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-violet-50/50 p-3 rounded text-center"
      }, /*#__PURE__*/React.createElement("li", null, "Si G1 (Medicina) se cura 80%..."), /*#__PURE__*/React.createElement("li", null, "Y G2 (Az\xFAcar) se cura 80%..."), /*#__PURE__*/React.createElement("li", {
        className: "text-violet-700 font-bold"
      }, "Conclusi\xF3n: La medicina no sirve, fue todo psicol\xF3gico.")),
      resultado: "Para medir el efecto real del químico aislando la mente."
    }];
    const ejemplosEstrategia4 = [{
      titulo: "La enzima y el calor",
      situacion: "Una gráfica muestra que una enzima trabaja muy rápido a 20°C y a 30°C, pero a 40°C su actividad cae a cero. El alumno concluye: 'A mayor temperatura, la enzima siempre es más lenta'.",
      analisis: "La conclusión debe limitarse EXACTAMENTE a lo que muestran los datos, sin generalizar ciegamente.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-sky-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "De 20 a 30\xB0C: La actividad SUBE (es m\xE1s r\xE1pida)."), /*#__PURE__*/React.createElement("li", null, "De 30 a 40\xB0C: La actividad CAE bruscamente."), /*#__PURE__*/React.createElement("li", {
        className: "text-sky-700 font-bold"
      }, "Por lo tanto, la frase 'siempre es m\xE1s lenta' es FALSA.")),
      resultado: "Conclusión errónea por generalizar."
    }, {
      titulo: "Datos no medidos",
      situacion: "Un experimento mide el canto de los pájaros en primavera y verano. Muestran que cantan más en verano. Conclusión del estudio: 'En invierno los pájaros mueren'.",
      analisis: "Es una Falacia de Extrapolación. En el ICFES/Saber 11, una opción de respuesta puede sonar muy lógica o cierta en la vida real, pero si el texto/gráfica no la midió, es una respuesta INCORRECTA.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-sky-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Medido en gr\xE1fica:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-sky-700"
      }, "Primavera / Verano")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-sky-50/50 p-2 rounded border border-rose-200"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Mencionado en conclusi\xF3n:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-rose-600"
      }, "Invierno / Muerte"))),
      resultado: "Inválida. No se recolectaron datos del invierno."
    }, {
      titulo: "Identificar Patrones",
      situacion: "Tabla de datos: Altura 10m -> Velocidad 14 m/s. Altura 20m -> Velocidad 20 m/s. Altura 30m -> Velocidad 24 m/s. ¿Cuál es la conclusión válida?",
      analisis: "Busca la relación matemática directa entre las variables. A medida que una sube, ¿qué hace la otra?",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-sky-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Altura: 10 \u2192 20 \u2192 30 (Sube)"), /*#__PURE__*/React.createElement("li", null, "Velocidad: 14 \u2192 20 \u2192 24 (Sube)"), /*#__PURE__*/React.createElement("li", {
        className: "text-sky-700 font-bold border-t border-sky-100 pt-2 mt-2"
      }, "A medida que aumenta la altura, aumenta la velocidad.")),
      resultado: "A mayor altura, mayor velocidad al caer."
    }];

    // Diseño Moderno UI 2026 - Tarjetas Rediseñadas
    const renderCasosModernos = (casosArray, themeName) => {
      const themes = {
        cyan: {
          icon: Target,
          color: 'text-cyan-500',
          bg: 'bg-cyan-50',
          border: 'border-cyan-200',
          grad: 'from-cyan-400 to-cyan-600'
        },
        indigo: {
          icon: Microscope,
          color: 'text-indigo-500',
          bg: 'bg-indigo-50',
          border: 'border-indigo-200',
          grad: 'from-indigo-400 to-indigo-600'
        },
        violet: {
          icon: FlaskConical,
          color: 'text-violet-500',
          bg: 'bg-violet-50',
          border: 'border-violet-200',
          grad: 'from-violet-400 to-violet-600'
        },
        sky: {
          icon: Activity,
          color: 'text-sky-500',
          bg: 'bg-sky-50',
          border: 'border-sky-200',
          grad: 'from-sky-400 to-sky-600'
        }
      };
      const t = themes[themeName];
      return /*#__PURE__*/React.createElement("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      }, casosArray.map((caso, idx) => /*#__PURE__*/React.createElement("div", {
        key: idx,
        className: "group relative bg-white rounded-3xl p-1 border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]"
      }, /*#__PURE__*/React.createElement("div", {
        className: `absolute inset-0 bg-gradient-to-br ${t.grad} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl`
      }), /*#__PURE__*/React.createElement("div", {
        className: "bg-white h-full rounded-[22px] overflow-hidden flex flex-col z-10 relative"
      }, /*#__PURE__*/React.createElement("div", {
        className: "p-6 border-b border-slate-100 relative overflow-hidden"
      }, /*#__PURE__*/React.createElement("div", {
        className: `absolute top-0 right-0 w-32 h-32 ${t.bg} rounded-full blur-3xl -mr-10 -mt-10 opacity-60`
      }), /*#__PURE__*/React.createElement("div", {
        className: "flex items-center gap-3 mb-3 relative z-10"
      }, /*#__PURE__*/React.createElement("div", {
        className: `w-8 h-8 rounded-full ${t.bg} flex items-center justify-center`
      }, /*#__PURE__*/React.createElement(t.icon, {
        className: `w-4 h-4 ${t.color}`
      })), /*#__PURE__*/React.createElement("h4", {
        className: "font-extrabold text-slate-800 text-lg leading-tight"
      }, caso.titulo)), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-600 text-sm leading-relaxed relative z-10 italic"
      }, "\"", caso.situacion, "\"")), /*#__PURE__*/React.createElement("div", {
        className: "p-6 flex-grow flex flex-col gap-6"
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement(Search, {
        className: "w-3 h-3"
      }), " Analizar Contexto"), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-slate-700 leading-relaxed"
      }, caso.analisis)), /*#__PURE__*/React.createElement("div", {
        className: "mt-auto"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement(TestTube, {
        className: "w-3 h-3"
      }), " Aplicar M\xE9todo"), caso.calculo)), /*#__PURE__*/React.createElement("div", {
        className: `p-4 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:${t.bg} transition-colors`
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
      }, "Veredicto"), /*#__PURE__*/React.createElement("span", {
        className: `font-bold ${t.color} text-sm text-right leading-tight max-w-[60%]`
      }, caso.resultado))))));
    };

    // ==========================================
    // QUIZ (PRÁCTICA)
    // ==========================================
    const questions = [{
      type: "Variables",
      question: "Un estudiante calienta agua en tres ollas. La olla 1 a fuego bajo, la 2 a fuego medio, y la 3 a fuego alto. Luego mide con un cronómetro cuánto tarda cada una en hervir. ¿Cuál es la variable DEPENDIENTE (el efecto)?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
      }, /*#__PURE__*/React.createElement(FlaskConical, {
        className: "w-10 h-10 text-orange-500 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-500 uppercase"
      }, "Fuego Bajo"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-mono font-bold text-slate-800"
      }, "10 min")), /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
      }, /*#__PURE__*/React.createElement(FlaskConical, {
        className: "w-10 h-10 text-red-500 mb-2"
      }), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-500 uppercase"
      }, "Fuego Alto"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs font-mono font-bold text-slate-800"
      }, "4 min"))),
      options: ["La cantidad de agua en la olla.", "El nivel del fuego (Bajo, Medio, Alto).", "El tiempo que tarda en hervir.", "La marca de la olla utilizada."],
      correct: 2,
      feedback: "¡Exacto! La variable dependiente es lo que el estudiante MIDE como resultado del experimento (El tiempo). El nivel de fuego es la variable independiente (lo que él manipula)."
    }, {
      type: "Hipótesis",
      question: "Antes de lanzar un huevo con un paracaídas casero, el alumno escribe: 'Si el paracaídas tiene una superficie más grande, el huevo caerá más lento y no se romperá'. Esto es un ejemplo de:",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-indigo-50 rounded-2xl shadow-sm border border-indigo-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "font-mono text-indigo-800 font-bold text-center leading-relaxed"
      }, "\"SI ", /*#__PURE__*/React.createElement("span", {
        className: "text-indigo-500"
      }, "Superficie Grande"), ", ENTONCES ", /*#__PURE__*/React.createElement("span", {
        className: "text-indigo-500"
      }, "Cae m\xE1s lento"), ".\"")),
      options: ["Una Conclusión", "Una Hipótesis", "Una Variable Controlada", "Un Dato Atípico"],
      correct: 1,
      feedback: "¡Brillante! Una hipótesis es una predicción escrita ANTES del experimento que relaciona una causa (tamaño) con un efecto esperado (velocidad)."
    }, {
      type: "Diseño Experimental",
      question: "Para probar si una nueva pintura anti-óxido funciona en barcos, un científico pinta un trozo de hierro con la pintura nueva y lo sumerge en agua salada. ¿Qué le falta a este experimento para ser válido?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-cyan-50 p-4 rounded-xl border border-cyan-100 flex items-center justify-center gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-8 h-8 rounded-sm bg-cyan-500"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-slate-700"
      }, "Hierro + Pintura Nueva en Agua")), /*#__PURE__*/React.createElement("div", {
        className: "text-slate-400 font-bold"
      }, "\xBFQu\xE9 falta para comparar?")),
      options: ["Sumergirlo en agua dulce también.", "Pintarlo de dos colores distintos.", "Un grupo de control: un trozo de hierro SIN pintura sumergido en la misma agua.", "Cambiar el hierro por aluminio."],
      correct: 2,
      feedback: "¡Perfecto! Sin un Grupo de Control (el hierro sin pintura), el científico no tiene con qué comparar si la pintura realmente evitó el óxido o si el hierro simplemente no se iba a oxidar de todos modos."
    }, {
      type: "Lectura de Gráficas",
      question: "Una gráfica muestra el Crecimiento Bacteriano. El Eje X dice 'Horas (1 a 12)' y el Eje Y dice 'Cantidad de Bacterias'. ¿Qué representa el Eje Y según el método científico?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-slate-900 rounded-3xl shadow-lg"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-32 overflow-visible",
        viewBox: "0 0 100 80"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "70",
        x2: "10",
        y2: "10",
        stroke: "#475569",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "70",
        x2: "90",
        y2: "70",
        stroke: "#475569",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 10 70 Q 50 70 80 10",
        fill: "none",
        stroke: "#a855f7",
        strokeWidth: "3",
        className: "drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]"
      }), /*#__PURE__*/React.createElement("text", {
        x: "-5",
        y: "40",
        fontSize: "8",
        fill: "#94a3b8",
        textAnchor: "middle",
        transform: "rotate(-90 -5,40)"
      }, "Bacterias"), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "85",
        fontSize: "8",
        fill: "#94a3b8",
        textAnchor: "middle"
      }, "Tiempo (Horas)"))),
      options: ["La Variable Independiente", "La Variable Dependiente", "La Hipótesis", "El Grupo de Control"],
      correct: 1,
      feedback: "¡Regla de oro dominada! El Eje Y (vertical) SIEMPRE contiene la Variable Dependiente (lo que se mide como resultado). El Eje X siempre tiene el tiempo o la variable independiente."
    }, {
      type: "Falso Control",
      question: "Un alumno quiere probar si la música clásica ayuda a las plantas. Pone la Planta 1 en la sala con música clásica y mucha luz. Pone la Planta 2 (Control) en un armario oscuro en silencio. Ambas plantas mueren. ¿Cuál es el error de diseño?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-1"
      }, "\uD83C\uDFB5 + \u2600\uFE0F"), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-500 uppercase"
      }, "Planta 1")), /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-slate-800 rounded-2xl shadow-sm border border-slate-700 flex flex-col items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-1"
      }, "\uD83D\uDD07 + \uD83C\uDF11"), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-400 uppercase"
      }, "Planta 2 (Control)"))),
      options: ["El volumen de la música estaba muy alto.", "Cambió dos variables al mismo tiempo (Música y Luz), arruinando el control.", "Debió usar música de rock para el control.", "No hubo ningún error, las plantas simplemente no tienen oídos."],
      correct: 1,
      feedback: "¡Ojo clínico! El grupo de control debe ser EXACTAMENTE IGUAL al experimental en todo (tierra, agua, luz), excepto en la variable que se está probando (la música). Si cambia la luz también, el experimento no sirve."
    }, {
      type: "Conclusiones Válidas",
      question: "Un estudio grafica la caza de zorros entre 1990 y 2000, mostrando una gran disminución en la cacería. Conclusión del estudio: 'La población total de zorros salvajes aumentó enormemente'. ¿Por qué esta conclusión es inválida en la prueba?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-sky-50 rounded-2xl shadow-sm border border-sky-100 font-mono text-sm text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-slate-600 mb-2"
      }, "Dato Gr\xE1fica: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-600 font-bold"
      }, "Cacer\xEDa BAJ\xD3")), /*#__PURE__*/React.createElement("p", {
        className: "text-slate-600"
      }, "Conclusi\xF3n: ", /*#__PURE__*/React.createElement("strong", {
        className: "text-emerald-600 font-bold"
      }, "Poblaci\xF3n SUBI\xD3"))),
      options: ["Porque los zorros se extinguieron en 1995.", "Porque la gráfica muestra una línea recta.", "Porque la gráfica solo midió 'cacería', no midió 'población'. Extrapoló sin datos.", "La conclusión sí es totalmente válida y lógica."],
      correct: 2,
      feedback: "¡Magistral! Puede sonar muy lógico en el mundo real, pero científicamente, si un estudio SOLO midió la cacería, no puedes concluir sobre la población general (podrían haber muerto por una enfermedad o sequía)."
    }];
    const handleAnswer = index => {
      if (hasAnswered) return;
      setSelectedAnswer(index);
      setHasAnswered(true);
      if (index === questions[currentQuestion].correct) setScore(score + 1);
    };
    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setHasAnswered(false);
      } else {
        setShowResults(true);
      }
    };
    const resetQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowResults(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    };
    const getResultMessage = () => {
      const percentage = score / questions.length;
      if (percentage === 1) return {
        title: "¡Mente Científica!",
        desc: "Dominas el Método Científico. Sabes aislar variables, diseñar controles y no te dejas engañar por conclusiones sin datos."
      };
      if (percentage >= 0.6) return {
        title: "¡Buen Investigador!",
        desc: "Entiendes la base de la indagación, pero cuidado con las trampas en el grupo de control. Repasa los Formularios Clave."
      };
      return {
        title: "¡Cuidado en el Laboratorio!",
        desc: "La ciencia requiere ser estricto con las reglas. Vuelve a revisar la diferencia entre Hipótesis y Conclusión."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-cyan-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto p-4 md:p-8 pb-12"
    }, /*#__PURE__*/React.createElement("nav", {
      className: "flex justify-center mb-8 md:mb-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex bg-white/90 backdrop-blur-xl p-2 rounded-full border border-slate-200 shadow-sm items-center gap-1 md:gap-2"
    }, [{
      id: 'introduccion',
      icon: Sparkles,
      label: 'Inicio'
    }, {
      id: 'teoria',
      icon: BookOpen,
      label: 'Leyes & Casos'
    }, {
      id: 'practica',
      icon: Target,
      label: 'Simulador'
    }].map(tab => /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-cyan-500 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
    }, /*#__PURE__*/React.createElement(tab.icon, {
      className: `w-4 h-4 ${activeTab === tab.id ? 'text-white' : ''}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden md:block"
    }, tab.label))))), activeTab === 'introduccion' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in zoom-in-95 duration-700 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center bg-slate-900 shadow-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-0"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=2000&q=80",
      alt: "Scientific Laboratory Context",
      className: "w-full h-full object-cover opacity-30 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-indigo-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6"
    }, /*#__PURE__*/React.createElement(TestTube, {
      className: "w-4 h-4"
    }), " Ciencias Naturales"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "Indagaci\xF3n y ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300"
    }, "M\xE9todo Cient\xEDfico")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "En el ICFES no se eval\xFAa que sepas memoria biol\xF3gica, sino que sepas pensar como un cient\xEDfico. Aprende a dominar las reglas de todo experimento.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "w-full h-full overflow-visible animate-pulse",
      viewBox: "0 0 100 100",
      style: {
        animationDuration: '4s'
      }
    }, /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "50",
      rx: "45",
      ry: "15",
      fill: "none",
      stroke: "#22d3ee",
      strokeWidth: "2",
      transform: "rotate(30 50 50)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "50",
      rx: "45",
      ry: "15",
      fill: "none",
      stroke: "#818cf8",
      strokeWidth: "2",
      transform: "rotate(90 50 50)"
    }), /*#__PURE__*/React.createElement("ellipse", {
      cx: "50",
      cy: "50",
      rx: "45",
      ry: "15",
      fill: "none",
      stroke: "#38bdf8",
      strokeWidth: "2",
      transform: "rotate(150 50 50)"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "10",
      fill: "#c084fc",
      className: "drop-shadow-[0_0_15px_rgba(192,132,252,0.8)]"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 bg-slate-900/50 px-4 py-2 rounded-lg border border-white/10 font-mono text-cyan-400 font-bold tracking-widest text-xs uppercase"
    }, "Evaluaci\xF3n V\xE1lida"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "Los 4 Pilares de la Indagaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
    }, [{
      t: "Variables en Juego",
      d: "Independiente vs. Dependiente",
      c: "bg-cyan-100 text-cyan-600"
    }, {
      t: "La Hipótesis",
      d: "Predicciones y preguntas medibles",
      c: "bg-indigo-100 text-indigo-600"
    }, {
      t: "Diseño Experimental",
      d: "El crucial Grupo de Control",
      c: "bg-violet-100 text-violet-600"
    }, {
      t: "Conclusiones Válidas",
      d: "No extrapolar sin tener datos",
      c: "bg-sky-100 text-sky-600"
    }].map((item, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.c} group-hover:scale-110 transition-transform`
    }, /*#__PURE__*/React.createElement(Search, {
      className: "w-5 h-5"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 text-sm mb-1"
    }, item.t), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 leading-relaxed"
    }, item.d)))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
      onClick: () => setActiveTab('teoria')
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20"
    }, /*#__PURE__*/React.createElement(Microscope, {
      className: "w-6 h-6 text-white"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold mb-3"
    }, "Ir al Laboratorio"), /*#__PURE__*/React.createElement("p", {
      className: "text-cyan-50 text-sm leading-relaxed"
    }, "Domina las reglas para que un experimento sea cient\xEDficamente v\xE1lido en el ICFES.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-cyan-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Comenzar ahora ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-2xl mx-auto pt-8"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "Reglas de Laboratorio"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg"
    }, "Conoce la estructura detr\xE1s de todo experimento estudiando nuestro Formulario Clave y analiza los casos pr\xE1cticos.")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-cyan-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(Target, {
      className: "w-5 h-5 text-cyan-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-cyan-400 font-bold uppercase tracking-widest text-sm"
    }, "Identificaci\xF3n de Elementos")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Las 3 Variables ", /*#__PURE__*/React.createElement("br", null), "del Experimento"), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-4 text-sm text-slate-400"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-cyan-300 w-32 shrink-0"
    }, "Independiente:"), " La Causa. Lo que el cient\xEDfico manipula o cambia a prop\xF3sito."), /*#__PURE__*/React.createElement("li", {
      className: "flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-sky-300 w-32 shrink-0"
    }, "Dependiente:"), " El Efecto. Lo que se MIDE como resultado al final del experimento."), /*#__PURE__*/React.createElement("li", {
      className: "flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-slate-300 w-32 shrink-0"
    }, "Controladas:"), " Todo lo dem\xE1s. Lo que se mantiene EXACTAMENTE IGUAL para no arruinar el experimento."))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-500/20 px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-300 font-bold text-xs uppercase tracking-widest mb-4"
    }, "Regla de Gr\xE1ficas"), /*#__PURE__*/React.createElement("svg", {
      className: "w-full max-w-[200px] h-auto overflow-visible",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "90",
      x2: "10",
      y2: "10",
      stroke: "#94a3b8",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "90",
      x2: "90",
      y2: "90",
      stroke: "#94a3b8",
      strokeWidth: "2"
    }), /*#__PURE__*/React.createElement("text", {
      x: "-8",
      y: "50",
      fontSize: "10",
      fill: "#38bdf8",
      fontWeight: "bold",
      transform: "rotate(-90 -8,50)",
      textAnchor: "middle"
    }, "EJE Y: DEPENDIENTE"), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "105",
      fontSize: "10",
      fill: "#22d3ee",
      fontWeight: "bold",
      textAnchor: "middle"
    }, "EJE X: INDEPENDIENTE"), /*#__PURE__*/React.createElement("path", {
      d: "M 15 85 L 40 40 L 70 20 L 85 10",
      fill: "none",
      stroke: "#22d3ee",
      strokeWidth: "3",
      className: "drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
    })))), renderCasosModernos(ejemplosEstrategia1, 'cyan')), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8 pt-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-indigo-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(Lightbulb, {
      className: "w-5 h-5 text-indigo-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-indigo-400 font-bold uppercase tracking-widest text-sm"
    }, "El Inicio del M\xE9todo")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Pregunta e ", /*#__PURE__*/React.createElement("br", null), "Hip\xF3tesis"), /*#__PURE__*/React.createElement("div", {
      className: "bg-indigo-500/10 border border-indigo-500/20 p-5 rounded-2xl mb-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "block text-indigo-300 text-xs font-bold mb-2 uppercase tracking-widest"
    }, "F\xF3rmula de una buena Hip\xF3tesis:"), /*#__PURE__*/React.createElement("p", {
      className: "text-white font-mono text-sm leading-relaxed"
    }, "\"SI [Cambio Variable Independiente], ", /*#__PURE__*/React.createElement("br", null), "ENTONCES [Efecto en V. Dependiente], ", /*#__PURE__*/React.createElement("br", null), "PORQUE [Raz\xF3n cient\xEDfica].\""))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-rose-500/10 p-4 rounded-xl border border-rose-500/20 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-rose-300 font-bold text-xs uppercase w-24"
    }, "Error Com\xFAn"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-sm text-right"
    }, "Confundir la Hip\xF3tesis (Predicci\xF3n ", /*#__PURE__*/React.createElement("strong", null, "antes"), ") con la Conclusi\xF3n (Resultado ", /*#__PURE__*/React.createElement("strong", null, "despu\xE9s"), ").")), /*#__PURE__*/React.createElement("div", {
      className: "bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-300 font-bold text-xs uppercase w-24"
    }, "Tip ICFES"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-sm text-right"
    }, "Una pregunta cient\xEDfica NUNCA se responde con 'S\xED' o 'No'. Debe ser medible.")))), renderCasosModernos(ejemplosEstrategia2, 'indigo')), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8 pt-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-violet-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(FlaskConical, {
      className: "w-5 h-5 text-violet-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-violet-400 font-bold uppercase tracking-widest text-sm"
    }, "Dise\xF1o Experimental")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "El sagrado ", /*#__PURE__*/React.createElement("br", null), "Grupo de Control"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-sm leading-relaxed mb-6"
    }, "Es el sujeto o grupo al que ", /*#__PURE__*/React.createElement("strong", null, "NO se le aplica"), " el tratamiento especial (la V. Independiente)."), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-3 text-sm font-medium text-white bg-white/5 p-5 rounded-2xl border border-white/5"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 mt-1 shrink-0 rounded-full bg-violet-400"
    }), "\xBFPara qu\xE9 sirve? Para tener una l\xEDnea base de comparaci\xF3n y demostrar que el efecto fue causado realmente por nuestro tratamiento y no por algo ambiental."))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 flex justify-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-6 w-full max-w-[250px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-20 bg-rose-500/20 border-2 border-rose-400 rounded-b-xl flex items-end justify-center pb-2 relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-2 w-8 h-2 bg-rose-400 rounded-full animate-pulse"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-rose-300 font-bold text-xs mt-3 uppercase"
    }, "P\xEDldora Roja"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 text-[10px]"
    }, "Experimental")), /*#__PURE__*/React.createElement("div", {
      className: "flex-1 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-20 bg-slate-500/20 border-2 border-slate-400 rounded-b-xl flex items-end justify-center pb-2 relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-2 w-8 h-2 bg-slate-400 rounded-full"
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-300 font-bold text-xs mt-3 uppercase"
    }, "Placebo"), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-500 text-[10px]"
    }, "Control"))))), renderCasosModernos(ejemplosEstrategia3, 'violet')), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8 pt-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-sky-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(AlertTriangle, {
      className: "w-5 h-5 text-sky-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-sky-400 font-bold uppercase tracking-widest text-sm"
    }, "Interpretaci\xF3n de Datos")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Conclusiones ", /*#__PURE__*/React.createElement("br", null), "V\xE1lidas"), /*#__PURE__*/React.createElement("div", {
      className: "bg-rose-500/10 p-5 rounded-2xl border border-rose-500/20 text-rose-100 text-sm leading-relaxed mb-6"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-rose-400 block mb-2 text-base"
    }, "\uD83D\uDEA8 LA TRAMPA DEL ICFES"), "Muchas opciones de respuesta suenan l\xF3gicas o \"ciertas en el mundo real\". Sin embargo, si la tabla o gr\xE1fica proporcionada ", /*#__PURE__*/React.createElement("strong", null, "NO MIDI\xD3 ESE DATO EXACTO"), ", la conclusi\xF3n es cient\xEDficamente inv\xE1lida (Extrapolaci\xF3n).")), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 flex flex-col gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-white font-bold text-sm leading-relaxed"
    }, "Solo debes concluir basado en los l\xEDmites de tu Eje X. No asumas \"siempre\" o \"nunca\".")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sky-300 font-mono font-bold text-xs uppercase"
    }, "Ejemplo: Mides plantas de 10\xB0 a 30\xB0. ", /*#__PURE__*/React.createElement("br", null), "No puedes concluir sobre 40\xB0.")))), renderCasosModernos(ejemplosEstrategia4, 'sky'))), activeTab === 'practica' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto pt-8"
    }, !showResults ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(6,182,212,0.15)] border border-slate-100 p-8 md:p-12 relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 bg-slate-100 h-3 rounded-full overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-cyan-500 h-full rounded-full transition-all duration-500 ease-out",
      style: {
        width: `${currentQuestion / questions.length * 100}%`
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold text-sm font-mono"
    }, currentQuestion + 1, "/", questions.length)), /*#__PURE__*/React.createElement("div", {
      className: "mb-8 text-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block px-4 py-1.5 bg-cyan-100 text-cyan-700 font-bold text-xs uppercase tracking-widest rounded-full mb-4"
    }, questions[currentQuestion].type), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 leading-snug"
    }, questions[currentQuestion].question)), questions[currentQuestion].visual && /*#__PURE__*/React.createElement("div", {
      className: "mb-10"
    }, questions[currentQuestion].visual), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 mb-10"
    }, questions[currentQuestion].options.map((option, index) => {
      const isSelected = selectedAnswer === index;
      const isCorrect = questions[currentQuestion].correct === index;
      let buttonClass = "w-full text-left p-5 rounded-2xl border-2 font-bold transition-all duration-300 flex items-center gap-4 ";
      let iconClass = "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ";
      if (!hasAnswered) {
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-cyan-400 hover:bg-cyan-50/30";
        iconClass += "border-slate-300 text-transparent";
      } else {
        if (isCorrect) {
          buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-800";
          iconClass += "border-emerald-500 bg-emerald-500 text-white";
        } else if (isSelected) {
          buttonClass += "bg-rose-50 border-rose-400 text-rose-800 opacity-60";
          iconClass += "border-rose-400 bg-rose-400 text-white";
        } else {
          buttonClass += "bg-slate-50 border-slate-200 text-slate-400 opacity-40";
          iconClass += "border-slate-200 text-transparent";
        }
      }
      return /*#__PURE__*/React.createElement("button", {
        key: index,
        onClick: () => handleAnswer(index),
        disabled: hasAnswered,
        className: buttonClass
      }, /*#__PURE__*/React.createElement("div", {
        className: iconClass
      }, hasAnswered && (isCorrect || isSelected) && /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-4 h-4"
      })), /*#__PURE__*/React.createElement("span", {
        className: "text-[15px]"
      }, option));
    })), hasAnswered && /*#__PURE__*/React.createElement("div", {
      className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-top-4 border ${selectedAnswer === questions[currentQuestion].correct ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-sm md:text-base leading-relaxed"
    }, questions[currentQuestion].feedback)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-end pt-4 border-t border-slate-100"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: nextQuestion,
      disabled: !hasAnswered,
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-slate-900 text-white hover:bg-cyan-600 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`
    }, currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-cyan-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(6,182,212,0.5)] border-4 border-cyan-300"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, score === questions.length ? "¡Científico Experto!" : "Buen Trabajo"), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 my-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-cyan-600 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", questions.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-cyan-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Simulador")))));
  }
  window.renderCNModule1 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloIndagacion));
  };
})();