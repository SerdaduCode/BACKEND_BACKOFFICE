import database from "../config/database";
import { dataEventRecord } from "../utils/interface/event_record";

export default class EventRecord {
    constructor() {}
    static async getEventRecords() {
        const event_records = await database.event_record.findMany();
        return event_records;
    }
    static async getEventRecord(id: string) {
        const event_record = await database.event_record.findUnique({
            where: { id },
        });
        return event_record;
    }
    static async createEventRecord(data: dataEventRecord) {
        const event_record = await database.event_record.create({
            data: data,
        });
        return event_record;
    }
    static async updateEventRecord(id: string, data: dataEventRecord) {
        const event_record = await database.event_record.update({
            data: data,
            where: { id },
        });
        return event_record;
    }
    static async deleteEventRecord(id: string) {
        const event_record = await database.event_record.delete({
            where: { id },
        });
        return event_record;
    }
}