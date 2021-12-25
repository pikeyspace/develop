$('.info-btn, .spin-btn').on('click', function() {
    $(this).toggleClass('active');
})

$('.turbo').on('click', function() {
    var turboBtn = $(this).find("input");
    if (turboBtn.is(':checked')) {
        $('.checkbox').toggleClass('active');
    }
})


$('.sound').on('click', function() {
    var sound = document.createElement("audio");
    sound.src = "../images/Button_Click.wav";
    sound.play();
})



$(function() {
    let coin = 5689;
    let totalBet = 0;
    $('.totalbet-btn-minus').on('click', function() {
        totalBet -= 10;
        coin += 10;
        $('.totalbet-content-text').text(totalBet);
        $('.coin-content-text').text(coin);
        return totalBet, coin;
    })
    $('.totalbet-btn-plus').on('click', function() {
        totalBet += 10;
        coin -= 10;
        $('.totalbet-content-text').text(totalBet);
        $('.coin-content-text').text(coin);
        return totalBet, coin;
    })
})
