'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var jestSnapshot = require('jest-snapshot');
var HtmlDiffer = _interopDefault(require('html-differ'));
var logger = _interopDefault(require('html-differ/lib/logger'));
var expect = _interopDefault(require('expect'));

function sameHtmlAs(a, b, options) {
  const differ = new HtmlDiffer.HtmlDiffer(options);
  let jestMsg;
  try {
    jestMsg = options.jestMsg;
  } catch (e) {
    jestMsg = diffLog => `HTML doesn't match:\n${diffLog}`;
  }
  const diff = differ.diffHtml(a, b);
  const pass = diff.length === 1;
  return {
    pass,
    message: () => jestMsg(logger.getDiffText(diff)),
  };
}

function sameHtmlAsSnapshot() {
  const html = Array.prototype.shift.apply(arguments);
  const snapshot = jestSnapshot.toMatchSnapshot.apply(this, arguments);
  const jestMsg = diffLog => `${snapshot.message().split('\n')[2]}\n${diffLog}`;

  const result = sameHtmlAs(html, snapshot.expected, { jestMsg });
  return result;
}


expect.extend({
  sameHtmlAs,
  sameHtmlAsSnapshot,
});

exports.sameHtmlAs = sameHtmlAs;
exports.sameHtmlAsSnapshot = sameHtmlAsSnapshot;
