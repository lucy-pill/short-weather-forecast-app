import styled from 'styled-components';

const CardBox = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  box-shadow: 5px 5px 5px grey;
`;
const Header = styled.div`
  width: 100%;
  height: 15%;
  background-color: #50586c;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dce2f0;
`;
const Content = styled.div`
  width: 100%;
  height: 85%;
  background-color: #dce2f0;
  border-radius: 0 0 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const WeatherContent = styled.div``;

function Card({ weather }) {
  const convertKtoC = (K) => {
    return (K - 273.15).toFixed(2) + '°C';
  };
  return (
    <CardBox>
      <Header>{weather.name === undefined ? 'City' : weather.name}</Header>
      <Content>
        <WeatherContent>
          현재온도: 
          {weather.main === undefined
            ? '0 °C'
            : convertKtoC(weather.main.temp)}
        </WeatherContent>
        <WeatherContent>
          체감온도: 
          {weather.main === undefined
            ? '0 °C'
            : convertKtoC(weather.main.feels_like)}
        </WeatherContent>
        <WeatherContent>
          습도: 
          {weather.main === undefined
            ? '0 %'
            : weather.main.humidity + '%'}
        </WeatherContent>
        <WeatherContent>
          풍속: 
          {weather.wind === undefined
            ? '0 m/s'
            : weather.wind.speed + 'm/s'}
        </WeatherContent>
        <WeatherContent>
          날씨 상태: 
          {weather.weather === undefined
            ? '-'
            : weather.weather[0].description}
        </WeatherContent>
      </Content>
    </CardBox>
  );
}

export default Card;
