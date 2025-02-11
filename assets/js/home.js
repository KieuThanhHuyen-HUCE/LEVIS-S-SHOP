$(document).ready(function () {
    let container = $(".list-colection"); 
    let itemWidth = $(".list-colection .item").outerWidth(true); 

    console.log("Item Width:", itemWidth); // Kiểm tra kích thước sản phẩm

    $("#next-product").click(function () {
        container.animate({ scrollLeft: "+=" + itemWidth }, 400);
    });

    $("#prev-product").click(function () {
        container.animate({ scrollLeft: "-=" + itemWidth }, 400);
    });
});
