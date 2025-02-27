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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let UsersService = UsersService_1 = class UsersService {
    constructor(httpService) {
        this.httpService = httpService;
        this.logger = new common_1.Logger(UsersService_1.name);
        this.storageHost = 'http://storage:3007';
    }
    async create(createUserDto) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService
            .post(`${this.storageHost}/create`, { ...createUserDto })
            .pipe((0, rxjs_1.catchError)((error) => {
            this.logger.error(error);
            throw 'Something went wrong';
        })));
        return data;
    }
    async list() {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${this.storageHost}/list`).pipe((0, rxjs_1.catchError)((error) => {
            this.logger.error(error);
            throw 'Something went wrong';
        })));
        return data;
    }
    async delete(id) {
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.delete(`${this.storageHost}/delete/${id}`).pipe((0, rxjs_1.catchError)((error) => {
            this.logger.error(error);
            throw 'Something went wrong';
        })));
        return data;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UsersService);
//# sourceMappingURL=users.service.js.map