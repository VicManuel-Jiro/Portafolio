export default function menuActive() {
    document.addEventListener('DOMContentLoaded', () => {
        const menuLinks = document.querySelectorAll('.menu__link');
        const sections = document.querySelectorAll('section'); 
        let isScrolling = false;

        // Función para actualizar el subrayado del menú basado en la sección visible
        const updateActiveLink = () => {
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                    currentSection = section.getAttribute('id');
                }
            });

            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(currentSection)) {
                    link.classList.add('active');
                }
            });
        };

        // Añadir el evento de clic para cambiar la clase activa
        menuLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                isScrolling = true;
                menuLinks.forEach(link => link.classList.remove('active'));
                event.currentTarget.classList.add('active');

                // Esperar a que el desplazamiento termine
                const targetSection = document.querySelector(event.currentTarget.getAttribute('href'));
                targetSection.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    isScrolling = false;
                }, 1000); // Ajustar el tiempo según la duración de la animación de desplazamiento
            });
        });

        // Añadir el evento de scroll para detectar la sección visible
        window.addEventListener('scroll', () => {
            if (!isScrolling) {
                updateActiveLink();
            }
        });
    });
}

menuActive();