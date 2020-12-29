import React from 'react';
import DashBlogFakeDataDetails from './DashBlogFakeDataDetails';

const DashBlogFakeData = () => {
    const FakeDataForBlog = [
        {
            key:1,
            name:'Filatelia Peruna',
            admin:'sadmlakmdkl'
        },
        {
            key:2,
            name:'Filatelia Peruna',
            admin:'sadmlakmdkl'
        },
        {
            key:3,
            name:'Filatelia Peruna',
            admin:'sadmlakmdkl'
        }
    ];
    return (
        <div>
            {
                FakeDataForBlog.map(data => <DashBlogFakeDataDetails data={data} />)
            }
        </div>
    );
};

export default DashBlogFakeData;