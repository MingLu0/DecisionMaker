import React from 'react';
const Option = (props)=>(
    <div className='option'>
        <div>
        <p className='option__text'>{props.count}. {props.optionText}</p>
        </div>
    </div>
    
)

export default Option;