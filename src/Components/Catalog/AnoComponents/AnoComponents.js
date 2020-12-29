
import React from 'react';
import stamp1 from '../../../Resorce/Stmp/1955-general-franco-spanish-stamp-bill-owen.jpg'
import AnoDetails from './AnoDetails';
const AnoComponents = () => {
    const fakeAnoData = [
        {
            id:1,
            title:'19-20',
            img:stamp1
        },
        {
            id:2,
            title:'19-20',
            img:stamp1
        }
    ]
    return (
        <div>
            {
                fakeAnoData.map(data => <AnoDetails data={data}/>) 
            }
        </div>
    );
};

export default AnoComponents;