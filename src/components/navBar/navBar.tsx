import './navBar.css';

export function NavBar(){
    return(
        <>
            <div className='navBar'>
                <div className='navBarLeft'>
                    <h1>Tobias Noba</h1>
                </div>
                <div className='navBarRight'>
                    <h3>Home</h3>
                    <h3>Sobre mi</h3>
                    <h3>Proyectos</h3>
                    <h3>Contactos</h3>
                </div>
            </div>
        </>
    )
}