import './home.css';
import FotoCV from '../../../img/FotoCV.png';

export function Home(){
    return(
        <>
            <div className='homeMain'>
                
                <div className='homeFoto'>

                <img className='fotoTobiasNoba' src={FotoCV} alt="Foto de Tobias Noba"/>
                </div>

                <div className='homeText'>

                    <h1>¡Hola, soy Tobias Noba!</h1>
                    <h4>Tecnico en informatica personal y profesional</h4>
                    <h4>Tecnico superior en desarrollo de software</h4>
                    <button>Sobre mi</button>
                </div>
            </div>
        </>
    )
}
