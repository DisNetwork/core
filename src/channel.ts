import { SnowFlake } from "./index";

export interface Channel {

    id: SnowFlake;

    type: ChannelType | number;

    guild_id: SnowFlake | undefined;

    position: number;

    name: string | undefined;

    topic: string;

    nsfw: boolean;

    last_message_id: SnowFlake | undefined;

    bitrate: number | undefined;

    user_limit: number | undefined;

    rate_limit_per_user: number | undefined;

    parent_id: SnowFlake | undefined;

    // TODO last_pin_timestamp

    // TODO permission overwrites[]
}

export enum ChannelType {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GUILD_CATEGORY = 4,
}
