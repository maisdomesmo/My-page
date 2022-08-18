import SkillsType from '../../types/SkillsType';
import './style.css'

type SkillCardProps = {
    skill: SkillsType,
}

function SkillCard({ skill }: SkillCardProps){
    return (
        <div className="skill-container">
            <div className={`skill-progress${skill.value}`} >
                <img src={skill.img} alt="" className="skill-img" />    
            </div>           	       
        </div>
    )
}

export default SkillCard;