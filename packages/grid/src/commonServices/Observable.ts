export type Observer = {
    update(ids: string[]): void;
};

export class Observable {
    private observers: Observer[] = [];

    addObserver(observer: Observer) {
        this.observers.push(observer);
    }

    notifyObservers(ids: string[] = []) {
        for (const observer of this.observers) {
            observer.update(ids);
        }
    }
}
