const fs = require('fs');
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

async function analyzeMarcela() {
    try {
        const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        
        const m1 = data['bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t']; // 2256 XP
        const m2 = data['bWFyY2VsYXJhbW9zY29ydGVzQGdtYWlsLmNvbQ']; // 620 XP

        console.log("=== ACCOUNT 1: High XP ===");
        console.log("Email:", m1.profile.email);
        console.log("XP:", m1.gamification?.xp);
        console.log("Level:", m1.gamification?.level);
        
        let m1Dates = [];
        if(m1.history) {
             m1Dates = Object.values(m1.history).map(h => new Date(h.date || h.timestamp || 0));
        }
        m1Dates.sort((a,b) => a-b);
        console.log("History records:", m1Dates.length);
        if(m1Dates.length > 0) {
            console.log("First history:", m1Dates[0].toISOString());
            console.log("Last history:", m1Dates[m1Dates.length-1].toISOString());
        }

        console.log("\n=== ACCOUNT 2: Low XP ===");
        console.log("Email:", m2?.profile?.email || 'N/A');
        console.log("XP:", m2?.gamification?.xp);
        
        let m2Dates = [];
        if(m2 && m2.history) {
             m2Dates = Object.values(m2.history).map(h => new Date(h.date || h.timestamp || 0));
        }
        m2Dates.sort((a,b) => a-b);
        console.log("History records:", m2Dates.length);
        if(m2Dates.length > 0) {
            console.log("First history:", m2Dates[0].toISOString());
            console.log("Last history:", m2Dates[m2Dates.length-1].toISOString());
        }

        // Check if M2's history is a perfect subset of M1's history
        console.log("\n=== CLONE ANALYSIS ===");
        if (!m2 || !m1) return console.log("Missing one account.");
        
        const m1Keys = m1.history ? Object.keys(m1.history) : [];
        const m2Keys = m2.history ? Object.keys(m2.history) : [];

        let sharedKeys = 0;
        m2Keys.forEach(k => { if(m1Keys.includes(k)) sharedKeys++; });
        
        console.log(`M2 has ${m2Keys.length} keys.`);
        console.log(`Of those, ${sharedKeys} exist EXACTLY in M1.`);
        
        if (sharedKeys === m2Keys.length && m2Keys.length > 0) {
            console.log(">>> CONCLUSION: M2 is a perfect subset of M1.");
            console.log("The user probably logged in with a different email, or the system branched the data.");
        } else {
            console.log(">>> CONCLUSION: Histories diverge. They took different exams.");
        }

    } catch(e) { console.error(e); }
}
analyzeMarcela();
