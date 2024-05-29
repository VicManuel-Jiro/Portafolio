export const portafolioData = [
    {
        img: "./assets/proyectos/tiendaPF.png",
        title: "Patitas Felices",
        demo:"https://vicmanuel-jiro.github.io/tiendaPatitasFelices/home",
        repo:"https://github.com/VicManuel-Jiro/tiendaPatitasFelices",
        hasdemo:"true",
        skills: ["HTML5", "CSS3","JavaScript","TypeScript","GitHub"]
    }
];

const skillsDataArray = [
    { nombre: "Java", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
    { nombre: "Python", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { nombre: "Ruby", img: "https://cdn.worldvectorlogo.com/logos/ruby.svg" },
    { nombre: "C++", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
    { nombre: "GitHub", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" },
    { nombre: "HTML5", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { nombre: "CSS3", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { nombre: "JavaScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { nombre: "TypeScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { nombre: "CoffeeScript", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/coffeescript/coffeescript-original.svg" },
    { nombre: "PHP", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
    { nombre: "Linux", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" },
    { nombre: "Windows", img: "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg" },
    { nombre: "Arduino", img: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
    { nombre: "MongoDB", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
    { nombre: "MySQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
    { nombre: "Oracle", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg" },
    { nombre: "PostgreSQL", img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
    { nombre: "Tech-Support", img: "assets/images/support.svg" }
];

export const skillsData = skillsDataArray.reduce((obj, item) => {
    obj[item.nombre] = item;
    return obj;
}, {});


