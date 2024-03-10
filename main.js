let imgFrame = document.querySelector('.addedImg')
let imgFrameNext = document.querySelector('.scaledImg')
let opaImg = document.querySelector('.scaledImg1')
let textArea = document.querySelectorAll('.textArea img')
let i = 1;

console.log(textArea[0])


function test(){ setInterval(function(){
  if(i < 11) {
    i++
    if(i<5) {
      imgFrame.innerHTML += `<img class="addImg" src="./images/background0${i}.jpg">`
    } else if(i==5) {
      imgFrame.animate(scaleImg, scaleTiming)
    } else if (i ==6) {
      opaImg.style.display = 'block'
    } else if(i == 7) {
      imgFrameNext.innerHTML += `<img class="addImg" src="./images/background0${i-1}.jpg">`
    } else if (7 < i && i<12) {
      textArea[i-8].style.opacity = 1;
    }
  } else {
    clearInterval(test)
  }
}, 500)}


setTimeout(test, 1335)


const scaleImg = [
  {transform: 'scale(1)', transformOrigin:'74.5% 51%' },
  {transform: 'scale(1.65)', transformOrigin:'74.5% 51%'}
]

const scaleTiming = {
  duration: 500,
  easing: 'linear',

}   

// const textEffect= [
//   {opacity: 0},
//   {opacity: 1}
// ]
