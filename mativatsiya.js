const quotes = [
    { matn: "Senga ishonmaganlarga kulib qaragin — chunki sen qila olasan!", muallif: "Elon Musk" },
    { matn: "Harakat qilgan inson hech qachon yutqazmaydi.", muallif: "Ogʻabek Sobirov" },
    { matn: "Bugun qiyin, ertaga yanada qiyinroq, ammo indiniga quvonch kutilmoqda.", muallif: "Jack Ma" },
    { matn: "Hech qachon taslim bo‘lma — g‘alaba oxirgi qadamda bo‘ladi.", muallif: "Nelson Mandela" },
    { matn: "Orzularni emas, ularni ro‘yobga chiqaradigan harakatni tanla.", muallif: "Steve Jobs" },
    { matn: "Har bir muvaffaqiyat ortida qat’iyat yotadi.", muallif: "Ogʻabek" },
    { matn: "Baxtli hayot — bu har kuni ozgina o‘sish.", muallif: "Dalai Lama" },
    { matn: "Qo‘rqma, hatto kichik qadam ham seni orzuga yaqinlashtiradi.", muallif: "Albert Einstein" },
    { matn: "O‘zingga ishon — butun olam ham shunga ishonadi.", muallif: "Rumi" },
    { matn: "Muvaffaqiyatni kutma, uni yarat.", muallif: "Bill Gates" },
    { matn: "Hech kim seni to‘xtata olmaydi — faqat sen o‘zingdan tashqari.", muallif: "Kira Me" },
    { matn: "Har bir kun — bu yangi imkoniyat.", muallif: "Ogʻabek Sobirov" },
    { matn: "Qiyinchiliklar seni sinaydi, lekin buzmaydi.", muallif: "Martin Luther King Jr." },
    { matn: "Harakat qil, natija o‘zi keladi.", muallif: "Confucius" },
    { matn: "Agar orzuying katta bo‘lsa, yo‘ling ham buyuk bo‘ladi.", muallif: "Ogʻabek" },
    { matn: "Vaqtni bekor o‘tkazma — bugun boshlanmasa, ertaga kech bo‘ladi.", muallif: "Mark Zuckerberg" },
    { matn: "Hech narsa imkonsiz emas, faqat urinish kerak.", muallif: "Muhammad Ali" },
    { matn: "Yiqilish — tugash emas, balki boshlanishdir.", muallif: "Kira Me" },
    { matn: "O‘rganish — eng kuchli qurol.", muallif: "Nelson Mandela" },
    { matn: "Katta g‘alabalar kichik odatlardan boshlanadi.", muallif: "Ogʻabek Sobirov" },
];

// Elementlar
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const light = document.querySelector(".light");
const chest = document.querySelector(".chest");
const sparkle = document.querySelector(".sparkles");

// Tasodifiy iqtibos chiqarish funksiyasi
function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    const { matn, muallif } = quotes[random];
    quoteText.textContent = `"${matn}"`;
    quoteAuthor.textContent = `— ${muallif}`;

    // Yorug‘lik va yaltirash effekti
    light.style.opacity = 1;
    sparkle.style.opacity = 1;
    setTimeout(() => {
        light.style.opacity = 0;
        sparkle.style.opacity = 0;
    }, 2000);
}

// Dastlabki iqtibos
newQuote();

// “Yangi iqtibos” tugmasi bosilganda
document.getElementById("newQuoteBtn").addEventListener("click", newQuote);

// Sandiq ustiga bosilganda ham iqtibos chiqadi
chest.addEventListener("click", newQuote);
