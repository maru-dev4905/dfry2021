import LocomotiveScroll from 'locomotive-scroll';

setInterval(() => {
    $(".intro.show .intro-img .swiper-slide[data-swiper-slide-index='2']").css({
        transitionDelay:"0s"
    });
}, 6000);

const body = $("body");
const wrap = $("#page-wrap");
const cursor = $("#mouse_cursor");

const controller = new ScrollMagic.Controller();

var scroll = new LocomotiveScroll    
({
    el: document.querySelector(`[data-scroll-container]`),
    smooth: true,
    getDirection: true,
    inertia: 0.65,
    smartphone: {
        smooth: true,
        getDirection: !0,
        inertia: 0.65,
    },
    tablet: {
        smooth: true,
        getDirection: !0,
        inertia: 0.65,
    }
});

$(window).resize(function(){
    data();
});

function data(){
    if($(window).innerWidth() <= 500){
        $(".works-parallax").removeAttr("data-scroll-speed")
        $(".works-parallax").removeAttr("data-scroll")
        $(".works-parallax").css("transform","none")
    }else{
        $(".works-parallax").attr('data-scroll-speed',2);
        $(".works-parallax").attr('data-scroll','');
    }
}
data();

/* ########## 100vh Solution ############# */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    
    scroll.update();
    scroll.start();
});
/* ########## END 100vh Solution ############# */

/* ########## Scroll Event ############# */

