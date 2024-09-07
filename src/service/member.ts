import bcrypt from "bcryptjs";
import Member from "../model/member";
import { dataMember } from "../utils/interface/member";

export class MemberService {
  login = async () => {};
  getMembers = async () => {
    const members = await Member.getMembers();
    return members;
  };
  register = async (data: dataMember) => {
    try {
      const existingUser = await Member.getMemberByEmail(data.email);
      if (existingUser) {
        throw new Error("User already exists");
      }
      const hashed = await bcrypt.hash(data.password, 10);
      const user = await Member.createMember({
        email: data.email,
        name: data.name,
        password: hashed,
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  };
}
