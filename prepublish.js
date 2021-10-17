const fs = require('fs');
const pkg = require('./package.json');

delete pkg['devDependencies'];
delete pkg['scripts'];
delete pkg['release'];

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2));
