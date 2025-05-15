
document.getElementById("learn4").addEventListener("click", function () {
    Swal.fire({
        title: "第三個遊戲",
        text: "使用Pygame製作，參考DaFluffPotato創作者的教學影片，獲益良多。我修復了滑牆太久導致死亡BUG，運用衝刺閃避敵人子彈或是攻擊敵人，殲滅後進入下一關。",
        // icon: "question",
    });
});

document.getElementById("learn5").addEventListener("click", function () {
    Swal.fire({
        title: "第四個遊戲",
        text: "使用Pygame製作，參考Coder Space創作者的教學影片，太強了，居然可以寫FPS，慢慢熬也完成了，滿滿成就感~",
        // icon: "question",
    });
});

document.getElementById("learn1").addEventListener("click", function () {
    Swal.fire({
        title: "第一個遊戲",
        text: " 自學 Unity 1 個月後，嘗試做出的第一個作品，用了簡單的 Rigidbody物理碰撞與角色控制邏輯腳本， 階梯生成邏輯，UI介面、重製遊戲功能。",
        // icon: "question",
    });
});

document.getElementById("learn2").addEventListener("click", function () {
    Swal.fire({
        title: "第二個遊戲",
        text: " 使用 Unity 引擎開發的 2D 遊戲，嘗試 Player input控制系統來控制角色，運用物體生成與碰撞邏輯來做變化，讓遊戲的可玩性更高。較好維護的腳本，未來可以增加更多要素。",
        // icon: "question",
    });
});

document.getElementById("learn3").addEventListener("click", function () {
    Swal.fire({
        title: "一番賞抽獎網站",
        text: "與夥伴，使用了 Laravel、HTML、Bootstrap、JS、CSS、PHP等技術，前台顯示由後台控制，並支援資料庫的新增、刪除、修改功能。增加抽獎功能，抽到的獎項資料存入資料庫，由後台顯示並同步前台資料。",
        // icon: "question",
    });
});


// 網底圖標連結
document.querySelectorAll(".icon-container i").forEach((icon) => {
    icon.addEventListener("click", () => {
        const tooltipText = icon.getAttribute("data-tooltip");
        Swal.fire({
            position: "top-end",
            html: `<img src="images/lineQrcode.jpg" alt="QR Code" style="width: 200px; height: 200px;"/>`,
            // html: `<i class="fa-regular fa-thumbs-up" style="font-size: 30px;"></i>`, // 使用 Font Awesome 圖標
            title: tooltipText,
            showConfirmButton: false,
            timer: 3500,
        });
    });
});

document.querySelectorAll(".icon-container2 i").forEach((icon) => {
    icon.addEventListener("click", () => {
        const tooltipText = icon.getAttribute("data-tooltip");
        Swal.fire({
            position: "top-end",
            html: `<i class="fa-regular fa-thumbs-up" style="font-size: 30px;"></i>`, // 使用 Font Awesome 圖標
            title: tooltipText,
            showConfirmButton: false,
            timer: 3500,
        });
    });
});

// google聯絡表單(已完成)

// 設置按鈕點擊事件，開啟 SweetAlert2 彈出視窗顯示 Google 表單
document.getElementById("openFormBtn").addEventListener("click", function () {
    Swal.fire({
        title: "留下您的留言",
        html: `
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScyxsSOtDgTPmaQsWfscOwnde8gPbItfqFjPrFIN0caoRVv8w/viewform?usp=sharing"
                    width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0">載入中…</iframe>
            `,
        showCloseButton: true, // 顯示關閉按鈕
        showConfirmButton: false, // 隱藏確認按鈕
    });
});
