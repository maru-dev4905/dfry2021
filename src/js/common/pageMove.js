$("a").click(function (event) {
    event.preventDefault();

    var url = $(this).attr("href");
    
    $("body #page-move").animate({
        "left": "0%"
    }, 0 , function () {
        
        setTimeout(() => {
            document.location.href = url;
        }, 1000);
    });

    return false;
});

if($(".dim").length == 1){
    $(".dim").animate({
        "left": "-100vw"
    },250)
}else{
    
}