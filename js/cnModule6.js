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
  function ModuloCienciasFinal() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State (Hardcore Mode: Contexts + Questions)
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: TEORÍA Y ESTRATEGIAS (FULL WIDTH)
    // ==========================================

    const theoryCards = [{
      id: 'cinematica',
      title: 'Cinemática: Gráficas de Movimiento',
      icon: TrendingUp,
      color: 'cyan',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "El ICFES ama las gr\xE1ficas de ", /*#__PURE__*/React.createElement("strong", null, "Velocidad vs. Tiempo (V-T)"), ". El error mortal de los estudiantes es leerlas como si fueran un dibujo del camino real. Aqu\xED evaluamos aceleraci\xF3n y distancia."), /*#__PURE__*/React.createElement("div", {
        className: "bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-800 block mb-4 text-lg"
      }, "Reglas para Gr\xE1ficas V-T:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "L\xEDnea Plana (Horizontal):"), " \xA1NO significa que est\xE1 quieto! Significa que la velocidad es ", /*#__PURE__*/React.createElement("strong", null, "constante"), " (ej. va clavado a 80 km/h). La aceleraci\xF3n aqu\xED es CERO.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "L\xEDnea Inclinada:"), " Si sube, est\xE1 acelerando (pis\xF3 el acelerador). Si baja, est\xE1 desacelerando (pis\xF3 el freno).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "El Secreto del \xC1rea:"), " Si te preguntan \"\xBFCu\xE1nta distancia recorri\xF3?\", el truco ninja es ", /*#__PURE__*/React.createElement("strong", null, "calcular el \xE1rea"), " geom\xE9trica (tri\xE1ngulo o rect\xE1ngulo) que se forma debajo de la l\xEDnea."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-25 -10 140 130"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "105",
        y2: "90",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "10",
        y2: "-5",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("text", {
        x: "55",
        y: "105",
        fontSize: "5.5",
        fill: "#94a3b8",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "TIEMPO (Segundos) \u2192"), /*#__PURE__*/React.createElement("text", {
        x: "-8",
        y: "42",
        fontSize: "5.5",
        fill: "#94a3b8",
        transform: "rotate(-90 -8,42)",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "VELOCIDAD (m/s) \u2191"), /*#__PURE__*/React.createElement("text", {
        x: "10",
        y: "100",
        fontSize: "4.5",
        fill: "#64748b",
        textAnchor: "middle"
      }, "0"), /*#__PURE__*/React.createElement("text", {
        x: "30",
        y: "100",
        fontSize: "4.5",
        fill: "#64748b",
        textAnchor: "middle"
      }, "2s"), /*#__PURE__*/React.createElement("text", {
        x: "70",
        y: "100",
        fontSize: "4.5",
        fill: "#64748b",
        textAnchor: "middle"
      }, "6s"), /*#__PURE__*/React.createElement("text", {
        x: "90",
        y: "100",
        fontSize: "4.5",
        fill: "#64748b",
        textAnchor: "middle"
      }, "8s"), /*#__PURE__*/React.createElement("text", {
        x: "7",
        y: "31.5",
        fontSize: "4.5",
        fill: "#64748b",
        textAnchor: "end"
      }, "20"), /*#__PURE__*/React.createElement("polygon", {
        points: "10,90 30,30 30,90",
        fill: "#0891b2",
        opacity: "0.3"
      }), " ", /*#__PURE__*/React.createElement("rect", {
        x: "30",
        y: "30",
        width: "40",
        height: "60",
        fill: "#06b6d4",
        opacity: "0.2"
      }), " ", /*#__PURE__*/React.createElement("polygon", {
        points: "70,30 90,90 70,90",
        fill: "#0891b2",
        opacity: "0.3"
      }), " ", /*#__PURE__*/React.createElement("path", {
        d: "M 10 90 L 30 30 L 70 30 L 90 90",
        fill: "none",
        stroke: "#22d3ee",
        strokeWidth: "4.5",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("text", {
        x: "14",
        y: "55",
        fontSize: "5",
        fill: "#67e8f9",
        fontWeight: "bold",
        transform: "rotate(-71.5 14,55)",
        textAnchor: "middle"
      }, "Aceleraci\xF3n (+)"), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "22",
        fontSize: "5",
        fill: "#67e8f9",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Velocidad Constante (a = 0)"), /*#__PURE__*/React.createElement("text", {
        x: "86",
        y: "55",
        fontSize: "5",
        fill: "#67e8f9",
        fontWeight: "bold",
        transform: "rotate(71.5 86,55)",
        textAnchor: "middle"
      }, "Frenado (-)"), /*#__PURE__*/React.createElement("rect", {
        x: "38",
        y: "50",
        width: "24",
        height: "16",
        rx: "2",
        fill: "#164e63",
        stroke: "#22d3ee",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "57",
        fontSize: "4.5",
        fill: "#cffafe",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "\xC1rea ="), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "63",
        fontSize: "4.5",
        fill: "#cffafe",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Distancia"))
    }, {
      id: 'termodinamica',
      title: 'Termodinámica y Calor',
      icon: Flame,
      color: 'orange',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "La f\xEDsica del calor. El concepto m\xE1s importante que debes dominar es que ", /*#__PURE__*/React.createElement("strong", null, "el fr\xEDo no existe como fuerza, el fr\xEDo es simplemente la ausencia de calor"), ". El calor siempre viaja del cuerpo m\xE1s caliente al m\xE1s fr\xEDo."), /*#__PURE__*/React.createElement("div", {
        className: "bg-orange-50/50 p-6 rounded-2xl border border-orange-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-orange-800 block mb-4 text-lg"
      }, "Los 3 Mecanismos de Transferencia:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-orange-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-orange-700"
      }, "Conducci\xF3n (S\xF3lidos):"), " El calor viaja por contacto directo, \xE1tomo por \xE1tomo. (Ej. Tocar la olla caliente y quemarte).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-orange-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-orange-700"
      }, "Convecci\xF3n (Fluidos):"), " Ocurre en l\xEDquidos y gases. El fluido caliente sube (porque es menos denso) y el fr\xEDo baja, creando ciclos o corrientes. (Ej. Agua hirviendo).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-orange-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-orange-700"
      }, "Radiaci\xF3n (Vac\xEDo/Ondas):"), " El calor viaja como luz invisible (infrarrojo) sin necesidad de tocar nada. (Ej. El calor del Sol o sentir el fuego de lejos)."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-10 -10 120 120"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 40 90 Q 50 50 60 90 Q 50 100 40 90",
        fill: "#ea580c",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 45 90 Q 50 65 55 90 Q 50 95 45 90",
        fill: "#facc15",
        className: "animate-pulse",
        style: {
          animationDelay: '0.2s'
        }
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 65 85 Q 80 80 90 90",
        fill: "none",
        stroke: "#f97316",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 65 95 Q 80 90 90 100",
        fill: "none",
        stroke: "#f97316",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "95",
        y: "85",
        fontSize: "4.5",
        fill: "#fdba74",
        fontWeight: "bold"
      }, "RADIACI\xD3N"), /*#__PURE__*/React.createElement("text", {
        x: "95",
        y: "91",
        fontSize: "3.5",
        fill: "#fb923c"
      }, "(Ondas t\xE9rmicas)"), /*#__PURE__*/React.createElement("path", {
        d: "M 30 30 L 30 70 A 20 10 0 0 0 70 70 L 70 30 Z",
        fill: "#334155"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "30",
        rx: "20",
        ry: "5",
        fill: "#475569"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "40",
        width: "20",
        height: "4",
        fill: "#64748b"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "30",
        y1: "42",
        x2: "5",
        y2: "42",
        stroke: "#ef4444",
        strokeWidth: "1.5",
        markerEnd: "url(#arrow-red)"
      }), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: "35",
        fontSize: "4.5",
        fill: "#fca5a5",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "CONDUCCI\xD3N"), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: "48",
        fontSize: "3.5",
        fill: "#f87171",
        textAnchor: "middle"
      }, "(Por contacto)"), /*#__PURE__*/React.createElement("path", {
        d: "M 32 45 L 32 70 A 18 8 0 0 0 68 70 L 68 45 Z",
        fill: "#0ea5e9",
        opacity: "0.6"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "45",
        rx: "18",
        ry: "4",
        fill: "#38bdf8",
        opacity: "0.6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 40 65 Q 35 55 45 50",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: "1.5",
        markerEnd: "url(#arrow-red)"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 60 65 Q 65 55 55 50",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: "1.5",
        markerEnd: "url(#arrow-red)"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 50 50 Q 50 60 50 65",
        fill: "none",
        stroke: "#3b82f6",
        strokeWidth: "1.5",
        markerEnd: "url(#arrow-blue)"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "20",
        fontSize: "4.5",
        fill: "#7dd3fc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "CONVECCI\xD3N"), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "25",
        fontSize: "3.5",
        fill: "#38bdf8",
        textAnchor: "middle"
      }, "(Fluidos en ciclo)"), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
        id: "arrow-red",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto-start-reverse"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z",
        fill: "#ef4444"
      })), /*#__PURE__*/React.createElement("marker", {
        id: "arrow-blue",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto-start-reverse"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z",
        fill: "#3b82f6"
      }))))
    }, {
      id: 'genetica_molecular',
      title: 'Genética Molecular (ADN a Proteína)',
      icon: Dna,
      color: 'rose',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "El \"Dogma Central de la Biolog\xEDa\". Eval\xFAa tu comprensi\xF3n sobre c\xF3mo la informaci\xF3n guardada en el ADN se convierte en las partes f\xEDsicas de un ser vivo (Prote\xEDnas) y qu\xE9 ocurre si hay un error (Mutaci\xF3n)."), /*#__PURE__*/React.createElement("div", {
        className: "bg-rose-50/50 p-6 rounded-2xl border border-rose-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-800 block mb-4 text-lg"
      }, "La Cadena de Mando:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "1. El ADN (El Jefe):"), " Es la receta maestra guardada celosamente dentro del N\xFAcleo celular. Nunca sale de all\xED.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "2. El ARN mensajero (El Mensajero):"), " Saca una copia de la receta del ADN (Transcripci\xF3n) y viaja fuera del n\xFAcleo.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "3. Ribosoma y Prote\xEDna (La F\xE1brica):"), " Lee el mensaje del ARN (Traducci\xF3n) y ensambla los amino\xE1cidos para crear la Prote\xEDna final. ", /*#__PURE__*/React.createElement("em", null, "*Si el ADN muta, la prote\xEDna final sale defectuosa.*")))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-10 -10 130 110"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "50",
        r: "30",
        fill: "#4c1d95",
        opacity: "0.8"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 40 30 Q 55 50 40 70",
        fill: "none",
        stroke: "#6366f1",
        strokeWidth: "2",
        strokeDasharray: "3 2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "15",
        fontSize: "5",
        fill: "#c4b5fd",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "N\xDACLEO"), /*#__PURE__*/React.createElement("path", {
        d: "M 0 40 Q 10 30 20 40 T 40 40",
        fill: "none",
        stroke: "#f43f5e",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 0 40 Q 10 50 20 40 T 40 40",
        fill: "none",
        stroke: "#fb7185",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: "35",
        fontSize: "4.5",
        fill: "#fda4af",
        fontWeight: "bold"
      }, "ADN"), /*#__PURE__*/React.createElement("path", {
        d: "M 25 50 Q 35 60 50 50",
        fill: "none",
        stroke: "#10b981",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "55",
        fontSize: "3.5",
        fill: "#6ee7b7",
        fontWeight: "bold"
      }, "1. Transcripci\xF3n"), /*#__PURE__*/React.createElement("path", {
        d: "M 50 50 Q 60 40 75 50",
        fill: "none",
        stroke: "#10b981",
        strokeWidth: "2.5",
        markerEnd: "url(#arrow-green)"
      }), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "45",
        fontSize: "4.5",
        fill: "#34d399",
        fontWeight: "bold"
      }, "ARNm (Mensajero)"), /*#__PURE__*/React.createElement("path", {
        d: "M 70 60 Q 85 45 100 60 Z",
        fill: "#334155"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 75 60 Q 85 70 95 60 Z",
        fill: "#475569"
      }), /*#__PURE__*/React.createElement("text", {
        x: "85",
        y: "70",
        fontSize: "5",
        fill: "#cbd5e1",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "RIBOSOMA"), /*#__PURE__*/React.createElement("circle", {
        cx: "85",
        cy: "40",
        r: "3",
        fill: "#eab308"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "85",
        cy: "30",
        r: "3",
        fill: "#f59e0b"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "92",
        cy: "22",
        r: "3",
        fill: "#d97706"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "102",
        cy: "18",
        r: "3",
        fill: "#b45309"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 85 40 L 85 30 L 92 22 L 102 18",
        fill: "none",
        stroke: "#fef08a",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "110",
        y: "20",
        fontSize: "4.5",
        fill: "#fde047",
        fontWeight: "bold"
      }, "PROTE\xCDNA"), /*#__PURE__*/React.createElement("text", {
        x: "110",
        y: "26",
        fontSize: "3.5",
        fill: "#fef08a"
      }, "2. Traducci\xF3n"), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
        id: "arrow-green",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto-start-reverse"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z",
        fill: "#10b981"
      }))))
    }];

    // ==========================================
    // SIMULADOR HARDCORE (SPLIT-SCREEN)
    // ==========================================

    const hardcoreQuiz = [
    // CONTEXTO 1: CINEMÁTICA Y GRÁFICAS (Preguntas 0 a 3)
    {
      contextId: 1,
      theme: "Física - Cinemática",
      contextTitle: "Prueba de Frenado en Carretera",
      contextText: "Una compañía de seguridad vial está probando el sistema de frenos de una nueva motocicleta en una pista recta del Meta. La telemetría de la motocicleta envía datos durante 12 segundos, generando la siguiente gráfica de Velocidad vs. Tiempo. El piloto acelera desde el reposo, mantiene la velocidad de crucero y luego realiza una frenada de emergencia al ver un obstáculo.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-2xl shadow-inner border border-slate-700 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[350px] overflow-visible drop-shadow-xl",
        viewBox: "-25 -10 140 130"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "105",
        y2: "90",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "10",
        y2: "-5",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("text", {
        x: "55",
        y: "105",
        fontSize: "5.5",
        fill: "#94a3b8",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "TIEMPO (s) \u2192"), /*#__PURE__*/React.createElement("text", {
        x: "-8",
        y: "42",
        fontSize: "5.5",
        fill: "#94a3b8",
        transform: "rotate(-90 -8,42)",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "VELOCIDAD (m/s) \u2191"), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "40",
        x2: "105",
        y2: "40",
        stroke: "#334155",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "10",
        y: "100",
        fontSize: "4.5",
        fill: "#cbd5e1",
        textAnchor: "middle"
      }, "0"), /*#__PURE__*/React.createElement("text", {
        x: "30",
        y: "100",
        fontSize: "4.5",
        fill: "#cbd5e1",
        textAnchor: "middle"
      }, "4"), /*#__PURE__*/React.createElement("text", {
        x: "70",
        y: "100",
        fontSize: "4.5",
        fill: "#cbd5e1",
        textAnchor: "middle"
      }, "10"), /*#__PURE__*/React.createElement("text", {
        x: "90",
        y: "100",
        fontSize: "4.5",
        fill: "#cbd5e1",
        textAnchor: "middle"
      }, "12"), /*#__PURE__*/React.createElement("text", {
        x: "7",
        y: "41.5",
        fontSize: "4.5",
        fill: "#cbd5e1",
        textAnchor: "end"
      }, "30"), /*#__PURE__*/React.createElement("path", {
        d: "M 10 90 L 30 40 L 70 40 L 90 90",
        fill: "none",
        stroke: "#22d3ee",
        strokeWidth: "4.5",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "90",
        r: "2.5",
        fill: "#fff"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "30",
        cy: "40",
        r: "2.5",
        fill: "#fff"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "70",
        cy: "40",
        r: "2.5",
        fill: "#fff"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "90",
        cy: "90",
        r: "2.5",
        fill: "#fff"
      }))),
      question: "Según la gráfica, ¿en qué intervalo de tiempo la motocicleta viajó con aceleración nula (cero aceleración)?",
      options: ["Entre los 0 y 4 segundos.", "Entre los 4 y 10 segundos.", "Entre los 10 y 12 segundos.", "Durante todo el trayecto de 12 segundos."],
      correct: 1,
      feedback: "¡Lectura gráfica perfecta! Entre los 4 y 10 segundos, la línea de velocidad es completamente horizontal y plana (se mantiene en 30 m/s). Si la velocidad no cambia, no hay aceleración (a = 0)."
    }, {
      contextId: 1,
      theme: "Física - Aceleración",
      question: "¿Cuál de las siguientes afirmaciones describe correctamente lo que ocurre en el intervalo entre el segundo 10 y el segundo 12?",
      options: ["La motocicleta va en reversa.", "La motocicleta experimenta una aceleración negativa (frenado) constante.", "La motocicleta mantiene una velocidad de 30 m/s.", "La motocicleta se detiene instantáneamente en el segundo 10."],
      correct: 1,
      feedback: "¡Excelente! La pendiente de la línea es descendente. La velocidad cae desde 30 m/s en el seg 10 hasta 0 m/s en el seg 12. Esto representa el proceso de frenado (desaceleración constante)."
    }, {
      contextId: 1,
      theme: "Física - Distancia",
      question: "Aplicando el secreto del 'área bajo la curva', ¿cuánta distancia en metros recorrió la motocicleta EXCLUSIVAMENTE durante el intervalo en el que su velocidad fue constante (entre los 4 y 10 segundos)?",
      options: ["30 metros.", "60 metros.", "180 metros.", "300 metros."],
      correct: 2,
      feedback: "¡Cálculo de campeón 400+! Entre los 4s y 10s se forma un rectángulo. La base del rectángulo es el tiempo: de 4 a 10 hay 6 segundos. La altura es la velocidad: 30 m/s. Área del rectángulo = base × altura = 6 × 30 = 180 metros."
    }, {
      contextId: 1,
      theme: "Física - Dinámica (Newton)",
      question: "Basado en la Segunda Ley de Newton (F = m × a), si los ingenieros decidieran repetir la prueba de frenado exactamente igual (aplicando la misma fuerza en los frenos) pero añadiendo un pasajero muy pesado en la moto, ¿qué pasaría con el intervalo de frenado (10s a 12s)?",
      options: ["Frenaría más rápido, acortando el tiempo a 1 segundo.", "Tomaría más tiempo frenar (la línea sería menos empinada), porque a mayor masa, menor desaceleración para la misma fuerza.", "No afectaría en nada, la gráfica sería idéntica.", "La moto no podría frenar de ninguna manera."],
      correct: 1,
      feedback: "¡Dominio de Newton! F = m × a. Si la Fuerza del freno (F) es constante, y la masa (m) aumenta con el pasajero, la aceleración de frenado (a) tiene que DISMINUIR. Si desacelera menos, le tomará más segundos detenerse."
    },
    // CONTEXTO 2: TERMODINÁMICA Y CALOR (Preguntas 4 a 7)
    {
      contextId: 2,
      theme: "Física - Termodinámica",
      contextTitle: "El Termo de Café",
      contextText: "Un estudiante de ingeniería diseña un nuevo termo insulado para mantener el café caliente durante las expediciones. El termo tiene tres barreras de protección: 1) Una pared doble de acero inoxidable con un 'Vacío' (sin aire) en el medio. 2) Una tapa de plástico grueso. 3) Un recubrimiento interno brillante tipo espejo. El estudiante vierte café hirviendo a 90°C en un ambiente que está a 15°C.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-3xl shadow-inner border border-slate-700 mt-6 font-mono text-sm flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-[200px] h-64 overflow-visible",
        viewBox: "0 0 100 120"
      }, /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "10",
        fontSize: "5",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Ambiente Exterior (15\xB0C)"), /*#__PURE__*/React.createElement("path", {
        d: "M 20 20 L 20 100 A 30 15 0 0 0 80 100 L 80 20 Z",
        fill: "none",
        stroke: "#64748b",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 25 25 L 25 95 A 25 10 0 0 0 75 95 L 75 25 Z",
        fill: "none",
        stroke: "#93c5fd",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 26 40 L 26 95 A 24 9 0 0 0 74 95 L 74 40 Z",
        fill: "#78350f"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "70",
        fontSize: "6",
        fill: "#fef3c7",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Caf\xE9 (90\xB0C)"), /*#__PURE__*/React.createElement("rect", {
        x: "15",
        y: "15",
        width: "70",
        height: "5",
        fill: "#0f172a",
        rx: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "18.5",
        fontSize: "3.5",
        fill: "#f8fafc",
        textAnchor: "middle"
      }, "Tapa de Pl\xE1stico"), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "60",
        x2: "22",
        y2: "60",
        stroke: "#facc15",
        strokeWidth: "1",
        strokeDasharray: "1 1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "-5",
        y: "61",
        fontSize: "4",
        fill: "#facc15",
        fontWeight: "bold"
      }, "Vac\xEDo (Sin aire)"), /*#__PURE__*/React.createElement("line", {
        x1: "88",
        y1: "40",
        x2: "75",
        y2: "40",
        stroke: "#38bdf8",
        strokeWidth: "1",
        strokeDasharray: "1 1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "90",
        y: "41",
        fontSize: "4",
        fill: "#38bdf8",
        fontWeight: "bold"
      }, "Espejo interno"))),
      question: "Físicamente, ¿en qué dirección intentará fluir la energía térmica (calor) en esta situación?",
      options: ["El frío del ambiente (15°C) fluirá hacia el interior del termo para enfriar el café.", "El calor del café (90°C) fluirá hacia el ambiente exterior intentando equilibrar las temperaturas.", "El calor y el frío chocarán en la pared de acero anulándose.", "La energía no fluirá en ninguna dirección por estar dentro de un termo."],
      correct: 1,
      feedback: "¡Principio Cero de la Termodinámica! El frío NO se mueve, es solo la ausencia de calor. El calor (energía) SIEMPRE viaja desde el objeto más caliente (Café a 90°C) hacia el más frío (Ambiente a 15°C) hasta que se alcance el equilibrio térmico."
    }, {
      contextId: 2,
      theme: "Física - Conducción",
      question: "La pared doble del termo tiene un 'Vacío' (extracción total del aire) entre las dos capas de acero. ¿Qué mecanismo de transferencia de calor se está bloqueando principalmente al eliminar el aire y la materia en ese espacio?",
      options: ["Radiación y Electromagnetismo.", "Magnetismo e inducción térmica.", "Conducción y Convección, ya que ambos necesitan materia (sólida o fluida) para que los átomos transfieran el calor.", "Exclusivamente la Radiación, porque no hay luz en el vacío."],
      correct: 2,
      feedback: "¡Ingeniería térmica perfecta! La Conducción requiere átomos chocando entre sí (sólidos), y la Convección requiere fluidos (gases/líquidos) circulando. Si haces un VACÍO (no hay nada de materia), es físicamente imposible que el calor escape por contacto o corrientes."
    }, {
      contextId: 2,
      theme: "Física - Radiación",
      question: "Si el Vacío bloquea la conducción y convección, ¿para qué sirve el recubrimiento brillante tipo 'espejo' en la capa interna que toca el café?",
      options: ["Para que el termo se vea más estético por dentro.", "Para rebotar y atrapar el calor que intenta escapar por Radiación (ondas electromagnéticas).", "Para evitar que el café manche el acero con el tiempo.", "Para aumentar la presión del café hirviendo y evitar que se evapore."],
      correct: 1,
      feedback: "¡Estrategia maestra del termo! La Radiación (como la luz solar o el calor infrarrojo del café) SÍ puede viajar a través del vacío. El material tipo espejo refleja las ondas infrarrojas de vuelta hacia el café, bloqueando la única ruta de escape que le quedaba a la energía térmica."
    }, {
      contextId: 2,
      theme: "Física - Equilibrio Térmico",
      question: "Si dejas el termo en la mesa durante tres días seguidos sin abrirlo, ¿cuál será el estado final de la temperatura del café?",
      options: ["Se mantendrá eternamente en 90°C porque el termo bloquea el 100% del calor.", "Se congelará a 0°C porque el acero inoxidable absorbe frío.", "Caerá lentamente hasta estabilizarse en exactamente 15°C (Equilibrio Térmico con el ambiente).", "Subirá a 100°C por la acumulación de gases en el interior."],
      correct: 2,
      feedback: "¡Entendimiento del Universo! Ningún aislante es 100% perfecto (la tapa pierde calor lentamente). Eventualmente, las temperaturas siempre se igualan. Al cabo de los días, el café terminará a 15°C, en perfecto equilibrio térmico con la habitación."
    },
    // CONTEXTO 3: GENÉTICA MOLECULAR (Preguntas 8 a 11)
    {
      contextId: 3,
      theme: "Biología - Genética Molecular",
      contextTitle: "La Proteína Defectuosa (Miostatina)",
      contextText: "En la ganadería Belga, existe una raza de vacas llamada 'Blanco Azul Belga', famosa por tener una masa muscular hipertrofiada (músculos gigantes). Los genetistas descubrieron que esto no se debe a esteroides, sino a una mutación natural en su ADN. El gen responsable codifica una proteína llamada 'Miostatina', cuya función normal es ponerle un freno al crecimiento muscular. Al estar mutado el ADN, la proteína sale defectuosa y el músculo crece sin límite.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-sm h-64 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "10",
        fontSize: "5",
        fill: "#475569",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Vaca Normal"), /*#__PURE__*/React.createElement("path", {
        d: "M 10 25 Q 15 20 20 25 T 30 25 T 40 25",
        fill: "none",
        stroke: "#10b981",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "32",
        fontSize: "4",
        fill: "#059669",
        textAnchor: "middle"
      }, "ADN Sano"), /*#__PURE__*/React.createElement("line", {
        x1: "25",
        y1: "38",
        x2: "25",
        y2: "45",
        stroke: "#94a3b8",
        strokeWidth: "1",
        markerEnd: "url(#arrow-basic)"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "15",
        y: "50",
        width: "20",
        height: "10",
        rx: "2",
        fill: "#dcfce7",
        stroke: "#16a34a",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "56",
        fontSize: "3",
        fill: "#14532d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Prote\xEDna Miostatina"), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "59",
        fontSize: "2.5",
        fill: "#14532d",
        textAnchor: "middle"
      }, "(Frena el m\xFAsculo)"), /*#__PURE__*/React.createElement("line", {
        x1: "25",
        y1: "65",
        x2: "25",
        y2: "72",
        stroke: "#94a3b8",
        strokeWidth: "1",
        markerEnd: "url(#arrow-basic)"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "80",
        fontSize: "4",
        fill: "#475569",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "M\xFAsculo Normal"), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "10",
        fontSize: "5",
        fill: "#1e3a8a",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Vaca Blanco Azul"), /*#__PURE__*/React.createElement("path", {
        d: "M 60 25 Q 65 20 70 25 L 73 22 L 75 25 T 90 25",
        fill: "none",
        stroke: "#f43f5e",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "72",
        cy: "23",
        r: "1.5",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "32",
        fontSize: "4",
        fill: "#e11d48",
        textAnchor: "middle"
      }, "ADN con Mutaci\xF3n"), /*#__PURE__*/React.createElement("line", {
        x1: "75",
        y1: "38",
        x2: "75",
        y2: "45",
        stroke: "#94a3b8",
        strokeWidth: "1",
        markerEnd: "url(#arrow-basic)"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 65 50 L 85 50 L 82 55 L 85 60 L 65 60 Z",
        fill: "#fee2e2",
        stroke: "#e11d48",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "55",
        fontSize: "3",
        fill: "#7f1d1d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Prote\xEDna Rota"), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "58",
        fontSize: "2.5",
        fill: "#7f1d1d",
        textAnchor: "middle"
      }, "(No frena)"), /*#__PURE__*/React.createElement("line", {
        x1: "75",
        y1: "65",
        x2: "75",
        y2: "72",
        stroke: "#94a3b8",
        strokeWidth: "1",
        markerEnd: "url(#arrow-basic)"
      }), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "80",
        fontSize: "5",
        fill: "#1e3a8a",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Doble Musculatura!"), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "10",
        x2: "50",
        y2: "90",
        stroke: "#cbd5e1",
        strokeWidth: "1",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("marker", {
        id: "arrow-basic",
        viewBox: "0 0 10 10",
        refX: "5",
        refY: "5",
        markerWidth: "4",
        markerHeight: "4",
        orient: "auto-start-reverse"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 0 L 10 5 L 0 10 z",
        fill: "#94a3b8"
      }))))),
      question: "De acuerdo con el 'Dogma Central de la Biología Molecular', ¿cuál es el mensajero que se encarga de leer la receta con la mutación en el núcleo (ADN) y llevar esa información defectuosa hasta los ribosomas para fabricar la proteína rota?",
      options: ["Los glóbulos rojos.", "El ARN mensajero (ARNm).", "Los aminoácidos flotantes.", "La propia proteína Miostatina."],
      correct: 1,
      feedback: "¡Ruta molecular perfecta! El ADN NUNCA sale del núcleo celular. Para enviar las instrucciones de fabricación a la fábrica (Ribosoma), el ADN es copiado temporalmente por una molécula viajera llamada ARN mensajero."
    }, {
      contextId: 3,
      theme: "Biología - Proteínas",
      question: "Observando la gráfica, el ADN mutado produce una proteína que tiene una FORMA FÍSICA diferente (dibujada con bordes rotos). ¿Por qué un simple cambio en la forma estructural de la proteína hace que el músculo crezca sin control?",
      options: ["Porque las proteínas rotas actúan como esteroides anabólicos inyectados.", "En biología, la FORMA de una proteína determina su FUNCIÓN. Al estar rota, no encaja en los receptores celulares para dar la orden de 'frenar'.", "Porque el cuerpo detecta la proteína rota y se inflama generando más músculo.", "Porque la vaca come el doble para compensar la proteína dañada."],
      correct: 1,
      feedback: "¡Principio biológico universal (Forma = Función)! Las moléculas funcionan como llaves y cerraduras. La Miostatina sana tiene la forma exacta para encajar en el músculo y decirle 'para de crecer'. La proteína mutada está deforme, no encaja en la cerradura, y el músculo sigue creciendo ignorando los límites."
    }, {
      contextId: 3,
      theme: "Biología - Mutaciones",
      question: "Si el ganadero quiere que esta raza de vacas hiper-musculosas se mantenga en el tiempo criando nuevos terneros, ¿en qué células de la vaca debe estar obligatoriamente alojada esta mutación del ADN para que pueda ser heredada a sus hijos?",
      options: ["En las células de su tejido muscular, porque ahí es donde ocurre el efecto.", "En los glóbulos blancos de su sangre.", "En los gametos (óvulos y espermatozoides).", "En todas las células de la piel."],
      correct: 2,
      feedback: "¡Filtro de herencia superado! Si tú vas al gimnasio (mutas tu músculo localmente), tu hijo no nacerá musculoso. Para que un rasgo pase a la siguiente generación, la información del ADN modificado debe estar empacada en las células sexuales o reproductivas (gametos)."
    }, {
      contextId: 3,
      theme: "CTS - Implicaciones",
      question: "Desde un punto de vista evolutivo y ambiental, ¿cuál podría ser una desventaja seria de criar masivamente esta raza de vacas con 'doble musculatura' frente a las vacas normales en las llanuras abiertas?",
      options: ["Darán una carne venenosa para el consumo humano debido a la mutación.", "Tendrán una mayor demanda calórica y energética, siendo menos resistentes a épocas de sequía extrema donde escasea el pasto.", "Desarrollarán la capacidad de cazar a otros animales para suplir su falta de miostatina.", "Se extinguirán en una sola generación porque las mutaciones siempre causan esterilidad inmediata."],
      correct: 1,
      feedback: "¡Análisis CTS y Evolución! Las vacas hipermusculosas son geniales para el mercado cárnico, pero en la naturaleza, mantener montañas de músculo cuesta MUCHÍSIMA energía (comida). En un ecosistema duro con sequías, las vacas musculosas morirían de hambre rápido, mientras que las normales sobrevivirían con menos alimento."
    }];

    // Logic to handle Hardcore Quiz split-screen
    const currentQData = hardcoreQuiz[currentQIndex];
    // Buscar los datos del contexto maestro basándonos en el ID
    const currentContextData = hardcoreQuiz.find(q => q.contextId === currentQData.contextId && q.contextTitle) || currentQData;
    const handleAnswer = index => {
      if (hasAnswered) return;
      setSelectedAnswer(index);
      setHasAnswered(true);
      if (index === currentQData.correct) setScore(score + 1);
    };
    const nextQuestion = () => {
      if (currentQIndex < hardcoreQuiz.length - 1) {
        setCurrentQIndex(currentQIndex + 1);
        setSelectedAnswer(null);
        setHasAnswered(false);
      } else {
        setShowResults(true);
      }
    };
    const resetQuiz = () => {
      setCurrentQIndex(0);
      setScore(0);
      setShowResults(false);
      setSelectedAnswer(null);
      setHasAnswered(false);
    };
    const getResultMessage = () => {
      const percentage = score / hardcoreQuiz.length;
      if (percentage === 1) return {
        title: "¡Titán de las Ciencias!",
        desc: "Nivel ICFES Dios. Has dominado gráficas de movimiento, termodinámica y el dogma central de la genética. Estás listo para el éxito."
      };
      if (percentage >= 0.6) return {
        title: "¡Nivel Superior Alcanzado!",
        desc: "Lograste pasar los temas finales. Tienes una comprensión robusta de la biología molecular y la física avanzada."
      };
      return {
        title: "Entrenamiento Riguroso",
        desc: "La física y genética avanzadas toman tiempo. Repasa los mapas visuales y vuelve a intentar el reto hardcore."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F0F4F8] font-sans text-slate-800 selection:bg-cyan-200"
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
      label: 'Teoría Avanzada'
    }, {
      id: 'practica',
      icon: Target,
      label: 'Simulador Hardcore'
    }].map(tab => /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-cyan-600 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
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
      src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=2000&q=80",
      alt: "Physics and Chemistry",
      className: "w-full h-full object-cover opacity-30 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-cyan-900/90 to-blue-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-full text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-4 h-4"
    }), " Competencias de Cierre"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "F\xEDsica y Gen\xE9tica ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400"
    }, "Avanzada")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "La pieza final del curr\xEDculo. Aprende a dominar las gr\xE1ficas de movimiento, los secretos de la transferencia de calor y la ingenier\xEDa del ADN que separa a los expertos del resto.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement(Activity, {
      className: "w-24 h-24 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse",
      style: {
        animationDuration: '3s'
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 w-full bg-slate-900/80 px-4 py-3 rounded-xl border border-white/10 flex items-center justify-between shadow-inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-[9px] text-slate-400 uppercase tracking-widest"
    }, "Enfoque"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-cyan-400 font-bold text-sm"
    }, "F\xEDsica y Vida")), /*#__PURE__*/React.createElement(CheckCircle, {
      className: "w-5 h-5 text-teal-400"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "Los Pilares del Cierre"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
    }, [{
      t: "Cinemática",
      d: "Aceleración, frenado y distancias.",
      c: "bg-cyan-100 text-cyan-600",
      i: TrendingUp
    }, {
      t: "Termodinámica",
      d: "Calor vs temperatura y transferencias.",
      c: "bg-orange-100 text-orange-600",
      i: Flame
    }, {
      t: "Genética Mol.",
      d: "Del ADN mutado a la proteína física.",
      c: "bg-rose-100 text-rose-600",
      i: Dna
    }].map((item, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex flex-col items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.c}`
    }, /*#__PURE__*/React.createElement(item.i, {
      className: "w-6 h-6"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 text-sm mb-1"
    }, item.t), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 leading-relaxed"
    }, item.d)))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-br from-cyan-600 to-blue-800 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
      onClick: () => setActiveTab('practica')
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20"
    }, /*#__PURE__*/React.createElement(Target, {
      className: "w-6 h-6 text-white"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold mb-3"
    }, "Modo Hardcore"), /*#__PURE__*/React.createElement("p", {
      className: "text-cyan-100 text-sm leading-relaxed"
    }, "Enfrenta 12 preguntas densas sobre gr\xE1ficas de motos, termos aislantes y mutaciones vacunas.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-cyan-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Iniciar Reto Final ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-10"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "La Teor\xEDa Avanzada"), /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mb-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg leading-relaxed"
    }, "Mapas de infograf\xEDa gigante. Domina la f\xEDsica de los cuerpos en movimiento, el calor universal y la ingenier\xEDa gen\xE9tica paso a paso.")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-12"
    }, theoryCards.map((card, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: `bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden flex flex-col lg:flex-row min-h-[400px] ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-8 md:p-12 lg:w-5/12 flex flex-col justify-center bg-white z-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: `p-4 bg-${card.color}-100 rounded-2xl`
    }, /*#__PURE__*/React.createElement(card.icon, {
      className: `w-8 h-8 text-${card.color}-600`
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-3xl font-black text-slate-800 tracking-tight leading-tight"
    }, card.title)), card.content), /*#__PURE__*/React.createElement("div", {
      className: `bg-slate-900 p-8 md:p-12 lg:w-7/12 ${idx % 2 !== 0 ? 'border-t lg:border-t-0 lg:border-r' : 'border-t lg:border-t-0 lg:border-l'} border-slate-800 relative overflow-hidden flex items-center justify-center`
    }, /*#__PURE__*/React.createElement("div", {
      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${card.color}-500/10 rounded-full blur-3xl pointer-events-none`
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full max-w-4xl flex justify-center items-center h-full"
    }, card.visual)))))), activeTab === 'practica' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-500 pt-4"
    }, !showResults ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(6,182,212,0.15)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-10 flex flex-col relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex w-max items-center gap-2 px-3 py-1.5 bg-cyan-100 text-cyan-700 font-bold text-[10px] uppercase tracking-widest rounded-md mb-6 border border-cyan-200 shadow-sm relative z-10"
    }, /*#__PURE__*/React.createElement(BookOpen, {
      className: "w-3 h-3"
    }), " Lectura de Contexto"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-black text-slate-800 mb-4 leading-tight relative z-10"
    }, currentContextData.contextTitle), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-600 text-sm leading-relaxed mb-6 relative z-10 text-justify"
    }, currentContextData.contextText), /*#__PURE__*/React.createElement("div", {
      className: "mt-auto w-full relative z-10"
    }, currentContextData.contextVisual)), /*#__PURE__*/React.createElement("div", {
      className: "lg:w-7/12 p-6 md:p-10 flex flex-col bg-white relative"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center justify-between mb-8 pb-4 border-b border-slate-100"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "bg-slate-900 text-white font-mono font-bold text-xs px-2 py-1 rounded"
    }, "Q", currentQIndex + 1), /*#__PURE__*/React.createElement("span", {
      className: "text-xs font-bold text-slate-400 uppercase tracking-widest"
    }, currentQData.theme)), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold text-sm font-mono"
    }, currentQIndex + 1, "/", hardcoreQuiz.length)), /*#__PURE__*/React.createElement("h3", {
      className: "text-xl font-bold text-slate-800 leading-snug mb-8"
    }, currentQData.question), /*#__PURE__*/React.createElement("div", {
      className: "space-y-3 mb-10 flex-grow"
    }, currentQData.options.map((option, index) => {
      const isSelected = selectedAnswer === index;
      const isCorrect = currentQData.correct === index;
      let buttonClass = "w-full text-left p-5 rounded-2xl border-2 font-medium transition-all duration-300 flex items-start gap-4 ";
      let iconClass = "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ";
      if (!hasAnswered) {
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-cyan-400 hover:bg-cyan-50/30";
        iconClass += "border-slate-300 text-transparent";
      } else {
        if (isCorrect) {
          buttonClass += "bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
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
        className: "text-[15px] leading-snug"
      }, option));
    })), hasAnswered && /*#__PURE__*/React.createElement("div", {
      className: `p-6 rounded-2xl mb-8 animate-in slide-in-from-bottom-4 border shadow-sm ${selectedAnswer === currentQData.correct ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`
    }, /*#__PURE__*/React.createElement("p", {
      className: "font-bold text-sm leading-relaxed"
    }, currentQData.feedback)), /*#__PURE__*/React.createElement("div", {
      className: "flex justify-end pt-4 mt-auto"
    }, /*#__PURE__*/React.createElement("button", {
      onClick: nextQuestion,
      disabled: !hasAnswered,
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-cyan-600 text-white hover:bg-cyan-700 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`
    }, currentQIndex === hardcoreQuiz.length - 1 ? 'Finalizar Simulacro' : 'Siguiente Pregunta', /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-5 h-5"
    }))))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-600/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-cyan-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(6,182,212,0.5)] border-4 border-cyan-300"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, resultData.title), /*#__PURE__*/React.createElement("p", {
      className: "relative z-10 text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
    }, resultData.desc), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 mb-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-cyan-500 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", hardcoreQuiz.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-cyan-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Reto Final")))));
  }
  window.renderCNModule6 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloCienciasFinal));
  };
})();