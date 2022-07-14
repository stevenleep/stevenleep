export function isStrictBoolean(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Boolean]";
}
export function isBoolean(value: any): boolean {
    return typeof value === "boolean";
}

export function isFunction(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Function]";
}
export function isPromise(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Promise]";
}
export function isStrictPromise(value: any): boolean {
    return isPromise(value) && isFunction(value.then);
}