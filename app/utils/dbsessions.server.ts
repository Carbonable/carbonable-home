import { createSessionStorage } from "@remix-run/node";
import { db } from "./db.server";


// For more info check https://remix.run/docs/en/v1/api/remix#createsessionstorage
export function createDatabaseSessionStorage({ cookie }: any) {
    return createSessionStorage({
      cookie,
      async createData(data, expires) {
        const session = await db.session.create({
            data: { data: JSON.stringify({ data }) },
          });
        return session.id;
      },
      async readData(id) {
        return await db.session.findUnique({ 
            where: { id },
        });
      },
      async updateData(id, data, expires) {
        await db.session.update({
            where: { id },
            data: { data: JSON.stringify({ data }) },
        });
      },
      async deleteData(id) {
        await db.session.delete({ where: { id } });
      },
    });
  }