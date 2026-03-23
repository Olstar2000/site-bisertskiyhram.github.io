// Плавная прокрутка к якорям
document.addEventListener('DOMContentLoaded', function() {
    // 1. Плавная прокрутка при клике на ссылки
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Если это ссылка на "#" или пустая
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if(targetElement) {
                // Вычисляем позицию с учётом фиксированной шапки (80px)
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Обновляем URL без перезагрузки страницы (опционально)
                history.pushState(null, null, targetId);
            }
        });
    });
    
    // 2. Подсветка активного пункта меню при прокрутке
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    function highlightNavOnScroll() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const headerHeight = document.querySelector('.header').offsetHeight;
            
            if(scrollY >= (sectionTop - headerHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
    
    // 3. Текущий год в футере
    const yearSpan = document.getElementById('current-year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // 4. Кнопка "Наверх" появляется при прокрутке
    const backToTopButtons = document.querySelectorAll('.back-to-top');
    
    function toggleBackToTop() {
        if(window.scrollY > 500) {
            backToTopButtons.forEach(btn => btn.style.opacity = '1');
        } else {
            backToTopButtons.forEach(btn => btn.style.opacity = '0');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTop);
    toggleBackToTop(); // Инициализация
});