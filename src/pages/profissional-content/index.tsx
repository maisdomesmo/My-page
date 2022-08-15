import Card from "../../components/card";
import './style.css'
import ProjectCard from "../../components/project-card";
import { Decidaflix, DoctorCare, PokeApp, PokeWeb } from "../../projects";

function PersonalContent(){
    const DecidaflixProject = Decidaflix;
    const DoctorCareProject = DoctorCare;
    const PokeAppProject = PokeApp;
    const PokeWebProject = PokeWeb;

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
            <ProjectCard project={DecidaflixProject} />
            <ProjectCard project={DoctorCareProject} />
            <ProjectCard project={PokeAppProject} />
            <ProjectCard project={PokeWebProject} />
            <h1> Cursos: </h1>
            <h1> Habilidades: </h1>
            </main>
        </div>
        
    )
}

export default PersonalContent;