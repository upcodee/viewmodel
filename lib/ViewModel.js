"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useScopedViewModel = exports.ViewModelScope = void 0;
var rxjs_1 = require("rxjs");
var react_1 = require("react");
var ViewModelScope = /** @class */ (function () {
    function ViewModelScope() {
        this.subscription = new rxjs_1.Subscription();
    }
    ViewModelScope.prototype.launchInside = function (observable) {
        this.subscription.add(observable.subscribe());
    };
    ViewModelScope.prototype.dispose = function () {
        this.subscription.unsubscribe();
    };
    return ViewModelScope;
}());
exports.ViewModelScope = ViewModelScope;
var useScopedViewModel = function (viewModel) {
    react_1.useEffect(function () {
        return function cleanup() {
            viewModel.dispose();
        };
    }, []);
    return viewModel;
};
exports.useScopedViewModel = useScopedViewModel;
