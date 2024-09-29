import { EventController } from "../controller/event";

export default (routes: any, controller: EventController) => {
    routes.get("/", controller.getEvents);
    routes.post("/", controller.createEvent);
    routes.delete("/:id", controller.deleteEvent);
    routes.put("/:id", controller.updateEvent);
    return routes;
}