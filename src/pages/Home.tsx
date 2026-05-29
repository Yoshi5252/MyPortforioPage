// Home.tsx — トップページ ( / )
// キャッチコピー・自己紹介・各ページへのナビゲーションを表示する。

import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="section flex flex-col justify-center min-h-[80vh]">

      {/* キャッチコピー — ここに自分の言葉を入れる */}
      <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
        Photographer &amp; Engineer
      </p>
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6" style={{ color: 'var(--accent)' }}>
        {/* ここにキャッチコピーを入れる */}
        Capturing moments,<br />building things.
      </h1>

      {/* 自己紹介の一文 — ここに自分の紹介文を入れる */}
      <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: 'var(--text-muted)' }}>
        日本語でも英語でもOK。自分らしい一文をここに書く。
      </p>

      {/* 各ページへのナビゲーション */}
      <nav className="flex flex-wrap gap-4">
        <Link
          to="/profile"
          className="px-6 py-2 border text-sm tracking-widest uppercase transition-colors duration-200 hover:bg-[var(--bg-hover)]"
          style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
        >
          Profile
        </Link>
        <Link
          to="/works/photo"
          className="px-6 py-2 border text-sm tracking-widest uppercase transition-colors duration-200 hover:bg-[var(--bg-hover)]"
          style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
        >
          Photo Works
        </Link>
        <Link
          to="/works/engineering"
          className="px-6 py-2 border text-sm tracking-widest uppercase transition-colors duration-200 hover:bg-[var(--bg-hover)]"
          style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
        >
          Engineering
        </Link>
      </nav>
    </div>
  )
}
