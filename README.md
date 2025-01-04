## 環境構築手順

このプロジェクトでは Volta を使用して Node.js と npm のバージョンを管理しています。

### 必要なツール(npm install で自動で実行されます。)

- [Volta](https://volta.sh/)
- node:v20.18.1
- npm:10.8.2
- volta install node@20.18.1
- volta install npm@10.8.2

### セットアップ手順

1. npm install

### 環境実行

1. npm run dev

### 個別対応

## docker-compose.yml

- ./wordpress/wp-content/{デフォルトは my、ここに任意のファイル名を入れてください。}/my:/var/www/html/wp-content/themes/{デフォルトは my、ここに任意のファイル名を入れてください。}

## ファイル名を変更した場合（デフォルトは my）

- package.json の内容を変更する必要があります。
- 上記ファイルを開きます。
- (mac)cmd + shift + h で my-themes を検索して、置換のところに新しく命名してください。変換すると戻すのが大変になる可能性があるので、命名には十分にご注意ください。

# wordpress-dev-tools
