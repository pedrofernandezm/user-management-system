"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const ulid_1 = require("ulid");
let AppService = class AppService {
    constructor(cacheManager) {
        this.cacheManager = cacheManager;
    }
    async list() {
        return await this.getUsers();
    }
    async create(data) {
        const users = await this.getUsers();
        const id = (0, ulid_1.ulid)();
        const user = { id, ...data };
        await this.cacheManager.set('users', users.concat(user), 0);
        return await this.cacheManager.get('users');
    }
    async delete(id) {
        const users = await this.getUsers();
        const index = users.findIndex((user) => user.id === id);
        const filtered = Array.from(users);
        filtered.splice(index, 1);
        await this.cacheManager.set('users', filtered, 0);
    }
    async getUsers() {
        return (await this.cacheManager.get('users')) || [];
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [Object])
], AppService);
//# sourceMappingURL=app.service.js.map