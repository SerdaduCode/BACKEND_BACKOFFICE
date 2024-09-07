import { MemberController } from "../controller/member";

export default (routes: any, controller: MemberController) => {
  routes.get("/members", controller.getMembers);
  routes.post("/login", controller.login);
  routes.post("/register", controller.register);
  return routes;
};
