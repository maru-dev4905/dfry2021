var swiper2 = new Swiper('.menu-content', {
    direction: 'vertical',
    slidesPerView: 'auto',
    loop: true,
    speed: 1000,
    grabCursor: true,
    mousewheel:true,
    freeMode: true,
    loopAdditionalSlides:50,
    loopedSlides: 50
})


function menu() {
    const menuBtn   = $(".hambuger-menu");
    const openBtn   = $(".hambuger-open-btn");
    const header    = $("header");
    const gnb       = $(".gnb");
    const menuLeft  = $(".menu-left");
    const menuRight  = $(".menu-right");

    openBtn.click(function(){
        if(menuBtn.hasClass("show")){
            menuBtn.removeClass("show");
            header.removeClass("menu-ivory");
            gnb.removeClass("hide");
            openBtn.removeClass("active");
            menuLeft.removeClass("show");
            menuRight.removeClass("show");
            $(".logo a").animate({
                y:"0px",
                opacity: 1
            },500)
            scroll.start();
        }else{
            menuBtn.addClass("show")
            header.addClass("menu-ivory");
            gnb.addClass("hide");
            openBtn.addClass("active");
            menuLeft.addClass("show");
            menuRight.addClass("show")
            $(".logo a").animate({
                y:"-50px",
                opacity: 0
            },500)
            scroll.stop();
        }
    }) 
}
menu();