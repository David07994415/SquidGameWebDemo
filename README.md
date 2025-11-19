## 開發框架：
### 前端：
- React：主要框架(Router)
- TypeScript：型別管理
- Tailwind：CSS 樣式管理
- Vite：編譯工具
    
### 後端：
- Supabase：資料庫(Postgre)與後台授權功能(Auth)

### 部署：
- Vercel：雲端部署

</br>

## 相關連結：
### Demo 網站連結：
### 參考網站：https://trialanderror.stanly.co
### 本網站作品僅供個人學習使用，非用於商業用途

</br>

## 主要功能：
1. 前台(Home Page)：提供使用者查閱相關競標資訊
2. 後台(Admin Page)：新增藝人資訊與上傳照片至

</br>

## 專案架構
```
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
├── README.md
├── src
|  ├── App.css
|  ├── App.tsx
|  ├── assets
|  ├── components
|  |  ├── AuctionRulePart.tsx
|  |  ├── PicSelection.tsx
|  |  ├── QAPart.tsx
|  |  └── StarCard.tsx
|  ├── hooks
|  |  └── useHash.js
|  ├── index.css
|  ├── layouts
|  |  └── MainLayout.tsx
|  ├── main.tsx
|  ├── pages
|  |  ├── Admin.tsx
|  |  ├── AuctionRule.tsx
|  |  ├── Home.tsx
|  |  ├── Stars.tsx
|  |  └── Unknown.tsx
|  └── utils
|     ├── ScrollSection.tsx
|     └── SupabaseClient.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```