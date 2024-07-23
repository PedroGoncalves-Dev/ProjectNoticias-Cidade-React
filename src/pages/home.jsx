import { Link } from "react-router-dom";

const Home  = () => {

    return(
        <div className="container-home">
            <h2>Home teste</h2>

            <Link to="/brasil">Ir para brasil</Link>
        </div>
    )
}
export default Home;