import './Nav.css'
import pro from '../../assets/Img/about.jpg'

function Nav() {
    return (
        <>
            <div className="wrapper">
                <div className="sidebar">
                    <div className="sidebar-header">
                        <img src={pro} alt="abdulla nsour" />
                    </div>
                    <div className="sidebar-content">
                        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                            <a href="#" className="navbar-brand">Navigation</a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#header">Home<i className="fa fa-home"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About<i className="fa fa-address-card"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#experience">Experience<i className="fa fa-star"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#service">Service<i className="fa fa-tasks"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#portfolio">Portfolio<i className="fa fa-file-archive"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact<i className="fa fa-envelope"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="sidebar-footer">
                        <a href="https://twitter.com/Abdulla_Nsour" target="_blank"><i className="fab fa-twitter"></i></a>
                        {/* <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a> */}
                        <a href="https://www.linkedin.com/in/abdulla-nsour-886887166/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Abdulla-Nsour" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Nav