function contactPage () {
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer', 'allContainer');

    const phoneNumber = document.createElement('div');
    phoneNumber.classList.add('phoneNumber')
    phoneNumber.textContent = '📞 123 456 789'

    
    const address = document.createElement('div');
    address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";
    
    const map = document.createElement('img');
    map.src = `../dist/images/restaurant-location.png`;
    map.alt = 'restaurant location'
    
    
    contactContainer.appendChild(phoneNumber);
    contactContainer.appendChild(address);
    contactContainer.appendChild(map)
    return contactContainer
}

export default contactPage