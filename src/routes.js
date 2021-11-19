import { Router } from 'express';
import { startClient } from './mqttclient.js';

const mqttClient = await startClient();
const routes = Router();

routes.get('/', (req, res) => {
  mqttClient.publish('hello', 'mandeiii');
  return res.send('Application is running');
});

routes.post('/comandovoz/arcondicionado', (req, res) => {
  mqttClient.publish('ARCONDICIONADO/LIGAR', 'LIGAR');
  // console.log(req.params, req.body, req.params);
  console.log('entrou na rota');
  console.log(req.body.queryResult.queryText);
  console.log(req.body.queryResult.parameters);
  return res.status(200);
  // return res.json({
  //   fulfillmentMessages: [
  //     {
  //       text: {
  //         text: ['Respondeu'],
  //       },
  //     },
  //   ],
  // });
});

export default routes;
