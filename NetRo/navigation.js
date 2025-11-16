const menuBtn = document.querySelector('.mobile-menu-btn');
const navList = document.querySelector('.navigation');


menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});

document.querySelectorAll('.navigation > li').forEach(item => {
    const link = item.querySelector('a');
    const dropdown = item.querySelector('.dropdown');
    const arrow = item.querySelector('.arrow');

    if (dropdown) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('open');
            arrow.classList.toggle('rotate');
        });
    }
});
