import database from "../config/database";
import { dataRecord } from "../utils/interface/record";

class Record {
    constructor() {}
    static async getRecords() {
        const records = await database.project_record.findMany();
        return records;
    }
    static async createRecord(data: dataRecord) {
        const record = await database.project_record.create({
            data: {
                member_id: data.member_id,
                project_id: data.project_id,
                project_role: data.project_role,
            },
        });
        return record;
    }
}
export default Record;