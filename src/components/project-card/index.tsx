import ProjectCardType from "../../types/ProjectCardType";
import './style.css'


type ProjectCardProps = {
    project: ProjectCardType
}

function ProjectCard({ project } : ProjectCardProps){
    return (
        <div className="card-container">
            <img className="card-img" src={project.imgURL} alt="" />
            <h2>{project.name}</h2>
        </div>
    )
}

export default ProjectCard;