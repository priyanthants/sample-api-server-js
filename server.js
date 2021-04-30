const express=require('express');
const app= express();
const router = express.Router();

const service = require('./src/services/hello-world-service');
const port = 3000;

const server = app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})

app.get('/', (request , response) => {
  response.send(service.helloWorld());
});