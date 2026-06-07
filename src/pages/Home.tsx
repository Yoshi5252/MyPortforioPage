// Home.tsx — トップページ ( / )
// キャッチコピー・自己紹介・各ページへのナビゲーションを表示する。

import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* 背景写真 — うっすら表示 */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${assetUrl('/bg-home.jpg')})`, opacity: 0.18 }}
      />

      <div className="section relative flex flex-col justify-center min-h-[80vh]">
        {/* キャッチコピー — ここに自分の言葉を入れる */}
        <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
          Photographer &amp; Engineer
        </p>
        <h3 className="text-2xl md:text-3xl font-semibold leading-tight mb-6" style={{ color: 'var(--accent)' }}>
          吉田有輝のポートフォリオサイト
        </h3>

        {/* 自己紹介の一文 — ここに自分の紹介文を入れる */}
        <p className="text-base md:text-lg max-w-xl mb-12" style={{ color: 'var(--text-muted)' }}>
          ようこそ
        </p>

        {/* 各ページへのナビゲーション */}
        <nav className="flex flex-wrap gap-6">
          {[
            { to: '/profile',          label: 'プロフィールはこちら', name: 'Profile' },
            { to: '/works/photo',      label: '写真作品はこちら',     name: 'Photo Works' },
            { to: '/works/engineering',label: '制作物はこちら',       name: 'Engineering' },
            { to: '/works/awards',     label: '受賞歴、参加歴はこちら', name: 'Awards' },
          ].map(({ to, label, name }) => (
            <Link key={to} to={to} className="flex flex-col gap-1 group">
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
              <span
                className="px-6 py-2 border text-sm tracking-widest uppercase transition-colors duration-200 group-hover:bg-[var(--bg-hover)]"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >{name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
