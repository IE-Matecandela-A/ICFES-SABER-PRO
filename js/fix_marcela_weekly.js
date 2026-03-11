const https = require('https');

function fetch(url, options = {}) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ ok: res.statusCode < 400, json: () => Promise.resolve(JSON.parse(data)) }));
        });
        if (options.body) req.write(options.body);
        req.on('error', reject);
        req.end();
    });
}

async function fixMarcelaWeeklyXP() {
    try {
        const m1Id = 'bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t'; // The main account
        
        console.log(`Crediting 620 XP to Marcela's weekly progress...`);
        
        // Ensure weekStart is this week (Monday)
        const getWeekStart = () => {
            const now = new Date();
            const day = now.getDay();
            const daysSinceMon = (day + 7 - 1) % 7;
            const monday = new Date(now);
            monday.setDate(now.getDate() - daysSinceMon);
            monday.setHours(0, 0, 0, 0);
            return monday.getTime();
        };
        const currentWeekStart = getWeekStart();

        await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${m1Id}/gamification.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                weeklyXP: 620,
                weekStart: currentWeekStart,
                lastUpdated: new Date().getTime() // Ensure ranking fallback sees her active
            })
        });

        console.log("Account M1 Weekly XP successfully updated to 620.");

    } catch(e) { console.error(e); }
}
fixMarcelaWeeklyXP();
