import database from "../config/database";
import { dataMember } from "../utils/interface/member";

class Member {
  static updateMemberID(id: string, data: dataMember) {
    const member = database.member.update({
      where: { id },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
        department_id: data.department_id,
      },
    });
    return member;
  }
  constructor() {}
  static async getMembers() {
    const members = await database.member.findMany();
    return members;
  }
  static async getMemberByID(id: string) {
    const members = await database.member.findUnique({
      where: {
        id: id,
      },
      include: {
        department: true,
        projects: true,
      },
    });
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
  static async getMemberById(id: string) {
    const member = await database.member.findUnique({
      where: {
        id: id,
      },
    });
    return member;
  }
  static async deleteMember(id: string) {
    const member = await database.member.delete({
      where: {
        id: id,
      },
    });
    return member;
  }
}

export default Member;
