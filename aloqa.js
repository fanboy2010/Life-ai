// ===== Intro Steps =====
const introModal = document.getElementById('introModal');
const okBtn = document.getElementById('okBtn');
const introText = document.getElementById('introText');
let step = 0;

okBtn.addEventListener('click', () => {
    step++;
    if (step === 1) {
        introText.innerText = 'Telefon orqali bog‘lanmoqchimisiz?\n+998-87-811-06-10';
    } else if (step === 2) {
        introText.innerText = 'Telegram va boshqa platformalarda bog‘laning:\n@jungkook_2010 | @falsafa_210 | Life.AI.2100';
    } else {
        introModal.style.display = 'none';
        document.getElementById('aloqaSection').style.display = 'block';
    }
});

// ===== Form submit =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        alert(`Xabaringiz qabul qilindi!\n\nIsm: ${name}\nEmail: ${email}\nXabar: ${message}`);
        form.reset();
    } else {
        alert('Iltimos, barcha maydonlarni to‘ldiring!');
    }
});
