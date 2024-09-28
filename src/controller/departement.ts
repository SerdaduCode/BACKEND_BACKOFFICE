import { NextFunction, Request, Response } from "express";
import { DepartementService } from "../service/departement";

export class DepartementController {
  private svc: DepartementService;
  constructor(svc: DepartementService) {
    this.svc = svc;
  }
  getDepartements = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.svc.getDepartements();
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };

  getDepartementById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const result = await this.svc.getDepartementById(id);
      res.status(200).json({ data: result });
    } catch (error) {
      next(error);
    }
  };
  createDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = req.body;
      const result = await this.svc.createDepartment(data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };

  updateDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await this.svc.updateDepartment(id, data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  deleteDepartment = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const result = await this.svc.deleteDepartment(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
