
import Contact from './Contact/Contact.js';
import Portfolio from './Portfolio/Portfolio.js';
import Service from './Service/Service.js';
import Experience from './Experience/Experience.js';
import Education from './Education/Education.js';
import About from './About/About.js';
import Header from './Header/Header.js';

function Container() {
    return (
        <>
            <div className="wrapper">
                <div className="content">
                    <Header/>
                    <About/>
                    <Education/>
                    <Experience/>
                    <Service/>
                    <Portfolio/>
                    <Contact/>
                </div>
            </div>
        </>
    )
}

export default Container







