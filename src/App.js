import NavBar from './components/NavBar/NavBar'
import ReportsPane from './components/ReportsPane/ReportsPane';
import MapPane from './components/MapPane/MapPane';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="navbar">
        <NavBar appName='Ice Reports' />
      </div>
      <div className='reports pane'>
        <ReportsPane />
      </div>
      <div className="map pane">
        <MapPane />
      </div>
    </div>
  );
}

export default App;
