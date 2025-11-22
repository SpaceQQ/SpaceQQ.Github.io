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

// 页面加载动画
function initPageAnimations() {
    // 为所有软件卡片添加交错动画
    const cards = document.querySelectorAll('.software-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${0.1 + index * 0.1}s`;
    });
    
    // 为信息卡片添加交错动画
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach((card, index) => {
        card.style.animationDelay = `${0.2 + index * 0.1}s`;
    });
}

// 初始化时间并设置定时器
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime(); // 立即更新一次
    setInterval(updateDateTime, 1000); // 每秒更新
    
    initPageAnimations();
    
    // 添加按钮点击效果
    const buttons = document.querySelectorAll('.download-btn, .official-link, .social-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 添加点击涟漪效果
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.6);
                transform: scale(0);
                animation: ripple 0.6s linear;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// 添加涟漪动画
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

//进度条
document.getElementById('percent').style.width = '80%';