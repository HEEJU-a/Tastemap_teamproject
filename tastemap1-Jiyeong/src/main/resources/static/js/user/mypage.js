let input = document.querySelector('#img');
function imgsubmit(){
    if(input.files.length == 0){
        return false;
    }
    return true;
}

var dt =$(".rsvDt").html();
var ct =$(".rsvCt").html();
var nm =$(".rsvNm").html();

var rsvTable = $(".rsvTable");

function apiInfo() {
    fetch(`/user/idChk?email=${email}`)
        .then(function(res){
            return res.json();
        })
        .then(function(myJson){
            console.log(myJson);
            switch(myJson.result){
                case 0:
                    alert('이 아이디는 사용할 수 있습니다');
                    break;
                case 1:
                    alert('이 아이디는 사용할 수 없습니다');
                    break;
            }
        });
}

(function(){
    $(function(){

        var eventList = [];

        for (var i=0; i<rsvTable.length; i++) {
            var obj = {
                title: ((rsvTable[i].querySelector('.rsvNm').innerText)
                    + '(' + (rsvTable[i].querySelector('.rsvCt').innerText)) + ')',
                start: rsvTable[i].querySelector('.rsvDt').innerText,
                allDay: true
            }

            eventList.push(obj);
        }

        // var obj = {
        //     title: nm, ct,
        //     start: dt,
        //     allDay: true
        // }
        //
        // for(var i=0; i<obj.length; i++){
        //     console.log(obj[i]);
        // }
        //
        // var obj2 = {
        //     title: nm,
        //     start: dt,
        //     allDay: true
        // }

        // eventList.push(obj)
        // eventList.push(obj2)

        // eventList.forEach((obj, i, origin) => {
        //     console.log(obj, i , origin);
        // });


// calendar element 취득
        var calendarEl = $('#calendar')[0];
// full-calendar 생성하기
        var calendar = new FullCalendar.Calendar(calendarEl, {
            width: '50vw',
            height: '60vh', // calendar 높이 설정
            expandRows: true, // 화면에 맞게 높이 재설정
            slotMinTime: '00:00', // Day 캘린더에서 시작 시간
            slotMaxTime: '24:00', // Day 캘린더에서 종료 시간
// 해더에 표시할 툴바
            headerToolbar: {
                left: 'prev,next',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialView: 'dayGridMonth', // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
            // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
            navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
            editable: true, // 수정 가능?
            selectable: true, // 달력 일자 드래그 설정가능
            nowIndicator: true, // 현재 시간 마크
            dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
            locale: 'ko', // 한국어 설정
            eventAdd: function(obj) { // 이벤트가 추가되면 발생하는 이벤트
                console.log(obj);
            },
            eventChange: function(obj) { // 이벤트가 수정되면 발생하는 이벤트
                console.log(obj);
            },
            eventRemove: function(obj){ // 이벤트가 삭제되면 발생하는 이벤트
                console.log(obj);
            },

// 이벤트
            events: eventList
        });

// 캘린더 랜더링
        calendar.render();
    });
})();
