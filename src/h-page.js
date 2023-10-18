import './style.css';

function loadContent () {
    const content = document.getElementById('content');

    //topBar display
    const topBar = document.createElement('div');
    topBar.textContent = "Pizzeria";
    
    const navigationLinks = document.createElement('div');

    const Home = document.createElement('div');
    const Menu = document.createElement('div');
    const Contact = document.createElement('div');

    Home.textContent = "Home";
    Menu.textContent = "Menu";
    Contact.textContent = "Contact"

    topBar.classList.add('topBar');
    navigationLinks.classList.add('navigation-links');

    navigationLinks.appendChild(Home);
    navigationLinks.appendChild(Menu);
    navigationLinks.appendChild(Contact);


    topBar.appendChild(navigationLinks);
    content.appendChild(topBar);
};

export default loadContent