import { useState } from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const FormInputGroup = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const FormInputSpan = styled.span`
  color: white;
`;
const FormInput = styled.input`
  width: 70%;
  height: 20px;
  border-radius: 0 10px 10px 0;
  border: none;
`;
const FormButtomGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;
const FormButtom = styled.button`
  border: none;
  width: 150px;
  height: 30px;
  border-radius: 20px;
  background-color: #dce2f0;
  &:hover {
    background-color: #50586c;
    color: white;
    cursor: pointer;
    transition: 0.1s;
  }
`;

function Form({ getWetherInfo }) {
  const [location, setLocation] = useState({
    lon: 0,
    lat: 0,
  });
  const requestData = () => {
    console.log(location);
    getWetherInfo(location.lon, location.lat);
  };

  const changeLocation = (event) => {
    const { name, value } = event.target;

    setLocation((preValue) => {
      if (name === 'lon') {
        return {
          lon: value,
          lat: preValue.lat,
        };
      } else {
        return {
          lon: preValue.lon,
          lat: value,
        };
      }
    });
  };

  return (
    <FormBox>
      <FormInputGroup>
        <FormInputSpan>위도</FormInputSpan>
        <FormInput name="lon" value={location.lon} onChange={changeLocation} />
      </FormInputGroup>
      <FormInputGroup>
        <FormInputSpan>경도</FormInputSpan>
        <FormInput name="lat" value={location.lat} onChange={changeLocation} />
      </FormInputGroup>
      <FormButtomGroup>
        <FormButtom onClick={() => window.open('http://map.esran.com/')}>
          위치 찾으러 가기
        </FormButtom>
        <FormButtom onClick={() => requestData()}>ENTER</FormButtom>
      </FormButtomGroup>
    </FormBox>
  );
}

export default Form;
