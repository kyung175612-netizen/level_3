/* var.js */
// 한줄주석(ctrl+/)
/* 여러줄 주석(shift+alt+a) */
//변수와 함수
//변수키워드 변수명 대입연산자 대입값;
//함수생성키워드 함수명(){실행결과;}
let user_name = '홍길동';
let user_pw = '1234';
function func1(){//생성과 준비
    console.log(user_name);
    console.log(user_pw);
}//함수 준비 끝 위치
func1(); //함수호출

//목표) 원하는 영화명(토이스토리)을 검색하고 검색하기 버튼을 누르면 영화명, 개봉일이 콘솔에 출력
//데이터 == 변수
const movie_name = '토이스토리5';
const movie_date = '26.07.07';
//반복 실행 == 함수
function movie_search(){
    console.log(movie_name);
    console.log(movie_date);
}

//목표) 노트북 검색하기 버튼을 클릭하면 삼성 노트북, 15인치 정보가 콘솔에 출력하기
//변수, 함수명 참고) 노트북 모델명, 노트북 크기, 노트북 검색
//변수생성키워드 노트북모델명 = 삼성노트북;
//변수생성키워드 노트북크기 = 15인치;
//함수생성키워드 노트북검색(){콘솔출력명령어();}
const notebook_name = 'NT940XGK-KC51G';
const notebook_info = '15inch';
function notebook_search(){
    console.log(notebook_name);
    console.log(notebook_info);
}

//목표) 여행검색하기 클릭 시 여행지/가격/특산물 정보 콘솔 출력
//강릉/20만원/감자빵
const travel_name = '강릉시';
let travel_price = '200,000원';
let travel_food = '감자빵';
function travel_search(){
    console.log(travel_name);
    console.log(travel_price);
    console.log(travel_food);
}