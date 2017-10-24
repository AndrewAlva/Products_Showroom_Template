// Dropdown behavior with Javascript
function dropdown_menu_on(id_dropdown_nav){
    (function($){       
        //cache nav
        var nav = $(id_dropdown_nav);
                
        //add indicators and hovers to submenu parents
        nav.find("li").each(function() {
            if ($(this).find("ul").length > 0) {

                //show subnav on hover
                $(this).mouseenter(function() {
                    $(this).find("ul").stop(true, true).slideDown();
                });
                        
                //hide submenus on exit
                $(this).mouseleave(function() {
                    $(this).find("ul").stop(true, true).slideUp();
                });
            }
        });
    })(jQuery);
}

dropdown_menu_on("#main_nav");


// Carousel Slider Object
var Slider = {
    canScroll: true,
    slideActive: 0,
    duration: 600,
    showingSlides: 3,
    totalSlides: 6,
    hiddenSlides: 0,
    innerDisplace: 0,

    init: function(){
        Slider.innerDisplace = (100/Slider.showingSlides);
        Slider.hiddenSlides = Slider.totalSlides - Slider.showingSlides;
        var state = window.location.search ? window.location.search : 0; 
        Slider.goTo(state);
    },
    prev: function(){
        var index = Slider.slideActive-1;
        if(index<0){
            Slider.goTo(Slider.hiddenSlides);
        }else{
            Slider.goTo(index);
        }
    },
    next: function(){
        var index = Slider.slideActive+1;
        if(index>Slider.hiddenSlides){
            Slider.goTo(0);
        }else{
            Slider.goTo(index);
        }
    },
    goTo: function(index){
        if(Slider.canScroll){
            Slider.canScroll = false;
            $('.inner_slider').attr('style', 'left:-'+(Slider.innerDisplace * index)+'%');
            setTimeout(function(){
                Slider.canScroll = true;
                Slider.setStates(index);
            }, Slider.duration);
        }
    },
    setStates: function(index){
        Slider.slideActive = index;
    }
}

$(document).ready(function() {
    $('.carousel_arrows').on("click", function(event){
        event.preventDefault();
        var slide = $(this).data("slide");
        if(slide=="next" || slide=="prev"){
            if(slide=="prev") Slider.prev();
            else Slider.next();
        }
    });
    Slider.init();
});