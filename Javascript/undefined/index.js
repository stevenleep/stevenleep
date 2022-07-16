// 看起来期望正常
let s = undefined;
console.log(s); // undefined

window.undefined = 1;
console.log(window.undefined, undefined); // undefined undefined

// ??
// 因为在js中undefined 不是 关键字， 而是window上的一个 只读 属性，window.undefined
function foo() {
  let undefined = 1;
  const a = undefined;
  console.log(a); // 1
}
foo();
