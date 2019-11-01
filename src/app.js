class DecisionMakerApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteAction = this.handleDeleteAction.bind(this);
        this.handlePickAction = this.handlePickAction.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            options:[1,2] 
        
        }
    }

    handleDeleteAction(){
        this.setState(()=>({options:[]}));
    }

    handlePickAction(){
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
    }

    handleAddOption(option){

        if(!option){
            return "no item has been entered";
        } else if(this.state.options.indexOf(option)>-1){
            return "item already existed";
        }
        this.setState((prevState)=>({options:prevState.options.concat(option)}));
    }

    render(){
        const title = "DecisionMakerTest";
        const subtitle = "Hey computer, please make a decision for me!"

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action buttonEnabled = {this.state.options.length>0} handlePickAction={this.handlePickAction}/>
            <Options options={this.state.options} handleDeleteAction={this.handleDeleteAction}/>
            <AddOptionds handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props)=>{
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    ); 
}

const Action = (props)=>{
    return (
        <div>
            <button disabled = {!props.buttonEnabled} onClick={props.handlePickAction}>What Should I Do?</button>
        </div>
    );
}


const Options = (props) =>{
    return(
        <div>
        <button onClick={props.handleDeleteAction}>Remove All</button>
        {props.options.map((option)=><Option key={option} optionText={option}/>)}
        </div>
    );
}

const Option = (props)=>{
    return(
        <div>
        {props.optionText}
        </div>
    )
}

class AddOptionds extends React.Component{

    constructor(props){
        super(props);
        this.handleAddAction = this.handleAddAction.bind(this);
        this.state={
            error:undefined
        }
    }

    handleAddAction(e){
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


ReactDOM.render(<DecisionMakerApp/>,document.getElementById('app'));