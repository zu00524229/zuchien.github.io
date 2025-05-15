<<<<<<< HEAD
// 等待 DOM 完全加載後執行
document.addEventListener("DOMContentLoaded", function () {
    // 選取所有的導航連結元素
    const navLinks = document.querySelectorAll("nav ul li a");

    // 為每個導航連結添加點擊事件
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // 防止預設的跳轉行為
            e.preventDefault();

            // 取得點擊連結的目標區段的 ID（去除 '#'）
            const targetId = this.getAttribute("href").substring(1);

            // 根據 ID 獲取目標區段元素
            const targetSection = document.getElementById(targetId);

            // 如果找到了目標區段
            if (targetSection) {
                // 取得導航欄的高度
                const navHeight = document.querySelector("nav").offsetHeight;

                // 計算目標區段的目標位置，減去導航欄高度
                const targetPosition = targetSection.offsetTop - navHeight;

                // 取得當前的滾動位置
                let currentPosition = window.pageYOffset;

                // 計算滾動的距離
                const distance = targetPosition - currentPosition;

                // 設定滾動動畫的持續時間（毫秒）
                const duration = 600;

                // 記錄動畫開始的時間
                let start = null;

                // 定義滾動動畫的步驟
                function step(timestamp) {
                    if (!start) start = timestamp; // 記錄動畫開始時間
                    const progress = timestamp - start; // 計算動畫運行進度
                    const progressRatio = progress / duration; // 計算進度比率
                    // 使用 EaseInOut 的立方體動畫來平滑滾動
                    const easedProgress =
                        progressRatio < 0.5
                            ? 4 * progressRatio * progressRatio * progressRatio // 前半段：加速
                            : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2; // 後半段：減速

                    // 根據進度來滾動頁面
                    window.scrollTo(0, currentPosition + distance * easedProgress);

                    // 如果動畫還沒有完成，繼續請求下一幀動畫
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    } else {
                        // 動畫結束，直接滾動到最終位置
                        window.scrollTo(0, targetPosition);
                    }
                }

                // 開始滾動動畫
                window.requestAnimationFrame(step);
            }
        });
    });
});

// 當頁面滾動時顯示或隱藏回到頂部按鈕
window.onscroll = function () {
    const backToTopButton = document.querySelector(".back-to-top");
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backToTopButton.style.display = "block"; // 滾動一定距離後顯示按鈕
    } else {
        backToTopButton.style.display = "none"; // 滾動回頂部後隱藏按鈕
    }
};

// 當按下回到頂部按鈕時，滾動到頁面頂部
document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // 平滑滾動至頂部
});
=======
// 等待 DOM 完全加載後執行
document.addEventListener("DOMContentLoaded", function () {
    // 選取所有的導航連結元素
    const navLinks = document.querySelectorAll("nav ul li a");

    // 為每個導航連結添加點擊事件
    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            // 防止預設的跳轉行為
            e.preventDefault();

            // 取得點擊連結的目標區段的 ID（去除 '#'）
            const targetId = this.getAttribute("href").substring(1);

            // 根據 ID 獲取目標區段元素
            const targetSection = document.getElementById(targetId);

            // 如果找到了目標區段
            if (targetSection) {
                // 取得導航欄的高度
                const navHeight = document.querySelector("nav").offsetHeight;

                // 計算目標區段的目標位置，減去導航欄高度
                const targetPosition = targetSection.offsetTop - navHeight;

                // 取得當前的滾動位置
                let currentPosition = window.pageYOffset;

                // 計算滾動的距離
                const distance = targetPosition - currentPosition;

                // 設定滾動動畫的持續時間（毫秒）
                const duration = 600;

                // 記錄動畫開始的時間
                let start = null;

                // 定義滾動動畫的步驟
                function step(timestamp) {
                    if (!start) start = timestamp; // 記錄動畫開始時間
                    const progress = timestamp - start; // 計算動畫運行進度
                    const progressRatio = progress / duration; // 計算進度比率
                    // 使用 EaseInOut 的立方體動畫來平滑滾動
                    const easedProgress =
                        progressRatio < 0.5
                            ? 4 * progressRatio * progressRatio * progressRatio // 前半段：加速
                            : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2; // 後半段：減速

                    // 根據進度來滾動頁面
                    window.scrollTo(0, currentPosition + distance * easedProgress);

                    // 如果動畫還沒有完成，繼續請求下一幀動畫
                    if (progress < duration) {
                        window.requestAnimationFrame(step);
                    } else {
                        // 動畫結束，直接滾動到最終位置
                        window.scrollTo(0, targetPosition);
                    }
                }

                // 開始滾動動畫
                window.requestAnimationFrame(step);
            }
        });
    });
});

// 當頁面滾動時顯示或隱藏回到頂部按鈕
window.onscroll = function () {
    const backToTopButton = document.querySelector(".back-to-top");
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        backToTopButton.style.display = "block"; // 滾動一定距離後顯示按鈕
    } else {
        backToTopButton.style.display = "none"; // 滾動回頂部後隱藏按鈕
    }
};

// 當按下回到頂部按鈕時，滾動到頁面頂部
document.querySelector(".back-to-top").addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" }); // 平滑滾動至頂部
});
>>>>>>> 0b7faf2 (Restart)
