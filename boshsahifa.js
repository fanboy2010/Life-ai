const rejimBtn = document.getElementById('rejim-btn');
rejimBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
        document.body.style.background = 'linear-gradient(120deg, #000000, #222222)';
        document.body.style.color = '#fff';
        rejimBtn.textContent = '☀️';
    } else {
        document.body.style.background = 'linear-gradient(120deg, #1a002b, #3b0066)';
        document.body.style.color = '#fff';
        rejimBtn.textContent = '🌙';
    }
});

const boshlashBtn = document.querySelector('.boshlash-btn');
boshlashBtn.addEventListener('click', () => {
    boshlashBtn.textContent = 'Yuklanmoqda...';
    boshlashBtn.style.background = '#fff';
    boshlashBtn.style.color = '#ff00ff';
    setTimeout(() => {
        alert("Life AI kurslariga xush kelibsiz!");
        boshlashBtn.textContent = 'Boshlash';
        boshlashBtn.style.background = '#ff66ff';
        boshlashBtn.style.color = '#000';
    }, 1500);
});



