import Card from "../../components/card";
import './style.css'
import ProjectCard from "../../components/project-card";
import { Decidaflix, DoctorCare, FeedWidget, LetMeAsk, PokeApp, PokeWeb, SocialTree } from "../../projects";
import { angular, bootstrap, css, git, github, html, java, javascript, node, react } from '../../skills'
import CertificaationCard from "../../components/certification-card";
import { Orbi, Philips } from '../../certifications/index'
import SkillCard from "../../components/skills-card";

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
                    <div className="skills-container">
                        <SkillCard skill={html} />
                        <SkillCard skill={angular} />
                        <SkillCard skill={react} />
                        <SkillCard skill={bootstrap} />
                        <SkillCard skill={git} />
                        <SkillCard skill={github} />
                        <SkillCard skill={node} />
                        <SkillCard skill={css} />
                        <SkillCard skill={java} />
                        <SkillCard skill={javascript} />
                    </div>
            </main>
        </div>
        
    )
}

export default PersonalContent;