const menuBtn = document.querySelector('.hamburger-menu');
const navList = document.getElementById('nav-list')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
        if (!menuOpen){
                menuBtn.classList.add('open');
                menuOpen = true;
                navList.classList.add('show');
        } else {
                menuBtn.classList.remove('open');
                menuOpen = false;
                navList.classList.remove('show');
        }
})
