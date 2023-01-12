import './App.css';
import { WeatherForecast } from './components/WeatherForecast/WeatherForecast';




function App() {
  

  return (
    <div className="App">
      <header className='AppHeader'>
        <h1>Hei Kristian!</h1>
      </header>
      <body className='AppBody'>
        <WeatherForecast/>
      </body>
    </div>
  );
}




export default App;
