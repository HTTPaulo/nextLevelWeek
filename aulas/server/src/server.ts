import express from 'express';
import path from 'path';
import routes from './routes';
import cors from 'cors';
import { errors } from 'celebrate';

//Request Param: Parâmetros que vem na própria rota que identificam um recurso
//Queru Param: Parâmetros que vem na própria rota geralmenteopcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações 

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);