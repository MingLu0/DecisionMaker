import React from 'react';
import Option from './Option';


const Options = (props) =>(
    <div>
    <button onClick={props.handleDeleteAction}>Remove All</button>
    {props.options.map((option)=><Option key={option} optionText={option}/>)}
    </div>
);
export default Options;