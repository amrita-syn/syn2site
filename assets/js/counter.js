$('.number').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
            if (now == $(this).text() && now !== 0) {
                $('#percent').text("99.99%");
                $('#min1').text("15");
                $('#reportsRead').text("5M+");
                const text = $(this).text();
                if (text == 500 || text == 15) $(this).text(text + "+");
                if (text == 5) $(this).text(text + "M+");
            }
        }
    });
});