scroll.on('scroll',function(obj){
    const wH            = window.innerHeight;
    const winScroll     = obj.scroll.y;

    if($(window).innerWidth >= 500){

        // color change
        if($(".contact").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $("header").addClass("red");
            $(".contact").removeClass("ivory");
            $(".inquiry").addClass("red");
            $(".support-wheel > div .wheel > div").css({opacity:0});
        }
        else if($(".inquiry").offset().top <= wH * -0.5){
            $("#page-wrap").css({backgroundColor:"#ff3c02"})
            $("header").removeClass("red");
            $("header").addClass("ivory");
            $(".contact").addClass("ivory");
            $(".inquiry").removeClass("red");
            $(".support-wheel > div .wheel > div").css({opacity:1})
        }
        else if($(".works-title").offset().top <= wH / 2){
            $(".support-wheel > div .wheel > div").css({opacity:0})
            $("#page-wrap").css({backgroundColor:"rgb(11,11,11)"})
            $(".works").addClass("white");
            $("header").addClass("ivory");
            $(".service").addClass("ivory");
        }else if($(".service").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $(".about").addClass("red");
            $(".works").removeClass("white");
            $(".service").removeClass("ivory");
            $(".service").removeClass("white");
        }else if($(".about").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#ff3c02"})
            $("header").addClass("ivory");
            $("header").removeClass("red");
            $(".intro").addClass("ivory");
            $(".about").removeClass("red");
            $(".service").addClass("ivory");
        }else{
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $(".intro").removeClass("ivory");
            $(".about").addClass("red");
        }
    }else{
        // color change
        if($(".contact").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $("header").addClass("red");
            $(".contact").removeClass("ivory");
            $(".inquiry").addClass("red");
            $(".support-wheel > div .wheel > div").css({opacity:0});
        }
        else if($(".inquiry").offset().top <= wH * 0){
            $("#page-wrap").css({backgroundColor:"#ff3c02"})
            $("header").removeClass("red");
            $("header").addClass("ivory");
            $(".contact").addClass("ivory");
            $(".inquiry").removeClass("red");
            $(".support-wheel > div .wheel > div").css({opacity:1})
        }
        else if($(".works-title").offset().top <= wH / 2){
            $(".support-wheel > div .wheel > div").css({opacity:0})
            $("#page-wrap").css({backgroundColor:"rgb(11,11,11)"})
            $(".works").addClass("white");
            $("header").addClass("ivory");
            $(".service").addClass("ivory");
        }else if($(".service").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $(".about").addClass("red");
            $(".works").removeClass("white");
            $(".service").removeClass("ivory");
            $(".service").removeClass("white");
        }else if($(".about").offset().top <= wH / 2){
            $("#page-wrap").css({backgroundColor:"#ff3c02"})
            $("header").addClass("ivory");
            $("header").removeClass("red");
            $(".intro").addClass("ivory");
            $(".about").removeClass("red");
            $(".service").addClass("ivory");
        }else{
            $("#page-wrap").css({backgroundColor:"#f5e1d9"})
            $("header").removeClass("ivory");
            $(".intro").removeClass("ivory");
            $(".about").addClass("red");
        }
    }
    // color change end
    
    // header
    if(winScroll <= 50){
        $("header .gnb").removeClass("hide");
    }else{
        $("header .gnb").addClass("hide");
    }
    // header end

    // about
    if($(".about-title").offset().top <= wH / 1.5){
        $(".about-title").addClass("show");
    }
    if($(".about-spin").offset().top <= wH / 1.5){
        $(".about-spin").addClass("show");
    }
    if($(".about-slide").offset().top <= wH / 1){
        $(".about-slide").addClass("show");
    }
    if($(".about-subTitle").offset().top <= wH / 1){
        $(".about-subTitle").addClass("show");
    }
    if($(".about-subContent-left").offset().top <= wH / 1){
        $(".about-subContent-left").addClass("show");
    }
    $(".about-spin-wrap").css({
        transform:`rotate(${+winScroll / 5}deg)`
    })
    // about end

    // service
    $(".service-spin .service-spin-text").css({
        transform: ` translate(-50%,-50%) rotate(${+winScroll / 5}deg)`
    })
    for(var i = 0; i < $(".service-right li").length; i++){
        if(winScroll >= $(".service-right li").eq(i).offset().top * 5){
            $(".service-right li").eq(i).addClass("show");
        }
    }
    if($(".service").offset().top <= wH / 1.5){
        $(".service").addClass("show");
    }
    // service end

    // works
    for(var i = 1; i < $(".works-list-item").length; i++){
        if($(".works-list-item").eq(i).find(".works-list-img").offset().top <= wH / 1.5){
            $(".works-list-item").eq(i).find('.works-list-img').addClass("show");
        }
    }
    for(var i = 1; i < $(".works-list-item").length; i++){
        if($(".works-list-item").eq(i).find(".works-list-text").offset().top <= wH / 1){
            $(".works-list-item").eq(i).find(".works-list-text").addClass("show");
        }
    }
    if($(".works-slide").offset().top <= wH / 1){
        $(".works-slide").addClass("show");
    }
    if($(".works").offset().top <= wH / 1.5){
        $(".works").addClass("show");
    }
    // works end

    // inquiry
    if($(".works-more-btn").offset().top <= 0){
        $(".support-wheel > div .wheel > div").css({opacity:1});
    }
    if($(".inquiry-title").offset().top <= wH / 1.5){
        $(".inquiry-title").addClass("show");
    }
    if($(".inquiry-link").offset().top <= wH / 1.5){
        $(".inquiry-link").addClass("show");
    }
    // inquiry end

    // contact
    if($(".contact-slide").offset().top <= wH / 1){
        $(".contact-slide").addClass("show");
    }
    if($(".contact-content").offset().top <= wH / 1.5){
        $(".contact-content").addClass("show");
    }
    // contact end

    // footer
    if($("footer").offset().top <= wH / 1){
        $("footer").addClass("show");
    }
    // footer end

})
/* ########## END Scroll Event ############# */

/* ########## ScrollMagic Event ############# */

const circle_r = new TimelineMax()
.add([
    TweenMax.to("#cont-road>div>div>div",1,{rotation:360, ease:Linear})
]);

let duration1;
let duration2;

if($(window).innerWidth() <= 500){

    duration1 = 5000 / 3;
    duration2 = 2000 / 3;
}else{
    duration1 = 5000;
    duration2 = 2000;
}

var circle1 =  new ScrollMagic.Scene({triggerElement: "#cont-road", offset:0, duration: duration1})
.setTween(circle_r)
.addTo(controller)

var circle2 = new ScrollMagic.Scene({triggerElement: "#cont-road", offset:0, duration: duration2})
.setTween(".wheel",1,{scale:1,ease:Linear})
.addTo(controller)


/* ########## END ScrollMagic Event ############# */

setTimeout(()=>{
    scroll.update();
    scroll.start();
},500)
