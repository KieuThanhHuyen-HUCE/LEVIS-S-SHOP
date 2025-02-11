$(function(){
    let numProduct = parseInt($(".numberQuantity").text()) ||1;
    $("#minus").click(function(){
        if(numProduct > 1){
            numProduct --;
            $(".numberQuantity").text(numProduct);
        }
    })
    $("#plus").click(function(){
            numProduct ++;
            $(".numberQuantity").text(numProduct);
    })
    $("#openSizeGuide").click(function () {
      $("#size-guide").show()
    })
    $(".SizeGuide-header .close-wrap").click(function(){
      $("#size-guide").hide()

    })
})