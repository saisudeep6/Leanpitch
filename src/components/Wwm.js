import React from 'react'
import "../App.css";

const Wwm = () => {
  return(
    <div className="container-fluid wwm">
    <div className="container design"> 
    <h1>Why We Matter?</h1>
    <p><img src="https://productthinking.io/static/media/red_arrow.e4904151.webp" alt="..."/></p>
    </div>
    <div className="row justify-content-center">
    <div className="col-8">
    <h2>Creative Thinking for creating an impact!</h2>
    <p>Product thinking is problem solving. Whether it’s your kid asking for a solution to his day to day problems or the rise in threats of Global Warming, it’s evident that the whole human kind needs to be product thinkers. We, at Product Thinking community, strive to provide such a platform for practitioners to come together and learn from each other about the craft of building products. This Platform is run by the community for the community. We are a community with 46k+ product thinkers hosting various events across India: Webinars every week, meet-ups every month in every city, two conference a year.</p>
    </div>
    <div className="col-4"><img src="https://shots.codepen.io/chrisnager/pen/jPrJgQ-800.jpg?version=1432231229" alt="..." className="img-thumbnail"/></div>
    </div> 
    <button id="joc">Join Our Community <span className="rightarrow">→</span></button>
    </div>
    )
}

export default Wwm;