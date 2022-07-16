export function countReducer(initState = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return initState + 1;
        case 'DECREMENT':
            return initState - 1;
        case 'RESET':
            return 0;
        default:
            return initState;
    }
}