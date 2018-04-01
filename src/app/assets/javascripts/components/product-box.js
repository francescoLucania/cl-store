$(function () {

    $(document).on('click', '.js-open-product-box', function () {

        if(!$('.js-product-box').hasClass('is-active')) {

            $('.js-page-shadow').addClass('is-active');

            $('html').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');
            $('body').css({'padding-right': scrollSize().width + 'px'});

            setTimeout(function () {

                $('.js-product-box').addClass('is-active');

            }, 1000)
        }

        return false

    });

    $(document).on('click', '.js-close-product-box', function () {

        if($('.js-product-box').hasClass('is-active')) {

            $('.js-product-box').removeClass('is-active');

            setTimeout(function () {

                $('.js-page-shadow').removeClass('is-active');

                $('html').css('overflow', '');
                $('body').css('overflow', '');
                $('body').css('padding-right', '');

            }, 600)
        }

        return false

    });

});
