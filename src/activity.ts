export enum ActivityType {
    GAME = 0,
    STREAMING = 1,
    LISTENING = 2
}

export class Activity {
    public name: string = "Discord";
    public type: ActivityType = ActivityType.GAME;
    public url?: string | undefined;
}
