const express = require('express');
const app = express();
const port = 3030;

app.use(express.static('public'));

const indexRouter = require('./routers/index');
const aboutRouter = require('./routers/about')

app.use('/', indexRouter);
app.use('/about', aboutRouter);




app.listen(port, () => console.log(`Server runnung in http://localhost:${port}`))