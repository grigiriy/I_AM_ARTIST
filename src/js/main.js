// css
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../libs/font-awesome/css/all.min.css'
// import 'lightgallery/dist/css/lightgallery.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../css/main.scss'
import 'magnific-popup/dist/magnific-popup.css'

// js
import $ from 'jquery'

window.$ = window.jQuery = $;
import 'bootstrap/dist/js/bootstrap.min'
import 'magnific-popup/dist/jquery.magnific-popup.min'
import 'slick-carousel/slick/slick.min'
import './modules/_functions'
// import 'lightgallery'
// import './modules/_forms'

$(function () {
    $('.onClickPopup').on('click', function () {
        $.magnificPopup.close();
    });

    $.extend(true, $.magnificPopup.defaults, {
        callbacks: {
            open: function () {
                $('html').addClass('scroll-disabled');
            },
            close: function () {
                $('html').removeClass('scroll-disabled');
            }
        }
    });

    if ($('.open-popup-link').length) {
        $('.open-popup-link').magnificPopup({
            type: 'inline',
            midClick: true,
            showCloseBtn: false
        });
    }

    $('#popupSliderPreview').on('init', function (event, slick) {
        $('.popup-work-slider-preview').animate({
            opacity: 1
        }, 500);
    });
    $('#popupSliderList').on('init', function (event, slick) {
        $('.popup-work-slider-list').animate({
            opacity: 1
        }, 500);
    });

    if ($('.open-popup-work').length) {
        $('.open-popup-work').magnificPopup({
            type: 'ajax',
            midClick: true,
            showCloseBtn: false,
            callbacks: {
                parseAjax: function (mfpResponse) {
                    // mfpResponse.data is a "data" object from ajax "success" callback
                    // for simple HTML file, it will be just String
                    // You may modify it to change contents of the popup
                    // For example, to show just #some-element:
                    // mfpResponse.data = $(mfpResponse.data).find('#some-element');

                    // mfpResponse.data must be a String or a DOM (jQuery) element
                    mfpResponse.data = '<div id="work-detail-popup" class="white-popup popup-full">\n' +
                        '  <div class="popup-close-btn">\n' +
                        '    <button type="button" class="onClickPopup"></button>\n' +
                        '  </div>\n' +
                        '  <div class="popup-content work-content">' + mfpResponse.data + '</div></div>';

                    // console.log('Ajax content loaded:', mfpResponse);
                },
                ajaxContentAdded: function () {
                    // Ajax content is loaded and appended to DOM
                    // console.log(this.content);
                    $('html').addClass('scroll-disabled');

                    // if ($('.slick-initialized').length === 0) {
                    $('.popup-work-slider-preview').css('opacity', 1);
                    $('.popup-work-slider-list').css('opacity', 1);
                    $('#popupSliderPreview').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: '#popupSliderList',
                        draggable: false
                    });

                    $('#popupSliderList').slick({
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        asNavFor: '#popupSliderPreview',
                        dots: false,
                        centerMode: true,
                        centerPadding: false,
                        focusOnSelect: true,
                        responsive: [
                            {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 1,
                                    infinite: true,
                                    dots: false
                                }
                            },
                            {
                                breakpoint: 600,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            },
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }
                        ]
                    });

                    $('.onClickPopup').on('click', function () {
                        $.magnificPopup.close();
                    });
                },
                /*open: function () {
                    $('html').addClass('scroll-disabled');

                    $('.popup-work-slider-preview').css('opacity', 1);
                    $('.popup-work-slider-list').css('opacity', 1);
                },
                close: function () {
                    $('html').removeClass('scroll-disabled');
                    $('.popup-work-slider-preview').css('opacity', 0);
                    $('.popup-work-slider-list').css('opacity', 0);
                }*/
            }
        });
    }

    $('#upBtn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '800');

        return false;
    });

    if ($('#workSliderPreview').length) {
        $('#workSliderPreview').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '#workSliderList',
            draggable: false
        });

        $('#workSliderList').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '#workSliderPreview',
            dots: false,
            centerMode: false,
            centerPadding: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                }
            ]
        });
    }

});
