const array = [1, 2, 3, 4, 5]

class MyArray {
    constructor () {
        this.length = 0
        this.data = {}
    }

    get (index) {
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item
        this.length += 1
        return this.data
    }

    pop(){
        console.log(this.length)
        if (this.length === 0) {
            return
        }
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length -= 1
        return lastItem
    }

    delete(index){
        if (this.length === 0) {
            return
        }
        const item = this.data[index]
        this.shiftIndex(index)

        return item
    }

    shiftIndex(index){
        for (let i = index; i < this.length - 1; i += 1){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    shift(){
        return  this.delete(0)
    }

    unShift(newItem){
        if (!newItem) {
            return this.length
        }

        if(this.length === 0){
            this.data[this.length] = newItem
            this.length += 1

            return this.length
        }

        if (this.length > 0) {
            for (let i = this.length - 1; i >= 0; i -= 1){
                let elementToMove = this.data[i]
                this.data[i + 1] = elementToMove
                this.data[i] = this.data[i - 1]
            }

            this.data[0] = newItem
        }

        return this.length
    }
}

console.log('- Create MyArray instance')
const myArray = new MyArray()
console.log('myArray => ', myArray)
console.log('\n- added elements: [a, b, c]')
myArray.push('a')
myArray.push('b')
myArray.push('c')

console.log(myArray)

