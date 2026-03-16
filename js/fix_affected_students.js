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

const getWeekStart = () => {
    const now = new Date();
    const day = now.getDay();
    const daysSinceMon = (day + 7 - 1) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - daysSinceMon);
    monday.setHours(0, 0, 0, 0);
    return monday.getTime();
};

async function patch() {
    const mon = getWeekStart();
    console.log('Current Week Start (Mon):', new Date(mon).toISOString());

    try {
        const res = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const data = await res.json();
        
        // Find specifically Marcela and Valentina or any other affected
        for (const [id, u] of Object.entries(data)) {
            if (!u.gamification) continue;
            const lastUpd = u.gamification.lastUpdated || 0;
            const wStart = u.gamification.weekStart || 0;

            if (lastUpd >= mon && wStart < mon) {
                console.log(`Fixing ${u.profile?.name || 'Unknown'} (${id})...`);
                
                // We'll set weekStart to mon. 
                // Since they logged in this week, they earned at least 30 XP (daily bonus) 
                // or streak bonus. We'll set weeklyXP to a minimum of 30 if they don't have it.
                const newWeeklyXP = u.gamification.weeklyXP < 30 ? 30 : u.gamification.weeklyXP;

                await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${id}/gamification.json`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        weekStart: mon,
                        // If their current weeklyXP is very high (from last week), 
                        // we should probably reset it to something reasonable for just the login bonus
                        // but to be safe and "generous", we let them keep what they have but with the new date.
                        // Actually, if it's > 700 it's definitely from last week. Let's cap it or reset to 30.
                        weeklyXP: u.gamification.weeklyXP > 50 ? 30 : u.gamification.weeklyXP 
                    })
                });
                console.log(`  Done.`);
            }
        }
        console.log('Patch complete.');
    } catch (e) {
        console.error(e);
    }
}
patch();
