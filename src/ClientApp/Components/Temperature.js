import React, {useState} from 'react';
import { TextField, Stack, DefaultButton } from 'office-ui-fabric-react';
import style from '../Styles/temp.module.css';

const Temperature = () =>{

    const [fahrenheit, setFahrenheit] = useState('');
    const [celsius, setCelsius] = useState('');

    const updateFahBox = e =>{
        setFahrenheit(e.target.value);
        setCelsius((e.target.value - 32) * 5 /9);
    };

    const updateCelBox = e =>{
        setCelsius(e.target.value);
        setFahrenheit(e.target.value * (9/5) + 32);  
    };

    const clearButton = () =>{
        setFahrenheit('');
        setCelsius('');
    }

    return(
        <div class="ms-Grid-col ms-sm12 ms-lg4">
            <Stack horizontal tokens={{ childrenGap: 15 }} >
            <TextField placeholder="0.00" label="Fahrenheit" value={fahrenheit} onChange={updateFahBox}/>
            <TextField placeholder="0.00" label="Celsius" value={celsius} onChange={updateCelBox}/>
            </Stack>
            <DefaultButton onClick={clearButton} text="Clear" allowDisabledFocus />
        </div>        
    );
}

export default Temperature;