export interface UserInterface {
    name: string;
    id: number;
    iat: number;
    expire: number;
}
export declare const User: (...dataOrPipes: any[]) => ParameterDecorator;
