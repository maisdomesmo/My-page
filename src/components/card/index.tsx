import './style.css'
import foto from '../../assets/foto4.jpeg';
import LightSpeed from 'react-reveal/LightSpeed';

function Card(){
    return (
        <div id='card-container'>

            <LightSpeed left>              
                <img src={foto} className='perfil-img' alt="" />
            </LightSpeed>

            <LightSpeed left cascade>
                <span className='info'>
                    <p className="name">João Pedro</p>
                    <p className="description">Front-end Developer</p>
                </span>
            </LightSpeed>

        </div>
    )
}

export default Card