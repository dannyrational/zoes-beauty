const mobileNavbar = document.querySelector("#mobileNavbar");
const mobileMenuBtn = document.querySelector("#mobileMenuBtn");
const logoWhite = document.querySelector("#logoWhite");
const logoBlack = document.querySelector("#logoBlack");

window.addEventListener('scroll', function() {
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10) {
        mobileNavbar.classList.add('bg-white');
        mobileMenuBtn.classList.remove('text-white');
        logoWhite.classList.add('hidden');
        logoBlack.classList.remove('hidden');
    } else {
        mobileNavbar.classList.remove('bg-white');
        mobileMenuBtn.classList.add('text-white');
        logoWhite.classList.remove('hidden')
        logoBlack.classList.add('hidden');
    };
});

