var roast = require('roast.it');
var MessageMock = require('./mock/messageMock');
var BlogRoute = require('../route/blogRoute');

roast.it('Is valid blog route', function isValidBlogRoute() {
  var req = {
    method: 'GET',
    url: 'http://localhost/blog/a-simple-test'
  };

  var route = new BlogRoute({ req: req });

  return route.isValidRoute();
});

roast.it('Read raw post with path', function readRawPostWithPath() {
  var messageMock = new MessageMock();
  var req = {
    url: 'http://localhost/blog/a-simple-test'
  };

  var route = new BlogRoute({message: messageMock, req: req});

  route.route();

  return messageMock.readTextFileCalledWithPath === 'blog/a-simple-test.md' && messageMock.hasCallback;
});
