console.log('Hello Bind this', sum);

// bind返回一个函数
const exec = sum.bind({ context: 'Bind this 1' }).bind({ context: 'Bind this 2' });
const value = exec.bind({ name: 'Bind this 3' }, 10)(20);

console.log('Hello Bind this', value);