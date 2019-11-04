import React from 'react';

class AddOptionds extends React.Component{

    
    state = {
        error:undefined
    }

    handleAddAction = (e) =>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);    
        this.setState(()=>({error})); 
    }

    render(){
        return(
            <div>
                {this.state.error&&<p>{this.state.error}</p>}
                <form onSubmit={this.handleAddAction}>
                    <input type="text" name="option"></input>
                    <button >Add option</button>
                </form>
            </div>
        )
    }
}

export default AddOptionds;