## リポジトリからクローンする方法

- git リポジトリから URL をコピーします。
- コピーした URL からクローンを作成します。（git clone https://github.com/iwai-kentaro/wordpress-dev-tools.git）
- ![gitのURLのコピーする場所](https://github.com/iwai-kentaro/wordpress-dev-tools.git/コピー.png)
- ![clone方法](https://github.com/iwai-kentaro/wordpress-dev-tools.git/gitクローン.png)

## 環境構築手順

このプロジェクトでは Volta を使用して Node.js と npm のバージョンを管理しています。
npm install を実行すれば、volta がインストールされる。

### インストールされる環境(npm install で自動で実行されます。)

- [Volta](https://volta.sh/)
- node:v20.18.1
- npm:10.8.2
- volta install node@20.18.1
- volta install npm@10.8.2

### セットアップ手順

1. ターミナルを起動
   - VSCode 上もしくは、PC デフォルトかお好みのターミナルを起動
     - VSCode(shift + ctrl + ^)で起動
   - wordpress-dev-tools ディレクトリまで移動
2. npm install
3. docker をインストール（未実施の場合、インストール済みスキップ）
   - mac:(https://docs.docker.com/desktop/setup/install/mac-install/)
   - windows:(https://docs.docker.com/desktop/setup/install/windows-install/)
4. docker を起動
   - ターミナルで(docker compose up -d) を実行

### 環境実行

1. npm run dev

### 環境終了

1. ctrl + c を 2 回実行

### docker を終了

1. docker compose down

### 個別対応

### WordPress 管理画面

- 管理画面 URL: [http://localhost:8000/wp-admin](http://localhost:8000/wp-admin)

## docker-compose.yml

- ./wordpress/wp-content/{デフォルトは my-themes、ここに任意のファイル名を入れてください。}/my-themes:/var/www/html/wp-content/themes/{デフォルトは my-themes、ここに任意のファイル名を入れてください。}

## ファイル名を変更した場合（デフォルトは my-themes）

- package.json の内容を変更する必要があります。
- 上記ファイルを開きます。
- (mac)cmd + shift + h で my-themes を検索して、置換のところに新しく命名してください。変換すると戻すのが大変になる可能性があるので、命名には十分にご注意ください。

# wordpress-dev-tools
