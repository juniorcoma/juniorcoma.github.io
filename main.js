let countNum = 0;
let clickCount = (new Date().getMonth()) + 1;
const calenderDate = document.querySelector('.calender-date');
const yearContent = document.querySelector('.year')
yearContent.innerHTML = `${new Date().getFullYear()}`;
document.querySelector(' .month').innerHTML = `${clickCount}월`;
const modal = document.querySelector('.modal-picture');
const selectDate = document.querySelector('.modal-picture > .input-date');
const date = new Date();
const currnetYear = date.getFullYear();
const submitForm = document.querySelector('.submit-form');
let imgUrl = null;
const imgDataArr = [];

const prevBtn = document.querySelector('.prev.btn');
const nextBtn = document.querySelector('.next.btn');

const file = document.querySelector('#img-file');
const previewImg = document.querySelector('.preview-img');
const label = document.querySelector('label > span');
const historyModal = document.querySelector('.history-wrapper');

const memoTitle = document.querySelector('.content-box > .content.title')
const memoDescription = document.querySelector('.content-box > .content.description')
const historyDate = document.querySelector('.history-modal > .history-date')

function makeCalender(count = countNum) {

    const currentMonth = ((date.getMonth() + 1) - count);


    const prev = new Date(currnetYear, currentMonth - 1, 0)
    const current = new Date(currnetYear, currentMonth, 0)

    const prevLastDate = prev.getDate();
    const currentLastDate = current.getDate();

    const prevLastDay = prev.getDay();
    const currentLastDay = current.getDay();

    const prevArr = [];
    const currentArr = [...Array(currentLastDate + 1).keys()].slice(1).map((v, i) => `<div class='current date' data=${(yearContent.innerHTML + (currentMonth % 12 === 0 ? 12 : currentMonth % 12) + (i + 1))}>${v}</div>`);
    const nextArr = [];

    if (prevLastDay !== 6) {
        for (let i = 0; i <= prevLastDay; i++) {
            prevArr.unshift(`<div class='other date'>${prevLastDate - i}</div>`)
        }
    }

    if (currentLastDay !== 6) {
        for (let i = 1; i < 7 - currentLastDay; i++) {
            nextArr.push(`<div class='other date'>${i}</div>`)
        }
    }

    const dateArr = prevArr.concat(currentArr, nextArr)

    for (let value of dateArr) {
        calenderDate.innerHTML = calenderDate.innerHTML + value;
    }




}


function dateClickEvent(e) {
    if (e.target.classList.contains('check') || e.target.classList.contains('memo')) {
        historyModal.classList.add('show')
        if(e.target.classList.contains('memo')){
            modalInputText(e.target.parentNode.attributes[1].value)
        }else{
            modalInputText(e.target.attributes[1].value)
        }
     
    } else {
        [...e.target.parentNode.children].forEach(v => {

            v.classList.remove('currentclick')
        })

        e.target.classList.add('currentclick')

        if (e.target.classList.contains('current')) {
            modal.classList.add('active');
            selectDate.innerHTML = `${clickCount}월 ${e.target.textContent}일`;
        } else {
            modal.classList.remove('active')
        };
    }




}
function prevMonth() {
    countNum += 1;
    calenderDate.innerHTML = '';

    if (clickCount % 13 === 1) {
        document.querySelector('.year').innerHTML = +(document.querySelector('.year').innerHTML) - 1;
        clickCount = 12;
    } else {
        clickCount -= 1;
    }
    makeCalender(countNum);
    document.querySelector(' .month').innerHTML = `${clickCount}월`;
    callMemoData();
}
function nextMonth() {
    countNum -= 1;
    clickCount += 1;
    calenderDate.innerHTML = '';

    if (clickCount % 13 === 0) {
        document.querySelector('.year').innerHTML = +(document.querySelector('.year').innerHTML) + 1;
        clickCount = 1;
    }
    makeCalender(countNum);
    document.querySelector(' .month').innerHTML = `${clickCount}월`;
    callMemoData();
}

