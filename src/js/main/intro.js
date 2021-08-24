$(".intro-number span").eq(3).text(
    "0" + $(".intro-img .swiper-slide").length
)

var swiper = new Swiper('.intro-img', {
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 1000,
    grabCursor:true,
    longSwipersRatio:.1,
    grabCursor:true,
    autoplay: {
        delay:5000
    }
});
swiper.autoplay.stop();
setTimeout(() => {
    swiper.autoplay.start();
}, 3000);

const box = $(".intro-box");
const slide = $(".intro-slide li");
const num = $(".intro-number span").eq(0);
const IMGURL = "./images/main/intro/intro-img";
let swiperNumber;

const COLOR = {
     "yellow"       : "#ecd88e"
    ,"gray"         : "#cdd4db"
    ,"test"         : "#8f0222"
}

function changeSwiperText(){
    for(var i = 0; i < $(".intro-slide li").length; i++){
        $(".intro-slide li").removeClass("active");
    }
}
function changeSwiperBg(){
    for(var i = 0; i < $(".intro-box div").length; i++){
        $(".intro-box div").removeClass("active");
    }
}

swiper.on('slidePrevTransitionStart', function () {
    if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}1.png`){
        changeSwiperBg();
        box.find("div").eq(0).addClass("active");
        changeSwiperText();
        slide.eq(0).addClass("active");
        num.text("0" + 1)

    }else if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}2.png`){
        changeSwiperBg();
        box.find("div").eq(1).addClass("active");
        changeSwiperText();
        slide.eq(1).addClass("active");
        num.text("0" + 2)

    }else if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}3.png`){
        changeSwiperBg();
        box.find("div").eq(2).addClass("active");
        changeSwiperText();
        slide.eq(2).addClass("active");
        num.text("0" + 3)
    }
});

swiper.on('slideNextTransitionStart', function(){
    if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}1.png`){
        changeSwiperBg();
        box.find("div").eq(0).addClass("active");
        changeSwiperText();
        slide.eq(0).addClass("active");
        num.text("0" + 1)


    }else if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}2.png`){
        changeSwiperBg();
        box.find("div").eq(1).addClass("active");
        changeSwiperText();
        slide.eq(1).addClass("active");
        num.text("0" + 2)


    }else if($(".swiper-slide-active").find("img").attr("src") == `${IMGURL}3.png`){
        changeSwiperBg();
        box.find("div").eq(2).addClass("active");
        changeSwiperText();
        slide.eq(2).addClass("active");
        num.text("0" + 3)

    }
});
swiper.on('touchStart', function(){
    swiper.autoplay.stop();
})
swiper.on('touchEnd', function(){
    swiper.autoplay.start();
})
$(".intro").addClass("show");
$("header").addClass("show");