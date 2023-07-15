const NavBtn = document.querySelector('.nav__btn');
const NavBtnNow = document.querySelector('.nav__btn--now');

function BtnOver() {
    NavBtnNow.classList.remove('nav__btn--now');
    NavBtnNow.classList.add('nav__btn');
}

function BtnOut() {
    NavBtnNow.classList.remove('nav__btn');
    NavBtnNow.classList.add('nav__btn--now');
}

NavBtn.addEventListener('mouseover', BtnOver);
NavBtn.addEventListener('mouseout', BtnOut);

