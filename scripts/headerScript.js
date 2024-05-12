
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0)';
        dropDownCategories.style.backgroundColor = 'rgba(0, 0, 0)';
    } else {
        header.style.backgroundColor = 'transparent';
        dropDownCategories.style.backgroundColor = '#ffffff36';
    }
});
