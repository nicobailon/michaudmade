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
    var dropdown = $(".dropdown");
    $(dropdowntoggle).hover(
        function() {
            $(dropdown).addClass("show-menu");
        }, function() {
            setTimeout(function() {
                $(dropdown).removeClass("show-menu");
            }, 1500);
        }
    );
    $(dropdownmenu).hover(
        function() {
            $(dropdown).addClass("show-dropdown");
        }, function() {
            setTimeout(function() {
                $(dropdown).removeClass("show-dropdown");
            }, 1000);
        }
    );
});



// Features and Specs Hide/Show
$(function() {
    var featureitem = $('.feature-item');
    var boxoverlay = $('.box-overlay');
    $(featureitem).click(function(){
        $(boxoverlay).each(function() {
          $( this ).removeClass( 'show' );
        });
        $(this).find(boxoverlay).toggleClass('show');
    });
});



// Parallax
$('.parallax').scrolly({bgParallax: true});

