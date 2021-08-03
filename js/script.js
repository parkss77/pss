/* 타이핑 효과 */
$(function() {

    var typingBool = false;
    var typingIdx = 0;
    var liIndex = 0;
    var liLength = $(".section1 .video_text .typing-txt ul li").length;

    // 타이핑될 텍스트를 가져온다
    var typingTxt = $(".section1 .video_text .typing-txt ul li").eq(liIndex).text();
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt = typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if (typingBool == false) { // 타이핑이 진행되지 않았다면
        typingBool = true;
        var tyInt = setInterval(typing, 100); // 반복동작
    }

    function typing() {
        $(".section1 .video_text .typing-txt ul li").removeClass("on");
        $(".section1 .video_text .typing-txt ul li").eq(liIndex).addClass("on");
        //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

        if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복
            $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다.
            typingIdx++;
        } else { //한문장이끝나면
            if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function() {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);

                //1초후
                setTimeout(function() {
                    //사용했던 변수 초기화
                    typingBool = false;
                    liIndex = 0;
                    typingIdx = -0;

                    //첫번째 문장으로 셋팅
                    typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
                    //타이핑 결과 모두 지우기
                    $(".typing ul li").html("");

                    //반복시작
                    tyInt = setInterval(typing, 100);
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
    /* AOS 키보드
    페이드-왼쪽, 페이드-오른쪽을 선택하면 오버 플로우가 발생합니다. 가장 쉬운 방법 오버플로에 대한 코드입니다.
      style="overflow-x: hidden" */
});

/* 경고창 */
$(function() {
    $('.section4 .send_box .box2').click(function() {
        alert('준비중입니다. 감사합니다.');
    });
});
