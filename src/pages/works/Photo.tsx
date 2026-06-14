// Photo.tsx — 写真作品ページ ( /works/photo )
// justified-gallery 方式: 全写真が同じ高さかつ行幅いっぱいに収まる

import { useState, useEffect, useRef } from 'react'
import WorksNav from '../../components/WorksNav'
import { assetUrl } from '../../utils/assetUrl'

type PhotoItem = { id: number; src: string; alt: string }
type Series   = { id: number; title: string; comment: string; photos: PhotoItem[] }

const series: Series[] = [
  {
    id: 1,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series1/1-MG_0173.jpg',  alt: '写真1' },
      { id: 2, src: '/photos/series1/2-IMG_0821.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series1/3-DSC0526.jpg',  alt: '写真3' },
    ],
  },
  {
    id: 2,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series2/1-_DSC3448.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series2/2-_DSC3519.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series2/3-_DSC3443.jpg', alt: '写真3' },
    ],
  },
  {
    id: 3,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series3/1-_DSC1756.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series3/2-_DSC4068.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series3/3-IMG_0847.jpg', alt: '写真3' },
    ],
  },
  {
    id: 4,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series4/1-IMG_3580.jpg',  alt: '写真1' },
      { id: 2, src: '/photos/series4/2-IMG_3815.jpg',  alt: '写真2' },
      { id: 3, src: '/photos/series4/3-_DSC0616.jpg',  alt: '写真3' },
    ],
  },
  {
    id: 5,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series5/1-IMG_0747.jpg',  alt: '写真1' },
      { id: 2, src: '/photos/series5/2-_DSC1495.jpg',  alt: '写真2' },
      { id: 3, src: '/photos/series5/3-IMG_0815.jpg',  alt: '写真3' },
      { id: 4, src: '/photos/series5/4-_MG_4748.jpg',  alt: '写真4' },
      { id: 5, src: '/photos/series5/5-_DSC1515.jpg',  alt: '写真5' },
    ],
  },
  {
    id: 6,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series6/1-IMG_0239.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series6/2-IMG_0250.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series6/3-IMG_0247.jpg', alt: '写真3' },
      { id: 4, src: '/photos/series6/4-IMG_0229.jpg', alt: '写真4' },
      { id: 5, src: '/photos/series6/5-IMG_0236.jpg', alt: '写真5' },
      { id: 6, src: '/photos/series6/6-IMG_0278.jpg', alt: '写真6' },
    ],
  },
  {
    id: 7,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series7/1-IMG_0237.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series7/2-IMG_0261.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series7/3-IMG_0263.jpg', alt: '写真3' },
      { id: 4, src: '/photos/series7/4-IMG_0267.jpg', alt: '写真4' },
      { id: 5, src: '/photos/series7/5-IMG_0264.jpg', alt: '写真5' },
    ],
  },
  {
    id: 8,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series8/1-_DSC4127.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series8/2-_DSC4112.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series8/3-_DSC3950.jpg', alt: '写真3' },
    ],
  },
  {
    id: 9,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series9/1-_DSC4295.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series9/2-_DSC4267.jpg', alt: '写真2' },
      { id: 3, src: '/photos/series9/3-_DSC4307.jpg', alt: '写真3' },
    ],
  },
  {
    id: 10,
    title: '',
    comment: '',
    photos: [
      { id: 1, src: '/photos/series10/1-_DSC0774.jpg', alt: '写真1' },
      { id: 2, src: '/photos/series10/2-_DSC0745.jpg', alt: '写真2' },
    ],
  },
]

const MAX_HEIGHT = 240 // px — この高さを超えない範囲で行高さを決める
const GAP        = 4  // px


export default function Photo() {
  const [currentMap, setCurrentMap] = useState<Record<number, number>>({})
  const [arMap,      setArMap]      = useState<Record<string, number>>({})
  const [rowW,       setRowW]       = useState(0)
  const [lightbox,   setLightbox]   = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // コンテナ幅を監視
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setRowW(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const getCurrent = (id: number) => currentMap[id] ?? 0
  const setCurrent = (id: number, i: number) =>
    setCurrentMap(prev => ({ ...prev, [id]: i }))

  const onLoad = (src: string, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget
    setArMap(prev => ({ ...prev, [src]: img.naturalWidth / img.naturalHeight }))
  }

  // 指定の写真群が availW にぴったり収まる行高さを返す（MAX_HEIGHT 以下）
  const rowHeight = (photos: PhotoItem[], availW: number) => {
    if (availW <= 0 || photos.length === 0) return MAX_HEIGHT
    const totalAR = photos.reduce((s, p) => s + (arMap[p.src] ?? 1.5), 0)
    const gaps    = (photos.length - 1) * GAP
    return Math.min(MAX_HEIGHT, (availW - gaps) / totalAR)
  }

  const renderRow = (photos: PhotoItem[], h: number) =>
    photos.map(photo => (
      <img
        key={photo.src}
        src={assetUrl(photo.src)}
        alt={photo.alt}
        style={{ height: h, width: (arMap[photo.src] ?? 1.5) * h, flexShrink: 0 }}
        className="cursor-pointer block"
        onLoad={e => onLoad(photo.src, e)}
        onClick={() => setLightbox(assetUrl(photo.src))}
      />
    ))

  return (
    <div className="section" ref={sectionRef}>
      <WorksNav />

      <div className="flex flex-col gap-16">
        {series.map(s => {
          if (s.photos.length >= 4) {
            const start   = getCurrent(s.id)
            const visible = s.photos.slice(start, start + 4)
            const carouselW = rowW > 0 ? rowW - 72 : 0
            const h         = rowHeight(visible, carouselW)
            const canPrev   = start > 0
            const canNext   = start + 4 < s.photos.length
            return (
              <article key={s.id}>
                <div className="flex items-center gap-1 mb-4">
                  <button
                    onClick={() => setCurrent(s.id, start - 1)}
                    className="shrink-0 w-8 text-xl text-center transition-opacity"
                    style={{ color: 'var(--text-primary)', opacity: canPrev ? 1 : 0.2, pointerEvents: canPrev ? 'auto' : 'none' }}
                  >&#8249;</button>

                  <div style={{ display: 'flex', gap: GAP, height: h, overflow: 'hidden' }}>
                    {renderRow(visible, h)}
                  </div>

                  <button
                    onClick={() => setCurrent(s.id, start + 1)}
                    className="shrink-0 w-8 text-xl text-center transition-opacity"
                    style={{ color: 'var(--text-primary)', opacity: canNext ? 1 : 0.2, pointerEvents: canNext ? 'auto' : 'none' }}
                  >&#8250;</button>
                </div>
                <h2 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h2>
                <p className="text-sm leading-loose max-w-2xl" style={{ color: 'var(--text-muted)' }}>{s.comment}</p>
              </article>
            )
          }

          const h = rowHeight(s.photos, rowW)
          return (
            <article key={s.id}>
              <div style={{ display: 'flex', gap: GAP, height: h, overflow: 'hidden', marginBottom: 16 }}>
                {renderRow(s.photos, h)}
              </div>
              <h2 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{s.title}</h2>
              <p className="text-sm leading-loose max-w-2xl" style={{ color: 'var(--text-muted)' }}>{s.comment}</p>
            </article>
          )
        })}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-[90vw] max-h-[90vh] object-contain" />
        </div>
      )}
    </div>
  )
}
