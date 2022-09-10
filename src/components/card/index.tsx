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

                <LightSpeed left>
                    <div className="links-container">
                            <a target="_blank" href="https://drive.google.com/file/d/1e8Jc4HwG74p4dqnVNllrt0ljH5rzz4h_/view?usp=sharing">Baixar curriculo</a>
                            <a href="">Mais sobre mim</a>
                    </div>

                </LightSpeed>

            </div>
     
    )
}

export default Card