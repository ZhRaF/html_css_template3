let x=document.querySelector(".header .container .other-links");
function other_links(){
x.style.opacity="1";  }

function hide(hidden_elm) {
hidden_elm.style.opacity= '0';}
window.addEventListener('scroll', function() {
  hide(x);
});

//increase numbers on scrolling
let stats_container=document.querySelector(".stats  .container");
let statistics=document.querySelectorAll(".stats .container .stat h2");
let called=false;

let skills_percentages=document.querySelector(".skills  .percentages");
let skills=document.querySelectorAll(".skills  .percent  span");
let called0=true;

window.onscroll=function(){
 if(window.scrollY >= stats_container.offsetTop){
    if(!called){
        statistics.forEach((el)=>increase_counter(el));
        called=true;
    }
 }

 if(window.scrollY < skills_percentages.offsetTop){
  if(called0){
    skills.forEach((el)=>increase_width(el));
    called0=false;

  }
 }

};





function increase_counter(el) {
    let goal = parseInt(el.dataset.goal); 
  
    let intervalId = setInterval(function () {
      if (parseInt(el.textContent) === goal) {
        clearInterval(intervalId); // Stop the interval when the goal is reached
      } else {
        el.textContent ++;
      }
    }, 6000 / goal );
  }


//function to change the width
function increase_width(el){
  el.setAttribute("data-width",el.style.width);
let goal=parseFloat(el.dataset.width);
  el.style.width="0%";

  let intervalId0=setInterval(function(){
    if(el.style.width===el.dataset.width){
      clearInterval(intervalId0);

    }
    else{
      el.style.width = (parseFloat(el.style.width) + 1).toString() + "%";    }
}, 6000 / goal);
}

