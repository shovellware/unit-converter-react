import * as React from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

const AppNav = () => {
    const navLinkGroups = [
        {
            name: 'Converters',
            key: 'HomeLink1',
            ariaLabel: 'homestuff',
            links: [
                {
                    key: 'tempKey',
                    name: 'Temperature',
                    href: "#"
                },
                {
                    key: 'weightKey',
                    name: 'Weight',
                }
            ]
        },
        {
            name: 'Group 2',
            key: 'Link2',
            ariaLabel: 'other group'
        }
    ];

    return(
        <Nav 
            groups={navLinkGroups}
        />
    );
};

export default AppNav;