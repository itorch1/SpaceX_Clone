// Hamburger & Overlay
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

// Stats
const counters = document.querySelectorAll('.counter');
let statsFlag = false;

// Header
const header = document.getElementById('main-header');
let headerFlag = false;

// Section inner
const sectionInners = document.querySelectorAll('.section-inner');

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);
overlay.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');

    // if (!overlay.classList.contains('overlay-show')) {
    //     overlay.classList.add('overlay-hide');
    // } else {
    //     overlay.classList.remove('overlay-hide');
    // }
}

function scrollPage() {
    const scrollPos = window.scrollY;
    // Hide overlay
    if (overlay.classList.contains('overlay-show')) {
        navToggle();
    }
    // stats
    if (scrollPos >= 100 && !statsFlag) {
        countUp();
        statsFlag = true;
    } else if (scrollPos < 100 && statsFlag){
        reset();
        statsFlag = false;
    }

    // hide header
    if (scrollPos >= 150 && !headerFlag) {
        header.classList.add('header-hidden');
        btn.classList.add('header-hidden');
        header.classList.remove('header-shown');
        btn.classList.remove('header-shown');
        headerFlag = true;
    } else if (scrollPos < 150 && headerFlag) {
        header.classList.remove('header-hidden');
        btn.classList.remove('header-hidden');
        header.classList.add('header-shown');
        btn.classList.add('header-shown');
        headerFlag = false;
    }

    // section inner
    if (scrollPos >= window.innerHeight * 0.7)
        sectionInners[1].classList.add('inner-animate');
    if (scrollPos >= window.innerHeight * 1.7)
        sectionInners[2].classList.add('inner-animate');
    if (scrollPos >= window.innerHeight * 2.7)
        sectionInners[3].classList.add('inner-animate');
    if (scrollPos >= window.innerHeight * 3.7)
        sectionInners[4].classList.add('inner-animate');
    if (scrollPos >= window.innerHeight * 4.7) {
        sectionInners[5].classList.add('inner-animate');
        console.log('trogg')
    }
}

function countUp() {
    counters.forEach( (counter) => {
        counter.innerHTML = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const c = +counter.innerHTML;

            const increment = target / 100;

            if (c < target) {
                counter.innerHTML = `${Math.ceil(c + increment)}`;
                
                setTimeout(updateCounter, 50);
            }
        };

        updateCounter();
    } );
}

function reset() {
    counters.forEach( counter => counter.innerHTML = '0' );
}