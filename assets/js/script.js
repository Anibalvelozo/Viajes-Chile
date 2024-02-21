
$(window).scroll(function () {

    if ($(this).scrollTop() > 400) {
        $("#menu").removeClass("navbar");
        $('#menu').addClass("bg-dark");
    } else {

        $("#menu").removeClass("bg-dark");
        $('#menu').addClass("navbar");
    }


    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function () {
        $('[data-toggle="popover"]').popover();
    });

    $(".card").hover(
        function () {
            var cardChange = $(this);
            cardChange.css("color", "black");
        },
        function () {
            var cardChange = $(this);
            cardChange.css("color", "black");
        }
    );

    $(".card1")
        .mouseover(function () {
            $(".card1txt").css("color", "#000000");
        })
        .mouseleave(function () {
            $(".card1txt").css("color", "#ffffff");
        });

    $(".card2")
        .mouseover(function () {
            $(".card2txt").css("color", "#000000");
        })
        .mouseleave(function () {
            $(".card2txt").css("color", "#ffffff");
        });

    $(".card3")
        .mouseover(function () {
            $(".card3txt").css("color", "#000000");
        })
        .mouseleave(function () {
            $(".card3txt").css("color", "#ffffff");
        });

    $(".card4")
        .mouseover(function () {
            $(".card4txt").css("color", "#000000");
        })
        .mouseleave(function () {
            $(".card4txt").css("color", "#ffffff");
        });

    $('#send_email').click(function () {

        alert("Correo enviado correctamente")
    })

});

