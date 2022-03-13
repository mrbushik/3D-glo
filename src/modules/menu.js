const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const header = document.querySelector('header');
    menu.style.opacity = 0;

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    header.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
            menu.style.opacity = 1;
        }
    });


    menu.addEventListener('click', (e) => {
        if (e.target.classList == 'close-btn') {
            e.preventDefault();
            handleMenu();
            menu.style.opacity = 0;

        }
        menuItems.forEach((menuItem) => {
            if (e.target === menuItem) {


                handleMenu();
            } else if (e.target.classList === 'close-btn') {
                handleMenu();
            }
        });

    });


};
export default menu;