import Card from "../../components/card";
import './style.css'
import Img from '../../assets/foto.jpg';

function PersonalContent(){
    return (
        <div className="container">
            <header>
            <Card/>
                <h1>Desenvolvedor Front-end e futuro desenvolvedor de jogos digitais</h1>
                <p>Procurando oportunidade no mercado da programação para desenvolver minhas 
                habilidades e evoluir enquanto profissional.
                </p>
            </header>

            <img  src={Img} id="img" alt="Imagem do criador do site" />

            <main>
            <h1> Projetos: </h1>
            <h1> Cursos: </h1>
            <h1> Habilidades: </h1>
            </main>
        </div>
        
    )
}

export default PersonalContent;