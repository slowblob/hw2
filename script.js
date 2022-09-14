let hour=  new Date().getHours();
let element= document.querySelector('body');
let shape=document.getElementById('shape');
let head=document.querySelector('header');
let foot=document.querySelector('footer');
let day= new Date().getDay();
let greeting=document.getElementById('greeting');
console.log(day)
if (hour>6 && hour<=17){
    element.classList.add('light')
    let sunny=document.createElement('div')
  sunny.classList.add('sun')
  sunny.style.bottom= "650px";
  sunny.style.right= "100px";
  shape.appendChild(sunny);
}
else {
  element.classList.add('dark')
  let moon=document.createElement('div')
  moon.classList.add('moon')
  moon.style.bottom= "650px";
  moon.style.right= "100px";
  shape.appendChild(moon);
  head.style.backgroundColor='rgb(250,220,56)';
  foot.style.backgroundColor='rgb(250,220,56)'
}
if (day==1){
    greeting.innerHTML="Monday";
}
else if(day==2){
    greeting.innerHTML="It's Tuesday!";
}
else if(day==3){
    greeting.innerHTML="It's the middle of the week!"
}
else if(day==4){
    greeting.innerHTML="One more day to Firday"
}
else if(day==5){
    greeting.innerHTML="Yay, it's Friday!"
}
else {
    greeting.innerHTML="It's finally the weekend";
}
