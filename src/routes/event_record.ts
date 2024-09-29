import { RecordEventController } from "../controller/event_record";

export default (routes: any, controller: RecordEventController) => {
    routes.get("/", controller.getRecords);
    routes.post("/", controller.createRecord);
    routes.delete("/:id", controller.deleteRecord);
    return routes;
}