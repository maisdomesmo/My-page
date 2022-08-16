import CertificationCard from '../../types/CertificationCardType';
import './style.css'

type CertificationCardProps = {
    certification: CertificationCard,
}

function CertificaationCard({ certification }: CertificationCardProps ){
    return (
        <div className='certification-container'>
            <img className='certification-img' style={{ height: '200px'}} src={certification.img} alt="" />
        </div>
    )
}

export default CertificaationCard;