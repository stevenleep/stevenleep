export function createStore(reducer) {
    let state = reducer(undefined, { type: "@INIT" });

    const subscribes: Function[] = [];
    const getState = () => state;

    const dispatch = (action: { type: string }) => {
        state = reducer(state, action);
        subscribes.forEach(fn => fn(state));
    };

    const subscribe = (fn: Function) => {
        subscribes.push(fn);
    };

    return {
        getState,
        dispatch,
        subscribe,
    }
}
