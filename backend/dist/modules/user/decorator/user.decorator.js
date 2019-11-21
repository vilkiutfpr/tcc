"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.User = common_1.createParamDecorator((data, [root, args, ctx, info]) => {
    return ctx.req.user;
});
exports.default = exports.User;
//# sourceMappingURL=user.decorator.js.map