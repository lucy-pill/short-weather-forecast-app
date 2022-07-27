import './App.css';
import Card from './components/card/Card';
import Form from './components/form/Form';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const Container = styled.div`
  max-width: 700px;
  width: 600px;
  min-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  const [weather, setWeather] = useState([]);
  const API_KEY = 'f376c591ab718ed252ff944795875bbe';
  
  const getWetherInfo = (lat, lon) => {
    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
      responseType: 'json',
    }).then((response) => {
      setWeather(response.data);
      console.log(weather);
    });
  };

  return (
    <Container>
      <Form getWetherInfo={getWetherInfo} />
      <Card weather={weather} />
    </Container>
  );
}

export default App;
