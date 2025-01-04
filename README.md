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

- ./wordpress/wp-content/{デフォルトは my-themes、ここに任意のファイル名を入れてください。}/my-themes:/var/www/html/wp-content/themes/{デフォルトは my-themes、ここに任意のファイル名を入れてください。}

## ファイル名を変更した場合（デフォルトは my-themes）

- package.json の内容を変更する必要があります。
- 上記ファイルを開きます。
- (mac)cmd + shift + h
# wordpress-dev-tools
