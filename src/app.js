class DecisionMakerApp extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <Action />
            <Options />
            <AddOptionds />
            </div>
        );
    }
}
class Header extends React.Component{
    render(){

        return (
            <div>
                <h1>DecisionMaker</h1>
                <h2>Hey computer, please make a decision for me!</h2>
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
            Options Components
            </div>
        );
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