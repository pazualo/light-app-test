const bodyParser = require('body-parser');
const data = require('../systemtree.json');
module.exports = app => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    );
    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type, Authorization',
    );
    // Pass to next layer of middleware
    next();
  });

  app.get('/api/systems', (req, res) => {
    res.send(data);
  });
};
