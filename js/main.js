function main() {
    ! function() {
        "use strict";

        function f() {
            b.hasClass("show-nav") ? Modernizr.csstransforms ? (b.removeClass("show-nav"), d.removeClass("show-nav")) : (b.removeClass("show-nav"), d.removeClass("show-nav"), b.animate({
                right: "-=300"
            }, 500), d.animate({
                right: "-=300"
            }, 500)) : Modernizr.csstransforms ? (b.addClass("show-nav"), d.addClass("show-nav")) : (b.addClass("show-nav"), d.addClass("show-nav"), b.css("right", "0px"), d.css("right", "330px"))
        }

        function g() {
            e.toggleClass("fa-times"), e.toggleClass("fa-bars")
        }

        function h() {
            $(window).scrollTop() >= 100 ? $(".lp-our-numbers").removeClass("active") : $(".lp-our-numbers").addClass("active")
        }
        $("a.page-scroll").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                    scrollTop: a.offset().top - 40
                }, 900), !1
            }
        }), $(window).bind("scroll", function() {
            $(window).height();
            $(window).scrollTop() >= 100 ? $(".navbar-default").addClass("on") : $(".navbar-default").removeClass("on")
        }), /*$("body").scrollspy({
            target: ".navbar-default",
            offset: 80
        }),*/ jQuery(window).scroll(function() {
            jQuery(window).scrollTop() >= 150 ? (jQuery(".navbar-default").css({
                background: "#18171D"
            }), jQuery(".navbar-default img.logo").css({
                "margin-top": "-30px",
                "margin-bottom": "15px"
            }), jQuery(".nav-bar").css({
                "margin-top": "6px"
            })) : (jQuery(".navbar-default").css({
                background: "transparent"
            }), jQuery(".navbar-default img.logo").css({
                "margin-top": "-30px",
                "margin-bottom": "25px"
            }))
        });
        var b = ($("#site-wrapper"), $(".menu")),
            d = ($(".menu ul li a"), $(".nav-toggle")),
            e = $(".nav-toggle span");
        $(function() {
                d.on("click", function(a) {
                    a.stopPropagation(), a.preventDefault(), f(), g()
                }), $(document).keyup(function(a) {
                    27 == a.keyCode && b.hasClass("show-nav") && (Modernizr.csstransforms ? (b.removeClass("show-nav"), d.removeClass("show-nav"), g()) : (b.removeClass("show-nav"), d.removeClass("show-nav"), b.css("right", "-300px"), d.css("right", "30px"), g()))
                })
            }), $(window).load(function() {
                $(".lp-our-numbers").addClass("active")
            }), $(window).scroll(function() {
                h()
            }), $(function() {
                $(".lp-scroll-down").click(function() {
                    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                        var a = $(this.hash);
                        if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                            scrollTop: a.offset().top - 90
                        }, 1e3), !1
                    }
                })
            }), jQuery(document).ready(function(a) {
                function l() {
                    m(a(".cd-headline.letters").find("img, b")), n(a(".cd-headline"))
                }

                function m(b) {
                    b.each(function() {
                        var b = a(this),
                            c = b.text().split(""),
                            d = b.hasClass("is-visible");
                        for (i in c) b.parents(".rotate-2").length > 0 && (c[i] = "<em>" + c[i] + "</em>"), c[i] = d ? '<i class="in">' + c[i] + "</i>" : "<i>" + c[i] + "</i>";
                        var e = c.join("");
                        b.html(e).css("opacity", 1)
                    })
                }

                function n(e) {
                    var f = b;
                    e.each(function() {
                        var b = a(this);
                        if (b.hasClass("loading-bar")) f = c, setTimeout(function() {
                            b.find(".cd-words-wrapper").addClass("is-loading")
                        }, d);
                        else if (b.hasClass("clip")) {
                            var e = b.find(".cd-words-wrapper"),
                                g = e.width() + 10;
                            e.css("width", g)
                        } else if (!b.hasClass("type")) {
                            var h = b.find(".cd-words-wrapper img, .cd-words-wrapper b"),
                                i = 0;
                            h.each(function() {
                                var b = a(this).width();
                                b > i && (i = b)
                            }), b.find(".cd-words-wrapper").css("width", i)
                        }
                        setTimeout(function() {
                            o(b.find(".is-visible").eq(0))
                        }, f)
                    })
                }

                function o(a) {
                    var i = s(a);
                    if (a.parents(".cd-headline").hasClass("type")) {
                        var k = a.parent(".cd-words-wrapper");
                        k.addClass("selected").removeClass("waiting"), setTimeout(function() {
                            k.removeClass("selected"), a.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")
                        }, g), setTimeout(function() {
                            p(i, f)
                        }, h)
                    } else if (a.parents(".cd-headline").hasClass("letters")) {
                        var l = a.children("i").length >= i.children("i").length;
                        q(a.find("i").eq(0), a, l, e), r(i.find("i").eq(0), i, l, e)
                    } else a.parents(".cd-headline").hasClass("clip") ? a.parents(".cd-words-wrapper").animate({
                        width: "2px"
                    }, j, function() {
                        u(a, i), p(i)
                    }) : a.parents(".cd-headline").hasClass("loading-bar") ? (a.parents(".cd-words-wrapper").removeClass("is-loading"), u(a, i), setTimeout(function() {
                        o(i)
                    }, c), setTimeout(function() {
                        a.parents(".cd-words-wrapper").addClass("is-loading")
                    }, d)) : (u(a, i), setTimeout(function() {
                        o(i)
                    }, b))
                }

                function p(a, b) {
                    a.parents(".cd-headline").hasClass("type") ? (r(a.find("i").eq(0), a, !1, b), a.addClass("is-visible").removeClass("is-hidden")) : a.parents(".cd-headline").hasClass("clip") && a.parents(".cd-words-wrapper").animate({
                        width: a.width() + 10
                    }, j, function() {
                        setTimeout(function() {
                            o(a)
                        }, k)
                    })
                }

                function q(c, d, e, f) {
                    if (c.removeClass("in").addClass("out"), c.is(":last-child") ? e && setTimeout(function() {
                            o(s(d))
                        }, b) : setTimeout(function() {
                            q(c.next(), d, e, f)
                        }, f), c.is(":last-child") && a("html").hasClass("no-csstransitions")) {
                        var g = s(d);
                        u(d, g)
                    }
                }

                function r(a, c, d, e) {
                    a.addClass("in").removeClass("out"), a.is(":last-child") ? (c.parents(".cd-headline").hasClass("type") && setTimeout(function() {
                        c.parents(".cd-words-wrapper").addClass("waiting")
                    }, 200), d || setTimeout(function() {
                        o(c)
                    }, b)) : setTimeout(function() {
                        r(a.next(), c, d, e)
                    }, e)
                }

                function s(a) {
                    return a.is(":last-child") ? a.parent().children().eq(0) : a.next()
                }

                function u(a, b) {
                    a.removeClass("is-visible").addClass("is-hidden"), b.removeClass("is-hidden").addClass("is-visible")
                }
                var b = 2500,
                    c = 3800,
                    d = c - 3e3,
                    e = 50,
                    f = 150,
                    g = 500,
                    h = g + 800,
                    j = 600,
                    k = 1500;
                l()
            }),
            function() {
                function a(a) {
                    classie.add(a.target.parentNode, "input--filled")
                }

                function b(a) {
                    "" === a.target.value.trim() && classie.remove(a.target.parentNode, "input--filled")
                }
                String.prototype.trim || function() {
                    var a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    String.prototype.trim = function() {
                        return this.replace(a, "")
                    }
                }(), [].slice.call(document.querySelectorAll("input.input__field, textarea.input__field")).forEach(function(c) {
                    "" !== c.value.trim() && classie.add(c.parentNode, "input--filled"), c.addEventListener("focus", a), c.addEventListener("blur", b)
                })
            }(), $(".tip").each(function() {
                $(this).tooltip({
                    placement: "top",
                    html: !0,
                    title: $("#" + $(this).data("tip")).html()
                })
            }), $(".tip").click(function(a) {
                a.preventDefault()
            }), $(function() {
                $("#map1").show(), $(".changesrc").click(function() {
                    $(".map-container").hide();
                    var a = $(this).attr("value");
                    $("#map" + a).show()
                })
            })
    }(), $(document).ready(function() {
            $.apScrollTop({
                onInit: function(a) {}
            }), $.apScrollTop().on("apstInit", function(a) {}), $.apScrollTop().on("apstToggle", function(a, b) {}), $.apScrollTop().on("apstCssClassesUpdated", function(a) {}), $.apScrollTop().on("apstPositionUpdated", function(a) {}), $.apScrollTop().on("apstEnabled", function(a) {}), $.apScrollTop().on("apstDisabled", function(a) {}), $.apScrollTop().on("apstBeforeScrollTo", function(a, b) {}), $.apScrollTop().on("apstScrolledTo", function(a, b) {}), $.apScrollTop().on("apstDestroy", function(a, b) {})
        }), $("#option-enabled").on("change", function() {
            var a = $(this).is(":checked");
            $.apScrollTop("option", "enabled", a)
        }), $("#option-visibility-trigger").on("change", function() {
            var a = $(this).val();
            "custom-function" == a ? $.apScrollTop("option", "visibilityTrigger", function(a) {
                return a > $("#image-for-custom-function").offset().top
            }) : $.apScrollTop("option", "visibilityTrigger", parseInt(a))
        }), $("#option-visibility-fade-speed").on("change", function() {
            var a = parseInt($(this).val());
            $.apScrollTop("option", "visibilityFadeSpeed", a)
        }), $("#option-scroll-speed").on("change", function() {
            var a = parseInt($(this).val());
            $.apScrollTop("option", "scrollSpeed", a)
        }), $("#option-position").on("change", function() {
            var a = $(this).val();
            $.apScrollTop("option", "position", a)
        }),
        function() {
            var a = document.querySelectorAll(".parallax");
            window.onscroll = function() {
                [].slice.call(a).forEach(function(a, c) {
                    var d = window.pageYOffset,
                        e = "0 " + .6 * d + "px";
                    a.style.backgroundPosition = e
                })
            }
        }(), $(window).load(function() {
            window.matchMedia("(min-width: 992px)").matches && $(".lp-health-our_nmbers").addClass("active")
        }), $(window).scroll(function() {
            var a = $(this).scrollTop();
            console.log("scrolled");
            var d, e, b = $(".lp-information_ih");
            void 0 !== b && void 0 !== b.offset() && (d = b.offset().top), (e = a - d + 400) >= 100 && $(".lp-inline_block-ih li").addClass("active")
        }), $(".screen-navigations a").click(function(a) {
            a.preventDefault();
            "prev" == $(this).attr("data-slide") ? ($(".image-slider").slick("slickPrev"), $(".lp_mobile_screens").slick("slickPrev")) : ($(".image-slider").slick("slickNext"), $(".lp_mobile_screens").slick("slickNext"))
        });
    var a = $(".slt-testimonial_box .image-slider").find(".slick-active").index(),
        b = $(".slt-testimonial_box .image-slider").find("li.slick-slide").not(".slick-cloned").length - 1;
    $(".slt-testimonial_box .image-slider").on("afterChange", function() {
        $(this).find(".slick-active").index()
    }), $("#next").click(function() {
        $("#prev").removeClass("inactive"), $("#prev").addClass("active"), a++, a == b ? ($("#next").removeClass("active"), $("#next").addClass("inactive")) : $("#next").removeClass("inactive")
    }), $("#prev").click(function() {
        $("#next").removeClass("inactive"), $("#next").addClass("active"), a--, 0 == a ? ($("#prev").removeClass("active"), $("#prev").addClass("inactive")) : $("#prev").removeClass("inactive")
    }), $(window).load(function() {

    });

}
$(function() {
    $(document).mouseup(function(a) {
        container = $("nav.menu"), container.is(a.target) || 0 !== container.has(a.target).length || container.hasClass("show-nav") && (container.removeClass("show-nav"), container.find(".nav-toggle").removeClass("show-nav"))
    })
}), $(document).ready(function() {
    /*$(".lp_mobile_screens").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        swipe: !1,
        infinite: !1,
        asNavFor: ".image-slider"
    }), $(".image-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !1,
        swipe: !1,
        infinite: !1,
        arrows: !1,
        variableWidth: !1,
        focusOnSelect: !0,
        asNavFor: ".lp_mobile_screens"
    }), $("#surgeon-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 2e3
    }), setTimeout(function() {
        $(".lp_count-numbers .slt-count_up").counterUp({
            delay: 10,
            time: 1200
        }, 1200)
    })
	$('.awards-slick-slider').slick({
	  dots: false,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
	});*/

}), main();