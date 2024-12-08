import { NextFunction, Request, Response } from "express";
import { MemberService } from "../service/member";

export class MemberController {
  private svc: MemberService;
  constructor(svc: MemberService) {
    this.svc = svc;
  }
  getMembers = async (req: Request, res: Response, next: NextFunction) => {
    const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
    const limit = req.query.limit
      ? parseInt(req.query.limit as string, 10)
      : 10;

    try {
      const result = await this.svc.getMembers(page, limit);
      const totalMember = await this.svc.countMembers();
      res.status(200).json({
        data: result,
        currentPage: page,
        totalPages: Math.ceil(totalMember / limit),
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
      const session = await this.svc.getMemberByEmail(data.email);
      res
        .status(200)
        .json({ message: "Login successful", token: token, data: session });
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
      res.status(200).json({
        message: "Member updated successfully",
        data: result,
      });
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
