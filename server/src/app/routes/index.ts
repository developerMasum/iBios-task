import { Router } from 'express';
import { ProductsRoutes } from '../modules/Products/product.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: ProductsRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
