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
            <Stack horizontal tokens={{ childrenGap: 10}}>
                <Pounds />
                <Kilograms />
            </Stack>
            </div>
        </div>
    );
};

export default Weight;