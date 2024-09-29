import { NextFunction, Request, Response } from "express";
import { RecordService } from "../service/record";

export class RecordController {
    private svc: RecordService;
    constructor(svc: RecordService) {
        this.svc = svc;
    }
    getRecords = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.svc.getRecords()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    };
    createRecord = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const data=req.body;
            const result=await this.svc.createRecord(data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    deleteRecord = async (req: Request, res: Response, next: NextFunction) => {    
        try {
            const id = req.params.id;
            const result = await this.svc.deleteRecord(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}