import React from 'React';

class AddOptionds extends React.Component{

    constructor(props){
        super(props);
        this.handleAddAction = this.handleAddAction.bind(this);
        this.state={
            error:undefined
        }
    }

    state = {
        error:undefined
    }

    handleAddAction = (e) =>{
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = props.handleAddOption(option);    
        setState(()=>({error})); 
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