/*
 * The SnowFlake interface
 */
export interface SnowFlake {
    /**
     * The number of snowflake
     */
    id: number;
}

/**
 * Sent when a message is create/updated. The inner payload is a message object.
 */
export interface MessageEvent {
    /**
     * id of the message
     */
    id: SnowFlake;

    /**
     * id of the channel the message was sent in
     */
    channel_id: SnowFlake;

    /**
     * id of the guild the message was sent in
     */
    guild_id?: SnowFlake | undefined;

    /**
     * user object
     */
    author: User;

    /**
     * contents of the message
     */
    content: string;

    /**
     * whether this was a TTS message
     */
    tts: boolean;

    /**
     * any attached files
     */
    attachments: Attachment[];

    /**
     * used for validating a message was sent
     */
    nonce?: SnowFlake | undefined;

    /**
     * whether this message is pinned
     */
    pinned: boolean;

    // TODO Add ?Guild Member

    // TODO Timestamp

    // TODO ?Editied_Timestamp

    // TODO embed

    // TODO mentions

    // TODO mention_everyone

    // TODO mention_roles

    // TOOD ?reactions

    // TOOD webhook_id

    /**
     * Type of the message
     */
    type: "create" | "edit";
}

/**
 * Sent when a message is deleted.
 * Sent when multiple messages are deleted at once.
 */
export interface MessageDeleteEvent {
    /**
     * the ids of the message
     */
    id: SnowFlake[];

    /**
     * When message delete bulk happens
     */
    isBulk: boolean;

    /**
     * the id of the channel
     */
    channel_id: SnowFlake;

    /**
     * the id of the guild
     */
    guild_id?: SnowFlake | undefined;
}

export interface User {
    /**
     * this user's id
     */
    id: SnowFlake;

    /**
     * the user's username, not unique across the platform
     */
    username: string;

    /**
     * the user's 4-digit discord-tag
     */
    discriminator: string;

    /**
     * the user's avatar hash
     */
    avatar: string;
}

/**
 * The attachment interface
 */
export interface Attachment {
    /**
     * attachment id
     */
    id: SnowFlake;

    /**
     * name of file attached
     */
    filename: string;

    /**
     * size of file in bytes
     */
    size: number;

    /**
     * source url of file
     */
    url: string;

    /**
     * a proxied url of file
     */
    proxy_url: string;

    /**
     * height of file (if image)
     */
    height?: number | undefined;

    /**
     * width of file (if image)
     */
    width: number | undefined;

    /**
     * The attachment types
     */
    type: "image" | "other";
}
