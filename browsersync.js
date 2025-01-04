const browserSync = require('browser-sync').create();

browserSync.init({
    proxy: "http://localhost:8000", // WordPressサイトのURL
    files: [
        "wordpress/wp-content/themmy-themes/**/*.php",
        "wordpress/wp-content/themmy-themes/assets/css/**/*.css",
        "wordpress/wp-content/themmy-themes/assets/js/**/*.js"
    ],
    notify: false
});
