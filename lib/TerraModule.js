'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includePaths = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('../src/terra-module.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Module = function (_React$Component) {
  _inherits(Module, _React$Component);

  function Module() {
    _classCallCheck(this, Module);

    var _this = _possibleConstructorReturn(this, (Module.__proto__ || Object.getPrototypeOf(Module)).call(this));

    _this.state = {
      isSelected: false
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Module, [{
    key: 'handleClick',
    value: function handleClick() {
      this.setState({ isSelected: !this.state.isSelected });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)(['terra-Module', this.props.variant, this.state.isSelected && 'u-selected']);

      if (!this.props.name) {
        return null;
      }
      if (!this.props.variant) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        {
          className: classes,
          onClick: this.handleClick
        },
        'Terra, ',
        this.props.name
      );
    }
  }]);

  return Module;
}(_react2.default.Component);

Module.propTypes = {
  name: _react.PropTypes.string.isRequired,
  variant: _react.PropTypes.string.isRequired
};

Module.defaultProps = {
  name: 'default',
  variant: 'terra-Module--default'
};

var includePaths = exports.includePaths = _path2.default.join(__dirname, '../src/');

exports.default = Module;