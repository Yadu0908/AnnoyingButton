

const wrapper= document.querySelector('.wrapper')
const question= document.querySelector('.question')
const yes= document.querySelector('.yesButton')
const no= document.querySelector('.noButton')
const img= document.querySelector('.img');

const wrapperRect = wrapper.getBoundingClientRect();
const noButtonRect = no.getBoundingClientRect();

yes.addEventListener('click', ()=>{

    question.innerHTML = "I love you too "
    img.src= "img/thirdExp.png"
    confetti();
  

})


no.addEventListener('mouseover', ()=>{

    question.innerHTML = "Ummmmmmm "
    img.src= "img/secondExp.png"

    const i = Math.floor(Math.random() * (wrapperRect.width - noButtonRect.width))+2

    const j = Math.floor(Math.random() * (wrapperRect.height - noButtonRect.height))+2

    no.style.left= i+ 'px';
    no.style.top= j+ 'px';
})