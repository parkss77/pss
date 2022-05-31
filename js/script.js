/* 타이핑 효과 */
$(function() {

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".section1 .video_text .typing-txt ul li").length;

    var typingTxt = $(".section1 .video_text .typing-txt ul li").eq(liIndex).text();

    typingTxt = typingTxt.split("");

    if (typingBool == false) {
        typingBool = true;
        var tyInt = setInterval(typing, 110);
    }

    function typing() {
        $(".section1 .video_text .typing-txt ul li").removeClass("on");
        $(".section1 .video_text .typing-txt ul li").eq(liIndex).addClass("on");

        if (typingIdx < typingTxt.length) {
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]);
            typingIdx++;
        } else {
            if (liIndex < liLength - 1) {
                liIndex++;
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                clearInterval(tyInt);

                setTimeout(function() {
                    tyInt = setInterval(typing, 110);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                clearInterval(tyInt);

                setTimeout(function() {

                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                    $(".typing ul li").html("");

                    tyInt = setInterval(typing, 110);
                }, 1000);

            }
        }
    }

});

/* 메뉴 누르면 해당 영역으로 이동3 */
$(function() {
    $('.header a').on('click', function(e) {
        var index = $(this).attr('href');
        var secTop = $(index).offset().top;
        $("html, body").animate({
            'scrollTop': secTop - 60
        }, 600);
    });
});

/* 메뉴 누르면 해당 영역으로 이동3 -mobile- */
$(function() {
    $('.header .mobile_menu_main_nav a').on('click', function(e) {
        var index = $(this).attr('href');
        var secTop = $(index).offset().top;
        $("html, body").animate({
            'scrollTop': secTop - 60
        }, 600);
    });
});

/* 클릭 시 스크롤 내리기 */
$(function() {
    $(".click").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 700);
    });
});

/* 스크롤 이벤트 플러그인 */
$(function() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 400,
        duration: 1500,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });
});

/* 경고창 */
$(function() {
    $('.section4 .send_box .box2').click(function() {
        alert('준비중입니다. 감사합니다.');
    });
});
