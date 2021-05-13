import { TgClient } from '@botol/tg-client';
import { InlineKeyboardMarkup, Message, MessageEntity } from '@botol/tg-types';

export type EditMessageTextParams =
    | EditMessageTextSimpleParams
    | EditMessageTextInlineParams;

export interface EditMessageTextSimpleParams {
    chat_id: number | string;
    message_id: number;
    text: string;
    parse_mode?: 'Markdown' | 'HTML' | 'MarkdownV2' | string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

export interface EditMessageTextInlineParams {
    inline_message_id: string;
    text: string;
    parse_mode?: 'Markdown' | 'HTML' | 'MarkdownV2' | string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    reply_markup?: InlineKeyboardMarkup;
}

declare module '@botol/tg-client' {
    interface TgClient {
        editMessageText(params: EditMessageTextParams): Promise<Message | true>;
    }
}

TgClient.prototype.editMessageText = function (params: EditMessageTextParams) {
    return this.makeRequest('editMessageText', params);
};
