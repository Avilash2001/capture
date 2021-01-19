//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import Nav Bar
import Nav from './components/Nav';

//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//Router
import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle/>

      <Nav/>
      <Switch>
        <Route path = "/" exact>
          <AboutUs />
        </Route>

        <Route path = "/work" exact>
          <OurWork />
        </Route>

        <Route path = "/contact" exact>
          <ContactUs />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
