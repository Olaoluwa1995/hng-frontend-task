import React from 'react'
import './experience.css'

const Experience = () => {
    return (
        <div className="experience-container">
            <h4>Experience</h4>
            <hr />
            <div className="experience">
                <h5>2006-12 - present</h5>
                <div>
                    <h4>Senior Project Manager</h4>
                    <p>Seton Hospital, ME</p>
                    <ul>
                        <li>Oversaw all major hospital IT projects for 10+ years, focus on cost reduction.</li>
                        <li>Responsible for creating, improving, and developing IT project strategies.</li>
                        <li>Implemented the highly successful Lean Training and Six Sigma projects for all employees. Cut costs by 32%.</li>
                        <li>I reduced the costs of IT infrastructure maintenance by 5% in 2015 by successfully rebuilding the infrastructure.</li>
                    </ul>
                </div>
            </div>
            <div className="experience">
                <h5>2004-09 - 2006-12</h5>
                <div>
                    <h4>Junior Project Manager</h4>
                    <p>Seton Hospital, ME</p>
                    <ul>
                        <li>Streamlined IT logistics and administration operation cutting costs by 25%.</li>
                        <li>Diagnosed problems with hardware and operating systems and implemented solutions to increase efficiency.</li>
                        <li>Maintained the user database of over 30000 patients, implemented new solutions inside the dashboard.</li>
                        <li>Managed project for lean training for all IT Support Officers.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
