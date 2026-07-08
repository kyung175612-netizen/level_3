// dom01.js
// 목표)글쓰기 CTA(고정) 버튼 클릭 시 글쓰기 
// 1. 팝업, 뒤 배경 숨기기 먼저 작업
// 1-1. 팝업, 뒤 배경 자바스크립트 객체 등록(변수)
const popup = document.querySelector('.pop_up');
const popup_bg = document.querySelector('.popup_bg');
//콘솔에 변수 확인해서 변수가 정상인지 확인
// null : 변수의 데이터가 존재하지 않는다.
console.log(popup);
console.log(popup_bg);
// 자바스크립트에서 동적으로 스타일(css) 수정하기
// 스타일(css) == 자바스크립트 속성
// 객채.속성
// 객체.style.css속성=값)
// popup.style.border='1px solid red';
// popup.style.backgroundColor='yellow';
// popup.style.fontsize='2em';
// popup.style.padding='15px 30px';
popup.style.display='none';
popup_bg.style.display='none';
// 2. CTA 클릭 시 위 1번 대상 보이게 하기
// 팝업 실행 목적 함수 생성
// function 함수명(){반복실행되는 내용}
function popupShow(){
    popup.style.display='block';
    popup_bg.style.display='block';
}
function popupHide(){
    popup.style.display='none';
    popup_bg.style.display='none';
}