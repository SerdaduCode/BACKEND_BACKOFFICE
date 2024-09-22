import { DepartementController } from "../controller/departement";
import { authMiddleware } from "../middleware/authMiddleware";

export default (routes: any, controller: DepartementController) => {
  routes.get("/departement", authMiddleware, controller.getDepartements);
  routes.post("/departement", authMiddleware, controller.createDepartment);
  return routes;
};
