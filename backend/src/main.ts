import { app } from './plugins/express';
import { generateExpressRoutes } from './handlers';

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to backend!' });
});

generateExpressRoutes();

const port = process.env.PORT || 3333;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
