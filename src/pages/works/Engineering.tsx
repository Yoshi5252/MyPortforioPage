// Engineering.tsx — エンジニアリング作品ページ ( /works/engineering )
// プロジェクトカードの一覧を表示する。

import WorksNav from '../../components/WorksNav'

// ここに実際のプロジェクト情報を入れる
const projects = [
  {
    id: 1,
    title: 'Project Alpha',                             // プロジェクト名
    description: 'ここにプロジェクトの概要を書く。どんな課題を解決したか、何を学んだかなど。',  // 概要
    tags: ['React', 'TypeScript', 'Vite'],              // 使用技術タグ
    github: 'https://github.com/your-username/project-alpha', // GitHubリンク
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'ここに別のプロジェクトの概要を書く。',
    tags: ['Python', 'FastAPI', 'PostgreSQL'],
    github: 'https://github.com/your-username/project-beta',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'もう一つのプロジェクト概要。',
    tags: ['Next.js', 'Tailwind CSS'],
    github: 'https://github.com/your-username/project-gamma',
  },
  // プロジェクトを追加する場合はここにオブジェクトを追加する
]

export default function Engineering() {
  return (
    <div className="section">
      {/* Works 内タブナビゲーション */}
      <WorksNav />

      {/* プロジェクトカード一覧 */}
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <article
            key={project.id}
            className="p-6 border transition-colors duration-200 hover:bg-[var(--bg-hover)]"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              {/* プロジェクトタイトル */}
              <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>

              {/* GitHubリンク */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase shrink-0 link-accent"
              >
                GitHub →
              </a>
            </div>

            {/* プロジェクト概要 */}
            <p className="text-sm mb-4 leading-loose" style={{ color: 'var(--text-muted)' }}>
              {project.description}
            </p>

            {/* 使用技術タグ */}
            <ul className="flex flex-wrap gap-2 list-none">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="px-3 py-1 text-xs tracking-wide border"
                  style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
