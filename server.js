const express=require('express');
const app= express();
const router = express.Router();

const port = 3000;

const server = app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})

app.get('/', (request , response) => {
  response.send("Hello World");
});