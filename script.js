
document.addEventListener('DOMContentLoaded', () => {
    typingAnimation();
    setupNavigation();
    setupSkillBars();
    setupPortfolioTabs();
    setupVideoModal();
    setupAgeHint();
    createPixelHedgehog();
});

function typingAnimation() {
    const title = document.getElementById('title');
    const text = '洪显蔚';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            title.textContent += text[index];
            index++;
            setTimeout(type, 500);
        }
    }
    
    setTimeout(type, 500);
}

function setupNavigation() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (section) {
            observer.observe(section);
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const scrollBtn = document.getElementById('scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

function setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const level = entry.target.getAttribute('data-level');
                entry.target.style.setProperty('--level', `${level}%`);
            }
        });
    }, { threshold: 0.3 });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function setupPortfolioTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetContent = document.getElementById(`${tabId}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

function setupVideoModal() {
    const qrButtons = document.querySelectorAll('.qr-toggle-btn');
    
    qrButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const qrContainer = btn.nextElementSibling;
            if (qrContainer && qrContainer.classList.contains('qr-container')) {
                qrContainer.classList.toggle('active');
                btn.textContent = qrContainer.classList.contains('active') ? '收起二维码' : '点击查看';
            }
        });
    });
}

function setupAgeHint() {
    const birthdayCard = document.querySelector('.birthday-card');
    const ageHint = birthdayCard.querySelector('.age-hint');
    
    const birthDate = new Date('2005-05-12');
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    ageHint.textContent = `(${age}岁)`;
}

function createPixelHedgehog() {
    const hedgehog = document.querySelector('.pixel-hedgehog');
    
    const pixels = [
        { x: 40, y: 20, w: 15, h: 15, c: '#B8D4F0' },
        { x: 55, y: 20, w: 15, h: 15, c: '#B8D4F0' },
        { x: 70, y: 20, w: 15, h: 15, c: '#B8D4F0' },
        { x: 35, y: 35, w: 15, h: 15, c: '#F0F4FF' },
        { x: 50, y: 35, w: 15, h: 15, c: '#F0F4FF' },
        { x: 65, y: 35, w: 15, h: 15, c: '#F0F4FF' },
        { x: 80, y: 35, w: 15, h: 15, c: '#F0F4FF' },
        { x: 30, y: 50, w: 20, h: 20, c: '#F0F4FF' },
        { x: 50, y: 50, w: 20, h: 20, c: '#F0F4FF' },
        { x: 70, y: 50, w: 20, h: 20, c: '#F0F4FF' },
        { x: 90, y: 50, w: 15, h: 15, c: '#F0F4FF' },
        { x: 25, y: 70, w: 25, h: 25, c: '#F0F4FF' },
        { x: 50, y: 70, w: 25, h: 25, c: '#F0F4FF' },
        { x: 75, y: 70, w: 25, h: 25, c: '#F0F4FF' },
        { x: 100, y: 70, w: 15, h: 15, c: '#F0F4FF' },
        { x: 30, y: 95, w: 20, h: 15, c: '#3A6BD4' },
        { x: 50, y: 95, w: 20, h: 15, c: '#3A6BD4' },
        { x: 70, y: 95, w: 20, h: 15, c: '#3A6BD4' },
        { x: 90, y: 95, w: 15, h: 15, c: '#3A6BD4' },
        { x: 55, y: 55, w: 6, h: 6, c: '#1A2B4A' },
        { x: 75, y: 55, w: 6, h: 6, c: '#1A2B4A' },
        { x: 60, y: 70, w: 8, h: 4, c: '#7FE7CC' },
        { x: 20, y: 60, w: 8, h: 8, c: '#B8D4F0' },
        { x: 95, y: 60, w: 8, h: 8, c: '#B8D4F0' },
        { x: 15, y: 75, w: 8, h: 8, c: '#B8D4F0' },
        { x: 100, y: 75, w: 8, h: 8, c: '#B8D4F0' },
    ];
    
    let html = '';
    pixels.forEach(p => {
        html += `<div style="position:absolute;left:${p.x}px;top:${p.y}px;width:${p.w}px;height:${p.h}px;background-color:${p.c};box-shadow:2px 2px 0 rgba(0,0,0,0.3);"></div>`;
    });
    
    hedgehog.innerHTML = html;
}
