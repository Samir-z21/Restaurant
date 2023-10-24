import './style.css';


// loading default page
function loadPage ()  {
    const body = document.body
    //header display
    const header = document.createElement('div');
    const siteName = document.createElement('div');
    
    siteName.textContent = "Pizzeria"
    siteName.classList.add('siteName')
    
    const navigationLinks = document.createElement('div');

    const Home = document.createElement('div');
    const Menu = document.createElement('div');
    const Contact = document.createElement('div');

    Home.classList.add('underline')

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

    const getHome = () => Home;
    const getMenu = () => Menu;
    const getContact = () => Contact
    
    // footer display
    const footer = document.createElement('div');
    footer.textContent = `Template from`;
    footer.classList.add('footer');

    const Michalosman = document.createElement('a');
    Michalosman.href = 'https://github.com/michalosman';
    Michalosman.textContent = "Michalosman";

    footer.appendChild(Michalosman);

    // append theses divs to body
    body.appendChild(header);
    body.appendChild(content);
    body.appendChild(footer);

    // return links
    return {getHome, getMenu, getContact}

};


// function changing between pages
function loadContent (currentContainer) {
    const content = document.getElementById('content');

    // content display
     // remove previous child if any 
     let childDiv = content.querySelector('div');
     if (childDiv) content.removeChild(childDiv);

    content.appendChild(currentContainer);
}


export {loadPage, loadContent}

