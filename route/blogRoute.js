var BlogRoute = function BlogRoute(context) {
  this.req = context.req;
};

BlogRoute.prototype.isValidRoute = function isValidRoute() {
  return this.req.method === 'GET' && this.req.url.indexOf('/blog/') >= 0
};

module.exports = BlogRoute;
