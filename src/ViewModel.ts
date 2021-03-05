import {Observable, Subscription} from "rxjs";
import {useEffect} from "react";

export interface ViewModel {
    dispose(): void
}

export class ViewModelScope {

    private subscription: Subscription

    constructor() {
        this.subscription = new Subscription()
    }

    launchInside<T>(observable: Observable<T>) {
        this.subscription.add(observable.subscribe(_ => { }, _ => { }, () => { }))
    }

    dispose(): void {
        this.subscription.unsubscribe()
    }
}

export const useScopedViewModel = <T extends ViewModel>(viewModel: T) => {
    useEffect(() => {
        return function cleanup() {
            viewModel.dispose()
        }
    }, [])
    return viewModel
}