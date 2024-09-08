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
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const result = await this.svc.login(data);
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };
  getMemberByEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const email = req.params.email;
      console.log(email);
      const member = await this.svc.getMemberByEmail(email);
      res.status(200).json(member);
    } catch (error) {
      next(error);
    }
  };
}
