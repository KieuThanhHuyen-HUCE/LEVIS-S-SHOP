$(document).ready(function () {
    let container = $(".list-colection"); 
    let itemWidth = $(".list-colection .item").outerWidth(true); 
    $(".next-product").click(function () {
        container.animate({ scrollLeft: "+=" + itemWidth }, 400);

    });
    $(".prev-product").addClass("disable-icon")
    $(".prev-product").click(function () {
        let $this = $(this)
        container.animate({ scrollLeft: "-=" + itemWidth }, 400, function(){
            if(container.scrollLeft() <= 0){
                $(".prev-product").removeClass("disable-icon")
            }
        });
    });
    $(".disable-icon").hover(function(){
        $(".disable-notify").toggle()
    })
});
