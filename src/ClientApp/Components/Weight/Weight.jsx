import React, { useState, useEffect } from 'react';
import { Stack, DefaultButton } from 'office-ui-fabric-react';
import Pounds from './Pounds';
import Kilograms from './Kilograms';


const Weight = () => {
    const [pounds, setPounds] = useState('');
    const [kilograms, setKilograms] = useState('');



    return (
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col">
                <Stack horizontal tokens={{ childrenGap: 10}}>
                <Pounds />
                <Kilograms />
                </Stack>
                <DefaultButton style={{marginTop: '5px'}} text='Clear' />
            </div>
          </div>
        </div>
    );
};

export default Weight;