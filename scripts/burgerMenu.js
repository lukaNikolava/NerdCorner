document.addEventListener("DOMContentLoaded", function() {
    const burgerMenuButtonContainer = document.querySelector('.burgerMenuButtonContainer');
    const burgerMenuContainer = document.querySelector('.burgerMenuContainer');
    const burgerMenuButtno = document.querySelector('.burgerMenuButton');
    const header = document.querySelector('header');
    const burgerMenuContainerWidth = burgerMenuContainer.clientWidth;

    burgerMenuContainer.style.width = '0px' ;
    burgerMenuContainer.style.paddingTop = header.clientHeight + 'px';



    window.addEventListener('scroll' , function(){
        if (window.scrollY > 0){
            burgerMenuButtonContainer.classList.add('customColor');
            burgerMenuButtno.style.backgroundColor = '#fff';
        }else{
            burgerMenuButtonContainer.classList.remove('customColor');
            burgerMenuButtno.style.backgroundColor = 'black';
        }
    })
    burgerMenuButtonContainer.addEventListener('click' , ()=>{
        if(burgerMenuButtonContainer.classList.contains('active')){
            burgerMenuContainer.style.width = '0px';
            if(window.scrollY === 0){
                burgerMenuButtonContainer.classList.remove('customColor');
            }
            burgerMenuButtonContainer.classList.remove('active');
        }else{
            burgerMenuContainer.style.width = burgerMenuContainerWidth + 'px' ;
            burgerMenuButtonContainer.classList.add('customColor');
            burgerMenuButtonContainer.classList.add('active');
        }
    })
});