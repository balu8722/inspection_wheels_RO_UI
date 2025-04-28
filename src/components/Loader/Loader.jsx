import PropTypes from 'prop-types';
import React from 'react';
const Loader = ({ color = 'primary' }) => {
    return (
        <div className="cr-page-spinner">
             <div className='is_loader'></div>
        </div>
    );
};



export default Loader;
