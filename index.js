const express = require('express');
const app = express();
const port = 3300;
const url = 'https://jsonplaceholder.typicode.com/todos';


app.get('/', (req, res) => {
    fetch(url)
      .then(response => response.json())
      .then(json => res.send(json))
})

app.listen(port, () => {
    console.log('App is running on port 3300');
});