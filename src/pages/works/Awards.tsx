// Awards.tsx — コンテスト・受賞歴ページ ( /works/awards )
// awards 配列にデータを追加していく

import { useState } from 'react'
import WorksNav from '../../components/WorksNav'
import { assetUrl } from '../../utils/assetUrl'

type Award = {
  type: '受賞' | '出場' | '応募'
  year: string
  contest: string
  category?: string
  work?: string
  result: string
  detail?: string
  image?: string
  link?: string
}

const awards: Award[] = [
    {
    type: '受賞',
    year: '2024',
    contest: '東京大学 松尾・岩沢研究室 GCI修了',
    category: '',
    work: '',
    result: '修了',
    detail: '',
    image: '/awards/6_GCI1.png',
    link: '',
  },
    {
    type: '受賞',
    year: '2025',
    contest: '東京大学 松尾・岩沢研究室 DeepLearning基礎講座 修了',
    category: '',
    work: '',
    result: '修了',
    detail: '',
    image: '/awards/7_DL1.png',
    link: '',
  },
  {
    type: '受賞',
    year: '2023',
    contest: '令和４年度関市教育委員会表彰',
    category: '',
    work: '',
    result: '表彰',
    detail: '',
    image: '',
    link: 'https://www.city.seki.lg.jp/cmsfiles/contents/0000019/19171/05-2.pdf',
  },
  {
    type: '受賞',
    year: '2021',
    contest: 'CAPA月例フォトコン学生の部',
    category: '',
    work: 'タマシイ',
    result: '1席',
    detail: '2021年12月号',
    image: '/awards/1_211118students01.jpg',
    link: 'https://getnavi.jp/capa/special/385581/',
  },
  {
    type: '受賞',
    year: '2022',
    contest: 'CAPA月例フォトコン学生の部',
    category: '',
    work: '忘れられない夏の旅',
    result: '2席',
    detail: '2022年12月号',
    image: '/awards/2_221120students02.jpg',
    link: 'https://getnavi.jp/capa/news/421939/',
  },  
  {
    type: '受賞',
    year: '2023',
    contest: 'CAPA月例フォトコン学生の部',
    category: '',
    work: '独り占め',
    result: '入選',
    detail: '2023年3月号',
    image: '',
    link: 'https://getnavi.jp/capa/special/430296/',
  },
  {
    type: '受賞',
    year: '2021',
    contest: '第７回 東海地区高校生フォトコンテスト',
    category: '',
    work: '憧れ',
    result: '入賞',
    detail: '展示\nソニーストア 名古屋内ギャラリー\n2022年2月12日(土) ～ 2月24日(木)',
    image: '/awards/4_24.jpg',
    link: 'https://www.sony.jp/store/retail/event/nagoya/hs_photocon_7/?srsltid=AfmBOoqcYTwfmxOpmt6cjdyyXotNZv9ipOwCWBx5XcYDFrOJ_Q6gfgQc',
  },    
  {
    type: '受賞',
    year: '2020',
    contest: '第６回 東海地区高校生フォトコンテスト',
    category: '',
    work: '激走',
    result: '入賞',
    detail: '展示\nソニーストア 名古屋内ギャラリー\n2021年2月13日(土) ～ 2月26日(金)',
    image: '/awards/3_17.jpg',
    link: 'https://www.sony.jp/store/retail/event/nagoya/hs_photocon_6/?srsltid=AfmBOopRNsjU2_U2DMZpJQvXeSR_9guxKVTRkOnEi3dmQL3SXz1IKfuV',
  },    
  {
    type: '受賞',
    year: '2022',
    contest: 'TopEyeフォトコンテスト',
    category: '',
    work: 'あの日の記憶',
    result: '入賞',
    detail: '展示\nニコンプラザ東京 THE GALLERY\n2023年3月14日（火）～2023年3月27日（月）\nニコンプラザ大阪 THE GALLERY\n2023年4月6日（木）～2023年4月19日（水）',
    image: '/awards/5_2X9A0392.jpg',
    link: 'hhttps://nij.nikon.com/cms/connect/topeye/pdf/TopEye315.pdf?srsltid=AfmBOormnUnX2cXM4b8JA-pKACPnhzvXYoX4c8F2mekKRNXTJRUQQ2_f',
  },     
  
  


  {
    type: '出場',
    year: '2025',
    contest: 'メーテレハッカソン Electric Sheep',
    work: '',
    result: '出場',
    image: '',
    link: '',
  },
    {
    type: '出場',
    year: '2026',
    contest: 'Tongali ビジネスプランコンテスト',
    work: '',
    result: '準決勝',
    image: '',
    link: '',
  },
    {
    type: '出場',
    year: '2026',
    contest: 'IPA 未踏IT人材発掘・育成事業',
    work: '感覚的言語表現と個人差学習による写真編集システムの構築',
    result: '未採択',
    image: '',
    link: '',
  },

]

function AwardRow({ a, onOpen }: { a: Award; onOpen: (src: string) => void }) {
  return (
    <div className="py-6 border-b" style={{ borderColor: 'var(--border)' }}>
      <div className="flex gap-6">
        {/* 画像エリア — 常に固定サイズ */}
        <div className="shrink-0 w-24 h-16 overflow-hidden flex items-center justify-center"
          style={{ backgroundColor: 'var(--bg-secondary)' }}>
          {a.image
            ? <img src={assetUrl(a.image)} alt={a.work ?? a.contest} className="w-full h-full object-cover cursor-pointer"
                onClick={() => onOpen(assetUrl(a.image!))} />
            : <span className="text-xs" style={{ color: 'var(--text-muted)' }}>No Image</span>
          }
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4 mb-1">
            <p className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
              {a.contest}
            </p>
            <span className="text-xs tracking-widest shrink-0" style={{ color: 'var(--accent)' }}>
              {a.result}
            </span>
          </div>

          {(a.category || a.work) && (
            <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
              {[a.category, a.work].filter(Boolean).join(' — ')}
            </p>
          )}

          {a.detail && (
            <p className="text-sm leading-loose mb-2" style={{ color: 'var(--text-muted)', whiteSpace: 'pre-wrap' }}>
              {a.detail}
            </p>
          )}

          {a.link && (
            <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-xs break-all link-accent">
              {a.link}
            </a>
          )}
        </div>

        <span className="text-sm shrink-0" style={{ color: 'var(--text-muted)' }}>{a.year}</span>
      </div>
    </div>
  )
}

function Section({ label, items, onOpen }: { label: string; items: Award[]; onOpen: (src: string) => void }) {
  if (items.length === 0) return null
  return (
    <div className="mb-16">
      <h2 className="text-xs tracking-widest uppercase mb-6" style={{ color: 'var(--text-muted)' }}>
        {label}
      </h2>
      {items.map((a, i) => <AwardRow key={i} a={a} onOpen={onOpen} />)}
    </div>
  )
}

export default function Awards() {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const won   = awards.filter(a => a.type === '受賞')
  const entry = awards.filter(a => a.type === '出場')

  return (
    <div className="section">
      <WorksNav />
      <Section label="受賞" items={won} onOpen={setLightbox} />
      <Section label="出場" items={entry} onOpen={setLightbox} />

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
