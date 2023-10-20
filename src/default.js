import './style.css';

function loadContent (currentContainer)  {
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

   
    
    // footer display
    const footer = document.createElement('div');
    footer.textContent = "Template from Michalosman";
    footer.classList.add('footer');


    const getHome = () => Home;
    const getMenu = () => Menu;
    const getContact = () => Contact


    // This is just the first execution to return these functions without making any changes to default display. 
    if(!currentContainer) return {getHome, getMenu, getContact}


    // content display
     // remove previous child if any 
     let childDiv = content.querySelector('div');
     if (childDiv) content.removeChild(childDiv);

    content.appendChild(currentContainer);

    // append theses divs to body
    body.appendChild(header);
    body.appendChild(content);
    body.appendChild(footer);
};





export default loadContent;

