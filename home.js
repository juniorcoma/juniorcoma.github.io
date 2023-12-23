
    const sections = document.querySelectorAll('.section');
    const sectionsLength = sections.length
    const section = document.querySelector('.section')

   
    sections.forEach((v, i) => {
        v.addEventListener('wheel', function (event) {
            event.preventDefault();
            let delta = 0;
            count = 0
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta
            } else if (event.detail) delta = -event.detail / 3;

            let moveTop = 0;

            let sctSelect = sections[i];

            if (delta < 0) {
                moveTop = sctSelect.offsetHeight * (i + 1);
                i === 0 ? white() : null;
                if (i < 2) {
                    wheelCurrent(i + 1)
                }


            } else {
                moveTop = sctSelect.offsetHeight * (i - 1)
                i === 1 ? black() : null;
                if(i  > 0){
                    wheelCurrent(i - 1)
                }
            

            }

            window.scrollTo({ top: moveTop, left: 0, behavior: "smooth" });

        })
    })

const moveBoxArr = document.querySelectorAll('.move-section');
const moveContainer = document.querySelector('.section-nav');
const sectionBar = document.querySelector('.section-nav');
function wheelCurrent(current) {

    moveBoxArr.forEach((v, i) => {
        const content = [...v.children];
        content.forEach((item, index) => {
            item.classList.remove('current');
            if (current === i) {
                item.classList.add('current')
            }

        })
    })

}

function white(){
    sectionBar.classList.remove('black');
    sectionBar.classList.add('white')
}
function black(){
    sectionBar.classList.remove('white');
    sectionBar.classList.add('black')
}

moveBoxArr.forEach((v, i) => {
    v.addEventListener('click', (e)=>{
        const height = section.offsetHeight;
        const moveValue = height * i;
        window.scrollTo({top : moveValue, left:0, behavior : "smooth"})
        if(i === 0){
            black();
        }else{
            white();
        }
        if(e.target.classList.contains('move-section')){
            clickCurrent(e.target)
        }else{
            clickCurrent(e.target.parentNode)
        }
        
    })
})

function clickCurrent(target){
    moveBoxArr.forEach(v => {
        const content = [...v.children];
        content.forEach(v=>{
            v.classList.remove('current')
        })
    })
    const arr = [...target.children]
    arr.forEach(v=>{{
        v.classList.add('current')
    }})
    
}

const socialIcon = document.querySelector('.social-icon.social');
const iconArr = document.querySelectorAll('.social-container > .social-icon');
socialIcon.addEventListener('click',()=>{
    iconArr.forEach(v => {
        v.classList.toggle('show');
    })

})