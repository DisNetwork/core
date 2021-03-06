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

/**
 * The type of the activity
 */
export declare enum ActivityType {

    /**
     * The activity is playing a game
     */
    GAME = 0,

    /**
     * The activity is streaming
     *
     * Only [Twitch Link](https://twitch.tv/) works
     */
    STREAMING = 1,

    /**
     * The activity is listening
     */
    LISTENING = 2
}

/**
 * The type of the channel
 */
export declare enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GUILD_CATEGORY = 4,
}

/**
 * The activity data
 */
export declare class Activity {

    /**
     * The name of the activity
     */
    public name: string;

    /**
     * The type of the activity
     */
    public type: ActivityType;

    /**
     * The url of the streaming activity
     *
     * Only if type is STREAMING
     */
    public url?: string | undefined;
}

/**
 * Deal with the bot before it starts
 */
export declare class PreStartEvent extends DisEvent {

    /**
     * Choose the activity before the bot starts
     */
    public activity: Activity | undefined;

    /**
     * Function that fires when the event triggers
     */
    public fire(): void;
}

/**
 * Deal with the bot when it started
 */
export declare class StartEvent extends DisEvent {

    /**
     * Function that fires when the event triggers
     */
    public fire(): void;
}

export declare interface SendMessage {
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

    /**
     * JSON encoded body of any additional request fields.
     */
    payload_json: string;
}

/**
 * Deal with Guild Object
 */
export declare class Guild {

    /**
     * Id of the guild
     */
    public id: SnowFlake | undefined;

    /**
     * Name of the guild
     */
    public name: string | undefined;

    /**
     * Icon hash of the guild
     */
    public icon?: string;

    /**
     * Owner id of the guild
     */
    public ownerId: SnowFlake | undefined;
}

/**
 * Deal with guilds of the bot
 */
export declare interface Guilds {

    /**
     * Get guild by the id
     */
    get(id: SnowFlake): Guild;

    /**
     * Check if the guild exist in the bot
     */
    has(id: SnowFlake): boolean;
}

/**
 * Channel interface
 */
export declare interface Channel {
    /**
     * the id of this channel
     */
    id: SnowFlake;

    /**
     * the type of channel
     */
    type: ChannelType | number;

    /**
     * the id of the guild
     */
    guild_id: SnowFlake | undefined;

    /**
     * sorting position of the channel
     */
    position: number;

    /**
     * the name of the channel (2-100 characters)
     */
    name: string | undefined;

    /**
     * the channel topic (0-1024 characters)
     */
    topic: string;

    /**
     * whether the channel is nsfw
     */
    nsfw: boolean;

    /**
     * 	the id of the last message sent in this channel (may not point to an existing or valid message)
     */
    last_message_id: SnowFlake | undefined;

    /**
     * the bitrate (in bits) of the voice channel
     */
    bitrate: number | undefined;

    /**
     * the user limit of the voice channel
     */
    user_limit: number | undefined;

    /**
     * amount of seconds a user has to wait before sending another message (0-120); bots,
     * as well as users with the permission `manage_messages` or `manage_channel`, are unaffected
     */
    rate_limit_per_user: number | undefined;

    /**
     * id of the parent category for a channel
     */
    parent_id: SnowFlake | undefined;

}

/**
 * Deal with the bot
 */
export declare interface Bot {

    /**
     * The application of the bot
     */
    app: DisApp;

    /**
     * Deal with guilds of the bot
     */
    guilds: Guilds;

    /**
     * Deal with the bot user
     */
    user: User;
}
