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