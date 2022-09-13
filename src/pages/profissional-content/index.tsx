import './style.css'
import Card from "../../components/card";
import ProjectCard from "../../components/project-card";
import CertificaationCard from "../../components/certification-card";
import SkillCard from "../../components/skills-card";
import { Decidaflix, DoctorCare, FeedWidget, LetMeAsk, PokeApp, PokeWeb, SocialTree } from "../../projects";
import { angular, bootstrap, css, git, github, html, java, javascript, node, react } from '../../skills'
import { Orbi, Philips } from '../../certifications/index'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import SoftSkill from '../../components/soft-skills';

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
                <Fade bottom>
                    <div className="courses-container" >
                        <CertificaationCard certification={Philips}/>
                        <CertificaationCard certification={Orbi} />
                    </div>
                </Fade>
                <Zoom left cascade>
                    <h1> Hard Skills: </h1>
                </Zoom>
                    <div className="skills-container">
                    <Fade bottom>
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
                    </Fade>
                    </div>
                <Zoom left cascade>
                    <h1> Soft Skills: </h1>
                </Zoom>
                    <div className="softskills-container">
                        <Fade bottom>
                            <SoftSkill name='Comunicação' value={9.8}/> 
                            <SoftSkill name='Trabalho em equipe' value={9} />
                            <SoftSkill name='Autonomia' value={9.5} />
                            <SoftSkill name='Criatividade' value={10} />
                            <SoftSkill name='Aprendizado contínuo' value={8.9} />
                            <SoftSkill name='Capacidade de inovação' value={9} />
                            <SoftSkill name='Comprometimento' value={10}/>
                        </Fade>
                    </div>
                <Zoom left cascade>
                    <h1 id='aboutme' > Mais sobre mim: </h1>

                    <p className="text">
                       Sempre fui apaixonado pelos mais diversos tipos de jogos, o que não sabia anteriormente era essa paixão 
                    pelo desenvolvimento deles e pela programação em si, após perceber o quão me identifico com esse ramo, 
                    mergulhei de cabeça e venho absorvendo conhecimento de diversas fontes cada dia mais, atualmente estou 
                    cursando uma faculdade de jogos digitais e tenho estudado programação e me aprofundando na linguagem JavaScript
                    desenvolvendo alguns projetos utilizando ReactJs e o React Native. Atualmente busco uma oportunidade para que 
                    possa me desenvolver como programador.
                    </p>
                </Zoom>
            </main>
        </div>
        
    )
}

export default PersonalContent;