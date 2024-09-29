import { NextFunction, Request, Response } from "express";
import { EventRecordService } from "../service/event_record";

export class RecordEventController {
    private svc: EventRecordService;
    constructor(svc: EventRecordService) {
        this.svc = svc;
    }
    getRecords = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.svc.getEventRecords();
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    };
    createRecord = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const data=req.body;
            const result=await this.svc.createEventRecord(data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    deleteRecord = async (req: Request, res: Response, next: NextFunction) => {    
        try {
            const id = req.params.id;
            const result = await this.svc.deleteEventRecord(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}