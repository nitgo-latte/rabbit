"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRegister = void 0;
exports.validateRegister = (options) => {
    const { email, username, password } = options;
    if (!email.includes("@")) {
        return [
            {
                field: "email",
                message: "invalid email",
            },
        ];
    }
    if (username.length < 6) {
        return [
            {
                field: "username",
                message: "Username must be at least 6 characters",
            },
        ];
    }
    if (username.includes("@")) {
        return [
            {
                field: "username",
                message: "Username cannot contain @ characters",
            },
        ];
    }
    if (password.length < 6) {
        return [
            {
                field: "password",
                message: "Password must be at least 6 characters",
            },
        ];
    }
    return null;
};
//# sourceMappingURL=validateRegister.js.map