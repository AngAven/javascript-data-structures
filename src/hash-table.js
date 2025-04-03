class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  hashMethod(key) {
    let hash = 0

    for (let i = 0; i < key.length; i += 1) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }

    return hash
  }

  set(key, value) {
    const address = this.hashMethod(key)

    if (!this.data[address]) {
      this.data[address] = []
    }

    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]

    if (!currentBucket) {
      return undefined
    }

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i += 1) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined
  }

  delete(key) {
    if (!key) {
      return undefined
    }

    const address = this.hashMethod(key)
    const currentBucket = this.data[address]

    if (!currentBucket) {
      return undefined
    }

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i += 1) {
        if (currentBucket[i][0] === key) {
          const itemToRemove = currentBucket[i]
          return currentBucket.splice(i, 1)[0]
        }
      }
    }
  }

  getAllKeys() {
    // const allKeys = new Set()
    // const hashTableLength = this.data.length
    // let insideArrayLength = 0
    //
    // for (let i = 0; i < hashTableLength; i += 1){
    //   if (hashTableLength > 1 && (this.data[i]?.length > 1)) {
    //     insideArrayLength = this.data[i].length
    //     for (let j = 0;  j < insideArrayLength; j += 1){
    //       allKeys.add(this.data[i][j][0])
    //     }
    //   }
    //
    //   if (hashTableLength > 1 && (this.data[i]?.length === 1)) {
    //     allKeys.add(this.data[i][0][0])
    //   }
    // }
    //
    //  return [...allKeys]

    let items = this.data
      .filter((item) => item !== undefined)
      .flat()
      .map((item) => item[0])

    return [...new Set(items)]
  }
}

const myHashTable = new HashTable(50)

myHashTable.set('Diego', 1990)
myHashTable.set('Diego', 1991)
myHashTable.set('Diego', 1992)
myHashTable.set('Mariana', 1998)
myHashTable.set('Adriana', 2000)
myHashTable.set('Diego', 1990)
myHashTable.set('Mariana', 1998)
myHashTable.set('Miranda', 2000)
myHashTable.set('Cat', 2010)
