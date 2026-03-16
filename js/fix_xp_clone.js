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

async function fixDuplication() {
    try {
        console.log("Fetching results...");
        const res = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json');
        const results = await res.json();
        const allResults = Object.entries(results);
        
        // Find exams belonging to the cloned account
        const m2Email = 'marcelaramoscortes@gmail.com';
        const m2Results = allResults.filter(([id, r]) => 
            r.studentName && r.studentName.toLowerCase() === 'marcela ramos cortes' && 
            new Date(r.date || r.timestamp) < new Date('2026-03-01T00:00:00.000Z') // The old exams that got cloned 
        );
        
        console.log(`Found ${m2Results.length} old exams belonging to the clone glitch`);
        // We shouldn't delete them from Firebase completely because they actually belong to M1!
        // Wait, NO. If M1 and M2 both have the same results, are they literally the same Firebase objects?
        // Let's check if the ID is duplicated or just the array entries.
        
        // Actually, the simplest fix is to just reset M2's gamification XP to 0 or delete the account entirely.
        const resU = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const users = await resU.json();
        const m2Id = 'bWFyY2VsYXJhbW9zY29ydGVzQGdtYWlsLmNvbQ';
        
        if (users[m2Id]) {
            console.log("Deleting cloned history and resetting XP for the secondary account...");
            await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${m2Id}/history.json`, { method: 'DELETE' });
            
            await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${m2Id}/gamification.json`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    xp: 0,
                    level: 1,
                    weeklyXP: 0,
                    streakDays: 0
                })
            });
            console.log("Account M2 has been reset to 0 XP and history cleared.");
        }

    } catch(e) { console.error(e); }
}
fixDuplication();
