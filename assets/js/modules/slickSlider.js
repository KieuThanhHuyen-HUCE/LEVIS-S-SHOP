// let bannerList = document.querySelector('.banner .banner__list')
// let bannerItem = document.querySelectorAll('.banner .banner__list .banner__item')
// let dotSlick = document.querySelectorAll('.banner .dot .dot-slick')
// let prev = document.getElementById('prev')
// let next = document.getElementById('next')

// let active = 0;
// let lengthItems = bannerItem.length - 1;
// next.onclick = function(){
//     if (active + 1 > lengthItems ){
//         active = 0;
//     }else{
//         active = active + 1;
//     }
//     reloadSlider();
// }
// function reloadSlider(){
//     let checkLeft = bannerItem[active].offsetLeft;
//     bannerList.style.left = -checkLeft +'px';

//     let lastActivedotSlick =document.querySelector('.banner .dot .dot-slick li.active');
//     lastActivedotSlick.classList.remove('active');
//     dotSlick[active].classList.add('active');
// }
$(document).ready(function () {
    let $bannerItem = $('.banner__item'),
        active = 0,
        lengthItems = $bannerItem.length;

    function reloadSlider() {
        $bannerItem.hide().eq(active).fadeIn();
    }

    $('#next').click(function () {
        active = (active + 1) % lengthItems;
        reloadSlider();
    });

    $('#prev').click(function () {
        active = (active - 1 + lengthItems) % lengthItems;
        reloadSlider();
    });

    $bannerItem.hide().eq(active).show();
});

