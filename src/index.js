import './style.css';

export const makeDropdown = (btnId, itemsId, height) => {
    document.documentElement.style.setProperty('--maxHt', `${height}px`); //sets the max-height to be used in CSS
    const menuBtn = document.querySelector(`#${btnId}`);
    const menuItems = document.querySelector(`#${itemsId}`);

    menuBtn.addEventListener('click', (e)=>{
        menuItems.classList.toggle('visible');
    })
}

// example dropdown menu - create multiple as required
// arguments - button id, items id, height
makeDropdown('hamburger', 'hamItems', 150); 

