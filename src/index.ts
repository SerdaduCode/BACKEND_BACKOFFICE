import express, { Request, Response } from "express";
import usersRoutes from "./routes/member";
import { MemberService } from "./service/member";
import { MemberController } from "./controller/member";
import handleErrorMiddleware from "./middleware/handleErrorMiddleware";
import { DepartementService } from "./service/departement";
import { DepartementController } from "./controller/departement";
import departementRoutes from "./routes/departement";
import { ProjectService } from "./service/project";
import { ProjectController } from "./controller/project";
import projectRoutes from "./routes/project";

const app = express();
const routes = express.Router();
const port = 8080;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-type, Authorization, Cache-control, Expires"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  req.headers["content-type"] = "application/json";
  next();
});

const svcMember = new MemberService();
const controllerMember = new MemberController(svcMember);

const svcDepartement = new DepartementService();
const controllerDepartement = new DepartementController(svcDepartement);

const svcProject = new ProjectService();
const controllerProject = new ProjectController(svcProject);

app.use("", usersRoutes(routes, controllerMember));
app.use("", departementRoutes(routes, controllerDepartement));
app.use("/project", projectRoutes(routes, controllerProject));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(handleErrorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
