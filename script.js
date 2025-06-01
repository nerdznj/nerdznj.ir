document.addEventListener('DOMContentLoaded', () => {
    // افکت تایپ اسم (برای صفحه اصلی)
    const nameElement = document.querySelector('#home h1 span');
    if (nameElement) {
        const nameText = 'امین تقی بیگلو';
        let index = 0;

        function typeName() {
            if (index < nameText.length) {
                nameElement.textContent += nameText.charAt(index);
                index++;
                setTimeout(typeName, 100);
            }
        }

        nameElement.textContent = '';
        typeName();
    }

    // سوئیچ تم با localStorage
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        function updateTheme() {
            if (body.classList.contains('bg-[#0a0a0a]')) {
                body.classList.replace('bg-[#0a0a0a]', 'bg-[#f0f0f0]');
                body.classList.replace('text-white', 'text-[#0a0a0a]');
                document.querySelectorAll('.card').forEach(card => {
                    card.classList.replace('bg-black', 'bg-white');
                    card.classList.replace('bg-opacity-80', 'bg-opacity-90');
                });
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = 'تغییر تم (تیره)';
            } else {
                body.classList.replace('bg-[#f0f0f0]', 'bg-[#0a0a0a]');
                body.classList.replace('text-[#0a0a0a]', 'text-white');
                document.querySelectorAll('.card').forEach(card => {
                    card.classList.replace('bg-white', 'bg-black');
                    card.classList.replace('bg-opacity-90', 'bg-opacity-80');
                });
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = 'تغییر تم (روشن)';
            }
            console.log('Theme updated to:', localStorage.getItem('theme')); // دیباگ
        }

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            updateTheme();
        }

        themeToggle.addEventListener('click', updateTheme);
    }

    // منوی همبرگری موبایل
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu-items');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('animate-slide-in');
        });
    }

    // بک‌گراند انیمیشن
    const background = document.querySelector('.background-animation');
    if (background) {
        for (let i = 0; i < 50; i++) {
            const span = document.createElement('span');
            const char = String.fromCharCode(0x30A0 + Math.random() * 96);
            span.textContent = char;
            span.style.left = Math.random() * 100 + '%';
            span.style.animationDuration = Math.random() * 10 + 10 + 's';
            span.style.animationDelay = Math.random() * 5 + 's';
            background.appendChild(span);
        }
    }

    // اسکرول نرم
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('animate-slide-in');
            }
        });
    });

    // انیمیشن هاور برای لینک‌های اجتماعی
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2)';
        });
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // غیرفعال کردن کلیک راست
    document.addEventListener('contextmenu', e => e.preventDefault());
});
