import Department from "../model/department";

export class DepartementService {
  getDepartements = async () => {
    const departements = await Department.getDepartments();
    return departements;
  };

  createDepartment = async (data: any) => {
    const department = await Department.createDepartment(data);
    return department;
  };
}
