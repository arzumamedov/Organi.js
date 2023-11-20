const buttomLeftTop=document.querySelector(".buttomLeftTop")
const ul=document.querySelector(".buttomLeftButtom")

buttomLeftTop.addEventListener("click",function () {
    ul.classList.toggle("opacity")
    console.log('dfgut');
})
$(document).ready(function () {
    $('.cards-section').slick({
        // setting-name: setting - value
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<i class="fa-solid fa-angle-left"></i>',
        nextArrow:'<i class="fa-solid fa-angle-right"></i>',
        autoplay:true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 1000,
        // dots:true

    });
});