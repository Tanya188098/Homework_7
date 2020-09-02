function Array(arr) {
    this.arr = arr;
}

Array.prototype.inArray = function (string, arr) {
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr.includes(string)) {
            return true;
        } else {
            return false;
        }
    }
}

const func = new Array(['hello', 'srt', 'nullic'] + '<br>');

document.write(func.inArray('hello', this.arr) + '<br>'); //true
document.write(func.inArray('row', this.arr)); //false
