import Event from "../model/event";

export class EventService {    
    constructor() {}
    async getEvents() {
        const events = await Event.getEvents();
        return events;
    }
    async createEvent(data: any) {
        const event = await Event.createEvent(data);
        return event;
    }
    async updateEvent(id: string, data: any) {
        const event = await Event.updateEvent(id, data);
        return event;
    }
    async deleteEvent(id: string) {
        const event = await Event.deleteEvent(id);
        return event;
    }
}