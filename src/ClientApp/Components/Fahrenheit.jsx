import React from 'react';
import { TextField } from 'office-ui-fabric-react';

const Fahrenheit = ({fahValue, onTemperatureChange}) =>{
    const handleChange = (e) =>{
        onTemperatureChange(e.target.value);
    };

    return(
        <div className="fahrenheit">
            <TextField 
                placeholder="0.00" 
                label="Fahrenheit" 
                value={fahValue} 
                onChange={handleChange}/>
        </div>
    );
}

export default Fahrenheit;