// WorksNav.tsx — Works セクション内のタブ切り替えナビ
// 写真とエンジニアリングのタブを切り替える。Works ページ内に配置する。

import { NavLink } from 'react-router-dom'

export default function WorksNav() {
  const tabClass = ({ isActive }: { isActive: boolean }) =>
    `px-6 py-2 text-sm tracking-widest uppercase border-b-2 transition-colors duration-200 ${
      isActive
        ? 'border-[var(--accent)] text-[var(--accent)]'
        : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)]'
    }`

  return (
    <nav
      className="flex gap-2 border-b mb-10"
      style={{ borderColor: 'var(--border)' }}
    >
      <NavLink to="/works/photo" className={tabClass}>Photo</NavLink>
      <NavLink to="/works/engineering" className={tabClass}>Engineering</NavLink>
      <NavLink to="/works/awards" className={tabClass}>Awards</NavLink>
    </nav>
  )
}
