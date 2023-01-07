window.onscroll = function () {
    myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const root = document.querySelector(':root');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        root.style.setProperty('--primary-color', '#1b2430');
        root.style.setProperty('--secondary-color', '#f7f6f2');
        
       /*  body.style.transition = '2s';
        navbar.style.transition = '2s'; */
    }else{
        root.style.setProperty('--primary-color', '#f7f6f2');
        root.style.setProperty('--secondary-color', '#1b2430');
        /* body.style.transition = '2s'; 
         navbar.style.transition = '2s'; */
    }
});

