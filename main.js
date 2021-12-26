$('.info-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.win-content-title').toggleClass('active');
})



$('.turbo').on('click', function() {
    var turboBtn = $(this).find("input");
    if (turboBtn.is(':checked')) {
        $('.checkbox').toggleClass('active');
    }
})



$('.sound').on('click', function() {
    var sound = document.createElement("audio");
    sound.src = "images/click.wav";
    sound.play();
})



$(function() {
    let coin = 30;
    let totalBet = 0;
    $('.totalbet-btn-minus').on('click', function() {
        totalBet -= 10;
        if (totalBet < 0) {
            totalBet = 0;
        } else {
            coin += 10;
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
        }
        return totalBet, coin;
    })
    $('.totalbet-btn-plus').on('click', function() {
        if (coin > 0) {
            totalBet += 10;
            coin -= 10;
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
        } else {
            $('.totalbet-content-text').text(totalBet);
            $('.coin-content-text').text(coin);
        }
        return totalBet, coin;
    })
})



$('.auto-btn').on('click', function() {
    $('.spin-btn').toggleClass('active');
})
$('#spins5').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active5');
    $('#spins5').css('color', '#f48a00');
    setTimeout(function() {
        [
            $('.spin-btn').removeClass('active5'),
            $('#spins5').css('color', '#a67303'),
            $('#spins5').css('pointer-events', 'none')
        ]
    }, 5000);
})
$('#spins10').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active10');
    $('#spins10').css('color', '#f48a00');
    setTimeout(function() {
        [
            $('.spin-btn').removeClass('active10'),
            $('#spins10').css('color', '#a67303'),
            $('#spins10').css('pointer-events', 'none')
        ]
    }, 10000);
})
$('#spins15').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active15');
    $('#spins15').css('color', '#f48a00');
    setTimeout(function() {
        [
            $('.spin-btn').removeClass('active15'),
            $('#spins15').css('color', '#a67303'),
            $('#spins15').css('pointer-events', 'none')
        ]
    }, 15000);
})
$('#spins20').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active20');
    $('#spins20').css('color', '#f48a00');
    setTimeout(function() {
        [
            $('.spin-btn').removeClass('active20'),
            $('#spins20').css('color', '#a67303'),
            $('#spins20').css('pointer-events', 'none')
        ]
    }, 20000);
})
$('#spins25').on('click', function() {
    $('.spin-btn').attr('class', 'spin-btn').addClass('active25');
    $('#spins25').css('color', '#f48a00');
    setTimeout(function() {
        [
            $('.spin-btn').removeClass('active25'),
            $('#spins25').css('color', '#a67303'),
            $('#spins25').css('pointer-events', 'none')
        ]
    }, 25000);
})
