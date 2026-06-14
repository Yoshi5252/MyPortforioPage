// Profile.tsx — プロフィールページ ( /profile )
// 名前・所属・スキル・SNSリンクを表示する。

import { assetUrl } from '../utils/assetUrl'

export default function Profile() {
  return (
    <div className="section">
      <h2 className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--text-muted)' }}>
        Profile
      </h2>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12">

        {/* 左カラム: 名前・所属 */}
        <div>
          {/* アイコン画像 */}
          <img
            src={assetUrl('/profile.jpg')}
            alt="吉田 有輝"
            className="w-24 h-24 rounded-full mb-6 object-cover"
            style={{ backgroundColor: 'var(--bg-secondary)' }}
          />

          {/* ここに実際の名前を入れる */}
          <h1 className="text-2xl font-semibold mb-1">吉田 有輝</h1>

          {/* 所属・肩書き — 増やす場合はここに追加 */}
          <ul className="flex flex-col gap-1 text-sm" style={{ color: 'var(--text-muted)' }}>
            <li>岐阜大学 工学部 電気電子・情報工学科 情報コース</li>
            <li>岐阜大学起業部 2025年度副部長</li>
          </ul>
        </div>

        {/* 右カラム: 自己紹介 */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
            About
          </h3>
          <p className="text-sm leading-loose" style={{ color: 'var(--text-primary)', whiteSpace: 'pre-line' }}>
            {`趣味：写真撮影・電子工作・プログラミング・旅
興味分野：HCI・メディアアート
中学生の頃から写真撮影を始め、高校では写真部に所属しました。
2025年大阪・関西万博へ10回行きました。`}
          </p>
        </div>
      </div>
    </div>
  )
}
