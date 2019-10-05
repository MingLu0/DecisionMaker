console.log('App.js is running');

//JSX- JavaScript XML
var template = (
    <div>
        <h1>does change?</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form>
           <input type="text" name="option"></input>
           <button>Add Option</button>
        </form>
    </div>
);

var userName = 'Ming';
var userAge = 27;
var userLocation = 'New York';

let count = 0;
var template2 = (
    <div>
    <h1>Count:{count}</h1>
    <button id="my-id" className="class">+1</button>
    </div>
);
var appRoot = document.getElementById('app');

const multiplier = {
    numbers:[1,2,3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyBy);
    }

}

console.log(multiplier.multiply());

ReactDOM.render(template,appRoot);