'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _AddOptions = require('./components/AddOptions');

var _AddOptions2 = _interopRequireDefault(_AddOptions);

var _Options = require('./components/Options');

var _Options2 = _interopRequireDefault(_Options);

var _Option = require('./components/Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
        key: 'handleDeleteAction',
        value: function handleDeleteAction() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handlePickAction',
        value: function handlePickAction() {
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'handleAddOption',
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
        key: 'render',
        value: function render() {
            var title = "DecisionMaker1";
            var subtitle = "Hey computer, please make a decision for me!";

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, { title: title, subtitle: subtitle }),
                _react2.default.createElement(Action, { buttonEnabled: this.state.options.length > 0, handlePickAction: this.handlePickAction }),
                _react2.default.createElement(_Options2.default, { options: this.state.options, handleDeleteAction: this.handleDeleteAction }),
                _react2.default.createElement(_AddOptions2.default, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return DecisionMakerApp;
}(_react2.default.Component);

var Header = function Header(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            props.title
        ),
        _react2.default.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'button',
            { disabled: !props.buttonEnabled, onClick: props.handlePickAction },
            'What Should I Do?'
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(DecisionMakerApp, null), document.getElementById('app'));
