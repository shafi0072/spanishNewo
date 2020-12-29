import React from 'react';
import './Ano.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const AnoDetails = (props) => {
    const {id, title, img} = props.data;
    return (
        <div className='d-flex justify-content-center align-item-center'>
            <div className="row  mt-5">
                <div className=" col-md-12">
                    <div className="StampCatagory">
                    <div className="StampImg">
                    <img style={{width:'100px'}} src={img} alt=""/>
                    </div>
                        <div className="TitleArea">
                          <h1 style={{fontFamily:'Bien', color:'white'}}>{title}</h1>
                          <ExpandMoreIcon className="ExpandMore" fontSize="large"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnoDetails;