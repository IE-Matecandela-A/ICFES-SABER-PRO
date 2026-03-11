const https = require('https');

function fetch(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
    });
}

const getWeekStart = () => {
    const now = new Date(); // Using script run time
    const day = now.getDay();
    const daysSinceMon = (day + 7 - 1) % 7;
    const monday = new Date(now);
    monday.setDate(now.getDate() - daysSinceMon);
    monday.setHours(0, 0, 0, 0);
    return monday.getTime();
};

async function diagnose() {
    try {
        const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const users = Object.entries(data).map(([id, u]) => ({ id, ...u }));
        const mon = getWeekStart();
        
        console.log('Current Week Start (Mon):', new Date(mon).toISOString());
        console.log('Analyzing students...');

        const affected = users.filter(u => {
            if (!u.gamification) return false;
            const lastUpd = u.gamification.lastUpdated || 0;
            const wStart = u.gamification.weekStart || 0;
            
            // Student was active THIS week, but data belongs to PREVIOUS week
            return lastUpd >= mon && wStart < mon;
        });

        console.log(`Found ${affected.length} affected students.`);
        affected.forEach(a => {
            console.log(`- ${a.profile?.name || 'Unknown'} (${a.id})`);
            console.log(`  Last Updated: ${new Date(a.gamification.lastUpdated).toISOString()}`);
            console.log(`  Week Start:   ${new Date(a.gamification.weekStart).toISOString()}`);
            console.log(`  XP: ${a.gamification.xp}, WeeklyXP: ${a.gamification.weeklyXP}`);
        });

    } catch (e) {
        console.error(e);
    }
}
diagnose();
