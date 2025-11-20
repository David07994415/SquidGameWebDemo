## 開發框架：
### 前端：
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
- **React**：前端框架搭配 `React Router` 進行路由管理
- **TypeScript**：加入`型別管理`
- **Tailwind**：`CSS 樣式`管理
- **Vite**：建構工具

### 後端：
![Supabase](https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql&logoColor=white)
- **Supabase**：快速實作`資料庫(Postgre)`與`後台授權(Auth)`功能

### 部署：
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)
- **Vercel**：快速雲端部署

## 相關連結：
- **Demo 網站連結**：https://squid-game-web-demo-qzbw.vercel.app/
- **參考網站**：https://trialanderror.stanly.co

## License
`此專案僅供個人學習使用，無任何商用行為，並禁止商業用途。`

## 主要功能：
1. **前台(Home Page)**：提供使用者查閱相關競標資訊
2. **後台(Admin Page)**：提供管理者新增藝人資訊與上傳照片資料庫

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
|  |  ├── PageTitlePart.tsx
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
|  |  ├── Delivery.tsx
|  |  ├── Home.tsx
|  |  ├── Payment.tsx
|  |  ├── Privacy.tsx
|  |  ├── Refund.tsx
|  |  ├── Stars.tsx
|  |  └── Unknown.tsx
|  └── utils
|     ├── ScrollSection.tsx
|     └── SupabaseClient.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```