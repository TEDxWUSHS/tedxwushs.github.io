# TEDxWUSHS Youth ウェブサイト運用ガイド

最終更新: 2026-08-16

この文書は、本リポジトリの開発、レビュー、公開、コンテンツ更新の標準手順をまとめたものです。コマンドは、`package.json`があるリポジトリ直下で実行します。`src`や`dist`へ移動して実行する必要はありません。

## 1. ブランチの役割

| ブランチ | 役割 | 直接編集 |
| --- | --- | --- |
| `main` | 開発ソースの正本 | 原則しない |
| `feature/*`、`fix/*`、`docs/*`、`chore/*` | 作業用ブランチ | ここで行う |
| `gh-pages` | GitHub Pagesへ公開するビルド済みファイル | しない |

- 新しい作業は、最新の`main`からブランチを作成します。
- `main_editable`、`Branch_nanjo`などの旧ブランチを、新規作業の起点にはしません。
- `gh-pages`は`npm run deploy`が自動更新する公開専用ブランチです。手作業で変更したり、`main`へマージしたりしません。
- 2026-08-16現在、GitHubのデフォルトブランチは`gh-pages`です。Pull Request作成時は、baseが`main`になっていることを必ず確認してください。可能であれば、GitHubのリポジトリ設定でデフォルトブランチを`main`へ変更することを推奨します。GitHub Pagesの公開元は引き続き`gh-pages`のルートを使用します。

## 2. 新しい作業を始める

最初に、未コミットの変更がないか確認します。

```powershell
git status
```

作業中の変更がないことを確認してから、`main`を最新化し、作業ブランチを作成します。

```powershell
git switch main
git pull --ff-only origin main
git switch -c feature/作業名
```

ブランチ名の例:

- 機能追加: `feature/update-speakers`
- 不具合修正: `fix/mobile-header`
- 文書のみ: `docs/update-operations`
- 設定変更: `chore/update-gitignore`

`git switch -c`には、新しいブランチの作成と、そのブランチへの切替の両方が含まれます。

## 3. ローカル開発

初回セットアップ時、または`package-lock.json`が更新されたときに依存関係をインストールします。

```powershell
npm ci
```

開発サーバーを起動します。

```powershell
npm run dev
```

ターミナルに表示されたローカルURL（通常は`http://localhost:5173/`）をブラウザで開きます。終了するときは、そのターミナルで`Ctrl+C`を押します。

### Windowsで`npm ci`が`EPERM`になる場合

`esbuild.exe`やRollupのファイルを、開発サーバーなどが使用中である可能性があります。

1. `npm run dev`や`npm run preview`を`Ctrl+C`で終了する。
2. 残っているNode.jsプロセスや、対象フォルダーを開いているツールを閉じる。
3. もう一度`npm ci`を実行する。
4. 改善しない場合は、PCを再起動してから再実行する。

通常の編集のたびに`npm ci`を実行する必要はありません。

## 4. 変更を確認する

### 4.1 開発画面

```powershell
npm run dev
```

PC幅とモバイル幅の両方で確認します。リンク、フォーム、JA/EN切替、直接URLを開いた場合の表示も確認します。

### 4.2 Lint

変更したファイルを対象にESLintを実行します。

```powershell
npx eslint src/components/変更したファイル.jsx
```

`npm run lint`はリポジトリ全体を検査しますが、現在は`.vite`の生成キャッシュと既存ファイルの警告・エラーも対象になるため、失敗することがあります。この既存問題が解消されるまでは、少なくとも変更ファイルのLintを成功させてください。

### 4.3 本番ビルド

```powershell
npm run build
```

このコマンドは次を行います。

1. Viteで公開用ファイルを`dist/`へ生成する。
2. SPAの直接アクセスに対応するため、`dist/index.html`を`dist/404.html`へコピーする。

ビルド結果をローカルで確認する場合:

```powershell
npm run preview
```

## 5. `dist`、`.vite`、`node_modules`の扱い

- `node_modules/`はローカル専用です。コミットせず、`gh-pages`にも含めません。
- `dist/`はビルドで再生成できる公開用ファイルです。開発ソースとして編集しません。
- `.vite/`はViteのローカルキャッシュです。開発ソースでも公開ファイルでもありません。
- 現在の`main`では、過去にコミットされた`dist/`と`.vite/`のファイルが追跡されています。そのため、`.gitignore`に記載されていても生成差分が表示されることがあります。
- `main`や作業ブランチへ`dist/`と`.vite/`の差分をコミットしません。生成差分だけであることを確認してから戻します。

```powershell
git restore --worktree -- dist .vite
```

このコマンドは対象ディレクトリ内の追跡済み変更を破棄します。`dist/`や`.vite/`は最初から直接編集しないでください。

将来的には、チームで合意したうえで、専用のメンテナンスPRにより両ディレクトリの追跡を解除すると、より安全に運用できます。

```powershell
git rm -r --cached dist .vite
git commit -m "chore: stop tracking generated files"
```

これは通常作業のたびに実行するコマンドではなく、一度だけ行うリポジトリ整備です。

## 6. コミットとPush

コミット前に、変更内容と対象ファイルを確認します。

```powershell
git status
git diff
```

必要な開発ソースや文書だけを明示的に追加します。

```powershell
git add src/変更ファイル docs/変更ファイル
git commit -m "feat: 変更内容"
git push -u origin feature/作業名
```

`git add .`を使用する場合は、`dist/`や`.vite/`など意図しない追跡済みファイルが含まれていないことを、コミット前に`git status`で必ず確認します。

コミットメッセージの例:

- `feat: add bilingual language switcher`
- `fix: correct mobile header layout`
- `docs: update repository operations`
- `chore: update development settings`

