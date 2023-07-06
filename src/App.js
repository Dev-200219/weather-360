import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import WeatherCard from './Components/WeatherCard/WeatherCard';
import AQIChart from './Components/AQIChart/AQIChart';
import AstroData from './Components/AstroData/AstroData';
import { Grid } from '@mui/material';

function App() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [unit, setUnit] = useState('celsius');
  const [AQIData, setAQIData] = useState({});
  const [astroData, setAstroData] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    })
  }, [])

  return (
    <>
      <Header setLocation={setLocation} unit={unit} setUnit={setUnit} />
      <Grid container>
        <Grid item md={8}>
          <WeatherCard location={location} unit={unit} setAQIData={setAQIData} setAstroData={setAstroData} />
        </Grid>
        <Grid item md={4}>
          <AstroData astroData={astroData} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={8}>
          <AQIChart AQIData={AQIData} />
        </Grid>
        <Grid item md={4}>
          <AstroData astroData={astroData} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
