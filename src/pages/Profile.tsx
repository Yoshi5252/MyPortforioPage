// Profile.tsx — プロフィールページ ( /profile )
// 名前・所属・スキル・SNSリンクを表示する。

export default function Profile() {
  // ここに実際のスキルリストを入れる
  const skills = [
    'TypeScript / JavaScript',
    'React / Next.js',
    'Python',
    'Photography',
    // 追加スキルをここに書く
  ]

  return (
    <div className="section">
      <h2 className="text-xs tracking-[0.3em] uppercase mb-10" style={{ color: 'var(--text-muted)' }}>
        Profile
      </h2>

      <div className="grid md:grid-cols-[1fr_2fr] gap-12">

        {/* 左カラム: 名前・所属 */}
        <div>
          {/* ここに実際のアイコン画像を入れる。現在はプレースホルダー */}
          <div
            className="w-24 h-24 rounded-full mb-6 flex items-center justify-center text-2xl"
            style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-muted)' }}
          >
            ?
          </div>

          {/* ここに実際の名前を入れる */}
          <h1 className="text-2xl font-semibold mb-1">Your Name</h1>

          {/* ここに所属・肩書きを入れる */}
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            所属 / 大学名 or 会社名
          </p>

          {/* SNS・GitHubリンク — ここに実際のURLを入れる */}
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent"
              >
                Twitter / X
              </a>
            </li>
            {/* 他のSNSはここに追加 */}
          </ul>
        </div>

        {/* 右カラム: スキルセット */}
        <div>
          <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
            Skills
          </h3>
          <ul className="flex flex-col gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-sm py-2 border-b"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                {skill}
              </li>
            ))}
          </ul>

          {/* 自己紹介テキスト — ここに詳しいプロフィール文を入れる */}
          <div className="mt-10">
            <h3 className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: 'var(--text-muted)' }}>
              About
            </h3>
            <p className="text-sm leading-loose" style={{ color: 'var(--text-primary)' }}>
              ここに自己紹介文を入れる。趣味・経歴・興味のある分野など、自由に書いてください。
              複数段落に分けたい場合は &lt;p&gt; タグを複数使う。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
