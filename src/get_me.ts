import { TgClient } from '@botol/tg-client';
import { User } from '@botol/tg-types';

declare module '@botol/tg-client' {
    interface TgClient {
        getMe(): Promise<User>;
    }
}

TgClient.prototype.getMe = function () {
    return this.makeRequest('getMe');
};
