//navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    }
    else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

//humberger
const humberger = document.querySelector('#humberger');
const navMenu = document.querySelector('#nav-menu')

humberger.addEventListener('click', function() {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
})

//Click di luar humberger
window.addEventListener('click', function (e) {
   if (e.target != humberger && e.target != navMenu) {
    humberger.classList.remove('humberger-active');
    navMenu.classList.add('hidden');
   } 
});

//Dark mode toggle
const darokToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darokToggle.addEventListener('click', function () {
    if (darokToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

//pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        darokToggle.checked = true;
    } else {
        darokToggle.checked = false;
    }