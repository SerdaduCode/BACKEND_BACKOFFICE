import database from "../config/database";
import { dataMember } from "../utils/interface/member";

class Member {
  constructor() {}
  static async getMembers() {
    const members = await database.member.findMany();
    return members;
  }
  static async createMember(data: dataMember) {
    const member = await database.member.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        department_id: data.department_id,
      },
    });

    return member;
  }
  static async getMemberByEmail(email: string) {
    const member = await database.member.findUnique({
      where: {
        email: email,
      },
    });
    return member;
  }
}

export default Member;
