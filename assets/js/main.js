// ? ***** Variables *****
const mobileNavbar = document.querySelector("#mobileNavbar");
const mobileMenuBtnOpen = document.querySelector("#mobileMenuBtnOpen");
const mobileMenuBtnClose = document.querySelector("#mobileMenuBtnClose");
const logoWhite = document.querySelector("#logoWhite");
const logoBlack = document.querySelector("#logoBlack");

const slideOutMenu = document.querySelector("#slideOutMenu");
const bodyWrap = document.querySelector("#bodyWrap");

// ? ***** Navbar Color Change on Scroll *****
window.addEventListener('scroll', function () {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        mobileNavbar.classList.add('bg-white');
        // mobileNavbar.classList.remove('absolute');
        // mobileNavbar.classList.add('fixed');
        mobileMenuBtnOpen.classList.remove('text-white');
        mobileMenuBtnClose.classList.remove('text-white');
        logoWhite.classList.add('hidden');
        logoBlack.classList.remove('hidden');
    } else {
        mobileNavbar.classList.remove('bg-white');
        // mobileNavbar.classList.remove('fixed');
        // mobileNavbar.classList.add('absolute');
        mobileMenuBtnOpen.classList.add('text-white');
        mobileMenuBtnClose.classList.add('text-white');
        logoWhite.classList.remove('hidden')
        logoBlack.classList.add('hidden');
    };
});

// ? ***** Slide Out Menu *****
mobileMenuBtnOpen.addEventListener("click", function () {
    slideOutMenu.classList.remove('-right-full')
    slideOutMenu.classList.add('right-0')
    bodyWrap.classList.remove('left-0')
    bodyWrap.classList.add('-left-3/4')
    mobileNavbar.classList.remove('left-0')
    mobileNavbar.classList.add('-left-3/4')
    mobileMenuBtnOpen.classList.add('hidden');
    mobileMenuBtnClose.classList.remove('hidden');
});

mobileMenuBtnClose.addEventListener("click", function () {
    slideOutMenu.classList.remove('right-0')
    slideOutMenu.classList.add('-right-full')
    bodyWrap.classList.remove('-left-3/4')
    bodyWrap.classList.add('left-0')
    mobileNavbar.classList.remove('-left-3/4')
    mobileNavbar.classList.add('left-0')
    mobileMenuBtnOpen.classList.remove('hidden');
    mobileMenuBtnClose.classList.add('hidden');
});