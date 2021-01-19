//Global Style
import GlobalStyle from './components/GlobalStyle';

//Import Nav Bar
import Nav from './components/Nav';

//Import Pages
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
    </div>
  );
}

export default App;
