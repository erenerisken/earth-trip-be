import { Request, Response, Router } from 'express';

const route = Router();

route.post('/', (req: Request, res: Response) => {
  console.log(req.files);
  res.send({ status: true });
});

export default route;
