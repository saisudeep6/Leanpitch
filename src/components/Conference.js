import "../App.css";

const Conference = () => {
	return(
		<div className="container-fluid Conference">
		<h1>Our Conference	</h1>
		<center>
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight con1">Upcoming</div>
  <div class="p-2 bd-highlight con2">Past</div>
</div>

	<p>
Conferences are not just about learning from the speakers. It’s also about meeting new people, learning from attendees, making connections, getting to know each other and being part of a community.<br/>

Having hosted the conference online last year and after close consultation with the community, speakers, exhibitors and event partners, we have decided to host our next conference in person to make it more effective.<br/>

We will be back with more information once COVID subsides
	</p>
    <button id="joc">Notify Me →</button>

</center>

		</div>
		)
}

export default Conference