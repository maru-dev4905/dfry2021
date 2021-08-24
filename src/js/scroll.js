import ScrollMagic from 'scrollmagic';
import {TimelineMax, TweenMax} from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll    
({
    el: document.querySelector('#page-wrap'),
    smooth: true,
    inertia: 0.5,
    smoothMobile:true
});

/* ########## 100vh Solution ############# */
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
});
/* ########## END 100vh Solution ############# */

/* ########## Scroll Event ############# */
scroll.on('scroll',function(obj){
    const wer           = window.innerHeight;
    const winScroll     = obj.scroll.y;

    if(winScroll >= 50){
        $(".intro-title-img").addClass("show");
    }
})
/* ########## END Scroll Event ############# */

/* ########## ScrollMagic Event ############# */

const controller = new ScrollMagic.Controller();



/* ########## END ScrollMagic Event ############# */