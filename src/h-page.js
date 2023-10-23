//import loadContent from './default';
import pizzaPic from './images/hp-Pizza.png'

function homePage () {
    // check if there is a child div 
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('homePageContainer','allContainer');
    
    
    const introText = document.createElement('div');
    introText.classList.add('introText')

    const bestPizza = document.createElement('div');
    bestPizza.textContent = "Best pizza in your country";

    const madePassion = document.createElement('div');
    madePassion.textContent = "Made with passion since 1908";

    
    introText.appendChild(bestPizza);
    introText.appendChild(madePassion);

    homePageContainer.appendChild(introText);
    
    // pizza Pic display
    const pizza = new Image();
    pizza.src = pizzaPic;

    homePageContainer.appendChild(pizza);
    pizza.classList.add('pizza');

    // order now text
    const orderText = document.createElement('div');
    orderText.textContent = "Order online or visit us!";
    homePageContainer.appendChild(orderText)

    return homePageContainer 
}






export default homePage