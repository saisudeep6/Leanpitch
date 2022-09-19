import React from 'react'
import "../App.css";
import Training from './Training';
import Conference from './Conference';
import Videos from './Videos';
import Pmspeaks from './Pmspeaks';
import Blogs from './Blogs';
import Podcasts from './Podcasts';
const Data = () => {
  function content1(event) {
  document.getElementById('content1').style.display="block";
}
function content2(event) {
  document.getElementById('content2').style.display="block";
}
function content3(event) {
  document.getElementById('content3').style.display="block";
}
function content4(event) {
  document.getElementById('content4').style.display="block";
}
function content5(event) {
  document.getElementById('content5').style.display="block";
}
function content6(event) {
  document.getElementById('content6').style.display="block";
}
function content7(event) {
  document.getElementById('content7').style.display="block";
}
function content8(event) {
  document.getElementById('content8').style.display="block";
}

function MouseOut(event){
  document.getElementById('content1').style.display="none";
  document.getElementById('content2').style.display="none";
  document.getElementById('content3').style.display="none";
  document.getElementById('content4').style.display="none";
  document.getElementById('content5').style.display="none";
  document.getElementById('content6').style.display="none";
  document.getElementById('content7').style.display="none";
  document.getElementById('content8').style.display="none";
}
  return(
      <div className="container-fluid data">
        <div className="col-md-20 ">  
<table class="table">
  <tbody>
    <tr>
      <th scope="row" >
      <a onMouseOver={content1} id="sb" onMouseOut={MouseOut}>Trainings</a> 
      <a onMouseOver={content2} id="sb" onMouseOut={MouseOut}>Meetups</a> 
      <a onMouseOver={content3} id="sb" onMouseOut={MouseOut}>Webinars</a> 
      <a onMouseOver={content4} id="sb" onMouseOut={MouseOut}>Conference</a> 
      <a onMouseOver={content5} id="sb" onMouseOut={MouseOut}>Videos</a> 
      <a onMouseOver={content6} id="sb" onMouseOut={MouseOut}>PM Speak Series</a> 
      <a onMouseOver={content7} id="sb" onMouseOut={MouseOut}>Blogs</a> 
      <a onMouseOver={content8} id="sb" onMouseOut={MouseOut}>Podcasts</a> 
      <a id="sb">Be A Speaker</a> 
      <a id="sb">Be A Volunteer</a> 
      <a id="sb">About Us</a> 
      <a id="sb" className="hide">12</a>
      <a id="sb" className="hide">12</a>
      <a id="sb" className="hide">12</a>
      <a id="sb" className="hide">12</a>
      </th>
      <td id="con" rowSpan="">
      <span id="content1" className="innerdata font">  <Training / > </span>
      <span id="content2" className="innerdata font">  Awesome meetups will be here soon!  </span>
      <span id="content3" className="innerdata font">  Awesome webinars will be here soon!  </span>
      <span id="content4" className="innerdata font ">  <p>Conferences are not just about learning from the speakers. It’s also about meeting new people, learning from attendees, making connections, getting to know each other and being part of a community.

Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.

We will be back with more information once COVID subsides</p>    <button id="joc">Notify Me →</button>
  </span>
      <span id="content5" className="innerdata font">  <Videos />  </span>
      <span id="content6" className="innerdata font">   <Pmspeaks />  </span>
      <span id="content7" className="innerdata font">   <Blogs />  </span>
      <span id="content8" className="innerdata font">   <Podcasts />  </span>
      </td>
    </tr>
    <tr>.</tr>
    <tr>.</tr>

  </tbody>
</table>
        </div>
      </div>
    )
}

export default Data;


