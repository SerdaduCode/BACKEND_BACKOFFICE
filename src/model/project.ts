import database from "../config/database";
import { dataRecord } from "../utils/interface/record";

class Project {
    constructor() {}
    static async getProjects() {
        const projects = await database.project.findMany();
        return projects;
    }
}
export default Project;