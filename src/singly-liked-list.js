// List with only one direction
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  append(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.size += 1
      return this
    }

    if (this.head) {
      let nodeIteration = this.head

      while (nodeIteration.next) {
        nodeIteration = nodeIteration.next
      }

      nodeIteration.next = newNode
      this.size += 1

      return this
    }
  }

  prepend(value){
    const newNode = new Node(value)

    if(!this.head){
      this.head = newNode
      this.size += 1

      return this
    }

    if (this.head) {
      newNode.next = this.head
      this.head = newNode
      this.size += 1

      return  this
    }
  }

  insert(value, index){
    const newNode = new Node(value)

    if (index > this.size) {
      console.warn(`can't insert: out of memory`)
      return this
    }

    if (index === this.size) {
      this.head = newNode
      this.size += 1

      return this
    }

    if (index === 1) {
      newNode.next = this.head
      this.head = newNode

      this.size += 1
      return this
    }

    let nodeToIterate = this.head

    for(let i = 1; i < index - 1; i += 1){
      nodeToIterate = nodeToIterate.next
    }

    newNode.next = nodeToIterate.next
    nodeToIterate.next = newNode

    this.size += 1
  }

  remove(index){
    let prevNode = this.head

  
    for(let i = 0; i < index - 1; i += 1){
      prevNode = prevNode.next
    }

    prevNode.next = prevNode.next.next
    this.size -= 1

}

  iterate(){
    let iterateNode = this.head

    if (this.size === 1) {
      console.log('node: ', this.head)
    }

    while (iterateNode.next){
      console.log('node', iterateNode)
      iterateNode = iterateNode.next
    }

    if (iterateNode.value) {
      console.log('node', iterateNode)
    }
  }
}

const linkedList = new LinkedList()

linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)

linkedList.iterate()