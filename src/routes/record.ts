import { RecordController } from "../controller/record";

export default (routes: any, controller: RecordController) => {
    routes.get("/project-record", controller.getRecords);
    routes.post("/project-record", controller.createRecord)
    routes.delete("/project-record/:id", controller.deleteRecord)
    return routes;
}