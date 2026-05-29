// Photo.tsx — 写真作品ページ ( /works/photo )
// 写真のグリッドギャラリーを表示する。

import WorksNav from '../../components/WorksNav'

// ここに実際の写真データを入れる。
// src: 実際の画像パス or URL、alt: 写真の説明
const photos = [
  { id: 1, src: '', alt: 'Photo 1' },
  { id: 2, src: '', alt: 'Photo 2' },
  { id: 3, src: '', alt: 'Photo 3' },
  { id: 4, src: '', alt: 'Photo 4' },
  { id: 5, src: '', alt: 'Photo 5' },
  { id: 6, src: '', alt: 'Photo 6' },
]

export default function Photo() {
  return (
    <div className="section">
      {/* Works 内タブナビゲーション */}
      <WorksNav />

      {/* 写真グリッド */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square flex items-center justify-center text-xs"
            style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
          >
            {/* ここに実際の <img> タグを入れる */}
            {/* 例: <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" /> */}
            <span>{photo.alt}</span>
          </div>
        ))}
      </div>

      {/* 写真を追加するには photos 配列に要素を追加するだけでOK */}
    </div>
  )
}
