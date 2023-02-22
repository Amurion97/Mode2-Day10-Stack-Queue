class Stack<Type> {
    container: Array<Type>;
    capacity: number;

    constructor(capacity: number) {
        this.container = [];
        this.capacity = capacity;
    }

    push(item: Type): void {
        if (this.getSize() === this.capacity){
            console.log("Maximum items reached, can't push/add new item into the stack!")
        } else {
            this.container.push(item);
        }

    }

    pop(): Type | undefined {
        // if (this.getSize() > 0) {
            return this.container.pop();
        // } else {
        //     return undefined;
        // }
    }

    peak():Type {
        return this.container[this.getSize()-1];
    }

    getSize(): number {
        return this.container.length;
    }
}

let arr: Array<number> = [1,2,3,4,5,6];
let N = arr.length;
let aStack: Stack<number> = new Stack<number>(N);
for (let i = 0; i < N; i++) {
    aStack.push(arr[i]);
}
let reversedArr: Array<number> = [];
for (let i = 0; i < N; i++) {
    reversedArr.push(Number(aStack.pop()));
}
console.log(`Before: ${arr}`);
console.log(`After: ${reversedArr}`);

