const express         = require('express');
const morgan          = require('morgan');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');
const bluebird        = require('bluebird');
const app             = express();

const { port, dbURI } = require('./config/environment');
const routes          = require('./config/routes');
const customResponses = require('./lib/customResponses');
const errorHandler    = require('./lib/errorHandler');

mongoose.Promise      = bluebird;
mongoose.plugin(require('./lib/globalToJSON'));
mongoose.plugin(require('mongoose-unique-validator'));
mongoose.connect(dbURI, { useMongoClient: true });

app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());

app.use(customResponses);

app.use('/api', routes);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
