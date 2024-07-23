import { NavLink } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="header">
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/brasil'>Brasil</NavLink>
                    <NavLink to='/internacional'>Intenacional</NavLink>
                    <NavLink to='/economia'>Economia</NavLink>
                    <NavLink to='/saude'>Saúde</NavLink>
                    <NavLink to='/ciencia'>Ciência</NavLink>
                    <NavLink to='/fotos'>Fotos</NavLink>
                </nav>
            </header>

        </div>
    )
}
export default NavBar;