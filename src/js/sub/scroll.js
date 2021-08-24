import LocomotiveScroll from 'locomotive-scroll';

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
        console.log($(".works-parallax").data('scroll-speed'));
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

    }
    // color change end
    
    // header
    if(winScroll <= 50){
        $("header .gnb").removeClass("hide");
    }else{
        $("header .gnb").addClass("hide");
    }
    // header end

    let url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);
    if(filename == "works.html"){
        for(var i = 0; i < $(".works-item").length; i++){
            if($(".works-item").eq(i).find(".list-img").offset().top <= wH / 1.5){
                $(".works-item").eq(i).find('.list-img').addClass("show");
            }
        }
        for(var i = 0; i < $(".works-item").length; i++){
            if($(".works-item").eq(i).find(".list-text").offset().top <= wH / 1){
                $(".works-item").eq(i).find(".list-text").addClass("show");
            }
        }
        if($(".contact-slide").offset().top <= wH / 1){
            $(".contact-slide").addClass("show");
        }
        if($(".contact-content").offset().top <= wH / 1.5){
            $(".contact-content").addClass("show");
        }
    }
})
/* ########## END Scroll Event ############# */

/* ########## ScrollMagic Event ############# */


/* ########## END ScrollMagic Event ############# */

setTimeout(()=>{
    scroll.update();
    scroll.start();
},500)
