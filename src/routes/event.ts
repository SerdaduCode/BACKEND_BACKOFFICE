import { EventController } from "../controller/event";

export default (routes: any, controller: EventController) => {
    routes.get("/event", controller.getEvents);
    routes.post("/event", controller.createEvent);
    routes.delete("/event/:id", controller.deleteEvent);
    routes.put("/event/:id", controller.updateEvent);
    return routes;
}