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
  function ModuloCTS() {
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
      id: 'invernadero',
      title: 'Efecto Invernadero y Cambio Climático',
      icon: Globe,
      color: 'amber',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "El Efecto Invernadero es un proceso natural y necesario para la vida, pero la actividad humana (quema de f\xF3siles) lo ha salido de control. El ICFES siempre eval\xFAa si entiendes el mecanismo exacto de la radiaci\xF3n."), /*#__PURE__*/React.createElement("div", {
        className: "bg-amber-50/50 p-6 rounded-2xl border border-amber-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-amber-800 block mb-4 text-lg"
      }, "Mec\xE1nica de la Radiaci\xF3n:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Entrada (Luz Visible):"), " La luz del Sol atraviesa f\xE1cilmente la atm\xF3sfera terrestre porque tiene ondas cortas. Esta luz calienta la superficie de la Tierra.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Salida (Infrarrojo/Calor):"), " La Tierra intenta devolver ese calor al espacio en forma de radiaci\xF3n infrarroja (ondas largas).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "El Bloqueo (Gases GEI):"), " Gases como el CO\u2082 y el Metano act\xFAan como un \"espejo\" solo para el calor. Dejan entrar la luz, pero ", /*#__PURE__*/React.createElement("strong", null, "rebotan el calor de regreso hacia abajo"), ", sobrecalentando el planeta."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-10 -10 120 120"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 100 Q 50 70 100 100 L 100 110 L 0 110 Z",
        fill: "#10b981"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "105",
        fontSize: "6",
        fill: "#064e3b",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "SUPERFICIE TERRESTRE"), /*#__PURE__*/React.createElement("path", {
        d: "M 0 40 Q 50 10 100 40",
        fill: "none",
        stroke: "#94a3b8",
        strokeWidth: "8",
        strokeDasharray: "4 4",
        opacity: "0.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "28",
        fontSize: "5",
        fill: "#64748b",
        fontWeight: "bold",
        textAnchor: "middle",
        className: "animate-pulse"
      }, "Capa de Gases Invernadero (CO\u2082, Metano)"), /*#__PURE__*/React.createElement("circle", {
        cx: "85",
        cy: "0",
        r: "10",
        fill: "#facc15",
        className: "animate-pulse",
        style: {
          animationDuration: '3s'
        }
      }), /*#__PURE__*/React.createElement("text", {
        x: "85",
        y: "-12",
        fontSize: "5",
        fill: "#ca8a04",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "SOL"), /*#__PURE__*/React.createElement("line", {
        x1: "80",
        y1: "8",
        x2: "30",
        y2: "80",
        stroke: "#facc15",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "28,82 32,77 34,81",
        fill: "#facc15"
      }), /*#__PURE__*/React.createElement("text", {
        x: "45",
        y: "38",
        fontSize: "4.5",
        fill: "#ca8a04",
        fontWeight: "bold",
        transform: "rotate(55 45,38)"
      }, "1. Luz Solar Entra"), /*#__PURE__*/React.createElement("path", {
        d: "M 40 80 Q 30 50 20 40",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "65",
        fontSize: "4.5",
        fill: "#ef4444",
        fontWeight: "bold",
        transform: "rotate(-60 20,65)"
      }, "2. Calor Sube"), /*#__PURE__*/React.createElement("path", {
        d: "M 20 40 Q 15 60 10 80",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: "2.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "9,82 13,77 7,76",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("text", {
        x: "3",
        y: "60",
        fontSize: "4.5",
        fill: "#ef4444",
        fontWeight: "bold",
        transform: "rotate(65 3,60)"
      }, "3. Calor Rebota"))
    }, {
      id: 'eutrofizacion',
      title: 'Eutrofización de Ecosistemas Acuáticos',
      icon: Droplets,
      color: 'cyan',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Un caso de estudio que sale casi todos los a\xF1os. Describe c\xF3mo la contaminaci\xF3n con fertilizantes agr\xEDcolas o aguas residuales termina matando a los peces por asfixia (falta de ox\xEDgeno)."), /*#__PURE__*/React.createElement("div", {
        className: "bg-cyan-50/50 p-6 rounded-2xl border border-cyan-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-800 block mb-4 text-lg"
      }, "La Reacci\xF3n en Cadena:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "1. Exceso de Nutrientes:"), " Fertilizantes (Nitr\xF3geno y F\xF3sforo) llegan al r\xEDo o laguna por las lluvias.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "2. Explosi\xF3n de Algas (Bloom):"), " Las algas superficiales se alimentan de esto y se multiplican masivamente, bloqueando la luz solar hacia el fondo.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "3. Muerte y Descomposici\xF3n:"), " Las plantas del fondo mueren sin luz. Las bacterias descomponedoras entran en acci\xF3n.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-cyan-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-cyan-700"
      }, "4. Hipoxia (Asfixia):"), " ", /*#__PURE__*/React.createElement("strong", null, "Las bacterias consumen todo el ox\xEDgeno del agua"), " al descomponer la materia muerta. Los peces mueren ahogados."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[450px] overflow-visible drop-shadow-xl",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M 0 50 Q 50 50 100 50 L 100 100 L 0 100 Z",
        fill: "#bae6fd"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M -10 10 Q 10 20 20 50 L 0 50 Z",
        fill: "#a3e635"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "0",
        y: "20",
        width: "10",
        height: "10",
        fill: "#f87171"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "-5,20 5,10 15,20",
        fill: "#dc2626"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 15 35 Q 25 45 40 50",
        fill: "none",
        stroke: "#22c55e",
        strokeWidth: "2",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "32",
        fontSize: "4",
        fill: "#15803d",
        fontWeight: "bold"
      }, "Fertilizantes"), /*#__PURE__*/React.createElement("rect", {
        x: "20",
        y: "50",
        width: "80",
        height: "4",
        fill: "#22c55e"
      }), /*#__PURE__*/React.createElement("text", {
        x: "60",
        y: "47",
        fontSize: "5",
        fill: "#166534",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Capa bloqueadora de Algas Verdes"), /*#__PURE__*/React.createElement("path", {
        d: "M 50 100 L 45 80 M 50 100 L 55 85",
        fill: "none",
        stroke: "#475569",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "90",
        r: "1.5",
        fill: "#fbbf24",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "60",
        cy: "85",
        r: "1.5",
        fill: "#fbbf24",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("text", {
        x: "55",
        y: "78",
        fontSize: "4",
        fill: "#b45309",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Bacterias agotan el O\u2082"), /*#__PURE__*/React.createElement("path", {
        d: "M 80 85 Q 85 80 90 85 Q 85 90 80 85",
        fill: "#94a3b8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "83",
        y1: "84",
        x2: "85",
        y2: "86",
        stroke: "#475569",
        strokeWidth: "0.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "83",
        y1: "86",
        x2: "85",
        y2: "84",
        stroke: "#475569",
        strokeWidth: "0.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "85",
        y: "93",
        fontSize: "4.5",
        fill: "#1e293b",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Peces mueren"))
    }, {
      id: 'biomagnificacion',
      title: 'Biomagnificación de Toxinas',
      icon: Factory,
      color: 'rose',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Mide el impacto de la contaminaci\xF3n industrial (metales pesados como Mercurio o Plomo) en las cadenas alimenticias. El error com\xFAn es pensar que el que come primero se envenena m\xE1s."), /*#__PURE__*/React.createElement("div", {
        className: "bg-rose-50/50 p-6 rounded-2xl border border-rose-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-800 block mb-4 text-lg"
      }, "La Regla de la Acumulaci\xF3n:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "Metales Pesados:"), " El cuerpo biol\xF3gico NO puede procesar ni eliminar metales pesados o micropl\xE1sticos. Se quedan atrapados en la grasa.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "Multiplicaci\xF3n Tr\xF3fica:"), " Un pez peque\xF1o come 100 plancton (acumula 100 dosis). Un at\xFAn come 100 peces peque\xF1os (acumula 10,000 dosis). El humano come el at\xFAn.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-rose-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-rose-700"
      }, "El Superdepredador:"), " El animal que est\xE9 en la punta m\xE1s alta de la pir\xE1mide alimenticia SIEMPRE tendr\xE1 la mayor concentraci\xF3n de veneno."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[450px] overflow-visible drop-shadow-xl",
        viewBox: "-10 -10 120 120"
      }, /*#__PURE__*/React.createElement("polygon", {
        points: "50,10 90,90 10,90",
        fill: "#fecdd3",
        opacity: "0.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "45",
        y1: "20",
        x2: "55",
        y2: "20",
        stroke: "#f43f5e",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "22",
        fontSize: "5",
        fill: "#881337",
        fontWeight: "bold",
        textAnchor: "end"
      }, "Plancton (0.01 ppm)"), /*#__PURE__*/React.createElement("line", {
        x1: "35",
        y1: "45",
        x2: "65",
        y2: "45",
        stroke: "#e11d48",
        strokeWidth: "4"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "47",
        fontSize: "5",
        fill: "#881337",
        fontWeight: "bold",
        textAnchor: "end"
      }, "Sardinas (0.5 ppm)"), /*#__PURE__*/React.createElement("line", {
        x1: "25",
        y1: "70",
        x2: "75",
        y2: "70",
        stroke: "#be123c",
        strokeWidth: "6"
      }), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: "72",
        fontSize: "5",
        fill: "#881337",
        fontWeight: "bold",
        textAnchor: "end"
      }, "At\xFAn (5 ppm)"), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "90",
        y2: "90",
        stroke: "#881337",
        strokeWidth: "8"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "102",
        fontSize: "6",
        fill: "#881337",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Humano / \xC1guila (50 ppm)"), /*#__PURE__*/React.createElement("line", {
        x1: "100",
        y1: "10",
        x2: "100",
        y2: "90",
        stroke: "#be123c",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "98,85 102,85 100,92",
        fill: "#be123c"
      }), /*#__PURE__*/React.createElement("text", {
        x: "104",
        y: "55",
        fontSize: "4.5",
        fill: "#be123c",
        fontWeight: "bold",
        transform: "rotate(90 104,55)",
        textAnchor: "middle"
      }, "Aumento Concentraci\xF3n de Veneno"))
    }];

    // ==========================================
    // SIMULADOR 400+ (MODO HARDCORE: CONTEXTOS + RACIMOS)
    // ==========================================

    const hardcoreQuiz = [
    // CONTEXTO 1: ARAUCA Y EXTRACCIÓN (Preguntas 0 y 1)
    {
      contextId: 1,
      theme: "CTS - Medio Ambiente",
      contextTitle: "Derrame en el Campo Caño Limón",
      contextText: "Durante un proceso de extracción en el complejo petrolero de Caño Limón (Arauca), ocurre una ruptura en un oleoducto cercano a una laguna inundable. El crudo pesado bloquea la superficie del agua. Días después, expertos ambientales del proyecto miden un aumento severo en la concentración de metales pesados (plomo y cadmio) disueltos en el lodo del fondo. La red trófica de la laguna es la siguiente: Microalgas → Pulgas de agua → Pez Coporo (Prochilodus mariae) → Babilla (Caiman crocodilus).",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-64 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("circle", {
        cx: "85",
        cy: "10",
        r: "8",
        fill: "#facc15"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "85",
        y1: "25",
        x2: "85",
        y2: "40",
        stroke: "#facc15",
        strokeWidth: "2",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 80 40 L 90 40 L 85 45 Z",
        fill: "#ef4444"
      }), " ", /*#__PURE__*/React.createElement("text", {
        x: "70",
        y: "35",
        fontSize: "4",
        fill: "#ef4444",
        fontWeight: "bold"
      }, "Luz bloqueada"), /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "45",
        width: "80",
        height: "5",
        fill: "#1e293b"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "48.5",
        fontSize: "4",
        fill: "#f8fafc",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Capa superficial de Petr\xF3leo Crudo"), /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "50",
        width: "80",
        height: "40",
        fill: "#e0f2fe",
        opacity: "0.6"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "20",
        cy: "70",
        r: "3",
        fill: "#22c55e"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "78",
        fontSize: "4",
        fill: "#166534",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Microalgas"), /*#__PURE__*/React.createElement("line", {
        x1: "25",
        y1: "70",
        x2: "40",
        y2: "70",
        stroke: "#0ea5e9",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "38,68 38,72 42,70",
        fill: "#0ea5e9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "70",
        r: "4",
        fill: "#0284c7"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "78",
        fontSize: "4",
        fill: "#0c4a6e",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Coporo"), /*#__PURE__*/React.createElement("line", {
        x1: "55",
        y1: "70",
        x2: "75",
        y2: "70",
        stroke: "#0ea5e9",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "73,68 73,72 77,70",
        fill: "#0ea5e9"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "85",
        cy: "70",
        r: "5",
        fill: "#1e40af"
      }), /*#__PURE__*/React.createElement("text", {
        x: "85",
        y: "78",
        fontSize: "4",
        fill: "#172554",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Babilla"), /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "90",
        width: "80",
        height: "5",
        fill: "#451a03"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "93.5",
        fontSize: "3.5",
        fill: "#fef3c7",
        fontStyle: "italic",
        textAnchor: "middle"
      }, "Sedimentos con Metales Pesados"))),
      question: "La primera consecuencia visible en la laguna es la muerte masiva de las Microalgas en pocos días. Según el diagrama y el contexto, ¿cuál es la causa física principal de esta muerte inicial?",
      options: ["El envenenamiento directo por absorber los metales pesados del fondo del lodo.", "La asfixia porque el petróleo consumió todo el oxígeno del agua instantáneamente.", "La falta de fotosíntesis, ya que la capa de petróleo en la superficie bloquea el paso de la luz solar.", "La depredación excesiva por parte del Pez Coporo que se quedó sin otro alimento."],
      correct: 2,
      feedback: "¡Análisis perfecto! Observa la gráfica: Las microalgas están bajo el agua. La capa de crudo (negra) está en la superficie. Las algas, como plantas, necesitan luz solar para sobrevivir (fotosíntesis). El petróleo actúa como un muro opaco que rebota la luz, 'apagando' el ecosistema desde su base."
    }, {
      contextId: 1,
      // Mismo contexto
      theme: "CTS - Medio Ambiente",
      question: "Pasados varios meses, los investigadores toman muestras de tejido de los animales sobrevivientes. Según el principio de Biomagnificación, ¿en qué organismo encontrarán la mayor concentración de cadmio y plomo por cada kilogramo de peso?",
      options: ["En las Microalgas, porque son el primer eslabón en contacto con el agua contaminada.", "En el Pez Coporo, porque come grandes cantidades de lodo y algas.", "En la Babilla (Caiman crocodilus), por ser el superdepredador en la cima de esta red trófica.", "Todos los organismos tendrán exactamente la misma concentración de metales pesados."],
      correct: 2,
      feedback: "¡Estrategia ecológica pura! Metales pesados no se eliminan, se acumulan. El Coporo come muchas algas contaminadas. Luego, la Babilla se come a decenas de Coporos a lo largo de su vida, concentrando en su cuerpo todo el veneno acumulado por sus presas."
    },
    // CONTEXTO 2: CTS ENERGÍAS (Preguntas 2 y 3)
    {
      contextId: 2,
      theme: "CTS - Energías",
      contextTitle: "Transición Energética en la Sabana",
      contextText: "Una finca ganadera aislada en Casanare decide reemplazar su viejo generador diésel (que funcionaba quemando ACPM) por un sistema de paneles solares interconectados con baterías de litio de ciclo profundo. El gráfico muestra el perfil de producción de energía de los paneles solares (Línea amarilla) y el consumo de energía de la finca (Línea azul) a lo largo de un día de 24 horas.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-3xl shadow-inner border border-slate-700 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-lg h-64 overflow-visible",
        viewBox: "-10 -10 120 110"
      }, /*#__PURE__*/React.createElement("g", {
        stroke: "#334155",
        strokeWidth: "1",
        strokeDasharray: "2 2"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "0",
        y1: "25",
        x2: "100",
        y2: "25"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "0",
        y1: "50",
        x2: "100",
        y2: "50"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "0",
        y1: "75",
        x2: "100",
        y2: "75"
      })), /*#__PURE__*/React.createElement("line", {
        x1: "0",
        y1: "100",
        x2: "100",
        y2: "100",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "0",
        y1: "100",
        x2: "0",
        y2: "0",
        stroke: "#94a3b8",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "110",
        fontSize: "4.5",
        fill: "#94a3b8",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Tiempo (Horas del D\xEDa)"), /*#__PURE__*/React.createElement("text", {
        x: "-6",
        y: "50",
        fontSize: "4.5",
        fill: "#94a3b8",
        transform: "rotate(-90 -6,50)",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Energ\xEDa (kW)"), /*#__PURE__*/React.createElement("text", {
        x: "0",
        y: "105",
        fontSize: "4",
        fill: "#64748b",
        textAnchor: "middle"
      }, "0h"), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "105",
        fontSize: "4",
        fill: "#64748b",
        textAnchor: "middle"
      }, "6h"), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "105",
        fontSize: "4",
        fill: "#64748b",
        textAnchor: "middle"
      }, "12h"), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "105",
        fontSize: "4",
        fill: "#64748b",
        textAnchor: "middle"
      }, "18h"), /*#__PURE__*/React.createElement("text", {
        x: "100",
        y: "105",
        fontSize: "4",
        fill: "#64748b",
        textAnchor: "middle"
      }, "24h"), /*#__PURE__*/React.createElement("path", {
        d: "M 0 100 L 25 100 Q 50 10 75 100 L 100 100",
        fill: "#fef08a",
        opacity: "0.2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 0 100 L 25 100 Q 50 10 75 100 L 100 100",
        fill: "none",
        stroke: "#facc15",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 0 80 Q 15 80 25 40 Q 35 70 50 70 Q 65 70 75 30 Q 85 80 100 80",
        fill: "none",
        stroke: "#38bdf8",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "65",
        y: "5",
        width: "4",
        height: "4",
        fill: "#facc15"
      }), /*#__PURE__*/React.createElement("text", {
        x: "72",
        y: "8.5",
        fontSize: "4",
        fill: "#fef08a"
      }, "Producci\xF3n Solar"), /*#__PURE__*/React.createElement("rect", {
        x: "65",
        y: "12",
        width: "4",
        height: "4",
        fill: "#38bdf8"
      }), /*#__PURE__*/React.createElement("text", {
        x: "72",
        y: "15.5",
        fontSize: "4",
        fill: "#bae6fd"
      }, "Consumo Finca"))),
      question: "Según el gráfico, la producción de energía solar forma una 'campana' que solo genera energía durante el día, mientras que el consumo tiene picos a las 6h y a las 18h (cuando no hay sol fuerte). ¿Para qué son estrictamente necesarias las baterías de litio en este nuevo sistema?",
      options: ["Para aumentar la potencia total de los paneles solares a las 12 del mediodía.", "Para almacenar el exceso de energía solar producido a mediodía y utilizarlo en los picos de consumo nocturnos y matutinos.", "Para enfriar los paneles solares durante las horas de máxima radiación.", "Para quemar ACPM de manera más limpia cuando llueve."],
      correct: 1,
      feedback: "¡Interpretación de gráficas de área! La curva amarilla (producción) es enorme a las 12h, superando por mucho a la curva azul (consumo). Ese 'sobrante' de energía se perdería si no hay baterías. Las baterías guardan ese sobrante para despacharlo a las 18h y 6h, donde la línea azul supera a la amarilla."
    }, {
      contextId: 2,
      theme: "CTS - Energías",
      question: "Desde el punto de vista del componente de Ciencia, Tecnología y Sociedad (CTS), ¿cuál es el impacto ambiental global directo al realizar este cambio de Diésel a Paneles Solares en la finca?",
      options: ["Disminución de las emisiones de Gases de Efecto Invernadero (CO2) al no quemar combustibles fósiles.", "Reducción total de la Huella Hídrica, ya que los paneles solares producen agua al generar energía.", "Aumento del riesgo de Eutrofización en los ríos cercanos debido al litio de las baterías.", "Un aumento en la lluvia ácida en Casanare."],
      correct: 0,
      feedback: "¡Pensamiento C.T.S! El diésel (ACPM) es un hidrocarburo. Al quemarlo en el viejo generador, liberaba CO2 directo a la atmósfera, contribuyendo al efecto invernadero. La energía solar es una fuente de cero emisiones directas durante su operación."
    }];

    // Logic to handle Hardcore Quiz split-screen
    const currentQData = hardcoreQuiz[currentQIndex];
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
        title: "¡Estratega Ambiental 400+! ",
        desc: "Nivel ICFES Dios. Tienes una resistencia lectora impecable y conectas la ciencia con problemas del mundo real a la perfección."
      };
      if (percentage >= 0.6) return {
        title: "¡Casi en la Cima!",
        desc: "Lograste interpretar los impactos C.T.S. Un poco más de práctica con las gráficas de energía y asegurarás un puntaje élite."
      };
      return {
        title: "Resistencia en Entrenamiento",
        desc: "El formato de textos largos fatiga el cerebro rápido. Tu reto no es saber los conceptos, sino mantener el enfoque ecológico leyendo."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F0F4F8] font-sans text-slate-800 selection:bg-emerald-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto p-4 md:p-8 pb-32"
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
      label: 'Mapas de Impacto'
    }, {
      id: 'practica',
      icon: Target,
      label: 'Simulador Real'
    }].map(tab => /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-emerald-600 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
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
      src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=2000&q=80",
      alt: "Wind Turbines and Nature",
      className: "w-full h-full object-cover opacity-40 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-teal-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 rounded-full text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
    }, /*#__PURE__*/React.createElement(Globe, {
      className: "w-4 h-4"
    }), " Componente ICFES (20%)"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "Ciencia, Tecnolog\xEDa ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400"
    }, "y Sociedad (C.T.S)")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "La ciencia no ocurre en una burbuja. Este m\xF3dulo eval\xFAa tu capacidad cr\xEDtica para analizar c\xF3mo las decisiones humanas, la industria y la tecnolog\xEDa impactan nuestros ecosistemas y el medio ambiente.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement(Wind, {
      className: "w-24 h-24 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse",
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
      className: "font-mono text-emerald-400 font-bold text-sm"
    }, "Medio Ambiente")), /*#__PURE__*/React.createElement(Sprout, {
      className: "w-5 h-5 text-lime-400"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "Problem\xE1ticas de Evaluaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
    }, [{
      t: "Efecto Invernadero",
      d: "Atrapamiento de radiación infrarroja por GEI.",
      c: "bg-amber-100 text-amber-600",
      i: Globe
    }, {
      t: "Eutrofización",
      d: "Muerte de lagos por exceso de fertilizantes.",
      c: "bg-cyan-100 text-cyan-600",
      i: Droplets
    }, {
      t: "Biomagnificación",
      d: "Metales pesados en las cadenas tróficas.",
      c: "bg-rose-100 text-rose-600",
      i: Factory
    }, {
      t: "Energías y Transición",
      d: "Impacto de combustibles fósiles vs. Renovables.",
      c: "bg-emerald-100 text-emerald-600",
      i: Zap
    }].map((item, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 group"
    }, /*#__PURE__*/React.createElement("div", {
      className: `w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.c} group-hover:scale-110 transition-transform`
    }, /*#__PURE__*/React.createElement(item.i, {
      className: "w-5 h-5"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      className: "font-bold text-slate-800 text-sm mb-1"
    }, item.t), /*#__PURE__*/React.createElement("p", {
      className: "text-xs text-slate-500 leading-relaxed"
    }, item.d)))))), /*#__PURE__*/React.createElement("div", {
      className: "bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
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
      className: "text-emerald-100 text-sm leading-relaxed"
    }, "Prueba el Simulador con contextos ambientales locales (Arauca y Casanare). Textos largos de nivel real.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-emerald-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Iniciar Simulador ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-10"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "Impacto Ambiental y Biol\xF3gico"), /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full mb-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg leading-relaxed"
    }, "Estudia las ", /*#__PURE__*/React.createElement("strong", null, "infograf\xEDas maestras"), " sobre c\xF3mo la industria humana altera el equilibrio f\xEDsico y qu\xEDmico de nuestro planeta.")), /*#__PURE__*/React.createElement("div", {
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
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(16,185,129,0.15)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-10 flex flex-col relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex w-max items-center gap-2 px-3 py-1.5 bg-emerald-100 text-emerald-700 font-bold text-[10px] uppercase tracking-widest rounded-md mb-6 border border-emerald-200 shadow-sm relative z-10"
    }, /*#__PURE__*/React.createElement(BookOpen, {
      className: "w-3 h-3"
    }), " Lectura de Contexto"), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-black text-slate-800 mb-4 leading-tight relative z-10"
    }, currentQData.contextTitle), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-600 text-sm leading-relaxed mb-6 relative z-10 text-justify"
    }, currentQData.contextText), /*#__PURE__*/React.createElement("div", {
      className: "mt-auto w-full relative z-10"
    }, currentQData.contextVisual)), /*#__PURE__*/React.createElement("div", {
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
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-emerald-400 hover:bg-emerald-50/30";
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
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`
    }, currentQIndex === hardcoreQuiz.length - 1 ? 'Finalizar Simulacro' : 'Siguiente Pregunta', /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-5 h-5"
    }))))) :
    /*#__PURE__*/
    // PANTALLA DE RESULTADOS
    React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(16,185,129,0.5)] border-4 border-emerald-400"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, resultData.title), /*#__PURE__*/React.createElement("p", {
      className: "relative z-10 text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
    }, resultData.desc), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 mb-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-teal-500 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", hardcoreQuiz.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-emerald-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Modo Hardcore")))));
  }
  window.renderCNModule4 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloCTS));
  };
})();