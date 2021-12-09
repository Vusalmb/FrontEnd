$(document).ready(function(){

    // search toggle

    $("#header_nav_card .search").click(function(){
        $(".search_button").fadeOut(100);
    });

    // slide images

    $(".slide_flowers_right .next").click(function(){
        let current = $(".active_image");
        let next = current.next();

        if(next.length){
            current.removeClass("active_image");
            next.addClass("active_image");
        }
        else{
            current.removeClass("active_image");
            $(".flower:first-child").addClass("active_image");
        }
    });

    $(".slide_flowers_left .previous").click(function(){
        let current = $(".active_image");
        let prev = current.prev();

        if(prev.length){
            current.removeClass("active_image");
            prev.addClass("active_image");
        }
        else{
            current.removeClass("active_image");
            $(".flower:last-child").addClass("active_image");
        }
    });

    setInterval(function(){
        let current = $(".active_image");
        let next = current.next();

        if(next.length){
            current.removeClass("active_image");
            next.addClass("active_image");
        }
        else{
            current.removeClass("active_image");
            $(".flower:first-child").addClass("active_image");
        }
    }, 5000);

    // search button.

    $(".search").click(function(){
        $(".search_button").css({
            "display": "flex",
            "justify-content": "center",
            "align-items": "center",
            "width": "400px",
            "background-color": "white",
            "position": "absolute",
            "top": "20px",
            "right": "-30px",
            "padding-top": "56px"
        })

        $(".search_button input").css({
            "width": "400px",
            "padding-left": "10px",
            "height": "70px",
            "border-width": "0",
            "font-size": "20px"
        })

        $(".search_button i").css({
            "position": "absolute",
            "right": "10px"
        })
    });

    // sale image

    $(".list_category .list").click(function(){
        let value = $(this).attr("data-filter");

        if(value == "all"){
            $(".image_box").show("1000");
        }
        else{
            $(".image_box").not("." + value).hide("1000");
            $(".image_box").filter("." + value).show("1000");
        }
    });

    $(".list_category .list").click(function(){
        let current = $(".active_list");
        let next = current.next();

        if(next.length){
            current.removeClass("active_list");
            next.addClass("active_list");
        }
        else{
            current.removeClass("active_list");
            $(".list:first-child").addClass("active_list");
        }
    });

    // slide expert

    $(".expert_info_left .previous").click(function(){
        let current = $(".expert_info_active");
        let prev = current.prev();

        if(prev.length){
            current.removeClass("expert_info_active");
            prev.addClass("expert_info_active");
        }
        else{
            current.removeClass("expert_info_active");
            $(".expert_info_box:last-child").addClass("expert_info_active");
        }
    });

    $(".expert_info_right .next").click(function(){
        let current = $(".expert_info_active");
        let next = current.next();

        if(next.length){
            current.removeClass("expert_info_active");
            next.addClass("expert_info_active");
        }
        else{
            current.removeClass("expert_info_active");
            $(".expert_info_box:first-child").addClass("expert_info_active");
        }
    });

    // scroll window up

    $(window).scroll(function() {
        let scrollPx = $(window).scrollTop();
        if (scrollPx > 500) {
            $("#backToTop").fadeIn(450);
            $("#backToTop").css("display", "flex");
        } else {
            $("#backToTop").fadeOut(450);
        }

    });

    $("#backToTop").click(function() {
        $(window).scrollTop(0)
    });

    
})