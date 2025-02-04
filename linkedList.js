class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.headNode) {
            this.headNode = newNode;
            return;
        }

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode;
    }

    tail() {
        if (!this.headNode) return null;

        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current;
    }

    at(index) {
        if (index < 0) return null;

        let current = this.headNode;
        let count = 0;

        while (current && count < index) {
            current = current.nextNode;
            count++;
        }
        return current;
    }

    pop() {
        if (!this.headNode) return;
        
        if (!this.headNode.nextNode) {
            this.headNode = null;
            return;
        }
        
        let current = this.headNode;
        while (current.nextNode.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.headNode;
        let index = 0;

        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = '';
        let current = this.headNode;

        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + 'null';
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
            return;
        }
    
        if (index < 0 || index > this.size()) return;
    
        const newNode = new Node(value);
        let current = this.headNode;
        let previous = null;
        let count = 0;
    
        while (count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }
    
        newNode.nextNode = current;
        previous.nextNode = newNode;
    }
    
    removeAt(index) {
        if (!this.headNode || index < 0 || index >= this.size()) return;
    
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }
    
        let current = this.headNode;
        let previous = null;
        let count = 0;
    
        while (count < index) {
            previous = current;
            current = current.nextNode;
            count++;
        }
        previous.nextNode = current.nextNode;
    }
}

export { Node, LinkedList };