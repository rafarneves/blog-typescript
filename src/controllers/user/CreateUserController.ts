import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { firstName, lastName, email, password, role, active } = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({firstName, lastName, email, password, role, active})

        return res.json(user)
    }
}

export { CreateUserController }