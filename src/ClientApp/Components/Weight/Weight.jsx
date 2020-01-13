import React, { useState, useEffect } from 'react';
import { Stack, DefaultButton } from 'office-ui-fabric-react';
import Pounds from './Pounds';
import Kiligrams from './Kilograms';


const Weight = () => {
    const [pounds, setPounds] = useState('');
    const [kilograms, setKilograms] = useState('');



    return (
        <div>
            <Stack horizontal tokens={{ childrenGap: 10}}>
                <Pounds />
                <Kiligrams />
            </Stack>
        </div>
    )
}

export default Weight;