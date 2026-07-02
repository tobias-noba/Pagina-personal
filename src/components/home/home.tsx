import './home.css';
import FotoCV from '../../../img/FotoCV.png';
import {FaGithub, FaLinkedin, FaDownload} from "react-icons/fa";

export function Home(){
    return(
        <>
            <div className='homeMain'>
                
                <div className='homeFoto'>

                <img className='fotoTobiasNoba' src={FotoCV} alt="Foto de Tobias Noba"/>
                </div>

                <div className='homeText'>

                    <div>
                        <h1>¡Hola, soy Tobias Noba!</h1>
                        <h4 className='h4Titulo'>Tecnico en informatica personal y profesional</h4>
                        <h4 className='h4Titulo'>Tecnico superior en desarrollo de software</h4>
                    </div>

                    <div className='divTecnologias'>
                        <p className='textoTecnologias'>HTML/CSS</p>
                        <p className='textoTecnologias'>JavaScript</p>
                        <p className='textoTecnologias'>C++</p>
                        <p className='textoTecnologias'>C#</p>
                        <p className='textoTecnologias'>React</p>
                        <p className='textoTecnologias'>Visual Studio</p>
                        <p className='textoTecnologias'>Unity</p>
                    </div>


                    <div className='divBotones'>
                        <a href='https://www.linkedin.com/in/tobias-salvador-noba-fioriti-480870345/' target='_blank' className='botonLinkedIn'><FaLinkedin className='iconos'></FaLinkedin></a>
                        <a href='https://github.com/tobias-noba' target='_blank' className='botonGitHub'><FaGithub className='iconos'></FaGithub></a>
                        <a href={`${import.meta.env.BASE_URL}CVTobiasS.NobaFioriti.pdf`} download="CVTobiasS.NobaFioriti.pdf" className='botonDescargarCV'><FaDownload className='iconoDescarga'></FaDownload>Descargar CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
