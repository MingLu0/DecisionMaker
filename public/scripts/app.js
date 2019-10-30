"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DecisionMakerApp = function (_React$Component) {
    _inherits(DecisionMakerApp, _React$Component);

    function DecisionMakerApp() {
        _classCallCheck(this, DecisionMakerApp);

        return _possibleConstructorReturn(this, (DecisionMakerApp.__proto__ || Object.getPrototypeOf(DecisionMakerApp)).apply(this, arguments));
    }

    _createClass(DecisionMakerApp, [{
        key: "render",
        value: function render() {
            var title = "DecisionMaker";
            var subtitle = "Hey computer, please make a decision for me!";
            var options = [];

            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { buttonEnabled: options.length >= 1 }),
                React.createElement(Options, { options: options }),
                React.createElement(AddOptionds, null)
            );
        }
    }]);

    return DecisionMakerApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action(props) {
        _classCallCheck(this, Action);

        var _this3 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

        _this3.handlePick = _this3.handlePick.bind(_this3);
        _this3.state = {
            enableButton: _this3.props.buttonEnabled
        };
        return _this3;
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            alert("handle pick pressed");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { disabled: !this.state.buttonEnabled, onClick: this.handlePick },
                    "Does this change?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.removeAll = _this4.removeAll.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "removeAll",
        value: function removeAll() {
            alert('remove all11');
            console.log(this);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.removeAll },
                    "Remove All"
                ),
                this.props.options.map(function (option) {
                    return React.createElement(Option, { key: option, optionText: option });
                })
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.optionText
            );
        }
    }]);

    return Option;
}(React.Component);

var AddOptionds = function (_React$Component6) {
    _inherits(AddOptionds, _React$Component6);

    function AddOptionds() {
        _classCallCheck(this, AddOptionds);

        return _possibleConstructorReturn(this, (AddOptionds.__proto__ || Object.getPrototypeOf(AddOptionds)).apply(this, arguments));
    }

    _createClass(AddOptionds, [{
        key: "handleAddOption",
        value: function handleAddOption(e) {

            e.preventDefault();

            var option = e.target.elements.option.value.trim();

            if (option) {
                alert(option);
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    null,
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
