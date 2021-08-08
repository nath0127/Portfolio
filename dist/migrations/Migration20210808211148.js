"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210808211148 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210808211148 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null);');
    }
}
exports.Migration20210808211148 = Migration20210808211148;
//# sourceMappingURL=Migration20210808211148.js.map