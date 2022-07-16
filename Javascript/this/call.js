console.log('Hello Call this', sum);

// 直接调用
// reset参数
const value = sum.call({ context: 'Call this 1' }, 10, 20);
console.log('Hello Call this', value);
