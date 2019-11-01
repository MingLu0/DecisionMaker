"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionMakerApp = function (_React$Component) {
    _inherits(DecisionMakerApp, _React$Component);

    function DecisionMakerApp(props) {
        _classCallCheck(this, DecisionMakerApp);

        var _this = _possibleConstructorReturn(this, (DecisionMakerApp.__proto__ || Object.getPrototypeOf(DecisionMakerApp)).call(this, props));

        _this.handleDeleteAction = _this.handleDeleteAction.bind(_this);
        _this.handlePickAction = _this.handlePickAction.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: [1, 2]

        };
        return _this;
    }

    _createClass(DecisionMakerApp, [{
        key: "handleDeleteAction",
        value: function handleDeleteAction() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handlePickAction",
        value: function handlePickAction() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {

            if (!option) {
                return "no item has been entered";
            } else if (this.state.options.indexOf(option) > -1) {
                return "item already existed";
            }
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "DecisionMakerTest";
            var subtitle = "Hey computer, please make a decision for me!";

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { buttonEnabled: this.state.options.length > 0, handlePickAction: this.handlePickAction }),
                React.createElement(Options, { options: this.state.options, handleDeleteAction: this.handleDeleteAction }),
                React.createElement(AddOptionds, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return DecisionMakerApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.buttonEnabled, onClick: props.handlePickAction },
            "What Should I Do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteAction },
            "Remove All"
        ),
        props.options.map(function (option) {
            return React.createElement(Option, { key: option, optionText: option });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        props.optionText
    );
};

var AddOptionds = function (_React$Component2) {
    _inherits(AddOptionds, _React$Component2);

    function AddOptionds(props) {
        _classCallCheck(this, AddOptionds);

        var _this2 = _possibleConstructorReturn(this, (AddOptionds.__proto__ || Object.getPrototypeOf(AddOptionds)).call(this, props));

        _this2.handleAddAction = _this2.handleAddAction.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptionds, [{
        key: "handleAddAction",
        value: function handleAddAction(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddAction },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
                    )
                )
            );
        }
    }]);

    return AddOptionds;
}(React.Component);

ReactDOM.render(React.createElement(DecisionMakerApp, null), document.getElementById('app'));
