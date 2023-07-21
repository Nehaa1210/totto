import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar';
import AllRoutes from './Components/AllRoutes';
import Navbar1 from './Components/Navbar1';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Navbar/>
    <AllRoutes/>
    </div>
  );
}

export default App;
