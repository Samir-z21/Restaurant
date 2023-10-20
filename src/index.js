import homePage from './h-page';
//import menuPage from './menu';
//import contactPage from './contact'; 
import loadContent from './default';

const links = loadContent(homePage()); 

links.getHome().addEventListener('click', () => {
    loadContent(homePage()); 
});

links.getMenu().addEventListener('click', () => {
    console.log("Hey")
});

links.getContact().addEventListener('click', () => {
    console.log("Hey")
});

console.log(links.getHome())






