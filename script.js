// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.getElementById('appointment-form');
    
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(appointmentForm);
            const formDataObj = {};
            formData.forEach((value, key) => {
                formDataObj[key] = value;
            });
            
            // 在实际应用中，这里会发送数据到服务器
            // 这里仅做模拟
            console.log('预约信息:', formDataObj);
            
            // 显示成功消息
            alert('预约提交成功！我们的顾问将尽快与您联系。');
            
            // 重置表单
            appointmentForm.reset();
        });
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 考虑固定导航栏的高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 设置日期选择器的最小日期为今天
    const dateInput = document.getElementById('preferred-date');
    if (dateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        const formattedToday = `${yyyy}-${mm}-${dd}`;
        
        dateInput.setAttribute('min', formattedToday);
    }
    
    // 简单的图片轮播效果（如果需要）
    let currentSlide = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    
    if (testimonials.length > 1) {
        // 初始化显示第一个
        testimonials.forEach((slide, index) => {
            if (index !== 0) {
                slide.style.display = 'none';
            }
        });
        
        // 每5秒切换一次
        setInterval(() => {
            testimonials[currentSlide].style.display = 'none';
            currentSlide = (currentSlide + 1) % testimonials.length;
            testimonials[currentSlide].style.display = 'block';
        }, 5000);
    }
    
    // 响应式导航栏处理
    const header = document.querySelector('header');
    
    // 滚动时改变导航栏样式
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(44, 62, 80, 0.95)';
            header.style.padding = '10px 0';
        } else {
            header.style.background = 'var(--primary-color)';
            header.style.padding = '15px 0';
        }
    });
});
