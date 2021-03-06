// ? ***** Variables *****
const mobileNavbar = document.querySelector("#mobileNavbar");
const mobileMenuBtnOpen = document.querySelector("#mobileMenuBtnOpen");
const mobileMenuBtnClose = document.querySelector("#mobileMenuBtnClose");
const logoWhite = document.querySelector("#logoWhite");
const logoBlack = document.querySelector("#logoBlack");
const navbarBorder = document.querySelector("#navbarBorder");


const slideOutMenu = document.querySelector("#slideOutMenu");
const bodyWrap = document.querySelector("#bodyWrap");

// ? ***** Navbar Color Change on Scroll *****
window.addEventListener('scroll', function () {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        navbarBorder.classList.add('border-b');
        mobileNavbar.classList.add('bg-white');
    } else {
        navbarBorder.classList.remove('border-b')
        mobileNavbar.classList.remove('bg-white');
    };
});

// ? ***** Slide Out Menu *****
mobileMenuBtnOpen.addEventListener("click", function () {
    slideOutMenu.classList.remove('-right-full');
    slideOutMenu.classList.add('right-0');
    bodyWrap.classList.remove('left-0');
    bodyWrap.classList.add('-left-3/4');
    mobileNavbar.classList.remove('left-0');
    mobileNavbar.classList.add('-left-3/4');
    mobileMenuBtnOpen.classList.add('hidden');
    mobileMenuBtnClose.classList.remove('hidden');
});

mobileMenuBtnClose.addEventListener("click", function () {
    slideOutMenu.classList.remove('right-0');
    slideOutMenu.classList.add('-right-full');
    bodyWrap.classList.remove('-left-3/4');
    bodyWrap.classList.add('left-0');
    mobileNavbar.classList.remove('-left-3/4');
    mobileNavbar.classList.add('left-0');
    mobileMenuBtnOpen.classList.remove('hidden');
    mobileMenuBtnClose.classList.add('hidden');
});