// 时间更新功能
function updateDateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);

    const formattedDateTime = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
    document.getElementById("datetime").textContent = formattedDateTime;
}

// 初始化时间并设置定时器
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime(); // 立即更新一次
    setInterval(updateDateTime, 1000); // 每秒更新
});

//进度条
document.getElementById('percent').style.width = '80%';