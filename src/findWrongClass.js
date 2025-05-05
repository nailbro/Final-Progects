const fs = require('fs');
const path = require('path');

const directoryPath = '.'; // путь к папке с вашим кодом (можете поменять)

function findWrongClass(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            findWrongClass(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const regex = /class\s*=\s*["'][^"']*["']/g;
            const matches = content.match(regex);

            if (matches) {
                console.log('Найдены ошибки в файле: ${fullPath}');
                matches.forEach(match => console.log(`   ${match}`));
            }
        }
    });
}

findWrongClass(directoryPath);