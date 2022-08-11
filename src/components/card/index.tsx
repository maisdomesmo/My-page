import './style.css'

function Card(){
    return (
        <div id='card-container'>
            <p className="logo">JP</p>
            <span className='info'>
                <p className="name">João Pedro</p>
                <p className="description">Front-end Developer</p>
            </span>
        </div>
    )
}

export default Card