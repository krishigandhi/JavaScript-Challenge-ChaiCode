// Activity - 1
const para = document.querySelector('#task1');
const button = document.querySelector('#b1');
button.addEventListener("click",function(){
    para.innerHTML= "Para changed"
});

const img = document.querySelector('#img1');
img.addEventListener("dblclick",function(){
    img.style.visibility = "hidden";
});
// Activity - 2
para.addEventListener("mouseover",function(){
    para.style.backgroundColor = "red";
});
para.addEventListener("mouseout",function(){
    para.style.backgroundColor = "blueviolet";
});

// Activity - 3
const input = document.querySelector('#inp');
input.addEventListener("keydown",function(e){
    console.log(e.key)
});
const p = document.querySelector('#keyboar');
input.addEventListener("keyup",function(input){
    p.innerHTML = `${input.key} pressed `
});

// If want to display whole value typed in inp field 
// input.addEventListener("input", function() {p.innerHTML = input.value;   });

// Activity - 4
let form = document.querySelector('#form');
form.addEventListener('submit',(e) => e.preventDefault());
// const data = new data(form);
// console.log(data);


// Activity - 5    EVENT DELEGATION

const lis = document.querySelector('#list');
lis.addEventListener('click',function(e){
        if(e.target.tagName == 'LI'){
            console.log(e.target.textContent)
        }
});

const parent = document.querySelector('#parent');
parent.addEventListener('click',function(e){
   if (e.target && e.target.matches('.child')){
        console.log('child clicked', e.target.textContent);
   }
});
const addChild = document.querySelector('#adchild');
addChild.addEventListener('click',function(){
   const newChild = document.createElement('div');
   newChild.className = 'child';
   newChild.textContent = newChild  +  (parent.children.length + 1);
   parent.appendChild(newChild);
})