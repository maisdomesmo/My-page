import './style.css'
import Card from "../../components/card";
import ProjectCard from "../../components/project-card";
import CertificaationCard from "../../components/certification-card";
import SkillCard from "../../components/skills-card";
import { Decidaflix, DoctorCare, FeedWidget, LetMeAsk, PokeApp, PokeWeb, SocialTree } from "../../projects";
import { angular, bootstrap, css, git, github, html, java, javascript, node, react } from '../../skills'
import { Orbi, Philips } from '../../certifications/index'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce';

function PersonalContent(){
    return (
        <div className="container">
            <header>
            <Card/>
                <Zoom left cascade>
                    <h1>Desenvolvedor Front-end e futuro desenvolvedor de jogos digitais</h1>
                    <p className="text" >Procurando oportunidade no mercado da programação para desenvolver minhas 
                    habilidades e evoluir enquanto profissional.
                    </p>
                </Zoom>
            </header>

            <main>
                <Zoom left cascade>
                    <h1> Projetos: </h1>
                </Zoom>
                    <div className="projects-container">
                        <ProjectCard project={PokeApp} />
                        <ProjectCard project={DoctorCare} />
                        <ProjectCard project={PokeWeb} />
                        <ProjectCard project={SocialTree} />
                        <ProjectCard project={FeedWidget} />
                        <ProjectCard project={LetMeAsk} />
                        <ProjectCard project={Decidaflix} />
                    </div>
                <Zoom left cascade>
                    <h1> Cursos: </h1>
                </Zoom>
                <Flip top>
                    <div className="courses-container" >
                        <CertificaationCard certification={Philips}/>
                        <CertificaationCard certification={Orbi} />
                    </div>
                </Flip>
                <Zoom left cascade>
                    <h1> Habilidades: </h1>
                </Zoom>
                    <div className="skills-container">
                    <Bounce top>
                        <SkillCard skill={html} />
                        <SkillCard skill={angular} />
                        <SkillCard skill={react} />
                        <SkillCard skill={bootstrap} />
                        <SkillCard skill={git} />
                    </Bounce>
                    <Bounce bottom>
                        <SkillCard skill={github} />
                        <SkillCard skill={node} />
                        <SkillCard skill={css} />
                        <SkillCard skill={java} />
                        <SkillCard skill={javascript} />
                    </Bounce>
                    </div>
            </main>
        </div>
        
    )
}

export default PersonalContent;