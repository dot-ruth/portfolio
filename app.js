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

function sendEmail() {
  // Fetch form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  // Construct the email body
  var emailBody = "Name: " + name + "\nEmail: " + email + "\nSubject: " + subject + "\nMessage: " + message;

  // You can use a service like EmailJS or your own server to send the email
  // Example using EmailJS:
  emailjs.send({
    Host: "smtp.gmail.com",
    Username: "ruthgetaneh5@gmail.com",
    Password: "whattoremember",
    To: "ruthgetaneh5@gmail.com",
    From: email,
    Subject: subject,
    Body: emailBody
  }).then(
    function (message) {
      alert("Email sent successfully");
    },
    function (error) {
      alert("Error sending email");
    }
  );
}


pagetransition();
 
