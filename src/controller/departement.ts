import { NextFunction, Request, Response } from "express";
import { DepartementService } from "../service/departement";

export class DepartementController {
  private svc: DepartementService;
  constructor(svc: DepartementService) {
    this.svc = svc;
  }
  getDepartements = async (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit
      ? parseInt(req.query.limit as string, 10)
      : 10;

    try {
      const result = await this.svc.getDepartements(page, limit);
      const totalDepartement = await this.svc.countDepartements();
      res
        .status(200)
        .json({
          data: result,
          currentPage: page,
          totalPages: Math.ceil(totalDepartement / limit),
        });
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
