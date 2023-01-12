import './App.css';
import { TimeAndDate } from './components/TimeAndDate';
import { Forecast } from './components/WeatherForecast/Forecast';
import { locations } from './components/WeatherForecast/Locations';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';




function App() {
  
  return (
    <div className="App">
      <header className='AppHeader'>
        <TimeAndDate/>
        <Forecast location={locations[2]}/>
      </header>
      <body className='AppBody'>
      </body>
    </div>
  );
}

export default App;
