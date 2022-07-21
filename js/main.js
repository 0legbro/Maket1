const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

/*navBtn.onClick = ()=> {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}*/
navBtn.addEventListener("click", event => {
    nav.classList.toggle("open");
    navBtnImg.src = nav.classList.contains("open") ?
        "./img/icons/nav-close.svg" :
        "./img/icons/nav-open.svg";
})
AOS.init({
});
