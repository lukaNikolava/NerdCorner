document.addEventListener("DOMContentLoaded", function() {
    const Items = [
        {
            thing: 'Hat',
            filter: 'hats' ,
            new: 'used',
            price:'5$',
            image: './image/hat/hat1.jpg'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe1.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'25$',
            image: './image/shirts/shirt1.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'15$',
            image: './image/shirts/shirt2.webp'
        },
        {
            thing: 'skirt',
            filter: 'skirts',
            new: 'new',
            price:'55$',
            image: './image/skirts/skirt1.jpg'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'new',
            price:'25$',
            image: './image/hoodies/hoodie1.jpg'
        },
        {
            thing: 'skirt',
            filter: 'skirts',
            new: 'used',
            price:'15$',
            image: './image/skirts/skirt2.jpg'
        },
        {
            thing: 'Hat',
            filter: 'hats' ,
            new: 'new',
            price:'27$',
            image: './image/hat/hat2.webp'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'used',
            price:'20$',
            image: './image/hoodies/hoodie2.jpg'
        },
        {
            thing: 'skirt',
            filter: 'skirts',
            new: 'new',
            price:'25$',
            image: './image/skirts/skirt3.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt3.webp'
        },
        {
            thing: 'Hat',
            filter: 'hats' ,
            new: 'new',
            price:'27$',
            image: './image/hat/hat3.webp'
        },
        {
            thing: 'Hat',
            filter: 'hats' ,
            new: 'new',
            price:'27$',
            image: './image/hat/hat4.webp'
        },
        {
            thing: 'Hat',
            filter: 'hats' ,
            new: 'new',
            price:'27$',
            image: './image/hat/hat5.webp'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe2.webp'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe3.jpg'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe4.webp'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe5.jpg'
        },
        {
            thing: 'shoes',
            filter: 'shoes',
            new: 'new',
            price:'12$',
            image: './image/shoes/shoe6.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt4.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt5.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/shirts/shirt6.webp'
        },
        {
            thing: 'skirt',
            filter: 'skirts',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt4.webp'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt5.jpg'
        },
        {
            thing: 'shirt',
            filter: 'shirts',
            new: 'used',
            price:'35$',
            image: './image/skirts/skirt6.jpg'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'used',
            price:'20$',
            image: './image/hoodies/hoodie3.webp'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'used',
            price:'20$',
            image: './image/hoodies/hoodie4.jpg'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'used',
            price:'20$',
            image: './image/hoodies/hoodie5.jpg'
        },
        {
            thing: 'hoodie',
            filter: 'hoodies',
            new: 'used',
            price:'20$',
            image: './image/hoodies/hoodie6.webp'
        }
    ];

    const selected = document.querySelector('#clothingSelect');

    const filter = () => {
        selected.addEventListener('change', () => {
            const selectedValue = selected.value;
            const cards = document.querySelectorAll('.mainCardContainer');
            cards.forEach(card => {
                if (selectedValue === card.dataset.info) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    };


    const createCard = (items) => {
        const cardsContainer = document.querySelector('.cardsContainer');
        items.forEach(element => {
            const card = document.createElement('div');
            card.className = 'mainCardContainer';
            card.dataset.info = element.filter;

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
    filter();
});
