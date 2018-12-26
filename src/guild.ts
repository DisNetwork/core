import { SnowFlake } from ".";

export class Guild {
    public id: SnowFlake | undefined;
    public name: string | undefined;
    public icon?: string;
    public ownerId: SnowFlake | undefined;
}
