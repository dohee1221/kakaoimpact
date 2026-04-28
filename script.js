$(function(){
    // 1. 방금 전 마우스 X 좌표를 저장할 변수 (초기값은 0)
    let lastMouseX = 0; 

    // 2. 카드 위에서 마우스가 움직일 때마다 실행
    $('.item_card1').on('mousemove', function(e) {

        // .on()어떤 사건(이벤트)이 일어났을 때(ON) 작동해라"라는 의미
        
        let currentMouseX = e.pageX; // 현재 마우스 X 좌표

        // .pageX : Page는 현재 보고 있는 웹 문서 전체, x는 가로 방향 의미


        // 3. 현재 위치와 이전 위치 비교
        if (currentMouseX > lastMouseX) {
            // 오른쪽으로 이동 중! -> look-right 클래스 붙이기
            $(this).find('.eyes').removeClass('look-left').addClass('look-right');
            
        } else if (currentMouseX < lastMouseX) {
            // 왼쪽으로 이동 중! -> look-left 클래스 붙이기
            $(this).find('.eyes').removeClass('look-right').addClass('look-left');
        }

        // 4. 다음 비교를 위해 방금 측정된 위치를 lastMouseX에 저장 (핵심 포인트!)
        lastMouseX = currentMouseX; 
    });

    // (보너스 디테일) 마우스가 카드 밖으로 나가면 기본 눈(왼쪽)으로 리셋
    $('.item_card1').on('mouseleave', function() {
        $(this).find('.eyes').removeClass('look-right look-left');
    });
});