function formSubmit(e) {
    e.preventDefault();
    const year = +(document.querySelector('.year').innerHTML);
    const dateArr = selectDate.innerHTML.split(' ').map(v => +(v.slice(0, v.length - 1)))
    const arr = [year, ...dateArr, e.target[1].value, e.target[2].value]
    const objectData = new ImgData(arr);
    console.log(objectData.year)
    if (imgDataArr.length === 0) {
        imgDataArr.push(objectData)
    } else {
        for (let value of imgDataArr) {
            if (objectData.year === value.year) {
                value.data.push(...objectData.data)
            } else {
                imgDataArr.push(objectData)
            }
        }
    }
    previewImg.src = null;
    label.style.visibility = 'visible'
    e.target[2].value = null;
    e.target[1].value = null;
    modal.classList.remove('active');
    URL.revokeObjectURL(imgUrl);
    check()
    console.log(imgDataArr)

}

function check() {
    const dates = document.querySelectorAll('.current.date');
    dates.forEach(v => {
        if (v.classList.contains('currentclick')) {
            v.classList.remove('currentclick');
            if (v.classList.contains('check') === false) {
                v.classList.add('check');
                v.innerHTML += `<i class="fa-regular fa-note-sticky memo"></i>`
            }
        }
    })
}

function modalInputText(data) {
    let title
    let content
    let month
    let day
    let year
    for (let object of imgDataArr) {
        for (let value of object.data) {
            if (data == value.dateData) {
                title = value.title;
                content = value.description;
                month = value.month
                day = value.day
                year = data.slice(0, 4)
            }
        }
    }
    historyDate.innerHTML = `${year}년 ${month}월 ${day}일`
    memoTitle.innerHTML = title;
    memoDescription.innerHTML = content;

}

function callMemoData() {
    const dateDataArr = document.querySelectorAll('.current.date');
  
    if(imgDataArr.length !== 0){
        const historyDataArr = [];
        for (let value of imgDataArr) {
            historyDataArr.push(...value.data)
        }
    
        for(let data of historyDataArr){
            dateDataArr.forEach(v=>{
                if(v.attributes[1].value == data.dateData){
                    v.classList.add('check')
                    v.innerHTML += `<i class="fa-regular fa-note-sticky"></i>`
                }
            })
        }
    }
  

}

prevBtn.addEventListener('click', prevMonth);
nextBtn.addEventListener('click', nextMonth);

document.querySelector('.modal-picture > .close-modal').addEventListener('click', () => {
    modal.classList.remove('active');
    const date = document.querySelectorAll('.current.date');
    date.forEach(v => {
        v.classList.remove('currentclick')
    })

})


file.addEventListener('change', (e) => {
    const imgFile = e.target.files[0];
    const blob = new Blob([imgFile])
    imgUrl = URL.createObjectURL(blob);
    previewImg.src = imgUrl;
    label.style.visibility = 'hidden'
})



class ImgData {
    constructor(data) {
        this.year = data[0],
            this.data = [{
                month: data[1],
                day: data[2],
                title: data[3],
                description: data[4],
                dateData: data[0] + '' + data[1] + data[2]
            }]
    }
}



submitForm.addEventListener('submit', formSubmit);
calenderDate.addEventListener('click', dateClickEvent);
document.querySelector('.history-modal > .history-modal-close').addEventListener('click', () => {
    historyModal.classList.remove('show');
})
makeCalender()

//이제 달 바꿔도 메모한거는 뜨게해라


const saveBtn = document.querySelector('#save-btn');

function saving(){
    const jsonData = JSON.stringify(imgDataArr)
    localStorage.setItem('data',jsonData)
    alert('저장했습니다')
}


window.onload = function(){
    const callData = JSON.parse(localStorage.getItem('data'));
    if(callData !== null){
        imgDataArr.push(...callData);
        callMemoData()
    }
}

saveBtn.addEventListener('click',saving)