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

async function checkUser() {
    try {
        const data = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const users = Object.entries(data).map(([id, u]) => ({ id, ...u }));

        const target = users.find(u => 
            u.profile && u.profile.name && 
            (u.profile.name.toLowerCase().includes('marcela') || 
             u.profile.name.toLowerCase().includes('ramos'))
        );

        if (target) {
            console.log('--- FOUND USER ---');
            console.log(JSON.stringify(target, null, 2));
        } else {
            console.log('User not found in Firebase.');
            console.log('Sample names:', users.slice(0, 10).map(u => u.profile?.name));
        }

    } catch (e) {
        console.error(e);
    }
}
checkUser();
