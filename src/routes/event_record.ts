import { RecordEventController } from "../controller/event_record";

export default (routes: any, controller: RecordEventController) => {
    routes.get("/event-record", controller.getRecords);
    routes.post("/event-record", controller.createRecord);
    routes.delete("/event-record/:id", controller.deleteRecord);
    return routes;
}