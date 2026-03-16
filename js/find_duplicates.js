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

async function findDuplicates() {
    const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
    const entries = Object.entries(data).filter(([,u]) => u && u.profile);

    // Find all Marcela entries
    const marcelas = entries.filter(([,u]) => 
        u.profile.name && u.profile.name.toLowerCase().includes('marcela')
    );
    
    console.log(`=== Found ${marcelas.length} entries for "marcela" ===`);
    marcelas.forEach(([id, u]) => {
        console.log(`\nID: ${id}`);
        console.log(`  Name: ${u.profile.name}`);
        console.log(`  Email: ${u.profile.email}`);
        console.log(`  XP: ${u.gamification?.xp || 0}`);
        console.log(`  Level: ${u.gamification?.level || 'N/A'}`);
        console.log(`  WeeklyXP: ${u.gamification?.weeklyXP || 0}`);
        console.log(`  WeekStart: ${u.gamification?.weekStart ? new Date(u.gamification.weekStart).toISOString() : 'N/A'}`);
        console.log(`  LastUpdated: ${u.gamification?.lastUpdated ? new Date(u.gamification.lastUpdated).toISOString() : 'N/A'}`);
        console.log(`  StreakDays: ${u.gamification?.streakDays || 0}`);
        console.log(`  Sessions: ${u.sessions ? Object.keys(u.sessions).length : 0}`);
        const historyCount = u.history ? Object.keys(u.history).length : 0;
        console.log(`  History entries: ${historyCount}`);
    });

    // Also check: how many students total have > 1500 XP?
    console.log('\n=== Students with XP > 1500 ===');
    const highXP = entries.filter(([,u]) => u.gamification && u.gamification.xp > 1500);
    highXP.forEach(([id, u]) => {
        console.log(`  ${u.profile.name}: ${u.gamification.xp} XP (streak: ${u.gamification.streakDays || 0}, sessions: ${u.sessions ? Object.keys(u.sessions).length : 0})`);
    });

    // Check for general duplicates (same name appearing multiple times)
    console.log('\n=== Checking for ALL duplicate names ===');
    const nameMap = {};
    entries.forEach(([id, u]) => {
        const name = (u.profile.name || '').toLowerCase().trim();
        if (!nameMap[name]) nameMap[name] = [];
        nameMap[name].push({ id, xp: u.gamification?.xp || 0, email: u.profile.email });
    });
    Object.entries(nameMap).filter(([, arr]) => arr.length > 1).forEach(([name, arr]) => {
        console.log(`  DUPLICATE: "${name}" (${arr.length} entries)`);
        arr.forEach(e => console.log(`    ID: ${e.id}, XP: ${e.xp}, Email: ${e.email}`));
    });
}
findDuplicates();
