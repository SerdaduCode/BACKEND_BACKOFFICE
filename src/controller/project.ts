import { NextFunction, Request, Response } from "express";
import { ProjectService } from "../service/project";

export class ProjectController {
  private svc: ProjectService;
  constructor(svc: ProjectService) {
    this.svc = svc;
  }
  getAllProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.svc.getAllProjects();
      res.status(200).json(result);
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
