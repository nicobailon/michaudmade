// Nav menu
$(function() {
	var header = $(".header-menu");
	var banner = $(".page-banner");
    var extrastyle = $('<style type="text/css" class="extrastyle" />').appendTo('head');
    $(extrastyle).text('.page-banner.scrolled h1:before, .page-banner.scrolled h1:after {opacity:0;}');
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 36) {
            header.addClass("dark-bg");
            banner.addClass("scrolled");
        } else {
            header.removeClass("dark-bg");
            banner.removeClass("scrolled");
        }
    });
});

// Nav dropdown
$(function() {
    var dropdowntoggle = document.getElementById("dropdownModels");
    var dropdownmenu = $(".dropdown-menu");
    $(dropdowntoggle).hover(
        function() {
            $(dropdownmenu).addClass("show");
        }, function() {
            setTimeout(function() {
                $(dropdownmenu).removeClass("show");
            }, 1000);
        }
    );
});



// Features and Specs Hide/Show
$(function() {
    $('.feature-item').click(function(){
        $(this).find('.box-overlay').toggleClass('show');
    });
});
