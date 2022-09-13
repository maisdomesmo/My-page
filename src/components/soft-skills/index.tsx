import SoftSkillType from "../../types/SoftSkillType";
import './style.css'

function SoftSkill({name, value}: SoftSkillType){
    return(
            <div className="softskill-container">
                <h3 className="text">{name}</h3>
                <div className="progress-bar" style={{width: `${value * 18}px`, backgroundColor:`hsl(${value * 15}, 100%, 25%)`}} />
            </div>
    )
}

export default SoftSkill;