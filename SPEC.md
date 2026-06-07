# MyHomePage 仕様書

## 起動方法

```bash
# 依存パッケージのインストール（初回のみ）
npm install

# 開発サーバー起動（ホットリロードあり）
npm run dev
# → http://localhost:5173 で開く

# 本番ビルド
npm run build
# → dist/ に成果物が出力される

# ビルド結果のプレビュー確認
npm run preview
```

---

## 技術スタック

| ツール | 用途 |
|---|---|
| Vite 5 | ビルドツール・開発サーバー |
| React 18 | UIフレームワーク |
| TypeScript 5 | 型チェック |
| React Router DOM 6 | クライアントサイドルーティング |
| Tailwind CSS 3 | ユーティリティCSSクラス |

---

## URL構成

| URL | ページ |
|---|---|
| `/` | Home |
| `/profile` | Profile |
| `/works/photo` | 写真作品一覧 |
| `/works/engineering` | エンジニアリング作品一覧 |
| `/works/engineering/:projectId` | エンジニアリング作品詳細 |

---

## ファイル構成と役割

```
src/
├── main.tsx                         # エントリーポイント。ReactDOM.createRoot でAppをマウント
├── App.tsx                          # ルーティング定義。ページを追加するときはここに <Route> を追記
├── styles/
│   └── global.css                   # CSS変数・リセット・共通スタイル
├── components/
│   ├── Header.tsx                   # 全ページ共通のナビゲーションバー（sticky）
│   ├── Footer.tsx                   # 全ページ共通のフッター（コピーライト表示）
│   └── WorksNav.tsx                 # Works内のタブ切り替えナビ（Photo / Engineering）
├── pages/
│   ├── Home.tsx                     # トップページ ( / )
│   ├── Profile.tsx                  # プロフィールページ ( /profile )
│   └── works/
│       ├── Photo.tsx                # 写真作品一覧 ( /works/photo )
│       ├── Engineering.tsx          # エンジニアリング作品一覧 ( /works/engineering )
│       └── EngineeringDetail.tsx    # プロジェクト詳細 ( /works/engineering/:projectId )
└── data/
    └── projects.ts                  # エンジニアリング作品のデータ定義（ここを編集してコンテンツを追加）
```

---

## コンテンツの編集方法

### エンジニアリング作品を追加・編集する

[src/data/projects.ts](src/data/projects.ts) の `projects` 配列にオブジェクトを追加する。

```ts
{
  id: 'my-project',          // URLに使うID（英数字とハイフンのみ）
  title: 'My Project',       // プロジェクト名
  summary: '短い概要',        // 一覧ページのカードに表示
  description: '詳細説明',   // 詳細ページに表示。\n\n で段落分け
  tags: ['React', 'Go'],     // 使用技術タグ
  github: 'https://...',     // GitHubリンク
  demo: 'https://...',       // デモURL（任意）
  period: '2025.01 – 2025.03', // 制作期間（任意）
}
```

### サイト全体の配色を変える

[src/styles/global.css](src/styles/global.css) の `:root` ブロックにある CSS変数を編集する。

```css
:root {
  --bg-primary: #0a0a0a;    /* メイン背景色 */
  --accent: #e0e0e0;        /* アクセントカラー */
  /* ... */
}
```

### ナビゲーションに名前を変える

[src/components/Header.tsx](src/components/Header.tsx) の `Yuki Yoshida` テキストを書き換える。  
[src/components/Footer.tsx](src/components/Footer.tsx) のコピーライト表記も同様に変更する。

### 新しいページを追加する

1. `src/pages/` にコンポーネントファイルを作成する
2. [src/App.tsx](src/App.tsx) に `<Route path="/新しいパス" element={<NewPage />} />` を追記する
3. 必要であれば [src/components/Header.tsx](src/components/Header.tsx) にナビリンクを追加する
