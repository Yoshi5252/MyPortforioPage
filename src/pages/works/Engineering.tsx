// Engineering.tsx — エンジニアリング作品一覧 ( /works/engineering )
// 各プロジェクトカードをクリックすると個別ページに遷移する

import { Link } from 'react-router-dom'
import WorksNav from '../../components/WorksNav'
import { projects } from '../../data/projects'

export default function Engineering() {
  return (
    <div className="section">
      <WorksNav />

      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/works/engineering/${project.id}`}
            className="block p-6 border transition-colors duration-200 hover:bg-[var(--bg-hover)]"
            style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              {project.period && (
                <span className="text-xs shrink-0" style={{ color: 'var(--text-muted)' }}>
                  {project.period}
                </span>
              )}
            </div>

            <div className="flex gap-4 mb-4">
              <p className="text-sm leading-loose flex-1" style={{ color: 'var(--text-muted)' }}>
                {project.summary}
              </p>
              {project.images && project.images.length > 0 && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-24 w-auto object-contain self-start shrink-0"
                />
              )}
            </div>

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
          </Link>
        ))}
      </div>
    </div>
  )
}
