$(document).ready(function () {
    var $loginModal = $('#loginModal');
    var $loginModalBackGround = $('#loginModalBackGround');
    var $modal = $('.modal');
    var $login = $('.login');
    var $close=$('.close');
    $loginModalBackGround.click(function () {
        $modal.animate({top:'-250'}, 350, function () {
            $loginModal.fadeOut(300);
        })
    });
    $close.click(function () {
        $modal.animate({top:'-250'}, 350, function () {
            $loginModal.fadeOut(300);
        })
    });
    $login.click(function () {
        $loginModal.fadeIn(300, function () {
            $modal.animate({top:'50%'}, 350);
        });
    });
})
