// 브라우저 별 코드 변경
var agent = navigator.userAgent.toLowerCase();
var name = navigator.appName;
var browser;

function checkMobile(){
 
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
 
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        // if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1){
        //     alert("IE");
        // }else if(agent.indexOf('safari') > -1){
        //     alert("SAFRI");
        
        //     if(agent.indexOf('opr') > -1){
        //         alert("OPR")
        //     }else if(agent.indexOf('chrome') > -1){
        //         alert("CHROME")
        //     }else if(agent.indexOf('naver') > -1){
        //         alert("NAVER")
        //     }else if(agent.indexOf('whale') > -1){
        //         alert("WHALE")
        //         $(".intro .intro-img-wrap3").css({top:"72px"});
        //     }else{
        //         alert("SAFRI")
        //         browser = 'safari';
        //     }
        // }
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        if(name === 'Microsoft Internet Explorer' || agent.indexOf('trident') > -1 || agent.indexOf('edge/') > -1){
            
        }else if(agent.indexOf('safari') > -1){
            if(agent.indexOf('opr') > -1){
            }else if(agent.indexOf('Chrome/xyz') != -1){
            }else if(agent.indexOf('naver') > -1){
            }else if(agent.indexOf('whale') > -1){
                $(".intro .intro-img-wrap3").css({top:"72px"});
            }else{
                $(".intro .swiper-slide-img").css({"top":"122px"})
                $(".intro .intro-slide li").css({"top":"68%"})
                $(".intro .intro-slide li.intro-spin-wrap").css({"top":"68%"})
                browser = 'safari';
            }
        }
    } else {
        //아이폰, 안드로이드 외
    }
    
}
checkMobile();