function varDefine() {
  console.log("声明提升", a); // undefined
  var a = 1;

  var b = 2;
  var b = 4;
  console.log("声明覆盖，被重新赋值", b); // 4

  var c = 3;
  console.log("被挂载到全局", window.c); // 3

  // 你不应该忘记var会挂载到window上, 并且在这里不存在块级作用域
  // 使得它可以被访问到
  for (var i = 0; i < 10; i++) {
    console.log("循环变量", i); // 1..9
  }
  console.log("循环变量222", i); // 10
}
varDefine();

function letDefine() {
  console.log("不存在所谓的声明提升", a); // ReferenceError， a is not defined
  let a = 1;

  let b = 2;
  // let b = 4; // Cannot redeclare block-scoped variable 'b'

  // block-scoped variables are not hoisted
  // for形成块级作用域
  for (let i = 0; i < 10; i++) {
    console.log("循环变量", i); // 1..9
  }
  console.log("循环变量222", i); // ReferenceError， i is not defined

  let d = 5;
  console.log("", window.d); // undefined
}
letDefine();
