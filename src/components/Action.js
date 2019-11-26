import React from 'react';

const Action = (props)=>(
    <div>
        <button 
            className='big-button'
            disabled = {!props.buttonEnabled} 
            onClick={props.handlePickAction}
            >
            What Should I Do?
        </button>
    </div>
);

export default Action;