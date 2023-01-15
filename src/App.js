import './App.css';
import "./Fonts.css";

import { TimeAndDate } from './components/TimeAndDate';
import { WeatherForecast } from './components/WeatherForecast';
import { Information } from './components/Information';





function App() {
  
  return (
    <div>
      <header className='AppHeader'>
       <h1 className='DarkLight'>
          Header
       </h1>
      </header>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
        <section style={{height:"fit-content", width:"60%"}}>
          <Information/>
        </section>
        <aside style={{float:"right", border:"1px dotted grey", width:"30%",}}>

        </aside>
      
      </div>
      <footer className='Footer'>
        <TimeAndDate/>
        <WeatherForecast/>
      </footer>
      </div>
  );
}

export default App;
