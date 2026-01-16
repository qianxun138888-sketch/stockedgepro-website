// 简单的表单提交交互（示例，实际需连接后端）
document.addEventListener('DOMContentLoaded', function() {
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(event) {
            event.preventDefault(); // 阻止表单默认提交
            const emailInput = this.querySelector('input[type="email"]');
            const userEmail = emailInput.value.trim();
            
            if (!userEmail) {
                alert('请输入有效的邮箱地址。');
                return;
            }
            
            // 此处仅为前端示例。实际应用中，应将此数据发送至您的服务器。
            alert(`感谢订阅！更新将发送至：${userEmail}\n\n（此为前端演示，请配置后端以处理真实数据。）`);
            emailInput.value = ''; // 清空输入框
        });
    }
    
    // 平滑滚动导航（可选增强功能）
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('StockEdge Pro 网站已加载完毕。');
});
