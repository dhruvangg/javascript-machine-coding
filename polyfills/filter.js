const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Array.prototype.myFilter = function (cb) {
    let temp = []
    for (let i = 0; i < this.length; i++) {
        const el = this[i];
        if (cb(el, i, this)) {
            temp.push(el)
        }
    }
    return temp
}

console.log(arr.myFilter(el => el % 3 === 0));


const obj = [
    { name: 'A', gender: 'male' },
    { name: 'B', gender: 'female' },
    { name: 'C', gender: 'male' },
    { name: 'D', gender: 'female' },
    { name: 'E', gender: 'male' },
    { name: 'F', gender: 'male' },
]

console.log(obj.myFilter(el => el.gender === 'male'))