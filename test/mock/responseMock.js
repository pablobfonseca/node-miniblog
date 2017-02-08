var ResponseMock = function ResponseMock() {
  this.result = '';
}

ResponseMock.prototype.writeHead = function writeHead(returnCode) {
  this.result += returnCode + ';';
};

ResponseMock.prototype.end = function end(body) {
  this.result += body;
};

module.exports = ResponseMock;
