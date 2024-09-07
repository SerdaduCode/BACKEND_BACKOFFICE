import { Request, Response } from "express";
import { MemberService } from "../service/member";

export class MemberController {
  private svc: MemberService;
  constructor(svc: MemberService) {
    this.svc = svc;
  }
  getMembers = async (req: Request, res: Response) => {
    try {
      const result = await this.svc.getMembers();
      res.status(200).json({
        users: result,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  register = async (req: any, res: any) => {
    try {
      const data = req.body;
      const result = await this.svc.register(data);
      res.status(201).json(result);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  };
  login = async (req: Request, res: Response) => {
    try {
    } catch (error) {}
  };
}
