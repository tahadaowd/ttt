const drinks = [
    {
        name: "Espresso",
        image: "image/image22.webp", 
    },
    {
        name: "Latte",
        image: "image/image33.jpg",
    },
    {
        name: "Cappuccino",
        image: "image/image44.jpeg",
    },
    {
        name: "Mocha",
        image: "image/image55.jpg",
    },
    {
        name: "Iced Coffee",
        image: "image/image77.jpg",
    },
];

const drinkContainer = document.getElementById('drink-container');

drinks.forEach(drink => {
    const drinkItem = document.createElement('div');
    drinkItem.className = 'drink-item';
    drinkItem.innerHTML = `
        <img src="${drink.image}" alt="${drink.name}">
        <h3>${drink.name}</h3>
    `;
    drinkContainer.appendChild(drinkItem);
});