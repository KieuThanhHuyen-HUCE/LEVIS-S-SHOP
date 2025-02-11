document.addEventListener("DOMContentLoaded", function () {
    const listColection = document.querySelector(".list-colection");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const itemWidth = document.querySelector(".item").offsetWidth; // Lấy chiều rộng của 1 sản phẩm
    const totalItems = document.querySelectorAll(".item").length;
    const visibleItems = Math.floor(document.querySelector(".row").offsetWidth / itemWidth);
    let index = 0;

    function updateButtons() {
        if (index === 0) {
            prevBtn.classList.add("disable-icon");
        } else {
            prevBtn.classList.remove("disable-icon");
        }

        if (index >= totalItems - visibleItems) {
            nextBtn.classList.add("disable-icon");
        } else {
            nextBtn.classList.remove("disable-icon");
        }
    }

    nextBtn.addEventListener("click", function () {
        if (index < totalItems - visibleItems) {
            index++;
            listColection.style.transform = `translateX(-${index * itemWidth}px)`;
        }
        updateButtons();
    });

    prevBtn.addEventListener("click", function () {
        if (index > 0) {
            index--;
            listColection.style.transform = `translateX(-${index * itemWidth}px)`;
        }
        updateButtons();
    });

    updateButtons();
});
