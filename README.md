# Jiajun Xiao · Portfolio (v2)

Next.js 15 靜態網站。**所有文字都在 `content/site.ts`**，改內容只改這個檔案。

## 1. 放圖片
把你資料夾裡的圖直接複製到 `public/images/`，檔名不用改：
A01.png A02.png · B01–B06.jpg · C1–C4.jpg · D1–D3.png · E1–E2.png
（流程圖 diagram-*.svg 已經放好了）

- A 馬克杯、B Embrace、C GoDirect → Product & UX
- D 素食餐廳、E 台中咖啡館 → Spatial
- 每個專案的第 1 張是封面，其餘在案例頁下方
- 找不到的圖會顯示「Missing /images/xxx」，不會壞掉

## 2. 補 TODO
在 `content/site.ts` 搜尋 `TODO`。還沒填的 TODO **不會顯示在網站上**，所以可以先上線再慢慢補。
最值得先補的：GoDirect 的關鍵設計決定、Embrace 是給誰用、怎麼互動。

## 3. 本機預覽
```
npm install
npm run dev      # http://localhost:3000
```

## 4. 部署到 Vercel
1. GitHub 建新 repo（例如 portfolio），把整個資料夾推上去
2. vercel.com → 用 GitHub 登入 → Add New → Project → 選 repo → Deploy
3. Settings → Domains 可以把網址改成 jiajunxiao.vercel.app 之類

## CV
`public/Jiajun_Xiao_CV.pdf`，換 CV 直接覆蓋。
