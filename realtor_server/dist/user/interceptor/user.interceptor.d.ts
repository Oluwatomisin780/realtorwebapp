import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class userInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Promise<Observable<any>>;
}
