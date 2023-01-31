import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation';
import loginValidation from '../middlewares/loginValidation';
import UserController from '../controllers/UserController';

const userRoute = Router();

userRoute.get('/login/validate', tokenValidation, UserController.validate);

userRoute.post('/login', loginValidation, UserController.login);

export default userRoute;
