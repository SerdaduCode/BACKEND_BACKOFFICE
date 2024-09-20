import { MemberController } from "../controller/member";
import { authMiddleware } from "../middleware/authMiddleware";

export default (routes: any, controller: MemberController) => {
  routes.get("/members", controller.getMembers);
  routes.get("/members/:email", authMiddleware, controller.getMemberByEmail);
  routes.post("/login", controller.login);
  routes.post("/register", controller.register);
  return routes;
};
