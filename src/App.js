import "./App.css";
import Tabs from './components/Tabs';
import Data from './components/Data';
import Nav from './components/Nav';
import Wwm from './components/Wwm';
import Ptlabs from './components/Ptlabs';
import Training from './components/Training';
import Webinar from './components/Webinar';
import Conference from './components/Conference';
import Videos from './components/Videos';
import Pmspeaks from './components/Pmspeaks';
import Blogs from './components/Blogs';
import Podcasts from './components/Podcasts';

function App() {
 

return (
  <div className="App">

  <Nav/>
  <Data/>
  <Wwm />
  <hr/> 
  <Ptlabs/>
  <hr/> 
    <h1>Our Training  </h1>

  <Training/>
  <Webinar/>
  <Conference/>
    <h1>Videos  </h1>
  <Videos/>
    <h1>PM Speaks</h1>
  <Pmspeaks/>
    <h1>Blogs</h1>
  <Blogs/>
    <h1>Podcasts</h1>
  <Podcasts/>
  
  
  </div>
  );
}

export default App;
