import { NextFunction, Request, Response } from "express";
import { MemberService } from "../service/member";

export class MemberController {
  private svc: MemberService;
  constructor(svc: MemberService) {
    this.svc = svc;
  }
  getMembers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.svc.getMembers();
      res.status(200).json({
        users: result,
      });
    } catch (error) {
      next(error);
    }
  };
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await this.svc.register(data);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  };
  login = async (req: any, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const token = await this.svc.login(data);
      res.status(200).json({ message: "Login successful", token: token });
    } catch (error) {
      next(error);
    }
  };

  getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const member = await this.svc.getMemberById(id);
      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  };

  updateMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const data = req.body;
      const result = await this.svc.updateMember(id, data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

  deleteMember = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;
      const result = await this.svc.deleteMember(id);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
}
