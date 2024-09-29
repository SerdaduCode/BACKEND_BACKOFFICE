import { RecordController } from "../controller/record";

export default (routes: any, controller: RecordController) => {
    routes.get("/", controller.getRecords);
    routes.post("/", controller.createRecord)
    routes.delete("/:id", controller.deleteRecord)
    return routes;
}