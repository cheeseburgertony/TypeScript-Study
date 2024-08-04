class Animal {
  // private 这个方法是私有的，仅在当前类中可见，对实例对象以及子类都是不可见的
  private __run__(){
    console.log('Aniaml 中私有的方法')
  }
  protected move() {
    this.__run__()
    console.log('走两步')
  }
  run() {
    this.__run__()
    this.move()
    console.log('跑起来')
  }

}

const a = new Animal()
// a.move()
// a.

class Dog extends Animal {
  name = '二哈'
  bark() {
    this.move()
    console.log('汪汪')
  }
}

const d = new Dog()
// d.

