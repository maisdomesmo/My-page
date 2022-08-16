import CertificationCard from "../types/CertificationCardType";
import PhilipsCertificationImg from '../assets/certificadophilips.png';
import OrbiImg from '../assets/certificadowebgames.png';
import Icons from "../assets/icons/exportIcons";

export const Philips: CertificationCard = {
    name: 'Philips Fullstack Developer | You Are You',
    img: PhilipsCertificationImg,
    tecnologies: [Icons.angular, Icons.java],
    hours: '132 horas.'
}

export const Orbi: CertificationCard = {
    name: 'Órbi Web Games Developer',
    img: OrbiImg,
    tecnologies: [Icons.html, Icons.css, Icons.javascript],
    hours: '63 horas.'
}

