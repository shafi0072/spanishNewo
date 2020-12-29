import {Button} from '@material-ui/core';
import React from 'react';
import {Spinner} from 'react-bootstrap';

const SpinnerLoad = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="warning"/>

            <Button className="text-warning" variant="primary" disabled="disabled">
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                Loading...
            </Button>
        </div>
    );
};

export default SpinnerLoad;