import database from "../config/database";
import { dataDepartment } from "../utils/interface/department";

class Department {
  constructor() {}
  static async getDepartments() {
    const departments = await database.department.findMany();
    return departments;
  }
  static async createDepartment(data: dataDepartment) {
    const department = await database.department.create({
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
    return department;
  }
  static async findDepartementDefault() {
    const department = await database.department.findFirst();
    return department;
  }

  static async findDepartementById(id: string) {
    const department = await database.department.findMany({
      where: { id },
      include: {
        members: true,
      },
    });
    return department;
  }
  static async updateDepartment(id: string, data: dataDepartment) {
    const department = await database.department.update({
      where: { id },
      data: {
        name: data.name,
        desc: data.desc,
      },
    });
    return department;
  }
  static async deleteDepartment(id: string) {
    const department = await database.department.delete({
      where: { id },
    });
    return department;
  }
}

export default Department;
