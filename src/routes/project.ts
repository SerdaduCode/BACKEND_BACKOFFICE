import { ProjectController } from "../controller/project";

export default (routes: any, controller: ProjectController) => {
  routes.get("/", controller.getAllProjects);
  //   routes.get("/:id", controller.getProject);
  routes.post("/", controller.createProject);
  routes.put("/:id", controller.updateProject);
  routes.delete("/:id", controller.deleteProject);
  return routes;
};
