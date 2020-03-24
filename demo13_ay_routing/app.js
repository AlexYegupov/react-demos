'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: debug (display error of right code place)

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    console.log('App', props);
    _this.render = _this.render.bind(_this);
    _this.state = {
      items: _this.props.items,
      disabled: true,
      url: props.url
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('cdm', this.props, this.state);
      this.setState({
        disabled: false
        //histCurrent: location.href
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      this.setState({
        items: this.state.items.concat('Item ' + this.state.items.length)
      });
    }
  }, {
    key: 'handleRedirect',
    value: function handleRedirect() {
      MYERROR;
      history.pushState({ page2: 'PaGe2' }, 'my page2 title', '/page2');
      this.setState({ url: '/page2' });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('r', this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'url: ',
          this.state.url
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleClick.bind(this), disabled: this.state.disabled },
          'Add Item'
        ),
        _react2.default.createElement(
          'ul',
          null,
          this.state.items.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              { key: index },
              item
            );
          })
        ),
        _react2.default.createElement(
          'button',
          { onClick: this.handleRedirect.bind(this) },
          'go page2'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_page2.default, { url: this.state.url })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;
;