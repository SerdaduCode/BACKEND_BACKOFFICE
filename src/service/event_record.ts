import EventRecord from "../model/event_record";

export class EventRecordService {
    async getEventRecords() {
        const event_record = await EventRecord.getEventRecords();
        return event_record;
    }
    async createEventRecord(data: any) {
        const event_record = await EventRecord.createEventRecord(data);
        return event_record;
    }
    async deleteEventRecord(id: string) {
        const event_record = await EventRecord.deleteEventRecord(id);
        return event_record;
    }
}