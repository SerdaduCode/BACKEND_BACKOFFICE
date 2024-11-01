import { ProjectController } from "../controller/project";

export default (routes: any, controller: ProjectController) => {
  routes.get("/project", controller.getAllProjects);
    routes.get("/project/:id", controller.getProject);
  routes.post("/project", controller.createProject);
  routes.put("/project/:id", controller.updateProject);
  routes.delete("/project/:id", controller.deleteProject);
  return routes;
};
