import Widget from "../model/widget";

export class WidgetService {
    static async getWidgetCount() {
        const memberCount = await Widget.countMembers();
        const projectCount = await Widget.countProjects();
        const eventCount = await Widget.countEvents();
        return {
            memberCount,
            projectCount,
            eventCount
        };
    }

    static async getProjectMember() {
        const memberProject = await Widget.getMemberProject();
        return memberProject;
    }
}