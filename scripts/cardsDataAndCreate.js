document.addEventListener("DOMContentLoaded", function() {
    const Items = [
        {
            thing: 'Hat',
            new: 'used',
            price:'5$'
        },
        {
            thing: 'shoes',
            new: 'new',
            price:'12$'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'25$'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'15$'
        },
        {
            thing: 'skirt',
            new: 'new',
            price:'55$'
        },
        {
            thing: 'hoodie',
            new: 'new',
            price:'25$'
        },
        {
            thing: 'skirt',
            new: 'used',
            price:'15$'
        },
        {
            thing: 'Hat',
            new: 'new',
            price:'27$'
        },
        {
            thing: 'hoodie',
            new: 'used',
            price:'20$'
        },
        {
            thing: 'skirt',
            new: 'new',
            price:'25$'
        },
        {
            thing: 'shirt',
            new: 'used',
            price:'35$'
        }
    ];

    const createCard = (items) =>{
        const cardsContainer = document.querySelector('.cardsContainer');

        items.forEach(element => {
            const card = document.createElement('div');
            card.className = 'mainCardContainer';

            const image = document.createElement('div');
            image.className = 'imgContainer';

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