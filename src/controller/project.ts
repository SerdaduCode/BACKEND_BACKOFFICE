import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../service/project";

export class ProjectController {
  private svc: ProjectService;
  constructor(svc: ProjectService) {
    this.svc = svc;
  }
  getAllProjects = async (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit
      ? parseInt(req.query.limit as string, 10)
      : 10;
    try {
      const result = await this.svc.getAllProjects(page, limit);
      const totalMember = await this.svc.countProjects();
      res.status(200).json({
        data: result,
        currentPage: page,
        totalPages: Math.ceil(totalMember / limit),
      });
    } catch (error) {
      next(error);
    }
  };
  getProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.svc.getProject(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  createProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await this.svc.createProject(data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  updateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await this.svc.updateProject(id, data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.svc.deleteProject(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
