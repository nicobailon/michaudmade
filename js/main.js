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
            }, 100);
        }
    );
    $(dropdownmenu).hover(
        function() {
            $(dropdown).addClass("show-dropdown");
        }, function() {
            setTimeout(function() {
                $(dropdown).removeClass("show-dropdown");
            }, 100);
        }
    );
});



// Features and Specs Hide/Show
$(function() {
    var featureitem = $('.feature-item');
    var boxoverlay = $('.box-overlay');
    featureitem.click(function(){
        boxoverlay.each(function() {
          $( this ).removeClass('show');
        });
        $(this).find(boxoverlay).toggleClass('show');
    });
});



// Parallax
// Run only on desktop

$(function() {
    if ((window.innerWidth > 767) && (window.innerHeight > 959))  {
        $('.parallax').scrolly({bgParallax: true});
    } else if ((window.innerWidth > 959) && (window.innerHeight > 767))  {
        $('.parallax').scrolly({bgParallax: true});
    }
});



// Flowtype
var bannerText = $('.page-banner h1');
bannerText.flowtype({
    minimum : 320,
    maximum : 992,
    fontRatio : 12,
    minFont : 24,
    maxFont : 52
});

var aboutText = $('.about-text p');
aboutText.flowtype({
    minimum : 320,
    maximum : 992,
    fontRatio : 34,
    minFont : 13,
    maxFont : 20
});

var boxTitle = $('.box-overlay h3');
var boxParagraph = $('.box-overlay p');
boxTitle.flowtype({
    minimum : 320,
    maximum : 1024,
    fontRatio : 15,
    minFont : 16,
    maxFont : 24
});
boxParagraph.flowtype({
    minimum : 320,
    maximum : 1024,
    fontRatio : 25,
    minFont : 12,
    maxFont : 16
});

var modelDesc = $('.model-description');
modelDesc.flowtype({
    minimum : 320,
    maximum : 1024,
    fontRatio : 40,
    minFont : 13,
    maxFont : 20
});
