let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else{
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function sendEmail(){
    Email.send({
      SecureToken: "686652f2-3caf-4557-a553-aa665220acb996666",
      To : 'prajapatis1201@gmail.com',
      From : "prajapatis1201@gmail.com",
      Subject : document.getElementById('subject').value,
      Body : "Name: "+ document.getElementById('name').value
            +"<br> Email:" + document.getElementById('email').value
            +"<br> Message:" + document.getElementById('message').value
    }).then(
      message => alert(message)
    );
  }
//e7787bc4-d762-4c7b-a4f1-6e1128da1112
//087366F428507D7C0090CAA3D6FD9C8D3305
// function loader(){
//     document.querySelector('.loader-container').classList.add('fade-out');
// }

// function fadeOut(){
//     setInterval(loader , 1500);
// }

// window.onload = fadeOut();