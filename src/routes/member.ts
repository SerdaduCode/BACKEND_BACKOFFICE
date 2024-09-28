import { MemberController } from "../controller/member";
import { authMiddleware } from "../middleware/authMiddleware";

export default (routes: any, controller: MemberController) => {
  routes.get("/member", controller.getMembers);
  routes.post("/login", controller.login);
  routes.post("/register", controller.register);
  routes.get("/member/:id", authMiddleware, controller.getMemberById);
  routes.put("/member/:id", authMiddleware, controller.updateMember);
  routes.delete("/member/:id", authMiddleware, controller.deleteMember);
  return routes;
};
