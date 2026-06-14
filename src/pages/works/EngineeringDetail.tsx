// EngineeringDetail.tsx — プロジェクト詳細ページ ( /works/engineering/:projectId )
// projects.ts のデータをIDで引いて表示する

import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import WorksNav from '../../components/WorksNav'
import { projects } from '../../data/projects'
import { assetUrl } from '../../utils/assetUrl'

export default function EngineeringDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projects.find((p) => p.id === projectId)
  const [current, setCurrent] = useState(0)

  // IDに対応するプロジェクトが見つからない場合
  if (!project) {
    return (
      <div className="section">
        <WorksNav />
        <p style={{ color: 'var(--text-muted)' }}>プロジェクトが見つかりません。</p>
        <Link to="/works/engineering" className="link-accent text-sm mt-4 inline-block">
          ← 一覧に戻る
        </Link>
      </div>
    )
  }

  return (
    <div className="section">
      <WorksNav />

      {/* 戻るリンク */}
      <Link
        to="/works/engineering"
        className="text-xs tracking-widest uppercase mb-10 inline-block link-accent"
      >
        ← Back
      </Link>

      {/* プロジェクトタイトル */}
      <h1 className="text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
        {project.title}
      </h1>

      {/* 制作期間 */}
      {project.period && (
        <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
          {project.period}
        </p>
      )}

      {/* 使用技術タグ */}
      <ul className="flex flex-wrap gap-2 list-none mb-10">
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

      {project.images && project.images.length > 0 && (() => {
        const images = project.images!
        const prev = (current - 1 + images.length) % images.length
        const next = (current + 1) % images.length
        return (
          <div className="mb-10">
            {/* メイン + 前後ナビ */}
            <div className="flex items-center gap-4 mb-3">
              <button
                onClick={() => setCurrent(prev)}
                className="shrink-0 text-xl opacity-40 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
              >
                &#8249;
              </button>

              <div className="flex-1 aspect-video overflow-hidden">
                <img
                  src={assetUrl(images[current])}
                  alt={`${project.title} ${current + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={() => setCurrent(next)}
                className="shrink-0 text-xl opacity-40 hover:opacity-100 transition-opacity"
                style={{ color: 'var(--text-primary)' }}
              >
                &#8250;
              </button>
            </div>

            {/* サムネイル一覧 */}
            <div className="flex gap-2 justify-center">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-14 aspect-video overflow-hidden transition-opacity"
                  style={{ opacity: i === current ? 1 : 0.4 }}
                >
                  <img src={assetUrl(src)} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        )
      })()}

      {/* 詳細説明 — \n\n で段落分け */}
      <div className="mb-10">
        {project.description.split('\n\n').map((para, i) => (
          <p
            key={i}
            className="text-sm leading-loose mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {para}
          </p>
        ))}
      </div>

      {/* デモリンク（設定している場合のみ表示） */}
      {project.demo && (
        <div className="flex gap-6">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase link-accent"
          >
            Demo →
          </a>
        </div>
      )}
    </div>
  )
}
