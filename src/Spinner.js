import React from 'react';

const Spinner = (props) => {
    return (
            <div className="ui active dimmer">
                <div className="ui massive text loader">
                    {props.message || 'Loading...'}
                </div>
            </div>
    );
}

export default Spinner;