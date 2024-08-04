interface Singale {
  name: string
  sing(): void
}

class Person implements Singale {
  name = '名字'
  sing(): void {
    console.log('我在唱歌')
  }
}