const habilidades = [
    {
        id: 1,
        titulo: "Html 5",
        src: "images/assets/html.png"
    },
    {
        id: 2,
        titulo: "Css 3",
        src: "images/assets/css.png"
    },
    {
        id: 3,
        titulo: "Mongoose",
        src: "images/assets/mongoose.png"
    },
    {
        id: 4,
        titulo: "Bootstrap",
        src: "images/assets/bootstrap.png"
    },
    {
        id: 5,
        titulo: "React js",
        src: "images/assets/react.png"
    },
    {
        id: 6,
        titulo: "Javascript",
        src: "images/assets/javascript.png"
    },
    {
        id: 7,
        titulo: "Python",
        src: "images/assets/python.png"
    },
    {
        id: 8,
        titulo: "Django",
        src: "images/assets/django.png"
    },
    {
        id: 9,
        titulo: "Express js",
        src: "images/assets/express.png"
    },
    {
        id: 10,
        titulo: "Mongo DB",
        src: "images/assets/mongo.png"
    },
    {
        id: 11,
        titulo: "Node js",
        src: "images/assets/nodejs.png"
    },
    {
        id: 12,
        titulo: "Mysql DB",
        src: "images/assets/mysql.png"
    },
    {
        id: 13,
        titulo: "Sass",
        src: "images/assets/sass.png"
    },
    {
        id: 14,
        titulo: "Typescript",
        src: "images/assets/typescript.png"
    },
    {
        id: 15,
        titulo: "Postgresql",
        src: "images/assets/postgresql.png"
    },
    {
        id: 16,
        titulo: "Angular",
        src: "images/assets/angular.png"
    }
]

const proyectos = [
    {
        id: 1,
        titulo: "SnackPass",
        link: "https://cristoperyarleque.github.io/snackpass/",
        descripcion: "html, css, bootstrap, github",
        src: "images/assets/snackpass.png"
    },
    {
        id: 2,
        titulo: "Store 5",
        link: "https://store5-orcin.vercel.app/",
        descripcion: "react, bootstrap, material icon, css, vercel",
        src: "images/assets/store5.png"
    },
    {
        id: 3,
        titulo: "Pokedex",
        link: "https://pwa-brown.vercel.app/",
        descripcion: "react, react pwa, api pokemon",
        src: "images/assets/pokedex.png"
    },
    {
        id: 4,
        titulo: "Palace Games",
        link: "https://codigo2021.vercel.app/",
        descripcion: "nodejs, mongoose, mongodb, express, react, vercel, heroku",
        src: "images/assets/palace.png"
    },
    {
        id: 5,
        titulo: "Archelda",
        link: "https://www.archelda.tk/",
        descripcion: "html, sass, css, bootstrap, material icon, font-awesone, javascript",
        src: "images/assets/archelda.png"
    },
    {
        id: 6,
        titulo: "Portafolio",
        link: "index.html",
        descripcion: "html, sass, css, bootstrap, material icon, font-awesone, javascript",
        src: "images/assets/portafolio.png"
    }
]

const bodySkill = document.querySelector(".skills")
let div = ""
for(let i = 0 ; i < habilidades.length; i++) {
    div = div + `<div class="col-lg-3 d-flex flex-column col-md-4 col-sm-3 mb-4" data-aos="fade-up" data-aos-delay="100">
    <div class="service card align-items-center bg-light">
        <img src="${habilidades[i].src}" alt="${i}" style="width: 150px" class="card-img-top ">
        <div class="card-body">
            <h6 class="card-text text-center"><b>${habilidades[i].titulo}</b></h6>
        </div>
    </div>
    </div>`
}
bodySkill.innerHTML = div

const bodyProjects = document.querySelector(".projects")
let div1 = ""
for(let i = 0 ; i < proyectos.length; i++) {
    div1 = div1 + `<div class="col-lg-6 d-flex flex-column col-sm-10 mb-4" data-aos="fade-up" data-aos-delay="100">
    <div class="service card bg-light">
        <img src="${proyectos[i].src}" alt="${i}" class="card-img-top img-rounded">
        <div class="card-body text-center">
            <a href="${proyectos[i].link}" target="_blank"><h6 class="btn btn-black btn-sm card-text text-center text-primary"><b>${proyectos[i].titulo}</b></h6></a>
            <br>
            <br>
            <p><b>${proyectos[i].descripcion}</b></p>
        </div>
    </div>
    </div>`
}
bodyProjects.innerHTML = div1