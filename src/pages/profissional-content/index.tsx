import Card from "../../components/card";
import './style.css'
import ProjectCard from "../../components/project-card";
import { Decidaflix, DoctorCare, FeedWidget, LetMeAsk, PokeApp, PokeWeb, SocialTree } from "../../projects";
import CertificaationCard from "../../components/certification-card";
import { Orbi, Philips } from '../../certifications/index'

function PersonalContent(){
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
                    <ProjectCard project={PokeApp} />
                    <ProjectCard project={DoctorCare} />
                    <ProjectCard project={PokeWeb} />
                    <ProjectCard project={SocialTree} />
                    <ProjectCard project={FeedWidget} />
                    <ProjectCard project={LetMeAsk} />
                    <ProjectCard project={Decidaflix} />
                <h1> Cursos: </h1>
                    <div className="courses-container" >
                        <CertificaationCard certification={Philips}/>
                        <CertificaationCard certification={Orbi} />
                    </div>
                <h1> Habilidades: </h1>
            </main>
        </div>
        
    )
}

export default PersonalContent;