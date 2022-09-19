import React from 'react'
import "../App.css";

const Ptlabs = () => {
  return(
    <div className="container-fluid ptl">

    <div className="row justify-content-center">
    <div className="col-7">
    <h2>Leanpitch Thinking Labs</h2>
    <p>Product Thinking Community introduces PT Labs powered by Leanpitch. Product Managers are creative thinkers and life long researchers. Their curiosity to understand the problem, persistence to solve them, and empathy to make the solutions easy makes them resourceful in solving Social Problems.<br/>

If you have it in you and are looking for an opportunity to contribute back to society, join PT Labs. Become part of a product team of volunteers, pickup a social problem, swarm together, design, and run experiments to find a problem/solution fit. Present your discovery and be recognized at next Product Thinking Conference. Product Thinking community will pursue further on implementing a solution in the subsequent cohorts, which you can again be part of.
<br/><b>Share your interest by submitting your details. We will get back to you with more information.</b></p>
    
    <button id="joc">View Details →</button>
    <button id="joc">Register Now →</button>
    </div>
    <div className="col-5"><img src="./images/ptlabs.png"width="80%" alt="..." id="ptlabsimg"/></div>
    </div> 


    </div>
    )
}

export default Ptlabs;


