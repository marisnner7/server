import express, { response } from 'express'
import cors from 'cors'
import routes from './routes'
import { request } from 'http';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(3333)