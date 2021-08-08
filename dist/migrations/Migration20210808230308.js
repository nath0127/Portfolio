"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210808230308 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210808230308 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" add column "email" text not null;');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
        this.addSql('alter table "user" add constraint "user_email_unique" unique ("email");');
    }
}
exports.Migration20210808230308 = Migration20210808230308;
//# sourceMappingURL=Migration20210808230308.js.map