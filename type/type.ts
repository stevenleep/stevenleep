// type
// string, number, boolean, null, undefined, bigint, symbol, object;

// 7种基本类型(symbol/bigint为es6新增)
type BaseType = number | boolean | null | undefined | string | symbol | bigint;
// 严格来说一种object引用类型, Function, Array, Date, RegExp, Map, Set, WeakMap, WeakSet...术属于引用子类型
type Reference = object;

/**
 * object
 *
 * Function、RegExp、Date、Error、Map、Set、WeakMap、WeakSet、Array、String、Number、Boolean、Null、Undefined、Symbol、ArrayBuffer、DataView、Int8Array、Uint8Array、Uint8ClampedArray、Int16Array、Uint16Array、Int32Array、Uint32Array、Float32Array、Float64Array
 */