## 7. Pull Requestとマージ

GitHubでPull Requestを作成するときは、次の組合せにします。

```text
base: main ← compare: feature/作業名
```

確認項目:

- baseが`gh-pages`ではなく`main`になっている。
- `dist/`、`.vite/`、`node_modules/`が変更ファイルに入っていない。
- 変更内容、確認方法、残っている課題が説明されている。
- レビュー後に`main`へマージする。

マージ後、ローカルの`main`を最新化します。

```powershell
git switch main
git pull --ff-only origin main
```

不要になった作業ブランチは、マージを確認してから削除できます。

## 8. 公開手順

現在はGitHub Actionsによる自動公開が設定されていません。公開は、Pull Requestが`main`へマージされた後に、権限を持つ担当者が`main`から手動で行います。作業ブランチから公開しません。

```powershell
git switch main
git pull --ff-only origin main
npm ci
npm run deploy
```

`npm run deploy`を実行すると、`predeploy`によって先に`npm run build`が実行され、その後`gh-pages -d dist`が`dist/`の内容を`gh-pages`ブランチへPushします。

このコマンドは、開発ソースを`main`へコミットするものではありません。未コミットの変更を公開に混ぜないため、実行前に`git status`が意図した状態であることを確認してください。公開後、追跡済み`dist`に生成差分が残った場合は、内容を確認してから戻します。

```powershell
git restore --worktree -- dist
```

## 9. 独自ドメイン

独自ドメインは`www.tedxwushs.com`です。

- `public/CNAME`を削除・改名・書換えしません。
- `npm run build`で`public/CNAME`が`dist/CNAME`へコピーされます。
- `npm run deploy`でCNAMEを含む`dist/`の内容が`gh-pages`へ反映されます。
- DNS設定とGitHub PagesのCustom domain設定は、リポジトリ外でも維持する必要があります。

独自ドメインが外れた場合は、まず`public/CNAME`、`gh-pages`直下の`CNAME`、GitHub Pages設定、DNS設定の順に確認します。

## 10. JA/ENコンテンツの更新

言語切替の共通実装:

- `src/i18n/LanguageContext.jsx`: 現在の言語、保存、`html lang`、メタデータ
- `src/components/LanguageSwitcher.jsx`: JA/ENボタン
- `src/components/Header.jsx`: PC・モバイルへの配置

コンテンツを追加・変更するときの原則:

1. EN表示で、利用者に見える日本語を残さない。
2. JA表示では、`/about`とHomeの「What is TEDx?」を日本語にし、その他の既存英語見出しやブランド表現は維持する。
3. `Ideas change everything.`などの重要なブランド文言は翻訳・改変しない。
4. 新しい表示文言には、原則として同じ変更内で`ja`と`en`の両方を用意する。
5. `/about`にあるTED公式の「Your event website」ガイドへのリンクを削除しない。
6. PCとモバイルの両方でJA/ENを切り替え、全公開ルートを確認する。

メタ説明を変更する場合は、`src/i18n/LanguageContext.jsx`のJA/EN両方と、JavaScript実行前の初期値であるルートの`index.html`も確認します。

## 11. FAQ・ルート・静的ファイル

- FAQの管理用原稿は`docs/faq-questions.md`です。掲載内容を変更するときは、`src/components/FAQ.jsx`のJA/EN表示と管理用原稿を一致させます。
- ページを追加・削除するときは、`src/App.jsx`のルートと`public/sitemap.xml`を合わせて更新します。
- 検索エンジン向け設定を変えるときは、`public/robots.txt`とルートの`index.html`も確認します。
- Viteからimportする画像は`src/assets/`へ、ファイル名を変えずそのまま公開する画像やCNAMEなどは`public/`へ置きます。

### スピーカー情報を追加する場合

- 提供された原稿と写真の原本は`docs/speaker-info/`で管理します。
- サイトで使用する軽量化済み写真は`src/assets/speakers/`へ置きます。公開前に不要なEXIF情報を除去し、Web掲載とトリミングの許諾を確認します。
- JA/ENの表示データは`src/data/speakers.js`へ1名分のオブジェクトとして追加します。
- `id`は変更しない一意の値、`displayOrder`は10刻み、公開する人物は`published: true`、Homeにも掲載する人物は`featured: true`にします。
- HomeはFeatured Speakerの短い紹介、`/speakers`は公開中の全員と詳しいプロフィールを同じデータから表示します。両ページを個別に二重更新する必要はありません。
- 正式な講演タイトルが未確定の場合は、推測して追加しません。

## 12. 公開前チェックリスト

- [ ] 作業ブランチが最新の`main`から作られている。
- [ ] JA/ENの両方を確認した。
- [ ] PC幅とモバイル幅を確認した。
- [ ] 変更ファイルのLintが成功した。
- [ ] `npm run build`が成功した。
- [ ] リンク、フォーム、直接URLアクセスを確認した。
- [ ] `dist/`、`.vite/`、`node_modules/`をソースのPRへ含めていない。
- [ ] Pull Requestのbaseが`main`になっている。
- [ ] `main`へマージ後、最新の`main`から`npm run deploy`した。
- [ ] 公開サイトと独自ドメインを確認した。

## 13. 問題が起きた場合

- 開発ソースの問題: 作業ブランチまたは`main`で修正し、Pull Requestを通してから再デプロイする。
- 公開内容の問題: `gh-pages`を直接修正せず、正しい`main`を再度`npm run deploy`する。
- 公開を戻す必要がある場合: `main`上で対象変更をrevertするPull Requestを作成し、マージ後に再デプロイする。
- 判断できない変更が`git status`に出ている場合: `git restore`や削除を行う前に、誰の変更かを確認する。
