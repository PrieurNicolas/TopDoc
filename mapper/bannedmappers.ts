import { bannedDTO } from './../DTO/bannedDTO';
import { bannedId } from '../types/banned';

export class BannedMapper {
    static mapToDto(banned: bannedId | null): bannedDTO | null {
        if (banned === null) return null;
        const dto : bannedDTO = {
            banMail: banned.banMail,
            reason: banned.reason,
        }

        return dto;
    }
}