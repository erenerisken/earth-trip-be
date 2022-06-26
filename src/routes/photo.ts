import { Request, Response, Router } from 'express';

const route = Router();

route.get('/names', (req: Request, res: Response) => {
  res.send({ names: ['Name1', 'Name2'] });
});

export default route;
