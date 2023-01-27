import { locationsDTO } from "../DTO/locationsDTO";
import { IRepository } from "../repository/core/repositoryinterface";
import { locationTypes } from "../types/location";
import { IService } from "./core/serviceinterface";

export class LocationService implements IService<locationsDTO>{
    private locationRepository: IRepository<locationsDTO>;

    constructor(_locationRepository: IRepository<locationsDTO>) {
        this.locationRepository = _locationRepository;
    }

    async findById(id: number): Promise<locationsDTO | null> {
        return this.locationRepository.findById(id).then(locationDTO => {
            if(locationDTO === null) return null;
            return locationDTO
        })
    }

    async findAll(): Promise<locationsDTO[] | null> {
        return this.locationRepository.findAll().then(locationDTO => {
            if(locationDTO === null) return null;
            return locationDTO
        })
    }

    async create(Locations: locationTypes): Promise<locationsDTO | null> {
        return this.locationRepository.create(Locations).then(locationDTO => {
            if(locationDTO === null) return null;
            return locationDTO
        })
    }

    async delete(id: number): Promise<number |boolean> {
        return this.locationRepository.delete(id).then(good => {
            return good;
        })
    }

    async update(location: locationTypes, id: number): Promise<number |boolean> {
        return this.locationRepository.update(location,id).then(good => good)
    }
}