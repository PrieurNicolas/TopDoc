import { userDTO } from "../DTO/userDTO";
import { IRepository } from "../repository/core/repositoryinterface";
import { IService } from "./core/serviceinterface";
import { userTypes } from "../types/user";

export class UserService implements IService<userDTO>{
    private userRepository: IRepository<userDTO>;

    constructor(_userRepository: IRepository<userDTO>) {
        this.userRepository =_userRepository;
    }

    async findById(id: number): Promise<userDTO | null> {
        return this.userRepository.findById(id).then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async findAll(): Promise<userDTO[] | null> {
        return this.userRepository.findAll().then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async create(user: userTypes): Promise<userDTO | null> {
        return this.userRepository.create(user).then(userDTO => {
            if(userDTO === null) return null;
            return userDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.userRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(user: userTypes, id: number): Promise<number |boolean> {
        return this.userRepository.update(user,id).then(good => good)
    }
}