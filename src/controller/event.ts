import { NextFunction, Request, Response } from "express";
import { EventService } from "../service/event";

export class EventController {
    private svc: EventService;
    constructor(svc: EventService){
        this.svc=svc;
    }
    getEvents = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.svc.getEvents()
            res.status(200).json(result)
        } catch (error) {
            next(error)
        }
    };
    createEvent = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const data=req.body;
            const result=await this.svc.createEvent(data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    updateEvent = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const id=req.params.id;
            const data=req.body;
            const result=await this.svc.updateEvent(id, data);
            res.status(201).json(result)
        } catch (error) {
            next(error)
        }
    }
    deleteEvent = async (req: Request, res: Response, next: NextFunction) => {    
        try {
            const id = req.params.id;
            const result = await this.svc.deleteEvent(id);
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}