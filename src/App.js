import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  const [location, setLocation] = useState({lat : 0, lng : 0});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setLocation({lat : coords.latitude, lng : coords.longitude});
    })
  }, [])

  return (
    <>
      <Header setLocation={setLocation}/>
    </>
  );
}

export default App;
