const handler = require('./handler.js');

async function test() {
    const ctx = {
        params: {
            app: 'photoshop',
            script: 'app.documents.add(800, 600, 72, "OpenClaw Test Document");'
        }
    };

    console.log('Testing Photoshop connectivity...');
    try {
        const result = await handler.commands.runScript.handler(ctx);
        console.log('Result:', result.text);
    } catch (err) {
        console.error('Execution Error:', err);
    }
}

test();
