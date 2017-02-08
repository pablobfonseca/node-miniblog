var BlogRoute = function BlogRoute(context) {
  this.req     = context.req;
  this.res     = context.res;
  this.message = context.message;
};

BlogRoute.prototype.isValidRoute = function isValidRoute() {
  return this.req.method === 'GET' && this.req.url.indexOf('/blog/') >= 0
};

BlogRoute.prototype.route = function route() {
  var url   = this.req.url;
  var index = url.indexOf('/blog/') + 1;
  var path  = url.slice(index) + '.md';

  this.message.readTextFile(path, this.readPostHtmlView.bind(this));
};

BlogRoute.prototype.readPostHtmlView = function readPostHtmlView(err, rawContent) {
  if (err) {
    this.res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf8' });
    this.res.end('Post Not Found.')
    return;
  }

  this.rawContent = rawContent;
  this.message.readTextFile('view/blogPost.html', this.renderPost.bind(this));
};

BlogRoute.prototype.renderPost = function renderPost(err, html) {
  if (err) {
    this.res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf8' });
    this.res.end('Internal Error')
    return;
  }

  var htmlContent = this.message.marked(this.rawContent);
  var responseContent = this.message.mustacheTemplate(html, { postContent: htmlContent });

  this.res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
  this.res.end(responseContent);
};

module.exports = BlogRoute;
