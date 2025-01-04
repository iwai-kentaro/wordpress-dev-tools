const { execSync } = require('child_process');

console.log('Running project setup...');

// Volta がインストールされているか確認
try {
    execSync('volta -v', { stdio: 'ignore' });
    console.log('Volta is already installed.');
} catch (error) {
    console.log('Volta is not installed. Installing...');
    execSync('curl https://get.volta.sh | bash', { stdio: 'inherit' });
}

// Node.js と npm のバージョンを適用
console.log('Applying Node.js and npm versions...');
execSync('volta install node', { stdio: 'inherit' });
execSync('volta install npm', { stdio: 'inherit' });

console.log('Setup complete! Ready to start development.');
