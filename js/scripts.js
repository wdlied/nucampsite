$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }     
    });

    // Attach Button click event listener 
    $("#reserveBtn").click(function(){
        // show Modal
        $('#reserveModal').modal('show');
    });

    // Attach Button click event listener 
    $("#loginBtn").click(function(){
        // show Modal
        $('#loginModal').modal('show');
    });
});