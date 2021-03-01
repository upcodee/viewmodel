import { Observable } from "rxjs";
export interface ViewModel {
    dispose(): void;
}
export declare class ViewModelScope {
    private subscription;
    constructor();
    launchInside<T>(observable: Observable<T>): void;
    dispose(): void;
}
export declare const useScopedViewModel: <T extends ViewModel>(viewModel: T) => T;
