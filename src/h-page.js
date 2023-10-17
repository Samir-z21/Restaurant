import './style.css';

function loadContent () {
    const content = document.getElementById('content');

    //topBar display
    const topBar = document.createElement('div');
    topBar.textContent = "Pizzeria";
    
    const navigationLinks = document.createElement('div');
    

    topBar.classList.add('topBar');





    content.appendChild(topBar)

};

export default loadContent