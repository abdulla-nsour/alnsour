import React from 'react'
import './About.css'
import pro from '../../../assets/Img/about.jpg'
function About() {
    return (
        <div>
            <div className="about" id="about">
                <div className="content-inner">
                    <div className="content-header">
                        <h2>About Me</h2>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-5">
                            <img src={pro} alt="Image" />
                        </div>
                        <div className="col-md-6 col-lg-7">
                            <p>
                                I'm a web developer, with a background in risk management and insurance, with a passion for programming and creating pages where I can actually make good websites.
                                We have already created more than 7 projects during my training with Orange, such as an e-commerce website, contract management website and employee evaluation page.
                                Using technology (HTML, CSS, JavaScript, PHP, MySQL, Laravel, React.Js)
                            </p>
                            <a className="btn" href="#contact">Contact</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Design</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>SEO</p><p>95%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skills">
                                <div className="skill-name">
                                    <p>Development</p><p>90%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className="skill-name">
                                    <p>Marketing</p><p>85%</p>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About