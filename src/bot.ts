import { DisApp, User } from "..";
import { Guilds } from "./guild";

export interface Bot {
    app: DisApp;
    guilds: Guilds;
    user: User;
}
