type Callback<A, R> = (arg: A) => R

export class Publisher<A, R> {
    private subscribers: Set<Callback<A, R>> = new Set()

    subscribe = (callback: Callback<A, R>) => {
        this.subscribers.add(callback)
    }

    unsubscribe = (callback: Callback<A, R>) => {
        this.subscribers.delete(callback)
    }

    fire = (arg: A) => {
        this.subscribers.forEach(callback => callback(arg))
    }
}