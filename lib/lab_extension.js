'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rendererFactory = exports.OutputWidget = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _widgets = require('@phosphor/widgets');

require('../style/index.css');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The default mime type for the extension.
 */
var MIME_TYPE = 'application/vnd.odsl.skdata+json';

/**
 * The class name added to the extension.
 */
var CLASS_NAME = 'jp-OutputWidgetSKDATA';

/**
 * A widget for rendering SKDATA.
 */

var OutputWidget = exports.OutputWidget = function (_Widget) {
  _inherits(OutputWidget, _Widget);

  /**
   * Construct a new output widget.
   */
  function OutputWidget(options) {
    _classCallCheck(this, OutputWidget);

    var _this = _possibleConstructorReturn(this, (OutputWidget.__proto__ || Object.getPrototypeOf(OutputWidget)).call(this));

    _this._mimeType = options.mimeType;
    _this.addClass(CLASS_NAME);
    return _this;
  }

  /**
   * Render SKDATA into this widget's node.
   */


  _createClass(OutputWidget, [{
    key: 'renderModel',
    value: function renderModel(model) {
      var steps = model.data[this._mimeType]['steps'];
      var text = '';

      for (var i in steps) {
        text += '<li>' + i + ' - ' + steps[i] + '</li>';
      }
      this.node.innerHTML = '<ul>' + text + '</ul>';
    }
  }]);

  return OutputWidget;
}(_widgets.Widget);

/**
 * A mime renderer factory for SKDATA data.
 */


var rendererFactory = exports.rendererFactory = {
  safe: true,
  mimeTypes: [MIME_TYPE],
  createRenderer: function createRenderer(options) {
    return new OutputWidget(options);
  }
};

var extension = {
  name: 'SKDATA',
  rendererFactory: rendererFactory,
  rank: 0,
  dataType: 'json'
};

exports.default = extension;