import Project from "../model/project";

export class ProjectService {
    getAllProjects = async () => {
        const projects = await Project.getAllProjects();
        return projects;
    }

    getProject = async (id: string) => {
        const project = await Project.getProject(id);

        if (!project) {
            throw new Error("Project not found");
        }

        const formattedProject = {
            ...project,
            start_date: project.start_date ? project.start_date.toISOString().split('T')[0] : null,
            end_date: project.end_date ? project.end_date.toISOString().split('T')[0] : null,
          };
        return formattedProject;
    }
    
    createProject = async (data: any) => {
        const projectData = {
            name: data.name,
            code_name: data.code_name,
            desc: data.desc,
            start_date: data.start_date,
            end_date: data.end_date,
        }

        const project = await Project.createProject(projectData);
        return project;
    }

    updateProject = async (id: string, data: any) => {
        const project = await Project.updateProject(id, data);
        return project;
    }

    deleteProject = async (id: string) => {
        const project = await Project.deleteProject(id);
        return project;
    }
}