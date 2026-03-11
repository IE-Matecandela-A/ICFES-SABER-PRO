const https = require('https');

function fetchJson(url) {
    return new Promise((resolve, reject) => {
        https.get(url, { headers: { 'Cache-Control': 'no-cache' } }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try { resolve(JSON.parse(data)); }
                catch (e) { reject(e); }
            });
        }).on('error', reject);
    });
}

async function checkQuintero() {
    try {
        console.log("Fetching results...");
        const results = await fetchJson('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json');
        const allResults = Object.values(results || {}).filter(r => r);

        const quinteroResults = allResults.filter(r => {
            const name = (r.studentName || '').toLowerCase();
            return name.includes('quintero');
        });

        console.log(`Found ${quinteroResults.length} exams for Quintero.`);
        let totalRawTime = 0;

        quinteroResults.forEach((r, idx) => {
            console.log(`\nExam ${idx + 1}: ${r.title}`);
            console.log(`Date: ${r.date}`);
            console.log(`Raw timeSpent (seconds): ${r.timeSpent}`);
            console.log(`Raw timeSpent (Formatted): ${Math.floor(r.timeSpent / 3600)}h ${Math.floor((r.timeSpent % 3600) / 60)}m`);
            totalRawTime += r.timeSpent;
            if (r.timeSpent > 14400) {
                console.log(`CAP TRIGGERED: This was originally larger than 4h (14400s). Was limited in UI.`);
            }
        });

        console.log(`\nTotal Raw Time Spent in DB: ${totalRawTime} seconds`);
        console.log(`Raw Total (Formatted): ${Math.floor(totalRawTime / 3600)}h ${Math.floor((totalRawTime % 3600) / 60)}m`);

    } catch (err) {
        console.error("Error:", err);
    }
}

checkQuintero();
