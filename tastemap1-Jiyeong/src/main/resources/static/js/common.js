const modalLogOpen = document.querySelector('#loginModal');
const modalJoinOpen = document.querySelector('#joinModal');
const bg = document.querySelector('.bg');
const loginForm = document.querySelector('#login');
const joinForm = document.querySelector('#join');

const close_btn = document.querySelector('.close_btn');

//로그인 모달창
modalLogOpen.addEventListener('click', () => {
    bg.style.display = 'block';
    loginForm.style.display = 'block';
})

close_btn.addEventListener('click', () => {
    bg.style.display = 'none';
    loginForm.style.display = 'none';
})

bg.addEventListener('click', () => {
    bg.style.display = 'none';
    loginForm.style.display = 'none';
})

//join 모달창
modalJoinOpen.addEventListener('click', () => {
    bg.style.display = 'block';
    joinForm.style.display = 'block';
})

close_btn.addEventListener('click', () => {
    bg.style.display = 'none';
    joinForm.style.display = 'none';
})

bg.addEventListener('click', () => {
    bg.style.display = 'none';
    joinForm.style.display = 'none';
})

//join ajax처리
const frmElem = document.querySelector('#frm');
const uidElem = frmElem.email;
const upwElem = frmElem.pw;
const chkUpwElem = document.querySelector('#chkUpw');
const unmElem = frmElem.nm;
const telElem = frmElem.tel;

const btnChkIdElem = frmElem.idCheckBtn; // 중복ID체크 버튼

btnChkIdElem.addEventListener('click', function(){
    idChkAjax(uidElem.value);
});

function idChkAjax(email) {
    console.log(email)
    if(email.length == 0){
        alert('이메일을 작성해 주세요');
        return;
    }

    fetch(`/user/idChk?email=${email}`)
        .then(function(res){
            return res.json();
        })
        .then(function(myJson){
            console.log(myJson);
            switch(myJson.result){
                case 0:
                    alert('사용가능한 이메일 입니다');
                    break;
                case 1:
                    alert('이 이메일은 사용할 수 없습니다. 다른 이메일을 입력하여 주십시오');
                    break;
            }
        });
}

function frmChk(){
    const upwVal = upwElem.value;
    const chkUpwVal = chkUpwElem.value;

    if(upwVal.length <= 3){
        if(upwVal.length == 0){
            alert('비밀번호를 작성해 주세요');
        }else{
            alert('비밀번호는 4자 이상 작성해주세요');
        }
        return false;
    }else if(upwVal !== chkUpwVal){
        alert('비밀번호를 확인해 주세요');
        return false;
    }

    if(unmElem.value.length < 2){
        alert('이름은 2글자 이상 작성해주세요');
        return false;
    }

    if(telElem.value.length < 11){
        alert('전화번호는 11자 이상 작성해주세요 ex) 01012345678');
        return false;
    }
}
