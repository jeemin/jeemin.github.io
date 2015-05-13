var inTransition = false;

$(document).ready(function() {
    $('._profile').click(function() {
        if (!inTransition) {
            if($('.resume').hasClass('hide')){
            	$('.profile').removeClass('hide');
            } else {
        		inTransition = true;
            	unrenderResume($('.profile'));
            }
            $('.resume').addClass('hide');
            $('.contact').addClass('hide');
        }
    });
    $('._contact').click(function() {
        if (!inTransition) {
            if($('.resume').hasClass('hide')){
            	$('.contact').removeClass('hide');
            } else {
        		inTransition = true;
            	unrenderResume($('.contact'));
            }
            $('.profile').addClass('hide');
            $('.resume').addClass('hide');
        }
    });
    $('._resume').click(function() {
        if (!inTransition && $('.resume').hasClass('hide')) {
        	inTransition = true;
            $('.profile').addClass('hide');
            $('.contact').addClass('hide');
            renderResume();
        }
    });
});

function renderResume() {
    $('.header').addClass('reduce');
    setTimeout(function() {
        $('.container').addClass('widthIncrease');
        setTimeout(function() {
            $('.resume').removeClass('hide');
        	inTransition = false;
        }, 500);
    }, 500);
}

function unrenderResume($widget) {
    $('.container').removeClass('widthIncrease');
    setTimeout(function() {
        $('.header').removeClass('reduce');
        setTimeout(function() {
            $widget.removeClass('hide');
        	inTransition = false;
        }, 500);
    }, 500);
}
