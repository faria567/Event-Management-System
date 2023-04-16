(function($) {
    "use strict";

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Header Sticky
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.elkevent-nav').addClass("is-sticky");
        } else {
            $('.elkevent-nav').removeClass("is-sticky");
        }
    });

    // Home Slides
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
    });
    $(".home-slides").on("translate.owl.carousel", function() {
        $(".home-slides p").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
        $(".home-slides h1").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
        $(".home-slides ul").removeClass("animate__animated animate__zoomIn").css("opacity", "0");
        $(".home-slides .btn, .home-slides .video-btn").removeClass("animate__animated animate__fadeInDown").css("opacity", "0");
        $(".home-slides .banner-image img").removeClass("animate__animated animate__fadeInUp").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel", function() {
        $(".home-slides p").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
        $(".home-slides h1").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
        $(".home-slides ul").addClass("animate__animated animate__zoomIn").css("opacity", "1");
        $(".home-slides .btn, .home-slides .video-btn").addClass("animate__animated animate__fadeInDown").css("opacity", "1");
        $(".home-slides .banner-image img").addClass("animate__animated animate__fadeInUp").css("opacity", "1");
    });

    // Popup Video
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Count Time 
    function makeTimer() {
        var endTime = new Date("July 14, 2023 13:00:00 ");
        var endTime = (Date.parse(endTime)) / 1000;
        var now = new Date();
        var now = (Date.parse(now) / 1000);
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function() {
        makeTimer();
    }, 1000);

    // Tabs
    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function() {
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });

    // Tooltip JS
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // Platinum Partner Slides
    $('.platinum-partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Gold Partner Slides
    $('.gold-partner-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Blog Slides
    $('.blog-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    });

    // Schedule Slides
    $('.schedule-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: [
            "<i class='icofont-rounded-left'></i>",
            "<i class='icofont-rounded-right'></i>"
        ],
    });

    // Check distance to top and display back-to-top.
    jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 800) {
            $('.back-to-top').addClass('show-back-to-top');
        } else {
            $('.back-to-top').removeClass('show-back-to-top');
        }
    });
    $('.back-to-top').on('click', function() {
        $("html, body").animate({
            scrollTop: "0"
        }, 500);
    });

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            // submitMSGSub(false, "Please enter your email correctly.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        // submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animate__animated animate__shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animate__animated animate__shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    // AJAX MailChimp
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
        callback: callbackFunction
    });

    // JS
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });

    // WOW JS
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow', // animate__animated animate__element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 20, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true, // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader Area
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });


    /* Start "Marketing", "Education" & "Health" "Demo JS" */

    // Speakers Slides JS
    $('.m-speakers-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 4,
            }
        }
    });

    // M Testimonial Slides JS
    $('.m-testimonial-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
    });

    // Gallery Slides JS
    $('.e-gallery-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 4,
            }
        }
    });

    // E Testimonial Slides JS
    $('.e-testimonial-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,

        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    });

    // H Testimonial Slides JS
    $('.h-testimonial-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
    });

    /* End "Marketing", "Education" & "Health" "Demo JS" */

}(jQuery));