import homePage from './h-page';
import menuPage from './menu';
//import contactPage from './contact'; 
import {loadPage, loadContent} from './default';

const links = loadPage(); 
loadContent(homePage()); 

links.getHome().addEventListener('click', () => {
    loadContent(homePage()); 
});

links.getMenu().addEventListener('click', () => {
    loadContent(menuPage()); 
    console.log("Hey")
});

links.getContact().addEventListener('click', () => {
    //loadContent(contactPage());
    console.log("Hey")
});

