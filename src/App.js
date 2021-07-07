
import './App.css'
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
function App() {
  return (
    <div className="app">
       <NavBar/>
       <div className="app__container">
       <SideBar/>
       <div className="others"></div>
       </div>
      
    </div>
  );
}

export default App;
