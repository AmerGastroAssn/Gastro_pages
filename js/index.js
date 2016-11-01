$document.ready(function() {
    $('p.details').hide();
    $('li.discriptor').click(function() {
        $('p.details').toggle('1000');
    });
});
