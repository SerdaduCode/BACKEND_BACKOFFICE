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

import { RecordService } from "./service/record";
import { RecordController } from "./controller/record";
import projectRecordRoutes from "./routes/record";

import { EventService } from "./service/event";
import { EventController } from "./controller/event";
import eventRoutes from "./routes/event";

import { RecordEventController } from "./controller/event_record";
import { EventRecordService } from "./service/event_record";
import eventRecordRoutes from "./routes/event_record";

import { WidgetController } from "./controller/widget";
import { WidgetService } from "./service/widget";
import widgetRoutes from "./routes/widget";

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

const svcProjectRecord = new RecordService()
const controllerProjectRecord = new RecordController(svcProjectRecord)

const svcEvent = new EventService()
const controllerEvent = new EventController(svcEvent)

const svcEventRecord = new EventRecordService()
const controllerEventRecord = new RecordEventController(svcEventRecord)

const svcWidget = new WidgetService()
const controllerWidget = new WidgetController(svcWidget)

app.use("", usersRoutes(routes, controllerMember));
app.use("", departementRoutes(routes, controllerDepartement));
app.use("", projectRecordRoutes(routes, controllerProjectRecord));
app.use("", eventRecordRoutes(routes, controllerEventRecord));
app.use("", projectRoutes(routes, controllerProject));
app.use("", eventRoutes(routes, controllerEvent));
app.use("", widgetRoutes(routes, controllerWidget));

app.get("/", (req: Request, res: Response) => {
  res.send("Serdadu BackOffice!");
});

app.use(handleErrorMiddleware);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
