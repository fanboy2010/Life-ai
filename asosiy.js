document.addEventListener("DOMContentLoaded", () => {
    const kurslar = document.querySelectorAll(".kurs-div");
    kurslar.forEach(k => {
        k.addEventListener("click", () => k.classList.toggle("faol"));
    });
});

