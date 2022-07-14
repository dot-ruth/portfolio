const sections = document.querySelectorAll(".section");
const sectbtn = document.querySelectorAll(".controlls");
const secbtn = document.querySelectorAll(".controll");
const allsection = document.querySelectorAll(".main-content");
//console.log(secbtn.length);
let pagetransition = ()=>{
    //button click active class
    for(let i=0;i<secbtn.length;i++){
       secbtn[i].addEventListener("click",function(){
        let currentbtn = document.querySelectorAll(".active-btn");
        currentbtn[0].className = currentbtn[0].className.replace('active-btn','');
        this.className += " active-btn";
       }) 
    }
   for(let i=0;i<allsection.length;i++){
allsection[i].addEventListener("click",(e)=>{
   const id = e.target.dataset.id;
   if(id){
    //remove selected
    sectbtn.forEach((btn)=>{
        btn.classList.remove('active')
    })
    e.target.classList.add('active')

    sections.forEach((section)=>{
        section.classList.remove('active')
    })

    const element = document.getElementById(id);
    element.classList.add('active')

   }
    })
}
   
   
}
pagetransition();
 