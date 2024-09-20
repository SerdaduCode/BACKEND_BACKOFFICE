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
}

export default Department;
