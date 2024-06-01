const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const router = require("./routes/index");
const errorHandler = require('./middleware/errorHandler');
const setupSwagger = require('./config/swaggerConfig');

setupSwagger(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(router)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})