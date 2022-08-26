import ProjectCardType from "../../types/ProjectCardType";
import './style.css'
import Fade from 'react-reveal/Fade';

type ProjectCardProps = {
    project: ProjectCardType
}

function ProjectCard({ project } : ProjectCardProps){
    return (
    <Fade bottom>
        <div className="card-container">
            <div className="project-info">
                <div className="project-name" > 
                    <h2>{project.name}</h2>
                    <span id="indicator" style={{backgroundColor: project.isDeployed ? '#00ff5f' : '#bc2020'}} />
                </div>
                <p>
                    {project.isDeployed ? <a className="card-link" target="_blank" href={project.siteLink}>Link do projeto</a> : null}
                    <br/>
                    <a className="card-link" target="_blank" href={project.codeLink}>Link do código</a>
                </p>
        
                <p className="card-description">{project.description}</p>
                <div className="container-icon">
                {
                    project.used.map(tecnology => {
                        return (
                            <img src={tecnology} className='tecnology-icon' alt="" />
                        )
                    })
                }
                </div>
            </div>
            <img className="card-img" style={{width: '100%', height: '100%'}} src={project.imgURL} alt="" />
        </div>
    </Fade>
    )
}

export default ProjectCard;