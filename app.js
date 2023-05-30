let id = document.querySelector('#board')
let colors = ['green','lime','PaleGreen','SpringGreen','lawngreen','greenyellow','chartreuse','']
let number = 1900
 
for (let i=0;i<number;i++){
    let square =document.createElement('div')
id.appendChild(square)
square.addEventListener('mouseover',setColors)
square.classList.add('square')
square.addEventListener('mouseout',removeColor)


}




function getRandomColor(){
return colors[Math.floor(Math.random()*colors.length)]    
}

function setColors(e){
let element = e.target
let color = getRandomColor()
element.style.backgroundColor= color
element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(e){
    let element = e.target
    element.style.backgroundColor= '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}











