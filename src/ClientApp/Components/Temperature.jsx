import React, { useState, useEffect } from 'react';
import { Stack, DefaultButton } from 'office-ui-fabric-react';
import Fahrenheit from './Fahrenheit.jsx';
import Celsius from './Celsius.jsx';

const Temperature = () => {
  const [fahrenheit, setFahrenheit] = useState('');
  const [celsius, setCelsius] = useState('');

  useEffect(() => {
    if (fahrenheit === '') { setCelsius(''); }
    if (celsius === '') { setFahrenheit(''); }
  }, [fahrenheit, celsius]);

  const fahrenheitChange = (e) => {
    setFahrenheit(e);
    setCelsius((e - 32) * 5 / 9);
  };

  const celsiusChange = (e) => {
    setCelsius(e);
    setFahrenheit(e * (9 / 5) + 32);
  };

  const clearButton = () => {
    setFahrenheit('');
    setCelsius('');
  };

  return (
    <div className="ms-Grid">
      <div className="ms-Grid-row">
        <Stack horizontal tokens={{ childrenGap: 10 }}>
          <Fahrenheit
            fahValue={fahrenheit}
            onTemperatureChange={fahrenheitChange}
          />
          <Celsius
            celValue={celsius}
            onTemperatureChange={celsiusChange}
          />
        </Stack>
      </div>
      <DefaultButton onClick={clearButton} text="Clear" allowDisabledFocus />
    </div>
  );
};

export default Temperature;
