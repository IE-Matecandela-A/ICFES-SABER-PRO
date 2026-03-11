const puppeteer = require('puppeteer');

(async () => {
    console.log("Starting Puppeteer test...");
    try {
        const browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--allow-file-access-from-files']
        });
        const page = await browser.newPage();

        let errors = [];

        page.on('console', msg => {
            if (msg.type() === 'error') {
                errors.push(`Console Error: ${msg.text()}`);
            }
        });

        page.on('pageerror', err => {
            errors.push(`Page Error: ${err.toString()}`);
        });

        const fileUrl = 'file:///C:/Users/Usuario/Downloads/new/estudiantes/Saber11_Pro/index.html';
        console.log("Navigating to:", fileUrl);
        await page.goto(fileUrl, { waitUntil: 'networkidle0' });

        console.log("Evaluating tests...");

        // Wait a bit for async functions to trigger
        await new Promise(r => setTimeout(r, 2000));

        if (errors.length > 0) {
            console.log("\n--- ERRORS FOUND ---");
            errors.forEach(e => console.log(e));
        } else {
            console.log("\nNo errors caught on load.");
        }

        await browser.close();
    } catch (e) {
        console.error("Puppeteer crashed:", e);
    }
})();
