import { SnowFlake } from "./index";
export interface SendMessage {
    /**
     * The message contents (up to 2000 characters)
     */
    content: string;

    /**
     * a nonce that can be used for optimistic message sending
     */
    nonce: SnowFlake;

    /**
     * true if this is a TTS message
     */
    tts: boolean;

    /**
     * The contents of the file being sent
     */
    file: File;

    // TODO Embed

    /**
     * JSON encoded body of any additional request fields.
     */
    payload_json: string;
}
