"use strict";

console.log('App.js is running');

//JSX- JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "does change?"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item 1"
        ),
        React.createElement(
            "li",
            null,
            "Item 2"
        )
    ),
    React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
            "button",
            null,
            "Add Option"
        )
    )
);

var userName = 'Ming';
var userAge = 27;
var userLocation = 'New York';

var count = 0;
var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count:",
        count
    ),
    React.createElement(
        "button",
        { id: "my-id", className: "class" },
        "+1"
    )
);
var appRoot = document.getElementById('app');

var multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this = this;

        return this.numbers.map(function (number) {
            return number * _this.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());

ReactDOM.render(template, appRoot);
