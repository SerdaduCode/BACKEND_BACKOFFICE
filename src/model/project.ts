import database from "../config/database";
import { dataProject } from "../utils/interface/project";

class Project {
  constructor() {}
  static async getAllProjects(page: number, limit: number) {
    const projects = await database.project.findMany({
      skip: page,
      take: limit,
      orderBy: {
        id: "asc",
      },
    });
    const formattedProjects = projects.map((project) => ({
      ...project,
      start_date: project.start_date.toISOString().split("T")[0],
      end_date: project.end_date.toISOString().split("T")[0],
    }));
    return formattedProjects;
  }
  static async getProject(id: string) {
    const project = await database.project.findUnique({
      where: { id },
    });
    return project;
  }
  static async createProject(data: dataProject) {
    const projectData: any = {
      name: data.name,
      code_name: data.code_name,
      desc: data.desc,
    };

    if (data.start_date) {
      projectData.start_date = new Date(data.start_date);
    }
    if (data.end_date) {
      projectData.end_date = new Date(data.end_date);
    }

    const project = await database.project.create({
      data: projectData,
    });
    return project;
  }
  static async updateProject(id: string, data: dataProject) {
    const projectData: any = {
      name: data.name,
      code_name: data.code_name,
      desc: data.desc,
    };

    if (data.start_date) {
      projectData.start_date = new Date(data.start_date);
    }
    if (data.end_date) {
      projectData.end_date = new Date(data.end_date);
    }

    const project = await database.project.update({
      data: projectData,
      where: { id },
    });
    return project;
  }
  static async deleteProject(id: string) {
    const project = await database.project.delete({
      where: { id },
    });
    return project;
  }
  static async countProjects() {
    const projects = await database.project.count();
    return projects;
  }
}
export default Project;
