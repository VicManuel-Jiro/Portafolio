export default function menuActive() {
    document.addEventListener('DOMContentLoaded', () => {
        const menuLinks = document.querySelectorAll('.menu__link');
    
        menuLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Evitar el comportamiento por defecto
                menuLinks.forEach(link => link.classList.remove('active'));
                event.currentTarget.classList.add('active');
            });
        });
    });
}

menuActive();