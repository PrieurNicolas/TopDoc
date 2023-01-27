import { IRepository } from "./core/repositoryinterface";
import { BannedMapper } from "../mapper/bannedmappers";
import { bannedDTO } from "../DTO/bannedDTO";
import { bannedId } from "../types/banned";
import { Banneds } from "../database/connect";

export class BannedRepository implements IRepository<bannedDTO> {
    findById(id: number): Promise<bannedDTO | null> {
        return Banneds.findByPk(id).then((Banneds: bannedId | null) => BannedMapper.mapToDto(Banneds))
    }
    findAll(): Promise<bannedDTO[]> {
        return Banneds.findAll().then((Location: bannedId[]) => Location.map((Banneds) => BannedMapper.mapToDto(Banneds)))
    }
    create(t: bannedDTO): Promise<bannedDTO> {
        return Banneds.create(t).then((Banneds: bannedId) => BannedMapper.mapToDto(Banneds))
    }
    delete(id: number): Promise<number |boolean> {
        return Banneds.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: bannedDTO, id: number): Promise<number |boolean> {
        return Banneds.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}