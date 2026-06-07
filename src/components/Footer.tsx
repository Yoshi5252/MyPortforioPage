// Footer.tsx — サイト下部のフッター
// コピーライト表示のみのシンプル構成。SNSリンクを追加する場合はここに書く。

export default function Footer() {
  return (
    <footer
      className="border-t py-6 text-center text-xs tracking-widest"
      style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
    >
      {/* ここを自分の名前・年に変更 */}
      <p>© 2026 Yuki Yoshida. All rights reserved.</p>
    </footer>
  )
}
