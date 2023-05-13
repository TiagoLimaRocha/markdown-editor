import express from 'express';
import * as path from 'path';

import cors from 'cors';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());
app.use(express.text());
app.use(cors());

export { app };