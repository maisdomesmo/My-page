import Icons from "../assets/icons/exportIcons";
import ProjectCardType from "../types/ProjectCardType";
import DecidaflixPrint  from '../assets/decidaflixweb.png';
import DoctorCarePrint from '../assets/doctorcareweb.png';
import PokewebPrint from '../assets/pokeweb.png';
import PokeappPrint from '../assets/pokeapp.png';

export const Decidaflix: ProjectCardType = {
    name: 'DecidaFlix',
    codeLink: 'https://github.com/maisdomesmo/decidaflix',
    imgURL: DecidaflixPrint,
    isDeployed: true,
    siteLink: 'https://decidaflix.vercel.app/',
    used: [Icons.css, Icons.html, Icons.react],
    description: "Desafio na plataforma da RocketSeat, design responsivo, consumindo a api The Movie Database API."
}

export const PokeWeb :  ProjectCardType = {
    name: 'PokeWeb',
    codeLink: 'https://github.com/maisdomesmo/PokeWeb',
    imgURL: PokewebPrint,
    isDeployed: false,
    siteLink: '',
    used: [Icons.html, Icons.css, Icons.react],
    description: 'Meu primeiro projeto sozinho com ReactJs desenvolvido para praticar, consumindo a api PokéApi.'
}

export const PokeApp:  ProjectCardType = {
    name: 'PokeApp',
    codeLink: 'https://github.com/maisdomesmo/PokeApp',
    imgURL: PokeappPrint,
    isDeployed: false,
    siteLink: '',
    used: [Icons.html, Icons.css, Icons.react],
    description: 'Projeto desenvolvido para praticar o que aprendi sobre React Native, criado com Expo e utilizando também a PokéApi'
}

export const DoctorCare:  ProjectCardType = {
    name: 'DoctorCare',
    codeLink: 'https://github.com/maisdomesmo/DoctorCare',
    imgURL: DoctorCarePrint,
    isDeployed: true,
    siteLink: 'https://maisdomesmo.github.io/DoctorCare/#home',
    used: [Icons.html, Icons.css, Icons.javascript],
    description: 'Página desenvolvida no início dos meus estudos de desenvolvimento de web pages, durante uma NLW (evento da RocketSeat).'
}

/* export const :  ProjectCardType = {
    name: '',
    codeLink: '',
    imgURL: '',
    isDeployed: false,
    siteLink: '',
    used: [''],
    description: ''
} */