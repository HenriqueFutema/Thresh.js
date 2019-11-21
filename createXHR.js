const { XMLHttpRequest } = require("xmlhttprequest");

module.exports = function createXHR() {
  return new XMLHttpRequest();
};
