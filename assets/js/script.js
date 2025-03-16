document.addEventListener("DOMContentLoaded", function () {
    // Lazy loading for images
    const lazyImages = document.querySelectorAll(".lazy");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));

    // Toggle additional details independently for each property
    let ctaButtons = document.querySelectorAll(".cta");

    ctaButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            // Find the details section for THIS specific property
            let details = this.closest(".property").querySelector(".details");

            // Close all other details first
            document.querySelectorAll(".details").forEach(detail => {
                if (detail !== details) {
                    detail.classList.remove("show");
                }
            });

            // Toggle only this property's details
            details.classList.toggle("show");
        });
    });
});