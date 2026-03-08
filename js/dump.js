const fs = require('fs');
fetch('https://plataforma-icfes-13421-default-rtdb.firebaseio.com/users.json')
    .then(r => r.json())
    .then(d => {
        fs.writeFileSync('test.json', JSON.stringify(Object.values(d).filter(u => u), null, 2));
    });
