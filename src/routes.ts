import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

const router = Router();

router.get("/");

router.post("/user", new CreateUserController().handle)

router.get("/userDetail", new DetailUserController().handle)

export { router }