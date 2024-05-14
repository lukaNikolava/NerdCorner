
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0)';
        dropDownCategories.style.backgroundColor = 'rgba(0, 0, 0)';
        header.style.color = "#fff";
        } else {
        header.style.backgroundColor = 'transparent';
        dropDownCategories.style.backgroundColor = '#ffffff36';
        header.style.color = "black";
    }
});
