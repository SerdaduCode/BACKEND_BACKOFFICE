import Record from "../model/record";

export class RecordService {
    async getRecords() {
        const records = await Record.getRecords();
        return records;
    }
    async createRecord(data: any) {
        const record = await Record.createRecord(data);
        return record;
    }
    async deleteRecord(id: string) {
        const record = await Record.deleteRecord(id);
        return record;
    }
}