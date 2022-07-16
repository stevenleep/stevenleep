// 借住于Call和原型来进行集成

// 构造函数 Constructor
function People(name, age) {
  this.name = name;
  this.age = age;
}
// 原型 Prototype
People.prototype.sayName = function () {
  console.log(this.name);
};

function ChinaPeople(name, age, country) {
  // 这里本质上是在将People的this指向ChinaPeople 的 this；
  // 并没有绑定对应的prototype
  People.call(this, name, age);
  this.country = country;
}

/**
 * @position define: 2
 * @description ChinaPeople 指向了 People 的原型，@point: 2 才可以被调用
 */
ChinaPeople.prototype = Object.create(People.prototype);

const xiaoming = new ChinaPeople("xiaoming", 18, "China");

console.log(xiaoming.country); // China
console.log(xiaoming.name); // xiaoming

// console.log(xiaoming.sayName());
// // Uncaught TypeError: xiaoming.sayName is not a function

// @point: 2
console.log(xiaoming.sayName()); // xiaoming
