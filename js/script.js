//toggle class active

const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk close menu

const menu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})

// script auto slider

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4) {
        counter = 1;
    }
}, 4500)