import { TgClient } from '@botol/tg-client';
import { InlineKeyboardMarkup, Message, MessageEntity } from '@botol/tg-types';

export type EditMessageReplyMarkupParams =
    | EditMessageReplyMarkupSimpleParams
    | EditMessageReplyMarkupInlineParams;

export interface EditMessageReplyMarkupSimpleParams {
    chat_id: number | string;
    message_id: number;
    reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageReplyMarkupInlineParams {
    inline_message_id: string;
    reply_markup?: InlineKeyboardMarkup;
}

declare module '@botol/tg-client' {
    interface TgClient {
        editMessageReplyMarkup(
            params: EditMessageReplyMarkupParams,
        ): Promise<Message | true>;
    }
}

TgClient.prototype.editMessageReplyMarkup = function (
    params: EditMessageReplyMarkupParams,
) {
    return this.makeRequest('editMessageReplyMarkup', params);
};
