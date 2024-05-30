import { WeatherInfoProvider } from "../classes/weather-info.provider";
import '../styles/widget.scss'

export default function Widget({info}: any){
  console.log(info.temp)

  const style = {
    color: 'white',
    fontSize: 20
  };

  return (
    <div className="widget">

      <p>{info.temp}</p>
      
    </div>
  );
}

