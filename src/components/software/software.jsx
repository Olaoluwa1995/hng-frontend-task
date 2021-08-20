import React from 'react'
import './software.css'

const Software = () => {
    return (
        <div className="software-container">
        <h4>Software</h4>
        <hr />
        <div className="software">
            <h5></h5>
            <div className="grade">
            <div>
                   <p>Microsoft Project</p>
                   <div className="grade-column">
                       <div className="excellent-progress"></div>
                       <p>Excellent</p>
               </div>
            </div>
            <div>
                   <p>Ms Windows Server</p>
                   <div className="grade-column">
                       <div className="good-progress">
                           <div className="deep-progress"></div>
                           <div className="light-progress"></div>
                       </div>
                       <p>Very Good</p>
               </div>
            </div>
            </div>
        </div>
    </div>
    )
}

export default Software
