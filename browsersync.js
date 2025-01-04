const browserSync = require('browser-sync').create();
require('dotenv').config(); // .env ファイルを読み込む

const PORT = process.env.WORDPRESS_PORT || 8000; // 環境変数から取得（デフォルト: 8000）

browserSync.init({
    proxy: `http://localhost:${PORT}`, // WordPressサイトのURL
    open: true, // ブラウザを自動で開く
    files: [
        "wordpress/wp-content/themes/my-themes/**/*.php",
        "wordpress/wp-content/themes/my-themes/assets/css/**/*.css",
        "wordpress/wp-content/themes/my-themes/assets/js/**/*.js"
    ],
    notify: false, // ブラウザ通知を非表示
});
