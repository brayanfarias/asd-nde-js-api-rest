const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json())

const v1 = require('./v1')
app.use('/api/v1', v1)
const v2 = require('./v2')
app.use('/api/v2', v2)


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});