class Node {
    constructor() {
        this.value = null
        this.nextNode = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    append(value) {
        const newNode = new Node()
        newNode.value = value
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.nextNode = newNode
            this.tail = newNode
        }
        this.size++
    }
    prepend(value) {
        const newNode = new Node()
        newNode.value = value
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.newNode = this.head
            this.head = newNode
        }
        this.size++
    }
    size() {
        return this.size
    }
    head() {
        return this.head
    }
    tail() {
        return this.tail
    }
    at(index) {
        if (index < 0 || index >= this.size) {
            console.log(`Invalid input:index should be between 0 and ${this.size}`)
        }
        else {
            let currentNode = this.head
            let currentIndex = 0

            while (currentIndex < index) {
                currentNode = currentNode.nextNode
                currentIndex++
            }

            return currentNode
        }
    }
    pop() {
        if (!this.head) { console.log("The list is empty; No available node to delete") }
        else if (this.head === this.tail) {
            this.head = null
            this.tail = null
            this.size--
            console.log("Deleted the last node,the head!")
        }
        else {
            let temp = this.head
            while (temp.nextNode !== this.tail) {
                temp = temp.nextNode
            }
            this.tail = temp
            this.tail.nextNode = null
            this.size--
            console.log("Deleted the last node.")
        }

    }
    contains(value) {
        let tmp = this.head
        while (tmp !== null) {
            if (tmp.value === value) {
                return true
            }
            tmp = tmp.nextNode
        }
        return false
    }

    find(value) {
        let tmp = this.head
        let index = 0
        while (tmp !== null) {
            if (tmp.value === value) {
                return index
            }
            tmp = tmp.nextNode
            index++
        }
        return null
    }
    toString() {
        let tmp = this.head
        let myList = ""
        while (tmp !== null) {
           myList +=`( ${tmp.value} ) -> `
           tmp = tmp.nextNode
        }
        myList += " null"
        return myList
    }
}
