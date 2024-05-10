let categoriesBtn = document.querySelector('.categoriesBtn');
let dropDownCategories = document.querySelector('.dropDownCategories')

categoriesBtn.addEventListener('mouseenter' , ()=>{
    dropDownCategories.style.height = dropDownCategories.scrollHeight + 'px';
})
categoriesBtn.addEventListener('mouseleave' , ()=>{
    dropDownCategories.style.height = '0px';
})