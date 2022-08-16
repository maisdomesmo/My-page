import Icons from "../assets/icons/exportIcons";
import ProjectCardType from "../types/ProjectCardType";
import DecidaflixPrint  from '../assets/decidaflixweb.png';
import DoctorCarePrint from '../assets/doctorcareweb.png';
import PokewebPrint from '../assets/pokeweb.png';
import PokeappPrint from '../assets/pokeapp.png';
import SocialTreePrint from '../assets/socialtree.png';
import FeedWidgetPrint from '../assets/feedwidget.png';
import LetMeAskPrint from '../assets/letmeask.png';

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
    description: 'Projeto desenvolvido para praticar o que aprendi sobre React Native, criado com Expo e utilizando um backend desenvolvido por mim, para fazer todas e apenas as requisições necessárias de uma só vez, afim de otimizar a conexão.'
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

export const SocialTree:  ProjectCardType = {
    name: 'SocialTree',
    codeLink: 'https://github.com/maisdomesmo/Social-Tree',
    imgURL: SocialTreePrint,
    isDeployed: true,
    siteLink: 'https://maisdomesmo.github.io/Social-Tree/',
    used: [Icons.html, Icons.css, Icons.javascript],
    description: 'Uma página desenvolvida para servir como acesso à todos meus links sociais.'
}

export const FeedWidget:  ProjectCardType = {
    name: 'FeedWidget',
    codeLink: 'https://github.com/maisdomesmo/NLW-FeedWidget/tree/main/Web',
    imgURL: FeedWidgetPrint,
    isDeployed: false,
    siteLink: '',
    used: [Icons.html, Icons.css, Icons.react],
    description: 'Um widget de feedback onde é possivel enviar um texto e um print da tela para um e-mail pre-estabelecido, também foi criado a versão mobile, ulilizando React Native e o expo.'
}

export const LetMeAsk:  ProjectCardType = {
    name: 'LetMeAsk',
    codeLink: 'https://github.com/maisdomesmo/Let-Me-Ask/settings/pages',
    imgURL: LetMeAskPrint,
    isDeployed: false,
    siteLink: '',
    used: [Icons.html, Icons.css, Icons.react],
    description: 'Plataforma onde o usuário faz login com google e pode criar umas sala de perguntas e respostas em tempo real, ou entrar em uma.'
}



// MODELO //
/* export const :  ProjectCardType = {
    name: '',
    codeLink: '',
    imgURL: '',
    isDeployed: false,
    siteLink: '',
    used: [''],
    description: ''
} */