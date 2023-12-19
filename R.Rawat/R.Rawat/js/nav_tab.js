$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        $('.navbar-nav > .nav-item > .nav-link').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav > .nav-item > .nav-link').removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
});