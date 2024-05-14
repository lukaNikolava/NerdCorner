document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuButtonContainer = document.querySelector('.burgerMenuButtonContainer');
    const burgerMenuContainer = document.querySelector('.burgerMenuContainer');
    const header = document.querySelector('header');
    const burgerMenuContainerWidth = burgerMenuContainer.clientWidth;

    burgerMenuContainer.style.width = '0px' ;
    burgerMenuContainer.style.paddingTop = header.clientHeight + 'px';

    burgerMenuButtonContainer.addEventListener('click' , ()=>{
        if(burgerMenuButtonContainer.classList.contains('active')){
            burgerMenuContainer.style.width = '0px';
            burgerMenuButtonContainer.classList.remove('active');
        }else{
            burgerMenuContainer.style.width = burgerMenuContainerWidth + 'px' ;
            burgerMenuButtonContainer.classList.add('active');
        }
    })
});