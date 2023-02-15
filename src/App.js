import './App.css';
import Navbar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import HelloWorld from './Components/HelloWorld';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Container/>
          <Routes>
            <Route path="/TVShows"/>
          </Routes>
        </BrowserRouter>
        
        {/* <HelloWorld search={null}/> */}
      </div>
  );
}

export default App;
