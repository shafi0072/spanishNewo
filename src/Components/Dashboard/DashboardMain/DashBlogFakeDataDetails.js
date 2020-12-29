import React from 'react';

const DashBlogFakeDataDetails = (props) => {
    const {name, admin} = props.data;
    return (
        <div>
            <div className="row p-2 m-1 pb-5" style={{backgroundColor:'#F5F2F2'}} >
                <div className="col-md-6">
                    <input type="checkbox" name="" id="Título"/>
                    <small htmlFor="Título" className='ml-1'>{name}</small>
                </div>
                <div className="col-md-2">
                    <small>{admin}</small>
                </div>
                <div className="col-md-2">
                <small>{admin}</small>
                </div>
                <div className="col-md-2">
                <small>{admin}</small>
                </div>
            </div>
        </div>
    );
};

export default DashBlogFakeDataDetails;