// info-button show-hide 'good luck'
$('.info-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.win-content-title').toggleClass('active');
})


// turbo-button position
$('.turbo').on('click', function() {
    var turboBtn = $(this).find("input");
    if (turboBtn.is(':checked')) {
        $('.checkbox').toggleClass('active');
    }
})


// on-click sound 
$('.sound').on('click', function() {
    var sound = document.createElement("audio");
    sound.src = "images/click.wav";
    sound.play();
})


// plus-minus coins to bet and coin
$(function() {
    let coin = 30;
    let totalBet = 0;
    $('.totalbet-btn-minus').on('click', function() {
        totalBet -= 10;
        if (totalBet < 0) {
            totalBet = 0;
            $(this).addClass('disable');
            $('.totalbet-btn-plus').removeClass('disable');
        } else {
            coin += 10;
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
            $('.totalbet-btn-plus').removeClass('disable');
        }
        return totalBet, coin;
    })
    $('.totalbet-btn-plus').on('click', function() {
        if (coin > 0) {
            totalBet += 10;
            coin -= 10;
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
            $('.totalbet-btn-minus').removeClass('disable');
        } else {
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
            $(this).addClass('disable');

        }
        return totalBet, coin;
    })
})


// delay for auto-button hover-effect
$(function() {
    var timer;
    $('.auto').on('mouseenter', function() {
        timer = setTimeout(function() {
            $('.auto-list').slideDown(1500);
            $('.auto').on('mouseleave', function() {
                $('.auto-list').slideUp(1500);
            })
        }, 500)
    }).on('mouseleave', function() {
        clearTimeout(timer);
    });
})


// change color on spin-amount list
$('.auto-list-item').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active');
    $(this).css('color', '#f48a00');
    $('.spin-btn').on('click', function() {
        $(this).removeClass('active');
    })
})


// rotation of arrows on spin-button
setInterval(function() {
    $('.spin-btn').toggleClass('rotat');
    setTimeout(function() {
        $('.spin-btn').addClass('rotat');
    }, 3000)
}, 7000);


// on-click to spin-button show information 
$('.spin-btn').on('click', function() {
    $('#start, #autoplay').css('display', 'none');
    $('#stop').css('display', 'block');
    $('.spin-btn').addClass('active');
    setTimeout(function() {
        $('.spin-btn').removeClass('active');
        $('#start').css('display', 'block');
        $('#stop, #autoplay').css('display', 'none');
    }, 2000)
})


// on click to spins-amount list show count-down and stop-button
$('.auto-list-item').on('click', function() {
    $('.auto-btn').addClass('hide');
    $('.spin-action').addClass('action');
    $('.auto-list').slideUp(1500);
    $('#start, #stop').css('display', 'none');
    $('#autoplay').css('display', 'block');

    var _spins = $(this).text(),
        int;
    int = setInterval(function() {
        if (_spins > 0) {
            _spins--;
            $('.spin-action-number').text(_spins);
            $('.auto-list').css('visibility', 'hidden');
        } else {
            clearInterval(int);
            $('.spin-btn').removeClass('active');
            $('.auto-btn').removeClass('hide');
            $('.spin-action').removeClass('action');
            $('.auto-list').css('visibility', 'visible');
            $('#start').css('display', 'block');
            $('#autoplay, #stop').css('display', 'none');
        }
        $('.spin-action.action').on('click', function() {
            $('.auto-btn').removeClass('hide');
            $('.spin-action').removeClass('action');
            clearInterval(int);
            $('.auto-list').css('visibility', 'visible');
        })
    }, 1000);
})


// for start game all buttons made active
$(function() {
    $('.spin-btn.disable').on('click', function() {
        $('.info-btn, .spin-btn, .totalbet-btn-minus, .totalbet-btn-plus, .checkbox, .checkbox-facke, .auto, .auto-btn, .instruction').removeClass('disable');
    })
})
