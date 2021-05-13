import { TgClient } from '@botol/tg-client';
import {
    Message,
    MessageEntity,
    InlineKeyboardMarkup,
    ReplyKeyboardMarkup,
    ForceReply,
    ReplyKeyboardRemove,
} from '@botol/tg-types';

export interface SendMessageParams {
    chat_id: number | string;
    text: string;
    parse_mode?: 'Markdown' | 'HTML' | 'MarkdownV2' | string;
    entities?: MessageEntity[];
    disable_web_page_preview?: boolean;
    disable_notification?: boolean;
    reply_to_message_id?: number;
    allow_sending_without_reply?: boolean;
    reply_markup?:
        | InlineKeyboardMarkup
        | ReplyKeyboardMarkup
        | ReplyKeyboardRemove
        | ForceReply;
}

declare module '@botol/tg-client' {
    interface TgClient {
        sendMessage(params: SendMessageParams): Promise<Message>;
    }
}

TgClient.prototype.sendMessage = function (params: SendMessageParams) {
    return this.makeRequest('sendMessage', params);
};
