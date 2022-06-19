console.log('Hello Apply this', sum);

// 直接调用
// apply 是数组参数
const value = sum.apply({ context: 'Apply this 1' }, [10, 20]);
console.log('Hello Apply this', value);

// 当array参数不确定的时候, apply不再实用
