const header = document.getElementById('header');

// Create hamburger-menu div
const hamburgerMenu = document.createElement('div');
hamburgerMenu.style.cursor = 'pointer';
hamburgerMenu.style.display = 'flex';
hamburgerMenu.style.flexDirection = 'column';
hamburgerMenu.id = 'hamburger-menu';

// Create three bars for the hamburger icon
for (let i = 0; i < 3; i++) {
    const bar = document.createElement('div');
    bar.style.backgroundColor = '#fff';
    bar.style.height = '3px';
    bar.style.width = '25px';
    bar.style.margin = '5px 0';
    bar.style.transition = '0.4s';
    hamburgerMenu.appendChild(bar);
}

// Add hamburger-menu div to the header
header.appendChild(hamburgerMenu);

// Toggle function remains the same
let isOpen = false;

function toggleMenu() {
    const bars = document.querySelectorAll('#hamburger-menu > div');

    if (isOpen) {
        bars.forEach(bar => {
            bar.style.transform = 'rotate(0deg)';
        });
    } else {
        bars.forEach((bar, index) => {
            const rotateDegree = (index + 1) * 45;
            bar.style.transform = `rotate(${rotateDegree}deg)`;
        });
    }

    isOpen = !isOpen;
}

hamburgerMenu.addEventListener('click', toggleMenu);