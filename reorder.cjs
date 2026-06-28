const fs = require('fs');
const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const langs = ['en', 'es', 'pt', 'uk', 'ru'];
for (const lang of langs) {
    const regex = new RegExp(`(${lang}:\\s*\\[\\n)([\\s\\S]*?)(\\n\\s*\\])`, 'm');
    const match = content.match(regex);
    if (match) {
        const prefix = match[1];
        const arrayStr = match[2];
        const suffix = match[3];
        
        const objRegex = /    \{\n      id: "[^"]*"[\s\S]*?\n    \}/g;
        const objects = arrayStr.match(objRegex);
        if (objects && objects.length === 6) {
            const loyaltyIdx = objects.findIndex(o => o.includes('id: "loyalty-bot"'));
            if (loyaltyIdx !== -1) {
                const loyalty = objects.splice(loyaltyIdx, 1)[0];
                objects.unshift(loyalty);
            }
            const newArrayStr = objects.join(',\n');
            content = content.replace(match[0], prefix + newArrayStr + suffix);
        } else {
            console.error('Did not find 6 objects for lang:', lang);
        }
    }
}
fs.writeFileSync(file, content);
