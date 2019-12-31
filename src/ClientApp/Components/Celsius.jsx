import React from 'react';
import { TextField } from 'office-ui-fabric-react';

const Celsius = ({celValue, onTemperatureChange}) =>{
    const handleChange = (e) =>{
        onTemperatureChange(e.target.value);
    };

    return(
        <div className="celsius">
            <TextField 
                placeholder="0.00" 
                label="Celsius" 
                value={celValue} 
                onChange={handleChange}/>
        </div>
    );
}
// <TextField placeholder="0.00" label="Fahrenheit" value={fahrenheit} onChange={updateFahBox}/>
export default Celsius;