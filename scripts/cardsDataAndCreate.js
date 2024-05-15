document.addEventListener("DOMContentLoaded", function() {
    const Items = [
        {
            thing: 'Hat',
            new: 'used',
            price:'5$',
            image: './image/hat/hat1.jpg'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe1.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'25$',
            image: './image/shirts/shirt1.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'15$',
            image: './image/shirts/shirt2.webp'
        },
        {
            thing: 'skirt',
            new: 'new',
            price:'55$',
            image: './image/skirts/skirt1.jpg'
        },
        {
            thing: 'hoodie',
            new: 'new',
            price:'25$',
            image: './image/shirts/shirt1.jpg'
        },
        {
            thing: 'skirt',
            new: 'used',
            price:'15$',
            image: './image/skirts/skirt2.jpg'
        },
        {
            thing: 'Hat',
            new: 'new',
            price:'27$',
            image: './image/hat/hat2.webp'
        },
        {
            thing: 'hoodie',
            new: 'used',
            price:'20$',
            image: './image/shirts/shirt1.jpg'
        },
        {
            thing: 'skirt',
            new: 'new',
            price:'25$',
            image: './image/skirts/skirt3.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt3.webp'
        },
        {
            thing: 'Hat',
            new: 'new',
            price:'27$',
            image: './image/hat/hat3.webp'
        },
        {
            thing: 'Hat',
            new: 'new',
            price:'27$',
            image: './image/hat/hat4.webp'
        },
        {
            thing: 'Hat',
            new: 'new',
            price:'27$',
            image: './image/hat/hat5.webp'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe2.webp'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe3.jpg'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe4.webp'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe5.jpg'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe6.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt4.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt5.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt6.webp'
        },
        {
            thing: 'skirt',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt4.webp'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt5.jpg'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt6.jpg'
        }
    ];

    const createCard = (items) =>{
        const cardsContainer = document.querySelector('.cardsContainer');

        items.forEach(element => {
            const card = document.createElement('div');
            card.className = 'mainCardContainer';

            const image = document.createElement('div');
            image.className = 'imgContainer';
            image.style.backgroundImage = 'url('+ element.image +')'

            const contentContainer = document.createElement('div')
            contentContainer.className = 'cardContentContainer';

            const itemTypeAndQuality = document.createElement('div');
            itemTypeAndQuality.className = 'itemTypeAndQuality'

            const buyButtonContainer = document.createElement('div');
            buyButtonContainer.className = 'buyButtonContainer'

            const itemType = document.createElement('div');
            itemType.className = 'itemtype';
            itemType.textContent = element.thing;

            const quality = document.createElement('div');
            quality.className = 'quality';
            quality.textContent = element.new;

            const price = document.createElement('div');
            price.className = 'price';
            price.textContent = element.price;

            const buyButtonOnCard = document.createElement('button');
            buyButtonOnCard.className = 'buyButtonOnCard';
            buyButtonOnCard.textContent = "BUY"


            card.appendChild(image);
            card.appendChild(contentContainer);
            contentContainer.appendChild(itemTypeAndQuality);
            itemTypeAndQuality.appendChild(itemType);
            itemTypeAndQuality.appendChild(quality);
            contentContainer.appendChild(buyButtonContainer);
            buyButtonContainer.appendChild(price);
            buyButtonContainer.appendChild(buyButtonOnCard);

            cardsContainer.appendChild(card);
        });

    };


    createCard(Items);
});