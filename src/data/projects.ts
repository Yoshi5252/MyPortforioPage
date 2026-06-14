// projects.ts — エンジニアリング作品のデータ定義
// プロジェクトを追加・編集する場合はこの配列を変更する

export type Project = {
  id: string           // URLに使うID（英数字ハイフンのみ）
  title: string        // プロジェクト名
  summary: string      // 一覧ページに表示する短い概要
  description: string  // 詳細ページに表示する長い説明
  tags: string[]       // 使用技術タグ
  demo?: string        // デモサイトURL（任意）
  period?: string      // 制作期間（任意）
  images?: string[]    // 詳細ページのスクリーンショット（例: '/engineering/project-id/01.jpg'）
}

// ここに実際のプロジェクトデータを入れる
export const projects: Project[] = [
  {
    id: 'Persistence of Vision',
    title: 'Persistence of Vision',
    summary: '残像を利用したディスプレイ',
    description:
      '光は積分され、実態があるように振る舞う。',
    tags: ['Arduino', 'Python'],
    demo: '',
    period: '2026.05',
    images: [
      '/engineering/project-POV/1-_DSC4408.jpg',
      '/engineering/project-POV/3-_DSC4403.jpg',
      '/engineering/project-POV/4-_DSC4401.jpg',
      '/engineering/project-POV/2-_DSC4407.jpg',
    ],
  },
  {
    id: '浮遊し光るSF空間の花の模型',
    title: '浮遊し光るSF空間の花の模型',
    summary: 'メーテレハッカソン Electric Sheep 2025 で制作したプロジェクト',
    description: '',
    tags: ['Arduino'],
    period: '2025.09',
        images: [
      '/engineering/project-beta/ES_1.png',
      '/engineering/project-beta/ES_2.png',
    ],
  },

]
