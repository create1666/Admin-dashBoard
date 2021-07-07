
import './App.css'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './Pages/Home';
function App() {
  return (
    <div className="app">
       <NavBar/>
       <div className="app__container">
       <SideBar/>
        <Home/>
       </div>
      
    </div>
  );
}

export default App;
