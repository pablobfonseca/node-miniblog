var MessageMock = function MessageMock() {
  this.readTextFileCalledWithPath = '';
  this.hasCallback = false;
};

MessageMock.prototype.readTextFile = function readTextFile(path, callback) {
  this.readTextFileCalledWithPath = path;

  if (typeof callback == 'function') {
    this.hasCallback = true
  }
};

module.exports = MessageMock
