class DecisionMakerApp extends React.Component{

    render(){
        const title = "DecisionMaker";
        const subtitle = "Hey computer, please make a decision for me!"
        const options = [];

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action buttonEnabled = {options.length>=1}/>
            <Options options={options}/>
            <AddOptionds />
            </div>
        );
    }
}
class Header extends React.Component{

    render(){

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );

    }
}

class Action extends React.Component{

    constructor(props){
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            enableButton : this.props.buttonEnabled
        }
    }

    handlePick(){
        alert("handle pick pressed");
    }

    render(){
        return (
            <div>
                <button disabled = {!this.state.buttonEnabled} onClick={this.handlePick}>Does this change?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    constructor(props){
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }

    removeAll(){
        alert('remove all11');
        console.log(this);
    }    
    render(){
        return(
            <div>
            <button onClick={this.removeAll}>Remove All</button>
            {this.props.options.map((option)=><Option key={option} optionText={option}/>)}
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        )
    }
}

class AddOptionds extends React.Component{

    handleAddOption(e){
            
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            alert(option);
        }
    }

    render(){
        return(
            <div>
                <form >
                    <input type="text" name="option"></input>
                    <button>Add option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<DecisionMakerApp/>,document.getElementById('app'));