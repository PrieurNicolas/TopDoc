import { locationsDTO } from "../DTO/locationsDTO";
import { locationId } from "../types/location";

export class LocationMapper {
    static mapToDto(location: locationId | null): locationsDTO | null {
        if (location === null) return null;
        const dto : locationsDTO = {
            address: location.address,
            zip_code: location.zip_code,
            city: location.city
        }

        return dto;
    }
}