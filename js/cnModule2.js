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
  function ModuloExplicacion() {
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
      titulo: "La Montaña Rusa (Energía)",
      situacion: "Un carrito de montaña rusa cae desde el punto más alto. A medida que desciende, su velocidad aumenta enormemente. ¿Qué ocurre con su energía?",
      analisis: "La Ley de Conservación dice que la energía no se crea ni se destruye, se transforma. Arriba tiene Energía Potencial (altura). Al caer, esa altura se transforma en movimiento (Cinética).",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("li", {
        className: "flex justify-between items-center bg-amber-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Punto m\xE1s alto:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-amber-700"
      }, "M\xE1xima E. Potencial")), /*#__PURE__*/React.createElement("li", {
        className: "flex justify-between items-center bg-amber-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Punto m\xE1s bajo:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-amber-700"
      }, "M\xE1xima E. Cin\xE9tica"))),
      resultado: "La E. Potencial se transforma en Cinética."
    }, {
      titulo: "El vaso con agua y el lápiz",
      situacion: "Metes un lápiz en un vaso con agua y parece que el lápiz está quebrado o doblado. ¿Qué fenómeno físico explica esto?",
      analisis: "La luz viaja a diferentes velocidades dependiendo del medio. Viaja rápido en el aire, pero más lento en el agua. Este cambio de velocidad hace que los rayos de luz se 'doblen'.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-amber-50/50 p-2 rounded border border-amber-100"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Rebote de luz:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-slate-700"
      }, "Reflexi\xF3n (Espejos)")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-amber-50/50 p-2 rounded border border-amber-100"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Doble de luz:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-amber-700"
      }, "Refracci\xF3n (Lentes/Agua)"))),
      resultado: "Refracción de la luz."
    }, {
      titulo: "Empujar una nevera",
      situacion: "Intentas empujar una nevera pesada sobre el piso y no se mueve. Cuando al fin logras que deslice, es más fácil seguir empujándola. ¿Por qué?",
      analisis: "Dos fuerzas actúan aquí: tu empuje y la Fricción (el roce con el piso que se opone al movimiento). La fricción estática (cuando está quieta) siempre es mayor que la fricción dinámica.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-amber-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Fricci\xF3n Est\xE1tica (Quieta) = Muy Alta"), /*#__PURE__*/React.createElement("li", {
        className: "text-amber-700 font-bold border-t border-amber-100 pt-2 mt-2"
      }, "Fricci\xF3n Din\xE1mica (Movimiento) = M\xE1s Baja")),
      resultado: "Venciste la fricción estática inicial."
    }];
    const ejemplosEstrategia2 = [{
      titulo: "El globo en la nevera",
      situacion: "Inflas un globo y lo metes en la nevera. Una hora después, el globo se ha encogido y arrugado. ¿Por qué ocurre esto?",
      analisis: "Ley de los Gases (Charles). La temperatura mide qué tan rápido se mueven las partículas. Al enfriarse, las partículas del gas pierden energía, chocan menos y ocupan menos espacio.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-fuchsia-50 p-2 rounded text-fuchsia-700 font-bold"
      }, /*#__PURE__*/React.createElement("span", null, "\u2193 Baja Temperatura"), /*#__PURE__*/React.createElement("span", null, "="), /*#__PURE__*/React.createElement("span", null, "\u2193 Baja Volumen"))),
      resultado: "Las partículas de gas se contraen por el frío."
    }, {
      titulo: "Hielo derretido vs. Clavo oxidado",
      situacion: "Dejas un hielo al sol y se vuelve agua. Dejas un clavo de hierro a la lluvia y se vuelve óxido rojizo. ¿Cuál es la diferencia química?",
      analisis: "El hielo derritiéndose solo cambia de estado (sigue siendo H2O), es un Cambio Físico. El clavo reacciona con el oxígeno creando una sustancia nueva, es un Cambio Químico.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-fuchsia-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "F\xEDsico:"), " Misma sustancia, distinta forma."), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("strong", null, "Qu\xEDmico:"), " Ruptura de enlaces, nueva sustancia."), /*#__PURE__*/React.createElement("li", {
        className: "text-fuchsia-700 font-bold border-t border-fuchsia-100 pt-2 mt-2"
      }, "Hielo = F\xEDsico / \xD3xido = Qu\xEDmico.")),
      resultado: "El óxido es una reacción química irreversible."
    }, {
      titulo: "El pH de la piscina",
      situacion: "Mides el agua de una piscina y tiene un pH de 3. ¿Qué le pasa al agua y qué debes agregarle para neutralizarla a pH 7?",
      analisis: "La escala de pH va de 0 a 14. Menos de 7 es Ácido, 7 es Neutro, y más de 7 es Básico (Alcalino). Un pH de 3 es muy ácido. Para llevarlo a 7, necesitas una Base.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-fuchsia-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "pH = 3:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-rose-600"
      }, "Sustancia \xC1cida")), /*#__PURE__*/React.createElement("div", {
        className: "flex justify-between items-center bg-fuchsia-50/50 p-2 rounded"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-slate-500"
      }, "Ant\xEDdoto:"), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-blue-600"
      }, "Sustancia B\xE1sica/Alcalina"))),
      resultado: "El agua es ácida. Agrega una base química."
    }];
    const ejemplosEstrategia3 = [{
      titulo: "La planta marchita",
      situacion: "Una planta no ha sido regada en días. Sus hojas están caídas y marchitas, pero al regarla vuelve a erguirse. ¿Qué proceso celular explica esto?",
      analisis: "Las células vegetales tienen 'Vacuolas' que almacenan agua. Cuando se llenan, empujan la pared celular dándole firmeza a la planta (Presión de Turgencia).",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-emerald-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Sin agua: Vacuolas vac\xEDas \u2192 Pierde turgencia."), /*#__PURE__*/React.createElement("li", null, "Con agua: Vacuolas llenas \u2192 Recupera firmeza."), /*#__PURE__*/React.createElement("li", {
        className: "text-emerald-700 font-bold"
      }, "Es un proceso puramente osm\xF3tico celular.")),
      resultado: "Pérdida y recuperación de turgencia en la vacuola."
    }, {
      titulo: "La red trófica rota",
      situacion: "En un bosque hay Lobos, Venados y Pasto. Unos cazadores eliminan a todos los lobos. ¿Qué pasará con la cantidad de pasto al año siguiente?",
      analisis: "Los ecosistemas están conectados. Sin el depredador (lobo), la presa (venado) se reproduce sin control. Más venados comerán excesivamente el pasto, destruyéndolo.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm text-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-2"
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-rose-500 line-through"
      }, "Lobos"), " ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "w-3 h-3 text-slate-400"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-emerald-600 font-bold"
      }, "\u2191 Venados"), " ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "w-3 h-3 text-slate-400"
      }), /*#__PURE__*/React.createElement("span", {
        className: "text-amber-600 font-bold"
      }, "\u2193 Pasto"))),
      resultado: "El pasto disminuirá severamente por sobrepastoreo."
    }, {
      titulo: "El secreto de los ojos",
      situacion: "Dos padres tienen ojos cafés, pero su hijo nace con ojos azules. ¿Cómo es posible biológicamente?",
      analisis: "El color café es un gen Dominante (A) y el azul es Recesivo (a). Para tener ojos azules, el niño debió heredar un gen recesivo de AMBOS padres (aa).",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-emerald-50/50 p-3 rounded text-center"
      }, /*#__PURE__*/React.createElement("li", null, "Pap\xE1: Aa (Ojo Caf\xE9) | Mam\xE1: Aa (Ojo Caf\xE9)"), /*#__PURE__*/React.createElement("li", null, "Hijo hered\xF3 la 'a' de pap\xE1 y la 'a' de mam\xE1."), /*#__PURE__*/React.createElement("li", {
        className: "text-emerald-700 font-bold"
      }, "Hijo: aa (Ojos Azules).")),
      resultado: "Ambos padres portaban el gen recesivo oculto."
    }];
    const ejemplosEstrategia4 = [{
      titulo: "El lago verde",
      situacion: "Una fábrica de fertilizantes desecha sus residuos en un lago. En un mes, el lago se llena de algas verdes y los peces mueren. ¿Por qué el fertilizante mató a los peces?",
      analisis: "Fenómeno de Eutrofización. El fertilizante hace crecer a las algas explosivamente. Cuando estas mueren, las bacterias las descomponen, consumiendo TODO el oxígeno del agua.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-sky-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "1. Nutrientes \u2192 Explosi\xF3n de algas."), /*#__PURE__*/React.createElement("li", null, "2. Algas mueren \u2192 Bacterias descomponen."), /*#__PURE__*/React.createElement("li", {
        className: "text-sky-700 font-bold"
      }, "3. Bacterias agotan el ox\xEDgeno (Hipoxia).")),
      resultado: "Murieron asfixiados por falta de oxígeno, no por veneno."
    }, {
      titulo: "Las bacterias inmortales",
      situacion: "Un paciente toma un antibiótico por 2 días y se siente bien, así que deja de tomarlo. Meses después recae, pero el mismo antibiótico ya no le hace efecto. ¿Qué pasó?",
      analisis: "Selección Natural en tiempo real. Al parar el tratamiento, mató a las bacterias débiles, pero las más fuertes sobrevivieron, se multiplicaron y ahora toda la población es resistente.",
      calculo: /*#__PURE__*/React.createElement("div", {
        className: "space-y-3 font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "bg-sky-50 p-2 rounded text-sky-800 text-center font-bold"
      }, "Sobreviven las resistentes \u2192 Heredan su resistencia.")),
      resultado: "Creó una población de bacterias super-resistentes."
    }, {
      titulo: "La Trampa del Invernadero",
      situacion: "La Tierra recibe radiación del Sol todos los días. ¿Por qué la Tierra no se calienta infinitamente, y por qué el CO2 cambia esto?",
      analisis: "La Tierra absorbe luz solar y la expulsa de regreso al espacio como calor (infrarrojo). El CO2 actúa como una manta térmica: deja entrar la luz del sol, pero bloquea la salida del calor.",
      calculo: /*#__PURE__*/React.createElement("ul", {
        className: "text-sm space-y-2 font-mono text-slate-600 bg-sky-50/50 p-3 rounded"
      }, /*#__PURE__*/React.createElement("li", null, "Entra: Luz UV y Visible (Atraviesa el CO2)."), /*#__PURE__*/React.createElement("li", null, "Sale: Radiaci\xF3n Infrarroja / Calor."), /*#__PURE__*/React.createElement("li", {
        className: "text-sky-700 font-bold border-t border-sky-100 pt-2 mt-2"
      }, "El CO2 bloquea el Infrarrojo, atrapando el calor.")),
      resultado: "Desbalance en la radiación de salida."
    }];

    // Diseño Moderno UI 2026 - Tarjetas Rediseñadas
    const renderCasosModernos = (casosArray, themeName) => {
      const themes = {
        amber: {
          icon: Zap,
          color: 'text-amber-500',
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          grad: 'from-amber-400 to-amber-600'
        },
        fuchsia: {
          icon: FlaskConical,
          color: 'text-fuchsia-500',
          bg: 'bg-fuchsia-50',
          border: 'border-fuchsia-200',
          grad: 'from-fuchsia-400 to-fuchsia-600'
        },
        emerald: {
          icon: Leaf,
          color: 'text-emerald-500',
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          grad: 'from-emerald-400 to-emerald-600'
        },
        sky: {
          icon: Globe,
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
        className: "group relative bg-white rounded-3xl p-1 border border-slate-200 hover:border-transparent transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
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
      }), " Explicaci\xF3n L\xF3gica"), /*#__PURE__*/React.createElement("p", {
        className: "text-sm text-slate-700 leading-relaxed"
      }, caso.analisis)), /*#__PURE__*/React.createElement("div", {
        className: "mt-auto"
      }, /*#__PURE__*/React.createElement("h5", {
        className: "text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2"
      }, /*#__PURE__*/React.createElement(BookOpen, {
        className: "w-3 h-3"
      }), " Sustento Te\xF3rico"), caso.calculo)), /*#__PURE__*/React.createElement("div", {
        className: `p-4 bg-slate-50 border-t border-slate-100 mt-auto flex items-center justify-between group-hover:${t.bg} transition-colors`
      }, /*#__PURE__*/React.createElement("span", {
        className: "text-xs font-bold text-slate-500 uppercase tracking-wider"
      }, "Fen\xF3meno"), /*#__PURE__*/React.createElement("span", {
        className: `font-bold ${t.color} text-sm text-right leading-tight max-w-[60%]`
      }, caso.resultado))))));
    };

    // ==========================================
    // QUIZ (PRÁCTICA)
    // ==========================================
    const questions = [{
      type: "Física (Energía)",
      question: "Un péndulo oscila de un lado a otro. ¿En qué punto exacto de su trayectoria tiene la MAYOR Energía Cinética (movimiento) y la MENOR Energía Potencial (altura)?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-slate-50 rounded-2xl shadow-sm border border-slate-200 text-center relative overflow-hidden"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "w-full h-32 overflow-visible",
        viewBox: "0 0 100 80"
      }, /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "0",
        x2: "10",
        y2: "50",
        stroke: "#cbd5e1",
        strokeWidth: "2",
        strokeDasharray: "4 4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "0",
        x2: "90",
        y2: "50",
        stroke: "#cbd5e1",
        strokeWidth: "2",
        strokeDasharray: "4 4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "50",
        y1: "0",
        x2: "50",
        y2: "70",
        stroke: "#f59e0b",
        strokeWidth: "3"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "10",
        cy: "50",
        r: "6",
        fill: "#94a3b8"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "90",
        cy: "50",
        r: "6",
        fill: "#94a3b8"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "50",
        cy: "70",
        r: "8",
        fill: "#d97706"
      }), /*#__PURE__*/React.createElement("text", {
        x: "10",
        y: "70",
        fontSize: "10",
        fill: "#64748b",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "A (Extremo)"), /*#__PURE__*/React.createElement("text", {
        x: "50",
        y: "90",
        fontSize: "10",
        fill: "#b45309",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "B (Centro)"), /*#__PURE__*/React.createElement("text", {
        x: "90",
        y: "70",
        fontSize: "10",
        fill: "#64748b",
        textAnchor: "middle",
        fontWeight: "bold"
      }, "C (Extremo)"))),
      options: ["En los puntos A y C.", "En el punto B (el centro).", "La energía es igual en todos los puntos.", "En el punto más alto de su vuelo."],
      correct: 1,
      feedback: "¡Exacto! En los extremos (A y C), el péndulo se detiene un milisegundo (Cinética = 0, Potencial = Máxima). Al pasar por el centro (B), está en su punto más bajo (Potencial = 0) y va a su máxima velocidad (Cinética = Máxima)."
    }, {
      type: "Química (Gases)",
      question: "Tienes una jeringa tapada con el dedo y presionas el émbolo hacia adentro, aplastando el aire en su interior. Según la Ley de Boyle, ¿qué le pasa a la presión del gas dentro de la jeringa?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-fuchsia-50 rounded-2xl shadow-sm border border-fuchsia-100 flex items-center justify-center gap-4"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-24 h-12 bg-white border-2 border-fuchsia-300 rounded flex items-center justify-end p-1 relative"
      }, /*#__PURE__*/React.createElement("div", {
        className: "absolute -left-6 text-fuchsia-400 font-bold"
      }, "Dedo"), /*#__PURE__*/React.createElement("div", {
        className: "w-12 h-10 bg-fuchsia-200 border border-fuchsia-400"
      }), /*#__PURE__*/React.createElement(ArrowRight, {
        className: "absolute -right-8 text-fuchsia-600"
      }))),
      options: ["La presión disminuye porque hay menos volumen.", "La presión aumenta porque el gas choca más en un volumen menor.", "La presión no cambia, solo cambia el tamaño.", "El gas se convierte en líquido automáticamente."],
      correct: 1,
      feedback: "¡Brillante! La Ley de Boyle dice que a temperatura constante, el Volumen y la Presión son INVERSAMENTE proporcionales. Si reduces el volumen (lo aplastas), la presión aumenta dramáticamente."
    }, {
      type: "Biología (Célula)",
      question: "La membrana celular es 'semipermeable'. Si colocas un glóbulo rojo (que tiene agua y sales dentro) en un vaso con agua destilada (agua pura sin sal), ¿qué le pasará a la célula?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "w-24 h-24 rounded-full border-4 border-rose-300 bg-rose-50 flex items-center justify-center text-rose-500 font-bold mb-2 shadow-inner"
      }, "Agua + Sal"), /*#__PURE__*/React.createElement("p", {
        className: "text-xs text-sky-500 font-bold"
      }, "Afuera: Agua Pura (100%)")),
      options: ["El agua entrará al glóbulo rojo para equilibrar las sales, y la célula se hinchará o explotará.", "El agua saldrá del glóbulo rojo y este se secará como una pasa.", "Las sales saldrán del glóbulo rojo y el agua no se moverá.", "No pasará absolutamente nada."],
      correct: 0,
      feedback: "¡Perfecto! Osmosis. El agua siempre viaja de donde hay MÁS agua (agua pura) a donde hay MENOS agua (adentro de la célula, que está ocupada por las sales). La célula se llena como un globo y puede explotar (lisis)."
    }, {
      type: "CTS (Ecosistemas)",
      question: "En una red trófica marina, el Plancton es comido por Sardinas, las Sardinas por Atunes, y los Atunes por Tiburones. Si un veneno de fábrica contamina al plancton con 1 gramo de toxina, ¿quién tendrá la mayor concentración del veneno en su cuerpo?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-4 bg-sky-900 rounded-3xl shadow-lg font-mono text-sm"
      }, /*#__PURE__*/React.createElement("div", {
        className: "flex items-center justify-center gap-2 text-sky-200"
      }, /*#__PURE__*/React.createElement("span", null, "Plancton"), " ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "w-3 h-3 text-sky-500"
      }), /*#__PURE__*/React.createElement("span", null, "Sardina"), " ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "w-3 h-3 text-sky-500"
      }), /*#__PURE__*/React.createElement("span", null, "At\xFAn"), " ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "w-3 h-3 text-sky-500"
      }), /*#__PURE__*/React.createElement("span", {
        className: "font-bold text-white"
      }, "Tibur\xF3n"))),
      options: ["El Plancton, porque fue el primero contaminado.", "La Sardina, porque es pequeña.", "El Tiburón, debido a la biomagnificación.", "Todos tendrán exactamente 1 gramo de veneno."],
      correct: 2,
      feedback: "¡Ojo clínico ecológico! Biomagnificación: Una sardina come miles de plancton (acumula el veneno). Un atún come cientos de sardinas (acumula más). El tiburón come docenas de atunes. El superdepredador siempre recibe la peor dosis de toxinas."
    }, {
      type: "Física y Química",
      question: "En Bogotá (2.600m de altura), el agua hierve a 92°C. En Cartagena (al nivel del mar), hierve a 100°C. ¿Por qué ocurre esto físicamente?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 flex justify-center gap-6"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-1 text-slate-700"
      }, "\u26F0\uFE0F"), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-500 uppercase"
      }, "Bogot\xE1 (Hierve a 92\xB0)")), /*#__PURE__*/React.createElement("div", {
        className: "text-center p-4 bg-white rounded-2xl shadow-sm border border-slate-100"
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-2xl mb-1 text-sky-500"
      }, "\uD83C\uDF0A"), /*#__PURE__*/React.createElement("p", {
        className: "text-[10px] font-bold text-slate-500 uppercase"
      }, "Cartagena (Hierve a 100\xB0)"))),
      options: ["Porque en Bogotá hace más frío, así que el agua necesita menos calor.", "Porque a mayor altura hay MENOR presión atmosférica, así que a las burbujas les cuesta menos trabajo escapar.", "Porque el agua de Bogotá tiene más minerales y sal.", "Porque el fuego quema más rápido al nivel del mar."],
      correct: 1,
      feedback: "¡Ciencia pura! La ebullición ocurre cuando la presión del vapor del agua iguala a la presión atmosférica que la aplasta. En Bogotá hay menos aire 'aplastando' el agua, por lo que necesita menos temperatura (energía) para escapar como gas."
    }, {
      type: "Biología (Fotosíntesis)",
      question: "Las plantas realizan fotosíntesis para crear su propio alimento. ¿Cuáles son los ingredientes (reactivos) que necesita la planta para iniciar este proceso y qué libera como desecho?",
      visual: /*#__PURE__*/React.createElement("div", {
        className: "w-full max-w-sm mx-auto mb-6 mt-4 p-5 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-100 font-mono text-sm text-center"
      }, /*#__PURE__*/React.createElement("p", {
        className: "text-emerald-800 font-bold mb-2"
      }, "Ingredientes ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "inline w-3 h-3 text-emerald-500 mx-1"
      }), " Planta ", /*#__PURE__*/React.createElement(ArrowRight, {
        className: "inline w-3 h-3 text-emerald-500 mx-1"
      }), " Productos")),
      options: ["Necesita: Oxígeno, Luz y Azúcar. Libera: Agua.", "Necesita: Dióxido de Carbono (CO2), Agua y Luz. Libera: Oxígeno y Azúcar.", "Necesita: Oxígeno, Agua y Luz. Libera: Dióxido de Carbono (CO2).", "Necesita: Tierra fértil y Oxígeno. Libera: Luz solar."],
      correct: 1,
      feedback: "¡Magistral! La planta respira el 'aire malo' (CO2), toma agua por las raíces y usa la luz del Sol como energía para 'cocinar' su azúcar (Glucosa). El subproducto (la basura de la planta) es el Oxígeno que nosotros respiramos."
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
        title: "¡Físico, Químico y Biólogo!",
        desc: "Dominas por completo la explicación de fenómenos. Comprendes cómo la energía, la materia y la vida interactúan en el universo."
      };
      if (percentage >= 0.6) return {
        title: "¡Buen Pensamiento!",
        desc: "Entiendes la mayoría de fenómenos naturales, pero repasa los conceptos clave de química y física de fluidos en el formulario."
      };
      return {
        title: "¡Ciencia en construcción!",
        desc: "Responder fenómenos requiere no usar el 'sentido común', sino las leyes de la física y biología. Vuelve a los casos teóricos."
      };
    };
    const resultData = getResultMessage();
    return /*#__PURE__*/React.createElement("div", {
      className: "min-h-screen bg-[#F8FAFC] font-sans text-slate-800 selection:bg-indigo-200"
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
      label: 'Leyes & Casos'
    }, {
      id: 'practica',
      icon: Target,
      label: 'Simulador'
    }].map(tab => /*#__PURE__*/React.createElement("button", {
      key: tab.id,
      onClick: () => setActiveTab(tab.id),
      className: `flex items-center gap-2 px-6 py-3 font-bold text-sm transition-all duration-300 rounded-full ${activeTab === tab.id ? 'bg-indigo-600 text-white shadow-md scale-100' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 scale-95'}`
    }, /*#__PURE__*/React.createElement(tab.icon, {
      className: `w-4 h-4 ${activeTab === tab.id ? 'text-white' : ''}`
    }), /*#__PURE__*/React.createElement("span", {
      className: "hidden md:block"
    }, tab.label))))), /*#__PURE__*/React.createElement("div", {
      className: "max-w-7xl mx-auto p-4 md:p-8 pt-28 pb-12"
    }, activeTab === 'introduccion' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in zoom-in-95 duration-700 space-y-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "relative w-full rounded-[2.5rem] overflow-hidden min-h-[500px] flex items-center bg-slate-900 shadow-2xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 z-0"
    }, /*#__PURE__*/React.createElement("img", {
      src: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=2000&q=80",
      alt: "Scientific Phenomenon",
      className: "w-full h-full object-cover opacity-30 mix-blend-luminosity"
    }), /*#__PURE__*/React.createElement("div", {
      className: "absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-slate-900/80"
    })), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 p-8 md:p-16 max-w-3xl"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-bold uppercase tracking-widest mb-6"
    }, /*#__PURE__*/React.createElement(Atom, {
      className: "w-4 h-4"
    }), " Ciencias Naturales (M\xF3dulo 2)"), /*#__PURE__*/React.createElement("h1", {
      className: "text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
    }, "Explicaci\xF3n de ", /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("span", {
      className: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-300"
    }, "Fen\xF3menos")), /*#__PURE__*/React.createElement("p", {
      className: "text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-xl"
    }, "Entiende \"el porqu\xE9\" detr\xE1s de la naturaleza. Domina las leyes de la f\xEDsica, la qu\xEDmica de la materia y la din\xE1mica de los ecosistemas para la prueba ICFES.")), /*#__PURE__*/React.createElement("div", {
      className: "hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-72 h-80 bg-white/10 backdrop-blur-2xl rounded-[2rem] border border-white/20 shadow-[0_0_50px_rgba(99,102,241,0.2)] flex-col items-center justify-center p-8"
    }, /*#__PURE__*/React.createElement("svg", {
      className: "w-full h-full overflow-visible",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 10 90 Q 50 10 90 90",
      fill: "none",
      stroke: "#6366f1",
      strokeWidth: "3",
      className: "drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "10",
      fill: "#22d3ee",
      className: "animate-bounce",
      style: {
        animationDuration: '2s'
      }
    }), /*#__PURE__*/React.createElement("line", {
      x1: "10",
      y1: "90",
      x2: "90",
      y2: "90",
      stroke: "rgba(255,255,255,0.2)",
      strokeWidth: "2"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mt-6 bg-slate-900/50 px-4 py-2 rounded-lg border border-white/10 font-mono text-indigo-400 font-bold tracking-widest text-xs uppercase"
    }, "Cinem\xE1tica & Energ\xEDa"))), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 md:grid-cols-3 gap-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold text-slate-800 mb-6"
    }, "Los 4 Pilares de los Fen\xF3menos"), /*#__PURE__*/React.createElement("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 gap-4"
    }, [{
      t: "Física Clásica",
      d: "Leyes de Newton, energía y movimiento",
      c: "bg-amber-100 text-amber-600",
      i: Zap
    }, {
      t: "Química Fundamental",
      d: "Cambios de estado, reacciones y pH",
      c: "bg-fuchsia-100 text-fuchsia-600",
      i: FlaskConical
    }, {
      t: "Biología Celular y Eco",
      d: "Fotosíntesis, ósmosis y redes tróficas",
      c: "bg-emerald-100 text-emerald-600",
      i: Leaf
    }, {
      t: "C.T.S",
      d: "Impacto ambiental y ecosistemas",
      c: "bg-sky-100 text-sky-600",
      i: Globe
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
      className: "bg-gradient-to-br from-indigo-500 to-blue-700 rounded-[2rem] p-8 md:p-10 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group cursor-pointer",
      onClick: () => setActiveTab('teoria')
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 border border-white/20"
    }, /*#__PURE__*/React.createElement(Atom, {
      className: "w-6 h-6 text-white"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-2xl font-bold mb-3"
    }, "Ir a las Leyes"), /*#__PURE__*/React.createElement("p", {
      className: "text-indigo-50 text-sm leading-relaxed"
    }, "Domina las reglas universales con nuestros 12 casos de estudio premium.")), /*#__PURE__*/React.createElement("div", {
      className: "mt-8 flex items-center gap-2 text-sm font-bold bg-white text-indigo-700 w-max px-5 py-2.5 rounded-full group-hover:shadow-lg group-hover:-translate-y-1 transition-all"
    }, "Comenzar ahora ", /*#__PURE__*/React.createElement(ChevronRight, {
      className: "w-4 h-4"
    }))))), activeTab === 'teoria' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-16"
    }, /*#__PURE__*/React.createElement("div", {
      className: "text-center max-w-2xl mx-auto"
    }, /*#__PURE__*/React.createElement("h2", {
      className: "text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4"
    }, "Leyes Naturales"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-500 text-lg"
    }, "Conoce los principios que rigen el universo estudiando nuestro Formulario Clave y los casos pr\xE1cticos.")), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-amber-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(Zap, {
      className: "w-5 h-5 text-amber-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-amber-400 font-bold uppercase tracking-widest text-sm"
    }, "F\xEDsica Cl\xE1sica")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Fuerzas, Ondas ", /*#__PURE__*/React.createElement("br", null), "y Energ\xEDa"), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-4 text-sm text-slate-400"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-amber-300 w-28 shrink-0"
    }, "Inercia:"), " Un cuerpo no se mueve, ni se detiene, a menos que una fuerza lo obligue (Fricci\xF3n)."), /*#__PURE__*/React.createElement("li", {
      className: "flex gap-3 bg-black/30 p-3 rounded-xl border border-white/5"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-orange-300 w-28 shrink-0"
    }, "Conservaci\xF3n:"), " La energ\xEDa total siempre es la misma. Arriba (E. Potencial), al caer (E. Cin\xE9tica)."))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-amber-500/20 px-4 py-2 rounded-full border border-amber-400/30 text-amber-300 font-bold text-xs uppercase tracking-widest mb-4"
    }, "Potencial vs Cin\xE9tica"), /*#__PURE__*/React.createElement("svg", {
      className: "w-full max-w-[200px] h-auto overflow-visible",
      viewBox: "0 0 100 100"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M 10 20 Q 50 100 90 20",
      fill: "none",
      stroke: "#f59e0b",
      strokeWidth: "4",
      className: "drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "10",
      cy: "20",
      r: "6",
      fill: "#fcd34d"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "50",
      cy: "50",
      r: "6",
      fill: "#fcd34d"
    }), /*#__PURE__*/React.createElement("text", {
      x: "-5",
      y: "15",
      fontSize: "10",
      fill: "#fde68a",
      fontWeight: "bold"
    }, "M\xE1x. Altura"), /*#__PURE__*/React.createElement("text", {
      x: "50",
      y: "65",
      fontSize: "10",
      fill: "#fde68a",
      textAnchor: "middle",
      fontWeight: "bold"
    }, "M\xE1x. Velocidad")))), renderCasosModernos(ejemplosEstrategia1, 'amber')), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8 pt-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-fuchsia-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(FlaskConical, {
      className: "w-5 h-5 text-fuchsia-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-fuchsia-400 font-bold uppercase tracking-widest text-sm"
    }, "Qu\xEDmica Fundamental")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Materia y ", /*#__PURE__*/React.createElement("br", null), "Transformaci\xF3n"), /*#__PURE__*/React.createElement("div", {
      className: "bg-fuchsia-500/10 border border-fuchsia-500/20 p-5 rounded-2xl mb-6"
    }, /*#__PURE__*/React.createElement("span", {
      className: "block text-fuchsia-300 text-xs font-bold mb-2 uppercase tracking-widest"
    }, "Regla de Gases Ideales:"), /*#__PURE__*/React.createElement("p", {
      className: "text-white font-mono text-sm leading-relaxed"
    }, "\"Si aplastas el gas (baja Volumen), la Presi\xF3n explota (sube). Si calientas el gas (sube Temp), el Volumen se expande.\""))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md flex flex-col gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white/10 p-4 rounded-xl border border-white/20 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-fuchsia-300 font-bold text-xs uppercase w-24"
    }, "C. F\xEDsico"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-sm text-right"
    }, "Misma mol\xE9cula (H2O), cambia de s\xF3lido a l\xEDquido. Reversible.")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white/10 p-4 rounded-xl border border-white/20 flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-fuchsia-300 font-bold text-xs uppercase w-24"
    }, "C. Qu\xEDmico"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-sm text-right"
    }, "Se rompen enlaces. Hierro se vuelve \xD3xido. Irreversible.")))), renderCasosModernos(ejemplosEstrategia2, 'fuchsia')), /*#__PURE__*/React.createElement("div", {
      className: "space-y-8 pt-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 border border-slate-800"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-3 mb-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "p-2 bg-emerald-500/20 rounded-lg"
    }, /*#__PURE__*/React.createElement(Leaf, {
      className: "w-5 h-5 text-emerald-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-emerald-400 font-bold uppercase tracking-widest text-sm"
    }, "Biolog\xEDa Din\xE1mica")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "C\xE9lulas y ", /*#__PURE__*/React.createElement("br", null), "Ecosistemas"), /*#__PURE__*/React.createElement("p", {
      className: "text-slate-400 text-sm leading-relaxed mb-6"
    }, "La biolog\xEDa no son piezas sueltas; todo est\xE1 en un delicado equilibrio. Un cambio en una parte de la cadena afecta a todos."), /*#__PURE__*/React.createElement("ul", {
      className: "space-y-3 text-sm font-medium text-white bg-white/5 p-5 rounded-2xl border border-white/5"
    }, /*#__PURE__*/React.createElement("li", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 mt-1 shrink-0 rounded-full bg-emerald-400"
    }), /*#__PURE__*/React.createElement("strong", null, "Osmosis:"), " El agua viaja hacia donde hay M\xC1S sal para diluirla."), /*#__PURE__*/React.createElement("li", {
      className: "flex items-start gap-3"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-3 h-3 mt-1 shrink-0 rounded-full bg-emerald-500"
    }), /*#__PURE__*/React.createElement("strong", null, "Red Tr\xF3fica:"), " Si quitas al Depredador, la Presa se multiplica y destruye el entorno (pasto)."))), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 flex justify-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex gap-6 w-full items-center justify-center font-mono"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-300 font-bold text-xs mb-1"
    }, "C\xE9lula Animal"), /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 bg-rose-500/20 border-2 border-rose-400 rounded-full flex items-center justify-center text-xs text-white"
    }, "Lisis")), /*#__PURE__*/React.createElement(ArrowRight, {
      className: "w-6 h-6 text-emerald-400"
    }), /*#__PURE__*/React.createElement("div", {
      className: "flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-emerald-300 font-bold text-xs mb-1"
    }, "C\xE9lula Vegetal"), /*#__PURE__*/React.createElement("div", {
      className: "w-16 h-16 bg-emerald-500/20 border-2 border-emerald-400 rounded-lg flex items-center justify-center text-xs text-white"
    }, "Firme"))))), renderCasosModernos(ejemplosEstrategia3, 'emerald')), /*#__PURE__*/React.createElement("div", {
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
    }, /*#__PURE__*/React.createElement(Globe, {
      className: "w-5 h-5 text-sky-400"
    })), /*#__PURE__*/React.createElement("h3", {
      className: "text-sky-400 font-bold uppercase tracking-widest text-sm"
    }, "Ciencia, Tecnolog\xEDa, Sociedad")), /*#__PURE__*/React.createElement("h4", {
      className: "text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
    }, "Impacto ", /*#__PURE__*/React.createElement("br", null), "Ambiental"), /*#__PURE__*/React.createElement("div", {
      className: "bg-rose-500/10 p-5 rounded-2xl border border-rose-500/20 text-rose-100 text-sm leading-relaxed mb-6"
    }, /*#__PURE__*/React.createElement("strong", {
      className: "text-rose-400 block mb-2 text-base"
    }, "\uD83D\uDEA8 Cuidado con el CO2"), "El Efecto Invernadero no es que \"entre m\xE1s luz solar\". Es que la luz entra, rebota como calor (infrarrojo), pero los gases (CO2) ", /*#__PURE__*/React.createElement("strong", null, "bloquean la salida"), " de ese calor hacia el espacio.")), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-full md:w-1/2 flex flex-col gap-4"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sky-300 font-bold text-sm uppercase"
    }, "Eutrofizaci\xF3n"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-xs text-right w-1/2"
    }, "Fertilizantes en lagos \u2192 Explosi\xF3n de algas \u2192 Muerte de ox\xEDgeno (asfixia a peces).")), /*#__PURE__*/React.createElement("div", {
      className: "bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-between"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-sky-300 font-bold text-sm uppercase"
    }, "S. Natural"), /*#__PURE__*/React.createElement("span", {
      className: "text-white text-xs text-right w-1/2"
    }, "Uso excesivo de antibi\xF3ticos crea 'superbacterias' inmunes.")))), renderCasosModernos(ejemplosEstrategia4, 'sky'))), activeTab === 'practica' && /*#__PURE__*/React.createElement("div", {
      className: "animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto pt-8"
    }, !showResults ? /*#__PURE__*/React.createElement("div", {
      className: "bg-white rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(99,102,241,0.15)] border border-slate-100 p-8 md:p-12 relative overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center gap-4 mb-10"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex-1 bg-slate-100 h-3 rounded-full overflow-hidden"
    }, /*#__PURE__*/React.createElement("div", {
      className: "bg-indigo-500 h-full rounded-full transition-all duration-500 ease-out",
      style: {
        width: `${currentQuestion / questions.length * 100}%`
      }
    })), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold text-sm font-mono"
    }, currentQuestion + 1, "/", questions.length)), /*#__PURE__*/React.createElement("div", {
      className: "mb-8 text-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest rounded-full mb-4"
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
        buttonClass += "bg-white border-slate-200 text-slate-600 hover:border-indigo-400 hover:bg-indigo-50/30";
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
      className: `px-8 py-4 rounded-full font-black flex items-center gap-3 transition-all duration-300 w-full justify-center md:w-auto ${hasAnswered ? 'bg-slate-900 text-white hover:bg-indigo-600 shadow-xl hover:-translate-y-1' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`
    }, currentQuestion === questions.length - 1 ? 'Finalizar' : 'Siguiente'))) : /*#__PURE__*/React.createElement("div", {
      className: "bg-slate-900 rounded-[3rem] shadow-2xl p-10 md:p-16 text-center animate-in zoom-in-95 duration-700 relative overflow-hidden text-white"
    }, /*#__PURE__*/React.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-slate-900 to-slate-900 pointer-events-none"
    }), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 w-32 h-32 mx-auto bg-indigo-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(99,102,241,0.5)] border-4 border-indigo-300"
    }, /*#__PURE__*/React.createElement(Award, {
      className: "w-16 h-16 text-white"
    })), /*#__PURE__*/React.createElement("h2", {
      className: "relative z-10 text-4xl md:text-5xl font-black mb-4 tracking-tight"
    }, score === questions.length ? "¡Mente Brillante!" : "Buen Trabajo"), /*#__PURE__*/React.createElement("div", {
      className: "relative z-10 my-10 flex flex-col items-center"
    }, /*#__PURE__*/React.createElement("span", {
      className: "text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-indigo-600 drop-shadow-sm"
    }, score), /*#__PURE__*/React.createElement("span", {
      className: "text-slate-400 font-bold tracking-widest uppercase mt-2"
    }, "Puntos de ", questions.length)), /*#__PURE__*/React.createElement("button", {
      onClick: resetQuiz,
      className: "relative z-10 bg-white text-slate-900 px-10 py-4 rounded-full font-black transition-all hover:bg-indigo-50 hover:shadow-[0_15px_30px_rgba(255,255,255,0.2)] hover:-translate-y-1 active:scale-95 flex items-center gap-3 mx-auto"
    }, /*#__PURE__*/React.createElement(RefreshCw, {
      className: "w-5 h-5"
    }), "Repetir Simulador")))));
  }
  window.renderCNModule2 = containerId => {
    const container = document.getElementById(containerId);
    if (!container || !window.ReactDOM) return;
    if (!window._reactRoots) window._reactRoots = {};
    if (!window._reactRoots[containerId]) {
      window._reactRoots[containerId] = window.ReactDOM.createRoot(container);
    }
    window._reactRoots[containerId].render(React.createElement(ModuloExplicacion));
  };
})();