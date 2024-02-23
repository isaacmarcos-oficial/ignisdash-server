"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateAddStatus = void 0;
const Post_1 = require("../src/mongodb/Models/Post");
async function migrateAddStatus() {
    const result = await Post_1.PostMongo.updateMany({ dateCreate: { $exists: false } }, { $set: { status: 'Publicado', dateCreate: "2024-01-25" } });
    console.log(`Migração concluída. ${result} posts atualizados.`);
}
exports.migrateAddStatus = migrateAddStatus;
