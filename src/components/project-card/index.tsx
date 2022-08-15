import ProjectCardType from "../../types/ProjectCardType";
import './style.css'


type ProjectCardProps = {
    project: ProjectCardType
}

function ProjectCard({ project } : ProjectCardProps){
    return (
        <div className="card-container">
            
            <div className="project-info">
                <h2>{project.name}</h2>
                <p>
                    {project.isDeployed ? <a target="_blank" href={project.siteLink}>Link do projeto</a> : null}
                    <br/>
                    <a target="_blank" href={project.codeLink}>Link do código</a>
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
            <img className="card-img" src={project.imgURL} alt="" />
        </div>
    )
}

export default ProjectCard;