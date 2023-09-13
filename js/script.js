const menuOpen = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu'),
      menuClose = document.querySelector('.menu__close');

menuOpen.addEventListener('click', e =>{
    menu.classList.add('menu__active')
    document.body.style.overflow = "hidden";
})

menuClose.addEventListener('click',e =>{
    menu.classList.remove('menu__active')
    document.body.style.overflow = "";
})
