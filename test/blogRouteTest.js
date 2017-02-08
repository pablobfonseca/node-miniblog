var roast = require('roast.it');
var MessageMock = require('./mock/messageMock');
var ResponseMock = require('./mock/responseMock');
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

roast.it('Read post view with path', function readPostViewWithPath() {
  var messageMock = new MessageMock();
  var rawContent = 'content';

  var route = new BlogRoute({message: messageMock});

  route.readPostHtmlView(null, rawContent);

  return messageMock.readTextFileCalledWithPath !== '' && messageMock.hasCallback;
});

roast.it('Respond with full post', function respondWithFullPost() {
  var messageMock = new MessageMock();
  var responseMock = new ResponseMock();

  var route = new BlogRoute({message: messageMock, res: responseMock});

  route.renderPost(null, '');

  return responseMock.result.indexOf('200') >= 0;
});
