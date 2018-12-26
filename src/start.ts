import { DisEvent, Activity } from "..";

export class PreStartEvent extends DisEvent {
    public activity: Activity | undefined;

    public fire(): void {
    }

}

export class StartEvent extends DisEvent {

    public fire(): void {
    }
}
