document.addEventListener("DOMContentLoaded", function() {
    const background = document.querySelector('.getStartedSection');
    const images = [
        {
            image:'./image/bgImages/image-1.jpg'
        },
        {
            image:'./image/bgImages/image-2\ .jpg;'
        },
        {
            image:'./image/bgImages/image-3.jpg'
        },
        {
            image:'./image/bgImages/image-4.jpg'
        },
        {
            image:'./image/bgImages/image-5.webp'
        },
        {
            image:'./image/bgImages/image-6.jpg'
        }
    ];

    let i = 0;
    setInterval(function() {
        let element = images[i];
        background.style.backgroundImage = 'url('+ element.image +')';
        i++;
        if( i===6 ){
            i = 0;
        } 
    }, 2000);
});
