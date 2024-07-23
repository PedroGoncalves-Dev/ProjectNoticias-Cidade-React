import { NavLink } from "react-router-dom"
import './navBar.css'

const NavBar = () => {

    return (
        
            <header>
                <img src="/logo.png" alt="" className="logo"/>
                <img src="/detalhetopo.png" alt="eee" className="logoBrasil"/>
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

       
    )
}
export default NavBar;