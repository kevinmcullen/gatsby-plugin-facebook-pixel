'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;

  if (process.env.NODE_ENV === 'production') {
    return setHeadComponents([_react2.default.createElement('script', {
      key: 'gatsby-plugin-facebook-pixel',
      dangerouslySetInnerHTML: {
        __html: '\n  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;\n  n.push=n;n.loaded=!0;n.version=\'2.0\';n.queue=[];t=b.createElement(e);t.async=!0;\n  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,\n  document,\'script\',\'https://connect.facebook.net/en_US/fbevents.js\');\n  fbq(\'init\', \'' + pluginOptions.pixelIdOne + '\'); // Insert your pixel ID here.\n  fbq(\'init\', \'' + pluginOptions.pixelIdTwo + '\'); // Insert your pixel ID here.\n  fbq(\'track\', \'PageView\');\n      '
      }
    })]);
  }
};