import { bannedDTO } from "../DTO/bannedDTO";
import { IRepository } from "../repository/core/repositoryinterface";
import { bannedTypes } from "../types/banned";
import { IService } from "./core/serviceinterface";

export class BannedService implements IService<bannedDTO>{
    private bannedRepository: IRepository<bannedDTO>;

    constructor(_bannedRepository: IRepository<bannedDTO>) {
        this.bannedRepository = _bannedRepository;
    }

    async findById(id: number): Promise<bannedDTO | null> {
        return this.bannedRepository.findById(id).then(bannedsDTO => {
            if(bannedsDTO === null) return null;
            return bannedsDTO
        })
    }

    async findAll(): Promise<bannedDTO[] | null> {
        return this.bannedRepository.findAll().then(bannedsDTO => {
            if(bannedsDTO === null) return null;
            return bannedsDTO
        })
    }

    async create(banneds: bannedTypes): Promise<bannedDTO | null> {
        return this.bannedRepository.create(banneds).then(bannedsDTO => {
            if(bannedsDTO === null) return null;
            return bannedsDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.bannedRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(banned: bannedTypes, id: number): Promise<number |boolean> {
        return this.bannedRepository.update(banned,id).then(good => good)
    }
}