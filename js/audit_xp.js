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

async function auditXP() {
    const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
    const results = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json');
    
    const marcelaId = 'bWFyY2VsYWNvcnRlczEwNTA1NTBAZ21haWwuY29t';
    const marcela = data[marcelaId];
    
    console.log('=== MARCELA XP AUDIT ===');
    console.log('Current XP:', marcela.gamification.xp);
    console.log('Current Level:', marcela.gamification.level);
    console.log('Last Updated:', new Date(marcela.gamification.lastUpdated).toISOString());
    
    // Find all her exam results
    const allResults = results ? Object.values(results).filter(r => r) : [];
    const herResults = allResults.filter(r => {
        const name = (r.studentName || '').trim().toLowerCase();
        return name.includes('marcela') && name.includes('ramos');
    });
    
    console.log('\n=== EXAM RESULTS ===');
    let totalCorrectXP = 0;
    let totalDailyBonuses = 0;
    const daysUsed = new Set();
    
    herResults.sort((a, b) => new Date(a.date || 0) - new Date(b.date || 0));
    
    herResults.forEach((r, i) => {
        const correct = r.correctAnswers || r.correct || 0;
        const total = r.totalQuestions || r.total || 0;
        const date = r.date || r.timestamp || 'unknown';
        const dateStr = typeof date === 'string' ? date.slice(0, 10) : new Date(date).toISOString().slice(0, 10);
        const xpFromCorrect = correct * 10;
        totalCorrectXP += xpFromCorrect;
        
        // Daily bonus: 30 XP once per day
        if (!daysUsed.has(dateStr)) {
            daysUsed.add(dateStr);
            totalDailyBonuses += 30;
        }
        
        console.log(`  ${i+1}. ${dateStr} | ${r.area || 'N/A'} | ${correct}/${total} correct | +${xpFromCorrect} XP`);
    });
    
    console.log('\n=== XP MATH ===');
    console.log('XP from correct answers:', totalCorrectXP);
    console.log('XP from daily bonuses:', totalDailyBonuses, `(${daysUsed.size} unique days)`);
    console.log('Subtotal:', totalCorrectXP + totalDailyBonuses);
    console.log('Max streak bonus estimate: ~200');
    console.log('MAX legitimate XP:', totalCorrectXP + totalDailyBonuses + 200);
    console.log('ACTUAL XP:', marcela.gamification.xp);
    console.log('DIFFERENCE (inflation):', marcela.gamification.xp - (totalCorrectXP + totalDailyBonuses + 200));
    
    // Check sessions for anomalies
    console.log('\n=== SESSIONS ===');
    if (marcela.sessions) {
        Object.values(marcela.sessions).sort((a, b) => a.timestamp - b.timestamp).forEach(s => {
            console.log(`  ${new Date(s.timestamp).toISOString()} | ${s.durationSeconds}s | Status: ${s.status}`);
        });
    }
}
auditXP();
