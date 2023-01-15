import prismaClient from '../../prisma/index';

class DetailUserService {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                first_name: true,
                last_name: true,
                email: true,
                role: true
            }
        })

        return user

    }
}

export { DetailUserService }