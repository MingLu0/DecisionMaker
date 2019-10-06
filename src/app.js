class DecisionMakerApp extends React.Component{

    render(){
        const title = "DecisionMaker";
        const subtitle = "Hey computer, please make a decision for me!"
        const options = ["option11","option22","option33"];

        return(
            <div>
            <Header title={title} subtitle={subtitle}/>
            <Action />
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

    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
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
    render(){
        return(
            <div>
                AddOption component here!
            </div>
        )
    }
}


ReactDOM.render(<DecisionMakerApp/>,document.getElementById('app'));