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
  function ModuloUsoComprensivo() {
    const [activeTab, setActiveTab] = useState('introduccion');

    // Quiz State (Hardcore Mode: Contexts + Questions)
    const [currentQIndex, setCurrentQIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [hasAnswered, setHasAnswered] = useState(false);

    // ==========================================
    // BANCO DE DATOS: TEORÍA Y ESTRATEGIAS (BENTO -> FULL WIDTH)
    // ==========================================

    const theoryCards = [{
      id: 'cladogramas',
      title: 'Cladogramas (Evolución)',
      icon: GitBranch,
      color: 'blue',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Un cladograma es un \xE1rbol geneal\xF3gico evolutivo. El ICFES lo utiliza para evaluar si sabes leer parentescos y c\xF3mo surgen las mutaciones a lo largo de millones de a\xF1os."), /*#__PURE__*/React.createElement("div", {
        className: "bg-blue-50/50 p-6 rounded-2xl border border-blue-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-blue-800 block mb-4 text-lg"
      }, "Reglas de Oro para leerlos:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Los Nodos (c\xEDrculos que laten):"), " Representan al \"Ancestro Com\xFAn\". Si dos animales comparten un nodo reciente, son familia biol\xF3gica muy cercana.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "La L\xEDnea de Tiempo:"), " Sube desde la base (la especie m\xE1s antigua) hacia las puntas superiores (las especies en la actualidad).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-blue-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Las Caracter\xEDsticas (l\xEDneas rojas):"), " Si una mutaci\xF3n o rasgo (ej. \"Pelo\") aparece escrita en una rama, TODOS los animales que deriven de ah\xED hacia arriba la heredar\xE1n. Los de abajo, no."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-5 -5 115 110"
      }, /*#__PURE__*/React.createElement("polyline", {
        points: "10,90 50,50 90,10",
        fill: "none",
        stroke: "#3b82f6",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "50",
        x2: "90",
        y2: "50",
        stroke: "#3b82f6",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "30",
        y1: "70",
        x2: "90",
        y2: "70",
        stroke: "#3b82f6",
        strokeWidth: "2.5",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "3",
        fill: "#60a5fa"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "5",
        fill: "#1e3a8a",
        className: "animate-ping",
        style: {
          animationDuration: '2s'
        }
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "30",
        cy: "70",
        r: "3",
        fill: "#60a5fa"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "30",
        cy: "70",
        r: "5",
        fill: "#1e3a8a",
        className: "animate-ping",
        style: {
          animationDuration: '2s',
          animationDelay: '0.5s'
        }
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "90",
        r: "3",
        fill: "#60a5fa"
      }), /*#__PURE__*/React.createElement("text", {
        x: "94",
        y: "11.5",
        fontSize: "5",
        fill: "#bfdbfe",
        fontWeight: "bold"
      }, "Humano"), /*#__PURE__*/React.createElement("text", {
        x: "94",
        y: "51.5",
        fontSize: "5",
        fill: "#bfdbfe",
        fontWeight: "bold"
      }, "Chimpanc\xE9"), /*#__PURE__*/React.createElement("text", {
        x: "94",
        y: "71.5",
        fontSize: "5",
        fill: "#bfdbfe",
        fontWeight: "bold"
      }, "Rat\xF3n"), /*#__PURE__*/React.createElement("text", {
        x: "54",
        y: "43",
        fontSize: "4.5",
        fill: "#fca5a5",
        fontWeight: "bold"
      }, "Caminar B\xEDpedo"), /*#__PURE__*/React.createElement("line", {
        x1: "47",
        y1: "47",
        x2: "53",
        y2: "47",
        stroke: "#ef4444",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "14",
        y: "63",
        fontSize: "4.5",
        fill: "#fca5a5",
        fontWeight: "bold"
      }, "Gl\xE1ndulas Mamarias"), /*#__PURE__*/React.createElement("line", {
        x1: "27",
        y1: "67",
        x2: "33",
        y2: "67",
        stroke: "#ef4444",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "2",
        y: "98",
        fontSize: "4.5",
        fill: "#94a3b8",
        fontWeight: "bold"
      }, "Ancestro Com\xFAn"))
    }, {
      id: 'circuitos',
      title: 'Circuitos Eléctricos',
      icon: Zap,
      color: 'amber',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Estas gr\xE1ficas eval\xFAan si comprendes c\xF3mo fluye la energ\xEDa (los electrones) en un sistema cerrado y qu\xE9 pasa si el sistema se rompe o se altera."), /*#__PURE__*/React.createElement("div", {
        className: "bg-amber-50/50 p-6 rounded-2xl border border-amber-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-amber-800 block mb-4 text-lg"
      }, "Serie vs. Paralelo:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-amber-700"
      }, "Circuito en Serie (Izquierda):"), " Hay un solo camino para la electricidad. Si un bombillo se funde o un cable se corta, se rompe el \"puente\" y ", /*#__PURE__*/React.createElement("strong", null, "TODO el circuito se apaga"), ". (Ejemplo: Las luces de navidad antiguas).")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-amber-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", {
        className: "text-amber-700"
      }, "Circuito en Paralelo (Derecha):"), " La electricidad tiene m\xFAltiples caminos o ramificaciones. Si un bombillo se funde en una rama, la corriente sigue viajando por los otros caminos y ", /*#__PURE__*/React.createElement("strong", null, "los dem\xE1s bombillos siguen encendidos"), ". (Ejemplo: Las luces de tu casa)."))))),
      visual: /*#__PURE__*/React.createElement("div", {
        className: "flex flex-col lg:flex-row w-full gap-8 items-center justify-center p-4 lg:p-8"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-md bg-slate-800/90 border border-slate-700 rounded-3xl p-8 flex flex-col items-center shadow-2xl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-amber-500/20 px-5 py-2 rounded-full border border-amber-500/30 mb-8"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-amber-400 uppercase tracking-widest"
      }, "Circuito en Serie")), /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[250px] overflow-visible drop-shadow-xl",
        viewBox: "0 0 100 60"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "10",
        width: "80",
        height: "40",
        fill: "none",
        stroke: "#fbbf24",
        strokeWidth: "2.5",
        rx: "4"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "35",
        cy: "10",
        r: "7",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2.5",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "26",
        fontSize: "5",
        fill: "#fcd34d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B1"), /*#__PURE__*/React.createElement("circle", {
        cx: "65",
        cy: "10",
        r: "7",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2.5",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "26",
        fontSize: "5",
        fill: "#fcd34d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B2"), /*#__PURE__*/React.createElement("rect", {
        x: "40",
        y: "46",
        width: "20",
        height: "8",
        fill: "#cbd5e1",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "51.5",
        fontSize: "4.5",
        fill: "#0f172a",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "12V"))), /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-md bg-slate-800/90 border border-slate-700 rounded-3xl p-8 flex flex-col items-center shadow-2xl"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-amber-500/20 px-5 py-2 rounded-full border border-amber-500/30 mb-8"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-sm font-bold text-amber-400 uppercase tracking-widest"
      }, "Circuito en Paralelo")), /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[250px] overflow-visible drop-shadow-xl",
        viewBox: "0 0 100 60"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "10",
        width: "80",
        height: "40",
        fill: "none",
        stroke: "#fbbf24",
        strokeWidth: "2.5",
        rx: "4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "10",
        x2: "50",
        y2: "50",
        stroke: "#fbbf24",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "40",
        y: "46",
        width: "20",
        height: "8",
        fill: "#cbd5e1",
        rx: "1.5"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "51.5",
        fontSize: "4.5",
        fill: "#0f172a",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "12V"), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "30",
        r: "7",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2.5",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("text", {
        x: "40",
        y: "31.5",
        fontSize: "5",
        fill: "#fcd34d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B1"), /*#__PURE__*/React.createElement("circle", {
        cx: "90",
        cy: "30",
        r: "7",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2.5",
        className: "animate-pulse"
      }), /*#__PURE__*/React.createElement("text", {
        x: "80",
        y: "31.5",
        fontSize: "5",
        fill: "#fcd34d",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B2"))))
    }, {
      id: 'fases',
      title: 'Diagramas de Fase (Química)',
      icon: Beaker,
      color: 'fuchsia',
      content: /*#__PURE__*/React.createElement("div", {
        className: "space-y-6 text-base text-slate-600 leading-relaxed"
      }, /*#__PURE__*/React.createElement("p", null, "Muestran en qu\xE9 estado exacto (S\xF3lido, L\xEDquido, Gas) se encuentra una sustancia, y esto depende siempre de una batalla entre dos factores: ", /*#__PURE__*/React.createElement("strong", null, "La Temperatura y La Presi\xF3n"), "."), /*#__PURE__*/React.createElement("div", {
        className: "bg-fuchsia-50/50 p-6 rounded-2xl border border-fuchsia-100 shadow-sm"
      }, /*#__PURE__*/React.createElement("strong", {
        className: "text-fuchsia-800 block mb-4 text-lg"
      }, "Puntos Cr\xEDticos para el Examen:"), /*#__PURE__*/React.createElement("ul", {
        className: "space-y-4"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-fuchsia-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "Las L\xEDneas Fronterizas:"), " Si en el gr\xE1fico cruzas una l\xEDnea morada hacia la derecha (aumentando la temperatura), te derrites o te evaporas. Si subes (aumentas la presi\xF3n), te comprimes.")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-fuchsia-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "El Punto Triple:"), " Es el centro exacto. El \xFAnico momento m\xE1gico de Presi\xF3n y Temperatura donde la sustancia existe como S\xF3lido, L\xEDquido y Gas \xA1al mismo tiempo!")), /*#__PURE__*/React.createElement("li", {
        className: "flex gap-3"
      }, /*#__PURE__*/React.createElement(CheckCircle, {
        className: "w-5 h-5 text-fuchsia-500 shrink-0 mt-0.5"
      }), " ", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, "La pregunta trampa del ICFES:"), " \"\xBFQu\xE9 pasa si mantengo la temperatura fija, pero bajo la presi\xF3n dr\xE1sticamente?\". ", /*#__PURE__*/React.createElement("em", null, "Respuesta:"), " Miras el gr\xE1fico y trazas una l\xEDnea recta hacia abajo; notar\xE1s que pasas de L\xEDquido a Gas sin necesidad de calentarlo."))))),
      visual: /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-auto max-h-[500px] overflow-visible drop-shadow-2xl",
        viewBox: "-10 -10 120 120"
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
        y: "102",
        fontSize: "5.5",
        fill: "#94a3b8",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "TEMPERATURA (\xB0C) \u2192"), /*#__PURE__*/React.createElement("text", {
        x: "-2",
        y: "45",
        fontSize: "5.5",
        fill: "#94a3b8",
        transform: "rotate(-90 -2,45)",
        fontWeight: "bold",
        textAnchor: "middle",
        letterSpacing: "1"
      }, "PRESI\xD3N (Atm) \u2191"), /*#__PURE__*/React.createElement("path", {
        d: "M 10 20 Q 40 40 50 60",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 50 60 Q 60 40 100 10",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 50 60 Q 75 80 100 85",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("text", {
        x: "30",
        y: "50",
        fontSize: "8",
        fill: "#fbcfe8",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "S\xD3LIDO"), /*#__PURE__*/React.createElement("text", {
        x: "70",
        y: "35",
        fontSize: "8",
        fill: "#bfdbfe",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "L\xCDQUIDO"), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "75",
        fontSize: "8",
        fill: "#a7f3d0",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "GAS"), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "60",
        r: "3.5",
        fill: "#ef4444"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "60",
        r: "6",
        fill: "none",
        stroke: "#ef4444",
        strokeWidth: "1.5",
        className: "animate-ping",
        style: {
          animationDuration: '1.5s'
        }
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 45 68 Q 35 75 30 80",
        fill: "none",
        stroke: "#fca5a5",
        strokeWidth: "1.5",
        strokeDasharray: "1 1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "30",
        y: "86",
        fontSize: "5",
        fill: "#fca5a5",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "Punto Triple"), /*#__PURE__*/React.createElement("line", {
        x1: "75",
        y1: "40",
        x2: "75",
        y2: "68",
        stroke: "#fcd34d",
        strokeWidth: "2",
        strokeDasharray: "3 3"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "73,65 77,65 75,69.5",
        fill: "#fcd34d"
      }), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "55",
        fontSize: "4.5",
        fill: "#fcd34d",
        textAnchor: "middle"
      }, "Bajar presi\xF3n"), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "60",
        fontSize: "4.5",
        fill: "#fcd34d",
        textAnchor: "middle"
      }, "a Temp. Fija"))
    }];

    // ==========================================
    // SIMULADOR 400+ (MODO HARDCORE: CONTEXTOS + RACIMOS)
    // ==========================================

    const hardcoreQuiz = [
    // CONTEXTO 1: ARAUCA Y EVOLUCIÓN (Preguntas 0 y 1)
    {
      contextId: 1,
      theme: "Biología - Evolución",
      contextTitle: "Expedición en la Orinoquía Colombiana",
      contextText: "Un grupo de biólogos de la Universidad Nacional realiza una expedición en las sabanas inundables de Arauca. Descubren fósiles y especímenes vivos de cuatro roedores gigantes emparentados evolutivamente con el Chigüiro (Hydrochoerus hydrochaeris). Tras analizar su ADN y morfología, construyen el siguiente cladograma que muestra su historia evolutiva a partir de un Ancestro Común (Nodo 1).",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-56 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("polyline", {
        points: "10,90 50,50 90,10",
        fill: "none",
        stroke: "#2563eb",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "50",
        x2: "90",
        y2: "50",
        stroke: "#2563eb",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "30",
        y1: "70",
        x2: "90",
        y2: "70",
        stroke: "#2563eb",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "70",
        y1: "30",
        x2: "90",
        y2: "30",
        stroke: "#2563eb",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "90",
        r: "2.5",
        fill: "#1e40af"
      }), /*#__PURE__*/React.createElement("text", {
        x: "5",
        y: "95",
        fontSize: "4",
        fill: "#1e40af",
        fontWeight: "bold"
      }, "Nodo 1"), /*#__PURE__*/React.createElement("circle", {
        cx: "30",
        cy: "70",
        r: "2.5",
        fill: "#1e40af"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "65",
        fontSize: "4",
        fill: "#1e40af",
        fontWeight: "bold"
      }, "Nodo 2"), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "2.5",
        fill: "#1e40af"
      }), /*#__PURE__*/React.createElement("text", {
        x: "45",
        y: "45",
        fontSize: "4",
        fill: "#1e40af",
        fontWeight: "bold"
      }, "Nodo 3"), /*#__PURE__*/React.createElement("circle", {
        cx: "70",
        cy: "30",
        r: "2.5",
        fill: "#1e40af"
      }), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "25",
        fontSize: "4",
        fill: "#1e40af",
        fontWeight: "bold"
      }, "Nodo 4"), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "11",
        fontSize: "4.5",
        fill: "#0f172a",
        fontWeight: "bold"
      }, "Chig\xFCiro Actual"), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "31",
        fontSize: "4.5",
        fill: "#0f172a",
        fontWeight: "bold"
      }, "Especie X (Extinta)"), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "51",
        fontSize: "4.5",
        fill: "#0f172a",
        fontWeight: "bold"
      }, "Especie Y"), /*#__PURE__*/React.createElement("text", {
        x: "92",
        y: "71",
        fontSize: "4.5",
        fill: "#0f172a",
        fontWeight: "bold"
      }, "Especie Z"), /*#__PURE__*/React.createElement("line", {
        x1: "20",
        y1: "80",
        x2: "25",
        y2: "80",
        stroke: "#ef4444",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "15",
        y: "78",
        fontSize: "4",
        fill: "#ef4444",
        fontWeight: "bold"
      }, "Pelaje denso"), /*#__PURE__*/React.createElement("line", {
        x1: "40",
        y1: "60",
        x2: "45",
        y2: "60",
        stroke: "#ef4444",
        strokeWidth: "1"
      }), /*#__PURE__*/React.createElement("text", {
        x: "32",
        y: "58",
        fontSize: "4",
        fill: "#ef4444",
        fontWeight: "bold"
      }, "Dedos palmeados"))),
      question: "Según el cladograma, los biólogos afirman que la 'Especie Y' y la 'Especie Z' pueden nadar eficientemente en las sabanas inundadas por tener dedos palmeados. ¿Es correcta esta afirmación?",
      options: ["Sí, porque ambas descienden del Nodo 1, que es el ancestro de todos los roedores de Arauca.", "Sí, porque la característica 'Dedos palmeados' apareció en el Nodo 2, y ambas especies descienden de allí.", "No, porque la característica 'Dedos palmeados' apareció DESPUÉS de que la Especie Z se separara en el Nodo 2.", "No, porque solo el Chigüiro actual tiene dedos palmeados según la gráfica."],
      correct: 2,
      feedback: "¡Lectura de gráfica Nivel 400! La mutación 'Dedos palmeados' ocurre en la rama entre el Nodo 2 y el Nodo 3. Como la Especie Z se separó en el Nodo 2 (antes de que ocurriera la mutación), NO posee esa característica. La Especie Y y superiores sí la poseen."
    }, {
      contextId: 1,
      // Mismo contexto
      theme: "Biología - Evolución",
      question: "¿Cuál de las siguientes afirmaciones sobre el parentesco evolutivo es estrictamente CIERTA según el diagrama?",
      options: ["El Chigüiro evolucionó directamente a partir de la Especie X.", "La Especie Y está más emparentada evolutivamente con el Chigüiro que con la Especie Z.", "La Especie Z es el ancestro del cual provienen las demás especies.", "La Especie X y el Chigüiro no comparten ancestros comunes con la Especie Z."],
      correct: 1,
      feedback: "¡Estrategia perfecta! La Especie Y comparte un ancestro común reciente con el Chigüiro (Nodo 3). En cambio, para conectarse con la Especie Z, tienen que retroceder mucho más en el tiempo (hasta el Nodo 2). A nodo más reciente, mayor parentesco."
    },
    // CONTEXTO 2: FÍSICA Y CIRCUITOS (Preguntas 2 y 3)
    {
      contextId: 2,
      theme: "Física - Electricidad",
      contextTitle: "Instalación Eléctrica Defectuosa",
      contextText: "Un ingeniero diseña un circuito para iluminar tres habitaciones de una casa usando una batería de 12V y tres bombillos idénticos (B1, B2 y B3). El diagrama muestra el diseño final. Tras encender el sistema de iluminación, un niño lanza una pelota y rompe accidentalmente el cristal del bombillo B2, cortando el filamento interno y quemándolo.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-slate-900 p-6 rounded-2xl shadow-inner border border-slate-700 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-sm h-56 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "20",
        y: "20",
        width: "60",
        height: "60",
        fill: "none",
        stroke: "#94a3b8",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "20",
        x2: "50",
        y2: "80",
        stroke: "#94a3b8",
        strokeWidth: "2.5"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "10",
        y: "45",
        width: "20",
        height: "10",
        fill: "#facc15"
      }), /*#__PURE__*/React.createElement("text", {
        x: "20",
        y: "52",
        fontSize: "5",
        fill: "#854d0e",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "12V"), /*#__PURE__*/React.createElement("text", {
        x: "14",
        y: "43",
        fontSize: "8",
        fill: "#facc15",
        fontWeight: "bold"
      }, "+"), /*#__PURE__*/React.createElement("text", {
        x: "24",
        y: "43",
        fontSize: "8",
        fill: "#facc15",
        fontWeight: "bold"
      }, "-"), /*#__PURE__*/React.createElement("circle", {
        cx: "35",
        cy: "20",
        r: "5",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "35",
        y: "11",
        fontSize: "5",
        fill: "#fef08a",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B1"), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "50",
        r: "5",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "58",
        y: "52",
        fontSize: "5",
        fill: "#fef08a",
        fontWeight: "bold"
      }, "B2"), /*#__PURE__*/React.createElement("circle", {
        cx: "80",
        cy: "50",
        r: "5",
        fill: "#fef08a",
        stroke: "#d97706",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "88",
        y: "52",
        fontSize: "5",
        fill: "#fef08a",
        fontWeight: "bold"
      }, "B3"))),
      question: "Si el bombillo B2 se rompe, ¿qué le sucederá a los bombillos B1 y B3 en la casa?",
      options: ["Ambos bombillos (B1 y B3) se apagarán porque el circuito se interrumpe por completo al ser un solo sistema.", "B1 se apagará, pero B3 seguirá encendido porque está más lejos de la batería.", "B1 y B3 seguirán encendidos, porque la corriente puede evitar B2 y viajar por la rama de B3.", "B3 seguirá encendido, pero B1 se apagará por estar conectado en serie al inicio del circuito."],
      correct: 2,
      feedback: "¡Análisis de sistemas dominado! Observa el diagrama: La corriente sale de la batería y pasa por B1 obligatoriamente. Luego, el cable SE DIVIDE en dos ramas: una va a B2 y otra a B3. Si B2 se rompe, la corriente simplemente 'ignora' esa rama y viaja por la rama derecha hacia B3, completando el circuito de regreso a la batería. B1 y B3 siguen vivos."
    }, {
      contextId: 2,
      theme: "Física - Electricidad",
      question: "Supongamos que el ingeniero repara el bombillo B2. Sin embargo, ocurre una falla distinta: Es el bombillo B1 el que se funde. ¿Qué ocurrirá con el resto del sistema de iluminación?",
      options: ["B2 y B3 seguirán encendidos sin problema porque ambos están conectados en paralelo entre sí.", "Solo B2 se apagará por estar en el medio.", "Todo el sistema se apagará (B2 y B3), porque B1 está en serie y actúa como el único puente principal desde la batería.", "Los bombillos B2 y B3 brillarán con más fuerza porque ahora reciben los 12V directamente sin compartir con B1."],
      correct: 2,
      feedback: "¡Excelente! B1 está en el 'cable madre' o conducto principal. Es un 'cuello de botella' en SERIE para todo el resto del sistema. Si cortas la vía principal en B1, los electrones nunca lograrán llegar a la bifurcación, por lo que será imposible encender a B2 o a B3."
    },
    // CONTEXTO 3: QUÍMICA Y ESTADO (Preguntas 4 y 5)
    {
      contextId: 3,
      theme: "Química - Materia",
      contextTitle: "Extracción bajo el mar (Gases y Presión)",
      contextText: "En una plataforma petrolera en el Mar Caribe se extrae una mezcla pura de gas metano. Los ingenieros deben transportarlo en buques, pero ocupa demasiado volumen en estado gaseoso. Analizan el diagrama de fase del metano para encontrar la forma más económica y eficiente de convertirlo en Líquido, sin necesidad de usar gigantescos congeladores para bajar su temperatura bajo cero.",
      contextVisual: /*#__PURE__*/React.createElement("div", {
        className: "w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6 flex justify-center"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full max-w-sm h-64 overflow-visible",
        viewBox: "0 0 100 100"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "90",
        y2: "90",
        stroke: "#475569",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "90",
        x2: "10",
        y2: "10",
        stroke: "#475569",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "100",
        fontSize: "4.5",
        fill: "#475569",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Temperatura (\xB0C) \u2192"), /*#__PURE__*/React.createElement("text", {
        x: "-4",
        y: "50",
        fontSize: "4.5",
        fill: "#475569",
        transform: "rotate(-90 -4,50)",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Presi\xF3n (Atm) \u2191"), /*#__PURE__*/React.createElement("path", {
        d: "M 10 30 Q 30 45 40 60",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 40 60 Q 50 40 80 10",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M 40 60 Q 60 70 85 80",
        fill: "none",
        stroke: "#d946ef",
        strokeWidth: "2"
      }), /*#__PURE__*/React.createElement("text", {
        x: "25",
        y: "60",
        fontSize: "6",
        fill: "#a21caf",
        fontWeight: "bold"
      }, "S\xF3lido"), /*#__PURE__*/React.createElement("text", {
        x: "60",
        y: "35",
        fontSize: "6",
        fill: "#3b82f6",
        fontWeight: "bold"
      }, "L\xEDquido"), /*#__PURE__*/React.createElement("text", {
        x: "65",
        y: "75",
        fontSize: "6",
        fill: "#10b981",
        fontWeight: "bold"
      }, "Gas"), /*#__PURE__*/React.createElement("circle", {
        cx: "75",
        cy: "75",
        r: "2.5",
        fill: "#10b981"
      }), /*#__PURE__*/React.createElement("text", {
        x: "75",
        y: "81",
        fontSize: "3.5",
        fill: "#047857",
        fontWeight: "bold",
        textAnchor: "middle"
      }, "Estado Actual (Plataforma)"), /*#__PURE__*/React.createElement("line", {
        x1: "75",
        y1: "71",
        x2: "75",
        y2: "20",
        stroke: "#ef4444",
        strokeWidth: "1.5",
        strokeDasharray: "2 2"
      }), /*#__PURE__*/React.createElement("polygon", {
        points: "73.5,23 76.5,23 75,18",
        fill: "#ef4444"
      }))),
      question: "Basado en el diagrama de fase y la flecha roja punteada que trazaron en sus planos, ¿cuál es el procedimiento físico exacto que proponen los ingenieros para licuar el gas (volverlo líquido) a temperatura ambiente?",
      options: ["Disminuir la temperatura ambiental manteniendo la presión atmosférica constante.", "Aumentar la presión mecánica drásticamente sin alterar la temperatura.", "Aumentar tanto la temperatura con calefactores como la presión al mismo tiempo.", "Disminuir la presión del contenedor para permitir que el gas se condense naturalmente."],
      correct: 1,
      feedback: "¡Interpretación de gráficas 10/10! Observa la flecha roja: Sube verticalmente desde la zona de GAS hacia la zona de LÍQUIDO. Subir en el Eje Y significa Aumentar la Presión. Como la flecha es totalmente vertical y no se inclina ni a izquierda ni a derecha, significa que no se mueve en el Eje X (la temperatura se mantiene constante)."
    }, {
      contextId: 3,
      theme: "Química - Materia",
      question: "Si una vez licuado y almacenado a alta presión, ocurre un accidente en el buque y se rompe una válvula generando una descompresión masiva (la presión cae rápidamente hacia el fondo del Eje Y), ¿qué le ocurrirá físicamente al metano líquido?",
      options: ["Se convertirá en un bloque sólido de hielo instantáneamente debido al choque térmico.", "Se mantendrá en estado líquido de forma inestable pero a menor temperatura.", "Se evaporará violentamente volviendo a su estado Gaseoso original.", "Alcanzará inmediatamente el Punto Triple y desaparecerá."],
      correct: 2,
      feedback: "¡Lógica termodinámica pura! Si estás en la zona Líquida (arriba en la gráfica) y ocurre una descompresión (caída libre y vertical en el Eje Y de la Presión), cruzarás inmediatamente la línea morada fronteriza hacia abajo, ingresando directamente a la zona de Gas. El líquido hervirá y se evaporará de golpe."
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
        title: "¡Puntaje Perfecto (400+)! ",
        desc: "Nivel ICFES Dios. Tienes una resistencia lectora impecable y un razonamiento científico inquebrantable ante gráficas complejas."
      };
      if (percentage >= 0.6) return {
        title: "¡Casi en la Cima!",
        desc: "Lograste interpretar los racimos de preguntas. Un poco más de práctica con gráficas compuestas y asegurarás un puntaje élite."
      };
      return {
        title: "Resistencia en Entrenamiento",
        desc: "El formato de textos largos fatiga el cerebro rápido. Tu reto no es saber los conceptos, sino mantener el enfoque leyendo."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F0F4F8] font-sans text-slate-800 selection:bg-blue-200"
    }, /*#__PURE__*/React.createElement("div", {
      className: "fixed top-6 left-1/2 -translate-x-1/2 z-50"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex bg-white/90 backdrop-blur-xl p-2 rounded-full border border-slate-200 shadow-sm items-center gap-1 md:gap-2"
    }, [{
      id: 'introduccion',
      icon: Sparkles,
      label: 'Inicio'
    }, {
      id: 'teoria',
      icon: BookOpen,
      label: 'Mapas de Estudio'
    }, {
      id: 'practica',
      icon: Target,
      label: 'Simulador Real'
    }].map(tab => /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
    }, /*#__PURE__*/React.createElement(tab.icon, {
      className: `w-4 h-4 ${activeTab === tab.id ? 'text-white' : ''}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden md:block"
    }, tab.label))))), /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto p-4 md:p-8 pt-28 pb-32"
    }, activeTab === 'introduccion' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in zoom-in-95 duration-700 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center bg-slate-900 shadow-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-0"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=2000&q=80",
      alt: "Science and Data",
      className: "w-full h-full object-cover opacity-30 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md border border-blue-400/30 rounded-full text-cyan-300 text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    }, /*#__PURE__*/React.createElement(Activity, {
      className: "w-4 h-4"
    }), " Nivel \xC9lite 400+"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "Uso Comprensivo ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"
    }, "del Conocimiento")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "La competencia m\xE1s exigente del ICFES. Ya no basta con saber los conceptos; aqu\xED debes usarlos como herramientas para descifrar gr\xE1ficas complejas y resolver problemas reales.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement(Network, {
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
    }, "Estado"), /*#__PURE__*/React.createElement("span", {
      className: "font-mono text-cyan-400 font-bold text-sm"
    }, "Resistencia Lectora")), /*#__PURE__*/React.createElement(CheckCircle, {
      className: "w-5 h-5 text-emerald-400"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "\xBFA qu\xE9 nos enfrentamos aqu\xED?"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
    }, [{
      t: "Textos en Racimo",
      d: "1 lectura larga genera hasta 4 preguntas.",
      c: "bg-blue-100 text-blue-600",
      i: BookOpen
    }, {
      t: "Gráficas Avanzadas",
      d: "Cladogramas evolutivos y Diagramas de Fase.",
      c: "bg-cyan-100 text-cyan-600",
      i: GitBranch
    }, {
      t: "Sistemas Cerrados",
      d: "Flujos de energía y circuitos eléctricos.",
      c: "bg-indigo-100 text-indigo-600",
      i: Zap
    }, {
      t: "C.T.S. Integral",
      d: "Toma de decisiones ambientales con datos.",
      c: "bg-violet-100 text-violet-600",
      i: ShieldCheck
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
      className: "bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
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
      className: "text-blue-100 text-sm leading-relaxed"
    }, "Prueba el Simulador 'Contexto Complejo'. Enfrenta las preguntas largas que destruyen la concentraci\xF3n.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-blue-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Iniciar Simulador ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-3xl mx-auto mb-10"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "Modelos Cient\xEDficos Complejos"), /*#__PURE__*/React.createElement("div", {
      className: "w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"
    }), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg leading-relaxed"
    }, "En esta secci\xF3n no hay \"casos de 3 pasos\". Aqu\xED estudias los ", /*#__PURE__*/React.createElement("strong", null, "Mapas Maestros"), " que el ICFES asume que ya sabes interpretar. Con gr\xE1ficas claras y a tama\xF1o completo.")), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col gap-12"
    }, theoryCards.map((card, idx) => /*#__PURE__*/React.createElement("div", {
      key: idx,
      className: "bg-white rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden flex flex-col lg:flex-row min-h-[400px]"
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
      className: `bg-slate-900 p-8 md:p-12 lg:w-7/12 border-t lg:border-t-0 lg:border-l border-slate-800 relative overflow-hidden flex items-center justify-center`
    }, /*#__PURE__*/React.createElement("div", {
      className: `absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-${card.color}-500/10 rounded-full blur-3xl pointer-events-none`
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full max-w-4xl flex justify-center items-center h-full"
    }, card.visual)))))), activeTab === 'practica' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-500 pt-4"
    }, !showResults ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] border border-slate-200 overflow-hidden flex flex-col lg:flex-row min-h-[700px]"
    }, /*#__PURE__*/React.createElement("div", {
      className: "lg:w-5/12 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 p-6 md:p-10 flex flex-col relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "inline-flex w-max items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 font-bold text-[10px] uppercase tracking-widest rounded-md mb-6 border border-blue-200 shadow-sm relative z-10"
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
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:bg-blue-50/30";
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
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-300 cursor-not-allowed'}`
    }, currentQIndex === hardcoreQuiz.length - 1 ? 'Finalizar Simulacro' : 'Siguiente Pregunta', /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-5 h-5"
    }))))) :
    /*#__PURE__*/
    // PANTALLA DE RESULTADOS
    React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(37,99,235,0.5)] border-4 border-blue-400"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, resultData.title), /*#__PURE__*/React.createElement("p", {
      className: "relative z-10 text-slate-400 text-lg mb-10 max-w-md mx-auto leading-relaxed"
    }, resultData.desc), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 mb-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-500 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", hardcoreQuiz.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-blue-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Modo Hardcore")))));
  }
  window.renderCNModule3 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloUsoComprensivo));
  };
})();