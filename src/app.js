
class Header extends React.Component{
    render(){

        return (
            <div>
                <h1>DecisionMaker</h1>
                <h2>Hey computer, please make a decision for me!</h2>
            </div>
        )

    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
    </div>

);
   


ReactDOM.render(jsx,document.getElementById('app'));