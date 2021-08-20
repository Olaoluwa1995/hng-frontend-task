import React from 'react'
import Certifications from '../certifications/certifications'
import Education from '../education/education'
import Experience from '../experience/experience'
import Footer from '../footer/footer'
import Summary from '../professional-summary/summary'
import Skills from '../skills/skills'
import Software from '../software/software'
import './content.css'

const Content = (children) => {
    return (
        <div id="content">
            <Summary />
            <Experience />
            <Education />
            <Skills />
            <Software />
            <Certifications />
            <hr />
            <Footer />
        </div>
    )
}

export default Content;
