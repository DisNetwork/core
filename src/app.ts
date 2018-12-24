class Factory {

    public static create(type: any): any {
        return new type();
    }

    public static check(wanted: any, target: any): any | undefined {
        const instance: any = Factory.create(target);
        if (instance instanceof wanted) {
            return instance;
        } else {
            // When the instance is not a child of the wanted class
            console.log("[Core] Failed: Class '", target.name, "' is not a child of ", wanted.name);
            return undefined;
        }
    }

}

export class DisApp {
}

export class DisAppOptions {
    public services?: DisService[] = [];
    public events?: DisEvent[] = [];
}

export class DisService {
}

export class DisServiceOptions {
    public events?: DisEvent[] = [];
}

export class DisEvent {
}

export class AppStatic {

    /**
     * The app that controls the bot
     */
    public static app: DisApp;

    /**
     * Events that doesn't have any service
     */
    public static staticEvents: DisEvent[] = [];

    /**
     * Events that are apart of service
     */
    public static events: Map<DisService, DisEvent[]> = new Map();

    /**
     * A way to find the services instance
     */
    public static services: Map<string, DisService> = new Map();
}

export function service(options: DisServiceOptions) {
    return (target: any) => {
        const instance: any = Factory.check(DisService, target);
        if (instance !== undefined) {
            // TODO add service to the app static
            const name: string = target.name;
            if (!AppStatic.services.has(name)) {
                AppStatic.services.set(name, instance);
            }

            // Add the events classes into the options
            const eventInstances: DisEvent[] = [];
            if (options.events) {
                for (const eventClass of options.events) {
                    if (eventClass instanceof Function) {
                        const eventInstance: any = Factory.check(DisEvent, eventClass);
                        if (eventInstance !== undefined && eventInstance instanceof DisEvent) {
                            eventInstances.push(eventInstance);
                        }
                    }
                }
            }
            AppStatic.events.set(instance, eventInstances);
        }
    };
}

export function app(options: DisAppOptions) {
    return (target: any) => {
        if (AppStatic.app) {
            console.log("[Core] Error: Can't make more then one instance for DisApp");
            return;
        }
        const instance: any | undefined = Factory.check(DisApp, target);
        if (instance !== undefined) {
            AppStatic.app = instance;
        }
        const eventInstances: DisEvent[] = [];
        if (options.events) {
            for (const eventClass of options.events) {
                if (eventClass instanceof Function) {
                    const eventInstance: any = Factory.check(DisEvent, eventClass);
                    if (eventInstance !== undefined && eventInstance instanceof DisEvent) {
                        eventInstances.push(eventInstance);
                    }
                }
            }
        }
        AppStatic.staticEvents = eventInstances;
    };
}
