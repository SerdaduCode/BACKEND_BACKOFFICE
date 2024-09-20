import bcrypt from "bcryptjs";
import Member from "../model/member";
import { dataMember } from "../utils/interface/member";
import BaseError from "../utils/error/error";
import { encryptPassword, generateToken } from "../utils/jwt/jwt";

export class MemberService {
  login = async (data: dataMember) => {
    const member = await Member.getMemberByEmail(data.email);
    if (!member) throw new BaseError(400, "User not found");
    const isMatch = await bcrypt.compare(data.password, member.password);
    if (!isMatch) throw new BaseError(400, "Password is incorrect");
    return generateToken(member.id, member.email);
  };
  getMembers = async () => {
    const members = await Member.getMembers();
    return members;
  };
  register = async (data: dataMember) => {
    const existingUser = await Member.getMemberByEmail(data.email);
    if (existingUser) throw new BaseError(400, "User already exists");

    const hashedPassword = encryptPassword(data.password);
    data.password = hashedPassword;
    if (!data.department_id) {
      data.department_id = "1";
    }
    const token = await Member.createMember(data);
    return generateToken(token.id, token.email);
  };
  getMemberByEmail = async (email: string) => {
    try {
      const member = await Member.getMemberByEmail(email);
      return member;
    } catch (error) {
      const { message } = error as Error;
      throw new Error(message);
    }
  };
}
