import { SnowFlake } from ".";

export class Guild {
    public id: SnowFlake | undefined;
    public name: string | undefined;
    public icon?: string;
    public ownerId: SnowFlake | undefined;
}

export interface Guilds {
    get(id: SnowFlake): Guild;
    has(id: SnowFlake): boolean;
}
