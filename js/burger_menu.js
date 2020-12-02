const openHamburger = document.querySelector('.hamburger');
const closeHamberger = document.querySelector('.menu--hamburger--close')
const menu = document.querySelector('.menu');
const menu_list = document.querySelector('.menu__list');
const menu_item = document.querySelectorAll('.menu__item');

function openMenu(e){
    e.preventDefault();
    menu.classList.toggle('menu--hamburger--active');
    document.body.style.position = 'fixed';
    closeHamberger.style.right =  42 +'px';
    closeHamberger.style.opacity = 1;
    menu_list.classList.toggle('menu__list--hamburger--active');
    for(let i=0; i<menu_item.length; i++){
        menu_item[i].classList.toggle('menu__item--hamburger--active');
    } 
}

function closeMenu(){
    menu.classList.remove('menu--hamburger--active');
    menu_list.classList.remove('menu__list--hamburger--active');
    closeHamberger.style.right =  -9999 +'px';
    closeHamberger.style.opacity = 0;
    for(let i=0; i<menu_item.length; i++){
       menu_item[i].classList.remove('menu__item--hamburger--active');
    }  
}

openHamburger.addEventListener('click', e => openMenu(e));//открыть меню
closeHamberger.addEventListener('click', closeMenu);//закрыть меню

menu.addEventListener('click', e => {
    if(e.target==menu){
        menu.classList.remove('menu--hamburger--active');
        menu_list.classList.remove('menu__list--hamburger--active');
        closeHamberger.style.right =  -9999 +'px';
        closeHamberger.style.opacity = 0;
        for(let i=0; i<menu_item.length; i++){
            menu_item[i].classList.remove('menu__item--hamburger--active');
        }  
    }
 
});
