/**
 * Manage and contacts with your bot
 */
export interface Bot {

    /**
     * The activity of the bot
     */
    bot: Activity;
}

/**
 * The type of the Activity
 */
export enum ActivityType {
    GAME = 0,
    STREAMING = 1,
    LISTENING = 2,
}

/**
 * The activity of the bot
 */
export interface Activity {
    name: string;
    type: ActivityType;
    url?: string;
}

/**
 * The main interface for the event
 */
export interface Event {
    getEventName(): string;
}

/**
 * Fire before the bot starts to do anything
 */
export interface PreStartEvent extends Event {

    /**
     * Manage the activity for the bot
     */
    activity: Activity;
}

export interface StartEvent extends Event {

    /**
     * The bot that has been started
     */
    bot: Bot;
}
