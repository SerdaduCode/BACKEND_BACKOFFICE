import Widget from "../model/widget";

export class WidgetService {
    constructor() { }
    async getWidgetCount() {
        const memberCount = await Widget.countMembers();
        const projectCount = await Widget.countProjects();
        const eventCount = await Widget.countEvents();
        return {
            memberCount,
            projectCount,
            eventCount
        };
    }

    async getProjectMember() {
        const memberProject = await Widget.getMemberProject();
        return memberProject;
    }
}