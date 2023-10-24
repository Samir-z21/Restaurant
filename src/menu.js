function loadMenu () {
   const menuContainer = document.createElement('div');
   menuContainer.classList.add('menuContainer', 'allContainer');

   const pizzaNames = ['Salsiccia', 'Gamberi', 'Pepe', 'Disgustoso', 'Colorato', 'Pomodoro', 'Crema', 'Carne'];

   const salsiccia = "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";

   const gamberi =  "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";

   const pepe = "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";

   const disgustoso = "Tomato sauce, Bacon, Pineapple, Olives, Basil";

   const colorato = "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil";

   const pomodoro =  "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";

   const crema =  "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";

   const carne = "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";

   const pizzaDescription = [salsiccia, gamberi, pepe, disgustoso, colorato, pomodoro, crema, carne]


   for (let i = 0; i<8; i++) {
    const card = document.createElement('div');
    card.classList.add('card');


    const cardTitle = document.createElement('div');
    cardTitle.textContent = pizzaNames[i];
    cardTitle.classList.add('cardTitle');

    const cardImg = document.createElement('img');
    cardImg.src = `./images/pizzas/${pizzaNames[i].toLowerCase()}.png`;
    cardImg.alt = pizzaNames[i];
    cardImg.classList.add('cardImg')

    const cardDescription = document.createElement('div');
    cardDescription.classList.add('cardDescription');
    cardDescription.textContent = pizzaDescription[i];

    
    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    menuContainer.appendChild(card);
    
   }

    return menuContainer
}

export default loadMenu