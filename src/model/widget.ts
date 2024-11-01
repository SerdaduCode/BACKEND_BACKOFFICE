import database from "../config/database";

class Widget {
    constructor() {}
    static async countMembers() {
        const members = await database.member.count();
        return members;
    }

    static async countProjects() {
        const projects = await database.project.count();
        return projects;
    }

    static async countEvents() {
        const events = await database.event.count();
        return events;
    }

    static async getMemberProject() {
        const projects = await database.project_record.findMany(
        );
        return projects;
    }
}

export default Widget;