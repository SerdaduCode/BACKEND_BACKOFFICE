import database from "../config/database";
import { dataEvent } from "../utils/interface/event";

class Event {
    constructor() {}
    static async getEvents() {
        const events = await database.event.findMany();
        return events;
    }
    static async createEvent(data: dataEvent) {
        const dataEvent:any = {
            name: data.name,
            pic_id: data.pic_id,
            desc: data.desc
        }
        if (data.date) {
            dataEvent.date = new Date(data.date);   
        }
        const event = await database.event.create({
            data: dataEvent,
        });
        return event;
    }
    static async updateEvent(id: string, data: dataEvent) {
        const dataEvent:any = {
            name: data.name,
            pic_id: data.pic_id,
            desc: data.desc
        }
        if (data.date) {
            dataEvent.date = new Date(data.date);   
        }
        const event = await database.event.update({
            data: dataEvent,
            where: { id },
        });
        return event;
    }
    static async deleteEvent(id: string) {
        const event = await database.event.delete({
            where: { id },
        });
        return event;
    }
}

export default Event;