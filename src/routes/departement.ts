import { DepartementController } from "../controller/departement";

export default (routes: any, controller: DepartementController) => {
  routes.get("/departement", controller.getDepartements);
  routes.post("/departement", controller.createDepartment);
  return routes;
};
