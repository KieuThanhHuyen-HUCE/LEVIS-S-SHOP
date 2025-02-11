
$("#header").load("/partials/header.html", function () {
///////// Mobile nav bên trái 
    //show
    $(".nav__bars-btn .ti-close").hide()
    $(".nav__bars-btn .ti-menu").click(function () {
        $("#navMobile").show()
        $("body").addClass("no-scroll")
        $(this).hide()
        $(".nav__bars-btn .ti-close").show()

    })
    //hide
    $(".modal__overlay").click(function () {
        $("#navMobile").hide()
        $("body").removeClass("no-scroll")
        $(".nav__bars-btn .ti-menu").show()
        $(".nav__bars-btn .ti-close").hide()

    })
    $(".nav__bars-btn .ti-close").click(function () {
        $("#navMobile").hide()
        $("body").removeClass("no-scroll")
        $(".nav__bars-btn .ti-menu").show()
        $(".nav__bars-btn .ti-close").hide()
    })
/////////////////// subMenu
$(document).ready(function () {
    $(".header__search-item").click(function () {
        let menuType = $(this).attr("data-menu"); 
        let menuId = "#" + menuType + "Menu"; 
        if ($(menuId).is(":visible")) {
            $("#subMenu").hide(); 
        } else {
            $(".subMenu__body").hide(); 
            $(menuId).show(); 
            $("#subMenu").show(); 
        }
    });

    // Đóng submenu khi click ra ngoài
    $(".modal__overlay").click(function () {
        $("#subMenu").hide();
    });
    $(".subMenu__header .close-wrap").click(function(){
        $("#subMenu").hide();
    })
});


/////////////////// Details
    $("#details").hide()
    $("#openDetails").click(function(){
        $("#details").show()
    })
    $(".details__overlay").click(function(){
        $("#details").hide()
    })
    $(".details__body .ti-close").click(function(){
        $("#details").hide()
    })
////////////chat app
    $("open-chat-app").addClass("open")
    $(".btn-chat-app").click(function(){
        $("#chat-app-wrap").toggle()
        $(".open-chat-app").toggleClass("open")
        $(".close-chat-app").toggleClass("open")
    })  
/////////////////////login 
    $("#open-userSignup").click(function(){
        $("#userSignup").load("./user-sign-up.html", function(){
            // $("#userSignup").show()
            console.log("load xong r")
        })
    })

})
