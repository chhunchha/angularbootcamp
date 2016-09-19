(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/BehaviorSubject'), require('@angular/core'), require('rxjs/operator/pluck'), require('rxjs/operator/map'), require('rxjs/operator/distinctUntilChanged'), require('rxjs/Observable'), require('rxjs/operator/withLatestFrom'), require('rxjs/operator/scan'), require('rxjs/operator/observeOn'), require('rxjs/scheduler/queue')) :
    typeof define === 'function' && define.amd ? define(['exports', 'rxjs/BehaviorSubject', '@angular/core', 'rxjs/operator/pluck', 'rxjs/operator/map', 'rxjs/operator/distinctUntilChanged', 'rxjs/Observable', 'rxjs/operator/withLatestFrom', 'rxjs/operator/scan', 'rxjs/operator/observeOn', 'rxjs/scheduler/queue'], factory) :
    (factory((global.ngrxstore = global.ngrxstore || {}),global.rxjs_BehaviorSubject,global._angular_core,global.pluck,global.map,global.distinctUntilChanged,global.rxjs_Observable,global.rxjs_operator_withLatestFrom,global.rxjs_operator_scan,global.rxjs_operator_observeOn,global.rxjs_scheduler_queue));
}(this, (function (exports,rxjs_BehaviorSubject,_angular_core,pluck,map,distinctUntilChanged,rxjs_Observable,rxjs_operator_withLatestFrom,rxjs_operator_scan,rxjs_operator_observeOn,rxjs_scheduler_queue) { 'use strict';

pluck = 'default' in pluck ? pluck['default'] : pluck;
map = 'default' in map ? map['default'] : map;
distinctUntilChanged = 'default' in distinctUntilChanged ? distinctUntilChanged['default'] : distinctUntilChanged;

var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Dispatcher = (function (_super) {
    __extends(Dispatcher, _super);
    function Dispatcher() {
        _super.call(this, { type: Dispatcher.INIT });
    }
    Dispatcher.prototype.dispatch = function (action) {
        this.next(action);
    };
    Dispatcher.prototype.complete = function () {
        // noop
    };
    Dispatcher.INIT = '@ngrx/store/init';
    return Dispatcher;
}(rxjs_BehaviorSubject.BehaviorSubject));

var __extends$1 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Reducer = (function (_super) {
    __extends$1(Reducer, _super);
    function Reducer(_dispatcher, initialReducer) {
        _super.call(this, initialReducer);
        this._dispatcher = _dispatcher;
    }
    Reducer.prototype.replaceReducer = function (reducer) {
        this.next(reducer);
    };
    Reducer.prototype.next = function (reducer) {
        _super.prototype.next.call(this, reducer);
        this._dispatcher.dispatch({ type: Reducer.REPLACE });
    };
    Reducer.REPLACE = '@ngrx/store/replace-reducer';
    return Reducer;
}(rxjs_BehaviorSubject.BehaviorSubject));

var pluck_1 = pluck;
var map_1 = map;
var distinctUntilChanged_1 = distinctUntilChanged;
function select(pathOrMapFn) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    var mapped$;
    if (typeof pathOrMapFn === 'string') {
        mapped$ = pluck_1.pluck.call.apply(pluck_1.pluck, [this, pathOrMapFn].concat(paths));
    }
    else if (typeof pathOrMapFn === 'function') {
        mapped$ = map_1.map.call(this, pathOrMapFn);
    }
    else {
        throw new TypeError(("Unexpected type " + typeof pathOrMapFn + " in select operator,")
            + " expected 'string' or 'function'");
    }
    return distinctUntilChanged_1.distinctUntilChanged.call(mapped$);
}
var select_2 = select;

var __extends$2 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Store = (function (_super) {
    __extends$2(Store, _super);
    function Store(_dispatcher, _reducer, state$) {
        _super.call(this);
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        this.select = select_2.bind(this);
        this.source = state$;
    }
    Store.prototype.lift = function (operator) {
        var store = new Store(this._dispatcher, this._reducer, this);
        store.operator = operator;
        return store;
    };
    Store.prototype.replaceReducer = function (reducer) {
        this._reducer.next(reducer);
    };
    Store.prototype.dispatch = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.next = function (action) {
        this._dispatcher.next(action);
    };
    Store.prototype.error = function (err) {
        this._dispatcher.error(err);
    };
    Store.prototype.complete = function () {
        // noop
    };
    return Store;
}(rxjs_Observable.Observable));

var __extends$3 = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var State = (function (_super) {
    __extends$3(State, _super);
    function State(_initialState, action$, reducer$) {
        var _this = this;
        _super.call(this, _initialState);
        var actionInQueue$ = rxjs_operator_observeOn.observeOn.call(action$, rxjs_scheduler_queue.queue);
        var actionAndReducer$ = rxjs_operator_withLatestFrom.withLatestFrom.call(actionInQueue$, reducer$);
        var state$ = rxjs_operator_scan.scan.call(actionAndReducer$, function (state, _a) {
            var action = _a[0], reducer = _a[1];
            return reducer(state, action);
        }, _initialState);
        state$.subscribe(function (value) { return _this.next(value); });
    }
    return State;
}(rxjs_BehaviorSubject.BehaviorSubject));

function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        if (state === void 0) { state = {}; }
        var hasChanged = false;
        var nextState = {};
        for (var i = 0; i < finalReducerKeys.length; i++) {
            var key = finalReducerKeys[i];
            var reducer = finalReducers[key];
            var previousStateForKey = state[key];
            var nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}

var INITIAL_REDUCER = new _angular_core.OpaqueToken('Token ngrx/store/reducer');
var INITIAL_STATE = new _angular_core.OpaqueToken('Token ngrx/store/initial-state');
var _INITIAL_REDUCER = new _angular_core.OpaqueToken('Token _ngrx/store/reducer');
var _INITIAL_STATE = new _angular_core.OpaqueToken('Token _ngrx/store/initial-state');
function _initialReducerFactory(reducer) {
    if (typeof reducer === 'function') {
        return reducer;
    }
    return combineReducers(reducer);
}
function _initialStateFactory(initialState, reducer) {
    if (!initialState) {
        return reducer(undefined, { type: Dispatcher.INIT });
    }
    return initialState;
}
function _storeFactory(dispatcher, reducer, state$) {
    return new Store(dispatcher, reducer, state$);
}
function _stateFactory(initialState, dispatcher, reducer) {
    return new State(initialState, dispatcher, reducer);
}
function _reducerFactory(dispatcher, reducer) {
    return new Reducer(dispatcher, reducer);
}

/**
 * @deprecated, use StoreModule.provideStore instead!
 */
function provideStore(_reducer, _initialState) {
    return [
        Dispatcher,
        { provide: Store, useFactory: _storeFactory, deps: [Dispatcher, Reducer, State] },
        { provide: Reducer, useFactory: _reducerFactory, deps: [Dispatcher, INITIAL_REDUCER] },
        { provide: State, useFactory: _stateFactory, deps: [INITIAL_STATE, Dispatcher, Reducer] },
        { provide: INITIAL_REDUCER, useFactory: _initialReducerFactory, deps: [_INITIAL_REDUCER] },
        { provide: INITIAL_STATE, useFactory: _initialStateFactory, deps: [_INITIAL_STATE, INITIAL_REDUCER] },
        { provide: _INITIAL_STATE, useValue: _initialState },
        { provide: _INITIAL_REDUCER, useValue: _reducer }
    ];
}
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule.provideStore = function (_reducer, _initialState) {
        return {
            ngModule: StoreModule,
            providers: provideStore(_reducer, _initialState)
        };
    };
    StoreModule.decorators = [
        { type: _angular_core.NgModule, args: [{},] },
    ];
    /** @nocollapse */
    StoreModule.ctorParameters = [];
    return StoreModule;
}());

exports.Dispatcher = Dispatcher;
exports.INITIAL_REDUCER = INITIAL_REDUCER;
exports.INITIAL_STATE = INITIAL_STATE;
exports._INITIAL_REDUCER = _INITIAL_REDUCER;
exports._INITIAL_STATE = _INITIAL_STATE;
exports._initialReducerFactory = _initialReducerFactory;
exports._initialStateFactory = _initialStateFactory;
exports._storeFactory = _storeFactory;
exports._stateFactory = _stateFactory;
exports._reducerFactory = _reducerFactory;
exports.provideStore = provideStore;
exports.StoreModule = StoreModule;
exports.Reducer = Reducer;
exports.State = State;
exports.Store = Store;
exports.combineReducers = combineReducers;

Object.defineProperty(exports, '__esModule', { value: true });

})));