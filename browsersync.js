const browserSync = require('browser-sync').create();

browserSync.init({
    proxy: "http://localhost:8000", // WordPressサイトのURL
    files: [
        "wordpress/wp-content/themes/my-themes/**/*.php",
        "wordpress/wp-content/themes/my-themes/assets/css/**/*.css",
        "wordpress/wp-content/themes/my-themes/assets/js/**/*.js"
    ],
    notify: false
});
