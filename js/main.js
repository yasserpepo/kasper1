const header = document.getElementById("header"), 
hamburger = document.getElementById("t-menu"), 
hov = document.getElementById("ul-active"), 
active = document.getElementById("active");

hamburger.addEventListener("click",()=>{
  header.classList.toggle("nav-mobile");
})

hov.onmouseover=()=>{
  active.classList.remove("active");
};
hov.onmouseout=(eo)=>{
  active.classList.add("active");
} 