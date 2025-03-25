document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img[data-src]");
    const loadButton = document.getElementById("loadImages");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => img.style.opacity = "1";
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });


    images.forEach(img => observer.observe(img));


    loadButton.addEventListener("click", () => {
        images.forEach(img => {
            if (!img.src) { 
                img.src = img.dataset.src; 
                img.onload = () => img.style.opacity = "1"; 
            }
        });
    });
});