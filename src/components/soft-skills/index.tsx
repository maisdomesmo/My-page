import SoftSkillType from "../../types/SoftSkillType";
import './style.css'

function SoftSkill({name, value}: SoftSkillType){
    return(
        <div className="softskill-container">
            <h3 className="text">{name}{value}</h3>
        </div>
    )
}

export default SoftSkill;