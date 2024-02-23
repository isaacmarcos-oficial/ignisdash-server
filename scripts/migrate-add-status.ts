import { PostMongo } from "../src/mongodb/Models/Post";

export async function migrateAddStatus() {
  const result = await PostMongo.updateMany(
    { dateCreate: { $exists: false } },
    { $set: { status: 'Publicado', dateCreate:"2024-01-25" } }
  );

  console.log(`Migração concluída. ${result} posts atualizados.`);
}
