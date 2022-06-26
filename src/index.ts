import express, { Express } from 'express';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';

import earthRoutes from './routes/earth';
import photoRoutes from './routes/photo';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(fileUpload({
  createParentPath: true,
}));

app.use('/earth', earthRoutes);
app.use('/photo', photoRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
