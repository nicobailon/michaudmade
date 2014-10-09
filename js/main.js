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
    var dropdowntoggle = $(".dropdown");
    var dropdownmenu = $(".dropdown-menu");
    $(dropdowntoggle).hover(
      function() {
        $(dropdownmenu).addClass("show");
      }, function() {
        $(dropdownmenu).removeClass("show");
      }
    );
});


// Features and Specs Hide/Show
$(function() {
    $('.feature-item').click(function(){
        $(this).find('.box-overlay').toggleClass('show');
    });
});

