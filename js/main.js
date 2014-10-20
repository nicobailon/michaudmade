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
            $(dropdown).removeClass("show-menu");
        }
    );
    $(dropdownmenu).hover(
        function() {
            $(dropdown).addClass("show-dropdown");
        }, function() {
            $(dropdown).removeClass("show-dropdown");
        }
    );
});

// Mobile nav menu
$(function() {
    var screenWidth = $(window).width();
    var menuToggleWidth = "83";
    var slideWidth = (screenWidth - menuToggleWidth) + 'px';
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    var mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    var mobileDropDownToggle = document.getElementById('mobileDropdownModels');
    var bodyWrap = document.getElementById('page-wrap');
    var calculateWidth = $(mobileMenu).css({
        'right': slideWidth,
        'width': slideWidth,
        '-webkit-transform':'translate(-' + slideWidth + ',0)'
    });
    var bodySlide = $(bodyWrap).css({
      'left': slideWidth
    });
    $(mobileMenu).on('touchstart', function(event){});

    $(mobileMenuToggle).click(function() {
        console.log('click');
        $(mobileMenu).toggleClass('show');
        $('body').toggleClass('noscroll');
        $(bodyWrap).toggleClass('slide');
    });

    $(mobileMenuOverlay).click(function() {
        $(mobileMenu).removeClass('show');
        $('body').removeClass('noscroll');
        $(bodyWrap).removeClass('slide');
    });

    $(mobileDropDownToggle).click(function(){
      $(this).toggleClass('show');
    });

    // Register handler for resize-events
    $(window).resize(handleResize);

    // indicated if an event already has been detected
    var debouncingActive = false;

    // Timeout value for deferring event processing
    var debouncingTime = 450;

    // implementes the debouncing of events
    function handleResize() {
      if(false === debouncingActive) {
         debouncingActive = true;
         setTimeout(smartResizeHandler, debouncingTime);
      }
    }
    // Re-process sizing when orientation changed
    function smartResizeHandler() {
      var screenWidth = $(window).width();
      var slideWidth = (screenWidth - menuToggleWidth) + 'px';
      $(mobileMenu).css({
          'right': slideWidth,
          'width': slideWidth,
          '-webkit-transform':'translate(-' + slideWidth + ',0)'
      });
      $(bodyWrap).css({
        'left': slideWidth
      });
      debouncingActive = false;
    }
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
$(function() {
    // Run only on desktop
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
