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

function fuzzyMatch(profileName, rawResultName) {
    const safeProfileName = (profileName || '').trim().toLowerCase();
    const rawName = (rawResultName || '').trim().toLowerCase();

    if (rawName === safeProfileName) return true;
    if (safeProfileName === '' || rawName === '') return false;

    const profileWords = safeProfileName.split(/\s+/).filter(w => w.length > 0);
    const rawWords = rawName.split(/\s+/).filter(w => w.length > 0);

    // Exact match in lowercase check
    if (rawName === safeProfileName) return true;

    // Basic inclusion check (e.g. "Juan Perez" includes "Juan") - helpful but risky if too short
    // Fuzzy matching for omitted middle names or surnames
    if (rawWords.length >= 2 && profileWords.length >= 2) {
        const isSubset1 = rawWords.every(w => profileWords.includes(w));
        const isSubset2 = profileWords.every(w => rawWords.includes(w));
        if (isSubset1 || isSubset2) return true;
    }

    // What if rawName has only 1 word, like "Juan"? Or profile has 1 word?
    if (rawWords.length === 1 && profileWords.length >= 1) {
        // if (profileWords.includes(rawWords[0])) return true; // Too dangerous, might merge all "Juan"s.
    }

    return false;
}

async function verifyAll() {
    try {
        console.log("Fetching DB...");
        const [usersData, resultsData] = await Promise.all([
            fetchJson('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json'),
            fetchJson('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json')
        ]);

        const allUsers = Object.values(usersData || {}).filter(u => u && u.profile && u.profile.name);
        const allResults = Object.values(resultsData || {}).filter(r => r && r.studentName);

        console.log(`Total Profiles: ${allUsers.length}`);
        console.log(`Total Results: ${allResults.length}`);

        let unmatchedResults = [];
        let matchedCount = 0;

        allResults.forEach(res => {
            // Find a matching user
            const match = allUsers.find(u => fuzzyMatch(u.profile.name, res.studentName));
            if (match) {
                matchedCount++;
            } else {
                unmatchedResults.push(res);
            }
        });

        console.log(`\nMatched Results: ${matchedCount}`);
        console.log(`Unmatched (Orphan) Results: ${unmatchedResults.length}`);

        if (unmatchedResults.length > 0) {
            console.log("\n--- UNMATCHED NAMES IN RESULTS ---");
            const unmatchedNamesSet = [...new Set(unmatchedResults.map(r => r.studentName))];
            unmatchedNamesSet.forEach(name => {
                const count = unmatchedResults.filter(r => r.studentName === name).length;
                console.log(`- "${name}" (${count} results)`);
            });
            console.log("----------------------------------");
        }

    } catch (err) {
        console.error("Error:", err);
    }
}

verifyAll();
