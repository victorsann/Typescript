import express from 'express';

const app = express();

const PORT = 3333;

app.get('/', (req, res) => {
   return res.send('Hello World');
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor ativo na porta: ${PORT}`);
});