import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './home.css'

const Home  = () => {
    const [email, setEmail] = useState('')

    return(
        <main className="container-home">
            <aside>
                <div>

                    <nav>
                        <NavLink to='/'>Aristoteles</NavLink>
                        <NavLink to='/'>Platão</NavLink>
                        <NavLink to='/'>Socrates</NavLink>
                        <NavLink to='/'>Agostinho de H.</NavLink>
                        <NavLink to='/'>Pedro</NavLink>
                        <NavLink to='/'>Neymar</NavLink>
                        <NavLink to='/'>Ronaldo</NavLink>
                        <NavLink to='/'>Messi</NavLink>
                    </nav>
                </div>
                <div className="form-cad">
                    <form>
                        <label>
                            <span>Email:</span>
                            <input 
                            type="email" 
                            name="email"
                            onChange={() => {}}
                            placeholder="Digite o seu email"
                            value={email}
                            />
                        </label>
                    </form>
                </div>

            </aside>
            <section className="conteudosite">

                <section className="secaocima">

                    <div className="conteudo-cima">
                        <div className="conteudoDentro">
                            <div className="cabecalho-section">
                                <h3>Destaque</h3>

                            </div>
                            <div className="conteudo-section">
                                <span>Nova legislação</span>
                                <img src="/taxi.jpg" alt="noticia taxi" />
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Link to='/destaque'>veja mais...</Link>
                            </div>
                        </div>
                    
                    </div>

                    <div className="conteudo-cima">
                        <div className="conteudoDentro">
                            <div className="cabecalho-section">
                                <h3>Destaque</h3>

                            </div>
                            <div className="conteudo-section">
                                <span>Nova legislação</span>
                                <img src="/taxi.jpg" alt="noticia taxi" />
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <Link to='/destaque'>veja mais...</Link>
                            </div>
                        </div>
                    </div>
                </section>


                {/*parte de baixo do site*/}

                <section className="section-baixo">
                
                    <div className="conteudo-baixo">
                        <div className="conteudodentro">

                            <div>
                                <h3>Mundo</h3>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                    </li>
                                </ul>
                            </div>


                        </div>    
                    </div>

                    <div className="conteudo-baixo">
                        <div className="conteudodentro">
                            <div>
                                <h3>Notícias recentes</h3>
                            </div>  
                            <div>
                                <ul>
                                    <li>
                                        <p>
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                    </li>
                                </ul>
                            </div>  

                        </div>
                     </div> 
                
                
                </section>
  
            </section>
            
        </main>
    )
}
export default Home;