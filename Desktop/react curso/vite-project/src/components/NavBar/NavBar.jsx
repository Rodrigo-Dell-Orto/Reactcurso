import CardWidget from "../CartWidget/CardWidget"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">RodriTec</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Telefonos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tablets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Notebooks</a>
                        </li>
                        <li className="nav-item">
                            <CardWidget amount={5}/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

//export default NavBar


