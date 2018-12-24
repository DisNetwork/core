/*
 * The SnowFlake interface
 */
export declare interface SnowFlake {

    /**
     * The number of snowflake
     */
    id: number;

}

/**
 * Sent when a message is create/updated. The inner payload is a message object.
 */
export declare interface MessageEvent {

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
    guild_id: SnowFlake | undefined;

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
    nonce: SnowFlake | undefined;

    /**
     * whether this message is pinned
     */
    pinned: boolean;

    /**
     * Type of the message
     */
    type: "create" | "edit";
}

/**
 * Sent when a message is deleted.
 * Sent when multiple messages are deleted at once.
 */
export declare interface MessageDeleteEvent {

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
    guild_id: SnowFlake | undefined;
}

/**
 * Discord User Object
 */
export declare interface User {

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
export declare interface Attachment {

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
    height: number | undefined;

    /**
     * width of file (if image)
     */
    width: number | undefined;

    /**
     * The attachment types
     */
    type: "image" | "other";
}

/**
 * Contacts with your Application
 */
export declare class DisApp {}

/**
 * Options to run your Application
 */
export declare class DisAppOptions {

    /**
     * Services that will enable if they are enabled
     */
    public services: DisService[];

    /**
     * Static events that will be enabled by default
     */
    public events: DisEvent[];
}

/**
 * Service that can be enabled by User
 */
export declare class DisService {}

/**
 * Options for the service to run it
 */
export declare class DisServiceOptions {

    /**
     * Events that will run by default for the service
     */
    public events: DisEvent[];
}

/**
 * Interacts with the event
 */
export declare class DisEvent {}

/**
 * A static class to contact the application
 */
export declare class AppStatic {

    /**
     * The app that controls the bot
     */
    public static app: DisApp;

    /**
     * Events that doesn't have any service
     */
    public static staticEvents: DisEvent[];

    /**
     * Events that are apart of service
     */
    public static events: Map<DisService, DisEvent[]>;

    /**
     * A way to find the services instance
     */
    public static services: Map<string, DisService>;
}

/**
 * Identify the service with the options to run it
 */
export declare function service(options: DisServiceOptions): (target: any) => void;

/**
 * Identify the application with the options to run it
 */
export declare function app(options: DisAppOptions): (target: any) => void;
