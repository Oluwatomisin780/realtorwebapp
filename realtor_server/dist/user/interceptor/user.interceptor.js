"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInterceptor = void 0;
const jwt = require("jsonwebtoken");
class userInterceptor {
    async intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const token = request?.headers?.authorization?.split('Bearer ')[1];
        const user = jwt.decode(token);
        request.user = user;
        console.log(user);
        return next.handle();
    }
}
exports.userInterceptor = userInterceptor;
//# sourceMappingURL=user.interceptor.js.map