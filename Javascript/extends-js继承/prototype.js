function People(name, age) {
  this.name = name;
  this.age = age;
}
People.prototype.sayName = function () {
  console.log(this.name);
};

function ChinaPeople(name, age, country) {
  this.country = country;
  this.name = name;
  this.age = age;
}

// ChinaPeople.prototype = Object.create(People.prototype);
ChinaPeople.prototype = new People();
const xiaoming = new ChinaPeople("xiaoming", 18, "China");
const yuanos = new ChinaPeople("yuanos", 12, "China");
console.log(xiaoming, yuanos); // China
