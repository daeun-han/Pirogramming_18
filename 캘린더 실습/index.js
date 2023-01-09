/* 
const date = new Date(); // 현재 날짜 객체 만들기
const date2 = new Date(2023, 7, 23); // 지정 날짜 객체 만들기

console.log(date); // >>> Thu 1 5 2023
console.log(date2);

// 년, 달, 일, 요일 가져오기

const viewYear = date.getFullYear(); // 년도 가져오기
const viewMonth = date.getMonth(); // 달 가져오기
const viewDate = date.getDate(); // 일 가져오기
const viewDay = date.getDay(); // 요일 가져오기

console.log(viewYear); // 2023
console.log(viewMonth + 1); // 0 -> 0~11 숫자 반환 <<< 중요
console.log(viewDate); // 5 -> 1~31 숫자 반환
console.log(viewDay); // 4 -> 1~7 숫자 반환 1(월) 2(화) 3(수) ...

// 지난 달 마지막 날짜와 요일 & 이번 달 마지막 날짜와 요일

// 이전 달 마지막 날짜 가져오기
var startDay = new Date(viewYear, viewMonth, 0);
var prevDate = startDay.getDate();
var prevDay = startDay.getDay();

//한번 찍어봅시다! 
console.log(startDay) // -> 저번 달 마지막 날짜
console.log(prevDate) // -> 31
console.log(prevDay) // -> 6 (요일)

// 이번 달 마지막 날짜 가져오기
const thisLast = new Date(viewYear, viewMonth + 1, 0);
const thisDate = thisLast.getDate();
const thisDay = thisLast.getDay();

//한번 찍어봅시다! 
console.log(thisLast) // -> 이번 달 마지막 날짜로 나옴
console.log(thisDate) // -> 31
console.log(thisDay) // -> 2 (요일)

const prevDates = [];
const thisDates = [...Array(thisDate + 1).keys()].slice(1); // [1, 2, 3, ... 31]
const nextDates = []; 


//이전 달 날짜 배열 채우기
if (prevDay !== 6) {
    for (let i=0; i<prevDay+1; i++) {
        prevDates.unshift(prevDate - i);
    }
}

//다음 달 날짜 배열 채우기
for(let i=1; i<7-thisDay; i++) {
    nextDates.push(i);
}


// Dates 라는 배열로 모두 합치기
const dates = prevDates.concat(thisDates, nextDates);
// => [] + [1, ~31] + [1, ~4]
// => [1, ... 31, 1 ... 4]


// div로 감싸서 배열에 넣기
dates.forEach((date, i) => {
	dates[i] = `<div class="date">${date}</div>`;
});

/* 
=> [<div class="date"> 1 </div>,
<div class="date"> 2 </div>,
<div class="date"> 3 </div>,
<div class="date"> 4 </div>,
...
<div class="date"> 31 </div>,
<div class="date"> 1 </div>,
<div class="date"> 1 </div>,
...
<div class="date"> 4 </div>,
]

// html dates 그리기
document.querySelector('.dates').innerHTML = dates.join('');
*/
/* 
과일=['사과','배']
과일.join(',')
=> 사과,배
*/
/* 

let date = new Date();

const makeCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    //캘린더 년도 달 채우기
    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`; // 2023년 1월

    //이전 달 마지막 날짜 가져오기
    const prevLast = new Date(viewYear, viewMonth, 0);
    const prevDate = prevLast.getDate();
    const prevDay = prevLast.getDay();

    //이번 달 마지막 날짜 가져오기
    const thisLast = new Date(viewYear, viewMonth+1, 0);
    const thisDate = thisLast.getDate();
    const thisDay = thisLast.getDay();

    //전체 달력에 필요한 날짜들을 만들어 주기 위한 배열
    const prevDates = [];
    const thisDates = [...Array(thisDate + 1).keys()].slice(1);
    const nextDates = [];

    //prevDates 계산
    if (prevDay !== 6) {
        for (let i=0; i<prevDay+1; i++){
            prevDates.unshift(prevDate - i);
        }
    }

    //nextDates 계산
    for(let i=1; i <7-thisDay; i++){
        nextDates.push(i);
    }

    //Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);

    dates.forEach((date, i) => {
        dates[i] = `<div class="date">${date}</div>`;
    });

    //Dates 그리기
    document.querySelector('.dates').innerHTML = dates.join('');

    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
        if (+date.innerText === today.getDate()) {
            date.classList.add('today');
            break;
        }
    }
}
}

//함수 실행
makeCalendar()

//이전 달 그리는 함수
const prevMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    makeCalendar();
}

//다음 달 그리는 함수
const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    makeCalendar();
}

//현재 달 그리는 함수
const curMonth = () => {
    date = new Date();
    makeCalendar();
}

// Dates 정리
const firstDateIndex = dates.indexOf(1);
// indexOf(값) 값의 인덱스 번호 출력

const lastDateIndex = dates.lastIndexOf(thisDate);
// 값이 중복될 때, 뒤의 값의 인덱스 출력

dates.forEach((date, i) => {
    // 삼항연산자 [조건문] ? [참일 때 실행] : [거짓일 때 실행]
    // if (조건문) {참일 때 실행} else {거짓일 때 실행}
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                    ? 'this'
                    : 'other';

    dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
});

/* 
indexOf -> 첫번째 요소 인덱스
lastIndexOf -> 마지막 요소 인덱스
*/




/*  최종  */

//Date 객체 생성
let date = new Date();

const makeCalendar = () => {
    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    //캘린더 년도 달 채우기
    document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

    //이전 달 마지막 날짜 가져오기
    const prevLast = new Date(viewYear, viewMonth, 0);
    const prevDate = prevLast.getDate();
    const prevDay = prevLast.getDay();

    //이번 달 마지막 날짜 가져오기
    const thisLast = new Date(viewYear, viewMonth+1, 0);
    const thisDate = thisLast.getDate();
    const thisDay = thisLast.getDay();

    //전체 달력에 필요한 날짜들을 만들어 주기 위한 배열
    const prevDates = [];
    const thisDates = [...Array(thisDate + 1).keys()].slice(1);
    const nextDates = [];

    //prevDates 계산
    if (prevDay !== 6) {
        for (let i=0; i<prevDay+1; i++){
            prevDates.unshift(prevDate - i);
        }
    }

    //nextDates 계산
    for(let i=1; i <7-thisDay; i++){
        nextDates.push(i);
    }

    //Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1); //5
    const lastDateIndex = dates.lastIndexOf(thisDate); //35

    //확인해봅시다
    console.log(firstDateIndex);
    console.log(lastDateIndex);


    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i < lastDateIndex + 1 
                        ? 'this' // true일 경우
                        : 'other'; // flase일 경우

        dates[i] = `<div class="date"><span class="${condition}">${date}</span></div>`;
    })

    //dates 날짜 html 그리기
    document.querySelector('.dates').innerHTML = dates.join('');

    //오늘 날짜 체크하기 
    const today = new Date();
    if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
            if (+date.innerText === today.getDate()) {     
                date.classList.add('today');
                break;
            }
        }
    }
}

//바로 함수 실행하여 이번 달 함수 그리기
makeCalendar()

//이전 달 그리기
const prevMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() - 1);
    makeCalendar();
  }
  
//다음 달 그리기
const nextMonth = () => {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    makeCalendar();
}

//현재 달 그리기
const curMonth = () => {
    date = new Date();
    makeCalendar();
}