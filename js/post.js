$(document).ready(function () {
    var $postLeftSimilar = $('.post-left-similar').find('li');
    var $this;
    $postLeftSimilar.hover(function () {
        $this = $(this);
        $this.find('.post-left-similar-contents').show();
    }, function () {
        $this = $(this);
        $this.find('.post-left-similar-contents').hide();
    });

    var $postComment = $('.post-left-comment-tabs').find('li');
    $postComment.hover(function () {
        $this = $(this);
        $postComment.removeClass('post-left-comment-tabs-hover');
        $postComment.find('i').removeClass('post-icon-text-hover').removeClass('post-icon-img-hover').removeClass('post-icon-video-hover');
        $this.addClass('post-left-comment-tabs-hover');
        var $thisI = $this.find('i');
        $thisI.addClass($thisI.attr('class') + '-hover');
        var $index = $postComment.index($this);
        var $commentId = '#textComment';
        console.log($postComment.index($this));
        $commentId = $index == 0 ? '#textComment' : ($index == 1 ? '#imgComment' : '#videoComment');
        $('.post-left-comment-input').children().hide();
        $('.post-left-comment-input').children($commentId).show();
    });
})

