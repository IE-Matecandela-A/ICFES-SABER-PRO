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

async function fixMarcelaPoints() {
    try {
        const m1Id = 'bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t'; // The 2256 XP account
        
        console.log(`Setting Marcela's main account (${m1Id}) back to 620 XP to revert the inflation bug...`);
        
        await fetch(`https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users/${m1Id}/gamification.json`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                xp: 620,
                level: 4,     // 620 / 200 = 3 => level 4
                weeklyXP: 262, // From the screenshot
            })
        });

        console.log("Account M1 has been reset to 620 XP successfully.");

    } catch(e) { console.error(e); }
}
fixMarcelaPoints();
