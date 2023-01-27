import { Request, Response } from "express";
import { locationsDTO } from "../DTO/locationsDTO";
import { IService } from "../services/core/serviceinterface";

export class LocationHandler {

    private locationService: IService<locationsDTO>;

    constructor(service: IService<locationsDTO>) {
        this.locationService = service;
    }

    getLocationId = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);

        try {
            if (Number.isInteger(id)) {
                const result = await this.locationService.findById(id);
                if (result === null) return res.status(404).send()
                res.status(200).json(result)
            }

        } catch (err) {
            res.status(500).json(err)
        }
    }

    getLocations = async (req: Request, res: Response) => {
        try {
            const result = await this.locationService.findAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    postLocation = async (req: Request, res: Response) => {
        try {
            const result = await this.locationService.create(req.body);
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    deleteLocation = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.locationService.delete(id);
            res.status(200).json(result ? "supprimé" : "fail")
        } catch (err) {
            res.status(500).json(err)
        }
    }

    updateLocation = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        try {
            const result = await this.locationService.update(req.body, id);
            res.status(200).json(result ? "mis a jour" : "fail");
        } catch (err) {
            res.status(500).json(err)
        }
    }
}