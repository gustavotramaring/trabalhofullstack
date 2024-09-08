const express = require('express');
const rotas = require('./routes');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: '*', 
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta, http://localhost:${PORT}`));

