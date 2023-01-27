import { Request, Response } from "express";
import { bannedDTO } from "../DTO/bannedDTO";
import { IService } from "../services/core/serviceinterface";

export class BannedHandler {

    private bannedService: IService<bannedDTO>;

    constructor(service: IService<bannedDTO>) {
        this.bannedService = service;
    }

    getBannedId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.bannedService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getBanned = async (req: Request, res: Response) => {
        try {
            const result = await this.bannedService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postBanned = async (req: Request, res: Response) => {
        try {
            const result = await this.bannedService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteBanned = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.bannedService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateBanned = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.bannedService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}