async function run() {
    try {
        const res = await fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json');
        const data = await res.json();
        const users = Object.values(data).filter(u => u);

        console.log('Total users:', users.length);

        const karen = users.find(u => u && u.profile && u.profile.name === 'KAREN');
        if (karen) {
            console.log('\n--- KAREN PROFILE ---');
            console.log(karen.profile);
            console.log('\n--- KAREN HISTORY KEYS ---');
            if (karen.history) {
                console.log(Object.keys(karen.history));
                const firstKey = Object.keys(karen.history)[0];
                console.log('\n--- FIRST HISTORY ITEM ---');
                console.log(karen.history[firstKey]);
            } else {
                console.log('No history object');
            }
        }

        const edgar = users.find(u => u && u.profile && u.profile.name && u.profile.name.toLowerCase().includes('edgar'));
        if (edgar) {
            console.log('\n--- EDGAR HISTORY KEYS ---');
            if (edgar.history) {
                console.log(Object.keys(edgar.history));
                const firstKey = Object.keys(edgar.history)[0];
                console.log('\n--- FIRST HISTORY ITEM ---');
                console.log(edgar.history[firstKey]);
            } else {
                console.log('No history object');
            }
        }
    } catch (e) {
        console.error(e);
    }
}
run();
