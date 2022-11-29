(function ($) {
    $(function () {

        $('.hamburger').click(function () {
            $("body").toggleClass("navshown");
            $(".nav-wrap").fadeToggle()
        });

        if ($('.slider-item').length) {
            $('.slider-item').slick({
                speed: 8000,
                autoplay: true,
                autoplaySpeed: 0,
                centerMode: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                infinite: true,
                initialSlide: 1,
                arrows: false,
                buttons: false,
                useTransform: true,
            });

            $(window).on('resize', function () {
                $('.slider-item').slick('resize');
            });
        }

        // ANIMATION CHECK IF IN VIEW
        var $animation_elements = $('.anim-el');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var insetAmount = window_height / 20 // fifth of the screen
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height) - insetAmount;

            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('is-inview');
                }
                /* else {
                                    if(!$element.hasClass('anim-once')) {
                                        $element.removeClass('in-view');
                                    }
                                }*/
            });
        }
        $window.on('scroll orientationchange resize', check_if_in_view);
        $window.trigger('scroll');
        const updateProperties = (elem, state) => {
            elem.style.setProperty('--x', `${state.x}px`)
            elem.style.setProperty('--y', `${state.y}px`)
            elem.style.setProperty('--width', `${state.width}px`)
            elem.style.setProperty('--height', `${state.height}px`)
            elem.style.setProperty('--radius', state.radius)
            elem.style.setProperty('--scale', state.scale)
        }
      
        if ($(window).width() > 480) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.4 + 'px';
                $('.left-scroll').css({
                    'transform': `translateX(-${shift})`
                })
            });
        }

        if ($(window).width() < 481) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.3 + 'px';
                $('.left-scroll').css({
                    'transform': `translateX(-${shift})`
                })
            });
        }

        if ($(window).width() > 480) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.3 + 'px';
                $('.right-scroll').css({
                    'transform': `translateX(${shift})`
                })
            });
        }
        if ($(window).width() > 480) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.15 + 'px';
                $('.second-right-scroll').css({
                    'transform': `translateX(${shift})`
                })
            });
        }
        if ($(window).width() < 481) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.15 + 'px';
                $('.right-scroll').css({
                    'transform': `translateX(${shift})`
                })
            });
        }
        if ($(window).width() < 481) {
            $(window).on('scroll', function () {
                yPos = window.pageYOffset;
                shift = yPos * 0.15 + 'px';
                $('.second-right-scroll').css({
                    'transform': `translateX(${shift})`
                }) 
            });
        }
        $(window).scroll(function () {
            yPos = window.pageYOffset;
            scrollFade = yPos * 0.8 + 'px';
            $('.hero-inner').css({
                'transform': `translateY(${scrollFade})`
            })
            $(".hero-content").css("opacity", 1 - $(window).scrollTop() / 400);
        });

        
        
   
        var header = new Headroom(document.querySelector("header"), {
            tolerance: 0,
            offset: 50,
            classes: {
                initial: "animated",
                pinned: "slideUp",
                unpinned: "slideDown"
            }
        });
        header.init();
        
        
        if($('.testimonial-thumb-slider-wrap').length){
            $('.testimonial-thumb-slider-wrap').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: true,
                arrows: false,
                dots: false
            });
             $(window).on('resize', function () {
                $('.commerce-item-wrap').slick('resize');
            });
        }
        
        

        // Start K-Working js
        $('.services-content-btn a[data-slide]').each(function (i) {
            var $this = $(this);
            $this.click(function(e) {
                e.preventDefault();
                $("body").addClass('expandShown');
                $(".k-working-expand-wrap").fadeIn()

                $('.working-expand-item-wrap').slick({
                    arrows: true,
                    infinite: true,
                    autoplay: false,
                    navigation: false,
                    dots: false,
                    centerMode: false,
                    focusOnSelect: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                });

                var slideno = $(this).data('slide');
                $('.working-expand-item-wrap').slick('slickGoTo', slideno - 1);
            });
        })
        $(".close-icon, .k-working-expand-wrap").click(function (e) {
            e.preventDefault();
            $(".k-working-expand-wrap").fadeOut()
            $(".working-expand-item-wrap").slick('unslick');
            $("body").removeClass('expandShown');
        })
        $(".k-working-expand").click(function (e) {
            e.stopPropagation();
        })
        // End K-Working js

        // Start K-Hosting js

        if ($('.commerce-item-wrap').length) {
            $('.commerce-item-wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: false,
                responsive: [

                    {
                        breakpoint: 558,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.commerce-item-wrap').slick('resize');
            });
        }

        if ($('.news-feed-item-wrap').length) {
            $('.news-feed-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 671,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
                            infinite: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.news-feed-item-wrap').slick('resize');
            });
        }
        // End K-Hosting js

        // Start Contact Page js
        $('#marque-slider').slick({
            slidesToShow: 7,
            slidesToScroll: 2,
            centerPadding: '60px',
            autoplay: true,
            autoplaySpeed: 0,
            infinite: true,
            speed: 10000,
            cssEase:'linear',
            centerMode: true,
            variableWidth: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            draggable: false,
            focusOnSelect:false,
            initialSlide:1,
            arrows:false,
            /*  swipeToSlide: true,*/

        })
        // End Contact Page js

        if ($('.gallery-item-wrap').length) {
            $('.gallery-item-wrap').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                navigation: false,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 1500,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 671,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: false,
                            speed: 500,
                            swipe: true,
                            infinite: true,
                        }
                    },
                ]
            });
            $(window).on('resize', function () {
                $('.news-feed-item-wrap').slick('resize');
            });
        }

        $('.categories-tab-triger ul li').click(function(){
            $('.categories-tab-triger ul li').removeClass('tab-active');
            $(this).addClass('tab-active');
            $('.categories-tab-wrap .categories-tab').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        if($('.contact').length){
            $('body').addClass('contact-page')
            
            	var input = document.querySelector("#phone");
            window.intlTelInput(input, {
               geoIpLookup: function(callback) {
                 $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                   var countryCode = (resp && resp.country) ? resp.country : "";
                   callback(countryCode);
                 });
               },
                  initialCountry: "gb"


            });


        }

        if($('.customers').length){
            $('body').addClass('customers-page')
        }
     
        if($('.about').length){
            $('body').addClass('about-page')
        }
        
        
        $('#divID').click(function () {
            $('#formID').submit();
        })


        $('.k-working-modal a').click(function (e) {
            e.preventDefault()
            $("body").addClass("k-working-modal-show");
        });
        $('.k-working-modal-close').click(function () {
            $("body").removeClass("k-working-modal-show");
        });

    }) // End ready function.
    $('.input-item input[type="submit"]').parent('.input-item').addClass('newsletter-submit')
    
    var magnets = document.querySelectorAll('.magnetic')
    var strength = 50
    magnets.forEach((magnet) => {
        magnet.addEventListener('mousemove', moveMagnet);
        magnet.addEventListener('mouseout', function (event) {
            TweenMax.to(event.currentTarget, 1, {
                x: 0,
                y: 0,
                ease: Power4.easeOut
            })
        });
    });

    function moveMagnet(event) {
        var magnetButton = event.currentTarget
        var bounding = magnetButton.getBoundingClientRect()
        TweenMax.to(magnetButton, 1, {
            x: (((event.clientX - bounding.left) / magnetButton.offsetWidth) - 0.5) * strength,
            y: (((event.clientY - bounding.top) / magnetButton.offsetHeight) - 0.5) * strength,
            ease: Power4.easeOut
        })
        magnetButton.style.transform = 'translate(' + ((((event.clientX - bounding.left) / (magnetButton.offsetWidth))) - 0.5) * strength + 'px,' + ((((event.clientY - bounding.top) / (magnetButton.offsetHeight))) - 0.5) * strength + 'px)';
    }
    


    var mac = 0;
    if (navigator.userAgent.indexOf('Mac') > 0) {
        mac = 1;
    } else {
        mac = 0;
    }
    if (1 == mac) {
        $('body').addClass('mac-os');
    }else {
        $("body").addClass('win-os');
    }

    
    if ($('.video-modal-wrapper').length) {
        var player = new Vimeo.Player('made-in-ny');
        $('.video-thumb, .play-btn').click(function (e) {
            e.preventDefault();
            $('body').addClass('video-modal-show')
            player.play();
        })
        $('.video-modal').click(function () {
            $('body').removeClass('video-modal-show')
            player.pause();
        })
    }
    
    if($('.k-working').length){
        $('body').addClass('k-working-page')
    }

    
    if($('.media').length){
        $('body').addClass('media-page')
    }
 
    if($('.single-post').length){
        $('body').addClass('single-post-page')
    }

	    
    if($(window).width() < 481){
        var OuterWdth = $('.k-working-expand-wrap').outerWidth()
     
     $('.working-expand-item-title').css({'width': OuterWdth})
     
     $(window).on('resize', function(){
         var OuterWdth = $('.k-working-expand-wrap').outerWidth()
     
     $('.working-expand-item-title').css({'width': OuterWdth})
     }) 
     }
     
     
     $('.k-working-work-content a, .primary-hero .breadcrumb ul li a').click(function (e) {
         e.preventDefault();
         var target = $($(this).attr('href'));
         if (target.length) {
             var scrollTo = target.offset().top;
             $('body, html').animate({
                 scrollTop: scrollTo + 'px'
             }, 800);
         }
     });
    
    $('.btn').parent().addClass('hasBtn')
    

    

    
    
    
    
    

})(jQuery)