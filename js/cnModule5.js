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
  function ModuloTemasFiltro() {
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
      id: 'genetica',
      title: 'Genética y Cuadros de Punnett',
      icon: Dna,
      color: 'violet',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "El ICFES eval\xFAa si entiendes c\xF3mo se heredan los rasgos f\xEDsicos (Leyes de Mendel). Olvida la teor\xEDa confusa y mira el cuadro como un cruce de caminos donde ", /*#__PURE__*/React.createElement("strong", null, "cada padre aporta una sola letra"), " al hijo."), /*#__PURE__*/React.createElement("div", {
        className: "bg-violet-50/50 p-6 rounded-2xl border border-violet-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-violet-800 block mb-4 text-lg"
      }, "Gu\xEDa paso a paso (Ej. Resistencia a garrapatas):"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-violet-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-violet-700"
      }, "1. Las Letras:"), " Letra May\xFAscula (", /*#__PURE__*/React.createElement("strong", null, "R"), ") = Gen Dominante (El rasgo fuerte que siempre gana). Letra Min\xFAscula (", /*#__PURE__*/React.createElement("strong", null, "r"), ") = Gen Recesivo (El rasgo d\xE9bil).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-violet-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-violet-700"
      }, "2. El Cruce:"), " Colocamos los genes del Toro arriba y los de la Vaca a la izquierda. Llenamos las casillas bajando la letra del padre y cruzando la de la madre.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-violet-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-violet-700"
      }, "3. El Resultado:"), " Cada casilla vale ", /*#__PURE__*/React.createElement("strong", null, "25%"), ". Basta con que haya UNA letra may\xFAscula (R) para que el ternero nazca resistente. Para nacer susceptible (enfermo), debe heredar obligatoriamente las dos min\xFAsculas (rr)."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "0 0 110 140"
      }, /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "8",
        fontSize: "5",
        fill: "#e9d5ff",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "0.5"
      }, "GENES DEL TORO (Rr)"), /*#__PURE__*/React.createElement("text", {
        x: "8",
        y: "65",
        fontSize: "5",
        fill: "#e9d5ff",
        fontWeight: "bold",
        textAnchor: "middle",
        transform: "rotate(-90 8,65)",
        letterSpacing: "0.5"
      }, "GENES DE LA VACA (Rr)"), /*#__PURE__*/React.createElement("text", {
        x: "47.5",
        y: "20",
        fontSize: "8",
        fill: "#c084fc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "R"), /*#__PURE__*/React.createElement("text", {
        x: "82.5",
        y: "20",
        fontSize: "8",
        fill: "#c084fc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "r"), /*#__PURE__*/React.createElement("text", {
        x: "18",
        y: "49",
        fontSize: "8",
        fill: "#c084fc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "R"), /*#__PURE__*/React.createElement("text", {
        x: "18",
        y: "84",
        fontSize: "8",
        fill: "#c084fc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "r"), /*#__PURE__*/React.createElement("rect", {
        x: "30",
        y: "28",
        width: "70",
        height: "70",
        fill: "#1e1b4b",
        stroke: "#a855f7",
        strokeWidth: "2.5",
        rx: "4",
        className: "drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "65",
        y1: "28",
        x2: "65",
        y2: "98",
        stroke: "#a855f7",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "30",
        y1: "63",
        x2: "100",
        y2: "63",
        stroke: "#a855f7",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "32",
        y: "30",
        width: "31",
        height: "31",
        fill: "#dcfce7",
        rx: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "47.5",
        y: "45",
        fontSize: "9",
        fill: "#166534",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "RR"), /*#__PURE__*/React.createElement("text", {
        x: "47.5",
        y: "54",
        fontSize: "4.5",
        fill: "#15803d",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Resistente"), /*#__PURE__*/React.createElement("rect", {
        x: "67",
        y: "30",
        width: "31",
        height: "31",
        fill: "#dcfce7",
        rx: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "82.5",
        y: "45",
        fontSize: "9",
        fill: "#166534",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Rr"), /*#__PURE__*/React.createElement("text", {
        x: "82.5",
        y: "54",
        fontSize: "4.5",
        fill: "#15803d",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Resistente"), /*#__PURE__*/React.createElement("rect", {
        x: "32",
        y: "65",
        width: "31",
        height: "31",
        fill: "#dcfce7",
        rx: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "47.5",
        y: "80",
        fontSize: "9",
        fill: "#166534",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Rr"), /*#__PURE__*/React.createElement("text", {
        x: "47.5",
        y: "89",
        fontSize: "4.5",
        fill: "#15803d",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Resistente"), /*#__PURE__*/React.createElement("rect", {
        x: "67",
        y: "65",
        width: "31",
        height: "31",
        fill: "#fee2e2",
        rx: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "82.5",
        y: "80",
        fontSize: "9",
        fill: "#991b1b",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "rr"), /*#__PURE__*/React.createElement("text", {
        x: "82.5",
        y: "89",
        fontSize: "4.5",
        fill: "#b91c1c",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Susceptible"), /*#__PURE__*/React.createElement("rect", {
        x: "15",
        y: "108",
        width: "85",
        height: "28",
        fill: "#0f172a",
        stroke: "#334155",
        strokeWidth: "1.5",
        rx: "4"
      }), /*#__PURE__*/React.createElement("text", {
        x: "57.5",
        y: "117",
        fontSize: "5",
        fill: "#f8fafc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Conclusi\xF3n del Cruce (Rr x Rr):"), /*#__PURE__*/React.createElement("text", {
        x: "57.5",
        y: "125",
        fontSize: "4.5",
        fill: "#4ade80",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "75% (3 de 4) nacen Resistentes"), /*#__PURE__*/React.createElement("text", {
        x: "57.5",
        y: "132",
        fontSize: "4.5",
        fill: "#f87171",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "25% (1 de 4) nacen Susceptibles"))
    }, {
      id: 'estequiometria',
      title: 'Química: Conservación de la Masa',
      icon: FlaskConical,
      color: 'pink',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "En el ICFES, rara vez te pedir\xE1n balancear de cero, pero s\xED evaluar\xE1n si comprendes que ", /*#__PURE__*/React.createElement("strong", null, "nada se pierde, todo se transforma"), " (Ley de Lavoisier)."), /*#__PURE__*/React.createElement("div", {
        className: "bg-pink-50/50 p-6 rounded-2xl border border-pink-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-pink-800 block mb-4 text-lg"
      }, "Lectura de Ecuaciones:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-pink-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-pink-700"
      }, "Coeficientes (N\xFAmeros Grandes):"), " Indican la cantidad de mol\xE9culas enteras. (Ej: ", /*#__PURE__*/React.createElement("strong", null, "2"), "H\u2082O significa dos mol\xE9culas de agua).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-pink-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-pink-700"
      }, "Sub\xEDndices (N\xFAmeros Peque\xF1os):"), " Indican cu\xE1ntos \xE1tomos hay de ese elemento DENTRO de la mol\xE9cula. (Ej: H", /*#__PURE__*/React.createElement("strong", null, "\u2082"), "O tiene 2 de Hidr\xF3geno).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-pink-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-pink-700"
      }, "El Balanceo:"), " Si hay 4 ox\xEDgenos en los reactivos (lado izquierdo), DEBE haber exactamente 4 ox\xEDgenos en los productos (lado derecho)."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "0 0 220 120"
      }, /*#__PURE__*/React.createElement("text", {
        x: "40",
        y: "15",
        fontSize: "8",
        fill: "#f472b6",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "REACTIVOS"), /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "45",
        r: "10",
        fill: "#1e293b",
        stroke: "#475569",
        strokeWidth: "2"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "45",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "34",
        cy: "45",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "31",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "59",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "CH\u2084"), /*#__PURE__*/React.createElement("text", {
        x: "46",
        y: "48",
        fontSize: "10",
        fill: "#64748b",
        fontWeight: "bold"
      }, "+"), /*#__PURE__*/React.createElement("circle", {
        cx: "62",
        cy: "38",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "76",
        cy: "38",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "62",
        cy: "56",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "76",
        cy: "56",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("text", {
        x: "69",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "2O\u2082"), /*#__PURE__*/React.createElement("line", {
        x1: "90",
        y1: "45",
        x2: "120",
        y2: "45",
        stroke: "#ec4899",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "118,41 126,45 118,49",
        fill: "#ec4899"
      }), /*#__PURE__*/React.createElement("text", {
        x: "160",
        y: "15",
        fontSize: "8",
        fill: "#f472b6",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "PRODUCTOS"), /*#__PURE__*/React.createElement("circle", {
        cx: "140",
        cy: "45",
        r: "10",
        fill: "#1e293b",
        stroke: "#475569",
        strokeWidth: "2"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "124",
        cy: "45",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "156",
        cy: "45",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("text", {
        x: "140",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "CO\u2082"), /*#__PURE__*/React.createElement("text", {
        x: "174",
        y: "48",
        fontSize: "10",
        fill: "#64748b",
        fontWeight: "bold"
      }, "+"), /*#__PURE__*/React.createElement("circle", {
        cx: "192",
        cy: "34",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "183",
        cy: "25",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "201",
        cy: "25",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "192",
        cy: "58",
        r: "8",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "183",
        cy: "67",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("circle", {
        cx: "201",
        cy: "67",
        r: "4.5",
        fill: "#e2e8f0"
      }), " ", /*#__PURE__*/React.createElement("text", {
        x: "192",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "2H\u2082O"), /*#__PURE__*/React.createElement("rect", {
        x: "45",
        y: "90",
        width: "130",
        height: "26",
        rx: "4",
        fill: "#4c1d95",
        stroke: "#f472b6",
        strokeWidth: "1.5",
        className: "drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
      }), /*#__PURE__*/React.createElement("text", {
        x: "110",
        y: "100",
        fontSize: "6",
        fill: "#fbcfe8",
        textAnchor: "middle",
        fontWeight: "bold",
        letterSpacing: "0.5"
      }, "CONTEO EXACTO DE \xC1TOMOS"), /*#__PURE__*/React.createElement("text", {
        x: "110",
        y: "109",
        fontSize: "6",
        fill: "#f472b6",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "1 Carbono | 4 Hidr\xF3genos | 4 Ox\xEDgenos"))
    }, {
      id: 'fluidos',
      title: 'Física: Fluidos y Densidad',
      icon: Droplets,
      color: 'blue',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Analiza por qu\xE9 los objetos flotan o se hunden, y c\xF3mo interact\xFAan l\xEDquidos que no se mezclan. Todo se reduce a una f\xF3rmula: ", /*#__PURE__*/React.createElement("strong", null, "Densidad = Masa / Volumen"), "."), /*#__PURE__*/React.createElement("div", {
        className: "bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-blue-800 block mb-4 text-lg"
      }, "Reglas de Flotabilidad:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-blue-700"
      }, "El m\xE1s denso, al fondo:"), " En una mezcla de l\xEDquidos, el que tiene mayor densidad (m\xE1s \"pesado\" por cm\xB3) siempre se ir\xE1 al fondo.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-blue-700"
      }, "Flotar:"), " Un objeto s\xF3lido flota si su densidad es MENOR que la del l\xEDquido.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-blue-700"
      }, "El Hielo:"), " El agua es casi la \xFAnica sustancia cuyo estado s\xF3lido (hielo) es MENOS denso que su estado l\xEDquido. Por eso el hielo flota."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-25 0 150 120"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 30 10 L 30 100 A 20 20 0 0 0 70 100 L 70 10",
        fill: "none",
        stroke: "#64748b",
        strokeWidth: "4",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "10",
        rx: "20",
        ry: "6",
        fill: "none",
        stroke: "#64748b",
        strokeWidth: "4"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 30 30 L 30 55 L 70 55 L 70 30 Z",
        fill: "#fef08a",
        opacity: "0.9"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "30",
        rx: "20",
        ry: "6",
        fill: "#facc15",
        opacity: "0.9"
      }), /*#__PURE__*/React.createElement("text", {
        x: "78",
        y: "44",
        fontSize: "6.5",
        fill: "#fde047",
        fontWeight: "bold"
      }, "Aceite (0.9 g/cm\xB3)"), /*#__PURE__*/React.createElement("line", {
        x1: "70",
        y1: "42.5",
        x2: "76",
        y2: "42.5",
        stroke: "#fde047",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "40",
        y: "24",
        width: "12",
        height: "12",
        fill: "#fb923c",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "22",
        y: "32",
        fontSize: "5.5",
        fill: "#fdba74",
        fontWeight: "bold",
        textAnchor: "end"
      }, "Madera (0.6)"), /*#__PURE__*/React.createElement("line", {
        x1: "24",
        y1: "30.5",
        x2: "38",
        y2: "30.5",
        stroke: "#fdba74",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 30 55 L 30 80 L 70 80 L 70 55 Z",
        fill: "#38bdf8",
        opacity: "0.85"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "55",
        rx: "20",
        ry: "6",
        fill: "#0ea5e9",
        opacity: "0.85"
      }), /*#__PURE__*/React.createElement("text", {
        x: "78",
        y: "69",
        fontSize: "6.5",
        fill: "#7dd3fc",
        fontWeight: "bold"
      }, "Agua (1.0 g/cm\xB3)"), /*#__PURE__*/React.createElement("line", {
        x1: "70",
        y1: "67.5",
        x2: "76",
        y2: "67.5",
        stroke: "#7dd3fc",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "55",
        cy: "65",
        r: "6.5",
        fill: "#f43f5e"
      }), /*#__PURE__*/React.createElement("text", {
        x: "22",
        y: "67",
        fontSize: "5.5",
        fill: "#fda4af",
        fontWeight: "bold",
        textAnchor: "end"
      }, "Pl\xE1stico (1.1)"), /*#__PURE__*/React.createElement("line", {
        x1: "24",
        y1: "65.5",
        x2: "47",
        y2: "65.5",
        stroke: "#fda4af",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 30 80 L 30 100 A 20 20 0 0 0 70 100 L 70 80 Z",
        fill: "#94a3b8",
        opacity: "0.95"
      }), /*#__PURE__*/React.createElement("ellipse", {
        cx: "50",
        cy: "80",
        rx: "20",
        ry: "6",
        fill: "#cbd5e1",
        opacity: "0.95"
      }), /*#__PURE__*/React.createElement("text", {
        x: "78",
        y: "94",
        fontSize: "6.5",
        fill: "#e2e8f0",
        fontWeight: "bold"
      }, "Mercurio (13.6 g/cm\xB3)"), /*#__PURE__*/React.createElement("line", {
        x1: "66",
        y1: "92.5",
        x2: "76",
        y2: "92.5",
        stroke: "#e2e8f0",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "43,108 57,108 50,94",
        fill: "#0f172a"
      }), /*#__PURE__*/React.createElement("text", {
        x: "22",
        y: "103",
        fontSize: "5.5",
        fill: "#94a3b8",
        fontWeight: "bold",
        textAnchor: "end"
      }, "Metal (7.8)"), /*#__PURE__*/React.createElement("line", {
        x1: "24",
        y1: "101.5",
        x2: "42",
        y2: "101.5",
        stroke: "#94a3b8",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }))
    }];

    // ==========================================
    // SIMULADOR HARDCORE (SPLIT-SCREEN)
    // ==========================================

    const hardcoreQuiz = [
    // CONTEXTO 1: GENÉTICA GANADERA (Arauca)
    {
      contextId: 1,
      theme: "Biología - Genética",
      contextTitle: "Ganadería en los Llanos Orientales",
      contextText: "En una finca ganadera de Arauca, se cría ganado de la raza Brahman. Los veterinarios estudian un gen que otorga 'Resistencia a la garrapata'. El gen resistente (R) es Dominante sobre el gen de susceptibilidad (r), el cual es Recesivo. El dueño de la finca cruza un toro que es Híbrido/Portador (Rr) con una vaca que también es Híbrida/Portadora (Rr).",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-[250px] h-48 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "20",
        y: "20",
        width: "60",
        height: "60",
        fill: "none",
        stroke: "#8b5cf6",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "20",
        x2: "50",
        y2: "80",
        stroke: "#8b5cf6",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "50",
        x2: "80",
        y2: "50",
        stroke: "#8b5cf6",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "-5",
        fontSize: "6",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Toro (Rr)"), /*#__PURE__*/React.createElement("text", {
        x: "-15",
        y: "50",
        fontSize: "6",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle",
        transform: "rotate(-90 -15,50)"
      }, "Vaca (Rr)"), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "12",
        fontSize: "10",
        fill: "#6d28d9",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "R"), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "12",
        fontSize: "10",
        fill: "#a855f7",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "r"), /*#__PURE__*/React.createElement("text", {
        x: "10",
        y: "40",
        fontSize: "10",
        fill: "#6d28d9",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "R"), /*#__PURE__*/React.createElement("text", {
        x: "10",
        y: "70",
        fontSize: "10",
        fill: "#a855f7",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "r"), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "40",
        fontSize: "10",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "?"), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "40",
        fontSize: "10",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "?"), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "70",
        fontSize: "10",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "?"), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "70",
        fontSize: "10",
        fill: "#4c1d95",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "?"))),
      question: "Basado en el cuadro de Punnett para este cruce (Rr x Rr), ¿cuál es el porcentaje de probabilidad de que un ternero nazca siendo SUSCEPTIBLE a la garrapata (es decir, sin el rasgo de resistencia)?",
      options: ["50%, porque la mitad de los genes de los padres son 'r'.", "25%, porque solo heredarán el rasgo recesivo si sacan la combinación 'rr'.", "0%, porque el gen dominante 'R' siempre anulará al recesivo.", "75%, porque es más probable heredar la susceptibilidad."],
      correct: 1,
      feedback: "¡Análisis Genético Perfecto! Al cruzar Rr x Rr, las 4 celdas del cuadro se llenan así: RR (Resistente), Rr (Resistente), Rr (Resistente) y rr (Susceptible). Solo 1 de las 4 opciones (1/4 o 25%) mostrará físicamente el rasgo recesivo."
    }, {
      contextId: 1,
      theme: "Biología - Genética",
      question: "Si el ganadero quiere ASEGURARSE al 100% de que todos los futuros terneros nazcan con resistencia a la garrapata, ¿cómo debería ser genéticamente el Toro que compre para cruzar con sus vacas (sin importar cómo sean las vacas)?",
      options: ["Debe comprar un Toro Híbrido (Rr), para mantener la variedad genética.", "Debe comprar un Toro Homocigoto Recesivo (rr).", "Debe comprar un Toro Homocigoto Dominante (RR).", "Es imposible asegurar un 100% de herencia genética en la naturaleza."],
      correct: 2,
      feedback: "¡Leyes de Mendel aplicadas! Si el toro es Homocigoto Dominante (RR), SIEMPRE aportará una 'R' mayúscula a sus hijos. Como la 'R' es dominante, todos los terneros serán resistentes (RR o Rr) sin importar lo que aporte la vaca. A esto se le llama fijar un rasgo."
    }, {
      contextId: 1,
      theme: "Biología - Fenotipos",
      question: "Supongamos que el ganadero decide cruzar un Toro completamente puro y dominante (RR) con una Vaca completamente susceptible (rr). ¿Cómo será físicamente (fenotipo) la primera generación de terneros nacidos de este cruce?",
      options: ["50% nacerán resistentes y 50% susceptibles.", "100% nacerán susceptibles, ya que la madre transmite más genética.", "100% nacerán resistentes a la garrapata.", "75% resistentes y 25% susceptibles."],
      correct: 2,
      feedback: "¡Cruce de líneas puras maestro! Todas las casillas del cuadro cruzarán la 'R' del padre con la 'r' de la madre, formando terneros 'Rr'. Al tener todos una 'R' mayúscula dominante, el 100% será físicamente resistente."
    }, {
      contextId: 1,
      theme: "Biología - Genética",
      question: "Por un error, un toro susceptible (rr) se escapa y se cruza con una vaca susceptible (rr). ¿Cuál es la probabilidad de que, por cuestión de azar, el ternero nazca con la codiciada resistencia a la garrapata (R)?",
      options: ["25%, porque es la probabilidad estándar de los recesivos.", "0%, es genéticamente imposible que herede lo que sus padres no tienen.", "50%, ya que es un volado de la naturaleza.", "100%, porque dos negativos hacen un positivo."],
      correct: 1,
      feedback: "¡Sentido común genético! Si ni el padre ni la madre poseen el gen dominante 'R' en su código de ADN, es absolutamente imposible (0%) que se lo transmitan a su cría."
    },
    // CONTEXTO 2: QUÍMICA Y FLUIDOS
    {
      contextId: 2,
      theme: "Química - Densidad",
      contextTitle: "Derrame en el Laboratorio",
      contextText: "En un accidente de laboratorio, un estudiante vierte en un mismo recipiente cilíndrico tres líquidos diferentes que no se mezclan entre sí (inmiscibles): Agua, Cloroformo y Aceite de Girasol. Además, caen dentro del recipiente dos objetos sólidos: Una moneda de Plata y un corcho de Madera.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-3xl shadow-inner border border-slate-700 mt-6 font-mono text-sm flex flex-col gap-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-800 p-3 rounded-xl border border-slate-600 flex justify-between items-center text-slate-300"
      }, /*#__PURE__*/React.createElement("span", null, "Densidad Agua:"), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-blue-400 font-bold"
      }, "1.00 g/cm\xB3")), /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-800 p-3 rounded-xl border border-slate-600 flex justify-between items-center text-slate-300"
      }, /*#__PURE__*/React.createElement("span", null, "Densidad Aceite:"), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-yellow-400 font-bold"
      }, "0.92 g/cm\xB3")), /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-800 p-3 rounded-xl border border-slate-600 flex justify-between items-center text-slate-300"
      }, /*#__PURE__*/React.createElement("span", null, "Densidad Cloroformo:"), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-fuchsia-400 font-bold"
      }, "1.49 g/cm\xB3")), /*#__PURE__*/React.createElement("div", {
        className: "h-px bg-slate-600 my-1"
      }), /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-800 p-3 rounded-xl border border-slate-600 flex justify-between items-center text-slate-300"
      }, /*#__PURE__*/React.createElement("span", null, "Densidad Corcho:"), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-orange-400 font-bold"
      }, "0.24 g/cm\xB3")), /*#__PURE__*/React.createElement("div", {
        className: "bg-slate-800 p-3 rounded-xl border border-slate-600 flex justify-between items-center text-slate-300"
      }, /*#__PURE__*/React.createElement("span", null, "Densidad Plata:"), " ", /*#__PURE__*/React.createElement("span", {
        className: "text-slate-400 font-bold"
      }, "10.49 g/cm\xB3"))),
      question: "Si observas el cilindro después de 10 minutos (cuando todo se ha estabilizado), ¿cuál será el orden EXACTO de los tres líquidos desde la superficie (arriba) hasta el fondo (abajo)?",
      options: ["Arriba: Agua / Medio: Aceite / Fondo: Cloroformo.", "Arriba: Cloroformo / Medio: Agua / Fondo: Aceite.", "Arriba: Aceite / Medio: Agua / Fondo: Cloroformo.", "Los tres líquidos se distribuirán aleatoriamente según su temperatura."],
      correct: 2,
      feedback: "¡Regla de Flotabilidad! El líquido menos denso (el más 'ligero') siempre va arriba, y el más denso (el más 'pesado') va al fondo. El Aceite es el menor (0.92), le sigue el Agua (1.00), y el más denso se hunde al fondo: el Cloroformo (1.49)."
    }, {
      contextId: 2,
      theme: "Física - Fluidos",
      question: "¿En qué posición exacta se encontrarán la moneda de Plata y el corcho de Madera dentro del recipiente?",
      options: ["Ambos flotarán en la superficie del aceite.", "La plata se hundirá hasta el fondo (debajo del cloroformo), y el corcho flotará en la superficie (sobre el aceite).", "El corcho se hundirá hasta el fondo, y la plata flotará en la interfaz entre el agua y el cloroformo.", "Ambos se quedarán atrapados en el agua (en la mitad)."],
      correct: 1,
      feedback: "¡Excelente deducción! El corcho (0.24) es menos denso que todos los líquidos, por lo que flotará en la capa más alta (el aceite). La plata (10.49) es más densa que todos los líquidos, por lo que se hundirá atravesando todo hasta tocar el vidrio del fondo."
    }, {
      contextId: 2,
      theme: "Física - Flotabilidad",
      question: "Si el estudiante deja caer un dado de plástico sólido cuya densidad es de 1.10 g/cm³, ¿qué comportamiento observarás en este dado dentro del tubo?",
      options: ["Flotará sobre el aceite porque pesa menos que el agua.", "Atravesará el aceite y el agua, pero se quedará flotando encima de la capa de cloroformo.", "Se hundirá como una piedra hasta golpear la moneda de plata en el fondo.", "Se disolverá al instante."],
      correct: 1,
      feedback: "¡Arquímedes puro! El plástico (1.10) es más denso que el aceite (0.92) y que el agua (1.00), por lo que se hundirá a través de ellos. Sin embargo, es MENOS denso que el cloroformo (1.49), por lo que actuará como 'flotador' sobre esa capa profunda."
    }, {
      contextId: 2,
      theme: "Física - Termodinámica",
      question: "El estudiante decide calentar el tubo. Al absorber el calor, el agua se expande y su densidad baja drásticamente de 1.00 g/cm³ a 0.90 g/cm³. El aceite mantiene su densidad estable en 0.92 g/cm³. ¿Qué fenómeno físico ocurrirá ante tus ojos?",
      options: ["El agua hervirá instantáneamente formando burbujas.", "El agua y el aceite intercambiarán posiciones: el agua subirá a la superficie y el aceite bajará a la segunda capa.", "El cloroformo subirá violentamente a la superficie desplazando a los demás.", "Todos los líquidos se mezclarán formando una única solución grisácea homogénea."],
      correct: 1,
      feedback: "¡Lógica de fluidos a otro nivel! Al calentarse y bajar su densidad a 0.90, el agua se vuelve 'más ligera' que el aceite (0.92). Por ley física, el fluido menos denso busca la parte más alta, provocando una inversión espectacular de las capas."
    },
    // CONTEXTO 3: QUÍMICA Y ESTEQUIOMETRÍA (NUEVO)
    {
      contextId: 3,
      theme: "Química - Reacciones",
      contextTitle: "Combustión en el Laboratorio",
      contextText: "En un laboratorio de un colegio de Arauca, los estudiantes usan un mechero de Bunsen. El mechero quema gas Metano (CH₄) combinándolo con el Oxígeno (O₂) del aire para producir Dióxido de Carbono (CO₂) y vapor de Agua (H₂O). La profesora les dibuja la ecuación química perfectamente balanceada para demostrar la Ley de Conservación de la Masa de Lavoisier.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-2xl shadow-inner border border-slate-700 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[300px] overflow-visible",
        viewBox: "0 0 220 120"
      }, /*#__PURE__*/React.createElement("text", {
        x: "40",
        y: "15",
        fontSize: "8",
        fill: "#f472b6",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "REACTIVOS"), /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "45",
        r: "10",
        fill: "#1e293b",
        stroke: "#475569",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "45",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "34",
        cy: "45",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "31",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "59",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "CH\u2084"), /*#__PURE__*/React.createElement("text", {
        x: "46",
        y: "48",
        fontSize: "10",
        fill: "#64748b",
        fontWeight: "bold"
      }, "+"), /*#__PURE__*/React.createElement("circle", {
        cx: "62",
        cy: "38",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "76",
        cy: "38",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "62",
        cy: "56",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "76",
        cy: "56",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("text", {
        x: "69",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "2O\u2082"), /*#__PURE__*/React.createElement("line", {
        x1: "90",
        y1: "45",
        x2: "120",
        y2: "45",
        stroke: "#ec4899",
        strokeWidth: "3.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "118,41 126,45 118,49",
        fill: "#ec4899"
      }), /*#__PURE__*/React.createElement("text", {
        x: "160",
        y: "15",
        fontSize: "8",
        fill: "#f472b6",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "PRODUCTOS"), /*#__PURE__*/React.createElement("circle", {
        cx: "140",
        cy: "45",
        r: "10",
        fill: "#1e293b",
        stroke: "#475569",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "124",
        cy: "45",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "156",
        cy: "45",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("text", {
        x: "140",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "CO\u2082"), /*#__PURE__*/React.createElement("text", {
        x: "174",
        y: "48",
        fontSize: "10",
        fill: "#64748b",
        fontWeight: "bold"
      }, "+"), /*#__PURE__*/React.createElement("circle", {
        cx: "192",
        cy: "34",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "183",
        cy: "25",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "201",
        cy: "25",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "192",
        cy: "58",
        r: "8",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "183",
        cy: "67",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "201",
        cy: "67",
        r: "4.5",
        fill: "#e2e8f0"
      }), /*#__PURE__*/React.createElement("text", {
        x: "192",
        y: "75",
        fontSize: "7",
        fill: "#94a3b8",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "2H\u2082O"))),
      question: "Observando la ecuación química y sus moléculas, ¿qué representa matemáticamente el número grande '2' que está escrito justo antes del símbolo del agua (2H₂O)?",
      options: ["Que hay 2 átomos individuales de Hidrógeno flotando en el aire.", "Que la molécula de agua completa pesa exactamente 2 gramos.", "Que se producen 2 moléculas completas de vapor de agua al final de la reacción.", "Que se necesitan obligatoriamente 2 litros de agua para apagar el fuego."],
      correct: 2,
      feedback: "¡Estructura atómica perfecta! El número grande (coeficiente) a la izquierda de la fórmula indica la cantidad de veces que se repite la molécula entera. El '2' significa que el fuego cocinó dos grupos independientes de H2O."
    }, {
      contextId: 3,
      theme: "Química - Proporciones",
      question: "Si los estudiantes abren más la válvula de gas y deciden quemar 3 moléculas exactas de Metano (CH₄) en lugar de solo 1, ¿cuántas moléculas de Oxígeno (O₂) necesitarán 'respirar' del ambiente para que la combustión sea perfecta y no sobre gas?",
      options: ["2 moléculas de Oxígeno.", "3 moléculas de Oxígeno.", "6 moléculas de Oxígeno.", "8 moléculas de Oxígeno."],
      correct: 2,
      feedback: "¡Balanceo estequiométrico mental! La receta original indica una relación 1 a 2 (1 de metano necesita 2 de oxígeno). Si triplicas el metano (x3), obligatoriamente debes triplicar el oxígeno (2 x 3 = 6) para mantener el balance."
    }, {
      contextId: 3,
      theme: "Química - Balance de Átomos",
      question: "Si cuentas meticulosamente los círculos rojos (Oxígeno) en la ecuación gráfica, ¿cuántos átomos TOTALES de Oxígeno hay en el lado izquierdo (Reactivos) y cuántos hay en el lado derecho (Productos)?",
      options: ["Hay 2 átomos en los reactivos y 2 en los productos.", "Hay 4 átomos en los reactivos y 4 en los productos.", "Hay 2 átomos en los reactivos y 4 en los productos.", "Hay 4 átomos en los reactivos y 3 en los productos."],
      correct: 1,
      feedback: "¡Contabilidad de materia 10/10! En la izquierda tienes dos pares de oxígeno (2O₂ = 4 círculos rojos). En la derecha tienes un CO₂ (2 círculos rojos) más dos H₂O (1 círculo rojo cada una, total 2). 2 + 2 = 4 círculos rojos. La materia se conservó intacta."
    }, {
      contextId: 3,
      theme: "Química - Ley de Lavoisier",
      question: "La Ley de Conservación de la Masa establece que 'la materia no se crea ni se destruye'. Si la mezcla de gas Metano y Oxígeno pesaba exactamente 80 gramos antes de encender el mechero, ¿cuánto deben pesar TODOS los gases que salen volando (Productos) después de quemarlos?",
      options: ["Menos de 80 gramos, porque los gases al calentarse pesan mucho menos.", "Exactamente 80 gramos, el peso de los átomos no cambia aunque formen nuevas moléculas.", "0 gramos, porque el fuego quemó y destruyó toda la masa química.", "Más de 80 gramos, porque el calor le añade peso a la reacción."],
      correct: 1,
      feedback: "¡Principio de Lavoisier dominado! Si metes 80 gramos de materia prima al fuego (Reactivos), deben salir 80 gramos exactos de cenizas y humo (Productos). Los átomos solo se separaron y se reconectaron como legos, pero nadie desapareció."
    }];

    // Logic to handle Hardcore Quiz split-screen
    const currentQData = hardcoreQuiz[currentQIndex];
    // NUEVO: Buscar los datos del contexto maestro basándonos en el ID
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
        title: "¡Excelencia Científica 400+! ",
        desc: "Nivel ICFES Dios. Dominas los temas que el 80% de los estudiantes fallan. La genética y la estequiometría no tienen secretos para ti."
      };
      if (percentage >= 0.6) return {
        title: "¡Casi en la Cima!",
        desc: "Lograste pasar los temas avanzados con buen rendimiento. Un repaso rápido a las leyes de densidad y asegurarás el puntaje máximo."
      };
      return {
        title: "Entrenamiento Élite",
        desc: "Este módulo está diseñado para ser el más difícil. Equivocarse aquí es normal; repasa los formularios visuales y vuelve a intentarlo."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F0F4F8] font-sans text-slate-800 selection:bg-violet-200"
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
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-violet-600 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
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
      src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=2000&q=80",
      alt: "Microscope and DNA",
      className: "w-full h-full object-cover opacity-30 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-violet-900/90 to-purple-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 backdrop-blur-md border border-violet-400/30 rounded-full text-violet-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-4 h-4"
    }), " Nivel \xC9lite"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "Ciencias ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-400"
    }, "Avanzadas (400+)")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "Los temas cient\xEDficos de mayor complejidad. Supera la gen\xE9tica de Mendel, la estequiometr\xEDa qu\xEDmica y la f\xEDsica de fluidos para asegurar tu lugar en el Top 1%.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement(Dna, {
      className: "w-24 h-24 text-fuchsia-400 drop-shadow-[0_0_15px_rgba(232,121,249,0.8)] animate-pulse",
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
      className: "font-mono text-fuchsia-400 font-bold text-sm"
    }, "C\xE1lculo Preciso")), /*#__PURE__*/React.createElement(CheckCircle, {
      className: "w-5 h-5 text-violet-400"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "Los 3 Desaf\xEDos Cr\xEDticos"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-3 gap-4"
    }, [{
      t: "Genética",
      d: "Cuadros de Punnett y dominancia.",
      c: "bg-violet-100 text-violet-600",
      i: Dna
    }, {
      t: "Química C.",
      d: "Balanceo y lectura de moléculas.",
      c: "bg-pink-100 text-pink-600",
      i: FlaskConical
    }, {
      t: "Densidad",
      d: "Fluidos y Principio de Arquímedes.",
      c: "bg-blue-100 text-blue-600",
      i: Droplets
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
      className: "bg-gradient-to-br from-violet-600 to-purple-800 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
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
      className: "text-violet-100 text-sm leading-relaxed"
    }, "Enfrenta las preguntas que aplican gen\xE9tica y qu\xEDmica en contextos productivos reales (Ganader\xEDa y Derrames).")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-violet-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Iniciar Reto Avanzado ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-10"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "Los Formatos Maestros"), /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-1.5 bg-gradient-to-r from-violet-500 to-purple-600 mx-auto rounded-full mb-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg leading-relaxed"
    }, "Descodifica las im\xE1genes que asustan a la mayor\xEDa. Estas infograf\xEDas te ense\xF1ar\xE1n a leer qu\xEDmica, f\xEDsica y biolog\xEDa a nivel avanzado.")), /*#__PURE__*/React.createElement("div", {
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
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(139,92,246,0.15)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-10 flex flex-col relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex w-max items-center gap-2 px-3 py-1.5 bg-violet-100 text-violet-700 font-bold text-[10px] uppercase tracking-widest rounded-md mb-6 border border-violet-200 shadow-sm relative z-10"
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
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-violet-400 hover:bg-violet-50/30";
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
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-violet-600 text-white hover:bg-violet-700 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`
    }, currentQIndex === hardcoreQuiz.length - 1 ? 'Finalizar Simulacro' : 'Siguiente Pregunta', /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-5 h-5"
    }))))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-600/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-violet-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(139,92,246,0.5)] border-4 border-violet-400"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, resultData.title), /*#__PURE__*/React.createElement("p", {
      className: "relative z-10 text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
    }, resultData.desc), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 mb-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-300 to-violet-500 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", hardcoreQuiz.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-violet-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Reto Avanzado")))));
  }
  window.renderCNModule5 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloTemasFiltro));
  };
})();