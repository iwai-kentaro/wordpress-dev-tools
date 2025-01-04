const chokidar = require("chokidar");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { optimize } = require("svgo");

// 入力フォルダと出力フォルダ
const inputFolder = "./src/images";
const outputFolderWebP = "./wordpress/wp-content/themmy-themes/assets/images/webp";
const outputFolderCompressed = "./wordpress/wp-content/themmy-themes/assets/images";

// 出力フォルダを作成
if (!fs.existsSync(outputFolderWebP)) {
    fs.mkdirSync(outputFolderWebP, { recursive: true });
}
if (!fs.existsSync(outputFolderCompressed)) {
    fs.mkdirSync(outputFolderCompressed, { recursive: true });
}

// ファイルを処理する関数
const processFile = (filePath) => {
    const fileName = path.parse(filePath).name;
    const fileExt = path.parse(filePath).ext.toLowerCase(); // 拡張子を小文字で取得

    // PNG または JPG を WebP に変換
    if (fileExt === ".png" || fileExt === ".jpg" || fileExt === ".jpeg") {
        // WebP変換
        sharp(filePath)
            .webp({ quality: 80 })
            .toFile(path.join(outputFolderWebP, `${fileName}.webp`))
            .then(() => console.log(`${fileName} を WebP に変換しました`))
            .catch((err) => console.error(`${fileName} の WebP 変換中にエラーが発生しました:`, err));

        // 圧縮PNG
        if (fileExt === ".png") {
            sharp(filePath)
                .png({ compressionLevel: 9 })
                .toFile(path.join(outputFolderCompressed, `${fileName}.png`))
                .then(() => console.log(`${fileName} を圧縮PNGに変換しました`))
                .catch((err) => console.error(`${fileName} の PNG 圧縮中にエラーが発生しました:`, err));
        }

        // 圧縮JPEG
        if (fileExt === ".jpg" || fileExt === ".jpeg") {
            sharp(filePath)
                .jpeg({ quality: 80 })
                .toFile(path.join(outputFolderCompressed, `${fileName}.jpg`))
                .then(() => console.log(`${fileName} を圧縮JPEGに変換しました`))
                .catch((err) => console.error(`${fileName} の JPEG 圧縮中にエラーが発生しました:`, err));
        }
    } else if (fileExt === ".svg") {
        // SVGの最適化
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) {
                console.error(`${fileName} の読み込み中にエラーが発生しました:`, err);
                return;
            }

            const result = optimize(data, { path: filePath });
            const optimizedSvg = result.data;

            fs.writeFile(path.join(outputFolderCompressed, `${fileName}.svg`), optimizedSvg, (err) => {
                if (err) {
                    console.error(`${fileName} のSVG最適化中にエラーが発生しました:`, err);
                } else {
                    console.log(`${fileName} を最適化SVGとして保存しました`);
                }
            });
        });
    }
};

// chokidarでファイル変更を監視
chokidar
    .watch(inputFolder, { persistent: true })
    .on("add", (filePath) => {
        console.log(`新しいファイルを検出: ${filePath}`);
        processFile(filePath);
    })
    .on("change", (filePath) => {
        console.log(`ファイルが変更されました: ${filePath}`);
        processFile(filePath);
    })
    .on("unlink", (filePath) => {
        console.log(`ファイルが削除されました: ${filePath}`);
        // 必要に応じて削除処理を追加可能
    });
