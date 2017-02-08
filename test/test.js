var roast = require('roast.it')

roast.it('Is array empty', function isArrayEmpty() {
  var mock = [];

  return mock.length === 0;
});

roast.run();
roast.exit();
