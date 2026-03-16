/**
 * ArcadeGamesModule - Integración fiel de arcane.html
 * Proporciona una zona de juegos arcade con Neon Dash, Cañón Químico y Defensor Numérico.
 */

const ArcadeGamesModule = {
    // --- DATOS GLOBALES (Fieles a arcane.html) ---
    WEEKLY_RANKING: [],

    QUESTIONS_MATH: [
        { q: "¿50% de 10?", a: "5", f1: "10", f2: "2" }, { q: "¿50% de 20?", a: "10", f1: "5", f2: "15" },
        { q: "¿25% de 40?", a: "10", f1: "20", f2: "15" }, { q: "¿25% de 100?", a: "25", f1: "50", f2: "75" },
        { q: "¿10% de 70?", a: "7", f1: "70", f2: "0.7" }, { q: "¿10% de 500?", a: "50", f1: "5", f2: "500" },
        { q: "¿2²?", a: "4", f1: "2", f2: "8" }, { q: "¿2³?", a: "8", f1: "6", f2: "9" },
        { q: "¿5²?", a: "25", f1: "10", f2: "125" }, { q: "¿10²?", a: "100", f1: "20", f2: "1000" },
        { q: "¿√9?", a: "3", f1: "4.5", f2: "6" }, { q: "¿√64?", a: "8", f1: "32", f2: "16" }
    ],

    QUESTIONS_CHEMISTRY: [
        { q: "Hidrógeno", a: "H", f1: "Hy", f2: "Hi" }, { q: "Helio", a: "He", f1: "H", f2: "Ho" },
        { q: "Litio", a: "Li", f1: "L", f2: "Lt" }, { q: "Carbono", a: "C", f1: "Ca", f2: "Cr" },
        { q: "Nitrógeno", a: "N", f1: "Ni", f2: "No" }, { q: "Oxígeno", a: "O", f1: "Ox", f2: "Os" },
        { q: "Sodio", a: "Na", f1: "So", f2: "S" }, { q: "Magnesio", a: "Mg", f1: "Ma", f2: "Mn" },
        { q: "Hierro", a: "Fe", f1: "Hi", f2: "H" }, { q: "Cobre", a: "Cu", f1: "C", f2: "Co" },
        { q: "Plata", a: "Ag", f1: "Pl", f2: "P" }, { q: "Oro", a: "Au", f1: "O", f2: "Or" }
    ],

    QUESTIONS_DEFENDER: [
        { q: "Equivale a 50%", a: "1/2", f1: "1/4", f2: "0.05", f3: "2/5" }, { q: "Equivale a 25%", a: "1/4", f1: "1/2", f2: "0.2", f3: "2.5" },
        { q: "Equivale a 75%", a: "3/4", f1: "1/3", f2: "0.7", f3: "7/5" }, { q: "Equivale a 20%", a: "1/5", f1: "1/2", f2: "2/100", f3: "0.02" },
        { q: "Equivale a 10%", a: "1/10", f1: "0.01", f2: "1/5", f3: "10/10" }, { q: "Equivale a 0.5", a: "1/2", f1: "5%", f2: "1/5", f3: "0.05" },
        { q: "x + 2 = 5", a: "3", f1: "7", f2: "2.5", f3: "10" }, { q: "3x = 15", a: "5", f1: "12", f2: "18", f3: "45" },
        { q: "x/2 = 8", a: "16", f1: "4", f2: "10", f3: "6" }, { q: "2x + 1 = 7", a: "3", f1: "4", f2: "8", f3: "6" },
        { q: "Prob. Cara (Moneda)", a: "1/2", f1: "1/4", f2: "1", f3: "0" }, { q: "Ángulo Recto", a: "90°", f1: "180°", f2: "360°", f3: "45°" }
    ],

    THEMES_NEON: [
        { bg: '15, 23, 42', grid: 'rgba(6, 182, 212, 0.2)', gridL: 'rgba(6, 182, 212, 0.1)', p1: '#06b6d4', e1: '#ef4444', e2: '#ec4899', e2f: 'rgba(236, 72, 153, 0.2)', p2: '#f97316', p3: '#22d3ee', name: "SECTOR 1: CIUDAD CYBER" },
        { bg: '23, 11, 35', grid: 'rgba(168, 85, 247, 0.3)', gridL: 'rgba(168, 85, 247, 0.15)', p1: '#a855f7', e1: '#fbbf24', e2: '#22d3ee', e2f: 'rgba(34, 211, 238, 0.2)', p2: '#ec4899', p3: '#f472b6', name: "SECTOR 2: NEBULA SYNTH" },
        { bg: '10, 25, 15', grid: 'rgba(34, 197, 94, 0.3)', gridL: 'rgba(34, 197, 94, 0.15)', p1: '#22c55e', e1: '#f97316', e2: '#eab308', e2f: 'rgba(234, 179, 8, 0.2)', p2: '#10b981', p3: '#34d399', name: "SECTOR 3: MATRIZ TÓXICA" },
        { bg: '35, 10, 15', grid: 'rgba(239, 68, 68, 0.3)', gridL: 'rgba(239, 68, 68, 0.15)', p1: '#ef4444', e1: '#8b5cf6', e2: '#3b82f6', e2f: 'rgba(59, 130, 246, 0.2)', p2: '#fbbf24', p3: '#60a5fa', name: "SECTOR 4: NÚCLEO INESTABLE" }
    ],

    THEMES_CHEMISTRY: [
        { bg: '10, 20, 15', grid: 'rgba(34, 197, 94, 0.1)', gridL: 'rgba(34, 197, 94, 0.3)', p1: '#10b981', e1: '#ef4444', name: "SECTOR 1: LABORATORIO BASE" },
        { bg: '20, 10, 25', grid: 'rgba(168, 85, 247, 0.1)', gridL: 'rgba(168, 85, 247, 0.3)', p1: '#a855f7', e1: '#fbbf24', name: "SECTOR 2: CÁMARA DE IONES" },
        { bg: '10, 15, 25', grid: 'rgba(56, 189, 248, 0.1)', gridL: 'rgba(56, 189, 248, 0.3)', p1: '#38bdf8', e1: '#ec4899', name: "SECTOR 3: REACTOR FRÍO" },
        { bg: '25, 10, 10', grid: 'rgba(239, 68, 68, 0.1)', gridL: 'rgba(239, 68, 68, 0.3)', p1: '#ef4444', e1: '#38bdf8', name: "SECTOR 4: NÚCLEO CRÍTICO" }
    ],

    THEMES_DEFENDER: [
        { bg: '15, 23, 42', grid: 'rgba(56, 189, 248, 0.1)', gridL: 'rgba(56, 189, 248, 0.3)', p1: '#0ea5e9', p2: '#38bdf8', e1: '#ef4444', name: "SISTEMA CIBERNÉTICO" },
        { bg: '24, 10, 30', grid: 'rgba(217, 70, 239, 0.1)', gridL: 'rgba(217, 70, 239, 0.3)', p1: '#d946ef', p2: '#e879f9', e1: '#fbbf24', name: "RED NEURONAL" },
        { bg: '10, 25, 15', grid: 'rgba(34, 197, 94, 0.1)', gridL: 'rgba(34, 197, 94, 0.3)', p1: '#22c55e', p2: '#4ade80', e1: '#f97316', name: "MATRIZ BIOLÓGICA" },
        { bg: '30, 10, 10', grid: 'rgba(239, 68, 68, 0.1)', gridL: 'rgba(239, 68, 68, 0.3)', p1: '#ef4444', p2: '#f87171', e1: '#38bdf8', name: "NÚCLEO CRÍTICO" }
    ],

    scores: { neon_dash: null, atomic_catcher: null, numeric_defender: null },

    /**
     * Inicializa el módulo, asegura carga de iconos y sincroniza récords con Firebase
     */
    async init() {
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        // Cargar récords personales desde Firebase
        if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
            try {
                const res = await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${AuthModule.currentUser.id}/arcade_v1.json`);
                const data = await res.json();
                if (data) {
                    this.scores.neon_dash = data.neon_dash || 0;
                    this.scores.atomic_catcher = data.atomic_catcher || 0;
                    this.scores.numeric_defender = data.numeric_defender || 0;
                }
            } catch (e) {
                console.error('Error al cargar récords arcade:', e);
            }
        }
        
        this.updateRankingUI();
        this.setupOrientationHandler();
        
        window.addEventListener('resize', () => {
            if (this.Engine.st && this.Engine.st.isPlaying) {
                this.Engine.resize();
            }
        });
    },

    setupOrientationHandler() {
        const checkOrientation = () => {
            const prompt = document.getElementById('arcade-orientation-prompt');
            if (!prompt) return;
            
            // Ahora solo sugerimos rotate pero permitimos jugar en portrait
            if (window.innerWidth < 768 && window.innerHeight > window.innerWidth) {
                prompt.classList.remove('hidden');
            } else {
                prompt.classList.add('hidden');
            }
        };

        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);
        checkOrientation();
    },

    // --- SISTEMA DE AUDIO (AudioSys) ---
    AudioSys: {
        ctx: null, osc: null, gain: null, isMuted: false,
        init() {
            if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            if (this.ctx.state === 'suspended') this.ctx.resume();
        },
        play(type) {
            if (this.isMuted) return;
            this.init();
            const tCtx = this.ctx; const o = tCtx.createOscillator(); const g = tCtx.createGain();
            o.connect(g); g.connect(tCtx.destination);
            
            if (type === 'shoot') { o.type = 'square'; o.frequency.setValueAtTime(800, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(100, tCtx.currentTime + 0.1); g.gain.setValueAtTime(0.1, tCtx.currentTime); g.gain.exponentialRampToValueAtTime(0.01, tCtx.currentTime + 0.1); o.start(); o.stop(tCtx.currentTime + 0.1); }
            else if (type === 'catch') { o.type = 'sine'; o.frequency.setValueAtTime(600, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(1200, tCtx.currentTime + 0.1); g.gain.setValueAtTime(0.2, tCtx.currentTime); g.gain.linearRampToValueAtTime(0, tCtx.currentTime + 0.2); o.start(); o.stop(tCtx.currentTime + 0.2); }
            else if (type === 'error') { o.type = 'sawtooth'; o.frequency.setValueAtTime(200, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(50, tCtx.currentTime + 0.3); g.gain.setValueAtTime(0.3, tCtx.currentTime); g.gain.linearRampToValueAtTime(0, tCtx.currentTime + 0.3); o.start(); o.stop(tCtx.currentTime + 0.3); }
            else if (type === 'levelup') { o.type = 'triangle'; o.frequency.setValueAtTime(300, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(800, tCtx.currentTime + 0.5); g.gain.setValueAtTime(0.2, tCtx.currentTime); g.gain.linearRampToValueAtTime(0, tCtx.currentTime + 0.8); o.start(); o.stop(tCtx.currentTime + 0.8); }
            else if (type === 'thud') { o.type = 'triangle'; o.frequency.setValueAtTime(100, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(20, tCtx.currentTime + 0.2); g.gain.setValueAtTime(0.2, tCtx.currentTime); g.gain.linearRampToValueAtTime(0, tCtx.currentTime + 0.2); o.start(); o.stop(tCtx.currentTime + 0.2); }
            else if (type === 'rotate') { o.type = 'sine'; o.frequency.setValueAtTime(400, tCtx.currentTime); o.frequency.exponentialRampToValueAtTime(800, tCtx.currentTime + 0.05); g.gain.setValueAtTime(0.1, tCtx.currentTime); g.gain.linearRampToValueAtTime(0, tCtx.currentTime + 0.05); o.start(); o.stop(tCtx.currentTime + 0.05); }
        },
        startEngine() {
            if (this.isMuted) return;
            this.init();
            if (this.osc) this.osc.stop();
            this.osc = this.ctx.createOscillator(); this.gain = this.ctx.createGain();
            const f = this.ctx.createBiquadFilter();
            this.osc.type = 'triangle'; this.osc.frequency.setValueAtTime(60, this.ctx.currentTime);
            f.type = 'lowpass'; f.frequency.setValueAtTime(400, this.ctx.currentTime);
            this.gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
            this.osc.connect(f); f.connect(this.gain); this.gain.connect(this.ctx.destination);
            this.osc.start();
        },
        stopEngine() {
            if (this.gain && this.ctx) {
                this.gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.2);
                setTimeout(() => { if (this.osc) { this.osc.stop(); this.osc = null; } }, 200);
            }
        },
        updateEngine(speed, frames) {
            if (!this.isMuted && this.osc && this.ctx) {
                this.osc.frequency.setTargetAtTime(60 + (speed * 4) + Math.sin(frames * 0.15) * 5, this.ctx.currentTime, 0.1);
            }
        }
    },

    // --- HUB LOGIC ---
    switchTab(tab) {
        document.getElementById('arcade-tab-games').className = tab === 'games' ? 'flex-1 md:flex-none px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all bg-slate-800 text-white shadow-sm' : 'flex-1 md:flex-none px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all text-slate-500 hover:text-slate-300';
        document.getElementById('arcade-tab-ranking').className = tab === 'ranking' ? 'flex-1 md:flex-none px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all bg-slate-800 text-cyan-400 shadow-sm' : 'flex-1 md:flex-none px-6 py-2.5 rounded-lg font-bold flex items-center justify-center gap-2 transition-all text-slate-500 hover:text-slate-300';
        
        document.getElementById('arcade-content-games').classList.toggle('hidden', tab !== 'games');
        document.getElementById('arcade-content-ranking').classList.toggle('hidden', tab !== 'ranking');

        if (tab === 'ranking') this.updateRankingUI();
    },

    async updateRankingUI() {
        const table = document.getElementById('arcade-ranking-table-body');
        if (!table) return;

        // Mostrar estado de carga
        table.innerHTML = `<tr><td colspan="4" class="p-8 text-center text-slate-500 animate-pulse">Cargando ranking global...</td></tr>`;

        try {
            const dbUrl = `https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json`;
            const res = await fetch(dbUrl);
            const users = await res.json();

            let rankingList = [];
            if (users) {
                Object.values(users).forEach(u => {
                    const arc = u.arcade_v1;
                    if (arc && (arc.totalScore > 0 || arc.neon_dash > 0 || arc.atomic_catcher > 0 || arc.numeric_defender > 0)) {
                        rankingList.push({
                            name: arc.name || u.profile?.name || 'Estudiante',
                            school: arc.school || u.profile?.school || 'IE MATECANDELA',
                            grade: arc.grade || u.profile?.grade || '',
                            score: arc.totalScore || 0,
                            avatar: arc.avatar || '👤'
                        });
                    }
                });
            }

            // Ordenar de mayor a menor y tomar top 50
            rankingList.sort((a, b) => b.score - a.score);
            rankingList = rankingList.slice(0, 50);

            if (rankingList.length === 0) {
                table.innerHTML = `
                    <tr>
                        <td colspan="4" class="p-8 md:p-12 text-center">
                            <div class="flex flex-col items-center gap-3 md:gap-4 text-slate-500">
                                <i data-lucide="ghost" class="w-10 h-10 md:w-12 md:h-12 opacity-20"></i>
                                <p class="text-base md:text-lg font-medium">¡No hay récords esta semana!</p>
                                <p class="text-xs md:text-sm opacity-60">Sé el primero en jugar y dominar el ranking.</p>
                            </div>
                        </td>
                    </tr>
                `;
                if (typeof lucide !== 'undefined') lucide.createIcons();
                return;
            }

            table.innerHTML = rankingList.map((p, index) => {
                const rank = index + 1;
                return `
                    <tr class="hover:bg-slate-800/50 transition-colors group">
                        <td class="p-2 md:p-4 text-center">
                            ${rank === 1 ? `<span class="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/20 text-yellow-500 font-black leading-8 md:leading-10 border border-yellow-500/50">1</span>` :
                              rank === 2 ? `<span class="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-300/20 text-slate-300 font-black leading-8 md:leading-10 border border-slate-300/50">2</span>` :
                              rank === 3 ? `<span class="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full bg-amber-700/20 text-amber-500 font-black leading-8 md:leading-10 border border-amber-700/50">3</span>` :
                              `<span class="text-slate-500 font-bold text-sm">${rank}</span>`}
                        </td>
                        <td class="p-2 md:p-4"><div class="flex items-center gap-2 md:gap-3"><span class="text-2xl md:text-3xl">${p.avatar || '👤'}</span><span class="font-bold text-sm md:text-base ${rank <= 3 ? 'text-white' : 'text-slate-300'}">${p.name}</span></div></td>
                        <td class="p-2 md:p-4 hidden sm:table-cell"><span class="bg-slate-800 text-slate-400 px-2 md:px-3 py-1 rounded text-xs md:text-sm font-bold border border-slate-700">${p.grade || p.school}</span></td>
                        <td class="p-2 md:p-4 text-right"><span class="font-mono font-black text-sm md:text-base ${rank === 1 ? 'text-yellow-400' : 'text-cyan-400'}">${p.score}</span></td>
                    </tr>
                `;
            }).join('');

            if (typeof lucide !== 'undefined') lucide.createIcons();

        } catch (e) {
            console.error('Error al cargar ranking arcade:', e);
            table.innerHTML = `<tr><td colspan="4" class="p-8 text-center text-red-500">Error al conectar con la base de datos.</td></tr>`;
        }

        const personalRecs = document.getElementById('arcade-personal-records');
        if (!personalRecs) return;
        personalRecs.innerHTML = '';
        if (this.scores.neon_dash !== null) personalRecs.innerHTML += `<div class="bg-gradient-to-r from-cyan-900/40 to-slate-900 border border-cyan-500/30 p-6 rounded-2xl flex justify-between items-center"><div><h3 class="text-cyan-400 font-bold text-xs uppercase tracking-wider mb-1">Récord Neon Dash</h3><p class="text-3xl font-black text-white">${this.scores.neon_dash}</p></div><i data-lucide="zap" class="w-10 h-10 text-cyan-500 opacity-50"></i></div>`;
        if (this.scores.atomic_catcher !== null) personalRecs.innerHTML += `<div class="bg-gradient-to-r from-emerald-900/40 to-slate-900 border border-emerald-500/30 p-6 rounded-2xl flex justify-between items-center"><div><h3 class="text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">Récord Cañón Químico</h3><p class="text-3xl font-black text-white">${this.scores.atomic_catcher}</p></div><i data-lucide="target" class="w-10 h-10 text-emerald-500 opacity-50"></i></div>`;
        if (this.scores.numeric_defender !== null) personalRecs.innerHTML += `<div class="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 p-6 rounded-2xl flex justify-between items-center"><div><h3 class="text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">Récord Defensor Num.</h3><p class="text-3xl font-black text-white">${this.scores.numeric_defender}</p></div><i data-lucide="shield-alert" class="w-10 h-10 text-blue-500 opacity-50"></i></div>`;
        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    // --- MOTOR DEL JUEGO GENERAL (Engine) ---
    Engine: {
        gameId: null, req: null, canvas: null, ctx: null, st: {},
        
        toggleMute() {
            ArcadeGamesModule.AudioSys.isMuted = !ArcadeGamesModule.AudioSys.isMuted;
            document.getElementById('arcade-icon-vol').setAttribute('data-lucide', ArcadeGamesModule.AudioSys.isMuted ? 'volume-x' : 'volume-2');
            if (typeof lucide !== 'undefined') lucide.createIcons();
            if (ArcadeGamesModule.AudioSys.isMuted) ArcadeGamesModule.AudioSys.stopEngine();
            else if (this.st.isPlaying && this.gameId === 'neon_dash') ArcadeGamesModule.AudioSys.startEngine();
        },

        setUI(stateStr) { 
            document.getElementById('arcade-screen-start').classList.toggle('hidden', stateStr !== 'start');
            document.getElementById('arcade-screen-gameover').classList.toggle('hidden', stateStr !== 'gameover');
            document.getElementById('arcade-ui-score-panel').classList.toggle('hidden', stateStr !== 'playing');
            document.getElementById('arcade-ui-lives').classList.toggle('hidden', stateStr !== 'playing');
            
            // Mostrar controles táctiles en móviles durante el juego
            const isMobile = window.innerWidth < 1024; // Aumentar rango para tablets
            const mc = document.getElementById('arcade-ui-mobile-controls');
            if (mc) {
                mc.classList.toggle('hidden', stateStr !== 'playing' || !isMobile);
                // Mostrar botón de disparo solo en Atomic Catcher
                const shootBtn = document.getElementById('arcade-mobile-action-container');
                if (shootBtn) shootBtn.classList.toggle('hidden', this.gameId !== 'atomic_catcher');
            }
            
            this.st.isPlaying = stateStr === 'playing';
            if (stateStr === 'playing') this.resize();
        },

        resize() {
            if (!this.canvas) return;
            const container = document.getElementById('arcade-game-border');
            if (!container) return;

            const rect = container.getBoundingClientRect();
            // Evitar distorsión: mantener proporción 16:9 o similar
            let w = rect.width;
            let h = rect.height;
            
            this.canvas.width = w;
            this.canvas.height = h;
            
            // Base lógica para posicionamiento consistente
            const baseWidth = 800;
            const baseHeight = 600;
            
            this.st.scaleX = w / baseWidth;
            this.st.scaleY = h / baseHeight;
            this.st.baseScale = Math.min(this.st.scaleX, this.st.scaleY);
        },
        
        updateScore(s) { document.getElementById('arcade-ui-score').innerText = s.toString().padStart(5, '0'); },
        updateThemeInfo(name, lvl, color) {
            document.getElementById('arcade-ui-theme').innerText = name;
            document.getElementById('arcade-ui-level').innerText = `NIVEL ${lvl}`;
            document.getElementById('arcade-ui-level').className = `text-${color}-400 text-[8px] sm:text-[10px] font-bold tracking-widest uppercase bg-black/50 px-1 sm:px-2 py-0.5 rounded mt-1`;
        },
        setLives(l, color) {
            const hCont = document.getElementById('arcade-ui-lives');
            if(!hCont) return;
            const hearts = hCont.children;
            for(let i=0; i<3; i++) {
                if(!hearts[i]) continue;
                if(i < l) {
                    hearts[i].setAttribute('class', `lucide lucide-heart w-6 h-6 sm:w-8 sm:h-8 transition-all text-${color}-500 fill-${color}-500`);
                    hearts[i].style.fill = 'currentColor'; // Force fill for Lucide SVGs
                } else {
                    hearts[i].setAttribute('class', `lucide lucide-heart w-6 h-6 sm:w-8 sm:h-8 transition-all text-slate-700/50 fill-none`);
                    hearts[i].style.fill = 'none';
                }
            }
        },
        showAnnounce(text, sub) {
            const ann = document.getElementById('arcade-ui-announcement');
            document.getElementById('arcade-ui-ann-title').innerText = text;
            document.getElementById('arcade-ui-ann-sub').innerText = sub;
            ann.classList.remove('hidden');
            setTimeout(() => ann.classList.add('hidden'), 2500);
        },
        showQuestion(q, show, isMath = false) {
            const el = document.getElementById('arcade-ui-question');
            if(!show) { el.classList.add('hidden'); return; }
            el.classList.remove('hidden');
            if(!isMath) {
                el.innerHTML = `<h2 class="text-black text-2xl md:text-3xl font-black tracking-wide whitespace-nowrap">${q}</h2>`;
            } else {
                el.classList.add('hidden'); 
            }
        },

        handleTouch(act) {
            if(!this.st.isPlaying) return;
            // Prevenir vibración o feedback táctil de sistema si es posible
            if (window.navigator && window.navigator.vibrate) window.navigator.vibrate(5);
            
            if(this.gameId === 'neon_dash') {
                if(act==='up') this.st.player.lane = Math.max(0, this.st.player.lane - 1);
                else if(act==='down') this.st.player.lane = Math.min(2, this.st.player.lane + 1);
                else if(act==='left') this.st.player.lane = Math.max(0, this.st.player.lane - 1);
                else if(act==='right') this.st.player.lane = Math.min(2, this.st.player.lane + 1);
            } else if(this.gameId === 'numeric_defender') {
                if(this.st.isTransitioning) return;
                if(act==='left') this.st.rotationIndex = (this.st.rotationIndex + 1) % 4;
                else if(act==='right') this.st.rotationIndex = (this.st.rotationIndex - 1 + 4) % 4;
                else if(act==='up') this.st.rotationIndex = (this.st.rotationIndex + 1) % 4;
                else if(act==='down') this.st.rotationIndex = (this.st.rotationIndex - 1 + 4) % 4;
                ArcadeGamesModule.AudioSys.play('rotate');
            } else if(this.gameId === 'atomic_catcher') {
                // Paso más grande para botones táctiles
                if(act==='left') this.st.player.targetX = Math.max(40, this.st.player.targetX - 100);
                else if(act==='right') this.st.player.targetX = Math.min(this.canvas.width - 40, this.st.player.targetX + 100);
                else if(act==='shoot') this.fireShoot();
                else if(act==='up' || act==='down') this.fireShoot(); 
            }
        },
        handlePointerMove(e) {
            if(!this.st.isPlaying || this.gameId !== 'atomic_catcher') return;
            const rect = this.canvas.getBoundingClientRect();
            const scaleX = this.canvas.width / rect.width;
            this.st.player.targetX = (e.clientX - rect.left) * scaleX;
        },
        handlePointerDown(e) {
            if(!this.st.isPlaying) return;
            if(this.gameId === 'atomic_catcher') {
                this.handlePointerMove(e);
                this.fireShoot();
            }
        },
        
        handleTouchStart(e) {
            if(!this.st.isPlaying) return;
            // No llamar a preventDefault aquí si queremos que los botones de la UI funcionen,
            // pero sí en el canvas directamente.
            
            const rect = this.canvas.getBoundingClientRect();
            const touchX = e.touches[0].clientX - rect.left;
            const canvasWidth = rect.width;
            const scaleX = this.canvas.width / canvasWidth;
            
            if(this.gameId === 'neon_dash') {
                const touchY = e.touches[0].clientY - rect.top;
                const canvasHeight = rect.height;
                // Dividir pantalla en tercios para carriles
                if(touchY < canvasHeight / 3) this.st.player.lane = 0;
                else if(touchY < (canvasHeight * 2) / 3) this.st.player.lane = 1;
                else this.st.player.lane = 2;
            } else if(this.gameId === 'numeric_defender') {
                if(touchX < canvasWidth / 2) {
                    this.st.rotationIndex = (this.st.rotationIndex + 1) % 4;
                } else {
                    this.st.rotationIndex = (this.st.rotationIndex - 1 + 4) % 4;
                }
                ArcadeGamesModule.AudioSys.play('rotate');
            } else if(this.gameId === 'atomic_catcher') {
                this.st.player.targetX = touchX * scaleX;
                this.fireShoot();
            }
        },
        fireShoot() {
            if(this.st.player.shootCooldown <= 0 && this.st.isPlaying) {
                this.st.bullets.push({x: this.st.player.x, y: this.canvas.height - 70, speed: 15, del: false});
                this.st.player.shootCooldown = 15;
                ArcadeGamesModule.AudioSys.play('shoot');
            }
        },
        handleKeyDown(e) {
            if(!this.st.isPlaying) return;
            if(this.gameId === 'neon_dash') {
                if (e.key === 'ArrowUp' || e.key === 'w') this.st.player.lane = Math.max(0, this.st.player.lane - 1);
                else if (e.key === 'ArrowDown' || e.key === 's') this.st.player.lane = Math.min(2, this.st.player.lane + 1);
            } else if(this.gameId === 'atomic_catcher') {
                const step = 80;
                if (e.key === 'ArrowLeft' || e.key === 'a') this.st.player.targetX = Math.max(40, this.st.player.targetX - step);
                else if (e.key === 'ArrowRight' || e.key === 'd') this.st.player.targetX = Math.min(1000, this.st.player.targetX + step);
                else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); this.fireShoot(); }
            } else if(this.gameId === 'numeric_defender') {
                if(this.st.isTransitioning) return;
                if (e.key === 'ArrowLeft' || e.key === 'a') { this.st.rotationIndex = (this.st.rotationIndex + 1) % 4; ArcadeGamesModule.AudioSys.play('rotate');}
                else if (e.key === 'ArrowRight' || e.key === 'd') { this.st.rotationIndex = (this.st.rotationIndex - 1 + 4) % 4; ArcadeGamesModule.AudioSys.play('rotate');}
            }
        },

        init(gameId) {
            this.gameId = gameId;
            this.canvas = document.getElementById('arcade-game-canvas');
            this.ctx = this.canvas.getContext('2d');
            
            document.getElementById('arcade-start-btn').className = `w-full py-3 md:py-4 text-slate-900 text-lg md:text-xl font-black rounded-xl transition-all hover:scale-105 flex items-center justify-center gap-2 md:gap-3 ${gameId === 'neon_dash' ? 'bg-cyan-500 hover:bg-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.4)]' : gameId === 'atomic_catcher' ? 'bg-emerald-500 hover:bg-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.4)]' : 'bg-blue-500 hover:bg-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.4)]'}`;
            
            if (gameId === 'neon_dash') {
                document.getElementById('arcade-start-icon').setAttribute('data-lucide', 'zap');
                document.getElementById('arcade-start-icon').className = 'w-16 h-16 md:w-24 md:h-24 text-cyan-400 mx-auto animate-pulse';
                document.getElementById('arcade-start-glow').className = 'absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-full';
                document.getElementById('arcade-start-title').innerText = 'NEON DASH';
                document.getElementById('arcade-start-title').className = 'text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight italic drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]';
                document.getElementById('arcade-start-subtitle').innerText = 'RESCATE ICFES';
                document.getElementById('arcade-start-subtitle').className = 'text-base md:text-xl text-cyan-400 font-bold tracking-[0.3em] mt-1 md:mt-2';
                document.getElementById('arcade-start-desc').innerText = 'Esquiva obstáculos, recolecta datos y resuelve matemáticas.';
                document.getElementById('arcade-start-rules').classList.add('hidden');
                document.getElementById('arcade-start-controls').innerHTML = '<span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">↑ W</span><span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">↓ S</span><span class="text-cyan-400 font-bold px-2 py-1 w-full sm:w-auto">O Usa botones</span>';
                document.getElementById('arcade-start-btn-text').innerText = 'JUGAR AHORA';
                
                const border = document.getElementById('arcade-game-border');
                border.style.borderColor = '#06b6d4';
                border.style.boxShadow = '0 0 50px rgba(6,182,212,0.3)';
                border.className = border.className.replace(/bg-\S+/, 'bg-black');
            } 
            else if (gameId === 'atomic_catcher') {
                document.getElementById('arcade-start-icon').setAttribute('data-lucide', 'target');
                document.getElementById('arcade-start-icon').className = 'w-16 h-16 md:w-24 md:h-24 text-emerald-400 mx-auto animate-pulse';
                document.getElementById('arcade-start-glow').className = 'absolute inset-0 bg-emerald-400 blur-3xl opacity-30 rounded-full';
                document.getElementById('arcade-start-title').innerText = 'CAÑÓN QUÍMICO';
                document.getElementById('arcade-start-title').className = 'text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight italic drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]';
                document.getElementById('arcade-start-subtitle').innerText = 'SHOOTER ICFES';
                document.getElementById('arcade-start-subtitle').className = 'text-base md:text-xl text-emerald-400 font-bold tracking-[0.3em] mt-1 md:mt-2';
                document.getElementById('arcade-start-desc').innerText = 'Controla el cañón de plasma. Dispara al isótopo correcto.';
                document.getElementById('arcade-start-rules').classList.remove('hidden');
                document.getElementById('arcade-start-rules-list').innerHTML = '<li><strong class="text-emerald-400">Aprende jugando:</strong> El símbolo correcto siempre estará en la pregunta (Ej: ORO (Au)).</li><li><strong class="text-emerald-400">Dificultad progresiva:</strong> A medida que avances, los símbolos se moverán en zigzag, saldrán escudos y todo será más caótico.</li><li><strong class="text-emerald-400">Bullet Time:</strong> Tienes 5 segundos en cámara lenta para apuntar con cuidado.</li>';
                document.getElementById('arcade-start-controls').innerHTML = '<span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">← Mover →</span><span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">ESPACIO: Disparar</span><span class="text-emerald-400 font-bold px-2 py-1 w-full sm:w-auto text-center">O toca pantalla</span>';
                document.getElementById('arcade-start-btn-text').innerText = 'INICIAR DEFENSA';
                
                const border = document.getElementById('arcade-game-border');
                border.style.borderColor = '#10b981';
                border.style.boxShadow = '0 0 50px rgba(16,185,129,0.3)';
                border.className = border.className.replace(/bg-\S+/, 'bg-slate-950');
            }
            else if (gameId === 'numeric_defender') {
                document.getElementById('arcade-start-icon').setAttribute('data-lucide', 'shield-alert');
                document.getElementById('arcade-start-icon').className = 'w-16 h-16 md:w-24 md:h-24 text-blue-400 mx-auto animate-pulse';
                document.getElementById('arcade-start-glow').className = 'absolute inset-0 bg-blue-400 blur-3xl opacity-30 rounded-full';
                document.getElementById('arcade-start-title').innerText = 'DEFENSOR NUMÉRICO';
                document.getElementById('arcade-start-title').className = 'text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight italic drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]';
                document.getElementById('arcade-start-subtitle').innerText = 'ÁLGEBRA Y DATOS ICFES';
                document.getElementById('arcade-start-subtitle').className = 'text-base md:text-xl text-blue-400 font-bold tracking-[0.3em] mt-1 md:mt-2';
                document.getElementById('arcade-start-desc').innerText = 'Eres el núcleo. Gira tus 4 escudos para interceptar las anomalías usando la equivalencia matemática correcta.';
                document.getElementById('arcade-start-rules').classList.remove('hidden');
                document.getElementById('arcade-start-rules-list').innerHTML = '<li><strong class="text-blue-400">Aprendizaje rápido:</strong> Relaciona porcentajes, decimales, fracciones y ecuaciones al instante.</li><li><strong class="text-blue-400">Ayudas visuales:</strong> En el primer nivel el escudo correcto brilla en verde.</li><li><strong class="text-blue-400">Bullet Time:</strong> Tienes 10 segundos en cámara lenta cuando sale un nuevo virus.</li>';
                document.getElementById('arcade-start-controls').innerHTML = '<span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">← Flecha Izq</span><span class="text-white border border-slate-700 bg-slate-900 px-2 py-1 rounded shadow-inner">Flecha Der →</span><span class="text-blue-400 font-bold px-2 py-1 w-full sm:w-auto">O toca lados</span>';
                document.getElementById('arcade-start-btn-text').innerText = 'ACTIVAR ESCUDOS';
                
                const border = document.getElementById('arcade-game-border');
                border.style.borderColor = '#3b82f6';
                border.style.boxShadow = '0 0 50px rgba(59,130,246,0.3)';
                border.className = border.className.replace(/bg-\S+/, 'bg-slate-950');
            }
            
            if (typeof lucide !== 'undefined') lucide.createIcons();
            this.setUI('start');

            window.removeEventListener('keydown', this._kd);
            this.canvas.removeEventListener('pointermove', this._pm);
            this.canvas.removeEventListener('pointerdown', this._pd);
            this.canvas.removeEventListener('touchstart', this._ts);

            this._kd = (e) => this.handleKeyDown(e);
            this._pm = (e) => this.handlePointerMove(e);
            this._pd = (e) => this.handlePointerDown(e);
            this._ts = (e) => { e.preventDefault(); this.handleTouchStart(e); };

            window.addEventListener('keydown', this._kd);
            this.canvas.addEventListener('pointermove', this._pm);
            this.canvas.addEventListener('pointerdown', this._pd);
            this.canvas.addEventListener('touchstart', this._ts, { passive: false });
            
            // Prevenir gestos del sistema en el canvas
            this.canvas.style.touchAction = 'none';
            this.canvas.style.userSelect = 'none';
            this.canvas.style.webkitUserSelect = 'none';
            this.canvas.style.webkitTouchCallout = 'none';
        }
    }
};

Object.assign(ArcadeGamesModule.Engine, {
    launchGame() {
        ArcadeGamesModule.AudioSys.init();
        const cv = this.canvas;
        if(this.gameId === 'neon_dash') {
            const h = cv.height;
            this.st = { 
                player: { lane: 1, y: h/2, targetY: h/2, invulnerableTimer: 0 }, 
                speed: 6, baseSpeed: 6, internalScore: 0, level: 0, lastLevel: 0, 
                obs: [], parts: [], stars: [], dist: 0, frames: 0, 
                gateAct: false, isTrans: true, 
                get lanes() { return [this.canvas.height*0.25, this.canvas.height*0.5, this.canvas.height*0.75]; },
                canvas: cv, // Referencia para el getter
                qs: [...ArcadeGamesModule.QUESTIONS_MATH].sort(() => Math.random() - 0.5), 
                isPlaying: true, isPaused: false, lives: 3, isGameOverTriggered: false 
            };
            ArcadeGamesModule.AudioSys.startEngine();
            this.updateThemeInfo(ArcadeGamesModule.THEMES_NEON[0].name, 0, 'cyan');
            this.showAnnounce(ArcadeGamesModule.THEMES_NEON[0].name, "VELOCIDAD AUMENTADA");
        } else if(this.gameId === 'atomic_catcher') {
            this.st = { 
                player: { x: cv.width/2, targetX: cv.width/2, width: 60, height: 60, shootCooldown: 0 }, 
                baseSpeedY: 3, internalScore: 0, level: 0, lastLevel: 0, frames: 0, 
                atoms: [], bullets: [], junk: [], parts: [], cq: null, 
                qs: [...ArcadeGamesModule.QUESTIONS_CHEMISTRY].sort(() => Math.random() - 0.5), 
                spawnTimer: 0, bulletTimeTimer: 0, isTrans: true, isPlaying: true, isPaused: false, lives: 3, 
                isGameOverTriggered: false 
            };
            this.updateThemeInfo(ArcadeGamesModule.THEMES_CHEMISTRY[0].name, 0, 'emerald');
            this.showAnnounce(ArcadeGamesModule.THEMES_CHEMISTRY[0].name, "SISTEMA ACTUALIZADO");
        } else {
            this.st = { 
                rotIdx: 0, dispAng: 0, internalScore: 0, level: 0, lastLevel: 0, frames: 0, 
                enemy: null, parts: [], qs: [...ArcadeGamesModule.QUESTIONS_DEFENDER].sort(() => Math.random() - 0.5), 
                cq: null, opts: [], isTrans: true, eSpeed: 2.5, bulletTimeTimer: 0, 
                isPlaying: true, isPaused: false, lives: 3, isGameOverTriggered: false 
            };
            this.updateThemeInfo(ArcadeGamesModule.THEMES_DEFENDER[0].name, 0, 'blue');
            this.showAnnounce(ArcadeGamesModule.THEMES_DEFENDER[0].name, "SISTEMA ACTUALIZADO");
        }

        this.setUI('playing');
        this.updateScore(0);
        this.setLives(3, this.gameId==='neon_dash'?'red':this.gameId==='atomic_catcher'?'emerald':'blue');
        
        setTimeout(() => { this.st.isTrans = false; }, 2000);
        this.loop();
    },

    triggerGameOver() {
        if (this.st.isGameOverTriggered) return;
        this.st.isGameOverTriggered = true;
        this.st.isPlaying = false;
        
        ArcadeGamesModule.AudioSys.stopEngine();
        if (this.req) cancelAnimationFrame(this.req);
        
        // Guardar récord y XP en Firebase
        const currentBest = ArcadeGamesModule.scores[this.gameId] || 0;
        if (this.st.internalScore > currentBest) {
            ArcadeGamesModule.scores[this.gameId] = this.st.internalScore;
            
            if (typeof AuthModule !== 'undefined' && AuthModule.currentUser) {
                const uid = AuthModule.currentUser.id;
                const totalScore = (ArcadeGamesModule.scores.neon_dash || 0) + 
                                  (ArcadeGamesModule.scores.atomic_catcher || 0) + 
                                  (ArcadeGamesModule.scores.numeric_defender || 0);
                                  
                const arcadeData = {
                    [this.gameId]: this.st.internalScore,
                    totalScore: totalScore,
                    name: AuthModule.currentUser.name,
                    school: AuthModule.currentUser.school,
                    grade: AuthModule.currentUser.grade,
                    avatar: AuthModule.currentUser.id === 'master' ? '🚀' : '👤',
                    lastUpdated: Date.now()
                };

                // Guardar en Firebase (estilo flashcardRanking_v2)
                fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${uid}/arcade_v1.json`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(arcadeData)
                }).catch(e => console.error('Error saving arcade score:', e));

                // Otorgar XP proporcionalmente (10% del puntaje obtenido)
                const xpGained = Math.floor(this.st.internalScore / 10);
                if (xpGained > 0 && typeof GamificationModule !== 'undefined') {
                    // Usar GamificationModule.addXP directamente si está disponible
                    GamificationModule.addXP(xpGained);
                    if (typeof NotificationModule !== 'undefined') {
                        NotificationModule.show(`+${xpGained} XP ganado en el Arcade`, 'success');
                    }
                }
            }
        }
        
        this.setUI('gameover');
        const scoreEl = document.getElementById('arcade-go-score');
        if(scoreEl) scoreEl.innerText = this.st.internalScore.toString().padStart(5,'0');
        
        const goTitle = document.getElementById('arcade-go-title');
        const goSub = document.getElementById('arcade-go-subtitle');
        if(this.gameId === 'neon_dash') {
            if(goTitle) goTitle.innerText = "GAME OVER";
            if(goSub) goSub.innerText = "Sector Alcanzado: " + ArcadeGamesModule.THEMES_NEON[this.st.level % ArcadeGamesModule.THEMES_NEON.length].name;
        } else if(this.gameId === 'atomic_catcher') {
            if(goTitle) goTitle.innerText = "CONTAMINACIÓN";
            if(goSub) goSub.innerText = "Nivel Alcanzado: " + this.st.level;
        } else {
            if(goTitle) goTitle.innerText = "NÚCLEO VULNERADO";
            if(goSub) goSub.innerText = "Nivel Alcanzado: " + this.st.level;
        }
    },

    resetGame() { this.launchGame(); },

    takeDamage() {
        if(this.st.isGameOverTriggered) return;
        ArcadeGamesModule.AudioSys.play('error');
        this.st.lives--;
        this.setLives(this.st.lives, this.gameId==='neon_dash'?'red':this.gameId==='atomic_catcher'?'emerald':'blue');
        if(this.st.lives <= 0) {
            this.st.isPlaying = false; // Stop immediately to avoid multiple triggers
            setTimeout(() => this.triggerGameOver(), 50);
        }
    },

    drawStar(x,y,r,p,i) {
        this.ctx.beginPath();
        for (let j=0; j<p*2; j++) {
            let rad = (j%2===0)?r:r*i;
            let a = (j*Math.PI)/p;
            if(j===0) this.ctx.moveTo(x+rad*Math.sin(a), y-rad*Math.cos(a));
            else this.ctx.lineTo(x+rad*Math.sin(a), y-rad*Math.cos(a));
        }
        this.ctx.closePath();
    },

    createExp(x,y,c,count, s=1) {
        for(let i=0; i<count; i++) {
            this.st.parts.push({ x, y, vx:(Math.random()-0.5)*15*s, vy:(Math.random()-0.5)*15*s, life:1+Math.random()*0.5, size:Math.random()*6+2, color:c, del:false });
        }
    },

    measureMathText(text, baseFont=20) {
        const parts = text.split(' '); let totalWidth = 0;
        parts.forEach(p => {
            const fracMatch = p.match(/^(-?[a-zA-Z0-9]+)\/(-?[a-zA-Z0-9]+)$/);
            if(fracMatch) {
                this.ctx.font = `bold ${baseFont*0.85}px Arial`;
                totalWidth += Math.max(this.ctx.measureText(fracMatch[1]).width, this.ctx.measureText(fracMatch[2]).width) + 10;
            } else {
                this.ctx.font = `bold ${baseFont}px Arial`;
                totalWidth += this.ctx.measureText(p).width + 6;
            }
        });
        return totalWidth;
    },

    drawMathText(text, x, y, baseFont=20) {
        const parts = text.split(' '); let tW = this.measureMathText(text, baseFont);
        let cX = x - (tW/2);
        this.ctx.textAlign = 'center'; this.ctx.textBaseline = 'middle';
        parts.forEach(p => {
            const fMatch = p.match(/^(-?[a-zA-Z0-9]+)\/(-?[a-zA-Z0-9]+)$/);
            if(fMatch) {
                this.ctx.font = `bold ${baseFont*0.85}px Arial`;
                const pW = Math.max(this.ctx.measureText(fMatch[1]).width, this.ctx.measureText(fMatch[2]).width) + 10;
                this.ctx.fillText(fMatch[1], cX+pW/2, y-baseFont*0.45);
                this.ctx.fillText(fMatch[2], cX+pW/2, y+baseFont*0.45);
                this.ctx.lineWidth=2; this.ctx.strokeStyle=this.ctx.fillStyle;
                this.ctx.beginPath(); this.ctx.moveTo(cX+5,y); this.ctx.lineTo(cX+pW-5,y); this.ctx.stroke();
                cX += pW;
            } else {
                this.ctx.font = `bold ${baseFont}px Arial`;
                const pW = this.ctx.measureText(p).width + 6;
                this.ctx.fillText(p, cX+pW/2, y);
                cX += pW;
            }
        });
    },

    loop() {
        if(!this.st.isPlaying) return;
        if(!this.st.isPaused) {
            if(this.gameId === 'neon_dash') this.updateNeonDash();
            else if(this.gameId === 'atomic_catcher') this.updateAtomic();
            else if(this.gameId === 'numeric_defender') this.updateDefender();
        }
        this.req = requestAnimationFrame(() => this.loop());
    }
});

