// Nav menu
$(function() {
	var header = $(".header-menu");
	var banner = $(".page-banner");    
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
    $(dropdowntoggle).css({
       overflow : 'hidden'
    });
    $(dropdowntoggle).hover(
        function() {
            $(dropdowntoggle).css({
               overflow : 'inherit'
            });
            $(dropdownmenu).addClass("show");
        }, function() {
            setTimeout(function() {
                $(dropdownmenu).removeClass("show");
                $(dropdowntoggle).css({
                   height : '100px',
                   overflow : 'hidden'
                });
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



// Parallax
$('.parallax').scrolly({bgParallax: true});

