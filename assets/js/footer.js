document.addEventListener("DOMContentLoaded", function () {
    fetch("/partials/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Lỗi khi tải footer:", error));
});