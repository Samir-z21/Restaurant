//imports 
import {loadPage, loadContent} from './default';
import homePage from './h-page';
import menuPage from './menu';
import contactPage from './contact'; 


// Access to links
const links = loadPage(); 
links.getHome().addEventListener('click', () => {

    loadContent(homePage()); 

    // underline current page
    links.getHome().classList.add('underline');
    links.getMenu().classList.remove('underline');
    links.getContact().classList.remove('underline');
});

links.getMenu().addEventListener('click', () => {

    loadContent(menuPage()); 

    // underline current page
    links.getHome().classList.remove('underline');
    links.getMenu().classList.add('underline');
    links.getContact().classList.remove('underline');
});

links.getContact().addEventListener('click', () => {

    loadContent(contactPage());

    // underline current page
    links.getHome().classList.remove('underline');
    links.getMenu().classList.remove('underline');
    links.getContact().classList.add('underline');
});

// Load HomePage
loadContent(homePage()); 