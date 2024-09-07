import express, { NextFunction, Request, Response } from "express";
import usersRoutes from "./routes/member";
import dotenv from "dotenv";
import { MemberService } from "./service/member";
import { MemberController } from "./controller/member";

dotenv.config();

const app = express();
const routes = express.Router();
const port = 3000;

app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    `${process.env.FRONTEND_URL} || http://localhost:3000`
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization, Cache-Control, Origin, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  next();
});

const svcMember = new MemberService();
const controllerMember = new MemberController(svcMember);

app.use("", usersRoutes(routes, controllerMember));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
