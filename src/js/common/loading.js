const loadingNumber = $(".loading-number span").eq(0);
const span = $(".loading ul li span[class*=text]");
const wrap = $(".loading");

span.removeClass("hide");

let i = 0;

const numberUp = setInterval(() => {
    loadingNumber.text(i);
    i++;
    if(i > 100){
        clearInterval(numberUp)
        $(".loading [class*=wrap]").removeClass("show");
        $(".loading-number").removeClass("show");
        $(".loading p").removeClass("show");

        setTimeout(() => {
            wrap.removeClass("active");    
            showIntroText();
        }, 1000);
    }    
}, 20);

const showIntroText=()=>{
    setTimeout(()=>{
        $(".intro-slide li h2.hide").removeClass("hide")
    },1000)
}