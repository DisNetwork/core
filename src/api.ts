import { SnowFlake } from "./index";

export interface SendMessage {
    content: string;

    nonce: SnowFlake;

    tts: boolean;

    file: File;

    payload_json: string;

    // TODO Embed
}
