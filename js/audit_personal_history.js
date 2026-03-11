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

async function auditPersonalHistory() {
    try {
        const usersRes = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const m1 = usersRes['bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t']; // The 2256 XP account
        
        console.log(`User: ${m1.profile.name}`);
        console.log(`Gamification XP: ${m1.gamification.xp}`);
        console.log(`Number of personal history entries: ${Object.keys(m1.history || {}).length}`);
        
        let localCorrectAnswers = 0;
        Object.values(m1.history || {}).forEach(h => {
             // Let's see what these history items actually are
             // Usually Firebase `history` node stores question IDs (keys) and 1 or 2 (value) for correct/incorrect
             if (h === 1) localCorrectAnswers++;
        });
        
        console.log(`Number of Correct Answers in personal question history: ${localCorrectAnswers}`);
        console.log(`Expected XP from these: ${localCorrectAnswers * 10}`);
        
        console.log('\nSo if she has 148 questions in her history (meaning she answered 148 questions correctly, or even if some are wrong, let say 110 correct).');
        console.log('110 correct = 1100 XP.');
        console.log('Her sessions count is 7. Daily bonus = 30 * 7 = 210 XP.');
        console.log('Wait... 1100 + 210 = 1310 XP. Where did the other ~1000 XP come from?');
        
        // Could it be streak bonuses?
        // max streak is 50/day. 50 * 7 = 350. 
        // 1310 + 350 = 1660 XP. 
        // 2256 - 1660 = 596 XP still missing.
        
        console.log('\nThe only way XP inflates silently like this is a client-side bug calling addXP() in a loop, or local sync merging.');

    } catch(e) { console.error(e); }
}
auditPersonalHistory();
