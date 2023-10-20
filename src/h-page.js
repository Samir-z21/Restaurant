import loadContent from './default';
import pizzaPic from './hp-Pizza.png'

function homePage () {
    const homePageContainer = document.createElement('div');
    homePageContainer.classList.add('homePageContainer','allContainer');
    
    const homePageContent = document.createElement("div");
    homePageContent.classList.add('homePageContent');

    const introText = document.createElement('div');
    introText.classList.add('introText')

    const bestPizza = document.createElement('div');
    bestPizza.textContent = "Best pizza in your country";

    const madePassion = document.createElement('div');
    madePassion.textContent = "Made with passion since 1908";

    
    introText.appendChild(bestPizza);
    introText.appendChild(madePassion);

    homePageContent.appendChild(introText);
    
    // pizza Pic display
    const pizza = new Image();
    pizza.src = pizzaPic;

    homePageContent.appendChild(pizza);
    pizza.classList.add('pizza');

    // order now text
    const orderText = document.createElement('div');
    orderText.textContent = "Order online or visit us!";

    homePageContent.appendChild(orderText)



    homePageContainer.appendChild(homePageContent);

    
    return homePageContainer 
}



function loadHomePage () {
    loadContent(homePage())
}


export default loadHomePage