$(document).ready(function () {
    let container = $(".list-colection"); 
    let itemWidth = $(".list-colection .item").outerWidth(true); 

    $("#next-product").click(function () {
        container.animate({ scrollLeft: "+=" + itemWidth }, 400);
    });

    $("#prev-product").click(function () {
        container.animate({ scrollLeft: "-=" + itemWidth }, 400);
    });
});
