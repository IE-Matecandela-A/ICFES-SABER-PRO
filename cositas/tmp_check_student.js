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

async function check() {
    try {
        console.log("Fetching results...");
        const results = await fetchJson('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json');
        const allResults = Object.values(results || {}).filter(r => r);

        // Name to search
        const searchTerms = ['soliamnys', 'parales', 'nikol', 'marin'];

        const studentResults = allResults.filter(r => {
            const name = (r.studentName || '').toLowerCase();
            return name.includes('soliamnys') || name.includes('parales');
        });

        console.log(`Found ${studentResults.length} results containing 'soliamnys' or 'parales'.`);
        if (studentResults.length > 0) {
            console.log("Sample result:");
            console.log(JSON.stringify(studentResults[0], null, 2));

            // Map all names
            const namesUsed = [...new Set(studentResults.map(r => r.studentName))];
            console.log("Exact student names found in results:", namesUsed);
        }

        console.log("\nFetching profile...");
        const users = await fetchJson('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const matchingUsers = Object.values(users || {}).filter(u => {
            const name = (u.profile && u.profile.name || '').toLowerCase();
            return name.includes('soliamnys') || name.includes('parales');
        });

        if (matchingUsers.length > 0) {
            console.log("Profile Name in users DB:", matchingUsers[0].profile.name);
        } else {
            console.log("Profile not found using search term.");
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

check();
