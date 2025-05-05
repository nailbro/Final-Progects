const fs = require('fs');
const path = require('path');

const directoryPath = '.'; // Папка с вашим кодом

function replaceClassAttribute(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            replaceClassAttribute(fullPath);
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const regex = /class\s*=\s*["'][^"']*["']/g;
            const matches = content.match(regex);

            if (matches) {
                console.log('Заменяем в файле: ${fullPath}');
                // Создадим бэкап
                fs.writeFileSync(fullPath + '.bak', content, 'utf8');

                // Заменяем className="..." на className="..."
                content = content.replace(/class\s*=\s*["']/g, 'className="');

                fs.writeFileSync(fullPath, content, 'utf8');
            }
        }
    });
}

replaceClassAttribute(directoryPath);