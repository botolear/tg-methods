import { TgClient } from '@botol/tg-client';

export interface AnswerCallbackQueryParams {
    callback_query_id: string;
    text?: string;
    show_alert?: boolean;
    url?: string;
    cache_time?: number;
}

declare module '@botol/tg-client' {
    interface TgClient {
        answerCallbackQuery(params: AnswerCallbackQueryParams): Promise<true>;
    }
}

TgClient.prototype.answerCallbackQuery = function (
    params: AnswerCallbackQueryParams,
) {
    return this.makeRequest('answerCallbackQuery', params);
};
