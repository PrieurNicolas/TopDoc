import { userDTO } from "../DTO/userDTO";
import { UserMapper } from "../mapper/usermapper";
import { IRepository } from "./core/repositoryinterface";
import { User } from "../models/users";

export class UserRepository implements IRepository<userDTO> {
    async findById(id: number): Promise<userDTO | null> {
        return User.findByPk(id).then((user: User | null) => UserMapper.mapToDto(user))
    }

    async findAll(): Promise<userDTO[]> {
       return User.findAll().then((users: User[]) => users.map((user) => UserMapper.mapToDto(user)))
    }
    async create(t: Omit<User, 'user_id'>): Promise<userDTO | null> {
        try {
            return User.create(t).then((user: User) => UserMapper.mapToDto(user))
        } catch (error) {
            console.log(error)
            return null
        }
    }
    async delete(id: number): Promise<number |boolean> {
        return User.destroy({where: {user_id: id}}).then((good: number |boolean ) => good)
    }
    async update(t: User, id: number): Promise<number |boolean> {
        return User.update(t, {where: {user_id: id}}).then(((good: (number |boolean)[]) => good[0]))
    }

}