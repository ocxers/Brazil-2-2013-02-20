$(document).ready(function () {
    var ct = $('#content');
    var cb = $('#collapseButton');
    var eb = $('#expandButton');
    cb.click(function () {
        // if you want to hide the whole left bar, please set the 'borderLeftWidth' as 0.
        ct.animate({ borderLeftWidth: '10'}, 550, function(){
            cb.hide();
            eb.show();
        });
    });
    eb.click(function () {
        ct.animate({ borderLeftWidth: '300'}, 550, function(){
            eb.hide();
            cb.show();
        });
    });
});

/* by Shengxing.Chi 2/20/2013 */