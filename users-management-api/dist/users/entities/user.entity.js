"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        const { id, firstName, lastName, gender, email, shortDescription } = data;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.shortDescription = shortDescription;
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map