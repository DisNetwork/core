/*
 * The SnowFlake interface
 */
export interface SnowFlake {
    /**
     * The number of snowflake
     */
    id: number;
}

/*
 * The read message interface
 */
export interface ReadMessage {
    /**
     * The message contents (up to 2000 characters)11111111111
     */
    content: string;
    /**
     * A nonce that can be used for optimistic message sending
     */
    nonce: SnowFlake;
    /**
     * true if this is a TTS message.
     */
    tts: boolean;
    /**
     * The contents of the file being sent
     */
    file: File;
    /**
     * JSON encoded body of any additional request fields.
     */
    payload_json: string;
}
