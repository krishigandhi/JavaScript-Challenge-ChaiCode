// Activity - 1

const select = document.getElementById('ele') ;
select.style.color = "blue"

const para = document.querySelector('.para');
para.style.backgroundColor = "blue";

// Activity - 2

const div = document.createElement('div');
div.innerHTML= "div created by js ";
document.body.appendChild(div);

const ul = document.querySelector('ul');
const li = document.createElement('li');
li.innerHTML="Li creted by js";
ul.appendChild(li);
// Activity - 3



ul.removeChild(li);
const parent = document.querySelector('#lastChild');
if(parent.lastElementChild){
    parent.removeChild(parent.lastElementChild);
}
// Activity - 4
const img = document.querySelector('img');
img.src = "https://cdn.pixabay.com/photo/2013/07/18/10/56/smiley-163510_640.jpg ";


const RemCss= document.querySelector('.cssremove');
RemCss.style.backgroundColor = "rebeccapurple"

   

// Activity - 5
let changePara = document.querySelector('.changePara');
 document.querySelector('#b1').addEventListener("click", function() { changePara.innerHTML="Para changed on click"
 }
);

let changeBorder = document.querySelector('#changeBorder');
changeBorder.addEventListener('mouseover',function(){
    changeBorder.style.borderColor= 'aqua'
})
changeBorder.addEventListener('mouseout',function(){
    changeBorder.style.borderColor= '#000'
})

