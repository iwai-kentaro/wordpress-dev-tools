const path = require('path');
const fs = require('fs');

// 動的にエントリファイルを取得
const entryFiles = fs.readdirSync('./src/js')
    .filter((file) => file.endsWith('.js'))
    .map((file) => `./src/js/${file}`);

console.log('Entry Files:', entryFiles);

module.exports = {
    entry: entryFiles, // 動的エントリポイント
    output: {
        filename: 'script.js', // 出力ファイル名
        path: path.resolve(__dirname, 'wordpress/wp-content/themes/my-themes/assets/js'), // 出力先ディレクトリ
    },
    mode: 'production', // 本番モード
    devtool: 'source-map', // ソースマップを有効化
    optimization: {
        minimize: false, // 最適化を無効化
    },
    module: {
        rules: [
            {
                test: /\.js$/, // .js ファイルに適用
                exclude: /node_modules/, // node_modules を除外
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['transform-remove-console', 'minify-dead-code-elimination'],
                    },
                },
            },
        ],
    },
};
