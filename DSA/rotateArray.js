var rotate = function(nums, k) {
    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(nums[i]);   
    }
};

console.log(rotate([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotate([-1,-100,3,99], 2)); // [3,99,-1,-100]