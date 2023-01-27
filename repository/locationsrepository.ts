import { IRepository } from "./core/repositoryinterface";
import { LocationMapper } from "../mapper/locationsmappers";
import { locationsDTO } from "../DTO/locationsDTO";
import { locationId } from "../types/location";
import { Locations } from "../database/connect";

export class LocationRepository implements IRepository<locationsDTO> {
    findById(id: number): Promise<locationsDTO | null> {
        return Locations.findByPk(id).then((Locations: locationId | null) => LocationMapper.mapToDto(Locations))
    }
    findAll(): Promise<locationsDTO[]> {
        return Locations.findAll().then((Location: locationId[]) => Location.map((Locations) => LocationMapper.mapToDto(Locations)))
    }
    create(t: locationsDTO): Promise<locationsDTO> {
        return Locations.create(t).then((Locations: locationId) => LocationMapper.mapToDto(Locations))
    }
    delete(id: number): Promise<number |boolean> {
        return Locations.destroy({where: {id: id}}).then((good: boolean) => good)
    }
    update(t: locationsDTO, id: number): Promise<number |boolean> {
        return Locations.update(t, {where: {id: id}}).then(((good: boolean[]) => good[0]))
    }
 

}