const https = require('https');

const ids = [
    'gyORvifTK7E',
    'uy8nHmx_YXI', 'uy8nHMx_YXI',
    'zRkDuFCP2o0', 'zRkDuFCP2oO',
    '8bxvg_QL1f0', '8bxvg_QL1fO',
    'jjO21znJdiE', 'jj021znJdiE',
    'Slkwywk5l3g', 'Slkwywk5I3g', 'SIkwywk5l3g', 'SIkwywk5I3g'
];

Promise.all(ids.map(id => new Promise(resolve => {
    https.get('https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + id + '&format=json', (res) => {
        let data = '';
        res.on('data', c => data += c);
        res.on('end', () => {
            try {
                if (res.statusCode === 200) {
                    resolve(`${id}: OK - ${JSON.parse(data).title}`);
                } else {
                    resolve(`${id}: ${res.statusCode}`);
                }
            } catch (e) { resolve(`${id}: ERROR Parsing`); }
        });
    }).on('error', () => resolve(`${id}: ERROR Request`));
}))).then(results => console.log(results.join('\n')));