Object.assign(ArcadeGamesModule.Engine, {
    updateNeonDash() {
        const s = this.st; const cv = this.canvas; const cx = this.ctx;
        s.level = Math.floor(s.internalScore / 600);
        const th = ArcadeGamesModule.THEMES_NEON[s.level % ArcadeGamesModule.THEMES_NEON.length];

        if(s.level > s.lastLevel) {
            s.lastLevel = s.level; this.showAnnounce(th.name, "VELOCIDAD AUMENTADA"); this.updateThemeInfo(th.name, s.level, 'cyan');
            s.isTrans = true; ArcadeGamesModule.AudioSys.play('levelup'); this.createExp(cv.width/2, cv.height/2, th.p1, 50);
            setTimeout(()=>{s.isTrans=false;}, 2500); s.obs = s.obs.filter(o=>o.type!=='asteroid');
        }
        s.frames++; if(s.player.invulnerableTimer>0) s.player.invulnerableTimer--;
        let tSpd = s.gateAct ? 2.8 : s.baseSpeed; s.speed += (tSpd - s.speed)*0.05;
        ArcadeGamesModule.AudioSys.updateEngine(s.speed, s.frames);
        s.dist += s.speed; if(s.frames%600===0 && s.baseSpeed<18) s.baseSpeed += 0.5;

        cx.fillStyle = `rgba(${th.bg}, 0.3)`; cx.fillRect(0,0,cv.width,cv.height);
        cx.strokeStyle = th.gridL; cx.lineWidth=1;
        let gOff = s.dist%80; for(let x=cv.width-gOff; x>0; x-=80){cx.beginPath();cx.moveTo(x,0);cx.lineTo(x,cv.height);cx.stroke();}
        if(Math.random()<0.3) s.stars.push({x:cv.width, y:Math.random()*cv.height, size:Math.random()*2.5, speed:s.speed*(Math.random()*0.8+0.2), del:false});
        cx.fillStyle='#fff'; s.stars.forEach(star=>{ star.x-=star.speed; cx.beginPath();cx.arc(star.x,star.y,star.size,0,Math.PI*2);cx.fill(); if(star.x<0) star.del=true; });
        s.stars = s.stars.filter(st=>!st.del);
        cx.strokeStyle = th.grid; cx.lineWidth=2; s.lanes.forEach(y=>{cx.beginPath();cx.moveTo(0,y);cx.lineTo(cv.width,y);cx.stroke();});

        if(!s.gateAct && s.frames%40===0 && !s.isTrans) {
            let r = Math.random();
            if(r<0.3 && s.frames>200) {
                s.gateAct = true; let q = s.qs.length===0 ? (s.qs=[...ArcadeGamesModule.QUESTIONS_MATH].sort(()=>Math.random()-0.5)).pop() : s.qs.pop();
                let ans = [{t:q.a, c:true},{t:q.f1,c:false},{t:q.f2,c:false}].sort(()=>Math.random()-0.5);
                this.showQuestion(q.q, true);
                ans.forEach((a,i)=>s.obs.push({type:'gate', x:cv.width+100, lane:i, w:40, h:120, t:a.t, c:a.c, del:false}));
            } else if(r<0.55) {
                let l1 = Math.floor(Math.random()*3); for(let j=0;j<3;j++) s.obs.push({type:'orb', x:cv.width+(j*50), lane:l1, sz:12, r:0, del:false});
            } else {
                let l1 = Math.floor(Math.random()*3); let shps = ['sq','tr','ci','hx'];
                if(Math.random()<0.05) s.obs.push({type:'star', x:cv.width, lane:l1, sz:18, r:0, rs:0.1, del:false});
                else {
                    s.obs.push({type:'ast', sh:shps[Math.floor(Math.random()*shps.length)], x:cv.width, lane:l1, sz:40, r:0, rs:(Math.random()-0.5)*0.1, del:false});
                    if(Math.random()<0.5) s.obs.push({type:'ast', sh:shps[Math.floor(Math.random()*shps.length)], x:cv.width, lane:(l1+1+Math.floor(Math.random()*2))%3, sz:40, r:0, rs:(Math.random()-0.5)*0.1, del:false});
                }
            }
        }

        s.player.targetY = s.lanes[s.player.lane]; s.player.y += (s.player.targetY - s.player.y)*0.2;
        let px=cv.width*0.15, py=s.player.y; let isInv = s.player.invulnerableTimer>0;
        let dColor = isInv ? `hsl(${(s.frames*15)%360},100%,60%)` : th.p1;
        cx.fillStyle = th.p2; cx.beginPath(); cx.moveTo(px-20,py); cx.lineTo(px-40-Math.random()*25, py-10); cx.lineTo(px-40-Math.random()*25, py+10); cx.fill();
        cx.shadowBlur=15; cx.shadowColor=dColor; cx.fillStyle=dColor; cx.beginPath(); cx.moveTo(px+30,py); cx.lineTo(px-20,py-20); cx.lineTo(px-20,py+20); cx.fill(); cx.shadowBlur=0;
        if(isInv) { cx.strokeStyle=dColor; cx.lineWidth=4; cx.beginPath(); cx.arc(px,py,35+Math.sin(s.frames*0.3)*5,0,Math.PI*2); cx.stroke(); }

        for(let i=s.obs.length-1; i>=0; i--) {
            let o=s.obs[i]; if(o.del) continue; o.x -= s.speed; let oy = s.lanes[o.lane];
            if(o.type==='orb') { cx.save(); cx.translate(o.x,oy); o.r+=0.05; cx.fillStyle=th.p3; cx.shadowBlur=10; cx.shadowColor=th.p3; cx.beginPath(); cx.arc(0,0,o.sz+Math.sin(s.frames*0.2)*2,0,Math.PI*2); cx.fill(); cx.fillStyle='#fff'; cx.beginPath(); cx.arc(0,0,o.sz*0.4,0,Math.PI*2); cx.fill(); cx.restore(); }
            if(o.type==='ast') { o.r+=o.rs; cx.save(); cx.translate(o.x,oy); cx.rotate(o.r); cx.strokeStyle=th.e1; cx.lineWidth=3; cx.shadowBlur=15; cx.shadowColor=th.e1; cx.beginPath(); let hs=o.sz/2; if(o.sh==='sq'){cx.rect(-hs,-hs,o.sz,o.sz);cx.moveTo(-hs/2,-hs/2);cx.lineTo(hs/2,hs/2);}else if(o.sh==='tr'){cx.moveTo(0,-hs);cx.lineTo(hs,hs);cx.lineTo(-hs,hs);cx.closePath();cx.moveTo(0,0);cx.arc(0,0,2,0,Math.PI*2);}else if(o.sh==='ci'){cx.arc(0,0,hs,0,Math.PI*2);cx.moveTo(-hs,0);cx.lineTo(hs,0);}else{for(let j=0;j<6;j++){let a=(j*Math.PI)/3; cx[j===0?'moveTo':'lineTo'](hs*Math.cos(a), hs*Math.sin(a));} cx.closePath();cx.moveTo(0,-hs);cx.lineTo(0,hs);} cx.stroke(); cx.restore(); }
            if(o.type==='star') { o.r+=o.rs; cx.save(); cx.translate(o.x,oy); cx.rotate(o.r); cx.fillStyle='#fbbf24'; cx.shadowBlur=20; cx.shadowColor='#fbbf24'; this.drawStar(0,0,o.sz,5,0.5); cx.fill(); cx.restore(); }
            if(o.type==='gate') { cx.fillStyle=th.e2f; cx.strokeStyle=th.e2; cx.lineWidth=3; cx.shadowBlur=15; cx.shadowColor=th.e2; cx.fillRect(o.x, oy-o.h/2, o.w, o.h); cx.strokeRect(o.x, oy-o.h/2, o.w, o.h); cx.shadowBlur=0; cx.fillStyle='#fff'; cx.font='bold 18px Arial'; if(cv.width>600) cx.font='bold 24px Arial'; cx.textAlign='center'; cx.textBaseline='middle'; cx.fillText(o.t, o.x+o.w/2, oy); }

            let dy = Math.abs(py - oy);
            if(o.x < px+25 && o.x+(o.w||o.sz*2) > px-25 && dy < 25 && !o.del) {
                if(o.type==='orb') { s.internalScore+=20; this.updateScore(s.internalScore); ArcadeGamesModule.AudioSys.play('catch'); this.createExp(o.x,oy,th.p3,5); o.del=true; }
                else if(o.type==='star') { s.player.invulnerableTimer=300; ArcadeGamesModule.AudioSys.play('levelup'); this.createExp(px,py,'#fbbf24',30); o.del=true; }
                else if(o.type==='ast') { if(isInv){this.createExp(o.x,oy,th.e1,20); o.del=true;} else{s.baseSpeed=Math.max(4,s.baseSpeed-2); this.takeDamage(); this.createExp(px,py,th.e1,20); o.del=true;} }
                else if(o.type==='gate') { if(o.c){s.internalScore+=100; this.updateScore(s.internalScore); ArcadeGamesModule.AudioSys.play('catch'); this.createExp(o.x,oy,'#10b981',30);} else{if(isInv){this.createExp(o.x,oy,th.e2,20);}else{s.baseSpeed=Math.max(4,s.baseSpeed-2); this.takeDamage(); this.createExp(px,py,th.e2,20);}} this.showQuestion(null,false); s.gateAct=false; s.obs.forEach(ob=>{if(ob.type==='gate') ob.del=true;}); }
            }
            if(o.x < -100 && !o.del) { if(o.type==='gate' && o.lane===0) {this.showQuestion(null,false); s.gateAct=false;} o.del=true; }
        }
        s.obs = s.obs.filter(o=>!o.del);
        for(let i=s.parts.length-1; i>=0; i--) { let p=s.parts[i]; p.x+=p.vx; p.y+=p.vy; p.life-=0.05; if(p.life<=0){p.del=true;continue;} cx.fillStyle=p.color; cx.globalAlpha=p.life; cx.beginPath(); cx.arc(p.x,p.y,p.size,0,Math.PI*2); cx.fill(); cx.globalAlpha=1; }
        s.parts = s.parts.filter(p=>!p.del);
        if(s.frames%30===0) { s.internalScore+=5; this.updateScore(s.internalScore); }
    },

    updateAtomic() {
        const s = this.st; const cv = this.canvas; const cx = this.ctx;
        s.level = Math.floor(s.internalScore / 600);
        const th = ArcadeGamesModule.THEMES_CHEMISTRY[s.level % ArcadeGamesModule.THEMES_CHEMISTRY.length];

        if(s.level > s.lastLevel) {
            s.lastLevel = s.level; this.showAnnounce(th.name, "SISTEMA ACTUALIZADO"); this.updateThemeInfo(th.name, s.level, 'emerald');
            s.isTrans = true; ArcadeGamesModule.AudioSys.play('levelup'); this.createExp(cv.width/2, cv.height/2, th.p1, 50);
            setTimeout(()=>{s.isTrans=false;}, 2500); s.atoms.forEach(a=>a.del=true); s.junk.forEach(j=>j.del=true);
        }
        s.frames++; if(s.player.shootCooldown>0) s.player.shootCooldown--;
        if(s.bulletTimeTimer>0) s.bulletTimeTimer--;
        let cSpdY = s.bulletTimeTimer>0 ? s.baseSpeedY*0.2 : s.baseSpeedY;
        if(s.frames%600===0 && s.baseSpeedY<12) s.baseSpeedY+=0.5;

        const btEff = document.getElementById('arcade-effect-bullet-time');
        if(btEff) {
            btEff.classList.toggle('hidden', s.bulletTimeTimer<=0);
            btEff.style.borderColor = 'rgba(6, 182, 212, 0.3)';
        }

        cx.fillStyle = s.bulletTimeTimer>0 ? `rgba(${th.bg}, 0.7)` : `rgba(${th.bg}, 0.4)`; cx.fillRect(0,0,cv.width,cv.height);
        cx.strokeStyle = s.bulletTimeTimer>0 ? th.gridL : th.grid; cx.lineWidth=1;
        let go = (s.frames*0.5)%40; for(let i=-go;i<cv.width;i+=40){cx.beginPath();cx.moveTo(i,0);cx.lineTo(i,cv.height);cx.stroke();} for(let i=-go;i<cv.height;i+=40){cx.beginPath();cx.moveTo(0,i);cx.lineTo(cv.width,i);cx.stroke();}

        if(s.atoms.length===0 && s.spawnTimer<=0 && !s.isTrans) {
            let q = s.qs.length===0 ? (s.qs=[...ArcadeGamesModule.QUESTIONS_CHEMISTRY].sort(()=>Math.random()-0.5)).pop() : s.qs.pop();
            this.showQuestion(`Destruye: ${q.q}`, true);
            let ans = [{t:q.a, c:true},{t:q.f1,c:false},{t:q.f2,c:false}].sort(()=>Math.random()-0.5);
            let spc = cv.width/4;
            let pats = s.level===0?['st']:s.level===1?['st','si']:s.level===2?['si','zi']:['si','zi','di'];
            ans.forEach((a,i)=>{
                let ac = s.level===0?(a.c?'#34d399':'#ef4444'):`hsl(${(s.frames*5+i*80)%360},80%,60%)`;
                s.atoms.push({x:spc*(i+1), bx:spc*(i+1), y:-80-Math.random()*50, r:35, t:a.t, c:a.c, del:false, col:ac, pat:pats[Math.floor(Math.random()*pats.length)], ph:Math.random()*Math.PI*2, sx:(Math.random()>0.5?1:-1)*(1.5+Math.random())});
            });
            s.spawnTimer=40; s.bulletTimeTimer=300;
        }
        if(s.spawnTimer>0 && s.atoms.length===0) s.spawnTimer--;

        let jR = Math.max(40, 120-(s.level*20));
        if(s.level>0 && s.frames%jR===0 && !s.isTrans) {
            let jC = s.level>2?2:1;
            for(let k=0;k<jC;k++){ let iL = Math.random()>0.5; s.junk.push({x:iL?-40-(k*80):cv.width+40+(k*80), y:Math.random()*(cv.height*0.6)+50, sx:(Math.random()*2+1.5+s.level*0.5)*(iL?1:-1), r:20+Math.random()*20, del:false, rot:0, rs:(Math.random()-0.5)*0.3}); }
        }

        s.player.x += (s.player.targetX - s.player.x)*0.2;
        if(s.player.x<40) s.player.x=40; if(s.player.x>cv.width-40) s.player.x=cv.width-40;
        let py = cv.height-50;
        cx.save(); cx.translate(s.player.x,py); cx.fillStyle='#1e293b'; cx.strokeStyle=th.p1; cx.lineWidth=3; cx.beginPath(); cx.moveTo(-30,20); cx.lineTo(30,20); cx.lineTo(20,-10); cx.lineTo(-20,-10); cx.closePath(); cx.fill(); cx.stroke();
        cx.fillStyle='#0f172a'; cx.fillRect(-10,-40,20,30); cx.strokeRect(-10,-40,20,30); cx.shadowBlur=15; cx.shadowColor=th.p1; cx.fillStyle=th.p1; cx.beginPath(); cx.arc(0,5,8+Math.sin(s.frames*0.3)*3,0,Math.PI*2); cx.fill(); cx.shadowBlur=0; cx.restore();

        for(let i=s.bullets.length-1; i>=0; i--) { let b=s.bullets[i]; b.y-=b.speed; cx.shadowBlur=10; cx.shadowColor=th.p1; cx.fillStyle='#fff'; cx.fillRect(b.x-4,b.y-15,8,30); cx.shadowBlur=0; if(b.y<-50) b.del=true; }
        for(let i=s.junk.length-1; i>=0; i--) {
            let j=s.junk[i]; if(j.del) continue; j.x += j.sx*(cSpdY>1?1:0.4); j.rot+=j.rs;
            cx.save(); cx.translate(j.x,j.y); cx.rotate(j.rot); cx.strokeStyle='#475569'; cx.fillStyle='#1e293b'; cx.lineWidth=3; cx.beginPath(); for(let a=0;a<8;a++) cx[a===0?'moveTo':'lineTo'](j.r*Math.cos(a*Math.PI/4), j.r*Math.sin(a*Math.PI/4)); cx.closePath(); cx.fill(); cx.stroke(); cx.beginPath(); cx.moveTo(-j.r+5,0); cx.lineTo(j.r-5,0); cx.stroke(); cx.beginPath(); cx.moveTo(0,-j.r+5); cx.lineTo(0,j.r-5); cx.stroke(); cx.restore();
            for(let b of s.bullets) { if(!b.del && Math.hypot(j.x-b.x, j.y-b.y)<j.r+5){b.del=true;j.del=true;this.createExp(j.x,j.y,'#475569',15); ArcadeGamesModule.AudioSys.play('thud');} }
            if((j.sx>0&&j.x>cv.width+100) || (j.sx<0&&j.x<-100)) j.del=true;
        }
        s.junk = s.junk.filter(j=>!j.del);

        let wc = false;
        for(let i=s.atoms.length-1; i>=0; i--) {
            let a=s.atoms[i]; if(a.del) continue; a.y+=cSpdY; let bt = s.bulletTimeTimer>0?0.3:1;
            if(a.pat==='si') a.x=a.bx+Math.sin(s.frames*0.05*bt+a.ph)*(40+s.level*10); else if(a.pat==='zi') {let cyc=(s.frames*bt+a.ph*20)%120; a.x=a.bx+(Math.abs(cyc-60)-30)*(1.5+s.level*0.3);} else if(a.pat==='di') {a.x+=a.sx*bt; if(a.x>a.bx+120||a.x<a.bx-120) a.sx*=-1;}
            cx.save(); cx.translate(a.x,a.y); cx.shadowBlur=15; cx.shadowColor=a.col; cx.fillStyle='rgba(15,23,42,0.9)'; cx.strokeStyle=a.col; cx.lineWidth=3; cx.beginPath(); cx.arc(0,0,a.r,0,Math.PI*2); cx.fill(); cx.stroke(); cx.rotate(s.frames*0.05); cx.beginPath(); cx.ellipse(0,0,a.r+10,a.r*0.3,0,0,Math.PI*2); cx.stroke(); cx.beginPath(); cx.arc(a.r+10,0,4,0,Math.PI*2); cx.fillStyle='#fff'; cx.fill(); cx.restore();
            cx.fillStyle='#fff'; cx.font='bold 28px Arial'; cx.textAlign='center'; cx.textBaseline='middle'; cx.fillText(a.t, a.x, a.y);
            if(a.y>0) {
                for(let j=s.bullets.length-1; j>=0; j--) {
                    let b=s.bullets[j]; if(b.del) continue; if(Math.hypot(a.x-b.x, a.y-b.y)<a.r+15) {
                        b.del=true; a.del=true; if(a.c){s.internalScore+=150; this.updateScore(s.internalScore); ArcadeGamesModule.AudioSys.play('catch'); this.createExp(a.x,a.y,'#34d399',25); wc=true; s.bulletTimeTimer=0;}
                        else{ArcadeGamesModule.AudioSys.play('error'); this.createExp(a.x,a.y,'#ef4444',25); this.takeDamage(); wc=true; s.bulletTimeTimer=0;}
                    }
                }
            }
            if(a.y>cv.height+50 && !a.del) { if(a.c){ArcadeGamesModule.AudioSys.play('error'); this.takeDamage(); wc=true; s.bulletTimeTimer=0;} a.del=true; }
        }
        if(wc) { s.atoms.forEach(a=>{if(!a.del)this.createExp(a.x,a.y,'#64748b',20); a.del=true;}); this.showQuestion(null,false); }
        s.atoms = s.atoms.filter(a=>!a.del); s.bullets = s.bullets.filter(b=>!b.del);
        for(let i=s.parts.length-1; i>=0; i--) { let p=s.parts[i]; p.x+=p.vx; p.y+=p.vy; p.life-=0.05; if(p.life<=0){p.del=true;continue;} cx.fillStyle=p.color; cx.globalAlpha=p.life; cx.beginPath(); cx.arc(p.x,p.y,p.size,0,Math.PI*2); cx.fill(); cx.globalAlpha=1; }
        s.parts = s.parts.filter(p=>!p.del);
    },

    updateDefender() {
        const s = this.st; const cv = this.canvas; const cx = this.ctx;
        s.level = Math.floor(s.internalScore / 600); 
        const th = ArcadeGamesModule.THEMES_DEFENDER[s.level % ArcadeGamesModule.THEMES_DEFENDER.length];
        if(s.level > s.lastLevel) {
            s.lastLevel = s.level; this.showAnnounce(th.name, "SISTEMA ACTUALIZADO"); this.updateThemeInfo(th.name, s.level, 'blue');
            s.isTrans = true; this.createExp(cv.width/2, cv.height/2, th.p1, 50);
            setTimeout(() => { s.isTrans = false; this.spawnDefEnemy(); }, 2000);
            s.enemy = null;
        }
        if(s.frames%300===0 && s.eSpeed<8) s.eSpeed+=0.2;
        if(s.bulletTimeTimer>0) s.bulletTimeTimer--;
        const cSpd = s.bulletTimeTimer>0 ? s.eSpeed*0.15 : s.eSpeed;
        const btEff = document.getElementById('arcade-effect-bullet-time');
        if(btEff) {
            btEff.classList.toggle('hidden', s.bulletTimeTimer<=0);
            btEff.className = 'absolute inset-0 border-8 border-blue-500/30 animate-pulse pointer-events-none z-10 box-border rounded-xl';
        }
        cx.fillStyle = s.bulletTimeTimer>0 ? `rgba(${th.bg}, 0.8)` : `rgba(${th.bg}, 0.6)`; cx.fillRect(0,0,cv.width,cv.height);
        cx.strokeStyle = th.grid; cx.lineWidth=1;
        let go = (s.frames*0.5)%40; for(let i=-go;i<cv.width;i+=40){cx.beginPath();cx.moveTo(i,0);cx.lineTo(i,cv.height);cx.stroke();} for(let i=-go;i<cv.height;i+=40){cx.beginPath();cx.moveTo(0,i);cx.lineTo(cv.width,i);cx.stroke();}
        const cxC = cv.width/2, cyC = cv.height/2, sr = Math.min(cv.width, cv.height) * 0.25;
        let d = (s.rotationIndex*(Math.PI/2)) - s.dispAng;
        if(d>Math.PI) d-=Math.PI*2; if(d<-Math.PI) d+=Math.PI*2; s.dispAng += d*0.2;
        if(!s.enemy && !s.isTrans) this.spawnDefEnemy();
        if(s.enemy && !s.isTrans) {
            s.enemy.dist -= cSpd;
            let a = s.enemy.posIdx*(Math.PI/2);
            let ex = cxC+Math.cos(a)*s.enemy.dist, ey = cyC+Math.sin(a)*s.enemy.dist;
            cx.save(); cx.translate(ex,ey); cx.rotate(s.frames*(s.bulletTimeTimer>0?0.02:0.1)); cx.shadowBlur=15; cx.shadowColor=th.e1; cx.fillStyle='#1e293b'; cx.strokeStyle=th.e1; cx.lineWidth=3; cx.beginPath();
            for(let k=0;k<8;k++){let r=k%2===0?20:10; cx[k===0?'moveTo':'lineTo'](r*Math.cos(k*Math.PI/4), r*Math.sin(k*Math.PI/4));}
            cx.closePath(); cx.fill(); cx.stroke(); cx.beginPath(); cx.arc(0,0,4,0,Math.PI*2); cx.fillStyle=th.e1; cx.fill(); cx.restore();
            if(s.enemy.dist <= sr+15) {
                let hIdx = (s.enemy.posIdx - s.rotationIndex + 4) % 4;
                if(s.opts[hIdx].c) { s.internalScore+=100; this.updateScore(s.internalScore); ArcadeGamesModule.AudioSys.play('catch'); this.createExp(ex,ey,th.p2,30); }
                else { ArcadeGamesModule.AudioSys.play('error'); this.createExp(ex,ey,th.e1,30); this.takeDamage(); }
                s.enemy=null; s.bulletTimeTimer=0;
            }
        }
        if(s.opts.length>0 && !s.isTrans) {
            for(let i=0; i<4; i++) {
                let a = s.dispAng + i*(Math.PI/2);
                cx.save(); cx.translate(cxC,cyC); cx.rotate(a);
                let sc = s.level===0 ? (s.opts[i].c ? '#34d399' : '#ef4444') : th.p2;
                cx.strokeStyle=sc; cx.lineWidth=6; cx.shadowBlur=10; cx.shadowColor=sc; cx.beginPath(); cx.arc(0,0,sr,-Math.PI/6,Math.PI/6); cx.stroke(); cx.restore();
                let tx = cxC+Math.cos(a)*(sr+45), ty = cyC+Math.sin(a)*(sr+45);
                let t = s.opts[i].t; let mw = this.measureMathText(t,20);
                let isF = t.match(/^(-?[a-zA-Z0-9]+)\/(-?[a-zA-Z0-9]+)$/)!=null; let bh = isF?45:30;
                cx.fillStyle='rgba(15,23,42,0.8)'; cx.fillRect(tx-mw/2-10, ty-bh/2, mw+20, bh); cx.strokeStyle=sc; cx.lineWidth=1; cx.strokeRect(tx-mw/2-10, ty-bh/2, mw+20, bh);
                cx.fillStyle='#fff'; this.drawMathText(t, tx, ty, 20);
            }
        }
        cx.save(); cx.translate(cxC,cyC); cx.shadowBlur=20; cx.shadowColor=th.p1; cx.fillStyle='rgba(15,23,42,0.9)'; cx.strokeStyle=th.p1; cx.lineWidth=4; cx.beginPath(); cx.arc(0,0,(sr*0.6)+Math.sin(s.frames*0.1)*3,0,Math.PI*2); cx.fill(); cx.stroke();
        if(s.cq && !s.isTrans) { cx.shadowBlur=0; cx.fillStyle='#fff'; let fs = sr*0.12; let tw = this.measureMathText(s.cq, fs); if(tw>(sr*1.1)) fs=fs*0.7; else if(tw>(sr*0.95)) fs=fs*0.85; this.drawMathText(s.cq, 0, 0, fs); }
        cx.restore();
        for(let i=s.parts.length-1; i>=0; i--) { let p=s.parts[i]; p.x+=p.vx; p.y+=p.vy; p.life-=0.05; if(p.life<=0){p.del=true;continue;} cx.fillStyle=p.color; cx.globalAlpha=p.life; cx.beginPath(); cx.arc(p.x,p.y,p.size,0,Math.PI*2); cx.fill(); cx.globalAlpha=1; }
        s.parts = s.parts.filter(p=>!p.del);
    },

    spawnDefEnemy() {
        let q = this.st.qs.length===0 ? (this.st.qs=[...ArcadeGamesModule.QUESTIONS_DEFENDER].sort(()=>Math.random()-0.5)).pop() : this.st.qs.pop();
        this.st.cq = q.q;
        let sp = Math.floor(Math.random()*4);
        this.st.opts = [{t:q.a, c:true},{t:q.f1,c:false},{t:q.f2,c:false},{t:q.f3,c:false}].sort(()=>Math.random()-0.5);
        this.st.enemy = { posIdx: sp, dist: Math.max(cv.width, cv.height)*0.45, speed: this.st.eSpeed };
        this.st.bulletTimeTimer = 600; 
    }
});

ArcadeGamesModule.switchView = function(v) {
    const hub = document.getElementById('arcade-view-hub');
    const game = document.getElementById('arcade-view-game');
    if(hub) hub.classList.toggle('hidden', v !== 'hub');
    if(game) game.classList.toggle('hidden', v !== 'game');
    if (v === 'hub') this.updateRankingUI();
};

ArcadeGamesModule.startGame = function(id) {
    this.switchView('game');
    this.Engine.init(id);
};

ArcadeGamesModule.exitGame = function() {
    if(this.Engine.st) {
        this.Engine.st.isPlaying = false;
        this.Engine.st.isGameOverTriggered = true; // Use flag to stop any pending damage
    }
    this.AudioSys.stopEngine();
    if(this.Engine.req) cancelAnimationFrame(this.Engine.req);
    this.switchView('hub');
};

window.ArcadeGamesModule = ArcadeGamesModule;
