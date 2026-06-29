import './projects.css';
import { ProjectCards } from './projectcards';

export function Projects(){
    return(
        <>
            <div className='divProyectos'>
                <ProjectCards/>
                <ProjectCards/>
            </div>
        </>
    )
}