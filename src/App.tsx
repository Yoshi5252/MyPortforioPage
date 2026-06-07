// ルーティング設定
// ページを追加する場合はここに <Route> を追記する

// GitHub Pages（サブパス配信）でリロードやサブページ直アクセスでも壊れないよう HashRouter を使用
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Photo from './pages/works/Photo'
import Engineering from './pages/works/Engineering'
import EngineeringDetail from './pages/works/EngineeringDetail'
import Awards from './pages/works/Awards'

export default function App() {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        {/* 全ページ共通のヘッダー */}
        <Header />

        {/* メインコンテンツ領域 */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/works/photo" element={<Photo />} />
            <Route path="/works/engineering" element={<Engineering />} />
            <Route path="/works/engineering/:projectId" element={<EngineeringDetail />} />
            <Route path="/works/awards" element={<Awards />} />
            {/* 404ページが必要な場合はここに <Route path="*" element={<NotFound />} /> を追加 */}
          </Routes>
        </main>

        {/* 全ページ共通のフッター */}
        <Footer />
      </div>
    </HashRouter>
  )
}
