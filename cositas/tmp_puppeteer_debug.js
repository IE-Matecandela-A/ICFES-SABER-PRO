const puppeteer = require('puppeteer');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Simple static server
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    const extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js': contentType = 'text/javascript'; break;
        case '.css': contentType = 'text/css'; break;
        case '.json': contentType = 'application/json'; break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end(`File not found: ${filePath}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(8123, async () => {
    console.log("Server listening on 8123...");
    try {
        const browser = await puppeteer.launch({ headless: 'new' });
        const page = await browser.newPage();

        let foundErrors = [];
        page.on('console', msg => {
            if (msg.type() === 'error') foundErrors.push(`[Console Error] ${msg.text()}`);
        });
        page.on('pageerror', err => {
            foundErrors.push(`[Page Error] ${err.toString()}`);
        });

        await page.goto('http://localhost:8123', { waitUntil: 'networkidle0' });

        // Wait 1s for any delayed execution errors
        await new Promise(r => setTimeout(r, 1000));

        console.log("\n--- TEST RESULTS ---");
        if (foundErrors.length > 0) {
            console.log("Errors detected:");
            foundErrors.forEach(e => console.log(e));
        } else {
            console.log("No console errors detected during page load.");
        }

        await browser.close();
        server.close();
    } catch (e) {
        console.error("Puppeteer crashed:", e);
        server.close();
    }
});
