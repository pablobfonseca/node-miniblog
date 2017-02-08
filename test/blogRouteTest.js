var roast = require('roast.it');
var BlogRoute = require('../route/blogRoute');

roast.it('Is valid blog route', function isValidBlogRoute() {
  var req = {
    method: 'GET',
    url: 'http://localhost/blog/a-simple-test'
  };

  var route = new BlogRoute({ req: req });

  return route.isValidRoute();
});
