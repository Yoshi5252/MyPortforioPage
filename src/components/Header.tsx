// Header.tsx — サイト上部のナビゲーションバー
// 全ページで共通表示される。アクティブなリンクをハイライトする。

import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-widest uppercase transition-colors duration-200 ${
      isActive
        ? 'text-[var(--accent)]'
        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
    }`

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--border)' }}
    >
      <nav className="max-w-[900px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* サイトロゴ／名前 — ここを自分の名前に変更 */}
        <NavLink to="/" className="text-sm font-semibold tracking-widest uppercase text-[var(--accent)]">
          Yuki Yoshida
        </NavLink>

        {/* ナビゲーションリンク */}
        <ul className="flex gap-8 list-none">
          <li><NavLink to="/" end className={linkClass}>Home</NavLink></li>
          <li>
            {/* Works はサブページがあるので /works/* でアクティブ判定 */}
            <NavLink
              to="/works/photo"
              className={({ isActive }) =>
                linkClass({ isActive: isActive || location.pathname.startsWith('/works') })
              }
            >
              Works
            </NavLink>
          </li>
          <li><NavLink to="/profile" className={linkClass}>Profile</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
