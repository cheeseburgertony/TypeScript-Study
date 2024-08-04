class Animal {
  // 这个方法是受保护的，仅在其声明的类和子类中（非实例对象）可见  他们的实例对象都对此方法不可见
  // 在该类或子类的内部可以通过this来访问父类中受保护的成员，但是对实例都不可见
  protected move() {
    console.log('走两步')
  }
  run() {
    this.move()
    console.log('跑起来')
  }

}

const a = new Animal()
// a.move()

class Dog extends Animal {
  name = '二哈'
  bark() {
    this.move()
    console.log('汪汪')
  }
}

const d = new Dog()

