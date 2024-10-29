import Department from "../model/department";
import { dataDepartment } from "../utils/interface/department";

export class DepartementService {
  getDepartements = async (page: number, limit: number) => {
    const departements = await Department.getDepartments(page,limit);
    return departements;
  };
  createDepartment = async (data: dataDepartment) => {
    const department = await Department.createDepartment(data);
    return department;
  };
  getDepartementById = async (id: string) => {
    const department = await Department.findDepartementById(id);
    return department;
  };
  updateDepartment = async (id: string, data: dataDepartment) => {
    const department = await Department.updateDepartment(id, data);
    return department;
  };
  deleteDepartment = async (id: string) => {
    const department = await Department.deleteDepartment(id);
    return department;
  };
  countDepartements = async () => {
    const count = await Department.countDepartements();
    return count;
  };
}
