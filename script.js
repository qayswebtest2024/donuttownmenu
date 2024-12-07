document.addEventListener("DOMContentLoaded", () => {
    const groupHeaders = document.querySelectorAll(".group-header");

    groupHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const products = header.nextElementSibling;
            if (products.classList.contains("hidden")) {
                products.classList.remove("hidden");
            } else {
                products.classList.add("hidden");
            }
        });
    });
});
