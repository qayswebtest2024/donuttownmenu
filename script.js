// script.js
document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-button");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const group = button.closest(".group");
            const products = group.querySelector(".products");

            if (products.classList.contains("hidden")) {
                products.classList.remove("hidden");
                group.classList.remove("collapsed");
                button.textContent = "▲";
            } else {
                products.classList.add("hidden");
                group.classList.add("collapsed");
                button.textContent = "▼";
            }
        });
    });
});
