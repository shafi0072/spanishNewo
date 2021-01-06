import React from 'react';

const SubastasPronto = (props) => {
    const {name, img, Precio} = props.data;
    return (
            <div className="col-md-4">
                <div style={{border:'1px solid lightgray'}}>
                <div className="row" >
                   <div className="col-md-3 p-1 d-flex align-items-center">
                     <img src={`http://localhost:5000/${img}.jpeg`} style={{width:'80%', height:'70px'}} className="ml-3" alt=""/>
                   </div>
                   <div className="col-md-9 bg-light">
                      <p style={{fontFamily:'Bien'}}>{name}</p>
                     <div className="row">
                        <div className="col-md-6">
                          <small>Puja actual</small>
                        </div>
                        <div className="col-md-6">
                          <small>Termina en</small>
                        </div>
                     </div>
                     <div className="row mt-3">
                       <div className="col-md-6">
                          <h5 style={{fontFamily:'Bien'}}>S/{Precio}</h5>
                       </div>
                       <div className="col-md-6">
                         <h5 style={{fontFamily:'Bien'}}>Time Zone</h5>
                       </div>
                     </div>
                   </div>
                </div>
                </div>
            </div>
    );
};

export default SubastasPronto;