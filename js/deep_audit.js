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

async function deepAudit() {
    try {
        const resultsRes = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/results.json');
        
        let mExams = Object.values(resultsRes).filter(r => 
            r && r.studentName && r.studentName.toLowerCase() === 'marcela ramos cortes'
        );
        
        console.log(`Found ${mExams.length} results for Marcela in the global results table.`);
        
        const idCounts = {};
        mExams.forEach(e => {
            idCounts[e.id] = (idCounts[e.id] || 0) + 1;
        });
        
        const exactDups = Object.values(idCounts).filter(c => c > 1).length;
        console.log(`Number of exact duplicate IDs in the cloud: ${exactDups}`);
        
        // Let's look for duplicated content (same score, same date, different ID)
        const contentHashes = {};
        let duplicateContentCount = 0;
        
        mExams.forEach(e => {
            const hash = `${e.correct}-${e.total}-${e.timeSpent}-${e.date}`;
            if (contentHashes[hash]) duplicateContentCount++;
            contentHashes[hash] = true;
        });
        
        console.log(`Number of identically matching exams (same time, score, date) with different IDs: ${duplicateContentCount}`);
        
        if (duplicateContentCount > 0) {
            console.log("\nLooks like exams were submitted multiple times!");
            console.log("This happens when localStorage isn't cleared and the app thinks old exams are new, giving XP again.");
        }

    } catch(e) { console.error(e); }
}
deepAudit();
