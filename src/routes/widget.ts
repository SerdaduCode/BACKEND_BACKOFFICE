import { WidgetController } from "../controller/widget";

export default (routes: any, controller: WidgetController) => {
    routes.get("/widget/stats-count", controller.getWidgetCount);
    routes.get("/widget/project-member", controller.getProjectMember);
    return routes;
}