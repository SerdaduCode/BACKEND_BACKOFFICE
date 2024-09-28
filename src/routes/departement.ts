import { DepartementController } from "../controller/departement";
import { authMiddleware } from "../middleware/authMiddleware";

export default (routes: any, controller: DepartementController) => {
  routes.get("/departement", authMiddleware, controller.getDepartements);
  routes.post("/departement", authMiddleware, controller.createDepartment);
  routes.get("/departement/:id", authMiddleware, controller.getDepartementById);
  routes.put("/departement/:id", authMiddleware, controller.updateDepartment);
  routes.delete(
    "/departement/:id",
    authMiddleware,
    controller.deleteDepartment
  );
  return routes;
};
