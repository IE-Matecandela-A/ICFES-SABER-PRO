const https = require('https');

const DB_URL = 'https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json';

// Fetch users
https.get(DB_URL, (res) => {
    let rawData = '';
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
        try {
            const data = JSON.parse(rawData);
            const updates = {};
            let count = 0;

            for (const [uid, user] of Object.entries(data)) {
                if (user && user.profile) {
                    const currentSchool = user.profile.school;
                    
                    // We want to normalize all existing schools to 'IE MATECANDELA'
                    // based on the user's latest request to just move everyone there.
                    if (currentSchool !== 'IE MATECANDELA') {
                        // Queue the update for Firebase
                        updates[`${uid}/profile/school`] = 'IE MATECANDELA';
                        count++;
                    }
                }
            }

            console.log(`Found ${count} profiles to update to 'IE MATECANDELA'.`);

            if (count > 0) {
                // Send PATCH request
                const reqParam = new URL(DB_URL);
                const options = {
                    hostname: reqParam.hostname,
                    path: reqParam.pathname,
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const req = https.request(options, (resPatch) => {
                    let resData = '';
                    resPatch.on('data', (d) => { resData += d; });
                    resPatch.on('end', () => {
                        if (resPatch.statusCode >= 200 && resPatch.statusCode < 300) {
                            console.log('SUCCESS: All schools have been updated to IE MATECANDELA.');
                        } else {
                            console.error('FAILED to patch database:', resPatch.statusCode, resData);
                        }
                    });
                });

                req.on('error', (e) => {
                    console.error('Request error:', e);
                });

                req.write(JSON.stringify(updates));
                req.end();

            } else {
                console.log('No updates needed. Everyone is already in IE MATECANDELA.');
            }

        } catch (e) {
            console.error('Error parsing JSON:', e.message);
        }
    });
}).on('error', (e) => {
    console.error('Got error:', e.message);
});
