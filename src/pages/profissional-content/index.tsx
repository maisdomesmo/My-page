import Card from "../../components/card";
import './style.css'
import Img from '../../assets/foto.jpg';
import ProjectCard from "../../components/project-card";
import ProjectCardType from "../../types/ProjectCardType";
import DecidaflixPrint  from '../../assets/decidaflixweb.png'

function PersonalContent(){
    const project1: ProjectCardType = {
        name: 'DecidaFlix',
        codeLink: 'https://github.com/maisdomesmo/decidaflix',
        imgURL: DecidaflixPrint,
        isDeployed: true,
        siteLink: 'https://decidaflix.vercel.app/'
    }

    return (
        <div className="container">
            <header>
            <Card/>
                <h1>Desenvolvedor Front-end e futuro desenvolvedor de jogos digitais</h1>
                <p>Procurando oportunidade no mercado da programação para desenvolver minhas 
                habilidades e evoluir enquanto profissional.
                </p>
            </header>

            <main>
            <h1> Projetos: </h1>
            <ProjectCard project={project1} />
            <h1> Cursos: </h1>
            <h1> Habilidades: </h1>
            </main>
        </div>
        
    )
}

export default PersonalContent;