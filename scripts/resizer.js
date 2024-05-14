function adjustHeight() {
    const windowHeight = window.innerHeight;
    const header = document.querySelector('header');
    const headerHeight = header.clientHeight;
    const bgImage = document.querySelector('.bg-image');

    bgImage.style.height = windowHeight + 'px';
    document.querySelector('.getStartedContainer').style.height = windowHeight - headerHeight + 'px';
    document.querySelectorAll('.section').forEach(function(section) {
        section.style.height = windowHeight + 'px';
    });
}

window.addEventListener('resize', adjustHeight);

adjustHeight();