// change navbar to black on scroll

window.addEventListener('scroll', function () {

    let header = document.querySelector('nav');
    console.log(header);
    let header2 = document.getElementsByClassName('dropdown-menu');
    let windowPosition = window.scrollY > 50;

    header.classList.toggle('scrolling-active', windowPosition);
    for (i = 0; i < header2.length; i++) {
        // console.log(header2[i].innerHTML);
        header2[i].classList.toggle('scrolling-active', windowPosition);
    }
});

