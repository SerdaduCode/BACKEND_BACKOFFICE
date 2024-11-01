import { NextFunction, Request, Response } from "express";
import { WidgetService } from "../service/widget";

export class WidgetController {
    private svc: WidgetService;
    constructor(svc: WidgetService) {
        this.svc = svc;
    }
    getWidgetCount = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.svc.getWidgetCount();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
    getProjectMember = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.svc.getProjectMember();
            res.status(200).json(result);
        } catch (error) {
            next(error);
        }
    }
}