const arr = [1, 2, 3, 4]

Array.prototype.mymap = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this))
    }
    return temp
}

console.log(arr.mymap((item) => item * 2));

