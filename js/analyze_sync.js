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

async function analyzeSync() {
    try {
        const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const m1 = data['bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t']; // 2256 XP (148 history items)
        const m2 = data['bWFyY2VsYXJhbW9zY29ydGVzQGdtYWlsLmNvbQ']; // 620 XP (20 history items)

        console.log("Analyzing shared history keys to detect LocalStorage cross-contamination...");
        
        const m1History = m1.history || {};
        const m2History = m2.history || {};
        
        const m1Keys = Object.keys(m1History);
        const m2Keys = Object.keys(m2History);

        let sharedKeys = [];
        m2Keys.forEach(k => {
            if(m1Keys.includes(k)) sharedKeys.push(k);
        });
        
        console.log(`\nFound ${sharedKeys.length} exact shared history keys.`);
        if (sharedKeys.length > 0) {
            console.log("Shared keys:", sharedKeys.slice(0, 5), sharedKeys.length > 5 ? '...' : '');
            console.log("\nIf keys and values are identical, it proves that local history from one account was synced to the other.");
        }

        // Look at timestamps for shared keys if any
        if (sharedKeys.length > 0) {
            const sampleKey = sharedKeys[0];
            console.log(`\nSample Data for '${sampleKey}':`);
            console.log("M1:", m1History[sampleKey]);
            console.log("M2:", m2History[sampleKey]);
        }

    } catch(e) { console.error(e); }
}
analyzeSync();
