$(function(){
    // Filter
    $(".ti-menu-alt").click(function(){
        $(".category__list").toggle();
    })
    $(".filter").click(function(){
        $("#filter").show();
        $("body").addClass("no-scroll")
    })
    $(".filter__body header .close").click(function(){
        $("#filter").hide();
        $("body").removeClass("no-scroll")
    })
    $(".modal__overlay").click(function(){
        $("#filter").hide();
        $("body").removeClass("no-scroll")
    })
    ///category //// Ngăn không cho <details> đóng lại
    $("")
})