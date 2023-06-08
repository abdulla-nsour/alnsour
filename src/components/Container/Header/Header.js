import React from 'react'
import './Header.css'
function Header() {
    return (
        <div>
            <div className="header" id="header">
                <div className="content-inner">
                    <p>I'm</p>
                    <h1>Abdulla Nsour</h1>
                    <h2></h2>
                    <div className="typed-text">Web Designer, Web Developer, Front End Developer, Apps Developer, Graphic Designer</div>
                </div>
            </div>

            <div className="large-btn">
                <div className="content-inner">
                    <a className="btn" href="#"><i className="fa fa-download"></i>Resume</a>
                    <a className="btn" href="#"><i className="fa fa-hands-helping"></i>Hire Me</a>
                </div>
            </div>

        </div>
    )
}

export default Header