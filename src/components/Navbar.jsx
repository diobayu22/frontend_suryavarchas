import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark main-nav">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/global/logo.png" alt="" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto py-2">
                        <li className="nav-item px-3">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item  px-3">
                            <Link className="nav-link" to="/garasi">Garasi</Link>
                        </li>
                        <Link className="button1" to='/masuk'>Login</Link>
                    </ul>

                </div>
            </div>
        </nav>
    )
}