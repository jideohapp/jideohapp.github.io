# 記得歐官方網站整合部署包

這份資料夾已把原本尚未發布的「記得歐官方網站」與 Google Play 開發人員網站需求整合在一起。網站包含品牌介紹、核心功能、APP 畫面、隱私說明、聯絡資訊與 AdMob `app-ads.txt`。

## 目前狀態

- 可作為「記得歐官方網站」。
- 可作為 Google Play 的「開發人員網站」。
- 根目錄已包含 AdMob 驗證需要的 `app-ads.txt`。
- 隱私權政策連到目前 App 使用的公開網址：`https://a23118872002.github.io/jideoh-privacy-policy/`。
- 聯絡信箱已統一為：`jideohstudio@outlook.com`。
- 尚未公開部署。

## 正式部署時要做的事

1. 將本資料夾的內容部署到選定的靜態網站服務。
2. 確認首頁正式網址可以公開開啟。
3. 確認 `https://正式網域/app-ads.txt` 可以直接開啟，而且只顯示指定的一行內容。
4. 將首頁正式網址填入 Google Play Console 的「開發人員網站」。
5. 返回 AdMob 等候重新檢索與驗證。

## app-ads.txt

檔案必須保留在部署網站的網域根目錄，內容不可變更：

`google.com, pub-3305653781644134, DIRECT, f08c47fec0942fa0`

若使用 GitHub Pages 的專案網站（網址包含 repository 子路徑），AdMob 的網域根目錄規則可能無法直接對應。正式發布時應優先使用：

- GitHub Pages 帳號根網站 `https://帳號.github.io/`；或
- 自訂網域；或
- Firebase Hosting 提供的根網域。

正式發布完成後，再以實際網址決定 Google Play 要填的完整網址。

## 維護位置

- 首頁內容：`index.html`
- 視覺樣式：`styles.css`
- 畫面輪播與手機選單：`script.js`
- 圖片素材：`assets/` 與根目錄的 APP 畫面 PNG
- AdMob 驗證：`app-ads.txt`
