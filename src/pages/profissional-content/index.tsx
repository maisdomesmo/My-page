import './style.css'
import Card from "../../components/card";
import ProjectCard from "../../components/project-card";
import CertificaationCard from "../../components/certification-card";
import SkillCard from "../../components/skills-card";
import { Decidaflix, DecidaflixMobile, DoctorCare, DoctorCareMobile, FeedWidget, LetMeAsk, PokeApp, PokeWeb, PokeWebMobile, SocialTree, SocialTreeMobile } from "../../projects";
import { angular, bootstrap, css, git, github, html, java, javascript, node, react } from '../../skills'
import { Orbi, Philips } from '../../certifications/index'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

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
                        <ProjectCard project={window.screen.width > 1000 ? DoctorCare : DoctorCareMobile} />
                        <ProjectCard project={window.screen.width > 1000 ? PokeWeb : PokeWebMobile} />
                        <ProjectCard project={window.screen.width > 1000 ? SocialTree : SocialTreeMobile} />
                        <ProjectCard project={FeedWidget} />
                        <ProjectCard project={LetMeAsk} />
                        <ProjectCard project={window.screen.width > 1000 ? Decidaflix : DecidaflixMobile} />
                    </div>
                <Zoom left cascade>
                    <h1> Cursos: </h1>
                </Zoom>
                <Fade bottom>
                    <div className="courses-container" >
                        <CertificaationCard certification={Philips}/>
                        <CertificaationCard certification={Orbi} />
                    </div>
                </Fade>
                <Zoom left cascade>
                    <h1> Habilidades: </h1>
                </Zoom>
                    <div className="skills-container">
                    <Fade bottom>
                        <SkillCard skill={html} />
                        <SkillCard skill={angular} />
                        <SkillCard skill={react} />
                        <SkillCard skill={bootstrap} />
                        <SkillCard skill={git} />
                    </Fade>
                    <Fade bottom>
                        <SkillCard skill={github} />
                        <SkillCard skill={node} />
                        <SkillCard skill={css} />
                        <SkillCard skill={java} />
                        <SkillCard skill={javascript} />
                    </Fade>
                    </div>
            </main>
        </div>
        
    )
}

export default PersonalContent;