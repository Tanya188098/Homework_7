function Array(arr) {
    this.arr = arr;
}

Array.prototype.myPush = function (element) {
    document.write(this.arr + ', ');
    for (let i = 0; i < arguments.length; i++) {
        document.write(arguments[i] + ',');
    }
}

Array.prototype.myJoin = function (separator) {
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] === null || this.arr[i] === undefined) {
            document.write(this.arr[i] = ' ');
        }
        if (separator === undefined) {
            document.write(this.arr[i] + ', ');
        } else {
            document.write(this.arr[i] + separator);
        }
    }
}

Array.prototype.myReverse = function () {
    let newArr = [];
    let i;
    for (i = this.arr.length - 1; i >= 0; i--) {
        newArr += this.arr[i] + ', ';
    }
    document.write(newArr);
}

const list = new Array([3, 5, 4, 6]);

list.myPush(10, 'fruits', 12, 13);
document.write('<br>');
list.myJoin('-');
document.write('<br>');
list.myReverse();