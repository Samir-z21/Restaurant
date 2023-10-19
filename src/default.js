import './style.css';

function loadContent ( currentContainer)  {
    const body = document.body
    const content = document.getElementById('content');

    //header display
    const header = document.createElement('div');
    const siteName = document.createElement('div');
    
    siteName.textContent = "Pizzeria"
    siteName.classList.add('siteName')
    
    const navigationLinks = document.createElement('div');

    const Home = document.createElement('div');
    const Menu = document.createElement('div');
    const Contact = document.createElement('div');

    Home.textContent = "Home";
    Menu.textContent = "Menu";
    Contact.textContent = "Contact"

    header.classList.add('header');
    navigationLinks.classList.add('navigation-links');

    navigationLinks.appendChild(Home);
    navigationLinks.appendChild(Menu);
    navigationLinks.appendChild(Contact);

    header.appendChild(siteName)
    header.appendChild(navigationLinks);


    // content display
   
    content.appendChild(currentContainer);
    
    // footer display
    const footer = document.createElement('div');
    footer.textContent = "template from michalosman";
    footer.classList.add('footer');


    body.appendChild(header);
    body.appendChild(content);
    body.appendChild(footer);
};



export default loadContent;