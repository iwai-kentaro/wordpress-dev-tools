const browserSync = require('browser-sync').create();

browserSync.init({
    proxy: "http://localhost:8000/wp-admin", // WordPressサイトのURL
    port: 8000, // ポート番号
    open: true, // ブラウザを自動で開く
    files: [
        "wordpress/wp-content/themes/my-themes/**/*.php",
        "wordpress/wp-content/themes/my-themes/assets/css/**/*.css",
        "wordpress/wp-content/themes/my-themes/assets/js/**/*.js"
    ],
    notify: false, // ブラウザ通知を非表示
});
